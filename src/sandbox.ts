// let greet: Function;

// () => void
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

type person = {
    name: string,
    age: number
}

let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}