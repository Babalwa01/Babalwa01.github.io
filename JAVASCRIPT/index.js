document.getElementById('menu').onclick = () => {
    document.getElementById('side-menu-section').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
}

document.getElementById('close-link').onclick = () => {
    document.getElementById('side-menu-section').style.display = 'none';
}