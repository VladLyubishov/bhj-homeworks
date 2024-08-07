const product = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')
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
        let cartProduct = document.createElement('div');
        cartProduct.classList.add('cart__product');
        cartProduct.setAttribute('data-id', element.getAttribute('data-id'));

        let cartImg = document.createElement('img');
        cartImg.classList.add('cart__product-image');
        cartImg.setAttribute('src', element.querySelector('img').getAttribute('src'));

        let cartCount = document.createElement('div');
        cartCount.classList.add('cart__product-count');
        cartCount.innerText = productValue.innerText;

        cartProducts.insertAdjacentHTML('afterBegin', cartProduct.outerHTML);
        cartProduct.insertAdjacentHTML('afterBegin', cartImg.outerHTML);
        cartProduct.insertAdjacentHTML('beforeEnd', cartCount.outerHTML);
    })
});

