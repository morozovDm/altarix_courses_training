/*!
  * \brief  1. Функция – калькулятор. Получает 3 аргумента: первый операнд, оператор (+, -, *, /), второй операнд. Если операнды не являются числами, функция выбрасывает исключение. Если передан неизвестный оператор – функция выбрасывает исключение. Возвращает результат операции.
*/
function calculate(operand_1, operator, operand_2){
  if(typeof operand_1 !== "number" || typeof operand_2 !== "number") 
    throw "one of operands is not a number";
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
      throw "sorry this operator not support";
  } 
}
try {
  console.log(calculate(1,"+",2)); // 3
  console.log(calculate(1, "-", 2)); // -1
  console.log(calculate(2,"*",3)); // 6
  console.log(calculate(6,"/",4)); // 1.5
  console.log(calculate("a","/",2)); // first operand not a number
  console.log(calculate(1,"/","b")); // second operand not a number
  console.log(calculate(1,'\\',2)); // not supported operator
}catch(e) {
  console.log(e);
}
