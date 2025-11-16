<script>
    let {href, text} = $props();
    
    const segmenter = new Intl.Segmenter({ granularity: "letter" });
    const letters = Array.from(segmenter.segment(text), ({ segment }) => segment);
</script>

    <div class="text-wrapper">
        <a href={href}>
            {#each letters as letter}
                <span>{letter}</span>
            {/each}
        </a>
        <a href={href}>
            {#each letters as letter}
                <span>{letter}</span>
            {/each}
        </a>
    </div>

<style>
    .text-wrapper {
        display: flex;
        flex-direction: column;
        height: 2rem;
        width: fit-content;
        overflow: hidden;
    }

    .text-wrapper:hover a span {
        transform: translateY(-100%);
        transition: 0.25s ease-in-out;
        transition-delay: calc(sibling-index() * 0.015s);
    }

    a {
        font-family: var(--heading-font);
        font-size: 1.5rem;
        text-decoration: none;
        line-height: 1;
        width: fit-content;
        height: fit-content;

        &:nth-of-type(2) {
            color: grey;
        }

        & span {
            display: inline-block;
        }
    }
</style>