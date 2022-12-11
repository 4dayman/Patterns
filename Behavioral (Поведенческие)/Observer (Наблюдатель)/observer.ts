enum EventType {
    Corporate = 1,
    Regular,
}
interface IObserver {
    update(info: string): void;
}
class CorporateCustomer implements IObserver {
    update(info: string) {
        console.log('Stock price is now: ', info);
    }
}
class RegularCustomer implements IObserver {
    update(info: string) {
        console.log('Product price is now: ', info);
    }
}
interface IObservable {
    attach(customer: IObserver): void;
    detach(customer: IObserver): void;
    notyfy(eventType: EventType, info: string): void;
} 
class Observable implements IObservable {
    private corporateObservers: CorporateCustomer[];
    private regularObservers: RegularCustomer[];
    private stockPrice: number;
    private regularPrice: number;
    constructor() {
        this.corporateObservers = [];
        this.regularObservers = [];
        this.stockPrice = 1;
        this.regularPrice = 2;
    }
    updateStock() {
        this.stockPrice = Math.round(100 * Math.random());
        this.notyfy(EventType.Corporate, `${this.stockPrice}`);
    }
    updateRegular() {
        this.regularPrice = Math.round(100 * Math.random());
        this.notyfy(EventType.Regular, `${this.regularPrice}`);
    }
    private isCorporate(customer: IObserver) {
        return customer instanceof CorporateCustomer;
    }
    private isRegular(customer: IObserver) {
        return customer instanceof RegularCustomer;
    }
    attach(customer: IObserver) {
        if (this.isCorporate(customer)) {
            this.corporateObservers.push(customer);
        } else if (this.isRegular(customer)) {
            this.regularObservers.push(customer);
        } else return;
    }
    detach(customer: IObserver) {
        if (this.isCorporate(customer)) {
            const index = this.corporateObservers.indexOf(customer);
            if (index === -1) {
                throw "No such corporate subscriber!";
            } else {
                this.corporateObservers.splice(index, 1);
            }
        } else if (this.isRegular(customer)) {
            const index = this.regularObservers.indexOf(customer);
            if (index === -1) {
                throw "No such regular subscriber!";
            } else {
                this.regularObservers.splice(index, 1);
            }
        } else {
            throw "Surscriber type is not supported!";
        }
    }
    notyfy(eventType: EventType, info: string) {
        switch(eventType) {
            case EventType.Corporate:
                this.corporateObservers.forEach(customer => {
                    customer.update(info);
                });
                break;
            case EventType.Regular:
                this.regularObservers.forEach(customer => {
                    customer.update(info);
                });
                break;
            default:
        }
    }
}

const warehouse = new Observable();

const MacDonalds = new CorporateCustomer();
const KFC = new CorporateCustomer();
const Dominos = new CorporateCustomer();

const John = new RegularCustomer();
const Mark = new RegularCustomer();
const Sean = new RegularCustomer();

warehouse.attach(MacDonalds);
warehouse.attach(KFC);
warehouse.attach(Dominos);

warehouse.attach(John);
warehouse.attach(Mark);
warehouse.attach(Sean);

let counter = 0;
const id = setInterval(() => {
    const news = Math.round(Math.random());
    console.log(`${news === 0? 'Corporate' : 'Regular'} news update:`);
    switch(news) {
        case 0:
            warehouse.updateStock();
            break;
        case 1:
            warehouse.updateRegular();
            break;
        default:
            console.log('Error!');
    }
    if(counter === 2) {
        warehouse.detach(MacDonalds);
        warehouse.detach(KFC);
    }
    if(counter === 3) {
        warehouse.detach(John);
        warehouse.detach(Mark);
    }
    if(counter > 4) {
        clearInterval(id);
    }
    counter += 1;
}, 5000)