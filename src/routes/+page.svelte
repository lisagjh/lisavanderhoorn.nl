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

	<div class="filter-section">
		<button onclick={() => (filteredBooks = data.books)}>all</button>
		<button onclick={() => showStatus('read')}>read</button>
		<button onclick={() => showStatus('to-read')}>want to read</button>
		<button onclick={() => showStatus('did-not-finish')}>did not finish</button>
	</div>

	<div class="sort-section">
		<button onclick={() => filteredBooks.sort((a, b) => a.Title.localeCompare(b.Title))}
			>sort by title</button
		>
		<button onclick={() => filteredBooks.sort((a, b) => b.Star_Rating - a.Star_Rating)}
			>sort by rating</button
		>
		<button onclick={() => sortByDate()}>sort by date read</button>
	</div>

	{#if data.error}
		<p>Error loading books: {data.error}</p>
	{:else if filteredBooks?.length === 0}
		<p>No books found</p>
	{:else}
		<div class="books-list">
			{#each filteredBooks as book}
				<div class="book-card">
					<h2>{book.Title}</h2>
					<img src={book.coverUrl} alt="{book.Title} cover" height="250" />
					<p>by {book.Authors}</p>
					{#if book.Dates_Read != ''}
						<p>Rating: {book.Star_Rating || 'Not rated'}</p>
					{/if}
					<p>status: {book.Read_Status}</p>
				</div>
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

	.books-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.book-card {
		border: 1px solid #ccc;
		padding: 1rem;
		text-align: center;
	}
</style>
