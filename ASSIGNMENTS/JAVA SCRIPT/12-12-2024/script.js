
let u_name = prompt("Enter your name");
let prod = prompt("Enter your product");
let cost = prompt("Enter the cost");
let date = prompt("Enter the day of purchase");
let festie = prompt("Enter the occasion");
let shopping = prompt("Enter platform");

let obj =
{
    username:u_name,
    product:prod,
    cost:cost,
    day:date,
    occasion:festie,
    platfor:shopping,
}

console.log(`${obj.username} has purchased a ${obj.product} which costs ${obj.cost} on ${obj.day} on occassion of ${obj.occasion} in ${obj.platfor}`)

