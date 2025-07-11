<script>
	import { onMount, tick } from 'svelte';
	import { gsap } from 'gsap';
	import SplitText from 'gsap/SplitText';
	import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
	import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
	import Circle from '../../svgs/circle.svelte';

	onMount(() => {
		const background = document.querySelector('.background');

		if (background) {
			document.body.style.overflow = 'hidden';
		}
	});

	onMount(async () => {
		await tick();
		await document.fonts.ready;

		gsap.registerPlugin(SplitText);
		gsap.registerPlugin(ScrambleTextPlugin);
		gsap.registerPlugin(DrawSVGPlugin);

		animate();
	});

	function animate() {
		const tl = gsap.timeline();

		tl.fromTo(
			'.text-wrapper.one',
			{ x: 20, opacity: 0 },
			{ x: 0, opacity: 1, stagger: 0.05, duration: 0.5 }
		)
			.fromTo(
				'.text-wrapper.two',
				{ x: -20, opacity: 0 },
				{ x: 0, opacity: 1, stagger: 0.05, duration: 0.5 }
			)
			.fromTo(
				'.text-wrapper.three',
				{ x: 20, opacity: 0 },
				{ x: 0, opacity: 1, stagger: 0.05, duration: 0.5 }
			);
	}
</script>

<div class="background">
	<div class="text-wrapper one"><h1>Lisa</h1></div>
	<div class="text-wrapper two"><h1>van der Hoorn</h1></div>
	<div class="text-wrapper three"><h1>Frontend Developer</h1></div>
</div>

<style>
	.background {
		min-width: 100vw;
		width: 100%;
		min-height: 100vh;
		height: 100%;
		background-color: var(--dark);

		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.text-wrapper {
		width: fit-content;
		display: flex;
		padding: 2rem;
		border-radius: 4rem;
		background-color: var(--white);
		overflow: hidden;
	}

	h1 {
		width: 100%;
		text-wrap: nowrap;
		font-size: 6rem;
	}
</style>
