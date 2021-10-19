const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
    effect: "fade",
    spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     effect: "fade",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });