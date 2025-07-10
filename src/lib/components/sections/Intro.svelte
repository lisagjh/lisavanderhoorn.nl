<script>
	import { onMount, tick } from 'svelte';
	import { gsap } from 'gsap';
	import SplitText from 'gsap/SplitText';
	import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
	import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
	import Circle from '../../svgs/circle.svelte';

	onMount(async () => {
		await tick();
		await document.fonts.ready;

		gsap.registerPlugin(SplitText);
		gsap.registerPlugin(ScrambleTextPlugin);
		gsap.registerPlugin(DrawSVGPlugin);

		showTitle();
	});

	function showTitle() {
		const split = SplitText.create('.intro h1', { type: 'chars', mask: 'chars' });
		const subTitle = SplitText.create('.subtitle', { type: 'chars', mask: 'chars' });

		const tl = gsap.timeline();

		tl.fromTo(
			split.chars,
			{ x: 20, opacity: 0 },
			{ x: 0, opacity: 1, stagger: 0.05, duration: 0.5 }
		);

		tl.fromTo(
			subTitle.chars,
			{ y: 20, opacity: 0 },
			{ y: 0, opacity: 1, stagger: 0.015, duration: 0.25 }
		);
		tl.to('span.word', {
			duration: 1,
			delay: 1,
			scrambleText: {
				text: 'nerd',
				chars: 'developer',
				revealDelay: 0.5,
				speed: 0.3,
				newClass: 'myClass'
			}
		});
		tl.to('span.word', {
			duration: 1,
			delay: 1,
			scrambleText: {
				text: 'developer',
				chars: 'nerd',
				revealDelay: 0.5,
				speed: 0.3,
				newClass: 'myClass'
			}
		});

		tl.fromTo(
			'svg path',
			{ drawSVG: '0%' },
			{ drawSVG: '100%', duration: 1, delay: 0.25, ease: 'power4.in' }
		);
	}
</script>

<section class="intro">
	<h1>Lisa van der Hoorn</h1>
	<div class="subtitle-wrapper">
		<p class="subtitle">frontend <span class="word">developer</span></p>
		<span class="underline">
			<svg
				width="108"
				height="14"
				viewBox="0 0 108 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1.5 1.42955H27.75H54H80.25C80.25 1.42955 106.5 -0.0152052 106.5 2.39452C106.5 6.2511 58.1447 5.4069 58.1447 5.4069C58.1447 5.4069 8.29412 5.52742 8.29412 7.69688C8.29412 9.86634 41.1053 9.38424 41.1053 9.38424C41.1053 9.38424 72.4211 7.69688 72.4211 9.38424C72.4211 11.0716 51.2368 13 51.2368 13"
					stroke="#F4C242"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</span>
	</div>
</section>

<style>
	section.intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 80vh;
	}

	h1 {
		color: var(--primary);
		font-size: 3rem;
	}

	.subtitle-wrapper {
		display: flex;
		flex-direction: column;
		position: relative;
		width: fit-content;

		& p {
			color: var(--secondary);
		}

		& span.underline {
			align-self: center;
            margin-top: -.65rem;
            z-index: -10;
		}
	}

	@media (width < 320px) {
		h1 {
			font-size: 2.5rem;
		}
	}

	@media (width >= 28rem) {
		h1 {
			font-size: 3.5rem;
		}
	}

	@supports (animation-timeline: view()) {
		section.intro {
			animation-timeline: view();
			animation-name: scale-out;
			animation-fill-mode: forwards;
			animation-range: 60% 100%;
		}

		@keyframes scale-out {
			from {
				scale: 1;
				opacity: 1;
				transform: translateY(0);
			}
			to {
				scale: 0.85;
				opacity: 0;
				transform: translateY(75%);
			}
		}
	}
</style>
