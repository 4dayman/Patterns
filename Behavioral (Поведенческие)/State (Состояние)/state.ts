interface IProduct {
    name: string;
    saveProduct(): void;
}
class FeaturedProduct {
    private state: IProduct;
    constructor(state: IProduct) {
        this.state = state;
    }
    setProduct(state: IProduct): void {
        this.state = state;
    }
    getProduct(): void {
        console.log(this.state);
    }
    publish(): void {
        this.state.saveProduct();
    }
}
class Product implements IProduct {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    saveProduct(): void {
        console.log(`product set ${this.name} as a superior product`);
    }
}
const dress = new Product('dress');
const pants = new Product('pants');
const keyboard = new Product('keyboard');
const featuredProduct = new FeaturedProduct(dress);
featuredProduct.publish();
featuredProduct.getProduct();

featuredProduct.setProduct(keyboard);
featuredProduct.publish();
featuredProduct.getProduct();
