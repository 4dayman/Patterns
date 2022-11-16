class Prototype {
    constructor(public model: string,public color: string, public price: number | string) {
        this.model = model;
        this.color = color;
        this.price = price;
    }
    getClone() {
        return new Prototype(this.model, this.color, this.price);
    }
}
const prototype = new Prototype('iPhone 13', 'black', `1000 usd`);
console.log('Original:')
console.log(prototype); 

console.log('Clone ones:')
const prototypeOne = prototype.getClone();
prototypeOne.model = 'iPhone 12'
prototypeOne.price = 700 + ' usd';
console.log(prototypeOne); 

const prototypeTwo = prototype.getClone();
prototypeTwo.color = 'white';
console.log(prototypeTwo); 