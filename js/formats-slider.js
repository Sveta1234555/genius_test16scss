// const swiper = new Swiper('.swiper', {
//     <!-- чтобы кнопочки были не внутри слайдера  "-container" к названию дабавлен-->
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1, //кол-во отображаемых карточек- элементво в слайдере. по- умолч 1
  spaceBetween: 20, //отступ между карточками
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   // spaceBetween: 20
    // },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      // spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      // spaceBetween: 40
    },
  },

  // If we need pagination
  pagination: {
    // el: ".swiper-pagination",
    el: ".pagination", //элемент, к которому применяется bulletClass
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  // Navigation arrows
  navigation: {
    // nextEl: '.swiper-button-next',
    nextEl: ".carousel-button.next",
    // prevEl: '.swiper-button-prev',
    prevEl: ".carousel-button.prev",
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
