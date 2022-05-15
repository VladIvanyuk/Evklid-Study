// Hero Slider

window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    a11y: {
      paginationBulletMessage: 'Перейти на слайд {{index}}',
    },
  });


  // "Как мы работаем"

  document.querySelectorAll('.work-list__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.work-list__button').forEach(function(btn) {
        btn.classList.remove('work-list__button--active')
      })

      e.currentTarget.classList.add('work-list__button--active');
      document.querySelectorAll('.work-block').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('work-block-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('work-block-active');
    })
  })

  // Аккордеон

  $(".accordion").accordion( {
    heightStyle: "content",
    icons: false,
    active: true,
  });

  // Бургер

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('header__nav--active')
  })

  // Кнопка бургера

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('header__burger--open')
  })

  // Поиск

  document.querySelector('.header__button').addEventListener('click', function() {
    document.querySelector('.header__search').classList.add('header__search--open')
  })

  document.querySelector('.header-search-close').addEventListener('click', function() {
    document.querySelector('.header__search').classList.remove('header__search--open')
  })

})



