const body = document.querySelector("body");
const header = body.querySelector(".header");
const openMenuButton = header.querySelector(".hamburger");
const closeMenuButton = header.querySelector(".close-button");
const navOverlay = header.querySelector(".header__nav-overlay");
const menuLinks = navOverlay.querySelectorAll(".nav__link");

const openNavMenu = () => {
  navOverlay.classList.add("js-active");
  body.classList.add("js-menu-open");
};
const closeNavMenu = () => {
  navOverlay.classList.remove("js-active");
  body.classList.remove("js-menu-open");
};

openMenuButton.addEventListener("click", openNavMenu);
closeMenuButton.addEventListener("click", closeNavMenu);

menuLinks.forEach((link) => link.addEventListener("click", closeNavMenu));