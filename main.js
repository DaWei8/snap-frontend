var hamburger = document.querySelector(".snap__hamburger");
var menu = document.querySelector('.snap__navbar-right__mobile');



function showMenu() {
    menu.classList.toggle("show-menu");
    menu.classList.toggle("close-menu");
}
          
function closeMenu() {
    menu.classList.toggle("close-menu");
    menu.classList.remove("show-menu");
}