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

During my internship at Atlantis Digital in Haarlem I got to work on the [Sportkaart](https://sportinhaarlem.nl/sportkaart/) for Sport in Haarlem. I was asked to improve the accessibility of this page. The page had a couple of issues, most were solvable with some semantic HTML, but I also had to add some accessibility features. I learned a lot about ARIA and WAI-ARIA.


## Testing

I started out with running some automatic tests, like lighthouse and a WCAG analyzer. After that I started testing with keyboard and screenreaders. 
I analysed all results and wrote them down [here](https://github.com/lisagjh/i-love-web/issues/120#issuecomment-2720645357). While writing the report I also wrote down some potential fixes and things I wanted to look into.

After the testing I dove into the codebase. I had never worked in a PHP project before, and I was a bit intimidated by the PHP codebase. I asked a few people in the office to help me understand it. I learned a lot about the codebase and how to navigate it.
It was very overwhelming at first, since it was all PHP and JavaScript and over 2000 lines of code in one file, but I learned to read and understand others code better.


## Building

Once I knew what was to be done, I got to work. I started out researching ARIA roles and attributes, and applying them where needed. For example on a popup I added `role="dialog"` and `aria-modal="true"`. This same popup had issues with the focus; it remained in the list and not the popup. I started by changing the svg with an `eventListener` to a `<button>` with an svg inside. After I learned that the SVG was being focused, it just didn't have a clear focus state.

Then I moved on to making the html more semantic. There were many svg's, spans and divs with eventListener'sm which should have been buttons. Changing this made a big impact! I also made sure to add clear labels to buttons without text. 

I also added some small things like closing the popup with esc or clicking outside the popup, which is a behaviour many users expect.

## Client Review

I got to present these improvements to the client a few weeks later. They had never heard of the concept of accessibility on the web, or given it any thought. I explained what issues there were beforehand, and why they were important. Then I showed them the before. I gave a demonstration of trying to navigate the page with a keyboard, and also a screenreader. The clients were very interested, and were wondering who this impacted. I explained that this isn't just for people with a disability of any kind, but for everyone. I gave them a few examples, like someone with a broken arm, or someone with tremors who has issues using a mouse. This made sense to them, and they were very interested in learning more about accessibility.

---

My favorite part of this was seeing how some small changes make such a big impact. Using semantic HTML really goes a long way!