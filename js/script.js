var swiper = new Swiper(".slide-videos", {
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.s-videos .btn-next',
    prevEl: '.s-videos .btn-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 1.1,
      spaceBetween: 16
    },
    580: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2.1
    },
    991: {
      slidesPerView: 2.5
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28
    }
  }
});