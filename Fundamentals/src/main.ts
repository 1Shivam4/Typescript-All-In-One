let stringArr = ["one", "two", "hello"];

let guitars = ["Start", "Les Paul", 5545];

let mixedData = ["EWH", 1852, true];

stringArr[0] = "Hoe";
stringArr.push("Harry");

guitars.unshift("Jim");

guitars = stringArr;

// this is the annotation
let bands: string[] = [];

bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 2232, true];

let mixed = ["John", 2212, false];

myTuple[1] = 2; // This is not possbile for tuples. Because it is of tuple type

// Objects
let myobj: object;
myobj = [];
myobj = bands;
myobj = {};
console.log(typeof myobj);

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop2 = false;

type Gutarists = {
  name: string;
  active?: boolean; // this can be a boolean or undefined
  albums: (string | number)[];
};

let evh: Gutarists = {
  name: "Eddy",
  albums: [1980, 1982, "divide"],
};

let JP: Gutarists = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

// this is not available or you cannot update anything in the type Gutarists
// evh.years = 40

evh = JP; // now this will work

const greetGutarists = (gutarists: Gutarists) => {
  return `Hello ${gutarists.name}`;
};

console.log(greetGutarists(evh));

// so there is another way to use the inference property that is by using interface
// It works same as the type, but where to use this
// Is based on the complexity and with the personal preference

interface Gutarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

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

// ENUMS
// Unlike most TypeScript features, Enums are not type-level addition to Javascript but something added to the languange and runtime.

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U);
