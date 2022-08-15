import Laptop from "./BaseLaptop";

class Mackbook<T> extends Laptop<T> {

    constructor(type: T, numeric: boolean, touchButton: boolean) {
        super("Mackbook", type, numeric, touchButton)
    }
}

export default Mackbook