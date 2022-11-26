var PC = /** @class */ (function () {
    function PC() {
    }
    PC.prototype.getOs = function () {
        return this.os;
    };
    PC.prototype.setOs = function (os) {
        this.os = os;
    };
    PC.prototype.getCpu = function () {
        return this.cpu;
    };
    PC.prototype.setCpu = function (cpu) {
        this.cpu = cpu;
    };
    PC.prototype.getSsd = function () {
        return this.ssd;
    };
    PC.prototype.setSsd = function (ssd) {
        this.ssd = ssd;
    };
    PC.prototype.toBuild = function () {
        return "Pc operaiting system: ".concat(this.os, "\ncpu: ").concat(this.cpu, "\nssd: ").concat(this.ssd, ".");
    };
    return PC;
}());
var Builder = /** @class */ (function () {
    function Builder() {
        this.pc = new PC();
    }
    Builder.prototype.assemblePC = function () {
        return this.pc.toBuild();
    };
    Builder.prototype.setOs = function (os) {
        this.pc.setOs(os);
    };
    Builder.prototype.setCpu = function (cpu) {
        this.pc.setCpu(cpu);
    };
    Builder.prototype.setSsd = function (ssd) {
        this.pc.setSsd(ssd);
    };
    return Builder;
}());
var Manufacturer = /** @class */ (function () {
    function Manufacturer() {
    }
    Manufacturer.manufacture = function (builder) {
        builder.setOs('ChromOS');
        builder.setCpu('Intel Core i5');
        builder.setSsd('SanDisk SSD 1TB');
        return builder.assemblePC();
    };
    return Manufacturer;
}());
function PCBuild() {
    var builder = new Builder();
    var pc = Manufacturer.manufacture(builder);
    console.log(pc);
}
PCBuild();
