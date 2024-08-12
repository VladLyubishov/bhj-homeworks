<<<<<<< HEAD
const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');
=======
const product = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')
const cartItems = {};
>>>>>>> 3bcd881a0a6709226533bd6c285c5889d2629d11
product.forEach(element => {
    const productInc = element.querySelector('.product__quantity-control_inc');
    const productDec = element.querySelector('.product__quantity-control_dec');
    const productValue = element.querySelector('.product__quantity-value');
    const productAdd = element.querySelector('.product__add');
    
    productInc.addEventListener('click', ()=> {
        productValue.innerText = Number(productValue.innerText) + 1 ;
    })

    productDec.addEventListener('click', ()=> {
        if (Number(productValue.innerText) >= 1){
            productValue.innerText = Number(productValue.innerText) - 1;
        }
    })

    productAdd.addEventListener('click', ()=> {
<<<<<<< HEAD

        const productId = element.getAttribute('data-id');
        const cartProductElements = Array.from(cartProducts.querySelectorAll('.cart__product'));
        const productInCart = cartProductElements.find(product => product.dataset.id === productId);
        const quantity = Number(productValue.innerText);
        if (productInCart) {
            const productCount = productInCart.querySelector('.cart__product-count');
            productCount.innerText = Number(productCount.innerText) + quantity;
        } else {
            cartProducts.insertAdjacentHTML('afterBegin', `
                <div class="cart__product" data-id=${element.getAttribute('data-id')}>
                    <img class="cart__product-image" src=${element.querySelector('img').getAttribute('src')}>
                    <div class="cart__product-count">${productValue.innerText}</div>
                </div>`
            );
        };
=======
        const itemId = element.getAttribute('data-id');
        if (cartItems[itemId]) {
            updateElem(Number(productValue.innerText), itemId);
        } else { 
            cartItems[itemId] = Number(productValue.innerText);
            createNewElem(Number(productValue.innerText), itemId, element);
        }
>>>>>>> 3bcd881a0a6709226533bd6c285c5889d2629d11
    });
});

function updateElem(productValue, itemId) {
    const cartItem = document.querySelector(`.cart__product[data-id="${itemId}"]`);
    if (cartItem) {
      cartItem.querySelector('.cart__product-count').innerText = Number(cartItem.querySelector('.cart__product-count').innerText) + productValue;
    }
  }

function createNewElem(productValue, itemId, element){
    let cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.setAttribute('data-id', itemId);
  
    let cartImg = document.createElement('img');
    cartImg.classList.add('cart__product-image');
    cartImg.setAttribute('src', element.querySelector('img').getAttribute('src'));
  
    let cartCount = document.createElement('div');
    cartCount.classList.add('cart__product-count');
    cartCount.innerText = productValue;
  
    cartProducts.insertAdjacentElement('afterBegin', cartProduct);
    cartProduct.insertAdjacentElement('afterBegin', cartImg);
    cartProduct.insertAdjacentElement('beforeEnd', cartCount);
}