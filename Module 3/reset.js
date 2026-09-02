// function add(...numbers){
//     let total =0;

//     for (const num of numbers){
//         total+=num;
//     }
//     console.log(total);
// }
// add(1,2,3,4,5,6,7,8,9);

// const obj={
//     name: "Tonmoy",
//     age: 27,
//     occupation: "Software Engineer",
// }

// const {name, ...remaining}  =obj;

// console.log(remaining);

const arr=[1,2,3,4,5,6,7,8,9];
const arr2=[,,,...remaining]=arr;
console.log(remaining);