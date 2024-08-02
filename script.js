let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw*${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;  // A propriedade clientHeight é usada para obter a altura de um elemento, incluindo o padding

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let SliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * SliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft= `-${newMargin}px`;
}

setInterval(goNext,4000); // passar imagens automaticamente com temporizador