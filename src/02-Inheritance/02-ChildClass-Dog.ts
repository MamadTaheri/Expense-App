import { Animal } from "./01-BaseClass-Animal";

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    woof(): string {
        return 'WOOF! WOOF! WOOF! ';
    }
}
const dog1 = new Dog(2, 4, "Gator");
dog1.woof();
