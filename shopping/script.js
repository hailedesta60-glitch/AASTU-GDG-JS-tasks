let customer ="East region";
let subtotal = 150;
let discount = subtotal-15;
let tax = subtotal*0.08;
let total = discount + tax;
   if (customer === "East region") {
    console.log("Customer: " + customer + " is eligible for discount");
    console.log("Subtotal: $" + total.toFixed(2));}
    else{
        console.log(" you are not elligible for discount");
    }

