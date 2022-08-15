// function return value
function getName(): string {
    return "Hello From Function";
}
console.log(getName());

function getAge(): number {
    return 20;
}
console.log(getAge());

function justPrint(): void {
    console.log("Ini void");
}
justPrint();

// function argument
function multiplyNumber(val1: number, val2: number): number {
    return val1 * val2;
}
console.log(multiplyNumber(10, 10));

// function as data type
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

// function default parameter
const fullName = (firstName: string, lastName: string = "Mukti"): string => {
    return firstName + " " + lastName;
}
console.log(fullName("Ravi"));

// function optional parameter
const getUmur = (val1: string, val2?: string): string => {
    return val1 + val2;
}
console.log(getUmur("A "));
