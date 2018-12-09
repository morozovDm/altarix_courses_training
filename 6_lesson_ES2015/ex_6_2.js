function ocounter(str)
{
  var count = 0;
  for(var i of str)
    if(i === 'o' || i === 'O')
      count++;
  return count;
}

var str = `Given a string. Using for-of, count the number of 'o' letters in it — pass the string as a function parameter`;

console.log(ocounter(str));