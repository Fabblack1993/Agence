let toggle_menu = document.querySelector('.responsive-menu');
let menu = document.querySelector('.menu');
toggle_menu.onclick = function () {
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive');
}


