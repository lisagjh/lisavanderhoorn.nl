<footer id="contact">
	<div class="wrapper">
		<h4 class="pill">Say Hello!</h4>
		<ul>
			<li><a href="mailto:lisagjhoorn@outlook.com">mail</a></li>
			<li><a href="https://bsky.app/profile/lisah.dev">bluesky</a></li>
			<li><a href="https://github.com/lisagjh">github</a></li>
			<li><a href="https://linkedin.com/in/lisavanderhoorn">linkedin</a></li>
		</ul>
	</div>

	<p class="last">built with 💖</p>
</footer>

<style>
	footer {
		min-width: 100vw;
		min-height: 85vh;
		height: 100%;
		background-color: var(--primary-dark);
		color: var(--off-white);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		gap: 4rem;
		margin-top: 8rem;
	}

	h4 {
		font-size: 3rem;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		max-width: 45rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
		background-color: var(--off-white);
		width: 100%;
		border-radius: 20px;
	}

	li {
		margin-left: 1rem;
	}

	li::marker {
		font-size: 1.2rem;
		color: var(--primary);
	}

	p.last {
		color: #fff;
		background-color: var(--primary-darker);
		font-size: 0.85rem;
		font-weight: lighter;
		padding: 0.75rem;
		border-radius: 0.25rem;
	}
</style>
