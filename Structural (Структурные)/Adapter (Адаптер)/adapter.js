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
        this.vga = new VGA();
    }
    HDMI.prototype.handleDigital = function () {
        return this.vga.handleAnalog();
    };
    return HDMI;
}());
var adapter = new HDMI();
this.adapterResult = adapter.handleDigital();
console.log(this.adapterResult);
