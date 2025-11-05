<script lang="ts">
	export let data: {
		post: typeof import('*.svx').default;
		metadata: { title: string; [key: string]: any };
	};
</script>

<h1>{data.metadata.title}</h1>

<svelte:component this={data.post} />
