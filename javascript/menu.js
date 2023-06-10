import outsideClick from "./outsideclick.js";
export default function menuFunc() {
  window.addEventListener("load", () => {
    const menuButton = document.querySelector('[data-button="fecha"]');
    const menu = document.querySelector("[data-menu]");
    const gymMobile = document.querySelector('.logo-gym-mobile')

    function openMenu(event) {
      menu.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menu, ["click"], () => {
        menu.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
    menuButton.addEventListener("click", openMenu);
  });
}
// menuFunc()
