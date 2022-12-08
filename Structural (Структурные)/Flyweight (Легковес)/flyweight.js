var Tea = /** @class */ (function () {
    function Tea(type) {
        this.type = type;
    }
    return Tea;
}());
var TeaFactory = /** @class */ (function () {
    function TeaFactory() {
        this.types = [];
    }
    TeaFactory.prototype.create = function (name) {
        var type = this.types[name];
        if (type) {
            return type;
        }
        // console.count('type')
        this.types[name] = new Tea(name);
        return this.types[name];
    };
    TeaFactory.prototype.getTypes = function () {
        console.log(this.types);
    };
    return TeaFactory;
}());
var factory = new TeaFactory();
var greenTea = factory.create('Green');
var greenTea1 = factory.create('Green');
var blackTea = factory.create('Black');
// console.log(factory.getTypes());
factory.getTypes();
