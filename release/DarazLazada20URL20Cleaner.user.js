// ==UserScript==
// @name         Daraz/Lazada URL Cleaner
// @namespace    Violent Monkey Script
// @version      1.1.1
// @author       Grizz1e
// @match        *://*.daraz.com.np/*
// @match        *://*.daraz.pk/*
// @match        *://*.daraz.com.bd/*
// @match        *://*.daraz.lk/*
// @match        *://*.lazada.com.ph/*
// @match        *://*.lazada.vn/*
// @match        *://*.lazada.co.id/*
// @match        *://*.lazada.com.my/*
// @match        *://*.lazada.sg/*
// @match        *://*.lazada.co.th/*
// @grant        none
// @license      GPL-3.0-or-later
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/DarazLazada20URL20Cleaner.user.js
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/DarazLazada20URL20Cleaner.meta.js
// ==/UserScript==
(function(){"use strict";const o=/^https:\/\/(?:www\.)?(daraz|lazada)\.[^\/]+\/products\/(?:[^\/]*-)?(i\d+-s\d+)\.html(?:\?.*)?$/;function r(e){const t=e.match(o);return t?`https://${location.hostname}/products/${t[2]}.html`:null}function c(){document.querySelectorAll('a[href*="/products/"]').forEach(t=>{const n=r(t.href);n&&(t.href=n)})}function s(){document.addEventListener("click",e=>{const t=e.target.closest('a[href*="/products/"]');if(!t)return;const n=r(t.href);n&&n!==t.href&&(e.preventDefault(),window.location.href=n)},!0)}function l(){const e=window.location.href,t=r(e);t&&t!==e&&history.replaceState(null,"",t)}c(),s(),l(),new MutationObserver(()=>c()).observe(document.body,{childList:!0,subtree:!0})})();
