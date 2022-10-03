firstItem = document.ondragover('one');
showTextContent = firstItem.textContent;
showInnerText = firstItem.innerText;

msg = '<p>textContent: ' + showTextContent+ '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
el = document.getElementById('scriptresults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';