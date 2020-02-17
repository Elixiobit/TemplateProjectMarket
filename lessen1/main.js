const products = [
    {id: 1, title: 'Notebook', price: 20000, picture: '<img src="http://placehold.it/200x250" />'},
    {id: 2, title: 'Mouse', price: 1500, picture: '<img src="http://placehold.it/200x250" />'},
    {id: 3, title: 'Keyboard', price: 5000, picture: '<img src="http://placehold.it/200x250" />'},
    {id: 4, title: 'Gamepad', price: 4500, picture: '<img src="http://placehold.it/200x250" />'},
];
const defaultPicture = '<img src="http://dummyimage.com/200x250/99cccc.jpg&text=Loading" />';
const renderProduct = (title = 'product', price = 1500, picture = defaultPicture) => {
    return `<div class="product-item">
                <a href="#">${picture}</a>
                <h3 class="product-item__name">${title}</h3>
                <p class="product-item__cost">${price}</p>
                <button class="by-btn button">Добавить в корзину</button>
            </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price, item.picture));
    document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);