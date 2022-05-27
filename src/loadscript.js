
var theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'glass';
var linkElement = Array.from(document.getElementsByTagName('link'));
var link = linkElement[1];
link.setAttribute('href', `css/${theme}.css`);