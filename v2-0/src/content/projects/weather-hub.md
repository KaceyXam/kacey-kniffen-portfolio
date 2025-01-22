---
title: "Weather Hub"
url: "https://weather-hub.pages.dev/"
ghLink: "https://github.com/KaceyXam/weather-hub/"
thumbnail: "/assets/project-imgs/weather-hub.jpg"
date: 2023-05-13
draft: true
---

## Weather hub built with React and Tailwindcss

When I was in high school, we had a competition in the [eCommunication Academy](https://eravens.net/) called [eMagine](https://emaginefestival.com/). One year I spent all my time working on a site for the custom coded website category. When it came time for eMagine, I got second place to a weather hub website. The most annoying part of this was that all the actual functionality of the site was just embeded from somewhere else. This make me decide to make my own weather hub out of spite.

### How does this work?

When you open the site, I make a request to the [weather.gov](https://www.weather.gov/documentation/services-web-api) weather api using your longitute and latitude (if you chose to not enable your location, the site won't work). The api returns an array the forecast for the next week. With that data, I am able to load the first item as the current day with the next week on a scroll section underneath.

For styling, I have a cloud background, because that's the only thing I could think to put. I also have each weather box have a transparent background. I also have the weather icons that I loaded in from the weather api.
