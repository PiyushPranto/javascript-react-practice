// let cart1=['egg','milk','bread'];
// let cart2=[...cart1,'butter','cheese'];

// console.log(cart1, cart2);

const personalInfo ={
    name:'Piyush',
    age: 22,
}

const contactInfo ={
    phone: 1234567890,
    email: 'piyush@example.com'
}
const fullInfo ={
    ...personalInfo,contactInfo
}

console.log(fullInfo);