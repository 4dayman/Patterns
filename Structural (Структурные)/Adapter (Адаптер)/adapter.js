var VGA = /** @class */ (function () {
    function VGA() {
    }
    VGA.prototype.handleAnalog = function () {
        return 'Interface: VGA; \nSignal: Analogue;';
    };
    return VGA;
}());
var HDMI = /** @class */ (function () {
    function HDMI() {
    }
    HDMI.prototype.handleDigital = function () {
        return 'Interface: HDMI; \nSignal: Digital;';
    };
    return HDMI;
}());
var HDMIToVGA = /** @class */ (function () {
    function HDMIToVGA() {
        this.vga = new VGA();
    }
    HDMIToVGA.prototype.handleDigital = function () {
        return this.vga.handleAnalog();
    };
    return HDMIToVGA;
}());
var adapter = new HDMIToVGA();
this.adapterResult = adapter.handleDigital();
console.log(this.adapterResult);
