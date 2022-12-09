var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
        this.date = new Date().toString().slice(0, 19).replace('T', ' ');
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    Memento.prototype.getName = function () {
        return "".concat(this.date, " / (").concat(this.state.substring(0, 18), "...)");
    };
    Memento.prototype.getDate = function () {
        return this.date;
    };
    return Memento;
}());
var Originator = /** @class */ (function () {
    function Originator(state) {
        this.state = state;
        console.log("Originator: My initial state is ".concat(state));
    }
    Originator.prototype.action = function () {
        console.log('Originator: executing an action');
        this.state = this.getRandomString(30);
        console.log("Originator: My state has changet to ".concat(this.state));
    };
    Originator.prototype.getRandomString = function (length) {
        if (length === void 0) { length = 10; }
        var CharSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array
            .apply(null, { length: length })
            .map(function () { return CharSet.charAt(Math.floor(Math.random() * CharSet.length)); })
            .join('');
    };
    Originator.prototype.save = function () {
        return new Memento(this.state);
    };
    Originator.prototype.restore = function (memento) {
        this.state = memento.getState();
        console.log("Originator: My state has changet to: ".concat(this.state));
    };
    return Originator;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    Caretaker.prototype.backup = function () {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        console.log("Caretaker: Restoring state to: ".concat(memento === null || memento === void 0 ? void 0 : memento.getName()));
        if (memento)
            this.originator.restore(memento);
    };
    Caretaker.prototype.showHistory = function () {
        console.log('Caretaker: Here\s the list of mementos:');
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return Caretaker;
}());
var originator = new Originator('Some standart text');
var caretaker = new Caretaker(originator);
caretaker.backup();
originator.action();
caretaker.backup();
originator.action();
caretaker.backup();
originator.action();
console.log('');
caretaker.showHistory();
caretaker.undo();
caretaker.undo();
caretaker.undo();
