"use string";

let index = document.querySelector(".index");
let catalog = document.querySelector(".catalog");
let header = document.querySelector(".header");
let delivery = document.querySelector(".delivery");
let faq = document.querySelector(".faq");
let contact = document.querySelector(".contact");

// переход в общий каталог
let index__header__scroll_text = document.querySelector(
  ".index__header__scroll-text"
);
index__header__scroll_text.addEventListener("click", function () {
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  index.style.display = "none";
  catalog.style.display = "block";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
});

let index__catalog__new__title_catalog = document.querySelector(
  ".index__catalog__new__title-catalog"
);
index__catalog__new__title_catalog.addEventListener("click", function () {
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  index.style.display = "none";
  catalog.style.display = "block";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
});

// переходы в каталог
let index__catalog__row_info_tattoo = document.querySelector(
  "#index__catalog__row-info-tattoo"
);
let index__catalog__row_info_freckles = document.querySelector(
  "#index__catalog__row-info-freckles"
);
let index__catalog__row_info_crystal = document.querySelector(
  "#index__catalog__row-info-crystal"
);
let index__catalog__row_info_hits = document.querySelector(
  "#index__catalog__row-info-hits"
);
index__catalog__row_info_tattoo.addEventListener("click", function () {
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  index.style.display = "none";
  header.style.display = "block";
  catalog__tattoo.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
});
index__catalog__row_info_freckles.addEventListener("click", function () {
  index.style.display = "none";
  catalog__freckles.style.display = "block";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__catalog__row_info_crystal.addEventListener("click", function () {
  index.style.display = "none";
  catalog__crystal.style.display = "block";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__catalog__row_info_hits.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
  header.style.display = "block";
  catalog__sortorder_hits.style.display = "block";
  catalog__sortorder_all.style.display = "none";
  catalog__sortorder_new.style.display = "none";
  catalog__sortorder_hits.style.display = "block";
  catalog__sortorder_sale.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

//
let index__catalog__set__row_info_250 = document.querySelector(
  "#index__catalog__set__row-info-250"
);
let index__catalog__set__row_info_set = document.querySelector(
  "#index__catalog__set__row-info-set"
);

index__catalog__set__row_info_250.addEventListener("click", function () {
  index.style.display = "none";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
  catalog__tattoo.style.display = "block";
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "block";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__catalog__set__row_info_set.addEventListener("click", function () {
  index.style.display = "none";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
  catalog__tattoo.style.display = "block";
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "block";
  tattoo__sortorder_250.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

let index__catalog__figure__row_info_moon = document.querySelector(
  "#index__catalog__figure__row-info-moon"
);
let index__catalog__figure__row_info_linii = document.querySelector(
  "#index__catalog__figure__row-info-linii"
);

index__catalog__figure__row_info_linii.addEventListener("click", function () {
  index.style.display = "none";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
  catalog__tattoo.style.display = "block";
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "block";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__catalog__figure__row_info_moon.addEventListener("click", function () {
  index.style.display = "none";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
  catalog__tattoo.style.display = "block";
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "block";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

//
let index__sale__title_catalog = document.querySelector(
  ".index__sale__title-catalog"
);
index__sale__title_catalog.addEventListener("click", function () {
  index.style.display = "none";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
  catalog.style.display = "block";
  catalog__sortorder_all.style.display = "none";
  catalog__sortorder_new.style.display = "none";
  catalog__sortorder_hits.style.display = "none";
  catalog__sortorder_sale.style.display = "block";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

// переход в отдел доставка и оплата
let header__button_delivery = document.querySelector(
  ".header__button-delivery"
);
let index__header__button_delivery = document.querySelector(
  ".index__header__button-delivery"
);
header__button_delivery.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "block";
  faq.style.display = "none";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__header__button_delivery.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "block";
  faq.style.display = "none";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

// переход в "как наносить"
let header__button_faq = document.querySelector(".header__button-faq");
let index__header__button_faq = document.querySelector(
  ".index__header__button-faq"
);

header__button_faq.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "block";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__header__button_faq.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "block";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

// переход в контакты
let header__button_contact = document.querySelector(".header__button-contact");
let index__header__button_contact = document.querySelector(
  ".index__header__button-contact"
);

header__button_contact.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "none";
  contact.style.display = "block";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__header__button_contact.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "none";
  contact.style.display = "block";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

// переход в главное меню
let header__menu_logo = document.querySelector(".header__menu-logo");
let index__header__menu_logo = document.querySelector(
  ".index__header__menu-logo"
);

header__menu_logo.addEventListener("click", function () {
  index.style.display = "block";
  catalog.style.display = "none";
  header.style.display = "none";
  delivery.style.display = "none";
  faq.style.display = "none";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__header__menu_logo.addEventListener("click", function () {
  index.style.display = "block";
  catalog.style.display = "none";
  header.style.display = "none";
  delivery.style.display = "none";
  faq.style.display = "none";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

//
let header__button_catalog = document.querySelector(".header__button-catalog");
let index__header__button_catalog = document.querySelector(
  ".index__header__button-catalog"
);

header__button_catalog.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "block";
  header.style.display = "block";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "flex";
  delivery.style.display = "none";
  faq.style.display = "none";
  contact.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
index__header__button_catalog.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "block";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "none";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "flex";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

// footer
let footer__row_point_catalog = document.querySelector(
  "#footer__row-point-catalog"
);
let footer__row_point_contact = document.querySelector(
  "#footer__row-point-contact"
);
let footer__row_point_gift = document.querySelector("#footer__row-point-gift");
let footer__row_point_delivery = document.querySelector(
  "#footer__row-point-delivery"
);
let footer__row_point_faq = document.querySelector("#footer__row-point-faq");

footer__row_point_catalog.addEventListener("click", function () {
  index.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "none";
  catalog__button__conteiner.style.display = "flex";
  catalog.style.display = "block";
  catalog__sortorder_all.style.display = "block";
  catalog__sortorder_new.style.display = "none";
  catalog__sortorder_hits.style.display = "none";
  catalog__sortorder_sale.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
footer__row_point_contact.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "none";
  contact.style.display = "block";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
footer__row_point_delivery.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "block";
  faq.style.display = "none";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
footer__row_point_faq.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "block";
  contact.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__gift.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__button__conteiner.style.display = "none";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
footer__row_point_gift.addEventListener("click", function () {
  catalog.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__gift.style.display = "block";
  index.style.display = "none";
  catalog.style.display = "none";
  header.style.display = "block";
  delivery.style.display = "none";
  faq.style.display = "none";
  contact.style.display = "none";
  catalog__button__conteiner.style.display = "flex";
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

//
let otzivy = document.querySelector(".otzivy");
let index__reviews__conteiner_button = document.querySelector(
  ".index__reviews__conteiner-button"
);
let otzivy__title_exit = document.querySelector(".otzivy__title-exit");

index__reviews__conteiner_button.addEventListener("click", function () {
  otzivy.style.display = "block";
  document.body.style.overflow = "hidden";
  document.querySelector(".otzivy__conteiner-background").style.overflow =
    "auto";
});
otzivy__title_exit.addEventListener("click", function () {
  otzivy.style.display = "none";
  document.body.style.overflow = "visible";
});

let otzivy__button = document.querySelector(".otzivy__button");
otzivy__button.addEventListener("click", function () {
  otzivy.style.display = "none";
  document.body.style.overflow = "visible";
});
