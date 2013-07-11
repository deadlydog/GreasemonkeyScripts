// ==UserScript==
// @name           Make GitHub Pull Request, Commit, and Blob pages full width
// @namespace      https://bitbucket.org/deadlydog/greasemonkeyscripts
// @description    Makes the GitHub Pull Request, Commit, and Blob pages span the full width of the browser, rather than maxing out at the default ~900 pixels.
// @include        https://github.com/*/pull/*/files*
// @include        https://github.com/*/commit/*
// @include        https://github.com/*/commits/*
// @include        https://github.com/*/blob/*
// @grant          none
// @version        1.5
// ==/UserScript==

elements = document.getElementsByClassName('container');
for (index = 0; index < elements.length; index++)
{
	elements[index].style.width="95%";	// Only 95% to leave room for the "add comment" tooltip icon.
}

elements = document.getElementsByClassName('repository-content context-loader-container');
for (index = 0; index < elements.length; index++)
{
	elements[index].style.width="96%";
}
