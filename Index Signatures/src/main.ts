// Index Signatures
// Index Signatures are useful when you are creating an object.
// But you don't know the name of the object keys
// But you know the shape of the objects and the type of the key

// It is also needed when you are trying to access
// The objects keys dynamically

// Used in starting of the lecture
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

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 24,
};

// This is the usual type of accessing the values of object
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

// this is the way to dynamically access the values of object
let prop: string = "Pizza";

// Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'.
// No index signature with a parameter of type 'string' was found on type 'TransactionObj'.
console.log(todaysTransactions[prop]);

// Same error occurs when you loop through the values
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40

console.log(todaysTransactions["Dave"]);

/////////////////////////////////////////////

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

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

//////////////////////////////////////////

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
