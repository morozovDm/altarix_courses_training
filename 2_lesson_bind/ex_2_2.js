/*
    *\ brief 2. Не принимает аргументов, возвращает parseInt, если вызывается с аргументом в первый раз, иначе не вычисляет заново, а возвращает значение
*/
function parseIntWithCache(){
    var inner_arg = [].slice.call(arguments);
    if (inner_arg.length > 1) throw "too much arguments";
    else {
        var cachedValue = parseInt(inner_arg, 10);
        return function(){ // замыкание
            if (cachedValue !== cachedValue) 
            {
                throw "value is NotANumber";
                return;
            }
             return cachedValue;
        }
    }
}
var parsedInt = parseIntWithCache("10"); 
try {
    console.log(parsedInt()); // 10
    console.log(parsedInt()); // 10, проверка на кэш
    parseIntWithCache("mrsd")(); // NaN
} catch(e) { console.log(e)};