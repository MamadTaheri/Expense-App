// By default ->> public
export class Animal {
    // public age: number;
    protected age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }
    get birthday(): number {
        return this.age + 1;
    }
}

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;
}


const cat = new Cat({ age: 19, legs: 4, name: 'Morann'});