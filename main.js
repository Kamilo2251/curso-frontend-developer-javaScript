const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const productDetail = document.querySelector('.product-detail');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menu.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleNavBarShoppingCart);


function toggleDesktopMenu(){
    const isNavBarShoppingCartClosed = productDetail.classList.contains('inactive');

    if(!isNavBarShoppingCartClosed){
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu(){
    const isNavBarShoppingCartClosed = productDetail.classList.contains('inactive');


    if(!isNavBarShoppingCartClosed){
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

};

function toggleNavBarShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   
    if(!isMobileMenuClosed || !isDesktopMenuClosed ){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }

    productDetail.classList.toggle('inactive')
};

const productList = [];

productList.push({
    name:'bike',
    price:'130',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'rueda',
    price:'70',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'caballo',
    price:'1130',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProduct(arr){

    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice= document.createElement('p');
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
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }

};

renderProduct(productList);