var NormalMode = /** @class */ (function () {
    function NormalMode() {
    }
    NormalMode.prototype.accept = function (visitor) {
        visitor.visitNormal(this);
    };
    return NormalMode;
}());
var DevTools = /** @class */ (function () {
    function DevTools() {
    }
    DevTools.prototype.accept = function (visitor) {
        visitor.visitDev(this);
    };
    return DevTools;
}());
var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.visitNormal = function (element) {
        console.log("Developer viewing page in normal mode.");
    };
    Developer.prototype.visitDev = function (element) {
        console.log('Developer viewing page in devTools mode.');
    };
    return Developer;
}());
var QA = /** @class */ (function () {
    function QA() {
    }
    QA.prototype.visitNormal = function (element) {
        console.log('QA viewing page in normal mode.');
    };
    QA.prototype.visitDev = function (element) {
        console.log('QA viewing page in devTools mode.');
    };
    return QA;
}());
function clientCode(components, visitor) {
    for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
        var component = components_1[_i];
        component.accept(visitor);
    }
}
var components = [
    new NormalMode(),
    new DevTools(),
];
var developer = new Developer();
clientCode(components, developer);
var qa = new QA();
clientCode(components, qa);
