const productButton = document.querySelector(".product-button");
const body = document.querySelector(".product-title");

productButton.addEventListener("mouseover", underlineText, false);
productButton.addEventListener("mouseout", underlineText, false);

function underlineText() {
    body.classList.toggle("underlined-product");
}

