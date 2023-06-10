export default function scrollSmooth() {
  window.addEventListener("load", () => {
    const linksInternos = document.querySelectorAll('.menu li a[href^="#"]')

    const verPlanos = document.querySelector('[data-planes]')
    const btnContato = document.querySelector('[data-contato]')

    btnContato.addEventListener('click', scrollSection)
    verPlanos.addEventListener('click', scrollSection)
    console.log(verPlanos)
    
    function scrollSection(event){
      event.preventDefault()
      const href = event.currentTarget.getAttribute('href')


      const section = document.querySelector(href)
      const topo = section.offsetTop
      
      
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',

      })
    }

    linksInternos.forEach((links) =>{
      links.addEventListener('click', scrollSection)
    })


  
  });
}
