"use strict";
// Type Aliases
// Literal Types
let myname;
let username;
username = "Amy";
// functions
const add = (a, b) => {
    return a + b;
};
// return type void
const logMsg = (message) => {
    console.log(message);
};
logMsg("hellow");
logMsg(add(5, 6));
logMsg(add(6, 6));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(4, 4));
// optional parameters
// so if you have an optional parameter it should be the last parameter you want to have in your list
const addAll = (a, b, c) => {
    // so for this situation we have to add a type guard. So a type guard narrows down the type of value assigned to it
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// well default values will not work for the
// Alias or interface types
const sumAll = (a, b, c = 2) => {
    return a + b;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(3, 4));
logMsg(sumAll(3, 4));
// Rest parameters
// This is means the rest of the parameters
// And it should also come in the end of the function parameters definition
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// well this is not an array we are passing but the function accepts it as an array.
// So doing this won't affect anything
logMsg(total(1, 2, 3, 4));
const createError = (erroMsg) => {
    throw new Error(erroMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isnumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberorString = (value) => {
    // These are type guards which helps us to keep check of the return types
    if (typeof value === "string")
        return "string";
    if (isnumber(value))
        return "number";
    // This is the never type return used when we are not
    // Actually returning anything even after defining the the return type
    // but this allows us define an explicit return when there is a chance that a function will return undefined
    return createError("This should never happen!");
};
