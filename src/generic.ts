// generic
function myData<T>(val: T) {
    return val
}

console.log(myData("Ravi").length);
console.log(myData(123));

const arrowFunc = <T>(val: T) => {
    
}