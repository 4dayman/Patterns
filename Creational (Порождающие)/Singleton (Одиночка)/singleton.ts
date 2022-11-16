class Singleton {
    constructor() {
        console.log('Constructor Check!');
    }
static instance: Singleton;
static getInstance() {
    if (!Singleton.instance) {
        Singleton.instance = new Singleton();
    }
    return Singleton.instance;
}
}
function singleton() {

    let singleton1 = Singleton.getInstance();
    // console.log(singleton1);
    let singleton2 = Singleton.getInstance();
    // console.log(singleton2);

    if(singleton1 === singleton2){
        console.log('singleton1 = singleton2:', singleton1 === singleton2)
        console.log('Singletone works!')
    } else {
        console.log('Error!')
    }
}

singleton();


