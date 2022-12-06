var OfficeLock = /** @class */ (function () {
    function OfficeLock() {
    }
    OfficeLock.prototype.open = function () {
        console.log('Unlocked');
    };
    OfficeLock.prototype.close = function () {
        console.log('Locked');
    };
    return OfficeLock;
}());
var Security = /** @class */ (function () {
    function Security(lock) {
        this.lock = lock;
    }
    Security.prototype.open = function (password) {
        if (this.autorize(password)) {
            this.lock.open();
        }
        else {
            console.log('Password incorrect!');
        }
    };
    Security.prototype.autorize = function (password) {
        return password === 'password';
    };
    Security.prototype.close = function () {
        this.lock.close();
    };
    return Security;
}());
var door = new Security(new OfficeLock());
door.open('word');
door.open('password');
