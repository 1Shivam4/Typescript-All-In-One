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

<h4> Above code example, is a one way to declare members of a class in TS. But it comes with a lot of boilerplate code along with type safety ofc.But there is another way i.e. or a way to avoid this boilerplate and also there is no harm keeping it like the above one</h4>

- By using Data modifiers or Visiblity modifiers or Access modifiers (You can name it whatever you want)\*

```ts
class Code {
  secondLang!: string; //  if you need the members but not instantiated them. You can use the assertion
  // But for beginners you should avoid using assertion

  constructor(
    public readonly name: string, // this is when the name is assigned but cannot be changed thereafter
    public music: string,
    private age: number,
    protected lang: string = "Typescript" //  this will allow you to make it optional parameter
  ) {
    /**  like above code you don't need to use the declaration here after defining the members with modifiers. But if you want you can have them in your code. */
  }

  public getAge() {
    return `Hello I'm ${this.age}`;
  }
}

const Shiva = new Code("Shivam", "Rock", 21);
// console.log(Shiva.getAge());

// console.log(Shiva.age); // this is only accessble inside of the class

// console.log(Shiva.lang); // this is only accessble inside of the class and the class that extends it
```

## inheritance

```ts
class WebDev extends Code {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Logi", 25);
console.log(Sara.getLang());

// console.log(Sara.age); // even though you have have extended a class you cannot access it from the child class

// console.log(Sara.lang); // same goes with the protected value directly
```

<h4>Using Interface for a class</h4>

```ts
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

// when you are using an interface for a class for type definition
// the calss should have all the properties or variables of the interface
// If you change anything in class that is related with the interface it will check the type
// And will show an error if you change the type
class Guitarists implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

// Instantiate the class
const Page = new Guitarists("Jimmy", "guitar");
console.log(Page.play("strums"));
```

<h4>Using static member:- A static member will directly be applied to the class itself. You do not need to intantiate it for usage.</h4>

```ts
class Peeps {
  // this implies that the count does not apply
  // to any instantiation of the calss
  // It applies to the calss directly to itself
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  // the static type also allows us to avoid method or member declaration
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

// The final thing with the static member is that it will apply direclty to the class
// And not to any specific object that you instantiate with the calss
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Sofiya = new Peeps("Sofiya");

console.log(Steve.id);
console.log(Sofiya.id);
console.log(John.id);
console.log(Peeps.count);
```

<h4>Using Getters and Setters</h4>

```ts
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // If we leave it like this this will be an getter. To set the value we need to have a setter
  public get data(): string[] {
    return this.dataState;
  }

  public set data(state: string[]) {
    if (Array.isArray(state) && state.every((el) => typeof el === "string")) {
      this.dataState = state;
    } else throw new Error("Param is not an array of strings");
  }
}

const Rockerz = new Bands();
Rockerz.data = ["Neil Young", "Led Zep"];
console.log(Rockerz.data);

// setter
Rockerz.data = [...Rockerz.data, "ZZ Top"];
console.log(Rockerz.data);

Rockerz.data = ["Van Halen"];
```

# Index Signatures

<h4>Index Signatures are useful when you are creating an object. when you don't know the name of the object keys. But you know the shape of the objects and the type of the key</h4>

_It is also needed when you are trying to access The objects keys dynamically_

```ts
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//   readonly [index: string]: number; // Now this is the index signatures.
//   // Where we know that all the keys will be a string and all the values will be a number
//   // You can also use union
// }
```

```ts
const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 24,
};
```

_This is the usual type of accessing the values of object_

```ts
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
```

```ts
// this is the way to dynamically access the values of object
let prop: string = "Pizza";

// Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
// No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
console.log(todaysTransactions[prop]);
```

_Same error occurs when you loop through the values_

## Using Assestion to define the key

```ts
interface Student {
  // [key: string]: string | number | number[] | undefined; // index signature
  name: string;
  gpa: number;
  classes?: number[];
}

const student: Student = {
  name: "Dave",
  gpa: 4.4,
  classes: [100, 300],
};

// console.log(student.test);

for (const key in student) {
  // When you don't have the index signature.
  // You can use the assertion keyof
  // It will look through your object and assigns the key parameter
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  // But this can be also used when we don't know the type of the key
  console.log(student[key as keyof typeof student]);
});
```

## Use Of Record Type when you don't have index signatures

```ts
// interface Incomes {
// You cannot have the index as the union type of predefined values
//   [key: string | number | 'salary']: number;
// }

// Instead you can use the Record type
type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number>;

const monthlySalary: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlySalary) {
  console.log(monthlySalary[revenue as keyof Incomes]);
}
```

# Generics

<h4> Generics allows us to predefine some varaible properties type, interface. When it is not certain what type of data is going to be returned</h4>

```ts
// This is the example of generic type
// As it will accept any type of value pass into the function
const echo = <T>(arg: T): T => arg;
```

## Usage of generics inside of Function declaration and function call

```ts
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  // Used isObj function to check the object
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }

  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
```

## Creating Generics with interface

```ts
// Interface having value and is as type variables
interface BoolCheck<T> {
  value: T;
  is: Boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }

  return { value: arg, is: !!arg };
};
```

## Use of Generics in Classes

```ts
// Generice in a class
class StateObj<T> {
  private data;

  constructor(val: T) {
    this.data = val;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObj<string>("John");
console.log(store.state);
store.state = "Dave";
// store.state = 12; // this will give you error because of the type inference hence the type of this state is string when we are this point

const mystate = new StateObj<(string | number | boolean)[]>([15]);
mystate.state = ["Dave", 42, true];
console.log(mystate.state);
```

### For more complex example check the main.ts file of Generic Typing in resources

# Utility Types

<h4>Prebuilt types which helps you define the return or the type usecase.</h4>

### Partial type

- This allows to pass the selected props from the type definition (type or interface)\*

```ts
const updateAssignment = (
  assign: Assignment,
  propsToUpdte: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdte };
};

const assign1: Assignment = {
  studentId: "comsc1122",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 })); // This is the example of the partial assignment
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
```

## Required and Readonly

### Required Type

_This Required means we have to use give all the property names as it is required_

```ts
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc
  return assign;
};
```

### Readonly Type

```ts
const assignedVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignedVerified.grade = 88; // Cannot assign to 'grade' because it is a read-only property

recordAssignment({ ...assignGraded, verified: true });
```

### Important: Record Type

- Record can contain the data like an object\*

```ts
// Type definition of Record Type => {string, string}
const hexColorMap: Record<string, string> = {
  red: "#FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};
```

### Record with interface

```ts
interface Grades {
  assign1: number;
  assing2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 87, assing2: 93 },
  Kelly: { assign1: 76, assing2: 15 },
};
```

### Pick and Omit

**Pick**
_This allows to pick anything form the assignments_

```ts
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 88,
};
```

**Omit**
_This is used to omit the declared properties_

```ts
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};
```

### Extract and Exclude

```ts
type adjustedGrade = Exclude<LetterGrades, "U">;
// returns => type adjustedGrade = "A" | "B" | "C" | "D" as it excludes "U" From the list

type highGrades = Extract<LetterGrades, "A" | "B">;
// extracts => type highGrades = "A" | "B"
```

### Important: Return Type

```ts
//This is the normal type assignment behaviour.
// But the problem with this is if we are using it as a return type.
// As the function changes thus we also need to change the type definition or the return type

type newAssign = { title: string; points: number };
const createNewAssign = (title: string, points: number): newAssign => {
  return { title, points };
};

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

// By using this we can redclear the return type.
// Useful when we are handling some API response
// Using some parts of the dynamic responses to structure it
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
```

### Parameters

_Derive a type from the function itself.
This gives us the tuple type of data_

```ts
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);
```

### Awaited helps to handle return Promises

```ts
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUser = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>;

fetchUser().then((users) => console.log(users));
```
