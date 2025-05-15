---
id: 3
title: "CSS scroll-state()"
pubDate: 2025-05-15
description: "Learning about CSS scroll-state"
image:
  url: "/blog-content/demo-scroll-state.gif"
  alt: "Demo of the sticky header and nav with scroll-state"
tags: ["CSS", "learning in public"]
lang: "en"
---

A while ago I read about CSS scroll-state. While building the new version of my website, I got to implement this new feature. This is an extension upon the container queries, to track the state of an element and figure out if it's scrolling or sticky somewhere. This allows us to add an animation or styling when an element is sticky at the top, like a `nav` for example.

## Header and Nav

I started out with a regular sticky header, which contains a nav element.

```css
header {
  position: sticky;
  top: 0;
}

nav {
  width: 100%;
}
```

To prevent issues on browsers that do not support this feature, I've wrapped the CSS for this in an `@supports` query.

```css
@supports (container-type: scroll-state) {
  header {
    container-type: scroll-state;
    container-name: header;
  }

  nav {
    width: 100%;
    max-width: 65rem;
    border-radius: 0;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
  }
}
```

And then the part that makes the magic work: `@container scroll-state(stuck: top)`. This waits for the header to be stuck at the top of the page. Within this query I have added the different styling for the nav.

```css
@container scroll-state(stuck: top) {
  nav {
    background: linear-gradient(0deg, transparent 0%, var(--white) 90%);
    border-radius: 0 0 12px 12px;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }
}
```

This was way easier than I expected it to be. The effect I have created is subtle, but I think it looks way better than before.

### Full Code

thats all.

```css
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  position: sticky;
  top: 0;
  width: 90vw;
  max-width: 75rem;
  z-index: 50;
}

nav {
  width: 100%;
  max-width: 65rem;
  background: linear-gradient(0deg, transparent 0%, var(--white) 90%);
  border-radius: 0 0;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

@supports (container-type: scroll-state) {
  header {
    container-type: scroll-state;
    container-name: header;
  }

  nav {
    width: 100%;
    max-width: 65rem;
    border-radius: 0;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
  }

  @container scroll-state(stuck: top) {
    nav {
      background: linear-gradient(0deg, transparent 0%, var(--white) 90%);
      border-radius: 0 0 12px 12px;
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(5px);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
```

### Sources

[CSS scroll-state() - chrome for developers](https://developer.chrome.com/blog/css-scroll-state-queries#progressive_enhancement)
