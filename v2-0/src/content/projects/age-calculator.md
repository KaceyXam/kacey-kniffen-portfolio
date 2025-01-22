---
title: "Age Calculator App"
url: "https://age-calculator-app-8bh.pages.dev/"
ghLink: "https://github.com/KaceyXam/age-calculator-app"
thumbnail: "/assets/project-imgs/age-calculator.jpg"
date: 2023-06-05
draft: true
---

## Frontend Practice Age Calculator App using Solid JS

This is a [Frontend Mentor](https://www.frontendmentor.io) project that I did recently. The goal of this project was to make a simple app where you input your birthdate and then you get your age. I decided to use [Solid JS](https://www.solidjs.com/) for this project, since it's like React but good.

### How does this work?

This project is pretty simple. I have 3 inputs for your birth day, month and year. When you submit the form, it will check your inputed birthdate and check if it is real, first by making sure you actually put something, then by making sure you weren't born in the future or on the -1st of Decebuary.

To handle sharing state between components, I uses Solid's signals. Signals in Solid are cool because they can be accesed similar to useState in React, but unlike React, you can import them into components and use them without passing it through using props.

One major problem I had with this project was working with dates. If you look at my implementation of calculating the age, it looks dumb. It works, I guess, but there really should be a way to handle something like this with default JavaScript Dates.

```javascript
export function calculateAge(
    birthDay: number,
    birthMonth: number,
    birthYear: number
) {
    const current = new Date();
    console.log(birthDay, birthMonth, birthYear);
    let newDay = current.getDate() - birthDay;
    let newMonth = current.getMonth() + 1 - birthMonth;
    let newYear = current.getFullYear() - birthYear;
    console.log(newDay, newMonth, newYear);
    if (newDay < 0) {
        newDay *= -1;
        newMonth -= 1;
    }
    if (newMonth < 0) {
        newMonth += 12;
        newYear -= 1;
    }
    setYear(newYear);
    setMonth(newMonth);
    setDay(newDay);
}
```

Next time I do a project like this, I'm gonna use something like [Leptos](https://github.com/leptos-rs/leptos) so I can use Rust instead of JavaScript.
