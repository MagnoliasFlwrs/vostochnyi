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
            el.classList.toggle('mob-dropdown-open');
            el.nextElementSibling.classList.toggle('open-mob-submenu');
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