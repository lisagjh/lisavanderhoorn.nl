---
id: 6
title: "Building a CSS carousel — scroll buttons, markers and anchor positioning"
pubDate: 2025-05-23
description: "CSS Carousels are pretty cool"
image:
  url: "/blog-content/css-carousel.png"
  alt: "Screenshot of the carousel on the homepage, in the 'Blog' section."
tags: ["CSS", "cssday", "learning in public"]
lang: "en"
note: "This is a new feature and is only available in Chrome Canary 136+ at this time."
relatedPosts:
  - scroll-state
  - css-sibling-count
---

CSS Carousels are the new way to create carousels without any JS. In this post I'm exploring how they work, and combining the new scroll markers with anchor positioning and `sibling-index()`.

Check the demo out on the home page.

## Setup

I started out with a simple `ul`, containing `li` element with the blog post preview content.

```html
<ul class="grid">
  {allPosts.map((post) => (
    <li>
      <a href={`/blog/${post.id}`}>
        <h3>{post.data.title}</h3>
        <p>{post.data.description}</p>
      </a>
    </li>
  ))}
</ul>
```

I added some CSS to turn it into a simple carousel, with some scroll snapping.

```css
ul.grid {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

li {
  scroll-snap-align: center;
  flex-shrink: 0;
}
```

## Scroll Buttons

Now that the basic carousel works, we can add the new fun stuff! I started with the scroll buttons. For this I used `ul::scroll-button(*)`. To target the left or right button, replace the `*` with left or right respectively.

```css
ul::scroll-button(*) {
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  position: absolute;
  position-anchor: --grid;
  border: none;
  transition: 0.15s ease-in-out;
}
```

As you can see, I have also used anchor positioning, to position the scroll buttons, and scroll markers, relative to the grid. On the left and right buttons I positioned them where I wanted them to be.

## Scroll Markers

Now that we have the scroll buttons, we can add the scroll markers. For this I used `ul::scroll-marker-group`.

```css
&::scroll-marker-group {
  position: absolute;
  position-anchor: --grid;
  top: anchor(--grid bottom);
  justify-self: anchor-center;
}
```

I didn't even know `justify-self: anchor-center` existed, but it did and was exactly what I needed.

To target the scroll markers themself, you use `li::scroll-marker`. I've added a background image to each, and gave them a "random" rotation, based on it's index in the list. To ensure it's clear where we are in the list, I reduced the opacity of the scroll markers, and made the size a bit smaller.

```css
li::scroll-marker {
  content: "" / "Scroll to post";
  background: url(/public/assets/svg/dot.svg);
  height: 2rem;
  width: 2rem;
  transform: rotate(calc(sibling-index() * 70deg));
  opacity: 0.65;
}
```

For the scroll marker of the active element, I increased the opacity, and made it a bit bigger.

```css
li::scroll-marker:target-current {
  opacity: 1;
  scale: 1.1;
}
```

### Code

You can find the full code for the CSS carousel [here](https://github.com/lisagjh/lisavanderhoorn.nl/blob/test/src/components/display/Blog.astro) . Have fun!

### Sources

- [Carousels with CSS](https://developer.chrome.com/blog/carousels-with-css)
- [CSS Carousel Gallery](https://chrome.dev/carousel/)

## Support

This is a new feature and is only available in Chrome Canary 136+ at this time.
