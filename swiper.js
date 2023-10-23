const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 3000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 2000,
  },

  mousewheel: {
    invert: true,
  },

  
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 2000px
    2000: {
      slidesPerView: 4,
      spaceBetween: 40
    },

  }
});
