firstItem = document.getElementById('one');

itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href = \"http://example.org\">' + itemContent + '</a>'