const menu = document.querySelector('.header__nav')
const menuIcon = document.querySelector('.menu-icon')


menuIcon.addEventListener('click', ()=> {
    menu.classList.toggle('show')
})