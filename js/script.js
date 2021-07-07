let whiteSideMenuBar = document.querySelector('.white-menu-icon-div');
let blackSideMenuBar = document.querySelector('.black-menu-icon-div');
let sideMenu = document.querySelector('.side-menu-ul-div');
let sideMenuDiv = document.querySelector('.side-menu');
let bigMenu = document.querySelector('.big-menu');

const homeItem = document.querySelector('#home-side-item');
const aboutItem = document.querySelector('#about-side-item');
const skillsItem = document.querySelector('#skills-side-item');
const projectsItem = document.querySelector('#projects-side-item');
const contactItem = document.querySelector('#contact-side-item');

let isMenuShown = false;

function showWhiteSideMenu() {
    
    if(isMenuShown == false) {
        isMenuShown = true;
        sideMenu.style.display = 'flex'; 
        blackSideMenuBar.style.display = 'flex';
        whiteSideMenuBar.style.display = 'none';
        sideMenuDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    } else if(isMenuShown == true) {
        isMenuShown = false;
        sideMenu.style.display = 'none';
        whiteSideMenuBar.style.display = 'flex';
        sideMenuDiv.style.backgroundColor = 'transparent';
    }
}

function showBlackSideMenu() {
    
    if(isMenuShown == false) {
        isMenuShown = true;
        sideMenu.style.display = 'flex'; 
        blackSideMenuBar.style.display = 'none';
        whiteSideMenuBar.style.display = 'flex';
        sideMenuDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    } else if(isMenuShown == true) {
        isMenuShown = false;
        sideMenu.style.display = 'none';
        whiteSideMenuBar.style.display = 'flex';
        blackSideMenuBar.style.display = 'none';
        sideMenuDiv.style.backgroundColor = 'transparent';
    }
}

function hideSideMenu() {
    isMenuShown = false;
    sideMenu.style.display = 'none';
    whiteSideMenuBar.style.display = 'flex';
    sideMenuDiv.style.backgroundColor = 'transparent';
    blackSideMenuBar.style.display = 'none';
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bigMenu.classList.add("big-menu-scroll");
  } else {
    bigMenu.classList.remove("big-menu-scroll");
  }
}

whiteSideMenuBar.addEventListener('click', showWhiteSideMenu);
blackSideMenuBar.addEventListener('click', showBlackSideMenu);
homeItem.addEventListener('click', hideSideMenu);
aboutItem.addEventListener('click', hideSideMenu);
skillsItem.addEventListener('click', hideSideMenu);
projectsItem.addEventListener('click', hideSideMenu);
contactItem.addEventListener('click', hideSideMenu);