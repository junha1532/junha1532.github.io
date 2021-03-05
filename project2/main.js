window.onscroll = function() {navbarScroll()};
var navbar = document.querySelector(".navbar");

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const languageSelector = document.querySelector('.language__selector');
const navMenu = document.querySelector('.navbar__menu');
const languageMenu = document.querySelector('.language__menu');
// const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
    languageSelector.classList.toggle('active');
});

languageSelector.addEventListener('click', () =>{
    languageSelector.classList.toggle('pressed');
    languageMenu.classList.toggle('pressed');
});

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarScroll() {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}