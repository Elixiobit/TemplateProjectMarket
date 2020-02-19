class Hamburger {
    constructor(size, topping, dope){
        this.allHamburger = [];
        this._fetchSize();
        this._fetchTopping();
        this._fetchDope();
        this.renderSize();
        this.renderTopping();
        this.renderDope();
        this.sumCalories();
    }
    _fetchSize() {
        this.size = [
            {id: 1, size: 'Big', calories: 40 , cost: 100},
            {id: 2, size: 'Small', calories: 20 , cost: 50},
        ];
    }
    _fetchTopping() {
        this.topping = [
            {id: 3, topping: 'with cheese', calories: 20 , cost: 10},
            {id: 4, topping: 'with salad', calories: 5 , cost: 20},
            {id: 5, topping: 'with potatoes', calories: 10 , cost: 15},
        ];
    }
    _fetchDope() {
        this.dope = [
            {id: 6, dope: 'seasoning', calories: 40 , cost: 100},
            {id: 7, dope: 'mayonnaise', calories: 20 , cost: 50},
        ];
    }

    renderSize(){
        this.size.forEach(sizeH => {
            if (sizeH.size === size) this.allHamburger.push(sizeH);
        });
    }
    renderTopping(){
        this.topping.forEach(toppingH => {
            if (toppingH.topping === topping) this.allHamburger.push(toppingH);
        });
    }
    renderDope(){
        this.dope.forEach(dopeH => {
            if (dopeH.dope === dope) this.allHamburger.push(dopeH);
        });
        console.log(this.allHamburger);
    }
    sumCalories(){
    let sumCal = 0;
    let sumCost = 0;
    this.allHamburger.forEach(hamburger => {
        sumCal += hamburger.calories;
        sumCost += hamburger.cost;
    });
    console.log(`Общее количество каллорий = ${sumCal}. Стоимость = ${sumCost}`);
}

}
let size = "Big";
let topping = 'with potatoes';
let dope = 'seasoning';
new Hamburger(size, topping, dope);
