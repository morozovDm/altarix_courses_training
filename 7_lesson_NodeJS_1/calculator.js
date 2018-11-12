function calculate(operand_1, operator, operand_2){
    operand_1 = Number(operand_1);
    operand_2 = Number(operand_2);
    if(Number.isNaN(operand_1) || Number.isNaN(operand_2)) 
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
