/*
    *\ brief 3.Функция принимает любое количество аргументов, возвращает их сумму без использования for
*/
function getTotalSum() { // функция суммирования элементов без использования for, методом рекурсии
    var args = [].slice.call(arguments);
    if(args.length === 1) return args[0];
    return args.shift() + getTotalSum.apply(getTotalSum, args);
}

console.log(getTotalSum(1,2,3,4,5));//15
console.log(getTotalSum(1,2,3,5)); // 11
console.log(getTotalSum(1,3,4)); // 8
console.log(getTotalSum(1)); // 1