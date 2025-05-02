const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile-nav');
const overlay = document.querySelector('.header__mobile-overlay');
const menuLinks = document.querySelectorAll('.menu-link');
const body = document.body;

const openMenu = () => {
  burger.classList.add('active');
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('no-scroll');
};

const closeMenu = () => {
  burger.classList.remove('active');
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('no-scroll');
};

burger.addEventListener('click', () => {
  const isActive = burger.classList.contains('active');
  if (isActive) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});



const dropdownBtn = document.querySelector('.header__mobile-dropdown-link');
const dropdownNav = document.querySelector('.header__mobile-dropdown-nav');

let closeTimeout;

const closeDropdown = () => {
  dropdownNav.classList.remove('active');
};

dropdownBtn.addEventListener('click', () => {
  dropdownNav.classList.toggle('active');

  if (dropdownNav.classList.contains('active')) {
    startCloseTimer();
  } else {
    clearTimeout(closeTimeout);
  }
});

function startCloseTimer() {
  clearTimeout(closeTimeout);
  closeTimeout = setTimeout(() => {
    if (!dropdownNav.matches(':hover')) {
      closeDropdown();
    }
  }, 2000);
}

dropdownNav.addEventListener('mouseleave', () => {
  startCloseTimer();
});

dropdownNav.addEventListener('mouseenter', () => {
  clearTimeout(closeTimeout);
});

