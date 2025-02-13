const swiper_news = new Swiper('.swiper_wrapper-news', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev',
  },

  breakpoints : {
      0 : {
          slidesPerView : 1.4,
          slidesPerGroup: 1,
          spaceBetween : 12,
      },
      1440 : {
          slidesPerView : 3,
          spaceBetween : 30,
          slidesPerGroup: 3,
      },
  },
  
});

const swiper_logo = new Swiper('.swiper_wrapper-logo', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.logo-button-next',
      prevEl: '.logo-button-prev',
    },

    breakpoints : {
        0 : {
            spaceBetween : 24,
            slidesPerView : 3.7,
            slidesPerGroup: 3,
            
        },
        1440 : {
            spaceBetween : 64,
            slidesPerView : 6,
            slidesPerGroup: 6
        },
    },
  });

