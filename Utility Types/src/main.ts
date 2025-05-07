// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

// Partial allows us to pass only some of the props or the whole props form the type declaration.

// This allows us to pass not all of the props but declare it as they are not the parts of the props
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

// Required and Readonly

// This Required means we have to use give all the property names as it is required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc
  return assign;
};

const assignedVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignedVerified.grade = 88; // Cannot assign to 'grade' because it is a read-only property

recordAssignment({ ...assignGraded, verified: true });

// Record Type : Most used type
// Recod can contain the data like an object
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

// Interface
interface Grades {
  assign1: number;
  assing2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 87, assing2: 93 },
  Kelly: { assign1: 76, assing2: 15 },
};

// Pick and Omit

// This allows to pick anything form the assignments
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 88,
};

// This is used to omit the declared properties
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract

// This will exclude the
type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

// This is the normal type assignment behaviour.
// But the problem with this is if we are using it as a return type. As the function changes
// thus we also need to change the type definition or the return type
// type newAssign = { title: string; points: number };
// const createNewAssign = (title: string, points: number): newAssign => {
//   return { title, points };
// };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

// By using this we can redclear the return type.
// Useful when we are handling some API response
// Using some parts of the dynamic responses to structure it
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters: Derive a type from the function itself
// This gives us the tuple type of data
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the Return of a Promise
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
