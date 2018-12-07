function destructuring(subject)
{
  let {name = "Аноном", surname = "Анонимович", age = "? лет"} = subject;
}

var subject = {
  name: "Петр",
  'surname': 'Петров',
  'age': '20 лет'
}

destructuring(subject);