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
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    Handler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return Handler;
}());
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Designer.prototype.handle = function (request) {
        if (request === 'Designer stuff') {
            return "Designer: I'll do the ".concat(request, ".");
        }
        return _super.prototype.handle.call(this, request);
    };
    return Designer;
}(Handler));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.handle = function (request) {
        if (request === 'Developer stuff') {
            return "Developer: I'll do the ".concat(request, ".");
        }
        return _super.prototype.handle.call(this, request);
    };
    return Developer;
}(Handler));
var QA = /** @class */ (function (_super) {
    __extends(QA, _super);
    function QA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QA.prototype.handle = function (request) {
        if (request === 'QA stuff') {
            return "QA: I'll do the ".concat(request, ".");
        }
        return _super.prototype.handle.call(this, request);
    };
    return QA;
}(Handler));
function assignment(handler) {
    var work = ['Designer stuff', 'Developer stuff', 'QA stuff'];
    for (var _i = 0, work_1 = work; _i < work_1.length; _i++) {
        var toDo = work_1[_i];
        console.log("Client: Who wants a ".concat(toDo, "?"));
        var result = handler.handle(toDo);
        if (result) {
            console.log("  ".concat(result));
        }
        else {
            console.log("  ".concat(toDo, " was left untouched."));
        }
    }
}
var designer = new Designer();
var developer = new Developer();
var qa = new QA();
designer.setNext(developer).setNext(qa);
console.log('Chain: Designer > Developer > QA\n');
assignment(designer);
console.log('');
console.log('Subchain: Developer > QA\n');
assignment(developer);
