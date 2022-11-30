interface IService {
    getCost(): number;
    getDescription(): string;
}
class SimpleService implements IService {
    getCost(): number {
        return 50;
    }
    getDescription(): string {
        return "Simple service.";
    }
}
class Decorator implements IService{
    service: IService;
    constructor(service: IService) {
        this.service = service;
    }
    getCost(): number {
        return this.service.getCost();
    }
    getDescription(): string {
        return this.service.getDescription();
    }
}
class HairColoring extends Decorator {
    getCost(): number {
        return this.service.getCost() + 450;
    }
    getDescription(): string {
        return "Hair coloring.: ";
    }
}
class HairCut extends Decorator {
    getCost(): number {
        return this.service.getCost() + 250;
    }
    getDescription(): string {
        return "Haircut.: ";
    }
}

let simpleService = new SimpleService();
const hairColoring = new HairColoring(simpleService);
const haircut = new HairCut(simpleService);
const total = (hairColoring.getCost() + haircut.getCost()).toString();
console.log(' ');
console.log(hairColoring.getDescription() + hairColoring.getCost());
console.log(haircut.getDescription() + haircut.getCost());
console.log('Total cost: ' + total);