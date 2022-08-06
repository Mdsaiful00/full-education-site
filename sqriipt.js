let searchBtn = document.querySelector('#search-btn');
let searchBox = document.querySelector('.search-box');
let loginForm = document.querySelector('.login-form');
let userBtn = document.querySelector('#user-btn');
let barBtn = document.querySelector('#bar-btn');
let navBar = document.querySelector('.navbar');


window.onscroll = () => {
    searchBox.classList.remove('active')
    searchBox.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    userBtn.classList.remove('fa-times');


};

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBox.classList.toggle('active');
})

userBtn.addEventListener('click' , () =>{
    loginForm.classList.toggle('active');
    userBtn.classList.toggle('fa-times');
})

barBtn.addEventListener('click' , () =>{
  barBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
})

var swiper = new Swiper(".content-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
        delay : 2500,
        disableInteracion : true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       700: {
         slidesPerView: 1,
       },
       1400: {  
         slidesPerView: 2,
       },
       2100: {
         slidesPerView: 3,
       },
    },
 });

 
var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  autoplay :{
    delay : 2600,
    disableInteraction : true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
     540: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
  },
});
var swiper = new Swiper(".teacher-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  autoplay : {
    delay : 2500,
    disableInteracion : true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
     540: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
  },
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  autoplay : {
    delay : 2500,
    disableInteracion : true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
     540: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
  },
});