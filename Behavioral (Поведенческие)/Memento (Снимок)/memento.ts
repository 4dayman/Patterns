class Memento {
    value: string;
	constructor(value: string) {
		this.value = value;
	}
};

class Originator {
    value: string;
    memento: Memento;
    static save(value: string): Memento {
        return new Memento(value)
    }
    static restore(memento: Memento) {
        return memento.value;
    } 
};

class Caretaker {
    values: Memento[];
	constructor() {
		this.values = [];
	}

	addMemento(memento: Memento) {
		this.values.push(memento);
	}

	getMemento(index: number) {
		return this.values[index];
	}
}

const caretaker = new Caretaker();

caretaker.addMemento(Originator.save('Some text'));
caretaker.addMemento(Originator.save('Other text!'));
caretaker.addMemento(Originator.save('Some other text!!!'));
caretaker.addMemento(Originator.save('Some more text!!!'));

console.log(caretaker.values);
console.log('');
console.log(Originator.restore(caretaker.getMemento(0)));
console.log('');
console.log(Originator.restore(caretaker.getMemento(2)));