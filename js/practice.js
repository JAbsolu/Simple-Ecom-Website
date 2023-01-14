class Product {
    constructor(val) {
        this.val = val;
    }
};

const sneaker = new Product();

sneaker.title = "Some Product";
sneaker.price = 100;
sneaker.compare = 200;
sneaker.description = "Just a regular sneaker";

console.log('This is the sneaker\'s title: ' + sneaker.title + "yes")