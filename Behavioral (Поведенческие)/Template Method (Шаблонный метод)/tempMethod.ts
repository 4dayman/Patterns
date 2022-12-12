abstract class Television {
    abstract properties: any;

    powerOn() {
        return 'Powering On...';
    }
    powerOff() {
        return 'Powering Off...';
    }
    channelUp() {
        return 'Channel Up...';
    }
    channelDown() {
        return 'Channel Down...';
    }
}
class Sony extends Television {
    properties = {
        width: '40 in',
        height: '40 in',
    }
}
class Samsung extends Television {
    properties = {
        width: '30 in',
        height: '30 in',
    }
}
const tv = new Sony();
console.log(tv.powerOn());
console.log(tv.channelDown());
console.log(tv.powerOff());
console.log(tv.properties.width);
console.log('');

const tv2 = new Samsung();
console.log(tv2.powerOn());
console.log(tv2.channelUp());
console.log(tv2.powerOff());
console.log(tv.properties);
