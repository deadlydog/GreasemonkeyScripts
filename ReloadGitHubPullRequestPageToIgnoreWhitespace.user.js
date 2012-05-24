// ==UserScript==
// @name           Make GitHub Pull Request page full width
// @namespace      https://bitbucket.org/deadlydog/greasemonkeyscripts
// @description    Makes the GitHub Pull Request page span the full width of the browser.
// @include        https://github.com/*/pull/*
// @exclude        https://github.com/*/pull/*?w=1
// ==/UserScript==
window.location.href=window.location.href + '?w=1'
