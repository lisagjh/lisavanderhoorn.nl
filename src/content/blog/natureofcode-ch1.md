---
id: 8
title: "Nature of Code - intro to creative coding"
pubDate: 2025-05-30
description: "Learning more about P5js from the wonderful Daniel Shiffmna"
tags: ["P5", "creative coding", "js", "learning in public"]
lang: "en"
relatedPosts:
  - learn-react
  - learn-php
---

# Random Walks

> The generation of random numbers is too important to be left to chance - Robert R. Coveyou

## The Random Walker Class

A random walk is a path defined as a series of random steps. 

An **object** in JavaScript is an entity that has data and functionality. In this case it's a *walker* object with data about its position on the canvas, and the functionality to "walk", move around the canvas.

A **class** is used to create the actual instances of these objects. 

So a walker needs a number for its x-position and a number for its y-position. To start at the center of the canvas, we use `this.x = width /2` and `this.y = height / 2` in the class's constructor function. `constructor()` is like the sketch's `setup()` function. It's responsible for defining the initial properties of an object, like `setup()` does for the sketch.

```js
class Walker {
  // Objects have a constructor where they are initialized.
  constructor() {
    // Objects have data.
    this.x = width / 2;
    this.y = height / 2;
  }
```

Here we use the keyword `this` to attach the properties to the newly created object. So now this Walker class has data, let's add functionality. The first method `show()` is used to code the "path", the trail the walker leaves behind. A method is basically a function inside a class, so it's associated with an object or class, and not a standalone function.

```js
  // Objects have methods – show.
  show() {
    stroke(0);
    point(this.x, this.y);
  }
```

Next we're adding `step()`, which directs the walker to move, or take a step. We want the path to be random, with no preferred direction. So we're gonna use `floor(random(4))`, so left, right, up and down all have an equal chance.

```js
  step() {
    //{!1} 0, 1, 2, or 3. The random choice determines the step.
    let choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
  }
}
```

Now the class is done. And we can create the actual Walker object.

```js
let walker;

// in P5 setup is executed once when the sketch starts
function setup() {
  createCanvas(640, 240);
  // Create the walker.
  walker = new Walker();
  background(255);
}
```


This is my finished product for this introductory chapter. I have used this shorter way to define the step direction, instead of defining each number separately. This way it's also easier to code in a 'bias',  as `let xstep = random(-5, 1)` will make it pretty much *run* to the left side.

```js
	let xstep = random(-1, 1);
    let ystep = random(-1, 1);

    this.x += xstep;
    this.y += ystep;
```

<iframe src="https://editor.p5js.org/lisagjh/full/vtm5zXF2p"></iframe>