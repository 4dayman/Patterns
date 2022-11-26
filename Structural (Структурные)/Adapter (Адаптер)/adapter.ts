interface Analog{
    handleAnalog(): string;
}
interface Digital{
    handleDigital(): string;
}
class VGA implements Analog{
    handleAnalog(): string {
        return 'Interface: VGA; \nSignal: Analogue;';
    }
}
class HDMI implements Digital{
    private vga: VGA = new VGA();
    handleDigital(): string {
        return this.vga.handleAnalog();
    }
}
const adapter: HDMI = new HDMI();
this.adapterResult = adapter.handleDigital();
console.log(this.adapterResult);