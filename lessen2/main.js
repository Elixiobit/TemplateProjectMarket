class ProductItem {
    constructor(product, img='https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();
        this.toTalCost();
        // console.log(this.goods);
        // console.log(this.allProducts);
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 1000},
            {id: 2, title: 'Mouse', price: 100},
            {id: 3, title: 'Keyboard', price: 250},
            {id: 4, title: 'Gamepad', price: 150},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    toTalCost () {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
        // let sumGoods = 0;
        // this.allProducts.forEach(goods => sumGoods += goods.price);
        // const block = document.querySelector(this.container);
        // block.setAttribute('data-totalCost', `${sumGoods} \u20bd`);
        // console.log(`Общая сумма товаров равна ${sumGoods} \u20bd`);
    }

}


new ProductList();

