import { Animal } from "./01-BaseClass-Animal";

export class Cat extends Animal {

    constructor(data: {age: number,legs: number ,name: string}){
        super(data.age, data.legs, data.name);
    }

  meow(): string {
    return "MEOW! MEOW! MEOW!";
  }
}
const cat1 = new Cat({ age: 19, legs: 4, name: "Baby"});
cat1.meow();
