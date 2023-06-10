export default function itensBanner() {
  window.addEventListener("load", () => {
    const bannerPai = document.querySelector(".banner");
    const filhosBanner = bannerPai.children;
    const arrayFilhos = Array.from(filhosBanner);

    bannerPai.classList.remove("oculto");
    arrayFilhos.forEach((items, index) => {
      items.style.opacity = "0";
      setTimeout(() => {
        items.classList.remove("fora");
        items.classList.add("sobe");
      }, (index + 1) * 500);
    });
  });
}
