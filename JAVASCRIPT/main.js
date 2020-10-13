let navToggleStatus = false;

let toggleNav = () => {

    let getSideMenu = document.querySelector(".side-menu");

    if(navToggleStatus === false) {

        getSideMenu.style.visibility = "visible";
        getSideMenu.style.transition = "width 2s";
        navToggleStatus = true;
    }
    else if(navToggleStatus === true) {
        
        navToggleStatus = false;
        getSideMenu.style.visibility = "hidden";

    }
}