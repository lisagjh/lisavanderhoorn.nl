<script lang="ts">
	export let data: { links: { href: string; title: string }[] };
</script>

<h1>Blog</h1>
<ul>
	{#each data.links as { href, title }}
		<li><a href={href}>{title}</a></li>
	{/each}
</ul>
