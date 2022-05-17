"use strict";
const cartBtn = document.getElementById("cart"),
  cartModal = document.querySelector(".cart"),
  cartCloseBtn = cartModal.querySelector(".cart-close");

const openCart = () => {
  cartModal.style.display = "flex";
};
const closeCart = () => {
  cartModal.style.display = "";
};

cartBtn.onclick = openCart;
cartCloseBtn.onclick = closeCart;
console.log();
