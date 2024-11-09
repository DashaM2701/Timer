# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 7 days)

### Screenshot

![screenshot mobile](/images/screenshot_mobile.jpg).
![screenshot desktop](/images/screenshot.png).


### Links

- Solution URL: [Repositories](https://countdowntimerlaunch.netlify.app/).
- Live Site URL: [Website]().


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

I learned how to make a timer and extract days, hours, minutes and seconds :

```js
timer = Math.floor((deadline - Date.now()) / 1000);
const days = Math.floor(timer / (60 * 60 * 24));
const hours = Math.floor(timer / (60 * 60)) - days * 24;
const minutes = Math.floor( (timer % (60 * 60)) / 60 );
const secondes = Math.floor( (timer % (60)) );
```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/DashaM2701)


## Acknowledgments

Thanks to Front-end Mentor and its community.
