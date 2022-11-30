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
var Manikure = /** @class */ (function () {
    function Manikure(service) {
        this.service = service;
    }
    Manikure.prototype.getCost = function () {
        return this.service.getCost() + 150;
    };
    Manikure.prototype.getDescription = function () {
        return "Manikure.: ";
    };
    return Manikure;
}());
var HairCut = /** @class */ (function () {
    function HairCut(service) {
        this.service = service;
    }
    HairCut.prototype.getCost = function () {
        return this.service.getCost() + 250;
    };
    HairCut.prototype.getDescription = function () {
        return "Haircut.: ";
    };
    return HairCut;
}());
var simpleService = new SimpleService();
var manikure = new Manikure(simpleService);
var haircut = new HairCut(simpleService);
var total = (manikure.getCost() + haircut.getCost()).toString();
console.log(' ');
console.log(manikure.getDescription() + manikure.getCost());
console.log(haircut.getDescription() + haircut.getCost());
console.log('Total cost: ' + total);
