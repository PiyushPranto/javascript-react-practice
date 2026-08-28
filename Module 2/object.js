let user = {
    name:"Piyush",
    age:25,
    address:"Dhaka",
};

delete user.address;
user.address = {
    city: "chandpur",
    area: "Nazirpara"
};
console.log(Object.entries(user));