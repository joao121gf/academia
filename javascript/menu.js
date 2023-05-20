export default function menuFunc() {
  window.addEventListener("load", () => {
    const botao = document.querySelector('[data-button="fecha"]')
    const menuMobile = document.querySelector("[data-menu]");
    const botaoAbre = document.querySelector('[data-button="abre"]')
    const mobileOff = document.querySelector('.mobile-off')
  
  
  
  
  
    botao.addEventListener('click', abreMenu)
    function abreMenu(){
      console.log(menuMobile)
      menuMobile.style.display = 'none'
  
      menuMobile.classList.toggle('aberto')
      if (menuMobile.classList.contains('aberto')){
        menuMobile.style.display = 'block'
        botaoAbre.style.display = 'none'
        mobileOff.style.display = 'none'



      }else{
        menuMobile.style.display = 'none'
      }
      console.log(menuMobile)

    }
  })
}
