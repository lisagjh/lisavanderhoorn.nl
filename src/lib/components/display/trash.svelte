<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas;
	let h1El;
	let pEl;

	onMount(() => {
		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
		renderer.setSize(window.innerWidth, window.innerHeight);

		const scene = new THREE.Scene();
		scene.background = new THREE.Color('#b84b24');

		const camera = new THREE.PerspectiveCamera(
			38,
			window.innerWidth / window.innerHeight,
			0.1,
			100
		);
		camera.position.set(0, 0.5, 3);

		// Create the tube geometry
		const radius = 0.65;
		const height = 0.15;
		const radialSegments = 120; // more = smoother
		const heightSegments = 1;

		const cylinder = new THREE.CylinderGeometry(
			radius,
			radius,
			height,
			radialSegments,
			heightSegments,
			true
		);

		// Create a texture from the h1 element
		const h1Texture = new THREE.CanvasTexture(createTextCanvas(h1El.innerText));
		h1Texture.wrapS = THREE.RepeatWrapping;
		h1Texture.repeat.set(7, 1);

		const material = new THREE.MeshBasicMaterial({
			map: h1Texture,
			side: THREE.DoubleSide
		});

		const tube = new THREE.Mesh(cylinder, material);
		scene.add(tube);

		// Animation loop
		const animate = () => {
			tube.rotation.y -= 0.005; // Rotate the tube
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		};
		animate();

		// Resize handling
		window.addEventListener('resize', () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		});
	});

	// Helper function to create a canvas texture from text
	function createTextCanvas(text: string): HTMLCanvasElement {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d')!;
		canvas.width = 512;
		canvas.height = 256;

		// Draw the text
		context.fillStyle = '#ffffff';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = '#000000';
		context.font = '32px monospace';
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText(text, canvas.width / 2, canvas.height / 2);

		return canvas;
	}
</script>

<h1 bind:this={h1El}>
	<span>Lisa van der Hoorn</span>
	<span>✨</span>
</h1>
<p bind:this={pEl}>Frontend Developer</p>
<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
