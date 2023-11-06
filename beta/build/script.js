const productButton = document.querySelector(".product-button");
const body = document.querySelector(".product-title");
const carouselContainer = document.querySelector(".carousel-container");
const leftSlider = document.querySelector(".carousel-prev");
const rightSlider = document.querySelector(".carousel-next");
const slider = document.querySelector(".slider");
const indicatorParent = document.querySelector('.carousel-indicator')

var sectionIndex = 0;

carouselContainer.addEventListener("mouseover", fadeInButtons, false);
carouselContainer.addEventListener("mouseout", fadeInButtons, false);

rightSlider.addEventListener("click", nextButton);
leftSlider.addEventListener("click", prevButton);
productButton.addEventListener("mouseover", underlineText, false);
productButton.addEventListener("mouseout", underlineText, false);


function nextButton() {
    sectionIndex = (sectionIndex < 3 ) ? sectionIndex + 1 : 3; 
    document.querySelector('.selected').classList.remove('selected');
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}
function prevButton() {
    sectionIndex = (sectionIndex > 0 ) ? sectionIndex - 1 : 0; 
    document.querySelector('.selected').classList.remove('selected');
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}
function underlineText() {
    body.classList.toggle("underlined-product");
}

function fadeInButtons() {
    leftSlider.classList.toggle("carousel-hover");
    rightSlider.classList.toggle("carousel-hover");
    indicatorParent.classList.toggle('carousel-hover');
}