<script>
	import gsap from 'gsap';
	import { ScrollTrigger, SplitText } from 'gsap/all';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, SplitText);

		const tl = gsap.timeline();

        const squares = document.querySelectorAll('.square');

        gsap.to(squares, {
            y: "random(-50, 10, -10)",            
            ease: 'power3.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '.about',
                start: 'top 40%',
                end: 'bottom bottom',
                scrub: true,
                markers: true
            }
        });
	});
</script>

<div class="about">
	<h2>Hello!</h2>

    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>

</div>

<style>
	.about {
		height: 100vh;
        position: relative;
	}

    h2 {
        font-size: calc(5rem + 10vw);
        z-index: 2;
    }

    .square {
        width: 5rem;
        height: 5rem;
        background-color: var(--accent);
        position: absolute;
        z-index: 1;

        &:nth-of-type(1) {
            top: 10%;
            left: 10%;
        }

        &:nth-of-type(2) {
            top: 15%;
            right: 12%;
        }

        &:nth-of-type(3) {
            top: 35%;
            left: 2%;
        }

        &:nth-of-type(4) {
            top: 30%;
            right: 3%;
        }
    }

</style>
