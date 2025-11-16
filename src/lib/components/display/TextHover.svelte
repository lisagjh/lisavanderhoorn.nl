<script >
	import { onMount } from 'svelte';
    let {href, text} = $props();

    const segmenter = new Intl.Segmenter({ granularity: "letter" });

    function spanWrap(element) {
        const letters = segmenter.segment(element.textContent || "");
        console.log(letters);

        const wrappedLetters = Array.from(letters, ({ segment }) => `<span>${segment}</span>`).join("");
        element.innerHTML = wrappedLetters;
    }

    onMount(() => {
        console.log("Component mounted");

        const elements = document.querySelectorAll("a");
        elements.forEach(element => {
            spanWrap(element);
        });
    });
</script>

<div class="text-wrapper">
    <a href={href}>{text}</a>
    <a href={href}>{text}</a>
</div>

<style scoped>
    .text-wrapper {
        display: flex;
        flex-direction: column;
    }

    a {
        font-family: var(--heading-font);
        font-size: 1.5rem;
        text-decoration: none;
    }
</style>