<script>
	import Layout from '../layouts/+layout.svelte';
	import Intro from './../lib/components/sections/Intro.svelte';
	import About from './../lib/components/sections/About.svelte';
	import Reveal from '$lib/components/sections/Reveal.svelte';
</script>

<Layout>
	<!-- <Reveal /> -->
	<Intro />
	<About />
</Layout>
