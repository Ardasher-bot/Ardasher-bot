let cart = [];

function addToCart(product, price) {
    const priceNumber = parseInt(price.match(/\d+/)[0], 10);
    cart.push({ product, price: priceNumber });
    updateCart();
}

function updateCart() {
    const cartCount = document.querySelector('#cart-count'); // Исправлено: используем #cart-count вместо .cart-count
    if (cartCount) {
        cartCount.textContent = cart.length;
    } else {
        console.error("Элемент #cart-count не найден");
    }
    console.log(cart);
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    if (addToCartButtons.length === 0) {
        console.error("Кнопки .add-to-cart не найдены");
        return;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            if (!productElement) {
                console.error("Родительский элемент .product не найден");
                return;
            }

            const productNameElement = productElement.querySelector('h3');
            const productPriceElement = productElement.querySelector('p');

            if (!productNameElement || !productPriceElement) {
                console.error("Название или цена товара не найдены");
                return;
            }

            const productName = productNameElement.textContent;
            const productPrice = productPriceElement.textContent;

            addToCart(productName, productPrice);
        });
    });
});