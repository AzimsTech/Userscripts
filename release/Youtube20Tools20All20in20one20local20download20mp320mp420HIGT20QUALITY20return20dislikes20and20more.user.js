// ==UserScript==
// @name Youtube Tools All in one local download mp3 mp4 HIGT QUALITY return dislikes and more
// @name:en Youtube Tools All in one local download mp3 mp4.
// @homepage     https://github.com/DeveloperMDCM/
// @version      2.4.2.1
// @author       DeveloperMDCM
// @match        *://www.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-end
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/js/iziToast.min.js
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license MIT
// @namespace https://github.com/DeveloperMDCM/
// @keywords youtube, tools, download, mp3, mp4, hi-quality, return, dislikes, audio free, download mp3, download mp4, audio mp3, audio mp4, audio download, audio, free download, free audio, download audio, download free, hi quality, high quality, best quality, best audio quality, best free audio quality, best free quality, best audio free quality, best audio free, best free audio, best free
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.user.js
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/Youtube20Tools20All20in20one20local20download20mp320mp420HIGT20QUALITY20return20dislikes20and20more.meta.js
// ==/UserScript==
(function(){"use strict";let X=document.location.href;const r=e=>document.querySelector(e),o=e=>document.getElementById(e),x=e=>document.querySelectorAll(e),I=(e,i)=>document.createElement(e),m=(e,i)=>document.documentElement.style.setProperty(e,i),st=e=>document.body.appendChild(e),Ue="https://returnyoutubedislikeapi.com/Votes?videoId=",lt="https://translate.googleapis.com/translate_a/t";let Z="#252525",ee="#ffffff",te="#ff0000";const ve="https://greasyfork.org/es/scripts/460680-youtube-tools-all-in-one-local-download-mp3-mp4-higt-quality-return-dislikes-and-more",ct="https://p.oceansaver.in/ajax/download.php?copyright=0&allow_extended_duration=1&",dt="dfcb6d76f2f6a9894gjkege8a4ab232222",Te={af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",ceb:"Cebuano","zh-CN":"Chinese (Simplified)","zh-TW":"Chinese (Traditional)",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gu:"Gujarati",ht:"Haitian Creole",ha:"Hausa",haw:"Hawaiian",iw:"Hebrew",hi:"Hindi",hmn:"Hmong",hu:"Hungarian",is:"Icelandic",ig:"Igbo",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",jw:"Javanese",kn:"Kannada",kk:"Kazakh",km:"Khmer",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",lo:"Lao",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"Macedonian",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mn:"Mongolian",my:"Myanmar (Burmese)",ne:"Nepali",no:"Norwegian",ny:"Nyanja (Chichewa)",ps:"Pashto",fa:"Persian",pl:"Polish",pt:"Portuguese",pa:"Punjabi",ro:"Romanian",ru:"Russian",sm:"Samoan",gd:"Scots Gaelic",sr:"Serbian",st:"Sesotho",sn:"Shona",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili",sv:"Swedish",tl:"Tagalog (Filipino)",tg:"Tajik",ta:"Tamil",te:"Telugu",th:"Thai",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",cy:"Welsh",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"};let V=null,ze="dinamica",z=null,Q=null,ce=null,he=null,g=null,p=null,M=null,P=0,_e=null,A=[],Pe=!1;const pt=.05,Ae=240,B=Ae/90,ye="wave_visualizer_processed";function U(){const e=o("wave-visualizer-canvas");e&&(e.style.opacity="0",M&&(M.style.opacity="0"))}function de(){const e=o("wave-visualizer-canvas");z&&z.state==="suspended"&&z.resume(),e&&(e.style.opacity="1",M&&(M.style.opacity="1"))}function E(e="info",i="",t=""){const c={success:"Success",error:"Error",info:"Information",warning:"Warning"};iziToast[e]({title:t||c[e]||"Notification",message:i,position:"bottomLeft"})}async function De(e,i){const t=window.location.href;if(i.dataset.downloading==="true")return;const c=i.querySelector(".download-btn"),b=i.querySelector(".retry-btn"),h=i.querySelector(".progress-retry-btn"),C=i.querySelector(".progress-container"),k=i.querySelector(".progress-fill"),L=i.querySelector(".progress-text"),ne=i.querySelector(".download-text");i.dataset.downloading="true",i.dataset.urlOpened="false",c.style.display="none",b.style.display="none",h.style.display="block",C.style.display="flex",k.style.width="0%",L.textContent="0%";try{const f=await(await fetch(`${ct}format=${e}&url=${encodeURIComponent(t)}&api=${dt}`)).json();if(!f.success){b.style.display="block",C.style.display="none",h.style.display="none",i.dataset.downloading="false",i.dataset.urlOpened="false";return}const O=f.progress_url,J=setInterval(async()=>{try{const D=await(await fetch(O)).json(),K=Math.min(D.progress/10,100);if(k.style.width=`${K}%`,L.textContent=`${Math.round(K)}%`,D.progress>=1e3&&D.download_url){if(clearInterval(J),i.dataset.urlOpened==="true")return;i.dataset.urlOpened="true",i.classList.add("completed"),i.classList.remove("video","audio"),ne.textContent="Download Complete!",k.style.width="100%",L.textContent="100%",h.style.display="none",i.dataset.downloading="false",window.open(D.download_url)}}catch(Y){console.error("\u274C Error in progress:",Y),clearInterval(J),b.style.display="block",C.style.display="none",h.style.display="none",i.dataset.downloading="false",i.dataset.urlOpened="false"}},3e3)}catch(R){b.style.display="block",C.style.display="none",h.style.display="none",i.dataset.downloading="false",i.dataset.urlOpened="false",console.error("\u274C Error starting download:",R)}}const ut=1e3,q={USAGE:"YT_TOTAL_USAGE",VIDEO:"YT_VIDEO_TIME",SHORTS:"YT_SHORTS_TIME"};let pe=GM_getValue(q.USAGE,0),ue=GM_getValue(q.VIDEO,0),me=GM_getValue(q.SHORTS,0),qe=Date.now(),oe=null,$e=null;GM_setValue(q.USAGE,pe),GM_setValue(q.VIDEO,ue),GM_setValue(q.SHORTS,me);function He(e,i){const t=[{value:1,symbol:""},{value:1e3,symbol:" K"},{value:1e6,symbol:" M"}],c=/\.0+$|(\.[0-9]*[1-9])0+$/,b=t.slice().reverse().find(h=>e>=h.value);return b?(e/b.value).toFixed(i).replace(c,"$1")+b.symbol:"0"}function mt(){return new URLSearchParams(window.location.search).get("v")}async function Re(){if(X=document.location.href,r("#below > ytd-watch-metadata > div")!=null&&document.location.href.split("?v=")[0].includes("youtube.com/watch")){X=mt();const i=`${Ue}${X}`;try{const c=await(await fetch(i)).json(),{dislikes:b}=c,h=r("#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > dislike-button-view-model > toggle-button-view-model > button-view-model > button");h!==void 0&&(h.style="width: 90px",h.innerHTML=`
            <svg class="svg-dislike-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
            ${He(b,0)}`)}catch(t){console.log(t)}}}async function Oe(){X=document.location.href;const e=x("#dislike-button > yt-button-shape > label > div > span");if(e!=null&&document.location.href.split("/")[3]==="shorts"){X=document.location.href.split("/")[4];const i=`${Ue}${X}`;try{const c=await(await fetch(i)).json(),{dislikes:b}=c;for(let h=0;h<e.length;h++)e[h].textContent=`${He(b,0)}`}catch(t){console.log(t)}}}let Ie,Ne=!1;setInterval(()=>{const e=r(".svg-dislike-ico"),i=window.location.href;Ie!==void 0&&i!==Ie&&!e&&Ne&&setTimeout(async()=>{await Re(),await Oe()},2e3),Ie=i},1e3);const Ge=window.trustedTypes?.createPolicy("default",{createHTML:e=>e});GM_addStyle(`
       @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
      @import url("https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/css/iziToast.min.css");
      :root {
              --primary-custom: #ff0000 !important;
              --bg-dark-custom: #1a1a1a !important;
              --bg-card-custom: #252525 !important;
              --text-custom: #ffffff !important;
              --text-custom-secondary: #9e9e9e !important;
              --accent-custom: #ff4444 !important;
          }
        body .container-mdcm {
              font-family: "Inter", -apple-system, sans-serif;
              color: var(--yt-enhance-menu-text, --text-custom);
        }
        #toggle-button:hover {
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          opacity: 1 !important;
          }
        .container-mdcm {
            width: 420px;
            max-width: 420px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px 16px 0 0;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            flex-direction: column;
            max-height: 80vh;
            overflow-y: auto;
            overflow-x: hidden;
            height: auto;
        }

        #shareDropdown {
        display: none;
        position: absolute;
        top: 50px;
        right: 100px;
        background-color: var(--yt-enhance-menu-bg, #252525);
        border-radius: 6px;
        padding: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
        z-index: 11;
        }
        #shareDropdown a {
        color: var(--text-custom);
        text-decoration: none;
        line-height: 2;
        font-size: 14px;
        }
        #shareDropdown a:hover {
        color: var(--primary-custom);
        }
        .header-mdcm {
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            position: sticky;
            top: 0;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px 16px 0 0;
            z-index: 10;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-mdcm h1 {
            font-size: 16px;
            margin: 0;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        }


        .header-mdcm i {
         color: var(--primary-custom)
        }


        .icons-mdcm {
            display: flex;
            gap: 4px;
        }
        .icons-mdcm i {
          color: var(--yh-enhance-menu-accent, var(--text-custom));
        }


        .icon-btn-mdcm {
            background: rgba(255,255,255,0.1);
            border: none;
            color: var(--text-custom);
            width: 28px;
            height: 28px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .icon-btn-mdcm:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }

        .icon-btn-mdcm i {
         color: var(--text-custom);
         outline: none;
         text-decoration: none;
        }

        .tabs-mdcm {
            padding: 10px 12px;
            margin: 10px 0;
            position: sticky;
            top: 50px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            z-index: 10;
            display: flex;
            gap: 8px;
            -ms-overflow-style: none;
            padding-bottom: 8px;
        }



        .tabs-mdcm::-webkit-scrollbar {
            height: 0px;
            background-color: transparent;
        }

        .tabs-mdcm:hover::-webkit-scrollbar {
            height: 6px;
        }

        .tabs-mdcm::-webkit-scrollbar-thumb {
            background-color: rgba(255, 0, 0, 0.5);
            border-radius: 3px;
        }

        .tabs-mdcm::-webkit-scrollbar-track {
            background-color: transparent;
        }

        .tab-mdcm {
            padding: 6px 10px;
            border: none;
            background: rgba(255,255,255,0.05);
            cursor: pointer;
            font-size: 12px;
            color: var(--text-custom-secondary);
            border-radius: 6px;
            transition: all 0.3s;
            flex: 1;
            display: flex;
            align-items: center;
            gap: 6px;
            flex-shrink: 0;
            justify-content: center;
            white-space: nowrap;
        }

        .tab-mdcm svg {
            width: 14px;
            height: 14px;
            fill: currentColor;
        }

        .tab-mdcm.active {
            background: var(--yt-enhance-menu-accent, --primary-custom) !important;
            color: var(--text-custom);
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(255,0,0,0.2);
        }

        .tab-mdcm:hover:not(.active) {
            background: rgba(255,255,255,0.1);
            transform: translateY(-1px);
        }

        .options-mdcm {
            flex: 1;
            overflow-y: auto;
            padding: 0 16px 0;
            scrollbar-width: thin;
            scrollbar-color: var(--primary-custom) var(--bg-dark-custom);
            max-height: 300px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 8px;
        }

        .options-settings-mdcm {
            flex: 1;
            overflow-y: auto;
            padding: 0 16px 0;
            scrollbar-width: thin;
            scrollbar-color: var(--primary-custom) var(--bg-dark-custom);
            max-height: 300px;
            display: grid;
            gap: 8px;
        }

         .card-items-end {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 175px;
        }

         .radio-mdcm {
            width: 14px;
            height: 14px;
            accent-color: var(--primary-custom);
        }

        .color-picker-mdcm {
            width: 50px;
            height: 24px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .color-picker-mdcm:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .options-mdcm::-webkit-scrollbar, .options-settings-mdcm::-webkit-scrollbar {
            width: 6px;
        }

        .options-mdcm::-webkit-scrollbar-track, .options-settings-mdcm::-webkit-scrollbar-track {
            background: var(--bg-dark-custom);
            border-radius: 3px;
        }

        .options-mdcm::-webkit-scrollbar-thumb, .options-settings-mdcm::-webkit-scrollbar-thumb {
            background: var(--primary-custom);
            border-radius: 3px;
        }

        .options-mdcm::-webkit-scrollbar-thumb:hover, .options-settings-mdcm::-webkit-scrollbar-thumb:hover {
            background: var(--accent-custom);
        }

        .options-mdcm::after, .options-settings-mdcm::after {
            content: '';
            display: block;
        }

        .option-mdcm {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            margin-bottom: 0;
            padding: 5px;
            background: rgba(255,255,255,0.05);
            border-radius: 6px;
            transition: all 0.3s;
            border: 1px solid rgba(255,255,255,0.05);
            color: var(--yt-)
            gap: 6px;
        }

        .option-mdcm:hover {
            background: rgba(255,255,255,0.08);
            border-color: rgba(255,255,255,0.1);
        }
        .option-settings-mdcm {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0;
          padding: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          transition: all 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.05);
          gap: 6px;
        }

        .option-settings-mdcm:hover {
            background: rgba(255,255,255,0.08);
            border-color: rgba(255,255,255,0.1);
        }
            .tab-content {
            display: none;
        }
            .tab-content.active {
                display: block;
                margin-bottom: 10px;
            }

        .checkbox-mdcm {
            width: 14px;
            height: 14px;
            accent-color: var(--yt-enhance-menu-accent, --primary-custom) !important;
        }

        label {
            font-size: 12px;
            color: var(--text-custom);
        }

        .slider-container-mdcm {
            background: rgba(255,255,255,0.05);
            padding: 10px;
            border-radius: 6px;
        }

        .slider-mdcm {
            width: 100%;
            height: 3px;
            accent-color: var(--yt-enhance-menu-accent, --primary-custom) !important;
            margin: 10px 0;
        }

        .reset-btn-mdcm {
            padding: 5px 10px;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.1);
            color: var(--text-custom);
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            transition: all 0.3s;
        }

        .reset-btn-mdcm:hover {
            background: rgba(255,255,255,0.2);
        }

        .quality-selector-mdcm select {
            position: relative;
            padding: 3px;
            outline: none;
            border-radius: 4px;
            border: 1px solid rgba(255,255,255,0.2);
            background: var(--yt-enhance-menu-accent, --primary-custom) !important;
            color: var(--text-custom);
            width: fit-content;
            appearance: none;
            cursor: pointer;
            font-size: 11px;
        }


        .quality-selector-mdcm {
            background: rgba(255,255,255,0.05);
            padding: 10px;
            border-radius: 6px;
        }

        .select-wrapper-mdcm {
          position: relative;
          display: inline-block;
        }

        .select-wrapper-mdcm select {
          -webkit-appearance: auto;
          -moz-appearance: auto;
        }

        .actions-mdcm {
            position: sticky;
            top: 0;
            padding: 12px 16px;
            backdrop-filter: blur(15px);
            background-color: var(--yt-enhance-menu-bg, #252525);
            display: flex;
            gap: 6px;
            width: 390px;
            border-radius: 0 0 16px 16px;
            justify-content: space-between;
            align-items: center;
        }

        .action-buttons-mdcm {
            display: flex;
            gap: 6px;
        }

        .action-btn-mdcm {
            flex: 1;
            padding: 8px;
            border: none;
            border-radius: 6px;
            background: var(--primary-custom);
            color: var(--text-custom);
            cursor: pointer;
            font-size: 12px;
            font-weight: 500;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            box-shadow: 0 4px 12px rgba(255,0,0,0.2);
        }

        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(255,0,0,0.3);
        }

        textarea.textarea-mdcm {
            width: 100%;
            height: 50px;
            margin-top: 10px;
            margin-bottom: 12px;
            padding: 8px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            color: var(--text-custom);
            font-size: 11px;
            resize: none;
            transition: all 0.3s;
        }

        textarea.textarea-mdcm:focus {
            outline: none;
            border-color: var(--primary-custom);
            background: rgba(255,255,255,0.08);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .container-mdcm {
            animation: fadeIn 0.3s ease-out;
        }

        .developer-mdcm {
            font-size: 10px;
            color: var(--text-custom-secondary);
        }

        .developer-mdcm a {
            color: var(--primary-custom);
            text-decoration: none;
        }

        /* Styles for the import/export area */
        #importExportArea {
            display: none;
            padding: 16px;
            margin: 0px;
            background-color: var(--yt-enhance-menu-bg, #252525);
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        #importExportArea.active {
            display: block;
            margin-top: 10px;
        }

        /* Style the textarea */
        #importExportArea textarea {
            width: 370px;
            height: 20px;
            margin-bottom: 10px;
            padding: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            background-color: rgba(255, 255, 255, 0.05);
            color: var(--text-custom);
            font-size: 12px;
            resize: vertical;
        }

        /* Style the buttons */
        #importExportArea .action-buttons-mdcm  {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }

        #importExportArea .action-btn-mdcm {
            flex: 1;
            padding: 10px 16px;
            border: none;
            border-radius: 6px;
            background-color: var(--primary-custom);
            color: var(--text-custom);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        #importExportArea .action-btn-mdcm:hover {
            background-color: var(--accent-custom);
        }

      #yt-stats {
      position: fixed;
      top: 60px;
      right: 20px;
      background: #1a1a1a;
      color: white;
      padding: 15px;
      border-radius: 10px;
      width: 320px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      font-family: Arial, sans-serif;
      display: none;
      }
  #yt-stats-toggle {
      font-size: 12px;
      color: #fff;
      padding: 12px 20px;
      border-radius: 5px;
      cursor: pointer;
  }
  .stat-row {
      margin: 15px 0;
  }
  .progress {
      height: 6px;
      overflow: hidden;
      background: #333;
      border-radius: 3px;
      margin: 8px 0;
  }
  .progress-bar {
      height: 100%;
      transition: width 0.3s;
  }
  .total-bar { background: #44aaff !important; }
  .video-bar { background: #00ff88 !important; }
  .shorts-bar { background: #ff4444 !important; }
  #cinematics {
    position: absolute !important;
    width: 90vw !important;
    height: 100vh ;
  }
    #cinematics div {
        position: fixed;
      inset: 0px;
      pointer-events: none;
      transform: scale(1.5, 2);
  }
      #cinematics > div > div > canvas:nth-child(1), #cinematics > div > div > canvas:nth-child(2) {
   position: absolute !important;
    width: 90vw !important;
    height: 100vh ;
      }

    // .html5-video-player.unstarted-mode {
    //  background-image: url('https://avatars.githubusercontent.com/u/54366580?v=4');
    // background-repeat: no-repeat;
    // background-position: 50% 50%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // }

        #yt-enhancement-panel {
            position: fixed;
            top: 60px;
            right: 20px;
            z-index: 9999;
        }

        .color-picker {
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            background: none;
        }
        .slider {
            width: 100%;
        }
         #toggle-panel {
            z-index: 10000;
            color: white;
            padding: 5px;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            transition: all 0.5s ease;
            width: 43px;
            border-radius: 100px;
        }

        #icon-menu-settings {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 7px;
        font-size: 20px;
        color: var(--yt-spec-icon-inactive);
        cursor: pointer;
        user-select: none;
        filter: drop-shadow(2px 4px 6px black);
        }

        .theme-option {
            margin-bottom: 15px;
        }
        .theme-option label {
            display: flex;
            align-items: center;
        }
       .theme-option {
    position: relative;
    width: auto;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}

.theme-preview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    border: 1px solid #000;
    z-index: 1;
}

.theme-option input[type="radio"] {
    position: relative;
    z-index: 2;
    margin-right: 10px;
    cursor: pointer;
}

.theme-name {
    position: relative;
    z-index: 2;
    font-size: 15px;
    color: #fff;
}

.theme-option label {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 2;
}

  .buttons-tranlate, .select-traductor {
        background: #000;
        font-size: 10px;
        border: none;
        color: #fbf4f4 !important;
        padding: 3px 0;
        margin-left: 10px;
        width: 70px;
        border-radius: 10px;
        }
        .buttons-tranlate:hover {
        cursor: pointer;
        background-color: #6b6b6b;
        }
         button.botones_div {
         margin: 0;
         padding: 0;
         }
         button.botones_div:hover {
         cursor: pointer;
         color: #6b6b6b !important;
         }

        .tab-button:hover {
          background-color: #ec3203 !important;
          color: #ffffff !important;
          cursor: pointer;
        }

        .traductor-container {
            display: inline-block;
            align-items: center;
            gap: 8px;
            margin-top: 4px;
          }

        #eyes {
      opacity: 0;
      position: absolute;
      height: 24px;
      left: 0;
      width: 24px;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 4px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ##d5d5d5;

    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #000;

    }

    .color-boxes {
      display: flex;
      gap: 8px;
    }
    .color-box {
      width: 20px;
      height: 20px;
      border: 1px solid rgb(221 221 221 / 60%);
      border-radius: 4px;
      cursor: pointer;
    }
    .color-box.selected {
      border: 2px solid var(--primary-custom);
      filter: drop-shadow(0px 1px 6px red);
    }

    .containerButtons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .containerButtons > button:hover {
      cursor: pointer;
    }

        /* Download Container Styles */
        .download-container {
          width: 50%;
          padding: 12px;
          border-radius: 8px;
          margin-top: 8px;
          transition: all 0.3s ease;
        }

        .download-container.video {
          background: linear-gradient(135deg, #ff4444, #cc0000);
          color: white;
        }

        .download-container.audio {
          background: linear-gradient(135deg, #00cc44, #009933);
          color: white;
        }

        .download-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .download-text {
          font-weight: 600;
          font-size: 14px;
        }

        .download-quality {
          font-size: 12px;
          opacity: 0.9;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 3px;
          width: 0%;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 12px;
          font-weight: 500;
          min-width: 30px;
        }

        .download-footer {
          font-size: 10px;
          opacity: 0.7;
          text-align: center;
        }
        .download-footer a {
          text-decoration: none;
          color: #fff;
        }

        .download-container.completed {
          color: #fff;
          background: linear-gradient(135deg, #00cc44, #009933) !important;
        }

        .download-container.completed .download-text {
          font-weight: 700;
        }

        .progress-retry-btn {
          position: absolute;
          top: 95px;
          right: 50%;
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .progress-retry-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .download-container {
          position: relative;
        }

        .download-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .download-btn {
          flex: 1;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: white;
        }

        .download-btn.video-btn {
          background: linear-gradient(135deg, #ff6666, #ff4444);
        }

        .download-btn.audio-btn {
          background: linear-gradient(135deg, #00dd55, #00cc44);
        }

        .download-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .download-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .retry-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #ffaa00, #ff8800);
          color: white;
        }

        .retry-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

      body {
      padding: 0;
      margin: 0;
      overflow-y: scroll;
      overflow-x: hidden;
      }
      .style-scope.ytd-comments {
      overflow-y: auto;
      overflow-x: hidden;
      height: auto;
      }
      ytd-comment-view-model[is-reply] #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model, ytd-comment-view-model[is-creator-reply] #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
        img.yt-img-shadow {
        border-radius: 50% !important;
        }
        #author-thumbnail.ytd-comment-view-model yt-img-shadow.ytd-comment-view-model {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: visible;
        }
      ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer {
        --ytd-item-section-item-margin: 8px;
        overflow-y: auto;
        overflow-x: hidden;
        height: auto;
      }
      .right-section.ytcp-header {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 45px;
      justify-content: end;
    }
      #meta.ytd-playlist-panel-video-renderer {
    min-width: 0;
    padding: 0 8px;
    display: flexbox;
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    flex-basis: 0.000000001px;
}

    .containerall {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-bottom: 30px;
      max-width: 800px;
      margin: auto;
    }
    }
    .container .botoncalidades {
      margin: 3px 2px;
      width: 24.6%;
    }

    .botoncalidades:first-child {
      background-color: #0af;
    }

    .botoncalidades:last-child {
      background-color: red;
      width: 100px;
    }

    .selectcalidades,
    .botoncalidades,
    .selectcalidadesaudio {
      width: 50%;
      height: 27.8px;
      background-color: #fff;
      color: #000;
      font-size: 25px;
      text-align: center;
      border: 1px solid black;
      border-radius: 10px;
      border: none;
      font-size: 20px;
      margin: 2px 2px;
    }

    .botoncalidades {
      width: 70px;
      height: 30px;
      background-color: rgb(4, 156, 22);
      border: 0px solid #000;
      color: #fff;
      font-size: 20px;
      border-radius: 10px;
      margin: 2px 2px;
    }

    .botoncalidades:hover,
    .bntcontainer:hover {
      cursor: pointer;
    }

   .ocultarframe,
    .ocultarframeaudio {
      display: none;
    }
      .checked_updates {
      cursor: pointer;
      }

      #export-config, #import-config {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: var(--yt-enhance-menu-accent, --primary-custom) !important;;
        color: #ffffff;
        border: none;
        padding: 5px;
      }
        #export-config:hover, #import-config:hover {
          background-color: #ff0000;
          color: #ffffff;
          cursor: pointer;
        }

        .yt-image-avatar-download {
          position: absolute;
          bottom: -10px;
          right: -14px;
          border: none;
          z-index: 1000;
          background: transparent;
          filter: drop-shadow(1px 0 6px red);
          color: var(--ytcp-text-primary);
          cursor: pointer;
        }

        .custom-classic-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255,255,255,0.1);
          border-radius: 50%;
          border: none;
          width: 48px;
          height: 48px;
          color: var(--yt-spec-icon-inactive);
          font-size: 24px;
          margin: 0px 8px;
          cursor: pointer;
        }
        .custom-classic-btn:hover {
          background-color: rgba(255,255,255,0.2);
        }
        .background-image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin: 10px 0;
      }

      .background-image-preview {
        width: 160px;
        height: 90px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        border: 2px solid #444;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: box-shadow 0.2s;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        overflow: hidden;
      }

      .background-image-preview:hover .background-image-overlay {
        opacity: 1;
      }

      .background-image-overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: rgba(0,0,0,0.35);
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      .background-image-preview:hover .background-image-overlay,
      .background-image-preview:focus .background-image-overlay {
        opacity: 1;
      }

      .background-image-overlay i {
        font-size: 28px;
        margin-bottom: 4px;
      }

      .background-image-text {
        font-size: 13px;
        font-weight: 500;
        text-shadow: 0 1px 4px #000;
      }

      .remove-background-image {
        position: absolute;
        top: 6px;
        right: 6px;
        background: #e74c3c;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 26px;
        height: 26px;
        font-size: 18px;
        cursor: pointer;
        z-index: 2;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 0;
        line-height: 1;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        transition: background 0.2s;
      }
      .remove-background-image:hover {
        background: #c0392b;
      }
      .background-image-preview.has-image .remove-background-image {
        display: flex;
      }

      ytd-feed-filter-chip-bar-renderer[not-sticky] #chips-wrapper.ytd-feed-filter-chip-bar-renderer {
        padding: 10px;
      }

    `);const We=`
    <main>
    <div class="container">
    <form>
      <div class="containerButtons">
      
  <button title="Image video" class="botones_div" type="button" id="imagen">

  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-down" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 8h.01"></path>
    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
    <path d="M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559"></path>
    <path d="M19 16v6"></path>
    <path d="M22 19l-3 3l-3 -3"></path>
  </svg>
</button>
  
      
  <button title="Buffer video" type="button" class="buffer_video botones_div">
 <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-box-right-stretch"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17h2" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M11 12h6" /><path d="M13 7h4" /></svg>
</button>
  
      
  <div style="position:relative; ">
  <button title="Filter eyes" class="botones_div" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-half"
      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 9a3 3 0 0 0 0 6v-6z"></path>
      <path
        d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z">
      </path>
    </svg>
    <input id="eyes" list="presetColors" type="color" value="#ffffff">
  <datalist id="presetColors">
    <option value="#000000" />
    <option value="#fbff00" />
    <option value="#ff0000" />
    <option value="#00ff00" />
    <option value="#0000ff" />
  </datalist>
  <div id="ojosprotect"
  style="position: fixed; pointer-events: none; width: 100%; height: 100%; left: 0px; top: 0px; opacity: 0.2; z-index: 10; display: block;">
  </div>
</div>
</button>
  
      
  <button title="reset" class="botones_div" type="button" id="reset_button">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
    <path d="M12 4l0 8"></path>
  </svg>
</button>
  
      
  <button title="Repeat video" class="botones_div" type="button" id="repeatvideo">

  <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
  </svg>
</button>
  
      
  <button title="MP4" type="button" class="btn1 botones_div">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download"
    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
    <path d="M12 17v-6"></path>
    <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
  </svg>
</button>
<button title="MP3" type="button" class="btn2 botones_div">

  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-music" width="24"
    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
    <path d="M11 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M12 16l0 -5l2 1"></path>
  </svg>
</button>
<button title="Close" type="button" class="btn3 botones_div">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24"
  height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
  stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
  <path d="M10 10l4 4m0 -4l-4 4"></path>
</svg>
</button>
  
      

  <button title="External Download" type="button" class="external_link botones_div">

  <svg class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
      <path d="M11 13l9 -9"></path>
      <path d="M15 4h5v5"></path>
   </svg>
</button>

  
      

  <button title="view External no cookie" type="button" class="view_external_link botones_div">

  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z" /><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" /><path d="M12 8h4v4" /><path d="M16 8l-5 5" /></svg>
</button>

  
      
  <button title="Picture to picture" type="button" class="video_picture_to_picture botones_div">

  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" /></svg>
</button>

  
      
  <button title="Screenshot video" type="button" class="screenshot_video botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" /><path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" /><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg>
</button>

  
      
  <button title="Check new updates" type="button" class="checked_updates botones_div">
  <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
</button>
  
      </div>
      <div>
      </div>
    </form>

    </div>
    <div class="content_collapsible_colors" style="margin-top: 10px">

    <form class="formulariodescarga ocultarframe" action="">
    <div class="containerall">
    <select class="selectcalidades ocultarframe" required>
      <option selected disabled>Calidad del video / Quality video</option>
      <option value="144">144p Mp4</option>
      <option value="240">240p Mp4</option>
      <option value="360">360p Mp4</option>
      <option value="480">480p Mp4</option>
      <option value="720">720p HD Mp4 Default</option>
      <option value="1080">1080p FULL HD Mp4</option>
      <option value="4k">2160p 4K WEBM</option>
      <option value="8k">4320p 8K WEBM</option>
      </select>
      <div id="descargando" class="download-container ocultarframe">
        <button class="progress-retry-btn" title="Retry" style="display: none;">
        <i class="fa-solid fa-rotate-right"></i>
        </button>
        <div class="download-info">
          <span class="download-text">Download Video And Please Wait...</span>
          <span class="download-quality"></span>
        </div>
        <div class="download-actions">
          <button class="download-btn video-btn">Download</button>
          <button class="retry-btn" style="display: none;">Retry</button>
        </div>
        <div class="progress-container" style="display: none;">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <span class="progress-text">0%</span>
        </div>
        <div class="download-footer">
          <a href="https://github.com/DeveloperMDCM/" target="_blank"> <i class="fa-brands fa-github"></i> by: DeveloperMDCM</a>
        </div>
      </div>
    </div>
    </form>
    <form class="formulariodescargaaudio ocultarframe" action="">
    <div class="containerall">
    <select class="selectcalidadesaudio ocultarframeaudio" required>
      <option selected disabled>Calidad del Audio / Quality Audio</option>
      <option value="flac">Audio FLAC UHQ</option>
      <option value="wav">Audio WAV UHQ</option>
      <option value="webm">Audio WEBM UHQ</option>
      <option value="mp3">Audio MP3 Default</option>
      <option value="m4a">Audio M4A</option>
      <option value="aac">Audio AAC</option>
      <option value="opus">Audio OPUS</option>
      <option value="ogg">Audio OGG</option>
      </select>
      <div id="descargandomp3" class="download-container ocultarframeaudio">
        <button class="progress-retry-btn" title="Retry" style="display: none;">
        <i class="fa-solid fa-rotate-right"></i>
        </button>
        <div class="download-info">
          <span class="download-text">Download Audio And Please Wait...</span>
          <span class="download-quality"></span>
        </div>
        <div class="download-actions">
          <button class="download-btn audio-btn">Download</button>
          <button class="retry-btn" style="display: none;">Retry</button>
        </div>
        <div class="progress-container" style="display: none;">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <span class="progress-text">0%</span>
        </div>
         <div class="download-footer">
          <a href="https://github.com/DeveloperMDCM/" target="_blank"><i class="fa-brands fa-github"></i> by: DeveloperMDCM</a>
        </div>
      </div>
    </div>
    </form>
      </main>
  `,Ye=[{name:"Default / Reload",gradient:"",textColor:"",raised:"",btnTranslate:"",CurrentProgressVideo:"",videoDuration:"",colorIcons:"",textLogo:"",primaryColor:"",secondaryColor:""},{name:"Midnight Blue",gradient:"linear-gradient(135deg, #1e3a8a, #3b82f6)",textColor:"#ffffff",raised:"#f00",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Forest Green",gradient:"linear-gradient(135deg, #14532d, #22c55e)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Sunset Orange",gradient:"linear-gradient(135deg, #7c2d12, #f97316)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Royal Purple",gradient:"linear-gradient(135deg, #4c1d95, #8b5cf6)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Cherry Blossom",gradient:"linear-gradient(135deg, #a9005c, #fc008f)",textColor:"#ffffff",raised:"#fc008f",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Red Dark",gradient:"linear-gradient(135deg, #790909, #f70131)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Raind ",gradient:"linear-gradient(90deg, #3f5efb 0%, #fc466b) 100%",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Neon",gradient:"linear-gradient(273deg, #ee49fd 0%, #6175ff 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Azure",gradient:"linear-gradient(273deg, #0172af 0%, #74febd 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Butterfly",gradient:"linear-gradient(273deg, #ff4060 0%, #fff16a 100%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"},{name:"Colombia",gradient:"linear-gradient(174deg, #fbf63f  0%, #0000bb 45%, #ff0000 99%)",textColor:"#ffffff",raised:"#303131",btnTranslate:"#000",CurrentProgressVideo:"#0f0",videoDuration:"#fff",colorIcons:"#fff",textLogo:"#f00"}],W=I("div");W.id="yt-enhancement-panel";const gt=Ye.map((e,i)=>`
        <label >
          <div class="theme-option">
          <div class="theme-preview" style="background: ${e.gradient};"></div>
          <input type="radio" name="theme" value="${i}" ${i===0?"checked":""}>
              <span style="${e.name==="Default / Reload Page"?"color: red; ":""}" class="theme-name">${e.name}</span>
              </div>
        </label>
    `).join(""),bt=Object.entries(Te).map(([e,i])=>`<option value="${e}" ${e===Te?"selected":""}>${i}</option>`).join("");function ft(){const e=document.cookie.split("; ").find(h=>h.startsWith("PREF="));if(!e)return"light";const i=e.substring(5),c=new URLSearchParams(i).get("f6");return["400","4000000","40000400","40000000"].includes(c)?"dark":"light"}let Ve=ft();const Fe=`
   <div class="container-mdcm">
    <div class="header-mdcm">
      <h1> <i class="fa-brands fa-youtube"></i> YouTube Tools</h1>
      <div class="icons-mdcm">
        <a href="https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js"
          target="_blank">
          <button class="icon-btn-mdcm">
            <i class="fa-solid fa-arrows-rotate"></i>
          </button>
        </a>
        <a href="https://github.com/DeveloperMDCM" target="_blank">
          <button class="icon-btn-mdcm">
            <i class="fa-brands fa-github"></i>
          </button>
        </a>
        <button class="icon-btn-mdcm" id="shareBtn-mdcm">
          <i class="fa-solid fa-share-alt"></i>
        </button>
        <button class="icon-btn-mdcm" id="importExportBtn">
          <i class="fa-solid fa-file-import"></i>
        </button>
        <button id="menu-settings-icon" class="icon-btn-mdcm tab-mdcm" data-tab="menu-settings">
          <i class="fa-solid fa-gear"></i>
        </button>
        <button class="icon-btn-mdcm close_menu_settings">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <div class="tabs-mdcm">
      <button class="tab-mdcm active" data-tab="general">
        <i class="fa-solid fa-shield-halved"></i>
        General
      </button>
      <button class="tab-mdcm" data-tab="themes">
        <i class="fa-solid fa-palette"></i>
        Themes
      </button>
      <button class="tab-mdcm" data-tab="stats">
        <i class="fa-solid fa-square-poll-vertical"></i>
        Stats
      </button>
      <button class="tab-mdcm" data-tab="headers">
        <i class="fa-regular fa-newspaper"></i>
        Header
      </button>
    </div>


    <div id="general" class="tab-content active">

      <div class="options-mdcm">
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="hide-comments-toggle"> Hide Comments
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="hide-sidebar-toggle"> Hide Sidebar
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="autoplay-toggle"> Disable Autoplay
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="subtitles-toggle"> Disable Subtitles
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" checked id="dislikes-toggle"> Show Dislikes
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="themes-toggle"> Active Themes
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="translation-toggle"> Translate comments
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="avatars-toggle"> Download avatars
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="reverse-mode-toggle"> Reverse mode
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="cinematic-lighting-toggle"> Cinematic Mode
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" checked id="wave-visualizer-toggle"> Wave visualizer Beta
          </div>
        </label>
        <label>
          <div class="option-mdcm">
            <input type="checkbox" class="checkbox-mdcm" id="sync-cinematic-toggle"> Sync Ambient Mode YT
          </div>
        </label>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Effect wave visualizer:
              <select class="tab-button-active" id="select-wave-visualizer-select">
                <option value="linea">Line smooth</option>
                <option value="barras">Vertical bars</option>
                <option value="curva">Curved</option>
                <option value="picos">Smooth peaks</option>
                <option value="solida">Solid wave</option>
                <option value="dinamica">Dynamic wave</option>
                <option value="montana">Smooth mountain</option>
              </select>
            </label>
          </div>
        </div>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Default video player quality:
              <select class="tab-button-active" id="select-video-qualitys-select">
                <option value="user">User Default</option>
                <option value="">Auto</option>
                <option value="144">144</option>
                <option value="240">240</option>
                <option value="360">360</option>
                <option value="480">480</option>
                <option value="720">720</option>
                <option value="1080">1080</option>
                <option value="1440">1440</option>
                <option value="2160">2160</option>
              </select>
            </label>
          </div>
        </div>
        <div class="quality-selector-mdcm" style="grid-column: span 2;">
          <div class="select-wrapper-mdcm">
            <label>Language for translate comments:
              <select class="tab-button-active" id="select-languages-comments-select">
              ${bt}
              </select>
            </label>
          </div>
        </div>
        <div class="slider-container-mdcm" style="grid-column: span 2;">
          <label>Video Player Size: <span id="player-size-value">100</span>%</label>
          <input type="range" id="player-size-slider" class="slider-mdcm" min="50" max="150" value="100">
          <button class="reset-btn-mdcm" id="reset-player-size">Reset video size</button>
        </div>
      </div>
    </div>

    <div id="themes" class="tab-content">
     <div id="background-image-container" class="background-image-container">
     <h4>Background Image</h4>
  <input type="file" id="background_image" accept="image/png, image/jpeg" style="display:none;" />
  <div id="background-image-preview" class="background-image-preview">
    <span class="background-image-overlay">
      <i class="fa fa-camera"></i>
      <span class="background-image-text">Select image</span>
    </span>
    <button id="remove-background-image" class="remove-background-image" title="Quitar fondo">&times;</button>
  </div>
</div>
      <div class="themes-hidden">
        <div class="options-mdcm" style="margin-bottom: 10px;">
          <div>
            <h4>Choose a Theme</h4>
            <p>Disable Mode Cinematic on General</p>
            ${Ve==="dark"?"":'<p style="color: red; margin: 10px 0;font-size: 11px;">Activate dark mode to use this option</p>'}
          </div>
        </div>
        <div class="options-mdcm">
          <label>
            <div class="theme-option option-mdcm">
              <input type="radio" class="radio-mdcm" name="theme" value="custom" checked>
              <span class="theme-name">Custom</span>
            </div>
          </label>
          <label>
            <div class="theme-option option-mdcm theme-selected-normal">
              <input type="radio" class="radio-mdcm" name="theme" value="normal">
              <span class="theme-name">Selected Themes</span>
            </div>
          </label>
        </div>
        <div class="themes-options">
          <div class="options-mdcm">
            ${gt}
          </div>
        </div>
        <div class="theme-custom-options">
          <div class="options-mdcm">
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Progressbar Video:</label>
                <input type="color" id="progressbar-color-picker" class="color-picker-mdcm" value="#ff0000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Background Color:</label>
                <input type="color" id="bg-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Primary Color:</label>
                <input type="color" id="primary-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Secondary Color:</label>
                <input type="color" id="secondary-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Header Color:</label>
                <input type="color" id="header-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Icons Color:</label>
                <input type="color" id="icons-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Menu Color:</label>
                <input type="color" id="menu-color-picker" class="color-picker-mdcm" value="#000000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Line Color Preview:</label>
                <input type="color" id="line-color-picker" class="color-picker-mdcm" value="#ff0000">
              </div>
            </div>
            <div class="option-mdcm">
              <div class="card-items-end">
                <label>Time Color Preview:</label>
                <input type="color" id="time-color-picker" class="color-picker-mdcm" value="#ffffff">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="stats" class="tab-content">
      <div id="yt-stats-toggle">
        <div class="stat-row">
          <div>Foreground Time</div>
          <div class="progress">
            <div class="progress-bar total-bar" id="usage-bar"></div>
          </div>
          <div id="total-time">0h 0m 0s</div>
        </div>
        <div class="stat-row">
          <div>Video Time</div>
          <div class="progress">
            <div class="progress-bar video-bar" id="video-bar"></div>
          </div>
          <div id="video-time">0h 0m 0s</div>
        </div>
        <div class="stat-row">
          <div>Shorts Time</div>
          <div class="progress">
            <div class="progress-bar shorts-bar" id="shorts-bar"></div>
          </div>
          <div id="shorts-time">0h 0m 0s</div>
        </div>
      </div>
    </div>

    <div id="headers" class="tab-content">
      <div class="options-mdcm">
        <label>Available in next update</label>
      </div>
    </div>


    <div id="menu-settings" class="tab-content">
      <div class="options-mdcm">
        <h4 style="margin: 10px 0">Menu Appearance</h4>
      </div>
      <div class="options-settings-mdcm">
        <div class="option-settings-mdcm">
          <label>Backgrounds:</label>
          <div class="color-boxes" id="bg-color-options">
            <div class="color-box" data-type="bg" data-value="#252525" style="background-color: #252525;"></div>
            <div class="color-box" data-type="bg" data-value="#1e1e1e" style="background-color: #1e1e1e;"></div>
            <div class="color-box" data-type="bg" data-value="#3a3a3a" style="background-color: #3a3a3a;"></div>
            <div class="color-box" data-type="bg" data-value="#4a4a4a" style="background-color: #4a4a4a;"></div>
            <div class="color-box" data-type="bg" data-value="#000000" style="background-color: #000000;"></div>
            <div class="color-box" data-type="bg" data-value="#00000000" style="background-color: #00000000;"></div>
            <div class="color-box" data-type="bg" data-value="#2d2d2d" style="background-color: #2d2d2d;"></div>
            <div class="color-box" data-type="bg" data-value="#444" style="background-color: #444;"></div>
          </div>
        </div>

        <div class="option-settings-mdcm">
          <label>Accent Colors:</label>
          <div class="color-boxes" id="bg-accent-color-options">
            <div class="color-box" data-type="accent" data-value="#ff0000" style="background-color: #ff0000;"></div>
            <div class="color-box" data-type="accent" data-value="#000000" style="background-color: #000000;"></div>
            <div class="color-box" data-type="accent" data-value="#009c37 " style="background-color: #009c37 ;"></div>
            <div class="color-box" data-type="accent" data-value="#0c02a0 " style="background-color: #0c02a0 ;"></div>
          </div>
        </div>

        <div class="option-settings-mdcm">
          <label>Titles Colors:</label>
          <div class="color-boxes" id="text-color-options">
            <div class="color-box" data-type="color" data-value="#ffffff" style="background-color: #ffffff;"></div>
            <div class="color-box" data-type="color" data-value="#cccccc" style="background-color: #cccccc;"></div>
            <div class="color-box" data-type="color" data-value="#b3b3b3" style="background-color: #b3b3b3;"></div>
            <div class="color-box" data-type="color" data-value="#00ffff" style="background-color: #00ffff;"></div>
            <div class="color-box" data-type="color" data-value="#00ff00" style="background-color: #00ff00;"></div>
            <div class="color-box" data-type="color" data-value="#ffff00" style="background-color: #ffff00;"></div>
            <div class="color-box" data-type="color" data-value="#ffcc00" style="background-color: #ffcc00;"></div>
            <div class="color-box" data-type="color" data-value="#ff66cc" style="background-color: #ff66cc;"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="importExportArea">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3>Import / Export Settings</h3>
        <button class="icon-btn-mdcm" id="closeImportExportBtn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <textarea id="config-data" placeholder="Paste configuration here to import"></textarea>
      <div class="action-buttons-mdcm">
        <button id="export-config" class="action-btn-mdcm">Export</button>
        <button id="import-config" class="action-btn-mdcm">Import</button>
      </div>
    </div>

    <div id="shareDropdown">
      <a href="https://www.facebook.com/sharer/sharer.php?u=${ve}" target="_blank" data-network="facebook"
        class="share-link"><i class="fa-brands fa-facebook"></i> Facebook</a><br>
      <a href="https://twitter.com/intent/tweet?url=${ve}" target="_blank" data-network="twitter"
        class="share-link"><i class="fa-brands fa-twitter"></i> Twitter</a><br>
      <a href="https://api.whatsapp.com/send?text=${ve}" target="_blank" data-network="whatsapp"
        class="share-link"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a><br>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${ve}" target="_blank"
        data-network="linkedin" class="share-link"><i class="fa-brands fa-linkedin"></i> LinkedIn</a><br>
    </div>


  </div>
  <div class="actions-mdcm">
    <div class="developer-mdcm">
      Developed by <a href="https://github.com/DeveloperMDCM" target="_blank"> <i class="fa-brands fa-github"></i> DeveloperMDCM</a>
    </div>
    <span style="color: #fff" ;>v2.4.2.1</span>
  </div>
  `,vt=Ge?Ge.createHTML(`
      ${Fe}
    `):`
      ${Fe}
    `;W.innerHTML=vt,st(W);function Qe(){const e=r("ytd-topbar-menu-button-renderer");if(!e||o("icon-menu-settings"))return;const i=I("div");i.id="toggle-button";const t=I("i");t.id="icon-menu-settings",t.classList.add("fa-solid","fa-gear"),i.appendChild(t),e.parentElement.insertBefore(i,e);let c=!1;i.addEventListener("click",()=>{c=!c,W.style.display=W.style.display==="none"?"block":"none"})}Qe();let Je=!1;r(".close_menu_settings").addEventListener("click",()=>{Je=!Je,W.style.display=W.style.display==="none"?"block":"none"});const Ke=x(".tab-mdcm"),ht=x(".tab-content");Ke.forEach(e=>{e.addEventListener("click",()=>{const i=e.getAttribute("data-tab");Ke.forEach(t=>t.classList.remove("active")),ht.forEach(t=>t.classList.remove("active")),e.classList.add("active"),o(i).classList.add("active")})});function xe(){const e={theme:r('input[name="theme"]:checked').value,bgColorPicker:o("bg-color-picker").value,progressbarColorPicker:o("progressbar-color-picker").value,primaryColorPicker:o("primary-color-picker").value,secondaryColorPicker:o("secondary-color-picker").value,headerColorPicker:o("header-color-picker").value,iconsColorPicker:o("icons-color-picker").value,menuColorPicker:o("menu-color-picker").value,lineColorPicker:o("line-color-picker").value,timeColorPicker:o("time-color-picker").value,dislikes:o("dislikes-toggle").checked,themes:o("themes-toggle").checked,translation:o("translation-toggle").checked,avatars:o("avatars-toggle").checked,reverseMode:o("reverse-mode-toggle").checked,waveVisualizer:o("wave-visualizer-toggle").checked,waveVisualizerSelected:o("select-wave-visualizer-select").value,hideComments:o("hide-comments-toggle").checked,hideSidebar:o("hide-sidebar-toggle").checked,disableAutoplay:o("autoplay-toggle").checked,cinematicLighting:o("cinematic-lighting-toggle").checked,syncCinematic:o("sync-cinematic-toggle").checked,disableSubtitles:o("subtitles-toggle").checked,playerSize:o("player-size-slider").value,selectVideoQuality:o("select-video-qualitys-select").value,languagesComments:o("select-languages-comments-select").value,menu_developermdcm:{bg:Z,color:ee,accent:te}};GM_setValue("ytSettingsMDCM",JSON.stringify(e))}function yt(){const e=JSON.parse(GM_getValue("ytSettingsMDCM","{}"));e.theme&&(r(`input[name="theme"][value="${e.theme}"]`).checked=!0),e.menu_developermdcm=e.menu_developermdcm||{bg:"#252525",color:"#ffffff",accent:"#ff0000"},o("bg-color-picker").value=e.bgColorPicker||"#000000",o("progressbar-color-picker").value=e.progressbarColorPicker||"#ff0000",o("primary-color-picker").value=e.primaryColorPicker||"#ffffff",o("secondary-color-picker").value=e.secondaryColorPicker||"#ffffff",o("header-color-picker").value=e.headerColorPicker||"#000",o("icons-color-picker").value=e.iconsColorPicker||"#ffffff",o("menu-color-picker").value=e.menuColorPicker||"#000",o("line-color-picker").value=e.lineColorPicker||"#ff0000",o("time-color-picker").value=e.timeColorPicker||"#ffffff",o("dislikes-toggle").checked=e.dislikes||!1,o("themes-toggle").checked=e.themes||!1,o("translation-toggle").checked=e.translation||!1,o("avatars-toggle").checked=e.avatars||!1,o("reverse-mode-toggle").checked=e.reverseMode||!1,o("wave-visualizer-toggle").checked=e.waveVisualizer||!1,o("select-wave-visualizer-select").value=e.waveVisualizerSelected||"dinamica",o("hide-comments-toggle").checked=e.hideComments||!1,o("hide-sidebar-toggle").checked=e.hideSidebar||!1,o("autoplay-toggle").checked=e.disableAutoplay||!1,o("cinematic-lighting-toggle").checked=e.cinematicLighting||!1,o("sync-cinematic-toggle").checked=e.syncCinematic||!1,o("subtitles-toggle").checked=e.disableSubtitles||!1,o("player-size-slider").value=e.playerSize||100,o("select-video-qualitys-select").value=e.selectVideoQuality||"user",o("select-languages-comments-select").value=e.languagesComments||"en",Z=e.menu_developermdcm.bg,ee=e.menu_developermdcm.color,te=e.menu_developermdcm.accent,x("#bg-color-options .color-box").forEach(i=>{i.classList.toggle("selected",i.dataset.value===Z)}),x("#text-color-options .color-box").forEach(i=>{i.classList.toggle("selected",i.dataset.value===ee)}),x("#bg-accent-color-options .color-box").forEach(i=>{i.classList.toggle("selected",i.dataset.value===te)}),m("--yt-enhance-menu-bg",Z),m("--yt-enhance-menu-text",ee),m("--yt-enhance-menu-accent",te),je(),setTimeout(()=>{ae(),e.dislikes&&(Re(),Oe(),Ne=!0),window.location.href.includes("youtube.com/watch?v=")&&xt()},500)}async function xt(){return new Promise(e=>{const i=()=>{const t=r("video"),c=o("cinematics");if(!t||!c||isNaN(t.duration)||t.duration===0){setTimeout(i,500);return}if(!JSON.parse(GM_getValue("ytSettingsMDCM","{}")).syncCinematic){const k=o("cinematic-lighting-toggle");k&&c&&(c.style.display=k.checked?"block":"none"),e(!1);return}const h=t.currentTime,C=()=>{if(t.currentTime>=h+1){const k=Ze(),L=o("cinematic-lighting-toggle");L&&L.checked!==k&&(L.checked=k,xe()),e(k)}else setTimeout(C,300)};C()};i()})}x(".color-box").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.type,t=e.dataset.value;i==="bg"?(Z=t,m("--yt-enhance-menu-bg",t),x("#bg-color-options .color-box").forEach(c=>{c.classList.remove("selected")}),e.classList.add("selected")):i==="color"?(ee=t,m("--yt-enhance-menu-text",t),x("#text-color-options .color-box").forEach(c=>{c.classList.remove("selected")}),e.classList.add("selected")):i==="accent"&&(te=t,m("--yt-enhance-menu-accent",t),x("#bg-accent-color-options .color-box").forEach(c=>{c.classList.remove("selected")}),e.classList.add("selected")),xe()})});function je(){o("player-size-value").textContent=o("player-size-slider").value}o("reset-player-size").addEventListener("click",()=>{o("player-size-slider").value=100,je(),ae()});function Xe(){const e=o("shareBtn-mdcm"),i=o("importExportBtn"),t=o("closeImportExportBtn");e&&!e.dataset.initialized&&(e.dataset.initialized="true",e.addEventListener("click",function(c){c.stopPropagation();const b=o("shareDropdown");b&&(b.style.display=b.style.display==="block"?"none":"block")})),i&&!i.dataset.initialized&&(i.dataset.initialized="true",i.addEventListener("click",function(){const c=o("importExportArea");c&&c.classList.toggle("active")})),t&&!t.dataset.initialized&&(t.dataset.initialized="true",t.addEventListener("click",function(){const c=o("importExportArea");c&&c.classList.remove("active")}))}function kt(){return window.location.href.includes("youtube.com/watch?v=")}function Ze(){const e=document.getElementById("cinematics");if(!e)return!1;const i=e.innerHTML.trim()!=="",t=e.querySelector("canvas")!==null,c=e.children.length>0,b=e.querySelector('div[style*="position: fixed"]')!==null;return i||t||c||b}function ke(){const e=r(".ytp-button.ytp-settings-button");if(!e){console.log("Settings button not found");return}e.click();const i=new MutationObserver(t=>{const c=x(".ytp-menuitem");for(let b of c){const h=b.textContent?.toLowerCase(),C=b.querySelector(".ytp-menuitem-icon svg path");if(h&&(h.includes("cinematic")||h.includes("lighting")||h.includes("cinema"))){console.log("Found cinematic lighting option:",h),b.click(),setTimeout(()=>{r(".ytp-settings-menu")&&document.body.click()},100),i.disconnect();return}if(C&&(C.getAttribute("d")?.includes("M21 7v10H3V7")||C.getAttribute("d")?.includes("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"))){console.log("Found cinematic lighting option by SVG path"),b.click(),setTimeout(()=>{r(".ytp-settings-menu")&&document.body.click()},100),i.disconnect();return}}});i.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),setTimeout(()=>{i.disconnect(),r(".ytp-settings-menu")&&document.body.click()},5e3)}function ae(){const e=r(".formulariodescarga"),i=r(".formulariodescargaaudio");e!=null&&(e.classList.add("ocultarframe"),i.classList.add("ocultarframe"));const t={theme:r('input[name="theme"]:checked').value,bgColorPicker:o("bg-color-picker").value,progressbarColorPicker:o("progressbar-color-picker").value,primaryColorPicker:o("primary-color-picker").value,secondaryColorPicker:o("secondary-color-picker").value,headerColorPicker:o("header-color-picker").value,iconsColorPicker:o("icons-color-picker").value,menuColorPicker:o("menu-color-picker").value,lineColorPicker:o("line-color-picker").value,timeColorPicker:o("time-color-picker").value,dislikes:o("dislikes-toggle").checked,themes:o("themes-toggle").checked,translation:o("translation-toggle").checked,avatars:o("avatars-toggle").checked,reverseMode:o("reverse-mode-toggle").checked,waveVisualizer:o("wave-visualizer-toggle").checked,waveVisualizerSelected:o("select-wave-visualizer-select").value,hideComments:o("hide-comments-toggle").checked,hideSidebar:o("hide-sidebar-toggle").checked,disableAutoplay:o("autoplay-toggle").checked,cinematicLighting:o("cinematic-lighting-toggle").checked,syncCinematic:o("sync-cinematic-toggle").checked,disableSubtitles:o("subtitles-toggle").checked,playerSize:o("player-size-slider").value,selectVideoQuality:o("select-video-qualitys-select").value,languagesComments:o("select-languages-comments-select").value,menu_developermdcm:{bg:Z,color:ee,accent:te}};m("--yt-enhance-menu-bg",t.menu_developermdcm.bg),m("--yt-enhance-menu-text",t.menu_developermdcm.color),m("--yt-enhance-menu-accent",t.menu_developermdcm.accent),Be(),Xe();const c=o("comments");c&&(c.style.display=t.hideComments?"none":"block");const b=r(".themes-hidden");b&&(b.style.display=t.themes?"block":"none");const h=r("#secondary > #secondary-inner");if(h){h.classList.add("side-moi");const a=r(".side-moi");a.style.display=t.hideSidebar?"none":"block"}const C=r(".ytp-autonav-toggle-button");if(C){const a=C.getAttribute("aria-checked")==="true";(t.disableAutoplay&&a||!t.disableAutoplay&&!a)&&C.click()}const k=r(".ytp-subtitles-button");if(k){const a=k.getAttribute("aria-pressed")==="true";(t.disableSubtitles&&a||!t.disableSubtitles&&!a)&&k.click()}kt()&&setTimeout(()=>{const a=Ze();if(t.syncCinematic)(t.cinematicLighting&&!a||!t.cinematicLighting&&a)&&ke();else{const n=o("cinematics");n&&(n.style.display=t.cinematicLighting?"block":"none")}},1e3);const L=r("video");L&&(L.style.transform=`scale(${t.playerSize/100})`);const ne=r("div#movie_player");let R=localStorage.getItem("yt-player-quality");if(x("#select-video-qualitys-select, #select-languages-comments-select").forEach(a=>{a.addEventListener("change",()=>{ae()})}),ne!=null&&t.selectVideoQuality!=="user")if(R){let a=JSON.parse(R);a.data=JSON.stringify({quality:t.selectVideoQuality,previousQuality:240}),localStorage.setItem("yt-player-quality",JSON.stringify(a))}else{let a={data:JSON.stringify({quality:720,previousQuality:240}),expiration:Date.now()+31536e6,creation:Date.now()};localStorage.setItem("yt-player-quality",JSON.stringify(a))}const f=Ye[t.theme],O=r('input[name="theme"][value="custom"]').checked,J=r('input[name="theme"][value="normal"]').checked,Y=r(".theme-custom-options"),D=r(".theme-selected-normal");O!=null&&(D.style.display="flex",Y.style.display="flex",r(".themes-options").style.display="none"),J&&(r('input[name="theme"][value="custom"]').checked=!1);function K(){if(t.themes)if(Ve==="dark"&&!O){if(r(".themes-options").style.display="block",D.style.display="none",Y.style.display="none",t.theme==="0"){GM_addStyle(`
              .botones_div {
               background-color: transparent;
               border: none;
               color: #ccc !important;
               user-select: none;
             }
               `);return}m("--yt-spec-base-background",f.gradient),m("--yt-spec-text-primary",f.textColor),m("--yt-spec-text-secondary",f.textColor),m("--yt-spec-menu-background",f.gradient),m("--yt-spec-icon-inactive",f.textColor),m("--yt-spec-brand-icon-inactive",f.textColor),m("--yt-spec-brand-icon-active",f.gradient),m("--yt-spec-static-brand-red",f.gradient),m("--yt-spec-raised-background",f.raised),m("--yt-spec-static-brand-red",f.CurrentProgressVideo),m("--yt-spec-static-brand-white",f.textColor),m("--ytd-searchbox-background",f.gradient),m("--ytd-searchbox-text-color",f.textColor),m("--ytcp-text-primary",t.textColor),GM_addStyle(`

              .botones_div {
              background-color: transparent;
              border: none;
              color: #999999;
              user-select: none;
            }
              .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
              background:  ${f.gradient} !important;
              }
            #background.ytd-masthead { background: ${f.gradient}  !important; }
            .ytp-swatch-background-color {
            background: ${f.gradient} !important;
          }
          #shorts-container, #page-manager.ytd-app {
            background: ${f.gradient.replace(/(#[0-9a-fA-F]{6})/g,"$136")};
          }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${f.gradient}  !important;}
            .buttons-tranlate {
            background: ${f.btnTranslate} !important;
            }
            .badge-shape-wiz--thumbnail-default {
            color: ${f.videoDuration} !important;
            background: ${f.gradient} !important;
            }
            #logo-icon {
            color:  ${f.textLogo} !important;
          }
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${f.iconsColor} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${f.iconsColor} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${f.iconsColor} !important;
          }
          .ytp-svg-fill {
            fill:  ${f.iconsColor} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${f.iconsColor} !important;
          }


            `)}else Ve==="dark"&&O?(m("--yt-spec-base-background",t.bgColorPicker),m("--yt-spec-text-primary",t.primaryColorPicker),m("--yt-spec-text-secondary",t.secondaryColorPicker),m("--yt-spec-menu-background",t.menuColorPicker),m("--yt-spec-icon-inactive",t.iconsColorPicker),m("--yt-spec-brand-icon-inactive",t.primaryColorPicker),m("--yt-spec-brand-icon-active",t.primaryColorPicker),m("--yt-spec-raised-background",t.headerColorPicker),m("--yt-spec-static-brand-red",t.lineColorPicker),m("--yt-spec-static-brand-white",t.timeColorPicker),m("--ytd-searchbox-background",t.primaryColorPicker),m("--ytd-searchbox-text-color",t.secondaryColorPicker),m("--ytcp-text-primary",t.primaryColorPicker),GM_addStyle(`
            .html5-video-player {
                color: ${t.primaryColorPicker} !important;
              }
              .ytp-volume-slider-handle:before, .ytp-volume-slider-handle, .ytp-tooltip.ytp-preview:not(.ytp-text-detail) {
                background-color: ${t.iconsColorPicker} !important;
              }
                .ytp-autonav-toggle-button[aria-checked=true] {
                  background-color: ${t.iconsColorPicker} !important;
                }
                  .tp-yt-iron-icon {
                   fill: ${t.iconsColorPicker} !important;
                  }

             .botones_div {
            background-color: transparent;
            border: none;
            color: ${t.iconsColorPicker} !important;
            user-select: none;
          }
              #container.ytd-searchbox {
              color: red !important;
              }
            .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {
            background:  ${t.primaryColorPicker} !important;
            }
            .yt-spec-icon-shape {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              color: ${t.iconsColorPicker} !important;
          }
            .ytp-time-current, .ytp-time-separator, .ytp-time-duration {
              color: ${t.iconsColorPicker} !important;
            }
            #background.ytd-masthead { background: ${t.headerColorPicker}  !important; }
            .ytp-swatch-background-color {
            background: ${t.progressbarColorPicker} !important;
          }
        #shorts-container, #page-manager.ytd-app {
            background: ${t.bgColorPicker}36;
            }
            ytd-engagement-panel-title-header-renderer[shorts-panel] #header.ytd-engagement-panel-title-header-renderer {
            background: ${t.bgColorPicker}  !important;}

            .badge-shape-wiz--thumbnail-default {
            color: ${t.timeColorPicker} !important;
             background: ${t.secondaryColor} !important;
            }
             #logo-icon {
             color:  ${t.primaryColorPicker} !important;
          }
          .yt-spec-button-shape-next--overlay.yt-spec-button-shape-next--text {
            color:  ${t.iconsColorPicker} !important;
          }
          .ytd-topbar-menu-button-renderer #button.ytd-topbar-menu-button-renderer {
            color:  ${t.iconsColorPicker} !important;
          }
          .yt-spec-icon-badge-shape--style-overlay .yt-spec-icon-badge-shape__icon {
            color:  ${t.iconsColorPicker} !important;
          }
          .ytp-svg-fill {
            fill:  ${t.iconsColorPicker} !important;
          }
          #ytp-id-30,#ytp-id-17,#ytp-id-19,#ytp-id-20{
            fill:  ${t.iconsColorPicker} !important;
          }
            `)):GM_addStyle(`
            .botones_div {
             background-color: transparent;
             border: none;
             color: #000 !important;
             user-select: none;
           }
             `);else GM_addStyle(`
          .botones_div {
           background-color: transparent;
           border: none;
           color: #ccc !important;
           user-select: none;
         }
           `)}GM_addStyle(`
      #columns.style-scope.ytd-watch-flexy {
        flex-direction: ${t.reverseMode?"row-reverse":"row"} !important;
        padding-left: ${t.reverseMode?"20px":"0"} !important;
        }
        #secondary.style-scope.ytd-watch-flexy {display: ${t.hideSidebar?"none":"block"} !important;}


        #icon-menu-settings {
         color: ${t.iconsColorPicker} !important;
        }


      `),K();function ge(){if(!t.waveVisualizer){Ee(!0);return}const a=r("video"),n=r(".ytp-miniplayer-ui");(a&&document.location.href.includes("watch")||n)&&(a!==V||!Pe?(Ee(!0),Et(a)):M&&a.paused===!1&&de())}ge();let we=window.location.href,Ce=setInterval(function(){window.location.href!==we&&(we=window.location.href,Me())},1e3);function Me(){setTimeout(()=>{ae()},1e3),clearInterval(Ce)}function Le(){if(r("#button_copy_description"))return;const a=r("#bottom-row.style-scope.ytd-watch-metadata");if(!a){console.warn("No se encontr\xF3 el contenedor de descripci\xF3n. No se insertar\xE1 el bot\xF3n.");return}a.insertAdjacentHTML("beforebegin",`
        <div id="button_copy_description" style="display: flex; justify-content: end; align-items: center;margin-top: 10px;" >
          <button id="copy-description" title="Copy description" class="botones_div" type="button" style="cursor: pointer;">
            <i style="font-size: 20px;" class="fa-solid fa-copy"></i>
          </button>
        </div>
      `),o("copy-description").addEventListener("click",()=>{const d=[...x('script[type="application/ld+json"]')];for(let v of d)try{const w=JSON.parse(v.innerText);if(w["@type"]==="VideoObject"){const S=`\u{1F4C5} Date published: ${w.uploadDate||"No disponible"}
Author: ${w.author||"No disponible"}
\u{1F3AC} Name video: ${w.name||"No disponible"}
\u{1F5BC}\uFE0F Thumbnail: ${Array.isArray(w.thumbnailUrl)?w.thumbnailUrl.join(", "):w.thumbnailUrl||"No disponible"}
\u{1F4DD} Description: ${w.description||"No disponible"}


\u{1F3AD} Category: ${w.genre||"No disponible"}
`;navigator.clipboard.writeText(S)}}catch{E("error","Error parsing JSON-LD")}finally{E("success","Description copied")}})}Le();async function Se(){const a=x("#content-text");if(r(".buttons-tranlate"))return;const n=Te,d=o("select-languages-comments-select").value;for(let S=0;S<a.length;S++){const $=Object.entries(n).map(([G,_])=>`<option value="${G}" ${G===d?"selected":""}>${_}</option>`).join(""),fe=`
          <div class="traductor-container" data-index="${S}">
          <button class="buttons-tranlate" id="btn${S}"> Translate <i class="fa-solid fa-language"></i></button>
          <select class="select-traductor" id="select${S}">
           ${$}
          </select>
          </div>
        `;a[S].insertAdjacentHTML("afterend",fe)}const v=x(".buttons-tranlate"),w=x(".select-traductor");v.forEach((S,$)=>{S.addEventListener("click",()=>{const G=`?client=dict-chrome-ex&sl=auto&tl=${w[$].value}&q=`+a[$].textContent;fetch(lt+G).then(_=>_.json()).then(_=>{a[$].textContent=_[0][0],v[$].textContent="Translated"}).catch(_=>{console.error("Error en la traducci\xF3n:",_)})})})}function re(a){x(a).forEach(n=>n.remove())}function be(){x("#author-thumbnail-button #img.style-scope.yt-img-shadow").length>0&&t.avatars&&(re(".yt-image-avatar-download"),l());const n=r("#content-text"),d=r("ytd-item-section-renderer[static-comments-header] #contents");t.translation&&(n!==void 0||d!==void 0)&&(re(".buttons-tranlate"),re(".select-traductor"),Se())}window.onscroll=()=>{be()};const se=r(".anchored-panel.style-scope.ytd-shorts #contents.style-scope.ytd-item-section-renderer.style-scope.ytd-item-section-renderer");se&&new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&se.addEventListener("scroll",()=>{be()})})},{threshold:.1}).observe(se);function l(){x("#author-thumbnail-button #img.style-scope.yt-img-shadow").forEach(n=>{if(n.parentElement.querySelector(".yt-image-avatar-download"))return;const d=I("button");d.innerHTML='<i class="fa fa-download"></i>',d.classList.add("yt-image-avatar-download"),d.onclick=async function(){try{const v=n.src.split("=")[0],S=await(await fetch(v)).blob(),$=URL.createObjectURL(S),G=n.closest("ytd-comment-thread-renderer, ytd-comment-renderer")?.querySelector("#author-text");let _=G?G.textContent.trim():"avatar";_=_.replace(/[\/\\:*?"<>|]/g,"");const le=I("a");le.href=$,le.download=`${_}_avatar.jpg`||"avatar.jpg",document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL($)}catch(v){console.error("Error al descargar la imagen:",v)}},n.parentElement.style.position="relative",n.parentElement.appendChild(d)})}const s="custom-classic-btn",u=()=>{const n=`https://www.youtube.com/watch?v=${window.location.pathname.split("/").pop()}`;window.open(n,"_blank"),r("video.video-stream.html5-main-video").pause()},y=()=>{const a=I("button");return a.classList.add(s),a.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-screen-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" /><path d="M7 20l10 0" /><path d="M9 16l0 4" /><path d="M15 16l0 4" /><path d="M17 4h4v4" /><path d="M16 9l5 -5" /></svg>',a.title="Classic mode",a.onclick=u,a},T=()=>{document.location.pathname.startsWith("/shorts")?x("#actions").forEach(n=>{n.querySelector(`.${s}`)||n.prepend(y())}):x(`.${s}`).forEach(n=>n.remove())},j=()=>{new MutationObserver(()=>{T(),Qe()}).observe(document.body,{childList:!0,subtree:!0})};if(T(),j(),r("body")!=null){const a=r("ytd-item-section-renderer[static-comments-header] #contents");a!=null&&t.theme!=="custom"&&(d=>new IntersectionObserver(w=>{if(w[0].isIntersecting)a.style.background=`${f.gradient??""}`;else return}).observe(r(`${d}`)))("ytd-item-section-renderer[static-comments-header] #contents")}function N(a){if(isNaN(a))return"0h 0m 0s";a=Math.floor(a);const n=Math.floor(a/3600),d=Math.floor(a%3600/60),v=a%60;return`${n}h ${d}m ${v}s`}function nt(){o("total-time").textContent=N(pe),o("video-time").textContent=N(ue),o("shorts-time").textContent=N(me);const a=86400;o("usage-bar").style.width=`${pe/a*100}%`,o("video-bar").style.width=`${ue/a*100}%`,o("shorts-bar").style.width=`${me/a*100}%`}function Ct(a){if(/\/shorts\//.test(window.location.pathname))return"shorts";let n=a;for(;(n=n.parentElement)!==null;)if(n.classList.contains("shorts-container")||n.classList.contains("reel-video")||n.tagName==="YTD-REEL-VIDEO-RENDERER")return"shorts";return a.closest("ytd-watch-flexy")||a.closest("#primary-inner")||a.closest("ytd-thumbnail")||a.closest("ytd-rich-item-renderer")?"video":null}function Mt(){const a=x("video");for(const n of a)if(!n.paused&&!n.ended&&n.readyState>2)return n;return null}function Ee(a=!1){if(a&&he&&(cancelAnimationFrame(he),he=null),V&&(V.removeEventListener("play",de),V.removeEventListener("pause",U),V.removeEventListener("ended",U)),a){if(g&&g.parentNode&&(g.parentNode.removeChild(g),g=null,p=null),M&&M.parentNode&&(M.parentNode.removeChild(M),M=null),ce){try{ce.disconnect()}catch{}ce=null}if(z){try{z.close()}catch{}z=null}V&&V[ye]&&delete V[ye],V=null,Pe=!1}else g&&(g.style.opacity="0"),M&&(M.style.opacity="0")}function Lt(){if(g)return;const a=document.body;g=document.createElement("canvas"),g.id="wave-visualizer-canvas",g.width=window.innerWidth,g.height=Ae,g.style.position="fixed",g.style.left="0",g.style.top="0",g.style.width="100%",g.style.pointerEvents="none",g.style.backgroundColor="transparent",g.style.zIndex="10000",g.style.opacity="0",g.style.transition="opacity 0.3s",a.appendChild(g),p=g.getContext("2d")}function St(){if(M)return;M=I("div"),M.id="wave-visualizer-control";const a=o("select-wave-visualizer-select");ze=t.waveVisualizerSelected,a.addEventListener("change",n=>{ze=n.target.value,a.value=n.target.value,xe()})}function Et(a){if(!a||a[ye])return;if(a[ye]=!0,Ee(!1),V=a,Lt(),St(),z){try{z.close()}catch{}z=null}const n=window.AudioContext||window.webkitAudioContext;z=new n,Q=z.createAnalyser(),Q.fftSize=2048,Q.smoothingTimeConstant=.85,P=Q.fftSize,_e=new Uint8Array(P),A=new Array(P).fill(128);try{ce=z.createMediaElementSource(a),ce.connect(Q),Q.connect(z.destination)}catch(v){E("error","MediaElementSource or error:",v),Ee(!0);return}a.removeEventListener("play",de),a.removeEventListener("pause",U),a.removeEventListener("ended",U),a.addEventListener("play",de),a.addEventListener("pause",U),a.addEventListener("ended",U);const d=()=>{g&&(g.width=window.innerWidth,g.height=Ae)};window.removeEventListener("resize",d),window.addEventListener("resize",d),rt(),Pe=!0}function rt(){if(he=requestAnimationFrame(rt),parseFloat(g.style.opacity)<=0)return;Q.getByteTimeDomainData(_e);for(let n=0;n<P;n++)A[n]+=pt*(_e[n]-A[n]);p.clearRect(0,0,g.width,g.height);let a=g.width/P;switch(ze){case"linea":{p.lineWidth=2,p.strokeStyle="lime",p.beginPath();let n=0;for(let d=0;d<P;d++){let v=Math.max(0,A[d]-128)*B;d===0?p.moveTo(n,v):p.lineTo(n,v),n+=a}p.stroke();break}case"barras":{let n=0;for(let d=0;d<P;d+=5){let v=Math.max(0,A[d]-128)*B;p.fillStyle="cyan",p.fillRect(n,0,a*4,v),n+=a*5}break}case"curva":{p.lineWidth=2,p.strokeStyle="yellow",p.beginPath(),p.moveTo(0,Math.max(0,A[0]-128)*B);for(let n=0;n<P-1;n++){let d=n*a,v=(n+1)*a,w=Math.max(0,A[n]-128)*B,S=Math.max(0,A[n+1]-128)*B,$=d+a/3,fe=w,G=v-a/3,_=S;p.bezierCurveTo($,fe,G,_,v,S)}p.stroke();break}case"picos":{p.fillStyle="magenta";let n=0;for(let d=0;d<P;d+=5){let v=Math.max(0,A[d]-128)*B;p.beginPath(),p.arc(n,v,2,0,Math.PI*2),p.fill(),n+=a*5}break}case"solida":{p.beginPath();let n=0;p.moveTo(0,0);for(let d=0;d<P;d++){let v=Math.max(0,A[d]-128)*B;p.lineTo(n,v),n+=a}p.lineTo(g.width,0),p.closePath(),p.fillStyle="rgba(0,255,0,0.3)",p.fill();break}case"dinamica":{let n=p.createLinearGradient(0,0,g.width,0);n.addColorStop(0,"red"),n.addColorStop(.5,"purple"),n.addColorStop(1,"blue"),p.lineWidth=3,p.strokeStyle=n,p.beginPath();let d=0;for(let v=0;v<P;v++){let w=Math.max(0,A[v]-128)*B;v===0?p.moveTo(d,w):p.lineTo(d,w),d+=a}p.stroke();break}case"montana":{p.beginPath();let n=0;p.moveTo(0,0);for(let d=0;d<P;d++){let v=(A[d]-128)*B*.8;p.lineTo(n,v),n+=a}p.lineTo(g.width,0),p.closePath(),p.fillStyle="rgba(128,128,255,0.4)",p.fill();break}default:break}}const Tt=new MutationObserver(()=>{const a=Mt();a!==oe&&(oe=a,oe&&($e=Ct(oe)))});ge(),setInterval(()=>{const a=Date.now(),n=(a-qe)/1e3;document.visibilityState==="visible"&&(pe+=n),oe&&!oe.paused&&($e==="video"?ue+=n:$e==="shorts"&&(me+=n)),qe=a,GM_setValue(q.USAGE,pe),GM_setValue(q.VIDEO,ue),GM_setValue(q.SHORTS,me),nt()},ut),Tt.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),nt(),xe()}let et=!0;function Be(){const e=r(".style-scope .ytd-watch-metadata"),i=r("#contents");e!=null&&et&&(et=!1,(e.offsetWidth||e.offsetHeight||e.getClientRects().length||i!=null)&&e.insertAdjacentHTML("beforebegin",We));const t=r(".formulariodescarga"),c=r(".formulariodescargaaudio"),b=r(".btn1"),h=r(".btn2"),C=r(".btn3"),k=r(".selectcalidades"),L=r(".selectcalidadesaudio");[t,c].forEach(l=>l?.addEventListener("click",s=>s.preventDefault())),k?.addEventListener("change",l=>{const s=l.target.value;if(!s)return;const u=o("descargando"),y=u.querySelector(".download-text"),T=u.querySelector(".download-quality"),j=u.querySelector(".download-btn"),F=u.querySelector(".retry-btn"),N=u.querySelector(".progress-container");u.classList.add("video"),u.classList.remove("ocultarframe"),y.textContent=`Download ${s.toUpperCase()} And Please Wait...`,T.textContent=`${s}p`,j.style.display="block",F.style.display="none",N.style.display="none",u.dataset.quality=s,u.dataset.type="video"}),L?.addEventListener("change",l=>{const s=l.target.value;if(!s)return;const u=o("descargandomp3"),y=u.querySelector(".download-text"),T=u.querySelector(".download-quality"),j=u.querySelector(".download-btn"),F=u.querySelector(".retry-btn"),N=u.querySelector(".progress-container");u.classList.add("audio"),u.classList.remove("ocultarframeaudio"),y.textContent=`Download ${s.toUpperCase()} And Please Wait...`,T.textContent=s.toUpperCase(),j.style.display="block",F.style.display="none",N.style.display="none",u.dataset.quality=s,u.dataset.type="audio"}),C?.addEventListener("click",()=>{k?.classList.add("ocultarframe"),L?.classList.add("ocultarframeaudio");const l=o("descargando"),s=o("descargandomp3");l&&(l.classList.add("ocultarframe"),l.classList.remove("video","audio","completed"),l.removeAttribute("data-quality"),l.removeAttribute("data-type"),l.removeAttribute("data-downloading"),l.removeAttribute("data-url-opened")),s&&(s.classList.add("ocultarframeaudio"),s.classList.remove("video","audio","completed"),s.removeAttribute("data-quality"),s.removeAttribute("data-type"),s.removeAttribute("data-downloading"),s.removeAttribute("data-url-opened")),t?.classList.add("ocultarframe"),c?.classList.add("ocultarframe"),t?.reset(),c?.reset()}),document.addEventListener("click",l=>{if(l.target.classList.contains("download-btn")){const s=l.target.closest(".download-container"),u=s.dataset.quality,y=s.dataset.type;u&&y&&De(u,s)}if(l.target.classList.contains("retry-btn")){const s=l.target.closest(".download-container"),u=s.dataset.quality,y=s.dataset.type;u&&y&&De(u,s)}if(l.target.classList.contains("progress-retry-btn")){const s=l.target.closest(".download-container"),u=s.dataset.quality,y=s.dataset.type;u&&y&&(s.dataset.downloading="false",s.dataset.urlOpened="false",De(u,s))}}),b?.addEventListener("click",()=>{k?.classList.remove("ocultarframe"),L?.classList.add("ocultarframeaudio");const l=o("descargando"),s=o("descargandomp3");l&&(l.classList.add("ocultarframe"),l.classList.remove("video","audio","completed"),l.removeAttribute("data-quality"),l.removeAttribute("data-type"),l.removeAttribute("data-downloading"),l.removeAttribute("data-url-opened")),s&&(s.classList.add("ocultarframeaudio"),s.classList.remove("video","audio","completed"),s.removeAttribute("data-quality"),s.removeAttribute("data-type"),s.removeAttribute("data-downloading"),s.removeAttribute("data-url-opened")),t?.classList.remove("ocultarframe"),t.style.display="",c?.classList.add("ocultarframe"),t?.reset(),c?.reset()}),h?.addEventListener("click",()=>{L?.classList.remove("ocultarframeaudio"),k?.classList.add("ocultarframe");const l=o("descargando"),s=o("descargandomp3");l&&(l.classList.add("ocultarframe"),l.classList.remove("video","audio","completed"),l.removeAttribute("data-quality"),l.removeAttribute("data-type"),l.removeAttribute("data-downloading"),l.removeAttribute("data-url-opened")),s&&(s.classList.add("ocultarframeaudio"),s.classList.remove("video","audio","completed"),s.removeAttribute("data-quality"),s.removeAttribute("data-type"),s.removeAttribute("data-downloading"),s.removeAttribute("data-url-opened")),c?.classList.remove("ocultarframe"),c.style.display="",t?.classList.add("ocultarframe"),c?.reset(),t?.reset()});const ne=r("#imagen"),R=r("#eyes");function f(){const l=r(".buffer_video");l&&(l.dataset.listenerAdded||(l.addEventListener("click",()=>{const s=r("video.video-stream.html5-main-video");if(!s){console.log("No se encontr\xF3 el video en la p\xE1gina.");return}const u=new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0});s.dispatchEvent(u),setTimeout(()=>{const y=r("body > div.ytp-popup.ytp-contextmenu > div > div > div:nth-child(7)");y?y.click():console.log("Opci\xF3n no encontrada, intenta aumentar el tiempo de espera.")},1e3)}),l.dataset.listenerAdded="true"))}setInterval(f,2e3);let O=0;const J=r("#repeatvideo"),Y=r(".icon-tabler-repeat"),D=r("#movie_player > div.html5-video-container > video");J!=null&&(J.onclick=()=>{(r("#cinematics > div")!=null||D!=null)&&(O+=1,setInterval(()=>{switch(O){case 1:document.querySelector("#movie_player > div.html5-video-container > video").setAttribute("loop","true"),Y.innerHTML=`  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"></path>
                      <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"></path>
                      <path d="M3 3l18 18"></path>
                   </svg> `;break;case 2:O=0,document.querySelector("#movie_player > div.html5-video-container > video").removeAttribute("loop"),Y.innerHTML=` <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24"
                      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                      <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                    </svg>`;break}},1e3))});const K=r("#cinematics > div");K!=null&&(K.style="position: fixed; inset: 0px; pointer-events: none; transform: scale(1.5, 2)");const ge=r("#reset_button");ge?.addEventListener("click",function(){localStorage.getItem("colores")!=null&&(localStorage.removeItem("colores"),r("#ojosprotect").style.backgroundColor="transparent",setTimeout(()=>{location.reload()},400))}),ne!=null&&(ne.onclick=()=>{if(r("#cinematics > div")!=null||D!=null){let s=new URLSearchParams(window.location.search).get("v");const u=`https://i.ytimg.com/vi/${s}/maxresdefault.jpg`;fetch(u).then(y=>{if(!y.ok)throw new Error(`HTTP error! Status: ${y.status}`);return y.blob()}).then(y=>{if(y.size/1024>=20){window.open(`https://i.ytimg.com/vi/${s}/maxresdefault.jpg`,"popUpWindow","height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes");const j=URL.createObjectURL(y),F=I("a");F.href=j;const N=r("h1.style-scope.ytd-watch-metadata").innerText;F.download=`${N}_maxresdefault.jpg`,F.click(),URL.revokeObjectURL(j)}else console.log("La imagen no excede los 20 KB. No se descargar\xE1.")}).catch(y=>{alert("No found image"),console.error("Error al obtener la imagen:",y)})}});const we=o("background_image"),Ce=r("ytd-app"),Me=localStorage.getItem("backgroundImage");Me&&(Ce.style=`
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        background-image: url(${Me}) !important`),we.addEventListener("change",l=>{const s=l.target.files[0];if(s){const u=new FileReader;u.onload=function(y){const T=y.target.result;localStorage.setItem("backgroundImage",T),Ce.style.backgroundImage=`url(${T})`},u.readAsDataURL(s)}});const Le=r(".external_link");Le!=null&&(Le.onclick=()=>{const l=new URLSearchParams(window.location.search);let s;s=l.get("v"),window.open(`https://www.y2mate.com/es/convert-youtube/${s}`,"popUpWindow","height=800,width=1000,left=50%,top=100,resizable=no,scrollbars=yes,toolbar=no,menubar=yes,location=no,directories=yes, status=no")});const Se=r(".view_external_link");Se!=null&&(Se.onclick=()=>{r("video").click();const l=new URLSearchParams(window.location.search);let s;s=l.get("v"),window.open(`https://www.youtube.com/embed/${s}?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&autoplay=1`)});const re=r(".video_picture_to_picture");re!=null&&(re.onclick=()=>{const l=r("video");"pictureInPictureEnabled"in document?document.pictureInPictureElement||l.requestPictureInPicture().then(()=>{}).catch(s=>{console.error("Error al activar el modo Picture-in-Picture:",s)}):alert("Picture-in-Picture not supported")},R?.addEventListener("input",function(){(r("#cinematics > div")!=null||D!=null)&&(r("#ojosprotect").style.backgroundColor=R.value)}),clearInterval(Be));const be=r(".checked_updates");be!=null&&(be.onclick=()=>{window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js")});const se=r(".screenshot_video");if(se!=null)se.onclick=()=>{const l=r("video"),s=I("canvas");s.width=l.videoWidth,s.height=l.videoHeight,s.getContext("2d").drawImage(l,0,0,s.width,s.height);const y=s.toDataURL("image/png"),T=I("a");T.href=y;const j=r("h1.style-scope.ytd-watch-metadata").innerText;T.download=`${l.currentTime.toFixed(0)}s_${j}.png`,T.click()};else{const l=r(".containerButtons");l!=null&&(l.innerHTML="")}clearInterval(Be)}console.log("Script en ejecuci\xF3n by: DeveloperMDCM"),console.log(`%cYoutube Tools Extension NEW UI
%cRun %c(v2.4.2.1)
By: DeveloperMDCM.`,"color: #F00; font-size: 24px; font-family: sans-serif;","font-size: 14px; font-family: monospace;","color: #00aaff; font-size: 16px; font-family: sans-serif;"),localStorage.getItem("notification-developerMDCM")||(E("info","Youtube Tools by: DeveloperMDCM :)"),localStorage.setItem("notification-developerMDCM",!0)),x("input").forEach(e=>{e.addEventListener("change",ae),e.type==="range"&&e.addEventListener("change",()=>{je(),ae()})}),o("export-config").addEventListener("click",()=>{const e=GM_getValue("ytSettingsMDCM","{}");o("config-data").value=e;const i=e;try{JSON.parse(i),GM_setValue("ytSettingsMDCM",i),setTimeout(()=>{E("success","Configuration export successfully!")},1e3)}catch{E("error","Invalid configuration data. Please check and try again.")}}),o("import-config").addEventListener("click",()=>{const e=o("config-data").value;try{JSON.parse(e),GM_setValue("ytSettingsMDCM",e),setTimeout(()=>{E("success","Configuration imported successfully!"),window.location.reload()},1e3),window.location.reload()}catch{E("error","Invalid configuration data. Please check and try again.")}}),W.style.display="none";function wt(e,i){const t=setInterval(()=>{r(e)&&(clearInterval(t),i())},100)}o("wave-visualizer-toggle").addEventListener("change",()=>{r("#wave-visualizer-toggle").checked?E("success","Wave visualizer enabled"):(U(),E("success","Wave visualizer disabled realod page"),setTimeout(()=>{window.location.reload()},1e3))});const tt=o("cinematic-lighting-toggle");tt&&tt.addEventListener("change",()=>{const e=r("#cinematic-lighting-toggle"),i=r("#sync-cinematic-toggle"),t=o("cinematics");e.checked?E("success","Cinematic mode enabled"):E("success","Cinematic mode disabled"),i.checked?setTimeout(()=>{ke()},300):t&&(t.style.display=e.checked?"block":"none")});const ot=o("sync-cinematic-toggle");ot&&ot.addEventListener("change",()=>{const e=r("#sync-cinematic-toggle"),i=r("#cinematic-lighting-toggle"),t=o("cinematics");e.checked?(E("success","Sync with YouTube enabled"),i.checked&&setTimeout(()=>{ke()},500)):(E("success","Sync with YouTube disabled"),t&&(t.style.display=i.checked?"block":"none"))}),wt("ytd-topbar-menu-button-renderer",()=>{yt(),Xe()}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement!==null?U():de()}),document.addEventListener("yt-navigate-finish",()=>{document.location.href.includes("watch")||U()}),GM_registerMenuCommand("Update Script by: DeveloperMDCM",function(){window.open("https://update.greasyfork.org/scripts/460680/Youtube%20Tools%20All%20in%20one%20local%20download%20mp3%20mp4%20HIGT%20QUALITY%20return%20dislikes%20and%20more.user.js","_blank")});const at=o("background_image"),H=o("background-image-preview"),ie=o("remove-background-image"),it=localStorage.getItem("backgroundImage");it?(H.style.backgroundImage=`url(${it})`,H.classList.add("has-image"),ie.style.display="flex"):(H.style.backgroundImage="",H.classList.remove("has-image"),ie.style.display="none"),H.addEventListener("click",e=>{e.target!==ie&&at.click()}),at.addEventListener("change",e=>{const i=e.target.files[0];if(!i)return;const t=new FileReader;t.onload=function(c){const b=c.target.result;H.style.backgroundImage=`url(${b})`,H.classList.add("has-image"),localStorage.setItem("backgroundImage",b),ie.style.display="flex"},t.readAsDataURL(i)}),ie.addEventListener("click",e=>{e.stopPropagation(),H.style.backgroundImage="",H.classList.remove("has-image"),localStorage.removeItem("backgroundImage"),ie.style.display="none"})})();
