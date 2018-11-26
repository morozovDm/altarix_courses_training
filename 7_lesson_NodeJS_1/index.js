const calculator = require("./calculator");
var operandA = process.argv[2], operandB = process.argv[4], operation = process.argv[3];
try {
console.log(calculator.calculate(operandA, operation, operandB));
} catch (err) {
    console.log(err);
} 
