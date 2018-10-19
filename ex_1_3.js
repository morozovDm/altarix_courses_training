/*!
  * \brief  3. Функция получает число и возвращает строку с отформатированным значением вида «(-) 00 000 000,00». Разделитель разрядов – пробел, разделитель целой и дробной части - запятая. Количество знаков после запятой – от 0 до 2-х.
*/
function formatting(value){ // форматирует число к необходимому виду
  if(typeof value !== "number")
    throw "value is not a number";
  else
    {
      var formattingValue = Math.round(value * 100) / 100;
      return formattingValue.toString().replace('.',',').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }
    
}
try{
  console.log(formatting(-10023456.24));  
 console.log(formatting(1023456.2)); 
 console.log(formatting(3456.2456)); 
 console.log(formatting(-10023456)); 
}catch(e) {
  console.log(e);
}
