// navigation
const getHamburger = document.querySelector('[alt="menu"]'); //mengambil tag img html yang memiliki alt="menu"
const getMobileNav = document.querySelector('.mobile-sidebar'); //buat ngambil tag html(dan child-nya kalau ada) sesuai yang di-select
const xButton = document.querySelector('[alt="silang"]'); //sama aja kayak menu

//================
// toggle nav
function toggleNav() {
    getMobileNav.classList.toggle('mobile-sidebar-toggle');
}

getHamburger.addEventListener('click', toggleNav);
xButton.addEventListener('click', toggleNav);

