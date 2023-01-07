const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
 if (desktopMenu.className == 'desktop-menu inactive'){
    desktopMenu.className = 'desktop-menu'; 
 }
 else if (desktopMenu.className == 'desktop-menu'){
    desktopMenu.className = 'desktop-menu inactive';
 }
}
//Forma Profesor
function toggleDesktopMenuProfesor(){
    desktopMenu.classList.toggle('inactive');
}