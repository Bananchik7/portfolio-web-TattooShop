"use string";

// Открытие/Закрытие
let header__image_basket = document.querySelector(".header__image-basket");
let index__header__image_basket = document.querySelector(
  ".index__header__image-basket"
);
let basket = document.querySelector(".basket");
let basket__title_exit = document.querySelector(".basket__title-exit");
index__header__image_basket.addEventListener("click", function () {
  basket.style.display = "block";
  document.body.style.overflow = "hidden";
  document.querySelector(".basket__conteiner-background").style.overflow =
    "auto";
});
header__image_basket.addEventListener("click", function () {
  basket.style.display = "block";
  document.body.style.overflow = "hidden";
  document.querySelector(".basket__conteiner-background").style.overflow =
    "auto";
});
basket__title_exit.addEventListener("click", function () {
  basket.style.display = "none";
  document.body.style.overflow = "visible";
});

// Добавление в корзину

let basket__conteiner_none = document.querySelector(".basket__conteiner-none");
let basket__button_clear = document.querySelector(".basket__button-clear");
let basket__summ_number = document.querySelector(".basket__summ-number");

// Добавление всех товаров
let all_product = document.querySelectorAll('[data-product-id^="product"]');

// Выбираем кнопку из карточки товара
all_product.forEach(function (one_product) {
  let button_product = one_product.querySelector(".catalog__product-button");

  button_product.addEventListener("click", function () {
    basket__conteiner_none.style.display = "none";

    // создание основного див с элементами товара
    let basket__conteiner_conteiner = document.querySelector(
      ".basket__conteiner-conteiner"
    );
    if (
      !basket__conteiner_conteiner.querySelector(
        '[data-basket-id="' + one_product.dataset.productId + '"]'
      )
    ) {
      let basket__conteiner_shop = document.createElement("div");
      basket__conteiner_shop.className = "basket__conteiner-shop";
      basket__conteiner_conteiner.appendChild(basket__conteiner_shop);
      basket__conteiner_shop.dataset.basketId = one_product.dataset.productId;

      //создание внутренних дивов с элементами товара
      let basket__shop_image = document.createElement("img");
      let basket__shop_name = document.createElement("div");
      let basket__shop_quantity_minus = document.createElement("input");
      let basket__shop_quantity = document.createElement("div");
      let basket__shop_quantity_plus = document.createElement("input");
      let basket__shop_price = document.createElement("div");
      let basket__shop_cross = document.createElement("img");

      basket__shop_image.className = "basket__shop-image";
      basket__shop_name.className = "basket__shop-name";
      basket__shop_quantity_minus.className = "basket__shop-quantity-minus";
      basket__shop_quantity.className = "basket__shop-quantity";
      basket__shop_quantity_plus.className = "basket__shop-quantity-plus";
      basket__shop_price.className = "basket__shop-price";
      basket__shop_cross.className = "basket__shop-cross";

      basket__conteiner_shop.appendChild(basket__shop_image);
      basket__conteiner_shop.appendChild(basket__shop_name);
      basket__conteiner_shop.appendChild(basket__shop_quantity_minus);
      basket__conteiner_shop.appendChild(basket__shop_quantity);
      basket__conteiner_shop.appendChild(basket__shop_quantity_plus);
      basket__conteiner_shop.appendChild(basket__shop_price);
      basket__conteiner_shop.appendChild(basket__shop_cross);

      basket__shop_image.src = one_product.querySelector("img").src;
      basket__shop_name.textContent = one_product.querySelector(
        ".catalog__product-title"
      ).textContent;
      basket__shop_quantity_minus.value = "-";
      basket__shop_quantity_minus.type = "submit";
      basket__shop_quantity.textContent = "1";
      basket__shop_quantity_plus.value = "+";
      basket__shop_quantity_plus.type = "submit";
      basket__shop_price.textContent = one_product.querySelector(
        ".catalog__price-number"
      ).textContent;
      basket__shop_cross.src = basket__title_exit.src;

      // удаление позиции в корзине
      basket__shop_cross.addEventListener("click", function () {
        if (basket__conteiner_conteiner.children.length > 0) {
          basket__conteiner_shop.remove();
        }
        if (basket__conteiner_conteiner.children.length == 0) {
          basket__conteiner_shop.remove();
          basket__conteiner_none.style.display = "block";
        }
        summ__basket();
      });
      basket__button_clear.addEventListener("click", function () {
        basket__conteiner_shop.remove();
        basket__conteiner_none.style.display = "block";
        summ__basket();
      });

      basket__shop_quantity_plus.addEventListener("click", function () {
        basket__shop_quantity.textContent =
          Number(basket__shop_quantity.textContent) + 1;

        basket__shop_price.textContent =
          Number(
            one_product
              .querySelector(".catalog__price-number")
              .textContent.replace(/[^\d;]/g, "")
          ) *
            Number(basket__shop_quantity.textContent) +
          " RUB";
        summ__basket();
      });

      basket__shop_quantity_minus.addEventListener("click", function () {
        if (Number(basket__shop_quantity.textContent) >= 1) {
          basket__shop_quantity.textContent =
            Number(basket__shop_quantity.textContent) - 1;
          basket__shop_price.textContent =
            Number(
              one_product
                .querySelector(".catalog__price-number")
                .textContent.replace(/[^\d;]/g, "")
            ) *
              Number(basket__shop_quantity.textContent) +
            " RUB";
          summ__basket();
        } else {
          basket__shop_quantity.textContent = 0;
          basket__shop_price.textContent =
            Number(
              one_product
                .querySelector(".catalog__price-number")
                .textContent.replace(/[^\d;]/g, "")
            ) *
              Number(basket__shop_quantity.textContent) +
            " RUB";
          summ__basket();
        }
      });
    } else {
      let basket__conteiner_shop = basket__conteiner_conteiner.querySelector(
        '[data-basket-id="' + one_product.dataset.productId + '"]'
      );
      let basket__shop_quantity = basket__conteiner_shop.querySelector(
        ".basket__shop-quantity"
      );
      basket__shop_quantity.textContent =
        Number(basket__shop_quantity.textContent) + 1;
    }
    summ__basket();
  });
});

function summ__basket() {
  let all_product_busket = document.querySelectorAll(
    '[data-basket-id^="product"]'
  );
  basket__summ_number.textContent = 0;
  all_product_busket.forEach(function (one_basket) {
    basket__summ_number.textContent =
      Number(basket__summ_number.textContent) +
      Number(
        one_basket
          .querySelector(".basket__shop-price")
          .textContent.replace(/[^\d;]/g, "")
      ) *
        Number(one_basket.querySelector(".basket__shop-quantity").textContent);
  });
}

// переход в контактную информацию
let buy = document.querySelector(".buy");
let basket__button_shop = document.querySelector(".basket__button-shop");
let buy__title_exit = document.querySelector(".buy__title-exit");
let buy__summ_number = document.querySelector(".buy__summ-number");

basket__button_shop.addEventListener("click", function () {
  basket.style.display = "none";
  buy.style.display = "block";
  document.body.style.overflow = "hidden";
  document.querySelector(".buy__conteiner-background").style.overflow = "auto";
  buy__summ_number.textContent = document.querySelector(
    ".basket__summ-number"
  ).textContent;
});
buy__title_exit.addEventListener("click", function () {
  buy.style.display = "none";
  document.body.style.overflow = "visible";
});
