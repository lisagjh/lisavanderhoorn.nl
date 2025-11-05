<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let data: { links: { href: string; title: string }[] };
</script>

<h1>Blog</h1>
<div class="wrapper circle__wrapper">
	<!-- left arc: center-left -->
	<ul class="circle__text__wrapper__left">
		{#each data.links as { href, title }}
			<li class="circle__text__left__item"><a {href}>{title}</a></li>
		{/each}
	</ul>

</div>

<style>

</style>
