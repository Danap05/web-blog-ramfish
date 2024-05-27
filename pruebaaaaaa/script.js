const menuContainer = document.querySelector('#menu-container')
const open = document.querySelector('#open')
const close = document.querySelector('#close')

open.addEventListener('click', () => {
    menuContainer.classList.add('visible')
})

close.addEventListener('click', () => {
    menuContainer.classList.remove('visible')
})