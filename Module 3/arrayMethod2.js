// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// let customFruits = fruits.find((f) => f.length >5);
// // console.log (customFruits, "\n", fruits);

// let findfr =fruits.includes("raspberry");
// // console.log (findfr);

let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
];

// let studentCheck = students.some((s) => s.age >21);
let studentCheck = students.every((s) => s.age >19);
console.log (studentCheck, "\n", students);