class Computer {
    checkPower(){
        console.log('Power ON!');
    }
    makeSound(){
        console.log('Turn On/Off sound');
    }
    loadingScreen(){
        console.log('Loading...');
    }
    readyState(){
        console.log('Ready to use');
    }
    endProcesses(){
        console.log('Close the processes');
    }
    sleep(){
        console.log('Going to sleep!');
    }
    powerOff(){
        console.log('Power OFF!');
    }
}
class ComputerFacade {
    computer: Computer;
    constructor(pc: Computer){
        this.computer = pc;
    }
    turnOn(){
        this.computer.checkPower();
        this.computer.makeSound();
        this.computer.loadingScreen();
        this.computer.readyState();
    }
    turnOff(){
        this.computer.endProcesses();
        this.computer.makeSound();
        this.computer.powerOff();
    }
    sleepMode(){
        this.computer.endProcesses();
        this.computer.sleep();
    }
}

const computer = new ComputerFacade(new Computer());
console.log(' ');
computer.turnOn();
console.log(' ');
computer.sleepMode();
console.log(' ');
computer.turnOff();