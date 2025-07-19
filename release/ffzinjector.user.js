// ==UserScript==
// @id			frankerfacez
// @name		FrankerFaceZ
// @namespace	FrankerFaceZ
//
// @version		1.58.1
// @updateURL	https://cdn.frankerfacez.com/script/ffz_injector.user.js
//
// @homepage	https://www.frankerfacez.com/
// @icon		https://cdn.frankerfacez.com/script/icon32.png
// @icon64		https://cdn.frankerfacez.com/script/icon64.png
// @icon128		https://cdn.frankerfacez.com/script/icon128.png
//
// @include		http://twitch.tv/*
// @include		https://twitch.tv/*
// @include		http://*.twitch.tv/*
// @include		https://*.twitch.tv/*
//
// @exclude		http://api.twitch.tv/*
// @exclude		https://api.twitch.tv/*
//
// @grant		none
// @run-at		document-end
// ==/UserScript==
function ffz_init(){var e=document.createElement("script");if(e.id="ffz_script",e.type="text/javascript",e.src="//cdn2.frankerfacez.com/script/script.min.js?_="+Date.now(),localStorage.ffzDebugMode=="true"){var n=new XMLHttpRequest;return n.open("GET","//localhost:8000/dev_server",!0),n.onload=function(o){var t=JSON.parse(n.responseText);console.log("FFZ: Development Server is present. Version "+t.version+" running from: "+t.path),e.src="//localhost:8000/script/script.js?_="+Date.now(),document.body.classList.add("ffz-dev"),document.head.appendChild(e)},n.onerror=function(o){console.log("FFZ: Development Server is not present. Using CDN."),document.head.appendChild(e)},n.send(null)}document.head.appendChild(e)}ffz_init();
