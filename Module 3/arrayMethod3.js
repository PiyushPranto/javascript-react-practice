let products=[
    {title : "laptop", price : 1000, inStock : true},
    {title : "phone", price : 500, inStock : false},
    {title : "tablet", price : 300, inStock : true},
    {title : "monitor", price : 800, inStock : true},
];

let totalPrice = products.reduce ((acc, current)=> {
    return (acc+=current.price);

},300);
console.log(totalPrice)

let sorted = products.sort ((a,b)=> a.price - b.price);
console.log(sorted);

let estPrice =products .filter  ((p) => p.inStock == true)
.reduce ((acc, current) =>{
    return (acc+=current.price);
},0);
console.log(estPrice);