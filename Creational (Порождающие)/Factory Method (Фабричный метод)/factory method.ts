interface Parcel {
    pants?(): string,
    hats?(): string,
    shirts?(): string,
    underwear?(): string,
    outerwear?(): string,
    price(): number,
}
abstract class newParcel {
    public abstract  factoryMethod(): Parcel;
    public order() {
        const parcel = this.factoryMethod();
    }
}