//change nav bar color on scroll
const nav = document.querySelector("#navbar");
let scrollPosition = 0;
let scrollStatus = false;

window.addEventListener("load", () => {
  scrollStatus = true;
});

window.addEventListener("scroll", () => {
  scrollPosition = window.scrollY;

  if (scrollPosition > 50 && scrollStatus) {
    nav.classList.add("navcolor-csoz");
  } else {
    nav.classList.remove("navcolor-csoz");
  }
});
