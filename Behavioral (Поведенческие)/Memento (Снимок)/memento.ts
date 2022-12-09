interface IMemento {
    getState(): string;
    getName(): string;
    getDate(): string;
}
class Originator {
    state: string;
    constructor(state: string) {
        this.state = state;
        console.log(`Originator: My initial state is ${state}`);
    }
    action(): void {
        console.log('Originator: executing an action');
        this.state = this.getRandomString(30);
        console.log(`Originator: My state has changet to ${this.state}`)
    }
    getRandomString(length: number = 10): string {
        const CharSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array 
        .apply(null, { length } as any)
        .map(() => CharSet.charAt(Math.floor(Math.random() * CharSet.length)))
        .join('');
    }
    save(): IMemento {
        return new SomeMemento(this.state)
    }
    restore(memento: IMemento): void {
        this.state = memento.getState();
        console.log(`Originator: My state has changet to: ${this.state}`);
    }
}
class SomeMemento implements IMemento {
    state: string;
    date: string;
    constructor(state: string) {
        this.state = state;
        this.date = new Date().toString().slice(0, 19).replace('T', ' ');
    }
    getState(): string {
        return this.state;
    }
    getName(): string {
        return `${this.date} / (${this.state.substring(0, 18)}...)`;
    }
    getDate(): string {
        return this.date;
    }
}
class Caretaker {
    mementos: IMemento[] = [];
    originator: Originator;
    constructor(originator: Originator) {
        this.originator = originator;
    }
    backup(): void {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    }
    undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        console.log(`Caretaker: Restoring state to: ${memento?.getName()}`);
        if (memento) this.originator.restore(memento);
    }
    showHistory(): void {
        console.log('Caretaker: Here\s the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator('Some standart text');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.action();

caretaker.backup();
originator.action();

caretaker.backup();
originator.action();

console.log('');
caretaker.showHistory();

caretaker.undo();
caretaker.undo();
caretaker.undo();
