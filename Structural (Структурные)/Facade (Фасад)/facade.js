var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.checkPower = function () {
        console.log('Power ON!');
    };
    Computer.prototype.makeSound = function () {
        console.log('Turn On/Off sound');
    };
    Computer.prototype.loadingScreen = function () {
        console.log('Loading...');
    };
    Computer.prototype.readyState = function () {
        console.log('Ready to use');
    };
    Computer.prototype.endProcesses = function () {
        console.log('Close the processes');
    };
    Computer.prototype.sleep = function () {
        console.log('Going to sleep!');
    };
    Computer.prototype.powerOff = function () {
        console.log('Power OFF!');
    };
    return Computer;
}());
var ComputerFacade = /** @class */ (function () {
    function ComputerFacade(pc) {
        this.computer = pc;
    }
    ComputerFacade.prototype.turnOn = function () {
        this.computer.checkPower();
        this.computer.makeSound();
        this.computer.loadingScreen();
        this.computer.readyState();
    };
    ComputerFacade.prototype.turnOff = function () {
        this.computer.endProcesses();
        this.computer.makeSound();
        this.computer.powerOff();
    };
    ComputerFacade.prototype.sleepMode = function () {
        this.computer.endProcesses();
        this.computer.sleep();
    };
    return ComputerFacade;
}());
var computer = new ComputerFacade(new Computer());
console.log(' ');
computer.turnOn();
console.log(' ');
computer.sleepMode();
console.log(' ');
computer.turnOff();
