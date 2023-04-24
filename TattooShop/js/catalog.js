"use string";

let catalog__sortorder_all = document.querySelector(".catalog__sortorder-all");
let catalog__sortorder_new = document.querySelector(".catalog__sortorder-new");
let catalog__sortorder_hits = document.querySelector(
  ".catalog__sortorder-hits"
);
let catalog__sortorder_sale = document.querySelector(
  ".catalog__sortorder-sale"
);

let catalog__list_point_all = document.querySelector(
  ".catalog__list-point-all"
);
let catalog__list_point_new = document.querySelector(
  ".catalog__list-point-new"
);
let catalog__list_point_hits = document.querySelector(
  ".catalog__list-point-hits"
);
let catalog__list_point_sale = document.querySelector(
  ".catalog__list-point-sale"
);

catalog__list_point_all.addEventListener("click", function () {
  catalog__sortorder_all.style.display = "block";
  catalog__sortorder_new.style.display = "none";
  catalog__sortorder_hits.style.display = "none";
  catalog__sortorder_sale.style.display = "none";
});
catalog__list_point_new.addEventListener("click", function () {
  catalog__sortorder_all.style.display = "none";
  catalog__sortorder_new.style.display = "block";
  catalog__sortorder_hits.style.display = "none";
  catalog__sortorder_sale.style.display = "none";
});
catalog__list_point_hits.addEventListener("click", function () {
  catalog__sortorder_all.style.display = "none";
  catalog__sortorder_new.style.display = "none";
  catalog__sortorder_hits.style.display = "block";
  catalog__sortorder_sale.style.display = "none";
});
catalog__list_point_sale.addEventListener("click", function () {
  catalog__sortorder_all.style.display = "none";
  catalog__sortorder_new.style.display = "none";
  catalog__sortorder_hits.style.display = "none";
  catalog__sortorder_sale.style.display = "block";
});

// переключение в каталоге
let catalog__button__conteiner = document.querySelector(
  ".catalog__button__conteiner"
);

let catalog__tattoo = document.querySelector(".catalog__tattoo");
let catalog__freckles = document.querySelector(".catalog__freckles");
let catalog__icon = document.querySelector(".catalog__icon");
let catalog__crystal = document.querySelector(".catalog__crystal");
let catalog__gift = document.querySelector(".catalog__gift");

let catalog__button__conteiner_tattoo = document.querySelector(
  "#catalog__button__conteiner-tattoo"
);
let catalog__button__conteiner_freckles = document.querySelector(
  "#catalog__button__conteiner-freckles"
);
let catalog__button__conteiner_icon = document.querySelector(
  "#catalog__button__conteiner-icon"
);
let catalog__button__conteiner_crystal = document.querySelector(
  "#catalog__button__conteiner-crystal"
);
let catalog__button__conteiner_gift = document.querySelector(
  "#catalog__button__conteiner-gift"
);

catalog__button__conteiner_tattoo.addEventListener("click", function () {
  catalog.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__tattoo.style.display = "block";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__gift.style.display = "none";
});
catalog__button__conteiner_freckles.addEventListener("click", function () {
  catalog.style.display = "none";
  catalog__freckles.style.display = "block";
  catalog__tattoo.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__gift.style.display = "none";
});
catalog__button__conteiner_icon.addEventListener("click", function () {
  catalog.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__icon.style.display = "block";
  catalog__crystal.style.display = "none";
  catalog__gift.style.display = "none";
});
catalog__button__conteiner_crystal.addEventListener("click", function () {
  catalog.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "block";
  catalog__gift.style.display = "none";
});
catalog__button__conteiner_gift.addEventListener("click", function () {
  catalog.style.display = "none";
  catalog__freckles.style.display = "none";
  catalog__tattoo.style.display = "none";
  catalog__icon.style.display = "none";
  catalog__crystal.style.display = "none";
  catalog__gift.style.display = "block";
});

// переключение в каталоге тату
let tattoo__list_point_all = document.querySelector(".tattoo__list-point-all");
let tattoo__list_point_animals = document.querySelector(
  ".tattoo__list-point-animals"
);
let tattoo__list_point_plane = document.querySelector(
  ".tattoo__list-point-plane"
);
let tattoo__list_point_linii = document.querySelector(
  ".tattoo__list-point-linii"
);
let tattoo__list_point_moon = document.querySelector(
  ".tattoo__list-point-moon"
);
let tattoo__list_point_set = document.querySelector(".tattoo__list-point-set");
let tattoo__list_point_250 = document.querySelector(".tattoo__list-point-250");

let tattoo__sortorder_all = document.querySelector(".tattoo__sortorder-all");
let tattoo__sortorder_animals = document.querySelector(
  ".tattoo__sortorder-animals"
);
let tattoo__sortorder_plane = document.querySelector(
  ".tattoo__sortorder-plane"
);
let tattoo__sortorder_linii = document.querySelector(
  ".tattoo__sortorder-linii"
);
let tattoo__sortorder_moon = document.querySelector(".tattoo__sortorder-moon");
let tattoo__sortorder_set = document.querySelector(".tattoo__sortorder-set");
let tattoo__sortorder_250 = document.querySelector(".tattoo__sortorder-250");

tattoo__list_point_all.addEventListener("click", function () {
  tattoo__sortorder_all.style.display = "block";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "none";
});
tattoo__list_point_animals.addEventListener("click", function () {
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "block";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "none";
});
tattoo__list_point_plane.addEventListener("click", function () {
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "block";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "none";
});
tattoo__list_point_linii.addEventListener("click", function () {
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "block";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "none";
});
tattoo__list_point_moon.addEventListener("click", function () {
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "block";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "none";
});
tattoo__list_point_set.addEventListener("click", function () {
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "block";
  tattoo__sortorder_250.style.display = "none";
});
tattoo__list_point_250.addEventListener("click", function () {
  tattoo__sortorder_all.style.display = "none";
  tattoo__sortorder_animals.style.display = "none";
  tattoo__sortorder_plane.style.display = "none";
  tattoo__sortorder_linii.style.display = "none";
  tattoo__sortorder_moon.style.display = "none";
  tattoo__sortorder_set.style.display = "none";
  tattoo__sortorder_250.style.display = "block";
});
