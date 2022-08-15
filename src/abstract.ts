abstract class Vehicle {
    abstract wheels: number;

    start(): void {
        console.log("brumm");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

let c = new Car();
console.log(c.wheels);
c.start();

