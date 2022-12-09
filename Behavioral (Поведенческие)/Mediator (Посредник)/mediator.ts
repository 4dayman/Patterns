interface IProduct {
    name: string;
    sell(): void;
}
interface IMediator {
    regProduct(product: IProduct): void;
    setStatus(status: boolean): void;
    isAvailable(): boolean;
}
class Product implements IProduct {
    name: string;
    mediator: IMediator;
    constructor (name: string, mediator: IMediator) {
        this.name = name;
        this.mediator = mediator;
    }
    sell(): void {
        if (this.mediator.isAvailable()) {
            this.mediator.setStatus(false);
            console.log(`product ${this.name} sold successfully!`);
        } else {
            console.log('The product is not sold yet, you must first register!!!');
        }
    }
}
class Mediator implements IMediator {
    product: Product;
    status: boolean = false;
    regedProduct(): void {
        if (this.status) {
            console.log(this.product);
        } else {
            console.log('No items for sale')
        }
    }
    regProduct(product: Product): void {
        if (this.status) {
            console.log('Can\'t register because there are still unsold items')
        } else {
            this.product = product;
            this.status = true;
            console.log('product registered successfully');
        }
    }
    setStatus(status: boolean): void {
        this.status = status;
    }
    isAvailable(): boolean {
        return this.status;
    }
}

const mediator = new Mediator();
const product = new Product('Tea', mediator);
const product2 = new Product('Coffee', mediator);
mediator.regProduct(product);
mediator.regProduct(product2);

product.sell();
product2.sell();

mediator.regedProduct();

mediator.regProduct(product2);
mediator.regedProduct();
product2.sell();
mediator.regedProduct();

