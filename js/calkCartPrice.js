function calkCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(function (item) {

        const amountEL = document.querySelector('[data-counter]');
        const priceEL = document.querySelector('.price__currency');

        const currentPrice = parseInt(amountEL.innerText) * parseInt(priceEL.innerText);
        
    })
}