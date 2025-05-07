"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Partial allows us to pass only some of the props or the whole props form the type declaration.
// This allows us to pass not all of the props but declare it as they are not the parts of the props
const updateAssignment = (assign, propsToUpdte) => {
    return Object.assign(Object.assign({}, assign), propsToUpdte);
};
const assign1 = {
    studentId: "comsc1122",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 })); // This is the example of the partial assignment
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
// This Required means we have to use give all the property names as it is required
const recordAssignment = (assign) => {
    // send to database, etc
    return assign;
};
const assignedVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignedVerified.grade = 88; // Cannot assign to 'grade' because it is a read-only property
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record Type : Most used type
// Recod can contain the data like an object
const hexColorMap = {
    red: "#FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 87, assing2: 93 },
    Kelly: { assign1: 76, assing2: 15 },
};
const score = {
    studentId: "k123",
    grade: 88,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// ReturnType
// This is the normal type assignment behaviour.
// But the problem with this is if we are using it as a return type. As the function changes
// thus we also need to change the type definition or the return type
// type newAssign = { title: string; points: number };
// const createNewAssign = (title: string, points: number): newAssign => {
//   return { title, points };
// };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUser().then((users) => console.log(users));
