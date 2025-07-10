<script>
	const quotes = [
		{
			author: 'Ischa Gast',
			quote: 'Accessibility is love for others'
		},
		{
			author: 'Robert R. Coveyou',
			quote: 'The generation of random numbers is too important to be left to chance'
		}
	];

	const randomIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[randomIndex];
</script>

<section class="about" id="about">
	<div>
		<h2 class="pill">About Me</h2>
		<p>
			Hi! I'm Lisa, a frontend developer who recently graduated from
			<strong>the</strong> frontend degree in the Netherlands,
			<a href="https://fdnd.nl/">FDND</a>
		</p>
	</div>

	<div class="more">
		<h2 class="pill">More About Me</h2>
		<p>
			I enjoy building accessible and user-friendly websites. I have experience with writing
			semantic HTML, modern CSS, JS, and a few JS frameworks.
		</p>
	</div>

	{#if quote}
		<div class="quote">
			<blockquote>
				<p>{quote.quote}</p>
				<cite>{quote.author}</cite>
			</blockquote>
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
		width: 100%;
		max-width: 65rem;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		padding: 1.5rem;
		border-radius: 12px;
		background-color: var(--secondary-light);
	}

	.more {
		background-color: var(--primary-light);
	}

	span {
		font-weight: 500;
	}

	a.pill {
		align-self: flex-end;
	}

	.quote {
		background-color: var(--tertiary-lighter);
		align-items: center;
		container-type: inline-size;
		container-name: quote;
		align-self: start;
		border-radius: 0 12px 12px 0;
		width: 100%;
		border-left: 5px solid var(--tertiary);
	}

	.quote blockquote {
		border: none;
		padding: 3% 5%;
	}

	.quote blockquote::before {
		content: open-quote;
		left: -0.5rem;
		font-size: 2.5rem;
		color: var(--tertiary-dark);
	}

	.quote blockquote p {
		font-family: var(--heading-font);
		font-size: 1.25rem;
		font-style: normal;
	}

	.quote blockquote cite {
		font-size: 0.9rem;
	}

	@container quote (width >= 350px) {
		.quote blockquote p {
			font-size: 1.8rem;
		}

		.quote blockquote cite {
			font-size: 1rem;
		}
	}

	@media (width >= 34.5rem) {
		section {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 2rem;
			padding: 2rem;
			width: 100%;
			max-width: 65rem;
			min-height: 13rem;
		}

		div {
			grid-column: 1 / 3;
		}

		.more {
			grid-column: 2 / 4;
		}

		.quote {
			grid-column: 1 / 4;
			width: 70%;
			align-self: center;
			justify-self: center;
			min-width: 40vw;
			max-width: 55vw;
		}
	}

	@supports (animation-timeline: view()) {
		div {
			animation-timeline: view();
			animation-name: fade-in-out;
			animation-fill-mode: both;
			animation-range: entry 0% exit 100%;
		}

		@keyframes fade-in-out {
			0% {
				opacity: 0;
				transform: translateY(10rem);
			}
			25% {
				opacity: 1;
				transform: translateY(0);
			}
			90% {
				opacity: 1;
				scale: 1;
				transform: translateY(0);
			}
			100% {
				opacity: 0;
				scale: 0.8;
				transform: translateY(-10rem);
			}
		}
	}
</style>
