---
title: "Cellular Automata"
url: "https://kaceyxam.github.io/game_of_life/"
ghLink: "https://github.com/KaceyXam/game_of_life/"
thumbnail: "/assets/project-imgs/cellular-automata.jpg"
date: 2023-05-11
draft: true
---

## Cellular Automata built with Rust and Bevy

### What is Cellular Automata?

[Cellular Automata](https://en.wikipedia.org/wiki/Cellular_automaton) is basically a grid of cells where each cell has a state, in my case cells are either alive or dead. There are specific rules to determine if each cell will say alive or die each game tick. I decided to use the rules for Conway's game of life for this cellular automata. The rules for Conway's game of life are as follows:

-   Any live cell with two or three live neighbours survives.

-   Any dead cell with three live neighbours becomes a live cell.

-   All other live cells die in the next generation. Similarly, all other dead cells stay dead.

The reason I chose Conway's game of life was how simple the rules are. It would be easy to tell if I was doing everything properly.

### What is Bevy?

[Bevy](https://bevyengine.org/) is a game engine built for the [Rust Programming Language](https://www.rust-lang.org/). Unlike engines like [Unity](https://unity.com/) or [Unreal](https://www.unrealengine.com/en-US), Bevy uses something called an Entity Component System, or ECS. ECS is a pattern that involves breaking parts of your came into Entities, Components and Systems.

For example, if I wanted to have a way to handle hunger with Bevy, I could create a Entity with a hunger Component and a system that slowly decreases the hunger over time. In a traditional system, I would have to remake the hunger system for every entity I want to have hunger. With the ECS, the hunger system will automatically work for every entity with the hunger Component.

### Why did I decide to make this?

I was watching some youtube, as I often do, and I saw a video by [TanTan](https://www.youtube.com/@Tantandev) about [3d Cellular Automata](https://www.youtube.com/watch?v=63qlEpO73C4) and I thought it would be fun to try and make cellular automata on my own. I decided not to do mine in 3d since that would be a lot more complicated and wouldn't help me learn how cellular automata works any better.
