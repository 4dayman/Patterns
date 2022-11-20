var ToyotaFactory = /** @class */ (function () {
    function ToyotaFactory() {
    }
    ToyotaFactory.prototype.createSedan = function () {
        return new ToyotaSedan();
    };
    ToyotaFactory.prototype.createCoupe = function () {
        return new ToyotaCoupe();
    };
    return ToyotaFactory;
}());
var FordFactory = /** @class */ (function () {
    function FordFactory() {
    }
    FordFactory.prototype.createSedan = function () {
        return new FordSedan();
    };
    FordFactory.prototype.createCoupe = function () {
        return new FordCoupe();
    };
    return FordFactory;
}());
var ToyotaSedan = /** @class */ (function () {
    function ToyotaSedan() {
    }
    ToyotaSedan.prototype.sedan = function () {
        return 'Order: Toyota Sedan. \nDelivery in progres!' + '\n';
    };
    return ToyotaSedan;
}());
var ToyotaCoupe = /** @class */ (function () {
    function ToyotaCoupe() {
    }
    ToyotaCoupe.prototype.coupe = function () {
        return 'Order: Toyota Sedan. \nDelivery in progres!' + '\n';
    };
    return ToyotaCoupe;
}());
var FordSedan = /** @class */ (function () {
    function FordSedan() {
    }
    FordSedan.prototype.sedan = function () {
        return 'Order: Ford Sedan. \nDelivery in progres!' + '\n';
    };
    return FordSedan;
}());
var FordCoupe = /** @class */ (function () {
    function FordCoupe() {
    }
    FordCoupe.prototype.coupe = function () {
        return 'Order: Ford Sedan. \nDelivery in progres!' + '\n';
    };
    return FordCoupe;
}());
function factoryOfFactorys(factory) {
    var toyota1 = factory.createSedan();
    var toyota2 = factory.createCoupe();
    console.log(toyota1.sedan());
    console.log(toyota2.coupe());
    var ford1 = factory.createSedan();
    var ford2 = factory.createCoupe();
    console.log(ford1.sedan());
    console.log(ford2.coupe());
}
factoryOfFactorys(new ToyotaFactory() && new FordFactory());
