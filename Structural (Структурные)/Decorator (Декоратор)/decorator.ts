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
class Manikure implements IService {
    service: IService;
    constructor(service: IService) {
        this.service = service;
    }
    getCost(): number {
        return this.service.getCost() + 150;
    }
    getDescription(): string {
        return "Manikure.: ";
    }
}
class HairCut implements IService {
    service: IService;
    constructor(service: IService) {
        this.service = service;
    }
    getCost(): number {
        return this.service.getCost() + 250;
    }
    getDescription(): string {
        return "Haircut.: ";
    }
}

const simpleService = new SimpleService();
const manikure = new Manikure(simpleService);
const haircut = new HairCut(simpleService);
const total = (manikure.getCost() + haircut.getCost()).toString();
console.log(' ');
console.log(manikure.getDescription() + manikure.getCost());
console.log(haircut.getDescription() + haircut.getCost());
console.log('Total cost: ' + total);
