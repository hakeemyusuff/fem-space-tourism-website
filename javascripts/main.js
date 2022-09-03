const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible");
  primaryNav.toggleAttribute("data-visible");
});
