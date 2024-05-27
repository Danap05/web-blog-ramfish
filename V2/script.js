/* const iconMenu = document.getElementById('icon-menu')
const mainMenu = document.getElementById('main-menu')

iconMenu.addEventListener('click', () => mainMenu.classList.toggle('menu--show')) 
*/


/* const menuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu() {
    const isAsideClosed=menuHamIcon.classList.contains('inactive');
    
    if(!isAsideClosed){menuHamIcon.classList.add('inactive');
}
menuHamIcon();

mobileMenu.classList.toggle('inactive');
} */

window.addEventListener('load',() => {
    document.querySelector('.mobile-menu').addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('show')
    })
})