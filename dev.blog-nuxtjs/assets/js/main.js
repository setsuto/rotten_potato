'use strict';

////////////////////////////////////////////////////////
//// modal
////////////////////////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// preventDefault()：デフォルトの動作を発生させない
// 例：「touchmove」、「aタグ」での「click」等
// 初期化後にイベントを設定する感じ？


////////////////////////////////////////////////////////
//// category_toggle
////////////////////////////////////////////////////////

// const category = document.querySelector('.category');
// const btnCloseCategory = document.querySelector('#btn--close-category');

// btnCloseCategory.addEventListener('click',function() {
//   category.classList.toggle('categoryClose')
// });


////////////////////////////////////////////////////////
//// mobile_toggle
////////////////////////////////////////////////////////
class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.gnavBtn = document.querySelector('.gnav__btn');
    this.DOM.container = document.querySelector('body');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.container.classList.toggle('fixed');
  }

  _addEvent() {
    this.DOM.gnavBtn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();
// class MobileMenu {
//   constructor() {
//     this.DOM = {};
//     this.DOM.btn = document.querySelector('.mobile-menu__btn');
//     this.DOM.cover = document.querySelector('.mobile-menu__cover');
//     this.DOM.container = document.querySelector('#global-container');
//     this.eventType = this._getEventType();
//     this._addEvent();
//   }

//   _getEventType() {
//     return window.ontouchstart ? 'touchstart' : 'click';
//   }

//   _toggle() {
//     this.DOM.container.classList.toggle('menu-open');

//   }

//   _addEvent() {
//     this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
//     this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
//   }
// }

// new MobileMenu();

////////////////////////////////////////////////////////
//// SWIPER
////////////////////////////////////////////////////////
const slider1 = new Swiper('#slider1', {
  loop: true,
  effect: 'fade',
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,
  breakpoints: {
    // 1024: {
    //   slidesPerView: 2,
    // }
  },
  autoplay: {
    delay: 4000,
    desableOnInteraction: false
  }
})

const slider2 = new Swiper('#slider2', {
  loop: true,
  effect: 'fade',
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,
  breakpoints: {
    1024: {
      slidesPerView: 1,
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 4000,
  //   desableOnInteraction: false
  // }
})


////////////////////////////////////////////////////////
//// navigation
////////////////////////////////////////////////////////
// const nav = document.querySelector('.nav');

// document.querySelector('.header__nav--ul').addEventListener('click', function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains('header__nav--link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   }
// });

/////////////////////////////////////////////////////////
//// inview
////////////////////////////////////////////////////////
const sections = document.querySelectorAll('.section');

const inviewSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(inviewSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/////////////////////////////////////////////////////////
//// acodion
/////////////////////////////////////////////////////////

const title = document.querySelectorAll('.js-accordion-title');

function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle('is-active');
  content.classList.toggle('is-open');
}

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener('click', toggle)
}


/////////////////////////////////////////////////////////
//// random img
/////////////////////////////////////////////////////////



const imageArea = document.querySelectorAll('#imageArea');
const imageLink = document.querySelectorAll('#imageLink');

const image1 = {
  img: './images/products_01.png',
  link: 'https://www.google.com/',
};

const image2 = {
  img: './images/products_02.png',
  link: 'https://www.yahoo.co.jp/',
};

const image3 = {
  img: './images/products_03.png',
  link: 'https://www.google.com/',
};

const image4 = {
  img: './images/products_04.jpg',
  link: 'https://www.google.com/',
};

const image5 = {
  img: './images/products_05.jpg',
  link: 'https://www.google.com/',
};

const image6 = {
  img: './images/products_06.jpg',
  link: 'https://www.google.com/',
};


// const images = [image1,image2,image3,image4,image5,image6];


const images = [image1.img, image4.img, image5.img, image6.img];
// const images2 = Array.from(new Set(images))

// const images = ['./images/products_01.png', './images/products_02.png', './images/products_03.png', './images/products_04.jpg', './images/products_05.jpg', './images/products_06.jpg'];



imageArea.forEach(function (imageArea) {
  const imageNo = Math.floor(Math.random() * images.length);
  imageArea.src = images[imageNo];
  // imageArea.src = images[imageNo];
});
