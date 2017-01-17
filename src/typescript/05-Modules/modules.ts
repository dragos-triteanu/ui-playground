// TypeScript is modular, we can divide our code up over several files
// In Angular 2 we then use  "import {} from ''" to access the code in these files

// We export a class, interface, variable, ... by adding 'export' keyword in front of it

import {SomeClass} from "../02-Classes/classes";


export class ExportedClass {
    private someClass:SomeClass;


    constructor() {
        this.someClass = new SomeClass(5);
    }

    public getSpeed():number {
        return this.someClass.getSpeed();
    }
}


let exportedClass = new ExportedClass();
console.log("From Exported class: Speed: " + exportedClass.getSpeed());
