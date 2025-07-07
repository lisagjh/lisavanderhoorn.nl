---
id: 4
title: "Sport in Haarlem: Accessibility Improvements"
date: "2025-06-16"
livesite: ""
description: "Improve the accessibility of the Sportkaart."
image:
  url: "/work-showcase/sih.png"
  alt: "Mockup of the Sport in Haarlem Sportkaart page, on a laptop and ipad."
tags: ["PHP", "JS", "Data enrichment", "learning in public"]
relatedPosts:
  - SIH-data
  - dda-scroll
  - dda-viewtransitions
lang: "en"
---

# Accessibility on the Sportkaart

During my internship at Atlantis Digital in Haarlem, I got to work on the [Sportkaart](https://sportinhaarlem.nl/sportkaart/) for Sport in Haarlem. One of my assignments was to improve the accessibility of this page.

The page had a number of issues, some were solvable with semantic HTML, others needed more work. I ended up learning a lot about ARIA and WAI-ARIA in the process.

## The Challenge

Accessibility wasn’t considered in the original version of the Sportkaart. That meant the page wasn’t usable with screen readers, wasn’t keyboard-friendly, and didn’t follow semantic HTML best practices.

My task was to analyze and improve this, while working in a large PHP/JS. I had never worked in a big codebase built by others before, so this was definitely a learning experience.

### Testing & Research

I started by running automatic tests like Lighthouse and WCAG analyzers. Then I continued testing manually with just a keyboard and screen readers.

I documented all issues and potential solutions in this [GitHub comment](https://github.com/lisagjh/i-love-web/issues/120#issuecomment-2720645357).

Since I hadn’t worked in PHP before, I asked colleagues for help understanding the structure. The main file had over 2000 lines of code, which was overwhelming at first, but a great lesson in reading and understanding unfamiliar codebases.

## Fixing the Issues

Once I understood the flow, I started applying improvements:

### Semantic HTML

Many interactive elements were just `div`s or `span`s with event listeners. I replaced these with proper `<button>` elements. This alone made a huge impact: buttons now had focus states, were reachable by keyboard, and announced by screen readers.

### ARIA Attributes

For modals and popups, I added roles like `role="dialog"` and `aria-modal="true"`. One specific issue was that focus didn’t stay inside the modal. I fixed this by creating a `trapFocus` function.

### Small but Important UX Fixes

I also added small accessibility features that improve usability for everyone:

- Pressing Escape closes the popup
- Clicking outside the popup closes it
- Labels were added to all icon-only buttons

These are minor features that have a big impact on usability.

## Client Presentation

A few weeks later I presented these improvements to the client. They had never heard of web accessibility before, so I gave a short introduction and demo-ed the issues:

- Keyboard-only navigation (before vs after)
- Screen reader behavior (before vs after)

They were surprised and very interested. We talked about how accessibility doesn’t only help people with permanent disabilities, but also temporary or situational impairments, like a broken arm or shaky hands.

It was great to see how engaged they became once they understood the impact.

## Reflection

My favorite part of this project was seeing how small changes could make such a big difference. Semantic HTML, proper ARIA roles, and basic interaction patterns go a long way.

It also boosted my confidence in working with unfamiliar code, asking for help, and making a meaningful impact on real-world projects.
