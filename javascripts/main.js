const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("Aria-expanded", false)
    : navToggle.setAttribute("Aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});
