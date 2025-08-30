// ==UserScript==
// @name                ChatGPT Infinity ∞
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @version             2025.8.25.1
// @license             MIT
// @icon                data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22180%22%20height=%22180%22%20fill=%22none%22%3E%3Cstyle%3E:root%7B--primary-fill:%23000;--secondary-fill:%23fff;%7D@media%20(prefers-color-scheme:dark)%7B:root%7B--primary-fill:%23fff;--secondary-fill:%23000;%7D%7D%3C/style%3E%3Cg%20clip-path=%22url(%23a)%22%3E%3Crect%20width=%22180%22%20height=%22180%22%20fill=%22var(--primary-fill)%22%20rx=%2290%22/%3E%3Cg%20clip-path=%22url(%23b)%22%3E%3Cpath%20fill=%22var(--secondary-fill)%22%20d=%22M75.91%2073.628V62.232c0-.96.36-1.68%201.199-2.16l22.912-13.194c3.119-1.8%206.838-2.639%2010.676-2.639%2014.394%200%2023.511%2011.157%2023.511%2023.032%200%20.839%200%201.799-.12%202.758l-23.752-13.914c-1.439-.84-2.879-.84-4.318%200L75.91%2073.627Zm53.499%2044.383v-27.23c0-1.68-.72-2.88-2.159-3.719L97.142%2069.55l9.836-5.638c.839-.48%201.559-.48%202.399%200l22.912%2013.195c6.598%203.839%2011.035%2011.995%2011.035%2019.912%200%209.116-5.397%2017.513-13.915%2020.992v.001Zm-60.577-23.99-9.836-5.758c-.84-.48-1.2-1.2-1.2-2.16v-26.39c0-12.834%209.837-22.55%2023.152-22.55%205.039%200%209.716%201.679%2013.676%204.678L70.993%2055.516c-1.44.84-2.16%202.039-2.16%203.719v34.787-.002Zm21.173%2012.234L75.91%2098.339V81.546l14.095-7.917%2014.094%207.917v16.793l-14.094%207.916Zm9.056%2036.467c-5.038%200-9.716-1.68-13.675-4.678l23.631-13.676c1.439-.839%202.159-2.038%202.159-3.718V85.863l9.956%205.757c.84.48%201.2%201.2%201.2%202.16v26.389c0%2012.835-9.957%2022.552-23.27%2022.552v.001Zm-28.43-26.75L47.72%20102.778c-6.599-3.84-11.036-11.996-11.036-19.913%200-9.236%205.518-17.513%2014.034-20.992v27.35c0%201.68.72%202.879%202.16%203.718l29.989%2017.393-9.837%205.638c-.84.48-1.56.48-2.399%200Zm-1.318%2019.673c-13.555%200-23.512-10.196-23.512-22.792%200-.959.12-1.919.24-2.879l23.63%2013.675c1.44.84%202.88.84%204.32%200l30.108-17.392v11.395c0%20.96-.361%201.68-1.2%202.16l-22.912%2013.194c-3.119%201.8-6.837%202.639-10.675%202.639Zm29.748%2014.274c14.515%200%2026.63-10.316%2029.39-23.991%2013.434-3.479%2022.071-16.074%2022.071-28.91%200-8.396-3.598-16.553-10.076-22.43.6-2.52.96-5.039.96-7.557%200-17.153-13.915-29.99-29.989-29.99-3.239%200-6.358.48-9.477%201.56-5.398-5.278-12.835-8.637-20.992-8.637-14.515%200-26.63%2010.316-29.39%2023.991-13.434%203.48-22.07%2016.074-22.07%2028.91%200%208.396%203.598%2016.553%2010.075%2022.431-.6%202.519-.96%205.038-.96%207.556%200%2017.154%2013.915%2029.989%2029.99%2029.989%203.238%200%206.357-.479%209.476-1.559%205.397%205.278%2012.835%208.637%2020.992%208.637Z%22/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath%20id=%22a%22%3E%3Cpath%20d=%22M0%200h180v180H0z%22/%3E%3C/clipPath%3E%3CclipPath%20id=%22b%22%3E%3Cpath%20d=%22M29.487%2029.964h121.035v119.954H29.487z%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E
// @icon64              data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22180%22%20height=%22180%22%20fill=%22none%22%3E%3Cstyle%3E:root%7B--primary-fill:%23000;--secondary-fill:%23fff;%7D@media%20(prefers-color-scheme:dark)%7B:root%7B--primary-fill:%23fff;--secondary-fill:%23000;%7D%7D%3C/style%3E%3Cg%20clip-path=%22url(%23a)%22%3E%3Crect%20width=%22180%22%20height=%22180%22%20fill=%22var(--primary-fill)%22%20rx=%2290%22/%3E%3Cg%20clip-path=%22url(%23b)%22%3E%3Cpath%20fill=%22var(--secondary-fill)%22%20d=%22M75.91%2073.628V62.232c0-.96.36-1.68%201.199-2.16l22.912-13.194c3.119-1.8%206.838-2.639%2010.676-2.639%2014.394%200%2023.511%2011.157%2023.511%2023.032%200%20.839%200%201.799-.12%202.758l-23.752-13.914c-1.439-.84-2.879-.84-4.318%200L75.91%2073.627Zm53.499%2044.383v-27.23c0-1.68-.72-2.88-2.159-3.719L97.142%2069.55l9.836-5.638c.839-.48%201.559-.48%202.399%200l22.912%2013.195c6.598%203.839%2011.035%2011.995%2011.035%2019.912%200%209.116-5.397%2017.513-13.915%2020.992v.001Zm-60.577-23.99-9.836-5.758c-.84-.48-1.2-1.2-1.2-2.16v-26.39c0-12.834%209.837-22.55%2023.152-22.55%205.039%200%209.716%201.679%2013.676%204.678L70.993%2055.516c-1.44.84-2.16%202.039-2.16%203.719v34.787-.002Zm21.173%2012.234L75.91%2098.339V81.546l14.095-7.917%2014.094%207.917v16.793l-14.094%207.916Zm9.056%2036.467c-5.038%200-9.716-1.68-13.675-4.678l23.631-13.676c1.439-.839%202.159-2.038%202.159-3.718V85.863l9.956%205.757c.84.48%201.2%201.2%201.2%202.16v26.389c0%2012.835-9.957%2022.552-23.27%2022.552v.001Zm-28.43-26.75L47.72%20102.778c-6.599-3.84-11.036-11.996-11.036-19.913%200-9.236%205.518-17.513%2014.034-20.992v27.35c0%201.68.72%202.879%202.16%203.718l29.989%2017.393-9.837%205.638c-.84.48-1.56.48-2.399%200Zm-1.318%2019.673c-13.555%200-23.512-10.196-23.512-22.792%200-.959.12-1.919.24-2.879l23.63%2013.675c1.44.84%202.88.84%204.32%200l30.108-17.392v11.395c0%20.96-.361%201.68-1.2%202.16l-22.912%2013.194c-3.119%201.8-6.837%202.639-10.675%202.639Zm29.748%2014.274c14.515%200%2026.63-10.316%2029.39-23.991%2013.434-3.479%2022.071-16.074%2022.071-28.91%200-8.396-3.598-16.553-10.076-22.43.6-2.52.96-5.039.96-7.557%200-17.153-13.915-29.99-29.989-29.99-3.239%200-6.358.48-9.477%201.56-5.398-5.278-12.835-8.637-20.992-8.637-14.515%200-26.63%2010.316-29.39%2023.991-13.434%203.48-22.07%2016.074-22.07%2028.91%200%208.396%203.598%2016.553%2010.075%2022.431-.6%202.519-.96%205.038-.96%207.556%200%2017.154%2013.915%2029.989%2029.99%2029.989%203.238%200%206.357-.479%209.476-1.559%205.397%205.278%2012.835%208.637%2020.992%208.637Z%22/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath%20id=%22a%22%3E%3Cpath%20d=%22M0%200h180v180H0z%22/%3E%3C/clipPath%3E%3CclipPath%20id=%22b%22%3E%3Cpath%20d=%22M29.487%2029.964h121.035v119.954H29.487z%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          waterfox
// @compatible          librewolf
// @compatible          ghost
// @compatible          qq
// @compatible          whale
// @match               *://chatgpt.com/*
// @connect             cdn.jsdelivr.net
// @connect             gm.chatgptinfinity.com
// @connect             raw.githubusercontent.com
// @require             https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.8.3/dist/chatgpt.min.js#sha256-jeA6TrwGYL3u5epUnl+2cbbGPhvFRocIMwQbQjNedZs=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@49d73a7/chromium/extension/components/modals.js#sha256-+s9oVcUDAtZagmAxgS/rRUHaxV/bD66aOoQHV7XOwss=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@6d883cc/chromium/extension/components/toggles.js#sha256-/4whFl+BxZilD7/ofr9MrIoJiZCa1sva28V4F/IAMVg=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@62b5899/chromium/extension/lib/browser.js#sha256-7teBecqrjkazKH6oetGyxKlBkAk5U9ota/LNCB3Q+Jw=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@c323a40/chromium/extension/lib/dom.min.js#sha256-IGNj9Eoecq7QgY7SAs75wONajgN9Wg0NmCjKTCfu9CY=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@3372987/chromium/extension/lib/infinity.js#sha256-MN1pC8s+N3Rqqj+2TmKB3Q3DyjNMmFSmdZD/4FusqyE=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@619cd01/chromium/extension/lib/settings.js#sha256-ZjJnWJTkURgan8bqB5R2xiXUzLyf7+ksViFrZ7kGInI=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@3b77422/chromium/extension/lib/styles.js#sha256-WGAXf44alpznFv7TydVq533hAsXAkcnuJ5F+b2IbTOg=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@c040d5d/chromium/extension/lib/sync.js#sha256-XA2p7A8i2R0MHsO4J0R2hwHSaAC/orytT3POQfeNY0I=
// @require             https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@8156513/chromium/extension/lib/ui.js#sha256-2yuQbliwz+uaCxUIEeTMWIH5JADHgjDBZD4/8I2T8rE=
// @resource rpgCSS     https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/gray.min.css#sha256-48sEWzNUGUOP04ur52G5VOfGZPSnZQfrF3szUr4VaRs=
// @resource rpwCSS     https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@727feff/assets/styles/rising-particles/dist/white.min.css#sha256-6xBXczm7yM1MZ/v0o1KVFfJGehHk47KJjq8oTktH4KE=
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM_getResourceText
// @grant               GM_xmlhttpRequest
// @grant               GM.xmlHttpRequest
// @noframes
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/chatgptinfinity.user.js
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/chatgptinfinity.meta.js
// @homepageURL         https://chatgptinfinity.com
// @supportURL          https://support.chatgptinfinity.com
// @contributionURL     https://github.com/sponsors/adamlui
// ==/UserScript==
