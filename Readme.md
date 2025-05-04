<h1>Static Types and Fundamental Structure in TypeScript</h1>

# Union Type

```ts
let unionType: string | boolean | number;

// The variable `unionType` can be assigned any value that is a string, boolean, or number.

unionType = "hello";
unionType = true;
unionType = 2002;

// ❌ Error:
unionType = /\w+\g/;

// This will throw an error because a RegExp is not assignable to type 'string | boolean | number'.
```

# Tuple Type

_Type definition:_ `(string, number, boolean)`

```ts
let myTuple: [string, number, boolean] = ["Dave", 2232, true];

let mixed = ["John", 2212, false];

mixed = myTuple; // ✅ This works because 'mixed' is inferred as (string | number | boolean)[]

// ❌ Error:
myTuple = mixed;
// Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'
// Target requires 3 element(s) but source may have fewer.

// to make it work you have to declare the position where you want to set those properties
myTuple[1] = 2;

// Same way you can assign the values to other positions also
```

# Arrays in TypeScript

Just like in vanilla JavaScript, you can create arrays in TypeScript — **with type safety**.

## Declaring Arrays with Type Safety

<h3>You can declare arrays with specific types to ensure type safety.</h3>

```ts
// Declaring an array of strings
let bands: string[] = [];

// Similarly, you can declare arrays for other types:
// let numbers: number[] = [];
// let flags: boolean[] = [];
```

**_type inference on arrays initialization _**

```ts
let guitars = ["Start", "Les Paul", 5545];
// The 'guitars' array will be inferred as (string | number)[]
// i.e., a union of strings and numbers
```

# Objects

<h3>You can use objects with type safety and also intialize the type or interface to define the type</h3>

<h3>Let's learn what type and interface is and how we can use it for type inference</h3>

```ts
// Objects decalration
// well this works fine as because at this time
// There is no initialization of any value

let myobj: object;
myobj = [];
myobj = bands;
myobj = {};
console.log(typeof myobj);

// Here values has been assigned and after assigning the values.
// Object has inferred the type for prop1 as a string
// and boolean for prop2
const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop2 = false;
```

## Object Type inferencing

```ts
type Gutarists = {
  name: string;
  active?: boolean; // this can be a boolean or undefined
  albums: (string | number)[];
};

// Usage
let evh: Gutarists = {
  name: "Eddy",
  albums: [1980, 1982, "divide"],
};

let JP: Gutarists = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

evh.years = 40; // XX not allowed
// this is not available or you cannot update anything in the type Gutarists
```

## Object inference using Interface

<b>There is another way to use the inference property that is by using interface</b>

It works same as the type, but where to use this is based on the complexity and with the personal preference

```ts
// For Interface we don't need use the = sign like in type
// Useful to work with calsses and smallar syntax
interface Gutarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}
```

```ts
// Usage
let AR: Gutarist = {
  name: "Arijit Singh",
  active: true,
  albums: [2003, 2002, "Muskan"],
};

let SN: Gutarist = {
  active: true,
  albums: ["Hate Story", "Kabir singh", 2013],
};

const greetGutarist = (gutarists: Gutarist) => {
  if (gutarists.name) {
    return `Hello ${gutarists.name.toUpperCase()}`;
  }

  return "Hello!";
};

console.log(greetGutarist(AR));
console.log(greetGutarist(SN));
```

# ENUMS

<h3> Unlike most TypeScript features, Enums are not type-level addition to Javascript but something added to the languange and runtime.</h3>

```ts
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U);
```

# Type Aliases

<h3>The type aliases allows us to define an alias which we can use it to infer other types. It works for both type and interfaces only when we asign the type as an alias.</h3>

```ts
// Type Aliases
// the type can be used as an alias and you can use
// It for type inference
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

interface Gutarist {
  name?: stringOrNumber;
  active: boolean;
  albums: stringOrNumberArray;
}

// But this is not true for interfaces. These cannot be used as an alias
interface newNumber = string  // XX
```

# Literal Types

<h3>Literals types allows you to add fixed values but just like a const variable that is certain that is values is never going to change. Same way not exact literals allow you to define some fixed values to the variable.

So that a variable can have only those literals. This allows us to define how to structure the the functions and their return type behaviour.

</h3>

```ts
let myname: "Dave"; // now this variable can have a value i.e. 'Dave'

myname = "John";
// Type '"John"' is not assignable to type '"Dave"'.

// in this example username can have any value out of these. But it is only limited to these values.
let username: "Dave" | "John" | "Amy";
username = "Amy";
```

# Functions

<h3>Just like vinella JS. Typescript allows you to define functions. But with type safety.</h3>

```ts
// default return type number by type reference
const add = (a: number, b: number) => {
  return a + b;
};
```

**_ void type _: when a function does not return anything**

```ts
// return type void
const logMsg = (message: any): void => {
  console.log(message);
};

// Usage
logMsg("hellow"); // logs hellow
logMsg(add(5, 6)); // logs 11
```

**return type decalration**

```ts
let subtract = function (c: number, d: number): number {
  return c - d;
};
```

# Usage of type and interface with functions

<h3>You can use types aliases and interface for return type declaration for functions.</h3>

```ts
// this is the type alias to make it infer the return types
type mynumber = (a: number, b: number) => number;

// With interface
// interface mynumber {
//   (a: number, b: number): number;
// }

let multiply: mynumber = function (c, d) {
  return c * d;
};
```

**_Note: Interface and type Aliases does not have any default type parameter._**

# Handling optional function parameters

```ts
// Cases like this will cause an error
const addAll = function (a: number, b: number, c?: number): number {
  return a + b + c; // 'c' is possibly 'undefined'.
};

// So to deal with this we can use type guard for making it safe to use and avoid the undefined
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};
```

**_Other way to deal with this is to use never_**

_The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true._

```ts
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
```

# Type casting or Type Assertion

<h3>Type casting or Type Assertion is a way to convert the type of a variable form more specific to less specific or vice versa
</h3>

**_There are two ways to do it_**

<li>Using 'as' keyword</li>

```ts
type One = string;
type Two = string | number;
type Three = "Hello";

let a: One = "hello";
let b = a as Two;

// so this inferes that b has the type of Two but value of 'a' this is also called less specific type. Means 'One' is of type string but deducing it to less specific i.e. 'TWO' which allows 'b' to have either two values, which is a 'string' or a 'number'.

let c = a as Three; // more specific stating that variable is a type of 'string'
```

<li>By using <> brackets</li>

```ts
// Type 2: <>
let d = <One>"world"; // this is allowed for normal JS
// But when using a library like React it does not work this way
let e = <string | number>"world";
```

<li>Usage of Literal types with Type casting </li>

```ts
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

// 10 as string;
//  well TS will show an error on doing this
// Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// unknown :- just like any type casting same thing u can do with unknown
// the main difference between these two is that unknown cannot be use to have a value stored in it

// So to make the above expression work
// WE can use double casting also referred to as two assertions
// But you have to avoid this because it is just like any type
10 as unknown as string;

// Well assertions are really helpful when we are using DOM
```

**_Well it is not mandatory to use Type casting or Type Assertion_**
**_But where to use it!!!_**

_Type assertion can be useful when using the DOM. As usually we don't know what type of element the DOM is having on it's usage time._

_Which can either return a null value by default so to specify a certain specific property to the DOM element. Type casting or Type Assertion shines._

```ts
// The DOM
const img = document.querySelector("img")!; // using ! tells that it is a not null assertion. It is declaring that we know it is not null
const myImg = document.getElementById("#img") as HTMLImageElement;

// This is also a way to assert the type
// But it is not useful for files like tsx
const nextImg = <HTMLImageElement>document.getElementById("#img");
img?.src;
myImg.src;
```

# Classes

```ts
// To make a method in class you will need a member as well as the constructor to make it available
class Coder {
  name: string; // member
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    // constructor to make it accessible or available
    this.name = name;
    this.music = music;
    this.lang = lang;
    this.age = age;
  }
}
```
