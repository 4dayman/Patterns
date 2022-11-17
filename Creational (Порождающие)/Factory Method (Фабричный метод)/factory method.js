var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var newParcel = /** @class */ (function () {
    function newParcel() {
    }
    newParcel.prototype.order = function () {
        var parcel = this.factoryMethod();
        return 'Parcel ' + parcel.order() + ' contains:\n'
            + parcel.pants() + '\n'
            + parcel.hats() + '\n'
            + parcel.shirts() + '\n'
            + parcel.underwear() + '\n'
            + parcel.outerwear() + '\n'
            + 'Count of items: ' + parcel.items() + ' Pcs\n'
            + 'Price: ' + parcel.price() + ' Usd\n'
            + 'Adress: ' + parcel.adress() + '\n'
            + 'Expect delivery in a few days!\n'
            + ' ';
    };
    return newParcel;
}());
var NewOrder1 = /** @class */ (function (_super) {
    __extends(NewOrder1, _super);
    function NewOrder1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewOrder1.prototype.factoryMethod = function () {
        return new Order1();
    };
    return NewOrder1;
}(newParcel));
var Order1 = /** @class */ (function () {
    function Order1() {
    }
    Order1.prototype.order = function () {
        return '#001';
    };
    Order1.prototype.pants = function () {
        return 'Jeans art.1234';
    };
    Order1.prototype.hats = function () {
        return '-';
    };
    Order1.prototype.shirts = function () {
        return '-';
    };
    Order1.prototype.underwear = function () {
        return '-';
    };
    Order1.prototype.outerwear = function () {
        return '-';
    };
    Order1.prototype.items = function () {
        return 1;
    };
    Order1.prototype.price = function () {
        return 10;
    };
    Order1.prototype.adress = function () {
        return 'Main street 22';
    };
    return Order1;
}());
var NewOrder2 = /** @class */ (function (_super) {
    __extends(NewOrder2, _super);
    function NewOrder2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewOrder2.prototype.factoryMethod = function () {
        return new Order2();
    };
    return NewOrder2;
}(newParcel));
var Order2 = /** @class */ (function () {
    function Order2() {
    }
    Order2.prototype.order = function () {
        return '#002';
    };
    Order2.prototype.pants = function () {
        return '-';
    };
    Order2.prototype.hats = function () {
        return 'Art. 2587';
    };
    Order2.prototype.shirts = function () {
        return 'T-Shirt art. 5689';
    };
    Order2.prototype.underwear = function () {
        return '-';
    };
    Order2.prototype.outerwear = function () {
        return '-';
    };
    Order2.prototype.items = function () {
        return 2;
    };
    Order2.prototype.price = function () {
        return 20;
    };
    Order2.prototype.adress = function () {
        return 'Main street 23';
    };
    return Order2;
}());
function parcelOrder(creator) {
    console.log(creator.order());
}
parcelOrder(new NewOrder1());
parcelOrder(new NewOrder2());
