document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const fechar = document.querySelector(".fechar");

  // Abrir imagem
  document.querySelectorAll(".box img").forEach((img) => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
    });
  });

  // Fechar ao clicar no X
  fechar.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  // Fechar ao clicar fora da imagem
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target === lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});
