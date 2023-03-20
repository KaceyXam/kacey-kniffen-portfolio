---
title: "Svelte Chat App"
url: "https://svelte-chat-app-580d3.firebaseapp.com/"
ghLink: "https://github.com/KaceyXam/svelte-chat-app"
date: 2023-01-06
thumbnail: "https://raw.githubusercontent.com/KaceyXam/svelte-chat-app/main/svelte-chat-app.jpg?token=GHSAT0AAAAAAB46DEMIMWIADFXDODISGO34ZAX2IFA"
---

## My Real-time Chat App built with Svelte and Firebase

This was my first attempt at using Firebase to build a real-time chat app. My goal with this project was to see how to use [Google's Firebase](https://firebase.google.com/) as a back-end.

### Why did I build this?

I first had the idea to build this app when I tried to talk to some of my friends, who are still in high school, but the school internet won't let them get on [Discord](https://discord.com/). I decided that it couldn't be that difficult to build my own chat-app that the school won't block, and so I did.

### How does this work?

For the frontend, I used [Svelte](https://svelte.dev/). Svelte is a modern framework based on Vue and Angular which strives to be make everythind as simple as possible, while still offering amazing performance. For styling I used [Scss](https://sass-lang.com/), but I didn't bother styling this very much so I could focus on the JavaScript side of the project.

For the backend, I used [Firebase](https://firebase.google.com/). Firebase is a Backend as a Service provided by [Google](https://google.com). Firebase is an app development platform which comes with a lot of features to make it easier for you to get started with your app, like authentication and a realtime database. Firebase also has a free tier with a pay-as-you-go tier after you reach the limitations of the free tier.

To let the frontend and the backend talk to each other, I am using [RxFire](https://www.npmjs.com/package/rxfire), a verson of [RxJs](https://rxjs.dev/) made to work with Firebase. When i connect to the database in the app, RxFire creates a subscribable object, so everytime it updates on the server, it automatically updates the data on the client side.

When you submit the form to send a message, RxFire creates a new database item with the Date as the id. I have the items render in reverse chronological order, so the latest messages are on top.

### How did this turn out?

In terms of looks, this app didn't turn out well. I spent about 30 minutes of styling total, and didn't try making something good.

In terms of a functioning chat-app, this turned out pretty decent. There are many things I will need to do differently, like organizing the data better, but for my first try, this turned out well. Next time I try something like this I want to try building the server on my own, to see how much easier Firebase makes things.
