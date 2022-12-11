var EventType;
(function (EventType) {
    EventType[EventType["Corporate"] = 1] = "Corporate";
    EventType[EventType["Regular"] = 2] = "Regular";
})(EventType || (EventType = {}));
var CorporateCustomer = /** @class */ (function () {
    function CorporateCustomer() {
    }
    CorporateCustomer.prototype.update = function (info) {
        console.log('Stock price is now: ', info);
    };
    return CorporateCustomer;
}());
var RegularCustomer = /** @class */ (function () {
    function RegularCustomer() {
    }
    RegularCustomer.prototype.update = function (info) {
        console.log('Product price is now: ', info);
    };
    return RegularCustomer;
}());
var Observable = /** @class */ (function () {
    function Observable() {
        this.corporateObservers = [];
        this.regularObservers = [];
        this.stockPrice = 1;
        this.regularPrice = 2;
    }
    Observable.prototype.updateStock = function () {
        this.stockPrice = Math.round(100 * Math.random());
        this.notyfy(EventType.Corporate, "".concat(this.stockPrice));
    };
    Observable.prototype.updateRegular = function () {
        this.regularPrice = Math.round(100 * Math.random());
        this.notyfy(EventType.Regular, "".concat(this.regularPrice));
    };
    Observable.prototype.isCorporate = function (customer) {
        return customer instanceof CorporateCustomer;
    };
    Observable.prototype.isRegular = function (customer) {
        return customer instanceof RegularCustomer;
    };
    Observable.prototype.attach = function (customer) {
        if (this.isCorporate(customer)) {
            this.corporateObservers.push(customer);
        }
        else if (this.isRegular(customer)) {
            this.regularObservers.push(customer);
        }
        else
            return;
    };
    Observable.prototype.detach = function (customer) {
        if (this.isCorporate(customer)) {
            var index = this.corporateObservers.indexOf(customer);
            if (index === -1) {
                throw "No such corporate subscriber!";
            }
            else {
                this.corporateObservers.splice(index, 1);
            }
        }
        else if (this.isRegular(customer)) {
            var index = this.regularObservers.indexOf(customer);
            if (index === -1) {
                throw "No such regular subscriber!";
            }
            else {
                this.regularObservers.splice(index, 1);
            }
        }
        else {
            throw "Surscriber type is not supported!";
        }
    };
    Observable.prototype.notyfy = function (eventType, info) {
        switch (eventType) {
            case EventType.Corporate:
                this.corporateObservers.forEach(function (customer) {
                    customer.update(info);
                });
                break;
            case EventType.Regular:
                this.regularObservers.forEach(function (customer) {
                    customer.update(info);
                });
                break;
            default:
        }
    };
    return Observable;
}());
var warehouse = new Observable();
var MacDonalds = new CorporateCustomer();
var KFC = new CorporateCustomer();
var Dominos = new CorporateCustomer();
var John = new RegularCustomer();
var Mark = new RegularCustomer();
var Sean = new RegularCustomer();
warehouse.attach(MacDonalds);
warehouse.attach(KFC);
warehouse.attach(Dominos);
warehouse.attach(John);
warehouse.attach(Mark);
warehouse.attach(Sean);
var counter = 0;
var id = setInterval(function () {
    var news = Math.round(Math.random());
    console.log("".concat(news === 0 ? 'Corporate' : 'Regular', " news update:"));
    switch (news) {
        case 0:
            warehouse.updateStock();
            break;
        case 1:
            warehouse.updateRegular();
            break;
        default:
            console.log('Error!');
    }
    if (counter === 2) {
        warehouse.detach(MacDonalds);
        warehouse.detach(KFC);
    }
    if (counter === 3) {
        warehouse.detach(John);
        warehouse.detach(Mark);
    }
    if (counter > 4) {
        clearInterval(id);
    }
    counter += 1;
}, 5000);
