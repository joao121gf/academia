export default function itensBanner() {
  window.addEventListener("load", () => {
    const sections = document.querySelectorAll('.js-scroll')
    

    function animaScroll(){
      const windowMetade = window.innerHeight * 0.6
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade
        if (sectionTop < 0){
          section.classList.add('ativo')
        }
      })
    }

    window.addEventListener('scroll', animaScroll)

  });
}
