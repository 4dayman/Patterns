interface IConverter {
    convertNumber(number: number): void;
}
class Conversion {
    private strategy: IConverter;
    constructor(strategy: IConverter) {
        this.strategy = strategy;
    }
    execute(num: number): void {
        this.strategy.convertNumber(num);
    }
}
class NumberToCureency implements IConverter {
    convertNumber(num: number): void {
        console.log(num.toLocaleString('id-ID', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'USD',
        }));
    }
}
class NumberToDate implements IConverter {
    convertNumber(num: number): void {
        console.log(new Date(num * 1000).toUTCString());
    }
}
const usd = new Conversion(new NumberToCureency);
usd.execute(1000);

const date = new Conversion(new NumberToDate);
date.execute(1000000);