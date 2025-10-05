<script>
	let { data } = $props();

	console.log(data.books);

	let filteredBooks = $state(data.books);

	function showStatus(status) {
		filteredBooks = data.books.filter((book) => book.Read_Status === status);
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
	
	{#if data.error}
		<p>Error loading books: {data.error}</p>
	{:else if filteredBooks?.length === 0}
		<p>No books found</p>
	{:else}
		<div class="books">
			{#each filteredBooks as book}
				<!-- <div class="book-card">
					<img src={book.coverUrl} alt="{book.Title} cover" height="300" />
					<h2>{book.Title}</h2>
					<p>by {book.Author}</p>
					<p>Rating: {book.Rating || 'Not rated'}</p>
					<p>status: {book.Read_Status}</p>
				</div> -->
				<div class="book-card">
					<h2>{book.Title}</h2>
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

	.filter-section {
		display: flex;
		gap: 1rem;

		button {
			cursor: pointer;
			padding: 0.5rem;
			border: none;
			border-radius: 4px;

			&:hover {
				background-color: #ddd;
			}
		}
	}

	.books {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1.5rem;
		width: 100%;
	}

	.book-card {
		border: 1px solid #ddd;
		padding: 1rem;
		border-radius: 8px;
	}
</style>
