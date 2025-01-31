const swiper_news = new Swiper('.swiper_wrapper-news', {
  loop: true,
  spaceBetween : 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints : {
      0 : {
          slidesPerView : 2
      },
      1440 : {
          slidesPerView : 3
      },
  },
  slidesPerGroup: 3,
});

const swiper_logo = new Swiper('.swiper_wrapper2', {
    loop: true,
    spaceBetween : 64,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints : {
        0 : {
            slidesPerView : 6
        },
    },
    slidesPerGroup: 6,
  });

