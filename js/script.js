let sideMenuBar = document.querySelector('#menu-icon-div');
let sideMenu = document.querySelector('.side-menu-ul-div');

let isMenuShown = false;

function showSideMenu() {
    
    if(isMenuShown == false) {
        isMenuShown = true;
        sideMenu.style.display = 'flex'; 
    } else if(isMenuShown == true) {
        isMenuShown = false;
        sideMenu.style.display = 'none';
    }
}

sideMenuBar.addEventListener('click', showSideMenu);