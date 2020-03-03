const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    imgCart: 'https://placehold.it/50x100',
    searchLine: '',
    filtered: [],
    isVisibleCart: false,
    quantity: 1
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
         .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      console.log(product.id_product);
      this.quantity++;
      console.log(this.filtered);
    },
    removeProduct(product){
      console.log(product.id_product);
      this.quantity--;
    },

    filter(){
      const regexp = new RegExp(this.searchLine, 'i');
      this.filtered = this.products.filter(product => regexp.test(product.product_name));
      // this.products.forEach(el => {
      //   if(!this.filtered.includes(el)){
      //     this.show = true;
      //   } else {
      //     this.show = false;
      //   }
      // })
    },
  },
  // хук жизненного цикла
  mounted(){
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
          this.filtered = this.products;
        }
      });
  }
});
