//select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const aboutScrollBar1 = document.querySelector('#first-bar');
const aboutScrollBar2 = document.querySelector('#second-bar');
const aboutScrollBar3 = document.querySelector('#third-bar'); 
const aboutScrollBar4 = document.querySelector('#fourth-bar');
const navInstruction = document.querySelector('.navigation-instruction');

//set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
aboutScrollBar1.addEventListener('click', showText);
aboutScrollBar2.addEventListener('click', removeText);
aboutScrollBar3.addEventListener('click', removeText);
aboutScrollBar4.addEventListener('click', removeText);

function toggleMenu() {
    
    if(!showMenu) {

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;

    }else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set menu state
        showMenu = false;

    }
}

function showText() {
    navInstruction.style.visibility = "visible";
}

function removeText() {
    navInstruction.style.visibility = "hidden";
}