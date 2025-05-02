const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile-nav');
const overlay = document.querySelector('.header__mobile-overlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});


const dropdownBtn = document.querySelector('.header__mobile-dropdown-link');
const dropdownNav = document.querySelector('.header__mobile-dropdown-nav');

dropdownBtn.addEventListener('click', () => {
  dropdownNav.classList.toggle('active');
});
