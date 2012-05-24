// ==UserScript==
// @name        Reload GitHub Pull Request page to ignore whitespace
// @namespace   https://bitbucket.org/deadlydog/greasemonkeyscripts
// @description Reloads the GitHub Pull Request page, adjusting the URL to have the Diff ignore whitespace.
// @include     https://github.com/*/pull/*/files
// @exclude     https://github.com/*/pull/*/files?w=1
// @version     1.0
// ==/UserScript==
document.body.innerHTML='';
window.location.href=window.location.href + '?w=1';
