"use string";

let index = document.querySelector(".index");
let catalog = document.querySelector(".catalog");
let header = document.querySelector(".header");

// переход в общий каталог
let index__header__scroll_text = document.querySelector(
  ".index__header__scroll-text"
);
index__header__scroll_text.addEventListener("click", function () {
  index.style.display = "none";
  catalog.style.display = "block";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
});

let index__catalog__new__title_catalog = document.querySelector(
  ".index__catalog__new__title-catalog"
);
index__catalog__new__title_catalog.addEventListener("click", function () {
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
});
index__catalog__row_info_crystal.addEventListener("click", function () {
  index.style.display = "none";
  catalog__crystal.style.display = "block";
  header.style.display = "block";
  catalog__button__conteiner.style.display = "flex";
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
});
