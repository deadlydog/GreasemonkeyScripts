// ==UserScript==
// @name           Make GitHub Pull Request page full width
// @namespace      https://bitbucket.org/deadlydog/greasemonkeyscripts
// @description    Makes the GitHub Pull Request page span the full width of the browser.
// @include        https://github.com/*/pull/*
// ==/UserScript==
elements = document.getElementsByClassName('container hentry');
for (var index in elements)
{
	elements[index].style.width="100%";
}
