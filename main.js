const navToggle = document.querySelector('[aria-controls="primary-nav"]');

const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  const navOpended = navToggle.getAttribute("aria-expanded");
  if (navOpended === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
});
