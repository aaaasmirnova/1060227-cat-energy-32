const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-header__toggle--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-header__toggle')
    navToggle.classList.add('main-header__toggle--close');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('main-header__toggle');
    navToggle.classList.remove('main-header__toggle--close');
  }
});