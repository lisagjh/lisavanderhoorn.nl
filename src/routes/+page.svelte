<script>
	let { data } = $props();

	console.log(data.books);

	let filteredBooks = $state(data.books);

	function showStatus(status) {
		filteredBooks = data.books.filter((book) => book.Read_Status === status);
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
</script>

<section class="bookshelf-section">
	<h1>My Bookshelf</h1>

	<section class="buttons">
		<button class="currently" onclick={() => showStatus('currently-reading')}>
			Currently Reading
			<span>
				({data.books.filter((book) => book.Read_Status === 'currently-reading').length})
			</span>
		</button>

		<button class="to-read" onclick={() => showStatus('to-read')}>
			To Read
			<span>
				({data.books.filter((book) => book.Read_Status === 'to-read').length})
			</span>
		</button>

		<button class="read" onclick={() => showStatus('read')}>
			Read
			<span>
				({data.books.filter((book) => book.Read_Status === 'read').length})
			</span>
		</button>

		{#if filteredBooks.length !== data.books.length}
			<button class="all" onclick={() => (filteredBooks = data.books)}>
				All
				<span>({data.books.length})</span>
			</button>
		{/if}
	</section>

	<!-- <div class="filter-section">
		<button onclick={() => (filteredBooks = data.books)}>all</button>
		<button onclick={() => showStatus('read')}>read</button>
		<button onclick={() => showStatus('to-read')}>want to read</button>
		<button onclick={() => showStatus('did-not-finish')}>did not finish</button>
	</div> -->

	<!-- <div class="sort-section">
		<button onclick={() => filteredBooks.sort((a, b) => a.Title.localeCompare(b.Title))}
			>sort by title</button
		>
		<button onclick={() => filteredBooks.sort((a, b) => b.Star_Rating - a.Star_Rating)}
			>sort by rating</button
		>
		<button onclick={() => sortByDate()}>sort by date read</button>
	</div> -->

	{#if data.error}
		<p>Error loading books: {data.error}</p>
	{:else if filteredBooks?.length === 0}
		<p>No books found</p>
	{:else}
		<div class="books-overview">
			<p>Total books: {filteredBooks.length}</p>
			{#each filteredBooks as book}
				<article class="book">
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
</section>

<style>
	.bookshelf-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.buttons {
		display: flex;
		gap: 1rem;

		& button {
			padding: 0.5rem 1rem;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			font-size: 1rem;

			&:hover {
				scale: 1.025;
				translate: 0 -2px;
			}

			&:active {
				scale: 0.975;
				translate: 0 1px;
			}
		}
	}
</style>
