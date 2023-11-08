document.addEventListener("DOMContentLoaded", function () { // link para o arquivo e o carrorsel
    const prevBtn = document.querySelector(".prev-btn"); // botão "voltar"
    const nextBtn = document.querySelector(".next-btn");// botão "avançar"
    const carouselInner = document.querySelector(".carousel-inner");

    let currentImageIndex = 0;
    const images = carouselInner.querySelectorAll("img");
    const imageCount = images.length;

    prevBtn.addEventListener("click", function () {
        // Voltar para a imagem anterior (circularmente)
        currentImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
        updateCarousel();
    });

    nextBtn.addEventListener("click", function () {
        // Avança para a próxima imagem (circularmente)
        currentImageIndex = (currentImageIndex + 1) % imageCount;
        updateCarousel();
    });

    function updateCarousel() {
        // Atualiza a posição do carrossel com base no índice da imagem atual
        const offset = -currentImageIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
});
