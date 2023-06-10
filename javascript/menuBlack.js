export default function menuBlack() {
  window.addEventListener("load", () => {
    const menuFixo = document.querySelector('.container-menu');
    const windowMetade = window.innerHeight * 0.1;
    const larguraPagina = document.documentElement.clientWidth

    if (larguraPagina > 925){
      window.addEventListener('scroll', function() {
        let posicao = window.scrollY;
        if (posicao > windowMetade) {
          menuFixo.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
        } else {
          menuFixo.style.backgroundColor = ''; // Define para a cor padrão, caso necessário
        }
        menuFixo.style.transition = 'background-color 0.5s ease';
      });
    }

    
  });
}
