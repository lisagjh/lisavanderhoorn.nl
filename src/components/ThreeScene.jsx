import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ReflectiveObject() {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const lastInteractionRef = useRef(0);
  const ripplePosRef = useRef(new THREE.Vector3(0, 0, 0));
  const prevRipplePosRef = useRef(new THREE.Vector3(0, 0, 0));
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // === Lighting ===
    scene.add(new THREE.AmbientLight(0xffffff, 0.1));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // === Shaders ===
    const vertexShader = `
    uniform float uTime;
uniform float uLastRippleTime;
uniform vec3 uRipplePos;
uniform float uRippleStrength;
uniform float uRippleSpeed;
uniform float uRippleSize;
uniform float uViscosity;

varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  float dist = distance(position, uRipplePos);
  float timeSinceRipple = uTime - uLastRippleTime;
  
  // More fluid-like fade with easing
  float fade = smoothstep(0.0, 1.0, 1.0 - timeSinceRipple / 3.0);
  
  // Add viscosity effect - slower wave propagation
  float viscosityEffect = 1.0 - uViscosity;
  float ripple = sin(dist * uRippleSize * viscosityEffect - uTime * uRippleSpeed * 0.5) * 
                 uRippleStrength * 
                 exp(-dist * uRippleSize * 0.5) * 
                 fade;
  
  // Add secondary ripple for more complex waves
  float ripple2 = cos(dist * uRippleSize * 0.7 * viscosityEffect - uTime * uRippleSpeed * 0.7) * 
                  uRippleStrength * 0.3 * 
                  exp(-dist * uRippleSize * 0.3) * 
                  fade;
  
  // Combine ripples with normal displacement
  vec3 newPosition = position + normal * (ripple + ripple2) * 0.5;
  
  // Add subtle global undulation
  float globalWave = sin(uTime * 0.3 + position.x * 0.5 + position.y * 0.7 + position.z * 0.3) * 0.02;
  newPosition += normal * globalWave;
  
  vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
  vViewPosition = -mvPosition.xyz;
  vNormal = normalMatrix * normal;
  
  gl_Position = projectionMatrix * mvPosition;
}
    `;

    const fragmentShader = `
     uniform sampler2D uMatcap;
uniform float uTime;
uniform float uWetness;

varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vec3 viewDir = normalize(vViewPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, vNormal), dot(y, vNormal)) * 0.5 + 0.5;
  
  // Sample matcap texture
  vec3 color = texture2D(uMatcap, uv).rgb;
  
  // Add specular highlights for wet look
  float spec = pow(max(0.0, dot(viewDir, reflect(viewDir, vNormal))), 32.0);
  color += vec3(spec) * uWetness;
  
  // Subtle color variation over time
  float hueShift = sin(uTime * 0.2) * 0.05;
  color.r += hueShift * 0.2;
  color.b -= hueShift * 0.1;
  
  gl_FragColor = vec4(color, 1.0);
}
    `;

    // Initialize uniforms with significantly reduced values for the initial state
    const uniforms = {
      uTime: { value: 0 },
      uLastRippleTime: { value: 0 },
      uRipplePos: { value: ripplePosRef.current },
      uMatcap: { value: null },
      uRippleStrength: { value: 0.05 },
      uRippleSpeed: { value: 1.5 },
      uRippleSize: { value: 8.0 },
      uViscosity: { value: 0.3 }, // Higher = more viscous/thick liquid
      uWetness: { value: 0.1 }, // Controls specular highlights
    };

    // Load texture before creating material
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      "/light.jpg",
      (matcapTexture) => {
        // Modern Three.js uses .colorSpace instead of .encoding
        if (THREE.ColorManagement) {
          matcapTexture.colorSpace = THREE.SRGBColorSpace;
        } else {
          // Fallback for older Three.js versions
          matcapTexture.encoding = THREE.sRGBEncoding;
        }

        uniforms.uMatcap.value = matcapTexture;

        // Create geometry and material after texture is loaded
        const geometry = new THREE.TorusKnotGeometry(1, 0.4, 96, 16);
        const material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms,
          transparent: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        meshRef.current = mesh;

        // Start animation loop after mesh is created
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading matcap texture:", error);
      }
    );

    // === Mouse Interaction ===
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      if (meshRef.current) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(meshRef.current);

        if (intersects.length > 0) {
          // Store previous position before updating
          prevRipplePosRef.current.copy(ripplePosRef.current);
          ripplePosRef.current.lerp(intersects[0].point, 0.5);
          lastInteractionRef.current = Date.now();
          isHoveringRef.current = true;

          // Increase ripple values for interactive state
          uniforms.uRippleStrength.value = THREE.MathUtils.lerp(
            uniforms.uRippleStrength.value,
            0.8,
            0.1
          );

          // Speed up ripples during interaction
          uniforms.uRippleSpeed.value = THREE.MathUtils.lerp(
            uniforms.uRippleSpeed.value,
            3.0,
            0.1
          );

          // Increase ripple definition during interaction
          uniforms.uRippleSize.value = THREE.MathUtils.lerp(
            uniforms.uRippleSize.value,
            15.0,
            0.1
          );

          uniforms.uLastRippleTime.value = clock.getElapsedTime(); // store time of interaction
        } else if (isHoveringRef.current) {
          // Just left the object
          isHoveringRef.current = false;
        }
      }
    }

    // Add mouseout handler for the entire window
    function onMouseOut() {
      isHoveringRef.current = false;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);

    // === Animation Loop ===
    const clock = new THREE.Clock();
    const animate = () => {
      if (!meshRef.current) return;

      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      uniforms.uTime.value = elapsedTime;

      // Add subtle uniform changes for more organic feel
      uniforms.uRippleSize.value = 8.0 + Math.sin(elapsedTime * 0.3) * 0.5;
      uniforms.uViscosity.value = 0.3 + Math.sin(elapsedTime * 0.2) * 0.05;
      uniforms.uWetness.value = 0.7 + Math.sin(elapsedTime * 0.5) * 0.1;

      // Handle ripple parameters changes
      const timeSinceInteraction = Date.now() - lastInteractionRef.current;

      if (!isHoveringRef.current && timeSinceInteraction > 500) {
        // Slower transitions when not interacting
        uniforms.uRippleStrength.value = THREE.MathUtils.lerp(
          uniforms.uRippleStrength.value,
          0.05,
          0.01
        );
        uniforms.uRippleSpeed.value = THREE.MathUtils.lerp(
          uniforms.uRippleSpeed.value,
          1.5,
          0.01
        );
      } else if (isHoveringRef.current) {
        // More dramatic response when interacting
        uniforms.uRippleStrength.value = THREE.MathUtils.lerp(
          uniforms.uRippleStrength.value,
          0.5,
          0.1
        );
        uniforms.uRippleSpeed.value = THREE.MathUtils.lerp(
          uniforms.uRippleSpeed.value,
          4.0,
          0.1
        );
        uniforms.uViscosity.value = THREE.MathUtils.lerp(
          uniforms.uViscosity.value,
          0.1, // Less viscous when interacted with
          0.1
        );
      }

      uniforms.uRipplePos.value.copy(ripplePosRef.current);

      // More fluid rotation
      meshRef.current.rotation.x += 0.001 * Math.sin(elapsedTime * 0.2);
      meshRef.current.rotation.y += 0.001 * Math.cos(elapsedTime * 0.15);

      renderer.render(scene, camera);
    };

    // === Resize Handling ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) rendererRef.current.dispose();
      if (meshRef.current) {
        if (meshRef.current.geometry) meshRef.current.geometry.dispose();
        if (meshRef.current.material) meshRef.current.material.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
