// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/MangaOnlineViewerAdult.meta.js
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/MangaOnlineViewerAdult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @version       2025.08.14
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.8/sweetalert2.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js
// @require       https://cdn.jsdelivr.net/npm/range-slider-input@2.4.4/dist/rangeslider.nostyle.umd.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.11.0/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/
// @include       /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function(){"use strict";function Ne(e){return e===null||typeof e>"u"||e===void 0||typeof e=="string"&&e===""||Array.isArray(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0}function L(e){const n=t=>Array.isArray(t)?!t.some(o=>o instanceof Promise||!L(o)):Object.keys(t).some(a=>!L(t[a]))?!1:n(Object.keys(t));return!e||e===0||Ne(e)||typeof e=="object"&&n(e)}function et(e){return"listImages"in e&&!L(e.listImages)}function nt(e){return"listPages"in e&&!L(e.listPages)}function tt(e){return"bruteForce"in e&&!L(e.bruteForce)}var g=(e=>(e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e))(g||{}),p=(e=>(e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e))(p||{});function ot(e,n){return n in e}const at={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[g.ENGLISH],category:p.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Object.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}};function it(e,n=document.body){return new Promise(t=>{if(document.querySelector(e)){t(document.querySelector(e));return}const o=new MutationObserver(()=>{document.querySelector(e)&&(t(document.querySelector(e)),o.disconnect())});o.observe(n,{childList:!0,subtree:!0,attributes:!0})})}function De(e,n=250){return new Promise(t=>{const o=setInterval(()=>{e()&&(clearInterval(o),t(!0))},n)})}function Be(e,n,t=document.body){return new Promise(o=>{if(t.querySelector(e)?.getAttribute(n)){o(t.querySelector(e)?.getAttribute(n)??"");return}const a=new MutationObserver(()=>{t.querySelector(e)?.getAttribute(n)&&(o(t.querySelector(e)?.getAttribute(n)??""),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[n]})})}function Ve(e,n=document.body){return new Promise(t=>{if(!L(unsafeWindow[e])){t(unsafeWindow[e]);return}const o=new MutationObserver(()=>{L(unsafeWindow[e])||(t(unsafeWindow[e]),o.disconnect())});o.observe(n,{childList:!0,subtree:!0,attributes:!0})})}function He(e=1e3,n=!0){return new Promise(t=>{setTimeout(()=>t(n),e)})}async function rt(e,n=1e3){return(await Promise.all([e,He(n)]))[0]}async function st(e,n=5e3){return Promise.race([e,He(n,!1)])}async function Ge(e,n,t,o,a="img",s="src"){const l=document.createElement("div");l.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(l),e();const u=document.querySelector(t),f=document.querySelector(o),m=[];for(let d=1;d<=n;d+=1)m[d-1]=await rt(Be(a,s,f??document.body),100),f?.querySelector(a)?.removeAttribute(s),u?.dispatchEvent(new Event("click"));return m}const lt={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[g.ENGLISH],category:p.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],n=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),t=e?.length??parseInt(n??"0",10),o={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(a=>a?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:t,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(o.listImages=await Ge(()=>{const a=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)a?.dispatchEvent(new Event("click"))},t,".page-next",".p-picture",".photo img","src"))}};return o}},ct={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[g.ENGLISH],category:p.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},t=await fetch("/api/getBookByID",n).then(async o=>o.json());return{title:t.results.title,series:`/g/${t.results.id}/`,pages:t.results.total_page,prev:"#",next:"#",listImages:Array(t.results.total_page).fill(0).map((o,a)=>`${t.results.image_server.replace(".com",".so")+t.results.id}/${a+1}.jpg`)}}},dt={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[g.RAW],category:p.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},ut={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[g.ENGLISH],category:p.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(n=>n.getAttribute("href")??"")}}},mt={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[g.ENGLISH],category:p.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(n=>n.getAttribute("data-file")??"")}}},gt={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[g.SPANISH],category:p.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(n=>n.getAttribute("src")??"").filter(n=>n&&n!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},pt={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[g.ENGLISH],obs:"May get your IP Banned, use with moderation",category:p.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),n=Math.ceil(e/20),t=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),o=Array(n).fill(0).map(async(l,u)=>fetch(`${t}?p=${u}`).then(async f=>f.text()).then(f=>new DOMParser().parseFromString(f,"text/html"))),s=(await Promise.all(o)).flatMap(l=>[...l.querySelectorAll("#gdt a")].map(u=>u.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:t,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:s,img:"#img",lazy:!0,async reload(l){const u=`${s[l-1]}`,f=await fetch(u).then(d=>d.text()).then(d=>/nl\('([\d-]+)'\)/.exec(d)?.[1]),m=`${u}${u.indexOf("?")?"&":"?"}nl=${f}`;return fetch(m).then(d=>d.text()).then(d=>new DOMParser()?.parseFromString(d,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},ht={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[g.ENGLISH],category:p.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(n=>n.getAttribute("src")??"")}}},wt={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[g.ENGLISH],category:p.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(n=>n.getAttribute("data-large-file")??"")}}},ft={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[g.SPANISH],category:p.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},bt={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[g.ENGLISH],category:p.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},Et={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[g.ENGLISH],category:p.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((n,t)=>window.location.href.replace(/\/\d*\/?$/,`/${t+1}`)),img:"#gimg",lazyAttr:"data-src"}}},vt={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[g.ENGLISH],category:p.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,n)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[n+1].l).replace("%s",unsafeWindow.readerPages.pages[n+1].f))}}},yt=/^blob:(.+?)\/(.+)$/;function St(e){return e.slice(e.indexOf(";base64,")+8)}function K(e){return/^data:image\/(png|jpg|jpeg|gif);base64,/.test(e)}function J(e){return yt.test(e)}function Ot(e){const o=e.split("?")[0].split("/").pop()?.match(/\.[A-Za-z]{2,4}$/);return o?o[0].slice(1):""}const kt=e=>{switch(e.substring(e.indexOf("/")+1,e.indexOf(";base64"))){case"/":return"jpg";case"R":return"gif";case"U":return"webp";default:return"png"}};function we(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}const Mt={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[g.ENGLISH],category:p.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),n=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((t,o)=>`${n+(o+1)}.${we(unsafeWindow.g_th[o+1][0])}`)}}},xt={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:[g.ENGLISH],category:p.HENTAI,waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(n=>n.getAttribute("data-src")??n.getAttribute("src")??"")}}},It={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[g.ENGLISH],category:p.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(n=>e+n)}}},At={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:[g.ENGLISH],category:p.HENTAI,run(){const e=unsafeWindow.pageData?.map(n=>n.image)??unsafeWindow.images?.map(n=>n.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},Lt={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[g.ENGLISH],category:p.HENTAI,async run(){const e="https://hentalk.pw",n=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),t=n?.[n.find(s=>s?.gallery)?.gallery],o=n?.[t?.hash]||n?.[n.find(s=>s?.hash&&s?.id).hash],a=n?.[t.images].map(s=>n[s]).map(s=>n[s.filename]);return{title:n?.[t.title],series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map(s=>`${e}/image/${o}/${s}`)}}},Ct={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[g.ENGLISH],category:p.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},Tt={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[g.ENGLISH],category:p.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),n=document.querySelector("#image_dir")?.getAttribute("value"),t=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),o=await Ve("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:t,prev:"#",next:"#",listImages:Array(t).fill(0).map((a,s)=>`//${o}/${n}/${e}/${s+1}.${we(unsafeWindow.g_th[s+1][0])}`)}}},_t={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[g.ENGLISH,g.SPANISH],category:p.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(n=>n.getAttribute("data-src")??n.getAttribute("data-full-url")??n.getAttribute("data-lazy-src")??n.getAttribute("src")??"")}}},Rt={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[g.ENGLISH],category:p.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),n=Math.ceil(e/50),t=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),o="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",a=Array(n).fill(0).map(async(u,f)=>{const m=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${t}"}],"display":"position","items_per_page":50,"page":${f+1}}}${o}`;return GM.xmlHttpRequest({method:"GET",url:m}).then(d=>JSON.parse(d.responseText))}),l=(await Promise.all(a)).flatMap(u=>u.data.picture.list.items.map(f=>f.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:l}}},Fe=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function Pe(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const n=[...e.attributes].filter(t=>/.*(src|url).*/i.test(t.name)&&!/^.*(blank|lazy|load).*$/.test(t.value));return n.length===0?"":n.find(t=>Fe.test(t.value))?.value??e?.getAttribute("src")??""})}const Nt={...{name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/"],language:[g.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:p.MANGA,waitFunc:()=>{const e=Pe();return e.length>0&&e.every(n=>n&&Fe.test(n))},run(){const e=Pe();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:p.HENTAI},Dt={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[g.ENGLISH],category:p.HENTAI,async run(){const e=document.head.textContent?.match(/"configUrl":"(.+?)",/)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async o=>o.text()).then(o=>new DOMParser().parseFromString(o,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(o=>o.getAttribute("imageURL")??"")}}},Bt={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[g.ENGLISH],category:p.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),n=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:n,prev:"#",next:"#",listPages:Array(n).fill(0).map((t,o)=>window.location.href.replace(/\/\d+$/,`/${o+1}`)),img:".gallery-slide img"}}},Vt={name:["nHentai.net","nHentai.xxx","lhentai"],url:/https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,homepage:["https://nhentai.net/","https://nhentai.xxx/","https://lhentai.com/"],language:[g.ENGLISH],category:p.HENTAI,run(){const e=parseInt(document.querySelector(".num-pages")?.textContent??"",10),n=document.querySelector("#image-container img")?.getAttribute("src")?.replace(/\d+.\w+$/,""),t=unsafeWindow._gallery?.images?.pages?.map(o=>we(o.t));return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((o,a)=>`${n}${a+1}.${t[a]}`)}}},Ht={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[g.SPANISH],category:p.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(n=>n.getAttribute("src")??"")}}},Gt={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[g.ENGLISH],category:p.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",n=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:n.length,prev:"#",next:"#",listImages:n.map((t,o)=>e.replace(/\/\d+\./,`/${o+1}.`))}}},Ft={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[g.ENGLISH],category:p.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,n=e.resolution,{base:t,entries:o}=history.state.memo.data,a=o.map(s=>`${t}/${s.path}?w=${n}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},Pt={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[g.ENGLISH],category:p.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const n=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:n.length,prev:"#",next:"#",listImages:n}}},zt={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:[g.SPANISH],category:p.HENTAI,run(){const e=[...document.querySelectorAll(".content-image")].map(n=>n.getAttribute("data-original")??n.getAttribute("src")??"");return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},$t={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[g.ENGLISH],category:p.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),n=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",t=`https://www.tsumino.com/Read/Load?q=${e}`,o=await fetch(t).then(async a=>a.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:o.reader_start_url,pages:o.reader_page_total,prev:"#",next:"#",listImages:Array(o.reader_page_total).fill(0).map((a,s)=>n.replace("[PAGE]",`${s+1}`))}}},Zt={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[g.SPANISH],category:p.HENTAI,waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(n=>n.getAttribute("data-lazy-src")??n.getAttribute("data-src")??n.getAttribute("src")??"")}}},Wt={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[g.ENGLISH,g.RAW,g.CHINESE],category:p.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(n=>window.location.pathname.replace(/\d+/,n.value)),img:"#picarea"}}},Ut={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[g.ENGLISH],category:p.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(n=>n.getAttribute("data-src")??n.getAttribute("data-srce")??n.closest("a")?.getAttribute("href")??n.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},qt={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[g.ENGLISH],category:p.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(n=>n.getAttribute("href")??"")}}},jt={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[g.ENGLISH],category:p.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,n={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){n.listImages=await Ge(()=>{const t=document.querySelector("select option");t&&(t.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return n}},Qt=[dt,ut,mt,gt,lt,pt,wt,ht,ft,bt,Et,vt,Mt,xt,It,At,Lt,Ct,Tt,_t,Rt,Dt,Bt,Vt,ct,Ht,Gt,Ft,Pt,zt,at,$t,Zt,Wt,Ut,qt,jt,Nt],Yt=".range-slider{touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:pointer;display:block;position:relative;width:100%;height:8px;background:#ddd;border-radius:4px}.range-slider[data-vertical]{height:100%;width:8px}.range-slider[data-disabled]{opacity:.5;cursor:not-allowed}.range-slider .range-slider__thumb{position:absolute;z-index:3;top:50%;width:24px;height:24px;transform:translate(-50%,-50%);border-radius:50%;background:#2196f3}.range-slider .range-slider__thumb:focus-visible{outline:0;box-shadow:0 0 0 6px rgba(33,150,243,.5)}.range-slider[data-vertical] .range-slider__thumb{left:50%}.range-slider .range-slider__thumb[data-disabled]{z-index:2}.range-slider .range-slider__range{position:absolute;z-index:1;transform:translate(0,-50%);top:50%;width:100%;height:100%;background:#51adf6}.range-slider[data-vertical] .range-slider__range{left:50%;transform:translate(-50%,0)}.range-slider input[type=range]{-webkit-appearance:none;pointer-events:none;position:absolute;z-index:2;top:0;left:0;width:0;height:0;background-color:transparent}.range-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none}.range-slider input[type=range]::-moz-range-thumb{width:0;height:0;border:0}.range-slider input[type=range]:focus{outline:0}",ze=[`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}',`#nprogress .bar {
  background: #29d;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

#pagesSlider {
  margin: 10px 0;
}

#pageInputs {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

#swal2-html-container .pageInput {
  border: 1px darkblue dashed;
  border-radius: 5px;
  text-align: center;
  background-color: aliceblue;
  color: black;
  max-width: 40%;
}

#swal2-title {
  color: navy;
}

button.swal2-styled {
  position: inherit;
  transform: inherit;
}
`,`/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`,`/**\r
 * KEYS.css\r
 *\r
 * A simple stylesheet for rendering beautiful keyboard-style elements.\r
 *\r
 * Author:  Michael H\xFCneburg\r
 * Website: http://michaelhue.com/keyscss\r
 * License: MIT License (see LICENSE.txt)\r
 */\r
\r
kbd,\r
.key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #505050;\r
  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r
  color: #fafafa;\r
  text-shadow: -1px -1px 0 #464646;\r
  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
  font-size: .85em;\r
  line-height: 1;\r
  cursor: default;\r
  -webkit-user-select: none;\r
     -moz-user-select: none;\r
      -ms-user-select: none;\r
          user-select: none;\r
}\r
kbd[title],\r
.key[title] {\r
  cursor: help;\r
}\r
kbd.dark,\r
.dark-keys kbd,\r
.key.dark,\r
.dark-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #505050;\r
  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r
  color: #fafafa;\r
  text-shadow: -1px -1px 0 #464646;\r
  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
}\r
kbd.light,\r
.light-keys kbd,\r
.key.light,\r
.light-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #fafafa;\r
  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r
  color: #323232;\r
  text-shadow: 0 0 2px #ffffff;\r
  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r
          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r
}\r
kbd.so,\r
.so-keys kbd,\r
.key.so,\r
.so-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  margin: 0 .1em;\r
  padding: .1em .6em;\r
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r
  line-height: 1.4;\r
  color: #242729;\r
  text-shadow: 0 1px 0 #FFF;\r
  background-color: #e1e3e5;\r
  border: 1px solid #adb3b9;\r
  border-radius: 0.27272727em;\r
  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r
          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r
}\r
kbd.github,\r
.github-keys kbd,\r
.key.github,\r
.github-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  padding: 0.27272727em 0.45454545em;\r
  font-size: 68.75%;\r
  line-height: 0.90909091;\r
  color: #444d56;\r
  vertical-align: middle;\r
  background-color: #fafbfc;\r
  border: solid 1px #c6cbd1;\r
  border-bottom-color: #959da5;\r
  border-radius: 0.27272727em;\r
  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r
          box-shadow: inset 0 -1px 0 #959da5;\r
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r
  -webkit-box-sizing: border-box;\r
          box-sizing: border-box;\r
  text-shadow: none;\r
}\r
\r
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */`].join(`
`),Xt=`#StartMOV {
  all: revert;
  backface-visibility: hidden;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  min-height: 50px;
  width: 80%;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 105000;
  transition: all 0.4s ease-in-out;
  background-size: 300% 100%;
  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}

#StartMOV:hover {
  background-position: 100% 0;
  transition: all 0.4s ease-in-out;
}

#StartMOV:focus {
  outline: none;
}
`,$e=(e,...n)=>n.length===0?e[0]:String.raw({raw:e},...n),w=$e,Ze=$e;function Kt(e,n){typeof unsafeWindow<"u"&&(unsafeWindow[e]=n),typeof window<"u"&&(window[e]=n)}function c(...e){return console.log("MangaOnlineViewer: ",...e),e}function H(...e){return["dev","development"].includes("adult")&&console.info("MangaOnlineViewer: ",...e),e}const Jt=e=>n=>c(e,n)[1];function We(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):H("Fake Removing: ",e)}const fe=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function eo(e,n=null){return typeof GM_getValue<"u"?GM_getValue(e,n):(H("Fake Getting: ",e," = ",n),n)}function Ue(e,n=null){const t=eo(e,n);return typeof t=="string"?JSON.parse(t):t}function qe(e){return Ue("settings",e)}function je(e){return Ue(window.location.hostname,e)}function Qe(e,n){return typeof GM_setValue<"u"?(GM_setValue(e,n),c("Setting: ",e," = ",n),n.toString()):(H("Fake Setting: ",e," = ",n),String(n))}function no(e){return Qe("settings",e)}function Ye(e){return Qe(window.location.hostname,e)}function to(){let e;const n=/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(navigator.userAgent)??[];if(/trident/i.test(n[1]))return e=/\brv[ :]+(\d+)/g.exec(navigator.userAgent)??[],`IE ${e[1]??""}`;if(n[1]==="Chrome"&&(e=/\b(OPR|Edge)\/(\d+)/.exec(navigator.userAgent),e!==null))return e.slice(1).join(" ").replace("OPR","Opera");const t=[n[1],n[2]];return e=/version\/(\d+)/i.exec(navigator.userAgent),e!==null&&t.splice(1,1,e[1]),t.join(" ")}function oo(){return fe.scriptHandler??"Greasemonkey"}const ao=bowser.getParser(window.navigator.userAgent),G=()=>{const e=ao.getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},io=()=>G()==="mobile"||G()==="tablet",Xe=(e,n="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(n,(t,o,a,s)=>{s&&e(a)})}finally{}};async function ro(e){if(e.waitAttr!==void 0){c(`Waiting for Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]}`);const n=await Be(e.waitAttr[0],e.waitAttr[1]);c(`Found Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]} = ${n}`)}}async function so(e){if(e.waitEle!==void 0){c(`Waiting for Element ${e.waitEle}`);const n=await it(e.waitEle);c(`Found Element ${e.waitEle} = `,n)}}async function lo(e){if(e.waitVar!==void 0){c(`Waiting for Variable ${e.waitVar}`);const n=await Ve(e.waitVar);c(`Found Variable ${e.waitVar} = ${n}`)}}async function co(e){if(e.waitFunc!==void 0){c(`Waiting to pass Function check ${e.waitFunc}`);const n=await De(e.waitFunc);c(`Found Function check ${e.waitFunc} = ${n}`)}}async function uo(e){e.waitTime!==void 0&&(c(`Waiting to for ${e.waitTime} milliseconds`),await new Promise(n=>{setTimeout(n,e.waitTime)}),c("Continuing after timer"))}let C=[],N=0;const ee=4;let ne=0,Ke=e=>{let n=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},lc:0,listen(o){return t.lc=n.push(o),()=>{for(let s=N+ee;s<C.length;)C[s]===o?C.splice(s,ee):s+=ee;let a=n.indexOf(o);~a&&(n.splice(a,1),--t.lc||t.off())}},notify(o,a){ne++;let s=!C.length;for(let l of n)C.push(l,t.value,o,a);if(s){for(N=0;N<C.length;N+=ee)C[N](C[N+1],C[N+2],C[N+3]);C.length=0}},off(){},set(o){let a=t.value;a!==o&&(t.value=o,t.notify(a))},subscribe(o){let a=t.listen(o);return o(t.value),a},value:e};return t};const mo=5,te=6,oe=10;let go=(e,n,t,o)=>(e.events=e.events||{},e.events[t+oe]||(e.events[t+oe]=o(a=>{e.events[t].reduceRight((s,l)=>(l(s),s),{shared:{},...a})})),e.events[t]=e.events[t]||[],e.events[t].push(n),()=>{let a=e.events[t],s=a.indexOf(n);a.splice(s,1),a.length||(delete e.events[t],e.events[t+oe](),delete e.events[t+oe])}),po=1e3,ho=(e,n)=>go(e,o=>{let a=n(o);a&&e.events[te].push(a)},mo,o=>{let a=e.listen;e.listen=(...l)=>(!e.lc&&!e.active&&(e.active=!0,o()),a(...l));let s=e.off;return e.events[te]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let l of e.events[te])l();e.events[te]=[]}},po)},()=>{e.listen=a,e.off=s}}),wo=(e,n,t)=>{Array.isArray(e)||(e=[e]);let o,a,s=()=>{if(a===ne)return;a=ne;let m=e.map(d=>d.get());if(!o||m.some((d,y)=>d!==o[y])){o=m;let d=n(...m);d&&d.then&&d.t?d.then(y=>{o===m&&l.set(y)}):(l.set(d),a=ne)}},l=Ke(void 0),u=l.get;l.get=()=>(s(),u());let f=s;return ho(l,()=>{let m=e.map(d=>d.listen(f));return s(),()=>{for(let d of m)d()}}),l},fo=(e,n)=>wo(e,n);const F=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting<br>Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Left to Right",VIEW_MODE_RIGHT:"Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",ENABLE_COMMENTS:"Capture Comments (When available)",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from:<h4>Page ##num##</h4>(Only <i>ONCE</i> per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. </br>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Restore",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br> It may hurt some servers or get your IP marked as DDoS attacker.<br> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",LIST_EMPTY:"List Empty",DISPLAY_COMMENTS:"Display Comments",COMMENTS:"Comments Section",SCROLL_START:"Toggle Auto Scroll",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others"},{ID:"es_ES",NAME:"Espa\xF1ol (ES)",STARTING:"Iniciando<br>Manga OnlineViewer",RESUME:"Continuando lectura desde la P\xE1gina ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la p\xE1gina en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturaci\xF3n del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga p\xE1gina/segundo",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom m\xEDnimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualizaci\xF3n por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Izquierda a derecha",VIEW_MODE_RIGHT:"Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",ENABLE_COMMENTS:"Capturar comentarios (cuando est\xE9 disponible)",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar im\xE1genes como Zip",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente cap\xEDtulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Cap\xEDtulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La pr\xF3xima vez que abra este cap\xEDtulo, continuar\xE1 desde la <h4>p\xE1gina ##num##</h4>(S\xF3lo <i>UNA VEZ</i> por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenci\xF3n",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la p\xE1gina para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la p\xE1gina para que surta efecto",AUTO_DOWNLOAD:"La pr\xF3xima vez que termine de cargarse un cap\xEDtulo, se le pedir\xE1 que guarde autom\xE1ticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podr\xE1 descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de im\xE1genes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la p\xE1gina (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de cap\xEDtulos",PAGES_LOADED:"P\xE1ginas cargadas",GO_TO_PAGE:"Ir a p\xE1gina",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de p\xE1gina",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"R\xE1pido",EXTREME:"Extremo",ALL_PAGES:"Todas las p\xE1ginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br> Puede da\xF1ar algunos servidores o marcar su IP como atacante DDoS.<br> \xA1Util\xEDcelo con precauci\xF3n!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazar abajo",CLOSE:"Cerrar",LIST_EMPTY:"Lista vac\xEDa",DISPLAY_COMMENTS:"Mostrar comentarios",COMMENTS:"Secci\xF3n de comentarios",SCROLL_START:"Alternar desplazamiento autom\xE1tico",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento autom\xE1tico en p\xEDxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros"},{ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando<br>Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde come\xE7ar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configura\xE7\xF5es",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Satura\xE7\xE3o da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padr\xE3o",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento Paginas/Segundo",DEFAULT_ZOOM:"Zoom padr\xE3o (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padr\xE3o",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precis\xE3o da Mudan\xE7a do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualiza\xE7\xE3o Padr\xE3o",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Esquerda para Direita",VIEW_MODE_RIGHT:"Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",ENABLE_COMMENTS:"Capturar coment\xE1rios (quando dispon\xEDvel)",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabe\xE7alho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuar\xE1 a partir da <h4>Pagina ##num##</h4>(Apenas <i>UMA VEZ</i> por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. </br>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Aten\xE7\xE3o",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configura\xE7\xF5es(Reset Settings)",SETTINGS_RESET:"Configura\xE7\xF5es foram limpas, recarregue o site para efetivar a altera\xE7\xE3o",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a altera\xE7\xE3o",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento pregui\xE7oso n\xE3o \xE9 compativel com download de zip, n\xE3o conseguira com essa configura\xE7\xE3o ativa.<br/> Sugest\xE3o: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens pregui\xE7oso",LAZY_LOAD_IMAGES:"Carregamento de paginas pregui\xE7oso come\xE7a a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade n\xE3o \xE9 recomendada.<br> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",LIST_EMPTY:"Lista Vazia",DISPLAY_COMMENTS:"Mostar Comentarios",COMMENTS:"Se\xE7\xE3o de coment\xE1rios",SCROLL_START:"Ativar Rolagem Automatica",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros"},{ID:"zh_CN",NAME:"\u4E2D\u6587 (\u7B80\u4F53)",STARTING:"\u6B63\u5728\u542F\u52A8<br>Manga OnlineViewer",RESUME:"\u4ECE\u9875\u9762\u7EE7\u7EED\u9605\u8BFB ",WAITING:"\u8BF7\u7B49\u5F853\u79D2\u949F...",CHOOSE_BEGINNING:"\u9009\u62E9\u8981\u5F00\u59CB\u7684\u9875\u6570:",BUTTON_START:"\u542F\u52A8Manga OnlineViewer",SETTINGS:"\u8BBE\u7F6E",LANGUAGE:"\u8BED\u8A00",COLOR_SCHEME:"\u914D\u8272\u65B9\u6848",THEME:"\u4E3B\u9898",THEME_COLOR:"\u989C\u8272",THEME_HUE:"\u8272\u76F8",THEME_SHADE:"\u8272\u5EA6",DEFAULT_LOAD_MODE:"\u9ED8\u8BA4\u52A0\u8F7D\u6A21\u5F0F",LOAD_MODE_NORMAL:"\u7B49\u5F85\u6A21\u5F0F(\u7B49\u5F853\u79D2\u81EA\u52A8\u52A0\u8F7D )",LOAD_MODE_ALWAYS:"\u81EA\u52A8\u6A21\u5F0F(\u65E0\u9700\u7B49\u5F85)",LOAD_MODE_NEVER:"\u624B\u52A8\u6A21\u5F0F(\u70B9\u51FB\u542F\u52A8)",LOAD_SPEED:"\u52A0\u8F7D\u901F\u5EA6\u9875\u6570/\u79D2",DEFAULT_ZOOM:"\u9ED8\u8BA4\u7F29\u653E (\u6700\u5C0F 5 \u6700\u5927 200)",DEFAULT_ZOOM_MODE:"\u9ED8\u8BA4\u7F29\u653E\u6A21\u5F0F",MINIMUM_ZOOM:"\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u5BBD\u5EA6\u7684\u6700\u5C0F\u7F29\u653E (\u6700\u5C0F 30 \u6700\u5927 100)",ZOOM_STEP:"\u7F29\u653E\u7EA7\u522B (\u6700\u5C0F 5 \u6700\u5927 50)",DEFAULT_VIEW_MODE:"\u9ED8\u8BA4\u89C6\u56FE\u6A21\u5F0F",VIEW_MODE_VERTICAL:"\u5782\u76F4\u6709\u7F1D",VIEW_MODE_LEFT:"\u4ECE\u5DE6\u5230\u53F3",VIEW_MODE_RIGHT:"\u4ECE\u53F3\u5230\u5DE6",VIEW_MODE_WEBCOMIC:"\u5782\u76F4\u65E0\u7F1D",FIT_WIDTH_OVERSIZED:"\u5982\u679C\u5C3A\u5BF8\u8FC7\u5927\u3001\u5219\u9002\u5408\u5BBD\u5EA6",SHOW_THUMBNAILS:"\u663E\u793A\u7F29\u7565\u56FE",ENABLE_COMMENTS:"\u6355\u83B7\u8BC4\u8BBA\uFF08\u5982\u679C\u53EF\u7528\uFF09",HIDE_CONTROLS:"\u59CB\u7EC8\u9690\u85CF\u9875\u9762\u63A7\u4EF6",HEADER_TYPE:"\u66F4\u6539\u6807\u9898\u663E\u793A\u65B9\u5F0F",HEADER_HOVER:"\u60AC\u505C",HEADER_SCROLL:"\u6EDA\u52A8",HEADER_CLICK:"\u70B9\u51FB",HEADER_FIXED:"\u56FA\u5B9A",HEADER_SIMPLE:"\u7B80\u5355",BUTTON_DOWNLOAD:"\u4E0B\u8F7D",DOWNLOAD_ZIP:"\u4E0B\u8F7D\u538B\u7F29\u6587\u4EF6",DOWNLOAD_IMAGES:"\u81EA\u52A8\u5C06\u56FE\u7247\u4E0B\u8F7D\u6210ZIP",BUTTON_NEXT:"\u4E0B\u4E00\u9875",NEXT_CHAPTER:"\u4E0B\u4E00\u7AE0",BUTTON_PREVIOUS:"\u4E0A\u4E00\u9875",PREVIOUS_CHAPTER:"\u4E0A\u4E00\u7AE0",BOOKMARKS:"\u4E66\u7B7E",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"\u5220\u9664\u4E66\u7B7E",BOOKMARK_SAVED:"\u4FDD\u5B58\u4E66\u7B7E",BOOKMARK_MESSAGE:"\u4E0B\u6B21\u6253\u5F00\u672C\u7AE0\u65F6\uFF0C\u5C06\u4ECE:<h4>\u9875\u7801 ##num##</h4>(<i>\u4EC5\u4E00\u6B21</i> \u6BCF\u4E2A\u4E66\u7B7E)",KEYBINDINGS:"\u5FEB\u6377\u952E",EDIT_KEYBINDS:"\u7F16\u8F91\u952E\u7ED1\u5B9A",SAVE_KEYBINDS:"\u4FDD\u5B58\u952E\u7ED1\u5B9A",BUTTON_EDIT:"\u7F16\u8F91",BUTTON_SAVE:"\u6551",KEYBIND_RULES:`
    <h3>\u652F\u6301\u7684\u5BC6\u94A5</h3>
    \u5141\u8BB8\u7684\u4FEE\u9970\u7B26: shift, option, alt, ctrl, control, command. </br>
    \u7279\u6B8A\u952E: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.</br>
    \u4F8B\u5B50: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"\u6CE8\u610F",WARNING:"\u8B66\u544A",BUTTON_RESET_SETTINGS:"\u91CD\u7F6E\u8BBE\u7F6E(Reset Settings)",SETTINGS_RESET:"\u8BBE\u7F6E\u5DF2\u91CD\u7F6E\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",LANGUAGE_CHANGED:"\u8BED\u8A00\u5DF2\u66F4\u6539\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",AUTO_DOWNLOAD:"\u4E0B\u6B21\u7AE0\u8282\u52A0\u8F7D\u5B8C\u6210\u65F6\u3001\u7CFB\u7EDF\u5C06\u63D0\u793A\u60A8\u81EA\u52A8\u4FDD\u5B58",LAZY_LOAD:"\u5EF6\u8FDF\u52A0\u8F7D\u4E0Ezip\u4E0B\u8F7D\u4E0D\u517C\u5BB9\u3001\u60A8\u5C06\u65E0\u6CD5\u4F7F\u7528\u6B64\u8BBE\u7F6E\u4E0B\u8F7D.<br/> \u5EFA\u8BAE: <span style='color:red;font-weight:bold'>\u7981\u7528\u7F29\u7565\u56FE</span> \u4EE5\u8282\u7701\u6D41\u91CF\u548C\u5185\u5B58.",LAZY_LOAD_IMAGES_ENABLE:"\u542F\u7528\u5EF6\u8FDF\u52A0\u8F7D\u56FE\u50CF",LAZY_LOAD_IMAGES:"\u60F0\u6027\u52A0\u8F7D\u4ECE\u9875\u9762 (\u6700\u5C0F 5 \u6700\u5927 100)",RETURN_CHAPTER_LIST:"\u8FD4\u56DE\u7AE0\u8282\u5217\u8868",PAGES_LOADED:"\u5DF2\u52A0\u8F7D\u7684\u9875\u6570",GO_TO_PAGE:"\u8F6C\u5230\u9875\u6570",ENLARGE:"\u653E\u5927",RESTORE:"\u8FD8\u539F",REDUCE:"\u7F29\u5C0F",FIT_WIDTH:"\u9002\u5408\u5BBD\u5EA6",FIT_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",PERCENT:"\u767E\u5206\u4E4B",TOGGLE_CONTROLS:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",ZOOM_IN:"\u653E\u5927",ZOOM_OUT:"\u7F29\u5C0F",ZOOM_RESET:"\u8FD8\u539F",ZOOM_WIDTH:"\u9002\u5408\u5BBD\u5EA6",ZOOM_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",HIDE:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",RELOAD:"\u91CD\u65B0\u52A0\u8F7D",SLOWLY:"\u6162\u901F",NORMAL:"\u6B63\u5E38",FAST:"\u5FEB\u901F",EXTREME:"\u6781\u7AEF",ALL_PAGES:"\u6240\u6709\u9875\u9762",SPEED_WARNING:"\u52A0\u8F7D\u901F\u5EA6\u8FC7\u9AD8",SPEED_WARNING_MESSAGE:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u6B64\u901F\u5EA6.<br>\u5B83\u53EF\u80FD\u4F1A\u4F24\u5BB3\u67D0\u4E9B\u670D\u52A1\u5668\u6216\u5C06\u60A8\u7684 IP \u6807\u8BB0\u4E3A DDoS \u653B\u51FB\u8005.<br>\u8BF7\u8C28\u614E\u4F7F\u7528!",SCROLL_UP:"\u5411\u4E0A\u6EDA\u52A8",SCROLL_DOWN:"\u5411\u4E0B\u6EDA\u52A8",CLOSE:"\u5173\u95ED",LIST_EMPTY:"\u6CA1\u6709\u6536\u85CF\u4E66\u7B7E",DISPLAY_COMMENTS:"\u663E\u793A\u6CE8\u91CA",COMMENTS:"\u8BC4\u8BBA\u90E8\u5206",SCROLL_START:"\u5207\u6362\u81EA\u52A8\u6EDA\u52A8",AUTO_SCROLL_HEIGHT:"\u81EA\u52A8\u6EDA\u52A8\u901F\u5EA6\uFF08\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF09",VERTICAL_SEPARATOR:"\u663E\u793A\u5782\u76F4\u5206\u9694\u7B26",END:"\u7ED3\u5C3E",SCOPE:"\u8303\u56F4",GLOBAL:"\u5168\u7403",GENERAL:"\u5E38\u89C4",LOADING:"\u88C5\u8F7D",ZOOM:"\u7F29\u653E",OTHERS:"\u522B\u4EBA"},{ID:"de_DE",NAME:"Deutsch",STARTING:"Starte<br>Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"W\xE4hle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit Seiten/Sekunde",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgr\xF6\xDFe (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Links nach Rechts",VIEW_MODE_RIGHT:"Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Breite anpassen bei \xDCbergr\xF6\xDFe",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",ENABLE_COMMENTS:"Kommentare erfassen (wenn verf\xFCgbar)",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp \xE4ndern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"N\xE4chstes Kapitel",BUTTON_PREVIOUS:"Zur\xFCck",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim n\xE4chsten \xD6ffnen dieses Kapitels wird ab fortgesetzt:<h4>Seite ##num##</h4>(Nur <i>EINMAL</i> pro Lesezeichen)",KEYBINDINGS:"Tastenk\xFCrzel",EDIT_KEYBINDS:"Tastenk\xFCrzel bearbeiten",SAVE_KEYBINDS:"Tastenk\xFCrzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterst\xFCtzte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. </br>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. </br>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zur\xFCcksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zur\xFCckgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde ge\xE4ndert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim n\xE4chsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern m\xF6chtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitel\xFCbersicht zur\xFCckkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergr\xF6\xDFern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"H\xF6he anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zur\xFCcksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf H\xF6he zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br> Sie kann einige Server \xFCberlasten oder deine IP als DDoS-Angreifer markieren.<br> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schlie\xDFen",LIST_EMPTY:"Liste leer",DISPLAY_COMMENTS:"Kommentare anzeigen",COMMENTS:"Kommentarbereich",SCROLL_START:"Auto-Scroll umschalten",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"L\xE4dt",ZOOM:"Zoom",OTHERS:"Sonstiges"}],ae={threshold:2e3,throttle:500,lazyAttribute:"data-src",targetAttribute:"src"};let ie=[],Je=!1;function en(e){const{element:n}=e,t=n.getBoundingClientRect(),o=(window.innerHeight||document.documentElement.clientHeight)+ae.threshold;return t.top<=o||t.bottom<=o}async function bo(e){let n=e.element.getAttribute(ae.lazyAttribute)??"";n&&(!J(n)&&!K(n)&&e.fetchOptions&&(n=await fetch(n,e.fetchOptions).then(t=>t.blob()).then(t=>blobUtil.blobToDataURL(t))),e.element.setAttribute(ae.targetAttribute,n)),e.callback(e.element)?.catch(c)}function Eo(){const e=ie.filter(en);ie=ie.filter(n=>!en(n)),e.forEach(bo)}const re=_.throttle(Eo,ae.throttle);function nn(e,n,t){Je||(window.addEventListener("scroll",re,{passive:!0}),window.addEventListener("touchmove",re,{passive:!0}),window.addEventListener("resize",re,{passive:!0}),Je=!0),ie.push({element:e,callback:n,fetchOptions:t}),re()}async function vo(e,n){return new Promise(t=>{c("Fetching page: ",e),fetch(e).then(async o=>o.text()).then(o=>{const s=new DOMParser().parseFromString(o,n);t(s)}).catch(o=>{c("Failed to fetch page: ",o)})})}async function yo(e){return vo(e,"text/html")}async function So(e,n,t){return yo(e).then(o=>o.querySelector(n)?.getAttribute(t))}function z(e,n=1){return Array(e).fill(0).map((t,o)=>o+1).filter(t=>t>=n)}const Oo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/>
  <path d="M18 4v17"/>
  <path d="M15 18l3 3l3 -3"/>
</svg>
`,tn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/>
  <path d="M18 14v7"/>
  <path d="M18 3v7"/>
  <path d="M15 18l3 3l3 -3"/>
  <path d="M15 6l3 -3l3 3"/>
</svg>
`,ko=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/>
  <path d="M20 18h-17"/>
  <path d="M6 15l-3 3l3 3"/>
</svg>
`,Mo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/>
  <path d="M4 18h17"/>
  <path d="M18 15l3 3l-3 3"/>
</svg>
`,on=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/>
  <path d="M10 18h-7"/>
  <path d="M21 18h-7"/>
  <path d="M6 15l-3 3l3 3"/>
  <path d="M18 15l3 3l-3 3"/>
</svg>
`,xo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/>
</svg>
`,Io=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/>
</svg>
`,an=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/>
</svg>
`,rn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/>
  <path d="M3 3l18 18"/>
</svg>
`,Ao=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/>
  <path d="M11 3h5a3 3 0 0 1 3 3v11"/>
</svg>
`,Lo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4h6v6h-6z"/>
  <path d="M14 4h6v6h-6z"/>
  <path d="M4 14h6v6h-6z"/>
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
</svg>
`,be=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check toggler-on" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l5 5l10 -10"/>
</svg>
`,Co=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/>
  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
  <path d="M14 4l0 4l-6 0l0 -4"/>
</svg>
`,To=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/>
  <path d="M11 13l9 -9"/>
  <path d="M15 4h5v5"/>
</svg>
`,_o=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>
</svg>
`,Ro=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/>
  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/>
  <path d="M3 3l18 18"/>
</svg>
`,No=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
  <path d="M12 17v-6"/>
  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/>
</svg>
`,Do=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/>
  <path d="M6 10l0 .01"/>
  <path d="M10 10l0 .01"/>
  <path d="M14 10l0 .01"/>
  <path d="M18 10l0 .01"/>
  <path d="M6 14l0 .01"/>
  <path d="M18 14l0 .01"/>
  <path d="M10 14l4 .01"/>
</svg>
`,Bo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 6h9"/>
  <path d="M11 12h9"/>
  <path d="M12 18h8"/>
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/>
  <path d="M6 10v-6l-2 2"/>
</svg>
`,Vo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a9 9 0 1 0 9 9"/>
</svg>
`,Ho=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/>
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
  <path d="M19.001 15.5v1.5"/>
  <path d="M19.001 21v1.5"/>
  <path d="M22.032 17.25l-1.299 .75"/>
  <path d="M17.27 20l-1.3 .75"/>
  <path d="M15.97 17.25l1.3 .75"/>
  <path d="M20.733 20l1.3 .75"/>
</svg>
`,Go=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0"/>
  <path d="M4 12l16 0"/>
  <path d="M4 18l16 0"/>
</svg>
`,Fo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9h8"/>
  <path d="M8 13h6"/>
  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/>
</svg>
`,sn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
</svg>
`,ln=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/>
  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
</svg>
`,Po=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/>
  <path d="M13.5 6.5l4 4"/>
</svg>
`,cn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 8h.01"/>
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/>
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/>
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/>
</svg>
`,zo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24"
     height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
     stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 8h.01"/>
  <path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/>
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/>
  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/>
  <path d="M3 3l18 18" color="orange"/>
</svg>
`,$o=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/>
  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/>
</svg>
`,Zo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4v16l13 -8z"/>
</svg>
`,Wo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/>
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>
</svg>
`,Uo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/>
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
</svg>
`,qo=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/>
  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/>
  <path d="M3 3l18 18"/>
</svg>
`,jo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/>
  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/>
  <path d="M16 12h-8"/>
</svg>
`,dn=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>
</svg>
`,Qo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7l16 0"/>
  <path d="M10 11l0 6"/>
  <path d="M14 11l0 6"/>
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
</svg>
`,Yo=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 12a9 9 0 1 0 -8.979 9"/>
  <path d="M3.6 9h16.8"/>
  <path d="M3.6 15h8.9"/>
  <path d="M11.5 3a17 17 0 0 0 0 18"/>
  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/>
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
  <path d="M19.001 15.5v1.5"/>
  <path d="M19.001 21v1.5"/>
  <path d="M22.032 17.25l-1.299 .75"/>
  <path d="M17.27 20l-1.3 .75"/>
  <path d="M15.97 17.25l1.3 .75"/>
  <path d="M20.733 20l1.3 .75"/>
</svg>
`,$=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x toggler-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6l-12 12"/>
  <path d="M6 6l12 12"/>
</svg>
`,Xo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
  <path d="M8 8l4 4"/>
  <path d="M12 8l-4 4"/>
  <path d="M21 21l-6 -6"/>
</svg>
`,Ko=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
  <path d="M7 10l6 0"/>
  <path d="M10 7l0 6"/>
  <path d="M21 21l-6 -6"/>
</svg>
`,Jo=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 13v4"/>
  <path d="M13 15h4"/>
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/>
  <path d="M22 22l-3 -3"/>
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/>
  <path d="M3 11v-1"/>
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1"/>
  <path d="M10 3h1"/>
  <path d="M15 3h1a2 2 0 0 1 2 2v1"/>
</svg>
`,ea=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
  <path d="M7 10l6 0"/>
  <path d="M21 21l-6 -6"/>
</svg>
`,na=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 15h4"/>
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/>
  <path d="M22 22l-3 -3"/>
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/>
  <path d="M3 11v-1"/>
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1"/>
  <path d="M10 3h1"/>
  <path d="M15 3h1a2 2 0 0 1 2 2v1"/>
</svg>
`,ta=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
  <path d="M17 17l-2.5 -2.5"/>
  <path d="M10 5l2 -2l2 2"/>
  <path d="M19 10l2 2l-2 2"/>
  <path d="M5 10l-2 2l2 2"/>
  <path d="M10 19l2 2l2 -2"/>
</svg>
`,oa=()=>Ne(i("bookmarks"))?[r("LIST_EMPTY")]:i("bookmarks").map((e,n)=>w`
        <div id="Bookmark${n+1}" class="BookmarkItem">
          <span class="bookmarkColumnLarge">
            <span class="bookmarkName">${e.name}</span>
            <br />
            <a class="bookmarkURl" href="${e.url}" target="_blank">${e.url}</a>
          </span>
          <span class="bookmarkColumnSmall">
            <span class="bookmarkDate"> ${new Date(e.date).toISOString().slice(0,10)}</span>
            <br />
            <span class="bookmarkPage">Page: ${e.page}</span>
          </span>
          <span class="bookmarkFunctions">
            <a class="" href="${e.url}" target="_blank">
              <button class="ControlButton open" title="Open Bookmark" type="button">
                ${To}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value="${e.url}"
            >
              ${Qo}
            </button>
          </span>
        </div>
      `),un=()=>w`
    <div id="BookmarksPanel" class="panel">
      <button id="CloseBookmarks" class="closeButton" title="${r("CLOSE")}">
        ${$}
      </button>
      <button class="Bookmark simpleButton" title="${r("BOOKMARK")}">
        ${an} ${rn}
      </button>
      <h2>${r("BOOKMARKS")}</h2>
      <div id="BookmarksList"></div>
    </div>
  `;function Ee(){const e=document.getElementById("BookmarksList");e&&(e.innerHTML=oa().join(""))}function Z(e){const n=document.querySelector("#Chapter");n?.classList.contains("FluidLTR")||n?.classList.contains("FluidRTL")?n?.scroll(e?.offsetLeft??0,e?.offsetTop??0):window?.scroll(e?.offsetLeft??0,e?.offsetTop??0)}function S(e,n){return t=>t.addEventListener(e,n)}function ve(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function mn(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY+e.deltaX,e.preventDefault())}function gn(){document.querySelector("#BookmarksPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function ye(e=window.location.href){L(q(e))||(c(`Bookmark Removed ${e}`),ke("bookmarks",n=>n.filter(t=>t.url!==e)),e===window.location.href&&document.querySelector("#MangaOnlineViewer")?.classList.remove("bookmarked"))}function se(e){const n=e.currentTarget.value;c(`Bookmark Removed ${n}`),Swal.fire({title:r("BOOKMARK_REMOVED"),timer:1e4,icon:"error"}),ye(n),Ee(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(S("click",se))}function aa(){Ee(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(S("click",se)),document.querySelector("#BookmarksPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function pn(e){document.querySelector("#MangaOnlineViewer")?.classList.toggle("bookmarked");const n=[...document.querySelectorAll(".MangaPage")].map(s=>Math.abs(s.offsetTop-window.scrollY)),o=parseInt(e.currentTarget.parentElement?.querySelector(".PageIndex")?.textContent??"0",10)||n.indexOf(Math.min(...n))+1,a={name:document.querySelector("title")?.textContent?.trim().replace(/^\(\d+%\) */,"")??"",url:window.location.href,page:o,date:new Date().toISOString().slice(0,10)};q(a.url)?(ke("bookmarks",s=>s.filter(l=>l.url!==a.url)),Swal.fire({title:r("BOOKMARK_REMOVED"),timer:1e4,icon:"error"})):(ke("bookmarks",s=>[...s,a]),Swal.fire({title:r("BOOKMARK_SAVED"),html:r("BOOKMARK_SAVED").replace("##NUM##",o.toString()),icon:"success"})),Ee(),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(S("click",se))}function ia(){document.querySelector("#bookmarks")?.addEventListener("click",aa),document.querySelectorAll(".closeButton")?.forEach(S("click",gn)),document.querySelector("#Overlay")?.addEventListener("click",gn),document.querySelectorAll(".bookmarkFunctions .erase")?.forEach(S("click",se)),document.querySelectorAll(".Bookmark")?.forEach(S("click",pn)),document.querySelector(".AddBookmark")?.addEventListener("click",pn)}function ra(e,n){const t=document.createElement("style");return t.id=e,t.appendChild(document.createTextNode(n)),t}function sa(e,n){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(ra(e,n))}function la(e){document.querySelectorAll(`style[id="${e}"]`).forEach(n=>{n.remove()})}function Se(e,n){la(e),sa(e,n)}function W(e,n){return w`
      <style id="${e}">
        ${n}
      </style>
    `}function ca(){Va(),document.getElementById("MangaOnlineViewer")?.removeAttribute("locale")}function da(e){const n=e.currentTarget.value;Ha(n==="true")}function ua(e){const n=e.currentTarget.value;E("locale",n),document.getElementById("MangaOnlineViewer")?.setAttribute("locale",n)}function ma(e){const n=e.currentTarget.value;E("loadMode",n)}function ga(e){const n=e.currentTarget.checked;document.querySelector("#Chapter")?.classList.toggle("fitWidthIfOversize",n),E("fitWidthIfOversize",n)}function pa(e){const n=e.currentTarget.checked;document.querySelector("#Chapter")?.classList.toggle("separator",n),E("verticalSeparator",n)}function ha(e){const n=e.currentTarget.checked;document.querySelector("#Navigation")?.classList.toggle("disabled",!n),E("showThumbnails",n),k()}function wa(e){const n=e.currentTarget.checked;document.querySelector("#CommentsButton")?.classList.toggle("disabled",!n),E("enableComments",n),k()}function fa(e){const n=e.currentTarget.checked;E("downloadZip",n),n&&Swal.fire({title:r("ATTENTION"),text:r("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function ba(e){const n=e.currentTarget.checked;E("lazyLoadImages",n),document.querySelector(".lazyStart")?.classList.toggle("show",i("lazyLoadImages")),n&&Swal.fire({title:r("WARNING"),html:r("LAZY_LOAD"),icon:"warning"})}function Ea(e){const n=e.currentTarget.value;E("lazyStart",parseInt(n,10))}function va(e){const n=parseInt(e.currentTarget.value,10);E("throttlePageLoad",n),n<100&&Swal.fire({title:r("SPEED_WARNING"),html:r("SPEED_WARNING_MESSAGE"),icon:"warning"})}function ya(e){const n=e.currentTarget.value;E("zoomStep",parseInt(n,10))}function Sa(e){const n=e.currentTarget.value;Se("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${n}vw;}`),E("minZoom",parseInt(n,10))}function Oa(e){const n=e.currentTarget.checked;document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls",n),E("hidePageControls",n)}function Oe(e){const n=document.querySelector("#Header");if(!n?.classList.contains(e)){const t=document.querySelector("#menu");n?.classList.remove("scroll","click","hover","fixed","simple","visible"),t?.classList.remove("scroll","click","hover","fixed","simple","hide"),n?.classList.add(e),t?.classList.add(e)}}function ka(e){const n=e.currentTarget.value;Oe(n),E("header",n)}function Ma(e){const{value:n}=e.currentTarget;E("scrollHeight",parseInt(n,10))}function xa(){document.querySelector("#ResetSettings")?.addEventListener("click",ca),document.querySelectorAll("#SettingsScope input[type=radio]").forEach(S("change",da)),document.querySelector("#locale")?.addEventListener("change",ua),document.querySelector("#fitIfOversize")?.addEventListener("change",ga),document.querySelector("#verticalSeparator")?.addEventListener("change",pa),document.querySelector("#loadMode")?.addEventListener("change",ma),document.querySelector("#showThumbnails")?.addEventListener("change",ha),document.querySelector("#enableComments")?.addEventListener("change",wa),document.querySelector("#downloadZip")?.addEventListener("change",fa),document.querySelector("#lazyLoadImages")?.addEventListener("change",ba),document.querySelector("#lazyStart")?.addEventListener("change",Ea),document.querySelector("#PagesPerSecond")?.addEventListener("change",va),document.querySelector("#zoomStep")?.addEventListener("change",ya),document.querySelector("#minZoom")?.addEventListener("input",Sa),document.querySelector("#hidePageControls")?.addEventListener("change",Oa),document.querySelector("#headerType")?.addEventListener("change",ka),document.querySelector("#scrollHeight")?.addEventListener("change",Ma)}function k(e=i("zoomMode"),n=i("defaultZoom"),t=".PageContent img"){const o=document.querySelector("#ZoomVal"),a=document.querySelector("#Zoom");o&&(a&&e==="percent"?(o.textContent=`${n}%`,a.value=n.toString()):o.textContent=e),Oe(e==="height"?"click":i("header")),[...document.querySelectorAll(t)].forEach(l=>{if(l.removeAttribute("width"),l.removeAttribute("height"),l.removeAttribute("style"),e==="width")l.style.width=`${window.innerWidth}px`;else if(e==="height"){const u=window.innerHeight+(i("showThumbnails")?-29:0);l.style.height=`${u}px`,l.style.minWidth="unset"}else e==="percent"&&n>=0&&n!==100&&(l.style.width=`${l.naturalWidth*(n/100)}px`)})}function Ia(e,n){const t=e.replace(/[?&]forceReload=\d+$/,""),o=t.includes("?")?"&":"?";return`${t+o}forceReload=${n}`}function hn(e){let n=1;const t=e?.match(/forceReload=(\d+)$/);return t?.at(1)&&(n=parseInt(t[1],10)+1),n}function wn(e){const n=e.getAttribute("src");n&&(e.removeAttribute("src"),K(n)||J(n)?e.setAttribute("src",n):e.setAttribute("src",Ia(n,hn(n))))}function Aa(){c("Images Loading Complete"),i("downloadZip")&&document.getElementById("download")?.dispatchEvent(new Event("click")),document.getElementById("download")?.classList.remove("disabled")}function La(){const e=document.querySelectorAll(".PageContent .PageImg").length,n=document.querySelectorAll(".PageContent .PageImg.imgLoaded").length,t=Math.floor(n/e*100),o=document.querySelector("title");o&&(o.innerHTML=w`(${t}%) ${document.querySelector("#MangaTitle")?.textContent}`),document.querySelectorAll("#Counters i, #NavigationCounters i").forEach(a=>{a.textContent=n.toString()}),NProgress.configure({showSpinner:!1}).set(n/e),c(`Progress: ${t}%`),n===e&&Aa()}const Ca=(e=".PageContent img")=>{const n=document.querySelector("#ZoomVal")?.textContent?.trim();n?.match(/^\d+%$/)?k("percent",parseInt(n,10),e):k(n,100,e)};function le(){return e=>{e.images.forEach(n=>{n.img.classList.add("imgLoaded"),n.img.classList.remove("imgBroken");const t=n.img.id.replace("PageImg","ThumbnailImg"),o=document.getElementById(t);o?.classList.remove("imgBroken"),o&&o.setAttribute("src",n.img.getAttribute("src")??""),Ca(`#${n.img.id}`),La()})}}function ce(e){return n=>{n.images.forEach(t=>{t.img.classList.add("imgBroken");const o=t.img.id.replace("PageImg","ThumbnailImg");document.getElementById(o)?.classList.add("imgBroken");const s=t.img.getAttribute("src");s&&hn(s)<=i("maxReload")&&setTimeout(async()=>{if(e.reload){const l=parseInt(`0${/\d+/.exec(t.img.id)}`,10),u=await e.reload(l);t.img.setAttribute("src",u)}else wn(t.img);if(t.img.parentElement){const l=imagesLoaded(t.img.parentElement);l.on("done",le()),l.on("fail",ce(e))}},2e3)})}}function fn(e){if(e){let n=e.trim();return n.startsWith("//")&&(n=`https:${n}`),n}return""}function bn(e,n,t,o){const a=o-(e.begin??0);let s=fn(t);const l=document.querySelector(`#PageImg${n}`);l&&(!(e.lazy??i("lazyLoadImages"))||a<=i("lazyStart")?setTimeout(async()=>{if(!J(s)&&!K(s)&&e.fetchOptions&&(s=await fetch(s,e.fetchOptions).then(u=>u.blob()).then(u=>blobUtil.blobToDataURL(u))),l.parentElement){const u=imagesLoaded(l.parentElement);u.on("done",le()),u.on("fail",ce(e))}l.setAttribute("src",s),c("Loaded Image:",n,"Source:",s)},(e.timer??i("throttlePageLoad"))*a):(l.setAttribute("data-src",fn(s)),nn(l,()=>{if(l.parentElement){const u=imagesLoaded(l.parentElement);u.on("done",le()),u.on("fail",ce(e)),c("Lazy Image: ",n," Source: ",l.getAttribute("src"))}},e.fetchOptions)),e.pages===o&&ye())}function En(e,n,t,o){return async()=>{const a=await So(t,e.img,e.lazyAttr??"src"),s=document.querySelector(`#PageImg${n}`);if(a&&s){if(s.style.width="auto",s.parentElement){const l=imagesLoaded(s.parentElement);l.on("done",le()),l.on("fail",ce(e))}s.setAttribute("src",a),c(`${o&&"Lazy "}Page: `,n," Source: ",s.getAttribute("src"))}}}async function Ta(e,n,t,o){const a=o-(e.begin??0),s=document.querySelector(`#PageImg${n}`);s&&(!(e.lazy??i("lazyLoadImages"))||a<=i("lazyStart")?setTimeout(()=>{En(e,n,t,!1)().catch(c)},(e.timer??i("throttlePageLoad"))*a):(s.setAttribute("data-src","data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),nn(s,En(e,n,t,!0))),e.pages===o&&ye())}function vn(e,n){z(n.pages,e).forEach((t,o)=>{Ta(n,t,n.listPages[t-1],o).catch(c)})}function yn(e,n){z(n.pages,e).forEach((t,o)=>{bn(n,t,n.listImages[t-1],o)})}function _a(e,n=1){c("Loading Images"),c(`Intervals: ${e.timer??i("throttlePageLoad")??"Default(1000)"}`),c(`Lazy: ${e.lazy??i("lazyLoadImages")}, Starting from: ${i("lazyStart")}`),et(e)?(c("Method: Images:",e.listImages),yn(n,e)):nt(e)?(c("Method: Pages:",e.listPages),vn(n,e)):tt(e)?(c("Method: Brute Force"),e.bruteForce({begin:n,addImg:bn,loadImages(t){yn(n,{...e,listImages:t})},loadPages(t,o,a){vn(n,{...e,listPages:t,img:o,lazyAttr:a})},wait:i("throttlePageLoad")})):c("No Loading Method Found")}const U=(e,n)=>{const t=(o,a)=>_.transform(o,(s,l,u)=>{_.isEqual(l,a[u])||(_.isArray(l)?s[u]=_.difference(l,a[u]):_.isObject(l)&&_.isObject(a[u])?s[u]=t(l,a[u]):s[u]=l)});return t(e,n)},Sn={enabled:!0,locale:"en_US",theme:"darkblue",customTheme:"#004526",themeShade:600,colorScheme:"dark",fitWidthIfOversize:!0,showThumbnails:!0,enableComments:!0,downloadZip:!1,verticalSeparator:!1,throttlePageLoad:1e3,zoomMode:"percent",defaultZoom:100,zoomStep:25,minZoom:30,loadMode:"wait",viewMode:"WebComic",bookmarks:[],lazyLoadImages:!1,lazyStart:50,hidePageControls:!1,header:"hover",maxReload:5,scrollHeight:20,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"]}},Ra={lazyLoadImages:!0,fitWidthIfOversize:!0,showThumbnails:!1,viewMode:"WebComic",header:"click"};function M(e=!0){return io()?_.defaultsDeep(Ra,{...Sn,enabled:e,theme:e?"darkblue":"darkgreen"}):{...Sn,enabled:e,theme:e?"darkblue":"darkgreen"}}let I=_.defaultsDeep(qe(M()),M()),x=_.defaultsDeep(je(M(!1)),M(!1));const T=()=>x?.enabled===!0,R=Ke(T()?x:I);fo(R,e=>F.find(n=>n.ID===e.locale)??F[1]);function de(){T()?R.set({...x}):R.set({...I})}function Na(e){const n=_.defaultsDeep(e,M()),t=I?U(n,I):n;L(t)||(c("Imported Global Settings",t),I=n,de(),k(i("zoomMode"),i("defaultZoom")))}Xe(_.debounce(Na,300),"settings");function Da(e){const n=_.defaultsDeep(e,M(!1)),t=x?U(n,x):n;L(t)||(c("Imported Local Settings",t),x=n,de(),k(i("zoomMode"),i("defaultZoom")))}Xe(_.debounce(Da,300),window.location.hostname);function i(e){return T()&&!["locale","bookmarks"].includes(e)?x[e]:I[e]}function Ba(e,n){T()&&!["locale","bookmarks"].includes(e)?x={...x,[e]:n}:I={...I,[e]:n},R.set({...R.get(),[e]:n})}function E(e,n){if(Ba(e,n),T()&&!["locale","bookmarks"].includes(e)){const t=_.defaultsDeep(je(M(!1)),M(!1));Ye(U(t,M(!1)))}else{const t={..._.defaultsDeep(qe(M()),M()),[e]:n};no(U(t,M()))}}function ke(e,n){const t=n(T()&&!["locale","bookmarks"].includes(e)?x[e]:I[e]);E(e,t),R.set({...R.get(),[e]:t})}function r(e){const n=F.find(t=>t.ID===i("locale"))??F[1];return ot(n,e)?n?.[e]??F[1]?.[e]:`##MISSING_STRING_${e}##`}function Va(){T()?(We(window.location.hostname),x=M(!1)):(We("settings"),I=M()),c("Settings Reset"),de()}function Ha(e=!1){return x.enabled=e,Ye(U(x,M(!1))),c("Local Settings ",e?"Enabled":"Disabled"),de(),T()}function q(e=window.location.href){return I.bookmarks.find(n=>n.url===e)?.page}function On(e=null){H("Current Settings (Local:",T(),") ",e?R.get()[e]:R.get(),`
Global Settings`,e?I[e]:I,`
Local Settings`,e?x[e]:x)}Kt("MOVSettings",On);const v={dark:{name:"dark",50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113"},gray:{name:"gray",50:"#f8f9fa",100:"#f1f3f5",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#868e96",700:"#495057",800:"#343a40",900:"#212529"},red:{name:"red",50:"#fff5f5",100:"#ffe3e3",200:"#ffc9c9",300:"#ffa8a8",400:"#ff8787",500:"#ff6b6b",600:"#fa5252",700:"#f03e3e",800:"#e03131",900:"#c92a2a"},wine:{name:"wine",50:"#FCE9E8",100:"#F8C2BF",200:"#F39A96",300:"#EE736D",400:"#E94C44",500:"#E5241A",600:"#B71D15",700:"#891610",800:"#5B0F0B",900:"#2E0705"},pink:{name:"pink",50:"#fff0f6",100:"#ffdeeb",200:"#fcc2d7",300:"#faa2c1",400:"#f783ac",500:"#f06595",600:"#e64980",700:"#d6336c",800:"#c2255c",900:"#a61e4d"},grape:{name:"grape",50:"#f8f0fc",100:"#f3d9fa",200:"#eebefa",300:"#e599f7",400:"#da77f2",500:"#cc5de8",600:"#be4bdb",700:"#ae3ec9",800:"#9c36b5",900:"#862e9c"},violet:{name:"violet",50:"#f3f0ff",100:"#e5dbff",200:"#d0bfff",300:"#b197fc",400:"#9775fa",500:"#845ef7",600:"#7950f2",700:"#7048e8",800:"#6741d9",900:"#5f3dc4"},purple:{name:"purple",50:"#EFEAFB",100:"#D3C3F4",200:"#B69DEC",300:"#9976E5",400:"#7D4FDD",500:"#6029D6",600:"#4D21AB",700:"#3A1980",800:"#261056",900:"#13082B"},indigo:{name:"indigo",50:"#edf2ff",100:"#dbe4ff",200:"#bac8ff",300:"#91a7ff",400:"#748ffc",500:"#5c7cfa",600:"#4c6ef5",700:"#4263eb",800:"#3b5bdb",900:"#364fc7"},blue:{name:"blue",50:"#e7f5ff",100:"#d0ebff",200:"#a5d8ff",300:"#74c0fc",400:"#4dabf7",500:"#339af0",600:"#228be6",700:"#1c7ed6",800:"#1971c2",900:"#1864ab"},darkblue:{name:"darkblue",50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},cyan:{name:"cyan",50:"#e3fafc",100:"#c5f6fa",200:"#99e9f2",300:"#66d9e8",400:"#3bc9db",500:"#22b8cf",600:"#15aabf",700:"#1098ad",800:"#0c8599",900:"#0b7285"},teal:{name:"teal",50:"#e6fcf5",100:"#c3fae8",200:"#96f2d7",300:"#63e6be",400:"#38d9a9",500:"#20c997",600:"#12b886",700:"#0ca678",800:"#099268",900:"#087f5b"},green:{name:"green",50:"#ebfbee",100:"#d3f9d8",200:"#b2f2bb",300:"#8ce99a",400:"#69db7c",500:"#51cf66",600:"#40c057",700:"#37b24d",800:"#2f9e44",900:"#2b8a3e"},darkgreen:{name:"darkgreen",50:"#cad4cf",100:"#b0bfb8",200:"#97aba1",300:"#7f978b",400:"#678376",500:"#4f7061",600:"#263e3a",700:"#1c2e2b",800:"#152320",900:"#0b2017"},moss:{name:"moss",50:"#f1f8f4",100:"#e3eee7",200:"#c2ddcb",300:"#9ecbad",400:"#80bc93",500:"#6db383",600:"#62af7a",700:"#519968",800:"#46885b",900:"#183321"},greener:{name:"greener",50:"#EDF7ED",100:"#CEE9CD",200:"#AEDBAE",300:"#8FCD8E",400:"#6FBF6E",500:"#4FB14E",600:"#408E3E",700:"#306A2F",800:"#20471F",900:"#102310"},lime:{name:"lime",50:"#f4fce3",100:"#e9fac8",200:"#d8f5a2",300:"#c0eb75",400:"#a9e34b",500:"#94d82d",600:"#82c91e",700:"#74b816",800:"#66a80f",900:"#5c940d"},yellow:{name:"yellow",50:"#fff9db",100:"#fff3bf",200:"#ffec99",300:"#ffe066",400:"#ffd43b",500:"#fcc419",600:"#fab005",700:"#f59f00",800:"#f08c00",900:"#e67700"},golden:{name:"golden",50:"#FDF9E7",100:"#FAEDBC",200:"#F7E191",300:"#F4D666",400:"#F1CA3C",500:"#EEBF11",600:"#BF990D",700:"#8F720A",800:"#5F4C07",900:"#302603"},orange:{name:"orange",50:"#fff4e6",100:"#ffe8cc",200:"#ffd8a8",300:"#ffc078",400:"#ffa94d",500:"#ff922b",600:"#fd7e14",700:"#f76707",800:"#e8590c",900:"#d9480f"}},Ga=10,Fa=95;function Pa(e,n){return e.l=n,tinycolor(e).toHexString()}function za(e){const n=tinycolor(e),t=n.toHsl();return Pa(t,n.isDark()?Fa:Ga)}function ue(e){const n=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(n).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}Object.values(v).map(e=>e[900]);const $a={url:/(file:\/\/\/.+(index)?.html)/,language:[g.RAW],category:p.MANGA};function Za(e){if(!e||!e.parentNode)return e;const n=e.cloneNode(!0);return e.parentNode.replaceChild(n,e),n}const Wa=e=>{e.getAttributeNames().forEach(n=>e?.removeAttribute(n))},Ua=(...e)=>{e?.forEach(Wa),e?.forEach(Za)};let D=!1;function kn(){const e=document.querySelector("#Chapter");if(e?.classList.contains("FluidLTR")||e?.classList.contains("FluidRTL")){const n=e.classList.contains("FluidRTL")?-1:1;e?.scrollBy({top:0,left:i("scrollHeight")*n,behavior:"smooth"})}else window.scrollBy({top:i("scrollHeight"),left:0,behavior:"smooth"});document.querySelector("#Header")?.classList.contains("headroom-end")&&(D=!1,document.querySelector("#ScrollControl")?.classList.remove("running"),c("Finished auto scroll")),D&&requestAnimationFrame(kn)}function me(){const e=document.querySelector("#AutoScroll");D?(D=!1,e?.classList.remove("running"),c("Stopped auto scroll")):(D=!0,requestAnimationFrame(kn),e?.classList.add("running"),c("Start auto scroll"))}let ge=!1;const qa=_.debounce(()=>{me(),ge=!1},500);function ja(){!ge&&D&&(me(),ge=!0),ge&&!D&&qa()}function Qa(){window.addEventListener("wheel",_.throttle(ja,500)),document.querySelector("#AutoScroll")?.addEventListener("click",me)}var pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j={},O={},Mn;function Ya(){return Mn||(Mn=1,Object.defineProperty(O,"__esModule",{value:!0}),O.BLANK_URL=O.relativeFirstCharacters=O.whitespaceEscapeCharsRegex=O.urlSchemeRegex=O.ctrlCharactersRegex=O.htmlCtrlEntityRegex=O.htmlEntitiesRegex=O.invalidProtocolRegex=void 0,O.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,O.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,O.htmlCtrlEntityRegex=/&(newline|tab);/gi,O.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,O.urlSchemeRegex=/^.+(:|&colon;)/gim,O.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,O.relativeFirstCharacters=[".","/"],O.BLANK_URL="about:blank"),O}var xn;function Xa(){if(xn)return j;xn=1,Object.defineProperty(j,"__esModule",{value:!0}),j.sanitizeUrl=void 0;var e=Ya();function n(l){return e.relativeFirstCharacters.indexOf(l[0])>-1}function t(l){var u=l.replace(e.ctrlCharactersRegex,"");return u.replace(e.htmlEntitiesRegex,function(f,m){return String.fromCharCode(m)})}function o(l){return URL.canParse(l)}function a(l){try{return decodeURIComponent(l)}catch{return l}}function s(l){if(!l)return e.BLANK_URL;var u,f=a(l.trim());do f=t(f).replace(e.htmlCtrlEntityRegex,"").replace(e.ctrlCharactersRegex,"").replace(e.whitespaceEscapeCharsRegex,"").trim(),f=a(f),u=f.match(e.ctrlCharactersRegex)||f.match(e.htmlEntitiesRegex)||f.match(e.htmlCtrlEntityRegex)||f.match(e.whitespaceEscapeCharsRegex);while(u&&u.length>0);var m=f;if(!m)return e.BLANK_URL;if(n(m))return m;var d=m.trimStart(),y=d.match(e.urlSchemeRegex);if(!y)return m;var h=y[0].toLowerCase().trim();if(e.invalidProtocolRegex.test(h))return e.BLANK_URL;var b=d.replace(/\\/g,"/");if(h==="mailto:"||h.includes("://"))return b;if(h==="http:"||h==="https:"){if(!o(b))return e.BLANK_URL;var V=new URL(b);return V.protocol=V.protocol.toLowerCase(),V.hostname=V.hostname.toLowerCase(),V.toString()}return b}return j.sanitizeUrl=s,j}var Ka=Xa(),he={exports:{}},Ja=he.exports,In;function ei(){return In||(In=1,(function(e,n){(function(t,o){o()})(Ja,function(){function t(m,d){return typeof d>"u"?d={autoBom:!1}:typeof d!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(m.type)?new Blob(["\uFEFF",m],{type:m.type}):m}function o(m,d,y){var h=new XMLHttpRequest;h.open("GET",m),h.responseType="blob",h.onload=function(){f(h.response,d,y)},h.onerror=function(){console.error("could not download file")},h.send()}function a(m){var d=new XMLHttpRequest;d.open("HEAD",m,!1);try{d.send()}catch{}return 200<=d.status&&299>=d.status}function s(m){try{m.dispatchEvent(new MouseEvent("click"))}catch{var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),m.dispatchEvent(d)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof pe=="object"&&pe.global===pe?pe:void 0,u=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(m,d,y){var h=l.URL||l.webkitURL,b=document.createElement("a");d=d||m.name||"download",b.download=d,b.rel="noopener",typeof m=="string"?(b.href=m,b.origin===location.origin?s(b):a(b.href)?o(m,d,y):s(b,b.target="_blank")):(b.href=h.createObjectURL(m),setTimeout(function(){h.revokeObjectURL(b.href)},4e4),setTimeout(function(){s(b)},0))}:"msSaveOrOpenBlob"in navigator?function(m,d,y){if(d=d||m.name||"download",typeof m!="string")navigator.msSaveOrOpenBlob(t(m,y),d);else if(a(m))o(m,d,y);else{var h=document.createElement("a");h.href=m,h.target="_blank",setTimeout(function(){s(h)})}}:function(m,d,y,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof m=="string")return o(m,d,y);var b=m.type==="application/octet-stream",V=/constructor/i.test(l.HTMLElement)||l.safari,Kn=/CriOS\/[\d]+/.test(navigator.userAgent);if((Kn||b&&V||u)&&typeof FileReader<"u"){var _e=new FileReader;_e.onloadend=function(){var X=_e.result;X=Kn?X:X.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=X:location=X,h=null},_e.readAsDataURL(m)}else{var Jn=l.URL||l.webkitURL,Re=Jn.createObjectURL(m);h?h.location=Re:location.href=Re,h=null,setTimeout(function(){Jn.revokeObjectURL(Re)},4e4)}});l.saveAs=f.saveAs=f,e.exports=f})})(he)),he.exports}var ni=ei();let Me;const An=(e,n,t,o)=>`${e}${(n+1).toString().padStart(Math.floor(Math.log10(t))+1,"0")}.${o.replace("jpeg","jpg")}`;async function ti(e){return new Promise((n,t)=>{c(`Getting Image data: ${e}`),GM_xmlhttpRequest({method:"GET",url:e,headers:{referer:window.location.host,origin:window.location.host},responseType:"blob",onload(o){o.status!==200&&t(o),n(o)}})})}async function oi(e,n,t){const o=e.getAttribute("src")??e.getAttribute("data-src")??"";if(J(o))throw new Error("Image source unusable");return K(o)?Promise.resolve({name:An("Page-",n,t.length,kt(o)),data:St(o)??""}):new Promise(a=>{ti(o).then(s=>{a({name:An("Page-",n,t.length,Ot(o)),data:s.response})}).catch(Jt("Image not Available"))})}function ai(e){c(`${e.name} Added to Zip from Base64 Image`),Me.file(e.name,e.data,{base64:!0,createFolders:!0,compression:"DEFLATE"})}async function ii(){Me=new JSZip;const e=[...document.querySelectorAll(".PageImg")];Promise.all(e.map(oi)).then(n=>{n.forEach(ai),c("Generating Zip"),Me.generateAsync({type:"blob"}).then(t=>{c("Download Ready");const o=`${document.querySelector("#MangaTitle")?.textContent?.trim()}.zip`;ni.saveAs(t,o,{autoBom:!1}),document.getElementById("download")?.classList.remove("loading")}).catch(c)}).catch(n=>c("One or more images couldn't be Downloaded",n))}function ri(e){const n=e.currentTarget;n.classList.contains("loading")||(c("Downloading Chapter"),n.classList.add("loading"),ii().catch(t=>c("Error downloading chapter",t)))}function si(){document.querySelector("#MangaOnlineViewer")?.classList.toggle("hideControls")}function xe(e){const n=e.target,t=n.getAttribute("value")??n.getAttribute("href");e.button!==1&&!e.ctrlKey&&(t&&t!=="#"?window.location.href=Ka.sanitizeUrl(t):n.id==="series"&&window.history.back())}function li(){document.querySelector("#CommentsPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function Ln(){document.querySelector("#CommentsPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function ci(){const e=document.querySelector("#CommentsArea");e?.classList.toggle("light"),e?.classList.toggle("dark")}function di(){document.querySelector("#download")?.addEventListener("click",ri),document.querySelector("#pageControls")?.addEventListener("click",si),document.querySelector("#next")?.addEventListener("click",xe),document.querySelector("#prev")?.addEventListener("click",xe),document.querySelector("#series")?.addEventListener("click",xe),document.querySelector("#CommentsButton")?.addEventListener("click",li),document.querySelector("#CommentsColorScheme")?.addEventListener("click",ci),document.querySelectorAll(".closeButton")?.forEach(S("click",Ln)),document.querySelector("#Overlay")?.addEventListener("click",Ln)}let Ie=0,Ae=0;const Q=e=>{const n=document.querySelector("#Header");n&&(n.classList.remove("headroom-end","headroom-hide","headroom-show","headroom-top"),e&&n.classList.add(`headroom-${e}`))};function ui(){const{scrollY:e}=window;Ae&&i("zoomMode")!=="height"&&e+window.innerHeight+Ae>document.body.scrollHeight?Q("end"):e>Ie&&e>50?Q("hide"):e<Ie&&e>50?Q("show"):e<=100?Q("top"):Q(""),Ie=e}function mi(e=0){Ae=e,window.addEventListener("scroll",_.debounce(ui,50))}function gi(e){const n=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");wn(n)}function pi(e){(e.currentTarget.parentElement?.parentElement).classList.toggle("hide")}function hi(){document.querySelectorAll(".Reload")?.forEach(S("click",gi)),document.querySelectorAll(".Hide")?.forEach(S("click",pi))}const A=e=>document.querySelector(e)?.dispatchEvent(new Event("click"));function Cn(e){const n=document.querySelector("#Chapter");if(n?.classList.contains("FluidLTR")||n?.classList.contains("FluidRTL")){const t=n.classList.contains("FluidRTL")?-1:1;n.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}else if(i("zoomMode")==="height"){const t=[...document.querySelectorAll(".MangaPage")],o=t.map(u=>Math.abs(u.offsetTop-window.scrollY)),a=_.indexOf(o,_.min(o)),s=a+e,l=document.querySelector("#Header");l&&s<0?Z(l):l&&s>=t.length?l.classList.add("headroom-end"):(c(`Current array page ${a},`,`Scrolling to page ${s}`),Z(t.at(s)))}else window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}const wi={SCROLL_UP(){Cn(-1)},SCROLL_DOWN(){Cn(1)},NEXT_CHAPTER(){A("#next")},PREVIOUS_CHAPTER(){A("#prev")},ENLARGE(){A("#enlarge")},REDUCE(){A("#reduce")},RESTORE(){A("#restore")},FIT_WIDTH(){A("#fitWidth")},FIT_HEIGHT(){A("#fitHeight")},SETTINGS(){A("#settings")},VIEW_MODE_WEBCOMIC(){A("#webComic")},VIEW_MODE_VERTICAL(){A("#verticalMode")},VIEW_MODE_LEFT(){A("#rtlMode")},VIEW_MODE_RIGHT(){A("#ltrMode")},SCROLL_START(){A("#AutoScroll")}};function Tn(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),Object.keys(i("keybinds")).forEach(e=>{hotkeys(i("keybinds")[e]?.join(",")??"",_.throttle(n=>{n.preventDefault(),n.stopImmediatePropagation(),n.stopPropagation(),wi[e]()},100))})}function fi(e){const n=e.currentTarget.value;k(),Z(document.querySelector(`#Page${n}`))}function bi(e){k(),Z(document.querySelector(`#Page${e.currentTarget.querySelector(".ThumbnailIndex")?.textContent}`))}function Ei(){document.querySelector("#gotoPage")?.addEventListener("change",fi),document.querySelectorAll(".Thumbnail")?.forEach(S("click",bi)),document.querySelector("#Thumbnails")?.addEventListener("wheel",ve)}const Le=()=>{const e=i("keybinds");return Object.keys(e).map(n=>{const t=e[n]?.length?e[n]?.map(o=>w`<kbd class="dark">${o}</kbd>`).join(" / "):"";return w`<span>${r(n)}:</span> <span>${t}</span>`})},vi=()=>Object.keys(i("keybinds")).map(e=>w`<label for="${e}">${r(e)}:</label>
            <input
              type="text"
              class="KeybindInput"
              id="${e}"
              name="${e}"
              value="${i("keybinds")[e]?.join(" , ")??""}"
            />`).concat(w` <div id="HotKeysRules">${r("KEYBIND_RULES")}</div>`),_n=()=>w`
    <div id="KeybindingsPanel" class="panel">
      <h2>${r("KEYBINDINGS")}</h2>
      <button id="CloseKeybindings" class="closeButton" title="${r("CLOSE")}">
        ${$}
      </button>
      <div class="controls">
        <button
          id="EditKeybindings"
          class="ControlButton"
          type="button"
          title="${r("EDIT_KEYBINDS")}"
        >
          ${Po} ${r("BUTTON_EDIT")}
        </button>
        <button
          id="SaveKeybindings"
          class="ControlButton hidden"
          type="button"
          title="${r("SAVE_KEYBINDS")}"
        >
          ${Co} ${r("BUTTON_SAVE")}
        </button>
      </div>
      <div id="KeybindingsList">${Le().join(`
`)}</div>
    </div>
  `;function yi(e,n,t,o){return()=>{document.querySelector(e)?.className.includes(n)?o():t()}}function Si(){const e=document.querySelector("#Header");e?.classList.contains("click")&&e?.classList.toggle("visible")}function Oi(e,n,t){return e.clientX>=0&&e.clientX<=n&&e.clientY>=0&&e.clientY<=t}function ki(e){const n=document.querySelector("#Header");n?.classList.contains("hover")&&(Oi(e,n.clientWidth,n.clientHeight)?(document.querySelector("#menu")?.classList.add("hide"),n?.classList.add("visible")):(document.querySelector("#menu")?.classList.remove("hide"),n?.classList.remove("visible")))}function Rn(){document.querySelector("#SettingsPanel")?.classList.add("visible"),document.querySelector("#Navigation")?.classList.add("visible"),document.querySelector("#Header")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function Ce(){document.querySelector("#SettingsPanel")?.classList.remove("visible"),document.querySelector("#Navigation")?.classList.remove("visible"),document.querySelector("#Header")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function Mi(){const e=document.querySelector("#KeybindingsList");e&&(e.innerHTML=Le().join(`
`)),document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),document.querySelector("#KeybindingsPanel")?.classList.add("visible"),document.querySelector("#Overlay")?.classList.add("visible")}function Nn(){document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),document.querySelector("#KeybindingsPanel")?.classList.remove("visible"),document.querySelector("#Overlay")?.classList.remove("visible")}function xi(){const e=i("keybinds");Object.keys(i("keybinds")).forEach(t=>{const o=document.querySelector(`#${t}`)?.value.split(",")?.map(a=>a.trim());e[t]=L(o)?void 0:o}),E("keybinds",e);const n=document.querySelector("#KeybindingsList");n&&(n.innerHTML=Le().join(`
`)),document.querySelector("#SaveKeybindings")?.classList.add("hidden"),document.querySelector("#EditKeybindings")?.classList.remove("hidden"),Tn()}function Ii(){const e=document.querySelector("#KeybindingsList");e&&(e.innerHTML=vi().join(`
`)),document.querySelector("#SaveKeybindings")?.classList.remove("hidden"),document.querySelector("#EditKeybindings")?.classList.add("hidden")}function Ai(){document.querySelector("#menu")?.addEventListener("click",Si),document.addEventListener("mousemove",_.throttle(ki,300)),document.querySelector("#settings")?.addEventListener("click",yi("#SettingsPanel","visible",Rn,Ce)),document.querySelectorAll(".closeButton")?.forEach(S("click",Ce)),document.querySelector("#Overlay")?.addEventListener("click",Ce),document.querySelector("#keybindings")?.addEventListener("click",Mi),document.querySelectorAll(".closeButton")?.forEach(S("click",Nn)),document.querySelector("#Overlay")?.addEventListener("click",Nn),document.querySelector("#EditKeybindings")?.addEventListener("click",Ii),document.querySelector("#SaveKeybindings")?.addEventListener("click",xi)}function Li(e){const n=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg"),t=n.width/n.naturalWidth*(100+i("zoomStep"));k("percent",t,`#${n.getAttribute("id")}`)}function Ci(e){const n=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg"),t=n.width/n.naturalWidth*(100-i("zoomStep"));k("percent",t,`#${n.getAttribute("id")}`)}function Ti(){document.querySelector(".PageContent .PageImg")?.removeAttribute("width")}function _i(e){const n=e.currentTarget.parentElement?.parentElement,t=n?.querySelector(".PageImg");k("width",0,`#${t.getAttribute("id")}`),n?.classList.toggle("DoublePage")}function Ri(e){const n=e.currentTarget.parentElement?.parentElement?.querySelector(".PageImg");k("height",0,`#${n.getAttribute("id")}`)}function Ni(){document.querySelectorAll(".ZoomIn")?.forEach(S("click",Li)),document.querySelectorAll(".ZoomOut")?.forEach(S("click",Ci)),document.querySelectorAll(".ZoomRestore")?.forEach(S("click",Ti)),document.querySelectorAll(".ZoomWidth")?.forEach(S("click",_i)),document.querySelectorAll(".ZoomHeight")?.forEach(S("click",Ri))}function Dn(e,n,t){return Ze`
      .ThemeRadio.${e}, [data-theme='${e}'] {
        --theme-primary-color: ${n};
        --theme-primary-text-color: ${t};
      }
    `}function Bn(e){return Dn(e.name,e[i("themeShade")],i("themeShade")<500?e[900]:e[50])}function Vn(e){return Dn("custom",e,za(e))}function Di(e){return W(e.name,Bn(e))}const Hn=()=>Object.values(v);function Gn(){Hn().forEach(e=>{Se(e.name,Bn(e))}),Se("custom",Vn(i("customTheme")))}const Bi=Hn().map(Di).join("")+W("custom",Vn(i("customTheme")));function Vi(){const e=i("colorScheme")==="dark";E("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(i("colorScheme"))}function Hi(e){const n=e.currentTarget;E("theme",n.title)}function Gi(e){const n=e.currentTarget.value;E("customTheme",n)}function Fi(e){const n=parseInt(e.currentTarget.value,10);E("themeShade",n),Gn()}function Pi(){document.querySelector("#ColorScheme")?.addEventListener("click",Vi),document.querySelectorAll(".ThemeRadio").forEach(S("click",Hi)),document.querySelector("#CustomThemeHue")?.addEventListener("change",Gi),document.querySelector("#ThemeShade")?.addEventListener("input",Fi)}function Fn(e){const n=document.querySelector("#Chapter");document.querySelector("#Header")?.classList.remove("visible"),document.querySelector("#menu")?.classList.remove("hide"),k("height"),Z(n),n?.addEventListener("wheel",e==="FluidLTR"?ve:mn)}function P(e){return()=>{const n=document.querySelector("#Chapter");if(n?.classList.remove("Vertical","WebComic","FluidLTR","FluidRTL"),n?.classList.add(e),n?.removeEventListener("wheel",ve),n?.removeEventListener("wheel",mn),e==="FluidLTR"||e==="FluidRTL")Fn(e);else{const t=i("header"),o=document.querySelector("#Header");o&&(o.className=t);const a=document.querySelector("#menu");a&&(a.className=t),k()}}}function zi(e){const n=e.currentTarget.value;P(n)()}function $i(){document.querySelector("#viewMode")?.addEventListener("change",zi),document.querySelector("#webComic")?.addEventListener("click",P("WebComic")),document.querySelector("#ltrMode")?.addEventListener("click",P("FluidLTR")),document.querySelector("#rtlMode")?.addEventListener("click",P("FluidRTL")),document.querySelector("#verticalMode")?.addEventListener("click",P("Vertical")),(i("viewMode")==="FluidLTR"||i("viewMode")==="FluidRTL")&&Fn(i("viewMode"))}function Te(e,n=i("defaultZoom")){return()=>{k(e,n)}}function Pn(e=1){return()=>{const n=document.querySelector("#Zoom");if(n){const t=parseInt(n.value,10)+e*i("zoomStep");n.value=t.toString(),n.dispatchEvent(new Event("input",{bubbles:!0}))}}}function Zi(e){const n=e.currentTarget.value;E("zoomMode",n),k(n),document.querySelector(".DefaultZoom")?.classList.toggle("show",n==="percent")}function Wi(e){const n=parseInt(e.currentTarget.value,10);E("defaultZoom",n),k("percent",n)}function Ui(e){const n=parseInt(e.currentTarget.value,10);k("percent",n);const t=document.querySelector("#ZoomVal");t&&(t.textContent=`${n}%`)}function qi(){document.querySelector("#DefaultZoomMode")?.addEventListener("change",Zi),document.querySelector("#DefaultZoom")?.addEventListener("input",Wi),document.querySelector("#Zoom")?.addEventListener("input",Ui),document.querySelector("#enlarge")?.addEventListener("click",Pn()),document.querySelector("#reduce")?.addEventListener("click",Pn(-1)),document.querySelector("#restore")?.addEventListener("click",Te("percent")),document.querySelector("#fitWidth")?.addEventListener("click",Te("width")),document.querySelector("#fitHeight")?.addEventListener("click",Te("height"))}let zn=!1;function $n(){zn||(mi(100),Tn(),hi(),Ni(),window.addEventListener("resize",()=>{const e=document.querySelector("#MangaOnlineViewer");e?.classList.remove("mobile","tablet","desktop"),e?.classList.add(G())}),zn=!0),ia(),di(),Ei(),xa(),Ai(),Pi(),$i(),qi(),Qa()}const Zn=()=>w`
    <div id="CommentsPanel" class="panel">
      <button id="CloseComments" class="closeButton" title="${r("CLOSE")}">
        ${$}
      </button>
      <h2>${r("COMMENTS")}</h2>
      <div id="CommentsArea" class="${i("colorScheme")}"></div>
      <button id="CommentsColorScheme" class="simpleButton ColorScheme">
        ${dn} ${sn}
      </button>
    </div>
  `,ji=(e,n)=>z(e,n).map(t=>w` <option value="${t}">${t}</option>`),Wn=e=>w`
    <header id="Header" class="${i("header")} headroom-top">
      <aside id="GlobalFunctions">
        <span>
          <button id="enlarge" title="${r("ENLARGE")}" class="ControlButton">
            ${Jo}
          </button>
          <button id="restore" title="${r("RESTORE")}" class="ControlButton">
            ${ta}
          </button>
          <button id="reduce" title="${r("REDUCE")}" class="ControlButton">
            ${na}
          </button>
          <button id="fitWidth" title="${r("FIT_WIDTH")}" class="ControlButton">
            ${on}
          </button>
          <button id="fitHeight" title="${r("FIT_HEIGHT")}" class="ControlButton">
            ${tn}
          </button>
          <button id="keybindings" title="${r("KEYBINDINGS")}" class="ControlButton">
            ${Do}
          </button>
          <button
            id="AutoScroll"
            title="${r("SCROLL_START")}"
            class="ControlButton phones"
          >
            ${Zo} ${$o}
          </button>
        </span>
        <span>
          <button id="ltrMode" title="${r("VIEW_MODE_LEFT")}" class="ControlButton">
            ${Mo}
          </button>
          <button
            id="verticalMode"
            title="${r("VIEW_MODE_VERTICAL")}"
            class="ControlButton tablets"
          >
            ${Oo}
          </button>
          <button
            id="webComic"
            title="${r("VIEW_MODE_WEBCOMIC")}"
            class="ControlButton tablets"
          >
            ${jo}
          </button>
          <button id="rtlMode" title="${r("VIEW_MODE_RIGHT")}" class="ControlButton">
            ${ko}
          </button>
          <button
            id="pageControls"
            title="${r("TOGGLE_CONTROLS")}"
            class="ControlButton tablets"
          >
            ${Bo}
          </button>
          <button
            id="bookmarks"
            title="${r("BOOKMARKS")}"
            class="ControlButton tablets"
          >
            ${Ao}
          </button>
          <button
            id="settings"
            title="${r("SETTINGS")}"
            class="ControlButton tablets phones"
          >
            ${Uo}
          </button>
        </span>
        <span id="ZoomSlider">
          <output id="ZoomVal" class="RangeValue" for="Zoom">
            ${i("zoomMode")==="percent"?`${i("defaultZoom")}%`:i("zoomMode")}
          </output>
          <input
            type="range"
            value="${i("defaultZoom")}"
            name="Zoom"
            id="Zoom"
            min="1"
            max="200"
          />
        </span>
      </aside>
      <div class="ViewerTitle">
        <h1 id="MangaTitle">${e.title}</h1>
        <a id="series" href="${e.series??""}">
          (${r("RETURN_CHAPTER_LIST")})
        </a>
      </div>
      <nav id="ChapterNavigation">
        <div id="Counters" class="ControlLabel">
          ${r("PAGES_LOADED")}:
          <i>0</i> /
          <b>${e.begin&&e.begin>1?e.pages-(e.begin-1):e.pages}</b>
          <span class="ControlLabel"> ${r("GO_TO_PAGE")}: </span>
          <select id="gotoPage">
            <option selected>#</option>
            ${ji(e.pages,e.begin??0).join("")}
          </select>
        </div>
        <div id="ChapterControl" class="ChapterControl">
          <span>
            <button
              id="CommentsButton"
              class="NavigationControlButton ControlButton ${e.comments?"":"disabled"}"
              title="${r("DISPLAY_COMMENTS")}"
            >
              ${Fo} ${r("DISPLAY_COMMENTS")}
            </button>
            <button
              id="download"
              class="NavigationControlButton ControlButton disabled"
              type="button"
              title="${r("DOWNLOAD_ZIP")}"
            >
              ${No} ${Vo} ${r("BUTTON_DOWNLOAD")}
            </button></span
          >
          <span>
            <a
              id="prev"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${e.prev??""}"
              title="${r("PREVIOUS_CHAPTER")}"
            >
              ${xo} ${r("BUTTON_PREVIOUS")}
            </a>
            <a
              id="next"
              class="NavigationControlButton ControlButton"
              type="button"
              href="${e.next??""}"
              title="${r("NEXT_CHAPTER")}"
            >
              ${r("BUTTON_NEXT")} ${Io}
            </a>
          </span>
        </div>
      </nav>
    </header>
  `,Qi=(e,n)=>z(e,n).map(t=>w`
        <div id="Page${t}" class="MangaPage">
          <div class="PageFunctions">
            <button class="Bookmark ControlButton" title="${r("BOOKMARK")}">
              ${an} ${rn}
            </button>
            <button class="ZoomIn ControlButton" title="${r("ZOOM_IN")}">
              ${Ko}
            </button>
            <button class="ZoomRestore ControlButton" title="${r("ZOOM_RESET")}">
              ${Xo}
            </button>
            <button class="ZoomOut ControlButton" title="${r("ZOOM_OUT")}">
              ${ea}
            </button>
            <button class="ZoomWidth ControlButton" title="${r("ZOOM_WIDTH")}">
              ${on}
            </button>
            <button class="ZoomHeight ControlButton" title="${r("ZOOM_HEIGHT")}">
              ${tn}
            </button>
            <button class="Hide ControlButton" title="${r("HIDE")}">
              ${_o} ${Ro}
            </button>
            <button class="Reload ControlButton" title="${r("RELOAD")}">
              ${Wo}
            </button>
            <span class="PageIndex">${t}</span>
          </div>
          <div class="PageContent">
            <img id="PageImg${t}" alt="" class="PageImg" src="" />
          </div>
        </div>
        <div class="separator">
          [ ${t===e?r("END"):`${t} / ${e}`} ]
        </div>
      `),Yi=e=>w`
    <main
      id="Chapter"
      class="${i("fitWidthIfOversize")?"fitWidthIfOversize":""}
  ${i("verticalSeparator")?"separator":""}
  ${i("viewMode")}"
    >
      ${Qi(e.pages,e.begin??0).join("")}
    </main>
  `;function Xi(){return w` <div class="ControlLabel">
      ${r("SCOPE")}
      <div id="SettingsScope" class="radio-inputs">
        <label class="radio">
          <input
            type="radio"
            id="globalSettings"
            name="settingsScope"
            ${T()?"":"checked"}
            value="false"
          />
          <span class="name">${Yo} ${r("GLOBAL")}</span>
        </label>
        <label class="radio">
          <input
            type="radio"
            id="localSettings"
            name="settingsScope"
            ${T()?"checked":""}
            value="true"
          />
          <span class="name">${Ho} ${window.location.hostname}</span>
        </label>
      </div>
    </div>`}function Ki(){return F.map(e=>w`
          <option
            value="${e.ID}"
            ${i("locale")===e.ID?"selected":""}
          >
            ${e.NAME}
          </option>
        `).join("")}function Ji(){return w` <div class="ControlLabel locale">
      ${r("LANGUAGE")}
      <select id="locale">
        ${Ki()}
      </select>
    </div>`}const er=()=>Xi()+Ji();function nr(){return w`
      <div class="ControlLabel loadMode">
        ${r("DEFAULT_LOAD_MODE")}
        <select id="loadMode">
          <option value="wait" ${i("loadMode")==="wait"?"selected":""}>
            ${r("LOAD_MODE_NORMAL")}
          </option>
          <option value="always" ${i("loadMode")==="always"?"selected":""}>
            ${r("LOAD_MODE_ALWAYS")}
          </option>
          <option value="never" ${i("loadMode")==="never"?"selected":""}>
            ${r("LOAD_MODE_NEVER")}
          </option>
        </select>
      </div>
    `}function tr(){return w`
      <div class="ControlLabel PagesPerSecond">
        ${r("LOAD_SPEED")}
        <select id="PagesPerSecond">
          <option value="3000" ${i("throttlePageLoad")===3e3?"selected":""}>
            0.3(${r("SLOWLY")})
          </option>
          <option value="2000" ${i("throttlePageLoad")===2e3?"selected":""}>
            0.5
          </option>
          <option value="1000" ${i("throttlePageLoad")===1e3?"selected":""}>
            01(${r("NORMAL")})
          </option>
          <option value="500" ${i("throttlePageLoad")===500?"selected":""}>
            02
          </option>
          <option value="250" ${i("throttlePageLoad")===250?"selected":""}>
            04(${r("FAST")})
          </option>
          <option value="125" ${i("throttlePageLoad")===125?"selected":""}>
            08
          </option>
          <option value="100" ${i("throttlePageLoad")===100?"selected":""}>
            10(${r("EXTREME")})
          </option>
          <option value="1" ${i("throttlePageLoad")===1?"selected":""}>
            ${r("ALL_PAGES")}
          </option>
        </select>
      </div>
    `}const or=()=>nr()+tr();function B(e,n=!1){return w`
      <div class="toggler">
        <input
          id="${e}"
          name="${e}"
          type="checkbox"
          value="true"
          ${n?"checked":""}
        />
        <label for="${e}"> ${be} ${$} </label>
      </div>
    `}function ar(){return w`
      <div class="ControlLabel verticalSeparator">
        ${r("VERTICAL_SEPARATOR")}
        ${B("verticalSeparator",i("verticalSeparator"))}
      </div>
      <div class="ControlLabel fitIfOversize">
        ${r("FIT_WIDTH_OVERSIZED")}
        ${B("fitIfOversize",i("fitWidthIfOversize"))}
      </div>
      <div class="ControlLabel showThumbnails">
        ${r("SHOW_THUMBNAILS")}
        ${B("showThumbnails",i("showThumbnails"))}
      </div>
      <div class="ControlLabel enableComments">
        ${r("ENABLE_COMMENTS")}
        ${B("enableComments",i("enableComments"))}
      </div>
      <div class="ControlLabel downloadZip">
        ${r("DOWNLOAD_IMAGES")}
        ${B("downloadZip",i("downloadZip"))}
      </div>
      <div class="ControlLabel hidePageControls">
        ${r("HIDE_CONTROLS")}
        ${B("hidePageControls",i("hidePageControls"))}
      </div>
      <div class="ControlLabel lazyLoadImages">
        ${r("LAZY_LOAD_IMAGES_ENABLE")}
        ${B("lazyLoadImages",i("lazyLoadImages"))}
      </div>
    `}function ir(){return w`
      <div
        class="ControlLabel lazyStart ControlLabelItem
    ${i("lazyLoadImages")?"show":""}"
      >
        <span>
          ${r("LAZY_LOAD_IMAGES")}
          <output id="lazyStartVal" for="lazyStart"> ${i("lazyStart")} </output>
        </span>
        <input
          type="range"
          value="${i("lazyStart")}"
          name="lazyStart"
          id="lazyStart"
          min="5"
          max="100"
          step="5"
          oninput="lazyStartVal.value = this.value"
        />
      </div>
    `}function rr(){return w`
      <div class="ControlLabel headerType">
        ${r("HEADER_TYPE")}
        <select id="headerType">
          <option value="hover" ${i("header")==="hover"?"selected":""}>
            ${r("HEADER_HOVER")}
          </option>
          <option value="scroll" ${i("header")==="scroll"?"selected":""}>
            ${r("HEADER_SCROLL")}
          </option>
          <option value="click" ${i("header")==="click"?"selected":""}>
            ${r("HEADER_CLICK")}
          </option>
          <option value="fixed" ${i("header")==="fixed"?"selected":""}>
            ${r("HEADER_FIXED")}
          </option>
          <option value="simple" ${i("header")==="simple"?"selected":""}>
            ${r("HEADER_SIMPLE")}
          </option>
        </select>
      </div>
    `}function sr(){return w`
      <div class="ControlLabel autoScroll">
        <span>
          ${r("AUTO_SCROLL_HEIGHT")}
          <output id="scrollHeightVal" for="scrollHeight">
            ${i("scrollHeight")} </output
          >px
        </span>
        <input
          type="range"
          value="${i("scrollHeight")}"
          name="scrollHeight"
          id="scrollHeight"
          min="1"
          max="100"
          step="1"
          oninput="scrollHeightVal.value = this.value"
        />
      </div>
    `}const lr=()=>ar()+ir()+rr()+sr();function cr(){return[...Object.keys(v).map(e=>v[e].name)].map(e=>w`
          <span
            title="${e}"
            class="${e} ThemeRadio ${i("theme")===e?"selected":""}"
          >
            ${be}
          </span>
        `).join("")}function dr(){return w`
      <div class="ControlLabel ColorSchemeSelector">
        <label>${r("COLOR_SCHEME")}</label>
        <button id="ColorScheme" class="ControlButton">${dn} ${sn}</button>
      </div>
      <div class="ControlLabel ThemeSelector">
        <label>${r("THEME_COLOR")}</label>
        <span
          class="custom ThemeRadio
        ${i("theme")==="custom"?"selected":""}"
          title="custom"
        >
          ${ln} ${be}
        </span>
        ${cr()}
      </div>
      <div
        id="Hue"
        class="ControlLabel CustomTheme ControlLabelItem
      ${i("theme").startsWith("custom")?"show":""}"
      >
        <label>${r("THEME_HUE")}</label>
        <input
          id="CustomThemeHue"
          type="color"
          value="${i("customTheme")}"
          class="colorpicker CustomTheme"
        />
      </div>
      <div
        id="Shade"
        class="ControlLabel CustomTheme ControlLabelItem
      ${i("theme").startsWith("custom")?"":"show"}"
      >
        <span>
          <label>${r("THEME_SHADE")}</label>
          <output id="themeShadeVal" class="RangeValue" for="ThemeShade">
            ${i("themeShade")}
          </output>
        </span>
        <input
          type="range"
          value="${i("themeShade")}"
          name="ThemeShade"
          id="ThemeShade"
          min="100"
          max="900"
          step="100"
          oninput="themeShadeVal.value = this.value"
        />
      </div>
    `}function ur(){return w` <div class="ControlLabel DefaultZoomMode">
      ${r("DEFAULT_ZOOM_MODE")}
      <select id="DefaultZoomMode">
        <option value="percent" ${i("zoomMode")==="percent"?"selected":""}>
          ${r("PERCENT")}
        </option>
        <option value="width" ${i("zoomMode")==="width"?"selected":""}>
          ${r("FIT_WIDTH")}
        </option>
        <option value="height" ${i("zoomMode")==="height"?"selected":""}>
          ${r("FIT_HEIGHT")}
        </option>
      </select>
    </div>`}function mr(){return w`
      <div
        class="ControlLabel DefaultZoom ControlLabelItem ${i("zoomMode")==="percent"?"show":""}"
      >
        <span>
          ${r("DEFAULT_ZOOM")}
          <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom">
            ${i("defaultZoom")}%
          </output>
        </span>
        <input
          type="range"
          value="${i("defaultZoom")}"
          name="DefaultZoom"
          id="DefaultZoom"
          min="5"
          max="200"
          step="5"
          list="tickmarks"
          oninput='defaultZoomVal.value = this.value + "%"'
        />
        <datalist id="tickmarks">
          <option value="5">5</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
          <option value="125">125</option>
          <option value="150">150</option>
          <option value="175">175</option>
          <option value="200">200</option>
        </datalist>
      </div>
    `}function gr(){return w`
      <div class="ControlLabel minZoom">
        <span>
          ${r("MINIMUM_ZOOM")}
          <output id="minZoomVal" class="RangeValue" for="minZoom">
            ${i("minZoom")}%
          </output>
        </span>
        <input
          type="range"
          value="${i("minZoom")}"
          name="minZoom"
          id="minZoom"
          min="30"
          max="100"
          step="10"
          oninput='minZoomVal.value = this.value + "%"'
        />
      </div>
    `}function pr(){return w`
      <div class="ControlLabel zoomStep">
        <span>
          ${r("ZOOM_STEP")}
          <output id="zoomStepVal" class="RangeValue" for="zoomStep">
            ${i("zoomStep")}%
          </output>
        </span>
        <input
          type="range"
          value="${i("zoomStep")}"
          name="zoomStep"
          id="zoomStep"
          min="5"
          max="50"
          step="5"
          oninput='zoomStepVal.value = this.value + "%"'
        />
      </div>
    `}function hr(){return w`
      <div class="ControlLabel viewMode">
        ${r("DEFAULT_VIEW_MODE")}
        <select id="viewMode">
          <option value="Vertical" ${i("viewMode")==="Vertical"?"selected":""}>
            ${r("VIEW_MODE_VERTICAL")}
          </option>
          <option value="WebComic" ${i("viewMode")==="WebComic"?"selected":""}>
            ${r("VIEW_MODE_WEBCOMIC")}
          </option>
          <option value="FluidLTR" ${i("viewMode")==="FluidLTR"?"selected":""}>
            ${r("VIEW_MODE_LEFT")}
          </option>
          <option value="FluidRTL" ${i("viewMode")==="FluidRTL"?"selected":""}>
            ${r("VIEW_MODE_RIGHT")}
          </option>
        </select>
      </div>
    `}const wr=()=>ur()+mr()+gr()+pr()+hr(),Un=()=>w`
    <div id="SettingsPanel" class="panel">
      <h2>${r("SETTINGS")}</h2>
      <button id="CloseSettings" class="closeButton" title="${r("CLOSE")}">
        ${$}
      </button>
      <button id="ResetSettings" class="ControlButton">
        ${qo} ${r("BUTTON_RESET_SETTINGS")}
      </button>
      <fieldset>
        <legend>${r("GENERAL")}</legend>
        ${er()}
      </fieldset>
      <fieldset>
        <legend>${r("THEME")}</legend>
        ${dr()}
      </fieldset>
      <fieldset>
        <legend>${r("LOADING")}</legend>
        ${or()}
      </fieldset>
      <fieldset>
        <legend>${r("ZOOM")}</legend>
        ${wr()}
      </fieldset>
      <fieldset>
        <legend>${r("OTHERS")}</legend>
        ${lr()}
      </fieldset>
    </div>
  `,fr=e=>w`
    <nav id="Navigation" class="panel ${i("showThumbnails")?"":"disabled"}">
      <div id="NavigationCounters" class="ControlLabel">
        ${Lo}
        <i>0</i> /
        <b>${e.begin&&e.begin>1?e.pages-(e.begin-1):e.pages}</b>
        ${r("PAGES_LOADED")}
      </div>
      <div id="Thumbnails">
        ${z(e.pages,e.begin).map(n=>w`
              <div id="Thumbnail${n}" class="Thumbnail">
                <img id="ThumbnailImg${n}" alt="" class="ThumbnailImg" src="" />
                <span class="ThumbnailIndex">${n}</span>
              </div>
            `).join("")}
      </div>
    </nav>
  `;let qn;function br(){On(),P(i("viewMode"))();const e={"#Header":Wn(qn),"#CommentsPanel":Zn(),"#SettingsPanel":Un(),"#KeybindingsPanel":_n(),"#Bookmarks":un()},n=document.querySelector("#SettingsPanel")?.classList.contains("visible");document.querySelector("#ScrollControl")?.classList.contains("running")&&me(),Gn(),document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(i("colorScheme")),document.documentElement.setAttribute("data-theme",i("theme"));const t=document.getElementById("MangaOnlineViewer");t&&(t.className=`
        ${i("hidePageControls")?"hideControls":""}
        ${q()?"bookmarked":""}
        ${G()}`);const o=document.querySelector("#Chapter");o&&(o.className=`${i("fitWidthIfOversize")?"fitWidthIfOversize":""}  ${i("viewMode")}`),Object.entries(e).forEach(([a,s])=>{const l=document.querySelector(a);l&&(l.outerHTML=s)}),document.querySelector("#Navigation")?.classList.toggle("disabled",!i("showThumbnails")),document.querySelector("#Overlay")?.classList.remove("visible"),$n(),n&&Rn()}const Er=e=>{qn=e;const n=document.createElement("div");return n.id="MangaOnlineViewer",n.className=`
        ${i("hidePageControls")?"hideControls":""}
        ${q()?"bookmarked":""}
        ${G()}`,n.innerHTML=w`
      <div id="menu" class="${i("header")}">${Go}</div>
      ${Wn(e)} ${Yi(e)} ${fr(e)}
      <div id="Overlay" class="overlay"></div>
      ${Zn()} ${_n()} ${un()} ${Un()}
    `,R.listen(_.debounce(br,600)),n.outerHTML},vr=Ze`
    :root,
    .dark {
      --theme-body-background: ${v.dark[600]};
      --theme-body-text-color: ${v.dark[50]};
      --theme-text-color: ${v.dark[50]};
      --theme-primary-color: ${v.dark[700]};
      --theme-primary-text-color: ${v.dark[50]};
      --theme-background-color: ${v.dark[600]};
      --theme-hightlight-color: ${v.dark[500]};
      --theme-border-color: ${v.dark[400]};
    }

    .light {
      --theme-body-background: ${v.gray[50]};
      --theme-body-text-color: ${v.gray[900]};
      --theme-text-color: ${v.gray[900]};
      --theme-primary-color: ${v.gray[300]};
      --theme-primary-text-color: ${v.gray[900]};
      --theme-background-color: ${v.gray[50]};
      --theme-hightlight-color: ${v.gray[500]};
      --theme-border-color: ${v.gray[100]};
    }

    #MangaOnlineViewer .PageContent .PageImg[src=''],
    #MangaOnlineViewer .PageContent .PageImg:not([src]) {
      background-image: url('${ue(cn)}');
    }

    #MangaOnlineViewer .Thumbnail .ThumbnailImg[src=''],
    #MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
      background-image: url('${ue(cn)}');
    }

    #MangaOnlineViewer .PageContent .PageImg.imgBroken,
    #MangaOnlineViewer .Thumbnail .ThumbnailImg.imgBroken {
      background-image: url('${ue(zo)}');
    }

    #MangaOnlineViewer .ThemeRadio.custom {
      /*background-image: url("${ue(ln)}");*/
    }

    ${`/*  Simple Normalizer */
html {
  font-size: 100%;
}

body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--theme-body-text-color);
  background-color: var(--theme-body-background);
  padding: 0;
}

a,
a:link,
a:visited,
a:active,
a:focus {
  color: var(--theme-body-text-color);
  text-decoration: none;
}

img {
  height: auto;
  vertical-align: middle;
  border: 0 none;
}
`}
    ${`:root:not(.light, .dark) {
  --theme-body-background: #25262b;
  --theme-body-text-color: #c1c2c5;
  --theme-text-color: #c1c2c5;
  --theme-primary-color: #1a1b1e;
  --theme-primary-text-color: #c1c2c5;
  --theme-background-color: #25262b;
  --theme-hightlight-color: #2c2e33;
  --theme-border-color: #373a40;
}

#MangaOnlineViewer {
  text-decoration: none;
  color: var(--theme-body-text-color);
  background-color: var(--theme-body-background);
}

#MangaOnlineViewer #Chapter {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  min-width: 225px;
}

#MangaOnlineViewer #Chapter.Vertical:has(+ #Navigation:not(.disabled)),
#MangaOnlineViewer #Chapter.WebComic:has(+ #Navigation:not(.disabled)) {
  padding-bottom: 31px;
}

#MangaOnlineViewer #Chapter.Vertical .PageContent {
  margin-bottom: 8px;
  margin-top: 8px;
}

#MangaOnlineViewer .closeButton {
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 10px;
  top: 10px;
}

#MangaOnlineViewer .overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 950;
  cursor: pointer;
}

#MangaOnlineViewer .overlay.visible {
  display: block;
}

#MangaOnlineViewer select {
  height: 20px;
  /*padding: 0;*/
  margin: 2px;
}

#MangaOnlineViewer .ControlButton,
#MangaOnlineViewer .simpleButton {
  cursor: pointer;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  padding: 2px;
  min-height: 32px;
  color: var(--theme-primary-text-color);
  background-color: var(--theme-primary-color);
  border-color: var(--theme-border-color);
}

#MangaOnlineViewer .ControlButton:active,
#MangaOnlineViewer .ControlButton:hover {
  opacity: 0.8;
}

#MangaOnlineViewer .simpleButton {
  font-size: initial;
  min-width: 32px;
}

#MangaOnlineViewer .panel .simpleButton {
  position: absolute;
  top: 10px;
  left: 10px;
}

#MangaOnlineViewer .panel {
  padding: 5px;
  position: inherit;
  border-radius: 5px;
  background-color: var(--theme-background-color);
}

#MangaOnlineViewer :not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {
  max-width: 100%;
  object-fit: contain;
}

#MangaOnlineViewer .ControlButton.hidden,
.light #ColorScheme > .icon-tabler-sun,
.dark #ColorScheme > .icon-tabler-moon,
#MangaOnlineViewer .light + #CommentsColorScheme > .icon-tabler-sun,
#MangaOnlineViewer .dark + #CommentsColorScheme > .icon-tabler-moon,
#MangaOnlineViewer .ChapterControl #download.loading > .icon-tabler-file-download,
#MangaOnlineViewer .ChapterControl #download:not(.loading) > .icon-tabler-loader-2,
#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide > .icon-tabler-eye-off,
#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide > .icon-tabler-eye,
#MangaOnlineViewer.bookmarked .Bookmark > .icon-tabler-bookmark,
#MangaOnlineViewer:not(.bookmarked) .Bookmark > .icon-tabler-bookmark-off,
#MangaOnlineViewer #AutoScroll.running > .icon-tabler-player-play,
#MangaOnlineViewer #AutoScroll:not(.running) > .icon-tabler-player-pause {
  display: none;
}

#MangaOnlineViewer.hideControls .PageFunctions {
  visibility: hidden;
}
`}
  ${`#MangaOnlineViewer #gotoPage {
  min-width: 35px;
}

#MangaOnlineViewer #Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  transition: transform 0.3s ease-in;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: inherit;
  z-index: 900;
}

#MangaOnlineViewer #Header.click {
  padding-left: 40px;
}

@keyframes headroom {
  from {
    transform: translateY(-100%);
    position: sticky;
    top: 0;
  }
  to {
    transform: translateY(0%);
    position: sticky;
    top: 0;
  }
}

#MangaOnlineViewer #Header:not(.visible, .headroom-top, .fixed, .simple) {
  animation: headroom 0.3s ease-in reverse;
  transform: translateY(-100%);
  position: sticky;
  top: 0;
}

#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL) {
  position: fixed;
  padding-left: 40px;
  top: -100%;
}

#MangaOnlineViewer #Header.scroll.headroom-hide {
  animation: none;
  transform: translateY(-100%);
  position: sticky;
  top: 0;
}

#MangaOnlineViewer #Header.scroll.headroom-show,
#MangaOnlineViewer #Header.headroom-end,
#MangaOnlineViewer #Header.click:has(+ #Chapter.FluidLTR, + #Chapter.FluidRTL).visible,
#MangaOnlineViewer #Header.visible {
  animation: headroom 0.3s ease-in;
  transform: translateY(0%);
  position: sticky;
  top: 0;
}

#MangaOnlineViewer #Header.headroom-top {
  animation: none;
}

#MangaOnlineViewer #Header.fixed {
  position: sticky;
  animation: none;
  top: 0;
  transform: translateY(0%);
}

#MangaOnlineViewer #Header.simple {
  position: static;
  animation: none;
  top: 0;
  transform: translateY(0%);
}

#MangaOnlineViewer #menu {
  position: fixed;
  z-index: 1;
  color: var(--theme-body-text-color);
  height: 40px;
  width: 40px;
}

#MangaOnlineViewer #menu .icon-tabler {
  position: relative;
  top: 4px;
  left: 4px;
  height: 32px;
  width: 32px;
  stroke-width: 1.25;
}

#MangaOnlineViewer #menu:not(.click, .hover),
#MangaOnlineViewer #menu.hide {
  display: none;
}

#MangaOnlineViewer #menu.click {
  z-index: 901;
}

#MangaOnlineViewer #MangaTitle {
  padding: 2px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
}

#MangaOnlineViewer #GlobalFunctions {
  display: flex;
  gap: 3px;
  padding: 3px 3px 3px 0;
  flex-wrap: wrap;
  width: 300px;
  z-index: 100;
}

#MangaOnlineViewer .ChapterControl span,
#MangaOnlineViewer #GlobalFunctions span {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}

#MangaOnlineViewer .ChapterControl span {
  flex-grow: 1;
}

#MangaOnlineViewer .ChapterControl span > * {
  flex-basis: 50%;
}

#MangaOnlineViewer #ScrollControl .icon-tabler,
#MangaOnlineViewer #GlobalFunctions .icon-tabler {
  width: 25px;
  height: 25px;
}

#MangaOnlineViewer #GlobalFunctions #ZoomSlider {
  display: flex;
  align-items: center;
}

#MangaOnlineViewer #GlobalFunctions #Zoom {
  margin: 2px 5px;
  width: 160px;
}

#MangaOnlineViewer #GlobalFunctions #ZoomVal {
  width: 40px;
  display: inline-block;
  color: var(--theme-primary-text-color);
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: var(--theme-primary-color);
  padding: 2px 5px;
}

#MangaOnlineViewer #ChapterNavigation {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: end;
  padding: 5px;
  max-width: 350px;
}

#MangaOnlineViewer #Counters {
  padding-right: 5px;
}

#MangaOnlineViewer #ChapterControl {
  display: flex;
}

#MangaOnlineViewer #ChapterControl .NavigationControlButton {
  display: inline-flex;
  margin: 2px;
  justify-content: center;
  align-items: center;
  padding: 3px;
  gap: 0.5em;
}

#MangaOnlineViewer #ChapterControl .NavigationControlButton .icon-tabler {
  flex-shrink: 0;
  align-self: center;
  width: 1rem;
  height: 1rem;
}

#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="#"],
#MangaOnlineViewer #ChapterControl .NavigationControlButton[href=""],
#MangaOnlineViewer #ChapterControl .NavigationControlButton[href="undefined"] {
  visibility: hidden;
}

#MangaOnlineViewer #ChapterControl #download.loading {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.6;
}

#MangaOnlineViewer #ChapterControl .NavigationControlButton.disabled {
  pointer-events: none;
  filter: grayscale(0.9);
}

#MangaOnlineViewer .ViewerTitle {
  text-align: center;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  flex-basis: 60%;
}
`}
  ${`.icon-tabler {
  height: 1rem;
  width: 1rem;
  vertical-align: sub;
}

.icon-tabler-file-download > :nth-child(n + 4) {
  /* 4, 5 */
  color: gold;
}

.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {
  /* 3,4,5,6 */
  color: yellow;
}

.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {
  /* 3,4,5,6 */
  color: yellow;
}

.icon-tabler-zoom-in-area > :nth-child(2),
.icon-tabler-zoom-in-area > :nth-child(3) {
  color: lime;
}

.icon-tabler-zoom-out-area > :nth-child(2) {
  color: red;
}

.icon-tabler-zoom-pan > :nth-child(n + 4) {
  color: #9966ff;
}

.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {
  color: #28ffbf;
}

.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {
  color: #28ffbf;
}

.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {
  color: #28ffbf;
}

.icon-tabler-spacing-vertical > :nth-child(4) {
  color: fuchsia;
}

.icon-tabler-list-numbers > :nth-child(n + 5) {
  color: #e48900;
}

.icon-tabler-bookmarks > :nth-child(n + 2) {
  color: orange;
}

.icon-tabler-bookmark > * {
  color: orange;
}

.icon-tabler-bookmark-off > * {
  color: orange;
}

.icon-tabler-bookmark-off > :nth-child(3) {
  color: red;
}

.icon-tabler-eye-off > :nth-child(4) {
  color: red;
}

.icon-tabler-zoom-cancel > :nth-child(3),
.icon-tabler-zoom-cancel > :nth-child(4) {
  color: #9966ff;
}

.icon-tabler-zoom-in > :nth-child(3),
.icon-tabler-zoom-in > :nth-child(4) {
  color: lime;
}

.icon-tabler-zoom-out > :nth-child(3) {
  color: red;
}

.icon-tabler-refresh > :nth-child(n + 2) {
  color: cyan;
}

.icon-tabler-photo > * {
  color: silver;
}

.icon-tabler-photo-off > * {
  color: silver;
}

.icon-tabler-photo-off > :nth-child(6) {
  color: orange;
}

.icon-tabler-message > :nth-child(2),
.icon-tabler-message > :nth-child(3) {
  color: greenyellow;
}
`}
  ${`#MangaOnlineViewer #KeybindingsPanel {
  padding: 10px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  line-height: 1.5em;
  z-index: 1000;
  overflow-y: auto;
  width: 360px;
  max-width: 100vw;
}

#MangaOnlineViewer #KeybindingsPanel.visible {
  transform: translateX(0);
  display: block;
}

#MangaOnlineViewer #KeybindingsPanel #KeybindingsList {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px;
}

#MangaOnlineViewer #KeybindingsPanel .ControlButton {
  margin-left: 3px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 0.5em;
}

#MangaOnlineViewer #KeybindingsPanel label {
  display: ruby;
}

#MangaOnlineViewer #KeybindingsPanel input {
  display: inline-block;
  width: 100%;
}

#MangaOnlineViewer #KeybindingsPanel #HotKeysRules {
  grid-column: span 2;
}
`}
  ${`#MangaOnlineViewer .MangaPage {
  width: 100%;
  display: inline-block;
  text-align: center;
  line-height: 0;
  min-height: 22px;
  min-width: 100%;
}

#MangaOnlineViewer .PageContent {
  text-align: center;
  display: inline-block;
  overflow-x: auto;
  max-width: 100%;
  transition: all 0.3s ease-in-out;
  height: 100%;
  overflow-y: hidden;
}

#MangaOnlineViewer .MangaPage.hide .PageContent {
  height: 0;
}

#MangaOnlineViewer .PageContent .PageImg[src=""],
#MangaOnlineViewer .PageContent .PageImg:not([src]) {
  width: 40vw;
  height: 80vh;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
  background-color: var(--theme-hightlight-color);
}

#MangaOnlineViewer .PageContent .PageImg.imgBroken {
  width: 40vw;
  height: 80vh;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
  background-color: var(--theme-hightlight-color);
}

#MangaOnlineViewer .PageFunctions {
  font-family: monospace;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 3px;
  position: absolute;
  right: 0;
}

#MangaOnlineViewer .PageFunctions > .PageIndex {
  background-color: var(--theme-primary-color);
  color: var(--theme-primary-text-color);
  min-width: 20px;
  text-align: center;
  display: inline-block;
  padding: 3px 5px;
  line-height: 1rem;
  border-radius: 5px;
}

#MangaOnlineViewer .PageFunctions .ControlButton {
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-width: 0;
  min-height: auto;
  opacity: 0.5;
}

#MangaOnlineViewer .PageFunctions:hover .ControlButton {
  opacity: 1;
}

#MangaOnlineViewer .PageFunctions .ControlButton:hover {
  opacity: 0.9;
}

#MangaOnlineViewer #Chapter.Vertical .separator {
  display: flex;
  align-items: center;
  text-align: center;
  font-style: italic;
}

#MangaOnlineViewer #Chapter.Vertical .separator::before,
#MangaOnlineViewer #Chapter.Vertical .separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid var(--theme-text-color);
}

#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::before {
  margin-right: 0.25em;
}

#MangaOnlineViewer #Chapter.Vertical.separator:not(:empty)::after {
  margin-left: 0.25em;
}

#MangaOnlineViewer #Chapter:not(.separator) .separator,
#MangaOnlineViewer #Chapter:not(.Vertical) .separator {
  display: none;
}
`}
  ${`#MangaOnlineViewer #Chapter.FluidLTR,
#MangaOnlineViewer #Chapter.FluidRTL {
  display: flex;
  overflow-x: auto;
  min-width: auto;

  .ZoomWidth {
    display: none;
  }

  .PageImg {
    min-width: unset;
  }

  .MangaPage {
    width: initial;
    min-width: fit-content;
    position: relative;
    max-height: 100%;
  }

  .MangaPage.DoublePage {
    grid-column: span 2;
  }
}

#MangaOnlineViewer #Chapter.FluidLTR {
  flex-direction: row;

  .MangaPage .PageFunctions {
    right: auto;
    left: 0;
    direction: rtl;
  }
}

#MangaOnlineViewer #Chapter.FluidRTL {
  flex-direction: row-reverse;
}
`}
  ${`#MangaOnlineViewer #SettingsPanel {
  color: var(--theme-text-color);
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  transition:
    transform 0.3s ease-in,
    background-color 0.3s linear;
  transform: translateX(-100%);
  display: flex;
  flex-flow: column;
  gap: 5px;
  overflow-y: auto;
  max-width: 100vw;
  width: 308px;
}

#MangaOnlineViewer #SettingsPanel.visible {
  transform: translateX(0);
}

#MangaOnlineViewer #SettingsPanel fieldset {
  border: 1px solid var(--theme-body-text-color);
  padding: 3px;
  border-radius: 10px;
}

#MangaOnlineViewer #SettingsPanel .ControlLabel {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}

#MangaOnlineViewer #SettingsPanel .ControlLabelItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {
  display: none;
}

#MangaOnlineViewer #SettingsPanel input[type="range"] {
  width: 100%;
}

#MangaOnlineViewer #SettingsPanel .RangeValue {
  display: inline-block;
  color: var(--theme-primary-text-color);
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: var(--theme-primary-color);
  padding: 2px 5px;
  margin-left: 8px;
}

#MangaOnlineViewer #SettingsPanel datalist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  writing-mode: vertical-lr;
  width: 100%;
}

#MangaOnlineViewer #SettingsPanel datalist option {
  padding: 0;
}

#MangaOnlineViewer .ThemeRadio {
  border: 1px solid var(--theme-text-color);
  color: var(--theme-primary-text-color);
  background-color: var(--theme-primary-color);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 1px;
  margin: 2px 5px;
  position: relative;
}

#MangaOnlineViewer .ThemeRadio svg {
  position: absolute;
  top: 15%;
  right: 15%;
}

#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {
  display: inline;
}

#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {
  display: none;
}

#MangaOnlineViewer #ThemeSelector {
  width: 110px;
}

#MangaOnlineViewer #Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {
  display: none;
}

#MangaOnlineViewer .radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: var(--theme-border-color);
  color: var(--theme-text-color);
  box-sizing: border-box;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 300px;
  font-size: 14px;
}

#MangaOnlineViewer .radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

#MangaOnlineViewer .toggler input {
  display: none;
}

#MangaOnlineViewer .radio-inputs .radio input {
  display: none;
}

#MangaOnlineViewer .radio-inputs .radio .name .icon {
  margin: 0 0.5rem;
}

#MangaOnlineViewer .radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: var(--theme-text-color);
  background-color: var(--theme-border-color);
  transition: all 0.15s ease-in-out;
}

#MangaOnlineViewer .radio-inputs .radio input:checked + .name {
  background-color: var(--theme-primary-color);
  color: var(--theme-primary-text-color);
  font-weight: 600;
}

#MangaOnlineViewer #ColorScheme {
  padding: 5px;
  min-height: 28px;
  min-width: 28px;
}

#MangaOnlineViewer .toggler {
  width: 36px;
  /*margin: 40px auto;*/
}

#MangaOnlineViewer .toggler label {
  display: block;
  position: relative;
  width: 36px;
  height: 18px;
  border: 1px solid #d6d6d6;
  border-radius: 36px;
  background: #e4e8e8;
  cursor: pointer;
}

#MangaOnlineViewer .toggler label::after {
  display: block;
  border-radius: 100%;
  background-color: #d7062a;
  content: "";
  animation-name: toggler-size;
  animation-duration: 0.15s;
  animation-timing-function: ease-out;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-play-state: running;
}

#MangaOnlineViewer .toggler .toggler-on,
#MangaOnlineViewer .toggler .toggler-off {
  opacity: 1;
  z-index: 2;
}

#MangaOnlineViewer .toggler label::after,
#MangaOnlineViewer .toggler label .toggler-on,
#MangaOnlineViewer .toggler label .toggler-off {
  position: absolute;
  /*top: 50%;*/
  top: 9px;
  left: 25%;
  width: 16px;
  height: 16px;
  transform: translateY(-50%) translateX(-50%);
  transition:
    left 0.15s ease-in-out,
    background-color 0.2s ease-out,
    width 0.15s ease-in-out,
    height 0.15s ease-in-out,
    opacity 0.15s ease-in-out;
}

#MangaOnlineViewer .toggler input:checked + label::after,
#MangaOnlineViewer .toggler input:checked + label .toggler-on,
#MangaOnlineViewer .toggler input:checked + label .toggler-off {
  left: 75%;
}

#MangaOnlineViewer .toggler input:checked + label::after {
  background-color: #50ac5d;
  animation-name: toggler-size2;
}

#MangaOnlineViewer .toggler input:checked + label .toggler-off,
#MangaOnlineViewer .toggler input:not(:checked) + label .toggler-on {
  width: 0;
  height: 0;
  opacity: 0;
}

#MangaOnlineViewer .toggler .path {
  fill: none;
  stroke: #fefefe;
  stroke-width: 7px;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}

@keyframes toggler-size {
  0%,
  100% {
    width: 26px;
    height: 26px;
  }

  50% {
    width: 20px;
    height: 20px;
  }
}

@keyframes toggler-size2 {
  0%,
  100% {
    width: 26px;
    height: 26px;
  }

  50% {
    width: 20px;
    height: 20px;
  }
}
`}
  ${`#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],
#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
  width: 100px;
  height: 150px;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
}

#MangaOnlineViewer #NavigationCounters {
  margin: 5px;
  width: 100%;
  line-height: 1rem;
}

#MangaOnlineViewer #Navigation {
  color: var(--theme-text-color);
  background-color: var(--theme-hightlight-color);
  bottom: -180px;
  height: 185px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 20px;
  position: fixed;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  transition:
    transform 0.3s ease-in,
    background-color 0.3s linear;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  line-height: 0;
}

#MangaOnlineViewer #Navigation #Thumbnails {
  overflow-x: auto;
  overflow-y: hidden;
  margin-right: 10px;
}

#MangaOnlineViewer #Navigation:hover {
  transform: translateY(-180px);
}

#MangaOnlineViewer #Navigation.disabled {
  display: none;
}

#MangaOnlineViewer #Navigation.visible {
  transform: translateY(-180px);
}

#MangaOnlineViewer #Navigation .Thumbnail {
  display: inline-block;
  height: 150px;
  margin: 0 5px;
  border: 1px solid var(--theme-primary-color);
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {
  color: var(--theme-text-color);
  background-color: var(--theme-hightlight-color);
  display: block;
  opacity: 0.8;
  position: relative;
  bottom: 25%;
  width: 100%;
  line-height: 1rem;
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {
  cursor: pointer;
  display: inline-block;
  max-height: 150px;
  min-height: 150px;
  min-width: 80px;
  max-width: 160px;
}
`}
  ${`#MangaOnlineViewer #BookmarksPanel {
  position: fixed;
  top: 10%;
  width: 50%;
  left: 25%;
  right: 25%;
  text-align: center;
  max-height: 70%;
  transition: transform 0.3s ease-in-out;
  transform: scaleY(0);
  z-index: 1000;
}

#MangaOnlineViewer #BookmarksPanel.visible {
  transform: scaleY(1);
  display: block;
}

#MangaOnlineViewer #BookmarksList {
  padding: 0 15px;
  overflow: auto;
  max-height: 60vh;
}

#MangaOnlineViewer #BookmarksList .BookmarkItem {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}

#MangaOnlineViewer #BookmarksList .bookmarkColumnLarge {
  flex-basis: 90%;
}

#MangaOnlineViewer #BookmarksList .bookmarkColumnSmall {
  width: 90px;
}

#MangaOnlineViewer #BookmarksList .bookmarkFunctions {
  width: 75px;
}

#MangaOnlineViewer #BookmarksList .bookmarkURl {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-basis: 55%;
}
`}
  ${`#MangaOnlineViewer #CommentsPanel {
  position: static;
  width: 90%;
  height: 0;
  top: 5%;
  left: 5%;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  transform: scaleY(0);
  z-index: 1000;
  overflow-y: initial;
  background-color: var(--theme-body-background);
  opacity: 0;
}

#MangaOnlineViewer #CommentsPanel.visible {
  position: fixed;
  height: 90%;
  transform: scaleY(1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 1;
}

#MangaOnlineViewer #CommentsArea {
  overflow-y: auto;
  overscroll-behavior: contain;
  height: 100%;
  width: 100%;
  background-color: var(--theme-body-background);
}
`}
  ${`#MangaOnlineViewer.mobile #Header,
#MangaOnlineViewer.tablet #Header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#MangaOnlineViewer.mobile .ViewerTitle,
#MangaOnlineViewer.tablet .ViewerTitle {
  order: 1;
  min-height: auto;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
}

#MangaOnlineViewer.mobile #GlobalFunctions,
#MangaOnlineViewer.tablet #GlobalFunctions {
  width: auto;
  order: 2;
  padding: 5px;
}

#MangaOnlineViewer.mobile #ChapterNavigation,
#MangaOnlineViewer.tablet #ChapterNavigation {
  order: 3;
}

#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,
#MangaOnlineViewer.tablet #GlobalFunctions #ZoomSlider,
#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.tablets, .phones),
#MangaOnlineViewer.tablet #GlobalFunctions .ControlButton:not(.tablets, .phones) {
  display: none;
}

#MangaOnlineViewer.mobile #Header {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

#MangaOnlineViewer.mobile #Header.click + #Chapter:not(.webcomic, .vertical) {
  position: sticky;
}

#MangaOnlineViewer.mobile #MangaTitle {
  word-wrap: anywhere;
}

#MangaOnlineViewer.mobile .ViewerTitle {
  order: 1;
  margin-top: 0;
  height: auto;
  padding: 0;
}

#MangaOnlineViewer.mobile #GlobalFunctions {
  order: 2;
  padding: 0;
  width: auto;
  flex-basis: 35px;
}

#MangaOnlineViewer.mobile #ChapterNavigation {
  order: 3;
  width: min-content;
  min-width: 205px;
}

#MangaOnlineViewer.mobile .ChapterControl {
  flex-direction: row;
  flex-wrap: wrap;
}

#MangaOnlineViewer.mobile .ChapterControl .NavigationControlButton {
  flex-grow: 1;
}

#MangaOnlineViewer.mobile .PageFunctions {
  padding: 0;
}

#MangaOnlineViewer.mobile .PageFunctions .ControlButton.Bookmark {
  opacity: 1;
}

#MangaOnlineViewer.mobile #Navigation,
#MangaOnlineViewer.mobile #GlobalFunctions #ZoomSlider,
#MangaOnlineViewer.mobile #GlobalFunctions .ControlButton:not(.phones),
#MangaOnlineViewer.mobile .PageFunctions .ControlButton:not(.Bookmark),
#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoomMode,
#MangaOnlineViewer.mobile #SettingsPanel .DefaultZoom,
#MangaOnlineViewer.mobile #SettingsPanel .fitIfOversize,
#MangaOnlineViewer.mobile #SettingsPanel .showThumbnails,
#MangaOnlineViewer.mobile #SettingsPanel .lazyLoadImages,
#MangaOnlineViewer.mobile #SettingsPanel .downloadZip,
#MangaOnlineViewer.mobile #SettingsPanel .minZoom,
#MangaOnlineViewer.mobile #SettingsPanel .zoomStep,
#MangaOnlineViewer.mobile #SettingsPanel .headerType,
#MangaOnlineViewer.mobile #SettingsPanel .autoScroll,
#MangaOnlineViewer.mobile #KeybindingsPanel,
#MangaOnlineViewer.mobile .ChapterControl .download,
#MangaOnlineViewer.mobile #Counters {
  display: none;
}
`}
  ${`@-webkit-keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes spin-reverse {
  0% {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

.icon-tabler-loader-2,
.animate-spin {
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

.animate-spin-reverse {
  -webkit-animation: spin-reverse 1s linear infinite;
  animation: spin-reverse 1s linear infinite;
}
`}
  `;function yr(e){return w`
      <title>${e.title}</title>
      <meta charset="UTF-8" />
      ${W("externals",ze)} ${W("reader",vr)} ${Bi}
      ${W("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${i("minZoom")}vw;}`)}
    `}function Sr(e){Ua(document.documentElement,document.head,document.body),document.documentElement.classList.add(i("colorScheme")),document.documentElement.setAttribute("data-theme",i("theme")),window.scrollTo(0,0),H("Page Cleaned Up"),document.head.innerHTML=yr(e),document.body.innerHTML=Er(e),$n(),_a(e),e.comments&&document.querySelector("#CommentsArea")?.append(e.comments)}async function Or(){if(!i("enableComments"))return null;let e=document.querySelector("#disqus_thread, #fb-comments");return e&&(c("Waiting to Comments to load",e),window.scrollTo(0,document.body.scrollHeight),await st(De(()=>{e=document.querySelector("#disqus_thread, #fb-comments");const n=e?.querySelector("iframe:not(#indicator-north, #indicator-south)");return n?.contentWindow?.document.readyState==="complete"&&!!n?.contentWindow?.document?.body?.textContent?.length})),e.children.length?c("Got Comments",e):c("Timeout Comments")),window.scrollTo(0,0),e}async function Y(e){e.before!==void 0&&(H("Executing Preparation"),await e.before(e.begin??0)),i("enableComments")&&!e.comments&&(e.comments=await Or()),setTimeout(()=>{try{Sr(e)}catch(n){c(n)}},50)}const kr=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],Mr=/.(png|jpg|jpeg|gif|bmp|webp)$/i,jn=(e,n)=>e.localeCompare(n,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function xr(e){return kr.includes(e.type)}const Ir=e=>{const n=new Uint8Array(e),t=new Blob([n.buffer]);return URL.createObjectURL(t)};async function Ar(e){const n=await JSZip.loadAsync(e),t=n.filter((o,a)=>!a.dir&&Mr.test(a.name)).sort((o,a)=>jn(o.name,a.name));return c("Files in zip:",n.files),Promise.all(t.map(o=>o.async("arraybuffer").then(Ir)))}function Qn(e,n){Y({title:e,series:"?reload",pages:n.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:n}).then(()=>c("Page loaded"))}async function Lr(e){const n=await Ar(e);Qn(typeof e=="string"?e:e.name,n)}function Yn(e){const n=e.target,t=Array.from(n.files).filter(xr).sort((o,a)=>jn(o.webkitRelativePath||o.name,a.webkitRelativePath||a.name));c("Local Files: ",t,t.map(o=>o.webkitRelativePath||o.name)),n.files?.[0]&&Qn(n.files[0].webkitRelativePath.split("/")[0]||"Local Images",t.map(URL.createObjectURL))}function Cr(){return $a.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const n=e.target;n.files?.[0]&&Lr(n.files[0])}),document.querySelector("#folder")?.addEventListener("change",Yn),document.querySelector("#images")?.addEventListener("change",Yn),c("Waiting for zip/images upload")),!0):!1}function Tr(e,n,t){let o=e;return Number.isNaN(o)||o<t.min()?o=t.min():o>t.max()?o=t.max():o>n&&(o=n),o}function _r(e,n,t){let o=e;return Number.isNaN(o)||o>t.max()?o=t.max():o<t.min()?o=t.min():o<n&&(o=n),o}async function Rr(e,n=1){const t=await e.run();c("LateStart");let o=n,a=t.pages;const s={title:r("STARTING"),html:w`
        ${r("CHOOSE_BEGINNING")}
        <div id="pageInputGroup">
          <div id="pageInputs">
            <input
              type="number"
              id="pageBegin"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${t.pages}"
              value="${o}"
            />
            -
            <input
              type="number"
              id="pageEnd"
              class="pageInput"
              min="1"
              inputmode="numeric"
              pattern="[0-9]*"
              max="${t.pages}"
              value="${a}"
            />
          </div>
          <div id="pagesSlider"></div>
        </div>
      `,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,icon:"question",didOpen(){const l=document.querySelector("#pageBegin"),u=document.querySelector("#pageEnd"),f=document.getElementById("pagesSlider");if(f){let m=function(){if(l&&l.value===""||u&&u.value==="")return;const h=Tr(parseInt(l?.value??"0",10),a,d),b=_r(parseInt(u?.value??"0",10),o,d);l&&(l.value=h.toString()),u&&(u.value=b.toString()),o=h,a=b,d.value([h,b])};const d=rangeSlider(f,{min:1,max:t.pages,value:[o,a],onInput(h,b){b&&([o,a]=h,l&&(l.value=o.toString()),u&&(u.value=a.toString()))}}),y=_.debounce(m,600);["change","mouseup","keyup","touchend"].forEach(h=>{l?.addEventListener(h,y),u?.addEventListener(h,y)})}}};Swal.fire(s).then(l=>{l.value?(c(`Choice: ${o} - ${a}`),t.begin=o,t.pages=a,Y(t).then(()=>c("Page loaded"))):c(l.dismiss)})}function Xn(e,n){const t=document.createElement("button");t.innerText=r("BUTTON_START"),t.id="StartMOV",t.onclick=()=>{Rr(e,n).catch(c)},document.body.appendChild(t);const o=document.createElement("style");o.appendChild(document.createTextNode(Xt+Yt)),document.head.appendChild(o),c("Start Button added to page",t)}function Nr(e,n){Swal.fire({title:r("STARTING"),html:w`${n.begin&&n.begin>1?`${r("RESUME")}${n.begin}.<br/>`:""}${r("WAITING")}`,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,timer:3e3}).then(t=>{t.value||t.dismiss===Swal.DismissReason.timer?Y(n).then(()=>c("Page loaded")):(Xn(e,n.begin??0),c(t.dismiss))})}async function Dr([e,n]){c(`Found Pages: ${n.pages} in ${e.name}`),n.title||(n.title=document.querySelector("title")?.textContent?.trim()),n.begin=q()??n.begin??1;const t=document.createElement("style");switch(t.appendChild(document.createTextNode(ze)),document.body.appendChild(t),unsafeWindow.MOV=(o,a)=>{o!==void 0&&(n.begin=o),a!==void 0&&(n.pages=a),Y(n).then(()=>c("Page loaded"))},e.start??i("loadMode")){case"never":Xn(e,n.begin);break;case"always":Y(n).then(()=>c("Page loaded"));break;default:Nr(e,n);break}}async function Br(e){if(c(`Starting ${fe.script.name} ${fe.script.version} on ${G()} ${to()} with ${oo()}`),Cr())return;c(e.length,"Known Manga Sites:",e);const n=e.filter(o=>o.url.test(window.location.href));c(n.length,"Found sites:",n);const t=n.map(async o=>(c(`Testing site: ${o.name}`),new Promise((a,s)=>{Promise.all([uo(o),so(o),ro(o),lo(o),co(o)]).then(async()=>o.run()).then(l=>l.pages>0?a([o,l]):s(new Error(`${o.name} found ${l.pages} pages`)))})));Promise.race(t.map((o,a)=>o.then(()=>a))).then(o=>{t.forEach((a,s)=>{s!==o&&c(`Failed/Skipped: ${n[s].name}`)}),t[o].then(a=>{Dr(a)})})}Br(Qt).catch(c)})();
