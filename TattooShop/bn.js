"use string";
// доставка и оплата
let delivery__row_info = document.querySelector(".delivery__row-info");
let delivery__row_pochta = document.querySelector(".delivery__row-pochta");
let delivery__row_courier = document.querySelector(".delivery__row-courier");
let delivery__row_international = document.querySelector(
  ".delivery__row-international"
);
let delivery__row_return = document.querySelector(".delivery__row-return");
let delivery__row_pay = document.querySelector(".delivery__row-pay");
let delivery__info_details = document.querySelector(".delivery__info-details");
let delivery__info_pochta = document.querySelector(".delivery__info-pochta");
let delivery__info_courier = document.querySelector(".delivery__info-courier");
let delivery__info_international = document.querySelector(
  ".delivery__info-international"
);
let delivery__info_return = document.querySelector(".delivery__info-return");
let delivery__info_pay = document.querySelector(".delivery__info-pay");

delivery__row_info.addEventListener("click", function () {
  delivery__info_details.style.display = "block";
  delivery__info_pochta.style.display = "none";
  delivery__info_courier.style.display = "none";
  delivery__info_international.style.display = "none";
  delivery__info_return.style.display = "none";
  delivery__info_pay.style.display = "none";
});
delivery__row_pochta.addEventListener("click", function () {
  delivery__info_details.style.display = "none";
  delivery__info_pochta.style.display = "block";
  delivery__info_courier.style.display = "none";
  delivery__info_international.style.display = "none";
  delivery__info_return.style.display = "none";
  delivery__info_pay.style.display = "none";
});
delivery__row_courier.addEventListener("click", function () {
  delivery__info_details.style.display = "none";
  delivery__info_pochta.style.display = "none";
  delivery__info_courier.style.display = "block";
  delivery__info_international.style.display = "none";
  delivery__info_return.style.display = "none";
  delivery__info_pay.style.display = "none";
});
delivery__row_international.addEventListener("click", function () {
  delivery__info_details.style.display = "none";
  delivery__info_pochta.style.display = "none";
  delivery__info_courier.style.display = "none";
  delivery__info_international.style.display = "block";
  delivery__info_return.style.display = "none";
  delivery__info_pay.style.display = "none";
});
delivery__row_return.addEventListener("click", function () {
  delivery__info_details.style.display = "none";
  delivery__info_pochta.style.display = "none";
  delivery__info_courier.style.display = "none";
  delivery__info_international.style.display = "none";
  delivery__info_return.style.display = "block";
  delivery__info_pay.style.display = "none";
});
delivery__row_pay.addEventListener("click", function () {
  delivery__info_details.style.display = "none";
  delivery__info_pochta.style.display = "none";
  delivery__info_courier.style.display = "none";
  delivery__info_international.style.display = "none";
  delivery__info_return.style.display = "none";
  delivery__info_pay.style.display = "block";
});
