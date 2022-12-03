class Tea {
    type: string;
    constructor (type: string){
        this. type = type;
    }
}
class TeaFactory {
    types: string[];
    constructor(){
        this.types = [];
    }
    create(name: string) {
        let type = this.types[name];
        if (type) {
            return type;
        }
        // console.count('type')
        this.types[name] = new Tea(name);
        return this.types[name];
    }
    getTypes() {
        console.log(this.types);
    }
}

const factory = new TeaFactory();

const greenTea = factory.create('Green');
const blackTea = factory.create('Black');
// console.log(factory.getTypes());
factory.getTypes();