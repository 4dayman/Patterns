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
        return  'Order: Toyota Sedan. \nDelivery in progres!' + '\n'
    }
}
class FordSedan implements Sedan {
    public sedan(): string {
        return  'Order: Ford Sedan. \nDelivery in progres!' + '\n'
    }
}
class FordCoupe implements Coupe {
    public coupe(): string {
        return  'Order: Ford Sedan. \nDelivery in progres!' + '\n'
    }
}
function factoryOfFactorys(factory: CarsFactory){
    const toyota1 = factory.createSedan();
    const toyota2 = factory.createCoupe();
    console.log(toyota1.sedan())
    console.log(toyota2.coupe())
    const ford1 = factory.createSedan();
    const ford2 = factory.createCoupe();
    console.log(ford1.sedan())
    console.log(ford2.coupe())
}
factoryOfFactorys(new ToyotaFactory() && new FordFactory());