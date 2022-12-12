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
var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.powerOn = function () {
        return 'Powering On...';
    };
    Television.prototype.powerOff = function () {
        return 'Powering Off...';
    };
    Television.prototype.channelUp = function () {
        return 'Channel Up...';
    };
    Television.prototype.channelDown = function () {
        return 'Channel Down...';
    };
    return Television;
}());
var Sony = /** @class */ (function (_super) {
    __extends(Sony, _super);
    function Sony() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            width: '40 in',
            height: '40 in'
        };
        return _this;
    }
    return Sony;
}(Television));
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
            width: '30 in',
            height: '30 in'
        };
        return _this;
    }
    return Samsung;
}(Television));
var tv = new Sony();
console.log(tv.powerOn());
console.log(tv.channelDown());
console.log(tv.powerOff());
console.log(tv.properties.width);
console.log('');
var tv2 = new Samsung();
console.log(tv2.powerOn());
console.log(tv2.channelUp());
console.log(tv2.powerOff());
console.log(tv.properties);
