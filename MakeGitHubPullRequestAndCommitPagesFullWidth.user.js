// ==UserScript==
// @name           Make GitHub Pull Request and Commit pages full width
// @namespace      https://bitbucket.org/deadlydog/greasemonkeyscripts
// @description    Makes the GitHub Pull Request page and Commit page span the full width of the browser.
// @include        https://github.com/*/pull/*/files*
// @include        https://github.com/*/commit/*
// @include        https://github.com/*/commits/*
// @grant          none
// @version        1.4
// ==/UserScript==

elements = document.getElementsByClassName('container');
for (index = 0; index < elements.length; index++)
{
	elements[index].style.width="95%";	// Only 95% to leave room for the "add comment" tooltip icon.
}
