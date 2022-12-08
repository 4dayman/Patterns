var Iterator = /** @class */ (function () {
    function Iterator(c) {
        this.index = 0;
        this.collection = [];
        this.collection = c;
    }
    Iterator.prototype.next = function () {
        return this.collection[this.index++];
    };
    Iterator.prototype.hasNext = function () {
        return this.index < this.collection.length;
    };
    return Iterator;
}());
var Aggrerate = /** @class */ (function () {
    function Aggrerate(c) {
        this.collection = [];
        this.collection = c;
    }
    Aggrerate.prototype.createIterator = function () {
        return new Iterator(this.collection);
    };
    return Aggrerate;
}());
var aggrerate = new Aggrerate([1, 2, 5, 8]);
var iterator = aggrerate.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
