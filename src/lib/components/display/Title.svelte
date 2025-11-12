<script>
	import gsap from 'gsap';
	import { ScrollTrigger, SplitText } from 'gsap/all';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, SplitText);

		const tl = gsap.timeline();

		const lastName = document.querySelector('.last');
		const firstName = document.querySelector('.first');

		const subHeading = document.querySelector('.subheading');
		const subSplit = new SplitText(subHeading, { type: 'chars', mask: 'chars' });

		gsap.to(lastName, {
			x: '-115%',
			ease: 'back.inOut(1.7)',
			duration: 1,
			scrollTrigger: {
				trigger: '.wrapper',
				start: 'top top',
				end: 'bottom 50%',
				scrub: true
			}
		});

		gsap.to(firstName, {
			x: '15%',
			ease: 'back.inOut(1.7)',
			duration: 1,
			scrollTrigger: {
				trigger: '.wrapper',
				start: 'top top',
				end: 'bottom 50%',
				scrub: true
			}
		});

		gsap.to(subSplit.chars, {
			y: '-75%',
			autoAlpha: 0,
			stagger: 1,
			duration: 1,
			ease: 'power2.inOut',
			scrollTrigger: {
				trigger: '.wrapper',
				start: 'center 10%',
				end: 'bottom 40%',
				scrub: true
				// markers: true
			}
		});
	});
</script>

<div class="wrapper">
	<h1 class="first">Lisa</h1>
	<h1 class="last">van der Hoorn</h1>
	<p class="subheading">Frontend Developer</p>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
		height: 100vh;
		width: 100vw;
		overflow: visible;
	}

	h1 {
		font-family: var(--heading-font);
		font-size: 10rem;
		text-transform: uppercase;
		text-wrap: nowrap;
		letter-spacing: -5px;
	}

	h1.first {
		font-size: 15rem;
	}

	p {
		/* font-family: var(--heading-font); */
		font-weight: bold;
		font-size: 2rem;
		color: var(--color-accent);
		align-self: center;
		text-transform: lowercase;
	}
</style>
