interface IHandler {
    setNext(handler: IHandler): IHandler;
    handleRequest(request: string): string;
}
class Handler implements IHandler {
    nextHandler: IHandler;
    setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }
    handleRequest(request: string): any {
        if (this.nextHandler) {
            return this.nextHandler.handleRequest(request);
        }
        return null;
    }
}
class Designer extends Handler {
    handleRequest(request: string): string {
        if (request === 'Designer stuff') {
            return `Designer: I'll do the ${request}.`;
        }
        return super.handleRequest(request);
    }
}
class Developer extends Handler {
    handle(request: string): string {
        if (request === 'Developer stuff') {
            return `Developer: I'll do the ${request}.`;
        }
        return super.handleRequest(request);
    }
}
class QA extends Handler {
    handle(request: string): string {
        if (request === 'QA stuff') {
            return `QA: I'll do the ${request}.`;
        }
        return super.handleRequest(request);
    }
}
function assignment(handler: IHandler) {
    const work = ['Designer stuff', 'Developer stuff', 'QA stuff'];

    for (const toDo of work) {
        console.log(`Client: Who wants a ${toDo}?`);

        const result = handler.handleRequest(toDo);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${toDo} was left untouched.`);
        }
    }
}

const designer = new Designer();
const developer = new Developer();
const qa = new QA();

designer.setNext(developer).setNext(qa);

console.log('Chain: Designer > Developer > QA\n');
assignment(designer);
console.log('');

console.log('Subchain: Developer > QA\n');
assignment(developer);