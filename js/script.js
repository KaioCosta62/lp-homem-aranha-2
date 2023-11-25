var swiper = new Swiper(".slide-videos", {
  slidesPerView: 3,
  spaceBetween: 28,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.s-videos .btn-next',
    prevEl: '.s-videos .btn-prev'
  }
});