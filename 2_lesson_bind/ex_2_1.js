/*
    *\ brief 1.
*/
function bind(func, context){ // задаёт контекст для функции
    return function() {
        var fnArg = [].slice.call(arguments);
        return func.apply(context !== undefined ? context : this, fnArg);
    }
}

function sum() // тестовая функция суммирования
{
    console.log(this);
    var arr = [].slice.call(arguments);
    for(var i = 0; i < arr.length; i++)
        this.sum+= arr[i];
    return this.sum;
}

var bindedSum = bind(sum, {sum:10});
console.log(bindedSum(40,50,60));