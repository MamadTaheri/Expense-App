let greet:(a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string) => {
    if (action === 'add') {
        return numberOne + numberTwo;
    } else {
        return numberOne - numberTwo;
    }
}

type person = {name: string, age: number};

let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}