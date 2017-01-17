// Classes allow us to create 'blueprints' for objects
// In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...

// How to create a class

export class SomeClass {
    someString:string;
    private someNumber:number;

    constructor(someNumber:number) {
        this.someNumber = someNumber || 0;
    }

    accelerate():void {
        this.someNumber++;
    }

    throttle():void {
        this.someNumber--;
    }

    getSpeed():number {
        return this.someNumber;
    }

    static numberOfWheels():number {
        return 4;
    }
}

// Instantiate (create) an object from a class

let someClass = new SomeClass(5);
someClass.accelerate();
console.log("Speed: " + someClass.getSpeed())
console.log("Wheels: "  + SomeClass.numberOfWheels());