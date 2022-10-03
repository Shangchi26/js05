newEl = document.createElement('li');
newText = document.createTextNode('quinoa');

newEl.appenChild(newText);

position = document.getElementsByTagName('ul')[0];

position.appenChild(newEl);