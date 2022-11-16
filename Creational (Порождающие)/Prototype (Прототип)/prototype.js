var Prototype = /** @class */ (function () {
    function Prototype(model, color, price) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Prototype.prototype.getClone = function () {
        return new Prototype(this.model, this.color, this.price);
    };
    return Prototype;
}());
var prototype = new Prototype('iPhone 13', 'black', "1000 usd");
console.log('Original');
console.log(prototype);
console.log('Clone ones');
var prototypeOne = prototype.getClone();
prototypeOne.model = 'iPhone 12';
prototypeOne.price = 700 + ' usd';
console.log(prototypeOne);
var prototypeTwo = prototype.getClone();
prototypeTwo.color = 'white';
console.log(prototypeTwo);
