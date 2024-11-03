const menuButton = document.querySelector(".header__menu-button");
const navMenu = document.querySelector(".header__menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
