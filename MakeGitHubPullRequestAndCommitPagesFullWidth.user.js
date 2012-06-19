// ==UserScript==
// @name           Make GitHub Pull Request and Commit pages full width
// @namespace      https://bitbucket.org/deadlydog/greasemonkeyscripts
// @description    Makes the GitHub Pull Request page and Commit page span the full width of the browser.
// @include        https://github.com/*/pull/*
// @include        https://github.com/*/commit/*
// @version        1.2
// ==/UserScript==
elements = document.getElementsByClassName('container hentry');
for (var index in elements)
{
	elements[index].style.width="95%";	// Only 95% to leave room for the "add comment" tooltip icon.
}
