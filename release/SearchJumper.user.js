// ==UserScript==
// @name         SearchJumper
// @namespace    hoothin
// @version      1.9.33
// @author       hoothin
// @license      MPL-2.0
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAAD+/v7////+/v7+/v7////+/v79/f3////////+/v7////////////+/v79/f3////+/v7/rP8zMzP/2f/R0dHAwMD/zf+vr69ZWVlKSkry8vL/vv/+5/7r6+uRkZGcnJx8fHxwcHD+7/7f39+kpKTMxXKjAAAAEXRSTlMA4wrL9ICvkxk56nVVI9WgZNxdEUkAAAE2SURBVDjLfdPZloMgDAZgFtHR2uU3LnWrXd//FUfIHKRT7XfhUYIkhINYqPyoM0SZTnIlPu2PEbwo2f8LqwTvIvMW/9H4oH+WeCqxQu79/xKr5N8aSmOD5gkGm3YuQYRNkU3CG+ynCYH6VsEycwW8wJXoDK8narlOIXI4Z6IKi47ucNI5A6vCOC41mBEaX8VCAuVQFEXzQODRzENDaVsRoSwYAgUrIecJI38MCAw8NkLaFCibphyDMusKox0DoJci+6615fcA2q5fikz8b/QC0HWuKTX8NnM/wbWSyL86qW01u1D3xEQ04dLSE0z6w3ILz9rWPq/hefslUN3uL+B6v/kKMiVmO2w6CSfGhqNg6oBVWvlbxTO+XAy1kiVWInTK8EZyfQFlZBDeKbEiNfFBSh2bNBj8BZ8mNsZysMSsAAAAAElFTkSuQmCC
// @grant        GM.getValue
// @grant        GM_getValue
// @grant        GM.setValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM.addStyle
// @grant        GM.deleteValue
// @grant        GM_deleteValue
// @grant        GM.registerMenuCommand
// @grant        GM_registerMenuCommand
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.notification
// @grant        GM_notification
// @grant        GM.setClipboard
// @grant        GM_setClipboard
// @grant        GM.openInTab
// @grant        GM_openInTab
// @grant        GM.info
// @grant        GM_info
// @grant        unsafeWindow
// @compatible   edge tested with tm
// @compatible   Chrome tested with tm
// @compatible   Firefox tested with tm
// @compatible   Opera untested
// @compatible   Safari untested
// @compatible   ios tested with userscript
// @compatible   android tested with kiwi
// @supportURL   https://github.com/hoothin/SearchJumper/issues
// @homepage     https://github.com/hoothin/SearchJumper
// @require      https://update.greasyfork.org/scripts/484118/searchJumperDefaultConfig.js
// @connect      global.bing.com
// @connect      suggestqueries.google.com
// @connect      api.bing.com
// @connect      suggestion.baidu.com
// @connect      webdav.hoothin.com
// @connect      search.hoothin.com
// @connect      *
// @run-at       document-start
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/SearchJumper.user.js
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/SearchJumper.meta.js
// ==/UserScript==
(async function(){"use strict";const ye=typeof unsafeWindow>"u"?window:unsafeWindow;if(ye.searchJumperInited)return;ye.searchJumperInited=!0;const nr=navigator&&navigator.clipboard,St=window.top!==window.self;if(St)try{if(window.self.innerWidth===0&&window.self.innerHeight===0){if(await new Promise(Ue=>{window.addEventListener("load",$i=>{setTimeout(()=>{Ue(window.self.innerWidth<300||window.self.innerHeight<300)},500)})}))return}else if(window.self.innerWidth<300||window.self.innerHeight<300)return}catch{return}const Mi=/^https:\/\/github\.com\/hoothin\/SearchJumper(\/(issue|discussions)|\/?$|#|\?)|^https:\/\/greasyfork\.org\/.*\/scripts\/445274[\-\/].*\/discussions/i,Ni="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",ii="https://search.hoothin.com/",or="https://hoothin.github.io/SearchJumper",Bi=ii+"firstRun";let Ae=ii+"config/",et=!1,c={};c.sitesConfig=sitesConfig,c.prefConfig={position:{x:"left",y:"top"},offset:{x:"0",y:"0"},firstRun:!0,openInNewTab:!1,enableInPage:!0,altKey:!1,ctrlKey:!0,shiftKey:!1,metaKey:!1,autoClose:!1,autoDelay:1e3,shortcut:!0,initShow:!1,alwaysShow:!1,customSize:100,tilesZoom:100,tipsZoom:100,typeOpenTime:250,longPressTime:500,noIcons:!1,showSiteLists:!0,alwaysShowSiteLists:!1,cacheSwitch:!1,noAni:!1,quickAddRule:!0,multiline:2,multilineGap:1e3,historyLength:0,dragToSearch:!0,hideDragHistory:!1,sortType:!1,sortSite:!1,autoHide:!1,autoHideAll:!1,showCurrent:!0,shortcutKey:"Backquote",showInSearchEngine:!1,showInSearchJumpPage:!0,limitInPageLen:1,limitPopupLen:1,ignoreWords:["a","in","into","the","to","on","among","between","and","an","of","by","with","about","under","or","at","as"],inPageRule:{},firstFiveWordsColor:[],inPageWordsStyles:[],altToHighlight:!0,defaultPicker:!1,disableInputOnWords:!1,disableTypeOpen:!1,callBarAlt:!1,callBarCtrl:!1,callBarShift:!1,callBarMeta:!1,defaultFindTab:!0,disableAutoOpen:!1,hideOnSearchEngine:!1,minSizeMode:!1,hidePopup:!1,minPopup:0,selectToShow:!1,expandType:!1,rightMouse:!0,shiftLastUsedType:!0,mouseLeaveToHide:!0,currentTypeFirst:!0,switchSitesPreKey:"ArrowLeft",switchSitesNextKey:"ArrowRight",switchSitesCtrl:!0,switchSitesAlt:!1,switchSitesShift:!0,switchSitesMeta:!1};function Ai(){let Fe=navigator.appName==="Netscape"?navigator.language:navigator.userLanguage,Ue={};function $i(){switch(Fe){case"zh-CN":case"zh-SG":Ue={import:"\u5BFC\u5165",filter:"\u7B5B\u9009",selectAll:"\u5168\u9009",importOrNot:"\u662F\u5426\u5BFC\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u5F00",batchOpenConfirm:"\u786E\u5B9A\u8981\u6279\u91CF\u6253\u5F00\u5417\uFF1F",postOver:"\u53D1\u9001\u6210\u529F\uFF1A",postError:"\u53D1\u9001\u5931\u8D25\uFF1A",copyOver:"\u590D\u5236\u6210\u529F",keywords:"\u8BF7\u8F93\u5165\u641C\u7D22\u8BCD",targetUrl:"\u8BF7\u8F93\u5165\u641C\u7D22URL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u56FE\u6807",siteTest:"\u6D4B\u8BD5",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u7C7B",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u89C4\u5219\uFF0C\u662F\u5426\u6DFB\u52A0\u4E3A\u514B\u9686\u9879\uFF1F",siteAddOver:"\u7AD9\u70B9\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u6362\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u7D22\uFF1F",multilineTooMuch:"\u884C\u6570\u8D85\u8FC710\u884C\uFF0C\u662F\u5426\u7EE7\u7EED\u641C\u7D22\uFF1F",inputPlaceholder:"\u7B5B\u9009\u5F15\u64CE",inputTitle:"\u7B5B\u9009\u5F15\u64CE\uFF0C\u652F\u6301 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u5F00\u5934\uFF0C\u5206\u7EC4**\u7AD9\u70B9 \u53EF\u7B5B\u9009\u6307\u5B9A\u5206\u7EC4\uFF0C\u4F8B\u5982 \u56FE\u7247**baidu\uFF0Ctab \u4E0B\u4E00\u9879",inputKeywords:"\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",inPageTips:`\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8BA4\u7A7A\u683C\u4F5C\u4E3A\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u7D22\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF1A\u641C\u7D22\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0B\u4E00\u4E2A\uFF0C\u53F3\u952E\u70B9\u51FB\u5173\u952E\u8BCD\u8DF3\u8F6C\u81F3\u4E0A\u4E00\u4E2A`,inPagePlaceholder:"\u8F93\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8F66\u8FDB\u884C\u9875\u5185\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u8FDE\u7EED\u6293\u53D6",editBtn:"\u7F16\u8F91\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u590D\u5236\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u5355\u8BCD\u6A21\u5F0F",copyEleBtn:"\u590D\u5236\u9009\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u5F00\u9009\u4E2D\u94FE\u63A5",maxEleBtn:"\u5C55\u5F00\u9009\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9009\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u5F00",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u590D\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6807\u7B7E\u9875\u4E2D\u641C\u7D22",locBtn:"\u5B9A\u4F4D\u4FA7\u8FB9\u680F",filterSites:"\u641C\u7D22\u5F15\u64CE",searchInPage:"\u9875\u5185\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u7D22\u8BCD",saveRuleBtn:"\u4FDD\u5B58\u5F53\u524D\u7AD9\u70B9\u7684\u641C\u7D22\u8BCD",wordContent:"\u641C\u7D22\u8BCD\u5185\u5BB9",wordHide:"\u9690\u85CF\u7236\u7EA7\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u4E3A\u5F53\u524D\u7236\u7EA7",wordStyle:"\u641C\u7D22\u8BCD\u6837\u5F0F",wordTitle:"\u641C\u7D22\u8BCD\u6CE8\u91CA",re:"\u6B63\u5219",ignoreCase:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199",filterLink:"\u7B5B\u9009\u94FE\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9875\u5185\u641C\u7D22\u8BCD",addSearchEngine:"\u6DFB\u52A0\u641C\u7D22\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52A8\u7F16\u8F91\u89C4\u5219\u5E76\u6DFB\u52A0\uFF1F",expand:"\u5C55\u5F00\u5269\u4F59\u7AD9\u70B9",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8BCD\u8BED",wordRange:"\u751F\u6548\u8303\u56F4",customInputFrame:"\u81EA\u5B9A\u4E49\u641C\u7D22\u53C2\u6570",customSubmit:"\u63D0\u4EA4\u641C\u7D22",finalSearch:"\u76EE\u6807\u641C\u7D22\u5B57\u4E32",search:"\u641C\u7D22\u6B64\u9879",siteKeywords:"\u5173\u952E\u8BCD(\u591A\u4E2A\u5173\u952E\u8BCD\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u70B9 URL \u5339\u914D\u6B63\u5219",openSelect:"\u6253\u5F00\u9009\u9879",openInDefault:"\u9ED8\u8BA4",openInNewTab:"\u65B0\u6807\u7B7E\u9875\u6253\u5F00",openInCurrent:"\u5F53\u524D\u9875\u6253\u5F00",currentType:"\u5F53\u524D\u5206\u7C7B",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u8FD8\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u62DF\u8F93\u5165\u641C\u7D22",inputAction:"\u8F93\u5165",clickAction:"\u70B9\u51FB",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u590D\u5236\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5185\u8F93\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u70B9\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u53CC\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u51FB\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u590D\u5236\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8BF7\u8F93\u5165\u65B0\u503C",deleteConfirm:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417\uFF1F",sleepPrompt:"\u7B49\u5F85\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",startCache:"\u5F00\u59CB\u7F13\u5B58\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85\u7F13\u5B58\u5B8C\u6BD5\uFF0C\u52FF\u5173\u95ED\u914D\u7F6E\u9875\uFF01",cacheOver:"\u6240\u6709\u56FE\u6807\u90FD\u5DF2\u7F13\u5B58\u5B8C\u6BD5\uFF01",cspDisabled:"\u811A\u672C\u6837\u5F0F\u88AB\u5F53\u524D\u7AD9\u70B9\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u65E0\u6CD5\u663E\u793A\uFF0C\u8BF7\u5C1D\u8BD5\u5B89\u88C5 Allow CSP: Content-Security-Policy \u6269\u5C55\u83B7\u53D6\u6743\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8BF7\u8BBE\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u5F55\u5236\u64CD\u4F5C",startRecord:"\u5F00\u59CB\u5F55\u5236\u64CD\u4F5C\uFF0C\u6309\u56DE\u8F66\u952E\u7ED3\u675F\u5F55\u5236",loopAction:"\u{1F501}\u5F00\u59CB\u5FAA\u73AF",loopActionEnd:"\u23F9\uFE0F\u5FAA\u73AF\u7ED3\u675F",loopStart:'\u5F00\u59CB\u5FAA\u73AF\uFF0C\u5FAA\u73AF\u6B21\u6570\u4E3A<span title="#t#">#t#</span>',loopEnd:"\u7ED3\u675F\u5FAA\u73AF",loopTimes:"\u5FAA\u73AF\u6B21\u6570\uFF0C\u5C06\u904D\u5386\u6240\u6709\u5339\u914D\u5143\u7D20\u5E76\u987A\u5E8F\u6267\u884C",loadingCollection:"\u6B63\u5728\u52A0\u8F7D\u5408\u96C6\uFF0C\u8BF7\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F93\u5165\u6846\uFF09\u5185\u8F93\u5165\u641C\u7D22\u8BCD",emuClickTips:"\u5355\u51FB\u6307\u5B9A\u9875\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u94AE\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u540E\u7EE7\u7EED\u6267\u884C\uFF0C\u5F53\u67D0\u4E2A\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\u5F88\u6709\u7528",emuCopyTips:"\u590D\u5236\u6307\u5B9A\u5143\u7D20\u7684\u6587\u672C\u5230\u526A\u8D34\u677F",emuRecordTips:"\u5F55\u5236\u63A5\u4E0B\u6765\u7684\u70B9\u51FB\u548C\u8F93\u5165\u64CD\u4F5C",emuLoopTips:"\u5F00\u59CB\u5FAA\u73AF\uFF0C\u63A5\u4E0B\u6765\u7684\u64CD\u4F5C\u5C06\u904D\u5386\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u5E76\u4E14\u91CD\u590D\u6307\u5B9A\u6B21\u6570",emuStopTips:"\u7ED3\u675F\u64CD\u4F5C\u5E76\u751F\u6210\u89C4\u5219"};break;case"zh":case"zh-TW":case"zh-HK":Ue={import:"\u5C0E\u5165",filter:"\u7BE9\u9078",selectAll:"\u5168\u9078",importOrNot:"\u662F\u5426\u5C0E\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u958B",batchOpenConfirm:"\u78BA\u5B9A\u8981\u6279\u91CF\u6253\u958B\u55CE\uFF1F",postOver:"\u767C\u9001\u6210\u529F\uFF1A",postError:"\u767C\u9001\u5931\u6557\uFF1A",copyOver:"\u8907\u88FD\u6210\u529F",keywords:"\u8ACB\u8F38\u5165\u641C\u5C0B\u8A5E",targetUrl:"\u8ACB\u8F38\u5165\u641C\u5C0BURL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u5716\u6A19",siteTest:"\u6E2C\u8A66",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u985E",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u898F\u5247\uFF0C\u662F\u5426\u6DFB\u52A0\u70BA\u514B\u9686\u9805\uFF1F",siteAddOver:"\u7AD9\u9EDE\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u63DB\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u5C0B\uFF1F",multilineTooMuch:"\u884C\u6578\u8D85\u904E10\u884C\uFF0C\u662F\u5426\u7E7C\u7E8C\u641C\u5C0B\uFF1F",inputPlaceholder:"\u7BE9\u9078\u5F15\u64CE",inputTitle:"\u7BE9\u9078\u5F15\u64CE\uFF0C\u652F\u63F4 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u958B\u982D\uFF0C\u5206\u7D44**\u7AD9\u9EDE \u53EF\u7BE9\u9078\u6307\u5B9A\u5206\u7D44\uFF0C\u4F8B\u5982 \u5716\u7247**google\uFF0Ctab \u4E0B\u4E00\u9805",inputKeywords:"\u8F38\u5165\u641C\u5C0B\u95DC\u9375\u8A5E",inPageTips:`\u81EA\u5B9A\u7FA9\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8A8D\u7A7A\u683C\u4F5C\u70BA\u5206\u9694\u7B26
\u539F\u59CB\u6587\u672C\u4E0D\u5206\u9694\uFF1A$o \u52A0\u6587\u672C\uFF0C\u4F8B\u5982$oopai liked by hero
\u6B63\u5247\u8868\u9054\u5F0F\uFF1A/re/\uFF0C\u4F8B\u5982 $c, /google/i , /aPPle/
\u6DFB\u52A0\u63D0\u793A\u6587\u672C\uFF1A\u641C\u5C0B\u6587\u672C$t{\u63D0\u793A\u6587\u672C}\uFF0C\u4F8B\u5982 linux$t{linux is not unix}
\u6DFB\u52A0\u81EA\u5B9A\u7FA9\u6A23\u5F0F\uFF1A\u641C\u5C0B\u6587\u672C$s{\u80CC\u666F;\u5176\u4ED6}\uFF0C\u4F8B\u5982 google$s{#333333;color:red;}
\u5DE6\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0B\u4E00\u500B\uFF0C\u53F3\u9375\u9EDE\u64CA\u95DC\u9375\u8A5E\u8DF3\u8F49\u81F3\u4E0A\u4E00\u500B`,inPagePlaceholder:"\u8F38\u5165\u6587\u5B57\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9032\u884C\u9801\u5167\u67E5\u627E",pickerBtn:"\u6293\u53D6\u5143\u7D20",multiPickerBtn:"\u6293\u53D6\u5143\u7D20\uFF0C\u6309\u4F4F Ctrl \u6216 Command \u9023\u7E8C\u6293\u53D6",editBtn:"\u7DE8\u8F2F\u67E5\u627E\u6587\u5B57",emptyBtn:"\u6E05\u7A7A\u67E5\u627E\u6587\u5B57",copyInPageBtn:"\u8907\u88FD\u67E5\u627E\u6587\u5B57",wordModeBtn:"\u55AE\u8A5E\u6A21\u5F0F",copyEleBtn:"\u8907\u88FD\u9078\u4E2D\u5143\u7D20",openLinkBtn:"\u6253\u958B\u9078\u4E2D\u9023\u7D50",maxEleBtn:"\u5C55\u958B\u9078\u4E2D\u5143\u7D20",minEleBtn:"\u6536\u8D77\u9078\u4E2D\u5143\u7D20",expandAll:"\u5168\u90E8\u5C55\u958B",collapseAll:"\u5168\u90E8\u5408\u8D77",rename:"\u91CD\u547D\u540D",recoverBtn:"\u6062\u5FA9\u67E5\u627E\u6587\u5B57",pinBtn:"\u56FA\u5B9A\u67E5\u627E\u6587\u5B57\uFF0C\u5728\u6240\u6709\u6A19\u7C64\u9801\u4E2D\u641C\u5C0B",locBtn:"\u5B9A\u4F4D\u5074\u908A\u6B04",filterSites:"\u641C\u5C0B\u5F15\u64CE",searchInPage:"\u9801\u5167\u67E5\u627E",removeBtn:"\u79FB\u9664\u641C\u5C0B\u8A5E",saveRuleBtn:"\u4FDD\u5B58\u7576\u524D\u7AD9\u9EDE\u7684\u641C\u5C0B\u8A5E",wordContent:"\u641C\u5C0B\u8A5E\u5167\u5BB9",wordHide:"\u96B1\u85CF\u7236\u7D1A\u5143\u7D20",wordHideTips:"\u5143\u7D20\u6DF1\u5EA6\uFF0C0\u70BA\u7576\u524D\u7236\u7D1A",wordStyle:"\u641C\u5C0B\u8A5E\u6A23\u5F0F",wordTitle:"\u641C\u5C0B\u8A5E\u6CE8\u91CB",re:"\u6B63\u5247",ignoreCase:"\u4E0D\u5340\u5206\u5927\u5C0F\u5BEB",filterLink:"\u7BE9\u9078\u93C8\u63A5",modify:"\u4FEE\u6539",cancel:"\u53D6\u6D88",modifyWord:"\u4FEE\u6539\u9801\u5167\u641C\u5C0B\u8A5E",addSearchEngine:"\u6DFB\u52A0\u641C\u5C0B\u5F15\u64CE",noValidItemAsk:"\u672A\u627E\u5230\u6709\u6548\u5143\u7D20\uFF0C\u662F\u5426\u624B\u52D5\u7DE8\u8F2F\u898F\u5247\u4E26\u6DFB\u52A0\uFF1F",expand:"\u5C55\u958B\u5269\u9918\u7AD9\u9EDE",add:"\u6DFB\u52A0",addWord:"\u6DFB\u52A0\u65B0\u8A5E\u8A9E",wordRange:"\u751F\u6548\u7BC4\u570D",customInputFrame:"\u81EA\u5B9A\u7FA9\u641C\u5C0B\u53C3\u6578",customSubmit:"\u63D0\u4EA4\u641C\u5C0B",finalSearch:"\u76EE\u6A19\u641C\u5C0B\u5B57\u4E32",search:"\u641C\u5C0B\u6B64\u9805",siteKeywords:"\u95DC\u9375\u8A5E(\u591A\u500B\u95DC\u9375\u8A5E\u4EE5|\u5206\u9694)",siteMatch:"\u7AD9\u9EDE URL \u5339\u914D\u6B63\u5247",openSelect:"\u6253\u958B\u9078\u9805",openInDefault:"\u9ED8\u8A8D",openInNewTab:"\u65B0\u6A19\u7C64\u9801\u6253\u958B",openInCurrent:"\u7576\u524D\u9801\u6253\u958B",currentType:"\u7576\u524D\u5206\u985E",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u9084\u539F",addAction:"\u6DFB\u52A0\u64CD\u4F5C",crawlInfo:"\u6A21\u64EC\u8F38\u5165\u641C\u5C0B",inputAction:"\u8F38\u5165",clickAction:"\u9EDE\u64CA",sleepAction:"\u7B49\u5F85",copyAction:"\u{1F4C4}\u8907\u88FD\u5143\u7D20",submitCrawl:"\u2611\uFE0F\u5B8C\u6210\u64CD\u4F5C",inputOutput:'\u5728\u5143\u7D20<span title="#t1#" class="element">#t1#</span>\u5167\u8F38\u5165<span title="#t2#">#t2#</span>',clickOutput:'\u9EDE\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u96D9\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u64CA\u5143\u7D20<span title="#t#" class="element">#t#</span>',copyOutput:'\u8907\u88FD\u5143\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u4F11\u7720<span title="#t#">#t#</span>\u6BEB\u79D2',inputNewValue:"\u8ACB\u8F38\u5165\u65B0\u503C",deleteConfirm:"\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u9805\u55CE\uFF1F ",sleepPrompt:"\u7B49\u5F85\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",startCache:"\u958B\u59CB\u7DE9\u5B58\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5F85\u7DE9\u5B58\u5B8C\u7562\uFF0C\u52FF\u95DC\u9589\u914D\u7F6E\u9801\uFF01",cacheOver:"\u6240\u6709\u5716\u6A19\u90FD\u5DF2\u7DE9\u5B58\u5B8C\u7562\uFF01",cspDisabled:"\u8173\u672C\u6A23\u5F0F\u88AB\u7576\u524D\u7AD9\u9EDE\u7684 CSP \u963B\u6B62\uFF0C\u56E0\u6B64\u7121\u6CD5\u986F\u793A\uFF0C\u8ACB\u5617\u8A66\u5B89\u88DD Allow CSP: Content-Security-Policy \u64F4\u5C55\u7372\u53D6\u6B0A\u9650",Sunday:"\u661F\u671F\u65E5 (\u65E5)",Monday:"\u661F\u671F\u4E00 (\u6708)",Tuesday:"\u661F\u671F\u4E8C (\u706B)",Wednesday:"\u661F\u671F\u4E09 (\u6C34)",Thursday:"\u661F\u671F\u56DB (\u6728)",Friday:"\u661F\u671F\u4E94 (\u91D1)",Saturday:"\u661F\u671F\u516D (\u571F)",template:"\u8ACB\u8A2D\u7F6E\u3010#t#\u3011\u7684\u503C",recordAction:"\u23FA\uFE0F\u9304\u88FD\u52D5\u4F5C",startRecord:"\u958B\u59CB\u9304\u88FD\u64CD\u4F5C\uFF0C\u6309\u4E0B\u56DE\u8ECA\u9375\u7D50\u675F\u9304\u88FD",loopAction:"\u{1F501}\u958B\u59CB\u5FAA\u74B0",loopActionEnd:"\u23F9\uFE0F\u5FAA\u74B0\u7D50\u675F",loopStart:'\u958B\u59CB\u5FAA\u74B0\uFF0C\u5FAA\u74B0\u6B21\u6578\u70BA<span title="#t#">#t#</span>',loopEnd:"\u7D50\u675F\u5FAA\u74B0",loopTimes:"\u5FAA\u74B0\u6B21\u6578\uFF0C\u5C07\u904D\u6B77\u6240\u6709\u5339\u914D\u5143\u7D20\u4E26\u9806\u5E8F\u57F7\u884C",loadingCollection:"\u6B63\u5728\u8F09\u5165\u5408\u96C6\uFF0C\u8ACB\u7A0D\u5019\u2026\u2026",emuInputTips:"\u5728\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u8F38\u5165\u6846\uFF09\u5167\u8F38\u5165\u641C\u5C0B\u5B57\u8A5E",emuClickTips:"\u9EDE\u64CA\u6307\u5B9A\u9801\u9762\u5143\u7D20\uFF08\u4F8B\u5982\u6309\u9215\uFF09",emuWaitTips:"\u7B49\u5F85\u4E00\u6BB5\u6642\u9593\u5F8C\u7E7C\u7E8C\u57F7\u884C\uFF0C\u7576\u67D0\u500B\u64CD\u4F5C\u9700\u8981\u4E00\u6BB5\u6642\u9593\u624D\u80FD\u5B8C\u6210\u6642\u5F88\u6709\u7528",emuCopyTips:"\u8907\u88FD\u6307\u5B9A\u5143\u7D20\u7684\u6587\u5B57\u5230\u526A\u8CBC\u7C3F",emuRecordTips:"\u9304\u88FD\u63A5\u4E0B\u4F86\u7684\u9EDE\u64CA\u548C\u8F38\u5165\u64CD\u4F5C",emuLoopTips:"\u958B\u59CB\u5FAA\u74B0\uFF0C\u63A5\u4E0B\u4F86\u7684\u64CD\u4F5C\u5C07\u904D\u6B77\u6240\u6709\u627E\u5230\u7684\u5143\u7D20\u4E26\u4E14\u91CD\u8907\u6307\u5B9A\u6B21\u6578",emuStopTips:"\u7D50\u675F\u64CD\u4F5C\u4E26\u7522\u751F\u898F\u5247"};break;case"ja":Ue={import:"\u30A4\u30F3\u30DD\u30FC\u30C8",filter:"\u30D5\u30A3\u30EB\u30BF\u30FC",selectAll:"\u3059\u3079\u3066\u9078\u629E",importOrNot:"\u8A2D\u5B9A\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u304B? ",settings:"\u69CB\u6210\u30B9\u30AF\u30EA\u30D7\u30C8",batchOpen:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3",batchOpenConfirm:"\u30D0\u30C3\u30C1\u30AA\u30FC\u30D7\u30F3\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",postOver:"\u6B63\u5E38\u306B\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F:",postError:"\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F:",copyOver:"\u30B3\u30D4\u30FC\u306B\u6210\u529F\u3057\u307E\u3057\u305F",keywords:"\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",targetUrl:"\u691C\u7D22 URL \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",siteName:"\u30B5\u30A4\u30C8\u540D",siteDesc:"\u8AAC\u660E",siteUrl:"\u30A2\u30C9\u30EC\u30B9",siteIcon:"\u30A2\u30A4\u30B3\u30F3",siteTest:"\u30C6\u30B9\u30C8",siteCancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",siteAdd:"\u8FFD\u52A0",siteType:"\u30AB\u30C6\u30B4\u30EA",siteExist:"\u540C\u3058\u30EB\u30FC\u30EB\u304C\u3059\u3067\u306B\u5B58\u5728\u3057\u307E\u3059\u3002\u30AF\u30ED\u30FC\u30F3\u3068\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",siteAddOver:"\u30B5\u30A4\u30C8\u306F\u6B63\u5E38\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F",multiline:"\u8907\u6570\u884C\u306E\u691C\u7D22\u306F\u6539\u884C\u3067\u533A\u5207\u308B\u3079\u304D\u3067\u3059\u304B? ",multilineTooMuch:"\u884C\u6570\u304C 10 \u884C\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u3092\u7D9A\u3051\u307E\u3059\u304B? ",inputPlaceholder:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3",inputTitle:"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0 \u30A8\u30F3\u30B8\u30F3\u3001*? \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3001$ \u306F\u7D42\u308F\u308A\u3092\u8868\u3057\u3001^ \u306F\u59CB\u307E\u308A\u3092\u8868\u3057\u307E\u3059\u3001\u30B0\u30EB\u30FC\u30D7 ** \u30B5\u30A4\u30C8\u306F\u5199\u771F\u306A\u3069\u306E\u6307\u5B9A\u3055\u308C\u305F\u30B0\u30EB\u30FC\u30D7\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u304D\u307E\u3059 ** Google\u3001\u6B21\u306E\u9805\u76EE\u3092\u30BF\u30D6\u3057\u307E\u3059",inputKeywords:"\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",inPageTips:`\u30AB\u30B9\u30BF\u30E0\u533A\u5207\u308A\u6587\u5B57: $c \u3068\u533A\u5207\u308A\u6587\u5B57 ($c| \u691C\u7D22 | \u30B8\u30E3\u30F3\u30D1\u30FC\u306A\u3069)\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528
\u5143\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u5206\u96E2\u3055\u308C\u3066\u3044\u307E\u305B\u3093: $o \u3068\u6587\u5B57 (\u30D2\u30FC\u30ED\u30FC\u304C\u597D\u3093\u3060 $oopai \u306A\u3069)
\u6B63\u898F\u8868\u73FE \uFF1A/re/ \u3001$c\u3001/google/i\u3001/aPPle/ \u306A\u3069
\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $t{\u30D7\u30ED\u30F3\u30D7\u30C8 \u30C6\u30AD\u30B9\u30C8}\u3001\u305F\u3068\u3048\u3070 linux$t{Linux \u306F Unix \u3067\u306F\u3042\u308A\u307E\u305B\u3093}
\u30AB\u30B9\u30BF\u30E0 \u30B9\u30BF\u30A4\u30EB\u306E\u8FFD\u52A0: \u691C\u7D22\u30C6\u30AD\u30B9\u30C8 $s{\u80CC\u666F;other}\u3001\u4F8B: google$s{#333333;color:red;}
\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5DE6\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u6B21\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524D\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059`,inPagePlaceholder:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22\u3059\u308B\u306B\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3057\u3066 Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",pickerBtn:"\u8981\u7D20\u306E\u53D6\u5F97",multiPickerBtn:"\u8981\u7D20\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Ctrl \u307E\u305F\u306F Command \u3092\u62BC\u3057\u305F\u307E\u307E\u7D99\u7D9A\u7684\u306B\u53D6\u5F97\u3057\u307E\u3059",editBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u7DE8\u96C6",emptyBtn:"\u7A7A\u306E\u691C\u7D22\u30C6\u30AD\u30B9\u30C8",copyInPageBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30FC",wordModeBtn:"\u30EF\u30FC\u30C9\u30E2\u30FC\u30C9",copyEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u30B3\u30D4\u30FC",openLinkBtn:"\u9078\u629E\u3057\u305F\u30EA\u30F3\u30AF\u3092\u958B\u304F",maxEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u5C55\u958B",minEleBtn:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3092\u6298\u308A\u305F\u305F\u3080",expandAll:"\u3059\u3079\u3066\u5C55\u958B",collapseAll:"\u3059\u3079\u3066\u6298\u308A",rename:"\u540D\u524D\u3092\u5909\u66F4",reverseBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u5FA9\u5143",pinBtn:"\u691C\u7D22\u30C6\u30AD\u30B9\u30C8\u3092\u4FEE\u6B63\u3001\u3059\u3079\u3066\u306E\u30BF\u30D6\u3067\u691C\u7D22",locBtn:"\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u691C\u7D22",filterSites:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3",searchInPage:"\u30DA\u30FC\u30B8\u5185\u3092\u691C\u7D22",removeBtn:"\u691C\u7D22\u8A9E\u3092\u524A\u9664",saveRuleBtn:"\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E\u691C\u7D22\u8A9E\u3092\u4FDD\u5B58",wordContent:"\u5358\u8A9E\u306E\u5185\u5BB9\u3092\u691C\u7D22",wordHide:"\u89AA\u8981\u7D20\u3092\u975E\u8868\u793A",wordHideTips:"\u8981\u7D20\u306E\u6DF1\u3055\u30010 \u304C\u73FE\u5728\u306E\u89AA",wordStyle:"\u691C\u7D22\u30EF\u30FC\u30C9\u30B9\u30BF\u30A4\u30EB",wordTitle:"\u691C\u7D22\u5358\u8A9E\u306E\u6CE8\u91C8",re:"RegExp",ignoreCase:"\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u306F\u533A\u5225\u3055\u308C\u307E\u305B\u3093",filterLink:"\u30D5\u30A3\u30EB\u30BF\u30FC\u30EA\u30F3\u30AF",modify:"\u5909\u66F4",cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",modifyWord:"\u30DA\u30FC\u30B8\u4E0A\u306E\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u3059",addSearchEngine:"\u691C\u7D22\u30A8\u30F3\u30B8\u30F3\u3092\u8FFD\u52A0",noValidItemAsk:"\u6709\u52B9\u306A\u8981\u7D20\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30EB\u30FC\u30EB\u3092\u624B\u52D5\u3067\u7DE8\u96C6\u3057\u3066\u8FFD\u52A0\u3057\u307E\u3059\u304B? ",expand:"\u6B8B\u308A\u306E\u30B5\u30A4\u30C8\u3092\u5C55\u958B\u3057\u307E\u3059",add:"\u8FFD\u52A0",addWord:"\u65B0\u3057\u3044\u5358\u8A9E\u3092\u8FFD\u52A0",wordRange:"\u6709\u52B9\u7BC4\u56F2",customInputFrame:"\u30AB\u30B9\u30BF\u30E0\u691C\u7D22\u30D1\u30E9\u30E1\u30FC\u30BF",customSubmit:"\u691C\u7D22\u3092\u9001\u4FE1",finalSearch:"\u5BFE\u8C61\u306E\u691C\u7D22\u6587\u5B57\u5217",search:"\u3053\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u691C\u7D22",siteKeywords:"\u30AD\u30FC\u30EF\u30FC\u30C9 (| \u3067\u533A\u5207\u3089\u308C\u305F\u8907\u6570\u306E\u30AD\u30FC\u30EF\u30FC\u30C9)",siteMatch:"\u901A\u5E38\u306E\u30B5\u30A4\u30C8 URL \u3068\u4E00\u81F4",openSelect:"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u958B\u304F",openInDefault:"\u30C7\u30D5\u30A9\u30EB\u30C8",openInNewTab:"\u65B0\u3057\u3044\u30BF\u30D6\u304C\u958B\u304D\u307E\u3059",openInCurrent:"\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u304C\u958B\u3044\u3066\u3044\u307E\u3059",currentType:"\u73FE\u5728\u306E\u30AB\u30C6\u30B4\u30EA",maxAddSiteBtn:"\u6700\u5927\u5316",minAddSiteBtn:"\u5FA9\u5143",addAction:"\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0",rollInfo:"\u5165\u529B\u691C\u7D22\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30C8",inputAction:"\u5165\u529B",clickAction:"\u30AF\u30EA\u30C3\u30AF",sleepAction:"\u5F85\u6A5F",copyAction:"\u{1F4C4}\u8981\u7D20\u306E\u30B3\u30D4\u30FC",submitCrawl:"\u2611\uFE0F\u64CD\u4F5C\u3092\u5B8C\u4E86",inputOutput:'\u8981\u7D20 <span title="#t1#" class="element">#t1#</span> \u5185\u306B <span title="#t2#">#t2#</span> \u3092\u5165\u529B\u3057\u307E\u3059',clickOutput:'\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',dblclickOutput:'\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',rclickOutput:'\u53F3\u30AF\u30EA\u30C3\u30AF<span title="#t#" class="element">#t#</span>',copyOutput:'\u30B3\u30D4\u30FC\u8981\u7D20<span title="#t#" class="element">#t#</span>',sleepOutput:'\u30B9\u30EA\u30FC\u30D7<span title="#t#">#t#</span> \u30DF\u30EA\u79D2',inputNewValue:"\u65B0\u3057\u3044\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",deleteconfirm:"\u3053\u306E\u9805\u76EE\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B? ",sleepPrompt:"\u5F85\u6A5F\u6642\u9593 (\u30DF\u30EA\u79D2)",startCache:"\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u8F9B\u62B1\u5F37\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u8A2D\u5B9A\u30DA\u30FC\u30B8\u306F\u9589\u3058\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002 ",cacheOver:"\u3059\u3079\u3066\u306E\u30A2\u30A4\u30B3\u30F3\u304C\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u307E\u3057\u305F! ",cspDisabled:"\u30B9\u30AF\u30EA\u30D7\u30C8 \u30B9\u30BF\u30A4\u30EB\u306F\u73FE\u5728\u306E\u30B5\u30A4\u30C8\u306E CSP \u306B\u3088\u3063\u3066\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3002\u8A31\u53EF\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001Allow CSP: Content-Security-Policy \u62E1\u5F35\u6A5F\u80FD\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044",Sunday:"\u65E5\u66DC\u65E5",Monday:"\u6708\u66DC\u65E5",Tuesday:"\u706B\u66DC\u65E5",Wednesday:"\u6C34\u66DC\u65E5",Thursday:"\u6728\u66DC\u65E5",Friday:"\u91D1\u66DC\u65E5",Saturday:"\u571F\u66DC\u65E5",template:"[#t#]\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044",recordAction:"\u23FA\uFE0F\u8A18\u9332\u64CD\u4F5C",startRecord:"\u8A18\u9332\u64CD\u4F5C\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u8A18\u9332\u3092\u7D42\u4E86\u3059\u308B\u306B\u306F Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044",loopAction:"\u{1F501}\u30EB\u30FC\u30D7\u306E\u958B\u59CB",loopActionEnd:"\u23F9\uFE0F\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopStart:'\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3002\u30EB\u30FC\u30D7\u6570\u306F <span title="#t#">#t#</span> \u3067\u3059',loopEnd:"\u30EB\u30FC\u30D7\u306E\u7D42\u4E86",loopTimes:"\u30EB\u30FC\u30D7\u306E\u6570\u3002\u4E00\u81F4\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u304C\u8D70\u67FB\u3055\u308C\u3001\u9806\u756A\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059",loadingCollection:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",emuInputTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u5165\u529B\u30DC\u30C3\u30AF\u30B9\u306A\u3069) \u306B\u691C\u7D22\u8A9E\u3092\u5165\u529B\u3057\u307E\u3059",emuClickTips:"\u6307\u5B9A\u3055\u308C\u305F\u30DA\u30FC\u30B8\u8981\u7D20 (\u30DC\u30BF\u30F3\u306A\u3069) \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059",emuWaitTips:"\u7D9A\u884C\u3059\u308B\u524D\u306B\u3057\u3070\u3089\u304F\u5F85\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u64CD\u4F5C\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059",emuCopyTips:"\u6307\u5B9A\u3055\u308C\u305F\u8981\u7D20\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059",emuRecordTips:"\u6B21\u306E\u30AF\u30EA\u30C3\u30AF\u3068\u5165\u529B\u64CD\u4F5C\u3092\u8A18\u9332\u3057\u307E\u3059",emuLoopTips:"\u30EB\u30FC\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u6B21\u306E\u64CD\u4F5C\u306F\u898B\u3064\u304B\u3063\u305F\u3059\u3079\u3066\u306E\u8981\u7D20\u3092\u8D70\u67FB\u3057\u3001\u6307\u5B9A\u3055\u308C\u305F\u56DE\u6570\u3060\u3051\u7E70\u308A\u8FD4\u3057\u307E\u3059",emuStopTips:"\u64CD\u4F5C\u3092\u7D42\u4E86\u3057\u3066\u30EB\u30FC\u30EB\u3092\u751F\u6210"};break;case"ru":Ue={import:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",filter:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C",selectAll:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0451",importOrNot:"\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E?",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",batchOpen:"\u0413\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0439 \u043F\u043E\u0438\u0441\u043A",batchOpenConfirm:"\u0418\u0441\u043A\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u0441\u0435\u0445 \u0434\u0432\u0438\u0436\u043A\u043E\u0432 \u0433\u0440\u0443\u043F\u043F\u044B?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E",keywords:"Input keywords",targetUrl:"Input URL",siteName:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",siteDesc:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",siteUrl:"URL",siteIcon:"\u0418\u043A\u043E\u043D\u043A\u0430",siteTest:"\u0422\u0435\u0441\u0442",siteCancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",siteAdd:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",siteType:"\u0413\u0440\u0443\u043F\u043F\u0430",siteExist:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043A\u043B\u043E\u043D?",siteAddOver:"\u0414\u0432\u0438\u0436\u043E\u043A \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D",multiline:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A?",multilineTooMuch:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u043E\u043A \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 10. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A?",inputPlaceholder:"\u0424\u0438\u043B\u044C\u0442\u0440\u044B",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"\u0414\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter",pickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C",multiPickerBtn:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u043B\u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Ctrl \u0438\u043B\u0438 Command",editBtn:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u0441\u043A\u0430",emptyBtn:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430",copyInPageBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u0438\u043A\u0430",wordModeBtn:"\u0420\u0435\u0436\u0438\u043C \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u043B\u043E\u0432\u0430\u043C. \u0412 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u043B\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043A\u0430\u0442\u044C\u0441\u044F \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",copyEleBtn:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",openLinkBtn:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",maxEleBtn:"\u0420\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",minEleBtn:"\u0421\u0436\u0430\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",expandAll:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",collapseAll:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0451",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u043E\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0432\u043E \u0432\u0441\u0435\u0445 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u0445",locBtn:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438",filterSites:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0432\u0438\u0436\u043A\u0438",searchInPage:"\u0418\u0441\u043A\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",removeBtn:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430",saveRuleBtn:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0438\u0441\u043A\u0430 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430",wordContent:"\u0421\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430",wordHide:"Hide parent element",wordHideTips:"\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, 0 - \u044D\u0442\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",wordStyle:"\u0421\u0442\u0438\u043B\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0432\u0430",wordTitle:"\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F \u043A \u0438\u0441\u043A\u043E\u043C\u043E\u043C\u0443 \u0441\u043B\u043E\u0432\u0443",re:"RegExp",ignoreCase:"\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440",filterLink:"\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",modify:"\u0413\u043E\u0442\u043E\u0432\u043E",cancel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",modifyWord:"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",addSearchEngine:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0432\u0438\u0436\u043E\u043A",noValidItemAsk:"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0425\u043E\u0442\u0438\u0442\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0430\u0439\u0442?",expand:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044B",add:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",addWord:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",wordRange:"\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u0430",customInputFrame:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0438\u0441\u043A\u0430",customSubmit:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C",finalSearch:"\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",search:"\u0418\u0441\u043A\u0430\u0442\u044C \u044D\u0442\u043E",siteKeywords:"\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (\u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C |)",siteMatch:"Regexp \u0434\u043B\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F URL \u0441\u0430\u0439\u0442\u0430",openSelect:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432",openInDefault:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",openInNewTab:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",openInCurrent:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",currentType:"Current",maxAddSiteBtn:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",minAddSiteBtn:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",addAction:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",crawlInfo:"\u0421\u0438\u043C\u0443\u043B\u044F\u0446\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",inputAction:"\u0412\u0432\u043E\u0434",clickAction:"\u041A\u043B\u0438\u043A \u043C\u044B\u0448\u0438",sleepAction:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",copyAction:"\u{1F4C4}\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442",submitCrawl:"\u2611\uFE0F\u0417\u0430\u0432\u0435\u0448\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",inputOutput:'\u0412\u0432\u043E\u0434 <span title="#t2#">#t2#</span> \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t1#" class="element">#t1#</span>',clickOutput:'\u041A\u043B\u0438\u043A \u043F\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 <span title="#t#" class="element">#t#</span>',dblclickOutput:'\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A <span title="#t#" class="element">#t#</span>',rclickOutput:'\u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u041F\u041A\u041C <span title="#t#" class="element">#t#</span>',copyOutput:'\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 <span title="#t#" class="element">#t#</span>',sleepOutput:'\u0416\u0434\u0430\u0442\u044C <span title="#t#">#t#</span> \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434',inputNewValue:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",deleteConfirm:"\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442? ",sleepPrompt:"\u0412\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F (\u0432 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445)",startCache:"\u041D\u0430\u0447\u0430\u043B\u043E\u0441\u044C \u043A\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443!",cacheOver:"\u0412\u0441\u0435 \u0438\u043A\u043E\u043D\u043A\u0438 \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u044B!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 "#t#"',recordAction:"\u23FA\uFE0F\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",startRecord:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. \u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter, \u0447\u0442\u043E\u0431\u044B \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043E\u043A\u043D\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.",loopAction:"\u{1F501}\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B",loopActionEnd:"\u23F9\uFE0F\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopStart:'\u041D\u0430\u0447\u0430\u0442\u044C \u0446\u0438\u043A\u043B <span title="#t#">#t#</span> \u0440\u0430\u0437',loopEnd:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0446\u0438\u043A\u043B",loopTimes:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u043A\u043B\u043E\u0432, \u0432\u0441\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u044B \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"\u0412\u0432\u0435\u0441\u0442\u0438 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430).",emuClickTips:"\u041A\u043B\u0438\u043A\u043D\u0443\u0442\u044C \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u043E \u043A\u043D\u043E\u043F\u043A\u0435)",emuWaitTips:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C. \u041F\u043E\u043B\u0435\u0437\u043D\u043E, \u043A\u043E\u0433\u0434\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F",emuCopyTips:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",emuRecordTips:"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0432\u0432\u043E\u0434\u0430",emuLoopTips:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0446\u0438\u043A\u043B, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437",emuStopTips:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"};break;default:Ue={import:"Import",filter:"Filter",selectAll:"SelectAll",importOrNot:"Do you want to import this config?",settings:"Settings",batchOpen:"Batch open",batchOpenConfirm:"Batch open urls?",postOver:"Post over: ",postError:"Post fail: ",copyOver:"Copied successfully",keywords:"Input keywords",targetUrl:"Input URL",siteName:"Site Name",siteDesc:"Description",siteUrl:"Site Url",siteIcon:"Site Icon",siteTest:"Test",siteCancel:"Cancel",siteAdd:"Add",siteType:"Category",siteExist:"Site is already exist, add it as clone?",siteAddOver:"Site added successfully",multiline:"Search as multilines?",multilineTooMuch:"The number of lines exceeds 10, do you want to continue searching?",inputPlaceholder:"Filter engines",inputTitle:'Filter engines, support * ? wildcards, $ means end, ^ means start, type name**site name to filter type like "image**google", tab to next. ',inputKeywords:"Enter search keywords",inPageTips:`Custom delimiter: $c + delimiter, such as $c| search | jumper, space as delimiter by default
Original text without delimited: $o + text, such as $oopai liked by hero
Regular expression: /re/, such as $c, /google/i , /aPPle/
Tips text: search text$t{tips text}, such as linux$t{linux is not unix}
Custom style: Search text$s{background;other}, such as google$s{#333333;color:red;}
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"Input text, press Enter to find in the page",pickerBtn:"Pick a element",multiPickerBtn:"Pick a element, pick multi elements with Ctrl or Command",editBtn:"Edit search text",emptyBtn:"Empty search text",copyInPageBtn:"Copy search text",wordModeBtn:"Word mode",copyEleBtn:"Copy selected elements",openLinkBtn:"Open selected links",maxEleBtn:"Expand selected elements",minEleBtn:"Collapse selected elements",expandAll:"Expand All",collapseAll:"Collapse All",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"Pin search text to search in all tabs",locBtn:"Sidebar to locate",filterSites:"Search engines",searchInPage:"Find in page",removeBtn:"Remove search term",saveRuleBtn:"Save the search term of the current site",wordContent:"Search word content",wordHide:"Hide parent element",wordHideTips:"Element depth, 0 means the current",wordStyle:"Search word style",wordTitle:"Search word annotation",re:"RegExp",ignoreCase:"Ignore case",filterLink:"Filter link",modify:"Modify",cancel:"Cancel",modifyWord:"Modify search word",addSearchEngine:"Add search engine",noValidItemAsk:"No valid element found, do you want to manually edit the rule and add it?",expand:"Expand other sites",add:"Add",addWord:"Add new word",wordRange:"Effective range",customInputFrame:"Custom search parameters",customSubmit:"Submit",finalSearch:"Target search string",search:"Search this",siteKeywords:"Keywords(split by |)",siteMatch:"Regexp to match site URL",openSelect:"Open option",openInDefault:"Default",openInNewTab:"Open a new tab",openInCurrent:"Open in current",currentType:"Current",maxAddSiteBtn:"Maximize",minAddSiteBtn:"Restore",addAction:"Add Actions",crawlInfo:"Analog input search",inputAction:"Input",clickAction:"Click",sleepAction:"Wait",copyAction:"\u{1F4C4}Copy element",submitCrawl:"\u2611\uFE0FComplete operation",inputOutput:'Input <span title="#t2#">#t2#</span> in the element <span title="#t1#" class="element">#t1#</span>',clickOutput:'Click on element <span title="#t#" class="element">#t#</span>',dblclickOutput:'Double click <span title="#t#" class="element">#t#</span>',rclickOutput:'Right click <span title="#t#" class="element">#t#</span>',copyOutput:'Copy element <span title="#t#" class="element">#t#</span>',sleepOutput:'Sleep for <span title="#t#">#t#</span> milliseconds',inputNewValue:"Please enter a new value",deleteConfirm:"Are you sure you want to delete this item? ",sleepPrompt:"Wait time (milliseconds)",startCache:"Start cache icons of engines, do not close this page!",cacheOver:"All icons cached!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'Please set the value of "#t#"',recordAction:"\u23FA\uFE0FRecord operation",startRecord:"Start to record operation, press Enter to end",loopAction:"\u{1F501}Start loop",loopActionEnd:"\u23F9\uFE0FStop loop",loopStart:'Start loop <span title="#t#">#t#</span> times',loopEnd:"Stop loop",loopTimes:"Number of loops, all matching elements will be traversed and executed sequentially",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"Enter search terms in specified page elements (such as input boxes)",emuClickTips:"Click on a specified page element (such as a button)",emuWaitTips:"Wait for a while before continuing, useful when an operation takes a while to complete",emuCopyTips:"Copy the text of the specified element to the clipboard",emuRecordTips:"Record the next clicks and input operations",emuLoopTips:"Start the loop, the next operation will traverse all found elements and repeat the specified number of times",emuStopTips:"End the operation and generate rules"};break}}function A(l,e){return Ue[l]?e?Ue[l].replace(/#t#/g,e).replace(/#t1#/g,e[0]).replace(/#t2#/g,e[1]):Ue[l]:l}const Wt="ontouchstart"in document.documentElement;var lr=!0,pe=(l,e)=>{lr&&console.log(`%c\u3010SearchJumper v.${pt.script.version}\u3011 ${e||"debug"}`,"color: orange;font-size: large;font-weight: bold;",l)},Ke=!1,at=!1,ri;function Q(l=""){return si?si.createHTML(l):l}var Be,nt,Ce,He,ge,Me,pt,qe;if(typeof GM_xmlhttpRequest<"u")Be=GM_xmlhttpRequest,qe=!0;else if(typeof GM<"u"&&typeof GM.xmlHttpRequest<"u")Be=GM.xmlHttpRequest,qe=!0;else{let l;Be=e=>{fetch(e.url,{method:e.method||"GET",body:e.data,headers:e.headers}).then(t=>(l=t,e.responseType==="blob"?t.blob():t.text())).then(t=>{let r=document.implementation.createHTMLDocument("");r.documentElement.innerHTML=Q(t),e.onload&&e.onload({status:l.status,response:t,responseXML:r})}).catch(t=>e.onerror&&e.onerror(t))}}qe?qe=async(l,e)=>l?(ri=l,new Promise((t,r)=>{let i=e&&/^post$/i.test(e.method),a={method:e&&e.method||"GET",url:l,headers:e&&e.headers||{referer:l,origin:l,"Content-Type":i?"application/x-www-form-urlencoded":"","X-Requested-With":i?"XMLHttpRequest":""},onload:function(n){if(ri!=l)return;let s=n.response;(n.status>=400||!s)&&(s=""),t({text:()=>new Promise(d=>{d(s)}),json:()=>new Promise(d=>{try{d(JSON.parse(s))}catch{d(null)}}),finalUrl:n.finalUrl||l})},onerror:function(n){pe(n),r(n)},ontimeout:function(n){pe(n),r(n)}};e&&e.body&&(a.data=e.body),e&&e.responseType==="stream"&&(a.responseType="stream",delete a.onload,a.onloadstart=n=>{if(!n||!n.response||!n.response.getReader)return;let s=[],o,p;const d=n.response.getReader();let f=()=>{let g="";try{return p&&(g=p.trim(),/^data:/.test(g)?g="["+g.replace(/^data:\s+\[DONE\]\s*/m,"").trim().replace(/\n+/g,`
`).split(`
`).map(u=>u.replace(/^data:/,"")).join(",")+"]":/^({.*} *\n)* *{.*}$/.test(g)?g=g.split(`
`).pop():/^\[[\s\S]+[^\]]$/.test(g)&&(g=g+"]")),JSON.parse(g)}catch{return null}};d.read().then(function g({done:u,value:m}){if(ri==l){if(u){t({text:p,json:f,finalUrl:n.finalUrl||l});return}s=e.streamMode==="standalone"?Array.from(m):s.concat(Array.from(m));try{p=new TextDecoder("utf-8").decode(new Uint8Array(s)),e.onstream({text:p,json:f,finalUrl:n.finalUrl||l})}catch(y){console.log(y)}return d.read().then(g)}})}),Be(a)})):null:qe=fetch,St?nt=(l,e)=>{}:typeof GM_registerMenuCommand<"u"?nt=GM_registerMenuCommand:typeof GM<"u"&&typeof GM.registerMenuCommand<"u"?nt=GM.registerMenuCommand:nt=(l,e)=>{},typeof GM_openInTab<"u"?ge=GM_openInTab:typeof GM<"u"&&typeof GM.openInTab<"u"?ge=GM.openInTab:ge=(l,e)=>{window.open(l)},typeof GM_notification<"u"?Ce=l=>GM_notification({text:l,onclick:e=>ge(Ae,{active:!0})}):typeof GM<"u"&&typeof GM.notification<"u"?Ce=l=>GM.notification({text:l,onclick:e=>ge(Ae,{active:!0})}):Ce=l=>{},typeof GM_setClipboard<"u"?He=GM_setClipboard:typeof GM<"u"&&typeof GM.setClipboard<"u"?He=GM.setClipboard:He=(l,e)=>{try{nr.writeText(l).then(()=>{console.log("Text copied to clipboard")}).catch(t=>{document.execCommand("copy"),console.error("Failed to copy text: ",t)})}catch{document.execCommand("copy")}},Me=l=>{if(l=l.replace(/\n\s*/g,""),typeof GM_addStyle<"u")return GM_addStyle(l);{let e=document.createElement("style");return e.innerHTML=Q(l),document.head.appendChild(e),e}},typeof GM_info<"u"?pt=GM_info:typeof GM<"u"&&typeof GM.info<"u"?pt=GM.info:pt={script:{name:"SearchJumper",version:0}},ye.searchJumperAddons||(ye.searchJumperAddons=[]);const Wi=document.referrer;let de=location.href.slice(0,500);var U={supportGM:typeof GM_getValue=="function"&&typeof GM_getValue("a","b")<"u",supportGMPromise:typeof GM<"u"&&typeof GM.getValue=="function"&&typeof GM.getValue("a","b")<"u",supportCrossSave:function(){return this.supportGM||this.supportGMPromise},listItemCache:[],mxAppStorage:(function(){try{return window.external.mxGetRuntime().storage}catch{}})(),operaUJSStorage:(function(){try{return window.opera.scriptStorage}catch{}})(),setItem:function(l,e){this.supportGMPromise?(GM.setValue(l,e),e===""&&typeof GM<"u"&&typeof GM.deleteValue<"u"&&GM.deleteValue(l)):this.supportGM?(GM_setValue(l,e),e===""&&typeof GM_deleteValue<"u"&&GM_deleteValue(l)):this.operaUJSStorage?this.operaUJSStorage.setItem(l,e):this.mxAppStorage?this.mxAppStorage.setConfig(l,e):window.localStorage&&window.localStorage.setItem(l,e)},getItem:async function(l,e){var t;return this.supportGMPromise?t=await GM.getValue(l):this.supportGM?t=GM_getValue(l):this.operaUJSStorage?t=this.operaUJSStorage.getItem(l):this.mxAppStorage?t=this.mxAppStorage.getConfig(l):window.localStorage&&(t=window.localStorage.getItem(l)),e&&e(t),t},getListItem:async function(l,e){var t=this.listItemCache[l];if(typeof t>"u"&&(t=await this.getItem(l),this.listItemCache[l]=t||null),!t)return null;for(var r=0;r<t.length;r++){let i=t[r];if(i.k==e)return i.v}return null},setListItem:async function(l,e,t){var r=this.listItemCache[l];typeof r>"u"&&(r=await this.getItem(l)),r||(r=[]),r=r.filter(i=>i&&i.k!=e),t&&(r.unshift({k:e,v:t}),r.length>50&&r.pop()),this.setItem(l,r),this.listItemCache[l]=r}};class cr{constructor(e,t,r){this.webDAVUrl=e,this.username=t,this.password=r}init(){this.inited||(this.inited=!0,this.auth=btoa(`${this.username}:${this.password}`))}request(e,t,r,i,a,n){{this.init();let s=this.webDAVUrl+r,o={referer:s,origin:s,"Content-Type":"text/xml; charset=UTF-8",Authorization:`Basic ${this.auth}`};for(let p in n)o[p]=n[p];Be({method:e,url:s,data:t,headers:o,onload:function(p){let d=p.response;if((p.status>=400||!d)&&(d=""),i=="xml"){var f=p.responseXML;f&&(d=f.firstChild.nextSibling?f.firstChild.nextSibling:f.firstChild)}a&&a(d)},onerror:function(p){pe(p),a&&a(p)},ontimeout:function(p){pe(p),a&&a(p)}})}}GET(e,t){return this.request("GET",null,e,"text",t,{})}PROPFIND(e,t){return this.request("PROPFIND",null,e,"xml",t,{Depth:"1"})}MKCOL(e,t){return this.request("MKCOL",null,e,"text",t,{})}DELETE(e,t){return this.request("DELETE",null,e,"text",t,{})}PUT(e,t,r){return this.request("PUT",t,e,"text",r,{})}async read(e){let t=this;return new Promise(r=>{t.GET(e,r)})}async write(e,t){let r=this;return new Promise(i=>{r.PUT(e,t,i)})}async rm(e){let t=this;return new Promise(r=>{t.DELETE(e,r)})}}var ot;async function Dt(l,e){if(Te)return;let t=await U.getItem("searchData");if(t&&(c=t),!ot)return l&&l();if(!e){let r=await ot.read("lastModified");if(r&&(r=parseFloat(r)),r&&(!c.lastModified||r>c.lastModified)){c.lastModified=r,jt=c.lastModified;let i=await ot.read("sitesConfig.json");if(i)try{i=JSON.parse(i),c.sitesConfig=i}catch(n){pe(n)}let a=await ot.read("inPageRule.json");if(a)try{a=JSON.parse(a),c.prefConfig.inPageRule=a}catch(n){pe(n)}}}l&&l(),await ot.write("lastModified",""+c.lastModified),await ot.write("sitesConfig.json",JSON.stringify(c.sitesConfig)),await ot.write("inPageRule.json",JSON.stringify(c.prefConfig.inPageRule))}var si;ye.trustedTypes&&ye.trustedTypes.createPolicy&&(si=ye.trustedTypes.createPolicy("searchjumper_default",{createHTML:(l,e)=>l}));const ai=Object.getPrototypeOf(async function(){}).constructor;typeof String.prototype.replaceAll!="function"&&(String.prototype.replaceAll=function(l,e){var t=this;return t.split(l).join(e)}),typeof String.prototype.endsWith!="function"&&(String.prototype.endsWith=function(l,e){return(e===void 0||e>this.length)&&(e=this.length),this.substring(e-l.length,e)===l}),typeof String.prototype.startsWith!="function"&&(String.prototype.startsWith=function(l,e){return this.slice(e||0,l.length)===l});function V(l){return l.body||l.querySelector("body")}function ht(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientX:0:l.clientX}function dt(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientY:0:l.clientY}function pr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageX:0:l.pageX}function hr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageY:0:l.pageY}function dr(l,e,t){t=t||document,e=e||t;var r=[];try{for(var i=t.evaluate(l,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),a=0;a<i.snapshotLength;a++){var n=i.snapshotItem(a);n.nodeType===1&&r.push(n)}}catch{pe(`Invalid xpath: ${l}`)}return r}function ur(l,e,t){t=t||document,e=e||t;try{let r=(a,n,s)=>{let o=n.evaluate(a,s,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);return o.singleNodeValue&&o.singleNodeValue.nodeType===1&&o.singleNodeValue},i=l.split(" =>> ");if(i.length===2){let a=r(i[0],t,e);if(a&&a.shadowRoot)return r(i[1],a.shadowRoot,a.shadowRoot)}else return r(l,t,e)}catch{return pe(`Invalid xpath: ${l}`),!1}}function Di(l){return l?/^\(*(descendant::|\.\/|\/\/|id\()/.test(l):!1}function ni(l,e,t){e||(e=document);try{if(!Di(l))return e.querySelectorAll(l)}catch(r){pe(r,"Error selector")}return dr(l,t,e)}function bt(l,e){e||(e=document);try{if(!Di(l)){let t=l.split(" =>> ");if(t.length===2){let r=e.querySelector(t[0]);return r&&r.shadowRoot&&r.shadowRoot.querySelector(t[1])}else return e.querySelector(l)}}catch(t){pe(t)}return ur(l,e,e)}function fr(l,e){for(var t=l.offsetTop,r=l.offsetParent;r;)t+=r.offsetTop,r=r.offsetParent;if(e){for(r=e;r;)t+=r.offsetTop,r=r.offsetParent;try{let i=e.contentWindow.parent;for(e=i.frameElement;e;){for(r=e;r;)t+=r.offsetTop,r=r.offsetParent;i=i.parent,e=i.frameElement}}catch{}}return t}function Or(l){for(var e=l.offsetLeft,t=l.offsetParent;t;)e+=t.offsetLeft,t=t.offsetParent;if(!document.isSameNode(l.ownerDocument)){let r=document.getElementsByTagName("iframe");for(let i=0;i<r.length;i++){let a=r[i],n;try{n=a.contentDocument||a.contentWindow.document}catch{break}if(n.isSameNode(l.ownerDocument)){for(t=a;t;)e+=t.offsetLeft,t=t.offsetParent;break}}}return e}function oi(l){const e=l.activeElement;return e?e.shadowRoot?oi(e.shadowRoot):e:null}function Ji(l){if(l&&(/INPUT|TEXTAREA/i.test(l.nodeName)&&l.getAttribute("aria-readonly")!="true"||l.contentEditable=="true"))return!0;for(;l&&l.nodeName;){if(l.contentEditable=="true")return!0;if(l.nodeName.toUpperCase()=="BODY")break;l=l.parentNode}return!1}function Ct(l){let e=oi(l);return Ji(e)}async function mr(l){for(;document.hidden;)await $e(500);var e=100,t="\uF0C8",r=function(){var i,a;e-=1,i=document.createElement("canvas"),i.width=20,i.height=20,a=i.getContext("2d",{willReadFrequently:!0}),a.fillStyle="rgba(0,0,0,1.0)",a.fillRect(0,0,20,20),a.font="16pt FontAwesome",a.textAlign="center",a.fillStyle="rgba(255,255,255,1.0)",a.fillText(t,10,18);var n=a.getImageData(2,10,1,1).data;n[0]==0&&n[1]==0&&n[2]==0?(a.font='16pt "Font Awesome 6 Free"',a.fillText(t,10,18),n=a.getImageData(2,10,1,1).data,n[0]==0&&n[1]==0&&n[2]==0?e>0&&setTimeout(r,150):typeof l=="function"&&l()):typeof l=="function"&&l()};setTimeout(r,100)}var lt,L,Se=[],ae=!1,li=!1,Ee,xt,tt,Oe,Tt,Ge,be,Ve,kt,Le,Pe,Je=[],Jt=[],It,Ne,Ye,zt,Rt,zi,ci,Ri=!1,jt=0,_e;const pi=`<svg class="search-jumper-logoBtnSvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>${pt.script.name}</title><path d="M.736 510.464c0-281.942 228.335-510.5 510-510.5 135.26 0 264.981 53.784 360.625 149.522 95.643 95.737 149.375 225.585 149.375 360.978 0 281.94-228.335 510.5-510 510.5-281.665 0-510-228.56-510-510.5zm510-510.5v1021m-510-510.5h1020" fill="#fefefe"/><path d="M237.44 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM699.904 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM423.296 759.296c-64 0-115.712-52.224-115.712-115.712 0-26.624 9.216-52.224 25.6-72.704 9.216-11.776 26.112-13.312 37.888-4.096s13.312 26.112 4.096 37.888c-9.216 11.264-13.824 24.576-13.824 38.912 0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-4.096-.512-8.192-1.024-11.776-2.56-14.848 6.656-28.672 21.504-31.744 14.848-2.56 28.672 6.656 31.744 21.504 1.536 7.168 2.048 14.336 2.048 22.016-.512 63.488-52.224 115.712-116.224 115.712z" fill="#333"/><path d="M602.08 760.296c-64 0-115.712-52.224-115.712-115.712 0-14.848 12.288-27.136 27.136-27.136s27.136 12.288 27.136 27.136c0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-15.36-5.632-30.208-15.872-41.472-9.728-11.264-9.216-28.16 2.048-37.888 11.264-9.728 28.16-9.216 37.888 2.048 19.456 21.504 29.696 48.64 29.696 77.824 0 62.976-52.224 115.2-116.224 115.2z" fill="#333"/><ellipse ry="58" rx="125" cy="506.284" cx="201.183" fill="#faf"/><ellipse ry="58" rx="125" cy="506.284" cx="823.183" fill="#faf"/></svg>`,ut="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==",hi="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDI5LjAxMzMzMyA2NDBBMzIgMzIgMCAwIDEgMzg0IDU5NC45ODY2NjdsMzcuNzYtMzcuNzYtMjIuODI2NjY3LTIyLjYxMzMzNC0xMzUuNjggMTM1LjY4IDkwLjQ1MzMzNCA5MC40NTMzMzQgMTM1LjY4LTEzNS42OC0yMi42MTMzMzQtMjIuNjEzMzM0ek01MzQuNjEzMzMzIDM5OC45MzMzMzNsMjIuNjEzMzM0IDIyLjYxMzMzNEw1OTQuOTg2NjY3IDM4NEEzMiAzMiAwIDAgMSA2NDAgNDI5LjAxMzMzM2wtMzcuNzYgMzcuNzYgMjIuNjEzMzMzIDIyLjYxMzMzNCAxMzUuNjgtMTM1LjY4LTkwLjQ1MzMzMy05MC40NTMzMzR6IiBmaWxsPSIjNUU1QzVDIj48L3BhdGg+PHBhdGggZD0iTTUxMiAyMS4zMzMzMzNhNDkwLjY2NjY2NyA0OTAuNjY2NjY3IDAgMSAwIDQ5MC42NjY2NjcgNDkwLjY2NjY2N0E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAwIDAgNTEyIDIxLjMzMzMzM3ogbTMxNi44IDM1NC45ODY2NjdsLTE4MS4xMiAxODEuMTJhMzIgMzIgMCAwIDEtNDUuMjI2NjY3IDBMNTU3LjIyNjY2NyA1MTIgNTEyIDU1Ny4yMjY2NjdsNDUuMjI2NjY3IDQ1LjIyNjY2NmEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMGwtMTM1LjY4LTEzNS42OGEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wxODEuMTItMTgxLjEyYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwTDQ2Ni43NzMzMzMgNTEyIDUxMiA0NjYuNzczMzMzbC00NS4yMjY2NjctNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBsMTM1LjY4IDEzNS42OGEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N3oiIGZpbGw9IiM1RTVDNUMiPjwvcGF0aD4KPC9zdmc+",Hi='<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>',di="%s[lurest]?\\b",ft=new RegExp(di);var $,ui,Et,Ze,Oi=!1;function gr(l,e,t){if(!l&&!e&&!t){let B=new Date,W=B.getFullYear(),P=B.getMonth(),H=B.getDate();l=B.getFullYear(),e=B.getMonth()+1,t=B.getDate()}let r=2e3,i=2,a=5,n=[51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],s="\u6B63\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u51AC\u81D8",o="\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u521D\u5EFF",p="\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678",d="\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5",f="\u9F20\u725B\u864E\u5154\u9F8D\u86C7\u99AC\u7F8A\u7334\u96DE\u72D7\u8C6C";function g(B,W,P){W-=1;let H=(Date.UTC(B,W,P)-Date.UTC(r,i-1,a))/(1440*60*1e3)+1,O,Y,b,k;for(let j=0;j<n.length;j++)if(H-=y(n[j]),H<=0){O=r+j,k=n[j],H+=y(k);break}if(!k)return null;for(let j=0;j<T(k).length;j++)if(H-=T(k)[j],H<=0){u(k)&&u(k)<=j?u(k)<j?Y=j:u(k)===j?Y="\u95F0"+j:Y=j+1:Y=j+1,H+=T(k)[j];break}return b=H,u(k)&&typeof Y=="string"&&Y.indexOf("\u95F0")>-1?Y=`\u95F0${s[/\d/.exec(Y)-1]}`:Y=s[Y-1],O=E(O)+x(O),b<11?b=`${o[10]}${o[b-1]}`:b>10&&b<20?b=`${o[9]}${o[b-11]}`:b===20?b=`${o[1]}${o[9]}`:b>20&&b<30?b=`${o[11]}${o[b-21]}`:b===30&&(b=`${o[2]}${o[9]}`),{lunarYear:O,lunarMonth:Y,lunarDay:b}}function u(B){return B&15?B&15:!1}function m(B){return u(B)?B&983040?30:29:0}function y(B){let W=0;for(let P=32768;P>8;P>>=1){let H=B&P?30:29;W+=H}return u(B)&&(W+=m(B)),W}function T(B){let W=[];for(let P=32768;P>8;P>>=1)W.push(B&P?30:29);return u(B)&&W.splice(u(B),0,m(B)),W}function E(B){let W=(B-3)%10;return W===0&&(W=10),p[W-1]}function x(B){let W=(B-3)%12;return W===0&&(W=12),W--,d[W]+` (${f[W]}) `}return g(l,e,t)}class yr{constructor(){let e=this;this.scale=c.prefConfig.customSize/100,this.tilesZoom=c.prefConfig.tilesZoom/100,this.tipsZoom=c.prefConfig.tipsZoom/100,Et=`
                 #search-jumper {
                     font-size: 16px;
                 }
                 #search-jumper-root {
                     font-size: initial;
                 }
                 #search-jumper.search-jumper-showall {
                     overflow-y: hidden;
                     pointer-events: all;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     flex-direction: unset;
                     max-width: unset;
                     max-height: unset;
                     text-align: center;
                     top: 0;
                     bottom: unset;
                     height: 100%;
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-searchBar {
                     display: none;
                 }
                 #search-jumper>.search-jumper-searchBar.grabbing>.search-jumper-type {
                     display: none!important;
                 }
                 #search-jumper.search-jumper-showall #filterSites {
                     background-color: #f5f5f5e0;
                     border: none;
                     height: 40px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     box-shadow: #ddd 0px 0px 3px;
                     outline: none;
                     box-sizing: border-box;
                     cursor: default;
                     user-select: none;
                     -webkit-user-select: none;
                     -moz-user-select: none;
                     -khtml-user-select: none;
                     -ms-user-select: none;
                     position: fixed;
                     width: 80%;
                     left: calc(10% - 10px);
                     top: 1%;
                     border-radius: 20px;
                     pointer-events: all;
                 }
                 #search-jumper.search-jumper-showall #filterSites>input,
                 #search-jumper.search-jumper-showall #filterSites>textarea {
                     background-color: white;
                     color: black;
                     border: none;
                     outline: none;
                     box-sizing: border-box;
                     font-size: 20px;
                     cursor: text;
                 }
                 #search-jumper.search-jumper-showall #filterSites>span {
                     display: none;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist {
                     visibility: visible!important;
                     opacity: 1!important;
                     pointer-events: all;
                     text-align: left;
                     position: static;
                     display: block!important;
                     height: fit-content;
                     max-height: calc(100vh - 130px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon {
                     opacity: 1;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist>.sitelistCon>p {
                     pointer-events: all;
                     cursor: pointer;
                     margin: 0 auto;
                 }
                 #search-jumper.search-jumper-showall.searching #search-jumper-alllist .sitelist>.sitelistCon a {
                     display: flex!important;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist:hover {
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall.search-jumper-searchBarCon {
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                     overflow: hidden;
                 }
                 #search-jumper-alllist {
                     display: none;
                     top: 101px;
                     position: absolute;
                     width: 100%;
                     overflow-x: auto;
                     overflow-y: hidden;
                     height: calc(100% - 101px);
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 #search-jumper-alllist>.search-jumper-btn {
                     position: fixed;
                     top: 1%;
                     right: 10%;
                     filter: drop-shadow(1px 1px 3px #00000060);
                     cursor: pointer;
                     pointer-events: all;
                     z-index: 1;
                     width: 32px;
                     height: 32px;
                 }
                 #search-jumper-alllist>.search-jumper-btn>svg {
                     cursor: pointer;
                     width: 32px;
                     height: 32px;
                 }
                 .search-jumper-showallBg {
                     display: none;
                     position: fixed;
                     left: 0;
                     top: 0;
                     width: 100%;
                     height: 100%;
                     z-index: -1;
                     transform: translateZ(0);
                     ${c.prefConfig.noAni?"background-color: rgba(0, 0, 0, 0.1);":"background-color: rgba(0, 0, 0, 0.1);transition:background-color .6s ease;"}
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist:hover~.search-jumper-showallBg {
                     background-color: rgba(0, 0, 0, 0.8);
                 }
                 #search-jumper.search-jumper-showall>.search-jumper-showallBg {
                     display: block;
                 }
                 #search-jumper>.groupTab {
                     position: fixed;
                     background: #ffffffee !important;
                     left: 0;
                     top: 0;
                     overflow: hidden;
                     height: 100%;
                     overflow: auto;
                     scrollbar-width: none;
                     padding: 20px 0;
                     box-sizing: border-box;
                     display: none;
                     z-index: 1;
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist.new-mode+.groupTab {
                     display: block;
                 }
                 #search-jumper.search-jumper-showall>.groupTab::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span {
                     display: block;
                     width: ${42*this.scale}px;
                     transition: all 0.25s ease;
                     cursor: pointer;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span>span.search-jumper-word {
                     opacity: 0.8;
                 }
                 #search-jumper.search-jumper-showall>.groupTab:hover>span {
                     width: ${42*this.scale+150}px;
                 }
                 #search-jumper.search-jumper-showall>.groupTab>span:hover{
                     background: #f5f7fa !important;
                 }
                 #search-jumper.search-jumper-showall>.groupTab:hover>span::after {
                     content: attr(data-type);
                     color: #6b6e74;
                     position: absolute;
                     margin-top: -${21*this.scale+10}px;
                     left: ${42*this.scale+5}px;
                     white-space: nowrap;
                     font-weight: bold;
                 }
                 .search-jumper-historylistcon {
                     display: flex;
                     position: fixed;
                     width: 100%;
                     max-width: 100%;
                     overflow: auto;
                     justify-content: center;
                     left: 0;
                     top: 60px;
                     background: #ffffffee;
                     border-bottom: 1px solid #ddd;
                     pointer-events: all;
                     min-height: 40px;
                     -ms-overflow-style: unset;
                     scrollbar-width: unset;
                 }
                 .search-jumper-historylistcon::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-historylist {
                     display: flex;
                     max-width: 100%;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist {
                     display: block;
                 }
                 #search-jumper-alllist>.sitelistBox {
                     display: flex;
                     min-width: 100%;
                     justify-content: center;
                     width: fit-content;
                     min-height: 100%;
                     position: initial;
                     transition: all 0.3s ease;
                 }
                 #search-jumper-alllist>.timeInAll,
                 #search-jumper-alllist>.dayInAll {
                     position: fixed;
                     bottom: 0;
                     line-height: 1.5;
                     color: white;
                     opacity: 0.45;
                     font-weight: bold;
                     font-family: Arial,sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     overflow-wrap: normal;
                     white-space: nowrap;
                     margin: 20px;
                     pointer-events: none;
                     text-shadow: 0 0 5px black;
                     background-image: initial;
                 }
                 #search-jumper-alllist>.dayInAll {
                     left: 50px;
                     font-size: ${Fe.indexOf("zh")==0?"1.5":"2"}vw;
                 }
                 #search-jumper-alllist>.timeInAll {
                     right: 50px;
                     font-size: 2vw;
                 }
                 #search-jumper-alllist>.modeSwitch {
                     position: fixed;
                     top: 5px;
                     right: 5px;
                     width: 45px;
                     height: 45px;
                     border-radius: 50%;
                     box-shadow: 0px 0px 5px 0px #7a7a7a;
                     cursor: pointer;
                     transition: transform 0.25s ease;
                 }
                 #search-jumper-alllist>.modeSwitch>* {
                     pointer-events: none;
                 }
                 #search-jumper-alllist>.modeSwitch:hover {
                     transform: scale(1.1);
                 }
                 #search-jumper-alllist.new-mode {
                     overflow-x: hidden;
                     overflow-y: auto;
                     scrollbar-width: none;
                 }
                 #search-jumper-alllist.new-mode>.sitelistBox {
                     flex-wrap: wrap;
                     flex-direction: column;
                     align-items: center;
                     justify-content: flex-start;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                     width: 78%;
                     max-height: unset;
                     height: auto !important;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                     display: flex;
                     flex-wrap: wrap;
                     padding: 0;
                 }
                 #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon>p {
                     text-align: left;
                     font-size: large;
                     padding: 10px 30px;
                     display: table-caption;
                     width: 100%;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                     width: 240px;
                     height: 100px;
                     display: block!important;
                     padding: 10px 8%;
                     box-sizing: border-box;
                 }
                 #search-jumper.search-jumper-showall.searching #search-jumper-alllist.new-mode .sitelist>.sitelistCon a {
                     display: block!important;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div {
                     padding: 0 10px;
                     border-radius: 5px;
                     transition: transform 0.25s ease, box-shadow 0.25s ease;
                     box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px #9e9e9e1a, 0 1px 2px -1px #9e9e9e1a;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:hover {
                     transform: translateY(-6px);
                     -webkit-transform: translateY(-6px);
                     -moz-transform: translateY(-6px);
                     box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px #0000001a, 0 1px 2px -1px #0000001a;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                     content: attr(title);
                     margin-left: 41px;
                     color: #abb0bd;
                     font-size: 12px;
                     height: 3em;
                     line-height: 1.5em;
                     overflow: hidden;
                     display: -webkit-box;
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     margin-left: 62px;
                     margin-top: 35px;
                     width: 185px;
                     position: absolute;
                     pointer-events: none;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>img {
                     width: 48px;
                     height: 48px;
                     float: left;
                     margin-left: -20px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a>p {
                     -webkit-line-clamp: 2;
                     -webkit-box-orient: vertical;
                     display: block;
                     font-size: 16px;
                     height: 21px;
                     line-height: 21px;
                     margin-bottom: 8px;
                     margin-top: 0px;
                     margin-left: 40px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                 }
                 #search-jumper .sitelist a+p {
                     display: none;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p {
                     position: absolute;
                     margin-top: -28px;
                     color: white;
                     width: 250px;
                     max-width: calc(100% - 20px);
                     display: flex;
                     justify-content: space-evenly;
                     overflow: hidden;
                     opacity: 0;
                     transition: .3s;
                     border-top: 1px solid rgba(136,136,136,.2);
                     padding-top: 3px;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span {
                     flex-shrink: 0;
                     font-size: 14px;
                     padding: 2px 6px;
                     background: rgb(160 160 160 / 10%);
                     color: #888;
                     border-radius: 10px;
                     transition: .3s;
                     cursor: pointer;
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelist a+p>span:hover {
                     color: white;
                     background: rgb(160 160 160 / 30%);
                 }
                 #search-jumper #search-jumper-alllist.new-mode .sitelistCon>div:hover>p {
                     opacity: 1;
                 }
                 #search-jumper #search-jumper-alllist.showbg>.inputGroup,
                 #search-jumper #search-jumper-alllist.showbg>.search-jumper-btn,
                 #search-jumper #search-jumper-alllist.showbg>.search-jumper-historylistcon,
                 #search-jumper #search-jumper-alllist.showbg+.groupTab,
                 #search-jumper #search-jumper-alllist.showbg>.sitelistBox {
                     transition: .3s;
                     opacity: 0;
                 }
                 #search-jumper.search-jumper-showall>#search-jumper-alllist.showbg:hover~.search-jumper-showallBg {
                     background: unset;
                 }
                 .search-jumper-searchBarCon {
                     all: unset;
                     position: fixed;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                     z-index: 2147483646;
                     pointer-events: none;
                     text-align: center;
                     overflow: scroll;
                     display: block;
                     -ms-overflow-style: none;
                     scrollbar-width: none;
                     box-sizing: border-box;
                     z-index: 2147483647;
                     user-select: none;
                 }
                 .search-jumper-searchBar {
                     z-index: 2147483647;
                     overflow-wrap: break-word;
                     background: #505050cc;
                     border-radius: ${this.scale*21}px!important;
                     border: 1px solid #b3b3b3;
                     display: inline-flex;
                     pointer-events: all;
                     margin-top: -${this.scale*25}px;
                     vertical-align: top;
                     ${c.prefConfig.noAni?"":"opacity: 0.8;"}
                     ${c.prefConfig.noAni?"":"transition:margin-top 1s ease, margin-left 1s, right 1s, opacity 1s, transform 1s;"}
                     user-select: none;
                     text-align: center;
                     position: relative;
                     box-sizing: border-box;
                 }
                 .hideAll>.search-jumper-searchBar {
                     margin-top: -${this.scale*40}px;
                 }
                 .search-jumper-searchBarCon:not(.search-jumper-showall)::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll {
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-searchBarCon.search-jumper-scroll>.search-jumper-searchBar {
                     pointer-events: all;
                 }
                 .search-jumper-scroll.search-jumper-bottom {
                     overflow-y: hidden;
                 }
                 .search-jumper-scroll.search-jumper-right>.search-jumper-searchBar {
                     position: absolute !important;
                     top: 0;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-scroll.search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-scroll.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                 }
                 .search-jumper-searchBar:hover {
                     margin-top: 0;
                     opacity: 1;
                     ${c.prefConfig.noAni?"":"transition:margin-top 0.1s ease, margin-left 0.1s, right 0.1s, opacity 0.1s, transform 0.1s;"}
                 }
                 .search-jumper-searchBar.initShow,
                 .resizePage>.search-jumper-searchBar {
                     margin-top: 0;
                     ${c.prefConfig.noAni?"":"transition:margin-top 0.25s ease, margin-left 0.25s, right 0.25s, opacity 0.25s, transform 0.25s;"}
                 }
                 .funcKeyCall>.search-jumper-searchBar.initShow {
                     ${c.prefConfig.noAni?"":"transition:opacity 0.15s ease-out, transform 0.25s ease;"}
                 }
                 #search-jumper.funcKeyCall {
                     overflow: visible;
                     position: absolute;
                     max-width: 100%;
                     width: 100%;
                     top: 0;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     position: absolute!important;
                     background: none;
                     border: none;
                     max-width: unset!important;
                     margin: unset;
                     ${c.prefConfig.minPopup&&!c.prefConfig.noAni?"transition: transform 0.25s ease;":""}
                     ${c.prefConfig.minPopup?"transform: scale(0.7);":""}
                 }
                 .funcKeyCall>.search-jumper-searchBar:hover {
                     ${c.prefConfig.minPopup?"transform: scale(1);":""}
                 }
                 .in-input>.search-jumper-searchBar,
                 .funcKeyCall>.search-jumper-searchBar {
                     opacity: 1;
                     display: inline-flex!important;
                 }
                 .in-input.in-find {
                     pointer-events: none;
                 }
                 .in-input.in-find>.searchJumperNavBar,
                 .in-input.in-find>.search-jumper-input {
                     pointer-events: all;
                 }
                 .in-input.in-find>.search-jumper-searchBar, .in-input>.rectSelecting.search-jumper-searchBar {
                     opacity: 0!important;
                     pointer-events: none;
                     transition: none;
                 }
                 .in-input.in-find>.search-jumper-searchBar:hover {
                     opacity: 1!important;
                 }
                 .in-input.in-find>.search-jumper-input {
                     opacity: 0.6;
                     transition:opacity 0.25s ease;
                 }
                 .in-input.in-find>.search-jumper-input:hover,
                 .in-input.in-find>.search-jumper-input.active {
                     opacity: 1;
                 }
                 .funcKeyCall>.search-jumper-searchBar {
                     flex-direction: column;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type {
                     height: ${c.prefConfig.minPopup?24*this.tilesZoom+"px":"auto"}!important;
                     max-width: ${c.prefConfig.minPopup?24*this.tilesZoom:40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                     width: auto!important;
                     width: max-content!important;
                     max-height: ${108*this.tilesZoom+10}px;
                     flex-wrap: wrap!important;
                     flex-direction: row;
                     padding: 5px;
                     box-shadow: #000000 0px 0px 10px;
                     overflow: auto;
                     scrollbar-width: none;
                     transition: none;
                     background: #d0d0d0d0;
                     box-sizing: content-box;
                 }
                 ${c.prefConfig.hideTileType?`
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:before {
                     content: attr(data-type);
                     position: absolute;
                     background: #ffffffd0;
                     color: black;
                     margin-top: -${22*this.tilesZoom}px;
                     line-height: 1.2;
                     font-size: ${13*this.tilesZoom}px;
                     font-weight: bold;
                     border-radius: ${20*this.tilesZoom}px;
                     padding: 3px 6px;
                     box-shadow: #000000 0px 0px 10px;
                     opacity: 0;
                     pointer-events: none;
                     transition: all 0.5s ease;
                     left: 50%;
                     transform: translate(-50%, 0);
                     z-index: 1;
                     max-width: 100%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>span.search-jumper-btn:first-child {
                     display: none;
                 }
                 #search-jumper.funcKeyCall .search-jumper-type.search-jumper-open.not-expand>a:nth-of-type(${(c.prefConfig.expandTypeLength||12)+1}) {
                     display: grid!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover:before {
                     opacity: 1;
                 }
                 `:""}
                 #search-jumper>.search-jumper-searchBar>.search-jumper-type.search-jumper-open {
                     overflow: visible;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     width: fit-content!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-open:not(.not-expand) {
                     overflow: auto;
                 }
                 #search-jumper.search-jumper-left>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover,
                 #search-jumper.search-jumper-right>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     width: 100%!important;
                     height: fit-content!important;
                 }
                 #search-jumper.search-jumper-bottom>.search-jumper-searchBar>.search-jumper-type.search-jumper-open.search-jumper-move:hover {
                     align-items: flex-end;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type.search-jumper-open {
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     overflow: auto;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist {
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon {
                     margin: 0;
                     padding: 5px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon>p {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.sitelist>.sitelistCon a>img {
                     width: 20px;
                     height: 20px;
                 }
                 ${c.prefConfig.minPopup&&!c.prefConfig.hideTileType?`
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn,
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>.searchJumperExpand {
                     display: none;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn,
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover>.searchJumperExpand {
                     display: grid;
                 }
                 input#search-jumper-tileInput {
                     opacity: 0;
                 }
                 `:""}
                 ${c.prefConfig.minPopup==2?`
                 .funcKeyCall:not(.targetInput)>.search-jumper-searchBar {
                     transform: scale(1);
                 }
                 #search-jumper.funcKeyCall:not(.targetInput)>.search-jumper-searchBar>.search-jumper-type {
                     height: auto!important;
                     width: auto!important;
                     width: max-content!important;
                     max-width: ${40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     display: grid;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type>a.search-jumper-btn {
                     display: none;
                 }
                 #search-jumper.funcKeyCall.targetInput>.search-jumper-searchBar>.search-jumper-type:hover>a.search-jumper-btn {
                     display: grid;
                 }
                 `:""}
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type:hover {
                     height: auto!important;
                     width: auto!important;
                     width: max-content!important;
                     max-width: ${40*(c.prefConfig.numPerLine||7)*this.tilesZoom}px!important;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-type::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 .search-jumper-left,
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right .search-jumper-type,
                 .search-jumper-right>.search-jumper-searchBar {
                     flex-direction: column;
                     max-width: ${42*this.scale}px;
                     max-height: unset;
                 }
                 .search-jumper-left .search-jumper-type,
                 .search-jumper-right .search-jumper-type {
                     max-width: ${40*this.scale}px;
                 }
                 .search-jumper-left,
                 .search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-right,
                 .search-jumper-right>.search-jumper-searchBar {
                     max-width: 100%;
                 }
                 .search-jumper-searchBar.grabbing {
                     max-width: ${42*this.scale}px;
                 }
                 .search-jumper-right .search-jumper-type {
                     align-items: flex-end;
                 }
                 .search-jumper-left {
                     height: 100%;
                     text-align: initial;
                 }
                 .search-jumper-left:not(.search-jumper-showall) {
                     width: initial;
                     width: -webkit-fill-available;
                 }
                 .search-jumper-right {
                     left: unset;
                     right: 0;
                     height: 100%;
                 }
                 .searchJumperExpand {
                     opacity: 0.8;
                 }
                 .search-jumper-type.not-expand:not(.search-jumper-open)>.searchJumperExpand {
                     display: none;
                 }
                 .searchJumperExpand:hover {
                     opacity: 1;
                 }
                 .searchJumperExpand>svg {
                     transform: rotate(-90deg);
                     border-radius: 20px;
                     filter: drop-shadow(0px 0px 2px black);
                     width: unset;
                     height: unset;
                     color: black;
                     fill: black;
                 }
                 .search-jumper-type.search-jumper-open>span.search-jumper-word,
                 #search-jumper.funcKeyCall .search-jumper-type>span.search-jumper-word {
                     filter: drop-shadow(0px 0px 2px black);
                 }
                 .search-jumper-left .searchJumperExpand>svg,
                 .search-jumper-right .searchJumperExpand>svg {
                     transform: unset;
                 }
                 .search-jumper-bottom {
                     top: unset;
                     bottom: 0;
                     height: ${this.scale*42*2}px;
                     max-height: ${this.scale*43*2}px;
                     overflow-y: hidden;
                 }
                 .search-jumper-left>.search-jumper-searchBar {
                     width: fit-content;
                     margin-top: 0;
                     margin-left: -${this.scale*20}px;
                 }
                 .hideAll.search-jumper-left>.search-jumper-searchBar {
                     margin-left: -${this.scale*40}px;
                 }
                 .search-jumper-right>.search-jumper-searchBar {
                     margin-top: 0;
                     right: -${this.scale*20}px;
                     position: fixed;
                 }
                 .hideAll.search-jumper-right>.search-jumper-searchBar {
                     right: -${this.scale*40}px;
                 }
                 .search-jumper-left>.search-jumper-searchBar:hover,
                 .search-jumper-left>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-left>.search-jumper-searchBar,
                 .search-jumper-left.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-left>.search-jumper-searchBar {
                     margin-top: unset;
                     margin-left: 0;
                     opacity: 1;
                 }
                 .search-jumper-right>.search-jumper-searchBar:hover,
                 .search-jumper-right>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-right>.search-jumper-searchBar,
                 .search-jumper-right.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-right>.search-jumper-searchBar {
                     margin-top: unset;
                     right: 0;
                     opacity: 1;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar {
                     position: relative;
                     margin-top: 0px;
                     top: ${this.scale*42}px;
                 }
                 .hideAll.search-jumper-bottom>.search-jumper-searchBar {
                     opacity: 0;
                 }
                 .search-jumper-bottom>.search-jumper-searchBar:hover,
                 .search-jumper-bottom>.search-jumper-searchBar.initShow,
                 .resizePage.search-jumper-bottom>.search-jumper-searchBar,
                 .search-jumper-bottom.funcKeyCall>.search-jumper-searchBar,
                 #search-jumper.in-input.search-jumper-bottom>.search-jumper-searchBar {
                     margin-top: 0px;
                     opacity: 1;
                 }
                 .search-jumper-btn {
                     position: relative;
                     display: grid;
                     --scale: 1;
                     padding: ${1*this.scale}px!important;
                     margin: ${3*this.scale}px!important;
                     cursor: pointer;
                     box-sizing: content-box;
                     ${c.prefConfig.noAni?"":"transition:margin-left 0.25s ease, width 0.25s, height 0.25s, transform 0.25s, background 0.25s;"}
                     width: calc(${32*this.scale}px * var(--scale));
                     height: calc(${32*this.scale}px * var(--scale));
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     text-decoration:none;
                     min-width: ${32*this.scale}px;
                     min-height: ${32*this.scale}px;
                     text-align: center;
                     background-image: initial;
                     filter: drop-shadow(1px 1px 3px #00000030);
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn {
                     padding: ${1*this.tilesZoom}px!important;
                     margin: ${3*this.tilesZoom}px!important;
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                     border-radius: ${10*this.tilesZoom}px;
                     filter: drop-shadow(1px 1px 3px #00000060);
                 }
                 #search-jumper.funcKeyCall a.search-jumper-btn {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-btn:not(.search-jumper-word)>span {
                     position: absolute;
                     text-align: center;
                     width: 100%;
                     bottom: 0px;
                     color: black!important;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     text-shadow: 0 1px white, 1px 0 white, -1px 0 white, 0 -1px white;
                     font-size: ${12*this.scale}px;
                     font-weight: normal;
                     opacity: 0.8;
                 }
                 #search-jumper.funcKeyCall a.search-jumper-btn:not(.search-jumper-word)>span {
                     font-size: ${12*this.tilesZoom}px;
                 }
                 .search-jumper-type>a.search-jumper-btn.historySite {
                     box-shadow: 0px 0px 6px 0px #00000099;
                 }
                 .search-jumper-btn>img {
                     width: ${32*this.scale}px;
                     height: ${32*this.scale}px;
                     border: unset;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>img {
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     border-radius: unset;
                 }
                 .search-jumper-btn>b {
                     line-height: ${32*this.scale}px;
                     font-size: ${14*this.scale}px;
                     letter-spacing: 0;
                     color: white;
                     opacity: 0.9;
                     text-shadow: 0 0 1px #d9d9d9cc;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>b {
                     line-height: ${32*this.tilesZoom}px;
                     font-size: ${14*this.tilesZoom}px;
                 }
                 .search-jumper-btn:hover>b {
                     opacity: 1;
                 }
                 .search-jumper-btn>div {
                     position: absolute;
                     width: 100%;
                     height: 100%;
                     line-height: ${32*this.scale}px;
                     background: black;
                     border-radius: ${20*this.scale}px;
                     font-size: ${30*this.scale}px;
                     color: wheat;
                     display: none;
                 }
                 #search-jumper.funcKeyCall .search-jumper-btn>div {
                     line-height: ${32*this.tilesZoom}px;
                     border-radius: ${20*this.tilesZoom}px;
                     font-size: ${30*this.tilesZoom}px;
                 }
                 .search-jumper-isInPage .search-jumper-btn>div,
                 .search-jumper-isTargetImg .search-jumper-btn>div,
                 .search-jumper-isTargetAudio .search-jumper-btn>div,
                 .search-jumper-isTargetVideo .search-jumper-btn>div,
                 .search-jumper-isTargetLink .search-jumper-btn>div,
                 .search-jumper-isTargetPage .search-jumper-btn>div {
                     animation-name: changeOpacity;
                     animation-duration: 2s;
                     animation-iteration-count: 3;
                     animation-delay: 0.1s;
                     display: block;
                     opacity: 0;
                 }
                 @keyframes changeOpacity {
                     0%   {opacity: 0;}
                     10%  {opacity: 0;}
                     50%  {opacity: 0.75;}
                     80%  {opacity: 0;}
                     100% {opacity: 0;}
                 }
                 @-webkit-keyframes loader-rotate {
                   from {
                     transform: rotate(0deg);
                   }
                   to {
                     transform: rotate(360deg);
                   }
                 }
                 @keyframes loader-rotate {
                   from {
                     transform: rotate(0deg);
                   }
                   to {
                     transform: rotate(360deg);
                   }
                 }
                 .search-jumper-tips>.loader {
                     border-width: 5px;
                     border-style: solid;
                     border-color: gainsboro gainsboro dodgerblue gainsboro;
                     border-radius: 50%;
                     display: block;
                     width: 25px;
                     float: left;
                     height: 25px;
                     margin-right: 10px;
                     margin-top: 5px;
                     -webkit-animation: loader-rotate 1.5s linear infinite;
                     animation: loader-rotate 1.5s linear infinite;
                 }
                 .search-jumper-tips>.loader+font {
                     font-size: 25px;
                     line-height: 40px;
                 }
                 .search-jumper-tips>div {
                     font-size: initial;
                     line-height: initial;
                     font-weight: normal;
                     padding: 5px;
                     cursor: initial;
                 }
                 .search-jumper-tips>div [data-read],
                 .search-jumper-tips>div [data-close],
                 .search-jumper-tips>div [data-paste],
                 .search-jumper-tips>div [data-copy] {
                     cursor: pointer;
                 }
                 .search-jumper-tips>div [data-search] {
                     cursor: help;
                 }
                 .search-jumper-tips>div [data-close] {
                     position: absolute;
                     top: 0px;
                     right: 0px;
                     width: 20px;
                     height: 20px;
                     color: white;
                     transition:all 0.2s ease;
                 }
                 .search-jumper-tips>div [data-close]:hover {
                     color: red;
                 }
                 .search-jumper-tips>div [data-read] {
                     color: #f9690e;
                 }
                 .search-jumper-tips>div [data-drag] {
                     cursor: grab;
                 }
                 .search-jumper-tips.draging {
                     cursor: grabbing;
                     transition: none;
                 }
                 .search-jumper-tips.draging * {
                     pointer-events: none;
                 }
                 .search-jumper-logoBtnSvg {
                     width: ${32*this.scale}px;
                     height: ${32*this.scale}px;
                     overflow: hidden;
                     vertical-align: top;
                     cursor: grab;
                 }
                 #search-jumper.funcKeyCall .search-jumper-logoBtnSvg {
                     height: ${32*this.tilesZoom}px;
                     width: ${32*this.tilesZoom}px;
                 }
                 .search-jumper-type.search-jumper-targetImg,
                 .search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-type.search-jumper-targetLink,
                 .search-jumper-type.search-jumper-targetPage,
                 .search-jumper-isTargetImg>.search-jumper-type,
                 .search-jumper-isTargetAudio>.search-jumper-type,
                 .search-jumper-isTargetVideo>.search-jumper-type,
                 .search-jumper-isTargetLink>.search-jumper-type,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type {
                     display: none;
                 }
                 #search-jumper.in-input .search-jumper-type.search-jumper-open {
                     width: auto!important;
                     height: auto!important;
                 }
                 #search-jumper.in-input .sitelistCon>div:not(.input-hide)>a {
                     display: flex!important;
                 }
                 #search-jumper .input-hide,
                 #search-jumper.search-jumper-showall #search-jumper-alllist .sitelist.input-hide {
                     display: none!important;
                 }
                 #search-jumper.in-input .search-jumper-type:not(.input-hide) {
                     display: inline-flex!important;
                     flex-wrap: nowrap!important;
                 }
                 #search-jumper.in-input .search-jumper-btn:not(.input-hide) {
                     display: grid!important;
                 }
                 #search-jumper>.search-jumper-searchBar>.search-jumper-logo {
                     display: inline-flex;
                     background: unset;
                     padding: 0px;
                 }
                 #search-jumper.funcKeyCall>.search-jumper-searchBar>.search-jumper-logo {
                     display: none;
                 }
                 .search-jumper-searchBar>.search-jumper-type.search-jumper-targetAll,
                 .search-jumper-searchBar:hover>.search-jumper-type.search-jumper-targetAll {
                     display: inline-flex;
                 }
                 .search-jumper-isInPage>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-isTargetImg>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-isTargetAudio>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-isTargetVideo>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-isTargetLink>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-isTargetPage>.search-jumper-type,
                 .search-jumper-searchBar.search-jumper-isInPage:hover>.search-jumper-type.search-jumper-needInPage,
                 .search-jumper-searchBar.search-jumper-isTargetImg:hover>.search-jumper-type.search-jumper-targetImg,
                 .search-jumper-searchBar.search-jumper-isTargetAudio:hover>.search-jumper-type.search-jumper-targetAudio,
                 .search-jumper-searchBar.search-jumper-isTargetVideo:hover>.search-jumper-type.search-jumper-targetVideo,
                 .search-jumper-searchBar.search-jumper-isTargetLink:hover>.search-jumper-type.search-jumper-targetLink,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type.search-jumper-targetPage,
                 .search-jumper-searchBar.search-jumper-isTargetPage:hover>.search-jumper-type {
                     display: inline-flex;
                 }
                 .search-jumper-type,
                 .search-jumper-logo {
                     display: inline-flex;
                     box-sizing: border-box;
                     background: #d0d0d0;
                     border-radius: ${20*this.scale}px!important;
                     overflow: hidden;
                     padding: 0.2px;
                     height: ${40*this.scale}px;
                     width: ${40*this.scale}px;
                     max-height: ${this.scale*40}px;
                     min-height: ${this.scale*40}px;
                     min-width: ${this.scale*40}px;
                     ${c.prefConfig.noAni?"":`transition:width ${c.prefConfig.typeOpenTime}ms ease, height ${c.prefConfig.typeOpenTime}ms;`}
                 }
                 #search-jumper.funcKeyCall .search-jumper-type,
                 #search-jumper.funcKeyCall .search-jumper-logo {
                     border-radius: ${20*this.tilesZoom}px!important;
                     height: ${40*this.tilesZoom}px;
                     width: ${40*this.tilesZoom}px;
                     max-height: ${this.tilesZoom*40}px;
                     min-height: ${this.tilesZoom*40}px;
                     min-width: ${this.tilesZoom*40}px;
                 }
                 #search-jumper-tileInput {
                     display: none;
                     opacity: 0.3;
                     user-select: all;
                     background-color: #212022;
                     color: #adadad;
                     border: none;
                     font-size: 12px;
                     margin-bottom: 3px;
                     padding: 5px;
                     border-radius: 10px;
                     box-shadow: #adadad 0px 0px 2px;
                     width: 100%;
                     outline: none;
                     box-sizing: border-box;
                     cursor: text;
                     -moz-transition: opacity 0.3s ease;
                     -webkit-transition: opacity 0.3s ease;
                     transition: opacity 0.3s ease;
                 }
                 #search-jumper-tileInput:hover {
                     opacity: 0.95;
                 }
                 #search-jumper.funcKeyCall #search-jumper-tileInput {
                     display: block;
                 }
                 .search-jumper-right>.searchJumperNavBar {
                     right: unset;
                     left: 0;
                 }
                 .search-jumper-right>.searchJumperNavBar>#navMarks+div.navPointer {
                     right: unset;
                     left: 20px;
                     transform: rotate(180deg);
                 }
                 .search-jumper-bottom>.search-jumper-input {
                     bottom: unset;
                     top: 80px;
                 }
                 #search-jumper .search-jumper-type.search-jumper-open.not-expand>a:nth-of-type(${c.prefConfig.expandTypeLength||12})~a {
                     display: none!important;
                 }
                 #search-jumper .sitelist {
                     position: fixed;
                     text-align: left;
                     background: #00000000;
                     max-height: calc(100vh - ${this.scale*42}px);
                     overflow: scroll;
                     border: 0;
                     pointer-events: none;
                     opacity: 0;
                     ${c.prefConfig.noAni?"":"transition:opacity 0.25s ease;"}
                     scrollbar-width: none;
                     box-sizing: content-box;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                     z-index: 1;
                 }
                 #search-jumper .search-jumper-type:hover>.sitelist {
                     pointer-events: all;
                     opacity: 1;
                 }
                 #search-jumper .sitelist>.sitelistCon {
                     margin: 10px;
                     border-radius: 10px;
                     box-shadow: 0px 0px 10px 0px #7a7a7a;
                     padding: 0 0 10px 0;
                     background: #ffffffee;
                     opacity: 1;
                     border: 0;
                 }
                 #search-jumper .sitelist>.sitelistCon:hover {
                     opacity: 1;
                 }
                 #search-jumper .sitelist::-webkit-scrollbar {
                     width: 0 !important;
                     height: 0 !important;
                 }
                 #search-jumper .sitelist>.sitelistCon>div {
                     padding: 0 10px;
                 }
                 #search-jumper .sitelist>.sitelistCon>div:hover {
                     background: #f5f7fa;
                 }
                 #search-jumper .sitelist a {
                     display: flex;
                     align-items: center;
                     text-decoration: none;
                     cursor: pointer;
                 }
                 #search-jumper .sitelist a>img {
                     width: 20px;
                     height: 20px;
                     margin-right: 10px;
                     margin-top: unset;
                     max-width: unset;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a>p {
                     display: inline-block;
                     font-size: 15px;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     line-height: 25px;
                     margin: 5px auto;
                     color: #6b6e74;
                     flex: 1;
                     text-align: left;
                     white-space: nowrap;
                     transform-origin: left;
                     -moz-transition: transform 0.3s ease;
                     -webkit-transition: transform 0.3s ease;
                     transition: transform 0.3s ease;
                 }
                 #search-jumper .sitelist a.dragTarget>img {
                     -webkit-transform:scale(1.5);
                     -moz-transform:scale(1.5);
                     transform:scale(1.5);
                 }
                 #search-jumper .sitelist a.dragTarget>p {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform: scale(1.2);
                 }
                 #search-jumper .sitelist a * {
                     pointer-events: none;
                 }
                 #search-jumper .sitelist>.sitelistCon>p {
                     color: #565656;
                     text-align: center;
                     font-size: 16px;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     font-weight: bold;
                     background: #f6f6f6;
                     border-radius: 10px 10px 0 0;
                     overflow: hidden;
                     white-space: nowrap;
                     text-overflow: ellipsis;
                     padding: 3px 10px;
                     position: sticky;
                     top: 0;
                     pointer-events: none;
                     margin: -1px 0 0 0;
                 }
                 .search-jumper-searchBar.disable-pointer>.search-jumper-type {
                     pointer-events: none;
                 }
                 .search-jumper-word {
                     background: black;
                     color: #ffffff!important;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     font-weight: 500;
                     font-size: ${13*this.scale}px;
                     line-height: calc(${32*this.scale}px * var(--scale));
                     min-width: ${32*this.scale}px;
                     min-height: ${32*this.scale}px;
                     letter-spacing: 0px;
                     text-shadow: unset;
                     text-decoration: none;
                 }
                 span.search-jumper-word {
                     border-radius: ${20*this.scale}px!important;
                 }
                 a.search-jumper-word>span {
                     border-radius: 50%!important;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                     background: white;
                 }
                 #search-jumper.funcKeyCall .search-jumper-word {
                     border-radius: ${10*this.tilesZoom}px!important;
                     font-size: ${14*this.tilesZoom}px;
                     line-height: ${32*this.tilesZoom}px;
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                     min-width: ${32*this.tilesZoom}px;
                     min-height: ${32*this.tilesZoom}px;
                 }
                 #search-jumper.funcKeyCall .search-jumper-word>span {
                     background: unset;
                 }
                 .search-jumper-word:hover {
                     font-weight: bold;
                     text-shadow: 0px 0px 5px #d0d0d0;
                 }
                 a.search-jumper-word {
                     color: #111111!important;
                     background: unset;
                 }
                 .funcKeyCall a.search-jumper-word {
                     background: #f7f7f7a0;
                 }
                 a.search-jumper-word>span {
                     color: #222!important;
                     border-radius: 20px;
                     line-height: unset;
                     text-align: center;
                     text-shadow: 0 0 0.7px #787878dd;
                     background-image: initial;
                 }
                 .search-jumper-type img {
                     width: 100%;
                     height: 100%;
                     margin-top: unset;
                 }
                 #search-jumper.funcKeyCall .search-jumper-type img {
                     width: ${32*this.tilesZoom}px;
                     height: ${32*this.tilesZoom}px;
                 }
                 .funcKeyCall>.search-jumper-tips {
                     position: absolute;
                 }
                 .search-jumper-tips {
                     z-index: 2147483647;
                     pointer-events: none;
                     position: fixed;
                     font-size: ${35*this.tipsZoom}px;
                     background: #f5f5f5f0;
                     border-radius: ${10*this.tipsZoom}px!important;
                     padding: 6px;
                     box-shadow: 0px 0px 10px 0px #000;
                     font-weight: bold;
                     ${c.prefConfig.noAni?"":"transition: all 0.2s ease;"}
                     color: black;
                     white-space: normal;
                     max-width: 640px;
                     max-width: min(80vw,640px);
                     width: max-content;
                     line-height: ${35*this.tipsZoom}px;
                     word-break: break-all;
                     text-align: center;
                     box-sizing: content-box;
                     overflow: hidden;
                     font-family: Roboto,arial,sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     cursor: grab;
                     max-height: 80vh;
                     overscroll-behavior: contain;
                     -ms-scroll-chaining: contain;
                 }
                 .search-jumper-tips:hover {
                     overflow: auto;
                 }
                 .search-jumper-tips * {
                     max-width: 640px;
                     max-width: min(80vw,640px);
                     margin: auto;
                 }
                 .search-jumper-tips .markdown {
                     white-space: pre-wrap;
                     line-height: 1.2;
                     text-align: initial;
                     margin: 10px;
                     display: block;
                     user-select: text;
                     cursor: auto;
                 }
                 .search-jumper-tips iframe {
                     border: unset;
                     display: block;
                 }
                 .search-jumper-searchBar>.search-jumper-type {
                     padding: 0px;
                     ${c.prefConfig.disableTypeOpen?"background: unset;":""}
                 }
                 .search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     background: unset;
                     border-radius: unset!important;
                 }
                 .minSizeMode.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open),
                 .minSizeMode.search-jumper-searchBar:hover>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                 }
                 .minSizeModeClose.minSizeMode.search-jumper-searchBar:hover>.search-jumper-type:not(.search-jumper-targetImg,.search-jumper-targetLink,.search-jumper-targetPage,.search-jumper-targetVideo,.search-jumper-targetAudio) {
                     display: inline-flex;
                 }
                 .funcKeyCall>.search-jumper-searchBar>.search-jumper-type:not(.search-jumper-open) {
                     display: none;
                     border-radius: ${20*this.tilesZoom}px!important;
                 }
                 span.search-jumper-word>img {
                     width: ${20*this.scale}px;
                     height: ${20*this.scale}px;
                     margin: auto;
                 }
                 #search-jumper.funcKeyCall span.search-jumper-word>img {
                     width: ${20*this.tilesZoom}px;
                     height: ${20*this.tilesZoom}px;
                 }
                 .search-jumper-btn:hover {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     color: white;
                     text-decoration:none;
                     filter: drop-shadow(1px 1px 3px #00000050);
                 }
                 .search-jumper-btn:active {
                     -webkit-transform:scale(1.1);
                     -moz-transform:scale(1.1);
                     transform:scale(1.1);
                     transition:unset;
                     filter: drop-shadow(1px 1px 5px #000000a0);
                 }
                 .search-jumper-searchBar .search-jumper-btn.current {
                     overflow: visible;
                 }
                 .search-jumper-searchBar .search-jumper-btn.current::before {
                     content: '';
                     position: absolute;
                     right: -2px;
                     top: -2px;
                     border: 1px solid #00000099;
                     display: inline-block;
                     width: 10px;
                     height: 10px;
                     border-radius: 50%;
                     background: white;
                     box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 80%);
                     ${c.prefConfig.noAni?"":"opacity: 0.8;"}
                 }
                 .in-input .search-jumper-input {
                     display: block;
                     box-sizing: content-box;
                 }
                 .lock-input .search-jumper-lock-input {
                     float: left;
                     font-size: 20px;
                     top: 14px;
                     left: 25px;
                     color: darkgrey;
                     position: absolute;
                     border-right: 2px solid #32373a;
                     padding-right: 10px;
                     display: block;
                 }
                 .search-jumper-input {
                     width: 50%;
                     min-width: 500px;
                     bottom: 2%;
                     left: 50%;
                     margin: 0 0 0 -25%;
                     margin-left: min(-25%, -250px);
                     position: fixed;
                     font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                     text-align: left;
                     box-shadow: 0px 2px 10px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 10%);
                     border-radius: 28px;
                     background-color: rgb(51 56 59 / 90%);
                     padding: 5px;
                     display: none;
                     z-index: 2139999999;
                     font-size: 20px;
                     height: 36px;
                     touch-action: none;
                 }
                 .inputGroup {
                     cursor: grab;
                     display: flex;
                 }
                 .inputGroup * {
                     cursor: default;
                 }
                 .search-jumper-input input,
                 .search-jumper-input textarea {
                     background-color: #212022;
                     color: #adadad;
                     border: none;
                     font-size: 16px;
                     height: 35px;
                     margin-bottom: 0;
                     padding: 5px;
                     margin: 0 10px;
                     border-radius: 3px;
                     box-shadow: #333 0px 0px 2px;
                     width: calc(100% - 20px);
                     outline: none;
                     box-sizing: border-box;
                     cursor: text;
                 }
                 #searchJumperInput,
                 #searchJumperInputKeyWords {
                     width: calc(100% - 11px);
                     float: left;
                     transition: 0.25s width ease;
                 }
                 #searchJumperInput {
                     margin: 0 5px 0 10px;
                 }
                 #searchJumperInputKeyWords {
                     margin: 0 10px 0 1px;
                 }
                 #searchJumperInputKeyWords:disabled {
                     opacity: 0.5;
                     max-width: 20%;
                     min-width: 20%;
                 }
                 #filterSites>input:focus,
                 #filterSites>textarea:focus {
                     width: calc(400% - 20px);
                     color: white;
                 }
                 .search-jumper-input * {
                     box-sizing: border-box;
                 }
                 .search-jumper-input input[type="radio"] {
                     display: none;
                 }
                 .search-jumper-input input:checked + label {
                     background: #3a444add;
                     opacity: 0.9;
                     color: white;
                     font-size: 14px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .line {
                     left: 27px;
                 }
                 .search-jumper-input input#filterSitesTab:checked ~ .content-container #filterSites {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .line {
                     left: 233px;
                 }
                 .search-jumper-input input#searchInPageTab:checked ~ .content-container #searchInPage {
                     opacity: 1;
                     pointer-events: all;
                 }
                 .search-jumper-input label {
                     display: inline-block;
                     font-size: 12px;
                     height: 32px;
                     line-height: 32px;
                     width: 200px;
                     text-align: center;
                     background: #2a343acc;
                     color: #959595;
                     position: relative;
                     transition: 0.25s background ease, 0.25s opacity ease;
                     cursor: pointer;
                     position: relative;
                     top: -38px;
                     left: 22px;
                     border-radius: 5px 5px 0 0;
                     user-select: none;
                     pointer-events: all;
                     max-width: 40%;
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     opacity: 0.6;
                 }
                 .search-jumper-input input:checked + label:hover,
                 .search-jumper-input label:hover {
                     background: #3a444a;
                     opacity: 1;
                 }
                 .search-jumper-input label::after {
                     content: "";
                     height: 1px;
                     width: 100%;
                     position: absolute;
                     display: block;
                     background: #ccc;
                     bottom: 0;
                     opacity: 0;
                     left: 0;
                     transition: 0.25s ease;
                 }
                 .search-jumper-input label:hover::after {
                     opacity: 1;
                 }
                 .search-jumper-input .line {
                     background: #1E88E5;
                     width: 200px;
                     height: 1px;
                     top: -2px;
                     left: 0;
                     transition: 0.25s ease;
                     position: absolute;
                 }
                 .inputGroup>.svgBtns {
                     right: 16px;
                     top: 5px;
                     height: 35px;
                     position: absolute;
                     user-select: none;
                     background: #212022;
                     white-space: nowrap;
                     overflow: hidden;
                     display: flex;
                     align-items: center;
                 }
                 .inputGroup>#addons {
                     position: absolute;
                     bottom: 41px;
                     right: 110px;
                     display: none;
                     flex-direction: column;
                     background: #212022;
                     border-radius: 10px;
                     opacity: 0;
                     transition: 0.5s opacity ease;
                 }
                 .inputGroup>#addons>div {
                     padding: 10px;
                 }
                 .inputGroup>#addons>div>input {
                     float: left;
                     width: 20px;
                     height: 20px;
                     margin: 0 10px 0 0;
                     cursor: pointer;
                 }
                 .inputGroup:hover>#addons {
                     display: flex;
                 }
                 .inputGroup>#addons:hover {
                     opacity: 1;
                 }
                 .inputGroup>.svgBtns:hover+#addons {
                     opacity: 1;
                 }
                 .inputGroup>#addons>div>label {
                     color: white;
                     display: inline;
                     background: none;
                     top: unset;
                     left: unset;
                     font-size: unset;
                     line-height: 20px;
                     max-width: unset;
                 }
                 .inputGroup>.svgBtns:hover {
                     width: auto;
                 }
                 .inputGroup>.svgBtns>svg {
                     margin: 0 2px;
                 }
                 .inputGroup svg.checked {
                     fill: #1E88E5;
                 }
                 @media screen and (max-width: 2048px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1580px;
                     }
                 }
                 @media screen and (max-width: 1920px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1320px;
                     }
                 }
                 @media screen and (max-width: 1600px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 1060px;
                     }
                 }
                 @media screen and (max-width: 1300px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 800px;
                     }
                 }
                 @media screen and (max-width: 900px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 540px;
                     }
                 }
                 @media screen and (max-width: 600px) {
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist {
                         width: 95vw;
                     }
                     #search-jumper.search-jumper-showall #search-jumper-alllist.new-mode .sitelist>.sitelistCon {
                         width: calc(100% - 20px);
                     }
                     #search-jumper-alllist>.timeInAll, #search-jumper-alllist>.dayInAll {
                         margin: 10px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: calc(50vw - 45px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: 100px;
                         margin-left: 68px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a>img {
                         margin-left: 0;
                     }
                 }
                 @media screen and (max-width: 380px) {
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a {
                         width: calc(100vw - 60px);
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist>.sitelistCon>div:before {
                         width: calc(100vw - 150px);
                         margin-left: 85px;
                     }
                     #search-jumper #search-jumper-alllist.new-mode .sitelist a+p {
                         width: calc(100vw - 60px);
                     }
                 }
                 @media screen and (max-width: 800px) {
                     .search-jumper-input .line {
                         display: none;
                     }
                     .search-jumper-input {
                         min-width: 300px;
                         margin-left: min(-25%, -150px);
                     }
                     .inputGroup>.svgBtns {
                         width: 25px;
                     }
                     #search-jumper-alllist>.modeSwitch {
                         width: 36px;
                         height: 36px;
                         right: 2px;
                         top: 10px;
                     }
                 }
                 @media screen and (max-width: 650px) {
                     #search-jumper.search-jumper-showall>#search-jumper-alllist.new-mode+.groupTab {
                         display: none;
                     }
                 }
                 .search-jumper-input .content-container {
                     background: #eee;
                     position: static;
                     font-size: 16px;
                 }
                 .search-jumper-input .content-container .inputGroup {
                     position: absolute;
                     padding: 5px;
                     width: 100%;
                     top: 0;
                     left: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s ease;
                     color: #333;
                 }
                 .search-jumper-input svg,
                 .searchJumperNavBar svg {
                     width: 25px;
                     height: 25px;
                     fill: white;
                     cursor: pointer;
                     opacity: 0.8;
                     transition: 0.25s all ease;
                     font-size: 0px;
                 }
                 .search-jumper-input .inputGroup:hover svg,
                 .searchJumperNavBar.sjNavShow svg {
                     pointer-events: all;
                 }
                 .search-jumper-input svg *,
                 .searchJumperNavBar svg * {
                     cursor: pointer;
                 }
                 .search-jumper-input svg:hover,
                 .searchJumperNavBar svg:hover,
                 .search-jumper-input>.closeBtn:hover,
                 .searchJumperNavBar>div.minNavBtn:hover,
                 .searchJumperNavBar>div.maxNavBtn:hover {
                     -webkit-transform:scale(1.2);
                     -moz-transform:scale(1.2);
                     transform:scale(1.2);
                     opacity: 1;
                 }
                 #search-jumper.selectedEle #filterSites>.svgBtns>svg {
                     display: inline-block!important;
                 }
                 .search-jumper-input>.closeBtn {
                     position: absolute;
                     right: 0px;
                     top: -35px;
                     width: 30px;
                     height: 30px;
                     vertical-align: middle;
                     overflow: hidden;
                     background: rgb(51 56 59 / 90%);
                     color: white;
                     text-align: center;
                     line-height: 30px;
                     border-radius: 20px;
                     pointer-events: all;
                     transition: 0.25s all ease;
                     opacity: 0.6;
                     font-size: 26px;
                     box-shadow: 0px 0px 2px rgb(0 0 0 / 80%);
                     border: 1px solid rgb(179 179 179 / 20%);
                     cursor: pointer;
                     user-select: none;
                 }
                 #searchInPage>.lockWords {
                     max-width: 50%;
                     position: absolute;
                     bottom: 4px;
                     left: 16px;
                     color: white;
                     font-size: 18px;
                     display: flex;
                     flex-wrap: wrap-reverse;
                     max-height: 38px;
                     overflow: hidden;
                 }
                 #searchInPage>.lockWords:hover {
                     overflow-y: auto;
                     height: auto;
                     max-height: 90vh;
                 }
                 #searchInPage>.lockWords>span {
                     position: relative;
                     padding: 5px;
                     cursor: pointer;
                     user-select: none;
                     background: yellow;
                     color: black;
                     border: 1px solid;
                     margin: 2px;
                     display: flex;
                     align-items: center;
                     white-space: nowrap;
                     max-width: 100%;
                     line-height: initial;
                 }
                 #searchInPage>.lockWords>span>em {
                     cursor: alias;
                 }
                 #searchInPage>.lockWords .lockWordTool {
                     position: absolute;
                     right: 0;
                     top: 0;
                     display: none;
                     opacity: 0.3;
                     height: 15px;
                     width: 15px;
                     text-align: center;
                     line-height: 15px;
                     border-radius: 50%;
                     background: black;
                     color: white;
                 }
                 #searchInPage>.lockWords .lockWordTool>span {
                     cursor: pointer;
                     font-size: 15px;
                 }
                 #searchInPage>.lockWords .modifyBtn {
                     top: unset;
                     bottom: 0;
                 }
                 #searchInPage>.lockWords .lockWordTool:hover {
                     opacity: 1;
                 }
                 #searchInPage>.lockWords>span:hover .lockWordTool {
                     display: block;
                     pointer-events: all;
                 }
                 #searchInPage>.lockWords .lockWordTool>svg {
                     width: 15px;
                     height: 15px;
                     fill: black;
                     color: black;
                     border: 1px solid white;
                     border-radius: 10px;
                     background: white;
                 }
                 #searchInPage>.lockWords>span>em {
                     font-size: 12px;
                     margin-right: 5px;
                     color: unset;
                 }
                 .searchJumperNavBar {
                     all: unset;
                     top: 0px;
                     bottom: 0px;
                     right: 0px;
                     position: fixed;
                     width: 20px;
                     z-index: 2147483647;
                     background: #00000026;
                     text-align: center;
                     pointer-events: none;
                     font-size: 0px;
                     opacity: 0;
                     transition: width 0.3s, background 0.3s;
                 }
                 .searchJumperNavBar:hover {
                     width: 25px;
                     background: #00000066;
                 }
                 .searchJumperNavBar.sjNavShow {
                     pointer-events: all;
                     opacity: 1;
                 }
                 .search-jumper-showall > .searchJumperNavBar.sjNavShow {
                     opacity: 0;
                 }
                 .searchJumperNavBar>.closeNavBtn {
                     width: 16px;
                     height: 16px;
                     fill: white;
                     cursor: pointer;
                     display: inline-block;
                 }
                 .searchJumperNavBar>.minNavBtn,
                 .searchJumperNavBar>.maxNavBtn {
                     font-size: 12px;
                     font-weight: bold;
                     font-family: system-ui;
                     line-height: 16px;
                     opacity: 0.1;
                     background: white;
                     color: black;
                     border-radius: 10px;
                     width: 16px;
                     height: 16px;
                     display: inline-block;
                     cursor: pointer;
                     transition: 0.25s opacity ease, 0.25s transform ease;
                 }
                 .searchJumperNavBar:hover>.minNavBtn,
                 .searchJumperNavBar:hover>.maxNavBtn {
                     opacity: 0.8;
                 }
                 #search-jumper>.searchJumperNavBar.minimize {
                     background: transparent;
                     pointer-events: none;
                 }
                 .searchJumperNavBar.minimize>.closeNavBtn,
                 .searchJumperNavBar.minimize>.navPointer,
                 .searchJumperNavBar.minimize>.maxNavBtn,
                 .searchJumperNavBar.minimize>#navMarks {
                     display: none;
                 }
                 .searchJumperNavBar.minimize>.minNavBtn {
                     opacity: 1;
                     box-shadow: 0px 0px 3px 1px #000;
                     margin-left: -50px;
                     margin-top: 5px;
                     pointer-events: all;
                 }
                 .search-jumper-right>.searchJumperNavBar.minimize>.minNavBtn {
                     margin-left: unset;
                     margin-right: -50px;
                 }
                 #navMarks+.navPointer {
                     pointer-events: none;
                     position: absolute;
                     right: 20px;
                     text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
                     font-size: 30px;
                     font-family: system-ui;
                     line-height: 0px;
                     border: 0;
                     margin-top: 0;
                     opacity: 0.8;
                     color: black;
                     transition: top 0.25s ease;
                     animation-name: changeHor;
                     animation-duration: 1s;
                     animation-iteration-count: infinite;
                     animation-timing-function: ease-in-out;
                 }
                 @keyframes changeHor {
                     0%   {right: 20px;}
                     10%  {right: 18px;}
                     80%  {right: 25px;}
                     100% {right: 20px;}
                 }
                 #navMarks {
                     height: calc(100% - 50px);
                     width: 100%;
                     position: relative;
                 }
                 #navMarks>span {
                     height: 0.5vh;
                     width: 100%;
                     position: absolute;
                     border: 1px solid #cccccc;
                     min-height: 5px;
                     box-sizing: border-box;
                     left: 0;
                     border-radius: 0px!important;
                     cursor: alias;
                 }
                 .searchJumperPosBar {
                     background: rgba(29, 93, 163, 0.3);
                     position: absolute;
                     min-height: 10px;
                     min-width: 10px;
                     animation-duration: 2s;
                     z-index: 2147483647;
                     margin: 0;
                     opacity: 0;
                     pointer-events: none;
                     transition: 0.25s all ease;
                 }
                 .searchJumperPosBar.searchJumperPosW {
                     width: 100%;
                     left: 0;
                 }
                 .searchJumperPosBar.searchJumperPosH {
                     height: 100%;
                     top: 0;
                     position: fixed;
                 }
                 @keyframes fadeit {
                     0% {opacity: 1;}
                     50% {opacity: 0.8;}
                     100% {opacity: 0;}
                 }
                 #rightSizeChange {
                     top: 0;
                     opacity: 0;
                     height: 45px;
                     width: 15px;
                     position: absolute;
                     cursor: e-resize;
                     right: 0;
                     pointer-events: all;
                 }
                 .searchJumper-hide {
                     display: none!important;
                 }
                 .search-jumper-historylist>a.search-jumper-btn {
                     filter: drop-shadow(0px 0px 3px #00000050);
                     width: 32px;
                     height: 32px;
                     line-height: 32px;
                     min-width: auto;
                     min-height: auto;
                     flex-shrink: 0;
                 }
                 .search-jumper-historylist>a.search-jumper-btn>img {
                     width: 32px;
                     height: 32px;
                 }
                 .search-jumper-historylist>a.search-jumper-btn:not(.search-jumper-word)>span {
                     font-size: 12px;
                     line-height: normal;
                 }
                 #search-jumper .listArrow {
                     width: 0;
                     height: 0;
                     border: 10px solid transparent;
                     pointer-events: none;
                     border-bottom-color: white;
                     position: fixed;
                     opacity: 0;
                     visibility: hidden;
                     z-index: 2147483647;
                     transition: opacity .3s ease, top .15s, bottom .15s, left .15s, right .15s;
                 }
                 #search-jumper.search-jumper-left .listArrow {
                     border-bottom-color: transparent;
                     border-right-color: white;
                 }
                 #search-jumper.search-jumper-right .listArrow {
                     border-bottom-color: transparent;
                     border-left-color: white;
                 }
                 #search-jumper.search-jumper-bottom .listArrow {
                     border-bottom-color: transparent;
                     border-top-color: white;
                 }
                 @media (prefers-color-scheme: dark) {
                     /* \u7AD9\u70B9\u5217\u8868 */
                     #search-jumper .sitelist > .sitelistCon > p {
                         background-color: #252B32 !important;
                     }
                     #search-jumper.search-jumper-showall #filterSites {
                         background-color: #2a282cc0;
                     }
                     #search-jumper.search-jumper-showall #filterSites>input,
                     #search-jumper.search-jumper-showall #filterSites>textarea {
                         background-color: #000000;
                         color: white;
                     }

                     #search-jumper .sitelist > .sitelistCon {
                         background-color: #1C2127ee !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > div:hover {
                         background-color: #283C57 !important;
                     }

                     #search-jumper .sitelist > .sitelistCon > p,
                     #search-jumper .sitelist a > p {
                         color: #DADADA !important;
                     }
                     #search-jumper .listArrow {
                         border-bottom-color: #1C2127;
                     }
                     #search-jumper.search-jumper-left .listArrow {
                         border-bottom-color: transparent;
                         border-right-color: #1C2127;
                     }
                     #search-jumper.search-jumper-right .listArrow {
                         border-bottom-color: transparent;
                         border-left-color: #1C2127;
                     }
                     #search-jumper.search-jumper-bottom .listArrow {
                         border-bottom-color: transparent;
                         border-top-color: #1C2127;
                     }

                     /* \u5386\u53F2\u5217\u8868 */
                     .search-jumper-historylistcon {
                         background-color: #181C20e0 !important;
                     }

                     .search-jumper-historylist>a.search-jumper-btn {
                         filter: drop-shadow(0px 0px 3px #ffffff50);
                     }

                     .search-jumper-showall a.search-jumper-word,
                     .search-jumper-showall a.search-jumper-word > span {
                         background-color: #292A2D !important;
                         border-radius: 20px !important;
                     }

                     .search-jumper-tips {
                         background-color: #3F4042f0;
                         color: #DADADA;
                     }
                     .search-jumper-tips>*:not(font) {
                         color: white;
                     }

                     .search-jumper-showall a.search-jumper-word > span {
                         color: #DADADA !important;
                     }

                     .search-jumper-showall .search-jumper-word:hover {
                         text-shadow: 0px 0px 5px #2374FF !important;
                     }

                     /* \u7C7B\u522B */
                     .search-jumper-showall .search-jumper-type,
                     .search-jumper-showall .search-jumper-logo {
                         background-color: #181C20 !important;
                     }

                     #search-jumper.search-jumper-showall>.groupTab {
                         background: #1C2127ee !important;
                     }
                     #search-jumper.search-jumper-showall>.groupTab>span:hover{
                         background: #283C57 !important;
                     }
                     #search-jumper.search-jumper-showall>.groupTab:hover>span::after {
                         color: white;
                     }
                 }
                 `,this.inPageCss=`
                 mark.searchJumper,
                 a.searchJumper {
                     visibility: inherit;
                     font-style: inherit;
                     box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 3px;
                     border-radius: 3px;
                     text-decoration: none;
                     padding: 1px 0;
                     -webkit-text-fill-color: initial;
                     text-shadow: initial;
                     min-width: initial;
                     display: inline;
                     margin: initial;
                 }
                 mark.searchJumper:before,
                 a.searchJumper:before,
                 mark.searchJumper:after,
                 a.searchJumper:after {
                     all: unset;
                     content: none!important;
                 }
                 mark.searchJumper[data-current=true],
                 a.searchJumper[data-current=true] {
                     border-bottom: 0.2em solid;
                     border-bottom-left-radius: 0;
                     border-bottom-right-radius: 0;
                     animation: 0.5s linear 0s 5 normal none running currentMark;
                 }
                 @keyframes currentMark {
                     from {border-color: unset}
                     to {border-color: transparent;}
                 }
                `,c.prefConfig.cssText&&(Et+=c.prefConfig.cssText);let t=document.createElement("span");t.className="search-jumper-searchBar";let r=document.createElement("input");r.id="search-jumper-tileInput",r.addEventListener("mousedown",k=>{k&&k.stopPropagation&&k.stopPropagation()},!0);let i;r.addEventListener("input",k=>{clearTimeout(i),i=setTimeout(()=>{let j=e.bar.querySelector(".search-jumper-open>span:first-child");j&&j.dispatchEvent(new CustomEvent("checkSites",{detail:r.value}))},500)},!0),this.tileInput=r;let a=document.createElement("span");a.className="search-jumper-logo",lt=document.createElement("span"),lt.innerHTML=Q(pi),lt.className="search-jumper-btn",a.addEventListener("mouseenter",k=>{this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}),a.appendChild(lt),t.appendChild(a);let n=document.createElement("div");n.id="search-jumper",n.style.display="none",n.className="search-jumper-searchBarCon",n.appendChild(t),n.setAttribute("translate","no");let s=document.createElement("div");s.id="search-jumper-alllist",n.appendChild(s),this.alllist=s;let o=document.createElement("span");o.className="groupTab",n.appendChild(o),this.groupTab=o;let p=document.createElement("div");p.className="search-jumper-showallBg",n.appendChild(p);let d=document.createElement("div");d.className="sitelistBox",s.appendChild(d),this.sitelistBox=d;const f=/#[^\s#]+/g;d.addEventListener("mouseover",k=>{if(!s.classList.contains("new-mode"))return;let j=k.target;j.parentNode&&j.parentNode.dataset.name&&(j=j.parentNode);let M=j.title;if(!j.dataset.name||!M||j.initedTag)return;let N=document.createElement("p"),G=M.match(f);G&&(G.forEach(ue=>{let te=document.createElement("span");te.innerText=ue.slice(1),te.addEventListener("click",ie=>{e.searchInput.value=ue,e.searchInput.dispatchEvent(new CustomEvent("input"))}),N.appendChild(te)}),j.appendChild(N)),j.initedTag=!0});let g=document.createElement("span");g.className="timeInAll",s.appendChild(g),this.timeInAll=g,this.modeSwitch=document.createElement("div"),this.modeSwitch.className="modeSwitch",this.modeSwitch.innerHTML=Q('<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect height="450" width="520" y="287" x="253" fill="#fff"></rect><path d="m511.8,64.2c-247.5,0 -448.2,200.7 -448.2,448.2s200.7,448.2 448.2,448.2s448.2,-200.6 448.2,-448.2s-200.7,-448.2 -448.2,-448.2zm-260.4,353.9c0,-7.8 6.3,-14.2 14.2,-14.2l315.6,0l0,-102.5c0,-12.3 14.7,-18.8 23.7,-10.4l165.1,151.7c9.5,8.7 3.3,24.6 -9.6,24.6l-495,0c-7.8,0 -14.2,-6.3 -14.2,-14.2l0,-35l0.2,0zm523.2,188.5c0,7.8 -6.3,14.2 -14.2,14.2l-315.5,0l0,102.6c0,12.3 -14.7,18.8 -23.7,10.4l-165.2,-151.8c-9.5,-8.7 -3.3,-24.6 9.6,-24.6l495,0c7.8,0 14.2,6.3 14.2,14.2l0,35l-0.2,0z"></path></svg>'),s.appendChild(this.modeSwitch),this.modeSwitch.addEventListener("click",k=>{k.preventDefault(),k.stopPropagation(),s.classList.toggle("new-mode"),s.classList.remove("showbg"),U.setItem("allPageNewMode",s.classList.contains("new-mode"))}),this.modeSwitch.addEventListener("mouseenter",k=>{_e&&(k.preventDefault(),k.stopPropagation(),s.classList.add("showbg"))}),this.modeSwitch.addEventListener("mouseleave",k=>{_e&&(k.preventDefault(),k.stopPropagation(),s.classList.remove("showbg"))}),this.modeSwitch.addEventListener("contextmenu",k=>{_e&&(k.preventDefault(),k.stopPropagation(),s.classList.remove("showbg"),ge(_e,{active:!0,insert:!0}))}),Ri&&s.classList.add("new-mode");let u=document.createElement("span");u.className="dayInAll",s.appendChild(u),this.dayInAll=u,s.addEventListener(Mt(),k=>{if(e.tips.style.display="none",clearTimeout(e.requestShowTipsTimer),!(k.target!=s&&k.target!=p&&k.target!=d)&&!s.classList.contains("new-mode")){var j,M;if(k.type!=="wheel"){var N=0,G=0;typeof k.axis=="number"?k.axis==2?G=k.detail:N=k.detail:typeof k.wheelDeltaY>"u"||k.wheelDeltaY!=0?G=-k.wheelDelta/40:N=-k.wheelDelta/40,M=G,j=N}else j=k.deltaX,M=k.deltaY;k.preventDefault(),k.stopPropagation(),s.scrollLeft+=M}},{passive:!1,capture:!1});let m=document.createElement("span");m.innerHTML=Q(pi),m.className="search-jumper-btn",m.addEventListener("click",k=>{ge(Ae,{active:!0,insert:!0})}),s.appendChild(m);let y=document.createElement("div");y.className="search-jumper-historylistcon",s.appendChild(y);let T=document.createElement("div");if(T.className="search-jumper-historylist",y.appendChild(T),this.historylist=T,t.addEventListener("mouseenter",k=>{t.classList.contains("grabbing")||(this.hideTimeout&&clearTimeout(this.hideTimeout),this.checkScroll(!0),c.prefConfig.mouseLeaveToHide&&t.classList.remove("initShow"))},!1),t.addEventListener("mouseleave",k=>{if(c.prefConfig.mouseLeaveToHide){if(t.classList.contains("grabbing"))return;e.waitForHide()}e.preList&&(e.preList.style.visibility="hidden",e.listArrow.style.cssText="")},!1),this.touched=!0,c.prefConfig.initShow?t.classList.add("initShow"):this.touched=!1,c.prefConfig.minSizeMode&&(t.classList.add("minSizeMode"),t.classList.add("minSizeModeClose")),Wt&&!c.prefConfig.resizePage){let k=M=>{this.touched=!1,t.classList.remove("initShow")},j=M=>{this.touched||this.funcKeyCall||(this.touched=!0,t.classList.add("disable-pointer"),M.stopPropagation(),setTimeout(()=>{t.classList.remove("disable-pointer")},250))};V(document).addEventListener("touchstart",k,{passive:!0,capture:!1}),t.addEventListener("touchstart",j,{passive:!1,capture:!0})}this.bar=t,this.con=n;let E=document.createElement("span");E.className="search-jumper-tips",E.style.opacity=0,n.appendChild(E),E.addEventListener("mouseenter",k=>{e.hideTimeout&&clearTimeout(e.hideTimeout)},!1),E.addEventListener("click",k=>{let j=k.target.dataset,M=k.target.innerText;if(j){if(typeof j.read<"u"){let N=new SpeechSynthesisUtterance("");N.volume=j.volume||1,N.rate=j.rate||1,N.pitch=j.pitch||1,N.lang=j.lang||"",N.text=j.read||M,window.speechSynthesis.speak(N)}typeof j.copy<"u"&&He(j.copy||M),j.search&&(Nt=M,e.searchBySiteName(j.search)),typeof j.paste<"u"&&$&&(/INPUT|TEXTAREA/i.test($.nodeName)&&$.getAttribute("aria-readonly")!="true"||$.contentEditable=="true")&&Ot($,j.paste||M),typeof j.close<"u"&&(e.tips.style.opacity=0,e.tips.style.display="none",e.tips.innerHTML=Q(""))}},!1);let x,B,W=k=>{let j=ht(k)-x.x,M=dt(k)-x.y;Math.abs(j)+Math.abs(M)<5||(E.style.right===""?E.style.setProperty("left",B.left+j+"px","important"):E.style.setProperty("right",B.right-j+"px","important"),E.style.bottom===""?E.style.setProperty("top",B.top+M+"px","important"):E.style.setProperty("bottom",B.bottom-M+"px","important"),E.classList.add("draging"))},P=k=>{document.removeEventListener("mouseup",P,!1),document.removeEventListener("mousemove",W,!1),document.removeEventListener("touchend",P,!1),document.removeEventListener("touchmove",W,!1),E.classList.remove("draging")},H=(k,j)=>{if(!k.target||k.target!==E&&typeof k.target.dataset.drag>"u")return;k.preventDefault(),k.stopPropagation(),x={x:ht(k),y:dt(k)};let M=getComputedStyle(E);B={left:parseFloat(M.left),right:parseFloat(M.right),top:parseFloat(M.top),bottom:parseFloat(M.bottom)},j&&j()};E.addEventListener("mousedown",k=>{H(k,()=>{document.addEventListener("mouseup",P,!1),document.addEventListener("mousemove",W,!1)})},!1),E.addEventListener("touchstart",k=>{H(k,()=>{document.addEventListener("touchend",P,!1),document.addEventListener("touchmove",W,!1)})},{passive:!1,capture:!1}),this.tips=E;let O=document.createElement("div");O.className="searchJumperNavBar",O.style.display="none",O.innerHTML=Q(`
                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title>${Hi}</svg>
                  <div class="minNavBtn" title="Minimize navigation">-</div>
                  <div id="navMarks"></div>
                  <div class="maxNavBtn" title="Restore input"><img src="${ut}" /></div>
                  <div class="navPointer">></div>
                `),n.appendChild(O);let Y=document.createElement("span");Y.title=A("expand"),Y.className="searchJumperExpand search-jumper-btn",Y.innerHTML=Q(`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect height="450" width="600" y="300" x="200" fill="#fff"></rect><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 640L240 432l45.6-45.6L512 613.6l226.4-226.4 45.6 45.6L512 704z"></path></svg>
                `),this.searchJumperExpand=Y,this.navMarks=O.querySelector("#navMarks"),this.closeNavBtn=O.querySelector(".closeNavBtn"),this.minNavBtn=O.querySelector(".minNavBtn"),this.maxNavBtn=O.querySelector(".maxNavBtn"),this.searchJumperNavBar=O,this.navPointer=O.querySelector(".navPointer"),this.navPointer.style.display="none";let b=document.createElement("div");b.className="search-jumper-input",b.innerHTML=Q(`<span class="closeBtn">\xD7</span>
                <input type="radio" id="filterSitesTab" name="tab" ${c.prefConfig.defaultFindTab?"":'checked="checked"'} />
                <label for="filterSitesTab">${A("filterSites")}</label>
                <input type="radio" id="searchInPageTab" name="tab" ${c.prefConfig.defaultFindTab?'checked="checked"':""} />
                <label for="searchInPageTab">${A("searchInPage")}</label>
                <div class="line"></div>
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" autocomplete="on" title="${A("inputTitle")}" placeholder="${A("inputPlaceholder")}" list="filterGlob" />
                    <input spellcheck="false" id="searchJumperInputKeyWords" autocomplete="on" placeholder="${A("inputKeywords")}" list="suggest" />
                    <datalist id="filterGlob">
                    </datalist>
                    <datalist id="suggest">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="openLinkBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("openLinkBtn")}</title><path d="M429.013333 640A32 32 0 0 1 384 594.986667l37.76-37.76-22.826667-22.613334-135.68 135.68 90.453334 90.453334 135.68-135.68-22.613334-22.613334zM534.613333 398.933333l22.613334 22.613334L594.986667 384A32 32 0 0 1 640 429.013333l-37.76 37.76 22.613333 22.613334 135.68-135.68-90.453333-90.453334z"/><path d="M512 21.333333a490.666667 490.666667 0 1 0 490.666667 490.666667A490.666667 490.666667 0 0 0 512 21.333333z m316.8 354.986667l-181.12 181.12a32 32 0 0 1-45.226667 0L557.226667 512 512 557.226667l45.226667 45.226666a32 32 0 0 1 0 45.226667l-181.12 181.12a32 32 0 0 1-45.226667 0l-135.68-135.68a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0L466.773333 512 512 466.773333l-45.226667-45.226666a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0l135.68 135.68a32 32 0 0 1 0 45.226667z"/></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("multiPickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" autocomplete="on" title="${A("inPageTips")}" placeholder="${A("inPagePlaceholder")}" />
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="wordModeBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("wordModeBtn")}</title><path d="M832 128c38.4 0 64 25.6 64 64v640c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h640m0-64H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z"></path><path d="M736 812.8h-448c-19.2 0-32-12.8-32-32s12.8-32 32-32h448c19.2 0 32 12.8 32 32 0 12.8-12.8 32-32 32zM320 704c-19.2-6.4-25.6-25.6-19.2-44.8l185.6-454.4c6.4-12.8 25.6-19.2 38.4-12.8 19.2 6.4 25.6 25.6 19.2 44.8l-185.6 454.4c-6.4 12.8-25.6 19.2-38.4 12.8z"></path><path d="M704 691.2c19.2-6.4 25.6-25.6 19.2-44.8L544 211.2c-6.4-19.2-25.6-25.6-38.4-19.2-19.2 6.4-25.6 25.6-19.2 38.4l179.2 441.6c6.4 19.2 25.6 25.6 38.4 19.2z"></path><path d="M371.2 492.8h256v64h-256z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                    <div id="addons"></div>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `),n.appendChild(b),this.searchInputDiv=b,this.searchInput=b.querySelector("#searchJumperInput"),this.searchJumperInputKeyWords=b.querySelector("#searchJumperInputKeyWords"),this.searchLockInput=b.querySelector(".search-jumper-lock-input"),this.searchJumperInPageInput=b.querySelector("#searchJumperInPageInput"),this.pickerBtn=b.querySelector("#pickerBtn"),this.minEleBtn=b.querySelector("#minEleBtn"),this.maxEleBtn=b.querySelector("#maxEleBtn"),this.copyEleBtn=b.querySelector("#copyEleBtn"),this.openLinkBtn=b.querySelector("#openLinkBtn"),this.editBtn=b.querySelector("#editBtn"),this.addWord=b.querySelector("#addWord"),this.recoverBtn=b.querySelector("#recoverBtn"),this.wordModeBtn=b.querySelector("#wordModeBtn"),this.saveRuleBtn=b.querySelector("#saveRuleBtn"),this.pinBtn=b.querySelector("#pinBtn"),this.locBtn=b.querySelector("#locBtn"),this.emptyBtn=b.querySelector("#emptyBtn"),this.copyInPageBtn=b.querySelector("#copyInPageBtn"),this.closeBtn=b.querySelector(".closeBtn"),this.filterSites=b.querySelector("#filterSites"),this.filterSitesTab=b.querySelector("#filterSitesTab"),this.searchInPageTab=b.querySelector("#searchInPageTab"),this.searchInPageLockWords=b.querySelector("#searchInPage>.lockWords"),this.contentContainer=b.querySelector(".content-container"),this.rightSizeChange=b.querySelector("#rightSizeChange"),this.filterGlob=b.querySelector("#filterGlob"),this.suggestDatalist=b.querySelector("#suggest"),this.addonsList=b.querySelector("#addons"),this.fakeTextareas=new Map,this.addonCheckboxDict={}}showInPageSearch(){this.searchInPageTab.checked=!0,this.showSearchInput(),this.initSetInPageWords(),this.searchJumperInPageInput.value="",this.initShowSearchInput=!0}showFilterSearch(){this.filterSitesTab.checked=!0,this.showSearchInput()}initSetInPageWords(){if(this.searchInPageTab.checked&&!this.searchJumperInPageInput.value){let e=We()||this.searchJumperInputKeyWords.value.replace(/^\*/,"")||Xe();if(e)try{e=decodeURIComponent(e)}catch{}if(this.lockWords&&this.lockWords.indexOf(e)!==-1)return;this.searchJumperInPageInput.value=e||Ne,this.lockWords||this.submitIgnoreSpace(this.searchJumperInPageInput.value)}}anylizeInPageWords(e,t){if(!e)return[];let r=this,i=[];if(this.lockWords||(e.indexOf("$c")===0&&e.length>2?e=e.substr(3).trim():e.indexOf("$o")===0&&(e=e.substr(2).trim())),this.splitSep){let n=this.wordModeBtn.classList.contains("checked")?new RegExp(`[\\${this.splitSep} ]`):this.splitSep;e.split(n).sort((s,o)=>o.length-s.length).forEach(s=>{let o=s;if(s=s.trim(),!s||t&&(s.length<(c.prefConfig.limitInPageLen||1)||(c.prefConfig.ignoreWords||[]).includes(s.toLowerCase())))return;let p="",d="",f=!1,g,u,m,y=!1,T="",E=/\$t{(.*?)}($|\$)/,x=s.match(E),B=0;if(x)if(p=x[1],s=s.replace(E,"$2"),p=="\\$popup")p="$popup";else if(p=="\\@popup")p="@popup";else{let M=p.match(/^[\$@]popup(\((.*)\))?$/);M&&(p="",f=!0,M[1]&&(B=M[2]||"1"))}let W=/\$p{(.*?)}($|\$)/,P=s.match(W);P&&(g=parseInt(P[1])||0,s=s.replace(W,"$2"));let H=/\$in{(.*?)}($|\$)/,O=s.match(H);O&&(m=O[1]||"",s=s.replace(H,"$2"));let Y=/\$s{(.*?)}($|\$)/,b=s.match(Y);if(b){let M=b[1],N="";b=b[1].match(/(.*?);(.*)/),b&&(M=b[1],N=b[2]),d=r.getHighlightStyle(r.curWordIndex,M,N),s=s.replace(Y,"$2")}else d=r.getHighlightStyle(r.curWordIndex,"","");let k="";if(s.indexOf("@")===0){k=s;let M=c.prefConfig.inPageRule&&c.prefConfig.inPageRule[s];M&&(s=M)}else s=s.replace(/^\\@/,"@");let j=s.match(/^\/(.*)\/([il]*)($|\$)/);j&&(y=!0,s=j[1],T=j[2].indexOf("i")!=-1?"i":"",u=j[2].indexOf("l")!=-1),k||(k=s),!r.highlightSpans[k]&&(i.push({content:s,showWords:k,isRe:y,link:u,reCase:T,title:p,style:d,oriWord:o,hideParent:g,inRange:m,popup:f,showTips:B,init:t}),r.curWordIndex++)})}else{this.curWordIndex=0;let a=(this.lockWords||"").replace(/^\$o/,"")+e;i=[{content:a,showWords:a,isRe:!1,reCase:"",title:"",style:r.getHighlightStyle(r.curWordIndex,"",""),init:t}]}return i}submitInPageWords(e){let t=this,r=this.searchJumperInPageInput.value,i=[];if(!r){if(!this.lockWords)this.highlight("");else{this.highlight("insert");for(let n in this.highlightSpans){let s=this.highlightSpans[n],o=this.marks[n];this.setHighlightSpan(s,0,o)}}return i}this.initHighlight=!!e,this.initHighlight&&setTimeout(()=>{this.initHighlight=!1},500),this.lockWords||(r.indexOf("$c")===0&&r.length>2?this.splitSep=r.substr(2,1):r.indexOf("$o")===0?this.splitSep=null:this.splitSep="\u25CE",this.curWordIndex=0),this.searchJumperInPageInput.value="";let a=this.anylizeInPageWords(r,this.initHighlight);return!a||a.length==0||(this.lockWords?this.lockWords+=(this.lockWords.indexOf(this.splitSep)===this.lockWords.length-this.splitSep.length?"":this.splitSep)+r:this.lockWords=r,this.splitSep||(this.searchInPageLockWords.innerHTML=Q(),this.highlight("")),this.highlight(a),a.forEach(n=>{if(!n)return;let s=document.createElement("span");s.innerHTML=Q(n.showWords),s.title=n.title?JSON.parse('"'+n.title+'"'):n.showWords;let o=n.style.match(/background: *(#?\w+)/);o&&o[1].indexOf("unset")===-1&&(s.style.background=o[1]);let p=n.style.match(/color: *(#?\w+)/);p&&(s.style.color=p[1]),s.addEventListener("click",m=>(m.stopPropagation(),m.preventDefault(),!1)),s.oncontextmenu=m=>{m.preventDefault()},s.addEventListener("dblclick",m=>{m.stopPropagation(),m.preventDefault(),m.target.nodeName.toUpperCase()!=="EM"&&(m.ctrlKey||m.shiftKey||m.altKey||m.metaKey||this.lockWords.indexOf(n.oriWord)!==-1&&this.showModifyWindow(n,s))},!0),s.addEventListener("mousedown",m=>{m.button===0?this.focusHighlightByText(n.showWords,!0,s):m.button===2&&this.focusHighlightByText(n.showWords,!1,s)});let d=!1;s.addEventListener(Mt(),m=>{if(m.preventDefault(),m.stopPropagation(),d)return;d=!0,setTimeout(()=>{d=!1},100);let y;if(m.type!=="wheel"){let T=0;typeof m.axis=="number"?m.axis==2&&(T=m.detail):(typeof m.wheelDeltaY>"u"||m.wheelDeltaY!=0)&&(T=-m.wheelDelta/40),y=T}else y=m.deltaY;this.focusHighlightByText(n.showWords,y>0,s)},{passive:!1,capture:!1}),s.addEventListener("editword",m=>{s.parentNode.removeChild(s),this.removeHighlightWord(n),this.searchJumperInPageInput.value=n.content});let f=document.createElement("div");f.addEventListener("mousedown",m=>{m.stopPropagation(),m.preventDefault(),s.parentNode.removeChild(s),this.removeHighlightWord(n)}),f.className="lockWordTool",f.innerHTML=Q(`<span title="${A("removeBtn")}">\xD7</span>`),s.appendChild(f);let g=document.createElement("div");g.addEventListener("mousedown",m=>{m.stopPropagation(),m.preventDefault(),this.lockWords.indexOf(n.oriWord)!==-1&&this.showModifyWindow(n,s)}),g.className="lockWordTool modifyBtn",g.innerHTML=Q("<span>+</span>"),s.appendChild(g);let u=this.marks[n.showWords];this.setHighlightSpan(s,-1,u),this.highlightSpans[n.showWords]=s,this.searchInPageLockWords.appendChild(s),i.push(s)}),this.searchInPageLockWords.scrollTop<=0&&(this.searchInPageLockWords.scrollTop=this.searchInPageLockWords.scrollHeight),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",this.navMarks.innerHTML&&this.con.style.display==="none"&&(this.con.style.display="")),i}async showCustomInputWindow(e,t){return new Promise(r=>{this.customInputCallback=t;let i=()=>{let o=this.finalSearch.dataset.url;[].forEach.call(this.customGroup.children,p=>{let d=p.value;if(p.className=="select")d=p.children[0].value;else if(/^DIV$/i.test(p.nodeName))return;o=o.replace("\u25CE",d||"")}),this.finalSearch.value=o};if(!this.customInputFrame){let p=Me(`
                         .customInputFrame-body {
                             width: 300px;
                             min-height: 200px;
                             position: fixed;
                             text-align: left;
                             left: 50%;
                             top: 50%;
                             margin-top: -160px;
                             margin-left: -150px;
                             z-index: 2147483647;
                             background-color: #ffffff;
                             border: 1px solid #afb3b6;
                             border-radius: 10px;
                             opacity: 0.95;
                             filter: alpha(opacity=95);
                             box-shadow: 5px 5px 20px 0px #000;
                             color: #6e7070;
                             font-size: initial;
                         }
                         .customInputFrame-body #customGroup {
                             max-height: 50vh;
                             overflow: auto;
                             scrollbar-width: none;
                         }
                         .customInputFrame-body #customGroup::-webkit-scrollbar {
                             width: 0 !important;
                             height: 0 !important;
                         }
                         .customInputFrame-title {
                             background: #458bd1!important;
                             display: flex!important;
                             align-items: center!important;
                             justify-content: center!important;
                             color: white!important;
                             font-weight: bold;
                             font-size: 18px!important;
                             border-radius: 10px 10px 0 0!important;
                         }
                         .customInputFrame-title>img {
                             margin: 5px;
                             height: 32px;
                             width: 32px;
                         }
                         .customInputFrame-input-title {
                             font-size: 9pt;
                             font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                             display: inline-block;
                             background-color: white;
                             position: relative;
                             left: 20px;
                             padding: 0px 4px;
                             text-align: left;
                             color: #646464;
                             word-break: break-all;
                             max-width: 85%;
                             z-index: 1;
                         }
                         .customInputFrame-body input[type=text],
                         .customInputFrame-body input[type=number],
                         .customInputFrame-body textarea,
                         .customInputFrame-body .select {
                             resize: both;
                             font-size: 11pt;
                             font-weight: normal;
                             border-radius: 4px;
                             border: 1px solid rgba(0, 0, 0, 0.23);
                             margin: 4px;
                             font-family: inherit;
                             background-color: #FFF;
                             width: calc(100% - 8px);
                             color: #4A4A4A;
                             margin-top: -8px;
                             padding: 4px;
                             padding-top: 8px;
                             box-sizing: border-box;
                         }
                         .customInputFrame-buttons {
                             text-align: center;
                             margin-bottom: 5px;
                             display: flex;
                             justify-content: space-evenly;
                         }
                         .customInputFrame-buttons>button {
                             width: 32%;
                             font-size: 16px;
                             cursor: pointer;
                             border: 1px solid #1976d2;
                             border-radius: 4px;
                             transition: all .3s;
                             color: #fff;
                             background-color: #458bd1;
                             line-height: 25px;
                         }
                         .customInputFrame-buttons>button:hover {
                             color: #e3f2fd;
                         }
                         .customInputFrame-body .select {
                             height: 30px;
                             position: relative;
                         }
                         .customInputFrame-body .select>input[type=text] {
                             top: 0px;
                             left: -7px;
                             position: relative;
                             border: unset!important;
                             width: calc(100% - 25px);
                             padding-bottom: 3px;
                             margin-bottom: -30px;
                             float: left;
                             background: unset;
                             height: 28px;
                         }
                         .customInputFrame-body .select>p {
                             padding: 0;
                             margin: 0;
                             position: absolute;
                             pointer-events: none;
                         }
                         .customInputFrame-body .select>.options {
                             position: absolute;
                             visibility: hidden;
                             opacity: 0;
                             transition: opacity .1s;
                             background-color: #FFF;
                             color: #4A4A4A;
                             border: 1px solid rgba(0, 0, 0, 0.23);
                             border-radius: 4px;
                             z-index: 10;
                             width: auto;
                             max-width: 35%;
                             right: calc(50% - 147px);
                             margin-top: -10px;
                             position: fixed;
                         }
                         .customInputFrame-body .select>input:focus+p {
                             display: none;
                         }
                         .customInputFrame-body .select:hover>.options {
                             visibility: visible;
                             opacity: 1;
                         }
                         .customInputFrame-body .select>.options>p {
                             cursor: pointer;
                             min-height: 20px;
                             padding: 3px 0;
                             margin: 0;
                         }
                         .customInputFrame-body .select>.options>p:hover {
                             background: aliceblue;
                         }
                         .customInputFrame-body div.select:after {
                             content: "\u25BC";
                             position: absolute;
                             right: 6px;
                             top: 8px;
                             font-size: 9px;
                         }
                         @media (prefers-color-scheme: dark) {
                           .customInputFrame-body,
                           .customInputFrame-input-title,
                           .customInputFrame-body input,
                           .customInputFrame-body textarea,
                           .customInputFrame-body .select {
                             background-color: black!important;
                             color: #d5d5d5!important;
                           }
                           .customInputFrame-body input:focus,
                           .customInputFrame-body textarea:focus,
                           .customInputFrame-body .select:focus {
                             background-color: #1e1e1e!important;
                           }
                           .customInputFrame-body input,
                           .customInputFrame-body textarea,
                           .customInputFrame-body .select {
                             border: 1px solid rgb(255 255 255 / 36%)!important;
                             background-color: #0c0c0c!important;
                           }
                           .customInputFrame-title,
                           .customInputFrame-buttons>button {
                             background: #245d8f!important;
                           }
                           .customInputFrame-body .select>.options {
                             border: 1px solid rgb(255 255 255 / 36%)!important;
                             background-color: black;
                             color: #d5d5d5;
                           }
                           .customInputFrame-body .select>.options>p:hover {
                             background: #1e1e1e;
                           }
                         }
                        `),d=document.createElement("div");this.customInputFrame=d,d.innerHTML=Q(`
                         <div class="customInputFrame-body">
                             <a href="${Ae}" class="customInputFrame-title" target="_blank">
                                 <img width="32px" height="32px" src="${ut}" />${A("customInputFrame")}
                             </a>
                             <div id="customGroup">
                             </div>
                             <div class="customInputFrame-input-title">${A("finalSearch")}</div>
                             <textarea name="finalSearch" type="text"></textarea>
                             <div class="customInputFrame-buttons">
                                 <button id="cancel" type="button">${A("cancel")}</button>
                                 <button id="customSubmit" type="button">${A("customSubmit")}</button>
                             </div>
                         </div>
                        `),Ke||d.appendChild(p),d.querySelector("#cancel").addEventListener("click",y=>{d.parentNode&&d.parentNode.removeChild(d),r("")}),d.addEventListener("keydown",y=>{y.keyCode==13&&m.click()});let g=this.customInputFrame.querySelector("#customGroup");this.customGroup=g;let u=this.customInputFrame.querySelector("[name='finalSearch']");this.finalSearch=u,u.addEventListener("click",y=>{i()});let m=d.querySelector("#customSubmit");m.addEventListener("click",y=>{i(),u.value&&this.customInputCallback&&this.customInputCallback(u.value),r(u.value),d.parentNode&&d.parentNode.removeChild(d)})}this.customInputFrame.parentNode&&this.customInputFrame.parentNode.removeChild(this.customInputFrame),this.customGroup.innerHTML=Q();let a=e,n=a.match(/%input{(.*?[^\\])}/);for(;n;){let o=n[1];if(/^".*","/.test(o)?o=o.substr(1,o.length-2).split('","'):o=o.replace(/\\,/g,"\u25CESJ").split(",").map(p=>p.replace(/◎SJ/g,",")),o.length===1){o=o[0].replace(/\\\|/g,"\u25CESJ").split("|").map(f=>f.replace(/◎SJ/g,"|"));let p=document.createElement("div");p.className="customInputFrame-input-title",p.innerText=o[0],this.customGroup.appendChild(p);let d=document.createElement("input");d.type="text",o.length>1&&(d.title=o[1]),this.customGroup.appendChild(d)}else if(o.length>=2){let p=o[0].replace(/\\}/g,"}");/^'.*'\/'/.test(p)?p=p.substr(1,p.length-2).split("'/'"):p=p.replace(/\\\//g,"\u25CESJ").split("/").map(x=>x.replace(/◎SJ/g,"/"));let d=o.slice(1).join(",");/^'.*'\/'/.test(d)?d=d.substr(1,d.length-2).split("'/'"):d=d.replace(/\\\//g,"\u25CESJ").split("/").map(x=>x.replace(/◎SJ/g,"/"));let f=p.length===d.length+1,g=document.createElement("div");g.className="customInputFrame-input-title",g.innerText=p[0],this.customGroup.appendChild(g);let u=document.createElement("input");u.type="text";let m=document.createElement("div");m.className="select",m.appendChild(u);let y=document.createElement("p");y.innerText="Select option",m.appendChild(y);let T=document.createElement("div");T.className="options",m.appendChild(T);let E=document.createElement("p");E.setAttribute("value",""),E.innerHTML=Q("<b>Select option</b>"),T.appendChild(E),E.addEventListener("click",x=>{T.style.visibility="hidden",setTimeout(()=>{T.style.visibility=""},0),u.value="",y.innerText="Select option",i()});for(let x=0;x<d.length;x++){let B=d[x],W=document.createElement("p");if(W.setAttribute("value",B),f){let P=p[x+1];P=P.replace(/\\\|/g,"\u25CESJ").split("|").map(H=>H.replace(/◎SJ/g,"|")),W.innerText=P[0],P.length>1&&(W.title=P[1])}else W.innerText=B;W.addEventListener("click",P=>{T.style.visibility="hidden",setTimeout(()=>{T.style.visibility=""},0),u.value=W.getAttribute("value"),y.innerText="",i()}),T.appendChild(W)}u.addEventListener("change",x=>{y.innerText=""}),m.addEventListener("mouseenter",x=>{m.focus(),T.style.marginTop=-this.customGroup.scrollTop+20+"px"}),this.customGroup.appendChild(m)}a=a.replace(n[0],"\u25CE"),n=a.match(/%input{(.*?[^\\])}/)}this.finalSearch.dataset.url=a,this.finalSearch.value=a.replace(/◎/g,""),this.addToShadow(this.customInputFrame);let s=this.customInputFrame.children[0];s.style.marginTop=-s.offsetHeight/2+"px"})}showModifyWindow(e,t){let r;if(this.modifyWord={},this.addNew=!e&&!t,!this.addNew){if(r=e.oriWord,!r)return;this.modifyWord=e,this.modifySpan=t}if(!this.modifyFrame){let u=Me(`
                    .searchJumperModify-body {
                        width: 300px;
                        min-height: 200px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 50%;
                        margin-top: -160px;
                        margin-left: -150px;
                        z-index: 100000;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                    }
                    .searchJumperModify-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .searchJumperModify-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperModify-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                    }
                    .searchJumperModify-body>input[type=text],
                    .searchJumperModify-body>input[type=number],
                    .searchJumperModify-body>textarea {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.23);
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                    }
                    .searchJumperModify-buttons {
                        text-align: center;
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperModify-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                    }
                    .searchJumperModify-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    #rangePickerBtn {
                        width: 28px;
                        float: right;
                        margin-top: -33px;
                        margin-right: 6px;
                        position: sticky;
                        display: block;
                        cursor: pointer;
                        background: rgb(255 255 255 / 80%);
                    }
                    .searchJumperModify-checkGroup {
                        margin: 5px;
                    }
                    #searchJumperModify-re + label ~ * {
                        display: none;
                    }
                    #searchJumperModify-re:checked + label ~ * {
                        display: inline;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperModify-body,
                      .searchJumperModify-input-title,
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea,
                      .searchJumperModify-body>select {
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .searchJumperModify-body>input:focus,
                      .searchJumperModify-body>textarea:focus,
                      .searchJumperModify-body>select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .searchJumperModify-body>input[type=text],
                      .searchJumperModify-body>input[type=number],
                      .searchJumperModify-body>textarea {
                        border: 1px solid rgb(255 255 255 / 36%)!important;
                      }
                      .searchJumperModify-title,
                      .searchJumperModify-buttons>button {
                        background: #245d8f!important;
                      }
                      #rangePickerBtn {
                        background: rgb(0 0 0 / 80%);
                        fill: white;
                      }
                    }
                    `),m=document.createElement("div");this.modifyFrame=m,m.id="searchJumperModifyWord",m.innerHTML=Q(`
                     <div class="searchJumperModify-body">
                         <a href="${Ae}" class="searchJumperModify-title" target="_blank">
                             <img onerror="this.style.display='none'" width="32px" height="32px" src="${ut}" />${A("modifyWord")}
                         </a>
                         <div class="searchJumperModify-input-title">${A("wordContent")}</div>
                         <input id="searchJumperHighlightWord" name="wordContent" placeholder="words" type="text"/>
                         <div class="searchJumperModify-checkGroup">
                             <input id="searchJumperModify-re" type="checkbox"/>
                             <label for="searchJumperModify-re">${A("re")}</label>
                             <input id="searchJumperModify-case" type="checkbox"/>
                             <label for="searchJumperModify-case">${A("ignoreCase")}</label>
                             <input id="searchJumperModify-link" type="checkbox"/>
                             <label for="searchJumperModify-link">${A("filterLink")}</label>
                         </div>
                         <div class="searchJumperModify-input-title">${A("wordHide")}</div>
                         <input name="wordHide" min="0" placeholder="${A("wordHideTips")}" type="number" />
                         <div class="searchJumperModify-input-title">${A("wordRange")}</div>
                         <input name="wordRange" placeholder="#main" type="text" />
                         <svg id="rangePickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                         <div class="searchJumperModify-input-title">${A("wordStyle")}</div>
                         <input name="wordStyle" placeholder="orange or #333333;color:red;" type="text" />
                         <div class="searchJumperModify-input-title">${A("wordTitle")}</div>
                         <textarea name="wordTitle" type="text" placeholder="Text comment, or @popup to popup, @popup(1) to popup 1st showTips, @popup(name) to popup showTips of target engine"></textarea>
                         <div class="searchJumperModify-buttons">
                             <button id="cancel" type="button">${A("cancel")}</button>
                             <button id="modify" type="button">${A("modify")}</button>
                         </div>
                     </div>
                    `),Ke||m.appendChild(u),m.querySelector("#cancel").addEventListener("click",x=>{m.parentNode&&m.parentNode.removeChild(m)}),m.querySelector("#rangePickerBtn").addEventListener("click",x=>{ke.getSelector(B=>{s.value=B,m.style.display=""}),m.style.display="none"});let E=m.querySelector("#modify");this.modifyBtn=E,E.addEventListener("click",x=>{let B=i.value;if(this.splitSep&&(B=B.replaceAll(this.splitSep,"")),!B)return;let W=B!==this.modifyWord.showWords||d.checked!==this.modifyWord.isRe||f.checked!==this.modifyWord.link;p.checked&&B.indexOf("@")!==0&&(B=`/${B}/${d.checked?"i":""}${f.checked?"l":""}`);let P=o.value;P&&(this.splitSep&&(P=P.replaceAll(this.splitSep,"")),P=P>=0?P:0,B+=`$p{${P}}`);let H=a.value;H&&(this.splitSep&&(H=H.replaceAll(this.splitSep,"")),B+=`$s{${H}}`);let O=JSON.stringify(n.value).replace(/^"|"$/g,"");O&&(this.splitSep&&(O=O.replaceAll(this.splitSep,"")),B+=`$t{${O}}`);let Y=s.value;Y&&(this.splitSep&&(Y=Y.replaceAll(this.splitSep,"")),Y!==this.modifyWord.inRange&&(W=!0),B+=`$in{${Y}}`),this.addNew?(this.wordModeBtn.classList.contains("checked")&&(this.wordModeBtn.classList.remove("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)),this.searchJumperInPageInput.value=B,this.submitInPageWords()):this.replaceWord(this.modifyWord,B,this.modifySpan,W),m.parentNode&&m.parentNode.removeChild(m)}),m.addEventListener("keydown",x=>{x.keyCode==13&&x.target&&x.target.nodeName=="INPUT"&&E.click()})}let i=this.modifyFrame.querySelector("[name='wordContent']"),a=this.modifyFrame.querySelector("[name='wordStyle']"),n=this.modifyFrame.querySelector("[name='wordTitle']"),s=this.modifyFrame.querySelector("[name='wordRange']"),o=this.modifyFrame.querySelector("[name='wordHide']"),p=this.modifyFrame.querySelector("#searchJumperModify-re"),d=this.modifyFrame.querySelector("#searchJumperModify-case"),f=this.modifyFrame.querySelector("#searchJumperModify-link");if(this.addNew)i.value="",a.value="",s.value="",o.value="",n.value="",p.checked=!1,d.checked=!1,f.checked=!1,this.modifyBtn.innerText=A("add");else{this.modifyBtn.innerText=A("modify");let g="",u=/\$s{(.*?)}($|\$)/,m=r.match(u);m&&(g=m[1]),i.value=e.showWords||"",a.value=g||"",s.value=e.inRange||"",p.checked=!!e.isRe,d.checked=!!e.reCase,f.checked=!!e.link,typeof e.hideParent<"u"&&(o.value=e.hideParent);try{e.popup?(n.value="@popup",e.showTips&&(n.value=`@popup(${e.showTips})`)):n.value=e.title!==e.showWords?JSON.parse('"'+e.title+'"'):""}catch(y){pe(y)}}this.addToShadow(this.modifyFrame)}replaceWord(e,t,r,i){if(i)r.parentNode&&r.parentNode.removeChild(r),this.removeHighlightWord(e),this.searchJumperInPageInput.value=t,this.submitInPageWords();else{let a="",n="",s=-1,o=/\$t{(.*?)}($|\$)/,p=t.match(o);p&&(a=p[1],a=JSON.parse('"'+a+'"')),e.title=a,r.title=a;let d=/\$s{(.*?)}($|\$)/,f=t.match(d);if(f){let y=f[1],T="";f=f[1].match(/(.*?);(.*)/),f&&(y=f[1],T=f[2]),n=this.getHighlightStyle(this.curWordIndex,y,T),e.style=n,r.style=n}let g=!1,u=/\$p{(.*?)}($|\$)/,m=t.match(u);m?(s=parseInt(m[1])||0,g=s!=e.hideParent):g=typeof e.hideParent<"u",g&&[].forEach.call(document.querySelectorAll(".searchJumper-hide"),y=>{y.dataset.content===e.showWords&&(y.classList.remove("searchJumper-hide"),y.style.display="",y.removeAttribute("data-content"))}),this.marks[e.showWords].forEach(y=>{if(y&&(y.title=a,n&&(y.style=n),g&&s!=-1)){let T=s,E=y.parentElement;for(;T-- >0&&E;)E=E.parentElement;E&&(E.dataset.content=e.showWords,E.classList.add("searchJumper-hide"),E.innerHTML=Q(""))}}),s==-1?delete e.hideParent:e.hideParent=s,this.lockWords=this.lockWords.replace(e.oriWord,t),e.oriWord=t}}removeHighlightWord(e){if(!this.lockWords||(this.splitSep||this.emptyInPageWords(),!e.oriWord)||this.lockWords.indexOf(e.oriWord)===-1)return;let t=this.lockWords.match(/^\$(c.|o)/),r,i=0;t=t?t[0]:"";let a=this.lockWords.replace(t,"").split(this.splitSep);if(r=a.indexOf(e.oriWord),this.wordModeBtn.classList.contains("checked")){r!=-1&&(a.splice(r,1),i=1);for(let s=0;s<a.length;s++){let o=a[s].split(/[ ]/);if(r=o.indexOf(e.oriWord),r!=-1)if(i++,i==1)o.splice(r,1),a[s]=o.join(" ");else break}this.lockWords=t+a.join(this.splitSep)}else{if(r<0)return;a.splice(r,1),i=a.indexOf(e.oriWord)!=-1?2:1,this.lockWords=t+a.join(this.splitSep)}if(delete this.highlightSpans[e.showWords],r=this.curHighlightWords.indexOf(e),r<0||(this.curHighlightWords.splice(r,1),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",i>1))return;this.marks[e.showWords].forEach(s=>{if(s.parentNode)if(s.dataset.block)s.parentNode&&s.parentNode.removeChild(s);else if(!/^MARK$/i.test(s.nodeName))s.classList.remove("searchJumper"),s.style.cssText=s.dataset.css||"",delete s.dataset.css;else{let o=document.createTextNode(s.firstChild.data);s.parentNode.replaceChild(o,s),o.parentNode.normalize()}}),delete this.marks[e.showWords];let n=[].slice.call(this.navMarks.children);[].forEach.call(n,s=>{s.dataset.content==e.showWords&&s.parentNode.removeChild(s)})}emptyInPageWords(){this.searchInPageLockWords.innerHTML=Q(),this.highlight("")}focusHighlightByText(e,t,r){let i=this.marks[e];if(!i||i.length===0)return;e!=this.focusText?(this.focusIndex=0,this.focusText=e):t?this.focusIndex!=i.length-1?this.focusIndex=this.focusIndex+1:this.focusIndex=0:this.focusIndex!=0?this.focusIndex=this.focusIndex-1:this.focusIndex=i.length-1;let a=this.focusIndex;if(a>=i.length&&(a=0),t)for(;(!i[a].offsetParent||i[a].dataset.type)&&(a!=i.length-1?a=a+1:a=0,a!=this.focusIndex););else for(;(!i[a].offsetParent||i[a].dataset.type)&&(a!=0?a=a-1:a=i.length-1,a!=this.focusIndex););this.focusIndex=a,this.focusHighlight(i[this.focusIndex]),this.setHighlightSpan(r,this.focusIndex,i)}getRect(e){let t=e.getBoundingClientRect(),r={left:t.left,top:t.top,width:t.width,height:t.height},i=e.ownerDocument&&e.ownerDocument.defaultView,a=i&&i.frameElement;for(;a;){const n=a.getBoundingClientRect();r.left+=n.left,r.top+=n.top,i=i.parent,a=i.frameElement}return r}focusHighlight(e){if(!e)return;this.focusMark&&this.focusMark.removeAttribute("data-current"),this.focusMark=e,this.wPosBar||(this.wPosBar=document.createElement("div"),this.hPosBar=document.createElement("div"),this.wPosBar.className="searchJumperPosBar searchJumperPosW",this.hPosBar.className="searchJumperPosBar searchJumperPosH"),this.wPosBar.parentNode||(this.addToShadow(this.wPosBar),this.addToShadow(this.hPosBar));let t=this.getRect(e);this.wPosBar.style.top=t.top+document.documentElement.scrollTop+V(document).scrollTop+"px",this.wPosBar.style.height=t.height+"px",this.hPosBar.style.left=t.left+"px",this.hPosBar.style.width=t.width+"px",this.wPosBar.style.animationName="",this.hPosBar.style.animationName="";let r=this;setTimeout(async()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),e.dataset.current=!0,r.wPosBar.style.animationName="fadeit",r.hPosBar.style.animationName="fadeit",r.fixTimes=0;let i=window.innerHeight||document.documentElement.clientHeight;function a(){if(r.focusMark!=e)return;let n=r.getRect(e);if(r.wPosBar.style.top=n.top+document.documentElement.scrollTop+V(document).scrollTop+"px",r.hPosBar.style.left=n.left+"px",!(r.fixTimes>0&&n.top>i/3&&n.top<i/3*2)){if(++r.fixTimes==5)e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});else if(r.fixTimes>10){e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),r.wPosBar.style.animationName="",r.hPosBar.style.animationName="";return}setTimeout(()=>{a()},200)}}a()},0)}getHighlightSpanByText(e){return this.highlightSpans[e]}setHighlightSpan(e,t,r){if(!e)return;let i=e.querySelector("em");i||(i=document.createElement("em"),e.insertBefore(i,e.firstChild)),t++;let a=0;r&&r.length&&(a=0,r.forEach(n=>{n.dataset.type||a++})),i.innerHTML=Q("["+t+"/"+a+"]")}getHighlightStyle(e,t,r){if(!t&&!r){let n=c.prefConfig.inPageWordsStyles[e];if(n)return n}r=r||"";function i(){let n,s,o;return n=Math.floor(256*Math.random()),s=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),n=n.toString(16),n.length===1&&(n="0"+n),s=s.toString(16),s.length===1&&(s="0"+s),o=o.toString(16),o.length===1&&(o="0"+o),"#"+n+s+o}function a(n){if(n.indexOf("#")!==0)return"";if(n==="#ffff00")return"black";n=n.substr(1);let s,o,p;s=parseInt(n.substr(0,2),16),o=parseInt(n.substr(2,2),16),p=parseInt(n.substr(4,2),16);let d=s*.299+o*.587+p*.114;s=255-s,o=255-o,p=255-p;let f=s*.299+o*.587+p*.114;return Math.abs(f-d)<=128?d>158?"#000000":"#FFFFFF":(s=s.toString(16),s.length===1&&(s="0"+s),o=o.toString(16),o.length===1&&(o="0"+o),p=p.toString(16),p.length===1&&(p="0"+p),"#"+s+o+p)}if(t||(t=c.prefConfig.firstFiveWordsColor[e]),!t)switch(e){case 0:t="#ffff00";break;case 1:t="#e91e63";break;case 2:t="#00bcd4";break;case 3:t="#008000";break;case 4:t="#800080";break;default:t=i();break}if(t){let n=a(t);n&&(n="color:"+n+"!important;"),t=`background:${t}!important;${n}`}return`${t}${r}`}createNavMark(e,t,r,i,a){let n=this,s=document.createElement("span"),o=fr(e,n.targetIframe);s.title=t.title||t.showWords,s.dataset.top=o,s.dataset.content=t.showWords,s.style.top=o/a*100+"%",s.style.background=e.style.background||"yellow",s.addEventListener("click",p=>(p.stopPropagation(),p.preventDefault(),n.focusIndex=r,n.focusHighlight(e),n.setHighlightSpan(n.getHighlightSpanByText(t.showWords),r,i),n.navPointer.style.display="",n.navPointer.style.top=s.offsetTop+33+"px",!1),!0),n.navMarks.appendChild(s)}anylizeDomWithTextPos(e,t){return t||(t={text:"",data:[]}),!e||!e.childNodes||!e.childNodes.length||e.nodeType==1&&!e.offsetParent&&!e.offsetHeight&&(!e.firstElementChild||!e.firstElementChild.offsetParent)||e.childNodes.forEach(r=>{if(r.classList&&r.classList.contains("searchJumper")||/^(img|svg|picture|br|hr|textarea)$/i.test(r.nodeName)){const i=t.text.length;t.text+=`
`,t.data.push({index:i,node:r,text:`
`})}else if(r.offsetParent||r.offsetHeight||r.firstElementChild&&r.firstElementChild.offsetParent)if(/^(div|h\d|p|form|ul|li|ol|dl|address|menu|table|fieldset|td)$/i.test(r.nodeName)){let i=t.text.length;t.text+=`
`,t.data.push({index:i,node:{},text:`
`}),t=this.anylizeDomWithTextPos(r,t),i=t.text.length,t.text+=`
`,t.data.push({index:i,node:{},text:`
`})}else t=this.anylizeDomWithTextPos(r,t);else if(r.nodeType===3){let i;if(r.parentNode.nodeType==1&&r.parentNode.childNodes.length==1?i=r.parentNode.innerText||r.data:i=r.data,!i||!i.trim())return;const a=t.text.length;t.text+=i,t.data.push({index:t.text.length-1,node:r,text:i})}}),t}highlightPopup(e,t){let r=this,i,a=n=>{i&&r.clingPos(e,r.tips)};e.addEventListener("mouseenter",n=>{if(e.addEventListener("mousemove",a),$!=e||!r.funcKeyCall){if(i=null,$=e,t.showTips)if(/^\d+$/.test(t.showTips)){let o=r.autoGetFirstType().querySelectorAll("a.search-jumper-btn[data-show-tips]:not(.notmatch)"),p=parseInt(t.showTips)-1;i=o[p]}else i=r.getTargetSitesByName([t.showTips])[0];r.setFuncKeyCall(!0),i?(r.bar.style.setProperty("display","none","important"),i.dispatchEvent(new CustomEvent("showTips"))):r.showInPage(!0,n)}}),e.addEventListener("mouseleave",n=>{e.removeEventListener("mousemove",a)})}createHighlightMark(e,t,r){let i=this,a=document.createElement("mark");a.className="searchJumper",e.title&&(a.title=JSON.parse('"'+e.title+'"')),e.popup&&this.highlightPopup(a,e),a.style.cssText=e.style,a.addEventListener("click",o=>{if(o.altKey)return o.stopPropagation(),o.preventDefault(),!1}),a.dataset.content=e.showWords;let n,s=()=>{clearTimeout(n),n=setTimeout(()=>{let o=location.href.replace(/#.*/,"")+"#sjhl="+encodeURIComponent(e.oriWord)+"&i="+(t+1);ye.history.replaceState("","",o)},800)};return a.addEventListener("mousedown",o=>{if(s(),!o.altKey)return;let p,d=t;for(;(!p||p.dataset.type)&&(o.button===0?d!=r.length-1?(d++,i.focusIndex=d):i.focusIndex=0:o.button===2&&(d!=0?(d--,i.focusIndex=d):i.focusIndex=r.length-1),p=r[i.focusIndex],d!=t););i.focusHighlight(p),i.setHighlightSpan(i.getHighlightSpanByText(e.showWords),i.focusIndex,r),i.focusText=e.showWords}),a.addEventListener("mouseup",o=>{clearTimeout(n)}),a}createAddonSpan(e,t){let r="addon_"+this.addonsList.children.length,i=this,a=document.createElement("div"),n=document.createElement("input");n.type="checkbox",n.id=r,n.checked=!t.disable,n.addEventListener("change",o=>{c.prefConfig.disableAddon[e]=!n.checked,t.disable=!n.checked,n.checked&&i.findInpageAddons.forEach(p=>{if(p!=t&&p.sort==t.sort){p.disable=!0;let d=p.name||"addon"+r++;i.addonCheckboxDict[d].checked=!1,c.prefConfig.disableAddon[d]=!0}}),U.setItem("searchData",c),i.lockWords&&i.refreshPageWords(i.lockWords)}),a.appendChild(n),a.title=t.title||"";let s=document.createElement("label");s.setAttribute("for",r),s.innerText=e,a.appendChild(s),this.addonCheckboxDict[e]=n,this.addonsList.appendChild(a)}findAccentedWord(e,t,r){const i=t.length;let a=0,n=-1;for(let s=0;s<e.length;s++){const o=r[s];if(o!=="")if(o===t[a]){if(a===0&&(n=s),a++,a===i)return{pos:n,len:s-n+1}}else a=0,n=-1,o===t[0]&&(n=s,a=1)}return n=e.indexOf(t),{len:t.length,pos:n}}findPosInStr(e,t,r,i,a){if(!e)return{len:0,pos:-1};let n=0,s=-1,o=!1;if(this.findInpageAddons.length)for(let p=0;p<this.findInpageAddons.length;p++){let d=this.findInpageAddons[p];if(!d||!d.run||d.disable)continue;o=!0;let f=d.run(e,t);if(f&&f.matched){n=f.len,s=f.pos;break}}return s==-1&&!o?this.findAccentedWord(r,i,a):{len:n,pos:s}}highlight(e,t,r,i){if(!e&&(!this.curHighlightWords||this.curHighlightWords.length===0))return;if(!t){this.highlight(e,V(document),r);return}if([].forEach.call(t.getElementsByTagName("iframe"),u=>{if(!u.offsetParent||u.offsetHeight<100||u.offsetWidth<100)return;let m;try{m=u.contentDocument||u.contentWindow.document}catch{return}m&&V(m)&&this.highlight(e,V(m),r,u)}),this.targetIframe=i||!1,t.id=="searchJumperModifyWord")return;t=t||V(document);let a=this.wordModeBtn.classList.contains("checked"),n=[],s=!1,o=this;if(e===""){this.highlightSpans={},Object.values(this.marks).forEach(async u=>{if(!u)return;let m=new Set;for(let y of u)if(y.parentNode)if(y.dataset.block)y.parentNode&&y.parentNode.removeChild(y);else if(!/^MARK$/i.test(y.nodeName))y.classList.remove("searchJumper"),y.style.cssText=y.dataset.css||"",delete y.dataset.css;else{let T=document.createTextNode(y.firstChild.data);y.parentNode.replaceChild(T,y),m.add(T.parentNode)}m.forEach(y=>{y.normalize()})}),[].forEach.call(t.querySelectorAll(".searchJumper-hide"),u=>{u.classList.remove("searchJumper-hide"),u.style.display="",u.removeAttribute("data-content")}),this.navMarks.innerHTML=Q(),this.marks={},this.curHighlightWords=[];return}this.inPageStyle||(this.inPageStyle=Me(this.inPageCss)),this.inPageStyle.parentNode||document.head.appendChild(this.inPageStyle);let p=e==="insert";p?(e=this.curHighlightWords,this.refreshNavMarks()):this.curHighlightWords=(this.curHighlightWords||[]).concat(e),this.fakeTextareas=new Map;let d=Math.max(document.documentElement.scrollHeight,V(document).scrollHeight);this.navMarks.style.display="none";let f=[];function g(u,m,y){let T,E=-1,x,B,W,P;x=0;let H=u.parentNode;if(u.nodeType==1&&u.className&&u.className.indexOf&&u.className.indexOf("searchJumper")!=-1)return 0;if(y&&(u.nodeType==1||u.nodeType==11)){let S=function(D,_,ee){let ne=[],v=_,w="",h="",C="";for(const I of G){const R=I.index;if(D>R)continue;let z=D-(R-I.text.length)-1,F="full";if(z<0?I.text.length<v?F="middle":F="end":I.text.length-z<v&&(F="start"),F==="full"&&(ee=""),ie&&(F=="full"?(w=z==0?`
`:I.text[z-1],h=z+v==I.text.length?`
`:I.text[z+v],h!==`
`&&(C=z+v+1==I.text.length?`
`:I.text[z+v+1])):F=="start"&&!w?w=z==0?`
`:I.text[z-1]:(F=="end"||F=="full")&&!h&&(h=z+v==I.text.length?`
`:I.text[z+v],h!==`
`&&(C=z+v+1==I.text.length?`
`:I.text[z+v+1])),w&&h&&(/[a-z]/i.test(w)||/[a-rt-z]/i.test(h)||h.toLowerCase()=="s"&&/[a-z]/i.test(C))))break;z<0&&(z=0);let ce=Math.min(v,I.text.length-z);if(v-=ce,!I.text.trim()){F==="start"&&(D+=I.text.length);continue}let oe;for(let fe=0;fe<te.length;fe++)if(te[fe].node==I.node){oe=te[fe];break}if(oe?oe.match.push({pos:z,len:ce,type:F,matched:ee}):te.push({node:I.node,text:I.text,match:[{pos:z,len:ce,type:F,matched:ee}]}),v<=0)break}},J=function(){if(E=-1,m.isRe){let D=k.match(new RegExp(m.content,m.reCase));D&&(T=D[0].length,E=D.index)}else{let D=o.findPosInStr(k,m.content,j,N,M);T=D.len,E=D.pos}if(E>-1){let D=k.slice(E,E+T);k=k.slice(E+T),j=j.slice(E+T),M=M.slice(E+T),E+=ue,ue=E+T,S(E,T,D),J()}},b=o.anylizeDomWithTextPos(u),k=b.text,j=k.toUpperCase(),M=[];for(let D=0;D<j.length;D++){const _=j[D].normalize("NFD").replace(/[\u0300-\u036f]/g,"");M.push(_)}let N=m.content.toUpperCase(),G=b.data,ue=0,te=[],ie=(m.init||a)&&/^[a-z]+$/i.test(m.content);J(),te.length&&te.forEach(D=>{if(typeof m.hideParent<"u"){let _=m.hideParent,ee=D.node.parentElement;for(;_-- >0&&ee;)ee=ee.parentElement;ee&&ee.classList&&!ee.classList.contains("searchJumper-hide")&&(ee.innerHTML=Q(""),ee.dataset.content=m.showWords,ee.classList.add("searchJumper-hide"))}else{let _=o.marks[m.showWords],ee=_.length,ne,v,w="";D.node.parentNode.nodeType==1&&(w=getComputedStyle(D.node.parentNode).display),w.indexOf("flex")!=-1||w.indexOf("grid")!=-1||w.indexOf("layer")!=-1?(v=document.createElement("span"),v.style.all="unset"):v=document.createDocumentFragment();let h=document.createTextNode(D.text);v.appendChild(h);let C=D.match.reverse(),I=[],R=C.length-1;C.forEach(z=>{switch(ne=o.createHighlightMark(m,ee+R,_),z.type){case"start":ne.style.borderTopRightRadius=0,ne.style.borderBottomRightRadius=0,R--;break;case"middle":ne.style.borderRadius=0;break;case"end":ne.style.borderTopLeftRadius=0,ne.style.borderBottomLeftRadius=0;break;default:R--;break}W=h.splitText(z.pos),z.type!="start"&&z.type!="middle"&&W.data.length&&W.splitText(z.len),P=W.cloneNode(!0),ne.appendChild(P),z.type!="full"&&z.type!="start"&&(ne.dataset.type=z.type),z.matched&&(ne.dataset.matched=z.matched),v.replaceChild(ne,W),I.unshift(ne)}),D.node.parentNode.replaceChild(v,D.node),o.marks[m.showWords].push(...I),I.forEach(z=>{z.dataset.type||f.push([z,m,ee,_,d])})}})}let O=!0;if(m.link){if(u.nodeType==1&&u.href&&u.href.match&&(O=!1,u.href.match(new RegExp(m.content,m.reCase))))if(typeof m.hideParent<"u"){let k=m.hideParent,j=u;for(;k-- >0&&j;)j=j.parentElement;if(j)return j.innerHTML=Q(""),j.dataset.content=m.showWords,j.classList.add("searchJumper-hide"),0}else{let k=o.marks[m.showWords],j=k.length;u.classList.add("searchJumper"),m.title&&(u.title=JSON.parse('"'+m.title+'"')),m.popup&&o.highlightPopup(u,m),u.dataset.css||(u.dataset.css=u.style.cssText),m.style&&(u.style.cssText+=m.style),u.addEventListener("click",M=>{if(M.altKey)return M.stopPropagation(),M.preventDefault(),!1}),u.dataset.content=m.showWords,u.addEventListener("mousedown",M=>{if(!M.altKey)return;let N;M.button===0?j!=k.length-1?o.focusIndex=j+1:o.focusIndex=0:M.button===2&&(j!=0?o.focusIndex=j-1:o.focusIndex=k.length-1),N=k[o.focusIndex],o.focusHighlight(N),o.setHighlightSpan(o.getHighlightSpanByText(m.showWords),o.focusIndex,k),o.focusText=m.showWords}),o.marks[m.showWords].push(u),f.push([u,m,j,k,d])}}else{let b="";if(u.nodeType==1&&u.value&&(u.offsetParent||u.offsetHeight)&&!m.init&&/^(button|select|input|textarea)$/i.test(u.nodeName)&&!/^(hidden|file|password|radio|range|checkbox|image)$/i.test(u.type)&&(b=u.value),b){let J=function(D,_){if(D){if(!M){M=document.createElement("pre"),M.className="searchJumper";let v=document.createTextNode(b);M.appendChild(v);let w,h=/^(number|string)$/,C=[],I=u.style;for(w in I)if(!/^(content|outline|outlineWidth)$/.test(w)){let R=N[w];R!==""&&h.test(typeof R)&&(w=w.replace(/([A-Z])/g,"-$1").toLowerCase(),C.push(w),C.push(":"),C.push(R),C.push(";"))}C=C.join(""),M.style.cssText=C,M.style.position="fixed",M.style.left="0px",M.style.top="0px",M.style.margin="0",u.nodeName&&u.nodeName.toLowerCase&&u.nodeName.toLowerCase()!=="textarea"&&(M.style.display="inline-grid",M.style.lineHeight=M.style.height,M.style.boxSizing=="border-box"&&(M.style.paddingTop=0)),o.fakeTextareas.set(u,M)}document.body.appendChild(M);let ee=document.createRange();ee.setStart(M.firstChild,Math.min(M.firstChild.length,_)),ee.setEnd(M.firstChild,Math.min(M.firstChild.length,_+1));let ne=ee.getBoundingClientRect();if(document.body.removeChild(M),typeof m.hideParent<"u"){let v=m.hideParent,w=u.parentElement;for(;v-- >0&&w;)w=w.parentElement;if(w)return w.innerHTML=Q(""),w.dataset.content=m.showWords,w.classList.add("searchJumper-hide"),0}else{let v=o.marks[m.showWords],w=v.length,h=document.createElement("mark");h.className="searchJumper",h.dataset.block=!0,m.title&&(h.title=JSON.parse('"'+m.title+'"')),h.style.cssText=m.style,h.dataset.content=m.showWords,h.innerText=D,h.style.padding="0",h.style.position="absolute",h.style.fontSize=M.style.fontSize,h.style.fontFamily=M.style.fontFamily,h.style.lineHeight="1",h.style.pointerEvents="none",u.parentNode.appendChild(h);let C=ne.left+G,I=ne.top+ue;if(h.style.left=C+"px",h.style.top=I+"px",o.marks[m.showWords].push(h),f.push([h,m,w,v,d]),u.nodeName&&u.nodeName.toLowerCase&&u.nodeName.toLowerCase()=="textarea"){let R=z=>{h.parentNode?(h.style.left=C-u.scrollLeft+"px",h.style.top=I-u.scrollTop+"px"):(h.parentNode.removeChild(h),u.removeEventListener("scroll",R))};u.addEventListener("scroll",R)}}}};O=!1;let k=!1,j=0,M=o.fakeTextareas.get(u);if(p&&M)return 0;let N=getComputedStyle(u),G=u.offsetLeft,ue=u.offsetTop,te=b.toUpperCase(),ie=[];for(let D=0;D<te.length;D++){const _=te[D].normalize("NFD").replace(/[\u0300-\u036f]/g,"");ie.push(_)}let S=m.content.toUpperCase();for(;;){if(m.isRe)k=b.match(new RegExp(m.content,m.reCase)),k&&(E=k.index,k=k[0]);else{let D=o.findPosInStr(b,m.content,te,S,ie);T=D.len,E=D.pos,(m.init||a)&&E>=0&&/^[a-z]+$/i.test(m.content)&&(E!==0&&/[a-z]/i.test(b[E-1])&&(E=-1),E+m.content.length!==b.length&&/[a-z]/i.test(b[E+T])&&(E=-1)),k=E>=0?b.slice(E,E+T):!1}if(k)J(k,j+E),j+=E+k.length,b=b.slice(E+k.length),te=te.slice(E+k.length),ie=ie.slice(E+k.length);else break}}}if(O&&(!r||u===t)&&(u.nodeType==1||u.nodeType==11)&&u.childNodes&&!/^(SCRIPT|STYLE|MARK|SVG|TEXTAREA)$/i.test(u.nodeName)&&(!m.init||u.ariaHidden!="true"&&u.role!="search"&&(!u.hasAttribute||u.hasAttribute("jsname")==!1)))if(!s&&/^(PRE|CODE)$/i.test(u.nodeName))n.push(u);else{for(var Y=0;Y<u.childNodes.length;++Y)Y=Y+g(u.childNodes[Y],m);try{u.shadowRoot&&(Y=Y+g(u.shadowRoot,m,!0))}catch(b){pe(b)}}return x}e.forEach(u=>{if(o.marks[u.showWords]||(o.marks[u.showWords]=[]),u.inRange){let m=t;t.parentNode&&(m=t.parentNode),[].forEach.call(m.querySelectorAll(u.inRange),y=>{(y==t||t.contains(y))&&g(y,u,!0)})}else g(t,u,!0)}),f.forEach(u=>{o.createNavMark(...u)}),this.navMarks.style.display="",setTimeout(()=>{o.navMarks.style.display="none",f=[],s=!0,e.forEach(u=>{o.marks[u.showWords]||(o.marks[u.showWords]=[]),n.forEach(m=>{g(m,u,!0)})}),f.forEach(u=>{o.createNavMark(...u)}),o.navMarks.style.display=""},1e3),this.navMarks.innerHTML!=""&&(this.searchJumperNavBar.classList.add("sjNavShow"),Ye&&(this.appendBar(),this.con.style.display="",this.setNav(!0,!0)))}refreshPageWords(e){this.lockWords="",this.searchJumperInPageInput.value="",this.searchInPageLockWords.innerHTML=Q(),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords();let t=e||Ne;t&&(this.searchJumperInPageInput.value=t,this.submitInPageWords(t==this.lastSearchEngineWords),this.appendBar())}refreshNav(){this.setNav(Ye)}refreshNavMarks(){this.refreshNavMarksTimer&&clearTimeout(this.refreshNavMarksTimer),this.refreshNavMarksTimer=setTimeout(()=>{let e=Math.max(document.documentElement.scrollHeight,V(document).scrollHeight);this.navPointer.style.display="none",this.navMarks.style.display="none",[].forEach.call(this.navMarks.children,t=>{t.style.top=t.dataset.top/e*100+"%"}),this.navMarks.style.display=""},1e3)}checkCharacterData(e){setTimeout(()=>{this.highlight("insert",e,!0)},0)}removeMark(e){let t=e.dataset.content,r=this.marks[t];if(!r)return;var i=r.indexOf(e);if(i===-1)return;r.splice(i,1),this.marks[t]=r;let a=this.navMarks.querySelectorAll(`span[data-content="${t}"]`)[i];a&&this.navMarks.removeChild(a)}submitIgnoreSpace(e){e&&(!this.lockWords&&e.indexOf("$c")!==0&&e.indexOf("$o")!==0&&e.indexOf(" ")!==-1&&(this.splitSep="\u25CE"),this.searchJumperInPageInput.value=e,this.submitInPageWords())}siteBtnReturnHome(e){e.parentNode&&e.parentNode.removeChild(e)}closeShowAll(){if(!(!this.con.classList.contains("search-jumper-showall")||et)){if(this.clearInputHide(),clearInterval(this.showAllTimeTimer),document.removeEventListener("mousedown",self.showAllMouseHandler),document.removeEventListener("keydown",self.showAllKeydownHandler),this.con.classList.remove("search-jumper-showall"),document.documentElement.style.scrollbarWidth=this.preScrollbarWidth,this.searchJumperInputKeyWords.value="",this.historylist.innerHTML=Q(),this.touched=!1,this.initPos(),this.funcKeyCall&&this.setFuncKeyCall(!1),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){let e=this.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(e&&!e.classList.contains("search-jumper-open"))if(e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}this.bar.style.display=""}}toggleShowAll(){this.appendBar(),!(!this.con||!this.con.parentNode)&&(this.con.classList.contains("search-jumper-showall")?this.closeShowAll():this.showAllSites())}showAllSites(){if(!this.con||!this.con.parentNode||this.con.classList.contains("search-jumper-showall"))return;this.con.style.display="",this.clearInputHide(),this.alllist.appendChild(this.filterSites),this.filterGlob.innerHTML=Q();let e=this,t=this.tileInput.value;this.setFuncKeyCall(!1),this.hideSearchInput(),this.con.classList.add("search-jumper-showall"),this.preScrollbarWidth=document.documentElement.style.scrollbarWidth||"",document.documentElement.style.scrollbarWidth="none",clearInterval(this.showAllTimeTimer);const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];window.innerWidth<1e3?(e.timeInAll.style.fontSize="15px",e.dayInAll.style.fontSize="15px"):(e.timeInAll.style.fontSize="",e.dayInAll.style.fontSize="");let i=new Date,a=i.getFullYear(),n=i.getMonth(),s=i.getDate(),o=A(r[i.getDay()])+"<br/>"+a+"-"+(++n<10?"0"+n:n)+"-"+(s<10?"0"+s:s);if(Fe.indexOf("zh")==0){let f=gr(a,n,s);if(f){let g=`${f.lunarYear}\u5E74${f.lunarMonth}\u6708${f.lunarDay}`;o=o+"<br/>"+g}}e.dayInAll.innerHTML=Q(o);let p=()=>{let f=new Date,g=f.getHours(),u=f.getMinutes(),m=f.getSeconds();e.timeInAll.innerText=(g<10?"0"+g:g)+":"+(u<10?"0"+u:u)+":"+(m<10?"0"+m:m)};this.showAllTimeTimer=setInterval(p,1e3),p(),Se.forEach(f=>{if(f.style.display!="none"){let g=f.querySelector(".sitelist");g&&(e.sitelistBox.appendChild(g),e.initList(g))}}),this.historySiteBtns.slice(0,20).forEach(f=>{let g=f.querySelector("img");g&&g.dataset.src&&(g.src=g.dataset.src,delete g.dataset.src),e.historylist.appendChild(f)});let d="";$&&($.nodeName.toUpperCase()=="A"||$.parentNode&&$.parentNode.nodeName.toUpperCase()=="A")&&(d=$.textContent.trim()),t=t||Xe()||d||Ee,this.searchJumperInputKeyWords.value=t,setTimeout(()=>{e.showAllMouseHandler||(e.showAllMouseHandler=f=>{(f.isTrusted==!1||f.target.className==="sitelistBox"||f.target.className==="search-jumper-showallBg")&&e.closeShowAll()}),e.con.addEventListener("mousedown",e.showAllMouseHandler),e.showAllKeydownHandler||(e.showAllKeydownHandler=f=>{f.keyCode==27&&e.closeShowAll()}),document.addEventListener("keydown",e.showAllKeydownHandler,!0),this.searchJumperInputKeyWords.value&&(this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select())},0)}switchSite(e){if(!ae||this.bar.style.display=="none")return;let t=this.con.querySelector(".search-jumper-btn.current");if(e)for(t=t.nextElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.nextElementSibling;else for(t=t.previousElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.previousElementSibling;t&&this.openSiteBtn(t,"_self")}clearInputHide(){Se.forEach(e=>{e.classList.remove("input-hide")}),this.allSiteBtns.forEach(e=>{e[0].classList.remove("input-hide")}),this.allListBtns.forEach(e=>{e.classList.remove("input-hide")}),this.allLists.forEach(e=>{e.classList.remove("input-hide")})}showSearchInput(){if(this.con&&this.con.classList.contains("search-jumper-showall"))return;this.recoveHistory(),this.con.classList.add("in-input"),this.searchInput.value="",this.contentContainer.appendChild(this.filterSites);let e=We();if(e&&(this.searchJumperInputKeyWords.value=e),this.filterSitesTab.checked){this.con.classList.remove("in-find"),c.prefConfig.defaultPicker&&this.togglePicker(),this.searchJumperInputKeyWords.value||(this.searchJumperInputKeyWords.value=Xe()||Ee);let t=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)>span");if(t&&!t.parentNode.classList.contains("search-jumper-open"))if(t.onmouseup)t.onmouseup();else{let r=new PointerEvent("mouseup");t.dispatchEvent(r)}xt&&(this.searchInput.value=xt,this.searchInput.dispatchEvent(new Event("input"))),this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select()}else this.searchInPageTab.checked&&(this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),setTimeout(()=>{e&&this.lockWords.indexOf(e)==-1?(this.searchJumperInPageInput.value="",this.navMarks.innerHTML?(this.searchJumperInPageInput.value=e,this.submitInPageWords()):this.submitIgnoreSpace(e)):this.searchJumperInPageInput.value?this.submitInPageWords():!this.initShowSearchInput&&Ee&&this.lockWords!==Ee&&(this.searchJumperInPageInput.value=Ee,this.initShowSearchInput=!0,this.searchJumperInPageInput.select())},10));this.inInput=!0,this.clearInputHide(),this.lockWords?this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px":this.searchJumperInPageInput.style.paddingLeft="",c.prefConfig.altToHighlight&&(document.removeEventListener("mouseup",this.checkSelHandler),document.addEventListener("mouseup",this.checkSelHandler))}togglePicker(){this.pickerBtn.classList.toggle("checked"),this.con.classList.toggle("in-pick"),this.searchJumperInputKeyWords.disabled=!this.searchJumperInputKeyWords.disabled,ke.toggle(!0),this.searchJumperInputKeyWords.disabled&&(this.searchJumperInputKeyWords.value="")}hideSearchInput(){this.inInput=!1,this.clearInputHide(),this.con.classList.remove("in-find"),this.con.classList.remove("in-input"),this.con.classList.remove("lock-input"),this.bar.classList.remove("initShow"),this.searchInput.value="",this.searchJumperInputKeyWords.value="",this.pickerBtn.classList.remove("checked"),this.searchJumperInputKeyWords.disabled=!1,ke.close(),document.removeEventListener("mouseup",this.checkSelHandler),this.setFuncKeyCall(!1),this.closeOpenType()}removeBar(){this.shadowContainer&&this.shadowContainer.parentNode&&this.shadowContainer.parentNode.removeChild(this.shadowContainer),this.con.parentNode&&this.con.parentNode.removeChild(this.con)}async testCSP(){let e=this,t=i=>{!i.violatedDirective||i.violatedDirective.indexOf("style-src")==-1||(Ke=!0)};window.addEventListener("securitypolicyviolation",t);let r=Me("html {color: #000;}");this.addToShadow(r),await $e(0),window.removeEventListener("securitypolicyviolation",t),r.parentNode&&r.parentNode.removeChild(r)}addToShadow(e){this.shadowContainer||(this.shadowContainer=document.createElement("div")),this.shadowContainer.parentNode||(Te?document.body.appendChild(this.shadowContainer):document.documentElement.appendChild(this.shadowContainer));let t;if(Ke){if(/^style$/i.test(e.nodeName))return!0;t=this.shadowContainer}else if(this.shadowRoot)t=this.shadowRoot;else{this.shadowContainer.className="search-jumper-shadow";let r=Me(`
                         .search-jumper-shadow {
                          display: block !important;
                          width: 0px !important;
                          height: 0px !important;
                          margin: 0px !important;
                          padding: 0px !important;
                          border-width: initial !important;
                          border-style: none !important;
                          border-color: initial !important;
                          border-image: initial !important;
                          outline: none !important;
                          position: unset !important;
                         }
                        `);this.shadowContainer.appendChild(r);let i=this.shadowContainer.attachShadow({mode:"closed"});t=document.createElement("div"),t.id="search-jumper-root",t.style.display="none",t.setAttribute("contenteditable","false");let a=document.createElement("style");a.innerHTML=Q("#search-jumper-root{display: block!important;}"),t.appendChild(a),i.appendChild(t),this.shadowRoot=t}return e.parentNode!=t&&t.appendChild(e),!0}contains(e){return e==this.shadowContainer||this.bar.contains(e)}appendBar(){if((!Ze||!Ze.parentNode)&&(Ze=Me(Et),Ke||this.addToShadow(Ze)),this.addToShadow(this.con)){let e=this,t=()=>{setTimeout(()=>{if(e.shadowContainer&&!e.shadowContainer.parentNode){Te?document.body.appendChild(e.shadowContainer):document.documentElement.appendChild(e.shadowContainer),t();return}!et&&e.con.parentNode&&getComputedStyle(e.con).zIndex!="2147483647"&&(this.removeBar(),Ke?pe(A("cspDisabled")):(Ke=!0,Ze=Me(Et),e.shadowContainer.parentNode.removeChild(e.shadowContainer),e.shadowContainer=document.createElement("div"),e.shadowContainer.setAttribute("contenteditable","false"),document.documentElement.appendChild(e.shadowContainer),e.appendBar()))},100)};t()}}async searchBySiteName(e,t,r){t||(t={}),t&&t.type==="drop"&&this.closeShowAll();for(let[i,a]of this.allSiteBtns)if(i.dataset.name==e){if(i.dataset.showTips){i.dispatchEvent(new CustomEvent("showTips"));return}await this.siteSetUrl(i,{button:t.button,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey});let n=/^(https?|ftp):/.test(i.href);n&&i.setAttribute("target",r?"_self":"_blank"),i.click(),n&&i.setAttribute("target",i.dataset.target==1?"_blank":"_self");return}for(let i=Se.length-1;i>=0;i--){let a=Se[i];if(a.dataset.type==e){a.firstChild.onmouseup&&a.firstChild.onmouseup({button:2});return}}}async searcAllhByTypeName(e){for(let t=Se.length-1;t>=0;t--){let r=Se[t];if(r.dataset.type==e){r.firstChild.onmouseup&&r.firstChild.onmouseup({button:2});return}}}autoGetFirstType(){$||($=V(document));let e;switch($.nodeName.toUpperCase()){case"IMG":e=this.bar.querySelector(".search-jumper-targetImg:not(.notmatch)");break;case"AUDIO":e=this.bar.querySelector(".search-jumper-targetAudio:not(.notmatch)");break;case"VIDEO":e=this.bar.querySelector(".search-jumper-targetVideo:not(.notmatch)");break;case"A":We()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)");break;default:We()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):$.parentNode.nodeName.toUpperCase()==="A"?e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetPage:not(.notmatch)");break}if(e||(e=this.bar.querySelector(".search-jumper-targetAll:not(.notmatch)")||this.bar.querySelector(".search-jumper-type")),e){this.setFuncKeyCall(!1);let t=new PointerEvent("mouseup");e.classList.contains("search-jumper-open")&&(e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)),e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)}return e}searchAuto(e,t){e||(e=0);let r=this.autoGetFirstType();if(!r)return;let i=r.querySelectorAll("a.search-jumper-btn:not(.notmatch)");if(e<i.length){let a=i[e];this.searchBySiteName(a.dataset.name,t)}}setNav(e,t){!t&&Ye!=e&&(U.setItem("navEnable",e||""),Ye=e),e?(t||this.locBtn.classList.add("checked"),this.searchJumperNavBar.style.display=""):(t||this.locBtn.classList.remove("checked"),this.searchJumperNavBar.style.display="none",this.navPointer.style.display="none")}lockSearchInput(e){this.lockSiteKeywords=!0,this.searchLockInput.innerText=e,this.con.classList.add("lock-input"),this.searchInput.value="",this.searchInput.style.paddingLeft=`${15+this.searchLockInput.scrollWidth}px`,this.searchInput.placeholder=A("inputKeywords")}async initRun(){let e=this;this.siteIndex=1,this.customInput=!1,this.fontPool=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.dockerScaleBtns=[],this.bar.style.visibility="hidden";let t=0,r=[];this.checkSelHandler=S=>{S.altKey&&this.searchInPageTab.checked&&window.getSelection().toString()&&this.showSearchInput()},this.splitSep="\u25CE",this.lockWords="",this.marks={},this.initInPageWords=[],this.highlightSpans={},this.curHighlightWords=[],this.curWordIndex=0;let i=()=>{this.searchJumperInPageInput.focus(),this.highlight("");let S=this.lockWords.trim();if(!S){this.submitInPageWords();return}this.searchJumperInPageInput.value&&(S+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=S,this.searchInPageLockWords.innerHTML=Q(),this.searchJumperInPageInput.style.paddingLeft=""};document.addEventListener("keydown",S=>{S.keyCode===27&&(et?(this.searchInput.value="",this.searchInput.dispatchEvent(new CustomEvent("input"))):this.inInput?this.hideSearchInput():this.lockWords?(this.highlight(""),this.searchJumperInPageInput.value=this.lockWords,this.lockWords="",this.searchInPageLockWords.innerHTML=Q(),this.setNav(!1,!0)):this.funcKeyCall&&this.removeBar())},!0),this.searchJumperInPageInput.addEventListener("focus",S=>{this.searchInputDiv.classList.add("active")}),this.searchJumperInPageInput.addEventListener("blur",S=>{this.searchInputDiv.classList.remove("active")}),this.searchJumperInPageInput.addEventListener("keydown",S=>{switch(S.stopPropagation(),S.keyCode){case 8:if(!this.searchJumperInPageInput.value){let J=this.searchInPageLockWords.lastChild;J&&(J.dispatchEvent(new CustomEvent("editword")),S.preventDefault())}break;case 9:S.preventDefault(),this.filterSitesTab.checked=!0,this.con.classList.remove("in-find"),this.searchInput.focus();break;case 13:{let J=this.searchJumperInPageInput.value?this.submitInPageWords():[];if(J&&J.length>0){let D=J.pop();this.currentSearchInPageLockWords&&(this.currentSearchInPageLockWords.firstChild.style.transform=""),this.currentSearchInPageLockWords=D;let _=new PointerEvent("mousedown",{button:S.shiftKey?2:0});D.dispatchEvent(_)}else if(this.lockWords){this.currentSearchInPageLockWords||(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)");let D=new PointerEvent("mousedown",{button:S.shiftKey?2:0});this.currentSearchInPageLockWords.dispatchEvent(D)}}break;case 37:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.previousElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.previousElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;case 39:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.nextElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.nextElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;default:break}},!0),this.editBtn.addEventListener("click",S=>{i()}),this.addWord.addEventListener("click",S=>{this.showModifyWindow()}),this.searchInPageTab.addEventListener("change",S=>{this.initSetInPageWords(),this.searchJumperInPageInput.focus(),this.con.classList.add("in-find")}),this.filterSitesTab.addEventListener("change",S=>{this.searchInput.focus(),this.con.classList.remove("in-find")}),Ne?(this.recoverBtn.addEventListener("click",S=>{this.lockWords="",this.searchJumperInPageInput.value=Ne,this.searchInPageLockWords.innerHTML=Q(),this.highlight(""),this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.pinBtn.classList.add("checked")):this.recoverBtn.style.display="none",this.pinBtn.addEventListener("click",S=>{this.submitInPageWords(),this.pinBtn.classList.contains("checked")?(Ne="",this.pinBtn.classList.remove("checked")):this.lockWords&&(Ne=this.lockWords,this.pinBtn.classList.add("checked")),U.setItem("globalInPageWords",Ne)}),this.wordModeBtn.addEventListener("click",S=>{this.wordModeBtn.classList.contains("checked")?this.wordModeBtn.classList.remove("checked"):this.wordModeBtn.classList.add("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)}),this.saveRuleBtn.addEventListener("click",S=>{this.lockWords&&(Te||Dt(()=>{let J=c.prefConfig.inPageRule||{};J[this.inPageRuleKey||de.replace(/([&\?]_i=|#).*/,"")]=this.lockWords,c.prefConfig.inPageRule=J,c.lastModified=new Date().getTime(),jt=c.lastModified,U.setItem("searchData",c),Ce(A("save completed"))}))}),this.emptyBtn.addEventListener("click",S=>{this.lockWords="",this.searchJumperInPageInput.value="",this.searchInPageLockWords.innerHTML=Q(),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.copyInPageBtn.addEventListener("click",S=>{this.lockWords&&(He(this.lockWords.replace(/◎/g,`
`)),Ce("Copied successfully!"))}),this.setNav(Ye),this.locBtn.addEventListener("click",S=>{this.setNav(!this.locBtn.classList.contains("checked"))}),this.closeNavBtn.addEventListener("click",S=>{this.lockWords?(this.searchJumperInPageInput.value=this.lockWords||"",this.lockWords="",this.searchInPageLockWords.innerHTML=Q(),this.searchJumperInPageInput.style.paddingLeft="",this.highlight(""),this.searchJumperInPageInput.focus(),this.setNav(!1,!0),U.setItem("disableHighlight",location.hostname),this.bar.style.display==="none"&&this.removeBar()):this.setNav(!1)}),this.minNavBtn.addEventListener("click",S=>{if(this.searchJumperNavBar.classList.contains("minimize")){if(this.searchJumperNavBar.classList.remove("minimize"),this.lockWords.trim())return;this.submitInPageWords()}else{this.searchJumperNavBar.classList.add("minimize"),this.highlight("");let J=this.lockWords.trim();if(!J)return;this.searchJumperInPageInput.value&&(J+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=J,this.searchInPageLockWords.innerHTML=Q(),this.searchJumperInPageInput.style.paddingLeft=""}}),this.maxNavBtn.addEventListener("click",S=>{e.showInPage(),e.showInPageSearch()}),this.navMarks.addEventListener("click",S=>{let J=S.offsetY/this.navMarks.clientHeight*100,D=[].slice.call(this.navMarks.querySelectorAll("span"));D.sort((ee,ne)=>(ee=parseFloat(ee.style.top),ne=parseFloat(ne.style.top),ee>ne?1:ee<ne?-1:0));let _;for(let ee=0;ee<D.length;ee++){_=D[ee];let ne=parseFloat(_.style.top);if(ne>J){if(ee>0){let v=D[ee-1],w=parseFloat(v.style.top);ne-J>J-w&&(_=v)}break}}_&&_.click()}),this.bar.addEventListener("mousedown",S=>{S&&S.stopPropagation&&S.stopPropagation(),S&&S.preventDefault&&S.preventDefault()}),this.con.addEventListener("dblclick",S=>{S.stopPropagation(),S.preventDefault()});let a=S=>{S.stopPropagation(),S.preventDefault();let J=e.searchJumperExpand.parentNode;if(!J||!J.classList.contains("not-expand"))return;J.classList.remove("not-expand"),J.classList.remove("search-jumper-move");let D=e.con.classList.contains("search-jumper-left")||e.con.classList.contains("search-jumper-right");J.removeChild(e.searchJumperExpand);let _=Math.max(J.scrollWidth,J.scrollHeight)+5+"px";D?(J.style.height=_,J.style.width=""):(J.style.width=_,J.style.height=""),setTimeout(()=>{e.checkScroll(),J.classList.add("search-jumper-move")},251)},n;this.searchJumperExpand.addEventListener("click",a,!0),this.searchJumperExpand.addEventListener("contextmenu",a,!0),this.searchJumperExpand.addEventListener("mouseenter",S=>{c.prefConfig.overOpen&&(clearTimeout(n),n=setTimeout(()=>{a(S)},500));let J=new CustomEvent("sitelist",{detail:{bind:S.currentTarget}});S.currentTarget.parentNode.dispatchEvent(J)},!1),c.prefConfig.overOpen&&this.searchJumperExpand.addEventListener("mouseleave",S=>{clearTimeout(n)},!1),this.pickerBtn.addEventListener("click",S=>{this.togglePicker()}),this.maxEleBtn.addEventListener("click",S=>{ke.expand()}),this.minEleBtn.addEventListener("click",S=>{ke.collapse()}),this.copyEleBtn.addEventListener("click",S=>{ke.copy()}),this.openLinkBtn.addEventListener("click",S=>{ke.openLinks()});let s=document.createElement("div");s.className="listArrow",this.listArrow=s,this.con.appendChild(s);for(let S of c.sitesConfig){if(S.bookmark||S.sites.length>100||/^BM/.test(S.type)&&S.icon==="bookmark"){r.push(S);continue}await this.createType(S),t+=S.sites.length,t>100&&(await $e(1),t=0)}this.initHistorySites(),this.initSort(),this.bar.style.visibility="",this.bar.style.display="none",this.searchInPageRule(),ae&&ft.test(ae.url)?this.inSearchEngine():c.prefConfig.alwaysShow&&!St&&!at&&(this.bar.style.display="",this.initPos(),this.appendBar()),Tt&&($=Tt.target,this.batchOpen(Tt.sites,{button:2})),Tt=!1,Ge&&(this.submitAction(Ge),setTimeout(()=>{U.setListItem("inPagePostParams",location.hostname,"")},1e4));let o=S=>{clearTimeout(p);let J,D="";ae&&!e.searchInput.value?(J=e.con.querySelector(".search-jumper-btn.current"),D="_self"):(J=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),D="_blank"),J&&e.openSiteBtn(J,D,!S.ctrlKey)},p,d=!1;this.inInput=!1;let f=()=>{xt!==e.searchInput.value&&(xt=e.searchInput.value,U.setItem("cacheFilter",xt))};this.searchInput.addEventListener("input",S=>{clearTimeout(p),p=setTimeout(()=>{d||e.searchSiteBtns(e.searchInput.value)},500)}),this.searchInput.addEventListener("compositionstart",function(){d=!0}),this.searchInput.addEventListener("compositionend",function(){d=!1}),this.searchInput.addEventListener("click",S=>{e.searchInput.select()}),this.searchInput.addEventListener("blur",S=>{f()}),this.searchInput.addEventListener("keydown",S=>{switch(S.stopPropagation(),S.keyCode){case 9:S.shiftKey&&(S.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords());break;case 13:if(this.searchJumperInputKeyWords.disabled){clearTimeout(p);let J,D="";ae&&!e.searchInput.value?(J=e.con.querySelector(".search-jumper-btn.current"),D="_self"):(J=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),D="_blank"),J&&e.openSiteBtn(J,D,!S.ctrlKey)}else this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.value&&o(S),f();break;case 8:break;default:break}}),this.searchJumperInputKeyWords.addEventListener("input",S=>{clearTimeout(p),p=setTimeout(()=>{d||e.getSuggest(e.searchJumperInputKeyWords.value)},200)}),this.searchJumperInputKeyWords.addEventListener("compositionstart",function(){d=!0}),this.searchJumperInputKeyWords.addEventListener("compositionend",function(){d=!1}),this.searchJumperInputKeyWords.addEventListener("keydown",S=>{switch(S.keyCode!==27&&S.stopPropagation(),S.keyCode){case 9:this.inInput?S.shiftKey||(S.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords()):(S.preventDefault(),this.searchInput.focus());break;case 13:o(S);break;default:break}},!0),this.con.addEventListener("keypress",S=>{S.stopPropagation()},!0),this.closeBtn.addEventListener("mousedown",S=>{e.hideSearchInput(),c.prefConfig.emptyAfterCloseInput&&(e.highlight(""),e.searchJumperInPageInput.value=e.lockWords||"",e.lockWords="",e.searchInPageLockWords.innerHTML=Q(),e.setNav(!1,!0))});let g=window.innerWidth/2,u,m,y,T,E=S=>S.type.indexOf("mouse")===0?S.clientX:S.changedTouches[0].clientX,x=S=>S.type.indexOf("mouse")===0?S.clientY:S.changedTouches[0].clientY,B=S=>{let J=.25*window.innerWidth,D=g+E(S)-y;if(e.searchInputDiv.style.top="unset",e.searchInputDiv.style.left=D+"px",e.searchInputDiv.style.bottom=u-(x(S)-T)+"px",D>window.innerWidth/2){let _=window.innerWidth-D+J-50;e.searchInputDiv.style.maxWidth=_+"px"}else{let _=D+J;D<J&&(D+=J-D,e.searchInputDiv.style.left=D+"px"),e.searchInputDiv.style.maxWidth=_+"px"}S.stopPropagation(),S.preventDefault()},W=S=>{document.removeEventListener("mouseup",W),document.removeEventListener("mousemove",B),document.removeEventListener("touchend",W),document.removeEventListener("touchmove",B),m.style.cursor="",g+=E(S)-y,u-=x(S)-T},P=()=>{u||(u=e.con.classList.contains("search-jumper-bottom")?window.innerHeight*.95-60:window.innerHeight*.03)},H=!1;this.searchInputDiv.addEventListener("touchstart",S=>{H=!0,(S.target.className==="inputGroup"||S.target.nodeName.toUpperCase()==="LABEL")&&(P(),m=S.target,m.style.cursor="grabbing",y=E(S),T=x(S),document.addEventListener("touchend",W),document.addEventListener("touchmove",B))},{passive:!0,capture:!1}),this.searchInputDiv.addEventListener("mousedown",S=>{if(H){H=!1;return}(S.target.className==="inputGroup"||S.target.nodeName.toUpperCase()==="LABEL")&&(P(),m=S.target,m.style.cursor="grabbing",y=S.clientX,T=S.clientY,document.addEventListener("mouseup",W),document.addEventListener("mousemove",B),S.stopPropagation(),S.preventDefault())});let O,Y,b=S=>{let J=S.clientX-Y+O+20;this.searchInputDiv.style.width=J+"px"},k=S=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",k)};this.rightSizeChange.addEventListener("mousedown",S=>{Y=S.clientX,O=this.searchInput.clientWidth*2+2,document.addEventListener("mousemove",b),document.addEventListener("mouseup",k),S.stopPropagation(),S.preventDefault()});let j,M=S=>{if(!this.contains(S.target)){let J=/^(https?|ftp):/.test(j.href);J&&j.setAttribute("target","_blank"),J?ge(j.href,{active:!1,insert:!0}):j.click(),J&&j.setAttribute("target",j.dataset.target==1?"_blank":"_self")}V(document).removeEventListener("dragover",N),document.removeEventListener("drop",M),document.removeEventListener("dragover",N)},N=S=>{S.preventDefault()},G=S=>{V(document).removeEventListener("dragover",N),document.removeEventListener("drop",M),document.removeEventListener("dragover",N)};this.bar.addEventListener("dragstart",S=>{let J=S.target,D=J.parentNode;J.nodeName.toUpperCase()!=="IMG"&&J.nodeName.toUpperCase()!=="A"||(J.classList&&J.classList.contains("search-jumper-btn")?(j=J,V(document).addEventListener("dragover",N),document.addEventListener("drop",M),document.addEventListener("dragend",G)):D&&D.classList&&D.classList.contains("search-jumper-btn")&&(j=D,V(document).addEventListener("dragover",N),document.addEventListener("drop",M),document.addEventListener("dragend",G)))},!0),t=0;let ue=ae!==!1;for(let S of r)await this.createType(S),t+=S.sites.length,t>200&&(await $e(1),t=0);if(!this.findInpageAddons){this.findInpageAddons=ye.searchJumperAddons.filter(_=>_.type=="findInPage").sort((_,ee)=>(_.sort||0)-(ee.sort||0));let S=this,J=0,D={};this.findInpageAddons.forEach(_=>{let ee=_.name||"addon"+J++;D[_.sort]||c.prefConfig.disableAddon[ee]===!0?_.disable=!0:(c.prefConfig.disableAddon[ee],_.disable=!1),D[_.sort]=!0,S.createAddonSpan(ee,_)})}if(this.fontPool.length>0||at){let S=document.createElement("link");S.rel="stylesheet",S.href=c.prefConfig.fontAwesomeCss||"https://lib.baomitu.com/font-awesome/6.1.2/css/all.css",document.documentElement.insertBefore(S,document.documentElement.children[0]),this.addToShadow(S.cloneNode()),mr(()=>{let J=!1;this.fontPool.forEach(D=>{D.innerText="",D.style.fontSize="",D.style.color="",J=!0,Jt.unshift(D)}),J&&(at||de===Bi)&&setTimeout(()=>{Yi()},3e3),this.buildAllPageGroupTab()})}else this.buildAllPageGroupTab();if(et)return;Rt&&Rt!=location.hostname&&window.top==window.self&&U.setItem("disableHighlight",""),await this.testCSP();let te=ae&&ft.test(ae.url);if(!ue&&te?this.inSearchEngine():!ae&&window.top==window.self&&this.checkSearchJump(),/^#sjhl=/.test(location.hash)){let S=location.hash.match(/^#sjhl=(.*?)(&i=(\d+))?$/),J=S[1],D=parseInt(S[3]||1)-1;try{J=decodeURIComponent(J)}catch(_){console.log(_)}this.setInPageWords(J,()=>{let ee=document.querySelectorAll("mark.searchJumper")[D];ee&&ee.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})})}else if(location.pathname==="/hoothin/SearchJumper/discussions/new"&&location.search==="?category=search-engines"){let S=c.sitesConfig.filter(J=>J&&!(/^BM/.test(J.type)&&J.icon==="bookmark"));Ui("#discussion_body","```json\n"+JSON.stringify(S,null,2)+"\n```")}let ie=this.initInPageWords&&this.initInPageWords.length;(Oi||this.bar.style.display==="none"&&(!Ye||!ie))&&this.removeBar()}buildAllPageGroupTab(){let e=this;this.groupTab.innerHTML=Q(),Se.forEach(t=>{if(t.classList.contains("notmatch"))return;let r=t.dataset.type,i=t.firstElementChild.cloneNode(!0),a=document.createElement("span");a.appendChild(i),a.dataset.type=r,a.addEventListener("click",n=>{let s=e.sitelistBox.querySelector(`[data-type="${r}"]`);s&&s.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}),e.groupTab.appendChild(a)})}async refreshEngines(){if(c&&!this.refreshing){this.refreshing=!0,setTimeout(()=>{this.refreshing=!1},500),jt=c.lastModified,this.removeBar(),Se&&Se.length&&Se.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),Se=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.historyTypeEle=null;for(let e of c.sitesConfig)await this.createType(e);this.initHistorySites(),this.initSort(),this.buildAllPageGroupTab(),et&&this.appendBar()}}waitForHide(e){let t=this;if(this.bar.classList.contains("grabbing")||this.hiding)return;e===0&&(this.hiding=!0,setTimeout(()=>{t.hiding=!1},500)),this.touched=!1;var r=()=>{if(t.bar.classList.remove("search-jumper-isTargetImg"),t.bar.classList.remove("search-jumper-isTargetAudio"),t.bar.classList.remove("search-jumper-isTargetVideo"),t.bar.classList.remove("search-jumper-isTargetLink"),t.bar.classList.remove("initShow"),t.tips.style.opacity=0,t.tips.style.display="none",t.tips.innerHTML=Q(""),t.funcKeyCall)if(t.setFuncKeyCall(!1),ae&&!ae.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||t.con.classList.contains("resizePage")){t.initPos();let a=t.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(a&&!a.classList.contains("search-jumper-open"))if(a.onmouseup)a.onmouseup();else{let n=new PointerEvent("mouseup");a.dispatchEvent(n)}}else t.bar.style.display="none";c.prefConfig.autoClose&&t.closeOpenType(),t.hideTimeout=null};this.hideTimeout&&clearTimeout(this.hideTimeout);let i=typeof e>"u"?this.funcKeyCall?500:c.prefConfig.autoDelay||1e3:e;i?this.hideTimeout=setTimeout(r,i):r(),this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}searchEngineWords(e){return e=e.replace(/( |^)-\S+/g,""),/".+"/.test(e)&&(e=e.replace(/"(.+)"/g,(t,r,i,a)=>`\u25CE${r}\u25CE`).replace(/^◎|◎$/g,"")),this.lastSearchEngineWords=e.replace(/['";]/g," "),this.lastSearchEngineWords}setInPageWords(e,t,r){this.initInPageWords.push(e),this.con.classList.add("in-find");let i=()=>{setTimeout(async()=>{if(V(document).style.display==="none"&&(V(document).style.display=""),this.lockWords)this.initInPageWords=[];else{for(;document.hidden;)await $e(1e3);U.setItem("lastHighlight",location.hostname);let a=this.initInPageWords.shift();for(;a;)this.searchJumperInPageInput.value=a,this.submitInPageWords(!!r),a=this.initInPageWords.shift()}t&&t(),await $e(100),U.setItem("lastHighlight","")},300)};if(document.readyState!="complete"){let a=n=>{document.readyState=="complete"&&(document.removeEventListener("readystatechange",a),window.removeEventListener("load",a),i())};document.addEventListener("readystatechange",a),window.addEventListener("load",a)}else i()}searchInPageRule(){if(c.prefConfig.disableAutoHighlight){let e=c.prefConfig.disableAutoHighlight.trim().split(`
`);for(let t=0;t<e.length;t++){let r=e[t],i=!1;if(r.indexOf("/")===0){let a=r.match(/^\/(.*)\/([igm]*)$/);a&&(i=new RegExp(a[1],a[2]).test(de))}else i=this.globMatch(r,de);if(i){this.disableAutoHighlight=!0;return}}}if(zi===location.hostname&&(this.disableAutoHighlight=!0),c.prefConfig.inPageRule){let e=Object.keys(c.prefConfig.inPageRule);for(let t=0;t<e.length;t++){let r=e[t];if(!r)continue;let i=!1;if(r.indexOf("/")===0){let a=r.match(/^\/(.*)\/([igm]*)$/);a&&(i=new RegExp(a[1],a[2]).test(de))}else i=this.globMatch(r,de);if(i){let a=c.prefConfig.inPageRule[r];if(!a)continue;this.inPageRuleKey=r,this.disableAutoHighlight=!0,this.setInPageWords(a);break}}}}checkSearchJump(){if(this.inPageRuleKey||this.disableAutoHighlight)return;let e;if(c.prefConfig.showInSearchJumpPage&&zt&&!Rt&&Wi.indexOf(zt)!=-1){Ee&&this.wordModeBtn.classList.add("checked"),e=Ee;try{e=decodeURIComponent(e),e=this.searchEngineWords(e)}catch{}}if(e=e||Ne,e){this.appendBar();let t=this;this.setInPageWords(e,()=>{!t.navMarks.innerHTML&&t.bar.style.display==="none"&&t.removeBar()},!0)}else if(!this.searchJumperInPageInput.value&&Wi.indexOf(zt)!=-1&&Ee){e=Ee,this.wordModeBtn.classList.add("checked");try{e=decodeURIComponent(e)}catch{}this.searchJumperInPageInput.value=e}}inSearchEngine(){if(!this.currentType||!ae||St||this.inPageRuleKey||this.disableAutoHighlight)return;if(!/sidesearch=(1|true)$/i.test(location.search)&&(!/#p{/.test(ae.url)||ae.keywords)){if(this.appendBar(),this.currentType.classList.contains("search-jumper-needInPage"))this.bar.classList.add("search-jumper-isTargetPage");else if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;c.prefConfig.hideOnSearchEngine||(this.bar.style.display="",this.initPos())}this.insertHistory(this.currentType,!0),this.wordModeBtn.classList.add("checked");let e=c.prefConfig.showInSearchEngine?this.searchEngineWords(Oe):Ne;e&&this.setInPageWords(e,null,!0)}getSuggest(e){let t=this.suggestDatalist;if(t.innerHTML=Q(),!e)return;let r=(i,a,n)=>{Be({method:"GET",url:i,responseType:n?"blob":"",headers:{referer:i,origin:i},onload:function(s){let o=s.response;if(!(s.status>=400||!o))if(n){let p=new FileReader;p.onload=()=>{a(p.result)},p.readAsText(o,n)}else a(o)},onerror:function(s){pe(s)},ontimeout:function(s){pe(s)}})};switch(c.prefConfig.suggestType){case"google":r("https://suggestqueries.google.com/complete/search?client=youtube&q=%s&jsonp=window.google.ac.h".replace("%s",e),i=>{if(i=i.match(/window.google.ac.h\((.*)\)$/,"$1"),i){i=JSON.parse(i[1])[1];for(let a in i){let n=document.createElement("option");n.value=i[a][0],t.appendChild(n)}}});break;case"baidu":r("https://suggestion.baidu.com/su?wd=%s&cb=".replace("%s",e),i=>{if(i=i.match(/.*,s:(.*)}\);$/,"$1"),i){i=JSON.parse(i[1]);for(let a in i){let n=document.createElement("option");n.value=i[a],t.appendChild(n)}}},"GBK");break;case"bing":r("https://api.bing.com/qsonhs.aspx?type=json&q=%s".replace("%s",e),i=>{if(i){i=JSON.parse(i).AS.Results;for(let a in i){let n=i[a].Suggests;for(let s in n){let o=document.createElement("option");o.value=n[s].Txt,t.appendChild(o)}}}});break;default:break}}searchSiteBtns(e){let t=e.indexOf("**"),r="",i=!1;t>0&&(r=e.slice(0,t),e=e.slice(t+2)),e.indexOf("^")===0?i=!0:(r=r.toLowerCase(),e=e.toLowerCase()),e?this.con.classList.add("searching"):this.con.classList.remove("searching");let a=!/[^\w\.\/\:\*\?\^\$]/.test(e);this.allListBtns.forEach(o=>{o.classList.add("input-hide")}),Se.forEach(o=>{o.classList.add("input-hide")});let n=0;this.filterGlob.innerHTML=Q(),this.allSiteBtns.forEach(o=>{let p=o[0],d=o[1],f=p.parentNode,g=p.dataset.type,u=p.dataset.name,m=p.title;i||(g=g.toLowerCase(),u=u.toLowerCase(),m=m.toLowerCase());let y="";if(r){if(!this.globMatch(r,g))return;y=p.dataset.type+"**"}let T=!1;if(p.dataset.clone||(this.globMatch(e,u)?(T=!0,y+="^"+p.dataset.name+"$"):p.title&&this.globMatch(e,m)&&(T=!0,y+="^"+p.title+"$")),!T){if(a){if(!p.dataset.host){let E=/^https?:\/\/([^\/]*)\/[\s\S]*$/,x=d.url,B=E.test(x)?x.replace(E,"$1"):x;p.dataset.host=B&&B.split(`
`)[0].toLowerCase()}T=this.globMatch(e,p.dataset.host)}T?p.dataset.isPage&&(y+="^"+p.dataset.host+"$"):p.classList.add("input-hide")}if(T){p.classList.remove("input-hide"),f&&f.classList.remove("input-hide");let E;for(let x=0;x<this.allListBtns.length;x++)if(this.allListBtns[x].id=="list"+p.dataset.id){E=this.allListBtns[x];break}if(E&&E.classList.remove("input-hide"),n<50&&e&&this.searchInput.value!==y&&!this.filterGlob.querySelector(`option[value="${y}"]`)){n++;let B=document.createElement("option");B.value=y,this.filterGlob.appendChild(B)}}}),Se.forEach(o=>{let p;for(let d=0;d<this.allLists.length;d++)if(this.allLists[d].dataset.type==o.dataset.type){p=this.allLists[d];break}p&&(o.classList.contains("input-hide")?p.classList.add("input-hide"):p.classList.remove("input-hide"))});let s=this.bar.querySelector(".search-jumper-type:not(.input-hide)");if(s){if(!s.classList.contains("search-jumper-open")){let o=s.querySelector("span.search-jumper-btn");if(o.onmouseup)o.onmouseup();else{let p=new PointerEvent("mouseup");o.dispatchEvent(p)}}if(this.searchJumperExpand.parentNode==s){let o=new PointerEvent("click");this.searchJumperExpand.dispatchEvent(o)}}}globMatch(e,t,r){if(t.length>500)return!1;try{if(e.length==0||e==="*")return!0;if(e.length===1&&e[0]==="$")return!t||t.length===0;if(e.length>1&&e[0]==="*"&&(!t||t.length===0))return!1;if(!r)if(r=!0,e.length>1&&e[0]==="^"&&t&&t.length!==0){if(e=e.substring(1),e[0]!==t[0])return!1}else e[0]!=="*"&&(e="*"+e);if(e.length>1&&e[0]==="?"||e.length!=0&&t&&t.length!==0&&e[0]===t[0])return this.globMatch(e.substring(1),t.substring(1),!!r);if(e.length>0&&e[0]==="*")return this.globMatch(e.substring(1),t,!!r)||this.globMatch(e,t&&t.substring(1),!!r)}catch(i){pe(i)}return!1}setCurrentSite(e,t){ae=e,t.classList.add("current"),Oe="",!/#p{|^(showTips|find)/.test(e.url)&&ft.test(e.url)&&(this.updateCacheKeywords(),U.setItem("referrer",location.hostname))}updateCacheKeywords(){let e=Xe();e&&e!=Ee&&(Ee=e,U.setItem("cacheKeywords",e))}refresh(){this.refreshInPageTimer&&clearTimeout(this.refreshInPageTimer),this.refreshInPageTimer=setTimeout(()=>{let e=this.curHighlightWords;if(this.highlight(""),this.highlight(e),this.bar.style.display=="none"){ae=null;let t;for(let r in c.sitesConfig){if(ae)break;if(t=c.sitesConfig[r],!t)continue;let i=t.sites;for(let a in i){if(ae)break;let n=i[a];if(!n||!n.url)continue;let s;if(n.match!=="0"){if(n.match)new RegExp(n.match).test(de)&&(s=n);else if(n.url.indexOf(location.hostname)!=-1){if(n.url.indexOf("site")!=-1){let o=n.url.match(/site(%3A|:)([\s\S]+?)[\s%]/);o&&de.indexOf(o[2])!=-1&&n.url.replace(o[0],"").indexOf(location.hostname)!=-1&&(s=n)}else if(!ae&&n.url.replace(/^https?:\/\//,"").replace(location.host,"").replace(/\/?[\?#][\s\S]*/,"")==location.pathname.replace(/\/$/,"")){let o=n.url.match(/[^\/\?&]+(?=%[stb])/g);o&&(o=o.join(".*"),new RegExp(o).test(de)&&(s=n))}}}if(s){let o=this.getTargetSitesByName([s.name])[0];this.currentType=o.parentNode,this.setCurrentSite(s,o)}}}if(ae&&ft.test(ae.url)&&(!/#p{/.test(ae.url)||ae.keywords)&&!c.prefConfig.hideOnSearchEngine){if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;this.appendBar(),this.bar.style.display="",this.initPos();let r=this.bar.querySelector(`.search-jumper-type[data-type="${t.type}"]>span`);if(r&&!r.classList.contains("search-jumper-open")&&(this.bar.insertBefore(r.parentNode,this.bar.children[0]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen))if(r.onmouseup)r.onmouseup();else{let i=new PointerEvent("mouseup");r.dispatchEvent(i)}}}},500)}initSort(){if(c.prefConfig.shiftLastUsedType&&this.historyTypeEle&&(ae?this.bar.insertBefore(this.historyTypeEle,this.bar.children[1]):this.bar.insertBefore(this.historyTypeEle,this.bar.children[0])),c.prefConfig.sortType){let e=this;Se.sort((i,a)=>{let n=Le[i.dataset.type]||0;return(Le[a.dataset.type]||0)-n});let t=!1,r=!e.bar.children[0].classList.contains("search-jumper-open");for(let i=Se.length-1;i>=0;i--){let a=Se[i],n=Le[a.dataset.type]||0;if(i==Se.length-1)n>0&&(t=!0,Le[a.dataset.type]=0);else{let s=Le[Se[i+1].dataset.type]||0;n-s>10&&(t=!0,Le[a.dataset.type]=s+10)}e.bar.insertBefore(a,e.bar.children[r?0:1])}t&&U.setItem("sortTypeNames",Le)}}initHistorySites(){this.historySiteBtns=[],this.txtHistorySiteBtns=[],this.imgHistorySiteBtns=[],this.linkHistorySiteBtns=[],this.videoHistorySiteBtns=[],this.audioHistorySiteBtns=[];let e=this;Ve.forEach(async t=>{for(let r of c.sitesConfig){let i=!1,a=r.bookmark||r.sites.length>100||/^BM/.test(r.type)&&r.icon==="bookmark";for(let n=0;n<r.sites.length;n++){let s=r.sites[n];if(s.name==t){let o=await e.createSiteBtn(c.prefConfig.noIcons?"0":s.icon,s,!0,a,r,!0);o.classList.add("historySite"),e.historySiteBtns.push(o),!r.selectImg&&!r.selectLink&&!r.selectPage&&!r.selectVideo&&!r.selectAudio&&e.txtHistorySiteBtns.push(o),r.selectImg&&e.imgHistorySiteBtns.push(o),(r.selectLink||r.selectPage)&&e.linkHistorySiteBtns.push(o),r.selectVideo&&e.videoHistorySiteBtns.push(o),r.selectAudio&&e.audioHistorySiteBtns.push(o),i=!0;break}}if(i)break}})}insertHistory(e,t){if(!c.prefConfig.historyLength)return;e.style.width="auto",e.style.height="auto";let r=this;this.historyInserted=!0;let i=0,a=!t&&c.prefConfig.historyInsertFirst,n=!1,s=0;a||(n=this.searchJumperExpand.parentNode==e&&!c.prefConfig.expandType,n&&(s=(c.prefConfig.numPerLine||7)-1,s=c.prefConfig.historyLength<s?s+s-c.prefConfig.historyLength:s,c.prefConfig.hideTileType&&s++));let o=this.historySiteBtns;e.classList.contains("search-jumper-needInPage")?o=this.txtHistorySiteBtns:e.classList.contains("search-jumper-targetImg")?o=this.imgHistorySiteBtns:e.classList.contains("search-jumper-targetAudio")?o=this.audioHistorySiteBtns:e.classList.contains("search-jumper-targetVideo")?o=this.videoHistorySiteBtns:(e.classList.contains("search-jumper-targetLink")||e.classList.contains("search-jumper-targetPage"))&&(o=this.linkHistorySiteBtns);for(let p=0;p<o.length;p++){let d=o[p];if(d.style.display=="none")continue;let f=d.querySelector("img");if(f&&f.dataset.src&&(f.src=f.dataset.src,delete f.dataset.src),d.parentNode!=e){let g=e.querySelectorAll("a.search-jumper-btn"),u=!1;for(let m=0;m<g.length;m++){let y=g[m];if((y.dataset.oriName||y.dataset.name)==(d.dataset.oriName||d.dataset.name)){u=!0;break}}if(u)continue;if(a)e.children.length>1?e.insertBefore(d,e.children[1]):e.appendChild(d);else if(n){let m=e.querySelectorAll("a.search-jumper-btn");m.length>s?e.insertBefore(d,m[s]):e.insertBefore(d,r.searchJumperExpand)}else e.appendChild(d);if(++i>=c.prefConfig.historyLength)break}else a&&(e.children.length>1?e.insertBefore(d,e.children[1]):e.appendChild(d))}e.style.width=e.scrollWidth+"px",e.style.height=e.scrollHeight+"px"}recoveHistory(){if(!c.prefConfig.historyLength||!this.historyInserted)return;this.historyInserted=!1;let e=this,t;for(let r=0;r<this.historySiteBtns.length;r++){let i=this.historySiteBtns[r];i.classList.contains("historySite")&&(t=i.parentNode,this.siteBtnReturnHome(i))}t&&t.classList.contains("search-jumper-open")&&(t.style.width="auto",t.style.height="auto",t.style.width=t.scrollWidth+"px",t.style.height=t.scrollHeight+"px")}bindSite(e,t){if(e.getAttribute("bind"))return;e.setAttribute("bind",!0);let r=this;t.href&&(e.href=t.href),e.style.display=t.style.display,e.addEventListener("mousedown",async i=>{t.dataset.showTips?(r.con.classList.contains("search-jumper-showall")?$=e.parentNode:r.waitForHide(0),t.dispatchEvent(new CustomEvent("showTips",{detail:e}))):(await r.siteSetUrl(t,{button:i.button,altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}),t.href&&(e.href=t.href),e.setAttribute("target",t.target)),e.onclick||(e.onclick=a=>(t.dataset.showTips||t.click(),a.stopPropagation(),a.preventDefault(),!1))},!1),e.addEventListener("dragover",i=>{i.preventDefault()},!0),e.addEventListener("dragenter",i=>{r.dragTarget&&r.dragTarget.classList.remove("dragTarget"),r.dragTarget=e,r.dragTarget.classList.add("dragTarget"),clearTimeout(r.dragTimer),r.dragTimer=setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},1e3)},!0),e.addEventListener("dragleave",i=>{e.classList.remove("dragTarget")},!0),e.addEventListener("drop",i=>{clearTimeout(r.dragTimer),r.dragTarget&&r.dragTarget.classList.remove("dragTarget"),r.searchBySiteName(t.dataset.name,i)},!0)}async createList(e,t,r){let i=this,a=document.createElement("div");a.className="sitelist",a.style.visibility="hidden";let n=document.createElement("div");n.className="sitelistCon",a.appendChild(n),a.addEventListener("mouseenter",p=>{i.listArrow.style.cssText=""});let s=document.createElement("p");s.innerText=t.dataset.title,s.title=A("batchOpen"),s.addEventListener("click",p=>{i.batchOpen(r,{ctrlKey:p.ctrlKey,shiftKey:p.shiftKey,altKey:p.altKey,metaKey:p.metaKey,button:p.ctrlKey||p.shiftKey||p.altKey||p.metaKey?0:2})}),a.dataset.type=t.dataset.type,n.appendChild(s);function o(p,d){let f=document.createElement("div");f.id="list"+d;let g=p.querySelector("img"),u=document.createElement("a");if(u.setAttribute("ref","noopener noreferrer"),i.bindSite(u,p),f.appendChild(u),i.allListBtns.push(f),g&&!c.prefConfig.noIcons){let y=g.src||g.dataset.src,T=document.createElement("img");u.appendChild(T),T.onload=E=>{T.style.width="",T.style.height="",T.style.display=""},T.onerror=E=>{T.src=hi},T.style.width="1px",T.style.height="1px",T.style.display="none",y?(/^data:/.test(y)||(T.\u03BFnerr\u03BFr=E=>{T.src=hi,T.onerror=null,T.style.width="",T.style.height="",T.style.display=""}),T.dataset.src=y):T.dataset.src=hi}let m=document.createElement("p");m.innerText=p.dataset.name,f.title=p.title,f.dataset.name=p.dataset.name,u.appendChild(m),n.appendChild(f)}try{for(let[p,d]of e.entries())o(d,d.dataset.id),p%50===49&&await $e(1)}catch{for(let d=0;d<e.length;d++){let f=e[d];o(f,f.dataset.id)}}return this.allLists.push(a),a}async initList(e){e.dataset.inited||(e.style.display="none",e.dataset.inited=!0,[].forEach.call(e.querySelectorAll("div>a>img"),t=>{t.dataset.src&&(t.src=t.dataset.src,delete t.dataset.src)}),await $e(0))}async listPos(e,t){await this.initList(t),t.style="",this.preList=t;let r=e.clientWidth,i=e.clientHeight,a=e.offsetLeft+r/2-this.con.scrollLeft,n=e.offsetTop+i/2-this.con.scrollTop,s=e.offsetParent;for(;s!==null;)a+=s.offsetLeft,n+=s.offsetTop,s=s.offsetParent;let o=window.innerWidth||document.documentElement.clientWidth,p=window.innerHeight||document.documentElement.clientHeight,d=this.listArrow.style;if(d.visibility="visible",d.opacity=1,this.funcKeyCall){t.style.display="block",d.opacity=0;const f=e.getBoundingClientRect();a=f.x+r/2-this.con.scrollLeft,n=f.y+i/2-this.con.scrollTop,a-=t.clientWidth/2;let g=e.getBoundingClientRect().top;g>p/2?(g<t.clientHeight+10&&(t.style.height=g-20+"px"),n-=t.clientHeight+i/2+5):(n+=i/2+5,g+t.clientHeight+i+10>p&&(t.style.height=p-g-i-20+"px")),a<20&&(a=20);let u=o-t.clientWidth-30;a>u&&(a=u),t.style.left=a+"px",t.style.top=n+"px",t.style.display=""}else if(this.bar.clientWidth>this.bar.clientHeight){let f=a;a<30?f=30:a>o-40&&(f=o-40),d.left=f-10+"px",n-i/2<100?(t.style.top=this.bar.clientHeight+"px",d.top=this.bar.clientHeight-10+"px"):(t.style.bottom=this.bar.clientHeight+"px",d.bottom=this.bar.clientHeight-9+"px"),a-=t.scrollWidth/2,a>o-t.scrollWidth-10&&(a=o-t.scrollWidth-10),a<0&&(a=0),t.style.left=a+"px"}else{let f=n;n<30?f=30:n>p-30&&(f=p-30),d.top=f-10+"px",a-r/2<100?(t.style.left=this.bar.clientWidth+"px",d.left=this.bar.clientWidth-9+"px"):(t.style.right=this.bar.clientWidth+"px",d.right=this.bar.clientWidth-9+"px"),n-=t.scrollHeight/2,n>p-t.scrollHeight&&(n=p-t.scrollHeight),n<0&&(n=0),t.style.top=n+"px",t.style.maxHeight="100vh"}}clingPos(e,t,r){let i=e.clientWidth||e.offsetWidth,a=e.clientHeight||e.offsetHeight;const n=e.getBoundingClientRect();let s,o,p=this.con&&this.con.classList.contains("search-jumper-showall"),d=window.innerWidth||document.documentElement.clientWidth,f=window.innerHeight||document.documentElement.clientHeight;if(this.tips.style.position="",t.style.height="",t.style.position="",!e||/^(body|html)$/i.test(e.nodeName))this.tips.style.transition="none",this.tips.style.position="fixed",t.style.right="",t.style.bottom="",t.style.left=(d-t.clientWidth)/2+"px",t.style.top="min(11%,110px)";else if(p)s=n.x+i/2,o=n.y+a/2,s-=t.clientWidth/2-this.con.scrollLeft,o+=this.con.scrollTop,o>f/2?o-=t.clientHeight+a/2+10:o+=a/2+10,t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px";else if(this.funcKeyCall||!e.classList.contains("search-jumper-btn")){t.style.position="absolute";let g=window.pageYOffset||document.documentElement.scrollTop||V(document).scrollTop,u=window.pageXOffset||document.documentElement.scrollLeft||V(document).scrollLeft;s=n.x+i/2-(this.funcKeyCall?this.con.scrollLeft:0)+u,o=n.y+a/2-(this.funcKeyCall?this.con.scrollTop:0)+g,s-=t.clientWidth/2;let m=e.getBoundingClientRect().top;m>f/2?(m<t.clientHeight+10&&(t.style.height=m-20+"px"),o-=t.clientHeight+a/2+5):(o+=a/2+5,m+t.clientHeight+a+10>f&&(t.style.height=f-m-a-20+"px")),s<20&&(s=20);let y=d+u-t.clientWidth-30;s>y&&(s=y),t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px"}else{s=e.offsetLeft+i/2-this.con.scrollLeft-e.parentNode.scrollLeft,o=e.offsetTop+a/2-this.con.scrollTop-e.parentNode.scrollTop;let g=e.offsetParent;for(;g!==null;)s+=g.offsetLeft,o+=g.offsetTop,g=g.offsetParent;o<a?(s-=t.clientWidth/2,o+=t.clientHeight/2,s<5?(s=5,t.style.left="5px",t.style.right="",t.style.bottom=""):s>d-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.bottom=""):(t.style.left=s+"px",t.style.right="",t.style.bottom=""),t.style.top=(r?a:a+20)+"px"):o>f-a-10?(s-=t.clientWidth/2,s<5?(t.style.left="5px",t.style.right="",t.style.top=""):s>d-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.top=""):(t.style.left=s+"px",t.style.right="",t.style.top=""),t.style.bottom=(r?a:a+20)+"px"):s>d-i-10?(t.style.left="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.right=(r?i:i+20)+"px",t.style.top=o+"px"):s<i?(t.style.right="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.left=(r?i:i+20)+"px",t.style.top=o+"px"):(t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px")}}tipsPos(e,t){this.tips.innerHTML=Q(t),this.tips.style.pointerEvents="",this.tips.style.display="",this.tips.style.opacity=1,this.clingPos(e,this.tips),clearTimeout(this.hideTips),this.tips.style.transition&&setTimeout(()=>{this.tips.style.transition=""},1);let r=this;[].forEach.call(this.tips.querySelectorAll("iframe"),i=>{let a=i.innerHTML;if(a)if(i.innerHTML=Q(),i.src)i.addEventListener("load",n=>{try{if(!i||!i.parentNode)return;let s=i.contentDocument||i.contentWindow.document,o=s.createElement("div");s.body.appendChild(o),o.outerHTML=Q(a)}catch{}});else try{let n=i.contentDocument||i.contentWindow.document;n.open(),n.write(a),n.close()}catch{}}),[].forEach.call(this.tips.querySelectorAll("img,video"),i=>{i.addEventListener("load",a=>{r.clingPos(e,r.tips)})}),window.markdownit&&(r.md||(r.md=window.markdownit()),[].forEach.call(this.tips.querySelectorAll(".markdown"),i=>{i.innerHTML=Q(r.md.render(i.innerHTML))}))}checkKwFilter(e,t){t.length>600&&(t=t.slice(0,500)+t.slice(t.length-10));let r=e.match(/^@{(.*?)}/);if(r){if(!$)return!1;let n=r[1];if(![].some.call(ni(n,document),o=>o===$))return!1;e=e.replace(r[0],"")}let i,a=e.match(/^\/(.*)\/(\w*)$/);return a?i=new RegExp(a[1],a[2]):i=new RegExp(e,"i"),i.test(t||"")}async createType(e){let t=this,r=e.type,i=e.icon,a=e.selectTxt,n=e.selectImg,s=e.selectAudio,o=e.selectVideo,p=e.selectLink,d=e.selectPage,f=e.sites,g=!1,u=typeof e.openInNewTab>"u"?c.prefConfig.openInNewTab:e.openInNewTab,m=[],y=document.createElement("span");y.className="search-jumper-type",!c.prefConfig.expandType&&f.length>10&&y.classList.add("not-expand"),e.match==="0"?(y.style.display="none",y.classList.add("notmatch")):e.match&&(new RegExp(e.match).test(de)==!1?(y.style.display="none",y.classList.add("notmatch")):g=!0),typeof e.description<"u"?y.dataset.title=r+" - "+e.description:y.dataset.title=r,y.dataset.type=r;let T=document.createElement("span"),E=document.createElement("img"),x=document.createElement("b");r.length>=3?(x.innerText=r.trim().substr(0,4),/^[\w \-]+$/.test(x.innerText.substr(0,3))||(x.innerText=x.innerText.substr(0,2))):x.innerText=r,T.appendChild(x),E.style.display="none",y.appendChild(T),T.classList.add("search-jumper-word"),T.classList.add("search-jumper-btn"),T.classList.add("noIcon");let B=/^BM/.test(r)&&e.icon==="bookmark";if(i){T.classList.remove("noIcon");let v=/^[a-z\- ]+$/.test(i);if(E.onload=w=>{E.style.display="",x.innerText="",x.style.display="none",v||T.classList.remove("search-jumper-word")},v){let w=be[i.trim().replace(/ /g,"_")];w==="fail"||!w?(x.className=i.indexOf("fa")===0?i:"fa fa-"+i,this.fontPool.push(x)):(E.src=w,E.style.width="100%",E.style.height="100%",T.appendChild(E))}else{if(/^data:/.test(i))E.src=i;else{let h=c.prefConfig.cacheSwitch&&be[i];h==="fail"||(h?E.src=h:(E.src=i,!be[i]&&!B&&Je.push(E)))}T.appendChild(E)}}y.addEventListener("mouseleave",v=>{t.listArrow.style.cssText="",t.dockerScaleBtns.forEach(w=>{w.style.setProperty("--scale",1)})});let W=[],P=v=>{switch(c.prefConfig.batchOpenConfirm){case 1:window.confirm(A("batchOpenConfirm"))&&t.batchOpen(W,v);break;case 2:t.batchOpen(W,v);break;default:(y.classList.contains("search-jumper-open")||v.shiftKey||v.altKey||v.ctrlKey||v.metaKey||window.confirm(A("batchOpenConfirm")))&&t.batchOpen(W,v);break}};if(c.prefConfig.shortcut&&e.shortcut&&!y.classList.contains("notmatch")){let v=e.shortcut.replace("Key","").replace("Digit","").toUpperCase();v.length==1&&(y.dataset.title+=` (${v})`),document.addEventListener("keydown",w=>{if(!(c.prefConfig.shortcut==2&&!ae)&&w.target.id!=="searchJumperInput"&&!(!e.ctrl==w.ctrlKey||!e.alt==w.altKey||!e.shift==w.shiftKey||!e.meta==w.metaKey)&&!(!c.prefConfig.enableInInput&&!e.ctrl&&!e.alt&&!e.shift&&!e.meta&&Ct(document))){var h=(w.key||String.fromCharCode(w.keyCode)).toLowerCase();(e.shortcut==w.code||e.shortcut==h)&&(P(w),w.stopPropagation())}})}let H=0,O=this.scale*40,Y=(v,w)=>{w?(v.style.display="",y.children.length>2&&y.insertBefore(v,y.children[2])):(v.style.display="none",t.searchJumperExpand.parentNode==y?y.insertBefore(v,t.searchJumperExpand):y.appendChild(v))},b=(v,w)=>{let h=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right"),C=!1;$&&(C=Ji($));let I=$&&($.href||$.src);H=0,m.forEach((z,F)=>{let ce=f[F],oe=!0;if(ce.kwFilter){let re;z.dataset.link?re=I||v:re=z.dataset.txt?v||$&&$.innerText||"":I||v||location.href,oe=t.checkKwFilter(ce.kwFilter,re)}oe&&z.dataset.paste?(oe=C,Y(z,oe)):ce.kwFilter&&Y(z,oe);let fe=z.querySelector("img");z.style.display!="none"&&H++,fe&&!fe.src&&fe.dataset.src&&(fe.src=fe.dataset.src,delete fe.dataset.src)}),H>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(y.classList.add("not-expand"),y.appendChild(t.searchJumperExpand));let R=Math.max(y.scrollWidth,y.scrollHeight)+5+"px";c.prefConfig.disableTypeOpen&&(R=O+"px",w&&t.listPos(y.children[0],ie)),h?(y.style.height=R,y.style.width=""):(y.style.width=R,y.style.height="")};T.addEventListener("checkSites",v=>{b(v.detail)},!1);let k=v=>{if(v){if(v.button===2)return P(v),!1;if(v.button===0&&(v.shiftKey||v.altKey||v.ctrlKey))return!1}if(t.funcKeyCall)return t.showAllSites(),!1;let w=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right");if(t.preList&&(t.preList.style.visibility="hidden",t.listArrow.style.cssText=""),y.classList.remove("search-jumper-move"),y.classList.contains("search-jumper-open"))c.prefConfig.minSizeMode&&t.bar.classList.add("minSizeModeClose"),y.classList.remove("search-jumper-open"),w?(y.style.height=O+"px",y.style.width=""):(y.style.height="",y.style.width=O+"px"),y.style.flexWrap="",c.prefConfig.disableTypeOpen&&(ie.style.visibility="hidden");else{t.recoveHistory(),y.classList.add("search-jumper-open"),c.prefConfig.minSizeMode&&t.bar.classList.remove("minSizeModeClose");let h=Xe();b(h,v),setTimeout(()=>{y.classList.contains("search-jumper-open")&&(y.style.flexWrap="nowrap",y.classList.add("search-jumper-move"))},c.prefConfig.typeOpenTime),Se.forEach(C=>{y!=C&&(C.classList.remove("search-jumper-open"),C.style.width=O+"px",C.style.height=O+"px",C.style.flexWrap="")})}c.prefConfig.disableTypeOpen||setTimeout(()=>{t.checkScroll()},c.prefConfig.typeOpenTime)},j=!1,M,N,G=v=>{document.removeEventListener("mouseup",G),document.removeEventListener("mousemove",ue),j||k(v),j=!1},ue=v=>{j?(t.bar.style.left=N.x+v.clientX-M.x+"px",t.bar.style.top=N.y+v.clientY-M.y+"px"):(t.tips.style.opacity=0,j=!0,M={x:v.clientX,y:v.clientY},N={x:parseInt(t.bar.style.left),y:parseInt(t.bar.style.top)})};T.onmouseup=function(v){if(v&&t.funcKeyCall&&v.button===0&&!(v.shiftKey||v.altKey||v.ctrlKey)){j=!1,v.preventDefault&&v.preventDefault(),document.addEventListener("mouseup",G),document.addEventListener("mousemove",ue);return}k(v)},T.oncontextmenu=function(v){v.preventDefault()},T.addEventListener("click",v=>(t.batchOpen(W,v),!1),!1),T.addEventListener("dblclick",v=>{v.stopPropagation(),v.preventDefault()},!0);let te,ie,S=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,J=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,D=!Wt||S>600&&J>600;y.addEventListener("sitelist",async v=>{y.appendChild(ie),await t.listPos(v.detail.bind,ie),ie.style.display="block"},!1),T.addEventListener("mouseenter",v=>{if(!j&&(!t.funcKeyCall&&c.prefConfig.showSiteLists&&(c.prefConfig.alwaysShowSiteLists||!y.classList.contains("search-jumper-open"))?(y.appendChild(ie),t.listPos(y.children[0],ie)):D&&t.tipsPos(T,y.dataset.title),c.prefConfig.overOpen)){if(y.classList.contains("search-jumper-open"))return;clearTimeout(te),te=setTimeout(()=>{k(v)},500)}},!1),T.addEventListener("mouseleave",v=>{t.tips.style.opacity=0,c.prefConfig.overOpen&&clearTimeout(te)},!1);let _=!1,ee=f&&f.length>200;y.dataset.id=t.siteIndex,t.stopInput=!1;async function ne(v,w){if(!v.name)return;let h=await t.createSiteBtn(ee||c.prefConfig.noIcons?"0":v.icon,v,u,B,e);h&&(h.classList.contains("notmatch")||H++,h.dataset.type=r,h.dataset.id=t.siteIndex,t.siteIndex++,t.allSiteBtns.push([h,v]),y.appendChild(h),m.push(h),!v.nobatch&&v.match!=="0"&&W.push(v.name),!_&&!ae&&(h.dataset.current||g)&&!y.classList.contains("notmatch")&&(_=!0,h.dataset.current&&(c.prefConfig.showCurrent||(h.style.display="none"),t.setCurrentSite(v,h)),t.currentType=y))}try{for(let[v,w]of f.entries())await ne(w,v),v%100===99&&await $e(1)}catch{for(let w=0;w<f.length;w++)ne(f[w],w);await $e(1)}if(c.prefConfig.sortSite&&y.children.length>1){m.sort((w,h)=>{let C=Pe[w.dataset.name]||0;return(Pe[h.dataset.name]||0)-C});let v=!1;for(let w=m.length-1;w>=0;w--){let h=m[w],C=Pe[h.dataset.name]||0;if(w==m.length-1)C>0&&(v=!0,Pe[h.dataset.name]=0);else{let I=Pe[m[w+1].dataset.name]||0;C-I>10&&(v=!0,Pe[h.dataset.name]=I+10)}y.insertBefore(h,y.children[1])}v&&U.setItem("sortSiteNames",Pe)}if(m.forEach(v=>{v.classList.contains("notmatch")&&y.appendChild(v)}),ie=await t.createList(m,y,W),_){if(c.prefConfig.currentTypeFirst?t.bar.insertBefore(y,t.bar.children[0]):t.bar.insertBefore(y,t.bar.children[t.bar.children.length-1]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){y.classList.add("search-jumper-open"),y.classList.add("search-jumper-move"),H>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(y.classList.add("not-expand"),y.appendChild(t.searchJumperExpand));let v=-1,w=[];if(document.readyState!=="complete"){v=3;let h=C=>{document.readyState==="complete"&&(document.removeEventListener("readystatechange",h),window.removeEventListener("load",h),w.forEach(I=>{I&&!I.src&&I.dataset.src&&(I.src=I.dataset.src,delete I.dataset.src)}),w=[])};document.addEventListener("readystatechange",h),window.addEventListener("load",h)}m.forEach((h,C)=>{let I=h.querySelector("img"),R=f[C];if(R&&Oe&&R.kwFilter&&(t.checkKwFilter(R.kwFilter,Oe)?h.style.display="":(h.style.display="none",t.searchJumperExpand.parentNode==y?y.insertBefore(h,t.searchJumperExpand):y.appendChild(h))),h.style.display!="none"&&I&&!I.src&&I.dataset.src){if(v>=0&&!/^data/.test(I.dataset.src))if(v!==0)v--;else{w.push(I);return}I.src=I.dataset.src,delete I.dataset.src}})}}else t.historyTypeEle||kt==r&&(t.historyTypeEle=y),t.bar.insertBefore(y,t.bar.children[t.bar.children.length-1]);return y.style.width=y.scrollHeight+"px",y.style.height=y.scrollHeight+"px",ie.style.display="none",y.appendChild(ie),a&&n&&s&&o&&p&&d?y.classList.add("search-jumper-targetAll"):(a&&y.classList.add("search-jumper-needInPage"),n&&y.classList.add("search-jumper-targetImg"),s&&y.classList.add("search-jumper-targetAudio"),o&&y.classList.add("search-jumper-targetVideo"),p&&y.classList.add("search-jumper-targetLink"),d&&y.classList.add("search-jumper-targetPage")),Se.push(y),y}async openSiteBtn(e,t,r=!1){this.lastTips=null;let i=new CustomEvent("mouseenter");e.dispatchEvent(i),await this.siteSetUrl(e);let a=e.dataset.isPage;t||(t="_blank"),a&&e.setAttribute("target",t),a&&t=="_blank"&&e.href?ge(e.href,{active:r,insert:!0}):e.click(),e.setAttribute("target",e.dataset.target==1?"_blank":"_self")}async batchOpen(e,t,r){let i=this;if(i.batchOpening=!0,i.customInput=!1,t.altKey&&t.shiftKey){let a=i.getTargetSitesByName(e),n=window.innerWidth||document.documentElement.clientWidth,s="<title>SearchJumper Multi</title><style>body{background: black; margin: 0;}iframe{box-sizing: border-box;padding: 5px}</style>",o=window.open("","_blank"),p=1;for(let d of a)if(d.dataset.isPage){if(await i.siteSetUrl(d),i.stopInput)return;if(!d.href)continue;let f=document.createElement("iframe");f.width=a.length<=2||n<=1280?"50%":"33%",f.height="100%",f.frameBorder="0",f.sandbox="allow-same-origin allow-scripts allow-popups allow-forms",f.id="searchJumper"+p++,f.style.display="none",s+=f.outerHTML,Be({method:"GET",url:d.href,headers:{referer:d.href,origin:d.href,"User-Agent":navigator.userAgent},onload:function(g){let u=o.document.querySelector("iframe#"+f.id),m=()=>{let y=u.contentDocument||u.contentWindow&&u.contentWindow.document;if(y)try{u.style.display="",u.src=d.href;let T=`<base href="${d.href.replace(/[^\/]*$/,"")}" />`,E=g.response.indexOf("<head")!==-1?g.response.replace(/(\<head.*?\>)/,"$1"+T):T+g.response;y.write(E)}catch{}else setTimeout(()=>{m()},500)};u&&m()},onerror:function(g){pe(g)},ontimeout:function(g){pe(g)}})}o.document.write(s),o.document.close()}else if((t.ctrlKey||t.metaKey)&&t.shiftKey){let a=i.getTargetSitesByName(e);for(let n of a){if(await i.siteSetUrl(n),i.stopInput)return;if(n.dataset.isPage&&n.href){let s={};$&&(s={src:$.src||$.href||"",title:$.title||$.alt}),e=e.filter(o=>o!==n.dataset.name),U.setItem("lastSign",{target:s,sites:e}),setTimeout(()=>{ge(n.href,{incognito:!0})},300),setTimeout(()=>{U.setItem("lastSign",!1)},2e3);break}}}else if(t.altKey){let a=i.getTargetSitesByName(e),n=[];for(let g of a)if(g.dataset.isPage){if(await i.siteSetUrl(g),i.stopInput)return;if(!g.href)continue;n.push(g.href)}let s=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,o=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,p=parseInt(s/800);p>n.length&&(p=n.length);let d=parseInt(s/p),f=o/(parseInt((n.length-1)/p)+1)-65;for(let g=0;g<n.length;g++){let u=g%p*d,m=parseInt(g/p)*(f+70);window.open(n[g]+"#searchJumperMin","_blank",`width=${d-10}, height=${f}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${u}, top=${m}`)}}else if(t.shiftKey){let a=i.getTargetSitesByName(e);for(let n of a){if(await i.siteSetUrl(n),i.stopInput)return;if(n.dataset.isPage&&n.href){let s={};$&&(s={src:$.src||$.href||"",title:$.title||$.alt}),e=e.filter(o=>o!==n.dataset.name),U.setItem("lastSign",{target:s,sites:e}),window.open(n.href,"_blank"),setTimeout(()=>{U.setItem("lastSign",!1)},2e3);break}}}else if(t.ctrlKey||t.metaKey){let a=i.getTargetSitesByName(e).reverse();for(let n of a){if(await i.siteSetUrl(n),n.dataset.isPage&&n.href){ge(n.href,{active:!1,insert:!0});continue}if(i.stopInput)return;n.click()}}else t.button===2&&i.getTargetSitesByName(e).reverse().forEach(n=>{n.dataset.current||i.openSiteBtn(n,"_blank",!!r)});i.batchOpening=!1}async siteSetUrl(e,t){return new Promise(r=>{let i=n=>{e.removeEventListener("actionOver",i),r(!0)};e.addEventListener("actionOver",i);let a=new PointerEvent("mousedown",t);e.dispatchEvent(a)})}getTargetSitesByName(e,t){let r=this,i=[];return e.forEach(a=>{for(let n=0;n<r.allSiteBtns.length;n++){let s=r.allSiteBtns[n][0];if(s.dataset.name==a){if(!t&&s.dataset.pointer){if(s.dataset.oriName){let o=r.getTargetSitesByName([s.dataset.oriName],!0);if(o.length){i.push(...o);break}}}else i.push(s);break}}}),i}async submitAction(e){if(e=e.slice(),document.readyState!=="complete"&&document.readyState!=="interactive"){await $e(300),this.submitAction(e);return}let t,r,i=!1,a=this,n=!1,s=0,o=[],p=!1,d=[],f=await U.getItem("copyStore");f&&(d=JSON.parse(f));let g=async(u,m)=>{let y=!0;if(u[0]==="sleep"||u[0]==="@sleep")await $e(u[1]),pe(`sleep ${u[1]}`);else if(u[0]==="@click")i=!0,await Ki(u[1],m)||(y=!1);else if(u[0]==="@dblclick")i=!0,await wr(u[1],m)||(y=!1);else if(u[0]==="@rclick")i=!0,await Sr(u[1],m)||(y=!1);else if(u[1]==="click"&&u[0].indexOf("@")===0)i=!0,await Ki(u[0].substr(1),m)||(y=!1);else if(u[0]==="@copy"){let T=await Lt(u[1],m);T&&T!==!0&&(d.push(T.innerText),ct||(y=!1))}else if(u[0]==="@call"){let T=a.getTargetSitesByName([u[1]])[0];if(T)Nt=Nt||Xe()||Ee,await a.siteSetUrl(T),T.click();else{let E=window[u[1]]||new ai('"use strict";'+u[1]);E&&await E()}}else if(u[0]==="@open"){let T=await Ht(u[1]);p?ge(T.href):(p=!0,setTimeout(()=>{location.href=T.href},50))}else if(u[0]!=="@reload")if(u[0]==="@wait")u[1].indexOf("!")===0?await vr(u[1].slice(1)):await Ht(u[1]);else{let T=u[1];if(Oe||(Oe=T),T.indexOf("%input{")!==-1){let x=await a.showCustomInputWindow(T);if(x)T=x;else return U.setListItem("inPagePostParams",location.hostname,""),!0}await Ui(u[0],T,m)||(y=!1),u[0]!=="@"&&(r=bt(u[0]))}return y};for(let u of e){if(u[0]==="@loopStart")n=!0,o=[],s=parseInt(u[1])||1;else if(u[0]==="@loopEnd")for(n=!1;s-- >0;){let m=!1,y=0;for(;!m;){m=!0;for(let T of o)await g(T,y)||(m=!1);y++}}else n?o.push(u):await g(u);if(Ge&&(Ge.shift(),Ge&&Ge.length?(U.setListItem("inPagePostParams",location.hostname,Ge),U.setItem("copyStore",JSON.stringify(d))):(He(d.join(`
`)),U.setListItem("inPagePostParams",location.hostname,""),U.setItem("copyStore","")),u[0]==="@reload")){location.reload(!!u[1]);return}}if(n)for(n=!1;s-- >0;){let u=!1,m=0;for(;!u;){u=!0;for(let y of o)await g(y,m)||(u=!1);m++}}if(!i&&r){for(t=r.parentNode;t.nodeName.toUpperCase()!="FORM"&&(t=t.parentNode,!!t););if(t){let u=t.querySelector("[type=submit]");u?u.click():t.submit()}else xr()}}getCloneData(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t];for(let i=0;i<r.sites.length;i++){let a=r.sites[i];if(!/^\[/.test(a.url)&&a.name==e)return a}}return null}async createSiteBtn(e,t,r,i,a,n){let s=this,o=document.createElement("a");o.setAttribute("ref","noopener noreferrer"),o.setAttribute("referrerPolicy","no-referrer");let p=t.name,d=t.match,f=!1,g,u=!i&&/^\[/.test(t.url),m=t.description,y=t.shortcut;if(typeof t.openInNewTab<"u"&&(r=t.openInNewTab),u){o.dataset.pointer=!0;let h=JSON.parse(t.url);if(h.length===1){o.dataset.clone=!0;let C=this.getCloneData(h[0]);C&&(o.dataset.oriName=C.name,t=C,t.icon&&e!=="0"&&(e=t.icon),t.description&&(m=t.description))}}/^d:/.test(t.url)?(o.setAttribute("download",""),t.url=t.url.replace(/^d:/,"")):/^showTips:/.test(t.url)&&(f=!0,o.dataset.showTips=!0),/^paste:/.test(t.url)&&(o.dataset.paste=!0);let T=/^(https?|ftp):/.test(t.url);T&&(o.dataset.isPage=T),o.className="search-jumper-btn",typeof m<"u"&&(o.title=m),o.dataset.name=p,o.classList.add("search-jumper-word"),o.dataset.inPagePost=t.url.indexOf("#p{")!=-1?"t":"f";let E=o.dataset.inPagePost==="t";if(d==="0")o.style.display="none",o.classList.add("notmatch");else if(!i&&(!ae||t.hideNotMatch)&&window.top==window.self){if(d){let h,C=d.match(/^\/(.*)\/(\w*)$/);C?h=new RegExp(C[1],C[2]):h=new RegExp(d,"i"),h.test(de)&&(o.dataset.current=!0)}else if(!u&&location.hostname&&t.url.indexOf(location.hostname)!=-1){this.inSiteMatch||(this.inSiteMatch=/site(%3A|:)(.+?)[\s%]/);let h=t.url.match(this.inSiteMatch);if(h)de.indexOf(h[2])!=-1&&t.url.replace(h[0],"").indexOf(location.hostname)!=-1&&(o.dataset.current=!0);else if(this.pathMatch||(this.pathMatch=new RegExp("^https?://"+location.host+location.pathname+"?([\\?#].*|[%:#]p{|$)")),this.pathMatch.test(t.url))if(this.postMatch||(this.postMatch=/[#:%]p{/),this.postMatch.test(t.url))o.dataset.current=!0;else{this.paramMatch||(this.paramMatch=/[^\/\?&]+(?=%[stb])/g);let C=t.url.match(this.paramMatch);C?(C=C.join(".*"),new RegExp(C).test(de)&&(o.dataset.current=!0)):o.dataset.current=!0}else t.url.indexOf("http")===0&&t.url.indexOf("?")===-1&&(this.keywordMatch||(this.keywordMatch=/%[stb][a-z]?\b/g),new RegExp(t.url.replace(/^https?/,"").replace(/[#%]\w+{.*/,"").replace(/\./g,"\\.").replace(this.keywordMatch,".*")).test(de)&&(o.dataset.current=!0))}o.dataset.current||t.hideNotMatch&&(o.style.display="none",o.classList.add("notmatch"))}let x=document.createElement("span");!i&&p.length>=3?(x.innerText=p.substr(0,4),/^[\w \-]+$/.test(x.innerText.substr(0,3))||(x.innerText=x.innerText.substr(0,2))):x.innerText=p,o.appendChild(x);let B=document.createElement("img");if(B.style.display="none",o.appendChild(B),!n&&c.prefConfig.shortcut&&y&&!o.dataset.clone&&!o.classList.contains("notmatch")){let h=document.createElement("div"),C=y.replace("Key","").replace("Digit","").toUpperCase();C.length==1&&(h.innerText=C,o.appendChild(h)),document.addEventListener("keydown",async I=>{if(!(c.prefConfig.shortcut==2&&!ae)&&I.target.id!=="searchJumperInput"&&!(!s.hideTimeout&&(!t.ctrl==I.ctrlKey||!t.alt==I.altKey||!t.shift==I.shiftKey||!t.meta==I.metaKey))&&s.bar.contains(o)&&!(!c.prefConfig.enableInInput&&!t.ctrl&&!t.alt&&!t.shift&&!t.meta&&Ct(document))){var R=(I.key||String.fromCharCode(I.keyCode)).toLowerCase();(y==I.code||y==R)&&(I.stopPropagation(),ui&&($=ui),f?o.dispatchEvent(new CustomEvent("showTips")):await ue()!==!1&&!s.customInput&&o.click())}})}let W;if(e=="0"||(e?W=e:!i&&T?W=t.url.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"):/^showTips:https?:\/\//.test(t.url)&&(W=t.url.replace(/\?.*/,"").replace(/^showTips:(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"))),W)if(B.onload=C=>{o.classList.remove("search-jumper-word"),x.parentNode&&!c.prefConfig.showEngineWords&&x.parentNode.removeChild(x),B.style.display=""},/^data:/.test(W))B.dataset.src=W;else{let C=c.prefConfig.cacheSwitch&&be[W];C==="fail"?o.dataset.current&&W.indexOf(location.host)!=-1&&(B.dataset.src=W,be[W]="",i||setTimeout(()=>{mi(B)},0)):C?B.dataset.src=C:(B.dataset.src=W,!i&&!be[W]&&Je.push(B))}T&&(r?(o.setAttribute("target","_blank"),o.dataset.target=1):o.setAttribute("target","_self"));let P=t.url,H=ft.test(P);H&&(o.dataset.txt=!0),/%[tb]\b/i.test(P)&&(o.dataset.link=!0);let O,Y=async h=>{s.customInput=!1,P=t.url,O="";let C=h||s.searchJumperInputKeyWords.value||We()||s.tileInput.value;!C&&!mt&&!s.bar.classList.contains("search-jumper-isTargetLink")&&(C=Xe()),C&&!h&&(C!=Ee&&(s.keywordIndex=0,T&&(Ee=C,U.setItem("cacheKeywords",C))),O=C);let I;(E||/^c(opy)?:|^paste:/.test(P))&&(P.indexOf("%input{")!==-1&&(P=await new Promise(Z=>{s.showCustomInputWindow(P,q=>{Z(q)})}),o.dataset.url=""),I=P.match(/#p{([\s\S]*[^\\])}/));let R=location.host,z=location.href,F=(Z,q,K,le)=>{if(Z.indexOf(q+"[")!==-1){let ve=Z.match(Ut(q,"","\\[(.*?)(\\|(.+))?\\]")),he;if(ve){switch(ve[3]?he=K.split(ve[3]):(he=K.split(/[\n\r]/),he.length===1&&(he=K.split(" "))),s.keywordIndex||(s.keywordIndex=0),ve[1]){case"all":O=he.join(`
`);break;case"":K=he[s.keywordIndex],++s.keywordIndex>=he.length&&(s.keywordIndex=0);break;case"-1":--s.keywordIndex<0&&(s.keywordIndex=he.length-1),K=he[s.keywordIndex];break;default:K=he[parseInt(ve[1])||0];break}Z=Z.replace(ve[0],q)}}return gi(Z,q,K,le)},ce=!/^showTips:h/i.test(P)&&/^c(opy)?:|[#:%]P{|^javascript:|^showTips:/i.test(P),oe="",fe="",re="",it="",ji="",Ei=Z=>{let q=Z;if(q=F(q,"%su",oe),q=F(q,"%sl",fe),q=F(q,"%sr",f?re.replace(/\n/g,"\u3010SearchJumperBreak\u3011"):re),q=F(q,"%S",Ee||re),q=F(q,"%ss",it),q=F(q,"%st",ji),q=F(q,"%se",escape?escape(re):re),q=F(q,"%s",re,K=>ce?K:encodeURIComponent(K)),/%bd\b/.test(q))try{let K=atob(re);q=F(q,"%bd",K)}catch{console.log("No standard base64")}if(/%be\b/.test(q))try{let K=btoa(re);q=F(q,"%be",K)}catch(K){console.log(K)}return q},Rr=Z=>{let q=Z.match(/%element{(.*?)}(\.prop\((.*?)\))?/),K=0;for(;q&&!(K++>100);){let ve=q[1],he=q[3],me="";if(ve){let rt=bt(ve);rt&&(he?me=rt.getAttribute(he)||rt[he]:me=rt.innerText)}else try{let rt=window.getSelection(),st=document.createElement("div");for(let we=0,je=rt.rangeCount;we<je;++we)st.appendChild(rt.getRangeAt(we).cloneContents());if([].forEach.call(st.querySelectorAll("style,script,svg,canvas"),we=>{let je=document.createTextNode("");we.parentNode.replaceChild(je,we)}),document.body.appendChild(st),he)for(let we=0;we<st.childNodes.length;we++){let je=st.childNodes[we];je.nodeType==3?(me+=je.nodeValue,me+=`
`):je.nodeType==1&&(me+=je.getAttribute(he)||je[he]||"",me+=`
`)}else[].forEach.call(st.querySelectorAll("img"),we=>{if(!we.src)return;let je=document.createTextNode(` ![${(we.alt||"").replace(/[\n\r]/g," ").trim()}](${we.src||""}) `);we.parentNode.replaceChild(je,we)}),[].forEach.call(st.querySelectorAll("a"),we=>{if(!we.href)return;let je=(we.innerText||"").replace(/[\n\r]+/g,`
`).trim();if(!je)return;je=` [${je}](${we.href||""}) `;let ti;je.indexOf(`
`)==-1?ti=document.createTextNode(je):(ti=document.createElement("pre"),ti.innerHTML=Q(je)),we.parentNode.replaceChild(ti,we)}),me=st.innerText;me&&(me=me.replace(/[\n\r]\s*/g,`
`)),document.body.removeChild(st)}catch(rt){console.error(rt)}Z=F(Z,q[0],ce?me:encodeURIComponent(me)),q=Z.match(/%element{(.*?)}(\.prop\((.*?)\))?/)}q=Z.match(/%date({(.*?)})?/),K=0;let le=new Date().getTime();for(;q&&!(K++>100);){let ve=q[2],he=le;if(ve){ve=ve.replace(/\s/g,"");let me=ve.match(/(\D*)?(\d+)/);for(;me;){switch(me[1]){case"-":he-=parseInt(me[2]);break;case"*":he*=parseInt(me[2]);break;case"/":me[2]&&me[2]!="0"&&(he=parseInt(he/parseInt(me[2])));break;default:he+=parseInt(me[2]);break}ve=ve.replace(me[0],""),me=ve.match(/(\D*)?(\d+)/)}}else he=le;Z=Z.replace(q[0],he),q=Z.match(/%date({(.*?)})?/)}return Z};if(!o.dataset.url){let Z=P;E&&(Z=Z.replace(I[0],"")),o.dataset.url=Z.replace(/%e\b/g,document.characterSet).replace(/%c\b/g,Wt?"mobile":"pc")}let xe="",vt="",Li=O||document.title,Qe="",se=Rr(o.dataset.url);if($&&$.nodeName){if(xe=$.href||$.parentNode&&$.parentNode.href||"",vt=xe||$.parentNode&&$.parentNode.parentNode&&$.parentNode.parentNode.href||"",(a.selectImg||a.selectAudio||a.selectVideo)&&$.src&&(xe=$.src),$.nodeName.toUpperCase()=="VIDEO"||$.nodeName.toUpperCase()=="AUDIO"){if(!xe){let Z=$.querySelector("source");Z&&(xe=Z.src)}xe&&(xe=xe.replace(/^blob:/,""))}Li=$.title||$.alt||document.title,$.nodeName.toUpperCase()=="IMG"&&/%i\b/.test(P)?$.src&&(/^data/.test($.src)?Qe=$.src:(s.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),Qe=await Gi($)),se=se.replace(/%i\b/g,Qe)):($.nodeName.toUpperCase()=="A"||$.parentNode&&$.parentNode.nodeName.toUpperCase()=="A")&&H&&!C&&$.textContent.trim()&&(C=$.textContent.trim())}for(;se.indexOf("%template{")!==-1;){let Z=se.match(/%template{(.*?[^\\])}/);if(!Z)return!1;let q=Z[1];c.prefConfig.templateData||(c.prefConfig.templateData={});let K=c.prefConfig.templateData[q];if(!K){if(s.stopInput)return!1;if(K=window.prompt(A("template",q))||"",K)c.prefConfig.templateData[q]=K,U.setItem("searchData",c);else return!1}se=se.replace(Z[0],K)}for(;se.indexOf("%input{")!==-1;){let Z=se.match(/%input{(.*?[^\\])}/);if(!Z||(s.customInput=!0,s.stopInput))return!1;if(s.batchOpening){let q;if(Z[1].indexOf('"')===0&&Z[1].indexOf('","')!==-1?q=Z[1].substr(1,Z[1].length-2).split('","'):q=Z[1].split(","),q.length===2?q=window.prompt(q[0],q[1]):q=window.prompt(Z[1]),q===null)return!1;se=se.replace(Z[0],q)}else break}xe&&(xe=xe.replace(/%(\w{2})/g,(Z,q)=>`%${q.toUpperCase()}`)),vt&&(vt=vt.replace(/%(\w{2})/g,(Z,q)=>`%${q.toUpperCase()}`));let wt=xe.replace(/^https?:\/\//i,"");C||(C=ae&&Ee);try{if(typeof navigator.clipboard.readText<"u"&&(!C&&H&&(C=await navigator.clipboard.readText(),C&&!h&&(O=C)),!Qe&&/%i\b/.test(P))){if((await navigator.permissions.query({name:"clipboard-read"})).state!=="denied"){const q=await navigator.clipboard.read();for(const K of q)if(K.types.includes("image/png")){const le=await K.getType("image/png");Qe=await new Promise(ve=>{const he=new FileReader;he.onload=function(me){ve(me.target&&me.target.result)},he.readAsDataURL(le)}),Qe&&(se=se.replace(/%i\b/g,Qe))}}if(!Qe){s.customInput=!0;let q=window.prompt(A("targetUrl"),"https://www.google.com/favicon.ico");if(q)s.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),Qe=await Ft(q);else return!1}}}catch(Z){console.error(Z.message)}if(!C&&H){if(s.customInput=!0,s.con.classList.contains("search-jumper-showall")||s.inInput||f||s.stopInput)return!1;let Z=window.prompt(A("keywords"));if(Z===null)return!1;Oe=Z,setTimeout(()=>{Oe=""},1),C=Z,re=C,oe=re.toUpperCase(),fe=re.toLowerCase(),it=ye.tc2sc?ye.tc2sc(re):re,ji=ye.sc2tc?ye.sc2tc(re):re,ce||(C=encodeURIComponent(C)),se=Ei(se)}else C&&!oe&&!fe&&!re&&(re=C,oe=re.toUpperCase(),fe=re.toLowerCase(),it=ye.tc2sc?ye.tc2sc(re):re,ji=ye.sc2tc?ye.sc2tc(re):re,ce||(C=encodeURIComponent(C)));if(xe===""){let Z=We()||s.searchJumperInputKeyWords.value||s.tileInput.value;if(!H&&Z&&/^(http|ftp)/i.test(Z))xe=Z,xe=xe.replace(/%(\w{2})/g,(q,K)=>`%${K.toUpperCase()}`);else{let q=!1,K=()=>!(s.stopInput||f||(q===!1&&(q=window.prompt(A("targetUrl"),"https://www.google.com/favicon.ico"),q&&(q=q.replace(/%(\w{2})/g,(le,ve)=>`%${ve.toUpperCase()}`),$={src:q})),q===null));if(/%t\b/.test(se)){if(s.customInput=!0,K()===!1)return!1;se=F(se,"%t",q)}if(/%T\b/.test(se)){if(s.customInput=!0,K()===!1)return!1;se=se.replace(/%T\b/g,encodeURIComponent(q))}if(/%τ\b/.test(se)){if(s.customInput=!0,K()===!1)return!1;se=se.replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(q)))}if(/%b\b/.test(se)){if(s.customInput=!0,K()===!1)return!1;se=se.replace(/%b\b/g,q.replace(/^https?:\/\//i,""))}if(/%B\b/.test(se)){if(s.customInput=!0,K()===!1)return!1;se=se.replace(/%B\b/g,encodeURIComponent(q.replace(/^https?:\/\//i,"")))}if(/%β\b/.test(se)){if(s.customInput=!0,K()===!1)return!1;se=se.replace(/%β\b/g,encodeURIComponent(encodeURIComponent(q.replace(/^https?:\/\//i,""))))}}}let Pi=R;if((vt||xe)&&!o.dataset.link&&(z=vt||xe,Pi=z.replace(/^\w+:\/\/([^\/]+).*/,"$1")),E){let Z=[],q=!1;if(I[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(K=>{if(K=K.trim(),/^loopStart\(\d+\)$/.test(K)){let le=K.match(/loopStart\((.*)\)/);Z.push(["@loopStart",le[1]])}else if(K=="loopEnd")Z.push(["@loopEnd",""]);else if(K.startsWith("click(")&&K.endsWith(")")){let le=K.slice(6,K.length-1);le&&Z.push(["@click",le.replace(/\\([\=&])/g,"$1").trim()])}else if(K.startsWith("dblclick(")&&K.endsWith(")")){let le=K.slice(9,K.length-1);le&&Z.push(["@dblclick",le.replace(/\\([\=&])/g,"$1").trim()])}else if(K.startsWith("rclick(")&&K.endsWith(")")){let le=K.slice(7,K.length-1);le&&Z.push(["@rclick",le.replace(/\\([\=&])/g,"$1").trim()])}else if(K.startsWith("copy(")&&K.endsWith(")")){let le=K.slice(5,K.length-1);le&&Z.push(["@copy",le.replace(/\\([\=&])/g,"$1").trim()])}else if(K.startsWith("call(")&&K.endsWith(")")){let le=K.slice(5,K.length-1);le&&(Z.push(["@call",le.replace(/\\([\=&])/g,"$1").trim()]),q=!0)}else if(K.startsWith("reload(")&&K.endsWith(")")){let le=K.slice(7,K.length-1);Z.push(["@reload",le.trim()])}else if(K.startsWith("wait(")&&K.endsWith(")")){let le=K.slice(5,K.length-1);Z.push(["@wait",le.replace(/\\([\=&])/g,"$1").trim()])}else if(K.startsWith("open(")&&K.endsWith(")")){let le=K.slice(5,K.length-1);le&&Z.push(["@open",le.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(K)){let le=K.match(/sleep\((.*)\)/);le&&Z.push(["@sleep",le[1]])}else{K=K.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let le=K.split("SJ^PARAM");if(le.length===2){let ve=le[0],he=Ei(le[1].replace(/\\([\=&])/g,"$1").replace(/%e\b/g,document.characterSet).replace(/%i\b/g,Qe).replace(/%c\b/g,Wt?"mobile":"pc").replace(/%U\b/g,encodeURIComponent(z)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(z))).replace(/%h\b/g,Pi).replace(/%T\b/g,encodeURIComponent(xe)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(xe))).replace(/%b\b/g,wt).replace(/%B\b/g,encodeURIComponent(wt)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent(wt))).replace(/%n\b/g,Li));he=F(he,"%t",xe),he=F(he,"%u",z),Z.push([ve,he])}else(K.endsWith(".click()")||K.endsWith(".click"))&&Z.push(["@"+K.replace(/\.click(\(\))?$/,""),"click"])}}),q&&s.updateCacheKeywords(),se===""||se===location.href)return Ge=Z,this.submitAction(Z),!1;U.setListItem("inPagePostParams",se.replace(/^https?:\/\/([^\/:]+).*/,"$1"),Z)}return se=F(se,"%h",Pi),se=F(se,"%t",xe),se=F(se,"%u",z),se=Ei(se.replace(/%U\b/g,encodeURIComponent(z)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent(z))).replace(/%T\b/g,encodeURIComponent(xe)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(xe))).replace(/%b\b/g,wt).replace(/%B\b/g,encodeURIComponent(wt)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent(wt))).replace(/%n\b/g,Li)),r&&/^(https?|ftp):/.test(se)?(o.setAttribute("target","_blank"),o.dataset.target=1):o.dataset.target=0,se},b,k=!1,j,M,N,G,ue=async h=>{if(delete o.href,h||(h={}),j=h.altKey,M=h.ctrlKey,N=h.metaKey,G=h.shiftKey,!j&&!M&&!N&&!G&&(h.button==1||h.button==2?(j=!1,M=!0,N=!1,G=!1):r===2?(j=!1,M=!0,N=!1,G=!0):r===3?(j=!0,M=!1,N=!1,G=!1):r===4&&(j=!1,M=!0,N=!1,G=!1)),f){o.removeAttribute("target"),g&&(/^(https?|ftp):/.test(g)?(b=g,o.href=b,r?o.setAttribute("target","_blank"):o.setAttribute("target","_self")):(/^copy:/.test(g)&&(g=g.replace(/^copy:/,"")),He(g))),o.dispatchEvent(new Event("actionOver"));return}if(k=!1,b="",b=await Y(),/^(https?|ftp):/.test(b)&&h.stopPropagation&&h.stopPropagation(),/^c(opy)?:|^paste:/.test(t.url)||/^javascript:/.test(t.url)||/^\[/.test(t.url)||/[:%]P{/.test(t.url)||t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url))(h.button==1||h.button==2)&&(k=!0);else{if(!b){s.stopInput||(s.stopInput=!0,setTimeout(()=>{s.stopInput=!1},1));return}o.href=b}s.customInput&&b&&(k=!0),o.dispatchEvent(new Event("actionOver")),k&&(h.preventDefault&&h.preventDefault(),o.click())},te=()=>{let h=Math.max(c.prefConfig.historyLength,20),C=o.dataset.current;if(!t.hideNotMatch&&!t.kwFilter&&!o.dataset.clone&&!o.dataset.paste&&d!=="0"&&h&&!C&&U.getItem("historySites",I=>{Ve=I||[],Ve=Ve.filter(R=>R&&R!=p),Ve.unshift(p),Ve.length>h&&(Ve=Ve.slice(0,h)),U.setItem("historySites",Ve)}),c.prefConfig.shiftLastUsedType&&!C){let I=o.parentNode;!(I&&(I.classList.contains("search-jumper-targetAll")||I.classList.contains("search-jumper-targetImg")||I.classList.contains("search-jumper-targetAudio")||I.classList.contains("search-jumper-targetVideo")||I.classList.contains("search-jumper-targetLink")||I.classList.contains("search-jumper-targetPage")||I.classList.contains("search-jumper-needInPage")))&&kt!=o.dataset.type&&(kt=o.dataset.type,U.setItem("historyType",kt))}c.prefConfig.sortType&&U.getItem("sortTypeNames",I=>{Le=I||{},Le[o.dataset.type]?Le[o.dataset.type]=Le[o.dataset.type]+1:Le[o.dataset.type]=1,U.setItem("sortTypeNames",Le)}),c.prefConfig.sortSite&&U.getItem("sortSiteNames",I=>{Pe=I||{},Pe[o.dataset.name]?Pe[o.dataset.name]=Pe[o.dataset.name]+1:Pe[o.dataset.name]=1,U.setItem("sortSiteNames",Pe)})},ie=(h,C)=>{He(C);let I=o;h||(s.appendBar(),s.closeOpenType(),s.con.style.display="",s.setFuncKeyCall(!0),window.getSelection().toString()?I=$||o:I=V(document)),s.tipsPos(I,A("copyOver")),clearTimeout(s.hideTips),s.hideTips=setTimeout(()=>{s.tips.style.opacity=="1"&&(s.tips.style.opacity=0)},1500)},S=h=>{if(h&&h.stopPropagation&&h.stopPropagation(),$&&$.focus&&$.focus(),f&&s.waitForShowTips)return ne(o,0),h&&h.preventDefault&&h.preventDefault(),!1;if(k=!0,!b)return h&&h.preventDefault&&h.preventDefault(),!1;h||(h={});let C=/^(https?|ftp):/.test(b);if(!s.batchOpening&&!i&&te(),(c.prefConfig.multiline==1||c.prefConfig.multiline==2)&&O&&ft.test(o.dataset.url)&&O.indexOf(`
`)!==-1&&!/^(c|show)/.test(o.dataset.url)&&(c.prefConfig.multiline==1||confirm(A("multiline")))){let R=O.split(`
`);if(R.length>10&&!confirm(A("multilineTooMuch")))return;let z=0,F=o.target;o.target="_blank";let ce=async()=>{b=await Y(R[z++]),o.href=b,o.click(),z<R.length?setTimeout(()=>{ce()},c.prefConfig.multilineGap||1e3):o.target=F};return ce(),o.href="",h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),!1}if(b.indexOf("%input{")!==-1){s.showCustomInputWindow(b,R=>{b=R,o.href=R,o.click()}),h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation();return}let I=b.match(/^find(\.addto\((.*?)\))?:(.*)/);if(I){h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation();let R=I[2],z=I[3];if(z)R&&c.prefConfig.inPageRule&&R.indexOf("@")!==0&&(R="@"+R),z.indexOf("%input{")!==-1?s.showCustomInputWindow(z,F=>{R?s.addToHighlightGroup(F,R):(s.searchJumperInPageInput.value=F,s.submitInPageWords(),s.waitForHide(0))}):R?s.addToHighlightGroup(z,R):(s.searchJumperInPageInput.value=z,s.submitInPageWords(),s.waitForHide(0));else return!1;return!1}else if(/^javascript:/.test(t.url)){h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),ye.targetElement=$,ye.keywords=Xe(),b=b.replace(/^javascript:/,"");try{b=decodeURIComponent(b)}catch{}let R=/^[_a-zA-Z0-9]+$/.test(b)&&ye[b]||new ai(b);return R&&R(),!1}else if(/^c(opy)?:/.test(t.url)){if(h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),b)b.indexOf("%input{")!==-1?s.showCustomInputWindow(b,R=>{ie(!0,R.replace(/^c(opy)?:/,""))}):ie(h.isTrusted,b.replace(/^c(opy)?:/,""));else return!1;return!1}else if(/^paste:/.test(t.url)){let R=!1;if($&&/INPUT|TEXTAREA/i.test($.nodeName)&&$.getAttribute("aria-readonly")!="true")R=!0;else{let z=$;for(;z&&(R=z.contentEditable=="true",!(R||z.nodeName.toUpperCase()=="BODY"));)z=z.parentNode}if(R){if(!b)return!1;b=b.replace(/^paste:/,""),b.indexOf("%input{")!==-1?s.showCustomInputWindow(b,z=>{Ot($,z)}):b?Ot($,b):typeof navigator.clipboard.readText<"u"&&navigator.clipboard.readText().then(z=>{Ot($,z)})}}else if(/^\[/.test(t.url)){h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation();let R=JSON.parse(t.url);return s.batchOpen(R,{button:2,altKey:j||h.altKey,ctrlKey:M||h.ctrlKey,shiftKey:G||h.shiftKey,metaKey:N||h.metaKey},r===1),!1}else if(/[:%]P{/.test(t.url)){if(h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),b===!1)return!1;let R=z=>{let F=z.match(/[:%]P{(.*)}/),ce="";if(F)if(z=z.replace(F[0],""),F=F[1],F.charAt(0)==='"'&&F.charAt(F.length-1)==='"')ce=F.substring(1,F.length-1);else{F=new URLSearchParams(F);let oe={};F.forEach((fe,re)=>{oe[re]=fe}),ce=JSON.stringify(oe)}Be({method:"POST",url:z,data:ce,onload:oe=>{pe(oe)},onerror:oe=>{Ce(A("postError")+(oe.statusText||oe.error))},ontimeout:oe=>{Ce(A("postError")+(oe.statusText||oe.error))}})};return b.indexOf("%input{")!==-1?s.showCustomInputWindow(b,z=>{R(z)}):R(b),!1}else if(t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url)){if(b===!1)return!1;let R=t.url.match(/#(j(umpFrom|f)?|from){(.*?)}/),z=F=>(R?(U.setItem("postUrl",[F,t.charset]),R=R[3],R.indexOf("http")!==0&&(R=F.replace(/(:\/\/.*?\/)[\s\S]*/,"$1"+R)),F=R):(U.setItem("postUrl",[F,t.charset]),F=F.replace(/(:\/\/.*?)\/[\s\S]*/,"$1").replace(/[:%]p{[\s\S]*/,"")),F);if(b.indexOf("%input{")!==-1){s.showCustomInputWindow(b,F=>{F=z(F),F&&(o.href=F,o.target==="_blank"?ge(o.href,{active:!0,insert:!0}):location.href=o.href)}),h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation();return}else{if(b=z(b),!b)return;o.href=b}}if(!(G&&!M&&!N&&!j&&h.isTrusted)){if(/^(chrome|edge|about|extension|moz-extension)/.test(b))return h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),M?ge(b,{active:!1,insert:!0}):ge(b,{active:!0,insert:!0,close:o.getAttribute("target")!=="_blank"}),!1;if((j||M||N||G)&&C){if((M||N)&&G)ge(b,{incognito:!0});else if(M||N)ge(b,{active:!1,insert:!0});else if(j){if(t.match){let re=t.match.replace(/\\/g,""),it=re.match(/\((www)\|([^\)\|]+)/);for(;it;)b=b.replace(it[1],it[2]),re=re.replace(it[0],""),it=re.match(/\(([^\)\|]+)\|([^\)\|]+)/)}let R=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,z=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,F=c.prefConfig.popupWidth,ce=c.prefConfig.popupHeight,oe=c.prefConfig.popupLeft,fe=c.prefConfig.popupTop;ce?(ce=parseFloat(ce),ce=z/100*ce):ce=Math.max(z/3*2,z-250),F?(F=parseFloat(F),F=R/100*F):F=Math.min(R,650),oe?(oe=parseFloat(oe),oe=R/100*oe-F/2):oe=R-F-30,fe?(fe=parseFloat(fe),fe=z/100*fe-ce/2):fe=(z-ce)/2,s.closePopupWindow(),s.popupWindow=window.open(b+"#searchJumperMin"+(/#p{/.test(t.url)?"Post":""),"_blank",`width=${F}, height=${ce}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${oe}, top=${fe}`)}else G&&ge(b,{active:!0,insert:!0});return h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),!1}else if(C&&o.getAttribute("target")==="_blank"&&!(j||M||N||G)&&h.button===0)return ge(b,{active:!0,insert:!0}),h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),!1}};o.addEventListener("mousedown",ue,!0),o.addEventListener("mouseup",h=>{h.stopPropagation&&h.stopPropagation()},!0),o.addEventListener("click",S,!0),o.addEventListener("auxclick",h=>{if(k&&h.preventDefault)return h.preventDefault(),!1},!0),o.addEventListener("contextmenu",h=>{if(k&&h.preventDefault)return h.preventDefault(),!1},!0);let J=o.dataset.name;y&&(J+=` (${t.ctrl?"Ctrl + ":""}${t.shift?"Shift + ":""}${t.alt?"Alt + ":""}${t.meta?"Meta + ":""}${y.replace("Key","")})`);let D=!1,_=!1,ee=async(h,C,I)=>{if(s.tipsPos(h,'<span class="loader"></span><font>Loading...</font>'),_=!1,C)try{C=C.replace(/^showTips:/,""),D=!0;let R=await s.anylizeShowTips(C,o.dataset.name,h);if(D=!1,s.tips.style.opacity==0||s.tips.innerHTML.indexOf('<span class="loader">')!==0){_=!0;return}Array&&Array.isArray&&Array.isArray(R)&&(g=R[1],R=R[0]),R&&(R!="null"&&R!="No result"&&(R=`<div>${R}</div>`,_=!0),s.tipsPos(h,R),te(),setTimeout(()=>{s.tips.style.pointerEvents="all"},100))}catch(R){pe(R)}},ne=async(h,C=1e3)=>{if(!(!h||h.nodeType!==1)&&(s.preList&&(s.preList.style.visibility="hidden",s.listArrow.style.cssText=""),g=null,clearTimeout(s.requestShowTipsTimer),s.waitForShowTips=!1,s.tipsPos(h,J),f)){s.stopInput=!0;let I=await Y();s.stopInput=!1,I&&s.lastUrl===I?D?s.tipsPos(h,"<span class='loader'></span><font>Loading...</font>"):ee(h,I):(s.waitForShowTips=!0,s.requestShowTipsTimer=setTimeout(async()=>{if(I=I||await Y(),!!I){if(I.indexOf("%input{")!==-1){s.showCustomInputWindow(I,R=>{I=R,ee(h,I)});return}s.lastUrl=I,ee(h,I),s.waitForShowTips=!1}},C))}},v=!1;o.addEventListener("touchend",h=>{h.stopPropagation&&h.stopPropagation(),f&&(v=!0,s.waitForShowTips=!0)},!1);let w=h=>{if(s.funcKeyCall||c.prefConfig.noAni)return;let C=s.con.classList.contains("search-jumper-left")||s.con.classList.contains("search-jumper-right"),I=[],R=o.getBoundingClientRect(),z=C?Math.abs(h.clientY-R.top)/R.height:Math.abs(h.clientX-R.left)/R.width,F=.1,ce=.1;o.style.setProperty("--scale",1+F+ce),I.push(o);let oe=o.previousElementSibling;if(oe&&/^A$/i.test(oe.nodeName)){oe.style.setProperty("--scale",1+ce+F*(1-z)),I.push(oe);let re=oe.previousElementSibling;re&&/^A$/i.test(re.nodeName)&&(re.style.setProperty("--scale",1+ce*(1-z)),I.push(re))}let fe=o.nextElementSibling;if(fe&&/^A$/i.test(fe.nodeName)){fe.style.setProperty("--scale",1+ce+F*z),I.push(fe);let re=fe.nextElementSibling;re&&/^A$/i.test(re.nodeName)&&(re.style.setProperty("--scale",1+ce*z),I.push(re))}s.dockerScaleBtns.forEach(re=>{I.indexOf(re)===-1&&re.style.setProperty("--scale",1)}),s.dockerScaleBtns=I};return o.addEventListener("mouseenter",h=>{if(h.stopPropagation&&h.stopPropagation(),!(_&&s.lastTips===o&&s.tips.style.opacity==1)){if(s.lastTips=o,f){if(v){v=!1;return}if(H&&!(s.searchJumperInputKeyWords.value||s.tileInput.value||Xe())){s.waitForShowTips=!0,s.tipsPos(o,J);return}}ne(o)}},!0),o.addEventListener("mousemove",h=>{w(h),s.clingPos(o,s.tips)},!1),o.addEventListener("showTips",h=>{s.appendBar(),s.closeOpenType(),s.con.style.display="",ne(h.detail||$,0)},!1),o.addEventListener("mouseleave",h=>{_||(s.tips.style.opacity=0,clearTimeout(s.requestShowTipsTimer))},!1),o.addEventListener("drop",h=>{s.searchBySiteName(p,h)},!1),o.addEventListener("dragover",h=>{h.preventDefault()},!1),o}closePopupWindow(){c.prefConfig.closePopupWhenClick&&this.popupWindow&&(this.popupWindow.close(),this.popupWindow=null)}closeOpenType(){let e=this.bar.querySelector(".search-jumper-type.search-jumper-open>span");if(e)if(this.funcKeyCall=!1,e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}addToHighlightGroup(e,t){let r=c.prefConfig.inPageRule[t];if(r){let i=r.match(/^\/(.*)\/([il]*)$/);i?r=`/${i[1]}|${e}/${i[2]||""}`:r=`/${r}|${e}/`}else r=`/${e}/`;c.prefConfig.inPageRule[t]=r,U.setItem("searchData",c),this.refreshPageWords(this.lockWords)}streamUpdate(e){this.streamUpdateCallBack&&this.streamUpdateCallBack(e)}async anylizeShowTips(e,t,r){let i,a=this;try{const n=/([^\\]|^)([\+\-*/])([\d\.]+)$/,s=/\|cache\=(\d+)$/,o=/%p(\{+)/,p=/#headers({.*?})/,d=/#stream({(.*?)})?/,f=/.then{(.*?)}/;if(e=e.replace(/^showTips:/,"").replace(/{name}/g,t).trim(),/^https?:/.test(e)){let g=e.split(`
`);g.length==1&&(g=e.split(" ")),g=g[0].replace(/【SearchJumperBreak】/g,`
`),e=e.replace(/【SearchJumperBreak】/g,`
`).replace(g,"").trim().replace(/\\{/g,"showTipsLeftBrace").replace(/\\}/g,"showTipsRightBrace").replace(/{url}/g,"\u3010SEARCHJUMPERURL\u3011");let u=g.match(s);u?(u=parseInt(u[1]),g=g.replace(s,"")):u=7200;let m=Date.now()/1e3,y=tt.filter(B=>m<B.time?(!i&&B.url==g&&(i=B.data),!0):!1);y.length!=tt.length&&(tt=y,U.setItem("tipsStorage",tt));let T=[],E=(B,W)=>{let P=e,H=!0;for(;W;){let O=W[1].replace(/\\\|/g,"\u3010searchJumperJsonSplit\u3011").split("|"),Y=O[0].replace(/【searchJumperJsonSplit】/g,"|").replace(/\[(\d+)\]/g,".$1").replace(/\[all\]/g,".all").split("."),b=B,k=null;if(Y.shift(),Y.forEach(j=>{if(k){let M=[];for(let N=0;N<k.length;N++){let G=k[N];G&&(Array.isArray(G)?G=G.at?G.at(j):G[j]:G=G[j]),M.push(G)}k=M}else if(b&&(Array.isArray(b)?j==="all"?k=b:b=b.at?b.at(j):b[j]:b=b[j]),!b)return null}),k&&(b=k.join("")),O.length!=1){let j=O[1],M=j.match(n);if(M){let N=[];for(;M;)j=j.replace(n,"$1"),N.unshift([M[2],M[3]]),M=j.match(n);N.forEach(G=>{let ue=parseFloat(G[1]);switch(G[0]){case"+":b+=ue;break;case"-":b-=ue;break;case"*":b*=ue;break;case"/":b/=ue;break}}),b=b.toFixed(2)}else{let N=j.match(/^\/(.*)\/(\w?)$/),G=N?new RegExp(N[1],N[2]):new RegExp(j),ue=b.match(G);ue&&(b=ue[1])}}b?H=!1:b="",T.push(b),P=P.replace(W[0],b),W=P.match(/{(.*?)}/)}return H&&console.log("Error:",B),P=P.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),P},x=e.match(/{(.*?)}/);if(i)x&&x[1].indexOf("json")===0&&(e=e.replace(/【SEARCHJUMPERURL】/g,g),i=E(i,x),i=[i,`
`+T.join(",")]);else{let B,W=g.match(o),P={},H=g;if(W){let M=W[1].length;if(W=g.match(new RegExp(`%p\\{+([\\s\\S]*?)\\}{${M}}`)),W){let N=W[1].replace(/\n/g,"\\n");if(N.indexOf("%")===0)try{N=decodeURIComponent(N)}catch{}P.body=N,P.method="POST",H=H.replace(W[0],"")}}let O=g.match(p);if(O){let M=O[1];if(M.indexOf("%")===0||M.indexOf("%")===1)try{M=decodeURIComponent(M)}catch{}P.headers=JSON.parse(M),H=H.replace(O[0],"")}let Y=!1,b,k=x&&x[1].indexOf("json")===0,j=g.match(d);if(j)P.responseType="stream",P.streamMode=j[2]||"concat",H=H.replace(j[0],""),i=await new Promise(M=>{P.onstream=N=>{let G;if(k){if(G=N.json(),!G)return;G=E(G,x)}else G=N.text;a.tipsPos(r,G),a.tips.style.pointerEvents="all",M&&M(G)},b=qe(H,P).then(N=>(e=e.replace(/【SEARCHJUMPERURL】/g,N.finalUrl),k?N.json():N.text)),b.then(N=>{let G=k?N&&E(N,x):N;G&&(a.tipsPos(r,G),M&&M(G))})}),i||(i="No result",Y=!0);else if(k){let M=[];b=qe(H,P).then(N=>(e=e.replace(/【SEARCHJUMPERURL】/g,N.finalUrl),N.json())),i=await b.then(N=>N?(B=N,E(N,x)):null),i||(i="No result",Y=!0),i=[i,`
`+M.join(",")]}else{let M=!1,N=H.match(f),G=[];for(;N;){let te=N[1];G.push(te),H=H.replace(N[0],""),N=H.match(f)}for(b=qe(H,P).then(te=>(e.indexOf("\u3010SEARCHJUMPERURL\u3011")!=-1&&(e=e.replace(/【SEARCHJUMPERURL】/g,te.finalUrl),M=!0),te.text()));G.length;){let te=G.shift(),ie=await b.then(S=>{let J=document.implementation.createHTMLDocument("");J.documentElement.innerHTML=Q(S);let D=bt(te,J);if(!D)return null;let _=J.querySelector("base");return Zi(D.getAttribute("href"),_?_.href:H)});if(ie)b=qe(ie).then(S=>S.text());else return"No result"}let ue;i=await b.then(te=>{if(!e)return te;let ie=document.implementation.createHTMLDocument("");ie.documentElement.innerHTML=Q(te),ue=ie.title;let S=e;for(;x;){let J="";if(x[1]=="title")J=ie.title;else{let D=x[1].split("|"),_=ni(D[0],ie);if(_&&_.length)if(M=!0,D.length==1)J=_[0].innerText;else{let ee=D[1],ne=ee.match(/\(.*?\)/g);ne?[].forEach.call(_,v=>{let w=D[1];ne.forEach(h=>{h==="()"?w=w.replace(h,v.innerText):(ee=h.match(/\((.*)\)/)[1],w=w.replace(h,v.getAttribute(ee)||v[ee]))}),J+=w}):J=_[0].getAttribute(ee)||_[0][ee]}}S=S.replace(x[0],J),x=S.match(/{(.*?)}/)}return M?(S=S.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),S):null}),i?this.insertHistoryUrl(g,ue):(i="No result",Y=!0),i=[i,g],B=i}Y||(i=this.calcResult(i),tt.push({url:g,data:B,time:Date.now()/1e3+u}),tt.length>50&&tt.shift(),U.setItem("tipsStorage",tt))}}else if(e=e.replace(/【SearchJumperBreak】/g,`
`),i=/\breturn\b/.test(e)?await new ai("fetch","storage","name",'"use strict";'+e)(qe,U,t):e,i=this.calcResult(i),$&&$.href){let g=$.title||$.alt||$.innerText;this.insertHistoryUrl($.href,g)}}catch(n){pe(n)}return i}calcResult(e){let t=typeof e=="string",r=t?e:e[0];const i=/{([\d\.]+)(([\+\-*/][\d\.]+)+)}/,a=/([\+\-*/])([\d\.]+)/;let n=r.match(i);if(n){let s=[],o=n[0],p=parseFloat(n[1]),d=n[2];for(n=d.match(a);n;)d=d.replace(n[0],""),s.push([n[1],n[2]]),n=d.match(a);s.forEach(f=>{let g=parseFloat(f[1]);switch(f[0]){case"+":p+=g;break;case"-":p-=g;break;case"*":p*=g;break;case"/":p/=g;break}}),p=p.toFixed(2),r=r.replace(o,p)}return t?e=r:e[0]=r,e}insertHistoryUrl(e,t){if(e.indexOf(location.host)===-1)return;let r=location.href,i=document.title;ye.history.pushState("",t,e),document.title=t,ye.history.replaceState("",i,r),document.title=i}checkScroll(e,t){if(this.funcKeyCall||this.bar.style.display=="none")return;let r=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight;if(this.bar.scrollWidth>r||this.bar.scrollHeight>i?this.con.classList.contains("search-jumper-scroll")||(this.bar.style.cssText="",this.con.classList.add("search-jumper-scroll"),this.con.style.display=""):this.con.classList.contains("search-jumper-scroll")&&(this.bar.style.cssText="",this.con.classList.remove("search-jumper-scroll")),e)return;let a=this.bar.querySelector(".search-jumper-type.search-jumper-open");a&&(a.style.width==="0px"&&(a.style.width="auto"),a.style.height==="0px"&&(a.style.height="auto"),a!=this.bar.firstElementChild&&setTimeout(()=>{a.scrollIntoView(t?{}:{behavior:"smooth"})},0))}reopenType(e){let t=new PointerEvent("mouseup");e.parentNode.classList.contains("search-jumper-open")&&(e.onmouseup?e.onmouseup():e.dispatchEvent(t)),e.onmouseup?e.onmouseup():e.dispatchEvent(t)}showInPage(e,t){if(this.contains($)||this.inInput&&Ze||!e&&this.funcKeyCall)return;(!Ze||!Ze.parentNode)&&(Ze=Me(Et),Ke||this.addToShadow(Ze));let r=We();if(e&&r&&r.length<(c.prefConfig.limitPopupLen||1)||this.con&&this.con.classList.contains("search-jumper-showall"))return;if(c.prefConfig.hidePopup&&(e=!1),!$)$=V(document);else if(!r&&$!=V(document)&&($.className!="searchJumper"||!/^MARK$/i.test($.nodeName))){let f=$,g;for(;f&&f.nodeName&&!/^(img|audio|video|a)$/i.test(f.nodeName);){if(f.parentNode){if(/^(img|audio|video|a)$/i.test(f.parentNode.nodeName)){f=f.parentNode;break}if(g=f.parentNode.querySelectorAll("audio,video"),g&&g.length!==1&&(g=f.parentNode.querySelectorAll("img")),g&&g.length!==1&&(g=f.parentNode.querySelectorAll("a")),g&&g.length===1){g[0].scrollHeight&&f.scrollHeight/g[0].scrollHeight<2&&(f=g[0]);break}}f=f.parentNode}f&&($=f)}this.appendBar();let i=this;this.hideTimeout&&clearTimeout(this.hideTimeout);var a=c.prefConfig.autoDelay||1e3,n=()=>{i.bar.classList.remove("search-jumper-isInPage"),i.bar.classList.remove("search-jumper-isTargetImg"),i.bar.classList.remove("search-jumper-isTargetAudio"),i.bar.classList.remove("search-jumper-isTargetVideo"),i.bar.classList.remove("search-jumper-isTargetLink"),i.bar.classList.remove("search-jumper-isTargetPage"),i.bar.classList.remove("initShow"),i.hideTimeout=null};c.prefConfig.autoHide&&(this.hideTimeout=setTimeout(n,a)),this.bar.classList.remove("search-jumper-isInPage"),this.bar.classList.remove("search-jumper-isTargetImg"),this.bar.classList.remove("search-jumper-isTargetAudio"),this.bar.classList.remove("search-jumper-isTargetVideo"),this.bar.classList.remove("search-jumper-isTargetLink"),this.bar.classList.remove("search-jumper-isTargetPage"),this.bar.classList.remove("initShow"),this.tips.style.opacity=0,this.tips.style.display="none",this.tips.style.transition="none",this.tips.innerHTML=Q(""),setTimeout(()=>{this.bar.classList.add("initShow")},10);let s="",o="";if(r)if(this.bar.classList.add("search-jumper-isInPage"),this.bar.style.display=="none"||e)s="needInPage";else{let f=this.bar.querySelector(".search-jumper-type.search-jumper-open");(!f||f.classList.contains("notmatch")||f.classList.contains("search-jumper-targetPage")||f.classList.contains("search-jumper-targetImg")||f.classList.contains("search-jumper-targetAudio")||f.classList.contains("search-jumper-targetVideo")||f.classList.contains("search-jumper-targetLink"))&&(s="needInPage")}else{switch($.children.length==1&&$.children[0].nodeName.toUpperCase()==="A"&&($=$.children[0]),$.nodeName.toUpperCase()){case"IMG":this.bar.classList.add("search-jumper-isTargetImg"),s="targetImg";break;case"AUDIO":this.bar.classList.add("search-jumper-isTargetAudio"),s="targetAudio";break;case"VIDEO":this.bar.classList.add("search-jumper-isTargetVideo"),s="targetVideo";break;case"A":this.bar.classList.add("search-jumper-isTargetLink"),s="targetLink";break;default:break}let f=$.parentNode;f&&f.nodeName.toUpperCase()==="A"&&(this.bar.classList.add("search-jumper-isTargetLink"),s?o="targetLink":s="targetLink"),s||(this.bar.classList.add("search-jumper-isTargetPage"),s="targetPage"),s||(s="targetAll")}this.bar.style.display=="none"&&(this.bar.style.display="");let p,d;if(s&&(p=this.bar.querySelector(`.search-jumper-${s}:not(.notmatch)>span`),d=this.bar.querySelectorAll(`.search-jumper-${s}:not(.notmatch)>a>img`)),i.setFuncKeyCall(!1),p&&(!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen||e)){let f=this.bar.querySelectorAll(`.search-jumper-${s}:not(.notmatch)>span:first-child`);[].forEach.call(f,g=>{g!==p&&i.reopenType(g)}),i.reopenType(p),i.insertHistory(p.parentNode),o&&(f=this.bar.querySelectorAll(`.search-jumper-${o}:not(.notmatch)>span:first-child`),[].forEach.call(f,g=>{g!==p&&i.reopenType(g)}),i.reopenType(p))}if(!e&&(c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen)&&this.closeOpenType(),i.setFuncKeyCall(e),e){d&&[].forEach.call(d,E=>{E.parentNode.style.display!="none"&&E.dataset.src&&(E.src=E.dataset.src,delete E.dataset.src)}),i.con.classList.remove("search-jumper-scroll"),i.bar.style.cssText="",i.con.style.cssText="";let f=window.innerWidth||document.documentElement.clientWidth,g=document.documentElement.scrollLeft||document.body.scrollLeft,u=window.innerHeight||document.documentElement.clientHeight,m=c.prefConfig.tileOffset||0,y=pr(t)-i.bar.clientWidth/2-(getComputedStyle(document.documentElement).position!=="static"?document.documentElement.offsetLeft:0);y<0?y=5:y+i.bar.clientWidth>f+g&&(y=f+g-i.bar.clientWidth-20);let T=hr(t);dt(t)>u/5?T-=i.bar.clientHeight+20+m:T+=20+m,ht(t)<f/2?(i.bar.style.left=y+g+"px",i.bar.style.transformOrigin="0 0"):(i.bar.style.right=f-y-i.bar.clientWidth-15+"px",i.bar.style.transformOrigin="100% 0"),i.bar.style.top=T+"px",i.removeBar(),i.bar.style.opacity=0,setTimeout(()=>{i.appendBar(),setTimeout(()=>{i.bar.style.opacity=1,setTimeout(()=>{let E=document.querySelector("#saladict-saladbowl-root>.saladict-external");if(E){let x=E.shadowRoot.querySelector(".saladbowl");x.style.transform=x.style.transform.replace(/\d+px\)/,`${t.clientY-15}px)`)}},100)},1)},1)}else i.bar.style.display="",i.initPos()}setFuncKeyCall(e){this.funcKeyCall=e,this.con.classList.contains("search-jumper-showall")||(e?(this.tileInput.value=Xe(),this.con.classList.add("funcKeyCall"),this.bar.insertBefore(this.tileInput,this.bar.firstChild)):(this.tileInput.value="",this.con.classList.remove("funcKeyCall"),this.tileInput.parentNode&&this.tileInput.parentNode.removeChild(this.tileInput)))}initPos(e,t,r,i){this.preList&&(this.preList.style.visibility="hidden",this.preList.style.opacity=0,this.listArrow.style.cssText=""),typeof e>"u"&&(e=c.prefConfig.position.x),typeof t>"u"&&(t=c.prefConfig.position.y),typeof r>"u"&&(r=c.prefConfig.offset.x),typeof i>"u"&&(i=c.prefConfig.offset.y);let a=this,n=s=>{if(a.bar.style.cssText="",a.con.style.cssText="",a.con.className="search-jumper-searchBarCon "+s,c.prefConfig.resizePage)switch(typeof a.initBodyStyle>"u"?a.initBodyStyle=V(document).style.cssText:V(document).style.cssText=a.initBodyStyle,a.con.classList.add("resizePage"),V(document).style.position="absolute",s){case"search-jumper-left":V(document).style.width=`calc(100vw - ${a.scale*42}px)`,V(document).style.right="0px";break;case"search-jumper-right":V(document).style.width=`calc(100vw - ${a.scale*42}px)`,V(document).style.left="0px";break;case"search-jumper-bottom":V(document).style.width="100%",V(document).style.height=`calc(100vh - ${a.scale*42}px)`,V(document).style.top="0px",V(document).style.overflow="auto";break;default:V(document).style.width="100%",V(document).style.height=`calc(100vh - ${a.scale*42}px)`,V(document).style.bottom="0px",V(document).style.overflow="auto";break}else c.prefConfig.autoHideAll&&a.con.classList.add("hideAll");let o=a.scale*40;setTimeout(()=>{let p=a.con.classList.contains("search-jumper-left")||a.con.classList.contains("search-jumper-right");Se.forEach(d=>{if(!d.classList.contains("search-jumper-open"))p?(d.style.width="",d.style.height=o+"px"):(d.style.width=o+"px",d.style.height="");else{let f=Math.max(d.scrollWidth,d.scrollHeight);f&&(f+="px",p?(d.style.width="",d.style.height=f):(d.style.width=f,d.style.height=""))}})},1)};r<0&&(r=0),i<0&&(i=0),e=="center"&&t=="top"?(n(""),a.bar.style.position="relative"):e=="left"&&t=="top"?r>i?(n(""),a.bar.style.position="fixed",a.bar.style.left=r+"px"):(n("search-jumper-left"),a.bar.style.position="fixed",a.bar.style.top=i+"px"):e=="right"&&t=="top"?r>i?(n(""),a.bar.style.position="fixed",a.bar.style.right=r+"px"):(n("search-jumper-right"),a.bar.style.position="fixed",a.bar.style.top=i+"px"):e=="center"&&t=="bottom"?(n("search-jumper-bottom"),a.bar.style.position="relative"):e=="left"&&t=="bottom"?r>i?(n("search-jumper-bottom"),a.bar.style.position="fixed",a.bar.style.left=r+"px",a.bar.style.bottom="0px",a.bar.style.top="unset"):(n("search-jumper-left"),a.bar.style.position="fixed",a.bar.style.bottom=i+"px"):e=="right"&&t=="bottom"?r>i?(n("search-jumper-bottom"),a.bar.style.position="fixed",a.bar.style.right=r+"px",a.bar.style.bottom="0px",a.bar.style.top="unset"):(n("search-jumper-right"),a.bar.style.position="fixed",a.bar.style.bottom=i+"px"):e=="left"&&t=="center"?(n("search-jumper-left"),a.bar.style.position="relative",a.bar.style.marginTop=i+"px",a.con.style.display="flex",a.con.style.justifyContent="center"):e=="right"&&t=="center"&&(n("search-jumper-right"),a.bar.style.position="absolute",a.bar.style.marginTop=i+"px",a.con.style.display="flex",a.con.style.justifyContent="center",a.con.style.alignItems="flex-end"),c.prefConfig.position.x=e,c.prefConfig.position.y=t,c.prefConfig.offset.x=r,c.prefConfig.offset.y=i,c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen?a.checkScroll(!1,!0):setTimeout(()=>{let s=a.bar.querySelector(".search-jumper-type.search-jumper-open");s&&(s.style.transition="none",s.style.width="auto",s.style.height="auto",setTimeout(()=>{s.style.width=s.scrollWidth+"px",s.style.height=s.scrollHeight+"px",setTimeout(()=>{s.style.transition=""},1),a.checkScroll(!1,!0)},0))},251)}}class br{constructor(){this.clickedIndex=0,this.signList=[],this.clickedEles={},this.exact=!0,this.accu=0,this.wheelScrolling=!1}getSelector(e,t=!0){this.exact=t,this.close(),this.toggle(),this.callback=e}init(){if(this.inited)return;this.inited=!0;let e=this;Me(`
                 body.searchJumper-picker,
                 body.searchJumper-picker *:hover,
                 body.searchJumper-picker a:hover {
                   cursor: crosshair !important;
                 }
                 .select-rect {
                   position: fixed;
                   z-index: 2147483647;
                   background: none;
                   border: 1px dashed rgba(120, 170, 210, 0.8);
                 }
                 .select-rect>.dot {
                   width: 10px;
                   height: 10px;
                   border: 2px solid #000;
                   border-radius: 50%;
                   background-color: white;
                   position: absolute;
                 }
                 .select-rect>.top-left {
                   top: -5px;
                   left: -5px;
                 }
                 .select-rect>.top-right {
                   top: -5px;
                   right: -5px;
                 }
                 .select-rect>.bottom-left {
                   bottom: -5px;
                   left: -5px;
                 }
                 .select-rect>.bottom-right {
                   bottom: -5px;
                   right: -5px;
                 }
                 .select-rect>.top {
                   top: -5px;
                   left: calc(50% - 5px);
                 }
                 .select-rect>.right {
                   top: calc(50% - 5px);
                   right: -5px;
                 }
                 .select-rect>.left {
                   top: calc(50% - 5px);
                   left: -5px;
                 }
                 .select-rect>.bottom {
                   bottom: -5px;
                   left: calc(50% - 5px);
                 }
                `);let r=a=>{if(!a)return;if(e.callback){if(a){let s=e.geneSelector(a,e.exact);e.callback(s),e.close()}return}let n=e.createSignDiv();e.clickedEles[e.clickedIndex]=a,e.appendSign(n,a,e.clickedIndex),e.clickedIndex++,L.con.classList.add("selectedEle")},i;this.initSelectRect(),this.mainSignDiv=this.createSignDiv(),this.setImportant(this.mainSignDiv,"pointer-events","none"),this.setImportant(this.mainSignDiv,"background","rgba(120, 170, 210, 0.3)"),this.moveHandler=a=>{if(a.target!==document)if(e.inPicker&&a.preventDefault(),e.rectSelecting)e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv),e.selectRect.parentNode||V(document).appendChild(e.selectRect),e.createSelectRect({x:a.clientX,y:a.clientY});else{if(e.creatingRect)return;{let n=e.getTarget(a.target);e.mainSignDiv.parentNode!==n.parentNode&&n.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,n),(a.ctrlKey||a.metaKey)&&(clearTimeout(i),i=setTimeout(()=>{let s=e.cleanTarget(a.target);r(s)},5))}}},this.leaveHandler=a=>{e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv)},this.clickHandler=a=>{if(e.inPicker&&(a.stopPropagation(),a.preventDefault()),e.creatingRect)return;if(e.rectSelecting){e.selectRect.parentNode&&e.selectRect.parentNode.removeChild(e.selectRect),e.rectSelecting=!1,L.bar.classList.remove("rectSelecting");return}let n=e.getTarget(a.target);r(n)},this.mouseDownHandler=a=>{e.rectSelecting=!0,L.bar.classList.add("rectSelecting"),e.rectInitPos={x:a.clientX,y:a.clientY},a.stopPropagation(),a.preventDefault()},this.mouseUpHandler=a=>{e.rectSelecting=!1,L.bar.classList.remove("rectSelecting"),!e.creatingRect&&e.selectRect.parentNode&&(e.selectRect.parentNode.removeChild(e.selectRect),e.finishSelectRect(),a&&a.stopPropagation&&a.stopPropagation(),a&&a.preventDefault&&a.preventDefault())},this.wheelHandler=a=>{if(a.preventDefault(),a.stopPropagation(),e.wheelScrolling)return;e.wheelScrolling=!0,setTimeout(()=>{e.wheelScrolling=!1},100);let n;if(a.type!=="wheel"){let o=0;typeof a.axis=="number"?a.axis==2&&(o=a.detail):(typeof a.wheelDeltaY>"u"||a.wheelDeltaY!=0)&&(o=-a.wheelDelta/40),n=o}else n=a.deltaY;n>0?e.accu--:e.accu++,e.accu<0?e.accu=0:e.accu>8&&(e.accu=8);let s=e.getTarget(a.target);e.mainSignDiv.parentNode!==s.parentNode&&s.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,s)}}initSelectRect(){this.waitToRemoveSigns=[],this.waitToAddSigns=[];let e=document.createElement("div");e.innerHTML=Q(`
                  <div class="dot top-left"></div>
                  <div class="dot top-right"></div>
                  <div class="dot bottom-left"></div>
                  <div class="dot bottom-right"></div>
                  <div class="dot top"></div>
                  <div class="dot right"></div>
                  <div class="dot left"></div>
                  <div class="dot bottom"></div>
                `),e.className="select-rect",this.selectRect=e}createSelectRect(e){this.rectToPos=e,!this.creatingRect&&(this.creatingRect=!0,setTimeout(()=>{this.creatingRect=!1,this.selectRect.style.left=Math.min(this.rectToPos.x,this.rectInitPos.x)+"px",this.selectRect.style.top=Math.min(this.rectToPos.y,this.rectInitPos.y)+"px",this.selectRect.style.width=Math.abs(this.rectToPos.x-this.rectInitPos.x)+"px",this.selectRect.style.height=Math.abs(this.rectToPos.y-this.rectInitPos.y)+"px",this.checkRectAndSign(),this.rectSelecting||this.mouseUpHandler()},100))}finishSelectRect(){let e=this;this.waitToRemoveSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns.forEach(t=>{delete t.dataset.recttemp}),this.waitToRemoveSigns=[],this.waitToAddSigns=[],this.signList.length?L.con.classList.add("selectedEle"):L.con.classList.remove("selectedEle")}checkRectAndSign(){if(!this.domInfo)return;let e=this;this.waitToRemoveSigns.forEach(t=>{t.style.opacity=""}),this.waitToRemoveSigns=[],this.signList.forEach(t=>{let r=t[0];if(r.dataset.recttemp)return;let i=r.getBoundingClientRect(),a=e.selectRect.getBoundingClientRect();e.compareRect(i,a)?(r.style.opacity="0",e.waitToRemoveSigns.push(r)):r.style.opacity=""}),this.waitToAddSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns=[],this.waitToRemoveSigns.length===0&&(this.curRectInfo={},this.rectInitPos.x<this.rectToPos.x?(this.curRectInfo.left=this.rectInitPos.x,this.curRectInfo.right=this.rectToPos.x):(this.curRectInfo.left=this.rectToPos.x,this.curRectInfo.right=this.rectInitPos.x),this.rectInitPos.y<this.rectToPos.y?(this.curRectInfo.top=this.rectInitPos.y,this.curRectInfo.bottom=this.rectToPos.y):(this.curRectInfo.top=this.rectToPos.y,this.curRectInfo.bottom=this.rectInitPos.y),this.compareDomWithRect(this.domInfo),this.signDomWithRect(this.domInfo))}compareDomWithRect(e){if(e.children&&e.children.length>0){let t=0;for(let r=0;r<e.children.length;r++){let i=e.children[r];this.compareDomWithRect(i)&&t++}if(t===e.children.length){let r=e.target.getBoundingClientRect();if(r.width&&r.height)return e.sign=!0,!0}}else if(this.compareRect(this.curRectInfo,e.target.getBoundingClientRect()))return e.sign=!0,!0;return e.sign=!1,!1}signDomWithRect(e){if(e.sign){let t=this.createSignDiv();t.dataset.recttemp=1,e.target.parentNode.appendChild(t),this.adjustSignDiv(t,e.target),this.signList.push([t,e.target]),this.waitToAddSigns.push(t)}else if(e.children&&e.children.length>0)for(let t=0;t<e.children.length;t++){let r=e.children[t];this.signDomWithRect(r)}}compareRect(e,t){return t.width&&t.height&&e.left<=t.right&&e.right>=t.left&&e.top<=t.bottom&&e.bottom>=t.top}cleanTarget(e){if(!e||e.className=="searchJumperSign"||(e=this.getTarget(e),!e))return null;for(let t in this.clickedEles){let r=this.clickedEles[t];try{if(r==e||r.contains(e)||e.contains(r))return null}catch{return null}}return e}appendSign(e,t,r){t.dataset&&(t.dataset.signNum=parseInt(t.dataset.signNum||0)+1),e.dataset.target=r,t.parentNode.appendChild(e),this.adjustSignDiv(e,t),this.signList.push([e,t])}removeSign(e){e.parentNode&&e.parentNode.removeChild(e);for(let a=0;a<this.signList.length;a++)if(this.signList[a][0]===e){this.signList.splice(a,1);break}let t=e.dataset.target,r=this.clickedEles[t];if(!r)return;let i=parseInt(r.dataset.signNum||0)-1;r.dataset.signNum=i,i<=0&&delete this.clickedEles[t]}getTarget(e){let t=this.accu;for(;e&&t;){let r=e.parentNode;if(!r)break;e=r,t--}for(;e.parentNode&&(e.offsetWidth===0||e.offsetHeight===0);)e=e.parentNode;return e}close(){this.mainSignDiv&&(this.rectSelecting&&(this.selectRect.parentNode&&this.selectRect.parentNode.removeChild(this.selectRect),this.finishSelectRect(),this.rectSelecting=!1),this.callback=null,this.domInfo=null,this.clearSigns(),this.clickedEles={},this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv),V(document).classList.remove("searchJumper-picker"),L.con.classList.remove("selectedEle"),L.con.removeEventListener("mouseenter",this.leaveHandler,!0),V(document).removeEventListener("mousemove",this.moveHandler,!0),V(document).removeEventListener("click",this.clickHandler,!0),V(document).removeEventListener("mousedown",this.mouseDownHandler,!0),V(document).removeEventListener("mouseup",this.mouseUpHandler,!0),V(document).removeEventListener(Mt(),this.wheelHandler,{passive:!1,capture:!0}),this.inPicker=!1)}setImportant(e,t,r){e.style.setProperty(t,r,"important")}createSignDiv(){let e=document.createElement("div");return this.setImportant(e,"position","absolute"),this.setImportant(e,"z-index","2147483647"),this.setImportant(e,"background","rgba(120, 170, 210, 0.6)"),this.setImportant(e,"transition","all 0.15s ease-out"),this.setImportant(e,"box-shadow","rgb(0 0 0) 0px 0px 3px 0px"),this.setImportant(e,"cursor","pointer"),e.className="searchJumperSign",e.addEventListener("mouseenter",t=>{this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv)},!0),e.addEventListener("mousedown",t=>{t.stopPropagation(),t.preventDefault(),this.removeSign(e)},!0),e}adjustSignDiv(e,t){this.setImportant(e,"width",t.offsetWidth+"px"),this.setImportant(e,"height",t.offsetHeight+"px");let r=t.offsetLeft,i=t.offsetTop;if(t.offsetParent&&e.offsetParent&&t.offsetParent!==e.offsetParent){let a=e.offsetParent.getBoundingClientRect(),n=t.offsetParent.getBoundingClientRect();r+=n.left-a.left,i+=n.top-a.top}this.setImportant(e,"left",r+"px"),this.setImportant(e,"top",i+"px")}geneSelector(e,t){let r=e.nodeName.toLowerCase();if(r!=="html"&&r!=="body")if(t&&e.id&&/^[a-z\-_][\w\-_]+$/i.test(e.id))r="#"+e.id;else{if(e.className){let a=e.classList.length;r+=[].map.call(e.classList,n=>/^[a-z][\w]+$/i.test(n)||a<3&&/^[a-z\-_][\w\-_]+$/i.test(n)?"."+n:"").join("")}let i=e.parentElement;if(i&&(r=this.geneSelector(i,!!t)+" > "+r,t&&i.children.length>1&&!/^HTML$/i.test(i.nodeName))){let a,n=0,s=0;for(a=0;a<i.children.length&&!(i.children[a].nodeName==e.nodeName&&(s++,i.children[a]==e&&(n=s),n>0&&s>1));a++);r+=s==1?"":`:nth-of-type(${n})`}}return r}copy(){let e=this,t="",r="";this.signList.forEach(n=>{r+=`
`+n[1].innerText,t+=n[1].outerHTML}),r=r.trim();const i=new Blob([t],{type:"text/html"}),a=new Blob([r],{type:"text/plain"});try{const n=new ClipboardItem({"text/html":i,"text/plain":a});navigator.clipboard.write([n]).then(()=>{Ce("Copied successfully!")},s=>{He(r),console.log(s)})}catch{He(r)}}openLinks(){if(!window.confirm(A("batchOpenConfirm")))return;let e=[];this.signList.forEach(t=>{let r=t[1];r.href?/^(http|ftp)/i.test(r.href)&&e.indexOf(r.href)===-1&&e.push(r.href):r.parentNode&&r.parentNode.href?/^(http|ftp)/i.test(r.parentNode.href)&&e.indexOf(r.parentNode.href)===-1&&e.push(r.parentNode.href):r.querySelectorAll&&[].forEach.call(r.querySelectorAll("a[href]"),i=>{/^(http|ftp)/i.test(i.href)&&e.indexOf(i.href)===-1&&e.push(i.href)})}),e.forEach(t=>{ge(t,{active:!1,insert:!0})})}getPickerStr(){if(!this.inPicker)return"";let e="";return this.signList.forEach(t=>{e+=`
`+t[1].innerText}),e.trim()}expand(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let r=e.clickedEles[t],i=e.geneSelector(r);r.dataset.signNum=0,[].forEach.call(document.querySelectorAll(i),a=>{let n=e.createSignDiv();V(document).appendChild(n),e.appendSign(n,a,t)})})}collapse(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let r=e.clickedEles[t];r.dataset.signNum=0;let i=e.createSignDiv();V(document).appendChild(i),e.appendSign(i,r,t)})}clearSigns(){this.signList.forEach(e=>{e=e[0],e.parentNode&&e.parentNode.removeChild(e)}),this.signList=[]}processNode(e,t){const r={};if(r.target=e,r.children=[],e.nodeType===Node.ELEMENT_NODE){const a=window.getComputedStyle(e);if(a.display==="none"&&a.visibility==="hidden"||e.innerHTML.trim()==="")return null}else if(e.nodeType!==Node.TEXT_NODE||e.textContent.trim()==="")return null;const i=e.childNodes;if(i.length>0){r.target=e,t.children.push(r);for(const a of i)(a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE)&&this.processNode(a,r)}else if(e.nodeType===Node.TEXT_NODE){const a=e.textContent.split(`
`),n=document.createRange();n.selectNodeContents(e);let s=0,o=e.parentNode,p=o.getBoundingClientRect();for(const d of a){if(d.trim()===""){s+=d.length+1;continue}n.setStart(e,s),s+=d.length,n.setEnd(e,s),s++;const f=n.getBoundingClientRect();let g=f.left-p.left,u=f.top-p.top,m=f.width,y=f.height,T={target:{innerText:d,outerHTML:d,parentNode:o,offsetLeft:g+o.offsetLeft,offsetTop:u+o.offsetTop,offsetWidth:m,offsetHeight:y,getBoundingClientRect:()=>{let E=o.getBoundingClientRect();return{left:E.left+g,top:E.top+u,right:E.left+g+m,bottom:E.top+u+y,width:m,height:y}}}};t.children.push(T)}}else e.nodeType===Node.ELEMENT_NODE&&(r.target=e,t.children.push(r));return r}toggle(e){if(this.init(),this.inPicker){this.close();return}this.rectSel=!!e,e?(this.domInfo=this.processNode(V(document),{children:[]}),V(document).addEventListener("mousedown",this.mouseDownHandler,!0),V(document).addEventListener("mouseup",this.mouseUpHandler,!0)):V(document).addEventListener(Mt(),this.wheelHandler,{passive:!1,capture:!0}),this.accu=0,this.inPicker=!0,V(document).classList.add("searchJumper-picker"),L.con.addEventListener("mouseenter",this.leaveHandler,!0),V(document).addEventListener("mousemove",this.moveHandler,!0),V(document).addEventListener("click",this.clickHandler,!0)}}const ke=new br;function xr(l){if(!$)return;let e=l||{key:"Enter",keyCode:13,bubbles:!0},t=new KeyboardEvent("keydown",e);$.dispatchEvent(t),t=new KeyboardEvent("keyup",e),$.dispatchEvent(t),t=new KeyboardEvent("keypress",e),$.dispatchEvent(t),pe($,`press ${l||"Enter"}`)}async function Ht(l){return new Promise(e=>{let t=setInterval(()=>{let r=null;if(l?l==="@"?r=$:r=bt(l):r=document.readyState==="complete",r===!1)return null;r&&(clearInterval(t),e(r))},100)})}async function vr(l){return l?new Promise(e=>{let t=setInterval(()=>{bt(l)||(clearInterval(t),e(null))},100)}):null}let ct=!1;async function Fi(l,e){if(!l)return!0;$=l;let t=new FocusEvent("focusin",{bubbles:!0});l.dispatchEvent(t),t=new Event("focus",{bubbles:!0}),l.dispatchEvent(t);const r=window.getSelection(),i=r.rangeCount?r.getRangeAt(0):new Range;i.selectNode(l),r.removeAllRanges(),r.addRange(i),await $e(1),l.type!=="file"&&l.click&&l.click();let a=l.value;if(l.type=="file"){let f=e;if(f.indexOf("data:")==0)f=qi(f);else{let u=new Blob([f],{type:"text/plain"});f=new File([u],"noname.txt",{type:u.type})}let g=new DataTransfer;g.items.add(f),l.files=g.files,e="c:/fakepath/fakefile"}else if(/INPUT/i.test(l.nodeName)){var n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;n.call(l,e)}else if(/SELECT/i.test(l.nodeName)){var s=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;s.call(l,e)}else if(l.nodeName.toUpperCase()=="TEXTAREA"){var o=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;o.call(l,e)}else{let f=l;for(;f&&f.contentEditable!=="true";)f=f.parentNode;if(f)f.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:e})),await $e(1),l.innerText!==e&&(l.innerHTML=Q(e));else{let g=e;if(g.indexOf("data:")==0)g=qi(g);else{let u=new Blob([g],{type:"text/plain"});g=new File([u],"noname.txt",{type:u.type})}var p=new ClipboardEvent("paste",{target:document.body,clipboardData:new DataTransfer});p.clipboardData.items.add(g),l.dispatchEvent(p)}}t=new Event("input",{bubbles:!0});let d=l._valueTracker;d&&d.setValue(a),l.dispatchEvent(t),t=new Event("change",{bubbles:!0}),l.dispatchEvent(t),pe(l,"input")}async function Lt(l,e=-1){ct=!1;let t;if(e>=0){e===0&&await Ht(l);let r=ni(l);if(r.length===0)return!0;if(r.length===1)t=r[0],ct=!0;else{if(r.length<=e)return!0;t=r[e],r.length===e+1&&(ct=!0)}}else if(t=await Ht(l),!t)return!0;return t}async function Ui(l,e,t=-1){let r=await Lt(l,t);return r===!0?!0:(await Fi(r,e),ct)}async function Ki(l,e=-1){let t=await Lt(l,e);if(t===!0)return!0;if($=t,!PointerEvent)return t.click();let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:1,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var i=new PointerEvent("mouseover",r);t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i);let a=(n,s)=>{let o;try{o=document.createEvent("TouchEvent"),o.initTouchEvent(s,!0,!0)}catch{try{o=document.createEvent("UIEvent"),o.initUIEvent(s,!0,!0)}catch{o=document.createEvent("Event"),o.initEvent(s,!0,!0)}}try{o.targetTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.touches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.changedTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}]}catch{}n.dispatchEvent(o)};return a(t,"touchstart"),a(t,"touchend"),t.click(),pe(t,`click ${l}`),ct}async function wr(l,e=-1){let t=await Lt(l,e);if(t===!0)return!0;$=t;let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:2,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var i=new PointerEvent("mouseover",r);return t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i),t.click(),t.click(),i=new MouseEvent("dblclick",{...r,view:ye}),t.dispatchEvent(i),pe(t,`dblclick ${l}`),ct}async function Sr(l,e=-1){let t=await Lt(l,e);if(t===!0)return!0;$=t;let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:2,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:0,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:3};t.focus();var i=new PointerEvent("mouseover",r);return t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i),i=new PointerEvent("contextmenu",r),t.dispatchEvent(i),pe(t,`rclick ${l}`),ct}async function Ot(l,e){if($)if($.focus(),typeof l.value<"u"){const t=l.selectionStart,r=l.selectionEnd;let i=l.value.substring(0,t)+e+l.value.substring(r,l.value.length);await Fi(l,i),l.selectionStart=t+e.length,l.selectionEnd=t+e.length}else{const t=window.getSelection(),r=t.getRangeAt(0);t.toString()||r.selectNode(l.childNodes.length===1?l.firstChild:l),r.deleteContents(),r.insertNode(document.createTextNode(e)),t.removeAllRanges(),t.addRange(r)}}function fi(l,e,t){if(e=e.replace(/#(j(umpFrom|f)?|from){(.*?)}/,""),It={charset:l,url:e,target:t},e.indexOf("#submitBySearchJumper")!==-1){It={charset:l,url:e.replace("#submitBySearchJumper",""),target:t},Qi();return}const r="searchJumper_form";var i=document.getElementById(r);i||(i=document.createElement("form"),i.id=r,i.style.display="none",document.documentElement.appendChild(i));var a;let n=e.match(/[:%]p{(.*?)}/),s=e;return n?(s=e.replace(n[0],""),n=n[1],i.method="post",a=new URLSearchParams(n)):(i.method="get",a=new URLSearchParams(new URL(s).search)),l&&(i.acceptCharset=l),i.innerHTML=Q(),i.target=t,i.action=s,a.forEach((o,p)=>{let d=document.createElement("input");d.name=p,d.value=o,i.appendChild(d)}),i.submit()}function qi(l){try{for(var e=l.split(","),t=e[0].match(/:(.*?);/)[1],r=atob(e[1]),i=r.length,a=new Uint8Array(i);i--;)a[i]=r.charCodeAt(i)}catch(s){pe(s)}let n=t.split("/");return n=n.length>1?n[1]:n[0],new File([a],"image."+n,{type:t})}async function Gi(l){if(!l||(l.dataset.src&&(l.src=l.dataset.src),!l.src))return null;if(l.src.split("/")[2]==document.domain){let i=getComputedStyle(l);var t=document.createElement("canvas"),r=t.getContext("2d");if(l.complete){t.width=l.naturalWidth||l.width||parseInt(i.width),t.height=l.naturalHeight||l.height||parseInt(i.height),r.drawImage(l,0,0);try{return t.toDataURL("image/png")}catch{return await Ft(l.src)}}else return await new Promise(a=>{l.addEventListener("load",async n=>{t.width=l.naturalWidth||l.width||parseInt(i.width),t.height=l.naturalHeight||l.height||parseInt(i.height),r.drawImage(l,0,0);try{a(t.toDataURL("image/png"))}catch{a(await Ft(l.src))}})})}else return await Ft(l.src)}async function Ft(l){let e=l.split("/");return new Promise(t=>{Be({method:"GET",url:l,responseType:"blob",headers:{origin:e[0]+"//"+e[2],referer:location.href,accept:"*/*"},onload:function(r){try{var i=r.response,a=new FileReader;a.readAsDataURL(i),a.onload=function(n){t(n.target.result)}}catch{t(null)}},onerror:function(){t(null)},ontimeout:function(){t(null)}})})}function Cr(l){let e=getComputedStyle(l),t=getComputedStyle(l,":before").content.replace(/"/g,"");if(!t)return!1;var r=document.createElement("canvas");r.width=l.clientWidth||parseInt(e.lineHeight),r.height=l.clientHeight||parseInt(e.lineHeight);var i=r.getContext("2d");i.font=e.font,i.strokeStyle=e.color||"black",i.fillStyle=e.color||"black",i.textBaseline="top";let a=i.measureText(t);return i.fillText(t,(r.width-a.width)/2,(r.height-parseInt(e.fontSize))/2),r.toDataURL("image/png")}function Tr(l){let e=l.className.trim().replace("fa fa-","").replace(/ /g,"_");if(be[e])return;let t=Cr(l);t=="data:,"||!t||(be[e]=t,U.setItem("cacheIcon",be))}async function mi(l){if(l.nodeName.toUpperCase()=="IMG"){let e=l.src||l.dataset.src;if(e){if(be[e])return;let t=await Gi(l);(t=="data:,"||!t)&&(t="fail"),be[e]=t,U.setItem("cacheIcon",be),pe(e+" cached, left "+Je.length+" icons")}}else Tr(l);await new Promise(e=>{setTimeout(()=>{e(!0)},1)})}async function Pt(){for(;Je.length>0;)await mi(Je.shift())}async function Vi(l){if(c.prefConfig.cacheSwitch){let e=Je.length>0;await Promise.all([Pt(),Pt(),Pt(),Pt(),Pt()]),e&&(l&&Ce(A("cacheOver")),pe(A("cacheOver")))}}async function Yi(l){if(!et){L.con.classList.add("in-input"),L.con.style.visibility="hidden",L.con.style.display="",L.appendBar();let e=Jt.length>0;for(;Jt.length>0;)await mi(Jt.shift());e&&pe("All font icons cached!")}}function We(){let l=Nt||ke.getPickerStr()||window.getSelection().toString();if(setTimeout(()=>{Nt=""},1),!l){let e=window.getSelection();e&&e.rangeCount&&(e=e.getRangeAt(0),e&&(e=e.cloneContents(),e&&(l=e.textContent)))}if(!l){let e=oi(document);if(e&&/^(TEXTAREA|INPUT)$/i.test(e.nodeName)){let t=e.selectionStart,r=e.selectionEnd;(t||r)&&(l=e.value.substring(t,r))}}if(l){if(l=l.trim(),l)return l}else if($&&$.className==="searchJumper"&&/^MARK$/i.test($.nodeName))return $.dataset.matched||$.innerText;return""}function Ut(l,e,t){return t||(/\w$/.test(l)?t="(\\b|$)":t=""),new RegExp(l.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,"\\$1")+t,e)}function gi(l,e,t,r){if(l.indexOf(e+".replace(/")!==-1){let i=l.match(Ut(e,"",`\\.replace\\(/(.*?[^\\\\])/([gimsuyx]*),\\s*["'](.*?[^\\\\])??["']\\)`));return i?(t=t.replace(new RegExp(i[1],i[2]),i[3]||""),l=l.replace(i[0],e),gi(l,e,t,r)):l.replace(Ut(e,"g"),r?r(t):t)}else return l.replace(Ut(e,"g"),r?r(t.replace(/\$/g,"$$$$")):t.replace(/\$/g,"$$$$"))}function Xe(){let l=We();if(l)return l;if(!ae)return Oe||"";let e,t="",r=!ae.charset||ae.charset=="UTF-8";try{if(ae.keywords){let i=ae.keywords.split(`
`);for(let a=0;a<i.length;a++){let n=i[a];if(!n||!n.trim())continue;let s=i[a].match(/^(.*?)\.replace\(\//);if(s&&(n=s[1]),r){if(/^\w[\w\|]*$/.test(n)){let o=n.split("|"),p=new URLSearchParams(location.search);for(let d=0;d<o.length&&(t=p.get(o[d]),!t);d++);}else if(/\(.+\)/.test(n)&&n.indexOf("@")!==0)try{e=de.match(new RegExp(n)),e&&(t=e[1]),t&&(t=decodeURIComponent(t))}catch{t=""}}if(!t&&V(document))try{let o=bt(n);o&&(t=o.value||o.innerText)}catch{t=""}if(t&&s&&(t=gi(i[a],n,t)),t)break}}else if(r&&ft.test(ae.url)&&!/[#:%]p{/.test(ae.url)&&(de.indexOf("?")!=-1&&(e=ae.url.match(new RegExp(`[\\?&]([^&]*?)=${di}.*`)),e&&(t=new URLSearchParams(location.search).get(e[1]))),!t&&(e=ae.url.match(new RegExp(`https?://[^/]*/(.*)${di}`)),e&&(e=de.match(new RegExp((e[1].replace(/\?/g,"\\?")||location.host.replace(/\./g,"\\.")+"/")+"(.*?)(/|$)")),e&&(t=e[1]),t))))try{t=decodeURIComponent(t)}catch{t=""}if(t==""&&V(document)){let i=V(document).querySelector("input[type=text]:not([readonly]),input:not([type])");i&&(t=i.value)}t&&(Oe=t)}catch(i){pe(i)}return Oe||"";//!localKeywords ? cacheKeywords : localKeywords;
}function _i(l,e){e=e||document.createElement("div"),l="on"+l;var t=l in e;if(!t){e.setAttribute||(e=document.createElement("div"));var r;e.hasAttribute(l)||(r=!0,e.setAttribute(l,"return;")),t=typeof e[l]=="function",r&&e.removeAttribute(l)}return t}function Mt(){var l="DOMMouseScroll";return _i("wheel")?l="wheel":_i("mousewheel")&&(l="mousewheel"),l}let mt=!1,Nt="";function kr(){nt(A("settings"),()=>{ge(Ae,{active:!0,insert:!0})}),nt(A("searchInPage"),()=>{L.showInPage(),L.showInPageSearch()}),nt(A("search"),()=>{L.searchAuto(0,{})}),nt(A("addSearchEngine"),()=>{let x=document.head.querySelector('[rel="search"]');if(x)sr(x.href,(B,W)=>{if(B!="load"){W&&pe(W.statusText||W.error||W.response||W);let P=V(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||V(document).querySelector("textarea");yi(P)}});else{let B=V(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||V(document).querySelector("textarea");yi(B)}}),document.addEventListener("searchJumper",x=>{switch(x.detail.action){case"search":x.detail.name?L.searchBySiteName(x.detail.name,x.detail.key||{}):L.searchAuto(x.detail.index,x.detail.key||{});break;case"show":L.setFuncKeyCall(!1),L.showInPage(),(!c.prefConfig.disableInputOnWords||L.inInput||!We())&&L.showSearchInput();break;case"showAll":L.appendBar(),L.showAllSites();break}}),$=V(document);let l=lt.children[0],e=0,t,r=!1,i=x=>{if(clearTimeout(t),L.bar.classList.remove("grabbing"),document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1),L.bar.style.marginLeft="",L.bar.style.marginTop="",L.bar.style.transform="",e===1){e=0,L.showAllSites();return}e=0;let B=window.innerWidth||document.documentElement.clientWidth,W=window.innerHeight||document.documentElement.clientHeight,P=B/3,H=W/3,O,Y,b,k,j=ht(x),M=dt(x);j<P?(O="left",b=parseInt(L.bar.style.left)>0?parseInt(L.bar.style.left):0):j<P*2?(O="center",b=parseInt(L.bar.style.left)-B/2):(O="right",b=B-parseInt(L.bar.style.left)-L.bar.scrollWidth),M<W/2?(Y="top",k=parseInt(L.bar.style.top)):(Y="bottom",k=W-parseInt(L.bar.style.top)-L.bar.scrollHeight,k<0&&(k=0)),l.style.cursor="",L.closeOpenType(),L.initPos(O,Y,b,k),U.setItem("searchData",c)},a={x:0,y:0},n=x=>{let B=ht(x),W=dt(x);Math.abs(a.x-B)+Math.abs(a.y-W)<50||(e===1&&(clearTimeout(t),l.style.cursor="grabbing",L.bar.style.position="fixed",L.bar.style.marginLeft="0",L.bar.style.marginTop="0",L.bar.style.right="",L.bar.style.bottom="",L.bar.style.transform="unset",L.con.classList.remove("search-jumper-scroll"),L.bar.className="search-jumper-searchBar grabbing"),e=2,L.bar.style.left=B-L.bar.scrollWidth+20+"px",L.bar.style.top=W-L.bar.scrollHeight+20+"px")};if(lt.oncontextmenu=function(x){L.bar.style.display="none",x.preventDefault()},lt.addEventListener("mousedown",x=>{if(r){r=!1;return}if(x.button===2){c.prefConfig.resizePage&&(typeof L.initBodyStyle<"u"&&(V(document).style.cssText=L.initBodyStyle),L.con.classList.remove("resizePage")),document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1);return}if(x.preventDefault(),x.stopPropagation(),L.inInput||x.button===1||x.altKey||x.ctrlKey||x.shiftKey||x.metaKey){ge(Ae,{active:!0,insert:!0});return}e=1,a={x:ht(x),y:dt(x)},document.addEventListener("mouseup",i,!1),setTimeout(()=>{e===1&&document.addEventListener("mousemove",n,!1)},100),t=setTimeout(()=>{L.bar.style.display="none",document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1)},2e3)},!1),lt.addEventListener("touchstart",x=>{x.preventDefault(),x.stopPropagation(),r=!0,e=1,a={x:ht(x),y:dt(x)},document.addEventListener("touchend",i,!1),setTimeout(()=>{e===1&&document.addEventListener("touchmove",n,!1)},100),t=setTimeout(()=>{L.bar.style.display="none",c.prefConfig.resizePage&&(typeof L.initBodyStyle<"u"&&(V(document).style.cssText=L.initBodyStyle),L.con.classList.remove("resizePage")),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1)},1500)},{passive:!1,capture:!1}),L.bar.addEventListener(Mt(),x=>{if(x.target.parentNode&&(x.target.parentNode.className=="sitelistCon"||x.target.parentNode.parentNode&&x.target.parentNode.parentNode.className=="sitelistCon"))return;let B=L.con.classList;if(B.contains("search-jumper-scroll")&&!(B.contains("search-jumper-left")||B.contains("search-jumper-right"))){var W,P;if(x.type!=="wheel"){var H=0,O=0;typeof x.axis=="number"?x.axis==2?O=x.detail:H=x.detail:typeof x.wheelDeltaY>"u"||x.wheelDeltaY!=0?O=-x.wheelDelta/40:H=-x.wheelDelta/40,P=O,W=H}else W=x.deltaX,P=x.deltaY;x.preventDefault(),x.stopPropagation(),L.con.scrollLeft+=P}},{passive:!1,capture:!1}),c.prefConfig.shortcut&&(c.prefConfig.switchSitesPreKey||c.prefConfig.switchSitesNextKey||c.prefConfig.shortcutKey||c.prefConfig.showAllShortcutKey)){let x=-1,B=!1,W=(P,H,O,Y,b,k)=>H&&!P.altKey||O&&!P.ctrlKey||Y&&!P.shiftKey||b&&!P.metaKey||(B||(B=(P.key||String.fromCharCode(P.keyCode)).toLowerCase()),k!=B&&k!=P.code)||!c.prefConfig.enableInInput&&x==-1&&(x=1,!O&&!H&&!Y&&!b&&Ct(document))?!1:(x=0,P.preventDefault(),P.stopPropagation(),!0);document.addEventListener("mouseenter",P=>{P.target&&!L.contains(P.target)&&(ui=P.target)},!0),document.addEventListener("keydown",P=>{if(P.target.id!=="searchJumperInput"&&(x=-1,B=!1,c.prefConfig.shortcutKey&&W(P,c.prefConfig.callBarAlt,c.prefConfig.callBarCtrl,c.prefConfig.callBarShift,c.prefConfig.callBarMeta,c.prefConfig.shortcutKey)&&(L.setFuncKeyCall(!1),L.showInPage(),(!c.prefConfig.disableInputOnWords||L.inInput||!We())&&L.showSearchInput()),x!=1&&(c.prefConfig.showAllShortcutKey&&W(P,c.prefConfig.showAllAlt,c.prefConfig.showAllCtrl,c.prefConfig.showAllShift,c.prefConfig.showAllMeta,c.prefConfig.showAllShortcutKey)&&(L.appendBar(),L.showAllSites()),ae&&L.bar.style.display!=="none"))){if(c.prefConfig.switchSitesPreKey&&W(P,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesPreKey)){L.switchSite();return}c.prefConfig.switchSitesNextKey&&W(P,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesNextKey)&&L.switchSite(!0)}},!0)}let s;if(c.prefConfig.enableInPage){let O=function(b){let k=!1;if(Ct(document))k=!0;else{let j=!1,M=b;for(;M&&(j=M.contentEditable=="true",!(j||M.nodeName.toUpperCase()=="BODY"));)M=M.parentNode;j&&(k=!0)}return k},x=!1,B,W=!1,P;document.addEventListener("selectionchange",b=>{(c.prefConfig.leftMouse||c.prefConfig.middleMouse)&&(window.getSelection().toString()?P=window.getSelection().getRangeAt(0).getBoundingClientRect():P=null)});let H=!1;s=b=>{x&&b.preventDefault(),x=!1,document.removeEventListener("click",s,!0)};let Y=b=>{if(H&&b.type==="mousedown"&&b.button===0||b.target.classList&&b.target.classList.contains("search-jumper-btn")||L.contains(b.target)||L.bar.classList.contains("grabbing"))return;let k=O(b.target),j=!c.prefConfig.enableInInput&&k;if(j&&b.type==="dblclick")return;if(c.prefConfig.minPopup==2&&(k?L.con.classList.add("targetInput"):L.con.classList.remove("targetInput")),b.type==="touchstart"){c.prefConfig.selectToShow&&setTimeout(()=>{We()?L.showInPage(!0,b):L.waitForHide(0)},0);return}H=!0,setTimeout(()=>{H=!1},500),x=!1,$=b.target,L.closePopupWindow();let M=!1;if((c.prefConfig.altKey||c.prefConfig.ctrlKey||c.prefConfig.shiftKey||c.prefConfig.metaKey)&&!(c.prefConfig.altKey&&!b.altKey||c.prefConfig.ctrlKey&&!b.ctrlKey||c.prefConfig.shiftKey&&!b.shiftKey||c.prefConfig.metaKey&&!b.metaKey)&&(M=!0),!c.prefConfig.selectToShow&&(b.button===0&&!c.prefConfig.leftMouse||b.button===1&&!c.prefConfig.middleMouse)){L.waitForHide(0);return}let N=b.clientX,G=b.clientY,ue=!1,te=D=>{Math.abs(N-D.clientX)+Math.abs(G-D.clientY)>2&&(clearTimeout(B),document.removeEventListener("mousemove",te,!0),D.target.removeEventListener("scroll",ie),ue=!0)},ie=D=>{clearTimeout(B),document.removeEventListener("mousemove",te,!0),D.target.removeEventListener("scroll",ie)},S=D=>{mt=!1,L.contains(D.target)||x?D.preventDefault():setTimeout(()=>{x||(k=O(D.target),j=!c.prefConfig.enableInInput&&k,!j&&(M&&D.button===2||(ue||W)&&D.button===0&&c.prefConfig.selectToShow&&We())?L.showInPage(!0,D):(H=!1,L.waitForHide(0)))},0),clearTimeout(B),document.removeEventListener("mouseup",S,!0),document.removeEventListener("mousemove",te,!0),D.target.removeEventListener("scroll",ie)};if(b.type==="dblclick"){We()!==""?(x=!0,mt=!1,document.removeEventListener("mouseup",S,!0),document.removeEventListener("mousemove",te,!0),b.target.removeEventListener("scroll",ie),clearTimeout(B),setTimeout(()=>{L.showInPage(!0,b)},200)):(W=!0,setTimeout(()=>{W=!1},200));return}B&&clearTimeout(B),B=setTimeout(()=>{mt||$==b.target&&(b.button===1&&!c.prefConfig.middleMouse||b.button===2&&!c.prefConfig.rightMouse||b.button===0&&!c.prefConfig.leftMouse||(c.prefConfig.longPressTile?L.showInPage(!0,b):(L.setFuncKeyCall(!1),L.showInPage()),x=!0))},parseInt(c.prefConfig.longPressTime));let J=!1;if(b.button===2?M&&(J=!0):(b.button===0?c.prefConfig.leftMouse&&(J=!0):b.button===1&&c.prefConfig.middleMouse&&(J=!0),J&&(j?J=!1:P?(b.clientX<P.left||b.clientX>P.left+P.width||b.clientY<P.top||b.clientY>P.top+P.height)&&(J=!1):J=!1)),J)return setTimeout(()=>{mt||L.showInPage(!0,b),document.removeEventListener("mousemove",te,!0),b.target.removeEventListener("scroll",ie)},200),x=!0,document.addEventListener("mouseup",S,!0),document.addEventListener("click",s,!0),!1;document.addEventListener("mousemove",te,!0),document.addEventListener("mouseup",S,!0),b.target.addEventListener("scroll",ie)};if(document.addEventListener("mousedown",Y),document.addEventListener("dblclick",Y),c.prefConfig.selectToShow){let b,k,j=M=>{clearTimeout(b),b=setTimeout(()=>{window.getSelection().toString()&&(Y(k),document.removeEventListener("selectionchange",j))},300)};document.addEventListener("touchstart",M=>{M.isTrusted!==!1&&(k=M,document.addEventListener("selectionchange",j))})}document.addEventListener("contextmenu",b=>{x&&b.preventDefault(),x=!1})}c.prefConfig.dragToSearch&&!at&&V(document).addEventListener("dragstart",x=>{!x.isTrusted||c.prefConfig.dragAlt&&!x.altKey||c.prefConfig.dragCtrl&&!x.ctrlKey||c.prefConfig.dragShift&&!x.shiftKey||c.prefConfig.dragMeta&&!x.metaKey||!c.prefConfig.enableInInput&&!x.altKey&&!x.ctrlKey&&!x.shiftKey&&!x.metaKey&&Ct(document)||($=x.target,$.nodeType!==1&&($=$.parentNode),$.shadowRoot&&($=$.shadowRoot.activeElement||$),!($.getAttribute&&$.getAttribute("draggable")=="true")&&($.parentNode&&$.parentNode.getAttribute&&$.parentNode.getAttribute("draggable")=="true"||(L.waitForHide(0),setTimeout(()=>{Pr(x.clientX,x.clientY)},2),s&&document.removeEventListener("click",s,!0),mt=!0)))}),c.prefConfig.quickAddRule&&document.addEventListener("click",x=>{((x.ctrlKey||x.metaKey)&&x.shiftKey||(x.ctrlKey||x.metaKey)&&x.altKey||x.altKey&&x.shiftKey)&&/^(INPUT|TEXTAREA)$/i.test(x.target.nodeName)&&(/^INPUT$/i.test(x.target.nodeName)&&x.target.type&&x.target.type!="text"&&x.target.type!="search"||yi(x.target))},!0);let o=x=>{setTimeout(()=>{L.refresh()},100)};document.addEventListener("fullscreenchange",x=>{document.fullscreenElement&&(L.bar.style.display="none")});let p=!1,d=x=>{if(p)return;p=!0,setTimeout(()=>{p=!1},300);let B=x.target;if(ae&&B)if(B.nodeName&&B.nodeName.toLowerCase&&B.nodeName.toLowerCase()=="a")L.updateCacheKeywords();else{let W=B.parentNode;W&&W.nodeName&&W.nodeName.toLowerCase&&W.nodeName.toLowerCase()=="a"&&L.updateCacheKeywords()}};V(document).addEventListener("auxclick",d,!0),V(document).addEventListener("click",d,!0);let f=function(x){var B=history[x];return function(){var W=B.apply(this,arguments);let P=location.href.slice(0,500);if(de!=P){de=P;var H=new Event("sj_"+x);H.arguments=arguments,window.dispatchEvent(H)}return W}};history.pushState=f("pushState"),history.replaceState=f("replaceState"),window.addEventListener("sj_pushState",o),window.addEventListener("sj_replaceState",o),window.addEventListener("yt-navigate-finish",o),window.addEventListener("securitypolicyviolation",x=>{x.violatedDirective==="form-action"&&Qi()});let g=x=>L.removeMark(x),u=(x,B)=>L.highlight(x,B),m=()=>L.appendBar(),y={childList:!0,characterData:!0,subtree:!0},T=0;new MutationObserver((x,B)=>{if(L.lockWords){if(L.initHighlight&&T>100)return;for(let P of x){if(P.type==="characterData"){let H=P.target.parentNode;if(!H)return;let O=P.target.previousElementSibling;if(O&&!O.dataset.inited&&O.className==="searchJumper"){O.dataset.inited=!0;return}if(O=P.target.nextElementSibling,O&&!O.dataset.inited&&O.className==="searchJumper"){O.dataset.inited=!0;return}L.checkCharacterData(H),L.initHighlight&&T++}if(P.removedNodes.length&&[].forEach.call(P.removedNodes,H=>{H.nodeType===1&&(H.classList&&H.classList.contains("searchJumper")?g(H):H.children.length&&[].forEach.call(H.querySelectorAll("mark.searchJumper,a.searchJumper,input.searchJumper,textarea.searchJumper"),O=>{g(O)}))}),P.addedNodes.length)for(let H=0;H<P.addedNodes.length;H++){let O=P.addedNodes[H],Y;if(O.nodeType===1){if(/^searchJumper$/.test(O.className))continue;Y=O}else{if(O.previousElementSibling&&/^searchJumper$/.test(O.previousElementSibling.className))continue;if(O.nextElementSibling&&/^searchJumper$/.test(O.nextElementSibling.className))continue;Y=O.parentNode}Y&&(setTimeout(()=>{u("insert",Y)},0),L.initHighlight&&T++)}}m()}}).observe(V(document),y)}function Zi(l,e){if(!l)return"";let t,r;if(e)t=e.replace(/(^https?:\/\/.+)\/[^\/]*$/,"$1"),r=e;else{if(l.charAt(0)=="#")return location.href+l;if(l.charAt(0)=="?")return location.href.replace(/^([^\?#]+).*/,"$1"+l);t=location.protocol+"//"+location.host;let o=document.querySelector("base");r=o?o.href:location.href}let i=r||t;i=i.replace(/(\?|#).*/,""),/https?:\/\/[^\/]+$/.test(i)&&(i=i+"/"),i.indexOf("http")!==0&&(i=t+i);for(var a=/^[^\?#]*\//.exec(i)[0],n=/^\w+\:\/\/\/?[^\/]+/.exec(a)[0],s=/^\w+\:\/\//;l.indexOf("../")===0;)l=l.substr(3),a=a.replace(/\/[^\/]+\/$/,"/");return l=l.replace(/\.\//,""),/^\/\/\/?/.test(l)&&(l=location.protocol+l),s.test(l)?l:(l.charAt(0)=="/"?n:a)+l}function yi(l){if(Te)return;let e,t=location.href;if(l&&l.name)for(e=l.parentNode;e;){if(e.nodeName.toUpperCase()==="FORM"){let a=e.target;if(a&&typeof a=="string"&&a!="_blank"&&a!="_self"&&a!="_parent"&&a!="_top"&&!V(document).querySelector(a)){e=null;break}break}e=e.parentNode}let r=()=>!window.confirm(A("noValidItemAsk"));if(e){t=Zi(e.getAttribute("action")||t);let a=[],n=new FormData(e);for(let[s,o]of n)l.name===s?o="%s":o=encodeURIComponent(o),a.push(s+"="+o);if(e.method.toLowerCase()=="post")t+="%p{"+a.join("&")+"}",e.action.indexOf(location.origin)==0&&location.pathname&&location.pathname!=="/"&&(t+=`#from{${location.pathname.slice(1)}}`);else{let s=t.match(/\?(.*)/);s&&(t=t.replace(s[0],""),s[1].split("&").forEach(o=>{let p=o.split("="),d=p[0];if(a.findIndex(g=>g.indexOf(d+"=")===0)!==-1)return;let f=p[1];f==l.value&&(f="%s"),a.push(d+"="+f)})),t+="?"+a.join("&")}}else if(l&&l.value)if(location.href.indexOf(l.value)!==-1)t=location.href.replace(l.value,"%s");else{let a=encodeURIComponent(l.value);if(location.pathname.indexOf(a)!==-1||location.search.indexOf(a)!==-1)t=location.origin+location.pathname.replace(a,"%s")+location.search.replace(a,"%s");else if(a=escape&&escape(l.value),a&&location.pathname.indexOf(a)!==-1||location.search.indexOf(a)!==-1)t=location.origin+location.pathname.replace(a,"%se")+location.search.replace(a,"%se");else if(r())return}else if(r())return;let i=[];[].forEach.call(document.querySelectorAll("link[rel='shortcut icon'],link[rel='icon'],link[rel='fluid-icon'],link[rel='apple-touch-icon']"),a=>{i.indexOf&&i.indexOf(a.href)!==-1||i.push(a.href)}),Qt(document.title.replace(l?l.value:"","").replace(/^\s*[-_]\s*/,""),"",t,i,document.characterSet)}const Xi="https://hoothin.github.io/SearchJumper/jump.html";function Qi(){let l=`${Xi}#jump{url=${encodeURIComponent(It.url)}&charset=${It.charset}}`;It.target=="_self"?location.href=l:ge(l,{active:!0,insert:!0})}function Ir(){if(de.indexOf(Xi)!=-1){let l=de.match(/#jump{url=(.*)&charset=(.*)}/);l&&fi(l[2],decodeURIComponent(l[1]),"_self")}}var Te;async function jr(){if(de.indexOf(Ae)===0||(document.title==="SearchJumper"||document.querySelector('[name="from"][content="SearchJumper"]'))&&document.querySelector('[name="author"][content="Hoothin"]')){Te=document.querySelector('[name="engines"]');let l=document.getElementById("spotlight");if(Te)try{if(Te=Te.getAttribute("content"),Te.indexOf("http")===0){if(l){const r=A("loadingCollection");l.innerText=r,l.setAttribute("spotlight",r)}let t=await new Promise(r=>{Be({method:"GET",url:Te,onload:function(i){var a=null;try{a=JSON.parse(i.responseText),r(a)}catch(n){console.log(n),r(!1)}},onerror:function(i){console.log(i),r(!1)},ontimeout:function(i){console.log(i),r(!1)}})});t?(c.sitesConfig=t,Te=!0):Te=!1}else c.sitesConfig=JSON.parse(decodeURI(Te)),Te=!0}catch{Te=!1}let e=de.indexOf(Ae.replace(/\/config.*/,""))===0||de.indexOf(ii)===0||de.indexOf(or)===0||location.hostname==="localhost";return e&&(et=!!Te||/all(\.html)?$/.test(location.pathname)),l?l.style.display="none":setTimeout(()=>{l=document.getElementById("spotlight"),l&&(l.style.display="none")},500),e}return!1}async function Er(){if(at=await jr(),!at&&c.webdavConfig&&(ot=new cr(c.webdavConfig.host+"/SearchJumper"+(c.webdavConfig.path||"").replace(/^\/*/,"/").replace(/\/*$/,"/"),c.webdavConfig.username,c.webdavConfig.password)),at&&!et){let l,e=!1,t=()=>{l=setTimeout(()=>{e||t()},50),window.postMessage({searchData:c,cacheIcon:be,version:pt.script.version||0,command:"loadConfig"},"*")},r=setTimeout(()=>{e||location.reload()},3e3);document.addEventListener("received",n=>{e=!0,clearTimeout(l),clearTimeout(r),Je.length>0&&c.prefConfig.cacheSwitch&&(pe(`Start cache ${Je.length} icons!`),Vi())}),document.addEventListener("downloadCache",n=>{Mr()}),document.addEventListener("importCache",n=>{let s=n.detail?n.detail.cacheData:n.cacheData;Nr(s),Ce("Cache imported successfully!")}),document.addEventListener("showSiteAdd",n=>{let s=n.detail?n.detail.site:n.site;s&&(s.url?Qt(s.name,s.description,s.url,s.icon?[s.icon]:[],s.charset,s.kwFilter,s.match,s.hideNotMatch):er.open(s))}),t(),document.addEventListener("dataChanged",n=>{t()});let i=(n,s,o,p)=>{window.postMessage({url:n,name:s,status:o,finalUrl:p,command:"verifyResult"},"*")};document.addEventListener("verifyUrl",n=>{let s=n.detail?n.detail.url:n.url,o=n.detail?n.detail.name:n.name;Be({method:"GET",url:s,headers:{referer:s,"User-Agent":navigator.userAgent},onload:function(p){i(s,o,p&&p.status,p&&p.finalUrl)},onerror:function(p){i(s,o,"error","")},ontimeout:function(p){i(s,o,"timeout","")}})});let a=c.prefConfig.cacheSwitch;document.addEventListener("saveConfig",n=>{c=(n.detail?n.detail.searchData:n.searchData)||ye.searchData,U.setItem("searchData",c);let s={},o=be?Object.keys(be).length:0;a==c.prefConfig.cacheSwitch?(c.sitesConfig.forEach(p=>{if(/^[a-z\- ]+$/.test(p.icon||"")||/^http/.test(p.icon)){let d=p.icon.trim().replace(/ /g,"_"),f=be[d];f&&(s[d]=f)}p.sites.forEach(d=>{let f=d.icon;if(f||(f=d.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(f)){let g=be[f];g&&(s[f]=g)}})}),o!==Object.keys(s).length&&(be=s,U.setItem("cacheIcon",s))):(c.sitesConfig.forEach(p=>{if(/^http/.test(p.icon)){let d=be[p.icon];if(d)if(d==="fail"){let f=document.createElement("img");f.src=p.icon,Je.push(f)}else s[p.icon]=d}p.sites.forEach(d=>{let f=d.icon;if(f||(f=d.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(f)){let g=be[f];if(g)if(g==="fail"){let u=document.createElement("img");u.src=f,Je.push(u)}else s[f]=g}})}),U.setItem("cacheIcon",s),c.prefConfig.cacheSwitch&&(Je.length>0&&(Ce(A("startCache")),Vi(!0)),Yi())),a=c.prefConfig.cacheSwitch,(n.notification||n.detail&&n.detail.notification)&&Ce("Configuration imported successfully!")}),document.addEventListener("copyConfig",n=>{let s=c.sitesConfig.filter(o=>o&&!(/^BM/.test(o.type)&&o.icon==="bookmark"));He(JSON.stringify(s,null,2)),Ce("Configuration copied successfully!")})}else if(Mi.test(de)){let l=Me(`
                    #import-btns-con {
                        position: absolute;
                        display: block;
                        font-size: 20px;
                        left: 0px;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                    }
                    #import-btns-con.hide {
                        pointer-events: none;
                    }
                    #import-btns-con>button {
                        opacity: 0.5;
                    }
                    #import-btns-con>button:hover {
                        opacity: 0.9;
                    }
                    #import-btn {
                        position: absolute;
                        display: block;
                        font-size: 20px;
                        right: 45px;
                        top: 45px;
                        pointer-events: all;
                    }
                    #filter-btn {
                        position: absolute;
                        display: none;
                        font-size: 20px;
                        left: 45px;
                        top: 45px;
                        pointer-events: all;
                    }
                    .filter>#filter-btn {
                        display: block;
                    }
                    #import-btns-con>h3 {
                        float: left;
                        margin-left: 20px;
                    }
                    #import-btns-con.hide>h3 {
                        display: none;
                    }
                `),e,t=0,r=document.createElement("button");r.id="import-btn",r.className="btn Button--secondary Button";let i=document.createElement("button");i.id="filter-btn",i.className="btn Button--secondary Button";let a=document.createElement("h3"),n=document.createElement("div");n.id="import-btns-con",n.appendChild(l),n.appendChild(r),n.appendChild(i),n.appendChild(a),n.addEventListener("click",o=>{e&&(e.style.filter=""),n.classList.add("hide")}),r.innerText=A("import"),r.addEventListener("click",o=>{if(Te||!e)return;let p=e.innerText.trim(),d;if(p){try{d=JSON.parse(p)}catch(f){Ce(f.toString());return}switch(t){case 0:window.confirm(A("importOrNot"))&&(n.parentNode&&n.parentNode.removeChild(n),Dt(()=>{c.sitesConfig=d,c.lastModified=new Date().getTime(),U.setItem("searchData",c),Ce(A("siteAddOver")),L.refreshEngines()},!0));break;case 1:Qt(d.name,"",d.url,d.icon?[d.icon]:[],d.charset,d.kwFilter,d.match,d.hideNotMatch);break;case 2:c.prefConfig.inPageRule||(c.prefConfig.inPageRule={}),Object.keys(d).forEach(f=>{let g=d[f];if(!g)return;if(f.indexOf("@")===0){c.prefConfig.inPageRule[f]=g;return}if(!g.words||g.words.length===0)return;let u="",m=g.sep||"";m?u="$c"+m:(m=" ",g.words.length===1&&g.words[0].indexOf(" ")!==-1&&(m="",u="$o")),c.prefConfig.inPageRule[f]=u+g.words.join(m)}),U.setItem("searchData",c),Ce("Over!");break}}}),i.innerText=A("filter"),i.addEventListener("click",o=>{if(e){n.parentNode&&n.parentNode.removeChild(n);let p=e.innerText.trim(),d;if(!p||p.indexOf("[")!==0)return;try{d=JSON.parse(p),er.open(d)}catch(f){Ce(f.toString())}}});let s=o=>{if(o==e&&n.parentNode)return;let p=o.offsetTop+"px",d=o.innerText.trim();if(d){if(a.innerText="",/^\[/.test(d))t=0,n.style.top=p,n.classList.add("filter");else if(/^\{\s*"name"/.test(d))t=1,n.style.top=p,n.classList.remove("filter"),a.innerText=d.match(/"name":\s*"(.*)"/)[1];else if(/^\{/.test(d))t=2,n.style.top=p,n.classList.remove("filter");else return;e&&(e.style.filter=""),o.parentNode.appendChild(n),o.style.filter="blur(5px)",e=o,n.classList.remove("hide")}};window.addEventListener("load",o=>{if(!e){let p=document.querySelector(".highlight>pre");p&&s(p)}}),document.addEventListener("mouseover",o=>{if(Mi.test(de))if(o.target.nodeName==="PRE")s(o.target);else{let p=o.target.children[0];p&&p.nodeName==="PRE"&&s(p)}})}}class Lr{constructor(){this.inited=!1}init(){if(this.inited)return;this.inited=!0;let e=this;this.openList=[],this.filterCss=`
                    #searchJumperFilter {
                        width: 100%;
                        height: 100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 100000;
                        background-color: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(5px);
                        transform: translateZ(0);
                    }
                    .searchJumperFrame-body {
                        width: 350px;
                        text-align: left;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        transition: all 0.25s ease;
                        border: 0;
                        font-size: initial;
                    }
                    .searchJumperFrame-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .searchJumperFrame-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperFrame-buttons {
                        text-align: center;
                        margin: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                        padding: 3px;
                    }
                    .searchJumperFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    .searchJumperFrame-body>.sitesCon {
                        max-height: 70vh;
                        overflow: auto;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.23);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
                        padding: 5px;
                        user-select: none;
                        white-space: nowrap;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary>span,
                    .searchJumperFrame-body>.sitesCon>details>div>span {
                        line-height: 25px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 180px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary>button {
                        display: none;
                        position: absolute;
                    }
                    .searchJumperFrame-body>.sitesCon>details>summary:hover>button {
                        display: inline-block;
                    }
                    .searchJumperFrame-body>.sitesCon input {
                        margin: 2px 5px;
                        width: 20px;
                        height: 20px;
                        vertical-align: sub;
                    }
                    .searchJumperFrame-body>.sitesCon div {
                        margin-left: 32px;
                    }
                    .searchJumperFrame-body>.sitesCon div.exist {
                        text-decoration:line-through;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-input-title,
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        background-color: black;
                        color: #d5d5d5;
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #245d8f!important;
                      }
                    }
                `,this.filterCssEle=Me(this.filterCss),this.filterFrame=document.createElement("div"),this.filterFrame.id="searchJumperFilter",this.filterFrame.innerHTML=Q(`
                <div class="searchJumperFrame-body">
                    <a href="${Ae}" class="searchJumperFrame-title" target="_blank">
                        <img onerror="this.style.display='none'" width="32px" height="32px" src="${ut}" />${A("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-buttons">
                        <button id="expandAll" type="button">${A("expandAll")}</button>
                        <button id="collapseAll" type="button">${A("collapseAll")}</button>
                    </div>
                    <div class="sitesCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="cancel" type="button">${A("siteCancel")}</button>
                        <button id="selectAll" type="button">${A("selectAll")}</button>
                        <button id="add" type="button">${A("import")}</button>
                    </div>
                </div>
                `),this.sitesCon=this.filterFrame.querySelector(".sitesCon");let t=this.filterFrame.querySelector("#add"),r=this.filterFrame.querySelector("#selectAll"),i=this.filterFrame.querySelector("#expandAll"),a=this.filterFrame.querySelector("#collapseAll"),n=!1;i.addEventListener("click",s=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.setAttribute("open","open")})}),a.addEventListener("click",s=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.removeAttribute("open")})}),r.addEventListener("click",s=>{n=!n,[].forEach.call(this.filterFrame.querySelectorAll("input[type=checkbox]"),o=>{o.checked=n})}),t.addEventListener("click",s=>{Te||Dt(()=>{let o=!1;[].forEach.call(this.filterFrame.querySelectorAll("details"),p=>{let d=p.children[0].children[0],f=e.typeDict[d.title];if(f.type=d.innerText.trim(),f.sites=[],[].forEach.call(p.querySelectorAll('div>[type="checkbox"]'),g=>{if(g.checked){o=!0;let u=e.siteDict[g.parentNode.title],m=g.nextElementSibling;if(!u||!m)return;if(m.value==="0")f.sites.push(u);else{let y=e.searchType(m.value);c.sitesConfig[y].sites.push(u)}}}),f.sites.length){let g=e.searchType(f.type);g===!1?c.sitesConfig.push(f):c.sitesConfig[g].sites=c.sitesConfig[g].sites.concat(f.sites)}}),o&&(c.lastModified=new Date().getTime(),U.setItem("searchData",c),Ce(A("siteAddOver")),L.refreshEngines(),this.close())})}),this.filterFrame.addEventListener("click",s=>{(s.target.id=="searchJumperFilter"||s.target.id=="cancel")&&this.close()})}searchType(e){for(let t=0;t<c.sitesConfig.length;t++)if(c.sitesConfig[t].type==e)return t;return!1}searchUrl(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t].sites;for(let i=0;i<r.length;i++)if(r[i].url.replace(/^https?/,"")==e.replace(/^https?/,""))return!0}return!1}searchName(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t].sites;for(let i=0;i<r.length;i++)if(r[i].name==e){let a=e+"_1";return this.searchName(a)}}return e}anylizeType(e){let t=this,r=document.createElement("details"),i=document.createElement("summary"),a=document.createElement("span");a.title=e.type,a.innerText=e.type,i.appendChild(a);let n=document.createElement("input");n.type="checkbox",i.appendChild(n);let s=document.createElement("button");s.innerText=A("rename"),s.addEventListener("click",p=>{let d=window.prompt(A("rename"),a.innerText);d&&(a.innerText=d)}),i.appendChild(s),r.appendChild(i);for(let p=0;p<this.openList.length;p++)if(this.openList[p]==e.type){r.setAttribute("open","open");break}let o=[];this.typeDict[e.type]=e,e.sites&&e.sites.forEach(p=>{let d=document.createElement("div"),f=document.createElement("span");if(f.innerText=p.name,p.name=t.searchName(p.name),d.appendChild(f),d.title=p.url,r.appendChild(d),t.searchUrl(p.url)){d.classList.add("exist");return}let g=document.createElement("input");g.type="checkbox",g.onclick=y=>{if(!g.checked)n.checked=!1;else{let T=!0;for(let E=0;E<o.length;E++)if(!o[E].checked){T=!1;break}T&&(n.checked=!0)}},d.appendChild(g),d.addEventListener("click",y=>{y.target.nodeName.toUpperCase()=="SPAN"&&g.click()});let u=document.createElement("select"),m=document.createElement("option");m.value=0,m.innerText=A("currentType"),u.appendChild(m);for(let y=0;y<c.sitesConfig.length;y++){let T=c.sitesConfig[y];if(T.type!=e.type){let E=document.createElement("option");E.value=T.type,E.innerText=T.type,u.appendChild(E)}}d.appendChild(u),t.siteDict[p.url]=p,o.push(g)}),o.length==0&&(n.style.display="none",s.style.display="none"),n.addEventListener("click",p=>{o.forEach(d=>{d.checked=n.checked})}),this.sitesCon.appendChild(r)}close(){this.openList=[],[].forEach.call(this.sitesCon.querySelectorAll("details"),e=>{e.hasAttribute("open")&&this.openList.push(e.querySelector("summary").innerText)}),this.filterFrame.parentNode&&this.filterFrame.parentNode.removeChild(this.filterFrame)}open(e){this.init();let t=this;this.siteDict={},this.typeDict={},(!this.filterCssEle||!this.filterCssEle.parentNode)&&(this.filterCssEle=Me(this.filterCss)),document.documentElement.appendChild(this.filterFrame),this.sitesCon.innerHTML=Q(""),e.forEach(r=>{t.anylizeType(r)})}}const er=new Lr;var Ie,De,bi,xi,vi,wi,Kt,qt,Gt,Vt;function Pr(l,e){if(!L||!L.bar)return;let t=L.bar.querySelector(".search-jumper-type.search-jumper-open"),r=()=>{if(document.removeEventListener("dragend",vi,!0),document.removeEventListener("dragenter",wi,!0),De.parentNode&&(De.parentNode.removeChild(De),Ie.style.opacity="",Ie.style.transform=""),mt=!1,clearTimeout(Kt),ae&&!ae.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||L.con.classList.contains("resizePage")){if(t&&!t.classList.contains("search-jumper-open"))if(t.children[0].onmouseup)t.children[0].onmouseup();else{let g=new PointerEvent("mouseup");t.children[0].dispatchEvent(g)}}else L.bar.style.display="none"};if(!qt&&!Gt&&(Vt=(c.prefConfig.zoomDrag||100)/100,qt=Vt*190,Gt=Vt*190),!Ie){let g=`
                    #dragCon {
                      position: fixed;
                      top: 0;
                      left: 0;
                      transform: scale(${Vt});
                      z-index: 2147483647;
                      -moz-transition:left 0.3s ease, top 0.3s;
                      -webkit-transition:left 0.3s ease, top 0.3s;
                      transition:left 0.3s ease, top 0.3s;
                    }
                    #searchJumperWrapper * {
                      margin: 0;
                      padding: 0;
                      border: none;
                      outline: none;
                      user-select: none;
                      box-sizing: content-box;
                      font-size: 12px;
                      line-height: normal;
                      overflow: visible;
                      background-image: initial;
                      float: initial;
                    }
                    #searchJumperWrapper {
                      position: fixed;
                      height: 300px;
                      width: 300px;
                      padding: 20px;
                      margin: 20px;
                      background-color: #000000${c.prefConfig.hideDragHistory?"10":"9e"};
                      box-shadow: #000000 0px 0px 10px;
                      border-radius: 50%;
                      z-index: 2147483647;
                      box-sizing: content-box;
                      opacity: 0;
                      transform: scale(.5);
                      -moz-transition:opacity 0.3s ease, transform 0.15s;
                      -webkit-transition:opacity 0.3s ease, transform 0.15s;
                      transition:opacity 0.3s ease, transform 0.15s;
                    }
                    #searchJumperWrapper>.panel {
                      position: relative;
                    }
                    #searchJumperWrapper .sector:nth-child(2n+1) .sector-inner {
                      background: #454545;
                      color: white;
                    }
                    #searchJumperWrapper .sector:nth-child(2n) .sector-inner {
                      background: #ffffff;
                      color: black;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n+1) .sector-inner {
                      background: #353535;
                    }
                    #searchJumperWrapper .sector.out:nth-child(2n) .sector-inner {
                      background: #eeeeee;
                    }
                    #searchJumperWrapper .sector {
                      position: absolute;
                      left: 150px;
                      top: 50px;
                      width: 100px;
                      height: 200px;
                      font-size: 14px;
                      border-radius: 0px 100px 100px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 1;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                      pointer-events: none;
                    }
                    #searchJumperWrapper .sector.out {
                      left: 150px;
                      top: 0px;
                      width: 150px;
                      height: 300px;
                      font-size: 14px;
                      border-radius: 0px 150px 150px 0;
                      overflow: hidden;
                      transform-origin: left center;
                      z-index: 0;
                      ${c.prefConfig.hideDragHistory?"display: none;":""}
                    }
                    #searchJumperWrapper .sector-inner {
                      text-align: center;
                      display: block;
                      width: 40px;
                      padding: 5px 3px 0 57px;
                      height: 195px;
                      transform: translateX(-100px) rotate(60deg);
                      transform-origin: right center;
                      border-radius: 100px 0 0 100px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner {
                      text-align: center;
                      display: block;
                      width: 90px;
                      height: 295px;
                      transform: translateX(-150px) rotate(36deg);
                      transform-origin: right center;
                      border-radius: 150px 0 0 150px;
                    }
                    #searchJumperWrapper .sector-inner span {
                      transform-origin: center;
                      padding: 20px 0;
                      pointer-events: all;
                      opacity: 0.8;
                      word-break: break-word;
                      height: 55px;
                      font-size: 12px;
                      font-weight: bold;
                      font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: space-evenly;
                    }
                    #searchJumperWrapper .sector-inner span {
                      width: 70px;
                      margin-left: -15px;
                    }
                    #searchJumperWrapper .sector-inner span>p {
                      max-width: 58px;
                    }
                    #searchJumperWrapper .sector.out>.sector-inner span {
                      width: unset;
                      margin-left: unset;
                    }
                    #searchJumperWrapper .over>.sector-inner span {
                      opacity: 1;
                    }
                    #searchJumperWrapper .sector-inner span>img {
                      width: 25px;
                      height: 25px;
                    }
                    #searchJumperWrapper .sector-inner span:hover {
                      opacity: 1;
                    }
                    #searchJumperWrapper .dragLogo {
                      position: absolute;
                      left: 150px;
                      top: 150px;
                      border-radius: 50%;
                      box-shadow: #000000 0px 0px 10px;
                      z-index: 10;
                      font-size: 0;
                      -moz-transition:transform 0.3s ease;
                      -webkit-transition:transform 0.3s ease;
                      transition:transform 0.3s ease;
                    }
                    .dragLogo>svg {
                      width: 40px;
                      height: 40px;
                      pointer-events: none;
                    }
                `,u=Me(g);bi=[],xi=[],Ie=document.createElement("div"),Ie.id="searchJumperWrapper",Ie.innerHTML=Q(`
                <div class="panel"></div>
                <div class="dragLogo">${pi}</div>
                `),Ke||Ie.appendChild(u);const m=6,y=10;let T=Ie.querySelector(".panel"),E=360/m,x=360/y,B=-E/2,W=-x/2,P,H=Ie.querySelector(".dragLogo"),O;H.addEventListener("dragover",N=>{N.preventDefault()},!0),H.addEventListener("dragenter",N=>{clearTimeout(O),P&&(P.style.transform=`rotate(${P.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,P.classList.remove("over")),P=null,H.style.transform="scale(1.35)",N.preventDefault(),clearTimeout(Kt),Kt=setTimeout(()=>{r(),L.appendBar(),L.showAllSites()},1e3)},!0);let Y=(N,G,ue)=>{let te=document.createElement("div");te.className=N;let ie=document.createElement("div");ie.className="sector-inner";let S=document.createElement("span");ie.appendChild(S),te.appendChild(ie);let J=`rotate(${G}deg)`;return S.style.transform=ue,te.style.transform=J+(c.prefConfig.hideDragHistory?"scale(1.2)":""),te.dataset.deg=G,T.appendChild(te),S.addEventListener("dragover",D=>{D.clientX<50?De.style.left="0px":D.clientX>document.documentElement.clientWidth-50&&(De.style.left=document.documentElement.clientWidth-(qt<<1)+"px"),D.clientY<50?De.style.top="0px":D.clientY>document.documentElement.clientHeight-50&&(De.style.top=document.documentElement.clientHeight-(Gt<<1)+"px"),D.preventDefault()},!0),S.addEventListener("dragenter",D=>{clearTimeout(O),S.innerText&&(P&&(P.style.transform=`rotate(${P.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,P.classList.remove("over")),H.style.transform="",te.style.transform=`scale(${c.prefConfig.hideDragHistory?"1.6":"1.25"}) ${J}`,te.classList.add("over"),P=te,clearTimeout(Kt))},!0),S};for(let N=0;N<m;N++){let G=Y("sector",B+E*N,`translateX(-10px) translateY(-10px) rotate(${B-E*N}deg)`);bi.push(G)}for(let N=0;N<y;N++){let G=Y("sector out",W+x*N,`translateX(12px) translateY(-15px) rotate(${W-x*N}deg)`);xi.push(G)}vi=N=>{r()},Ie.addEventListener("click",N=>{r()}),Ie.addEventListener("drop",N=>{N.target===H?(L.setFuncKeyCall(!1),L.showInPage()):P&&(r(),L.searchBySiteName(P.children[0].dataset.name,N),P.style.transform=`rotate(${P.dataset.deg}deg)`,P.classList.remove("over"),P=null),N.preventDefault()});let b,k,j,M;wi=N=>{clearTimeout(O),Ie.contains(N.target)||(O=setTimeout(()=>{r()},300))},De=document.createElement("div"),De.id="dragCon",De.appendChild(Ie)}L.recoveHistory();let i=L.autoGetFirstType(),a=i.querySelectorAll("a.search-jumper-btn:not(.notmatch)"),n=0,s=()=>{let g=null;for(let u=n;u<a.length;u++){let m=a[u];if(m.style.display!=="none"){g=m,n=u+1;break}}return g};const o=(g,u)=>{g.parentNode.dataset.name=u.dataset.name;let m=document.createElement("p");if(m.innerText=u.dataset.name.substr(0,10).trim(),!/^\w+$/.test(m.innerText)){let E="",x=0;for(let B of m.innerText)if(E+=B,/^\w+$/.test(B)?x++:x+=2,x>10){E+="...";break}m.innerText=E}let y=document.createElement("img");y.style.display="none",g.appendChild(y),g.appendChild(m),y.onload=E=>{y.style.display=""};let T=u.querySelector("img");if(T){let E=T.src||T.dataset.src;E&&(y.src=E)}};bi.forEach((g,u)=>{g.innerHTML=Q();let m=s();if(!m){g.parentNode.parentNode.style.filter="contrast(0.5)";return}g.parentNode.parentNode.style.filter="",o(g,m)});let p=0,d;i.classList.contains("search-jumper-needInPage")?d=L.txtHistorySiteBtns:i.classList.contains("search-jumper-targetImg")?d=L.imgHistorySiteBtns:i.classList.contains("search-jumper-targetAudio")?d=L.audioHistorySiteBtns:i.classList.contains("search-jumper-targetVideo")?d=L.videoHistorySiteBtns:(i.classList.contains("search-jumper-targetLink")||i.classList.contains("search-jumper-targetPage"))&&(d=L.linkHistorySiteBtns),d?(d=d.concat(L.historySiteBtns),d=d.filter((g,u,m)=>m.indexOf(g)===u)):d=L.historySiteBtns;let f=()=>{if(c.prefConfig.reuseDragHistory)return s();if(c.prefConfig.hideDragHistory)return!1;let g=null;for(let u=p;u<d.length;u++){let m=d[u];if(m.style.display!=="none"){g=m,p=u+1;break}}return g};xi.forEach((g,u)=>{let m=new DragEvent("dragleave");g.dispatchEvent(m),g.innerHTML=Q(),g.parentNode.parentNode.style.opacity=.6;let y=f();if(!y)return;let T=y.querySelector("img");T&&T.dataset.src&&(T.src=T.dataset.src,delete T.dataset.src),g.parentNode.parentNode.style.opacity=1,o(g,y)}),De.style.left=l-qt+"px",De.style.top=e-Gt+"px",Ie.style.opacity="",Ie.style.transform="",setTimeout(()=>{document.addEventListener("dragend",vi,!0),L.addToShadow(De),setTimeout(()=>{Ie.style.opacity=1,Ie.style.transform="scale(1)"},10),setTimeout(()=>{getComputedStyle(Ie).zIndex!="2147483647"?r():document.addEventListener("dragenter",wi,!0)},100)},0)}var X,Yt,Bt,ze,gt,Re,At,$t,tr,ir,Si,_t,Zt,Xt,rr;function Qt(l,e,t,r,i,a,n,s){if(self.kwFilter=a,self.charset=i,self.hideNotMatch=s,self.match=n,!X){let p=Me(`
                    .searchJumperFrame-body,
                    .searchJumperFrame-crawlBody {
                        width: 300px;
                        min-height: 300px;
                        position: fixed;
                        text-align: left;
                        left: 50%;
                        top: 45%;
                        margin-top: -250px;
                        margin-left: -150px;
                        z-index: 100000;
                        background-color: #ffffff;
                        border: 1px solid #afb3b6;
                        border-radius: 10px;
                        opacity: 0.95;
                        filter: alpha(opacity=95);
                        box-shadow: 5px 5px 20px 0px #000;
                        color: #6e7070;
                        transition: all 0.25s ease;
                        border: 0;
                        font-size: initial;
                    }
                    .searchJumperFrame-title {
                        background: #458bd1!important;
                        display: flex!important;
                        align-items: center!important;
                        justify-content: center!important;
                        color: white!important;
                        font-weight: bold;
                        font-size: 18px!important;
                        border-radius: 10px 10px 0 0!important;
                    }
                    .draging .searchJumperFrame-body,
                    .draging .searchJumperFrame-crawlBody {
                        transition: none;
                        pointer-events: none;
                    }
                    .searchJumperFrame-title>img {
                        margin: 5px;
                        height: 32px;
                        width: 32px;
                    }
                    .searchJumperFrame-input-title {
                        font-size: 9pt;
                        font-family: Arial, sans-serif,\u5FAE\u8F6F\u96C5\u9ED1,"Noto Sans SC";
                        display: inline-block;
                        background-color: white;
                        position: relative;
                        left: 20px;
                        padding: 0px 4px;
                        text-align: left;
                        color: #646464;
                    }
                    .searchJumperFrame-inputs>input,
                    .searchJumperFrame-inputs>textarea,
                    .searchJumperFrame-inputs>select,
                    .searchJumperFrame-body select {
                        resize: both;
                        font-size: 11pt;
                        font-weight: normal;
                        border-radius: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.23);
                        margin: 4px;
                        font-family: inherit;
                        background-color: #FFF;
                        width: calc(100% - 8px);
                        min-width: calc(100% - 8px);
                        max-width: calc(100% - 8px);
                        color: #4A4A4A;
                        margin-top: -8px;
                        padding: 4px;
                        padding-top: 8px;
                        box-sizing: border-box;
                        height: 36px;
                        word-break: break-all;
                    }
                    .searchJumperFrame-inputs>input:focus,
                    .searchJumperFrame-inputs>textarea:focus,
                    .searchJumperFrame-inputs>select:focus,
                    .searchJumperFrame-body select:focus {
                        background-color: #FFF;
                    }
                    .searchJumperFrame-buttons {
                        text-align: center;
                        margin-bottom: 5px;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .searchJumperFrame-buttons>button {
                        width: 32%;
                        font-size: 16px;
                        cursor: pointer;
                        border: 1px solid #1976d2;
                        border-radius: 4px;
                        transition: all .3s;
                        color: #fff;
                        background-color: #458bd1;
                        line-height: 25px;
                        padding: 3px;
                    }
                    .searchJumperFrame-buttons>button:hover {
                        color: #e3f2fd;
                    }
                    .searchJumperFrame-inputs>.sideIcon {
                        float: right;
                        margin-top: -38px;
                        position: relative;
                        right: 20px;
                        opacity: 0.8;
                        background: rgb(0 0 0 / 50%);
                        border-radius: 5px;
                        pointer-events: none;
                        width: 27px;
                        height: 27px;
                    }
                    .searchJumperFrame-inputs>svg.sideIcon {
                        fill: white;
                        pointer-events: all;
                        cursor: pointer;
                        transition: transform 0.25s ease;
                    }
                    .searchJumperFrame-inputs>svg.sideIcon:hover {
                        transform: scale(1.2);
                        opacity: 1;
                        background: rgb(0 0 0);
                    }
                    .searchJumperFrame-body>.iconsCon {
                        max-height: 150px;
                        overflow: auto;
                        width: 100%;
                        border-top: 1px solid rgba(0, 0, 0, 0.23);
                        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
                    }
                    .searchJumperFrame-body>.iconsCon>img {
                        margin: 5px;
                        cursor: pointer;
                        max-width: 120px;
                        border: 2px solid #ffffff;
                        box-sizing: border-box;
                        background: #80808030;
                        transition: background 0.25s ease;
                    }
                    .searchJumperFrame-body>.iconsCon>img:hover {
                        border: 2px solid #4e91d3;
                        background: gray;
                    }
                    .maxContent .searchJumperFrame-inputs {
                        width: 50%;
                        float: left;
                    }
                    .searchJumperFrame-body>.moreItem {
                        display: none;
                    }
                    .maxContent>.searchJumperFrame-body>.moreItem {
                        display: block;
                    }
                    .maxContent>.searchJumperFrame-body {
                        width: 600px;
                        margin-left: -300px;
                    }
                    .searchJumperFrame-maxBtn,
                    .searchJumperFrame-closeBtn {
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        color: white;
                        width: 25px;
                        cursor: pointer;
                        transition:transform 0.25s ease;
                    }
                    .searchJumperFrame-maxBtn:hover,
                    .searchJumperFrame-closeBtn:hover {
                        transform: scale(1.2);
                    }
                    .searchJumperFrame-maxBtn>#maxBtn {
                        display: block;
                    }
                    .searchJumperFrame-maxBtn>#minBtn {
                        display: none;
                    }
                    .maxContent .searchJumperFrame-maxBtn>#maxBtn {
                        display: none;
                    }
                    .maxContent .searchJumperFrame-maxBtn>#minBtn {
                        display: block;
                    }
                    .crawling>.searchJumperFrame-body {
                        display: none;
                    }
                    .searchJumperFrame-crawlBody {
                        display: none;
                    }
                    .crawling>.searchJumperFrame-crawlBody {
                        display: block;
                    }
                    .searchJumperFrame-buttons>button#submitCrawl,
                    .searchJumperFrame-buttons>button#record,
                    .searchJumperFrame-buttons>button#copy,
                    .searchJumperFrame-buttons>button#loop {
                        width: 100%;
                        margin: 0 3px;
                    }
                    .searchJumperFrame-crawlBody>.actionCon {
                        height: 200px;
                        background: gray;
                        border-radius: 10px;
                        margin: 10px;
                        padding: 0 10px 10px 10px;
                        resize: auto;
                        box-sizing: border-box;
                        overflow: auto;
                    }
                    .searchJumperFrame-crawlBody>.actionCon>div {
                        width: 100%;
                        font-size: 16px;
                        background: #000000cc;
                        border-radius: 8px;
                        color: white;
                        margin: 3px 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        white-space: nowrap;
                    }
                    .searchJumperFrame-crawlBody>.actionCon>div>span {
                        background: #275f90;
                        border-radius: 5px;
                        max-width: 40px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: inline-block;
                        margin: 0 3px;
                        white-space: nowrap;
                    }
                    @media (prefers-color-scheme: dark) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-crawlBody,
                      .searchJumperFrame-input-title,
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        background-color: black!important;
                        color: #d5d5d5!important;
                      }
                      .searchJumperFrame-inputs>input:focus,
                      .searchJumperFrame-inputs>textarea:focus,
                      .searchJumperFrame-inputs>select:focus,
                      .searchJumperFrame-body select:focus {
                        background-color: #1e1e1e!important;
                      }
                      .searchJumperFrame-inputs>input,
                      .searchJumperFrame-inputs>textarea,
                      .searchJumperFrame-inputs>select,
                      .searchJumperFrame-body select {
                        border: 1px solid rgb(255 255 255 / 36%);
                      }
                      .searchJumperFrame-title,
                      .searchJumperFrame-buttons>button {
                        background: #245d8f!important;
                      }
                      .searchJumperFrame-body>.iconsCon>img {
                        border: 2px solid #000000;
                      }
                    }
                    @media screen and (max-height: 600px) {
                      .searchJumperFrame-body,
                      .searchJumperFrame-crawlBody {
                        top: 10px;
                        margin-top: 0px;
                      }
                    }
                `);X=document.createElement("div"),X.innerHTML=Q(`
                <div class="searchJumperFrame-body">
                    <a href="${Ae}" class="searchJumperFrame-title" target="_blank" draggable="false">
                        <img width="32px" height="32px" src="${ut}" />${A("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-maxBtn">
                        <svg id="maxBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("maxAddSiteBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                        <svg id="minBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("minAddSiteBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                    </div>
                    <div class="searchJumperFrame-inputs">
                        <div class="searchJumperFrame-input-title">${A("siteName")}</div>
                        <input name="siteName" type="text" />
                        <div class="searchJumperFrame-input-title">${A("siteUrl")}</div>
                        <textarea name="url" type="text"></textarea>
                        <svg id="crawlBtn" class="sideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${A("crawlInfo")}</title><path d="M385 926.3c-11 0-21.4-4.3-29.2-12l-0.6-0.6c-0.7-0.7-65.6-70.4-108.4-112.7-42.8-42.3-118.6-111.4-119.3-112.1l-0.6-0.5c-15.9-15.7-24.6-36.6-24.5-58.8s9-43.1 25-58.6c28.6-27.7 72.2-31 104.6-8.2l90.5 44-83.1-290.1c-4.9-17.1-4.2-34.9 2.1-51.6 6.3-16.6 17.5-30.5 32.5-40.1 22-14.1 47.7-17.7 70.3-10 22.6 7.7 40.7 26.3 49.5 50.9L431 369.8V176.9c0-43.4 35.3-78.7 78.7-78.7 20.7 0 40.2 7.9 55 22.4 14.8 14.4 23.2 33.8 23.7 54.4v0.2l2.4 165.5L625 229.1l0.1-0.4c8.2-23.2 26.2-41.1 49.4-49.3 23.2-8.2 48.5-5.5 69.4 7.3 15.6 9.6 27.7 24.3 33.9 41.6s6.4 36.3 0.6 53.7L736 409.5l42.9-48.6 0.3-0.3c15.7-16.2 34.4-25.7 54.1-27.3 19.8-1.6 39.1 4.7 56 18.1 33 26.4 40.8 60.1 22.7 97.5l-0.5 1.1-0.6 1c-41.8 65.2-107.1 171.9-115.8 199-12.4 38.6-41 140.7-41.3 141.7l-0.2 0.7-34.5 107.2-0.6 1.2c-6.8 14.3-21.5 23.7-37.4 23.8l-295.9 1.6c0 0.1-0.1 0.1-0.2 0.1z"></path></svg>
                        <div class="searchJumperFrame-input-title">${A("siteDesc")}</div>
                        <textarea name="description" type="text"></textarea>
                        <div class="searchJumperFrame-input-title">${A("siteIcon")}</div>
                        <textarea name="icon" type="text"></textarea>
                        <img class="sideIcon" width="27px" height="27px" />
                    </div>
                    <div class="searchJumperFrame-inputs moreItem">
                        <div class="searchJumperFrame-input-title">${A("siteKeywords")}</div>
                        <input name="siteKeywords" placeholder="kw|key" type="text" />
                        <div class="searchJumperFrame-input-title">${A("siteMatch")}</div>
                        <input name="siteMatch" placeholder="(www|m)\\.google\\.com" type="text" />
                        <div class="searchJumperFrame-input-title">${A("openSelect")}</div>
                        <select name="openSelect">
                            <option value="-1">${A("openInDefault")}</option>
                            <option value="true">${A("openInNewTab")}</option>
                            <option value="false">${A("openInCurrent")}</option>
                        </select>
                    </div>
                    <div class="iconsCon"></div>
                    <div class="searchJumperFrame-input-title">${A("siteType")}</div>
                    <select name="typeSelect">
                    </select>
                    <div class="searchJumperFrame-buttons">
                        <button id="test" type="button">${A("siteTest")}</button>
                        <button id="cancel" type="button">${A("siteCancel")}</button>
                        <button id="add" type="button">${A("siteAdd")}</button>
                    </div>
                </div>
                <div class="searchJumperFrame-crawlBody searchJumperFrame-hide">
                    <a href="${Ae}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${ut}" />${A("addAction")}
                    </a>
                    <svg class="searchJumperFrame-closeBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close crawl</title>${Hi}</svg>
                    <div class="actionCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="input" type="button" title="${A("emuInputTips")}">${A("inputAction")}</button>
                        <button id="click" type="button" title="${A("emuClickTips")}">${A("clickAction")}</button>
                        <button id="sleep" type="button" title="${A("emuWaitTips")}">${A("sleepAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="copy" type="button" title="${A("emuCopyTips")}">${A("copyAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="record" type="button" title="${A("emuRecordTips")}">${A("recordAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="loop" type="button" title="${A("emuLoopTips")}">${A("loopAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="submitCrawl" type="button" title="${A("emuStopTips")}">${A("submitCrawl")}</button>
                    </div>
                </div>
                `),Ke||X.appendChild(p);let d=X.children[0];Yt=X.querySelector("[name='siteName']"),Bt=X.querySelector("[name='description']"),ze=X.querySelector("[name='url']"),gt=X.querySelector("[name='icon']"),Re=X.querySelector(".searchJumperFrame-inputs>img"),At=X.querySelector(".iconsCon"),tr=X.querySelector("#test"),ir=X.querySelector("#cancel"),Si=X.querySelector("#add"),$t=X.querySelector("select[name='typeSelect']"),_t=X.querySelector("[name='siteKeywords']"),Zt=X.querySelector("[name='siteMatch']"),Xt=X.querySelector("select[name='openSelect']");let f=X.querySelector(".searchJumperFrame-title"),g,u,m=!1,y=v=>{m||(X.classList.add("draging"),m=!0);let w=v.clientX-g.x+u.x,h=v.clientY-g.y+u.y;d.style.marginLeft=w+"px",d.style.marginTop=h+"px"},T=v=>{v.preventDefault(),v.stopPropagation(),X.classList.remove("draging"),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",T)};f.addEventListener("mousedown",v=>{v.preventDefault(),v.stopPropagation(),m=!1,g={x:v.clientX,y:v.clientY};let w=getComputedStyle(d);u={x:parseInt(w.marginLeft||0),y:parseInt(w.marginTop||0)},document.addEventListener("mousemove",y),document.addEventListener("mouseup",T)}),Re.onload=v=>{Re.style.display=""},X.querySelector("#maxBtn").addEventListener("click",v=>{X.classList.add("maxContent")}),X.querySelector("#minBtn").addEventListener("click",v=>{X.classList.remove("maxContent")});for(let v=0;v<c.sitesConfig.length;v++){let w=c.sitesConfig[v],h=document.createElement("option");h.value=v,ci!==""&&ci==v&&(h.selected="selected"),h.innerText=w.type,$t.appendChild(h)}tr.addEventListener("click",v=>{if(/#p{/.test(ze.value)){let w=ze.value.match(/#p{(.*)}/);if(!w)return;let h=[];w[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(C=>{if(C=C.trim(),/^loopStart\(\d+\)$/.test(C)){let I=C.match(/loopStart\((.*)\)/);h.push(["@loopStart",I[1]])}else if(C=="loopEnd")h.push(["@loopEnd",""]);else if(C.startsWith("click(")&&C.endsWith(")")){let I=C.slice(6,C.length-1);I&&h.push(["@click",I.replace(/\\([\=&])/g,"$1").trim()])}else if(C.startsWith("dblclick(")&&C.endsWith(")")){let I=C.slice(9,C.length-1);I&&h.push(["@dblclick",I.replace(/\\([\=&])/g,"$1").trim()])}else if(C.startsWith("rclick(")&&C.endsWith(")")){let I=C.slice(7,C.length-1);I&&h.push(["@rclick",I.replace(/\\([\=&])/g,"$1").trim()])}else if(C.startsWith("copy(")&&C.endsWith(")")){let I=C.slice(5,C.length-1);I&&h.push(["@copy",I.replace(/\\([\=&])/g,"$1").trim()])}else if(C.startsWith("call(")&&C.endsWith(")")){let I=C.slice(5,C.length-1);I&&h.push(["@call",I.replace(/\\([\=&])/g,"$1").trim()])}else if(C.startsWith("wait(")&&C.endsWith(")")){let I=C.slice(5,C.length-1);h.push(["@wait",I.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(C)){let I=C.match(/sleep\((.*)\)/);I&&h.push(["@sleep",I[1]])}else if(/^reload\(\d?\)$/.test(C)){let I=C.match(/reload\((.*)\)/);h.push(["@reload",I[1]])}else{C=C.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let I=C.split("SJ^PARAM");if(I.length===2){let R=I[0],z=I[1].replace(/\\([\=&])/g,"$1");h.push([R,z])}else(C.endsWith(".click()")||C.endsWith(".click"))&&h.push(["@"+C.replace(/\.click(\(\))?$/,""),"click"])}}),Ge=h,L.submitAction(h)}else/[:%]p{/.test(ze.value)||i&&i.toLowerCase()!="utf-8"?fi(i,ze.value.replace(/%se?\b/g,"searchJumper"),"_blank"):ge(ze.value.replace(/%se?\b/g,"searchJumper"),{active:!0,insert:!0})}),ir.addEventListener("click",v=>{X.parentNode&&X.parentNode.removeChild(X)}),Si.addEventListener("click",v=>{Te||Dt(()=>{let w=null;for(let h=0;h<c.sitesConfig.length;h++){let C=c.sitesConfig[h];for(let I=0;I<C.sites.length;I++){let R=C.sites[I];if(R.url==ze.value){if(h==parseInt($t.value)){alert("Already added!");return}if(window.confirm(A("siteExist")))w={name:R.name+" - "+C.type,url:`["${R.name}"]`};else return}}}w==null&&(w={name:Yt.value,url:ze.value},gt.value&&gt.value!=ze.value.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")&&(w.icon=gt.value),Bt.value&&Bt.value!=Yt.value&&(w.description=Bt.value),_t.value&&(w.keywords=_t.value),Zt.value&&(w.match=Zt.value),Xt.value&&Xt.value!="-1"&&(w.openInNewTab=Xt.value==="true"),self.charset&&i.toLowerCase()!="utf-8"&&(w.charset=self.charset),self.kwFilter&&(w.kwFilter=self.kwFilter),self.match&&(w.match=self.match),self.hideNotMatch&&(w.hideNotMatch=self.hideNotMatch)),c.sitesConfig[$t.value].sites.push(w),c.lastModified=new Date().getTime(),U.setItem("lastAddType",$t.value),U.setItem("searchData",c),Ce(A("siteAddOver")),X.parentNode&&X.parentNode.removeChild(X),window.postMessage({searchData:c,version:pt.script.version||0,command:"loadConfig"},"*"),L.refreshEngines()})}),rr=X.querySelector("#crawlBtn");let B=X.querySelector(".searchJumperFrame-closeBtn"),W=X.querySelector(".actionCon"),P=X.querySelector("#input"),H=X.querySelector("#click"),O=X.querySelector("#sleep"),Y=X.querySelector("#copy"),b=X.querySelector("#submitCrawl"),k=X.querySelector("#record"),j=X.querySelector("#loop"),M,N=(v,w="",h="")=>{let C=document.createElement("div"),I=v;switch(v){case"input":I=A("inputOutput",[w,h]);break;case"click":I=A("clickOutput",w);break;case"dblclick":I=A("dblclickOutput",w);break;case"rclick":I=A("rclickOutput",w);break;case"copy":I=A("copyOutput",w);break;case"loopStart":I=A("loopStart",h);break;case"loopEnd":I=A("loopEnd");break;case"sleep":I=A("sleepOutput",h);break;default:break}I&&(C.innerHTML=Q(I),C.dataset.type=v,C.dataset.sel=w,C.dataset.val=h,C.draggable="true",C.ondragover=R=>{R.preventDefault()},C.ondragstart=R=>{M=C},C.ondrop=R=>{W.insertBefore(M,C)},C.onclick=R=>{let z=R.target;if(z.nodeName.toUpperCase()=="SPAN")if(z.className=="element")ke.getSelector(F=>{z.innerText=F,z.title=F,X.style.display="",C.dataset.sel=F}),X.style.display="none";else{let F=prompt(A("inputNewValue"),z.innerText);F&&(z.innerText=F,z.title=F,C.dataset.val=F)}else confirm(A("deleteConfirm"))&&W.removeChild(C)},C.oncontextmenu=R=>{let z=R.target;if(z.nodeName.toUpperCase()=="SPAN")if(R.preventDefault(),z.className=="element"){let F=prompt("Selector",z.innerText);F&&(z.innerText=F,z.title=F,C.dataset.sel=F)}else{let F=prompt(A("inputNewValue"),z.innerText);F&&(z.innerText=F,z.title=F,C.dataset.val=F)}},W.appendChild(C))},G=()=>{W.innerHTML=Q();let v=ze.value.match(/#p{(.*)}/);v&&v[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(w=>{if(w=w.trim(),/^loopStart\(\d+\)$/.test(w)){let h=w.match(/loopStart\((.*)\)/);N("loopStart","",h[1])}else if(w=="loopEnd")N("loopEnd");else if(w.startsWith("click(")&&w.endsWith(")")){let h=w.slice(6,w.length-1);h&&N("click",h.replace(/\\([\=&])/g,"$1").trim())}else if(w.startsWith("dblclick(")&&w.endsWith(")")){let h=w.slice(9,w.length-1);h&&N("dblclick",h.replace(/\\([\=&])/g,"$1").trim())}else if(w.startsWith("rclick(")&&w.endsWith(")")){let h=w.slice(7,w.length-1);h&&N("rclick",h.replace(/\\([\=&])/g,"$1").trim())}else if(w.startsWith("copy(")&&w.endsWith(")")){let h=w.slice(5,w.length-1);h&&N("copy",h.replace(/\\([\=&])/g,"$1").trim())}else if(w.startsWith("call(")&&w.endsWith(")")){let h=w.slice(5,w.length-1);h&&N("call","",h.replace(/\\([\=&])/g,"$1").trim())}else if(w.startsWith("wait(")&&w.endsWith(")")){let h=w.slice(5,w.length-1);h&&N("wait","",h.replace(/\\([\=&])/g,"$1").trim())}else if(w.startsWith("open(")&&w.endsWith(")")){let h=w.slice(5,w.length-1);h&&N("open","",h.replace(/\\([\=&])/g,"$1").trim())}else if(/^sleep\(\d+\)$/.test(w)){let h=w.match(/sleep\((.*)\)/);h&&N("sleep","",h[1])}else if(/^reload\(\d?\)$/.test(w)){let h=w.match(/reload\((.*)\)/);N("reload","",h[1])}else{w=w.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let h=w.split("SJ^PARAM");h.length===2?N("input",h[0],h[1].replace(/\\([\=&])/g,"$1")):(w.endsWith(".click()")||w.endsWith(".click"))&&N("click",w.replace(/\.click(\(\))?$/,""))}})},ue=()=>{let v=[];return[].forEach.call(W.children,w=>{if(!w)return;let h=w.dataset.sel,C=w.dataset.val||"";switch(w.dataset.type){case"click":v.push(`click(${h.replace(/([=&])/g,"\\$1")})`);break;case"dblclick":v.push(`dblclick(${h.replace(/([=&])/g,"\\$1")})`);break;case"rclick":v.push(`rclick(${h.replace(/([=&])/g,"\\$1")})`);break;case"copy":v.push(`copy(${h.replace(/([=&])/g,"\\$1")})`);break;case"input":v.push(`${h.replace(/([=&])/g,"\\$1")}=${C}`);break;case"sleep":v.push(`sleep(${C})`);break;case"loopEnd":v.push("loopEnd");break;default:v.push(`${w.dataset.type}(${C.replace(/([=&])/g,"\\$1")})`);break}}),v.join("&")};rr.addEventListener("click",v=>{G(),X.classList.add("crawling")}),B.addEventListener("click",v=>{X.classList.remove("crawling")});let te,ie,S=v=>{X.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(v.target.nodeName)||(clearTimeout(ie),ie=setTimeout(()=>{N("click",ke.geneSelector(v.target,!0))},300)))},J=v=>{X.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(v.target.nodeName)||(clearTimeout(ie),N("dblclick",ke.geneSelector(v.target,!0))))},D=v=>{X.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(v.target.nodeName)||(v.preventDefault(),clearTimeout(ie),N("rclick",ke.geneSelector(v.target,!0))))},_=v=>{X.style.display!==""&&N("input",ke.geneSelector(v.target,!0),v.target.value)},ee=v=>{if(X.style.display==="")return;let w=!1;v.keyCode==27?w=!0:v.keyCode==13&&(v.preventDefault(),v.stopPropagation(),v.target&&v.target.blur&&v.target.blur(),w=!0),w&&(X.style.display="",document.removeEventListener("keydown",ee,!0),document.removeEventListener("click",S),document.removeEventListener("dblclick",J),document.removeEventListener("contextmenu",D),document.removeEventListener("change",_))};k.addEventListener("click",v=>{alert(A("startRecord")),X.style.display="none",setTimeout(()=>{document.addEventListener("keydown",ee,!0),document.addEventListener("click",S),document.addEventListener("dblclick",J),document.addEventListener("contextmenu",D),document.addEventListener("change",_)},100)});let ne=!1;j.addEventListener("click",v=>{if(ne)N("loopEnd"),j.innerText=A("loopAction");else{let w=prompt(A("loopTimes"),1);if(!w)return;N("loopStart","",w||"1"),j.innerText=A("loopActionEnd")}ne=!ne}),P.addEventListener("click",v=>{ke.getSelector(w=>{N("input",w,"%s"),X.style.display=""},!ne),X.style.display="none"}),Y.addEventListener("click",v=>{ke.getSelector(w=>{N("copy",w,"%s"),X.style.display=""},!ne),X.style.display="none"}),H.addEventListener("dblclick",v=>{clearTimeout(ie),v.preventDefault(),v.stopPropagation(),ke.getSelector(w=>{N("dblclick",w),X.style.display=""},!ne),X.style.display="none"}),H.addEventListener("contextmenu",v=>{clearTimeout(ie),v.preventDefault(),v.stopPropagation(),ke.getSelector(w=>{N("rclick",w),X.style.display=""},!ne),X.style.display="none"}),H.addEventListener("click",v=>{clearTimeout(ie),ie=setTimeout(()=>{ke.getSelector(w=>{N("click",w),X.style.display=""},!ne),X.style.display="none"},250)}),O.addEventListener("click",v=>{let w=prompt(A("sleepPrompt"),1e3);w=w&&parseInt(w),w&&N("sleep","",w)}),b.addEventListener("click",v=>{let w=ue();w&&(ze.value=location.href+"#p{"+w+"}"),X.classList.remove("crawling")}),X.addEventListener("keydown",v=>{v.keyCode==13&&v.target&&v.target.nodeName=="INPUT"&&Si.click()})}L.addToShadow(X),_t.value="",Zt.value="",Yt.value=l||"",Bt.value=e||"",ze.value=t||"",r&&r[0]?(Re.style.display="",t.indexOf(location.origin)===0?(Re.onerror=o=>{Re.onerror=null,gt.value=r[0],Re.src=r[0]},Re.src=location.origin+"/favicon.ico"):(gt.value=r[0],Re.src=r[0])):(Re.style.display="none",Re.src=(/^(showTips:)?https?:/.test(t)?t.split(`
`)[0].replace(/\?.*/,"").replace(/^(showTips:)?(https?:\/\/[^\/]+).*/,"$2"):location.origin)+"/favicon.ico"),At.innerHTML=Q(),r&&r.length>1?(At.style.opacity="",r.forEach(o=>{let p=document.createElement("img");p.src=o,p.addEventListener("click",d=>{gt.value=o,Re.src=o}),p.onload=d=>{p.title=p.naturalWidth+" x "+p.naturalHeight+`
`+o.replace(/.*\/([^\/]+)/,"$1")},At.appendChild(p)})):At.style.opacity=0}function Mr(){let l=document.createElement("a");l.download="searchJumperCache.json",l.target="_blank";let e=[JSON.stringify({sortTypeNames:Le,cacheIcon:be,sortSiteNames:Pe},null,4)],t=new Blob(e,{type:"application/json"});l.href=window.URL.createObjectURL(t),l.click()}function Nr(l){l.cacheIcon&&(be=l.cacheIcon,U.setItem("cacheIcon",be),Je=[],c.prefConfig.cacheSwitch=!0,U.setItem("searchData",c)),l.sortTypeNames&&(Le=l.sortTypeNames,U.setItem("sortTypeNames",Le)),l.sortSiteNames&&(Pe=l.sortSiteNames,U.setItem("sortSiteNames",Pe))}function sr(l,e){Be({method:"GET",url:l,headers:{referer:l,origin:l},onload:t=>{let r=t&&t.responseXML&&t.responseXML.querySelector('Url[type="text/html"]');if(!r){e("error",t);return}let i=t.responseXML.querySelector("ShortName"),a=t.responseXML.querySelector("Description"),n=t.responseXML.querySelector("Image"),s=t.responseXML.querySelector("InputEncoding"),o=r.querySelectorAll("Param"),p=i&&i.textContent,d=a&&a.textContent,f=r.getAttribute("template"),g=n&&n.textContent,u=s&&s.textContent;if(o.length>0){let m=[];[].forEach.call(o,y=>{m.push(`${y.getAttribute("name")}=${y.getAttribute("value")}`)}),f+=`%p{${m.join("&")}}`}Qt(p,d,f.replace(/{searchTerms\??}/g,"%s").replace(/{startPage\??}/g,"1").replace(/{count\??}/g,"10").replace(/{startIndex\??}/g,"1").replace(/{startPage\??}/g,"1").replace(/{language\??}/g,"*").replace(/{inputEncoding\??}/g,"UTF-8").replace(/{outputEncoding\??}/g,"UTF-8"),[g],u),e("load",t)},onerror:t=>{e("error",t)},ontimeout:t=>{e("error",t)}})}function Br(){if(location.hostname!=="mycroftproject.com")return;Me(`
                 .searchJumper-loading {
                     animation-name: changeScale;
                     animation-duration: 2.5s;
                     animation-iteration-count: infinite;
                 }
                 @keyframes changeScale {
                     0% {
                         -webkit-transform:rotate(0deg) scale(1);
                         -moz-transform:rotate(0deg) scale(1);
                         transform:rotate(0deg) scale(1);
                     }
                     50% {
                         -webkit-transform:rotate(180deg) scale(1.5);
                         -moz-transform:rotate(180deg) scale(1.5);
                         transform:rotate(180deg) scale(1.5);
                     }
                     100% {
                         -webkit-transform:rotate(360deg) scale(1);
                         -moz-transform:rotate(360deg) scale(1);
                         transform:rotate(360deg) scale(1);
                     }
                 }
            `);let l=()=>{let t=document.querySelectorAll("img.icon~a[href^='/install']");if(t.length<=0)return;let r=!1;[].forEach.call(t,i=>{if(i.previousElementSibling&&i.previousElementSibling.classList.contains("searchJumperIcon")||i.previousElementSibling&&i.previousElementSibling.previousElementSibling&&i.previousElementSibling.previousElementSibling.classList.contains("searchJumperIcon"))return;let a=i.href.match(/\?id=(\d+)&basename=(.+?)&/);if(a===null)return;let n=document.createElement("img");n.className="icon searchJumperIcon",n.style.cssText="border: 1px solid #4c4c4c; border-radius: 9px; box-sizing: border-box; margin-right: 4px; cursor: pointer;",n.title="Add to SearchJumper",n.src=ut,i.parentNode.insertBefore(n,i),n.onclick=s=>{r||(r=!0,n.classList.add("searchJumper-loading"),sr(`https://mycroftproject.com/installos.php/${a[1]}/${a[2]}.xml`,(o,p)=>{r=!1,n.classList.remove("searchJumper-loading"),o!="load"&&Ce(p.statusText||p.error)}))}})};l();let e=setInterval(()=>{l()},1e3);window.addEventListener("load",t=>{clearInterval(e),l()})}function Ar(){L=new yr}function $r(){if(et){if(L.appendBar(),L.showAllSites(),setTimeout(()=>{L.con.style.zIndex=0},5),location.hash){let l=location.hash.slice(1);try{l=decodeURIComponent(l)}catch{}L.searchJumperInputKeyWords.value=l}else if(location.search){let l=location.search.slice(1).split("&"),e,t,r;l.forEach(i=>{let a=i.split("="),n=a[0],s=a[1];try{s=decodeURIComponent(s)}catch{}switch(n){case"kw":e=s;break;case"engine":t=s;break;case"self":r=s;break}}),e&&(L.searchJumperInputKeyWords.value=e||""),t&&L.searchBySiteName(t,{},!!r)}if(V(document).style.cssText=`
                    zoom: 1;
                    margin: 0;
                    padding: 0;
                    width: 100vw;
                    height: 100vh;
                    background-position: center 0;
                    background-repeat: no-repeat;
                    background-size: cover;
                    -webkit-background-size: cover;
                    -o-background-size: cover;
                    overflow: hidden;
                `,c.prefConfig.bgUrl&&(_e=c.prefConfig.bgUrl,_e.length)){V(document).style.backgroundImage=`url("${_e}")`;return}U.getItem("allPageBg",l=>{l?(_e=l.url,V(document).style.backgroundImage=`url("${l.base64||_e}")`):l={url:""},Be({method:"GET",url:"https://global.bing.com/HPImageArchive.aspx?format=js&idx=0&pid=hp&video=1&n=1",onload:function(e){var t=null;try{t=JSON.parse(e.responseText);var r=t.images[0].url;if(/^https?:\/\//.test(r)||(r="https://global.bing.com"+r),_e=r,r==l.url)return;Be({method:"GET",url:r,responseType:"blob",onload:function(i){var a=i.response,n=new FileReader;n.readAsDataURL(a),n.onload=function(s){var o=s.target.result;l={url:r,base64:o},U.setItem("allPageBg",l)}}}),l.base64||(V(document).style.backgroundImage=`url("${r}")`)}catch(i){console.log(i)}}})})}}async function Wr(){await L.initRun(),kr(),$r()}async function $e(l){await new Promise(e=>{setTimeout(()=>{e()},l)})}async function Dr(){let l=await new Promise(e=>{U.getItem("searchData",t=>{e(t)})});Ee=await new Promise(e=>{U.getItem("cacheKeywords",t=>{e(t||"")})}),xt=await new Promise(e=>{U.getItem("cacheFilter",t=>{e(t||"")})}),li=await new Promise(e=>{U.getItem("disableState",t=>{e(t||!1)})}),tt=await new Promise(e=>{U.getItem("tipsStorage",t=>{e(t||[])})}),Tt=await new Promise(e=>{U.getItem("lastSign",t=>{e(t||!1)})}),U.setItem("lastSign",!1),Ge=await U.getListItem("inPagePostParams",location.hostname),be=await new Promise(e=>{U.getItem("cacheIcon",t=>{e(t||{})})}),Ve=await new Promise(e=>{U.getItem("historySites",t=>{e(t||[])})}),kt=await new Promise(e=>{U.getItem("historyType",t=>{e(t||"")})}),Le=await new Promise(e=>{U.getItem("sortTypeNames",t=>{e(t||{})})}),Pe=await new Promise(e=>{U.getItem("sortSiteNames",t=>{e(t||{})})}),Ne=await new Promise(e=>{U.getItem("globalInPageWords",t=>{e(t||"")})}),Ye=await new Promise(e=>{U.getItem("navEnable",t=>{e(typeof t>"u"?!0:t)})}),zt=await new Promise(e=>{U.getItem("referrer",t=>{e(t||"")})}),Rt=await new Promise(e=>{U.getItem("disableHighlight",t=>{e(t||"")})}),zi=await new Promise(e=>{U.getItem("lastHighlight",t=>{e(t||"")})}),Ri=await new Promise(e=>{U.getItem("allPageNewMode",t=>{e(t||!1)})}),ci=await new Promise(e=>{U.getItem("lastAddType",t=>{e(t||"")})}),l&&(c=l,jt=c.lastModified),c.lastModified||(c.sitesConfig=sitesConfig),c.prefConfig.lang&&c.prefConfig.lang!="0"&&(Fe=c.prefConfig.lang),$i(),c.prefConfig.firstRun&&U.supportCrossSave()&&(c.prefConfig.firstRun=!1,U.setItem("searchData",c),setTimeout(()=>{U.getItem("searchData",e=>{e.prefConfig.firstRun===!1&&ge(Bi,{active:!0,insert:!0})})},100)),typeof c.prefConfig.customSize>"u"&&(c.prefConfig.customSize=100),typeof c.prefConfig.tilesZoom>"u"&&(c.prefConfig.tilesZoom=100),typeof c.prefConfig.tipsZoom>"u"&&(c.prefConfig.tipsZoom=100),typeof c.prefConfig.typeOpenTime>"u"&&(c.prefConfig.typeOpenTime=250),typeof c.prefConfig.longPressTime>"u"&&(c.prefConfig.longPressTime=500),typeof c.prefConfig.cacheSwitch>"u"&&(c.prefConfig.cacheSwitch=!1),typeof c.prefConfig.noIcons>"u"&&(c.prefConfig.noIcons=!1),typeof c.prefConfig.noAni>"u"&&(c.prefConfig.noAni=!1),typeof c.prefConfig.quickAddRule>"u"&&(c.prefConfig.quickAddRule=!0),typeof c.prefConfig.multiline>"u"&&(c.prefConfig.multiline=2),typeof c.prefConfig.multilineGap>"u"&&(c.prefConfig.multilineGap=1e3),typeof c.prefConfig.historyLength>"u"&&(c.prefConfig.historyLength=0),typeof c.prefConfig.dragToSearch>"u"&&(c.prefConfig.dragToSearch=!0),typeof c.prefConfig.firstFiveWordsColor>"u"&&(c.prefConfig.firstFiveWordsColor=[]),typeof c.prefConfig.inPageWordsStyles>"u"&&(c.prefConfig.inPageWordsStyles=[]),typeof c.prefConfig.rightMouse>"u"&&(c.prefConfig.rightMouse=!0),typeof c.prefConfig.mouseLeaveToHide>"u"&&(c.prefConfig.mouseLeaveToHide=!0),typeof c.prefConfig.currentTypeFirst>"u"&&(c.prefConfig.currentTypeFirst=!0),typeof c.prefConfig.disableAddon>"u"&&(c.prefConfig.disableAddon={}),typeof c.prefConfig.suggestType>"u"&&(Fe==="zh-CN"?c.prefConfig.suggestType="baidu":c.prefConfig.suggestType="google"),typeof c.prefConfig.syncBuild>"u"&&(c.prefConfig.syncBuild=!0),c.prefConfig.minSizeMode&&(c.prefConfig.disableAutoOpen=!1,c.prefConfig.disableTypeOpen=!1),c.prefConfig.configPage?Ae=c.prefConfig.configPage:c.prefConfig.configPage=Ae}function ei(l,e){return l==="*"||l.length==0&&e.length==0?!0:l.length>1&&l[0]=="*"&&e.length==0?!1:l.length>1&&l[0]=="?"||l.length!=0&&e.length!=0&&l[0]==e[0]?ei(l.substring(1),e.substring(1)):l.length>0&&l[0]=="*"?ei(l.substring(1),e)||ei(l,e.substring(1)):!1}if(de.indexOf("#searchJumperMin")!=-1)if(Oi=!0,de.indexOf("#searchJumperMinPost")!=-1)window.history.replaceState(null,"",de.replace(/#searchJumperMin(Post)?/,""));else{if(de.indexOf("#searchJumperMinMobile")!=-1){Object.defineProperty(Object.getPrototypeOf(navigator),"userAgent",{get:function(){return Ni}}),Be({method:"GET",url:location.href,headers:{referer:location.href,"User-Agent":Ni},onload:function(l){document.open(),document.write(l.response),document.close()},onerror:function(){},ontimeout:function(){}});return}window.history.replaceState(null,"",location.href.replace(/#searchJumperMin(Mobile)?/,""))}if(document.title=="SearchJumper Multi")return;var ar=!1,Ci,Ti,yt;async function ki(l){if(ar){l&&l();return}if(ar=!0,Ir(),await Dr(),!li){if(c.prefConfig.blacklist&&c.prefConfig.blacklist.length>0){let e=!1;for(let t=0;t<c.prefConfig.blacklist.length;t++){let r=c.prefConfig.blacklist[t];if(r&&r.indexOf("//")!=0){if(e){/\*\/$/.test(r)&&(e=!1);continue}if(r.indexOf("/*")==0){e=!0;continue}if(r.indexOf("/")==0){let i=r.match(/^\/(.*)\/(\w*)$/);if(i&&new RegExp(i[1],i[2]).test(de))return}else if(ei(r,de))return}}}Ar(),await Er(),Br(),Wr(),l&&l(),yt=document.title}}function Jr(){if(document.hidden){if(L)L.closeShowAll();else return;if(!c.prefConfig.globalSearchNow)return;Ci=setInterval(async()=>{let l=Ne;Ne=await U.getItem("globalInPageWords"),(l||"")!=(Ne||"")&&(L.refreshPageWords(),L.navMarks.innerHTML&&(clearInterval(Ci),clearInterval(Ti),yt=document.title,Ti=setInterval(()=>{document.title=document.title==yt?"\u{1F6A9}":yt},500)))},parseInt(500+Math.random()*500));return}ki(async()=>{(at||c.prefConfig.syncBuild)&&(c=await U.getItem("searchData"),L&&c.lastModified&&jt!=c.lastModified&&(L.refreshEngines(),document.dispatchEvent(new Event("dataChanged"))));let l=Ne||"";U.getItem("globalInPageWords",t=>{Ne=t||"",l!=Ne&&L&&L.refreshPageWords()});let e=Ye||!1;U.getItem("navEnable",t=>{Ye=typeof t>"u"?!0:t,e!=Ye&&L&&L.refreshNav()})})}var Ii=!1;function zr(){!document.head||!V(document)||St||li||(c.prefConfig.globalSearchNow&&(clearInterval(Ci),clearInterval(Ti),document.hidden?yt=document.title:yt&&(document.title=yt)),!Ii&&(Ii=!0,setTimeout(()=>{Jr(),Ii=!1},500)))}U.getItem("postUrl",l=>{if(l&&l[0].indexOf(location.hostname.replace(/.*\.(\w+\.\w+)/,"$1"))!=-1)U.setItem("postUrl",""),fi(l[1],l[0],"_self");else{if(document.head&&V(document))ki();else{let e=()=>{document.head&&V(document)?ki():setTimeout(()=>{e()},10)};e()}document.addEventListener("visibilitychange",zr)}})}if(document&&document.documentElement)Ai();else{let Fe=()=>{document&&document.documentElement?Ai():setTimeout(()=>{Fe()},10)};Fe()}})();
