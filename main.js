//creo una variable que hará una seleccion de la clase, del elemento con el cual deseo interactuar
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu  = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer =document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

//al objeto creado le asigno la accion de hacer click y se crea una fincion 'toggleDesktopMenu'
//para mostrar y ocultar el menu
menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleBurguerMenu);
menuCarrito.addEventListener('click',toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    //Si esta el menu mobile cerrado
    const isCartMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isCartMenuClosed){
        shoppingCartContainer.classList.add('inactive')
    } 

    //quita o pone la clase inactive para que aparezca o desaparezca el menu
   desktopMenu.classList.toggle('inactive');

}

//Menu mobile
function toggleBurguerMenu(){
    //Si esta el menu mobile cerrado
    const isCartMenuClosed = shoppingCartContainer.classList.contains('inactive');
    //Si el menu del carrito esta abierto que lo cierre
    if(!isCartMenuClosed){
        aside.classList.add('inactive')
    } 

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    //Si esta el menu mobile cerrado
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    //Si el menu mobile esta abierto que lo cierre
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    //cerrar el detalle del product cuando vpy abrir el carrito
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }

   shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside (){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');
}
//===============================
//=======Agregar productos=======
//===============================
const productList = [];
//agregamos un objeto al array
productList.push({
    name:'Bike',
    price: '120,00',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name:'Pantalla',
    price: '150,00',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name:'Mouse',
    price: '20,00',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

/*
<div class="product-card">
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
      </div> */

//genero una funcion para incluir cualquier array, segun necesidad
function renderProducts(arr){      
    //Insertar el array en javascript y luego inserta HTML desde javascript
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        //le damos un evento a ese elemento html creado desde javascript
        productImg.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        //Agregando los hijos al padre
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productInfoImgCart = document.createElement('img');
        //esta imagen como no varia si se agrega de una vez
        productInfoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        //para agregar la imagen dentro del figure y hacer esto:
        //<figure>
        //       <img src="./icons/bt_add_to_cart.svg" alt="">
        //</figure>
        productInfoFigure.appendChild(productInfoImgCart)

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);