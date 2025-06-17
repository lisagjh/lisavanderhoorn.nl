---
id: 5
title: "Sport in Haarlem: Data Enrichment"
date: "2025-06-17"
livesite: ""
description: "Enrich the Sportkaart with data from a new API."
image:
  url: "/work-showcase/sih-data.png"
  alt: "Mockup of the Sport in Haarlem Sportkaart page, on a laptop and ipad."
tags: ["PHP", "JS", "Data enrichment", "learning in public"]
relatedPosts:
  - SIH
  - dda-scroll
  - dda-viewtransitions
lang: "en"
notes: "
WIP! still writing this out :)
"
---

# Adding Data in an Existing Project

During my internship at Atlantis Digital in Haarlem I got to work on the [Sportkaart](https://sportinhaarlem.nl/sportkaart/) for Sport in Haarlem. In this case I was asked to enrich the data of the Sportkaart with data from a new API.

## The Challenge

I started out analysing the current codebase, how it gets and uses the data. Then I analysed the new API I had to introduce, and the structure of the new data. I took some notes on the codebase, and the differences in the datasets. At this point I had already been learning PHP through codecademy but not worked with it in a real project yet, so I spend some time researching how data fetching works in PHP.

![Notes I made while working on the data enrichment task](/public/blog-content/notes-sih-data.jpg)

I used `file_get_contents` to fetch the json.

I learned about associative arrays! Then I learned that in JS they're just objects.

### Update Frontend to Display Two Tabs

At first there were a bunch of buttons at the top, for each category. These same categories were also in the sidebar as checkboxes. For the new version we want two buttons at the top, as the two main tabs. One is for events and the other for sportlocations, with has everything but events. Doing this took some work. I had to really dive into the existing code, and figure out how it's built and what works together.

