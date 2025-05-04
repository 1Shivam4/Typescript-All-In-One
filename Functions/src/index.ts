// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Gutarist {
  name?: stringOrNumber;
  active: boolean;
  albums: stringOrNumberArray;
}

type userId = stringOrNumber;

// Literal Types
let myname: "Dave";

let username: "Dave" | "John" | "Amy";
username = "Amy";

// functions

const add = (a: number, b: number): number => {
  return a + b;
};

// return type void
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hellow");
logMsg(add(5, 6));
logMsg(add(6, 6));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// type for a math function
type mathFunc = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunc = function (c, d) {
  return c * d;
};

logMsg(multiply(4, 4));

// optional parameters
// so if you have an optional parameter it should be the last parameter you want to have in your list
const addAll = (a: number, b: number, c?: number): number => {
  // so for this situation we have to add a type guard. So a type guard narrows down the type of value assigned to it
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};

// well default values will not work for the
// Alias or interface types
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b;
};

logMsg(addAll(1, 2, 3));
logMsg(addAll(3, 4));
logMsg(sumAll(3, 4));

// Rest parameters
// This is means the rest of the parameters
// And it should also come in the end of the function parameters definition
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

// well this is not an array we are passing but the function accepts it as an array.
// So doing this won't affect anything

logMsg(total(1, 2, 3, 4));

const createError = (erroMsg: string): never => {
  throw new Error(erroMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const isnumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberorString = (value: number | string): string => {
  // These are type guards which helps us to keep check of the return types
  if (typeof value === "string") return "string";
  if (isnumber(value)) return "number";

  // This is the never type return used when we are not
  // Actually returning anything even after defining the the return type
  // but this allows us define an explicit return when there is a chance that a function will return undefined
  return createError("This should never happen!");
};
