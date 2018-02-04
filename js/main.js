'use strict';

var nav = document.querySelector('.main-nav');
var btnNav = document.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--no-js');
nav.classList.add('main-nav--closed');

btnNav.addEventListener('click', function() {

  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
  } else {
    nav.classList.add('main-nav--closed');
  }
});
