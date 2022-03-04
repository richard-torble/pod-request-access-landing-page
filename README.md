# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)

- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

./screenshot-mobile.png
./screenshot-tablet.png
./screenshot-desktop.png

### Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL: (https://your-live-site-url.com)

### Built with

- Semantic HTML5
- Tailwind CSS
- CSS Grid
- Flexbox
- Javascript
- Mobile-first workflow

### What I learned

I took the opportunity to learn Tailwind CSS from scratch, my previous experience has been with Bootstrap. I also took more time with CSS Grid, as the layout really demanded something more flexible than just Flexbox.

In addition, as the design required some bespoke form validation, it was another opportunity to improve my Javascript skill-set, specifically around the Constraint Validation API.

```js
const email = document.querySelector("#mail");
const error = document.querySelector(".error");
const accessForm = document.querySelector(".access-form");

accessForm.addEventListener("submit", function (e) {
  if (!email.validity.valid) {
    error.classList.remove("invisible");
    e.preventDefault();
  } else {
    error.classList.add("invisible");
  }
});
```

### Useful resources

(https://tailwindcss.com/) - As this project was the first time I had used Tailwind, their documentation was invaluable.

(https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation) - MDN, of course. I spent the majority of my time with MDN on this project learning about the Constraint Validation API.

## Author

- Website - [Richard Torble](https://richardtorble.com)
- Frontend Mentor - [@richard-torble](https://www.frontendmentor.io/profile/richard-torble)
- Github - [@richard-torble](https://github.com/richard-torble)
