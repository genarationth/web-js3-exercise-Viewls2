const payment1 = [100, 200, 300] //payment
const totalPay = payment1.reduce((Sum, n) => Sum + n, 0); // total payment
console.log(totalPay);

const numPay = payment1.length*3; //3$ per transaction

const addFee = (totalPay*0.01) +(numPay*0.01); //addition cost
console.log(addFee);
const finalPay = addFee + totalPay; //total pay
console.log(finalPay);