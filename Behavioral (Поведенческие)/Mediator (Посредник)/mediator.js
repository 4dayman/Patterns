var Product = /** @class */ (function () {
    function Product(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    Product.prototype.sell = function () {
        if (this.mediator.isAvailable()) {
            this.mediator.setStatus(false);
            console.log("product ".concat(this.name, " sold successfully!"));
        }
        else {
            console.log('The product is not sold yet, you must first register!!!');
        }
    };
    return Product;
}());
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.status = false;
    }
    Mediator.prototype.regedProduct = function () {
        if (this.status) {
            console.log(this.product);
        }
        else {
            console.log('No items for sale');
        }
    };
    Mediator.prototype.regProduct = function (product) {
        if (this.status) {
            console.log('Can\'t register because there are still unsold items');
        }
        else {
            this.product = product;
            this.status = true;
            console.log('product registered successfully');
        }
    };
    Mediator.prototype.setStatus = function (status) {
        this.status = status;
    };
    Mediator.prototype.isAvailable = function () {
        return this.status;
    };
    return Mediator;
}());
var mediator = new Mediator();
var product = new Product('Tea', mediator);
var product2 = new Product('Coffee', mediator);
mediator.regProduct(product);
mediator.regProduct(product2);
product.sell();
product2.sell();
mediator.regedProduct();
mediator.regProduct(product2);
mediator.regedProduct();
product2.sell();
mediator.regedProduct();
