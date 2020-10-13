let navToggleStatus = false;

let toggleNav = () => {

    let getSideMenu = document.querySelector(".side-menu");
    let getSideMenuLinks = document.querySelectorAll(".side-menu a");

    if(navToggleStatus === false) {

        getSideMenu.style.visibility = "visible";
        navToggleStatus = true;
    }
    else if(navToggleStatus === true) {
        
        navToggleStatus = false;
        getSideMenu.style.visibility = "hidden";
    }
}