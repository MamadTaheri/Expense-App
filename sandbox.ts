// explicit types
let charachter: string;
let age: number;
let isLoggedIn: boolean;

// age="f";
age = 26;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas = ["yoshi", "mario"];

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hwello');
mixed.push(20);
mixed.push(true);
console.log(mixed);

let uid: string|number;
uid: '123';
uid: 123;

let person: object;
person = {
    name: "mamad",
    age: 30
}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: "ali",
    age: 20,
    beltColor: "black"
}
