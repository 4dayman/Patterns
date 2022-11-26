class PC {
    private os: string;
    private cpu: string;
    private ssd: string;
    
    public getOs (): string {
      return this.os;
    }
    public setOs (os: string){
      this.os = os;
    }
    public getCpu (): string {
      return this.cpu;
    }
    public setCpu (cpu: string){
      this.cpu = cpu;
    }
    public getSsd (): string {
      return this.ssd;
    }
    public setSsd (ssd: string){
      this.ssd = ssd;
    }
    toBuild(): string{
      return `Pc operaiting system: ${this.os}\ncpu: ${this.cpu}\nssd: ${this.ssd}.`
    }
  }
  interface PCBuilder{
    assemblePC(): string;
    setOs(os: string): void;
    setCpu(cpu: string): void;
    setSsd(ssd: string): void;
  }
  class Builder implements PCBuilder{
    private pc = new PC();
    assemblePC(): string {
      return this.pc.toBuild();
    }
    setOs(os: string): void {
      this.pc.setOs(os);
    }
    setCpu(cpu: string): void {
      this.pc.setCpu(cpu);
    }
    setSsd(ssd: string): void {
      this.pc.setSsd(ssd);
    }
  }
  class Manufacturer{
    public static manufacture(builder: PCBuilder): string{
      builder.setOs('ChromOS');
      builder.setCpu('Intel Core i5');
      builder.setSsd('SanDisk SSD 1TB');
      
      return builder.assemblePC();
    }
  }
  function PCBuild(): void {
    const builder: Builder = new Builder();
    const pc: string = Manufacturer.manufacture(builder);
    console.log(pc)
  }
  PCBuild();