const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
const isAsideMenuOpen = !aside.classList.contains('inactive');
const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
if (isAsideMenuOpen){
   aside.classList.add('inactive');
   desktopMenu.classList.remove('inactive');
}
else{
   desktopMenu.classList.remove('inactive');
}
if (isDesktopMenuOpen){
   desktopMenu.classList.add('inactive');
}
else{
   desktopMenu.classList.remove('inactive');
}

}
//Forma Profesor
function toggleDesktopMenuProfesor(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
   const ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
   const isAsideMenuOpen = !aside.classList.contains('inactive');
   if (ismobileMenuOpen){
      mobileMenu.classList.add('inactive');
   }
   else{
      mobileMenu.classList.remove('inactive');
   }
   if (isAsideMenuOpen){
      aside.classList.add('inactive');
      mobileMenu.classList.remove('inactive');
     
   }
   
   
}
function toggleCarritoAside(){
   const ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
   const isAsideMenuOpen = !aside.classList.contains('inactive');
   const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
   if (isDesktopMenuOpen){
      desktopMenu.classList.add('inactive');
   }
   if (ismobileMenuOpen){
      mobileMenu.classList.add('inactive');
   }
   if (isAsideMenuOpen){
   aside.classList.add('inactive');
   }
   else
   {
      aside.classList.remove('inactive');
   }
   
   
   
}