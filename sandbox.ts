let charachter: string;
let age: number;
let isLoggedIn: boolean;

age = 51;

let ninjas: string[] = [];

ninjas.push('mamad');

let mixed: (string|number|boolean)[] = [];
mixed.push('mamad');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

let ninja1: object;
ninja1 = {
    name: 'mamad',
    age: 30
}

let ninja2: {
    name: string,
    age: number,
    beltColor: string
}

ninja2 = {
    name: 'mamad',
    age: 20,
    beltColor: 'black'
}