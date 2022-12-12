var Conversion = /** @class */ (function () {
    function Conversion(strategy) {
        this.strategy = strategy;
    }
    Conversion.prototype.execute = function (num) {
        this.strategy.convertNumber(num);
    };
    return Conversion;
}());
var NumberToCureency = /** @class */ (function () {
    function NumberToCureency() {
    }
    NumberToCureency.prototype.convertNumber = function (num) {
        console.log(num.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'USD'
        }));
    };
    return NumberToCureency;
}());
var NumberToDate = /** @class */ (function () {
    function NumberToDate() {
    }
    NumberToDate.prototype.convertNumber = function (num) {
        console.log(new Date(num * 1000).toUTCString());
    };
    return NumberToDate;
}());
var usd = new Conversion(new NumberToCureency);
usd.execute(1000);
var date = new Conversion(new NumberToDate);
date.execute(1000000);
