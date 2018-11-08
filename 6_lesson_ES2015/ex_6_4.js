function addToSet(option,...arr)
{
  let set = new Set();
  for(var i of arr) {
   switch(option) {
     case 'четное' :
      if(i % 2 === 0)
        set.add(i);
      break;
     case 'нечетное' :
      if(i % 2 !== 0) 
        set.add(i);
      break;
     default:
        set.add(i);
      break;
  }
  }
  return set;
}

addToSet('четное',1,2,3,4); // 2,4
addToSet('нечетное',1,2,3,4); //1,3
addToSet('все',1,2,3,4); // 1,2,3,4
