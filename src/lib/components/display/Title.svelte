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

		// animate the text out on top and in from bottom, repeat 3 times
		// for (let i = 0; i < 3; i++) {
		// 	tl.to(
		// 		subSplit.chars,
		// 		{
		// 			y: '-100%',
		// 			autoAlpha: 0,
		// 			stagger: 0.03,
		// 			duration: 0.4,
		// 			ease: 'power2.inOut'
		// 		},
		// 		i > 0 ? '+=0.2' : undefined
		// 	) // pauze na eerste loop
		// 		.set(subSplit.chars, {
		// 			y: '100%'
		// 		})
		// 		.to(subSplit.chars, {
		// 			y: '0%',
		// 			autoAlpha: 1,
		// 			duration: 0.4,
		// 			stagger: 0.03,
		// 			ease: 'power2.inOut'
		// 		});
		// }

		subSplit.chars.forEach((char, index) => {
			const charTimeline = gsap.timeline({
				repeat: 2,
				delay: index * 0.03 // stagger effect
			});

			charTimeline
				.set(char, {
					y: '100%'
				})
				.to(char, {
					y: '-100%',
					autoAlpha: 0,
					duration: 0.8,
					ease: 'power2.inOut'
				})
				.set(char, {
					y: '100%'
				})
				.to(char, {
					y: '-100%',
					autoAlpha: 1,
					duration: 0.8,
					ease: 'power2.inOut'
				});
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
		text-box: trim-both cap alphabetic;
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
