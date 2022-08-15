interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string = "Asus";
    constructor(name: string)
    {
        this.name = name
    }
    on(): void
    {
        console.log("on");
        
    }
    off(): void
    {
        console.log("off");
        
    }
}

class Macbook implements Laptop {
    name: string = "Macbook";
    keyBoardLight: boolean = true;
    on(): void
    {
        console.log("on");
    }
    off(): void
    {
        console.log("off");
    }

}

let a = new Asus("ASUS X411")
console.log(a.name);
console.log(a.on());
console.log(a.off());


