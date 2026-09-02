// let fruits =["apple", "banana", "orange"];

// let newFruits =fruits.forEach ((f,idx) => {
//     console.log (`${idx+1}->${f}`);

// })

// let fruits =["apPle", "bAnana", "orange"];

// let newFruits =fruits.map ((f) => f.toLowerCase());

// console.log (newFruits, "\n", fruits);

let fruits =["apPle", "bAnana", "orange"];

customFruits =fruits.filter((f) => f.length >5);
console.log (customFruits, "\n", fruits);