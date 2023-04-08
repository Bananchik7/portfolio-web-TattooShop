"use string";

// открытие/закрытие
let header__image_basket = document.querySelector(".header__image-basket");
let basket = document.querySelector(".basket");
let basket__title_exit = document.querySelector(".basket__title-exit");
header__image_basket.addEventListener("click", function () {
  basket.style.display = "block";
});
basket__title_exit.addEventListener("click", function () {
  basket.style.display = "none";
});

// каталог с кнопками
// let freckles_001 = document.querySelector('[data-product-id="freckles-001"]');

// let button__freckles_001 = document.querySelector(
//   '[data-button-id="button__freckles-001"]'
// );

// добавление в корзину
let basket__shop_image = document.querySelector(".basket__shop-image");
let basket__shop_name = document.querySelector(".basket__shop-name");
let basket__shop_quantity = document.querySelector(".basket__shop-quantity");
let basket__shop_price = document.querySelector(".basket__shop-price");
let basket__conteiner_shop = document.querySelector(".basket__conteiner-shop");
let basket__conteiner_none = document.querySelector(".basket__conteiner-none");

//
//

let all_product = document.querySelectorAll('[data-product-id^="product"]');

// выбираем кнопку из карточки товара

all_product.forEach(function (one_product) {
  let button_product = one_product.querySelector(".catalog__product-button");

  button_product.addEventListener("click", function () {
    basket__conteiner_none.style.display = "none";
    basket__conteiner_shop.style.display = "flex";

    basket__shop_image.src = one_product.querySelector("img").src;
    basket__shop_name.textContent = one_product.querySelector(
      ".catalog__product-title"
    ).textContent;
    basket__shop_quantity.textContent = "1";
    basket__shop_price.textContent = one_product.querySelector(
      ".catalog__product-price"
    ).textContent;
  });
});
