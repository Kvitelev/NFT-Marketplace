const menuButton = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
  if (!menu.classList.contains("menu-close")) {
    menu.classList.add("menu-close")
  }
  else {
    menu.classList.remove("menu-close")
  }
})
