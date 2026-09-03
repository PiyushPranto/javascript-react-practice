let user1={
    name: "Piyush",
    address: {
        city: "Dhaka",
    },
};

let user2={
    name:"John",
    //No address 
};
console.log(user1.address?.city);
console.log(user2.address?.city);

//Nullish Coalescing
console.log(user2.address?.city ?? "Dhaka");