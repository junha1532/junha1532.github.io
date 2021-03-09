window.onscroll = function() {navbarScroll()};
var navbar = document.querySelector(".navbar");

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const languageSelector = document.querySelector('.language__selector');
const navMenu = document.querySelector('.navbar__menu');
const languageMenu = document.querySelector('.language__menu');
const inquiryBtn = document.querySelector('.inquiry__button');
const contactForm = document.querySelector('#contact-form');
// const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
    languageSelector.classList.toggle('active');
});

languageSelector.addEventListener('click', () =>{
    languageSelector.classList.toggle('pressed');
    languageMenu.classList.toggle('pressed');
});

inquiryBtn.addEventListener('click', () =>{
  if (inquiryBtn.querySelector('i').classList.contains('fa-comment')){
    //Change icon
    inquiryBtn.querySelector('i').classList.remove('far');
    inquiryBtn.querySelector('i').classList.remove('fa-comment');
    inquiryBtn.querySelector('i').classList.add('fas');
    inquiryBtn.querySelector('i').classList.add('fa-times');
    //Activate Animation
    inquiryBtn.querySelector('i').classList.remove('unpressed');
    inquiryBtn.querySelector('i').classList.add('pressed');
    //Appear Contact Form
    contactForm.classList.remove('unpressed');
    contactForm.classList.add('pressed');
  }else{
    //Change icon
    inquiryBtn.querySelector('i').classList.remove('fas');
    inquiryBtn.querySelector('i').classList.remove('fa-times');
    inquiryBtn.querySelector('i').classList.add('far');
    inquiryBtn.querySelector('i').classList.add('fa-comment');
    //Activate Animation
    inquiryBtn.querySelector('i').classList.remove('pressed');
    inquiryBtn.querySelector('i').classList.add('unpressed');
    //Disappear Contact Form
    contactForm.classList.add('unpressed');
    setTimeout(() => {
      contactForm.classList.remove('pressed');
    }, 500)
  }
});

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarScroll() {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}