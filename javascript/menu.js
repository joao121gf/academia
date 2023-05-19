export default function menuFunc() {
    const itensMenu = document.querySelectorAll(".menu li");
    const linha = document.querySelector(".linha");
    const home = document.querySelector('.menu li')
    const homeWindow = home.getBoundingClientRect();
    const posXHome = homeWindow.top + window.scrollX
    const posYHome = homeWindow.left + window.scrollY
    linha.style.left = posYHome + 'px';
    linha.style.top = (posXHome + 30) + 'px';


    console.log(homeWindow)


    // Define a posição inicial e oculta a linha
    linha.style.position = 'absolute';

  
    for (let i = 0; i < itensMenu.length; i++) {
      itensMenu[i].addEventListener("click", chamaSeta);
    }
  
    function chamaSeta(event) {
      const itemAtual = document.querySelector(".seta");
      if (itemAtual) {
        itemAtual.classList.remove("seta");
      }
      this.classList.add("seta");
      if (this.classList.contains("seta")) {
        const liWindow = this.getBoundingClientRect();
        const posicaoY = liWindow.left + window.scrollY;
        const posicaoX = liWindow.top + window.scrollX;
  
        linha.style.left = posicaoY + 'px';
        linha.style.top = (posicaoX + 30) + 'px';

      }
    }
  }
  