export default function menuFunc() {
  window.addEventListener("load", () => {
    const botao = document.querySelector('[data-button="fecha"]');
    const menuMobile = document.querySelector("[data-menu]");
    const botaoAbre = document.querySelector('[data-button="abre"]');
    const mobileOff = document.querySelector(".mobile-off");
    botao.style.left = "70%";
    botao.style.top = "21px";

    botao.addEventListener("click", abreMenu);
    function abreMenu() {
      
      menuMobile.style.display = "none";
      menuMobile.classList.toggle("aberto");

      
      console.log(botao)

      if (menuMobile.classList.contains("aberto")) {
        menuMobile.style.display = "block";
        botaoAbre.style.display = "none";
        mobileOff.style.display = "none";


        botao.style.left = "70%";
        botao.style.top = "6%";

      } else {
        botao.style.left = "70%";
        botao.style.top = "21px";
        // menuMobile.style.display = 'none'
      }
    }
    if (menuMobile.classList.contains('anima')){
        console.log('oi')
    }
    console.log(menuMobile.classList.contains('anima'))
  });
}
