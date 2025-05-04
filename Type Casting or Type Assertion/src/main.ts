type One = string;
type Two = string | number;
type Three = "Hello";

// type assertion
// convert to more or less specific

// Type 1: using as keyword
let a: One = "hello";
let b = a as Two; // so this inferes that b has the type of Two but value of 'a'
// Less specific type
let c = a as Three; // more specific

// Type 2: <>
let d = <One>"world"; // this is allowed for normal JS
// But when using a library like React it does not work that way
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;

  return "" + a + b;
};

// so in here as the function returns either number of string
// It will throw  and error and will tell that this
// Could be either string or a number which is not compatible with the type
// But by converting the result to the specific part
// It will solve the issue
let myVal: string = addOrConcat(2, 2, "concat") as string;

// be careful! TS sees no problem - but a string is return
let nextVal: number = addOrConcat(2, 2, "concat") as number;

//  well TS will show an error on doing this
// Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// 10 as string;

// unknown :- just like any type casting same thing u can do with unknown
// the main difference between these two is that unknown cannot be use to have a value stored in it

// So to make the above expression work
// WE can use double casting also referred to as two assertions
// But you have to avoid this because it is just like any type
10 as unknown as string;

// Well assertions are really helpful when we are using DOM

// The DOM
const img = document.querySelector("img")!; // using ! tells that it is a not null assertion. It is declaring that we know it is not null
const myImg = document.getElementById("#img") as HTMLImageElement;

// This is also a way to assert the type
// But it is not useful for files like tsx
const nextImg = <HTMLImageElement>document.getElementById("#img");
img?.src;
myImg.src;
