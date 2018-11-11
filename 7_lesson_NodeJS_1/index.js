const calculator = require("./calculator");
var operandA = process.argv[3], operandB = process.argv[5], operation = process.argv[4];
try {
console.log(calculator.calculate(operandA, operation, operandB));
} catch (err) {
    console.log(err);
} 