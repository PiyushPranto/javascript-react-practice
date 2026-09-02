function isValidPrice(price){
    return typeof price=== 'number'&& price>0;
}

function isValidEmail(email){
    return email.includes('@') && email.includes('.');
}

function calculateDiscount(price, discountPercent){
    if (! isValidPrice(price)){
        return 0;
    }
    let discountAmount = price*(discountPercent/100);
    return price - discountAmount;
}

function calculateFinalBill(price, vatPercent=15){
    let vat=(price*vatPercent)/100;
    return price+vat;
}

function formatBDT(amount){
    return `${amount.toFixed(2)} BDT`;
}

function capitalized(str){
    if ( !str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function processOrder(user, itemPrice, discountCode){
    console.log(`Processing order for ${capitalized(user.name)}...`);
    if (!isValidEmail(user.email)){
        console.log("Invalid email address.");
        return;
    }

    let currentPrice = itemPrice;
    if (discountCode == "NLB") {
        currentPrice = calculateDiscount(itemPrice, 20);
        console.log("20% discount applied.");
    }

    let finalBill = calculateFinalBill(currentPrice);
    console.log(`Final bill: ${formatBDT(finalBill)}`);
    console.log("Order processed successfully.");
}

let user1 = {name: "Piyush", email: "piyush@example.com"};
processOrder(user1, 1000, "NLB");