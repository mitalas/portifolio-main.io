let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');
let Bright = document.querySelector('#toggle');
let Body = document.querySelector('body');
let Slider = document.querySelector('.slider');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');

}

///Change theme
Bright.addEventListener('click', () => {
   Body.classList.toggle('active');
});

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
   navbar.style.top = '60px';
   if (window.scrollY > 0) {
      header.classList.add('active');
   } else {
      header.classList.remove('active');
   }}
// }
window.addEventListener('load', reveal);

function reveal() {
   var reveals = document.querySelectorAll('.reveal');
   for (let i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
         reveals[i].classList.add('active')
      } else {
         reveals[i].classList.remove('active');
      }
   }
}
// document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
//    if (textArray.length) setTimeout(type, newTextDelay + 250);
// });