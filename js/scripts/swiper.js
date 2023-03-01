var swiper = new Swiper(".slide-testimonials", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".s-testimonials .top .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
