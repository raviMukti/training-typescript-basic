class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(el: T): void {
        this.data.push(el)
    }

    addMultiple(...el: T[]): void {
        this.data.push(...el);
    }

    getAll(): T[] {
        return this.data;
    }
}

let l = new List<number>(1,2,3);
l.add(4);
console.log(l.getAll());
