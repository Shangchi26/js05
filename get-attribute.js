firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class')) {
    attr = firstItem.getAttribute('class');
    el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The fitst item has a class name: '+attr+'</p>';
}