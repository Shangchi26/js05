list = document.getElementsByTagName('ul')[0];

newItemlast = document.createElement('li');
newTextlast = document.createTextNode('cream');
newItemlast.appenChild(newTextlast);
list.appenChild(newItemlast);

newItemFirst = document.createElement('li');
newTextFirst = document.createTextNode('kale');
newItemFirst.appenChild(newItemFirst);
list.inserBefore(newItemFirst, list.firstChild);

listItems = document.querySelectorAll('li');
var i;
for (i = 0; i< listItems.length; i++) {
    listItems[i].className = 'cool';
}

heading = document.querySelector('h2');
headingText = heading.firstChild.nodeValue;
totalItems = listItems.length;
newHeading = headingText + '<span>'+totalItems+'</span>';
heading.innerHTML = newHeading;