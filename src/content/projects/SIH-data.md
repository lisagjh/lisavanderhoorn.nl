---
id: 5
title: "Enriching the Sportkaart Data with New Events"
date: "2025-06-17"
livesite: ""
description: "A case study on extending the Sportkaart platform with data from a new API."
image:
  url: "/work-showcase/sih-data.png"
  alt: "Mockup of the Sport in Haarlem Sportkaart page, on a laptop and ipad."
tags: ["PHP", "JS", "Data enrichment", "learning in public"]
relatedPosts:
  - SIH
  - dda-scroll
  - dda-viewtransitions
lang: "en"
---

# Enriching the Sportkaart Data with New Events

During my internship at Atlantis Digital in Haarlem I worked on the [Sportkaart](https://sportinhaarlem.nl/sportkaart/) for Sport in Haarlem — a map that shows all sports activities and locations in the city. One of my tasks was to enrich the data behind this tool with a new external dataset.

## Goal

The Sportkaart already worked with a dataset of sport locations. Now we also wanted to add events from a new API, without breaking anything else. This meant both backend (PHP) and frontend (JS) changes — and figuring out how to combine two different data sources into one UI.

## Figuring Out the Code

I started with reading through the existing codebase; how it fetches data, how the frontend uses it, what the structure looks like. Then I checked out the new API and compared both datasets. I took some notes on this, the similarities and differences in the data.

![Notes I made while working on the data enrichment task](/public/blog-content/notes-sih-data.jpg)

At this point I had only learned PHP on Codecademy and never used it in a real project, so I had to do some research on how data fetching works in PHP. Nothing fancy yet: I used `file_get_contents()` to fetch the JSON and wrapped it in a try block. Then `json_decode()` to turn it into an associative array, and a `foreach` to check what kind of data I actually had.

## Cleaning Up the Raw Data

The new data worked — but the event descriptions were a mess. Lots of inline styles, WordPress formatting junk, weird characters. I started trying to clean it up manually, using string functions, `str_replace`, regex... but the function I was writing became way too complex and unreadable.

After researching some more I found `do_blocks()`, a WordPress function that basically does exactly what I was trying to do: it parses the blocks and gives you clean HTML. Perfect.

[More on that in this issue →](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=110839355&issue=lisagjh%7Ci-love-web%7C260)

## Merging the Datasets

Once the data was cleaned up, I passed both the original and new datasets to the frontend. In JavaScript I just combined them — they were both arrays of objects, so I could merge them pretty easily. I did need to align some fields though, like names and descriptions, so that the filtering still worked.

## Updating the UI: 2 Tabs Instead of 12 Buttons

In the original UI there were a lot of category buttons at the top, and the same ones again in the sidebar as checkboxes. That made sense for locations, but for events we wanted something simpler.

### Step 1: Add The Main Tabs

So we decided to change the UI to just two big buttons at the top: events and sportlocations. I updated the button component, replaced the logic, and improved the color contrast while I was at it:

![Before and after of the buttons](/public/blog-content/sih-data-buttons.png)

### Step 2: Rethinking the Layout

After the buttons were added, the new layout felt off. The search bar and its buttons, these new buttons and the map/list view toggle are all center-aligned, but all different sizes and not all in the same place. To improve this I made a sketch. In this design the buttons are shaped like tab's, to emphasize the idea of tabs. I moved the toggle to the side, above the checkbox filters. I think this will be much cleaner than the original layout.

![Digital sketch of a new layout](/public/blog-content/sih-data-sketch.png)

## Next Steps

I hope to have the opportunity to build the new layout soon, which will make the page look much better.
