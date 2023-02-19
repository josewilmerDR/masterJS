function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tax = preTaxAndTipAmount * (9.5 / 100)
    let tip = preTaxAndTipAmount * (15 / 100)

   return preTaxAndTipAmount + tax + tip;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9