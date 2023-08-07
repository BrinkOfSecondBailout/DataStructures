class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine, and a beautiful ${this.color} color`;
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;
        return doors1 + doors2;
    }
}

class Suv extends Car {
    constructor(doors, engine, color, carStats) {
        super(doors, engine, color, carStats);
        this._brand = "No Brand yet";
        this.wheels = 4;
        this.ac = true;
    }
    get getBrand() {
        return this._brand;
    }
    set setBrand(brand) {
        this._brand = brand;
    }
    myBrand() {
        return console.log(`This SUV is a ${this._brand}`);
    }
}


const cx5 = new Suv(4, 'V6', 'Grey');

console.log(cx5.getBrand);
cx5.setBrand = 'Mazda';
console.log(cx5.myBrand());


