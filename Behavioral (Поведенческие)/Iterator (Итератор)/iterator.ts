interface IIterator<T> {
    next(): T;
    hasNext(): boolean;
}
interface IAggregate {
    createIterator(): IIterator<number>;
} 
class Iterator<T> implements IIterator<number> {
    index = 0;
    collection: Number[] = [];
    constructor(c: Number[]) {
        this.collection = c;
    }
    next(): any {
        return this.collection[this.index++];
    }
    hasNext(): boolean {
        return this.index < this.collection.length;
    }
}
class Aggrerate implements IAggregate {
    collection: Number[] = [];
    constructor(c: Number[]) {
        this.collection = c;
    }
    createIterator(): IIterator<number> {
        return new Iterator(this.collection);
    }
}

const aggrerate: Aggrerate = new Aggrerate([1, 2, 5, 8]);
const iterator = aggrerate.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}