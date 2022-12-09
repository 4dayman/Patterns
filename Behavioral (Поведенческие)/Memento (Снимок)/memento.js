var Memento = /** @class */ (function () {
    function Memento(value) {
        this.value = value;
    }
    return Memento;
}());
;
var Originator = /** @class */ (function () {
    function Originator() {
    }
    Originator.save = function (value) {
        return new Memento(value);
    };
    Originator.restore = function (memento) {
        return memento.value;
    };
    return Originator;
}());
;
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.values = [];
    }
    Caretaker.prototype.addMemento = function (memento) {
        this.values.push(memento);
    };
    Caretaker.prototype.getMemento = function (index) {
        return this.values[index];
    };
    return Caretaker;
}());
var caretaker = new Caretaker();
caretaker.addMemento(Originator.save('Some text'));
caretaker.addMemento(Originator.save('Other text!'));
caretaker.addMemento(Originator.save('Some other text!!!'));
caretaker.addMemento(Originator.save('Some more text!!!'));
console.log(caretaker.values);
console.log('');
console.log(Originator.restore(caretaker.getMemento(0)));
console.log('');
console.log(Originator.restore(caretaker.getMemento(2)));
