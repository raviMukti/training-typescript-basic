export class User {

    name: string;
    age: number;

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    setName(v: string): void {
        this.name = v;
    }

    getName = (): string => {
        return this.name;
    }
}

let user = new User("Ravi", 20);
console.log(user);

class Admin extends User{
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getRoleName: string = "Admin";

    constructor(name: string, age: number, phone: string)
    {
        super(name, age);
        this.phone = phone;
    }

    getRole = (): {read: boolean, write: boolean} => {
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(v: string)
    {
        this._email = v;
    }

    
    get email() : string {
        return this._email
    }
    
}

// let adm = new Admin("Adm", 10, "628782479");
// console.log(adm);
// adm.email = "email@mail.com";
// console.log(adm.email);

let roleName = Admin.getRoleName
console.log(roleName);



