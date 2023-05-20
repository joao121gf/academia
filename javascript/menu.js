import outsideClick from "./outsideclick.js";
export default function menuFunc() {
  window.addEventListener("load", () => {
    const menuButton = document.querySelector('[data-button="fecha"]');
    const menu = document.querySelector("[data-menu]");
    const gymMobile = document.querySelector('.logo-gym-mobile')
    


    function openMenu(event) {
      menu.classList.add("active");
      menuButton.classList.add("active");

      if (menuButton.classList.contains('active') && menu.classList.contains('active')) {
        gymMobile.classList.toggle('aberto')
      }

      gymMobile.classList.add('teste')


      outsideClick(menu, ["click", "touchstart"], () => {
        menu.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    menuButton.addEventListener("click", openMenu);
  });
}
