function applyStyle(style)
{
  let {id, color = 'blue', border = '1px solid red', font = '15px Arial'} = style;
  document.getElementById(id).style.color = color;
  document.getElementById(id).style.border = border;
  document.getElementById(id).style.font = font;
}

var style = {
  id: 'elem',
  color: 'blue',
  border: '1px solid red',
  font: '15px Arial'
}

applyStyle(style);