itemTwo = document.getElementById('two');
elText = itemTwo.firstChild.nodeValue;

elText = elText.replace('pine nuts', 'kale');
itemTwo.firstChild.nodeValue = elText;