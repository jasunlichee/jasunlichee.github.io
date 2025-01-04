var swiper = new Swiper(`[unique-script-id="w-w-dm-id"] .mySwiper`, {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 5,
    pagination: {
      el: `[unique-script-id="w-w-dm-id"] .swiper-pagination`,
      clickable: true,
    },
    loop: true,
    navigation: {
      nextEl: `[unique-script-id="w-w-dm-id"] .swiper-button-nexts`,
      prevEl: `[unique-script-id="w-w-dm-id"] .swiper-button-prevs`,
    },
});