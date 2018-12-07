/*!
  * \brief  2. Функция получает первым параметром массив, каждый элемент которого является строкой. Вторым параметром подстроку для поиска. Возвращает количество элементов массива, которые содержат переданную подстроку.
*/
function makeString() // генерирует рандомную строку
{
    var possible = "abcdefghijklmnopqrstuvwxyz";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

function search(innerArray, content) { // поиск количества вхождений элемента в массив
  return innerArray.reduce(function(count, current){
    if(current === content) 
      count++;
    return count;
  },0);
}

var array = [];
for(var i = 0; i < 10; i++)
  {
    array.push(makeString());
  }

console.log("Array:",array);

for(var i = 0; i <10; i++)
  {
    var searchItem = makeString();
    console.log("searchItem:",searchItem, "count:",search(array,searchItem));
  }