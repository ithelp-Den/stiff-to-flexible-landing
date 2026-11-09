document.addEventListener('DOMContentLoaded', () => {
  const reviewsSliderEl = document.querySelector('.reviews-swiper');

  if (reviewsSliderEl) {
    new Swiper(reviewsSliderEl, {
      loop: true, // Залишаємо true для безкінечного гортання
      spaceBetween: 20, // Відступ між слайдами з Figma (20px)
      slidesPerView: 'auto', // Ширина слайда = ширина картинки (295px у дизайні)
      centeredSlides: true, // Активний слайд по центру, сусідні видно з боків
      initialSlide: 1,
      autoplay: false, // Без автоскролу по таймінгу
      autoHeight: false,

      // Підключення кастомної пагінації (5 видимих точок, як у дизайні)
      pagination: {
        el: '.reviews-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 5,
      },

      // Підключення кастомних кнопок
      navigation: {
        nextEl: '.reviews-btn-next',
        prevEl: '.reviews-btn-prev',
      },
    });
  }
});
