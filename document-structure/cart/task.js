const product = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')
const cartItems = {};
product.forEach(element => {
    const productInc = element.querySelector('.product__quantity-control_inc')
    const productDec = element.querySelector('.product__quantity-control_dec')
    const productValue = element.querySelector('.product__quantity-value')
    const productAdd = element.querySelector('.product__add');
    
    productInc.addEventListener('click', ()=> {
        productValue.innerText = Number(productValue.innerText) + 1 
    })

    productDec.addEventListener('click', ()=> {
        if (Number(productValue.innerText) >= 1){
            productValue.innerText = Number(productValue.innerText) - 1
        }
    })

    productAdd.addEventListener('click', ()=> {
        const itemId = element.getAttribute('data-id');
        if (cartItems[itemId]) {
            updateElem(Number(productValue.innerText), itemId);
        } else { 
            cartItems[itemId] = Number(productValue.innerText);
            createNewElem(Number(productValue.innerText), itemId, element);
        }
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