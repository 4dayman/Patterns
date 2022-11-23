interface CarsFactory {
    createSedan(): Sedan;
    createCoupe(): Coupe;
}
interface Sedan {
    sedan(): string;
}
interface Coupe {
    coupe(): string
}
class ToyotaFactory implements CarsFactory {
    public createSedan(): Sedan {
        return new  ToyotaSedan();
    }

    public createCoupe(): Coupe {
        return new ToyotaCoupe();
    }
}
class FordFactory implements CarsFactory {
    public createSedan(): Sedan {
        return new  FordSedan();
    }

    public createCoupe(): Coupe {
        return new FordCoupe();
    }
}
class ToyotaSedan implements Sedan {
    public sedan(): string {
        return  'Order: Toyota Sedan. \nDelivery in progres!' + '\n'
    }
}
class ToyotaCoupe implements Coupe {
    public coupe(): string {
        return  'Order: Toyota Coupe. \nDelivery in progres!' + '\n'
    }
}
class FordSedan implements Sedan {
    public sedan(): string {
        return  'Order: Ford Sedan. \nDelivery in progres!' + '\n'
    }
}
class FordCoupe implements Coupe {
    public coupe(): string {
        return  'Order: Ford Coupe. \nDelivery in progres!' + '\n'
    }
}
function factoryOfFactorys(factory: CarsFactory){
    const newSedan = factory.createSedan();
    const newCoupe = factory.createCoupe();
    console.log(newSedan.sedan())
    console.log(newCoupe.coupe())
}
factoryOfFactorys(new ToyotaFactory());
factoryOfFactorys(new FordFactory());