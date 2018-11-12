function calculate(operand_1, operator, operand_2){
    console.log(operand_1, operator, operand_2)
    if(typeof operand_1 !== "number" || typeof operand_2 !== "number") 
      throw new Error("one of operands is not a number");
    switch(operator) {
      case '+':
        return operand_1 + operand_2;
      case '-':
        return operand_1 - operand_2;
      case '*':
        return operand_1 * operand_2;
      case '/':
        return operand_1 / operand_2;
      default:
        throw new Error("sorry this operator not support");
    } 
  }
  exports.calculate = calculate;
