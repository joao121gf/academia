export default function menuFunc() {
  const itensMenu = document.querySelectorAll(".menu li");
  const linha = document.querySelector(".linha");
  
  for (let i = 0; i < itensMenu.length; i++) {
    itensMenu[i].addEventListener("click", chamaSeta);
    
    function chamaSeta(event) {
        
      const itemAtual = document.querySelector(".seta");
      if (itemAtual) {
        itemAtual.classList.remove("seta");
      }
      this.classList.add("seta");
      if (this.classList.contains("seta")) {
        const liWindow = this.getBoundingClientRect()
        const posicaoY = liWindow.left + window.scrollY
        const posicaoX = liWindow.top + window.scrollX


        linha.style.position = 'absolute'
        linha.style.left = '0px'
        linha.style.top = '0px'

        console.log(posicaoY)
        linha.style.left = posicaoY  + 'px'
        linha.style.top = (posicaoX + 30) + 'px'
        linha.style.display = 'block'

        

      }
    }
  }
}
