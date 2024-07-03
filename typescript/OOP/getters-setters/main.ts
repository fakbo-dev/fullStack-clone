

class Myclass {

    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        this._myProperty = value;
    }
}

const myInstance = new Myclass();

console.log(`Current Value: ${myInstance.myProperty}`);

myInstance.myProperty = 10;

