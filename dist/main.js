'use strict';
const cartBtn = document.getElementById('cart'),
  cartModal = document.querySelector('.cart');
const openCart = () => {
  cartModal.style.display = 'flex';
}

cartBtn.onclick = function () {
  openCart();
}
