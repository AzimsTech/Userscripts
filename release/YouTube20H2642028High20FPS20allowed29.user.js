// ==UserScript==
// @name         YouTube H.264 (High FPS allowed)
// @namespace    https://www.youtube.com
// @version      2026.10.1
// @match        *://*.youtube.com/*
// @match        *://*.youtube-nocookie.com/*
// @match        *://*.youtubekids.com/*
// @license      MIT
// @grant        none
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/YouTube20H2642028High20FPS20allowed29.user.js
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/YouTube20H2642028High20FPS20allowed29.meta.js
// ==/UserScript==
const DISALLOWED_TYPES_REGEX=/webm|vp8|vp9|av01/i;(function(){const i=window.MediaSource;if(!i)return;const e=i.isTypeSupported.bind(i);i.isTypeSupported=n=>typeof n!="string"||DISALLOWED_TYPES_REGEX.test(n)?!1:e(n)})();
