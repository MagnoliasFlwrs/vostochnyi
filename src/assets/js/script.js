const eyeType = document.querySelector('.eye-type');

function activateEyeType() {
    eyeType.addEventListener('click' ,  ()=> {
        eyeType.classList.toggle('active')
    })
}
activateEyeType();

const langList = document.querySelectorAll('.lang-content li');
const langLink = document.querySelector('.lang-link');
const langWrap = document.querySelector('.lang');

langList.forEach(el => {
    el.addEventListener('click' , () => {
        langLink.innerHTML = el.querySelector('a').innerHTML;
        langWrap.classList.add('active');
    })
})


const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBurger = document.querySelector('.menu-close-icon');
const body = document.querySelector('body')

function activateBurgerMenu() {
    burger.addEventListener('click' , ()=> {
        burger.classList.add('active');
        mobileMenu.classList.add('active');
        setTimeout(burger.classList.remove('active') , 1000);
        body.style.overflow="hidden"
    })
}
function closeBurgerMenu() {
    closeBurger.addEventListener('click' , ()=> {
        mobileMenu.classList.remove('active');
        body.style.overflow="auto"
    })
}
activateBurgerMenu();
closeBurgerMenu() ;

const mobileDropdownLinks = document.querySelectorAll('.mobile-dropdown-item');

function activateMobileDropdown() {
    mobileDropdownLinks.forEach(el => {
        el.addEventListener('click' , (e)=> {
            el.classList.toggle('active');
            el.nextElementSibling.classList.toggle('active');
        })
    })
}
activateMobileDropdown();

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const swiper = new Swiper('.variables-swiper', {
    loop: true,
    navigation: {
      nextEl: '.custom-swiper-next',
      prevEl: '.custom-swiper-prev',
    },
  });

  const swiper2 = new Swiper('.partners-swiper', {
    loop: true,
    slidesPerView: 1.5,
    freeMode:true,
    breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        450:{
            slidesPerView: 3,
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 7,
        }
      },
    navigation: {
      nextEl: '.custom-swiper-next',
      prevEl: '.custom-swiper-prev',
    },
  });


// custom select

const regionSelect =  document.querySelector('.regions');
const regionsOptions = document.querySelectorAll('.regions-list li');
const regionsSelectBody = document.querySelector('.regions-list');

regionsOptions.forEach(el => {
    el.addEventListener('click' , ()=> {
      regionSelect.querySelector('p').innerHTML = el.innerHTML;
      regionSelect.dataset.current = el.dataset.value;
    })
})


// sort btns

const sortBtns = document.querySelectorAll('.btn-3');

function clearSortClasses() {
  sortBtns.forEach(el=> {
    if (el.classList.contains('active')) {
      el.classList.remove('active')
    }
  })
}

sortBtns.forEach(el=> {
  el.addEventListener('click' , (e)=> {
    let btn = e.target.closest('.btn-3');
    if (btn.classList.contains('active') && btn.classList.contains('down') ) {
      btn.classList.remove('down');
      btn.classList.add('up');
    }
    if (btn.classList.contains('active') && btn.classList.contains('up') ) {
      btn.classList.remove('up');
      btn.classList.add('down');
    }
    if (!btn.classList.contains('active') && btn.classList.contains('up') ) {
      btn.classList.remove('up');
      btn.classList.add('down');
      clearSortClasses();
      btn.classList.add('active');
    }
    if (!btn.classList.contains('active') && btn.classList.contains('down') ) {
      btn.classList.remove('down');
      btn.classList.add('up');
      clearSortClasses();
      btn.classList.add('active');
    }
  })
})