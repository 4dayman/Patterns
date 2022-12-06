interface DoorLock {
    open();
    close();
}
class OfficeLock implements DoorLock {
    open() {
        console.log('Unlocked');
    }
    close() {
        console.log('Locked');
    }
}
class Security {
    lock: DoorLock;
    constructor(lock: DoorLock) {
        this.lock = lock;
    }
    open(password: string) {
        if (this.autorize(password)) {
            this.lock.open();
        } else {
            console.log('Password incorrect!')
        }
    }
    autorize(password: string) {
        return password === 'password'
    }
    close() {
        this.lock.close();
    }
}

const door = new Security(new OfficeLock());

door.open('word');
door.open('password');