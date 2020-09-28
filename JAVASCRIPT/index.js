function toggleMenu() {
    let menu = document.getElementById('side-menu-section');
    let displayState = menu.style.display;
    let menuIcon = document.getElementById('menu');

    if(displayState == 'none') {
        menu.style.display = 'block';
    }

}