<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let show = true;

	onMount(() => {
		setTimeout(() => {
			gsap.to('.bg', {
				y: '100%',
				duration: 1.2,
				ease: 'power4.inOut',
				stagger: 0.1
			});
			gsap.to('.text span', {
				y: '100%',
				duration: 0.5,
				ease: 'power4.inOut',
				delay: 0.1,
				stagger: 0.1,
				opacity: 0
			});
		}, 500);
	});
</script>

{#if show}
	<p class="text"><span>Lisa</span> <span>van</span> <span>der</span> <span>Hoorn</span></p>

	<section class="wrapper">
		<div class="bg"></div>
		<div class="bg"></div>
		<div class="bg"></div>
		<div class="bg"></div>
		<div class="bg"></div>
		<div class="bg"></div>
		<div class="bg"></div>
	</section>
{/if}

<style>
	.wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		z-index: 1000;
	}

	.bg {
		background: var(--bg-muted);
		width: 100%;
		height: 100vh;
	}

	.text {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--text-primary);
		font-weight: bold;
		z-index: 1001;

		& span {
			display: inline-block;
		}
	}
</style>
