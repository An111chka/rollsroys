
window.addEventListener('click', function (event) {

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){

        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');

    }

 if (event.target.dataset.action === 'plus') {

     counter.innerText = ++counter.innerText;

 }

    if (event.target.dataset.action === 'minus') {

        // проверяем чтобы счетчик был больше 1
        if ( parseInt(counter.innerText) > 1 ) {
            // изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1); {

            // удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            toggleCartStatus ();
        }

    }
    })