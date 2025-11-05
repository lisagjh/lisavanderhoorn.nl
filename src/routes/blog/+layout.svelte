<script lang="ts">
	export let data: { metadata?: any };
	export let metadata = data?.metadata || {};
  </script>
  
  <div class="markdown-post">
	<button class="back" on:click={() => history.back()}>
	  Go back
	</button>
  
	{#if metadata.title}
	  <h2>{metadata.title}</h2>
	{/if}
  
	{#if metadata.pubDate}
	  <p class="date">{metadata.pubDate}</p>
	{/if}
  
	{#if metadata.description}
	  <p class="description">{metadata.description}</p>
	{/if}
  
	{#if metadata.livesite}
	  <a href={metadata.livesite} target="_blank" rel="noopener noreferrer">
		View this project here
	  </a>
	{/if}
  
	{#if metadata.image}
	  <img
		src={metadata.image.url}
		alt={metadata.image.alt}
		class="cover-image"
	  />
	{/if}
  
	<slot /> <!-- the blogpost content from +page.svx gets rendered here-->
  
	{#if metadata.notes}
	  <div class="notes">
		<svg
		  width="23"
		  height="119"
		  viewBox="0 0 23 119"
		  fill="none"
		  xmlns="http://www.w3.org/2000/svg"
		>
		  <path
			d="M20.6863 8.5C20.6863 3.79844 16.5812 0 11.5 0C6.41882 0 2.31369 3.79844 2.31369 8.5V76.5C2.31369 81.2016 6.41882 85 11.5 85C16.5812 85 20.6863 81.2016 20.6863 76.5V8.5ZM11.5 119C20.3396 119 25.8643 110.146 21.4444 103.062C19.3933 99.7752 15.6025 97.75 11.5 97.75C2.66043 97.75 -2.86427 106.604 1.55561 113.687C3.60674 116.975 7.39753 119 11.5 119Z"
			fill="black"
		  />
		</svg>
		<p>{metadata.notes}</p>
	  </div>
	{/if}
  </div>
  
<style>
.markdown-post {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 100vw;
	overflow: hidden;
	padding: 1rem;
}

:global .markdown-post pre {
	border-radius: 8px;
	overflow-x: auto;
	padding: var(--spacing-xs, .5rem);
	border: 1px solid #121212;
}
</style>