// ==UserScript==
// @name         YouTube Minimal on PC
// @version      0.6
// @namespace    http://tampermonkey.net/
// @author       CY Fung
// @license      MIT
// @supportURL   https://github.com/cyfung1031/userscript-supports
// @run-at       document-start
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @icon         https://raw.githubusercontent.com/cyfung1031/userscript-supports/main/icons/youtube-minimal.png
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/YouTube20Minimal20on20PC.user.js
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/YouTube20Minimal20on20PC.meta.js
// ==/UserScript==
"use strict";(function(){"use strict";function m(e,s){return typeof e=="string"&&(e+=(e.indexOf("?")>0?"&":"?")+s),e}let t=Cookies.get("userjs-ym-url",{domain:"youtube.com",secure:!0});if(t){Cookies.remove("userjs-ym-url",{domain:"youtube.com",secure:!0}),t=m(t,"app="+(t.charAt(8)==="w"?"desktop":"m")),location.replace(t);return}function i(){return location.href.replace(/(?<=[&?])(persist_app|app)=\w+(&|$)/g,"").replace(/[?&]$/,"")}let r=i()||"",c=r.charAt(8)||"",a=c==="w",l=c==="m",p=!1;(r.indexOf(".youtube.com/watch")>=0||r.endsWith("youtube.com/"))&&(p=!0);function o(e,s,n){GM_registerMenuCommand(e,function(){if(p){let u=i();n?u=u.replace("https://www.youtube.com/","https://m.youtube.com/"):u=u.replace("https://m.youtube.com/","https://www.youtube.com/"),Cookies.set("userjs-ym-url",u,{domain:"youtube.com",secure:!0})}location.replace(s)})}a?(o("Switch to YouTube Mobile persistently","https://m.youtube.com/?persist_app=1&app=m",!0),o("Switch to YouTube Moble temporarily","https://m.youtube.com/?persist_app=0&app=m",!0)):l&&(o("Switch to YouTube Dekstop persistently","http://www.youtube.com/?persist_app=1&app=desktop",!1),o("Switch to YouTube Dekstop temporarily","http://www.youtube.com/?persist_app=0&app=desktop",!1)),o=null})();
