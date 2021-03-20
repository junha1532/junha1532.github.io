window.onscroll = function() {navbarScroll()};
var navbar = document.querySelector(".navbar");

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const languageSelector = document.querySelector('.language__selector');
const navMenu = document.querySelector('.navbar__menu');
const languageMenu = document.querySelector('.language__menu');
const inquiryBtn = document.querySelector('.inquiry__button');
const inquiryForm = document.querySelector("#gform");
const inquiryFormContainer = document.querySelector('#contact-form');
const contactBtn = document.querySelector('.navbar__menu').children[3];
const swiperCloseBtn = document.querySelector('#swiper-close-button');

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
  toggleContactForm();
});

contactBtn.addEventListener('click', () =>{
  toggleContactForm();
});

// Sends Email when pressing inquiry send button

inquiryForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  sendEmailInquiry();
});

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarScroll() {
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function toggleContactForm(){
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
    inquiryFormContainer.classList.remove('unpressed');
    inquiryFormContainer.classList.add('pressed');
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
    inquiryFormContainer.classList.add('unpressed');
    setTimeout(() => {
      inquiryFormContainer.classList.remove('pressed');
    }, 495)
  }
}

swiperCloseBtn.addEventListener('click', () =>{
  document.querySelector("#photo-slider-wrapper").classList.remove('visible');
});

document.querySelector("#roomABtn").addEventListener('click', () =>{
  document.querySelector("#photo-slider-wrapper").classList.add('visible');
});

function sendEmailInquiry(){

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let msg = document.querySelector("#message").value;

  Email.send({
    SecureToken : "2950b98d-6ac2-440e-ba48-39d78ad7c85e",
    To : 'jhegypt@gmail.com',
    From : 'jhegypt@gmail.com',
    Subject : "뉴카이로하우스 - "+ name + "님께서 보내신 문의",
    Body : "문의 내용 : " + msg + "<br>" + email + " 로 회신 바람."
}).then(function(){
  let successMsg = document.querySelector("#sent-msg");
  successMsg.classList.add('pressed');
  setTimeout(() => {
    successMsg.classList.remove('pressed');
  }, 10000)
}
);
inquiryForm.reset();
}

// Copied from Slider.js
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
//Unitl here