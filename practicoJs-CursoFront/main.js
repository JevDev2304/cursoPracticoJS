const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const cardShowContainer = document.querySelector('.productShow-detail');
const cardShowContainerClose = document.querySelector('.productShow-detail-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
cardShowContainerClose.addEventListener('click', closeCardShowContainer);

function toggleDesktopMenu(){
const isAsideMenuOpen = !aside.classList.contains('inactive');
const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
const isShowCardMenuOpen= !cardShowContainer.classList.contains('inactive');
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
if (isShowCardMenuOpen) {
   cardShowContainer.classList.add('inactive');
}

}
//Forma Profesor
function toggleDesktopMenuProfesor(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
   const ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
   const isAsideMenuOpen = !aside.classList.contains('inactive');
   const isShowCardMenuOpen = !cardShowContainer.classList.contains('inactive');
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
   if (isShowCardMenuOpen){
      cardShowContainer.classList.add('inactive');
   }
   
   
}
function toggleCarritoAside(){
   const ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
   const isAsideMenuOpen = !aside.classList.contains('inactive');
   const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
   const isShowCardMenuOpen= !cardShowContainer.classList.contains('inactive');
   if (isShowCardMenuOpen){
      cardShowContainer.classList.add('inactive');
   }
   
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
function openCardShowContainer(){
const isAsideMenuOpen = !aside.classList.contains('inactive');
const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
if (isAsideMenuOpen){
   aside.classList.add('inactive')
}
if (isDesktopMenuOpen){
   desktopMenu.classList.add('inactive')
}
const ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
if (ismobileMenuOpen){
      mobileMenu.classList.add('inactive');
   }

cardShowContainer.classList.remove('inactive');

}
function closeCardShowContainer(){
   
   cardShowContainer.classList.add('inactive');
}
const productList = [];
productList.push({name:'Bike',price:120,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
   name:'Bicycle helmet',
   price: 1200,
   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bicycle_Helmet_0085.jpg/220px-Bicycle_Helmet_0085.jpg',
});
productList.push ({
   name:'Bicycle helmet',
   price: 1600,
   image: 'https://trek.scene7.com/is/image/TrekBicycleProducts/BontragerBlazeWaveCelHelmetCPSC_25359_E_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'
});
productList.push ({
   name:'Bicycle helmet',
   price: 1500,
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVrKYlG39VviX_BmKNnOiLY6xndLqDYTywosY5yVrSDL2tZYHlXBo-bfYvD73kfXomJ0&usqp=CAU',
});
productList.push ({
   name:'Seat',
   price: 300,
   image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
   name:'Tennis Montain Bike',
   price: 2200,
   image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
   name:'Sunglasses',
   price: 800,
   image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
   name:'Sunglasses',
   price: 600,
   image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
   name:'Bicycle seat bag',
   price: 876,
   image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> 
   */
function renderProducts(arr){
   for(product of arr){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      const sourceImgProduct = document.createElement('img');
      sourceImgProduct.setAttribute('src',product.image);
      sourceImgProduct.addEventListener('click',openCardShowContainer);
      

   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      const productInfoDiv = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
   
      const productName = document.createElement('p');
      productName.innerText = product.name;
   
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
   
   
   
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      productInfoFigure.appendChild(productImgCart);
   
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
      productCard.appendChild(sourceImgProduct);
      productCard.appendChild(productInfo);
      cardsContainer.appendChild(productCard);
   
   
   
   
      
   }
}
renderProducts(productList);


