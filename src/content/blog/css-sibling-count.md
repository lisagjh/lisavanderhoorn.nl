---
id: 4
title: "CSS sibling-count"
pubDate: 2025-05-20
description: "Exploring the new `sibling-count()` in CSS."
image:
  url: "/blog-content/siblingcount-demo.gif"
  alt: "Demo of the sticky header and nav with scroll-state"
tags: ["CSS", "cssday", "learning in public"]
lang: "en"
note: "This is a new feature and is only available in Chrome Canary 136+ at this time."
---

CSS just keeps getting better. `sibling-index()` makes staggering css animations easier than ever.

## What is `sibling-index()`?

`sibling-index()` is a new CSS function that returns the zero based index of an element, so the position it holds in it's list of siblings. This allows for a dynamic way to target and style elements based on their position, without any JS, hacky CSS `.first` classes or manual `--index` custom properties needed! 🎉 `sibling-index()` does this in a way more elegant way.

## Use Case: Staggered Animations

I have used `sibling-index()` to add a delay on the animations of my work showcase.

On each list item we calculate a custom delay, based on it's index in the list.

```css
li {
  --delay: calc((sibling-index() + 1) * 0.25s);
  animation: fade-slide-in 0.75s var(--delay) ease-in-out both;
}
```

*Note: I'm still trying to figure out a way to delay this completely until it's in the viewport but its a struggle. WIP*

## Use Case: Navigation Staggered Animation

Seeing how easy this was, I figured I'd also implement it in my navigation, make that a little more fun.

This is all it needs. It's that easy.

```css
ul li {
  --delay: calc((sibling-index() - 1) * 0.1s);
  animation: fade-slide-in 0.75s var(--delay) cubic-bezier(
      0.175,
      0.885,
      0.32,
      1.575
    )
    both;
}

@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Other Uses

Of course there are plenty other uses for this, other than staggering animations. You can use it to give each item a different color, using it to calculate a custom gradient, or even use it to make a custom cursor. It's a very versatile tool, and I'm sure it will be used in many different ways in the future. Excited to see what you come up with!

## Support

This is a new feature and is only available in Chrome Canary 136+ at this time. 