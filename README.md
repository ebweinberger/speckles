# Speckles

Speckles is a small artisitc project that I made to help me learn p5js and vercel. You can visit it at [speckles.now.sh](https://speckles.now.sh)!

## Basic concept

Each circle is a `dot` object that stores its own location, color, size, and age. The animation runs at 30 frames per second. There are a few things that happen in each frame:  
* A new circle is born with a random color and location
* Each circle increases its radius by `GROWTH_RATE`
* Each circle checks it's age and when it become older than `DEATH_TIME`, it "pops"

There is also a fullscreen button in the top left corner because I wanted to see how it works in p5js.

## Tehcnologies

p5js is a JavaScript library with a focus on creative use. I plan to use this libary to make an attractive frontend for the social media heat map that I am making.  
[Link to p5](https://p5js.org)


Vercel is a platform that let me host the static webpage easily. I plan to use it for future projects so this was a good introduction to it.  
[Link to Vercel](https://vercel.com)
