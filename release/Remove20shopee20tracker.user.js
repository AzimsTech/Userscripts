// ==UserScript==
// @name         Remove shopee tracker
// @namespace    https://greasyfork.org
// @version      0.0.5
// @author       Pixmi
// @match        *://shopee.tw/*
// @match        *://shopee.ph/*
// @match        *://shopee.sg/*
// @match        *://shopee.com.my/*
// @icon         https://icons.duckduckgo.com/ip2/shopee.com.ico
// @grant        none
// @license      GPL-3.0
// @run-at       document-body
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/Remove20shopee20tracker.user.js
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/Remove20shopee20tracker.meta.js
// ==/UserScript==
(function(){"use strict";const e=new RegExp(/\-i\.([\d]+)\.([\d]+)/),o=n=>{const i=n.match(e);return i?`/product/${i[1]}/${i[2]}`:n};e.test(window.location.href)&&window.location.replace(`${window.location.origin}${o(window.location.href)}`);const c=history.pushState,a=history.replaceState;history.pushState=function(n,i,t){return t&&(t=o(t)),c.call(this,n,i,t)},history.replaceState=function(n,i,t){return t&&(t=o(t)),a.call(this,n,i,t)}})();
