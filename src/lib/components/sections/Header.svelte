<script>
	import { onMount } from 'svelte';

	let currentPath;

	onMount(() => {
		currentPath = window.location.pathname;

		document.querySelectorAll('a').forEach((link) => {
			link.addEventListener('mouseover', () => {
				link.classList.add('hovered');
			});
		});
	});
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/" class={currentPath === '/' ? 'active home' : 'home'} aria-label="home">
					Home
				</a>
			</li>
			<li>
				<a href="/about" class={currentPath === '/about' ? 'active about' : 'about'} aria-label="about">
					About
				</a>
			</li>
			<li>
				<a href="/blog" class={currentPath === '/blog' ? 'active blog' : 'blog'} aria-label="blog">
					Blog
				</a>
			</li>
			<li>
				<a href="/work" class={currentPath === '/work' ? 'active work' : 'work'} aria-label="work">
					Work
				</a>
			</li>
		</ul>
	</nav>
</header>

<style scoped>
	header {
		position: sticky;
		top: 0;
		width: 100%;
		max-width: 67rem;
		padding: 1rem 2rem;
		z-index: 50;
		view-transition-name: header;
	}

	nav {
		display: flex;
		justify-self: center;
		width: 100%;
		border-radius: 2rem;

		background-color: var(--off-white);
		display: flex;
		justify-content: space-between;
		align-items: center;
		justify-self: center;
		justify-content: center;
		box-shadow:
			0 4px 4px var(--red-shadow),
			0 2px 8px var(--red-shadow);
	}

	ul {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		padding: 1rem 2rem;
		width: 100%;
	}

	li {
		display: flex;
		list-style: '';
	}

	a {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		height: 100%;
		padding: 0.5rem;
		transition: 0.25s ease-in-out;
		border-radius: 6px 6px 0 0;
		transition: 0.25s ease-in-out;
	}

	a:hover {
		background-color: var(--blue-lighter);
	}

	a.active {
		color: var(--blue);
		font-weight: bold;
		border-radius: 6px 6px 0 0;
		z-index: 50;
	}

	a.active::before {
		content: '';
		position: absolute;
		bottom: -0.1rem;
		left: 0;
		height: 2px;
		width: 100%;
		background-color: var(--blue);
		opacity: 1 !important;
		animation: none;
		view-transition-name: active-link;
	}

	a.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--blue-light);
		height: 100%;
		width: 100%;
		border-radius: 2px 2px 0 0;
		opacity: 50%;
		z-index: -1;
		view-transition-name: active-bg;
		transform-origin: bottom center;
		animation: active-bg 0.25s ease-in-out forwards;
	}

	@keyframes active-bg {
		from {
			scale: 0.7;
		}
		to {
			scale: 1;
		}
	}

	a::before {
		justify-self: center;
		align-self: center;
		content: '';
		position: absolute;
		bottom: -0.1rem;
		left: 0;
		height: 2px;
		width: 0%;
		background-color: var(--blue);
		opacity: 0;
		transform-origin: center;
		transition: 0.25s ease-in-out;
	}

	a:hover:not(.active)::before {
		width: 100%;
		opacity: 1;
		animation: show-link 0.25s ease-in-out forwards;
	}

	a.active::before {
		content: '';
		position: absolute;
		bottom: -0.1rem;
		left: 0;
		height: 2px;
		width: 100% !important;
		background-color: var(--blue);
		opacity: 1 !important;
		animation: none !important;
	}

	@keyframes show-link {
		from {
			opacity: 0;
			width: 0%;
		}
		to {
			opacity: 1;
			width: 100%;
		}
	}

	@keyframes hide-link {
		from {
			opacity: 1;
			width: 100%;
		}
		to {
			opacity: 0;
			width: 0%;
		}
	}

	a.home svg {
		transition: rotate 0.75s ease-in-out;
	}

	a.home:hover svg {
		rotate: -360deg;
	}
</style>
