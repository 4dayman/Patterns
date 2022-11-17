interface Parcel {
    order(): string,
    pants?(): string,
    hats?(): string,
    shirts?(): string,
    underwear?(): string,
    outerwear?(): string,
    items(): number,
    price(): number,
    adress(): string
}
abstract class newParcel {
    public abstract  factoryMethod(): Parcel;
    public order(): string {
        const parcel = this.factoryMethod();
        return 'Parcel ' + parcel.order() + ' contains:\n'
         + parcel.pants!() + '\n'
         + parcel.hats!() + '\n'
         + parcel.shirts!() + '\n'
         + parcel.underwear!() + '\n'
         + parcel.outerwear!() + '\n'
         + 'Count of items: ' + parcel.items() + ' Pcs\n'
         + 'Price: ' + parcel.price() + ' Usd\n'
         + 'Adress: ' + parcel.adress() + '\n' 
         + 'Expect delivery in a few days!\n'
         + ' ';
    }
}
class NewOrder1 extends newParcel {
    public factoryMethod(): Parcel {
        return new Order1();
    }
}
class Order1 implements Parcel {
    order(): string {
        return '#001'
    }
    pants(): string {
        return 'Jeans art.1234'
    }
    hats(): string {
        return '-'
    }
    shirts(): string {
        return '-'
    }
    underwear(): string {
        return '-'
    }
    outerwear(): string {
        return '-'
    }
    items(): number {
        return 1 
    }
    price(): number {
        return 10
    }
    adress(): string {
        return 'Main street 22'
    }
}
class NewOrder2 extends newParcel {
    public factoryMethod(): Parcel {
        return new Order2();
    }
}
class Order2 implements Parcel {
    order(): string {
        return '#002'
    }
    pants(): string {
        return '-'
    }
    hats(): string {
        return 'Art. 2587'
    }
    shirts(): string {
        return 'T-Shirt art. 5689'
    }
    underwear(): string {
        return '-'
    }
    outerwear(): string {
        return '-'
    }
    items(): number {
        return 2 
    }
    price(): number {
        return 20
    }
    adress(): string {
        return 'Main street 23'
    }
}
function parcelOrder(creator: newParcel){
    console.log(creator.order())
}
parcelOrder(new NewOrder1());
parcelOrder(new NewOrder2());