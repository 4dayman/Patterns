var FeaturedProduct = /** @class */ (function () {
    function FeaturedProduct(state) {
        this.state = state;
    }
    FeaturedProduct.prototype.setProduct = function (state) {
        this.state = state;
    };
    FeaturedProduct.prototype.getProduct = function () {
        console.log(this.state);
    };
    FeaturedProduct.prototype.publish = function () {
        this.state.saveProduct();
    };
    return FeaturedProduct;
}());
var Product = /** @class */ (function () {
    function Product(name) {
        this.name = name;
    }
    Product.prototype.saveProduct = function () {
        console.log("product set ".concat(this.name, " as a superior product"));
    };
    return Product;
}());
var dress = new Product('dress');
var pants = new Product('pants');
var keyboard = new Product('keyboard');
var featuredProduct = new FeaturedProduct(dress);
featuredProduct.publish();
featuredProduct.getProduct();
featuredProduct.setProduct(keyboard);
featuredProduct.publish();
featuredProduct.getProduct();
