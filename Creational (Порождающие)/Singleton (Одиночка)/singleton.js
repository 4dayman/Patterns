var Singleton = /** @class */ (function () {
    function Singleton() {
        console.log('Constructor Check!');
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
function singleton() {
    var singleton1 = Singleton.getInstance();
    // console.log(singleton1);
    var singleton2 = Singleton.getInstance();
    // console.log(singleton2);
    if (singleton1 === singleton2) {
        console.log('singleton1 = singleton2:', singleton1 === singleton2);
        console.log('Singletone works!');
    }
    else {
        console.log('Error!');
    }
}
singleton();
