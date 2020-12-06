var myNav = document.getElementById('navbar');
window.onscroll = function () {
  'use strict';
  if (
    document.body.scrollTop >= 300 ||
    document.documentElement.scrollTop >= 300
  ) {
    myNav.classList.add('nav-colored');
    myNav.classList.remove('nav-transparent');
  } else {
    myNav.classList.add('nav-transparent');
    myNav.classList.remove('nav-colored');
  }
};
