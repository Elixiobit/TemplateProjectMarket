const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title = 'product', price = 1500) => {
    return `<div class="product-item">
                <a href="#"><img src="http://placehold.it/200x250" /></a>
                <h3 class="product-item__name">${title}</h3>
                <p class="product-item__cost">${price}</p>
                <button class="by-btn button">Добавить в корзину</button>
            </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price));
    // productList.join()
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);