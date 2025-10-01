<script>
	let { data } = $props();

	console.log('page', data.books);
</script>

<h1>My Bookshelf</h1>

{#if data.error}
	<p>Error loading books: {data.error}</p>
{:else if data.books?.length === 0}
	<p>No books found</p>
{:else}
	<div class="books">
		{#each data.books as book}
			<div class="book-card">
				<img src={book.coverUrl} alt="{book.Title} cover" height="300"/>

				<h2>{book.Title}</h2>
				<p>by {book.Author}</p>
				<p>Rating: {book.Rating || 'Not rated'}</p>
			</div>
		{/each}
	</div>
{/if}

<style>
	.books {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		width: 100%;
	}

	.book-card {
		border: 1px solid #ddd;
		padding: 1rem;
		border-radius: 8px;

		img {
			width: 100%;
		}
	}
</style>
