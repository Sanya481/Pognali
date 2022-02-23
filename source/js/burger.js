const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');


burger.addEventListener('click', function () {
  burger.classList.toggle('burger--open');
  nav.classList.toggle('nav--closed');
  header.classList.toggle('header--white');
  headerLogo.classList.toggle('header__logo--blue');
})
