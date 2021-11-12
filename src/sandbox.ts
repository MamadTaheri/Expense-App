let greet: Function;

// greet = "mamad";

greet = () => {
  console.log("hello world");
};

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(43, 10, 856);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
// result = "a";

type StringOrNum = string | number;

type objWithName = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const sayHello = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const sayHelloAgian = (user: objWithName) => {
  console.log(`${user.name} says hello again`);
};
