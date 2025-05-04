"use strict";
let stringArr = ["one", "two", "hello"];
let guitars = ["Start", "Les Paul", 5545];
let mixedData = ["EWH", 1852, true];
stringArr[0] = "Hoe";
stringArr.push("Harry");
guitars.unshift("Jim");
guitars = stringArr;
// this is the annotation
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Dave", 2232, true];
let mixed = ["John", 2212, false];
myTuple[1] = 2; // This is not possbile for tuples. Because it is of tuple type
// Objects
let myobj;
myobj = [];
myobj = bands;
myobj = {};
console.log(typeof myobj);
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "Eddy",
    albums: [1980, 1982, "divide"],
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
// this is not available or you cannot update anything in the type Gutarists
// evh.years = 40
evh = JP; // now this will work
const greetGutarists = (gutarists) => {
    return `Hello ${gutarists.name}`;
};
console.log(greetGutarists(evh));
let AR = {
    name: "Arijit Singh",
    active: true,
    albums: [2003, 2002, "Muskan"],
};
let SN = {
    active: true,
    albums: ["Hate Story", "Kabir singh", 2013],
};
const greetGutarist = (gutarists) => {
    if (gutarists.name) {
        return `Hello ${gutarists.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(greetGutarist(AR));
console.log(greetGutarist(SN));
// ENUMS
// Unlike most TypeScript features, Enums are not type-level addition to Javascript but something added to the languange and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
