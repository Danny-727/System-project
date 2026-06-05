'use strict';

/*-----------------------------------*\
 * #NAVBAR TOGGLE
\*-----------------------------------*/

const overlay     = document.querySelector('[data-overlay]');
const navOpenBtn  = document.querySelector('[data-nav-open-btn]');
const navbar      = document.querySelector('[data-navbar]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const navLinks    = document.querySelectorAll('[data-nav-link]');

const openNav = function () {
  navbar.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

const closeNav = function () {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
};

navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

navLinks.forEach(function (link) {
  link.addEventListener('click', closeNav);
});

/*-----------------------------------*\
 * #HEADER SCROLL + GO-TOP BUTTON
\*-----------------------------------*/

const header   = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 200) {
    header.classList.add('active');
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    goTopBtn.classList.remove('active');
  }
});

/*-----------------------------------*\
 * #DATE INPUT VALIDATION
\*-----------------------------------*/

const checkinInput  = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

if (checkinInput && checkoutInput) {
  const today = new Date().toISOString().split('T')[0];
  checkinInput.setAttribute('min', today);
  checkoutInput.setAttribute('min', today);

  checkinInput.addEventListener('change', function () {
    checkoutInput.setAttribute('min', this.value || today);
    if (checkoutInput.value && checkoutInput.value < this.value) {
      checkoutInput.value = this.value;
    }
  });
}
