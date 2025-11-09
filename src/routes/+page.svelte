<script lang="ts">
	import gsap from 'gsap';
	import { SplitText } from 'gsap/all';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(SplitText);
		let heading = SplitText.create('h1', { type: 'words, chars', mask: 'words' });
		gsap.from(heading.chars, {
			duration: 0.65,
			y: -100,
			autoAlpha: 0,
			stagger: 0.05
		});

		let text = SplitText.create('p', { type: 'words', mask: 'words' });
		gsap.from(text.words, {
			delay: 0.5,
			duration: 0.65,
			y: 100,
			autoAlpha: 0,
			stagger: 0.05
		});

		let span = SplitText.create('span', { type: 'words', mask: 'words' });
		gsap.from(span.words, {
			delay: 1.75,
			duration: 0.75,
			y: 100,
			autoAlpha: 0,
			stagger: 0.05
		});
	});
</script>

<section class="one">
	<h1>Hello!</h1>
	<p>
		I'm Lisa, an aspiring frontend developer
		<br />
		<span>and web hobbyist!</span>
	</p>
</section>

<section class="two"></section>
<section class="three"></section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding: 2.5rem 1.5rem;
		height: 80vh;
	}

	h1 {
		font-weight: 900;
	}

	p {
		font-weight: 600;
		letter-spacing: -0.7px;
		position: relative;
		z-index: 10;
	}
</style>
