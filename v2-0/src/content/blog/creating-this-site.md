---
title: "Creating this Site"
date: 2023-03-20
thumbnail: "/assets/blog-imgs/building-this-blog.jpg"
draft: false
---

Recently, I decided to rebuild my website. I decided to do this because I wasn't completely happy with my previous site. I will probably remake this site in a couple months when I get tired of how this looks. One important thing I decided to add was a blog feature so I can write about what I am doing and what projects I am working on.

## What did I use to build this site?

I decided to use some fairly modern technologies to build this website. I decided to use Astro for the bulk of this, with Solid Js for any parts that need JavaScript interactivity. I also used Sass for the styling.

### Why Astro?

The reason I used Astro was simple. Astro is a Static Site Generator that can use any JavaScript frontend framework to build components. Astro also uses the Islands Architecture to reduce on JavaScript sent to the browser. This means I can build components with high-level frameworks and, unless I need JavaScript to run the component on the browser, no JavaScript will be sent.

For example, on the projects page, I map through the list of projects and render the links so you can go to each page. In something like React, that has to be done on the client side, which takes extra time and causes the site to load slower. In Astro however, that only happens when the code is generated for the browser.

Astro also comes with some more benifits. The blog posts and the project pages are written in markdown and translated into HTML without me needing to do anything, so I can spend more time designing the site and creating the content, instead of formatting my posts in proper HTML.

### Why not use something like Wordpress for your blog?

I could have built my blog with Wordpress or hosted my bolg on somewhere like dev.to, but I wanted to build this on my own because I think it's fun.

### Why Solid Js

When I started this project, I knew I wouldn't need much JavaScript interactivity, so I decided to use Solid since it's very performant, especially compared to React. I realistically could have handled eveything with something like Alpine js or Petite Vue if I wanted to get very lightweight, but I wanted to have an excuse to use Solid more.

### Why Sass

Before Tailwind became a thing, Sass was a lot more popular. People started using Tailwind because to some people, it makes more sense to them than CSS. I have tried Tailwind, but I prefer using CSS since I already know CSS and need to spend less time looking up how to do simple things like aligning flex items to the center. I use Sass over plain CSS because Sass lets me nest selectors, which makes the code smaller and easier to read, in my opinion.

## What do I plan on using this site for?

The main reason for this site is that I want to get into doing freelance Web Development and I want to have a nice place for people to see what I do and to be able to contact me. I also want to have a place to keep track of my progress as a Web Developer, so I can look back and see how much I've improved.
