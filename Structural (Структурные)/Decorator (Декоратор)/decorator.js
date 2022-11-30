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
var SimpleService = /** @class */ (function () {
    function SimpleService() {
    }
    SimpleService.prototype.getCost = function () {
        return 50;
    };
    SimpleService.prototype.getDescription = function () {
        return "Simple service.";
    };
    return SimpleService;
}());
var Decorator = /** @class */ (function () {
    function Decorator(service) {
        this.service = service;
    }
    Decorator.prototype.getCost = function () {
        return this.service.getCost();
    };
    Decorator.prototype.getDescription = function () {
        return this.service.getDescription();
    };
    return Decorator;
}());
var HairColoring = /** @class */ (function (_super) {
    __extends(HairColoring, _super);
    function HairColoring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HairColoring.prototype.getCost = function () {
        return this.service.getCost() + 450;
    };
    HairColoring.prototype.getDescription = function () {
        return "Hair coloring.: ";
    };
    return HairColoring;
}(Decorator));
var HairCut = /** @class */ (function (_super) {
    __extends(HairCut, _super);
    function HairCut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HairCut.prototype.getCost = function () {
        return this.service.getCost() + 250;
    };
    HairCut.prototype.getDescription = function () {
        return "Haircut.: ";
    };
    return HairCut;
}(Decorator));
var simpleService = new SimpleService();
var hairColoring = new HairColoring(simpleService);
var haircut = new HairCut(simpleService);
var total = (hairColoring.getCost() + haircut.getCost()).toString();
console.log(' ');
console.log(hairColoring.getDescription() + hairColoring.getCost());
console.log(haircut.getDescription() + haircut.getCost());
console.log('Total cost: ' + total);
