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
