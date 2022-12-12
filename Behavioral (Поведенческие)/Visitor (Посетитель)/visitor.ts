interface IPage {
    accept(visitor: IVisitor): void;
}
class NormalMode implements IPage {
    accept(visitor: IVisitor): void {
        visitor.visitNormal(this);
    }
}
class DevTools implements IPage {
    accept(visitor: IVisitor): void {
        visitor.visitDev(this);
    }
}

interface IVisitor {
    visitNormal(element: NormalMode): void;
    visitDev(element: DevTools): void;
}
class Developer implements IVisitor {
    visitNormal(element: NormalMode): void {
        console.log(`Developer viewing page in normal mode.`);
    }
    visitDev(element: DevTools): void {
        console.log('Developer viewing page in devTools mode.');
    }
}
class QA implements IVisitor {
    visitNormal(element: NormalMode): void {
        console.log('QA viewing page in normal mode.');
    }
    visitDev(element: DevTools): void {
        console.log('QA viewing page in devTools mode.');
    }
}
function clientCode(components: IPage[], visitor: IVisitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}const components = [
    new NormalMode(),
    new DevTools(),
]
const developer = new Developer();
clientCode(components, developer) ;

const qa = new QA();
clientCode(components, qa) ;