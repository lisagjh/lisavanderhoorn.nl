<script>
	import { cubicOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { fade, fly } from 'svelte/transition';

	let { data } = $props();

	console.log(data.books);

	let filteredBooks = $state(data.books);

	function showStatus(status) {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				filteredBooks = data.books.filter((book) => book.Read_Status === status);
			});
		} else {
			filteredBooks = data.books.filter((book) => book.Read_Status === status);
		}
	}

	function sortByDate() {
		filteredBooks = filteredBooks
			// only include books that have been read and have a date
			.filter(
				(book) => book.Read_Status === 'read' && book.Dates_Read && book.Dates_Read.includes('-')
			)
			// sort by date
			.sort((a, b) => {
				const [, endA] = a.Dates_Read.split('-');
				const [, endB] = b.Dates_Read.split('-');

				const dateA = new Date(endA.replaceAll('/', '-'));
				const dateB = new Date(endB.replaceAll('/', '-'));

				return dateB - dateA; // newest first
			});
	}

	// custom transition for all button
	function fadeFly(node, { duration = 150, y = 10 } = {}) {
		return {
			duration,
			css: (t) => {
				const opacity = t;
				const transform = `translateY(${(1 - t) * y}px)`;
				return `opacity: ${opacity}; transform: ${transform};`;
			}
		};
	}
</script>

<a href="/hello">hello</a>

<div class="bookshelf-section" style="view-transition-name: bookshelf">
	<section class="buttons">
		<button class="currently" onclick={() => showStatus('currently-reading')}>
			<span>
				{data.books.filter((book) => book.Read_Status === 'currently-reading').length}
			</span>
			Currently Reading
		</button>

		<button class="to-read" onclick={() => showStatus('to-read')}>
			<span>
				{data.books.filter((book) => book.Read_Status === 'to-read').length}
			</span>
			To Read
		</button>

		<button class="read" onclick={() => showStatus('read')}>
			<span>
				{data.books.filter((book) => book.Read_Status === 'read').length}
			</span>
			Read
		</button>

		{#if filteredBooks.length !== data.books.length}
			<button class="all" onclick={() => (filteredBooks = data.books)} transition:fadeFly>
				<span>{data.books.length}</span>
				All
			</button>
		{/if}
	</section>

	{#if data.error}
		<p>Error loading books: {data.error}</p>
	{:else if filteredBooks?.length === 0}
		<p>No books found</p>
	{:else}
		<div class="books-overview">
			<p>Total books: {filteredBooks.length}</p>
			{#each filteredBooks as book}
				<article
					class="book"
					style="view-transition-name: {book.ISBN_UID
						? `book-${book.ISBN_UID}`
						: `book-${book.Title.replace(/\s/g, '_')}`}"
				>
					<h2>{book.Title}</h2>
					<img src={book.coverUrl} alt="{book.Title} cover" height="250" />
					<p><strong>Author:</strong> {book.Authors}</p>
					<p><strong>Status:</strong> {book.Read_Status}</p>
					{#if book.Star_Rating}
						<p><strong>Rating:</strong> {book.Star_Rating} / 5</p>
					{/if}
					{#if book.Dates_Read}
						<p><strong>Dates Read:</strong> {book.Dates_Read}</p>
					{/if}
					{#if book.Review}
						<p><strong>Review:</strong> {book.Review}</p>
					{/if}
				</article>
			{/each}
		</div>
	{/if}
</div>

<style>
	.bookshelf-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		flex: 2;
		gap: 1rem;

		& button {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 0.5rem;
			min-width: 9rem;
			background-color: var(--bg);
			color: var(--text-light);
			padding: 1rem;
			border: 1px solid var(--border-color);
			border-radius: 0.5rem;
			cursor: pointer;
			font-size: 1rem;

			& span {
				font-weight: bold;
				font-size: 1.5rem;
				color: var(--primary);
			}

			&:hover {
				scale: 1.025;
				translate: 0 -2px;
			}

			&:active {
				scale: 0.975;
				translate: 0 1px;
			}
		}

		& button.all {
			background-color: var(--warning-bg);
			color: var(--warning);
			border-color: var(--warning-border);
			min-width: 5rem;

			& span {
				color: var(--warning);
			}
		}

		& button:nth-of-type(2) span {
			color: var(--secondary);
		}

		& button:nth-of-type(3) span {
			color: var(--tertiary);
		}
	}
</style>
