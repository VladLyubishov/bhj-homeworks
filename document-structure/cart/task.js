
const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

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
    })

})