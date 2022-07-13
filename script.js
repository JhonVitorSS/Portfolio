const elementos = document.querySelectorAll("[data-anima]");
const animacaoClass = "animacao";

function animalScroll() {
  const topoPaginaNaJanela = window.pageYOffset + (window.innerHeight * 3) / 4;
  elementos.forEach((elemento) => {
    if (topoPaginaNaJanela > elemento.offsetTop) {
      elemento.classList.add(animacaoClass);
    } else {
      elemento.classList.remove(animacaoClass);
    }
  });
}

if (elementos.length > 1) {
  window.addEventListener("scroll", () => {
    animalScroll();
  });
}
