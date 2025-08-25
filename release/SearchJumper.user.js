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
(async function(){"use strict";const ye=typeof unsafeWindow>"u"?window:unsafeWindow;if(ye.searchJumperInited)return;ye.searchJumperInited=!0;const or=navigator&&navigator.clipboard,Ct=window.top!==window.self;if(Ct)try{if(window.self.innerWidth===0&&window.self.innerHeight===0){if(await new Promise(Ue=>{window.addEventListener("load",Di=>{setTimeout(()=>{Ue(window.self.innerWidth<300||window.self.innerHeight<300)},500)})}))return}else if(window.self.innerWidth<300||window.self.innerHeight<300)return}catch{return}const Bi=/^https:\/\/github\.com\/hoothin\/SearchJumper(\/(issue|discussions)|\/?$|#|\?)|^https:\/\/greasyfork\.org\/.*\/scripts\/445274[\-\/].*\/discussions/i,Ai="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",at="https://search.hoothin.com/",lr="https://hoothin.github.io/SearchJumper",$i=at+"firstRun";let Qe=at+"config/",et=!1,c={};c.sitesConfig=sitesConfig,c.prefConfig={position:{x:"left",y:"top"},offset:{x:"0",y:"0"},firstRun:!0,openInNewTab:!1,enableInPage:!0,altKey:!1,ctrlKey:!0,shiftKey:!1,metaKey:!1,autoClose:!1,autoDelay:1e3,shortcut:!0,initShow:!1,alwaysShow:!1,customSize:100,tilesZoom:100,tipsZoom:100,typeOpenTime:250,longPressTime:500,noIcons:!1,showSiteLists:!0,alwaysShowSiteLists:!1,cacheSwitch:!1,noAni:!1,quickAddRule:!0,multiline:2,multilineGap:1e3,historyLength:0,dragToSearch:!0,hideDragHistory:!1,sortType:!1,sortSite:!1,autoHide:!1,autoHideAll:!1,showCurrent:!0,shortcutKey:"Backquote",showInSearchEngine:!1,showInSearchJumpPage:!0,limitInPageLen:1,limitPopupLen:1,ignoreWords:["a","in","into","the","to","on","among","between","and","an","of","by","with","about","under","or","at","as"],inPageRule:{},firstFiveWordsColor:[],inPageWordsStyles:[],altToHighlight:!0,defaultPicker:!1,disableInputOnWords:!1,disableTypeOpen:!1,callBarAlt:!1,callBarCtrl:!1,callBarShift:!1,callBarMeta:!1,defaultFindTab:!0,disableAutoOpen:!1,hideOnSearchEngine:!1,minSizeMode:!1,hidePopup:!1,minPopup:0,selectToShow:!1,expandType:!1,rightMouse:!0,shiftLastUsedType:!0,mouseLeaveToHide:!0,currentTypeFirst:!0,switchSitesPreKey:"ArrowLeft",switchSitesNextKey:"ArrowRight",switchSitesCtrl:!0,switchSitesAlt:!1,switchSitesShift:!0,switchSitesMeta:!1};function Wi(){let Fe=navigator.appName==="Netscape"?navigator.language:navigator.userLanguage,Ue={};function Di(){switch(Fe){case"zh-CN":case"zh-SG":Ue={import:"\u5BFC\u5165",filter:"\u7B5B\u9009",selectAll:"\u5168\u9009",importOrNot:"\u662F\u5426\u5BFC\u5165\u914D\u7F6E\uFF1F",settings:"\u914D\u7F6E\u811A\u672C",batchOpen:"\u6279\u91CF\u6253\u5F00",batchOpenConfirm:"\u786E\u5B9A\u8981\u6279\u91CF\u6253\u5F00\u5417\uFF1F",postOver:"\u53D1\u9001\u6210\u529F\uFF1A",postError:"\u53D1\u9001\u5931\u8D25\uFF1A",copyOver:"\u590D\u5236\u6210\u529F",keywords:"\u8BF7\u8F93\u5165\u641C\u7D22\u8BCD",targetUrl:"\u8BF7\u8F93\u5165\u641C\u7D22URL",siteName:"\u7AD9\u540D",siteDesc:"\u63CF\u8FF0",siteUrl:"\u5730\u5740",siteIcon:"\u56FE\u6807",siteTest:"\u6D4B\u8BD5",siteCancel:"\u53D6\u6D88",siteAdd:"\u6DFB\u52A0",siteType:"\u5206\u7C7B",siteExist:"\u5DF2\u5B58\u5728\u76F8\u540C\u89C4\u5219\uFF0C\u662F\u5426\u6DFB\u52A0\u4E3A\u514B\u9686\u9879\uFF1F",siteAddOver:"\u7AD9\u70B9\u6DFB\u52A0\u6210\u529F",multiline:"\u662F\u5426\u4EE5\u6362\u884C\u7B26\u5206\u9694\u591A\u884C\u641C\u7D22\uFF1F",multilineTooMuch:"\u884C\u6570\u8D85\u8FC710\u884C\uFF0C\u662F\u5426\u7EE7\u7EED\u641C\u7D22\uFF1F",inputPlaceholder:"\u7B5B\u9009\u5F15\u64CE",inputTitle:"\u7B5B\u9009\u5F15\u64CE\uFF0C\u652F\u6301 * ? \u901A\u914D\u7B26\uFF0C$\u4EE3\u8868\u672B\u5C3E\uFF0C^\u4EE3\u8868\u5F00\u5934\uFF0C\u5206\u7EC4**\u7AD9\u70B9 \u53EF\u7B5B\u9009\u6307\u5B9A\u5206\u7EC4\uFF0C\u4F8B\u5982 \u56FE\u7247**baidu\uFF0Ctab \u4E0B\u4E00\u9879",inputKeywords:"\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",inPageTips:`\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF1A$c \u52A0\u5206\u9694\u7B26\uFF0C\u4F8B\u5982 $c| search | jumper\uFF0C\u9ED8\u8BA4\u7A7A\u683C\u4F5C\u4E3A\u5206\u9694\u7B26
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
Left-click keyword to jump to the next, right-click keyword to jump to the previous`,inPagePlaceholder:"Input text, press Enter to find in the page",pickerBtn:"Pick a element",multiPickerBtn:"Pick a element, pick multi elements with Ctrl or Command",editBtn:"Edit search text",emptyBtn:"Empty search text",copyInPageBtn:"Copy search text",wordModeBtn:"Word mode",copyEleBtn:"Copy selected elements",openLinkBtn:"Open selected links",maxEleBtn:"Expand selected elements",minEleBtn:"Collapse selected elements",expandAll:"Expand All",collapseAll:"Collapse All",rename:"Rename",recoverBtn:"Recover find text",pinBtn:"Pin search text to search in all tabs",locBtn:"Sidebar to locate",filterSites:"Search engines",searchInPage:"Find in page",removeBtn:"Remove search term",saveRuleBtn:"Save the search term of the current site",wordContent:"Search word content",wordHide:"Hide parent element",wordHideTips:"Element depth, 0 means the current",wordStyle:"Search word style",wordTitle:"Search word annotation",re:"RegExp",ignoreCase:"Ignore case",filterLink:"Filter link",modify:"Modify",cancel:"Cancel",modifyWord:"Modify search word",addSearchEngine:"Add search engine",noValidItemAsk:"No valid element found, do you want to manually edit the rule and add it?",expand:"Expand other sites",add:"Add",addWord:"Add new word",wordRange:"Effective range",customInputFrame:"Custom search parameters",customSubmit:"Submit",finalSearch:"Target search string",search:"Search this",siteKeywords:"Keywords(split by |)",siteMatch:"Regexp to match site URL",openSelect:"Open option",openInDefault:"Default",openInNewTab:"Open a new tab",openInCurrent:"Open in current",currentType:"Current",maxAddSiteBtn:"Maximize",minAddSiteBtn:"Restore",addAction:"Add Actions",crawlInfo:"Analog input search",inputAction:"Input",clickAction:"Click",sleepAction:"Wait",copyAction:"\u{1F4C4}Copy element",submitCrawl:"\u2611\uFE0FComplete operation",inputOutput:'Input <span title="#t2#">#t2#</span> in the element <span title="#t1#" class="element">#t1#</span>',clickOutput:'Click on element <span title="#t#" class="element">#t#</span>',dblclickOutput:'Double click <span title="#t#" class="element">#t#</span>',rclickOutput:'Right click <span title="#t#" class="element">#t#</span>',copyOutput:'Copy element <span title="#t#" class="element">#t#</span>',sleepOutput:'Sleep for <span title="#t#">#t#</span> milliseconds',inputNewValue:"Please enter a new value",deleteConfirm:"Are you sure you want to delete this item? ",sleepPrompt:"Wait time (milliseconds)",startCache:"Start cache icons of engines, do not close this page!",cacheOver:"All icons cached!",cspDisabled:"The style of SearchJumper is blocked by the CSP of current site, please try to install the Allow CSP: Content-Security-Policy extension to obtain permission",template:'Please set the value of "#t#"',recordAction:"\u23FA\uFE0FRecord operation",startRecord:"Start to record operation, press Enter to end",loopAction:"\u{1F501}Start loop",loopActionEnd:"\u23F9\uFE0FStop loop",loopStart:'Start loop <span title="#t#">#t#</span> times',loopEnd:"Stop loop",loopTimes:"Number of loops, all matching elements will be traversed and executed sequentially",loadingCollection:"Preparing collection for SearchJumper...",emuInputTips:"Enter search terms in specified page elements (such as input boxes)",emuClickTips:"Click on a specified page element (such as a button)",emuWaitTips:"Wait for a while before continuing, useful when an operation takes a while to complete",emuCopyTips:"Copy the text of the specified element to the clipboard",emuRecordTips:"Record the next clicks and input operations",emuLoopTips:"Start the loop, the next operation will traverse all found elements and repeat the specified number of times",emuStopTips:"End the operation and generate rules"};break}}function B(l,e){return Ue[l]?e?Ue[l].replace(/#t#/g,e).replace(/#t1#/g,e[0]).replace(/#t2#/g,e[1]):Ue[l]:l}const Dt="ontouchstart"in document.documentElement;var cr=!0,pe=(l,e)=>{cr&&console.log(`%c\u3010SearchJumper v.${ht.script.version}\u3011 ${e||"debug"}`,"color: orange;font-size: large;font-weight: bold;",l)},Ke=!1,nt=!1,si;function ee(l=""){return ai?ai.createHTML(l):l}var Be,ot,Ce,Re,ge,Me,ht,qe;if(typeof GM_xmlhttpRequest<"u")Be=GM_xmlhttpRequest,qe=!0;else if(typeof GM<"u"&&typeof GM.xmlHttpRequest<"u")Be=GM.xmlHttpRequest,qe=!0;else{let l;Be=e=>{fetch(e.url,{method:e.method||"GET",body:e.data,headers:e.headers}).then(t=>(l=t,e.responseType==="blob"?t.blob():t.text())).then(t=>{let r=document.implementation.createHTMLDocument("");r.documentElement.innerHTML=ee(t),e.onload&&e.onload({status:l.status,response:t,responseXML:r})}).catch(t=>e.onerror&&e.onerror(t))}}qe?qe=async(l,e)=>l?(si=l,new Promise((t,r)=>{let i=e&&/^post$/i.test(e.method),a={method:e&&e.method||"GET",url:l,headers:e&&e.headers||{referer:l,origin:l,"Content-Type":i?"application/x-www-form-urlencoded":"","X-Requested-With":i?"XMLHttpRequest":""},onload:function(n){if(si!=l)return;let s=n.response;(n.status>=400||!s)&&(s=""),t({text:()=>new Promise(d=>{d(s)}),json:()=>new Promise(d=>{try{d(JSON.parse(s))}catch{d(null)}}),finalUrl:n.finalUrl||l})},onerror:function(n){pe(n),r(n)},ontimeout:function(n){pe(n),r(n)}};e&&e.body&&(a.data=e.body),e&&e.responseType==="stream"&&(a.responseType="stream",delete a.onload,a.onloadstart=n=>{if(!n||!n.response||!n.response.getReader)return;let s=[],o,p;const d=n.response.getReader();let m=()=>{let g="";try{return p&&(g=p.trim(),/^data:/.test(g)?g="["+g.replace(/^data:\s+\[DONE\]\s*/m,"").trim().replace(/\n+/g,`
`).split(`
`).map(u=>u.replace(/^data:/,"")).join(",")+"]":/^({.*} *\n)* *{.*}$/.test(g)?g=g.split(`
`).pop():/^\[[\s\S]+[^\]]$/.test(g)&&(g=g+"]")),JSON.parse(g)}catch{return null}};d.read().then(function g({done:u,value:f}){if(si==l){if(u){t({text:p,json:m,finalUrl:n.finalUrl||l});return}s=e.streamMode==="standalone"?Array.from(f):s.concat(Array.from(f));try{p=new TextDecoder("utf-8").decode(new Uint8Array(s)),e.onstream({text:p,json:m,finalUrl:n.finalUrl||l})}catch(y){console.log(y)}return d.read().then(g)}})}),Be(a)})):null:qe=fetch,Ct?ot=(l,e)=>{}:typeof GM_registerMenuCommand<"u"?ot=GM_registerMenuCommand:typeof GM<"u"&&typeof GM.registerMenuCommand<"u"?ot=GM.registerMenuCommand:ot=(l,e)=>{},typeof GM_openInTab<"u"?ge=GM_openInTab:typeof GM<"u"&&typeof GM.openInTab<"u"?ge=GM.openInTab:ge=(l,e)=>{window.open(l)},typeof GM_notification<"u"?Ce=l=>GM_notification({text:l,onclick:e=>ge(Qe,{active:!0})}):typeof GM<"u"&&typeof GM.notification<"u"?Ce=l=>GM.notification({text:l,onclick:e=>ge(Qe,{active:!0})}):Ce=l=>{},typeof GM_setClipboard<"u"?Re=GM_setClipboard:typeof GM<"u"&&typeof GM.setClipboard<"u"?Re=GM.setClipboard:Re=(l,e)=>{try{or.writeText(l).then(()=>{console.log("Text copied to clipboard")}).catch(t=>{document.execCommand("copy"),console.error("Failed to copy text: ",t)})}catch{document.execCommand("copy")}},Me=l=>{if(l=l.replace(/\n\s*/g,""),typeof GM_addStyle<"u")return GM_addStyle(l);{let e=document.createElement("style");return e.innerHTML=ee(l),document.head.appendChild(e),e}},typeof GM_info<"u"?ht=GM_info:typeof GM<"u"&&typeof GM.info<"u"?ht=GM.info:ht={script:{name:"SearchJumper",version:0}},ye.searchJumperAddons||(ye.searchJumperAddons=[]);const Jt=document.referrer;let de=location.href.slice(0,500);var U={supportGM:typeof GM_getValue=="function"&&typeof GM_getValue("a","b")<"u",supportGMPromise:typeof GM<"u"&&typeof GM.getValue=="function"&&typeof GM.getValue("a","b")<"u",supportCrossSave:function(){return this.supportGM||this.supportGMPromise},listItemCache:[],mxAppStorage:(function(){try{return window.external.mxGetRuntime().storage}catch{}})(),operaUJSStorage:(function(){try{return window.opera.scriptStorage}catch{}})(),setItem:function(l,e){this.supportGMPromise?(GM.setValue(l,e),e===""&&typeof GM<"u"&&typeof GM.deleteValue<"u"&&GM.deleteValue(l)):this.supportGM?(GM_setValue(l,e),e===""&&typeof GM_deleteValue<"u"&&GM_deleteValue(l)):this.operaUJSStorage?this.operaUJSStorage.setItem(l,e):this.mxAppStorage?this.mxAppStorage.setConfig(l,e):window.localStorage&&window.localStorage.setItem(l,e)},getItem:async function(l,e){var t;return this.supportGMPromise?t=await GM.getValue(l):this.supportGM?t=GM_getValue(l):this.operaUJSStorage?t=this.operaUJSStorage.getItem(l):this.mxAppStorage?t=this.mxAppStorage.getConfig(l):window.localStorage&&(t=window.localStorage.getItem(l)),e&&e(t),t},getListItem:async function(l,e){var t=this.listItemCache[l];if(typeof t>"u"&&(t=await this.getItem(l),this.listItemCache[l]=t||null),!t)return null;for(var r=0;r<t.length;r++){let i=t[r];if(i.k==e)return i.v}return null},setListItem:async function(l,e,t){var r=this.listItemCache[l];typeof r>"u"&&(r=await this.getItem(l)),r||(r=[]),r=r.filter(i=>i&&i.k!=e),t&&(r.unshift({k:e,v:t}),r.length>50&&r.pop()),this.setItem(l,r),this.listItemCache[l]=r}};class pr{constructor(e,t,r){this.webDAVUrl=e,this.username=t,this.password=r}init(){this.inited||(this.inited=!0,this.auth=btoa(`${this.username}:${this.password}`))}request(e,t,r,i,a,n){{this.init();let s=this.webDAVUrl+r,o={referer:s,origin:s,"Content-Type":"text/xml; charset=UTF-8",Authorization:`Basic ${this.auth}`};for(let p in n)o[p]=n[p];Be({method:e,url:s,data:t,headers:o,onload:function(p){let d=p.response;if((p.status>=400||!d)&&(d=""),i=="xml"){var m=p.responseXML;m&&(d=m.firstChild.nextSibling?m.firstChild.nextSibling:m.firstChild)}a&&a(d)},onerror:function(p){pe(p),a&&a(p)},ontimeout:function(p){pe(p),a&&a(p)}})}}GET(e,t){return this.request("GET",null,e,"text",t,{})}PROPFIND(e,t){return this.request("PROPFIND",null,e,"xml",t,{Depth:"1"})}MKCOL(e,t){return this.request("MKCOL",null,e,"text",t,{})}DELETE(e,t){return this.request("DELETE",null,e,"text",t,{})}PUT(e,t,r){return this.request("PUT",t,e,"text",r,{})}async read(e){let t=this;return new Promise(r=>{t.GET(e,r)})}async write(e,t){let r=this;return new Promise(i=>{r.PUT(e,t,i)})}async rm(e){let t=this;return new Promise(r=>{t.DELETE(e,r)})}}var lt;async function zt(l,e){if(Te)return;let t=await U.getItem("searchData");if(t&&(c=t),!lt)return l&&l();if(!e){let r=await lt.read("lastModified");if(r&&(r=parseFloat(r)),r&&(!c.lastModified||r>c.lastModified)){c.lastModified=r,Et=c.lastModified;let i=await lt.read("sitesConfig.json");if(i)try{i=JSON.parse(i),c.sitesConfig=i}catch(n){pe(n)}let a=await lt.read("inPageRule.json");if(a)try{a=JSON.parse(a),c.prefConfig.inPageRule=a}catch(n){pe(n)}}}l&&l(),await lt.write("lastModified",""+c.lastModified),await lt.write("sitesConfig.json",JSON.stringify(c.sitesConfig)),await lt.write("inPageRule.json",JSON.stringify(c.prefConfig.inPageRule))}var ai;ye.trustedTypes&&ye.trustedTypes.createPolicy&&(ai=ye.trustedTypes.createPolicy("searchjumper_default",{createHTML:(l,e)=>l}));const ni=Object.getPrototypeOf(async function(){}).constructor;typeof String.prototype.replaceAll!="function"&&(String.prototype.replaceAll=function(l,e){var t=this;return t.split(l).join(e)}),typeof String.prototype.endsWith!="function"&&(String.prototype.endsWith=function(l,e){return(e===void 0||e>this.length)&&(e=this.length),this.substring(e-l.length,e)===l}),typeof String.prototype.startsWith!="function"&&(String.prototype.startsWith=function(l,e){return this.slice(e||0,l.length)===l});function _(l){return l.body||l.querySelector("body")}function dt(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientX:0:l.clientX}function ut(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].clientY:0:l.clientY}function hr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageX:0:l.pageX}function dr(l){return l.type.indexOf("touch")===0?l.changedTouches?l.changedTouches[0].pageY:0:l.pageY}function ur(l,e,t){t=t||document,e=e||t;var r=[];try{for(var i=t.evaluate(l,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),a=0;a<i.snapshotLength;a++){var n=i.snapshotItem(a);n.nodeType===1&&r.push(n)}}catch{pe(`Invalid xpath: ${l}`)}return r}function fr(l,e,t){t=t||document,e=e||t;try{let r=(a,n,s)=>{let o=n.evaluate(a,s,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);return o.singleNodeValue&&o.singleNodeValue.nodeType===1&&o.singleNodeValue},i=l.split(" =>> ");if(i.length===2){let a=r(i[0],t,e);if(a&&a.shadowRoot)return r(i[1],a.shadowRoot,a.shadowRoot)}else return r(l,t,e)}catch{return pe(`Invalid xpath: ${l}`),!1}}function Ji(l){return l?/^\(*(descendant::|\.\/|\/\/|id\()/.test(l):!1}function oi(l,e,t){e||(e=document);try{if(!Ji(l))return e.querySelectorAll(l)}catch(r){pe(r,"Error selector")}return ur(l,t,e)}function xt(l,e){e||(e=document);try{if(!Ji(l)){let t=l.split(" =>> ");if(t.length===2){let r=e.querySelector(t[0]);return r&&r.shadowRoot&&r.shadowRoot.querySelector(t[1])}else return e.querySelector(l)}}catch(t){pe(t)}return fr(l,e,e)}function mr(l,e){for(var t=l.offsetTop,r=l.offsetParent;r;)t+=r.offsetTop,r=r.offsetParent;if(e){for(r=e;r;)t+=r.offsetTop,r=r.offsetParent;try{let i=e.contentWindow.parent;for(e=i.frameElement;e;){for(r=e;r;)t+=r.offsetTop,r=r.offsetParent;i=i.parent,e=i.frameElement}}catch{}}return t}function Fr(l){for(var e=l.offsetLeft,t=l.offsetParent;t;)e+=t.offsetLeft,t=t.offsetParent;if(!document.isSameNode(l.ownerDocument)){let r=document.getElementsByTagName("iframe");for(let i=0;i<r.length;i++){let a=r[i],n;try{n=a.contentDocument||a.contentWindow.document}catch{break}if(n.isSameNode(l.ownerDocument)){for(t=a;t;)e+=t.offsetLeft,t=t.offsetParent;break}}}return e}function li(l){const e=l.activeElement;return e?e.shadowRoot?li(e.shadowRoot):e:null}function zi(l){if(l&&(/INPUT|TEXTAREA/i.test(l.nodeName)&&l.getAttribute("aria-readonly")!="true"||l.contentEditable=="true"))return!0;for(;l&&l.nodeName;){if(l.contentEditable=="true")return!0;if(l.nodeName.toUpperCase()=="BODY")break;l=l.parentNode}return!1}function Tt(l){let e=li(l);return zi(e)}async function gr(l){for(;document.hidden;)await Ae(500);var e=100,t="\uF0C8",r=function(){var i,a;e-=1,i=document.createElement("canvas"),i.width=20,i.height=20,a=i.getContext("2d",{willReadFrequently:!0}),a.fillStyle="rgba(0,0,0,1.0)",a.fillRect(0,0,20,20),a.font="16pt FontAwesome",a.textAlign="center",a.fillStyle="rgba(255,255,255,1.0)",a.fillText(t,10,18);var n=a.getImageData(2,10,1,1).data;n[0]==0&&n[1]==0&&n[2]==0?(a.font='16pt "Font Awesome 6 Free"',a.fillText(t,10,18),n=a.getImageData(2,10,1,1).data,n[0]==0&&n[1]==0&&n[2]==0?e>0&&setTimeout(r,150):typeof l=="function"&&l()):typeof l=="function"&&l()};setTimeout(r,100)}var ct,M,Se=[],ae=!1,ci=!1,Ee,vt,tt,He,kt,Ge,be,Ve,It,Le,Pe,De=[],Rt=[],jt,Ne,Ye,Ht,pi,Ot,Ri,hi,Hi=!1,Et=0,_e;const di=`<svg class="search-jumper-logoBtnSvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>${ht.script.name}</title><path d="M.736 510.464c0-281.942 228.335-510.5 510-510.5 135.26 0 264.981 53.784 360.625 149.522 95.643 95.737 149.375 225.585 149.375 360.978 0 281.94-228.335 510.5-510 510.5-281.665 0-510-228.56-510-510.5zm510-510.5v1021m-510-510.5h1020" fill="#fefefe"/><path d="M237.44 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM699.904 346.624a48.64 48.64 0 1 0 97.28 0 48.64 48.64 0 1 0-97.28 0zM423.296 759.296c-64 0-115.712-52.224-115.712-115.712 0-26.624 9.216-52.224 25.6-72.704 9.216-11.776 26.112-13.312 37.888-4.096s13.312 26.112 4.096 37.888c-9.216 11.264-13.824 24.576-13.824 38.912 0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-4.096-.512-8.192-1.024-11.776-2.56-14.848 6.656-28.672 21.504-31.744 14.848-2.56 28.672 6.656 31.744 21.504 1.536 7.168 2.048 14.336 2.048 22.016-.512 63.488-52.224 115.712-116.224 115.712z" fill="#333"/><path d="M602.08 760.296c-64 0-115.712-52.224-115.712-115.712 0-14.848 12.288-27.136 27.136-27.136s27.136 12.288 27.136 27.136c0 34.304 27.648 61.952 61.952 61.952s61.952-27.648 61.952-61.952c0-15.36-5.632-30.208-15.872-41.472-9.728-11.264-9.216-28.16 2.048-37.888 11.264-9.728 28.16-9.216 37.888 2.048 19.456 21.504 29.696 48.64 29.696 77.824 0 62.976-52.224 115.2-116.224 115.2z" fill="#333"/><ellipse ry="58" rx="125" cy="506.284" cx="201.183" fill="#faf"/><ellipse ry="58" rx="125" cy="506.284" cx="823.183" fill="#faf"/></svg>`,ft="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic2VhcmNoLWp1bXBlci1sb2dvQnRuU3ZnIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0uNzM2IDUxMC40NjRjMC0yODEuOTQyIDIyOC4zMzUtNTEwLjUgNTEwLTUxMC41IDEzNS4yNiAwIDI2NC45ODEgNTMuNzg0IDM2MC42MjUgMTQ5LjUyMiA5NS42NDMgOTUuNzM3IDE0OS4zNzUgMjI1LjU4NSAxNDkuMzc1IDM2MC45NzggMCAyODEuOTQtMjI4LjMzNSA1MTAuNS01MTAgNTEwLjUtMjgxLjY2NSAwLTUxMC0yMjguNTYtNTEwLTUxMC41em01MTAtNTEwLjV2MTAyMW0tNTEwLTUxMC41aDEwMjAiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMjM3LjQ0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek02OTkuOTA0IDM0Ni42MjRhNDguNjQgNDguNjQgMCAxIDAgOTcuMjggMCA0OC42NCA0OC42NCAwIDEgMC05Ny4yOCAwek00MjMuMjk2IDc1OS4yOTZjLTY0IDAtMTE1LjcxMi01Mi4yMjQtMTE1LjcxMi0xMTUuNzEyIDAtMjYuNjI0IDkuMjE2LTUyLjIyNCAyNS42LTcyLjcwNCA5LjIxNi0xMS43NzYgMjYuMTEyLTEzLjMxMiAzNy44ODgtNC4wOTZzMTMuMzEyIDI2LjExMiA0LjA5NiAzNy44ODhjLTkuMjE2IDExLjI2NC0xMy44MjQgMjQuNTc2LTEzLjgyNCAzOC45MTIgMCAzNC4zMDQgMjcuNjQ4IDYxLjk1MiA2MS45NTIgNjEuOTUyczYxLjk1Mi0yNy42NDggNjEuOTUyLTYxLjk1MmMwLTQuMDk2LS41MTItOC4xOTItMS4wMjQtMTEuNzc2LTIuNTYtMTQuODQ4IDYuNjU2LTI4LjY3MiAyMS41MDQtMzEuNzQ0IDE0Ljg0OC0yLjU2IDI4LjY3MiA2LjY1NiAzMS43NDQgMjEuNTA0IDEuNTM2IDcuMTY4IDIuMDQ4IDE0LjMzNiAyLjA0OCAyMi4wMTYtLjUxMiA2My40ODgtNTIuMjI0IDExNS43MTItMTE2LjIyNCAxMTUuNzEyeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik02MDIuMDggNzYwLjI5NmMtNjQgMC0xMTUuNzEyLTUyLjIyNC0xMTUuNzEyLTExNS43MTIgMC0xNC44NDggMTIuMjg4LTI3LjEzNiAyNy4xMzYtMjcuMTM2czI3LjEzNiAxMi4yODggMjcuMTM2IDI3LjEzNmMwIDM0LjMwNCAyNy42NDggNjEuOTUyIDYxLjk1MiA2MS45NTJzNjEuOTUyLTI3LjY0OCA2MS45NTItNjEuOTUyYzAtMTUuMzYtNS42MzItMzAuMjA4LTE1Ljg3Mi00MS40NzItOS43MjgtMTEuMjY0LTkuMjE2LTI4LjE2IDIuMDQ4LTM3Ljg4OCAxMS4yNjQtOS43MjggMjguMTYtOS4yMTYgMzcuODg4IDIuMDQ4IDE5LjQ1NiAyMS41MDQgMjkuNjk2IDQ4LjY0IDI5LjY5NiA3Ny44MjQgMCA2Mi45NzYtNTIuMjI0IDExNS4yLTExNi4yMjQgMTE1LjJ6IiBmaWxsPSIjMzMzIi8+PGVsbGlwc2Ugcnk9IjU4IiByeD0iMTI1IiBjeT0iNTA2LjI4NCIgY3g9IjIwMS4xODMiIGZpbGw9IiNmYWYiLz48ZWxsaXBzZSByeT0iNTgiIHJ4PSIxMjUiIGN5PSI1MDYuMjg0IiBjeD0iODIzLjE4MyIgZmlsbD0iI2ZhZiIvPjwvc3ZnPg==",ui="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDI5LjAxMzMzMyA2NDBBMzIgMzIgMCAwIDEgMzg0IDU5NC45ODY2NjdsMzcuNzYtMzcuNzYtMjIuODI2NjY3LTIyLjYxMzMzNC0xMzUuNjggMTM1LjY4IDkwLjQ1MzMzNCA5MC40NTMzMzQgMTM1LjY4LTEzNS42OC0yMi42MTMzMzQtMjIuNjEzMzM0ek01MzQuNjEzMzMzIDM5OC45MzMzMzNsMjIuNjEzMzM0IDIyLjYxMzMzNEw1OTQuOTg2NjY3IDM4NEEzMiAzMiAwIDAgMSA2NDAgNDI5LjAxMzMzM2wtMzcuNzYgMzcuNzYgMjIuNjEzMzMzIDIyLjYxMzMzNCAxMzUuNjgtMTM1LjY4LTkwLjQ1MzMzMy05MC40NTMzMzR6IiBmaWxsPSIjNUU1QzVDIj48L3BhdGg+PHBhdGggZD0iTTUxMiAyMS4zMzMzMzNhNDkwLjY2NjY2NyA0OTAuNjY2NjY3IDAgMSAwIDQ5MC42NjY2NjcgNDkwLjY2NjY2N0E0OTAuNjY2NjY3IDQ5MC42NjY2NjcgMCAwIDAgNTEyIDIxLjMzMzMzM3ogbTMxNi44IDM1NC45ODY2NjdsLTE4MS4xMiAxODEuMTJhMzIgMzIgMCAwIDEtNDUuMjI2NjY3IDBMNTU3LjIyNjY2NyA1MTIgNTEyIDU1Ny4yMjY2NjdsNDUuMjI2NjY3IDQ1LjIyNjY2NmEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N2wtMTgxLjEyIDE4MS4xMmEzMiAzMiAwIDAgMS00NS4yMjY2NjcgMGwtMTM1LjY4LTEzNS42OGEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wxODEuMTItMTgxLjEyYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwTDQ2Ni43NzMzMzMgNTEyIDUxMiA0NjYuNzczMzMzbC00NS4yMjY2NjctNDUuMjI2NjY2YTMyIDMyIDAgMCAxIDAtNDUuMjI2NjY3bDE4MS4xMi0xODEuMTJhMzIgMzIgMCAwIDEgNDUuMjI2NjY3IDBsMTM1LjY4IDEzNS42OGEzMiAzMiAwIDAgMSAwIDQ1LjIyNjY2N3oiIGZpbGw9IiM1RTVDNUMiPjwvcGF0aD4KPC9zdmc+",Oi='<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>',fi="%s[lurest]?\\b",mt=new RegExp(fi);var A,mi,Lt,Ze,Fi=!1;function yr(l,e,t){if(!l&&!e&&!t){let H=new Date,x=H.getFullYear(),N=H.getMonth(),R=H.getDate();l=H.getFullYear(),e=H.getMonth()+1,t=H.getDate()}let r=2e3,i=2,a=5,n=[51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],s="\u6B63\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u51AC\u81D8",o="\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u521D\u5EFF",p="\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678",d="\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5",m="\u9F20\u725B\u864E\u5154\u9F8D\u86C7\u99AC\u7F8A\u7334\u96DE\u72D7\u8C6C";function g(H,x,N){x-=1;let R=(Date.UTC(H,x,N)-Date.UTC(r,i-1,a))/(1440*60*1e3)+1,z,K,v,T;for(let w=0;w<n.length;w++)if(R-=y(n[w]),R<=0){z=r+w,T=n[w],R+=y(T);break}if(!T)return null;for(let w=0;w<I(T).length;w++)if(R-=I(T)[w],R<=0){u(T)&&u(T)<=w?u(T)<w?K=w:u(T)===w?K="\u95F0"+w:K=w+1:K=w+1,R+=I(T)[w];break}return v=R,u(T)&&typeof K=="string"&&K.indexOf("\u95F0")>-1?K=`\u95F0${s[/\d/.exec(K)-1]}`:K=s[K-1],z=L(z)+O(z),v<11?v=`${o[10]}${o[v-1]}`:v>10&&v<20?v=`${o[9]}${o[v-11]}`:v===20?v=`${o[1]}${o[9]}`:v>20&&v<30?v=`${o[11]}${o[v-21]}`:v===30&&(v=`${o[2]}${o[9]}`),{lunarYear:z,lunarMonth:K,lunarDay:v}}function u(H){return H&15?H&15:!1}function f(H){return u(H)?H&983040?30:29:0}function y(H){let x=0;for(let N=32768;N>8;N>>=1){let R=H&N?30:29;x+=R}return u(H)&&(x+=f(H)),x}function I(H){let x=[];for(let N=32768;N>8;N>>=1)x.push(H&N?30:29);return u(H)&&x.splice(u(H),0,f(H)),x}function L(H){let x=(H-3)%10;return x===0&&(x=10),p[x-1]}function O(H){let x=(H-3)%12;return x===0&&(x=12),x--,d[x]+` (${m[x]}) `}return g(l,e,t)}class br{constructor(){let e=this;this.scale=c.prefConfig.customSize/100,this.tilesZoom=c.prefConfig.tilesZoom/100,this.tipsZoom=c.prefConfig.tipsZoom/100,Lt=`
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
                     max-height: calc(100vh - 110px);
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
                `,c.prefConfig.cssText&&(Lt+=c.prefConfig.cssText);let t=document.createElement("span");t.className="search-jumper-searchBar";let r=document.createElement("input");r.id="search-jumper-tileInput",r.addEventListener("mousedown",T=>{T&&T.stopPropagation&&T.stopPropagation()},!0);let i;r.addEventListener("input",T=>{clearTimeout(i),i=setTimeout(()=>{let w=e.bar.querySelector(".search-jumper-open>span:first-child");w&&w.dispatchEvent(new CustomEvent("checkSites",{detail:r.value}))},500)},!0),this.tileInput=r;let a=document.createElement("span");a.className="search-jumper-logo",ct=document.createElement("span"),ct.innerHTML=ee(di),ct.className="search-jumper-btn",a.addEventListener("mouseenter",T=>{this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}),a.appendChild(ct),t.appendChild(a);let n=document.createElement("div");n.id="search-jumper",n.style.display="none",n.className="search-jumper-searchBarCon",n.appendChild(t),n.setAttribute("translate","no");let s=document.createElement("div");s.id="search-jumper-alllist",n.appendChild(s),this.alllist=s;let o=document.createElement("span");o.className="groupTab",n.appendChild(o),this.groupTab=o;let p=document.createElement("div");p.className="search-jumper-showallBg",n.appendChild(p);let d=document.createElement("div");d.className="sitelistBox",s.appendChild(d),this.sitelistBox=d;const m=/#[^\s#]+/g;d.addEventListener("mouseover",T=>{if(!s.classList.contains("new-mode"))return;let w=T.target;w.parentNode&&w.parentNode.dataset.name&&(w=w.parentNode);let P=w.title;if(!w.dataset.name||!P||w.initedTag)return;let j=document.createElement("p"),q=P.match(m);q&&(q.forEach(ue=>{let te=document.createElement("span");te.innerText=ue.slice(1),te.addEventListener("click",ie=>{e.searchInput.value=ue,e.searchInput.dispatchEvent(new CustomEvent("input"))}),j.appendChild(te)}),w.appendChild(j)),w.initedTag=!0});let g=document.createElement("span");g.className="timeInAll",s.appendChild(g),this.timeInAll=g,this.modeSwitch=document.createElement("div"),this.modeSwitch.className="modeSwitch",this.modeSwitch.innerHTML=ee('<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect height="450" width="520" y="287" x="253" fill="#fff"></rect><path d="m511.8,64.2c-247.5,0 -448.2,200.7 -448.2,448.2s200.7,448.2 448.2,448.2s448.2,-200.6 448.2,-448.2s-200.7,-448.2 -448.2,-448.2zm-260.4,353.9c0,-7.8 6.3,-14.2 14.2,-14.2l315.6,0l0,-102.5c0,-12.3 14.7,-18.8 23.7,-10.4l165.1,151.7c9.5,8.7 3.3,24.6 -9.6,24.6l-495,0c-7.8,0 -14.2,-6.3 -14.2,-14.2l0,-35l0.2,0zm523.2,188.5c0,7.8 -6.3,14.2 -14.2,14.2l-315.5,0l0,102.6c0,12.3 -14.7,18.8 -23.7,10.4l-165.2,-151.8c-9.5,-8.7 -3.3,-24.6 9.6,-24.6l495,0c7.8,0 14.2,6.3 14.2,14.2l0,35l-0.2,0z"></path></svg>'),s.appendChild(this.modeSwitch),this.modeSwitch.addEventListener("click",T=>{T.preventDefault(),T.stopPropagation(),s.classList.toggle("new-mode"),s.classList.remove("showbg"),U.setItem("allPageNewMode",s.classList.contains("new-mode"))}),this.modeSwitch.addEventListener("mouseenter",T=>{_e&&(T.preventDefault(),T.stopPropagation(),s.classList.add("showbg"))}),this.modeSwitch.addEventListener("mouseleave",T=>{_e&&(T.preventDefault(),T.stopPropagation(),s.classList.remove("showbg"))}),this.modeSwitch.addEventListener("contextmenu",T=>{_e&&(T.preventDefault(),T.stopPropagation(),s.classList.remove("showbg"),ge(_e,{active:!0,insert:!0}))}),Hi&&s.classList.add("new-mode");let u=document.createElement("span");u.className="dayInAll",s.appendChild(u),this.dayInAll=u,s.addEventListener(Nt(),T=>{if(e.tips.style.display="none",clearTimeout(e.requestShowTipsTimer),!(T.target!=s&&T.target!=p&&T.target!=d)&&!s.classList.contains("new-mode")){var w,P;if(T.type!=="wheel"){var j=0,q=0;typeof T.axis=="number"?T.axis==2?q=T.detail:j=T.detail:typeof T.wheelDeltaY>"u"||T.wheelDeltaY!=0?q=-T.wheelDelta/40:j=-T.wheelDelta/40,P=q,w=j}else w=T.deltaX,P=T.deltaY;T.preventDefault(),T.stopPropagation(),s.scrollLeft+=P}},{passive:!1,capture:!1});let f=document.createElement("span");f.innerHTML=ee(di),f.className="search-jumper-btn",f.addEventListener("click",T=>{ge(Qe,{active:!0,insert:!0})}),s.appendChild(f);let y=document.createElement("div");y.className="search-jumper-historylistcon",s.appendChild(y);let I=document.createElement("div");if(I.className="search-jumper-historylist",y.appendChild(I),this.historylist=I,t.addEventListener("mouseenter",T=>{t.classList.contains("grabbing")||(this.hideTimeout&&clearTimeout(this.hideTimeout),this.checkScroll(!0),c.prefConfig.mouseLeaveToHide&&t.classList.remove("initShow"))},!1),t.addEventListener("mouseleave",T=>{if(c.prefConfig.mouseLeaveToHide){if(t.classList.contains("grabbing"))return;e.waitForHide()}e.preList&&(e.preList.style.visibility="hidden",e.listArrow.style.cssText="")},!1),this.touched=!0,c.prefConfig.initShow?t.classList.add("initShow"):this.touched=!1,c.prefConfig.minSizeMode&&(t.classList.add("minSizeMode"),t.classList.add("minSizeModeClose")),Dt&&!c.prefConfig.resizePage){let T=P=>{this.touched=!1,t.classList.remove("initShow")},w=P=>{this.touched||this.funcKeyCall||(this.touched=!0,t.classList.add("disable-pointer"),P.stopPropagation(),setTimeout(()=>{t.classList.remove("disable-pointer")},250))};_(document).addEventListener("touchstart",T,{passive:!0,capture:!1}),t.addEventListener("touchstart",w,{passive:!1,capture:!0})}this.bar=t,this.con=n;let L=document.createElement("span");L.className="search-jumper-tips",L.style.opacity=0,n.appendChild(L),L.addEventListener("mouseenter",T=>{e.hideTimeout&&clearTimeout(e.hideTimeout)},!1),L.addEventListener("click",T=>{let w=T.target.dataset,P=T.target.innerText;if(w){if(typeof w.read<"u"){let j=new SpeechSynthesisUtterance("");j.volume=w.volume||1,j.rate=w.rate||1,j.pitch=w.pitch||1,j.lang=w.lang||"",j.text=w.read||P,window.speechSynthesis.speak(j)}typeof w.copy<"u"&&Re(w.copy||P),w.search&&(Bt=P,e.searchBySiteName(w.search)),typeof w.paste<"u"&&A&&(/INPUT|TEXTAREA/i.test(A.nodeName)&&A.getAttribute("aria-readonly")!="true"||A.contentEditable=="true")&&Ut(A,w.paste||P),typeof w.close<"u"&&(e.tips.style.opacity=0,e.tips.style.display="none",e.tips.innerHTML=ee(""))}},!1);let O,H,x=T=>{let w=dt(T)-O.x,P=ut(T)-O.y;Math.abs(w)+Math.abs(P)<5||(L.style.right===""?L.style.setProperty("left",H.left+w+"px","important"):L.style.setProperty("right",H.right-w+"px","important"),L.style.bottom===""?L.style.setProperty("top",H.top+P+"px","important"):L.style.setProperty("bottom",H.bottom-P+"px","important"),L.classList.add("draging"))},N=T=>{document.removeEventListener("mouseup",N,!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("touchend",N,!1),document.removeEventListener("touchmove",x,!1),L.classList.remove("draging")},R=(T,w)=>{if(!T.target||T.target!==L&&typeof T.target.dataset.drag>"u")return;T.preventDefault(),T.stopPropagation(),O={x:dt(T),y:ut(T)};let P=getComputedStyle(L);H={left:parseFloat(P.left),right:parseFloat(P.right),top:parseFloat(P.top),bottom:parseFloat(P.bottom)},w&&w()};L.addEventListener("mousedown",T=>{R(T,()=>{document.addEventListener("mouseup",N,!1),document.addEventListener("mousemove",x,!1)})},!1),L.addEventListener("touchstart",T=>{R(T,()=>{document.addEventListener("touchend",N,!1),document.addEventListener("touchmove",x,!1)})},{passive:!1,capture:!1}),this.tips=L;let z=document.createElement("div");z.className="searchJumperNavBar",z.style.display="none",z.innerHTML=ee(`
                  <svg class="closeNavBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close navigation</title>${Oi}</svg>
                  <div class="minNavBtn" title="Minimize navigation">-</div>
                  <div id="navMarks"></div>
                  <div class="maxNavBtn" title="Restore input"><img src="${ft}" /></div>
                  <div class="navPointer">></div>
                `),n.appendChild(z);let K=document.createElement("span");K.title=B("expand"),K.className="searchJumperExpand search-jumper-btn",K.innerHTML=ee(`
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect height="450" width="600" y="300" x="200" fill="#fff"></rect><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 640L240 432l45.6-45.6L512 613.6l226.4-226.4 45.6 45.6L512 704z"></path></svg>
                `),this.searchJumperExpand=K,this.navMarks=z.querySelector("#navMarks"),this.closeNavBtn=z.querySelector(".closeNavBtn"),this.minNavBtn=z.querySelector(".minNavBtn"),this.maxNavBtn=z.querySelector(".maxNavBtn"),this.searchJumperNavBar=z,this.navPointer=z.querySelector(".navPointer"),this.navPointer.style.display="none";let v=document.createElement("div");v.className="search-jumper-input",v.innerHTML=ee(`<span class="closeBtn">\xD7</span>
                <input type="radio" id="filterSitesTab" name="tab" ${c.prefConfig.defaultFindTab?"":'checked="checked"'} />
                <label for="filterSitesTab">${B("filterSites")}</label>
                <input type="radio" id="searchInPageTab" name="tab" ${c.prefConfig.defaultFindTab?'checked="checked"':""} />
                <label for="searchInPageTab">${B("searchInPage")}</label>
                <div class="line"></div>
                <div class="content-container">
                  <div class="inputGroup" id="filterSites">
                    <input spellcheck="false" id="searchJumperInput" autocomplete="on" title="${B("inputTitle")}" placeholder="${B("inputPlaceholder")}" list="filterGlob" />
                    <input spellcheck="false" id="searchJumperInputKeyWords" autocomplete="on" placeholder="${B("inputKeywords")}" list="suggest" />
                    <datalist id="filterGlob">
                    </datalist>
                    <datalist id="suggest">
                    </datalist>
                    <span class="search-jumper-lock-input"></span>
                    <span class="svgBtns">
                      <svg id="copyEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("copyEleBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="openLinkBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("openLinkBtn")}</title><path d="M429.013333 640A32 32 0 0 1 384 594.986667l37.76-37.76-22.826667-22.613334-135.68 135.68 90.453334 90.453334 135.68-135.68-22.613334-22.613334zM534.613333 398.933333l22.613334 22.613334L594.986667 384A32 32 0 0 1 640 429.013333l-37.76 37.76 22.613333 22.613334 135.68-135.68-90.453333-90.453334z"/><path d="M512 21.333333a490.666667 490.666667 0 1 0 490.666667 490.666667A490.666667 490.666667 0 0 0 512 21.333333z m316.8 354.986667l-181.12 181.12a32 32 0 0 1-45.226667 0L557.226667 512 512 557.226667l45.226667 45.226666a32 32 0 0 1 0 45.226667l-181.12 181.12a32 32 0 0 1-45.226667 0l-135.68-135.68a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0L466.773333 512 512 466.773333l-45.226667-45.226666a32 32 0 0 1 0-45.226667l181.12-181.12a32 32 0 0 1 45.226667 0l135.68 135.68a32 32 0 0 1 0 45.226667z"/></svg>
                      <svg id="maxEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("maxEleBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="minEleBtn" style="display:none;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("minEleBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                      <svg id="pickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("multiPickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                    </span>
                  </div>
                  <div class="inputGroup" id="searchInPage">
                    <span class="lockWords"></span>
                    <input spellcheck="false" id="searchJumperInPageInput" autocomplete="on" title="${B("inPageTips")}" placeholder="${B("inPagePlaceholder")}" />
                    <span class="svgBtns">
                      <svg id="editBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("editBtn")}</title><path d="M928 365.664a32 32 0 0 0-32 32V864a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h429.6a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v704a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V397.664a32 32 0 0 0-32-32z"></path><path d="M231.616 696.416a38.4 38.4 0 0 0 44.256 53.792l148-38.368L950.496 185.248 814.72 49.472 290.432 573.76l-58.816 122.656z m111.808-85.12L814.72 140l45.248 45.248-468.992 468.992-77.824 20.16 30.272-63.104z"></path></svg>
                      <svg id="addWord" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("addWord")}</title><path d="M821.364 962h-618.75C123.864 962 62 900.114 62 821.364v-618.75c0-78.75 61.864-140.635 140.614-140.635h618.75c78.75 0 140.636 61.885 140.636 140.635v618.75C962 900.114 900.114 962 821.364 962z m79.265-756.814c0-46.586-35.25-81.815-81.815-81.815H205.186c-46.843-0.214-84.557 34.758-83.165 82.393-0.128 14.4 1.35 613.05 1.35 613.05 0 46.565 35.25 81.815 81.815 81.815h613.628c46.565 0 81.815-35.25 81.815-81.815V205.186z m-173.55 347.657H552.843v174.236c0 16.95-13.736 30.685-30.686 30.685h-0.236a30.686 30.686 0 0 1-30.685-30.685V552.843H296.92a30.686 30.686 0 0 1-30.685-30.686v-0.236c0-16.95 13.735-30.685 30.685-30.685h194.315V296.92c0-16.95 13.735-30.685 30.685-30.685h0.236c16.95 0 30.686 13.735 30.686 30.685v194.315h174.236c16.95 0 30.685 13.735 30.685 30.685v0.236c0 16.95-13.735 30.686-30.685 30.686z"></path></svg>
                      <svg id="emptyBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("emptyBtn")}</title><path d="m159.45829,231.40004l-48.83334,0a36.625,34.1375 0 0 1 0,-68.275l805.75004,0a36.625,34.1375 0 0 1 0,68.275l-683.6667,0l0,603.09581a61.04167,56.89583 0 0 0 61.04167,56.89584l439.50002,0a61.04167,56.89583 0 0 0 61.04167,-56.89584l0,-500.68332a36.625,34.1375 0 0 1 73.25,0l0,500.68332c0,69.12844 -60.12604,125.17084 -134.29167,125.17084l-439.50002,0c-74.16563,0 -134.29167,-56.0424 -134.29167,-125.17084l0,-603.09581zm256.37501,-113.79167a36.625,34.1375 0 0 1 0,-68.275l195.33334,0a36.625,34.1375 0 0 1 0,68.275l-195.33334,0zm-36.625,307.23749a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999zm195.33334,0a36.625,34.1375 0 0 1 73.25,0l0,273.09999a36.625,34.1375 0 0 1 -73.25,0l0,-273.09999z"/></svg>
                      <svg id="copyInPageBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("copyInPageBtn")}</title><path d="M706.5 188.4H190.2c-29.8 0-54 24.2-54 54v662.9c0 29.8 24.2 54 54 54h516.3c29.8 0 54-24.2 54-54V242.4c0-29.8-24.2-54-54-54z m-18 698.9H208.2V260.4h480.3v626.9zM313.7 512.2h275.2c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM313.7 715.2h201.6c19.9 0 36-16.1 36-36s-16.1-36-36-36H313.7c-19.9 0-36 16.1-36 36s16.1 36 36 36zM837.2 64.7H302.9c-19.9 0-36 16.1-36 36s16.1 36 36 36h516.3v662.9c0 19.9 16.1 36 36 36s36-16.1 36-36V118.7c0-29.8-24.2-54-54-54z"></path></svg>
                      <svg id="wordModeBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("wordModeBtn")}</title><path d="M832 128c38.4 0 64 25.6 64 64v640c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V192c0-38.4 25.6-64 64-64h640m0-64H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z"></path><path d="M736 812.8h-448c-19.2 0-32-12.8-32-32s12.8-32 32-32h448c19.2 0 32 12.8 32 32 0 12.8-12.8 32-32 32zM320 704c-19.2-6.4-25.6-25.6-19.2-44.8l185.6-454.4c6.4-12.8 25.6-19.2 38.4-12.8 19.2 6.4 25.6 25.6 19.2 44.8l-185.6 454.4c-6.4 12.8-25.6 19.2-38.4 12.8z"></path><path d="M704 691.2c19.2-6.4 25.6-25.6 19.2-44.8L544 211.2c-6.4-19.2-25.6-25.6-38.4-19.2-19.2 6.4-25.6 25.6-19.2 38.4l179.2 441.6c6.4 19.2 25.6 25.6 38.4 19.2z"></path><path d="M371.2 492.8h256v64h-256z"></path></svg>
                      <svg id="recoverBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("recoverBtn")}</title><path d="M502.26 289.06c-0.02 16.95 13.26 30.94 30.18 31.8 123.47 8.79 236.97 70.94 310.89 170.21 73.92 99.28 100.91 225.84 73.93 346.65-41.65-181.74-195.38-316.12-381.05-333.08-8.89-0.6-17.63 2.55-24.09 8.7a31.798 31.798 0 0 0-9.86 23.64v85.15a32.343 32.343 0 0 1-50.67 26.41L114.21 413.02a32.341 32.341 0 0 1-14.46-26.95c0-10.84 5.43-20.96 14.46-26.95L451.6 124.68a32.358 32.358 0 0 1 33.28-2.03 32.355 32.355 0 0 1 17.39 28.44v137.97h-0.01z"></path></svg>
                      <svg id="saveRuleBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("saveRuleBtn")}</title><path d="M579.7 291.4c18.8 0 34.1-15.3 34.1-34.1v-34.1c0-18.8-15.4-34.1-34.1-34.1-18.8 0-34.1 15.3-34.1 34.1v34.1c0 18.7 15.4 34.1 34.1 34.1zM944.7 216.3L808.2 79.9c-6.8-6.8-15.3-10.2-23.9-10.2H170.4c-56.3 0-102.3 46-102.3 102.3v682.1c0 56.3 46 102.3 102.3 102.3H852.5c56.3 0 102.3-46 102.3-102.3V240.2c0.1-8.5-3.3-17-10.1-23.9zM358 137.9h307v182.5c0 11.9-10.2 22.2-22.2 22.2H380.2c-11.9 0-22.2-10.2-22.2-22.2V137.9z m358.1 750.3H306.9V652.9c0-20.5 17.1-37.5 37.5-37.5h334.2c20.5 0 37.5 17 37.5 37.5v235.3z m170.6-34.1c0 18.8-15.3 34.1-34.1 34.1h-66.5V652.9c0-58-47.7-105.7-105.7-105.7h-336c-58 0-105.7 47.7-105.7 105.7v235.3h-68.2c-18.8 0-34.1-15.3-34.1-34.1V172c0-18.8 15.3-34.1 34.1-34.1h119.4v182.5c0 49.5 40.9 90.4 90.4 90.4h262.6c49.5 0 90.4-40.9 90.4-90.4V137.9h37.5l116 116v600.2z"></path></svg>
                      <svg id="pinBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("pinBtn")}</title><path d="m674.8822,92.83803a81.61801,81.04246 0 0 1 25.30158,17.09996l213.75757,212.46631a81.61801,81.04246 0 0 1 -24.70304,131.36982l-75.74151,33.30845l-142.09696,141.257l-11.26329,155.3854a81.61801,81.04246 0 0 1 -139.13151,51.46196l-137.98885,-137.15085l-235.14149,234.56388l-57.83996,-57.18896l235.27751,-234.69896l-142.7499,-141.85131a81.61801,81.04246 0 0 1 51.6642,-138.09635l160.95072,-11.94025l139.5668,-138.74469l32.78324,-75.09935a81.61801,81.04246 0 0 1 107.35489,-42.14208zm-32.45675,74.36997l-38.95901,89.22775l-171.94193,170.99958l-191.25821,14.1284l338.46989,336.3262l13.43977,-185.47917l174.33607,-173.32279l89.69819,-39.44067l-213.78477,-212.43929z"></path></svg>
                      <svg id="locBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("locBtn")}</title><path d="M357.6 832l-255.2 56c-20 4.8-39.2-10.4-39.2-31.2V569.6c0-15.2 10.4-28 24.8-31.2L243.2 504l53.6 53.6L139.2 592c-7.2 1.6-12.8 8-12.8 16v188c0 10.4 9.6 17.6 19.2 16l192.8-42.4 12.8-3.2 12.8 2.4 306.4 60.8 210.4-47.2c7.2-1.6 12.8-8 12.8-16V580c0-10.4-9.6-17.6-19.2-16L688 606.4l-12 2.4L760 524.8l160.8-36c20-4.8 39.2 10.4 39.2 31.2v286.4c0 15.2-10.4 28-24.8 31.2L672.8 896M512 128c-115.2 0-206.4 101.6-190.4 220 5.6 41.6 26.4 80 56 109.6l0.8 0.8L512 591.2l133.6-132.8 0.8-0.8c29.6-29.6 49.6-68 56-109.6C719.2 229.6 627.2 128 512 128m0-64c141.6 0 256 114.4 256 256 0 70.4-28 133.6-74.4 180L512 681.6 330.4 500C284.8 453.6 256 390.4 256 320 256 178.4 371.2 64 512 64z m64.8 193.6c0-35.2-28.8-64-64-64s-64 28.8-64 64 28.8 64 64 64 64-28 64-64z"></path></svg>
                    </span>
                    <div id="addons"></div>
                  </div>
                </div>
                <div id="rightSizeChange"></div>
                `),n.appendChild(v),this.searchInputDiv=v,this.searchInput=v.querySelector("#searchJumperInput"),this.searchJumperInputKeyWords=v.querySelector("#searchJumperInputKeyWords"),this.searchLockInput=v.querySelector(".search-jumper-lock-input"),this.searchJumperInPageInput=v.querySelector("#searchJumperInPageInput"),this.pickerBtn=v.querySelector("#pickerBtn"),this.minEleBtn=v.querySelector("#minEleBtn"),this.maxEleBtn=v.querySelector("#maxEleBtn"),this.copyEleBtn=v.querySelector("#copyEleBtn"),this.openLinkBtn=v.querySelector("#openLinkBtn"),this.editBtn=v.querySelector("#editBtn"),this.addWord=v.querySelector("#addWord"),this.recoverBtn=v.querySelector("#recoverBtn"),this.wordModeBtn=v.querySelector("#wordModeBtn"),this.saveRuleBtn=v.querySelector("#saveRuleBtn"),this.pinBtn=v.querySelector("#pinBtn"),this.locBtn=v.querySelector("#locBtn"),this.emptyBtn=v.querySelector("#emptyBtn"),this.copyInPageBtn=v.querySelector("#copyInPageBtn"),this.closeBtn=v.querySelector(".closeBtn"),this.filterSites=v.querySelector("#filterSites"),this.filterSitesTab=v.querySelector("#filterSitesTab"),this.searchInPageTab=v.querySelector("#searchInPageTab"),this.searchInPageLockWords=v.querySelector("#searchInPage>.lockWords"),this.contentContainer=v.querySelector(".content-container"),this.rightSizeChange=v.querySelector("#rightSizeChange"),this.filterGlob=v.querySelector("#filterGlob"),this.suggestDatalist=v.querySelector("#suggest"),this.addonsList=v.querySelector("#addons"),this.fakeTextareas=new Map,this.addonCheckboxDict={}}showInPageSearch(){this.searchInPageTab.checked=!0,this.showSearchInput(),this.initSetInPageWords(),this.searchJumperInPageInput.value="",this.initShowSearchInput=!0}showFilterSearch(){this.filterSitesTab.checked=!0,this.showSearchInput()}initSetInPageWords(){if(this.searchInPageTab.checked&&!this.searchJumperInPageInput.value){let e=$e()||this.searchJumperInputKeyWords.value.replace(/^\*/,"")||Oe();if(e)try{e=decodeURIComponent(e)}catch{}if(this.lockWords&&this.lockWords.indexOf(e)!==-1)return;this.searchJumperInPageInput.value=e||Ne,this.lockWords||this.submitIgnoreSpace(this.searchJumperInPageInput.value)}}anylizeInPageWords(e,t){if(!e)return[];let r=this,i=[];if(this.lockWords||(e.indexOf("$c")===0&&e.length>2?e=e.substr(3).trim():e.indexOf("$o")===0&&(e=e.substr(2).trim())),this.splitSep){let n=this.wordModeBtn.classList.contains("checked")?new RegExp(`[\\${this.splitSep} ]`):this.splitSep;e.split(n).sort((s,o)=>o.length-s.length).forEach(s=>{let o=s;if(s=s.trim(),!s||t&&(s.length<(c.prefConfig.limitInPageLen||1)||(c.prefConfig.ignoreWords||[]).includes(s.toLowerCase())))return;let p="",d="",m=!1,g,u,f,y=!1,I="",L=/\$t{(.*?)}($|\$)/,O=s.match(L),H=0;if(O)if(p=O[1],s=s.replace(L,"$2"),p=="\\$popup")p="$popup";else if(p=="\\@popup")p="@popup";else{let P=p.match(/^[\$@]popup(\((.*)\))?$/);P&&(p="",m=!0,P[1]&&(H=P[2]||"1"))}let x=/\$p{(.*?)}($|\$)/,N=s.match(x);N&&(g=parseInt(N[1])||0,s=s.replace(x,"$2"));let R=/\$in{(.*?)}($|\$)/,z=s.match(R);z&&(f=z[1]||"",s=s.replace(R,"$2"));let K=/\$s{(.*?)}($|\$)/,v=s.match(K);if(v){let P=v[1],j="";v=v[1].match(/(.*?);(.*)/),v&&(P=v[1],j=v[2]),d=r.getHighlightStyle(r.curWordIndex,P,j),s=s.replace(K,"$2")}else d=r.getHighlightStyle(r.curWordIndex,"","");let T="";if(s.indexOf("@")===0){T=s;let P=c.prefConfig.inPageRule&&c.prefConfig.inPageRule[s];P&&(s=P)}else s=s.replace(/^\\@/,"@");let w=s.match(/^\/(.*)\/([il]*)($|\$)/);w&&(y=!0,s=w[1],I=w[2].indexOf("i")!=-1?"i":"",u=w[2].indexOf("l")!=-1),T||(T=s),!r.highlightSpans[T]&&(i.push({content:s,showWords:T,isRe:y,link:u,reCase:I,title:p,style:d,oriWord:o,hideParent:g,inRange:f,popup:m,showTips:H,init:t}),r.curWordIndex++)})}else{this.curWordIndex=0;let a=(this.lockWords||"").replace(/^\$o/,"")+e;i=[{content:a,showWords:a,isRe:!1,reCase:"",title:"",style:r.getHighlightStyle(r.curWordIndex,"",""),init:t}]}return i}submitInPageWords(e){let t=this,r=this.searchJumperInPageInput.value,i=[];if(!r){if(!this.lockWords)this.highlight("");else{this.highlight("insert");for(let n in this.highlightSpans){let s=this.highlightSpans[n],o=this.marks[n];this.setHighlightSpan(s,0,o)}}return i}this.initHighlight=!!e,this.initHighlight&&setTimeout(()=>{this.initHighlight=!1},500),this.lockWords||(r.indexOf("$c")===0&&r.length>2?this.splitSep=r.substr(2,1):r.indexOf("$o")===0?this.splitSep=null:this.splitSep="\u25CE",this.curWordIndex=0),this.searchJumperInPageInput.value="";let a=this.anylizeInPageWords(r,this.initHighlight);return!a||a.length==0||(this.lockWords?this.lockWords+=(this.lockWords.indexOf(this.splitSep)===this.lockWords.length-this.splitSep.length?"":this.splitSep)+r:this.lockWords=r,this.splitSep||(this.searchInPageLockWords.innerHTML=ee(),this.highlight("")),this.highlight(a),a.forEach(n=>{if(!n)return;let s=document.createElement("span");s.innerHTML=ee(n.showWords),s.title=n.title?JSON.parse('"'+n.title+'"'):n.showWords;let o=n.style.match(/background: *(#?\w+)/);o&&o[1].indexOf("unset")===-1&&(s.style.background=o[1]);let p=n.style.match(/color: *(#?\w+)/);p&&(s.style.color=p[1]),s.addEventListener("click",f=>(f.stopPropagation(),f.preventDefault(),!1)),s.oncontextmenu=f=>{f.preventDefault()},s.addEventListener("dblclick",f=>{f.stopPropagation(),f.preventDefault(),f.target.nodeName.toUpperCase()!=="EM"&&(f.ctrlKey||f.shiftKey||f.altKey||f.metaKey||this.lockWords.indexOf(n.oriWord)!==-1&&this.showModifyWindow(n,s))},!0),s.addEventListener("mousedown",f=>{f.button===0?this.focusHighlightByText(n.showWords,!0,s):f.button===2&&this.focusHighlightByText(n.showWords,!1,s)});let d=!1;s.addEventListener(Nt(),f=>{if(f.preventDefault(),f.stopPropagation(),d)return;d=!0,setTimeout(()=>{d=!1},100);let y;if(f.type!=="wheel"){let I=0;typeof f.axis=="number"?f.axis==2&&(I=f.detail):(typeof f.wheelDeltaY>"u"||f.wheelDeltaY!=0)&&(I=-f.wheelDelta/40),y=I}else y=f.deltaY;this.focusHighlightByText(n.showWords,y>0,s)},{passive:!1,capture:!1}),s.addEventListener("editword",f=>{s.parentNode.removeChild(s),this.removeHighlightWord(n),this.searchJumperInPageInput.value=n.content});let m=document.createElement("div");m.addEventListener("mousedown",f=>{f.stopPropagation(),f.preventDefault(),s.parentNode.removeChild(s),this.removeHighlightWord(n)}),m.className="lockWordTool",m.innerHTML=ee(`<span title="${B("removeBtn")}">\xD7</span>`),s.appendChild(m);let g=document.createElement("div");g.addEventListener("mousedown",f=>{f.stopPropagation(),f.preventDefault(),this.lockWords.indexOf(n.oriWord)!==-1&&this.showModifyWindow(n,s)}),g.className="lockWordTool modifyBtn",g.innerHTML=ee("<span>+</span>"),s.appendChild(g);let u=this.marks[n.showWords];this.setHighlightSpan(s,-1,u),this.highlightSpans[n.showWords]=s,this.searchInPageLockWords.appendChild(s),i.push(s)}),this.searchInPageLockWords.scrollTop<=0&&(this.searchInPageLockWords.scrollTop=this.searchInPageLockWords.scrollHeight),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",this.navMarks.innerHTML&&this.con.style.display==="none"&&(this.con.style.display="")),i}async showCustomInputWindow(e,t){return new Promise(r=>{this.customInputCallback=t;let i=()=>{let o=this.finalSearch.dataset.url;[].forEach.call(this.customGroup.children,p=>{let d=p.value;if(p.className=="select")d=p.children[0].value;else if(/^DIV$/i.test(p.nodeName))return;o=o.replace("\u25CE",d||"")}),this.finalSearch.value=o};if(!this.customInputFrame){let p=Me(`
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
                        `),d=document.createElement("div");this.customInputFrame=d,d.innerHTML=ee(`
                         <div class="customInputFrame-body">
                             <a href="${at}" class="customInputFrame-title" target="_blank">
                                 <img width="32px" height="32px" src="${ft}" />${B("customInputFrame")}
                             </a>
                             <div id="customGroup">
                             </div>
                             <div class="customInputFrame-input-title">${B("finalSearch")}</div>
                             <textarea name="finalSearch" type="text"></textarea>
                             <div class="customInputFrame-buttons">
                                 <button id="cancel" type="button">${B("cancel")}</button>
                                 <button id="customSubmit" type="button">${B("customSubmit")}</button>
                             </div>
                         </div>
                        `),Ke||d.appendChild(p),d.querySelector("#cancel").addEventListener("click",y=>{d.parentNode&&d.parentNode.removeChild(d),r("")}),d.addEventListener("keydown",y=>{y.keyCode==13&&f.click()});let g=this.customInputFrame.querySelector("#customGroup");this.customGroup=g;let u=this.customInputFrame.querySelector("[name='finalSearch']");this.finalSearch=u,u.addEventListener("click",y=>{i()});let f=d.querySelector("#customSubmit");f.addEventListener("click",y=>{i(),u.value&&this.customInputCallback&&this.customInputCallback(u.value),r(u.value),d.parentNode&&d.parentNode.removeChild(d)})}this.customInputFrame.parentNode&&this.customInputFrame.parentNode.removeChild(this.customInputFrame),this.customGroup.innerHTML=ee();let a=e,n=a.match(/%input{(.*?[^\\])}/);for(;n;){let o=n[1];if(/^".*","/.test(o)?o=o.substr(1,o.length-2).split('","'):o=o.replace(/\\,/g,"\u25CESJ").split(",").map(p=>p.replace(/◎SJ/g,",")),o.length===1){o=o[0].replace(/\\\|/g,"\u25CESJ").split("|").map(m=>m.replace(/◎SJ/g,"|"));let p=document.createElement("div");p.className="customInputFrame-input-title",p.innerText=o[0],this.customGroup.appendChild(p);let d=document.createElement("input");d.type="text",o.length>1&&(d.title=o[1]),this.customGroup.appendChild(d)}else if(o.length>=2){let p=o[0].replace(/\\}/g,"}");/^'.*'\/'/.test(p)?p=p.substr(1,p.length-2).split("'/'"):p=p.replace(/\\\//g,"\u25CESJ").split("/").map(O=>O.replace(/◎SJ/g,"/"));let d=o.slice(1).join(",");/^'.*'\/'/.test(d)?d=d.substr(1,d.length-2).split("'/'"):d=d.replace(/\\\//g,"\u25CESJ").split("/").map(O=>O.replace(/◎SJ/g,"/"));let m=p.length===d.length+1,g=document.createElement("div");g.className="customInputFrame-input-title",g.innerText=p[0],this.customGroup.appendChild(g);let u=document.createElement("input");u.type="text";let f=document.createElement("div");f.className="select",f.appendChild(u);let y=document.createElement("p");y.innerText="Select option",f.appendChild(y);let I=document.createElement("div");I.className="options",f.appendChild(I);let L=document.createElement("p");L.setAttribute("value",""),L.innerHTML=ee("<b>Select option</b>"),I.appendChild(L),L.addEventListener("click",O=>{I.style.visibility="hidden",setTimeout(()=>{I.style.visibility=""},0),u.value="",y.innerText="Select option",i()});for(let O=0;O<d.length;O++){let H=d[O],x=document.createElement("p");if(x.setAttribute("value",H),m){let N=p[O+1];N=N.replace(/\\\|/g,"\u25CESJ").split("|").map(R=>R.replace(/◎SJ/g,"|")),x.innerText=N[0],N.length>1&&(x.title=N[1])}else x.innerText=H;x.addEventListener("click",N=>{I.style.visibility="hidden",setTimeout(()=>{I.style.visibility=""},0),u.value=x.getAttribute("value"),y.innerText="",i()}),I.appendChild(x)}u.addEventListener("change",O=>{y.innerText=""}),f.addEventListener("mouseenter",O=>{f.focus(),I.style.marginTop=-this.customGroup.scrollTop+20+"px"}),this.customGroup.appendChild(f)}a=a.replace(n[0],"\u25CE"),n=a.match(/%input{(.*?[^\\])}/)}this.finalSearch.dataset.url=a,this.finalSearch.value=a.replace(/◎/g,""),this.addToShadow(this.customInputFrame);let s=this.customInputFrame.children[0];s.style.marginTop=-s.offsetHeight/2+"px"})}showModifyWindow(e,t){let r;if(this.modifyWord={},this.addNew=!e&&!t,!this.addNew){if(r=e.oriWord,!r)return;this.modifyWord=e,this.modifySpan=t}if(!this.modifyFrame){let u=Me(`
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
                    `),f=document.createElement("div");this.modifyFrame=f,f.id="searchJumperModifyWord",f.innerHTML=ee(`
                     <div class="searchJumperModify-body">
                         <a href="${at}" class="searchJumperModify-title" target="_blank">
                             <img onerror="this.style.display='none'" width="32px" height="32px" src="${ft}" />${B("modifyWord")}
                         </a>
                         <div class="searchJumperModify-input-title">${B("wordContent")}</div>
                         <input id="searchJumperHighlightWord" name="wordContent" placeholder="words" type="text"/>
                         <div class="searchJumperModify-checkGroup">
                             <input id="searchJumperModify-re" type="checkbox"/>
                             <label for="searchJumperModify-re">${B("re")}</label>
                             <input id="searchJumperModify-case" type="checkbox"/>
                             <label for="searchJumperModify-case">${B("ignoreCase")}</label>
                             <input id="searchJumperModify-link" type="checkbox"/>
                             <label for="searchJumperModify-link">${B("filterLink")}</label>
                         </div>
                         <div class="searchJumperModify-input-title">${B("wordHide")}</div>
                         <input name="wordHide" min="0" placeholder="${B("wordHideTips")}" type="number" />
                         <div class="searchJumperModify-input-title">${B("wordRange")}</div>
                         <input name="wordRange" placeholder="#main" type="text" />
                         <svg id="rangePickerBtn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("pickerBtn")}</title><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z"></path></svg>
                         <div class="searchJumperModify-input-title">${B("wordStyle")}</div>
                         <input name="wordStyle" placeholder="orange or #333333;color:red;" type="text" />
                         <div class="searchJumperModify-input-title">${B("wordTitle")}</div>
                         <textarea name="wordTitle" type="text" placeholder="Text comment, or @popup to popup, @popup(1) to popup 1st showTips, @popup(name) to popup showTips of target engine"></textarea>
                         <div class="searchJumperModify-buttons">
                             <button id="cancel" type="button">${B("cancel")}</button>
                             <button id="modify" type="button">${B("modify")}</button>
                         </div>
                     </div>
                    `),Ke||f.appendChild(u),f.querySelector("#cancel").addEventListener("click",O=>{f.parentNode&&f.parentNode.removeChild(f)}),f.querySelector("#rangePickerBtn").addEventListener("click",O=>{ke.getSelector(H=>{s.value=H,f.style.display=""}),f.style.display="none"});let L=f.querySelector("#modify");this.modifyBtn=L,L.addEventListener("click",O=>{let H=i.value;if(this.splitSep&&(H=H.replaceAll(this.splitSep,"")),!H)return;let x=H!==this.modifyWord.showWords||d.checked!==this.modifyWord.isRe||m.checked!==this.modifyWord.link;p.checked&&H.indexOf("@")!==0&&(H=`/${H}/${d.checked?"i":""}${m.checked?"l":""}`);let N=o.value;N&&(this.splitSep&&(N=N.replaceAll(this.splitSep,"")),N=N>=0?N:0,H+=`$p{${N}}`);let R=a.value;R&&(this.splitSep&&(R=R.replaceAll(this.splitSep,"")),H+=`$s{${R}}`);let z=JSON.stringify(n.value).replace(/^"|"$/g,"");z&&(this.splitSep&&(z=z.replaceAll(this.splitSep,"")),H+=`$t{${z}}`);let K=s.value;K&&(this.splitSep&&(K=K.replaceAll(this.splitSep,"")),K!==this.modifyWord.inRange&&(x=!0),H+=`$in{${K}}`),this.addNew?(this.wordModeBtn.classList.contains("checked")&&(this.wordModeBtn.classList.remove("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)),this.searchJumperInPageInput.value=H,this.submitInPageWords()):this.replaceWord(this.modifyWord,H,this.modifySpan,x),f.parentNode&&f.parentNode.removeChild(f)}),f.addEventListener("keydown",O=>{O.keyCode==13&&O.target&&O.target.nodeName=="INPUT"&&L.click()})}let i=this.modifyFrame.querySelector("[name='wordContent']"),a=this.modifyFrame.querySelector("[name='wordStyle']"),n=this.modifyFrame.querySelector("[name='wordTitle']"),s=this.modifyFrame.querySelector("[name='wordRange']"),o=this.modifyFrame.querySelector("[name='wordHide']"),p=this.modifyFrame.querySelector("#searchJumperModify-re"),d=this.modifyFrame.querySelector("#searchJumperModify-case"),m=this.modifyFrame.querySelector("#searchJumperModify-link");if(this.addNew)i.value="",a.value="",s.value="",o.value="",n.value="",p.checked=!1,d.checked=!1,m.checked=!1,this.modifyBtn.innerText=B("add");else{this.modifyBtn.innerText=B("modify");let g="",u=/\$s{(.*?)}($|\$)/,f=r.match(u);f&&(g=f[1]),i.value=e.showWords||"",a.value=g||"",s.value=e.inRange||"",p.checked=!!e.isRe,d.checked=!!e.reCase,m.checked=!!e.link,typeof e.hideParent<"u"&&(o.value=e.hideParent);try{e.popup?(n.value="@popup",e.showTips&&(n.value=`@popup(${e.showTips})`)):n.value=e.title!==e.showWords?JSON.parse('"'+e.title+'"'):""}catch(y){pe(y)}}this.addToShadow(this.modifyFrame)}replaceWord(e,t,r,i){if(i)r.parentNode&&r.parentNode.removeChild(r),this.removeHighlightWord(e),this.searchJumperInPageInput.value=t,this.submitInPageWords();else{let a="",n="",s=-1,o=/\$t{(.*?)}($|\$)/,p=t.match(o);p&&(a=p[1],a=JSON.parse('"'+a+'"')),e.title=a,r.title=a;let d=/\$s{(.*?)}($|\$)/,m=t.match(d);if(m){let y=m[1],I="";m=m[1].match(/(.*?);(.*)/),m&&(y=m[1],I=m[2]),n=this.getHighlightStyle(this.curWordIndex,y,I),e.style=n,r.style=n}let g=!1,u=/\$p{(.*?)}($|\$)/,f=t.match(u);f?(s=parseInt(f[1])||0,g=s!=e.hideParent):g=typeof e.hideParent<"u",g&&[].forEach.call(document.querySelectorAll(".searchJumper-hide"),y=>{y.dataset.content===e.showWords&&(y.classList.remove("searchJumper-hide"),y.style.display="",y.removeAttribute("data-content"))}),this.marks[e.showWords].forEach(y=>{if(y&&(y.title=a,n&&(y.style=n),g&&s!=-1)){let I=s,L=y.parentElement;for(;I-- >0&&L;)L=L.parentElement;L&&(L.dataset.content=e.showWords,L.classList.add("searchJumper-hide"),L.innerHTML=ee(""))}}),s==-1?delete e.hideParent:e.hideParent=s,this.lockWords=this.lockWords.replace(e.oriWord,t),e.oriWord=t}}removeHighlightWord(e){if(!this.lockWords||(this.splitSep||this.emptyInPageWords(),!e.oriWord)||this.lockWords.indexOf(e.oriWord)===-1)return;let t=this.lockWords.match(/^\$(c.|o)/),r,i=0;t=t?t[0]:"";let a=this.lockWords.replace(t,"").split(this.splitSep);if(r=a.indexOf(e.oriWord),this.wordModeBtn.classList.contains("checked")){r!=-1&&(a.splice(r,1),i=1);for(let s=0;s<a.length;s++){let o=a[s].split(/[ ]/);if(r=o.indexOf(e.oriWord),r!=-1)if(i++,i==1)o.splice(r,1),a[s]=o.join(" ");else break}this.lockWords=t+a.join(this.splitSep)}else{if(r<0)return;a.splice(r,1),i=a.indexOf(e.oriWord)!=-1?2:1,this.lockWords=t+a.join(this.splitSep)}if(delete this.highlightSpans[e.showWords],r=this.curHighlightWords.indexOf(e),r<0||(this.curHighlightWords.splice(r,1),this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px",i>1))return;this.marks[e.showWords].forEach(s=>{if(s.parentNode)if(s.dataset.block)s.parentNode&&s.parentNode.removeChild(s);else if(!/^MARK$/i.test(s.nodeName))s.classList.remove("searchJumper"),s.style.cssText=s.dataset.css||"",delete s.dataset.css;else{let o=document.createTextNode(s.firstChild.data);s.parentNode.replaceChild(o,s),o.parentNode.normalize()}}),delete this.marks[e.showWords];let n=[].slice.call(this.navMarks.children);[].forEach.call(n,s=>{s.dataset.content==e.showWords&&s.parentNode.removeChild(s)})}emptyInPageWords(){this.searchInPageLockWords.innerHTML=ee(),this.highlight("")}focusHighlightByText(e,t,r){let i=this.marks[e];if(!i||i.length===0)return;e!=this.focusText?(this.focusIndex=0,this.focusText=e):t?this.focusIndex!=i.length-1?this.focusIndex=this.focusIndex+1:this.focusIndex=0:this.focusIndex!=0?this.focusIndex=this.focusIndex-1:this.focusIndex=i.length-1;let a=this.focusIndex;if(a>=i.length&&(a=0),t)for(;(!i[a].offsetParent||i[a].dataset.type)&&(a!=i.length-1?a=a+1:a=0,a!=this.focusIndex););else for(;(!i[a].offsetParent||i[a].dataset.type)&&(a!=0?a=a-1:a=i.length-1,a!=this.focusIndex););this.focusIndex=a,this.focusHighlight(i[this.focusIndex]),this.setHighlightSpan(r,this.focusIndex,i)}getRect(e){let t=e.getBoundingClientRect(),r={left:t.left,top:t.top,width:t.width,height:t.height},i=e.ownerDocument&&e.ownerDocument.defaultView,a=i&&i.frameElement;for(;a;){const n=a.getBoundingClientRect();r.left+=n.left,r.top+=n.top,i=i.parent,a=i.frameElement}return r}focusHighlight(e){if(!e)return;this.focusMark&&this.focusMark.removeAttribute("data-current"),this.focusMark=e,this.wPosBar||(this.wPosBar=document.createElement("div"),this.hPosBar=document.createElement("div"),this.wPosBar.className="searchJumperPosBar searchJumperPosW",this.hPosBar.className="searchJumperPosBar searchJumperPosH"),this.wPosBar.parentNode||(this.addToShadow(this.wPosBar),this.addToShadow(this.hPosBar));let t=this.getRect(e);this.wPosBar.style.top=t.top+document.documentElement.scrollTop+_(document).scrollTop+"px",this.wPosBar.style.height=t.height+"px",this.hPosBar.style.left=t.left+"px",this.hPosBar.style.width=t.width+"px",this.wPosBar.style.animationName="",this.hPosBar.style.animationName="";let r=this;setTimeout(async()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),e.dataset.current=!0,r.wPosBar.style.animationName="fadeit",r.hPosBar.style.animationName="fadeit",r.fixTimes=0;let i=window.innerHeight||document.documentElement.clientHeight;function a(){if(r.focusMark!=e)return;let n=r.getRect(e);if(r.wPosBar.style.top=n.top+document.documentElement.scrollTop+_(document).scrollTop+"px",r.hPosBar.style.left=n.left+"px",!(r.fixTimes>0&&n.top>i/3&&n.top<i/3*2)){if(++r.fixTimes==5)e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});else if(r.fixTimes>10){e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),r.wPosBar.style.animationName="",r.hPosBar.style.animationName="";return}setTimeout(()=>{a()},200)}}a()},0)}getHighlightSpanByText(e){return this.highlightSpans[e]}setHighlightSpan(e,t,r){if(!e)return;let i=e.querySelector("em");i||(i=document.createElement("em"),e.insertBefore(i,e.firstChild)),t++;let a=0;r&&r.length&&(a=0,r.forEach(n=>{n.dataset.type||a++})),i.innerHTML=ee("["+t+"/"+a+"]")}getHighlightStyle(e,t,r){if(!t&&!r){let n=c.prefConfig.inPageWordsStyles[e];if(n)return n}r=r||"";function i(){let n,s,o;return n=Math.floor(256*Math.random()),s=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),n=n.toString(16),n.length===1&&(n="0"+n),s=s.toString(16),s.length===1&&(s="0"+s),o=o.toString(16),o.length===1&&(o="0"+o),"#"+n+s+o}function a(n){if(n.indexOf("#")!==0)return"";if(n==="#ffff00")return"black";n=n.substr(1);let s,o,p;s=parseInt(n.substr(0,2),16),o=parseInt(n.substr(2,2),16),p=parseInt(n.substr(4,2),16);let d=s*.299+o*.587+p*.114;s=255-s,o=255-o,p=255-p;let m=s*.299+o*.587+p*.114;return Math.abs(m-d)<=128?d>158?"#000000":"#FFFFFF":(s=s.toString(16),s.length===1&&(s="0"+s),o=o.toString(16),o.length===1&&(o="0"+o),p=p.toString(16),p.length===1&&(p="0"+p),"#"+s+o+p)}if(t||(t=c.prefConfig.firstFiveWordsColor[e]),!t)switch(e){case 0:t="#ffff00";break;case 1:t="#e91e63";break;case 2:t="#00bcd4";break;case 3:t="#008000";break;case 4:t="#800080";break;default:t=i();break}if(t){let n=a(t);n&&(n="color:"+n+"!important;"),t=`background:${t}!important;${n}`}return`${t}${r}`}createNavMark(e,t,r,i,a){let n=this,s=document.createElement("span"),o=mr(e,n.targetIframe);s.title=t.title||t.showWords,s.dataset.top=o,s.dataset.content=t.showWords,s.style.top=o/a*100+"%",s.style.background=e.style.background||"yellow",s.addEventListener("click",p=>(p.stopPropagation(),p.preventDefault(),n.focusIndex=r,n.focusHighlight(e),n.setHighlightSpan(n.getHighlightSpanByText(t.showWords),r,i),n.navPointer.style.display="",n.navPointer.style.top=s.offsetTop+33+"px",!1),!0),n.navMarks.appendChild(s)}anylizeDomWithTextPos(e,t){return t||(t={text:"",data:[]}),!e||!e.childNodes||!e.childNodes.length||e.nodeType==1&&!e.offsetParent&&!e.offsetHeight&&(!e.firstElementChild||!e.firstElementChild.offsetParent)||e.childNodes.forEach(r=>{if(r.classList&&r.classList.contains("searchJumper")||/^(img|svg|picture|br|hr|textarea)$/i.test(r.nodeName)){const i=t.text.length;t.text+=`
`,t.data.push({index:i,node:r,text:`
`})}else if(r.offsetParent||r.offsetHeight||r.firstElementChild&&r.firstElementChild.offsetParent)if(/^(div|h\d|p|form|ul|li|ol|dl|address|menu|table|fieldset|td)$/i.test(r.nodeName)){let i=t.text.length;t.text+=`
`,t.data.push({index:i,node:{},text:`
`}),t=this.anylizeDomWithTextPos(r,t),i=t.text.length,t.text+=`
`,t.data.push({index:i,node:{},text:`
`})}else t=this.anylizeDomWithTextPos(r,t);else if(r.nodeType===3){let i;if(r.parentNode.nodeType==1&&r.parentNode.childNodes.length==1?i=r.parentNode.innerText||r.data:i=r.data,!i||!i.trim())return;const a=t.text.length;t.text+=i,t.data.push({index:t.text.length-1,node:r,text:i})}}),t}highlightPopup(e,t){let r=this,i,a=n=>{i&&r.clingPos(e,r.tips)};e.addEventListener("mouseenter",n=>{if(e.addEventListener("mousemove",a),A!=e||!r.funcKeyCall){if(i=null,A=e,t.showTips)if(/^\d+$/.test(t.showTips)){let o=r.autoGetFirstType().querySelectorAll("a.search-jumper-btn[data-show-tips]:not(.notmatch)"),p=parseInt(t.showTips)-1;i=o[p]}else i=r.getTargetSitesByName([t.showTips])[0];r.setFuncKeyCall(!0),i?(r.bar.style.setProperty("display","none","important"),i.dispatchEvent(new CustomEvent("showTips"))):r.showInPage(!0,n)}}),e.addEventListener("mouseleave",n=>{e.removeEventListener("mousemove",a)})}createHighlightMark(e,t,r){let i=this,a=document.createElement("mark");a.className="searchJumper",e.title&&(a.title=JSON.parse('"'+e.title+'"')),e.popup&&this.highlightPopup(a,e),a.style.cssText=e.style,a.addEventListener("click",o=>{if(o.altKey)return o.stopPropagation(),o.preventDefault(),!1}),a.dataset.content=e.showWords;let n,s=()=>{clearTimeout(n),n=setTimeout(()=>{let o=location.href.replace(/#.*/,"")+"#sjhl="+encodeURIComponent(e.oriWord)+"&i="+(t+1);ye.history.replaceState("","",o)},800)};return a.addEventListener("mousedown",o=>{if(s(),!o.altKey)return;let p,d=t;for(;(!p||p.dataset.type)&&(o.button===0?d!=r.length-1?(d++,i.focusIndex=d):i.focusIndex=0:o.button===2&&(d!=0?(d--,i.focusIndex=d):i.focusIndex=r.length-1),p=r[i.focusIndex],d!=t););i.focusHighlight(p),i.setHighlightSpan(i.getHighlightSpanByText(e.showWords),i.focusIndex,r),i.focusText=e.showWords}),a.addEventListener("mouseup",o=>{clearTimeout(n)}),a}createAddonSpan(e,t){let r="addon_"+this.addonsList.children.length,i=this,a=document.createElement("div"),n=document.createElement("input");n.type="checkbox",n.id=r,n.checked=!t.disable,n.addEventListener("change",o=>{c.prefConfig.disableAddon[e]=!n.checked,t.disable=!n.checked,n.checked&&i.findInpageAddons.forEach(p=>{if(p!=t&&p.sort==t.sort){p.disable=!0;let d=p.name||"addon"+r++;i.addonCheckboxDict[d].checked=!1,c.prefConfig.disableAddon[d]=!0}}),U.setItem("searchData",c),i.lockWords&&i.refreshPageWords(i.lockWords)}),a.appendChild(n),a.title=t.title||"";let s=document.createElement("label");s.setAttribute("for",r),s.innerText=e,a.appendChild(s),this.addonCheckboxDict[e]=n,this.addonsList.appendChild(a)}findAccentedWord(e,t,r){const i=t.length;let a=0,n=-1;for(let s=0;s<e.length;s++){const o=r[s];if(o!=="")if(o===t[a]){if(a===0&&(n=s),a++,a===i)return{pos:n,len:s-n+1}}else a=0,n=-1,o===t[0]&&(n=s,a=1)}return n=e.indexOf(t),{len:t.length,pos:n}}findPosInStr(e,t,r,i,a){if(!e)return{len:0,pos:-1};let n=0,s=-1,o=!1;if(this.findInpageAddons.length)for(let p=0;p<this.findInpageAddons.length;p++){let d=this.findInpageAddons[p];if(!d||!d.run||d.disable)continue;o=!0;let m=d.run(e,t);if(m&&m.matched){n=m.len,s=m.pos;break}}return s==-1&&!o?this.findAccentedWord(r,i,a):{len:n,pos:s}}highlight(e,t,r,i){if(!e&&(!this.curHighlightWords||this.curHighlightWords.length===0))return;if(!t){this.highlight(e,_(document),r);return}if([].forEach.call(t.getElementsByTagName("iframe"),u=>{if(!u.offsetParent||u.offsetHeight<100||u.offsetWidth<100)return;let f;try{f=u.contentDocument||u.contentWindow.document}catch{return}f&&_(f)&&this.highlight(e,_(f),r,u)}),this.targetIframe=i||!1,t.id=="searchJumperModifyWord")return;t=t||_(document);let a=this.wordModeBtn.classList.contains("checked"),n=[],s=!1,o=this;if(e===""){this.highlightSpans={},Object.values(this.marks).forEach(async u=>{if(!u)return;let f=new Set;for(let y of u)if(y.parentNode)if(y.dataset.block)y.parentNode&&y.parentNode.removeChild(y);else if(!/^MARK$/i.test(y.nodeName))y.classList.remove("searchJumper"),y.style.cssText=y.dataset.css||"",delete y.dataset.css;else{let I=document.createTextNode(y.firstChild.data);y.parentNode.replaceChild(I,y),f.add(I.parentNode)}f.forEach(y=>{y.normalize()})}),[].forEach.call(t.querySelectorAll(".searchJumper-hide"),u=>{u.classList.remove("searchJumper-hide"),u.style.display="",u.removeAttribute("data-content")}),this.navMarks.innerHTML=ee(),this.marks={},this.curHighlightWords=[];return}this.inPageStyle||(this.inPageStyle=Me(this.inPageCss)),this.inPageStyle.parentNode||document.head.appendChild(this.inPageStyle);let p=e==="insert";p?(e=this.curHighlightWords,this.refreshNavMarks()):this.curHighlightWords=(this.curHighlightWords||[]).concat(e),this.fakeTextareas=new Map;let d=Math.max(document.documentElement.scrollHeight,_(document).scrollHeight);this.navMarks.style.display="none";let m=[];function g(u,f,y){let I,L=-1,O,H,x,N;O=0;let R=u.parentNode;if(u.nodeType==1&&u.className&&u.className.indexOf&&u.className.indexOf("searchJumper")!=-1)return 0;if(y&&(u.nodeType==1||u.nodeType==11)){let C=function(D,V,Z){let ne=[],b=V,S="",h="",k="";for(const E of q){const J=E.index;if(D>J)continue;let $=D-(J-E.text.length)-1,F="full";if($<0?E.text.length<b?F="middle":F="end":E.text.length-$<b&&(F="start"),F==="full"&&(Z=""),ie&&(F=="full"?(S=$==0?`
`:E.text[$-1],h=$+b==E.text.length?`
`:E.text[$+b],h!==`
`&&(k=$+b+1==E.text.length?`
`:E.text[$+b+1])):F=="start"&&!S?S=$==0?`
`:E.text[$-1]:(F=="end"||F=="full")&&!h&&(h=$+b==E.text.length?`
`:E.text[$+b],h!==`
`&&(k=$+b+1==E.text.length?`
`:E.text[$+b+1])),S&&h&&(/[a-z]/i.test(S)||/[a-rt-z]/i.test(h)||h.toLowerCase()=="s"&&/[a-z]/i.test(k))))break;$<0&&($=0);let ce=Math.min(b,E.text.length-$);if(b-=ce,!E.text.trim()){F==="start"&&(D+=E.text.length);continue}let oe;for(let fe=0;fe<te.length;fe++)if(te[fe].node==E.node){oe=te[fe];break}if(oe?oe.match.push({pos:$,len:ce,type:F,matched:Z}):te.push({node:E.node,text:E.text,match:[{pos:$,len:ce,type:F,matched:Z}]}),b<=0)break}},W=function(){if(L=-1,f.isRe){let D=T.match(new RegExp(f.content,f.reCase));D&&(I=D[0].length,L=D.index)}else{let D=o.findPosInStr(T,f.content,w,j,P);I=D.len,L=D.pos}if(L>-1){let D=T.slice(L,L+I);T=T.slice(L+I),w=w.slice(L+I),P=P.slice(L+I),L+=ue,ue=L+I,C(L,I,D),W()}},v=o.anylizeDomWithTextPos(u),T=v.text,w=T.toUpperCase(),P=[];for(let D=0;D<w.length;D++){const V=w[D].normalize("NFD").replace(/[\u0300-\u036f]/g,"");P.push(V)}let j=f.content.toUpperCase(),q=v.data,ue=0,te=[],ie=(f.init||a)&&/^[a-z]+$/i.test(f.content);W(),te.length&&te.forEach(D=>{if(typeof f.hideParent<"u"){let V=f.hideParent,Z=D.node.parentElement;for(;V-- >0&&Z;)Z=Z.parentElement;Z&&Z.classList&&!Z.classList.contains("searchJumper-hide")&&(Z.innerHTML=ee(""),Z.dataset.content=f.showWords,Z.classList.add("searchJumper-hide"))}else{let V=o.marks[f.showWords],Z=V.length,ne,b,S="";D.node.parentNode.nodeType==1&&(S=getComputedStyle(D.node.parentNode).display),S.indexOf("flex")!=-1||S.indexOf("grid")!=-1||S.indexOf("layer")!=-1?(b=document.createElement("span"),b.style.all="unset"):b=document.createDocumentFragment();let h=document.createTextNode(D.text);b.appendChild(h);let k=D.match.reverse(),E=[],J=k.length-1;k.forEach($=>{switch(ne=o.createHighlightMark(f,Z+J,V),$.type){case"start":ne.style.borderTopRightRadius=0,ne.style.borderBottomRightRadius=0,J--;break;case"middle":ne.style.borderRadius=0;break;case"end":ne.style.borderTopLeftRadius=0,ne.style.borderBottomLeftRadius=0;break;default:J--;break}x=h.splitText($.pos),$.type!="start"&&$.type!="middle"&&x.data.length&&x.splitText($.len),N=x.cloneNode(!0),ne.appendChild(N),$.type!="full"&&$.type!="start"&&(ne.dataset.type=$.type),$.matched&&(ne.dataset.matched=$.matched),b.replaceChild(ne,x),E.unshift(ne)}),D.node.parentNode.replaceChild(b,D.node),o.marks[f.showWords].push(...E),E.forEach($=>{$.dataset.type||m.push([$,f,Z,V,d])})}})}let z=!0;if(f.link){if(u.nodeType==1&&u.href&&u.href.match&&(z=!1,u.href.match(new RegExp(f.content,f.reCase))))if(typeof f.hideParent<"u"){let T=f.hideParent,w=u;for(;T-- >0&&w;)w=w.parentElement;if(w)return w.innerHTML=ee(""),w.dataset.content=f.showWords,w.classList.add("searchJumper-hide"),0}else{let T=o.marks[f.showWords],w=T.length;u.classList.add("searchJumper"),f.title&&(u.title=JSON.parse('"'+f.title+'"')),f.popup&&o.highlightPopup(u,f),u.dataset.css||(u.dataset.css=u.style.cssText),f.style&&(u.style.cssText+=f.style),u.addEventListener("click",P=>{if(P.altKey)return P.stopPropagation(),P.preventDefault(),!1}),u.dataset.content=f.showWords,u.addEventListener("mousedown",P=>{if(!P.altKey)return;let j;P.button===0?w!=T.length-1?o.focusIndex=w+1:o.focusIndex=0:P.button===2&&(w!=0?o.focusIndex=w-1:o.focusIndex=T.length-1),j=T[o.focusIndex],o.focusHighlight(j),o.setHighlightSpan(o.getHighlightSpanByText(f.showWords),o.focusIndex,T),o.focusText=f.showWords}),o.marks[f.showWords].push(u),m.push([u,f,w,T,d])}}else{let v="";if(u.nodeType==1&&u.value&&(u.offsetParent||u.offsetHeight)&&!f.init&&/^(button|select|input|textarea)$/i.test(u.nodeName)&&!/^(hidden|file|password|radio|range|checkbox|image)$/i.test(u.type)&&(v=u.value),v){let W=function(D,V){if(D){if(!P){P=document.createElement("pre"),P.className="searchJumper";let b=document.createTextNode(v);P.appendChild(b);let S,h=/^(number|string)$/,k=[],E=u.style;for(S in E)if(!/^(content|outline|outlineWidth)$/.test(S)){let J=j[S];J!==""&&h.test(typeof J)&&(S=S.replace(/([A-Z])/g,"-$1").toLowerCase(),k.push(S),k.push(":"),k.push(J),k.push(";"))}k=k.join(""),P.style.cssText=k,P.style.position="fixed",P.style.left="0px",P.style.top="0px",P.style.margin="0",u.nodeName&&u.nodeName.toLowerCase&&u.nodeName.toLowerCase()!=="textarea"&&(P.style.display="inline-grid",P.style.lineHeight=P.style.height,P.style.boxSizing=="border-box"&&(P.style.paddingTop=0)),o.fakeTextareas.set(u,P)}document.body.appendChild(P);let Z=document.createRange();Z.setStart(P.firstChild,Math.min(P.firstChild.length,V)),Z.setEnd(P.firstChild,Math.min(P.firstChild.length,V+1));let ne=Z.getBoundingClientRect();if(document.body.removeChild(P),typeof f.hideParent<"u"){let b=f.hideParent,S=u.parentElement;for(;b-- >0&&S;)S=S.parentElement;if(S)return S.innerHTML=ee(""),S.dataset.content=f.showWords,S.classList.add("searchJumper-hide"),0}else{let b=o.marks[f.showWords],S=b.length,h=document.createElement("mark");h.className="searchJumper",h.dataset.block=!0,f.title&&(h.title=JSON.parse('"'+f.title+'"')),h.style.cssText=f.style,h.dataset.content=f.showWords,h.innerText=D,h.style.padding="0",h.style.position="absolute",h.style.fontSize=P.style.fontSize,h.style.fontFamily=P.style.fontFamily,h.style.lineHeight="1",h.style.pointerEvents="none",u.parentNode.appendChild(h);let k=ne.left+q,E=ne.top+ue;if(h.style.left=k+"px",h.style.top=E+"px",o.marks[f.showWords].push(h),m.push([h,f,S,b,d]),u.nodeName&&u.nodeName.toLowerCase&&u.nodeName.toLowerCase()=="textarea"){let J=$=>{h.parentNode?(h.style.left=k-u.scrollLeft+"px",h.style.top=E-u.scrollTop+"px"):(h.parentNode.removeChild(h),u.removeEventListener("scroll",J))};u.addEventListener("scroll",J)}}}};z=!1;let T=!1,w=0,P=o.fakeTextareas.get(u);if(p&&P)return 0;let j=getComputedStyle(u),q=u.offsetLeft,ue=u.offsetTop,te=v.toUpperCase(),ie=[];for(let D=0;D<te.length;D++){const V=te[D].normalize("NFD").replace(/[\u0300-\u036f]/g,"");ie.push(V)}let C=f.content.toUpperCase();for(;;){if(f.isRe)T=v.match(new RegExp(f.content,f.reCase)),T&&(L=T.index,T=T[0]);else{let D=o.findPosInStr(v,f.content,te,C,ie);I=D.len,L=D.pos,(f.init||a)&&L>=0&&/^[a-z]+$/i.test(f.content)&&(L!==0&&/[a-z]/i.test(v[L-1])&&(L=-1),L+f.content.length!==v.length&&/[a-z]/i.test(v[L+I])&&(L=-1)),T=L>=0?v.slice(L,L+I):!1}if(T)W(T,w+L),w+=L+T.length,v=v.slice(L+T.length),te=te.slice(L+T.length),ie=ie.slice(L+T.length);else break}}}if(z&&(!r||u===t)&&(u.nodeType==1||u.nodeType==11)&&u.childNodes&&!/^(SCRIPT|STYLE|MARK|SVG|TEXTAREA)$/i.test(u.nodeName)&&(!f.init||u.ariaHidden!="true"&&u.role!="search"&&(!u.hasAttribute||u.hasAttribute("jsname")==!1)))if(!s&&/^(PRE|CODE)$/i.test(u.nodeName))n.push(u);else{for(var K=0;K<u.childNodes.length;++K)K=K+g(u.childNodes[K],f);try{u.shadowRoot&&(K=K+g(u.shadowRoot,f,!0))}catch(v){pe(v)}}return O}e.forEach(u=>{if(o.marks[u.showWords]||(o.marks[u.showWords]=[]),u.inRange){let f=t;t.parentNode&&(f=t.parentNode),[].forEach.call(f.querySelectorAll(u.inRange),y=>{(y==t||t.contains(y))&&g(y,u,!0)})}else g(t,u,!0)}),m.forEach(u=>{o.createNavMark(...u)}),this.navMarks.style.display="",setTimeout(()=>{o.navMarks.style.display="none",m=[],s=!0,e.forEach(u=>{o.marks[u.showWords]||(o.marks[u.showWords]=[]),n.forEach(f=>{g(f,u,!0)})}),m.forEach(u=>{o.createNavMark(...u)}),o.navMarks.style.display=""},1e3),this.navMarks.innerHTML!=""&&(this.searchJumperNavBar.classList.add("sjNavShow"),Ye&&(this.appendBar(),this.con.style.display="",this.setNav(!0,!0)))}refreshPageWords(e){this.lockWords="",this.searchJumperInPageInput.value="",this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords();let t=e||Ne;t&&(this.searchJumperInPageInput.value=t,this.submitInPageWords(t==this.lastSearchEngineWords),this.appendBar())}refreshNav(){this.setNav(Ye)}refreshNavMarks(){this.refreshNavMarksTimer&&clearTimeout(this.refreshNavMarksTimer),this.refreshNavMarksTimer=setTimeout(()=>{let e=Math.max(document.documentElement.scrollHeight,_(document).scrollHeight);this.navPointer.style.display="none",this.navMarks.style.display="none",[].forEach.call(this.navMarks.children,t=>{t.style.top=t.dataset.top/e*100+"%"}),this.navMarks.style.display=""},1e3)}checkCharacterData(e){setTimeout(()=>{this.highlight("insert",e,!0)},0)}removeMark(e){let t=e.dataset.content,r=this.marks[t];if(!r)return;var i=r.indexOf(e);if(i===-1)return;r.splice(i,1),this.marks[t]=r;let a=this.navMarks.querySelectorAll(`span[data-content="${t}"]`)[i];a&&this.navMarks.removeChild(a)}submitIgnoreSpace(e){e&&(!this.lockWords&&e.indexOf("$c")!==0&&e.indexOf("$o")!==0&&e.indexOf(" ")!==-1&&(this.splitSep="\u25CE"),this.searchJumperInPageInput.value=e,this.submitInPageWords())}siteBtnReturnHome(e){e.parentNode&&e.parentNode.removeChild(e)}closeShowAll(){if(!(!this.con.classList.contains("search-jumper-showall")||et)){if(this.clearInputHide(),clearInterval(this.showAllTimeTimer),document.removeEventListener("mousedown",self.showAllMouseHandler),document.removeEventListener("keydown",self.showAllKeydownHandler),this.con.classList.remove("search-jumper-showall"),document.documentElement.style.scrollbarWidth=this.preScrollbarWidth,this.searchJumperInputKeyWords.value="",this.historylist.innerHTML=ee(),this.touched=!1,this.initPos(),this.funcKeyCall&&this.setFuncKeyCall(!1),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){let e=this.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(e&&!e.classList.contains("search-jumper-open"))if(e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}this.bar.style.display=""}}toggleShowAll(){this.appendBar(),!(!this.con||!this.con.parentNode)&&(this.con.classList.contains("search-jumper-showall")?this.closeShowAll():this.showAllSites())}showAllSites(){if(!this.con||!this.con.parentNode||this.con.classList.contains("search-jumper-showall"))return;this.con.style.display="",this.clearInputHide(),this.alllist.appendChild(this.filterSites),this.filterGlob.innerHTML=ee();let e=this,t=this.tileInput.value;this.setFuncKeyCall(!1),this.hideSearchInput(),this.con.classList.add("search-jumper-showall"),this.preScrollbarWidth=document.documentElement.style.scrollbarWidth||"",document.documentElement.style.scrollbarWidth="none",clearInterval(this.showAllTimeTimer);const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];window.innerWidth<1e3?(e.timeInAll.style.fontSize="15px",e.dayInAll.style.fontSize="15px"):(e.timeInAll.style.fontSize="",e.dayInAll.style.fontSize="");let i=new Date,a=i.getFullYear(),n=i.getMonth(),s=i.getDate(),o=B(r[i.getDay()])+"<br/>"+a+"-"+(++n<10?"0"+n:n)+"-"+(s<10?"0"+s:s);if(Fe.indexOf("zh")==0){let m=yr(a,n,s);if(m){let g=`${m.lunarYear}\u5E74${m.lunarMonth}\u6708${m.lunarDay}`;o=o+"<br/>"+g}}e.dayInAll.innerHTML=ee(o);let p=()=>{let m=new Date,g=m.getHours(),u=m.getMinutes(),f=m.getSeconds();e.timeInAll.innerText=(g<10?"0"+g:g)+":"+(u<10?"0"+u:u)+":"+(f<10?"0"+f:f)};this.showAllTimeTimer=setInterval(p,1e3),p(),Se.forEach(m=>{if(m.style.display!="none"){let g=m.querySelector(".sitelist");g&&(e.sitelistBox.appendChild(g),e.initList(g))}}),this.historySiteBtns.slice(0,20).forEach(m=>{let g=m.querySelector("img");g&&g.dataset.src&&(g.src=g.dataset.src,delete g.dataset.src),e.historylist.appendChild(m)});let d="";A&&(A.nodeName.toUpperCase()=="A"||A.parentNode&&A.parentNode.nodeName.toUpperCase()=="A")&&(d=A.textContent.trim()),t=t||Oe()||d||Ee,this.searchJumperInputKeyWords.value=t,setTimeout(()=>{e.showAllMouseHandler||(e.showAllMouseHandler=m=>{(m.isTrusted==!1||m.target.className==="sitelistBox"||m.target.className==="search-jumper-showallBg")&&e.closeShowAll()}),e.con.addEventListener("mousedown",e.showAllMouseHandler),e.showAllKeydownHandler||(e.showAllKeydownHandler=m=>{m.keyCode==27&&e.closeShowAll()}),document.addEventListener("keydown",e.showAllKeydownHandler,!0),this.searchJumperInputKeyWords.value&&(this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select())},0)}switchSite(e){if(!ae||this.bar.style.display=="none")return;let t=this.con.querySelector(".search-jumper-btn.current");if(e)for(t=t.nextElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.nextElementSibling;else for(t=t.previousElementSibling;t&&!(!t.classList.contains("notmatch")&&t.style.display!="none"&&t.dataset.current!="true"&&t.dataset.isPage=="true");)t=t.previousElementSibling;t&&this.openSiteBtn(t,"_self")}clearInputHide(){Se.forEach(e=>{e.classList.remove("input-hide")}),this.allSiteBtns.forEach(e=>{e[0].classList.remove("input-hide")}),this.allListBtns.forEach(e=>{e.classList.remove("input-hide")}),this.allLists.forEach(e=>{e.classList.remove("input-hide")})}showSearchInput(){if(this.con&&this.con.classList.contains("search-jumper-showall"))return;this.recoveHistory(),this.con.classList.add("in-input"),this.searchInput.value="",this.contentContainer.appendChild(this.filterSites);let e=$e();if(e&&(this.searchJumperInputKeyWords.value=e),this.filterSitesTab.checked){this.con.classList.remove("in-find"),c.prefConfig.defaultPicker&&this.togglePicker(),this.searchJumperInputKeyWords.value||(this.searchJumperInputKeyWords.value=Oe()||Ee);let t=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)>span");if(t&&!t.parentNode.classList.contains("search-jumper-open"))if(t.onmouseup)t.onmouseup();else{let r=new PointerEvent("mouseup");t.dispatchEvent(r)}vt&&(this.searchInput.value=vt,this.searchInput.dispatchEvent(new Event("input"))),this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.select()}else this.searchInPageTab.checked&&(this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),setTimeout(()=>{e&&this.lockWords.indexOf(e)==-1?(this.searchJumperInPageInput.value="",this.navMarks.innerHTML?(this.searchJumperInPageInput.value=e,this.submitInPageWords()):this.submitIgnoreSpace(e)):this.searchJumperInPageInput.value?this.submitInPageWords():!this.initShowSearchInput&&Ee&&this.lockWords!==Ee&&(this.searchJumperInPageInput.value=Ee,this.initShowSearchInput=!0,this.searchJumperInPageInput.select())},10));this.inInput=!0,this.clearInputHide(),this.lockWords?this.searchJumperInPageInput.style.paddingLeft=this.searchInPageLockWords.clientWidth+3+"px":this.searchJumperInPageInput.style.paddingLeft="",c.prefConfig.altToHighlight&&(document.removeEventListener("mouseup",this.checkSelHandler),document.addEventListener("mouseup",this.checkSelHandler))}togglePicker(){this.pickerBtn.classList.toggle("checked"),this.con.classList.toggle("in-pick"),this.searchJumperInputKeyWords.disabled=!this.searchJumperInputKeyWords.disabled,ke.toggle(!0),this.searchJumperInputKeyWords.disabled&&(this.searchJumperInputKeyWords.value="")}hideSearchInput(){this.inInput=!1,this.clearInputHide(),this.con.classList.remove("in-find"),this.con.classList.remove("in-input"),this.con.classList.remove("lock-input"),this.bar.classList.remove("initShow"),this.searchInput.value="",this.searchJumperInputKeyWords.value="",this.pickerBtn.classList.remove("checked"),this.searchJumperInputKeyWords.disabled=!1,ke.close(),document.removeEventListener("mouseup",this.checkSelHandler),this.setFuncKeyCall(!1),this.closeOpenType()}removeBar(){this.shadowContainer&&this.shadowContainer.parentNode&&this.shadowContainer.parentNode.removeChild(this.shadowContainer),this.con.parentNode&&this.con.parentNode.removeChild(this.con)}async testCSP(){let e=this,t=i=>{!i.violatedDirective||i.violatedDirective.indexOf("style-src")==-1||(Ke=!0)};window.addEventListener("securitypolicyviolation",t);let r=Me("html {color: #000;}");this.addToShadow(r),await Ae(0),window.removeEventListener("securitypolicyviolation",t),r.parentNode&&r.parentNode.removeChild(r)}addToShadow(e){this.shadowContainer||(this.shadowContainer=document.createElement("div")),this.shadowContainer.parentNode||(Te?document.body.appendChild(this.shadowContainer):document.documentElement.appendChild(this.shadowContainer));let t;if(Ke){if(/^style$/i.test(e.nodeName))return!0;t=this.shadowContainer}else if(this.shadowRoot)t=this.shadowRoot;else{this.shadowContainer.className="search-jumper-shadow";let r=Me(`
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
                        `);this.shadowContainer.appendChild(r);let i=this.shadowContainer.attachShadow({mode:"closed"});t=document.createElement("div"),t.id="search-jumper-root",t.style.display="none",t.setAttribute("contenteditable","false");let a=document.createElement("style");a.innerHTML=ee("#search-jumper-root{display: block!important;}"),t.appendChild(a),i.appendChild(t),this.shadowRoot=t}return e.parentNode!=t&&t.appendChild(e),!0}contains(e){return e==this.shadowContainer||this.bar.contains(e)}appendBar(){if((!Ze||!Ze.parentNode)&&(Ze=Me(Lt),Ke||this.addToShadow(Ze)),this.addToShadow(this.con)){let e=this,t=()=>{setTimeout(()=>{if(e.shadowContainer&&!e.shadowContainer.parentNode){Te?document.body.appendChild(e.shadowContainer):document.documentElement.appendChild(e.shadowContainer),t();return}!et&&e.con.parentNode&&getComputedStyle(e.con).zIndex!="2147483647"&&(this.removeBar(),Ke?pe(B("cspDisabled")):(Ke=!0,Ze=Me(Lt),e.shadowContainer.parentNode.removeChild(e.shadowContainer),e.shadowContainer=document.createElement("div"),e.shadowContainer.setAttribute("contenteditable","false"),document.documentElement.appendChild(e.shadowContainer),e.appendBar()))},100)};t()}}async searchBySiteName(e,t,r){t||(t={}),t&&t.type==="drop"&&this.closeShowAll();for(let[i,a]of this.allSiteBtns)if(i.dataset.name==e){if(i.dataset.showTips){i.dispatchEvent(new CustomEvent("showTips"));return}await this.siteSetUrl(i,{button:t.button,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey});let n=/^(https?|ftp):/.test(i.href);n&&i.setAttribute("target",r?"_self":"_blank"),i.click(),n&&i.setAttribute("target",i.dataset.target==1?"_blank":"_self");return}for(let i=Se.length-1;i>=0;i--){let a=Se[i];if(a.dataset.type==e){a.firstChild.onmouseup&&a.firstChild.onmouseup({button:2});return}}}async searcAllhByTypeName(e){for(let t=Se.length-1;t>=0;t--){let r=Se[t];if(r.dataset.type==e){r.firstChild.onmouseup&&r.firstChild.onmouseup({button:2});return}}}autoGetFirstType(){A||(A=_(document));let e;switch(A.nodeName.toUpperCase()){case"IMG":e=this.bar.querySelector(".search-jumper-targetImg:not(.notmatch)");break;case"AUDIO":e=this.bar.querySelector(".search-jumper-targetAudio:not(.notmatch)");break;case"VIDEO":e=this.bar.querySelector(".search-jumper-targetVideo:not(.notmatch)");break;case"A":$e()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)");break;default:$e()?e=this.bar.querySelector(".search-jumper-needInPage:not(.notmatch)"):A.parentNode.nodeName.toUpperCase()==="A"?e=this.bar.querySelector(".search-jumper-targetLink:not(.notmatch)"):e=this.bar.querySelector(".search-jumper-targetPage:not(.notmatch)");break}if(e||(e=this.bar.querySelector(".search-jumper-targetAll:not(.notmatch)")||this.bar.querySelector(".search-jumper-type")),e){this.setFuncKeyCall(!1);let t=new PointerEvent("mouseup");e.classList.contains("search-jumper-open")&&(e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)),e.children[0].onmouseup?e.children[0].onmouseup():e.children[0].dispatchEvent(t)}return e}searchAuto(e,t){e||(e=0);let r=this.autoGetFirstType();if(!r)return;let i=r.querySelectorAll("a.search-jumper-btn:not(.notmatch)");if(e<i.length){let a=i[e];this.searchBySiteName(a.dataset.name,t)}}setNav(e,t){!t&&Ye!=e&&(U.setItem("navEnable",e||""),Ye=e),e?(t||this.locBtn.classList.add("checked"),this.searchJumperNavBar.style.display=""):(t||this.locBtn.classList.remove("checked"),this.searchJumperNavBar.style.display="none",this.navPointer.style.display="none")}lockSearchInput(e){this.lockSiteKeywords=!0,this.searchLockInput.innerText=e,this.con.classList.add("lock-input"),this.searchInput.value="",this.searchInput.style.paddingLeft=`${15+this.searchLockInput.scrollWidth}px`,this.searchInput.placeholder=B("inputKeywords")}async initRun(){let e=this;this.siteIndex=1,this.customInput=!1,this.fontPool=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.dockerScaleBtns=[],this.bar.style.visibility="hidden";let t=0,r=[];this.checkSelHandler=C=>{C.altKey&&this.searchInPageTab.checked&&window.getSelection().toString()&&this.showSearchInput()},this.splitSep="\u25CE",this.lockWords="",this.marks={},this.initInPageWords=[],this.highlightSpans={},this.curHighlightWords=[],this.curWordIndex=0;let i=()=>{this.searchJumperInPageInput.focus(),this.highlight("");let C=this.lockWords.trim();if(!C){this.submitInPageWords();return}this.searchJumperInPageInput.value&&(C+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=C,this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft=""};document.addEventListener("keydown",C=>{C.keyCode===27&&(et?(this.searchInput.value="",this.searchInput.dispatchEvent(new CustomEvent("input"))):this.inInput?this.hideSearchInput():this.lockWords?(this.highlight(""),this.searchJumperInPageInput.value=this.lockWords,this.lockWords="",this.searchInPageLockWords.innerHTML=ee(),this.setNav(!1,!0)):this.funcKeyCall&&this.removeBar())},!0),this.searchJumperInPageInput.addEventListener("focus",C=>{this.searchInputDiv.classList.add("active")}),this.searchJumperInPageInput.addEventListener("blur",C=>{this.searchInputDiv.classList.remove("active")}),this.searchJumperInPageInput.addEventListener("keydown",C=>{switch(C.stopPropagation(),C.keyCode){case 8:if(!this.searchJumperInPageInput.value){let W=this.searchInPageLockWords.lastChild;W&&(W.dispatchEvent(new CustomEvent("editword")),C.preventDefault())}break;case 9:C.preventDefault(),this.filterSitesTab.checked=!0,this.con.classList.remove("in-find"),this.searchInput.focus();break;case 13:{let W=this.searchJumperInPageInput.value?this.submitInPageWords():[];if(W&&W.length>0){let D=W.pop();this.currentSearchInPageLockWords&&(this.currentSearchInPageLockWords.firstChild.style.transform=""),this.currentSearchInPageLockWords=D;let V=new PointerEvent("mousedown",{button:C.shiftKey?2:0});D.dispatchEvent(V)}else if(this.lockWords){this.currentSearchInPageLockWords||(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)");let D=new PointerEvent("mousedown",{button:C.shiftKey?2:0});this.currentSearchInPageLockWords.dispatchEvent(D)}}break;case 37:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.previousElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.previousElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;case 39:this.searchJumperInPageInput.value==""&&this.lockWords&&(this.currentSearchInPageLockWords?this.currentSearchInPageLockWords.nextElementSibling&&(this.currentSearchInPageLockWords.firstChild.style.transform="",this.currentSearchInPageLockWords=this.currentSearchInPageLockWords.nextElementSibling,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"):(this.currentSearchInPageLockWords=this.searchInPageLockWords.lastChild,this.currentSearchInPageLockWords.firstChild.style.transform="scale(1.1)"));break;default:break}},!0),this.editBtn.addEventListener("click",C=>{i()}),this.addWord.addEventListener("click",C=>{this.showModifyWindow()}),this.searchInPageTab.addEventListener("change",C=>{this.initSetInPageWords(),this.searchJumperInPageInput.focus(),this.con.classList.add("in-find")}),this.filterSitesTab.addEventListener("change",C=>{this.searchInput.focus(),this.con.classList.remove("in-find")}),Ne?(this.recoverBtn.addEventListener("click",C=>{this.lockWords="",this.searchJumperInPageInput.value=Ne,this.searchInPageLockWords.innerHTML=ee(),this.highlight(""),this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.pinBtn.classList.add("checked")):this.recoverBtn.style.display="none",this.pinBtn.addEventListener("click",C=>{this.submitInPageWords(),this.pinBtn.classList.contains("checked")?(Ne="",this.pinBtn.classList.remove("checked")):this.lockWords&&(Ne=this.lockWords,this.pinBtn.classList.add("checked")),U.setItem("globalInPageWords",Ne)}),this.wordModeBtn.addEventListener("click",C=>{this.wordModeBtn.classList.contains("checked")?this.wordModeBtn.classList.remove("checked"):this.wordModeBtn.classList.add("checked"),this.lockWords&&this.refreshPageWords(this.lockWords)}),this.saveRuleBtn.addEventListener("click",C=>{this.lockWords&&(Te||zt(()=>{let W=c.prefConfig.inPageRule||{};W[this.inPageRuleKey||de.replace(/([&\?]_i=|#).*/,"")]=this.lockWords,c.prefConfig.inPageRule=W,c.lastModified=new Date().getTime(),Et=c.lastModified,U.setItem("searchData",c),Ce(B("save completed"))}))}),this.emptyBtn.addEventListener("click",C=>{this.lockWords="",this.searchJumperInPageInput.value="",this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft="",this.submitInPageWords(),this.searchJumperInPageInput.focus()}),this.copyInPageBtn.addEventListener("click",C=>{this.lockWords&&(Re(this.lockWords.replace(/◎/g,`
`)),Ce("Copied successfully!"))}),this.setNav(Ye),this.locBtn.addEventListener("click",C=>{this.setNav(!this.locBtn.classList.contains("checked"))}),this.closeNavBtn.addEventListener("click",C=>{this.lockWords?(this.searchJumperInPageInput.value=this.lockWords||"",this.lockWords="",this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft="",this.highlight(""),this.searchJumperInPageInput.focus(),this.setNav(!1,!0),U.setItem("disableHighlight",location.hostname),this.bar.style.display==="none"&&this.removeBar()):this.setNav(!1)}),this.minNavBtn.addEventListener("click",C=>{if(this.searchJumperNavBar.classList.contains("minimize")){if(this.searchJumperNavBar.classList.remove("minimize"),this.lockWords.trim())return;this.submitInPageWords()}else{this.searchJumperNavBar.classList.add("minimize"),this.highlight("");let W=this.lockWords.trim();if(!W)return;this.searchJumperInPageInput.value&&(W+=this.splitSep+this.searchJumperInPageInput.value),this.lockWords="",this.searchJumperInPageInput.value=W,this.searchInPageLockWords.innerHTML=ee(),this.searchJumperInPageInput.style.paddingLeft=""}}),this.maxNavBtn.addEventListener("click",C=>{e.showInPage(),e.showInPageSearch()}),this.navMarks.addEventListener("click",C=>{let W=C.offsetY/this.navMarks.clientHeight*100,D=[].slice.call(this.navMarks.querySelectorAll("span"));D.sort((Z,ne)=>(Z=parseFloat(Z.style.top),ne=parseFloat(ne.style.top),Z>ne?1:Z<ne?-1:0));let V;for(let Z=0;Z<D.length;Z++){V=D[Z];let ne=parseFloat(V.style.top);if(ne>W){if(Z>0){let b=D[Z-1],S=parseFloat(b.style.top);ne-W>W-S&&(V=b)}break}}V&&V.click()}),this.bar.addEventListener("mousedown",C=>{C&&C.stopPropagation&&C.stopPropagation(),C&&C.preventDefault&&C.preventDefault()}),this.con.addEventListener("dblclick",C=>{C.stopPropagation(),C.preventDefault()});let a=C=>{C.stopPropagation(),C.preventDefault();let W=e.searchJumperExpand.parentNode;if(!W||!W.classList.contains("not-expand"))return;W.classList.remove("not-expand"),W.classList.remove("search-jumper-move");let D=e.con.classList.contains("search-jumper-left")||e.con.classList.contains("search-jumper-right");W.removeChild(e.searchJumperExpand);let V=Math.max(W.scrollWidth,W.scrollHeight)+5+"px";D?(W.style.height=V,W.style.width=""):(W.style.width=V,W.style.height=""),setTimeout(()=>{e.checkScroll(),W.classList.add("search-jumper-move")},251)},n;this.searchJumperExpand.addEventListener("click",a,!0),this.searchJumperExpand.addEventListener("contextmenu",a,!0),this.searchJumperExpand.addEventListener("mouseenter",C=>{c.prefConfig.overOpen&&(clearTimeout(n),n=setTimeout(()=>{a(C)},500));let W=new CustomEvent("sitelist",{detail:{bind:C.currentTarget}});C.currentTarget.parentNode.dispatchEvent(W)},!1),c.prefConfig.overOpen&&this.searchJumperExpand.addEventListener("mouseleave",C=>{clearTimeout(n)},!1),this.pickerBtn.addEventListener("click",C=>{this.togglePicker()}),this.maxEleBtn.addEventListener("click",C=>{ke.expand()}),this.minEleBtn.addEventListener("click",C=>{ke.collapse()}),this.copyEleBtn.addEventListener("click",C=>{ke.copy()}),this.openLinkBtn.addEventListener("click",C=>{ke.openLinks()});let s=document.createElement("div");s.className="listArrow",this.listArrow=s,this.con.appendChild(s);for(let C of c.sitesConfig){if(C.bookmark||C.sites.length>100||/^BM/.test(C.type)&&C.icon==="bookmark"){r.push(C);continue}await this.createType(C),t+=C.sites.length,t>100&&(await Ae(1),t=0)}this.initHistorySites(),this.initSort(),this.bar.style.visibility="",this.bar.style.display="none",this.searchInPageRule(),ae&&mt.test(ae.url)?this.inSearchEngine():c.prefConfig.alwaysShow&&!Ct&&!nt&&(this.bar.style.display="",this.initPos(),this.appendBar()),kt&&(A=kt.target,this.batchOpen(kt.sites,{button:2})),kt=!1,Ge&&(this.submitAction(Ge),setTimeout(()=>{U.setListItem("inPagePostParams",location.hostname,"")},1e4));let o=C=>{clearTimeout(p);let W,D="";ae&&!e.searchInput.value?(W=e.con.querySelector(".search-jumper-btn.current"),D="_self"):(W=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),D="_blank"),W&&e.openSiteBtn(W,D,!C.ctrlKey)},p,d=!1;this.inInput=!1;let m=()=>{vt!==e.searchInput.value&&(vt=e.searchInput.value,U.setItem("cacheFilter",vt))};this.searchInput.addEventListener("input",C=>{clearTimeout(p),p=setTimeout(()=>{d||e.searchSiteBtns(e.searchInput.value)},500)}),this.searchInput.addEventListener("compositionstart",function(){d=!0}),this.searchInput.addEventListener("compositionend",function(){d=!1}),this.searchInput.addEventListener("click",C=>{e.searchInput.select()}),this.searchInput.addEventListener("blur",C=>{m()}),this.searchInput.addEventListener("keydown",C=>{switch(C.stopPropagation(),C.keyCode){case 9:C.shiftKey&&(C.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords());break;case 13:if(this.searchJumperInputKeyWords.disabled){clearTimeout(p);let W,D="";ae&&!e.searchInput.value?(W=e.con.querySelector(".search-jumper-btn.current"),D="_self"):(W=e.con.querySelector(".search-jumper-type.search-jumper-open>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector(".search-jumper-needInPage>a.search-jumper-btn:not(.input-hide)")||e.con.querySelector("a.search-jumper-btn:not(.input-hide)"),D="_blank"),W&&e.openSiteBtn(W,D,!C.ctrlKey)}else this.searchJumperInputKeyWords.focus(),this.searchJumperInputKeyWords.value&&o(C),m();break;case 8:break;default:break}}),this.searchJumperInputKeyWords.addEventListener("input",C=>{clearTimeout(p),p=setTimeout(()=>{d||e.getSuggest(e.searchJumperInputKeyWords.value)},200)}),this.searchJumperInputKeyWords.addEventListener("compositionstart",function(){d=!0}),this.searchJumperInputKeyWords.addEventListener("compositionend",function(){d=!1}),this.searchJumperInputKeyWords.addEventListener("keydown",C=>{switch(C.keyCode!==27&&C.stopPropagation(),C.keyCode){case 9:this.inInput?C.shiftKey||(C.preventDefault(),this.searchInPageTab.checked=!0,this.con.classList.add("in-find"),this.searchJumperInPageInput.focus(),this.initSetInPageWords()):(C.preventDefault(),this.searchInput.focus());break;case 13:o(C);break;default:break}},!0),this.con.addEventListener("keypress",C=>{C.stopPropagation()},!0),this.closeBtn.addEventListener("mousedown",C=>{e.hideSearchInput(),c.prefConfig.emptyAfterCloseInput&&(e.highlight(""),e.searchJumperInPageInput.value=e.lockWords||"",e.lockWords="",e.searchInPageLockWords.innerHTML=ee(),e.setNav(!1,!0))});let g=window.innerWidth/2,u,f,y,I,L=C=>C.type.indexOf("mouse")===0?C.clientX:C.changedTouches[0].clientX,O=C=>C.type.indexOf("mouse")===0?C.clientY:C.changedTouches[0].clientY,H=C=>{let W=.25*window.innerWidth,D=g+L(C)-y;if(e.searchInputDiv.style.top="unset",e.searchInputDiv.style.left=D+"px",e.searchInputDiv.style.bottom=u-(O(C)-I)+"px",D>window.innerWidth/2){let V=window.innerWidth-D+W-50;e.searchInputDiv.style.maxWidth=V+"px"}else{let V=D+W;D<W&&(D+=W-D,e.searchInputDiv.style.left=D+"px"),e.searchInputDiv.style.maxWidth=V+"px"}C.stopPropagation(),C.preventDefault()},x=C=>{document.removeEventListener("mouseup",x),document.removeEventListener("mousemove",H),document.removeEventListener("touchend",x),document.removeEventListener("touchmove",H),f.style.cursor="",g+=L(C)-y,u-=O(C)-I},N=()=>{u||(u=e.con.classList.contains("search-jumper-bottom")?window.innerHeight*.95-60:window.innerHeight*.03)},R=!1;this.searchInputDiv.addEventListener("touchstart",C=>{R=!0,(C.target.className==="inputGroup"||C.target.nodeName.toUpperCase()==="LABEL")&&(N(),f=C.target,f.style.cursor="grabbing",y=L(C),I=O(C),document.addEventListener("touchend",x),document.addEventListener("touchmove",H))},{passive:!0,capture:!1}),this.searchInputDiv.addEventListener("mousedown",C=>{if(R){R=!1;return}(C.target.className==="inputGroup"||C.target.nodeName.toUpperCase()==="LABEL")&&(N(),f=C.target,f.style.cursor="grabbing",y=C.clientX,I=C.clientY,document.addEventListener("mouseup",x),document.addEventListener("mousemove",H),C.stopPropagation(),C.preventDefault())});let z,K,v=C=>{let W=C.clientX-K+z+20;this.searchInputDiv.style.width=W+"px"},T=C=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",T)};this.rightSizeChange.addEventListener("mousedown",C=>{K=C.clientX,z=this.searchInput.clientWidth*2+2,document.addEventListener("mousemove",v),document.addEventListener("mouseup",T),C.stopPropagation(),C.preventDefault()});let w,P=C=>{if(!this.contains(C.target)){let W=/^(https?|ftp):/.test(w.href);W&&w.setAttribute("target","_blank"),W?ge(w.href,{active:!1,insert:!0}):w.click(),W&&w.setAttribute("target",w.dataset.target==1?"_blank":"_self")}_(document).removeEventListener("dragover",j),document.removeEventListener("drop",P),document.removeEventListener("dragover",j)},j=C=>{C.preventDefault()},q=C=>{_(document).removeEventListener("dragover",j),document.removeEventListener("drop",P),document.removeEventListener("dragover",j)};this.bar.addEventListener("dragstart",C=>{let W=C.target,D=W.parentNode;W.nodeName.toUpperCase()!=="IMG"&&W.nodeName.toUpperCase()!=="A"||(W.classList&&W.classList.contains("search-jumper-btn")?(w=W,_(document).addEventListener("dragover",j),document.addEventListener("drop",P),document.addEventListener("dragend",q)):D&&D.classList&&D.classList.contains("search-jumper-btn")&&(w=D,_(document).addEventListener("dragover",j),document.addEventListener("drop",P),document.addEventListener("dragend",q)))},!0),t=0;let ue=ae!==!1;for(let C of r)await this.createType(C),t+=C.sites.length,t>200&&(await Ae(1),t=0);if(!this.findInpageAddons){this.findInpageAddons=ye.searchJumperAddons.filter(V=>V.type=="findInPage").sort((V,Z)=>(V.sort||0)-(Z.sort||0));let C=this,W=0,D={};this.findInpageAddons.forEach(V=>{let Z=V.name||"addon"+W++;D[V.sort]||c.prefConfig.disableAddon[Z]===!0?V.disable=!0:(c.prefConfig.disableAddon[Z],V.disable=!1),D[V.sort]=!0,C.createAddonSpan(Z,V)})}if(this.fontPool.length>0||nt){let C=document.createElement("link");C.rel="stylesheet",C.href=c.prefConfig.fontAwesomeCss||"https://lib.baomitu.com/font-awesome/6.1.2/css/all.css",document.documentElement.insertBefore(C,document.documentElement.children[0]),this.addToShadow(C.cloneNode()),gr(()=>{let W=!1;this.fontPool.forEach(D=>{D.innerText="",D.style.fontSize="",D.style.color="",W=!0,Rt.unshift(D)}),W&&(nt||de===$i)&&setTimeout(()=>{_i()},3e3),this.buildAllPageGroupTab()})}else this.buildAllPageGroupTab();if(et)return;Ot&&Ot!=location.hostname&&window.top==window.self&&U.setItem("disableHighlight",""),await this.testCSP();let te=ae&&mt.test(ae.url);if(!ue&&te?this.inSearchEngine():!ae&&window.top==window.self&&this.checkSearchJump(),/^#sjhl=/.test(location.hash)){let C=location.hash.match(/^#sjhl=(.*?)(&i=(\d+))?$/),W=C[1],D=parseInt(C[3]||1)-1;try{W=decodeURIComponent(W)}catch(V){console.log(V)}this.setInPageWords(W,()=>{let Z=document.querySelectorAll("mark.searchJumper")[D];Z&&Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})})}else if(location.pathname==="/hoothin/SearchJumper/discussions/new"&&location.search==="?category=search-engines"){let C=c.sitesConfig.filter(W=>W&&!(/^BM/.test(W.type)&&W.icon==="bookmark"));Ki("#discussion_body","```json\n"+JSON.stringify(C,null,2)+"\n```")}let ie=this.initInPageWords&&this.initInPageWords.length;(Fi||this.bar.style.display==="none"&&(!Ye||!ie))&&this.removeBar()}buildAllPageGroupTab(){let e=this;this.groupTab.innerHTML=ee(),Se.forEach(t=>{if(t.classList.contains("notmatch"))return;let r=t.dataset.type,i=t.firstElementChild.cloneNode(!0),a=document.createElement("span");a.appendChild(i),a.dataset.type=r,a.addEventListener("click",n=>{let s=e.sitelistBox.querySelector(`[data-type="${r}"]`);s&&s.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}),e.groupTab.appendChild(a)})}async refreshEngines(){if(c&&!this.refreshing){this.refreshing=!0,setTimeout(()=>{this.refreshing=!1},500),Et=c.lastModified,this.removeBar(),Se&&Se.length&&Se.forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}),Se=[],this.allSiteBtns=[],this.allListBtns=[],this.allLists=[],this.historyTypeEle=null;for(let e of c.sitesConfig)await this.createType(e);this.initHistorySites(),this.initSort(),this.buildAllPageGroupTab(),et&&this.appendBar()}}waitForHide(e){let t=this;if(this.bar.classList.contains("grabbing")||this.hiding)return;e===0&&(this.hiding=!0,setTimeout(()=>{t.hiding=!1},500)),this.touched=!1;var r=()=>{if(t.bar.classList.remove("search-jumper-isTargetImg"),t.bar.classList.remove("search-jumper-isTargetAudio"),t.bar.classList.remove("search-jumper-isTargetVideo"),t.bar.classList.remove("search-jumper-isTargetLink"),t.bar.classList.remove("initShow"),t.tips.style.opacity=0,t.tips.style.display="none",t.tips.innerHTML=ee(""),t.funcKeyCall)if(t.setFuncKeyCall(!1),ae&&!ae.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||t.con.classList.contains("resizePage")){t.initPos();let a=t.bar.querySelector(".search-jumper-type:nth-child(1)>span");if(a&&!a.classList.contains("search-jumper-open"))if(a.onmouseup)a.onmouseup();else{let n=new PointerEvent("mouseup");a.dispatchEvent(n)}}else t.bar.style.display="none";c.prefConfig.autoClose&&t.closeOpenType(),t.hideTimeout=null};this.hideTimeout&&clearTimeout(this.hideTimeout);let i=typeof e>"u"?this.funcKeyCall?500:c.prefConfig.autoDelay||1e3:e;i?this.hideTimeout=setTimeout(r,i):r(),this.preList&&(this.preList.style.visibility="hidden",this.listArrow.style.cssText="")}searchEngineWords(e){return e=e.replace(/( |^)-\S+/g,""),/".+"/.test(e)&&(e=e.replace(/"(.+)"/g,(t,r,i,a)=>`\u25CE${r}\u25CE`).replace(/^◎|◎$/g,"")),this.lastSearchEngineWords=e.replace(/['";]/g," "),this.lastSearchEngineWords}setInPageWords(e,t,r){this.initInPageWords.push(e),this.con.classList.add("in-find");let i=()=>{setTimeout(async()=>{if(_(document).style.display==="none"&&(_(document).style.display=""),this.lockWords)this.initInPageWords=[];else{for(;document.hidden;)await Ae(1e3);U.setItem("lastHighlight",location.hostname);let a=this.initInPageWords.shift();for(;a;)this.searchJumperInPageInput.value=a,this.submitInPageWords(!!r),a=this.initInPageWords.shift()}t&&t(),await Ae(100),U.setItem("lastHighlight","")},300)};if(document.readyState!="complete"){let a=n=>{document.readyState=="complete"&&(document.removeEventListener("readystatechange",a),window.removeEventListener("load",a),i())};document.addEventListener("readystatechange",a),window.addEventListener("load",a)}else i()}searchInPageRule(){if(c.prefConfig.disableAutoHighlight){let e=c.prefConfig.disableAutoHighlight.trim().split(`
`);for(let t=0;t<e.length;t++){let r=e[t],i=!1;if(r.indexOf("/")===0){let a=r.match(/^\/(.*)\/([igm]*)$/);a&&(i=new RegExp(a[1],a[2]).test(de))}else i=this.globMatch(r,de);if(i){this.disableAutoHighlight=!0;return}}}if(Ri===location.hostname&&(this.disableAutoHighlight=!0),c.prefConfig.inPageRule){let e=Object.keys(c.prefConfig.inPageRule);for(let t=0;t<e.length;t++){let r=e[t];if(!r)continue;let i=!1;if(r.indexOf("/")===0){let a=r.match(/^\/(.*)\/([igm]*)$/);a&&(i=new RegExp(a[1],a[2]).test(de))}else i=this.globMatch(r,de);if(i){let a=c.prefConfig.inPageRule[r];if(!a)continue;this.inPageRuleKey=r,this.disableAutoHighlight=!0,this.setInPageWords(a);break}}}}checkSearchJump(){if(this.inPageRuleKey||this.disableAutoHighlight)return;let e;if(c.prefConfig.showInSearchJumpPage&&Ht&&!Ot){let t=!Jt&&pi&&location.href.indexOf(pi)!=-1;if(t&&U.setItem("clickLink",""),Jt&&Jt.indexOf(Ht)!=-1||t){Ee&&this.wordModeBtn.classList.add("checked"),e=Ee;try{e=decodeURIComponent(e),e=this.searchEngineWords(e)}catch{}}}if(e=e||Ne,e){this.appendBar();let t=this;this.setInPageWords(e,()=>{!t.navMarks.innerHTML&&t.bar.style.display==="none"&&t.removeBar()},!0)}else if(!this.searchJumperInPageInput.value&&Jt.indexOf(Ht)!=-1&&Ee){e=Ee,this.wordModeBtn.classList.add("checked");try{e=decodeURIComponent(e)}catch{}this.searchJumperInPageInput.value=e}}inSearchEngine(){if(!this.currentType||!ae||Ct||this.inPageRuleKey||this.disableAutoHighlight)return;if(!/sidesearch=(1|true)$/i.test(location.search)&&(!/#p{/.test(ae.url)||ae.keywords)){if(this.appendBar(),this.currentType.classList.contains("search-jumper-needInPage"))this.bar.classList.add("search-jumper-isTargetPage");else if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;c.prefConfig.hideOnSearchEngine||(this.bar.style.display="",this.initPos())}this.insertHistory(this.currentType,!0),this.wordModeBtn.classList.add("checked");let e=c.prefConfig.showInSearchEngine?this.searchEngineWords(He):Ne;e&&this.setInPageWords(e,null,!0)}getSuggest(e){let t=this.suggestDatalist;if(t.innerHTML=ee(),!e)return;let r=(i,a,n)=>{Be({method:"GET",url:i,responseType:n?"blob":"",headers:{referer:i,origin:i},onload:function(s){let o=s.response;if(!(s.status>=400||!o))if(n){let p=new FileReader;p.onload=()=>{a(p.result)},p.readAsText(o,n)}else a(o)},onerror:function(s){pe(s)},ontimeout:function(s){pe(s)}})};switch(c.prefConfig.suggestType){case"google":r("https://suggestqueries.google.com/complete/search?client=youtube&q=%s&jsonp=window.google.ac.h".replace("%s",e),i=>{if(i=i.match(/window.google.ac.h\((.*)\)$/,"$1"),i){i=JSON.parse(i[1])[1];for(let a in i){let n=document.createElement("option");n.value=i[a][0],t.appendChild(n)}}});break;case"baidu":r("https://suggestion.baidu.com/su?wd=%s&cb=".replace("%s",e),i=>{if(i=i.match(/.*,s:(.*)}\);$/,"$1"),i){i=JSON.parse(i[1]);for(let a in i){let n=document.createElement("option");n.value=i[a],t.appendChild(n)}}},"GBK");break;case"bing":r("https://api.bing.com/qsonhs.aspx?type=json&q=%s".replace("%s",e),i=>{if(i){i=JSON.parse(i).AS.Results;for(let a in i){let n=i[a].Suggests;for(let s in n){let o=document.createElement("option");o.value=n[s].Txt,t.appendChild(o)}}}});break;default:break}}searchSiteBtns(e){let t=e.indexOf("**"),r="",i=!1;t>0&&(r=e.slice(0,t),e=e.slice(t+2)),e.indexOf("^")===0?i=!0:(r=r.toLowerCase(),e=e.toLowerCase()),e?this.con.classList.add("searching"):this.con.classList.remove("searching");let a=!/[^\w\.\/\:\*\?\^\$]/.test(e);this.allListBtns.forEach(o=>{o.classList.add("input-hide")}),Se.forEach(o=>{o.classList.add("input-hide")});let n=0;this.filterGlob.innerHTML=ee(),this.allSiteBtns.forEach(o=>{let p=o[0],d=o[1],m=p.parentNode,g=p.dataset.type,u=p.dataset.name,f=p.title;i||(g=g.toLowerCase(),u=u.toLowerCase(),f=f.toLowerCase());let y="";if(r){if(!this.globMatch(r,g))return;y=p.dataset.type+"**"}let I=!1;if(p.dataset.clone||(this.globMatch(e,u)?(I=!0,y+="^"+p.dataset.name+"$"):p.title&&this.globMatch(e,f)&&(I=!0,y+="^"+p.title+"$")),!I){if(a){if(!p.dataset.host){let L=/^https?:\/\/([^\/]*)\/[\s\S]*$/,O=d.url,H=L.test(O)?O.replace(L,"$1"):O;p.dataset.host=H&&H.split(`
`)[0].toLowerCase()}I=this.globMatch(e,p.dataset.host)}I?p.dataset.isPage&&(y+="^"+p.dataset.host+"$"):p.classList.add("input-hide")}if(I){p.classList.remove("input-hide"),m&&m.classList.remove("input-hide");let L;for(let O=0;O<this.allListBtns.length;O++)if(this.allListBtns[O].id=="list"+p.dataset.id){L=this.allListBtns[O];break}if(L&&L.classList.remove("input-hide"),n<50&&e&&this.searchInput.value!==y&&!this.filterGlob.querySelector(`option[value="${y}"]`)){n++;let H=document.createElement("option");H.value=y,this.filterGlob.appendChild(H)}}}),Se.forEach(o=>{let p;for(let d=0;d<this.allLists.length;d++)if(this.allLists[d].dataset.type==o.dataset.type){p=this.allLists[d];break}p&&(o.classList.contains("input-hide")?p.classList.add("input-hide"):p.classList.remove("input-hide"))});let s=this.bar.querySelector(".search-jumper-type:not(.input-hide)");if(s){if(!s.classList.contains("search-jumper-open")){let o=s.querySelector("span.search-jumper-btn");if(o.onmouseup)o.onmouseup();else{let p=new PointerEvent("mouseup");o.dispatchEvent(p)}}if(this.searchJumperExpand.parentNode==s){let o=new PointerEvent("click");this.searchJumperExpand.dispatchEvent(o)}}}globMatch(e,t,r){if(t.length>500)return!1;try{if(e.length==0||e==="*")return!0;if(e.length===1&&e[0]==="$")return!t||t.length===0;if(e.length>1&&e[0]==="*"&&(!t||t.length===0))return!1;if(!r)if(r=!0,e.length>1&&e[0]==="^"&&t&&t.length!==0){if(e=e.substring(1),e[0]!==t[0])return!1}else e[0]!=="*"&&(e="*"+e);if(e.length>1&&e[0]==="?"||e.length!=0&&t&&t.length!==0&&e[0]===t[0])return this.globMatch(e.substring(1),t.substring(1),!!r);if(e.length>0&&e[0]==="*")return this.globMatch(e.substring(1),t,!!r)||this.globMatch(e,t&&t.substring(1),!!r)}catch(i){pe(i)}return!1}setCurrentSite(e,t){ae=e,t.classList.add("current"),He="",!/#p{|^(showTips|find)/.test(e.url)&&mt.test(e.url)&&(this.updateCacheKeywords(),U.setItem("referrer",location.hostname))}updateCacheKeywords(){let e=Oe();e&&e!=Ee&&(Ee=e,U.setItem("cacheKeywords",e))}refresh(){this.refreshInPageTimer&&clearTimeout(this.refreshInPageTimer),this.refreshInPageTimer=setTimeout(()=>{if(this.bar.style.display=="none"){ae=null;let t;for(let r in c.sitesConfig){if(ae)break;if(t=c.sitesConfig[r],!t)continue;let i=t.sites;for(let a in i){if(ae)break;let n=i[a];if(!n||!n.url)continue;let s;if(n.match!=="0"){if(n.match)new RegExp(n.match).test(de)&&(s=n);else if(n.url.indexOf(location.hostname)!=-1){if(n.url.indexOf("site")!=-1){let o=n.url.match(/site(%3A|:)([\s\S]+?)[\s%]/);o&&de.indexOf(o[2])!=-1&&n.url.replace(o[0],"").indexOf(location.hostname)!=-1&&(s=n)}else if(!ae&&n.url.replace(/^https?:\/\//,"").replace(location.host,"").replace(/\/?[\?#][\s\S]*/,"")==location.pathname.replace(/\/$/,"")){let o=n.url.match(/[^\/\?&]+(?=%[stb])/g);o&&(o=o.join(".*"),new RegExp(o).test(de)&&(s=n))}}}if(s){let o=this.getTargetSitesByName([s.name])[0];this.currentType=o.parentNode,this.setCurrentSite(s,o)}}}if(ae&&mt.test(ae.url)&&(!/#p{/.test(ae.url)||ae.keywords)&&!c.prefConfig.hideOnSearchEngine){if(this.currentType.classList.contains("search-jumper-targetAll")||this.currentType.classList.contains("search-jumper-targetImg")||this.currentType.classList.contains("search-jumper-targetAudio")||this.currentType.classList.contains("search-jumper-targetVideo")||this.currentType.classList.contains("search-jumper-targetLink")||this.currentType.classList.contains("search-jumper-targetPage"))return;this.appendBar(),this.bar.style.display="",this.initPos();let r=this.bar.querySelector(`.search-jumper-type[data-type="${t.type}"]>span`);if(r&&!r.classList.contains("search-jumper-open")&&(this.bar.insertBefore(r.parentNode,this.bar.children[0]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen))if(r.onmouseup)r.onmouseup();else{let i=new PointerEvent("mouseup");r.dispatchEvent(i)}}}let e=this.curHighlightWords;if(this.highlight(""),ae&&c.prefConfig.showInSearchEngine){let t=this.lastSearchEngineWords,r=this.searchEngineWords(Oe());if(r&&t!=r){let i=this.anylizeInPageWords(r,!0);this.highlight(i)}else e&&this.highlight(e)}else e&&this.highlight(e)},500)}initSort(){if(c.prefConfig.shiftLastUsedType&&this.historyTypeEle&&(ae?this.bar.insertBefore(this.historyTypeEle,this.bar.children[1]):this.bar.insertBefore(this.historyTypeEle,this.bar.children[0])),c.prefConfig.sortType){let e=this;Se.sort((i,a)=>{let n=Le[i.dataset.type]||0;return(Le[a.dataset.type]||0)-n});let t=!1,r=!e.bar.children[0].classList.contains("search-jumper-open");for(let i=Se.length-1;i>=0;i--){let a=Se[i],n=Le[a.dataset.type]||0;if(i==Se.length-1)n>0&&(t=!0,Le[a.dataset.type]=0);else{let s=Le[Se[i+1].dataset.type]||0;n-s>10&&(t=!0,Le[a.dataset.type]=s+10)}e.bar.insertBefore(a,e.bar.children[r?0:1])}t&&U.setItem("sortTypeNames",Le)}}initHistorySites(){this.historySiteBtns=[],this.txtHistorySiteBtns=[],this.imgHistorySiteBtns=[],this.linkHistorySiteBtns=[],this.videoHistorySiteBtns=[],this.audioHistorySiteBtns=[];let e=this;Ve.forEach(async t=>{for(let r of c.sitesConfig){let i=!1,a=r.bookmark||r.sites.length>100||/^BM/.test(r.type)&&r.icon==="bookmark";for(let n=0;n<r.sites.length;n++){let s=r.sites[n];if(s.name==t){let o=await e.createSiteBtn(c.prefConfig.noIcons?"0":s.icon,s,!0,a,r,!0);o.classList.add("historySite"),e.historySiteBtns.push(o),!r.selectImg&&!r.selectLink&&!r.selectPage&&!r.selectVideo&&!r.selectAudio&&e.txtHistorySiteBtns.push(o),r.selectImg&&e.imgHistorySiteBtns.push(o),(r.selectLink||r.selectPage)&&e.linkHistorySiteBtns.push(o),r.selectVideo&&e.videoHistorySiteBtns.push(o),r.selectAudio&&e.audioHistorySiteBtns.push(o),i=!0;break}}if(i)break}})}insertHistory(e,t){if(!c.prefConfig.historyLength)return;e.style.width="auto",e.style.height="auto";let r=this;this.historyInserted=!0;let i=0,a=!t&&c.prefConfig.historyInsertFirst,n=!1,s=0;a||(n=this.searchJumperExpand.parentNode==e&&!c.prefConfig.expandType,n&&(s=(c.prefConfig.numPerLine||7)-1,s=c.prefConfig.historyLength<s?s+s-c.prefConfig.historyLength:s,c.prefConfig.hideTileType&&s++));let o=this.historySiteBtns;e.classList.contains("search-jumper-needInPage")?o=this.txtHistorySiteBtns:e.classList.contains("search-jumper-targetImg")?o=this.imgHistorySiteBtns:e.classList.contains("search-jumper-targetAudio")?o=this.audioHistorySiteBtns:e.classList.contains("search-jumper-targetVideo")?o=this.videoHistorySiteBtns:(e.classList.contains("search-jumper-targetLink")||e.classList.contains("search-jumper-targetPage"))&&(o=this.linkHistorySiteBtns);for(let p=0;p<o.length;p++){let d=o[p];if(d.style.display=="none")continue;let m=d.querySelector("img");if(m&&m.dataset.src&&(m.src=m.dataset.src,delete m.dataset.src),d.parentNode!=e){let g=e.querySelectorAll("a.search-jumper-btn"),u=!1;for(let f=0;f<g.length;f++){let y=g[f];if((y.dataset.oriName||y.dataset.name)==(d.dataset.oriName||d.dataset.name)){u=!0;break}}if(u)continue;if(a)e.children.length>1?e.insertBefore(d,e.children[1]):e.appendChild(d);else if(n){let f=e.querySelectorAll("a.search-jumper-btn");f.length>s?e.insertBefore(d,f[s]):e.insertBefore(d,r.searchJumperExpand)}else e.appendChild(d);if(++i>=c.prefConfig.historyLength)break}else a&&(e.children.length>1?e.insertBefore(d,e.children[1]):e.appendChild(d))}e.style.width=e.scrollWidth+"px",e.style.height=e.scrollHeight+"px"}recoveHistory(){if(!c.prefConfig.historyLength||!this.historyInserted)return;this.historyInserted=!1;let e=this,t;for(let r=0;r<this.historySiteBtns.length;r++){let i=this.historySiteBtns[r];i.classList.contains("historySite")&&(t=i.parentNode,this.siteBtnReturnHome(i))}t&&t.classList.contains("search-jumper-open")&&(t.style.width="auto",t.style.height="auto",t.style.width=t.scrollWidth+"px",t.style.height=t.scrollHeight+"px")}bindSite(e,t){if(e.getAttribute("bind"))return;e.setAttribute("bind",!0);let r=this;t.href&&(e.href=t.href),e.style.display=t.style.display,e.addEventListener("mousedown",async i=>{t.dataset.showTips?(r.con.classList.contains("search-jumper-showall")?A=e.parentNode:r.waitForHide(0),t.dispatchEvent(new CustomEvent("showTips",{detail:e}))):(await r.siteSetUrl(t,{button:i.button,altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}),t.href&&(e.href=t.href),e.setAttribute("target",t.target)),e.onclick||(e.onclick=a=>(t.dataset.showTips||t.click(),a.stopPropagation(),a.preventDefault(),!1))},!1),e.addEventListener("dragover",i=>{i.preventDefault()},!0),e.addEventListener("dragenter",i=>{r.dragTarget&&r.dragTarget.classList.remove("dragTarget"),r.dragTarget=e,r.dragTarget.classList.add("dragTarget"),clearTimeout(r.dragTimer),r.dragTimer=setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},1e3)},!0),e.addEventListener("dragleave",i=>{e.classList.remove("dragTarget")},!0),e.addEventListener("drop",i=>{clearTimeout(r.dragTimer),r.dragTarget&&r.dragTarget.classList.remove("dragTarget"),r.searchBySiteName(t.dataset.name,i)},!0)}async createList(e,t,r){let i=this,a=document.createElement("div");a.className="sitelist",a.style.visibility="hidden";let n=document.createElement("div");n.className="sitelistCon",a.appendChild(n),a.addEventListener("mouseenter",p=>{i.listArrow.style.cssText=""});let s=document.createElement("p");s.innerText=t.dataset.title,s.title=B("batchOpen"),s.addEventListener("click",p=>{i.batchOpen(r,{ctrlKey:p.ctrlKey,shiftKey:p.shiftKey,altKey:p.altKey,metaKey:p.metaKey,button:p.ctrlKey||p.shiftKey||p.altKey||p.metaKey?0:2})}),a.dataset.type=t.dataset.type,n.appendChild(s);function o(p,d){let m=document.createElement("div");m.id="list"+d;let g=p.querySelector("img"),u=document.createElement("a");if(u.setAttribute("ref","noopener noreferrer"),i.bindSite(u,p),m.appendChild(u),i.allListBtns.push(m),g&&!c.prefConfig.noIcons){let y=g.src||g.dataset.src,I=document.createElement("img");u.appendChild(I),I.onload=L=>{I.style.width="",I.style.height="",I.style.display=""},I.onerror=L=>{I.src=ui},I.style.width="1px",I.style.height="1px",I.style.display="none",y?(/^data:/.test(y)||(I.\u03BFnerr\u03BFr=L=>{I.src=ui,I.onerror=null,I.style.width="",I.style.height="",I.style.display=""}),I.dataset.src=y):I.dataset.src=ui}let f=document.createElement("p");f.innerText=p.dataset.name,m.title=p.title,m.dataset.name=p.dataset.name,u.appendChild(f),n.appendChild(m)}try{for(let[p,d]of e.entries())o(d,d.dataset.id),p%50===49&&await Ae(1)}catch{for(let d=0;d<e.length;d++){let m=e[d];o(m,m.dataset.id)}}return this.allLists.push(a),a}async initList(e){e.dataset.inited||(e.style.display="none",e.dataset.inited=!0,[].forEach.call(e.querySelectorAll("div>a>img"),t=>{t.dataset.src&&(t.src=t.dataset.src,delete t.dataset.src)}),await Ae(0))}async listPos(e,t){await this.initList(t),t.style="",this.preList=t;let r=e.clientWidth,i=e.clientHeight,a=e.offsetLeft+r/2-this.con.scrollLeft,n=e.offsetTop+i/2-this.con.scrollTop,s=e.offsetParent;for(;s!==null;)a+=s.offsetLeft,n+=s.offsetTop,s=s.offsetParent;let o=window.innerWidth||document.documentElement.clientWidth,p=window.innerHeight||document.documentElement.clientHeight,d=this.listArrow.style;if(d.visibility="visible",d.opacity=1,this.funcKeyCall){t.style.display="block",d.opacity=0;const m=e.getBoundingClientRect();a=m.x+r/2-this.con.scrollLeft,n=m.y+i/2-this.con.scrollTop,a-=t.clientWidth/2;let g=e.getBoundingClientRect().top;g>p/2?(g<t.clientHeight+10&&(t.style.height=g-20+"px"),n-=t.clientHeight+i/2+5):(n+=i/2+5,g+t.clientHeight+i+10>p&&(t.style.height=p-g-i-20+"px")),a<20&&(a=20);let u=o-t.clientWidth-30;a>u&&(a=u),t.style.left=a+"px",t.style.top=n+"px",t.style.display=""}else if(this.bar.clientWidth>this.bar.clientHeight){let m=a;a<30?m=30:a>o-40&&(m=o-40),d.left=m-10+"px",n-i/2<100?(t.style.top=this.bar.clientHeight+"px",d.top=this.bar.clientHeight-10+"px"):(t.style.bottom=this.bar.clientHeight+"px",d.bottom=this.bar.clientHeight-9+"px"),a-=t.scrollWidth/2,a>o-t.scrollWidth-10&&(a=o-t.scrollWidth-10),a<0&&(a=0),t.style.left=a+"px"}else{let m=n;n<30?m=30:n>p-30&&(m=p-30),d.top=m-10+"px",a-r/2<100?(t.style.left=this.bar.clientWidth+"px",d.left=this.bar.clientWidth-9+"px"):(t.style.right=this.bar.clientWidth+"px",d.right=this.bar.clientWidth-9+"px"),n-=t.scrollHeight/2,n>p-t.scrollHeight&&(n=p-t.scrollHeight),n<0&&(n=0),t.style.top=n+"px",t.style.maxHeight="100vh"}}clingPos(e,t,r){let i=e.clientWidth||e.offsetWidth,a=e.clientHeight||e.offsetHeight;const n=e.getBoundingClientRect();let s,o,p=this.con&&this.con.classList.contains("search-jumper-showall"),d=window.innerWidth||document.documentElement.clientWidth,m=window.innerHeight||document.documentElement.clientHeight;if(this.tips.style.position="",t.style.height="",t.style.position="",!e||/^(body|html)$/i.test(e.nodeName))this.tips.style.transition="none",this.tips.style.position="fixed",t.style.right="",t.style.bottom="",t.style.left=(d-t.clientWidth)/2+"px",t.style.top="min(11%,110px)";else if(p)s=n.x+i/2,o=n.y+a/2,s-=t.clientWidth/2-this.con.scrollLeft,o+=this.con.scrollTop,o>m/2?o-=t.clientHeight+a/2+10:o+=a/2+10,t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px";else if(this.funcKeyCall||!e.classList.contains("search-jumper-btn")){t.style.position="absolute";let g=window.pageYOffset||document.documentElement.scrollTop||_(document).scrollTop,u=window.pageXOffset||document.documentElement.scrollLeft||_(document).scrollLeft;s=n.x+i/2-(this.funcKeyCall?this.con.scrollLeft:0)+u,o=n.y+a/2-(this.funcKeyCall?this.con.scrollTop:0)+g,s-=t.clientWidth/2;let f=e.getBoundingClientRect().top;f>m/2?(f<t.clientHeight+10&&(t.style.height=f-20+"px"),o-=t.clientHeight+a/2+5):(o+=a/2+5,f+t.clientHeight+a+10>m&&(t.style.height=m-f-a-20+"px")),s<20&&(s=20);let y=d+u-t.clientWidth-30;s>y&&(s=y),t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px"}else{s=e.offsetLeft+i/2-this.con.scrollLeft-e.parentNode.scrollLeft,o=e.offsetTop+a/2-this.con.scrollTop-e.parentNode.scrollTop;let g=e.offsetParent;for(;g!==null;)s+=g.offsetLeft,o+=g.offsetTop,g=g.offsetParent;o<a?(s-=t.clientWidth/2,o+=t.clientHeight/2,s<5?(s=5,t.style.left="5px",t.style.right="",t.style.bottom=""):s>d-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.bottom=""):(t.style.left=s+"px",t.style.right="",t.style.bottom=""),t.style.top=(r?a:a+20)+"px"):o>m-a-10?(s-=t.clientWidth/2,s<5?(t.style.left="5px",t.style.right="",t.style.top=""):s>d-t.clientWidth?(t.style.left="",t.style.right="5px",t.style.top=""):(t.style.left=s+"px",t.style.right="",t.style.top=""),t.style.bottom=(r?a:a+20)+"px"):s>d-i-10?(t.style.left="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.right=(r?i:i+20)+"px",t.style.top=o+"px"):s<i?(t.style.right="",t.style.bottom="",o-=t.clientHeight/2,o<5&&(o=5),t.style.left=(r?i:i+20)+"px",t.style.top=o+"px"):(t.style.right="",t.style.bottom="",t.style.left=s+"px",t.style.top=o+"px")}}tipsPos(e,t){this.tips.innerHTML=ee(t),this.tips.style.pointerEvents="",this.tips.style.display="",this.tips.style.opacity=1,this.clingPos(e,this.tips),clearTimeout(this.hideTips),this.tips.style.transition&&setTimeout(()=>{this.tips.style.transition=""},1);let r=this;[].forEach.call(this.tips.querySelectorAll("iframe"),i=>{let a=i.innerHTML;if(a)if(i.innerHTML=ee(),i.src)i.addEventListener("load",n=>{try{if(!i||!i.parentNode)return;let s=i.contentDocument||i.contentWindow.document,o=s.createElement("div");s.body.appendChild(o),o.outerHTML=ee(a)}catch{}});else try{let n=i.contentDocument||i.contentWindow.document;n.open(),n.write(a),n.close()}catch{}}),[].forEach.call(this.tips.querySelectorAll("img,video"),i=>{i.addEventListener("load",a=>{r.clingPos(e,r.tips)})}),window.markdownit&&(r.md||(r.md=window.markdownit()),[].forEach.call(this.tips.querySelectorAll(".markdown"),i=>{i.innerHTML=ee(r.md.render(i.innerHTML))}))}checkKwFilter(e,t){t.length>600&&(t=t.slice(0,500)+t.slice(t.length-10));let r=e.match(/^@{(.*?)}/);if(r){if(!A)return!1;let n=r[1];if(![].some.call(oi(n,document),o=>o===A))return!1;e=e.replace(r[0],"")}let i,a=e.match(/^\/(.*)\/(\w*)$/);return a?i=new RegExp(a[1],a[2]):i=new RegExp(e,"i"),i.test(t||"")}async createType(e){let t=this,r=e.type,i=e.icon,a=e.selectTxt,n=e.selectImg,s=e.selectAudio,o=e.selectVideo,p=e.selectLink,d=e.selectPage,m=e.sites,g=!1,u=typeof e.openInNewTab>"u"?c.prefConfig.openInNewTab:e.openInNewTab,f=[],y=document.createElement("span");y.className="search-jumper-type",!c.prefConfig.expandType&&m.length>10&&y.classList.add("not-expand"),e.match==="0"?(y.style.display="none",y.classList.add("notmatch")):e.match&&(new RegExp(e.match).test(de)==!1?(y.style.display="none",y.classList.add("notmatch")):g=!0),typeof e.description<"u"?y.dataset.title=r+" - "+e.description:y.dataset.title=r,y.dataset.type=r;let I=document.createElement("span"),L=document.createElement("img"),O=document.createElement("b");r.length>=3?(O.innerText=r.trim().substr(0,4),/^[\w \-]+$/.test(O.innerText.substr(0,3))||(O.innerText=O.innerText.substr(0,2))):O.innerText=r,I.appendChild(O),L.style.display="none",y.appendChild(I),I.classList.add("search-jumper-word"),I.classList.add("search-jumper-btn"),I.classList.add("noIcon");let H=/^BM/.test(r)&&e.icon==="bookmark";if(i){I.classList.remove("noIcon");let b=/^[a-z\- ]+$/.test(i);if(L.onload=S=>{L.style.display="",O.innerText="",O.style.display="none",b||I.classList.remove("search-jumper-word")},b){let S=be[i.trim().replace(/ /g,"_")];S==="fail"||!S?(O.className=i.indexOf("fa")===0?i:"fa fa-"+i,this.fontPool.push(O)):(L.src=S,L.style.width="100%",L.style.height="100%",I.appendChild(L))}else{if(/^data:/.test(i))L.src=i;else{let h=c.prefConfig.cacheSwitch&&be[i];h==="fail"||(h?L.src=h:(L.src=i,!be[i]&&!H&&De.push(L)))}I.appendChild(L)}}y.addEventListener("mouseleave",b=>{t.listArrow.style.cssText="",t.dockerScaleBtns.forEach(S=>{S.style.setProperty("--scale",1)})});let x=[],N=b=>{switch(c.prefConfig.batchOpenConfirm){case 1:window.confirm(B("batchOpenConfirm"))&&t.batchOpen(x,b);break;case 2:t.batchOpen(x,b);break;default:(y.classList.contains("search-jumper-open")||b.shiftKey||b.altKey||b.ctrlKey||b.metaKey||window.confirm(B("batchOpenConfirm")))&&t.batchOpen(x,b);break}};if(c.prefConfig.shortcut&&e.shortcut&&!y.classList.contains("notmatch")){let b=e.shortcut.replace("Key","").replace("Digit","").toUpperCase();b.length==1&&(y.dataset.title+=` (${b})`),document.addEventListener("keydown",S=>{if(!(c.prefConfig.shortcut==2&&!ae)&&S.target.id!=="searchJumperInput"&&!(!e.ctrl==S.ctrlKey||!e.alt==S.altKey||!e.shift==S.shiftKey||!e.meta==S.metaKey)&&!(!c.prefConfig.enableInInput&&!e.ctrl&&!e.alt&&!e.shift&&!e.meta&&Tt(document))){var h=(S.key||String.fromCharCode(S.keyCode)).toLowerCase();(e.shortcut==S.code||e.shortcut==h)&&(N(S),S.stopPropagation())}})}let R=0,z=this.scale*40,K=(b,S)=>{S?(b.style.display="",y.children.length>2&&y.insertBefore(b,y.children[2])):(b.style.display="none",t.searchJumperExpand.parentNode==y?y.insertBefore(b,t.searchJumperExpand):y.appendChild(b))},v=(b,S)=>{let h=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right"),k=!1;A&&(k=zi(A));let E=A&&(A.href||A.src);R=0,f.forEach(($,F)=>{let ce=m[F],oe=!0;if(ce.kwFilter){let re;$.dataset.link?re=E||b:re=$.dataset.txt?b||A&&A.innerText||"":E||b||location.href,oe=t.checkKwFilter(ce.kwFilter,re)}oe&&$.dataset.paste?(oe=k,K($,oe)):ce.kwFilter&&K($,oe);let fe=$.querySelector("img");$.style.display!="none"&&R++,fe&&!fe.src&&fe.dataset.src&&(fe.src=fe.dataset.src,delete fe.dataset.src)}),R>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(y.classList.add("not-expand"),y.appendChild(t.searchJumperExpand));let J=Math.max(y.scrollWidth,y.scrollHeight)+5+"px";c.prefConfig.disableTypeOpen&&(J=z+"px",S&&t.listPos(y.children[0],ie)),h?(y.style.height=J,y.style.width=""):(y.style.width=J,y.style.height="")};I.addEventListener("checkSites",b=>{v(b.detail)},!1);let T=b=>{if(b){if(b.button===2)return N(b),!1;if(b.button===0&&(b.shiftKey||b.altKey||b.ctrlKey))return!1}if(t.funcKeyCall)return t.showAllSites(),!1;let S=t.con.classList.contains("search-jumper-left")||t.con.classList.contains("search-jumper-right");if(t.preList&&(t.preList.style.visibility="hidden",t.listArrow.style.cssText=""),y.classList.remove("search-jumper-move"),y.classList.contains("search-jumper-open"))c.prefConfig.minSizeMode&&t.bar.classList.add("minSizeModeClose"),y.classList.remove("search-jumper-open"),S?(y.style.height=z+"px",y.style.width=""):(y.style.height="",y.style.width=z+"px"),y.style.flexWrap="",c.prefConfig.disableTypeOpen&&(ie.style.visibility="hidden");else{t.recoveHistory(),y.classList.add("search-jumper-open"),c.prefConfig.minSizeMode&&t.bar.classList.remove("minSizeModeClose");let h=Oe();v(h,b),setTimeout(()=>{y.classList.contains("search-jumper-open")&&(y.style.flexWrap="nowrap",y.classList.add("search-jumper-move"))},c.prefConfig.typeOpenTime),Se.forEach(k=>{y!=k&&(k.classList.remove("search-jumper-open"),k.style.width=z+"px",k.style.height=z+"px",k.style.flexWrap="")})}c.prefConfig.disableTypeOpen||setTimeout(()=>{t.checkScroll()},c.prefConfig.typeOpenTime)},w=!1,P,j,q=b=>{document.removeEventListener("mouseup",q),document.removeEventListener("mousemove",ue),w||T(b),w=!1},ue=b=>{w?(t.bar.style.left=j.x+b.clientX-P.x+"px",t.bar.style.top=j.y+b.clientY-P.y+"px"):(t.tips.style.opacity=0,w=!0,P={x:b.clientX,y:b.clientY},j={x:parseInt(t.bar.style.left),y:parseInt(t.bar.style.top)})};I.onmouseup=function(b){if(b&&t.funcKeyCall&&b.button===0&&!(b.shiftKey||b.altKey||b.ctrlKey)){w=!1,b.preventDefault&&b.preventDefault(),document.addEventListener("mouseup",q),document.addEventListener("mousemove",ue);return}T(b)},I.oncontextmenu=function(b){b.preventDefault()},I.addEventListener("click",b=>(t.batchOpen(x,b),!1),!1),I.addEventListener("dblclick",b=>{b.stopPropagation(),b.preventDefault()},!0);let te,ie,C=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,W=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,D=!Dt||C>600&&W>600;y.addEventListener("sitelist",async b=>{y.appendChild(ie),await t.listPos(b.detail.bind,ie),ie.style.display="block"},!1),I.addEventListener("mouseenter",b=>{if(!w&&(!t.funcKeyCall&&c.prefConfig.showSiteLists&&(c.prefConfig.alwaysShowSiteLists||!y.classList.contains("search-jumper-open"))?(y.appendChild(ie),t.listPos(y.children[0],ie)):D&&t.tipsPos(I,y.dataset.title),c.prefConfig.overOpen)){if(y.classList.contains("search-jumper-open"))return;clearTimeout(te),te=setTimeout(()=>{T(b)},500)}},!1),I.addEventListener("mouseleave",b=>{t.tips.style.opacity=0,c.prefConfig.overOpen&&clearTimeout(te)},!1);let V=!1,Z=m&&m.length>200;y.dataset.id=t.siteIndex,t.stopInput=!1;async function ne(b,S){if(!b.name)return;let h=await t.createSiteBtn(Z||c.prefConfig.noIcons?"0":b.icon,b,u,H,e);h&&(h.classList.contains("notmatch")||R++,h.dataset.type=r,h.dataset.id=t.siteIndex,t.siteIndex++,t.allSiteBtns.push([h,b]),y.appendChild(h),f.push(h),!b.nobatch&&b.match!=="0"&&x.push(b.name),!V&&!ae&&(h.dataset.current||g)&&!y.classList.contains("notmatch")&&(V=!0,h.dataset.current&&(c.prefConfig.showCurrent||(h.style.display="none"),t.setCurrentSite(b,h)),t.currentType=y))}try{for(let[b,S]of m.entries())await ne(S,b),b%100===99&&await Ae(1)}catch{for(let S=0;S<m.length;S++)ne(m[S],S);await Ae(1)}if(c.prefConfig.sortSite&&y.children.length>1){f.sort((S,h)=>{let k=Pe[S.dataset.name]||0;return(Pe[h.dataset.name]||0)-k});let b=!1;for(let S=f.length-1;S>=0;S--){let h=f[S],k=Pe[h.dataset.name]||0;if(S==f.length-1)k>0&&(b=!0,Pe[h.dataset.name]=0);else{let E=Pe[f[S+1].dataset.name]||0;k-E>10&&(b=!0,Pe[h.dataset.name]=E+10)}y.insertBefore(h,y.children[1])}b&&U.setItem("sortSiteNames",Pe)}if(f.forEach(b=>{b.classList.contains("notmatch")&&y.appendChild(b)}),ie=await t.createList(f,y,x),V){if(c.prefConfig.currentTypeFirst?t.bar.insertBefore(y,t.bar.children[0]):t.bar.insertBefore(y,t.bar.children[t.bar.children.length-1]),!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen){y.classList.add("search-jumper-open"),y.classList.add("search-jumper-move"),R>(c.prefConfig.expandTypeLength||12)&&!c.prefConfig.expandType&&(y.classList.add("not-expand"),y.appendChild(t.searchJumperExpand));let b=-1,S=[];if(document.readyState!=="complete"){b=3;let h=k=>{document.readyState==="complete"&&(document.removeEventListener("readystatechange",h),window.removeEventListener("load",h),S.forEach(E=>{E&&!E.src&&E.dataset.src&&(E.src=E.dataset.src,delete E.dataset.src)}),S=[])};document.addEventListener("readystatechange",h),window.addEventListener("load",h)}f.forEach((h,k)=>{let E=h.querySelector("img"),J=m[k];if(J&&He&&J.kwFilter&&(t.checkKwFilter(J.kwFilter,He)?h.style.display="":(h.style.display="none",t.searchJumperExpand.parentNode==y?y.insertBefore(h,t.searchJumperExpand):y.appendChild(h))),h.style.display!="none"&&E&&!E.src&&E.dataset.src){if(b>=0&&!/^data/.test(E.dataset.src))if(b!==0)b--;else{S.push(E);return}E.src=E.dataset.src,delete E.dataset.src}})}}else t.historyTypeEle||It==r&&(t.historyTypeEle=y),t.bar.insertBefore(y,t.bar.children[t.bar.children.length-1]);return y.style.width=y.scrollHeight+"px",y.style.height=y.scrollHeight+"px",ie.style.display="none",y.appendChild(ie),a&&n&&s&&o&&p&&d?y.classList.add("search-jumper-targetAll"):(a&&y.classList.add("search-jumper-needInPage"),n&&y.classList.add("search-jumper-targetImg"),s&&y.classList.add("search-jumper-targetAudio"),o&&y.classList.add("search-jumper-targetVideo"),p&&y.classList.add("search-jumper-targetLink"),d&&y.classList.add("search-jumper-targetPage")),Se.push(y),y}async openSiteBtn(e,t,r=!1){this.lastTips=null;let i=new CustomEvent("mouseenter");e.dispatchEvent(i),await this.siteSetUrl(e);let a=e.dataset.isPage;t||(t="_blank"),a&&e.setAttribute("target",t),a&&t=="_blank"&&e.href?ge(e.href,{active:r,insert:!0}):e.click(),e.setAttribute("target",e.dataset.target==1?"_blank":"_self")}async batchOpen(e,t,r){let i=this;if(i.batchOpening=!0,i.customInput=!1,t.altKey&&t.shiftKey){let a=i.getTargetSitesByName(e),n=window.innerWidth||document.documentElement.clientWidth,s="<title>SearchJumper Multi</title><style>body{background: black; margin: 0;}iframe{box-sizing: border-box;padding: 5px}</style>",o=window.open("","_blank"),p=1;for(let d of a)if(d.dataset.isPage){if(await i.siteSetUrl(d),i.stopInput)return;if(!d.href)continue;let m=document.createElement("iframe");m.width=a.length<=2||n<=1280?"50%":"33%",m.height="100%",m.frameBorder="0",m.sandbox="allow-same-origin allow-scripts allow-popups allow-forms",m.id="searchJumper"+p++,m.style.display="none",s+=m.outerHTML,Be({method:"GET",url:d.href,headers:{referer:d.href,origin:d.href,"User-Agent":navigator.userAgent},onload:function(g){let u=o.document.querySelector("iframe#"+m.id),f=()=>{let y=u.contentDocument||u.contentWindow&&u.contentWindow.document;if(y)try{u.style.display="",u.src=d.href;let I=`<base href="${d.href.replace(/[^\/]*$/,"")}" />`,L=g.response.indexOf("<head")!==-1?g.response.replace(/(\<head.*?\>)/,"$1"+I):I+g.response;y.write(L)}catch{}else setTimeout(()=>{f()},500)};u&&f()},onerror:function(g){pe(g)},ontimeout:function(g){pe(g)}})}o.document.write(s),o.document.close()}else if((t.ctrlKey||t.metaKey)&&t.shiftKey){let a=i.getTargetSitesByName(e);for(let n of a){if(await i.siteSetUrl(n),i.stopInput)return;if(n.dataset.isPage&&n.href){let s={};A&&(s={src:A.src||A.href||"",title:A.title||A.alt}),e=e.filter(o=>o!==n.dataset.name),U.setItem("lastSign",{target:s,sites:e}),setTimeout(()=>{ge(n.href,{incognito:!0})},300),setTimeout(()=>{U.setItem("lastSign",!1)},2e3);break}}}else if(t.altKey){let a=i.getTargetSitesByName(e),n=[];for(let g of a)if(g.dataset.isPage){if(await i.siteSetUrl(g),i.stopInput)return;if(!g.href)continue;n.push(g.href)}let s=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,o=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,p=parseInt(s/800);p>n.length&&(p=n.length);let d=parseInt(s/p),m=o/(parseInt((n.length-1)/p)+1)-65;for(let g=0;g<n.length;g++){let u=g%p*d,f=parseInt(g/p)*(m+70);window.open(n[g]+"#searchJumperMin","_blank",`width=${d-10}, height=${m}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${u}, top=${f}`)}}else if(t.shiftKey){let a=i.getTargetSitesByName(e);for(let n of a){if(await i.siteSetUrl(n),i.stopInput)return;if(n.dataset.isPage&&n.href){let s={};A&&(s={src:A.src||A.href||"",title:A.title||A.alt}),e=e.filter(o=>o!==n.dataset.name),U.setItem("lastSign",{target:s,sites:e}),window.open(n.href,"_blank"),setTimeout(()=>{U.setItem("lastSign",!1)},2e3);break}}}else if(t.ctrlKey||t.metaKey){let a=i.getTargetSitesByName(e).reverse();for(let n of a){if(await i.siteSetUrl(n),n.dataset.isPage&&n.href){ge(n.href,{active:!1,insert:!0});continue}if(i.stopInput)return;n.click()}}else t.button===2&&i.getTargetSitesByName(e).reverse().forEach(n=>{n.dataset.current||i.openSiteBtn(n,"_blank",!!r)});i.batchOpening=!1}async siteSetUrl(e,t){return new Promise(r=>{let i=n=>{e.removeEventListener("actionOver",i),r(!0)};e.addEventListener("actionOver",i);let a=new PointerEvent("mousedown",t);e.dispatchEvent(a)})}getTargetSitesByName(e,t){let r=this,i=[];return e.forEach(a=>{for(let n=0;n<r.allSiteBtns.length;n++){let s=r.allSiteBtns[n][0];if(s.dataset.name==a){if(!t&&s.dataset.pointer){if(s.dataset.oriName){let o=r.getTargetSitesByName([s.dataset.oriName],!0);if(o.length){i.push(...o);break}}}else i.push(s);break}}}),i}async submitAction(e){if(e=e.slice(),document.readyState!=="complete"&&document.readyState!=="interactive"){await Ae(300),this.submitAction(e);return}let t,r,i=!1,a=this,n=!1,s=0,o=[],p=!1,d=[],m=await U.getItem("copyStore");m&&(d=JSON.parse(m));let g=async(u,f)=>{let y=!0;if(u[0]==="sleep"||u[0]==="@sleep")await Ae(u[1]),pe(`sleep ${u[1]}`);else if(u[0]==="@click")i=!0,await qi(u[1],f)||(y=!1);else if(u[0]==="@dblclick")i=!0,await Sr(u[1],f)||(y=!1);else if(u[0]==="@rclick")i=!0,await Cr(u[1],f)||(y=!1);else if(u[1]==="click"&&u[0].indexOf("@")===0)i=!0,await qi(u[0].substr(1),f)||(y=!1);else if(u[0]==="@copy"){let I=await Pt(u[1],f);I&&I!==!0&&(d.push(I.innerText),pt||(y=!1))}else if(u[0]==="@call"){let I=a.getTargetSitesByName([u[1]])[0];if(I)Bt=Bt||Oe()||Ee,await a.siteSetUrl(I),I.click();else{let L=window[u[1]]||new ni('"use strict";'+u[1]);L&&await L()}}else if(u[0]==="@open"){let I=await Ft(u[1]);p?ge(I.href):(p=!0,setTimeout(()=>{location.href=I.href},50))}else if(u[0]!=="@reload")if(u[0]==="@wait")u[1].indexOf("!")===0?await wr(u[1].slice(1)):await Ft(u[1]);else{let I=u[1];if(He||(He=I),I.indexOf("%input{")!==-1){let O=await a.showCustomInputWindow(I);if(O)I=O;else return U.setListItem("inPagePostParams",location.hostname,""),!0}await Ki(u[0],I,f)||(y=!1),u[0]!=="@"&&(r=xt(u[0]))}return y};for(let u of e){if(u[0]==="@loopStart")n=!0,o=[],s=parseInt(u[1])||1;else if(u[0]==="@loopEnd")for(n=!1;s-- >0;){let f=!1,y=0;for(;!f;){f=!0;for(let I of o)await g(I,y)||(f=!1);y++}}else n?o.push(u):await g(u);if(Ge&&(Ge.shift(),Ge&&Ge.length?(U.setListItem("inPagePostParams",location.hostname,Ge),U.setItem("copyStore",JSON.stringify(d))):(Re(d.join(`
`)),U.setListItem("inPagePostParams",location.hostname,""),U.setItem("copyStore","")),u[0]==="@reload")){location.reload(!!u[1]);return}}if(n)for(n=!1;s-- >0;){let u=!1,f=0;for(;!u;){u=!0;for(let y of o)await g(y,f)||(u=!1);f++}}if(!i&&r){for(t=r.parentNode;t.nodeName.toUpperCase()!="FORM"&&(t=t.parentNode,!!t););if(t){let u=t.querySelector("[type=submit]");u?u.click():t.submit()}else vr()}}getCloneData(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t];for(let i=0;i<r.sites.length;i++){let a=r.sites[i];if(!/^\[/.test(a.url)&&a.name==e)return a}}return null}async createSiteBtn(e,t,r,i,a,n){let s=this,o=document.createElement("a");o.setAttribute("ref","noopener noreferrer"),o.setAttribute("referrerPolicy","no-referrer");let p=t.name,d=t.match,m=!1,g,u=!i&&/^\[/.test(t.url),f=t.description,y=t.shortcut;if(typeof t.openInNewTab<"u"&&(r=t.openInNewTab),u){o.dataset.pointer=!0;let h=JSON.parse(t.url);if(h.length===1){o.dataset.clone=!0;let k=this.getCloneData(h[0]);k&&(o.dataset.oriName=k.name,t=k,t.icon&&e!=="0"&&(e=t.icon),t.description&&(f=t.description))}}/^d:/.test(t.url)?(o.setAttribute("download",""),t.url=t.url.replace(/^d:/,"")):/^showTips:/.test(t.url)&&(m=!0,o.dataset.showTips=!0),/^paste:/.test(t.url)&&(o.dataset.paste=!0);let I=/^(https?|ftp):/.test(t.url);I&&(o.dataset.isPage=I),o.className="search-jumper-btn",typeof f<"u"&&(o.title=f),o.dataset.name=p,o.classList.add("search-jumper-word"),o.dataset.inPagePost=t.url.indexOf("#p{")!=-1?"t":"f";let L=o.dataset.inPagePost==="t";if(d==="0")o.style.display="none",o.classList.add("notmatch");else if(!i&&(!ae||t.hideNotMatch)&&window.top==window.self){if(d){let h,k=d.match(/^\/(.*)\/(\w*)$/);k?h=new RegExp(k[1],k[2]):h=new RegExp(d,"i"),h.test(de)&&(o.dataset.current=!0)}else if(!u&&location.hostname&&t.url.indexOf(location.hostname)!=-1){this.inSiteMatch||(this.inSiteMatch=/site(%3A|:)(.+?)[\s%]/);let h=t.url.match(this.inSiteMatch);if(h)de.indexOf(h[2])!=-1&&t.url.replace(h[0],"").indexOf(location.hostname)!=-1&&(o.dataset.current=!0);else if(this.pathMatch||(this.pathMatch=new RegExp("^https?://"+location.host+location.pathname+"?([\\?#].*|[%:#]p{|$)")),this.pathMatch.test(t.url))if(this.postMatch||(this.postMatch=/[#:%]p{/),this.postMatch.test(t.url))o.dataset.current=!0;else{this.paramMatch||(this.paramMatch=/[^\/\?&]+(?=%[stb])/g);let k=t.url.match(this.paramMatch);k?(k=k.join(".*"),new RegExp(k).test(de)&&(o.dataset.current=!0)):o.dataset.current=!0}else t.url.indexOf("http")===0&&t.url.indexOf("?")===-1&&(this.keywordMatch||(this.keywordMatch=/%[stb][a-z]?\b/g),new RegExp(t.url.replace(/^https?/,"").replace(/[#%]\w+{.*/,"").replace(/\./g,"\\.").replace(this.keywordMatch,".*")).test(de)&&(o.dataset.current=!0))}o.dataset.current||t.hideNotMatch&&(o.style.display="none",o.classList.add("notmatch"))}let O=document.createElement("span");!i&&p.length>=3?(O.innerText=p.substr(0,4),/^[\w \-]+$/.test(O.innerText.substr(0,3))||(O.innerText=O.innerText.substr(0,2))):O.innerText=p,o.appendChild(O);let H=document.createElement("img");if(H.style.display="none",o.appendChild(H),!n&&c.prefConfig.shortcut&&y&&!o.dataset.clone&&!o.classList.contains("notmatch")){let h=document.createElement("div"),k=y.replace("Key","").replace("Digit","").toUpperCase();k.length==1&&(h.innerText=k,o.appendChild(h)),document.addEventListener("keydown",async E=>{if(!(c.prefConfig.shortcut==2&&!ae)&&E.target.id!=="searchJumperInput"&&!(!s.hideTimeout&&(!t.ctrl==E.ctrlKey||!t.alt==E.altKey||!t.shift==E.shiftKey||!t.meta==E.metaKey))&&s.bar.contains(o)&&!(!c.prefConfig.enableInInput&&!t.ctrl&&!t.alt&&!t.shift&&!t.meta&&Tt(document))){var J=(E.key||String.fromCharCode(E.keyCode)).toLowerCase();(y==E.code||y==J)&&(E.stopPropagation(),mi&&(A=mi),m?o.dispatchEvent(new CustomEvent("showTips")):await ue()!==!1&&!s.customInput&&o.click())}})}let x;if(e=="0"||(e?x=e:!i&&I?x=t.url.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"):/^showTips:https?:\/\//.test(t.url)&&(x=t.url.replace(/\?.*/,"").replace(/^showTips:(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico"))),x)if(H.onload=k=>{o.classList.remove("search-jumper-word"),O.parentNode&&!c.prefConfig.showEngineWords&&O.parentNode.removeChild(O),H.style.display=""},/^data:/.test(x))H.dataset.src=x;else{let k=c.prefConfig.cacheSwitch&&be[x];k==="fail"?o.dataset.current&&x.indexOf(location.host)!=-1&&(H.dataset.src=x,be[x]="",i||setTimeout(()=>{yi(H)},0)):k?H.dataset.src=k:(H.dataset.src=x,!i&&!be[x]&&De.push(H))}I&&(r?(o.setAttribute("target","_blank"),o.dataset.target=1):o.setAttribute("target","_self"));let N=t.url,R=mt.test(N);R&&(o.dataset.txt=!0),/%[tb]\b/i.test(N)&&(o.dataset.link=!0);let z,K=async h=>{s.customInput=!1,N=t.url,z="";let k=h||s.searchJumperInputKeyWords.value||$e()||s.tileInput.value;!k&&!gt&&!s.bar.classList.contains("search-jumper-isTargetLink")&&(k=Oe()),k&&!h&&(k!=Ee&&(s.keywordIndex=0,I&&(Ee=k,U.setItem("cacheKeywords",k))),z=k);let E;(L||/^c(opy)?:|^paste:/.test(N))&&(N.indexOf("%input{")!==-1&&(N=await new Promise(X=>{s.showCustomInputWindow(N,Y=>{X(Y)})}),o.dataset.url=""),E=N.match(/#p{([\s\S]*[^\\])}/));let J=location.host,$=location.href,F=(X,Y,G,le)=>{if(X.indexOf(Y+"[")!==-1){let ve=X.match(qt(Y,"","\\[(.*?)(\\|(.+))?\\]")),he;if(ve){switch(ve[3]?he=G.split(ve[3]):(he=G.split(/[\n\r]/),he.length===1&&(he=G.split(" "))),s.keywordIndex||(s.keywordIndex=0),ve[1]){case"all":z=he.join(`
`);break;case"":G=he[s.keywordIndex],++s.keywordIndex>=he.length&&(s.keywordIndex=0);break;case"-1":--s.keywordIndex<0&&(s.keywordIndex=he.length-1),G=he[s.keywordIndex];break;default:G=he[parseInt(ve[1])||0];break}X=X.replace(ve[0],Y)}}return bi(X,Y,G,le)},ce=!/^showTips:h/i.test(N)&&/^c(opy)?:|[#:%]P{|^javascript:|^showTips:/i.test(N),oe="",fe="",re="",it="",Li="",Pi=X=>{let Y=X;if(Y=F(Y,"%su",oe),Y=F(Y,"%sl",fe),Y=F(Y,"%sr",m?re.replace(/\n/g,"\u3010SearchJumperBreak\u3011"):re),Y=F(Y,"%S",Ee||re),Y=F(Y,"%ss",it),Y=F(Y,"%st",Li),Y=F(Y,"%se",escape?escape(re):re),Y=F(Y,"%s",re,G=>ce?G:encodeURIComponent(G)),/%bd\b/.test(Y))try{let G=atob(re);Y=F(Y,"%bd",G)}catch{console.log("No standard base64")}if(/%be\b/.test(Y))try{let G=btoa(re);Y=F(Y,"%be",G)}catch(G){console.log(G)}return Y},Hr=X=>{let Y=X.match(/%element{(.*?)}(\.prop\((.*?)\))?/),G=0;for(;Y&&!(G++>100);){let ve=Y[1],he=Y[3],me="";if(ve){let rt=xt(ve);rt&&(he?me=rt.getAttribute(he)||rt[he]:me=rt.innerText)}else try{let rt=window.getSelection(),st=document.createElement("div");for(let we=0,je=rt.rangeCount;we<je;++we)st.appendChild(rt.getRangeAt(we).cloneContents());if([].forEach.call(st.querySelectorAll("style,script,svg,canvas"),we=>{let je=document.createTextNode("");we.parentNode.replaceChild(je,we)}),document.body.appendChild(st),he)for(let we=0;we<st.childNodes.length;we++){let je=st.childNodes[we];je.nodeType==3?(me+=je.nodeValue,me+=`
`):je.nodeType==1&&(me+=je.getAttribute(he)||je[he]||"",me+=`
`)}else[].forEach.call(st.querySelectorAll("img"),we=>{if(!we.src)return;let je=document.createTextNode(` ![${(we.alt||"").replace(/[\n\r]/g," ").trim()}](${we.src||""}) `);we.parentNode.replaceChild(je,we)}),[].forEach.call(st.querySelectorAll("a"),we=>{if(!we.href)return;let je=(we.innerText||"").replace(/[\n\r]+/g,`
`).trim();if(!je)return;je=` [${je}](${we.href||""}) `;let ri;je.indexOf(`
`)==-1?ri=document.createTextNode(je):(ri=document.createElement("pre"),ri.innerHTML=ee(je)),we.parentNode.replaceChild(ri,we)}),me=st.innerText;me&&(me=me.replace(/[\n\r]\s*/g,`
`)),document.body.removeChild(st)}catch(rt){console.error(rt)}X=F(X,Y[0],ce?me:encodeURIComponent(me)),Y=X.match(/%element{(.*?)}(\.prop\((.*?)\))?/)}Y=X.match(/%date({(.*?)})?/),G=0;let le=new Date().getTime();for(;Y&&!(G++>100);){let ve=Y[2],he=le;if(ve){ve=ve.replace(/\s/g,"");let me=ve.match(/(\D*)?(\d+)/);for(;me;){switch(me[1]){case"-":he-=parseInt(me[2]);break;case"*":he*=parseInt(me[2]);break;case"/":me[2]&&me[2]!="0"&&(he=parseInt(he/parseInt(me[2])));break;default:he+=parseInt(me[2]);break}ve=ve.replace(me[0],""),me=ve.match(/(\D*)?(\d+)/)}}else he=le;X=X.replace(Y[0],he),Y=X.match(/%date({(.*?)})?/)}return X};if(!o.dataset.url){let X=N;L&&(X=X.replace(E[0],"")),o.dataset.url=X.replace(/%e\b/g,document.characterSet).replace(/%c\b/g,Dt?"mobile":"pc")}let xe="",wt="",Mi=z||document.title,Xe="",se=Hr(o.dataset.url);if(A&&A.nodeName){if(xe=A.href||A.parentNode&&A.parentNode.href||"",wt=xe||A.parentNode&&A.parentNode.parentNode&&A.parentNode.parentNode.href||"",(a.selectImg||a.selectAudio||a.selectVideo)&&A.src&&(xe=A.src),A.nodeName.toUpperCase()=="VIDEO"||A.nodeName.toUpperCase()=="AUDIO"){if(!xe){let X=A.querySelector("source");X&&(xe=X.src)}xe&&(xe=xe.replace(/^blob:/,""))}Mi=A.title||A.alt||document.title,A.nodeName.toUpperCase()=="IMG"&&/%i\b/.test(N)?A.src&&(/^data/.test(A.src)?Xe=A.src:(s.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),Xe=await Vi(A)),se=se.replace(/%i\b/g,Xe)):(A.nodeName.toUpperCase()=="A"||A.parentNode&&A.parentNode.nodeName.toUpperCase()=="A")&&R&&!k&&A.textContent.trim()&&(k=A.textContent.trim())}for(;se.indexOf("%template{")!==-1;){let X=se.match(/%template{(.*?[^\\])}/);if(!X)return!1;let Y=X[1];c.prefConfig.templateData||(c.prefConfig.templateData={});let G=c.prefConfig.templateData[Y];if(!G){if(s.stopInput)return!1;if(G=window.prompt(B("template",Y))||"",G)c.prefConfig.templateData[Y]=G,U.setItem("searchData",c);else return!1}se=se.replace(X[0],G)}for(;se.indexOf("%input{")!==-1;){let X=se.match(/%input{(.*?[^\\])}/);if(!X||(s.customInput=!0,s.stopInput))return!1;if(s.batchOpening){let Y;if(X[1].indexOf('"')===0&&X[1].indexOf('","')!==-1?Y=X[1].substr(1,X[1].length-2).split('","'):Y=X[1].split(","),Y.length===2?Y=window.prompt(Y[0],Y[1]):Y=window.prompt(X[1]),Y===null)return!1;se=se.replace(X[0],Y)}else break}xe&&(xe=xe.replace(/%(\w{2})/g,(X,Y)=>`%${Y.toUpperCase()}`)),wt&&(wt=wt.replace(/%(\w{2})/g,(X,Y)=>`%${Y.toUpperCase()}`));let St=xe.replace(/^https?:\/\//i,"");k||(k=ae&&Ee);try{if(typeof navigator.clipboard.readText<"u"&&(!k&&R&&(k=await navigator.clipboard.readText(),k&&!h&&(z=k)),!Xe&&/%i\b/.test(N))){if((await navigator.permissions.query({name:"clipboard-read"})).state!=="denied"){const Y=await navigator.clipboard.read();for(const G of Y)if(G.types.includes("image/png")){const le=await G.getType("image/png");Xe=await new Promise(ve=>{const he=new FileReader;he.onload=function(me){ve(me.target&&me.target.result)},he.readAsDataURL(le)}),Xe&&(se=se.replace(/%i\b/g,Xe))}}if(!Xe){s.customInput=!0;let Y=window.prompt(B("targetUrl"),"https://www.google.com/favicon.ico");if(Y)s.tipsPos(o,"<span class='loader'></span><font>Loading...</font>"),Xe=await Kt(Y);else return!1}}}catch(X){console.error(X.message)}if(!k&&R){if(s.customInput=!0,s.con.classList.contains("search-jumper-showall")||s.inInput||m||s.stopInput)return!1;let X=window.prompt(B("keywords"));if(X===null)return!1;He=X,setTimeout(()=>{He=""},1),k=X,re=k,oe=re.toUpperCase(),fe=re.toLowerCase(),it=ye.tc2sc?ye.tc2sc(re):re,Li=ye.sc2tc?ye.sc2tc(re):re,ce||(k=encodeURIComponent(k)),se=Pi(se)}else k&&!oe&&!fe&&!re&&(re=k,oe=re.toUpperCase(),fe=re.toLowerCase(),it=ye.tc2sc?ye.tc2sc(re):re,Li=ye.sc2tc?ye.sc2tc(re):re,ce||(k=encodeURIComponent(k)));if(xe===""){let X=$e()||s.searchJumperInputKeyWords.value||s.tileInput.value;if(!R&&X&&/^(http|ftp)/i.test(X))xe=X,xe=xe.replace(/%(\w{2})/g,(Y,G)=>`%${G.toUpperCase()}`);else{let Y=!1,G=()=>!(s.stopInput||m||(Y===!1&&(Y=window.prompt(B("targetUrl"),"https://www.google.com/favicon.ico"),Y&&(Y=Y.replace(/%(\w{2})/g,(le,ve)=>`%${ve.toUpperCase()}`),A={src:Y})),Y===null));if(/%t\b/.test(se)){if(s.customInput=!0,G()===!1)return!1;se=F(se,"%t",Y)}if(/%T\b/.test(se)){if(s.customInput=!0,G()===!1)return!1;se=se.replace(/%T\b/g,encodeURIComponent(Y))}if(/%τ\b/.test(se)){if(s.customInput=!0,G()===!1)return!1;se=se.replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(Y)))}if(/%b\b/.test(se)){if(s.customInput=!0,G()===!1)return!1;se=se.replace(/%b\b/g,Y.replace(/^https?:\/\//i,""))}if(/%B\b/.test(se)){if(s.customInput=!0,G()===!1)return!1;se=se.replace(/%B\b/g,encodeURIComponent(Y.replace(/^https?:\/\//i,"")))}if(/%β\b/.test(se)){if(s.customInput=!0,G()===!1)return!1;se=se.replace(/%β\b/g,encodeURIComponent(encodeURIComponent(Y.replace(/^https?:\/\//i,""))))}}}let Ni=J;if((wt||xe)&&!o.dataset.link&&($=wt||xe,Ni=$.replace(/^\w+:\/\/([^\/]+).*/,"$1")),L){let X=[],Y=!1;if(E[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(G=>{if(G=G.trim(),/^loopStart\(\d+\)$/.test(G)){let le=G.match(/loopStart\((.*)\)/);X.push(["@loopStart",le[1]])}else if(G=="loopEnd")X.push(["@loopEnd",""]);else if(G.startsWith("click(")&&G.endsWith(")")){let le=G.slice(6,G.length-1);le&&X.push(["@click",le.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("dblclick(")&&G.endsWith(")")){let le=G.slice(9,G.length-1);le&&X.push(["@dblclick",le.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("rclick(")&&G.endsWith(")")){let le=G.slice(7,G.length-1);le&&X.push(["@rclick",le.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("copy(")&&G.endsWith(")")){let le=G.slice(5,G.length-1);le&&X.push(["@copy",le.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("call(")&&G.endsWith(")")){let le=G.slice(5,G.length-1);le&&(X.push(["@call",le.replace(/\\([\=&])/g,"$1").trim()]),Y=!0)}else if(G.startsWith("reload(")&&G.endsWith(")")){let le=G.slice(7,G.length-1);X.push(["@reload",le.trim()])}else if(G.startsWith("wait(")&&G.endsWith(")")){let le=G.slice(5,G.length-1);X.push(["@wait",le.replace(/\\([\=&])/g,"$1").trim()])}else if(G.startsWith("open(")&&G.endsWith(")")){let le=G.slice(5,G.length-1);le&&X.push(["@open",le.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(G)){let le=G.match(/sleep\((.*)\)/);le&&X.push(["@sleep",le[1]])}else{G=G.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let le=G.split("SJ^PARAM");if(le.length===2){let ve=le[0],he=Pi(le[1].replace(/\\([\=&])/g,"$1").replace(/%e\b/g,document.characterSet).replace(/%i\b/g,Xe).replace(/%c\b/g,Dt?"mobile":"pc").replace(/%U\b/g,encodeURIComponent($)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent($))).replace(/%h\b/g,Ni).replace(/%T\b/g,encodeURIComponent(xe)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(xe))).replace(/%b\b/g,St).replace(/%B\b/g,encodeURIComponent(St)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent(St))).replace(/%n\b/g,Mi));he=F(he,"%t",xe),he=F(he,"%u",$),X.push([ve,he])}else(G.endsWith(".click()")||G.endsWith(".click"))&&X.push(["@"+G.replace(/\.click(\(\))?$/,""),"click"])}}),Y&&s.updateCacheKeywords(),se===""||se===location.href)return Ge=X,this.submitAction(X),!1;U.setListItem("inPagePostParams",se.replace(/^https?:\/\/([^\/:]+).*/,"$1"),X)}return se=F(se,"%h",Ni),se=F(se,"%t",xe),se=F(se,"%u",$),se=Pi(se.replace(/%U\b/g,encodeURIComponent($)).replace(/%υ\b/g,encodeURIComponent(encodeURIComponent($))).replace(/%T\b/g,encodeURIComponent(xe)).replace(/%τ\b/g,encodeURIComponent(encodeURIComponent(xe))).replace(/%b\b/g,St).replace(/%B\b/g,encodeURIComponent(St)).replace(/%β\b/g,encodeURIComponent(encodeURIComponent(St))).replace(/%n\b/g,Mi)),r&&/^(https?|ftp):/.test(se)?(o.setAttribute("target","_blank"),o.dataset.target=1):o.dataset.target=0,se},v,T=!1,w,P,j,q,ue=async h=>{if(delete o.href,h||(h={}),w=h.altKey,P=h.ctrlKey,j=h.metaKey,q=h.shiftKey,!w&&!P&&!j&&!q&&(h.button==1||h.button==2?(w=!1,P=!0,j=!1,q=!1):r===2?(w=!1,P=!0,j=!1,q=!0):r===3?(w=!0,P=!1,j=!1,q=!1):r===4&&(w=!1,P=!0,j=!1,q=!1)),m){o.removeAttribute("target"),g&&(/^(https?|ftp):/.test(g)?(v=g,o.href=v,r?o.setAttribute("target","_blank"):o.setAttribute("target","_self")):(/^copy:/.test(g)&&(g=g.replace(/^copy:/,"")),Re(g))),o.dispatchEvent(new Event("actionOver"));return}if(T=!1,v="",v=await K(),/^(https?|ftp):/.test(v)&&h.stopPropagation&&h.stopPropagation(),/^c(opy)?:|^paste:/.test(t.url)||/^javascript:/.test(t.url)||/^\[/.test(t.url)||/[:%]P{/.test(t.url)||t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url))(h.button==1||h.button==2)&&(T=!0);else{if(!v){s.stopInput||(s.stopInput=!0,setTimeout(()=>{s.stopInput=!1},1));return}o.href=v}s.customInput&&v&&(T=!0),o.dispatchEvent(new Event("actionOver")),T&&(h.preventDefault&&h.preventDefault(),o.click())},te=()=>{let h=Math.max(c.prefConfig.historyLength,20),k=o.dataset.current;if(!t.hideNotMatch&&!t.kwFilter&&!o.dataset.clone&&!o.dataset.paste&&d!=="0"&&h&&!k&&U.getItem("historySites",E=>{Ve=E||[],Ve=Ve.filter(J=>J&&J!=p),Ve.unshift(p),Ve.length>h&&(Ve=Ve.slice(0,h)),U.setItem("historySites",Ve)}),c.prefConfig.shiftLastUsedType&&!k){let E=o.parentNode;!(E&&(E.classList.contains("search-jumper-targetAll")||E.classList.contains("search-jumper-targetImg")||E.classList.contains("search-jumper-targetAudio")||E.classList.contains("search-jumper-targetVideo")||E.classList.contains("search-jumper-targetLink")||E.classList.contains("search-jumper-targetPage")||E.classList.contains("search-jumper-needInPage")))&&It!=o.dataset.type&&(It=o.dataset.type,U.setItem("historyType",It))}c.prefConfig.sortType&&U.getItem("sortTypeNames",E=>{Le=E||{},Le[o.dataset.type]?Le[o.dataset.type]=Le[o.dataset.type]+1:Le[o.dataset.type]=1,U.setItem("sortTypeNames",Le)}),c.prefConfig.sortSite&&U.getItem("sortSiteNames",E=>{Pe=E||{},Pe[o.dataset.name]?Pe[o.dataset.name]=Pe[o.dataset.name]+1:Pe[o.dataset.name]=1,U.setItem("sortSiteNames",Pe)})},ie=(h,k)=>{Re(k);let E=o;h||(s.appendBar(),s.closeOpenType(),s.con.style.display="",s.setFuncKeyCall(!0),window.getSelection().toString()?E=A||o:E=_(document)),s.tipsPos(E,B("copyOver")),clearTimeout(s.hideTips),s.hideTips=setTimeout(()=>{s.tips.style.opacity=="1"&&(s.tips.style.opacity=0)},1500)},C=h=>{if(h&&h.stopPropagation&&h.stopPropagation(),A&&A.focus&&A.focus(),m&&s.waitForShowTips)return ne(o,0),h&&h.preventDefault&&h.preventDefault(),!1;if(T=!0,!v)return h&&h.preventDefault&&h.preventDefault(),!1;h||(h={});let k=/^(https?|ftp):/.test(v);if(!s.batchOpening&&!i&&te(),(c.prefConfig.multiline==1||c.prefConfig.multiline==2)&&z&&mt.test(o.dataset.url)&&z.indexOf(`
`)!==-1&&!/^(c|show)/.test(o.dataset.url)&&(c.prefConfig.multiline==1||confirm(B("multiline")))){let J=z.split(`
`);if(J.length>10&&!confirm(B("multilineTooMuch")))return;let $=0,F=o.target;o.target="_blank";let ce=async()=>{v=await K(J[$++]),o.href=v,o.click(),$<J.length?setTimeout(()=>{ce()},c.prefConfig.multilineGap||1e3):o.target=F};return ce(),o.href="",h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),!1}if(v.indexOf("%input{")!==-1){s.showCustomInputWindow(v,J=>{v=J,o.href=J,o.click()}),h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation();return}let E=v.match(/^find(\.addto\((.*?)\))?:(.*)/);if(E){h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation();let J=E[2],$=E[3];if($)J&&c.prefConfig.inPageRule&&J.indexOf("@")!==0&&(J="@"+J),$.indexOf("%input{")!==-1?s.showCustomInputWindow($,F=>{J?s.addToHighlightGroup(F,J):(s.searchJumperInPageInput.value=F,s.submitInPageWords(),s.waitForHide(0))}):J?s.addToHighlightGroup($,J):(s.searchJumperInPageInput.value=$,s.submitInPageWords(),s.waitForHide(0));else return!1;return!1}else if(/^javascript:/.test(t.url)){h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),ye.targetElement=A,ye.keywords=Oe(),v=v.replace(/^javascript:/,"");try{v=decodeURIComponent(v)}catch{}let J=/^[_a-zA-Z0-9]+$/.test(v)&&ye[v]||new ni(v);return J&&J(),!1}else if(/^c(opy)?:/.test(t.url)){if(h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),v)v.indexOf("%input{")!==-1?s.showCustomInputWindow(v,J=>{ie(!0,J.replace(/^c(opy)?:/,""))}):ie(h.isTrusted,v.replace(/^c(opy)?:/,""));else return!1;return!1}else if(/^paste:/.test(t.url)){let J=!1;if(A&&/INPUT|TEXTAREA/i.test(A.nodeName)&&A.getAttribute("aria-readonly")!="true")J=!0;else{let $=A;for(;$&&(J=$.contentEditable=="true",!(J||$.nodeName.toUpperCase()=="BODY"));)$=$.parentNode}if(J){if(!v)return!1;v=v.replace(/^paste:/,""),v.indexOf("%input{")!==-1?s.showCustomInputWindow(v,$=>{Ut(A,$)}):v?Ut(A,v):typeof navigator.clipboard.readText<"u"&&navigator.clipboard.readText().then($=>{Ut(A,$)})}}else if(/^\[/.test(t.url)){h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation();let J=JSON.parse(t.url);return s.batchOpen(J,{button:2,altKey:w||h.altKey,ctrlKey:P||h.ctrlKey,shiftKey:q||h.shiftKey,metaKey:j||h.metaKey},r===1),!1}else if(/[:%]P{/.test(t.url)){if(h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),v===!1)return!1;let J=$=>{let F=$.match(/[:%]P{(.*)}/),ce="";if(F)if($=$.replace(F[0],""),F=F[1],F.charAt(0)==='"'&&F.charAt(F.length-1)==='"')ce=F.substring(1,F.length-1);else{F=new URLSearchParams(F);let oe={};F.forEach((fe,re)=>{oe[re]=fe}),ce=JSON.stringify(oe)}Be({method:"POST",url:$,data:ce,onload:oe=>{pe(oe)},onerror:oe=>{Ce(B("postError")+(oe.statusText||oe.error))},ontimeout:oe=>{Ce(B("postError")+(oe.statusText||oe.error))}})};return v.indexOf("%input{")!==-1?s.showCustomInputWindow(v,$=>{J($)}):J(v),!1}else if(t.charset&&t.charset!="utf-8"||/[:%]p{/.test(t.url)){if(v===!1)return!1;let J=t.url.match(/#(j(umpFrom|f)?|from){(.*?)}/),$=F=>(J?(U.setItem("postUrl",[F,t.charset]),J=J[3],J.indexOf("http")!==0&&(J=F.replace(/(:\/\/.*?\/)[\s\S]*/,"$1"+J)),F=J):(U.setItem("postUrl",[F,t.charset]),F=F.replace(/(:\/\/.*?)\/[\s\S]*/,"$1").replace(/[:%]p{[\s\S]*/,"")),F);if(v.indexOf("%input{")!==-1){s.showCustomInputWindow(v,F=>{F=$(F),F&&(o.href=F,o.target==="_blank"?ge(o.href,{active:!0,insert:!0}):location.href=o.href)}),h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation();return}else{if(v=$(v),!v)return;o.href=v}}if(!(q&&!P&&!j&&!w&&h.isTrusted)){if(/^(chrome|edge|about|extension|moz-extension)/.test(v))return h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),P?ge(v,{active:!1,insert:!0}):ge(v,{active:!0,insert:!0,close:o.getAttribute("target")!=="_blank"}),!1;if((w||P||j||q)&&k){if((P||j)&&q)ge(v,{incognito:!0});else if(P||j)ge(v,{active:!1,insert:!0});else if(w){if(t.match){let re=t.match.replace(/\\/g,""),it=re.match(/\((www)\|([^\)\|]+)/);for(;it;)v=v.replace(it[1],it[2]),re=re.replace(it[0],""),it=re.match(/\(([^\)\|]+)\|([^\)\|]+)/)}let J=window.screen.availWidth||window.innerWidth||document.documentElement.clientWidth,$=window.screen.availHeight||window.innerHeight||document.documentElement.clientHeight,F=c.prefConfig.popupWidth,ce=c.prefConfig.popupHeight,oe=c.prefConfig.popupLeft,fe=c.prefConfig.popupTop;ce?(ce=parseFloat(ce),ce=$/100*ce):ce=Math.max($/3*2,$-250),F?(F=parseFloat(F),F=J/100*F):F=Math.min(J,650),oe?(oe=parseFloat(oe),oe=J/100*oe-F/2):oe=J-F-30,fe?(fe=parseFloat(fe),fe=$/100*fe-ce/2):fe=($-ce)/2,s.closePopupWindow(),s.popupWindow=window.open(v+"#searchJumperMin"+(/#p{/.test(t.url)?"Post":""),"_blank",`width=${F}, height=${ce}, location=0, resizable=1, status=0, toolbar=0, menubar=0, scrollbars=0, left=${oe}, top=${fe}`)}else q&&ge(v,{active:!0,insert:!0});return h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),!1}else if(k&&o.getAttribute("target")==="_blank"&&!(w||P||j||q)&&h.button===0)return ge(v,{active:!0,insert:!0}),h.preventDefault&&h.preventDefault(),h.stopPropagation&&h.stopPropagation(),!1}};o.addEventListener("mousedown",ue,!0),o.addEventListener("mouseup",h=>{h.stopPropagation&&h.stopPropagation()},!0),o.addEventListener("click",C,!0),o.addEventListener("auxclick",h=>{if(T&&h.preventDefault)return h.preventDefault(),!1},!0),o.addEventListener("contextmenu",h=>{if(T&&h.preventDefault)return h.preventDefault(),!1},!0);let W=o.dataset.name;y&&(W+=` (${t.ctrl?"Ctrl + ":""}${t.shift?"Shift + ":""}${t.alt?"Alt + ":""}${t.meta?"Meta + ":""}${y.replace("Key","")})`);let D=!1,V=!1,Z=async(h,k,E)=>{if(s.tipsPos(h,'<span class="loader"></span><font>Loading...</font>'),V=!1,k)try{k=k.replace(/^showTips:/,""),D=!0;let J=await s.anylizeShowTips(k,o.dataset.name,h);if(D=!1,s.tips.style.opacity==0||s.tips.innerHTML.indexOf('<span class="loader">')!==0){V=!0;return}Array&&Array.isArray&&Array.isArray(J)&&(g=J[1],J=J[0]),J&&(J!="null"&&J!="No result"&&(J=`<div>${J}</div>`,V=!0),s.tipsPos(h,J),te(),setTimeout(()=>{s.tips.style.pointerEvents="all"},100))}catch(J){pe(J)}},ne=async(h,k=1e3)=>{if(!(!h||h.nodeType!==1)&&(s.preList&&(s.preList.style.visibility="hidden",s.listArrow.style.cssText=""),g=null,clearTimeout(s.requestShowTipsTimer),s.waitForShowTips=!1,s.tipsPos(h,W),m)){s.stopInput=!0;let E=await K();s.stopInput=!1,E&&s.lastUrl===E?D?s.tipsPos(h,"<span class='loader'></span><font>Loading...</font>"):Z(h,E):(s.waitForShowTips=!0,s.requestShowTipsTimer=setTimeout(async()=>{if(E=E||await K(),!!E){if(E.indexOf("%input{")!==-1){s.showCustomInputWindow(E,J=>{E=J,Z(h,E)});return}s.lastUrl=E,Z(h,E),s.waitForShowTips=!1}},k))}},b=!1;o.addEventListener("touchend",h=>{h.stopPropagation&&h.stopPropagation(),m&&(b=!0,s.waitForShowTips=!0)},!1);let S=h=>{if(s.funcKeyCall||c.prefConfig.noAni)return;let k=s.con.classList.contains("search-jumper-left")||s.con.classList.contains("search-jumper-right"),E=[],J=o.getBoundingClientRect(),$=k?Math.abs(h.clientY-J.top)/J.height:Math.abs(h.clientX-J.left)/J.width,F=.1,ce=.1;o.style.setProperty("--scale",1+F+ce),E.push(o);let oe=o.previousElementSibling;if(oe&&/^A$/i.test(oe.nodeName)){oe.style.setProperty("--scale",1+ce+F*(1-$)),E.push(oe);let re=oe.previousElementSibling;re&&/^A$/i.test(re.nodeName)&&(re.style.setProperty("--scale",1+ce*(1-$)),E.push(re))}let fe=o.nextElementSibling;if(fe&&/^A$/i.test(fe.nodeName)){fe.style.setProperty("--scale",1+ce+F*$),E.push(fe);let re=fe.nextElementSibling;re&&/^A$/i.test(re.nodeName)&&(re.style.setProperty("--scale",1+ce*$),E.push(re))}s.dockerScaleBtns.forEach(re=>{E.indexOf(re)===-1&&re.style.setProperty("--scale",1)}),s.dockerScaleBtns=E};return o.addEventListener("mouseenter",h=>{if(h.stopPropagation&&h.stopPropagation(),!(V&&s.lastTips===o&&s.tips.style.opacity==1)){if(s.lastTips=o,m){if(b){b=!1;return}if(R&&!(s.searchJumperInputKeyWords.value||s.tileInput.value||Oe())){s.waitForShowTips=!0,s.tipsPos(o,W);return}}ne(o)}},!0),o.addEventListener("mousemove",h=>{S(h),s.clingPos(o,s.tips)},!1),o.addEventListener("showTips",h=>{s.appendBar(),s.closeOpenType(),s.con.style.display="",ne(h.detail||A,0)},!1),o.addEventListener("mouseleave",h=>{V||(s.tips.style.opacity=0,clearTimeout(s.requestShowTipsTimer))},!1),o.addEventListener("drop",h=>{s.searchBySiteName(p,h)},!1),o.addEventListener("dragover",h=>{h.preventDefault()},!1),o}closePopupWindow(){c.prefConfig.closePopupWhenClick&&this.popupWindow&&(this.popupWindow.close(),this.popupWindow=null)}closeOpenType(){let e=this.bar.querySelector(".search-jumper-type.search-jumper-open>span");if(e)if(this.funcKeyCall=!1,e.onmouseup)e.onmouseup();else{let t=new PointerEvent("mouseup");e.dispatchEvent(t)}}addToHighlightGroup(e,t){let r=c.prefConfig.inPageRule[t];if(r){let i=r.match(/^\/(.*)\/([il]*)$/);i?r=`/${i[1]}|${e}/${i[2]||""}`:r=`/${r}|${e}/`}else r=`/${e}/`;c.prefConfig.inPageRule[t]=r,U.setItem("searchData",c),this.refreshPageWords(this.lockWords)}streamUpdate(e){this.streamUpdateCallBack&&this.streamUpdateCallBack(e)}async anylizeShowTips(e,t,r){let i,a=this;try{const n=/([^\\]|^)([\+\-*/])([\d\.]+)$/,s=/\|cache\=(\d+)$/,o=/%p(\{+)/,p=/#headers({.*?})/,d=/#stream({(.*?)})?/,m=/.then{(.*?)}/;if(e=e.replace(/^showTips:/,"").replace(/{name}/g,t).trim(),/^https?:/.test(e)){let g=e.split(`
`);g.length==1&&(g=e.split(" ")),g=g[0].replace(/【SearchJumperBreak】/g,`
`),e=e.replace(/【SearchJumperBreak】/g,`
`).replace(g,"").trim().replace(/\\{/g,"showTipsLeftBrace").replace(/\\}/g,"showTipsRightBrace").replace(/{url}/g,"\u3010SEARCHJUMPERURL\u3011");let u=g.match(s);u?(u=parseInt(u[1]),g=g.replace(s,"")):u=7200;let f=Date.now()/1e3,y=tt.filter(H=>f<H.time?(!i&&H.url==g&&(i=H.data),!0):!1);y.length!=tt.length&&(tt=y,U.setItem("tipsStorage",tt));let I=[],L=(H,x)=>{let N=e,R=!0;for(;x;){let z=x[1].replace(/\\\|/g,"\u3010searchJumperJsonSplit\u3011").split("|"),K=z[0].replace(/【searchJumperJsonSplit】/g,"|").replace(/\[(\d+)\]/g,".$1").replace(/\[all\]/g,".all").split("."),v=H,T=null;if(K.shift(),K.forEach(w=>{if(T){let P=[];for(let j=0;j<T.length;j++){let q=T[j];q&&(Array.isArray(q)?q=q.at?q.at(w):q[w]:q=q[w]),P.push(q)}T=P}else if(v&&(Array.isArray(v)?w==="all"?T=v:v=v.at?v.at(w):v[w]:v=v[w]),!v)return null}),T&&(v=T.join("")),z.length!=1){let w=z[1],P=w.match(n);if(P){let j=[];for(;P;)w=w.replace(n,"$1"),j.unshift([P[2],P[3]]),P=w.match(n);j.forEach(q=>{let ue=parseFloat(q[1]);switch(q[0]){case"+":v+=ue;break;case"-":v-=ue;break;case"*":v*=ue;break;case"/":v/=ue;break}}),v=v.toFixed(2)}else{let j=w.match(/^\/(.*)\/(\w?)$/),q=j?new RegExp(j[1],j[2]):new RegExp(w),ue=v.match(q);ue&&(v=ue[1])}}v?R=!1:v="",I.push(v),N=N.replace(x[0],v),x=N.match(/{(.*?)}/)}return R&&console.log("Error:",H),N=N.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),N},O=e.match(/{(.*?)}/);if(i)O&&O[1].indexOf("json")===0&&(e=e.replace(/【SEARCHJUMPERURL】/g,g),i=L(i,O),i=[i,`
`+I.join(",")]);else{let H,x=g.match(o),N={},R=g;if(x){let P=x[1].length;if(x=g.match(new RegExp(`%p\\{+([\\s\\S]*?)\\}{${P}}`)),x){let j=x[1].replace(/\n/g,"\\n");if(j.indexOf("%")===0)try{j=decodeURIComponent(j)}catch{}N.body=j,N.method="POST",R=R.replace(x[0],"")}}let z=g.match(p);if(z){let P=z[1];if(P.indexOf("%")===0||P.indexOf("%")===1)try{P=decodeURIComponent(P)}catch{}N.headers=JSON.parse(P),R=R.replace(z[0],"")}let K=!1,v,T=O&&O[1].indexOf("json")===0,w=g.match(d);if(w)N.responseType="stream",N.streamMode=w[2]||"concat",R=R.replace(w[0],""),i=await new Promise(P=>{N.onstream=j=>{let q;if(T){if(q=j.json(),!q)return;q=L(q,O)}else q=j.text;a.tipsPos(r,q),a.tips.style.pointerEvents="all",P&&P(q)},v=qe(R,N).then(j=>(e=e.replace(/【SEARCHJUMPERURL】/g,j.finalUrl),T?j.json():j.text)),v.then(j=>{let q=T?j&&L(j,O):j;q&&(a.tipsPos(r,q),P&&P(q))})}),i||(i="No result",K=!0);else if(T){let P=[];v=qe(R,N).then(j=>(e=e.replace(/【SEARCHJUMPERURL】/g,j.finalUrl),j.json())),i=await v.then(j=>j?(H=j,L(j,O)):null),i||(i="No result",K=!0),i=[i,`
`+P.join(",")]}else{let P=!1,j=R.match(m),q=[];for(;j;){let te=j[1];q.push(te),R=R.replace(j[0],""),j=R.match(m)}for(v=qe(R,N).then(te=>(e.indexOf("\u3010SEARCHJUMPERURL\u3011")!=-1&&(e=e.replace(/【SEARCHJUMPERURL】/g,te.finalUrl),P=!0),te.text()));q.length;){let te=q.shift(),ie=await v.then(C=>{let W=document.implementation.createHTMLDocument("");W.documentElement.innerHTML=ee(C);let D=xt(te,W);if(!D)return null;let V=W.querySelector("base");return Xi(D.getAttribute("href"),V?V.href:R)});if(ie)v=qe(ie).then(C=>C.text());else return"No result"}let ue;i=await v.then(te=>{if(!e)return te;let ie=document.implementation.createHTMLDocument("");ie.documentElement.innerHTML=ee(te),ue=ie.title;let C=e;for(;O;){let W="";if(O[1]=="title")W=ie.title;else{let D=O[1].split("|"),V=oi(D[0],ie);if(V&&V.length)if(P=!0,D.length==1)W=V[0].innerText;else{let Z=D[1],ne=Z.match(/\(.*?\)/g);ne?[].forEach.call(V,b=>{let S=D[1];ne.forEach(h=>{h==="()"?S=S.replace(h,b.innerText):(Z=h.match(/\((.*)\)/)[1],S=S.replace(h,b.getAttribute(Z)||b[Z]))}),W+=S}):W=V[0].getAttribute(Z)||V[0][Z]}}C=C.replace(O[0],W),O=C.match(/{(.*?)}/)}return P?(C=C.replace(/showTipsLeftBrace/g,"{").replace(/showTipsRightBrace/g,"}"),C):null}),i?this.insertHistoryUrl(g,ue):(i="No result",K=!0),i=[i,g],H=i}K||(i=this.calcResult(i),tt.push({url:g,data:H,time:Date.now()/1e3+u}),tt.length>50&&tt.shift(),U.setItem("tipsStorage",tt))}}else if(e=e.replace(/【SearchJumperBreak】/g,`
`),i=/\breturn\b/.test(e)?await new ni("fetch","storage","name",'"use strict";'+e)(qe,U,t):e,i=this.calcResult(i),A&&A.href){let g=A.title||A.alt||A.innerText;this.insertHistoryUrl(A.href,g)}}catch(n){pe(n)}return i}calcResult(e){let t=typeof e=="string",r=t?e:e[0];const i=/{([\d\.]+)(([\+\-*/][\d\.]+)+)}/,a=/([\+\-*/])([\d\.]+)/;let n=r.match(i);if(n){let s=[],o=n[0],p=parseFloat(n[1]),d=n[2];for(n=d.match(a);n;)d=d.replace(n[0],""),s.push([n[1],n[2]]),n=d.match(a);s.forEach(m=>{let g=parseFloat(m[1]);switch(m[0]){case"+":p+=g;break;case"-":p-=g;break;case"*":p*=g;break;case"/":p/=g;break}}),p=p.toFixed(2),r=r.replace(o,p)}return t?e=r:e[0]=r,e}insertHistoryUrl(e,t){if(e.indexOf(location.host)===-1)return;let r=location.href,i=document.title;ye.history.pushState("",t,e),document.title=t,ye.history.replaceState("",i,r),document.title=i}checkScroll(e,t){if(this.funcKeyCall||this.bar.style.display=="none")return;let r=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight;if(this.bar.scrollWidth>r||this.bar.scrollHeight>i?this.con.classList.contains("search-jumper-scroll")||(this.bar.style.cssText="",this.con.classList.add("search-jumper-scroll"),this.con.style.display=""):this.con.classList.contains("search-jumper-scroll")&&(this.bar.style.cssText="",this.con.classList.remove("search-jumper-scroll")),e)return;let a=this.bar.querySelector(".search-jumper-type.search-jumper-open");a&&(a.style.width==="0px"&&(a.style.width="auto"),a.style.height==="0px"&&(a.style.height="auto"),a!=this.bar.firstElementChild&&setTimeout(()=>{a.scrollIntoView(t?{}:{behavior:"smooth"})},0))}reopenType(e){let t=new PointerEvent("mouseup");e.parentNode.classList.contains("search-jumper-open")&&(e.onmouseup?e.onmouseup():e.dispatchEvent(t)),e.onmouseup?e.onmouseup():e.dispatchEvent(t)}showInPage(e,t){if(this.contains(A)||this.inInput&&Ze||!e&&this.funcKeyCall)return;(!Ze||!Ze.parentNode)&&(Ze=Me(Lt),Ke||this.addToShadow(Ze));let r=$e();if(e&&r&&r.length<(c.prefConfig.limitPopupLen||1)||this.con&&this.con.classList.contains("search-jumper-showall"))return;if(c.prefConfig.hidePopup&&(e=!1),!A)A=_(document);else if(!r&&A!=_(document)&&(A.className!="searchJumper"||!/^MARK$/i.test(A.nodeName))){let m=A,g;for(;m&&m.nodeName&&!/^(img|audio|video|a)$/i.test(m.nodeName);){if(m.parentNode){if(/^(img|audio|video|a)$/i.test(m.parentNode.nodeName)){m=m.parentNode;break}if(g=m.parentNode.querySelectorAll("audio,video"),g&&g.length!==1&&(g=m.parentNode.querySelectorAll("img")),g&&g.length!==1&&(g=m.parentNode.querySelectorAll("a")),g&&g.length===1){g[0].scrollHeight&&m.scrollHeight/g[0].scrollHeight<2&&(m=g[0]);break}}m=m.parentNode}m&&(A=m)}this.appendBar();let i=this;this.hideTimeout&&clearTimeout(this.hideTimeout);var a=c.prefConfig.autoDelay||1e3,n=()=>{i.bar.classList.remove("search-jumper-isInPage"),i.bar.classList.remove("search-jumper-isTargetImg"),i.bar.classList.remove("search-jumper-isTargetAudio"),i.bar.classList.remove("search-jumper-isTargetVideo"),i.bar.classList.remove("search-jumper-isTargetLink"),i.bar.classList.remove("search-jumper-isTargetPage"),i.bar.classList.remove("initShow"),i.hideTimeout=null};c.prefConfig.autoHide&&(this.hideTimeout=setTimeout(n,a)),this.bar.classList.remove("search-jumper-isInPage"),this.bar.classList.remove("search-jumper-isTargetImg"),this.bar.classList.remove("search-jumper-isTargetAudio"),this.bar.classList.remove("search-jumper-isTargetVideo"),this.bar.classList.remove("search-jumper-isTargetLink"),this.bar.classList.remove("search-jumper-isTargetPage"),this.bar.classList.remove("initShow"),this.tips.style.opacity=0,this.tips.style.display="none",this.tips.style.transition="none",this.tips.innerHTML=ee(""),setTimeout(()=>{this.bar.classList.add("initShow")},10);let s="",o="";if(r)if(this.bar.classList.add("search-jumper-isInPage"),this.bar.style.display=="none"||e)s="needInPage";else{let m=this.bar.querySelector(".search-jumper-type.search-jumper-open");(!m||m.classList.contains("notmatch")||m.classList.contains("search-jumper-targetPage")||m.classList.contains("search-jumper-targetImg")||m.classList.contains("search-jumper-targetAudio")||m.classList.contains("search-jumper-targetVideo")||m.classList.contains("search-jumper-targetLink"))&&(s="needInPage")}else{switch(A.children.length==1&&A.children[0].nodeName.toUpperCase()==="A"&&(A=A.children[0]),A.nodeName.toUpperCase()){case"IMG":this.bar.classList.add("search-jumper-isTargetImg"),s="targetImg";break;case"AUDIO":this.bar.classList.add("search-jumper-isTargetAudio"),s="targetAudio";break;case"VIDEO":this.bar.classList.add("search-jumper-isTargetVideo"),s="targetVideo";break;case"A":this.bar.classList.add("search-jumper-isTargetLink"),s="targetLink";break;default:break}let m=A.parentNode;m&&m.nodeName.toUpperCase()==="A"&&(this.bar.classList.add("search-jumper-isTargetLink"),s?o="targetLink":s="targetLink"),s||(this.bar.classList.add("search-jumper-isTargetPage"),s="targetPage"),s||(s="targetAll")}this.bar.style.display=="none"&&(this.bar.style.display="");let p,d;if(s&&(p=this.bar.querySelector(`.search-jumper-${s}:not(.notmatch)>span`),d=this.bar.querySelectorAll(`.search-jumper-${s}:not(.notmatch)>a>img`)),i.setFuncKeyCall(!1),p&&(!c.prefConfig.disableAutoOpen&&!c.prefConfig.disableTypeOpen||e)){let m=this.bar.querySelectorAll(`.search-jumper-${s}:not(.notmatch)>span:first-child`);[].forEach.call(m,g=>{g!==p&&i.reopenType(g)}),i.reopenType(p),i.insertHistory(p.parentNode),o&&(m=this.bar.querySelectorAll(`.search-jumper-${o}:not(.notmatch)>span:first-child`),[].forEach.call(m,g=>{g!==p&&i.reopenType(g)}),i.reopenType(p))}if(!e&&(c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen)&&this.closeOpenType(),i.setFuncKeyCall(e),e){d&&[].forEach.call(d,L=>{L.parentNode.style.display!="none"&&L.dataset.src&&(L.src=L.dataset.src,delete L.dataset.src)}),i.con.classList.remove("search-jumper-scroll"),i.bar.style.cssText="",i.con.style.cssText="";let m=window.innerWidth||document.documentElement.clientWidth,g=document.documentElement.scrollLeft||document.body.scrollLeft,u=window.innerHeight||document.documentElement.clientHeight,f=c.prefConfig.tileOffset||0,y=hr(t)-i.bar.clientWidth/2-(getComputedStyle(document.documentElement).position!=="static"?document.documentElement.offsetLeft:0);y<0?y=5:y+i.bar.clientWidth>m+g&&(y=m+g-i.bar.clientWidth-20);let I=dr(t);ut(t)>u/5?I-=i.bar.clientHeight+20+f:I+=20+f,dt(t)<m/2?(i.bar.style.left=y+g+"px",i.bar.style.transformOrigin="0 0"):(i.bar.style.right=m-y-i.bar.clientWidth-15+"px",i.bar.style.transformOrigin="100% 0"),i.bar.style.top=I+"px",i.removeBar(),i.bar.style.opacity=0,setTimeout(()=>{i.appendBar(),setTimeout(()=>{i.bar.style.opacity=1,setTimeout(()=>{let L=document.querySelector("#saladict-saladbowl-root>.saladict-external");if(L){let O=L.shadowRoot.querySelector(".saladbowl");O.style.transform=O.style.transform.replace(/\d+px\)/,`${t.clientY-15}px)`)}},100)},1)},1)}else i.bar.style.display="",i.initPos()}setFuncKeyCall(e){this.funcKeyCall=e,this.con.classList.contains("search-jumper-showall")||(e?(this.tileInput.value=Oe(),this.con.classList.add("funcKeyCall"),this.bar.insertBefore(this.tileInput,this.bar.firstChild)):(this.tileInput.value="",this.con.classList.remove("funcKeyCall"),this.tileInput.parentNode&&this.tileInput.parentNode.removeChild(this.tileInput)))}initPos(e,t,r,i){this.preList&&(this.preList.style.visibility="hidden",this.preList.style.opacity=0,this.listArrow.style.cssText=""),typeof e>"u"&&(e=c.prefConfig.position.x),typeof t>"u"&&(t=c.prefConfig.position.y),typeof r>"u"&&(r=c.prefConfig.offset.x),typeof i>"u"&&(i=c.prefConfig.offset.y);let a=this,n=s=>{if(a.bar.style.cssText="",a.con.style.cssText="",a.con.className="search-jumper-searchBarCon "+s,c.prefConfig.resizePage)switch(typeof a.initBodyStyle>"u"?a.initBodyStyle=_(document).style.cssText:_(document).style.cssText=a.initBodyStyle,a.con.classList.add("resizePage"),_(document).style.position="absolute",s){case"search-jumper-left":_(document).style.width=`calc(100vw - ${a.scale*42}px)`,_(document).style.right="0px";break;case"search-jumper-right":_(document).style.width=`calc(100vw - ${a.scale*42}px)`,_(document).style.left="0px";break;case"search-jumper-bottom":_(document).style.width="100%",_(document).style.height=`calc(100vh - ${a.scale*42}px)`,_(document).style.top="0px",_(document).style.overflow="auto";break;default:_(document).style.width="100%",_(document).style.height=`calc(100vh - ${a.scale*42}px)`,_(document).style.bottom="0px",_(document).style.overflow="auto";break}else c.prefConfig.autoHideAll&&a.con.classList.add("hideAll");let o=a.scale*40;setTimeout(()=>{let p=a.con.classList.contains("search-jumper-left")||a.con.classList.contains("search-jumper-right");Se.forEach(d=>{if(!d.classList.contains("search-jumper-open"))p?(d.style.width="",d.style.height=o+"px"):(d.style.width=o+"px",d.style.height="");else{let m=Math.max(d.scrollWidth,d.scrollHeight);m&&(m+="px",p?(d.style.width="",d.style.height=m):(d.style.width=m,d.style.height=""))}})},1)};r<0&&(r=0),i<0&&(i=0),e=="center"&&t=="top"?(n(""),a.bar.style.position="relative"):e=="left"&&t=="top"?r>i?(n(""),a.bar.style.position="fixed",a.bar.style.left=r+"px"):(n("search-jumper-left"),a.bar.style.position="fixed",a.bar.style.top=i+"px"):e=="right"&&t=="top"?r>i?(n(""),a.bar.style.position="fixed",a.bar.style.right=r+"px"):(n("search-jumper-right"),a.bar.style.position="fixed",a.bar.style.top=i+"px"):e=="center"&&t=="bottom"?(n("search-jumper-bottom"),a.bar.style.position="relative"):e=="left"&&t=="bottom"?r>i?(n("search-jumper-bottom"),a.bar.style.position="fixed",a.bar.style.left=r+"px",a.bar.style.bottom="0px",a.bar.style.top="unset"):(n("search-jumper-left"),a.bar.style.position="fixed",a.bar.style.bottom=i+"px"):e=="right"&&t=="bottom"?r>i?(n("search-jumper-bottom"),a.bar.style.position="fixed",a.bar.style.right=r+"px",a.bar.style.bottom="0px",a.bar.style.top="unset"):(n("search-jumper-right"),a.bar.style.position="fixed",a.bar.style.bottom=i+"px"):e=="left"&&t=="center"?(n("search-jumper-left"),a.bar.style.position="relative",a.bar.style.marginTop=i+"px",a.con.style.display="flex",a.con.style.justifyContent="center"):e=="right"&&t=="center"&&(n("search-jumper-right"),a.bar.style.position="absolute",a.bar.style.marginTop=i+"px",a.con.style.display="flex",a.con.style.justifyContent="center",a.con.style.alignItems="flex-end"),c.prefConfig.position.x=e,c.prefConfig.position.y=t,c.prefConfig.offset.x=r,c.prefConfig.offset.y=i,c.prefConfig.disableAutoOpen||c.prefConfig.disableTypeOpen?a.checkScroll(!1,!0):setTimeout(()=>{let s=a.bar.querySelector(".search-jumper-type.search-jumper-open");s&&(s.style.transition="none",s.style.width="auto",s.style.height="auto",setTimeout(()=>{s.style.width=s.scrollWidth+"px",s.style.height=s.scrollHeight+"px",setTimeout(()=>{s.style.transition=""},1),a.checkScroll(!1,!0)},0))},251)}}class xr{constructor(){this.clickedIndex=0,this.signList=[],this.clickedEles={},this.exact=!0,this.accu=0,this.wheelScrolling=!1}getSelector(e,t=!0){this.exact=t,this.close(),this.toggle(),this.callback=e}init(){if(this.inited)return;this.inited=!0;let e=this;Me(`
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
                `);let r=a=>{if(!a)return;if(e.callback){if(a){let s=e.geneSelector(a,e.exact);e.callback(s),e.close()}return}let n=e.createSignDiv();e.clickedEles[e.clickedIndex]=a,e.appendSign(n,a,e.clickedIndex),e.clickedIndex++,M.con.classList.add("selectedEle")},i;this.initSelectRect(),this.mainSignDiv=this.createSignDiv(),this.setImportant(this.mainSignDiv,"pointer-events","none"),this.setImportant(this.mainSignDiv,"background","rgba(120, 170, 210, 0.3)"),this.moveHandler=a=>{if(a.target!==document)if(e.inPicker&&a.preventDefault(),e.rectSelecting)e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv),e.selectRect.parentNode||_(document).appendChild(e.selectRect),e.createSelectRect({x:a.clientX,y:a.clientY});else{if(e.creatingRect)return;{let n=e.getTarget(a.target);e.mainSignDiv.parentNode!==n.parentNode&&n.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,n),(a.ctrlKey||a.metaKey)&&(clearTimeout(i),i=setTimeout(()=>{let s=e.cleanTarget(a.target);r(s)},5))}}},this.leaveHandler=a=>{e.mainSignDiv.parentNode&&e.mainSignDiv.parentNode.removeChild(e.mainSignDiv)},this.clickHandler=a=>{if(e.inPicker&&(a.stopPropagation(),a.preventDefault()),e.creatingRect)return;if(e.rectSelecting){e.selectRect.parentNode&&e.selectRect.parentNode.removeChild(e.selectRect),e.rectSelecting=!1,M.bar.classList.remove("rectSelecting");return}let n=e.getTarget(a.target);r(n)},this.mouseDownHandler=a=>{e.rectSelecting=!0,M.bar.classList.add("rectSelecting"),e.rectInitPos={x:a.clientX,y:a.clientY},a.stopPropagation(),a.preventDefault()},this.mouseUpHandler=a=>{e.rectSelecting=!1,M.bar.classList.remove("rectSelecting"),!e.creatingRect&&e.selectRect.parentNode&&(e.selectRect.parentNode.removeChild(e.selectRect),e.finishSelectRect(),a&&a.stopPropagation&&a.stopPropagation(),a&&a.preventDefault&&a.preventDefault())},this.wheelHandler=a=>{if(a.preventDefault(),a.stopPropagation(),e.wheelScrolling)return;e.wheelScrolling=!0,setTimeout(()=>{e.wheelScrolling=!1},100);let n;if(a.type!=="wheel"){let o=0;typeof a.axis=="number"?a.axis==2&&(o=a.detail):(typeof a.wheelDeltaY>"u"||a.wheelDeltaY!=0)&&(o=-a.wheelDelta/40),n=o}else n=a.deltaY;n>0?e.accu--:e.accu++,e.accu<0?e.accu=0:e.accu>8&&(e.accu=8);let s=e.getTarget(a.target);e.mainSignDiv.parentNode!==s.parentNode&&s.parentNode.appendChild(e.mainSignDiv),e.adjustSignDiv(e.mainSignDiv,s)}}initSelectRect(){this.waitToRemoveSigns=[],this.waitToAddSigns=[];let e=document.createElement("div");e.innerHTML=ee(`
                  <div class="dot top-left"></div>
                  <div class="dot top-right"></div>
                  <div class="dot bottom-left"></div>
                  <div class="dot bottom-right"></div>
                  <div class="dot top"></div>
                  <div class="dot right"></div>
                  <div class="dot left"></div>
                  <div class="dot bottom"></div>
                `),e.className="select-rect",this.selectRect=e}createSelectRect(e){this.rectToPos=e,!this.creatingRect&&(this.creatingRect=!0,setTimeout(()=>{this.creatingRect=!1,this.selectRect.style.left=Math.min(this.rectToPos.x,this.rectInitPos.x)+"px",this.selectRect.style.top=Math.min(this.rectToPos.y,this.rectInitPos.y)+"px",this.selectRect.style.width=Math.abs(this.rectToPos.x-this.rectInitPos.x)+"px",this.selectRect.style.height=Math.abs(this.rectToPos.y-this.rectInitPos.y)+"px",this.checkRectAndSign(),this.rectSelecting||this.mouseUpHandler()},100))}finishSelectRect(){let e=this;this.waitToRemoveSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns.forEach(t=>{delete t.dataset.recttemp}),this.waitToRemoveSigns=[],this.waitToAddSigns=[],this.signList.length?M.con.classList.add("selectedEle"):M.con.classList.remove("selectedEle")}checkRectAndSign(){if(!this.domInfo)return;let e=this;this.waitToRemoveSigns.forEach(t=>{t.style.opacity=""}),this.waitToRemoveSigns=[],this.signList.forEach(t=>{let r=t[0];if(r.dataset.recttemp)return;let i=r.getBoundingClientRect(),a=e.selectRect.getBoundingClientRect();e.compareRect(i,a)?(r.style.opacity="0",e.waitToRemoveSigns.push(r)):r.style.opacity=""}),this.waitToAddSigns.forEach(t=>{e.removeSign(t)}),this.waitToAddSigns=[],this.waitToRemoveSigns.length===0&&(this.curRectInfo={},this.rectInitPos.x<this.rectToPos.x?(this.curRectInfo.left=this.rectInitPos.x,this.curRectInfo.right=this.rectToPos.x):(this.curRectInfo.left=this.rectToPos.x,this.curRectInfo.right=this.rectInitPos.x),this.rectInitPos.y<this.rectToPos.y?(this.curRectInfo.top=this.rectInitPos.y,this.curRectInfo.bottom=this.rectToPos.y):(this.curRectInfo.top=this.rectToPos.y,this.curRectInfo.bottom=this.rectInitPos.y),this.compareDomWithRect(this.domInfo),this.signDomWithRect(this.domInfo))}compareDomWithRect(e){if(e.children&&e.children.length>0){let t=0;for(let r=0;r<e.children.length;r++){let i=e.children[r];this.compareDomWithRect(i)&&t++}if(t===e.children.length){let r=e.target.getBoundingClientRect();if(r.width&&r.height)return e.sign=!0,!0}}else if(this.compareRect(this.curRectInfo,e.target.getBoundingClientRect()))return e.sign=!0,!0;return e.sign=!1,!1}signDomWithRect(e){if(e.sign){let t=this.createSignDiv();t.dataset.recttemp=1,e.target.parentNode.appendChild(t),this.adjustSignDiv(t,e.target),this.signList.push([t,e.target]),this.waitToAddSigns.push(t)}else if(e.children&&e.children.length>0)for(let t=0;t<e.children.length;t++){let r=e.children[t];this.signDomWithRect(r)}}compareRect(e,t){return t.width&&t.height&&e.left<=t.right&&e.right>=t.left&&e.top<=t.bottom&&e.bottom>=t.top}cleanTarget(e){if(!e||e.className=="searchJumperSign"||(e=this.getTarget(e),!e))return null;for(let t in this.clickedEles){let r=this.clickedEles[t];try{if(r==e||r.contains(e)||e.contains(r))return null}catch{return null}}return e}appendSign(e,t,r){t.dataset&&(t.dataset.signNum=parseInt(t.dataset.signNum||0)+1),e.dataset.target=r,t.parentNode.appendChild(e),this.adjustSignDiv(e,t),this.signList.push([e,t])}removeSign(e){e.parentNode&&e.parentNode.removeChild(e);for(let a=0;a<this.signList.length;a++)if(this.signList[a][0]===e){this.signList.splice(a,1);break}let t=e.dataset.target,r=this.clickedEles[t];if(!r)return;let i=parseInt(r.dataset.signNum||0)-1;r.dataset.signNum=i,i<=0&&delete this.clickedEles[t]}getTarget(e){let t=this.accu;for(;e&&t;){let r=e.parentNode;if(!r)break;e=r,t--}for(;e.parentNode&&(e.offsetWidth===0||e.offsetHeight===0);)e=e.parentNode;return e}close(){this.mainSignDiv&&(this.rectSelecting&&(this.selectRect.parentNode&&this.selectRect.parentNode.removeChild(this.selectRect),this.finishSelectRect(),this.rectSelecting=!1),this.callback=null,this.domInfo=null,this.clearSigns(),this.clickedEles={},this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv),_(document).classList.remove("searchJumper-picker"),M.con.classList.remove("selectedEle"),M.con.removeEventListener("mouseenter",this.leaveHandler,!0),_(document).removeEventListener("mousemove",this.moveHandler,!0),_(document).removeEventListener("click",this.clickHandler,!0),_(document).removeEventListener("mousedown",this.mouseDownHandler,!0),_(document).removeEventListener("mouseup",this.mouseUpHandler,!0),_(document).removeEventListener(Nt(),this.wheelHandler,{passive:!1,capture:!0}),this.inPicker=!1)}setImportant(e,t,r){e.style.setProperty(t,r,"important")}createSignDiv(){let e=document.createElement("div");return this.setImportant(e,"position","absolute"),this.setImportant(e,"z-index","2147483647"),this.setImportant(e,"background","rgba(120, 170, 210, 0.6)"),this.setImportant(e,"transition","all 0.15s ease-out"),this.setImportant(e,"box-shadow","rgb(0 0 0) 0px 0px 3px 0px"),this.setImportant(e,"cursor","pointer"),e.className="searchJumperSign",e.addEventListener("mouseenter",t=>{this.mainSignDiv.parentNode&&this.mainSignDiv.parentNode.removeChild(this.mainSignDiv)},!0),e.addEventListener("mousedown",t=>{t.stopPropagation(),t.preventDefault(),this.removeSign(e)},!0),e}adjustSignDiv(e,t){this.setImportant(e,"width",t.offsetWidth+"px"),this.setImportant(e,"height",t.offsetHeight+"px");let r=t.offsetLeft,i=t.offsetTop;if(t.offsetParent&&e.offsetParent&&t.offsetParent!==e.offsetParent){let a=e.offsetParent.getBoundingClientRect(),n=t.offsetParent.getBoundingClientRect();r+=n.left-a.left,i+=n.top-a.top}this.setImportant(e,"left",r+"px"),this.setImportant(e,"top",i+"px")}geneSelector(e,t){let r=e.nodeName.toLowerCase();if(r!=="html"&&r!=="body")if(t&&e.id&&/^[a-z\-_][\w\-_]+$/i.test(e.id))r="#"+e.id;else{if(e.className){let a=e.classList.length;r+=[].map.call(e.classList,n=>/^[a-z][\w]+$/i.test(n)||a<3&&/^[a-z\-_][\w\-_]+$/i.test(n)?"."+n:"").join("")}let i=e.parentElement;if(i&&(r=this.geneSelector(i,!!t)+" > "+r,t&&i.children.length>1&&!/^HTML$/i.test(i.nodeName))){let a,n=0,s=0;for(a=0;a<i.children.length&&!(i.children[a].nodeName==e.nodeName&&(s++,i.children[a]==e&&(n=s),n>0&&s>1));a++);r+=s==1?"":`:nth-of-type(${n})`}}return r}copy(){let e=this,t="",r="";this.signList.forEach(n=>{r+=`
`+n[1].innerText,t+=n[1].outerHTML}),r=r.trim();const i=new Blob([t],{type:"text/html"}),a=new Blob([r],{type:"text/plain"});try{const n=new ClipboardItem({"text/html":i,"text/plain":a});navigator.clipboard.write([n]).then(()=>{Ce("Copied successfully!")},s=>{Re(r),console.log(s)})}catch{Re(r)}}openLinks(){if(!window.confirm(B("batchOpenConfirm")))return;let e=[];this.signList.forEach(t=>{let r=t[1];r.href?/^(http|ftp)/i.test(r.href)&&e.indexOf(r.href)===-1&&e.push(r.href):r.parentNode&&r.parentNode.href?/^(http|ftp)/i.test(r.parentNode.href)&&e.indexOf(r.parentNode.href)===-1&&e.push(r.parentNode.href):r.querySelectorAll&&[].forEach.call(r.querySelectorAll("a[href]"),i=>{/^(http|ftp)/i.test(i.href)&&e.indexOf(i.href)===-1&&e.push(i.href)})}),e.forEach(t=>{ge(t,{active:!1,insert:!0})})}getPickerStr(){if(!this.inPicker)return"";let e="";return this.signList.forEach(t=>{e+=`
`+t[1].innerText}),e.trim()}expand(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let r=e.clickedEles[t],i=e.geneSelector(r);r.dataset.signNum=0,[].forEach.call(document.querySelectorAll(i),a=>{let n=e.createSignDiv();_(document).appendChild(n),e.appendSign(n,a,t)})})}collapse(){let e=this;this.clearSigns(),Object.keys(this.clickedEles).forEach(t=>{let r=e.clickedEles[t];r.dataset.signNum=0;let i=e.createSignDiv();_(document).appendChild(i),e.appendSign(i,r,t)})}clearSigns(){this.signList.forEach(e=>{e=e[0],e.parentNode&&e.parentNode.removeChild(e)}),this.signList=[]}processNode(e,t){const r={};if(r.target=e,r.children=[],e.nodeType===Node.ELEMENT_NODE){const a=window.getComputedStyle(e);if(a.display==="none"&&a.visibility==="hidden"||e.innerHTML.trim()==="")return null}else if(e.nodeType!==Node.TEXT_NODE||e.textContent.trim()==="")return null;const i=e.childNodes;if(i.length>0){r.target=e,t.children.push(r);for(const a of i)(a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE)&&this.processNode(a,r)}else if(e.nodeType===Node.TEXT_NODE){const a=e.textContent.split(`
`),n=document.createRange();n.selectNodeContents(e);let s=0,o=e.parentNode,p=o.getBoundingClientRect();for(const d of a){if(d.trim()===""){s+=d.length+1;continue}n.setStart(e,s),s+=d.length,n.setEnd(e,s),s++;const m=n.getBoundingClientRect();let g=m.left-p.left,u=m.top-p.top,f=m.width,y=m.height,I={target:{innerText:d,outerHTML:d,parentNode:o,offsetLeft:g+o.offsetLeft,offsetTop:u+o.offsetTop,offsetWidth:f,offsetHeight:y,getBoundingClientRect:()=>{let L=o.getBoundingClientRect();return{left:L.left+g,top:L.top+u,right:L.left+g+f,bottom:L.top+u+y,width:f,height:y}}}};t.children.push(I)}}else e.nodeType===Node.ELEMENT_NODE&&(r.target=e,t.children.push(r));return r}toggle(e){if(this.init(),this.inPicker){this.close();return}this.rectSel=!!e,e?(this.domInfo=this.processNode(_(document),{children:[]}),_(document).addEventListener("mousedown",this.mouseDownHandler,!0),_(document).addEventListener("mouseup",this.mouseUpHandler,!0)):_(document).addEventListener(Nt(),this.wheelHandler,{passive:!1,capture:!0}),this.accu=0,this.inPicker=!0,_(document).classList.add("searchJumper-picker"),M.con.addEventListener("mouseenter",this.leaveHandler,!0),_(document).addEventListener("mousemove",this.moveHandler,!0),_(document).addEventListener("click",this.clickHandler,!0)}}const ke=new xr;function vr(l){if(!A)return;let e=l||{key:"Enter",keyCode:13,bubbles:!0},t=new KeyboardEvent("keydown",e);A.dispatchEvent(t),t=new KeyboardEvent("keyup",e),A.dispatchEvent(t),t=new KeyboardEvent("keypress",e),A.dispatchEvent(t),pe(A,`press ${l||"Enter"}`)}async function Ft(l){return new Promise(e=>{let t=setInterval(()=>{let r=null;if(l?l==="@"?r=A:r=xt(l):r=document.readyState==="complete",r===!1)return null;r&&(clearInterval(t),e(r))},100)})}async function wr(l){return l?new Promise(e=>{let t=setInterval(()=>{xt(l)||(clearInterval(t),e(null))},100)}):null}let pt=!1;async function Ui(l,e){if(!l)return!0;A=l;let t=new FocusEvent("focusin",{bubbles:!0});l.dispatchEvent(t),t=new Event("focus",{bubbles:!0}),l.dispatchEvent(t);const r=window.getSelection(),i=r.rangeCount?r.getRangeAt(0):new Range;i.selectNode(l),r.removeAllRanges(),r.addRange(i),await Ae(1),l.type!=="file"&&l.click&&l.click();let a=l.value;if(l.type=="file"){let m=e;if(m.indexOf("data:")==0)m=Gi(m);else{let u=new Blob([m],{type:"text/plain"});m=new File([u],"noname.txt",{type:u.type})}let g=new DataTransfer;g.items.add(m),l.files=g.files,e="c:/fakepath/fakefile"}else if(/INPUT/i.test(l.nodeName)){var n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;n.call(l,e)}else if(/SELECT/i.test(l.nodeName)){var s=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;s.call(l,e)}else if(l.nodeName.toUpperCase()=="TEXTAREA"){var o=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;o.call(l,e)}else{let m=l;for(;m&&m.contentEditable!=="true";)m=m.parentNode;if(m)m.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:e})),await Ae(1),l.innerText!==e&&(l.innerHTML=ee(e));else{let g=e;if(g.indexOf("data:")==0)g=Gi(g);else{let u=new Blob([g],{type:"text/plain"});g=new File([u],"noname.txt",{type:u.type})}var p=new ClipboardEvent("paste",{target:document.body,clipboardData:new DataTransfer});p.clipboardData.items.add(g),l.dispatchEvent(p)}}t=new Event("input",{bubbles:!0});let d=l._valueTracker;d&&d.setValue(a),l.dispatchEvent(t),t=new Event("change",{bubbles:!0}),l.dispatchEvent(t),pe(l,"input")}async function Pt(l,e=-1){pt=!1;let t;if(e>=0){e===0&&await Ft(l);let r=oi(l);if(r.length===0)return!0;if(r.length===1)t=r[0],pt=!0;else{if(r.length<=e)return!0;t=r[e],r.length===e+1&&(pt=!0)}}else if(t=await Ft(l),!t)return!0;return t}async function Ki(l,e,t=-1){let r=await Pt(l,t);return r===!0?!0:(await Ui(r,e),pt)}async function qi(l,e=-1){let t=await Pt(l,e);if(t===!0)return!0;if(A=t,!PointerEvent)return t.click();let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:1,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var i=new PointerEvent("mouseover",r);t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i);let a=(n,s)=>{let o;try{o=document.createEvent("TouchEvent"),o.initTouchEvent(s,!0,!0)}catch{try{o=document.createEvent("UIEvent"),o.initUIEvent(s,!0,!0)}catch{o=document.createEvent("Event"),o.initEvent(s,!0,!0)}}try{o.targetTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.touches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}],o.changedTouches=[{pageX:1,pageY:1,clientX:1,clientY:1,target:t}]}catch{}n.dispatchEvent(o)};return a(t,"touchstart"),a(t,"touchend"),t.click(),pe(t,`click ${l}`),pt}async function Sr(l,e=-1){let t=await Pt(l,e);if(t===!0)return!0;A=t;let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:0,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:2,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:1};t.focus();var i=new PointerEvent("mouseover",r);return t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i),t.click(),t.click(),i=new MouseEvent("dblclick",{...r,view:ye}),t.dispatchEvent(i),pe(t,`dblclick ${l}`),pt}async function Cr(l,e=-1){let t=await Pt(l,e);if(t===!0)return!0;A=t;let r={isTrusted:!0,altKey:!1,azimuthAngle:0,bubbles:!0,button:2,buttons:0,clientX:1,clientY:1,cancelBubble:!1,cancelable:!0,composed:!0,ctrlKey:!1,defaultPrevented:!1,detail:0,eventPhase:2,fromElement:null,height:1,isPrimary:!1,metaKey:!1,pointerId:1,pointerType:"mouse",pressure:0,relatedTarget:null,returnValue:!0,shiftKey:!1,toElement:null,twist:0,which:3};t.focus();var i=new PointerEvent("mouseover",r);return t.dispatchEvent(i),i=new PointerEvent("pointerover",r),t.dispatchEvent(i),i=new PointerEvent("mousedown",r),t.dispatchEvent(i),i=new PointerEvent("pointerdown",r),t.dispatchEvent(i),i=new PointerEvent("mouseup",r),t.dispatchEvent(i),i=new PointerEvent("pointerup",r),t.dispatchEvent(i),i=new PointerEvent("contextmenu",r),t.dispatchEvent(i),pe(t,`rclick ${l}`),pt}async function Ut(l,e){if(A)if(A.focus(),typeof l.value<"u"){const t=l.selectionStart,r=l.selectionEnd;let i=l.value.substring(0,t)+e+l.value.substring(r,l.value.length);await Ui(l,i),l.selectionStart=t+e.length,l.selectionEnd=t+e.length}else{const t=window.getSelection(),r=t.getRangeAt(0);t.toString()||r.selectNode(l.childNodes.length===1?l.firstChild:l),r.deleteContents(),r.insertNode(document.createTextNode(e)),t.removeAllRanges(),t.addRange(r)}}function gi(l,e,t){if(e=e.replace(/#(j(umpFrom|f)?|from){(.*?)}/,""),jt={charset:l,url:e,target:t},e.indexOf("#submitBySearchJumper")!==-1){jt={charset:l,url:e.replace("#submitBySearchJumper",""),target:t},er();return}const r="searchJumper_form";var i=document.getElementById(r);i||(i=document.createElement("form"),i.id=r,i.style.display="none",document.documentElement.appendChild(i));var a;let n=e.match(/[:%]p{(.*?)}/),s=e;return n?(s=e.replace(n[0],""),n=n[1],i.method="post",a=new URLSearchParams(n)):(i.method="get",a=new URLSearchParams(new URL(s).search)),l&&(i.acceptCharset=l),i.innerHTML=ee(),i.target=t,i.action=s,a.forEach((o,p)=>{let d=document.createElement("input");d.name=p,d.value=o,i.appendChild(d)}),i.submit()}function Gi(l){try{for(var e=l.split(","),t=e[0].match(/:(.*?);/)[1],r=atob(e[1]),i=r.length,a=new Uint8Array(i);i--;)a[i]=r.charCodeAt(i)}catch(s){pe(s)}let n=t.split("/");return n=n.length>1?n[1]:n[0],new File([a],"image."+n,{type:t})}async function Vi(l){if(!l||(l.dataset.src&&(l.src=l.dataset.src),!l.src))return null;if(l.src.split("/")[2]==document.domain){let i=getComputedStyle(l);var t=document.createElement("canvas"),r=t.getContext("2d");if(l.complete){t.width=l.naturalWidth||l.width||parseInt(i.width),t.height=l.naturalHeight||l.height||parseInt(i.height),r.drawImage(l,0,0);try{return t.toDataURL("image/png")}catch{return await Kt(l.src)}}else return await new Promise(a=>{l.addEventListener("load",async n=>{t.width=l.naturalWidth||l.width||parseInt(i.width),t.height=l.naturalHeight||l.height||parseInt(i.height),r.drawImage(l,0,0);try{a(t.toDataURL("image/png"))}catch{a(await Kt(l.src))}})})}else return await Kt(l.src)}async function Kt(l){let e=l.split("/");return new Promise(t=>{Be({method:"GET",url:l,responseType:"blob",headers:{origin:e[0]+"//"+e[2],referer:location.href,accept:"*/*"},onload:function(r){try{var i=r.response,a=new FileReader;a.readAsDataURL(i),a.onload=function(n){t(n.target.result)}}catch{t(null)}},onerror:function(){t(null)},ontimeout:function(){t(null)}})})}function Tr(l){let e=getComputedStyle(l),t=getComputedStyle(l,":before").content.replace(/"/g,"");if(!t)return!1;var r=document.createElement("canvas");r.width=l.clientWidth||parseInt(e.lineHeight),r.height=l.clientHeight||parseInt(e.lineHeight);var i=r.getContext("2d");i.font=e.font,i.strokeStyle=e.color||"black",i.fillStyle=e.color||"black",i.textBaseline="top";let a=i.measureText(t);return i.fillText(t,(r.width-a.width)/2,(r.height-parseInt(e.fontSize))/2),r.toDataURL("image/png")}function kr(l){let e=l.className.trim().replace("fa fa-","").replace(/ /g,"_");if(be[e])return;let t=Tr(l);t=="data:,"||!t||(be[e]=t,U.setItem("cacheIcon",be))}async function yi(l){if(l.nodeName.toUpperCase()=="IMG"){let e=l.src||l.dataset.src;if(e){if(be[e])return;let t=await Vi(l);(t=="data:,"||!t)&&(t="fail"),be[e]=t,U.setItem("cacheIcon",be),pe(e+" cached, left "+De.length+" icons")}}else kr(l);await new Promise(e=>{setTimeout(()=>{e(!0)},1)})}async function Mt(){for(;De.length>0;)await yi(De.shift())}async function Yi(l){if(c.prefConfig.cacheSwitch){let e=De.length>0;await Promise.all([Mt(),Mt(),Mt(),Mt(),Mt()]),e&&(l&&Ce(B("cacheOver")),pe(B("cacheOver")))}}async function _i(l){if(!et){M.con.classList.add("in-input"),M.con.style.visibility="hidden",M.con.style.display="",M.appendBar();let e=Rt.length>0;for(;Rt.length>0;)await yi(Rt.shift());e&&pe("All font icons cached!")}}function $e(){let l=Bt||ke.getPickerStr()||window.getSelection().toString();if(setTimeout(()=>{Bt=""},1),!l){let e=window.getSelection();e&&e.rangeCount&&(e=e.getRangeAt(0),e&&(e=e.cloneContents(),e&&(l=e.textContent)))}if(!l){let e=li(document);if(e&&/^(TEXTAREA|INPUT)$/i.test(e.nodeName)){let t=e.selectionStart,r=e.selectionEnd;(t||r)&&(l=e.value.substring(t,r))}}if(l){if(l=l.trim(),l)return l}else if(A&&A.className==="searchJumper"&&/^MARK$/i.test(A.nodeName))return A.dataset.matched||A.innerText;return""}function qt(l,e,t){return t||(/\w$/.test(l)?t="(\\b|$)":t=""),new RegExp(l.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,"\\$1")+t,e)}function bi(l,e,t,r){if(l.indexOf(e+".replace(/")!==-1){let i=l.match(qt(e,"",`\\.replace\\(/(.*?[^\\\\])/([gimsuyx]*),\\s*["'](.*?[^\\\\])??["']\\)`));return i?(t=t.replace(new RegExp(i[1],i[2]),i[3]||""),l=l.replace(i[0],e),bi(l,e,t,r)):l.replace(qt(e,"g"),r?r(t):t)}else return l.replace(qt(e,"g"),r?r(t.replace(/\$/g,"$$$$")):t.replace(/\$/g,"$$$$"))}function Oe(){let l=$e();if(l)return l;if(!ae)return He||"";let e,t="",r=!ae.charset||ae.charset=="UTF-8";try{if(ae.keywords){let i=ae.keywords.split(`
`);for(let a=0;a<i.length;a++){let n=i[a];if(!n||!n.trim())continue;let s=i[a].match(/^(.*?)\.replace\(\//);if(s&&(n=s[1]),r){if(/^\w[\w\|]*$/.test(n)){let o=n.split("|"),p=new URLSearchParams(location.search);for(let d=0;d<o.length&&(t=p.get(o[d]),!t);d++);}else if(/\(.+\)/.test(n)&&n.indexOf("@")!==0)try{e=de.match(new RegExp(n)),e&&(t=e[1]),t&&(t=decodeURIComponent(t))}catch{t=""}}if(!t&&_(document))try{let o=xt(n);o&&(t=o.value||o.innerText)}catch{t=""}if(t&&s&&(t=bi(i[a],n,t)),t)break}}else if(r&&mt.test(ae.url)&&!/[#:%]p{/.test(ae.url)&&(de.indexOf("?")!=-1&&(e=ae.url.match(new RegExp(`[\\?&]([^&]*?)=${fi}.*`)),e&&(t=new URLSearchParams(location.search).get(e[1]))),!t&&(e=ae.url.match(new RegExp(`https?://[^/]*/(.*)${fi}`)),e&&(e=de.match(new RegExp((e[1].replace(/\?/g,"\\?")||location.host.replace(/\./g,"\\.")+"/")+"(.*?)(/|$)")),e&&(t=e[1]),t))))try{t=decodeURIComponent(t)}catch{t=""}if(t==""&&_(document)){let i=_(document).querySelector("input[type=text]:not([readonly]),input:not([type])");i&&(t=i.value)}t&&(He=t)}catch(i){pe(i)}return He||"";//!localKeywords ? cacheKeywords : localKeywords;
}function Zi(l,e){e=e||document.createElement("div"),l="on"+l;var t=l in e;if(!t){e.setAttribute||(e=document.createElement("div"));var r;e.hasAttribute(l)||(r=!0,e.setAttribute(l,"return;")),t=typeof e[l]=="function",r&&e.removeAttribute(l)}return t}function Nt(){var l="DOMMouseScroll";return Zi("wheel")?l="wheel":Zi("mousewheel")&&(l="mousewheel"),l}let gt=!1,Bt="";function Ir(){ot(B("settings"),()=>{ge(Qe,{active:!0,insert:!0})}),ot(B("searchInPage"),()=>{M.showInPage(),M.showInPageSearch()}),ot(B("search"),()=>{M.searchAuto(0,{})}),ot(B("addSearchEngine"),()=>{let x=document.head.querySelector('[rel="search"]');if(x)ar(x.href,(N,R)=>{if(N!="load"){R&&pe(R.statusText||R.error||R.response||R);let z=_(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||_(document).querySelector("textarea");xi(z)}});else{let N=_(document).querySelector("input[type=text]:not([readonly]),input[type=search]:not([readonly]),input:not([type])")||_(document).querySelector("textarea");xi(N)}}),document.addEventListener("searchJumper",x=>{switch(x.detail.action){case"search":x.detail.name?M.searchBySiteName(x.detail.name,x.detail.key||{}):M.searchAuto(x.detail.index,x.detail.key||{});break;case"show":M.setFuncKeyCall(!1),M.showInPage(),(!c.prefConfig.disableInputOnWords||M.inInput||!$e())&&M.showSearchInput();break;case"showAll":M.appendBar(),M.showAllSites();break}}),A=_(document);let l=ct.children[0],e=0,t,r=!1,i=x=>{if(clearTimeout(t),M.bar.classList.remove("grabbing"),document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1),M.bar.style.marginLeft="",M.bar.style.marginTop="",M.bar.style.transform="",e===1){e=0,M.showAllSites();return}e=0;let N=window.innerWidth||document.documentElement.clientWidth,R=window.innerHeight||document.documentElement.clientHeight,z=N/3,K=R/3,v,T,w,P,j=dt(x),q=ut(x);j<z?(v="left",w=parseInt(M.bar.style.left)>0?parseInt(M.bar.style.left):0):j<z*2?(v="center",w=parseInt(M.bar.style.left)-N/2):(v="right",w=N-parseInt(M.bar.style.left)-M.bar.scrollWidth),q<R/2?(T="top",P=parseInt(M.bar.style.top)):(T="bottom",P=R-parseInt(M.bar.style.top)-M.bar.scrollHeight,P<0&&(P=0)),l.style.cursor="",M.closeOpenType(),M.initPos(v,T,w,P),U.setItem("searchData",c)},a={x:0,y:0},n=x=>{let N=dt(x),R=ut(x);Math.abs(a.x-N)+Math.abs(a.y-R)<50||(e===1&&(clearTimeout(t),l.style.cursor="grabbing",M.bar.style.position="fixed",M.bar.style.marginLeft="0",M.bar.style.marginTop="0",M.bar.style.right="",M.bar.style.bottom="",M.bar.style.transform="unset",M.con.classList.remove("search-jumper-scroll"),M.bar.className="search-jumper-searchBar grabbing"),e=2,M.bar.style.left=N-M.bar.scrollWidth+20+"px",M.bar.style.top=R-M.bar.scrollHeight+20+"px")};if(ct.oncontextmenu=function(x){M.bar.style.display="none",x.preventDefault()},ct.addEventListener("mousedown",x=>{if(r){r=!1;return}if(x.button===2){c.prefConfig.resizePage&&(typeof M.initBodyStyle<"u"&&(_(document).style.cssText=M.initBodyStyle),M.con.classList.remove("resizePage")),document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1);return}if(x.preventDefault(),x.stopPropagation(),M.inInput||x.button===1||x.altKey||x.ctrlKey||x.shiftKey||x.metaKey){ge(Qe,{active:!0,insert:!0});return}e=1,a={x:dt(x),y:ut(x)},document.addEventListener("mouseup",i,!1),setTimeout(()=>{e===1&&document.addEventListener("mousemove",n,!1)},100),t=setTimeout(()=>{M.bar.style.display="none",document.removeEventListener("mouseup",i,!1),document.removeEventListener("mousemove",n,!1)},2e3)},!1),ct.addEventListener("touchstart",x=>{x.preventDefault(),x.stopPropagation(),r=!0,e=1,a={x:dt(x),y:ut(x)},document.addEventListener("touchend",i,!1),setTimeout(()=>{e===1&&document.addEventListener("touchmove",n,!1)},100),t=setTimeout(()=>{M.bar.style.display="none",c.prefConfig.resizePage&&(typeof M.initBodyStyle<"u"&&(_(document).style.cssText=M.initBodyStyle),M.con.classList.remove("resizePage")),document.removeEventListener("touchend",i,!1),document.removeEventListener("touchmove",n,!1)},1500)},{passive:!1,capture:!1}),M.bar.addEventListener(Nt(),x=>{if(x.target.parentNode&&(x.target.parentNode.className=="sitelistCon"||x.target.parentNode.parentNode&&x.target.parentNode.parentNode.className=="sitelistCon"))return;let N=M.con.classList;if(N.contains("search-jumper-scroll")&&!(N.contains("search-jumper-left")||N.contains("search-jumper-right"))){var R,z;if(x.type!=="wheel"){var K=0,v=0;typeof x.axis=="number"?x.axis==2?v=x.detail:K=x.detail:typeof x.wheelDeltaY>"u"||x.wheelDeltaY!=0?v=-x.wheelDelta/40:K=-x.wheelDelta/40,z=v,R=K}else R=x.deltaX,z=x.deltaY;x.preventDefault(),x.stopPropagation(),M.con.scrollLeft+=z}},{passive:!1,capture:!1}),c.prefConfig.shortcut&&(c.prefConfig.switchSitesPreKey||c.prefConfig.switchSitesNextKey||c.prefConfig.shortcutKey||c.prefConfig.showAllShortcutKey)){let x=-1,N=!1,R=(z,K,v,T,w,P)=>K&&!z.altKey||v&&!z.ctrlKey||T&&!z.shiftKey||w&&!z.metaKey||(N||(N=(z.key||String.fromCharCode(z.keyCode)).toLowerCase()),P!=N&&P!=z.code)||!c.prefConfig.enableInInput&&x==-1&&(x=1,!v&&!K&&!T&&!w&&Tt(document))?!1:(x=0,z.preventDefault(),z.stopPropagation(),!0);document.addEventListener("mouseenter",z=>{z.target&&!M.contains(z.target)&&(mi=z.target)},!0),document.addEventListener("keydown",z=>{if(z.target.id!=="searchJumperInput"&&(x=-1,N=!1,c.prefConfig.shortcutKey&&R(z,c.prefConfig.callBarAlt,c.prefConfig.callBarCtrl,c.prefConfig.callBarShift,c.prefConfig.callBarMeta,c.prefConfig.shortcutKey)&&(M.setFuncKeyCall(!1),M.showInPage(),(!c.prefConfig.disableInputOnWords||M.inInput||!$e())&&M.showSearchInput()),x!=1&&(c.prefConfig.showAllShortcutKey&&R(z,c.prefConfig.showAllAlt,c.prefConfig.showAllCtrl,c.prefConfig.showAllShift,c.prefConfig.showAllMeta,c.prefConfig.showAllShortcutKey)&&(M.appendBar(),M.showAllSites()),ae&&M.bar.style.display!=="none"))){if(c.prefConfig.switchSitesPreKey&&R(z,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesPreKey)){M.switchSite();return}c.prefConfig.switchSitesNextKey&&R(z,c.prefConfig.switchSitesAlt,c.prefConfig.switchSitesCtrl,c.prefConfig.switchSitesShift,c.prefConfig.switchSitesMeta,c.prefConfig.switchSitesNextKey)&&M.switchSite(!0)}},!0)}let s;if(c.prefConfig.enableInPage){let v=function(w){let P=!1;if(Tt(document))P=!0;else{let j=!1,q=w;for(;q&&(j=q.contentEditable=="true",!(j||q.nodeName.toUpperCase()=="BODY"));)q=q.parentNode;j&&(P=!0)}return P},x=!1,N,R=!1,z;document.addEventListener("selectionchange",w=>{(c.prefConfig.leftMouse||c.prefConfig.middleMouse)&&(window.getSelection().toString()?z=window.getSelection().getRangeAt(0).getBoundingClientRect():z=null)});let K=!1;s=w=>{x&&w.preventDefault(),x=!1,document.removeEventListener("click",s,!0)};let T=w=>{if(K&&w.type==="mousedown"&&w.button===0||w.target.classList&&w.target.classList.contains("search-jumper-btn")||M.contains(w.target)||M.bar.classList.contains("grabbing"))return;let P=v(w.target),j=!c.prefConfig.enableInInput&&P;if(j&&w.type==="dblclick")return;if(c.prefConfig.minPopup==2&&(P?M.con.classList.add("targetInput"):M.con.classList.remove("targetInput")),w.type==="touchstart"){c.prefConfig.selectToShow&&setTimeout(()=>{$e()?M.showInPage(!0,w):M.waitForHide(0)},0);return}K=!0,setTimeout(()=>{K=!1},500),x=!1,A=w.target,M.closePopupWindow();let q=!1;if((c.prefConfig.altKey||c.prefConfig.ctrlKey||c.prefConfig.shiftKey||c.prefConfig.metaKey)&&!(c.prefConfig.altKey&&!w.altKey||c.prefConfig.ctrlKey&&!w.ctrlKey||c.prefConfig.shiftKey&&!w.shiftKey||c.prefConfig.metaKey&&!w.metaKey)&&(q=!0),!c.prefConfig.selectToShow&&(w.button===0&&!c.prefConfig.leftMouse||w.button===1&&!c.prefConfig.middleMouse)){M.waitForHide(0);return}let ue=w.clientX,te=w.clientY,ie=!1,C=Z=>{Math.abs(ue-Z.clientX)+Math.abs(te-Z.clientY)>2&&(clearTimeout(N),document.removeEventListener("mousemove",C,!0),Z.target.removeEventListener("scroll",W),ie=!0)},W=Z=>{clearTimeout(N),document.removeEventListener("mousemove",C,!0),Z.target.removeEventListener("scroll",W)},D=Z=>{gt=!1,M.contains(Z.target)||x?Z.preventDefault():setTimeout(()=>{x||(P=v(Z.target),j=!c.prefConfig.enableInInput&&P,!j&&(q&&Z.button===2||(ie||R)&&Z.button===0&&c.prefConfig.selectToShow&&$e())?M.showInPage(!0,Z):(K=!1,M.waitForHide(0)))},0),clearTimeout(N),document.removeEventListener("mouseup",D,!0),document.removeEventListener("mousemove",C,!0),Z.target.removeEventListener("scroll",W)};if(w.type==="dblclick"){$e()!==""?(x=!0,gt=!1,document.removeEventListener("mouseup",D,!0),document.removeEventListener("mousemove",C,!0),w.target.removeEventListener("scroll",W),clearTimeout(N),setTimeout(()=>{M.showInPage(!0,w)},200)):(R=!0,setTimeout(()=>{R=!1},200));return}N&&clearTimeout(N),N=setTimeout(()=>{gt||A==w.target&&(w.button===1&&!c.prefConfig.middleMouse||w.button===2&&!c.prefConfig.rightMouse||w.button===0&&!c.prefConfig.leftMouse||(c.prefConfig.longPressTile?M.showInPage(!0,w):(M.setFuncKeyCall(!1),M.showInPage()),x=!0))},parseInt(c.prefConfig.longPressTime));let V=!1;if(w.button===2?q&&(V=!0):(w.button===0?c.prefConfig.leftMouse&&(V=!0):w.button===1&&c.prefConfig.middleMouse&&(V=!0),V&&(j?V=!1:z?(w.clientX<z.left||w.clientX>z.left+z.width||w.clientY<z.top||w.clientY>z.top+z.height)&&(V=!1):V=!1)),V)return setTimeout(()=>{gt||M.showInPage(!0,w),document.removeEventListener("mousemove",C,!0),w.target.removeEventListener("scroll",W)},200),x=!0,document.addEventListener("mouseup",D,!0),document.addEventListener("click",s,!0),!1;document.addEventListener("mousemove",C,!0),document.addEventListener("mouseup",D,!0),w.target.addEventListener("scroll",W)};if(document.addEventListener("mousedown",T),document.addEventListener("dblclick",T),c.prefConfig.selectToShow){let w,P,j=q=>{clearTimeout(w),w=setTimeout(()=>{window.getSelection().toString()&&(T(P),document.removeEventListener("selectionchange",j))},300)};document.addEventListener("touchstart",q=>{q.isTrusted!==!1&&(P=q,document.addEventListener("selectionchange",j))})}document.addEventListener("contextmenu",w=>{x&&w.preventDefault(),x=!1})}c.prefConfig.dragToSearch&&!nt&&_(document).addEventListener("dragstart",x=>{!x.isTrusted||c.prefConfig.dragAlt&&!x.altKey||c.prefConfig.dragCtrl&&!x.ctrlKey||c.prefConfig.dragShift&&!x.shiftKey||c.prefConfig.dragMeta&&!x.metaKey||!c.prefConfig.enableInInput&&!x.altKey&&!x.ctrlKey&&!x.shiftKey&&!x.metaKey&&Tt(document)||(A=x.target,A.nodeType!==1&&(A=A.parentNode),A.shadowRoot&&(A=A.shadowRoot.activeElement||A),!(A.getAttribute&&A.getAttribute("draggable")=="true")&&(A.parentNode&&A.parentNode.getAttribute&&A.parentNode.getAttribute("draggable")=="true"||(M.waitForHide(0),setTimeout(()=>{Mr(x.clientX,x.clientY)},2),s&&document.removeEventListener("click",s,!0),gt=!0)))}),c.prefConfig.quickAddRule&&document.addEventListener("click",x=>{((x.ctrlKey||x.metaKey)&&x.shiftKey||(x.ctrlKey||x.metaKey)&&x.altKey||x.altKey&&x.shiftKey)&&/^(INPUT|TEXTAREA)$/i.test(x.target.nodeName)&&(/^INPUT$/i.test(x.target.nodeName)&&x.target.type&&x.target.type!="text"&&x.target.type!="search"||xi(x.target))},!0);let o,p=x=>{clearTimeout(o),o=setTimeout(()=>{M.refresh()},100)};document.addEventListener("fullscreenchange",x=>{document.fullscreenElement&&(M.bar.style.display="none")});let d=!1,m=x=>{if(d)return;d=!0,setTimeout(()=>{d=!1},300);let N=x.target;if(ae&&N)if(N.nodeName&&N.nodeName.toLowerCase&&N.nodeName.toLowerCase()=="a")M.updateCacheKeywords(),U.setItem("clickLink",N.href);else{let R=N.parentNode;R&&R.nodeName&&R.nodeName.toLowerCase&&R.nodeName.toLowerCase()=="a"&&(M.updateCacheKeywords(),U.setItem("clickLink",N.href))}};_(document).addEventListener("auxclick",m,!0),_(document).addEventListener("click",m,!0);let g=function(x){var N=history[x];return function(){var R=N.apply(this,arguments);let z=location.href.slice(0,500);if(de!=z){de=z;var K=new Event("sj_"+x);K.arguments=arguments,window.dispatchEvent(K)}return R}};window.addEventListener("sj_pushState",p),window.addEventListener("sj_replaceState",p),window.addEventListener("yt-navigate-finish",p),window.addEventListener("securitypolicyviolation",x=>{x.violatedDirective==="form-action"&&er()});let u=window.location.href,f=x=>M.removeMark(x),y=(x,N)=>M.highlight(x,N),I=()=>M.appendBar(),L={childList:!0,characterData:!0,subtree:!0},O=0;new MutationObserver((x,N)=>{if(x.some(K=>K.type==="childList"||K.type==="attributes")){const K=window.location.href;K!==u&&(u=K,p())}if(M.lockWords){if(M.initHighlight&&O>100)return;for(let K of x){if(K.type==="characterData"){let v=K.target.parentNode;if(!v)return;let T=K.target.previousElementSibling;if(T&&!T.dataset.inited&&T.className==="searchJumper"){T.dataset.inited=!0;return}if(T=K.target.nextElementSibling,T&&!T.dataset.inited&&T.className==="searchJumper"){T.dataset.inited=!0;return}M.checkCharacterData(v),M.initHighlight&&O++}if(K.removedNodes.length&&[].forEach.call(K.removedNodes,v=>{v.nodeType===1&&(v.classList&&v.classList.contains("searchJumper")?f(v):v.children.length&&[].forEach.call(v.querySelectorAll("mark.searchJumper,a.searchJumper,input.searchJumper,textarea.searchJumper"),T=>{f(T)}))}),K.addedNodes.length)for(let v=0;v<K.addedNodes.length;v++){let T=K.addedNodes[v],w;if(T.nodeType===1){if(/^searchJumper$/.test(T.className))continue;w=T}else{if(T.previousElementSibling&&/^searchJumper$/.test(T.previousElementSibling.className))continue;if(T.nextElementSibling&&/^searchJumper$/.test(T.nextElementSibling.className))continue;w=T.parentNode}w&&(setTimeout(()=>{y("insert",w)},0),M.initHighlight&&O++)}}I()}}).observe(_(document),L)}function Xi(l,e){if(!l)return"";let t,r;if(e)t=e.replace(/(^https?:\/\/.+)\/[^\/]*$/,"$1"),r=e;else{if(l.charAt(0)=="#")return location.href+l;if(l.charAt(0)=="?")return location.href.replace(/^([^\?#]+).*/,"$1"+l);t=location.protocol+"//"+location.host;let o=document.querySelector("base");r=o?o.href:location.href}let i=r||t;i=i.replace(/(\?|#).*/,""),/https?:\/\/[^\/]+$/.test(i)&&(i=i+"/"),i.indexOf("http")!==0&&(i=t+i);for(var a=/^[^\?#]*\//.exec(i)[0],n=/^\w+\:\/\/\/?[^\/]+/.exec(a)[0],s=/^\w+\:\/\//;l.indexOf("../")===0;)l=l.substr(3),a=a.replace(/\/[^\/]+\/$/,"/");return l=l.replace(/\.\//,""),/^\/\/\/?/.test(l)&&(l=location.protocol+l),s.test(l)?l:(l.charAt(0)=="/"?n:a)+l}function xi(l){if(Te)return;let e,t=location.href;if(l&&l.name)for(e=l.parentNode;e;){if(e.nodeName.toUpperCase()==="FORM"){let a=e.target;if(a&&typeof a=="string"&&a!="_blank"&&a!="_self"&&a!="_parent"&&a!="_top"&&!_(document).querySelector(a)){e=null;break}break}e=e.parentNode}let r=()=>!window.confirm(B("noValidItemAsk"));if(e){t=Xi(e.getAttribute("action")||t);let a=[],n=new FormData(e);for(let[s,o]of n)l.name===s?o="%s":o=encodeURIComponent(o),a.push(s+"="+o);if(e.method.toLowerCase()=="post")t+="%p{"+a.join("&")+"}",e.action.indexOf(location.origin)==0&&location.pathname&&location.pathname!=="/"&&(t+=`#from{${location.pathname.slice(1)}}`);else{let s=t.match(/\?(.*)/);s&&(t=t.replace(s[0],""),s[1].split("&").forEach(o=>{let p=o.split("="),d=p[0];if(a.findIndex(g=>g.indexOf(d+"=")===0)!==-1)return;let m=p[1];m==l.value&&(m="%s"),a.push(d+"="+m)})),t+="?"+a.join("&")}}else if(l&&l.value)if(location.href.indexOf(l.value)!==-1)t=location.href.replace(l.value,"%s");else{let a=encodeURIComponent(l.value);if(location.pathname.indexOf(a)!==-1||location.search.indexOf(a)!==-1)t=location.origin+location.pathname.replace(a,"%s")+location.search.replace(a,"%s");else if(a=escape&&escape(l.value),a&&location.pathname.indexOf(a)!==-1||location.search.indexOf(a)!==-1)t=location.origin+location.pathname.replace(a,"%se")+location.search.replace(a,"%se");else if(r())return}else if(r())return;let i=[];[].forEach.call(document.querySelectorAll("link[rel='shortcut icon'],link[rel='icon'],link[rel='fluid-icon'],link[rel='apple-touch-icon']"),a=>{i.indexOf&&i.indexOf(a.href)!==-1||i.push(a.href)}),ti(document.title.replace(l?l.value:"","").replace(/^\s*[-_]\s*/,""),"",t,i,document.characterSet)}const Qi="https://hoothin.github.io/SearchJumper/jump.html";function er(){let l=`${Qi}#jump{url=${encodeURIComponent(jt.url)}&charset=${jt.charset}}`;jt.target=="_self"?location.href=l:ge(l,{active:!0,insert:!0})}function jr(){if(de.indexOf(Qi)!=-1){let l=de.match(/#jump{url=(.*)&charset=(.*)}/);l&&gi(l[2],decodeURIComponent(l[1]),"_self")}}var Te;async function Er(){if(de.indexOf(Qe)===0||(document.title==="SearchJumper"||document.querySelector('[name="from"][content="SearchJumper"]'))&&document.querySelector('[name="author"][content="Hoothin"]')){Te=document.querySelector('[name="engines"]');let l=document.getElementById("spotlight");if(Te)try{if(Te=Te.getAttribute("content"),Te.indexOf("http")===0){if(l){const r=B("loadingCollection");l.innerText=r,l.setAttribute("spotlight",r)}let t=await new Promise(r=>{Be({method:"GET",url:Te,onload:function(i){var a=null;try{a=JSON.parse(i.responseText),r(a)}catch(n){console.log(n),r(!1)}},onerror:function(i){console.log(i),r(!1)},ontimeout:function(i){console.log(i),r(!1)}})});t?(c.sitesConfig=t,Te=!0):Te=!1}else c.sitesConfig=JSON.parse(decodeURI(Te)),Te=!0}catch{Te=!1}let e=de.indexOf(Qe.replace(/\/config.*/,""))===0||de.indexOf(at)===0||de.indexOf(lr)===0||location.hostname==="localhost";return e&&(et=!!Te||/all(\.html)?$/.test(location.pathname)),l?l.style.display="none":setTimeout(()=>{l=document.getElementById("spotlight"),l&&(l.style.display="none")},500),e}return!1}async function Lr(){if(nt=await Er(),!nt&&c.webdavConfig&&(lt=new pr(c.webdavConfig.host+"/SearchJumper"+(c.webdavConfig.path||"").replace(/^\/*/,"/").replace(/\/*$/,"/"),c.webdavConfig.username,c.webdavConfig.password)),nt&&!et){let l,e=!1,t=()=>{l=setTimeout(()=>{e||t()},50),window.postMessage({searchData:c,cacheIcon:be,version:ht.script.version||0,command:"loadConfig"},"*")},r=setTimeout(()=>{e||location.reload()},3e3);document.addEventListener("received",n=>{e=!0,clearTimeout(l),clearTimeout(r),De.length>0&&c.prefConfig.cacheSwitch&&(pe(`Start cache ${De.length} icons!`),Yi())}),document.addEventListener("downloadCache",n=>{Nr()}),document.addEventListener("importCache",n=>{let s=n.detail?n.detail.cacheData:n.cacheData;Br(s),Ce("Cache imported successfully!")}),document.addEventListener("showSiteAdd",n=>{let s=n.detail?n.detail.site:n.site;s&&(s.url?ti(s.name,s.description,s.url,s.icon?[s.icon]:[],s.charset,s.kwFilter,s.match,s.hideNotMatch):tr.open(s))}),t(),document.addEventListener("dataChanged",n=>{t()});let i=(n,s,o,p)=>{window.postMessage({url:n,name:s,status:o,finalUrl:p,command:"verifyResult"},"*")};document.addEventListener("verifyUrl",n=>{let s=n.detail?n.detail.url:n.url,o=n.detail?n.detail.name:n.name;Be({method:"GET",url:s,headers:{referer:s,"User-Agent":navigator.userAgent},onload:function(p){i(s,o,p&&p.status,p&&p.finalUrl)},onerror:function(p){i(s,o,"error","")},ontimeout:function(p){i(s,o,"timeout","")}})});let a=c.prefConfig.cacheSwitch;document.addEventListener("saveConfig",n=>{c=(n.detail?n.detail.searchData:n.searchData)||ye.searchData,U.setItem("searchData",c);let s={},o=be?Object.keys(be).length:0;a==c.prefConfig.cacheSwitch?(c.sitesConfig.forEach(p=>{if(/^[a-z\- ]+$/.test(p.icon||"")||/^http/.test(p.icon)){let d=p.icon.trim().replace(/ /g,"_"),m=be[d];m&&(s[d]=m)}p.sites.forEach(d=>{let m=d.icon;if(m||(m=d.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(m)){let g=be[m];g&&(s[m]=g)}})}),o!==Object.keys(s).length&&(be=s,U.setItem("cacheIcon",s))):(c.sitesConfig.forEach(p=>{if(/^http/.test(p.icon)){let d=be[p.icon];if(d)if(d==="fail"){let m=document.createElement("img");m.src=p.icon,De.push(m)}else s[p.icon]=d}p.sites.forEach(d=>{let m=d.icon;if(m||(m=d.url.replace(/^showTips:/,"").replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")),/^http/.test(m)){let g=be[m];if(g)if(g==="fail"){let u=document.createElement("img");u.src=m,De.push(u)}else s[m]=g}})}),U.setItem("cacheIcon",s),c.prefConfig.cacheSwitch&&(De.length>0&&(Ce(B("startCache")),Yi(!0)),_i())),a=c.prefConfig.cacheSwitch,(n.notification||n.detail&&n.detail.notification)&&Ce("Configuration imported successfully!")}),document.addEventListener("copyConfig",n=>{let s=c.sitesConfig.filter(o=>o&&!(/^BM/.test(o.type)&&o.icon==="bookmark"));Re(JSON.stringify(s,null,2)),Ce("Configuration copied successfully!")})}else if(Bi.test(de)){let l=Me(`
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
                `),e,t=0,r=document.createElement("button");r.id="import-btn",r.className="btn Button--secondary Button";let i=document.createElement("button");i.id="filter-btn",i.className="btn Button--secondary Button";let a=document.createElement("h3"),n=document.createElement("div");n.id="import-btns-con",n.appendChild(l),n.appendChild(r),n.appendChild(i),n.appendChild(a),n.addEventListener("click",o=>{e&&(e.style.filter=""),n.classList.add("hide")}),r.innerText=B("import"),r.addEventListener("click",o=>{if(Te||!e)return;let p=e.innerText.trim(),d;if(p){try{d=JSON.parse(p)}catch(m){Ce(m.toString());return}switch(t){case 0:window.confirm(B("importOrNot"))&&(n.parentNode&&n.parentNode.removeChild(n),zt(()=>{c.sitesConfig=d,c.lastModified=new Date().getTime(),U.setItem("searchData",c),Ce(B("siteAddOver")),M.refreshEngines()},!0));break;case 1:ti(d.name,"",d.url,d.icon?[d.icon]:[],d.charset,d.kwFilter,d.match,d.hideNotMatch);break;case 2:c.prefConfig.inPageRule||(c.prefConfig.inPageRule={}),Object.keys(d).forEach(m=>{let g=d[m];if(!g)return;if(m.indexOf("@")===0){c.prefConfig.inPageRule[m]=g;return}if(!g.words||g.words.length===0)return;let u="",f=g.sep||"";f?u="$c"+f:(f=" ",g.words.length===1&&g.words[0].indexOf(" ")!==-1&&(f="",u="$o")),c.prefConfig.inPageRule[m]=u+g.words.join(f)}),U.setItem("searchData",c),Ce("Over!");break}}}),i.innerText=B("filter"),i.addEventListener("click",o=>{if(e){n.parentNode&&n.parentNode.removeChild(n);let p=e.innerText.trim(),d;if(!p||p.indexOf("[")!==0)return;try{d=JSON.parse(p),tr.open(d)}catch(m){Ce(m.toString())}}});let s=o=>{if(o==e&&n.parentNode)return;let p=o.offsetTop+"px",d=o.innerText.trim();if(d){if(a.innerText="",/^\[/.test(d))t=0,n.style.top=p,n.classList.add("filter");else if(/^\{\s*"name"/.test(d))t=1,n.style.top=p,n.classList.remove("filter"),a.innerText=d.match(/"name":\s*"(.*)"/)[1];else if(/^\{/.test(d))t=2,n.style.top=p,n.classList.remove("filter");else return;e&&(e.style.filter=""),o.parentNode.appendChild(n),o.style.filter="blur(5px)",e=o,n.classList.remove("hide")}};window.addEventListener("load",o=>{if(!e){let p=document.querySelector(".highlight>pre");p&&s(p)}}),document.addEventListener("mouseover",o=>{if(Bi.test(de))if(o.target.nodeName==="PRE")s(o.target);else{let p=o.target.children[0];p&&p.nodeName==="PRE"&&s(p)}})}}class Pr{constructor(){this.inited=!1}init(){if(this.inited)return;this.inited=!0;let e=this;this.openList=[],this.filterCss=`
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
                `,this.filterCssEle=Me(this.filterCss),this.filterFrame=document.createElement("div"),this.filterFrame.id="searchJumperFilter",this.filterFrame.innerHTML=ee(`
                <div class="searchJumperFrame-body">
                    <a href="${at}" class="searchJumperFrame-title" target="_blank">
                        <img onerror="this.style.display='none'" width="32px" height="32px" src="${ft}" />${B("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-buttons">
                        <button id="expandAll" type="button">${B("expandAll")}</button>
                        <button id="collapseAll" type="button">${B("collapseAll")}</button>
                    </div>
                    <div class="sitesCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="cancel" type="button">${B("siteCancel")}</button>
                        <button id="selectAll" type="button">${B("selectAll")}</button>
                        <button id="add" type="button">${B("import")}</button>
                    </div>
                </div>
                `),this.sitesCon=this.filterFrame.querySelector(".sitesCon");let t=this.filterFrame.querySelector("#add"),r=this.filterFrame.querySelector("#selectAll"),i=this.filterFrame.querySelector("#expandAll"),a=this.filterFrame.querySelector("#collapseAll"),n=!1;i.addEventListener("click",s=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.setAttribute("open","open")})}),a.addEventListener("click",s=>{[].forEach.call(this.filterFrame.querySelectorAll("details"),o=>{o.removeAttribute("open")})}),r.addEventListener("click",s=>{n=!n,[].forEach.call(this.filterFrame.querySelectorAll("input[type=checkbox]"),o=>{o.checked=n})}),t.addEventListener("click",s=>{Te||zt(()=>{let o=!1;[].forEach.call(this.filterFrame.querySelectorAll("details"),p=>{let d=p.children[0].children[0],m=e.typeDict[d.title];if(m.type=d.innerText.trim(),m.sites=[],[].forEach.call(p.querySelectorAll('div>[type="checkbox"]'),g=>{if(g.checked){o=!0;let u=e.siteDict[g.parentNode.title],f=g.nextElementSibling;if(!u||!f)return;if(f.value==="0")m.sites.push(u);else{let y=e.searchType(f.value);c.sitesConfig[y].sites.push(u)}}}),m.sites.length){let g=e.searchType(m.type);g===!1?c.sitesConfig.push(m):c.sitesConfig[g].sites=c.sitesConfig[g].sites.concat(m.sites)}}),o&&(c.lastModified=new Date().getTime(),U.setItem("searchData",c),Ce(B("siteAddOver")),M.refreshEngines(),this.close())})}),this.filterFrame.addEventListener("click",s=>{(s.target.id=="searchJumperFilter"||s.target.id=="cancel")&&this.close()})}searchType(e){for(let t=0;t<c.sitesConfig.length;t++)if(c.sitesConfig[t].type==e)return t;return!1}searchUrl(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t].sites;for(let i=0;i<r.length;i++)if(r[i].url.replace(/^https?/,"")==e.replace(/^https?/,""))return!0}return!1}searchName(e){for(let t=0;t<c.sitesConfig.length;t++){let r=c.sitesConfig[t].sites;for(let i=0;i<r.length;i++)if(r[i].name==e){let a=e+"_1";return this.searchName(a)}}return e}anylizeType(e){let t=this,r=document.createElement("details"),i=document.createElement("summary"),a=document.createElement("span");a.title=e.type,a.innerText=e.type,i.appendChild(a);let n=document.createElement("input");n.type="checkbox",i.appendChild(n);let s=document.createElement("button");s.innerText=B("rename"),s.addEventListener("click",p=>{let d=window.prompt(B("rename"),a.innerText);d&&(a.innerText=d)}),i.appendChild(s),r.appendChild(i);for(let p=0;p<this.openList.length;p++)if(this.openList[p]==e.type){r.setAttribute("open","open");break}let o=[];this.typeDict[e.type]=e,e.sites&&e.sites.forEach(p=>{let d=document.createElement("div"),m=document.createElement("span");if(m.innerText=p.name,p.name=t.searchName(p.name),d.appendChild(m),d.title=p.url,r.appendChild(d),t.searchUrl(p.url)){d.classList.add("exist");return}let g=document.createElement("input");g.type="checkbox",g.onclick=y=>{if(!g.checked)n.checked=!1;else{let I=!0;for(let L=0;L<o.length;L++)if(!o[L].checked){I=!1;break}I&&(n.checked=!0)}},d.appendChild(g),d.addEventListener("click",y=>{y.target.nodeName.toUpperCase()=="SPAN"&&g.click()});let u=document.createElement("select"),f=document.createElement("option");f.value=0,f.innerText=B("currentType"),u.appendChild(f);for(let y=0;y<c.sitesConfig.length;y++){let I=c.sitesConfig[y];if(I.type!=e.type){let L=document.createElement("option");L.value=I.type,L.innerText=I.type,u.appendChild(L)}}d.appendChild(u),t.siteDict[p.url]=p,o.push(g)}),o.length==0&&(n.style.display="none",s.style.display="none"),n.addEventListener("click",p=>{o.forEach(d=>{d.checked=n.checked})}),this.sitesCon.appendChild(r)}close(){this.openList=[],[].forEach.call(this.sitesCon.querySelectorAll("details"),e=>{e.hasAttribute("open")&&this.openList.push(e.querySelector("summary").innerText)}),this.filterFrame.parentNode&&this.filterFrame.parentNode.removeChild(this.filterFrame)}open(e){this.init();let t=this;this.siteDict={},this.typeDict={},(!this.filterCssEle||!this.filterCssEle.parentNode)&&(this.filterCssEle=Me(this.filterCss)),document.documentElement.appendChild(this.filterFrame),this.sitesCon.innerHTML=ee(""),e.forEach(r=>{t.anylizeType(r)})}}const tr=new Pr;var Ie,We,vi,wi,Si,Ci,Gt,Vt,Yt,_t;function Mr(l,e){if(!M||!M.bar)return;let t=M.bar.querySelector(".search-jumper-type.search-jumper-open"),r=()=>{if(document.removeEventListener("dragend",Si,!0),document.removeEventListener("dragenter",Ci,!0),We.parentNode&&(We.parentNode.removeChild(We),Ie.style.opacity="",Ie.style.transform=""),gt=!1,clearTimeout(Gt),ae&&!ae.hideNotMatch&&!c.prefConfig.hideOnSearchEngine||M.con.classList.contains("resizePage")){if(t&&!t.classList.contains("search-jumper-open"))if(t.children[0].onmouseup)t.children[0].onmouseup();else{let g=new PointerEvent("mouseup");t.children[0].dispatchEvent(g)}}else M.bar.style.display="none"};if(!Vt&&!Yt&&(_t=(c.prefConfig.zoomDrag||100)/100,Vt=_t*190,Yt=_t*190),!Ie){let g=`
                    #dragCon {
                      position: fixed;
                      top: 0;
                      left: 0;
                      transform: scale(${_t});
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
                `,u=Me(g);vi=[],wi=[],Ie=document.createElement("div"),Ie.id="searchJumperWrapper",Ie.innerHTML=ee(`
                <div class="panel"></div>
                <div class="dragLogo">${di}</div>
                `),Ke||Ie.appendChild(u);const f=6,y=10;let I=Ie.querySelector(".panel"),L=360/f,O=360/y,H=-L/2,x=-O/2,N,R=Ie.querySelector(".dragLogo"),z;R.addEventListener("dragover",j=>{j.preventDefault()},!0),R.addEventListener("dragenter",j=>{clearTimeout(z),N&&(N.style.transform=`rotate(${N.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,N.classList.remove("over")),N=null,R.style.transform="scale(1.35)",j.preventDefault(),clearTimeout(Gt),Gt=setTimeout(()=>{r(),M.appendBar(),M.showAllSites()},1e3)},!0);let K=(j,q,ue)=>{let te=document.createElement("div");te.className=j;let ie=document.createElement("div");ie.className="sector-inner";let C=document.createElement("span");ie.appendChild(C),te.appendChild(ie);let W=`rotate(${q}deg)`;return C.style.transform=ue,te.style.transform=W+(c.prefConfig.hideDragHistory?"scale(1.2)":""),te.dataset.deg=q,I.appendChild(te),C.addEventListener("dragover",D=>{D.clientX<50?We.style.left="0px":D.clientX>document.documentElement.clientWidth-50&&(We.style.left=document.documentElement.clientWidth-(Vt<<1)+"px"),D.clientY<50?We.style.top="0px":D.clientY>document.documentElement.clientHeight-50&&(We.style.top=document.documentElement.clientHeight-(Yt<<1)+"px"),D.preventDefault()},!0),C.addEventListener("dragenter",D=>{clearTimeout(z),C.innerText&&(N&&(N.style.transform=`rotate(${N.dataset.deg}deg) ${c.prefConfig.hideDragHistory?"scale(1.2)":""}`,N.classList.remove("over")),R.style.transform="",te.style.transform=`scale(${c.prefConfig.hideDragHistory?"1.6":"1.25"}) ${W}`,te.classList.add("over"),N=te,clearTimeout(Gt))},!0),C};for(let j=0;j<f;j++){let q=K("sector",H+L*j,`translateX(-10px) translateY(-10px) rotate(${H-L*j}deg)`);vi.push(q)}for(let j=0;j<y;j++){let q=K("sector out",x+O*j,`translateX(12px) translateY(-15px) rotate(${x-O*j}deg)`);wi.push(q)}Si=j=>{r()},Ie.addEventListener("click",j=>{r()}),Ie.addEventListener("drop",j=>{j.target===R?(M.setFuncKeyCall(!1),M.showInPage()):N&&(r(),M.searchBySiteName(N.children[0].dataset.name,j),N.style.transform=`rotate(${N.dataset.deg}deg)`,N.classList.remove("over"),N=null),j.preventDefault()});let v,T,w,P;Ci=j=>{clearTimeout(z),Ie.contains(j.target)||(z=setTimeout(()=>{r()},300))},We=document.createElement("div"),We.id="dragCon",We.appendChild(Ie)}M.recoveHistory();let i=M.autoGetFirstType(),a=i.querySelectorAll("a.search-jumper-btn:not(.notmatch)"),n=0,s=()=>{let g=null;for(let u=n;u<a.length;u++){let f=a[u];if(f.style.display!=="none"){g=f,n=u+1;break}}return g};const o=(g,u)=>{g.parentNode.dataset.name=u.dataset.name;let f=document.createElement("p");if(f.innerText=u.dataset.name.substr(0,10).trim(),!/^\w+$/.test(f.innerText)){let L="",O=0;for(let H of f.innerText)if(L+=H,/^\w+$/.test(H)?O++:O+=2,O>10){L+="...";break}f.innerText=L}let y=document.createElement("img");y.style.display="none",g.appendChild(y),g.appendChild(f),y.onload=L=>{y.style.display=""};let I=u.querySelector("img");if(I){let L=I.src||I.dataset.src;L&&(y.src=L)}};vi.forEach((g,u)=>{g.innerHTML=ee();let f=s();if(!f){g.parentNode.parentNode.style.filter="contrast(0.5)";return}g.parentNode.parentNode.style.filter="",o(g,f)});let p=0,d;i.classList.contains("search-jumper-needInPage")?d=M.txtHistorySiteBtns:i.classList.contains("search-jumper-targetImg")?d=M.imgHistorySiteBtns:i.classList.contains("search-jumper-targetAudio")?d=M.audioHistorySiteBtns:i.classList.contains("search-jumper-targetVideo")?d=M.videoHistorySiteBtns:(i.classList.contains("search-jumper-targetLink")||i.classList.contains("search-jumper-targetPage"))&&(d=M.linkHistorySiteBtns),d?(d=d.concat(M.historySiteBtns),d=d.filter((g,u,f)=>f.indexOf(g)===u)):d=M.historySiteBtns;let m=()=>{if(c.prefConfig.reuseDragHistory)return s();if(c.prefConfig.hideDragHistory)return!1;let g=null;for(let u=p;u<d.length;u++){let f=d[u];if(f.style.display!=="none"){g=f,p=u+1;break}}return g};wi.forEach((g,u)=>{let f=new DragEvent("dragleave");g.dispatchEvent(f),g.innerHTML=ee(),g.parentNode.parentNode.style.opacity=.6;let y=m();if(!y)return;let I=y.querySelector("img");I&&I.dataset.src&&(I.src=I.dataset.src,delete I.dataset.src),g.parentNode.parentNode.style.opacity=1,o(g,y)}),We.style.left=l-Vt+"px",We.style.top=e-Yt+"px",Ie.style.opacity="",Ie.style.transform="",setTimeout(()=>{document.addEventListener("dragend",Si,!0),M.addToShadow(We),setTimeout(()=>{Ie.style.opacity=1,Ie.style.transform="scale(1)"},10),setTimeout(()=>{getComputedStyle(Ie).zIndex!="2147483647"?r():document.addEventListener("dragenter",Ci,!0)},100)},0)}var Q,Zt,At,Je,yt,ze,$t,Wt,ir,rr,Ti,Xt,Qt,ei,sr;function ti(l,e,t,r,i,a,n,s){if(self.kwFilter=a,self.charset=i,self.hideNotMatch=s,self.match=n,!Q){let p=Me(`
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
                `);Q=document.createElement("div"),Q.innerHTML=ee(`
                <div class="searchJumperFrame-body">
                    <a href="${at}" class="searchJumperFrame-title" target="_blank" draggable="false">
                        <img width="32px" height="32px" src="${ft}" />${B("addSearchEngine")}
                    </a>
                    <div class="searchJumperFrame-maxBtn">
                        <svg id="maxBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("maxAddSiteBtn")}</title><path d="M192 832h160a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32V672a32 32 0 0 1 64 0zM182.72 886.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 0 1 45.44 45.44zM832 832V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H672a32 32 0 0 1 0-64zM886.72 841.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM192 192v160a32 32 0 0 1-64 0V160a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM137.28 182.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM832 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0zM841.28 137.28a32 32 0 1 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                        <svg id="minBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("minAddSiteBtn")}</title><path d="M672 352h160a32 32 0 0 1 0 64H640a32 32 0 0 1-32-32V192a32 32 0 0 1 64 0zM662.72 406.72a32 32 0 0 1-45.44-45.44l224-224a32 32 0 1 1 45.44 45.44zM352 352V192a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1 0-64zM406.72 361.28a32 32 0 0 1-45.44 45.44l-224-224a32 32 0 0 1 45.44-45.44zM672 672v160a32 32 0 0 1-64 0V640a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64zM617.28 662.72a32 32 0 0 1 45.44-45.44l224 224a32 32 0 0 1-45.44 45.44zM192 672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V672zM361.28 617.28a32 32 0 0 1 45.44 45.44l-224 224a32 32 0 0 1-45.44-45.44z"></path></svg>
                    </div>
                    <div class="searchJumperFrame-inputs">
                        <div class="searchJumperFrame-input-title">${B("siteName")}</div>
                        <input name="siteName" type="text" />
                        <div class="searchJumperFrame-input-title">${B("siteUrl")}</div>
                        <textarea name="url" type="text"></textarea>
                        <svg id="crawlBtn" class="sideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>${B("crawlInfo")}</title><path d="M385 926.3c-11 0-21.4-4.3-29.2-12l-0.6-0.6c-0.7-0.7-65.6-70.4-108.4-112.7-42.8-42.3-118.6-111.4-119.3-112.1l-0.6-0.5c-15.9-15.7-24.6-36.6-24.5-58.8s9-43.1 25-58.6c28.6-27.7 72.2-31 104.6-8.2l90.5 44-83.1-290.1c-4.9-17.1-4.2-34.9 2.1-51.6 6.3-16.6 17.5-30.5 32.5-40.1 22-14.1 47.7-17.7 70.3-10 22.6 7.7 40.7 26.3 49.5 50.9L431 369.8V176.9c0-43.4 35.3-78.7 78.7-78.7 20.7 0 40.2 7.9 55 22.4 14.8 14.4 23.2 33.8 23.7 54.4v0.2l2.4 165.5L625 229.1l0.1-0.4c8.2-23.2 26.2-41.1 49.4-49.3 23.2-8.2 48.5-5.5 69.4 7.3 15.6 9.6 27.7 24.3 33.9 41.6s6.4 36.3 0.6 53.7L736 409.5l42.9-48.6 0.3-0.3c15.7-16.2 34.4-25.7 54.1-27.3 19.8-1.6 39.1 4.7 56 18.1 33 26.4 40.8 60.1 22.7 97.5l-0.5 1.1-0.6 1c-41.8 65.2-107.1 171.9-115.8 199-12.4 38.6-41 140.7-41.3 141.7l-0.2 0.7-34.5 107.2-0.6 1.2c-6.8 14.3-21.5 23.7-37.4 23.8l-295.9 1.6c0 0.1-0.1 0.1-0.2 0.1z"></path></svg>
                        <div class="searchJumperFrame-input-title">${B("siteDesc")}</div>
                        <textarea name="description" type="text"></textarea>
                        <div class="searchJumperFrame-input-title">${B("siteIcon")}</div>
                        <textarea name="icon" type="text"></textarea>
                        <img class="sideIcon" width="27px" height="27px" />
                    </div>
                    <div class="searchJumperFrame-inputs moreItem">
                        <div class="searchJumperFrame-input-title">${B("siteKeywords")}</div>
                        <input name="siteKeywords" placeholder="kw|key" type="text" />
                        <div class="searchJumperFrame-input-title">${B("siteMatch")}</div>
                        <input name="siteMatch" placeholder="(www|m)\\.google\\.com" type="text" />
                        <div class="searchJumperFrame-input-title">${B("openSelect")}</div>
                        <select name="openSelect">
                            <option value="-1">${B("openInDefault")}</option>
                            <option value="true">${B("openInNewTab")}</option>
                            <option value="false">${B("openInCurrent")}</option>
                        </select>
                    </div>
                    <div class="iconsCon"></div>
                    <div class="searchJumperFrame-input-title">${B("siteType")}</div>
                    <select name="typeSelect">
                    </select>
                    <div class="searchJumperFrame-buttons">
                        <button id="test" type="button">${B("siteTest")}</button>
                        <button id="cancel" type="button">${B("siteCancel")}</button>
                        <button id="add" type="button">${B("siteAdd")}</button>
                    </div>
                </div>
                <div class="searchJumperFrame-crawlBody searchJumperFrame-hide">
                    <a href="${at}" class="searchJumperFrame-title" target="_blank">
                        <img width="32px" height="32px" src="${ft}" />${B("addAction")}
                    </a>
                    <svg class="searchJumperFrame-closeBtn" fill="white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Close crawl</title>${Oi}</svg>
                    <div class="actionCon"></div>
                    <div class="searchJumperFrame-buttons">
                        <button id="input" type="button" title="${B("emuInputTips")}">${B("inputAction")}</button>
                        <button id="click" type="button" title="${B("emuClickTips")}">${B("clickAction")}</button>
                        <button id="sleep" type="button" title="${B("emuWaitTips")}">${B("sleepAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="copy" type="button" title="${B("emuCopyTips")}">${B("copyAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="record" type="button" title="${B("emuRecordTips")}">${B("recordAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="loop" type="button" title="${B("emuLoopTips")}">${B("loopAction")}</button>
                    </div>
                    <div class="searchJumperFrame-buttons">
                        <button id="submitCrawl" type="button" title="${B("emuStopTips")}">${B("submitCrawl")}</button>
                    </div>
                </div>
                `),Ke||Q.appendChild(p);let d=Q.children[0];Zt=Q.querySelector("[name='siteName']"),At=Q.querySelector("[name='description']"),Je=Q.querySelector("[name='url']"),yt=Q.querySelector("[name='icon']"),ze=Q.querySelector(".searchJumperFrame-inputs>img"),$t=Q.querySelector(".iconsCon"),ir=Q.querySelector("#test"),rr=Q.querySelector("#cancel"),Ti=Q.querySelector("#add"),Wt=Q.querySelector("select[name='typeSelect']"),Xt=Q.querySelector("[name='siteKeywords']"),Qt=Q.querySelector("[name='siteMatch']"),ei=Q.querySelector("select[name='openSelect']");let m=Q.querySelector(".searchJumperFrame-title"),g,u,f=!1,y=b=>{f||(Q.classList.add("draging"),f=!0);let S=b.clientX-g.x+u.x,h=b.clientY-g.y+u.y;d.style.marginLeft=S+"px",d.style.marginTop=h+"px"},I=b=>{b.preventDefault(),b.stopPropagation(),Q.classList.remove("draging"),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",I)};m.addEventListener("mousedown",b=>{b.preventDefault(),b.stopPropagation(),f=!1,g={x:b.clientX,y:b.clientY};let S=getComputedStyle(d);u={x:parseInt(S.marginLeft||0),y:parseInt(S.marginTop||0)},document.addEventListener("mousemove",y),document.addEventListener("mouseup",I)}),ze.onload=b=>{ze.style.display=""},Q.querySelector("#maxBtn").addEventListener("click",b=>{Q.classList.add("maxContent")}),Q.querySelector("#minBtn").addEventListener("click",b=>{Q.classList.remove("maxContent")});for(let b=0;b<c.sitesConfig.length;b++){let S=c.sitesConfig[b],h=document.createElement("option");h.value=b,hi!==""&&hi==b&&(h.selected="selected"),h.innerText=S.type,Wt.appendChild(h)}ir.addEventListener("click",b=>{if(/#p{/.test(Je.value)){let S=Je.value.match(/#p{(.*)}/);if(!S)return;let h=[];S[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(k=>{if(k=k.trim(),/^loopStart\(\d+\)$/.test(k)){let E=k.match(/loopStart\((.*)\)/);h.push(["@loopStart",E[1]])}else if(k=="loopEnd")h.push(["@loopEnd",""]);else if(k.startsWith("click(")&&k.endsWith(")")){let E=k.slice(6,k.length-1);E&&h.push(["@click",E.replace(/\\([\=&])/g,"$1").trim()])}else if(k.startsWith("dblclick(")&&k.endsWith(")")){let E=k.slice(9,k.length-1);E&&h.push(["@dblclick",E.replace(/\\([\=&])/g,"$1").trim()])}else if(k.startsWith("rclick(")&&k.endsWith(")")){let E=k.slice(7,k.length-1);E&&h.push(["@rclick",E.replace(/\\([\=&])/g,"$1").trim()])}else if(k.startsWith("copy(")&&k.endsWith(")")){let E=k.slice(5,k.length-1);E&&h.push(["@copy",E.replace(/\\([\=&])/g,"$1").trim()])}else if(k.startsWith("call(")&&k.endsWith(")")){let E=k.slice(5,k.length-1);E&&h.push(["@call",E.replace(/\\([\=&])/g,"$1").trim()])}else if(k.startsWith("wait(")&&k.endsWith(")")){let E=k.slice(5,k.length-1);h.push(["@wait",E.replace(/\\([\=&])/g,"$1").trim()])}else if(/^sleep\(\d+\)$/.test(k)){let E=k.match(/sleep\((.*)\)/);E&&h.push(["@sleep",E[1]])}else if(/^reload\(\d?\)$/.test(k)){let E=k.match(/reload\((.*)\)/);h.push(["@reload",E[1]])}else{k=k.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let E=k.split("SJ^PARAM");if(E.length===2){let J=E[0],$=E[1].replace(/\\([\=&])/g,"$1");h.push([J,$])}else(k.endsWith(".click()")||k.endsWith(".click"))&&h.push(["@"+k.replace(/\.click(\(\))?$/,""),"click"])}}),Ge=h,M.submitAction(h)}else/[:%]p{/.test(Je.value)||i&&i.toLowerCase()!="utf-8"?gi(i,Je.value.replace(/%se?\b/g,"searchJumper"),"_blank"):ge(Je.value.replace(/%se?\b/g,"searchJumper"),{active:!0,insert:!0})}),rr.addEventListener("click",b=>{Q.parentNode&&Q.parentNode.removeChild(Q)}),Ti.addEventListener("click",b=>{Te||zt(()=>{let S=null;for(let h=0;h<c.sitesConfig.length;h++){let k=c.sitesConfig[h];for(let E=0;E<k.sites.length;E++){let J=k.sites[E];if(J.url==Je.value){if(h==parseInt(Wt.value)){alert("Already added!");return}if(window.confirm(B("siteExist")))S={name:J.name+" - "+k.type,url:`["${J.name}"]`};else return}}}S==null&&(S={name:Zt.value,url:Je.value},yt.value&&yt.value!=Je.value.replace(/\?.*/,"").replace(/^(https?:\/\/[^\/]*\/)[\s\S]*$/,"$1favicon.ico")&&(S.icon=yt.value),At.value&&At.value!=Zt.value&&(S.description=At.value),Xt.value&&(S.keywords=Xt.value),Qt.value&&(S.match=Qt.value),ei.value&&ei.value!="-1"&&(S.openInNewTab=ei.value==="true"),self.charset&&i.toLowerCase()!="utf-8"&&(S.charset=self.charset),self.kwFilter&&(S.kwFilter=self.kwFilter),self.match&&(S.match=self.match),self.hideNotMatch&&(S.hideNotMatch=self.hideNotMatch)),c.sitesConfig[Wt.value].sites.push(S),c.lastModified=new Date().getTime(),U.setItem("lastAddType",Wt.value),U.setItem("searchData",c),Ce(B("siteAddOver")),Q.parentNode&&Q.parentNode.removeChild(Q),window.postMessage({searchData:c,version:ht.script.version||0,command:"loadConfig"},"*"),M.refreshEngines()})}),sr=Q.querySelector("#crawlBtn");let H=Q.querySelector(".searchJumperFrame-closeBtn"),x=Q.querySelector(".actionCon"),N=Q.querySelector("#input"),R=Q.querySelector("#click"),z=Q.querySelector("#sleep"),K=Q.querySelector("#copy"),v=Q.querySelector("#submitCrawl"),T=Q.querySelector("#record"),w=Q.querySelector("#loop"),P,j=(b,S="",h="")=>{let k=document.createElement("div"),E=b;switch(b){case"input":E=B("inputOutput",[S,h]);break;case"click":E=B("clickOutput",S);break;case"dblclick":E=B("dblclickOutput",S);break;case"rclick":E=B("rclickOutput",S);break;case"copy":E=B("copyOutput",S);break;case"loopStart":E=B("loopStart",h);break;case"loopEnd":E=B("loopEnd");break;case"sleep":E=B("sleepOutput",h);break;default:break}E&&(k.innerHTML=ee(E),k.dataset.type=b,k.dataset.sel=S,k.dataset.val=h,k.draggable="true",k.ondragover=J=>{J.preventDefault()},k.ondragstart=J=>{P=k},k.ondrop=J=>{x.insertBefore(P,k)},k.onclick=J=>{let $=J.target;if($.nodeName.toUpperCase()=="SPAN")if($.className=="element")ke.getSelector(F=>{$.innerText=F,$.title=F,Q.style.display="",k.dataset.sel=F}),Q.style.display="none";else{let F=prompt(B("inputNewValue"),$.innerText);F&&($.innerText=F,$.title=F,k.dataset.val=F)}else confirm(B("deleteConfirm"))&&x.removeChild(k)},k.oncontextmenu=J=>{let $=J.target;if($.nodeName.toUpperCase()=="SPAN")if(J.preventDefault(),$.className=="element"){let F=prompt("Selector",$.innerText);F&&($.innerText=F,$.title=F,k.dataset.sel=F)}else{let F=prompt(B("inputNewValue"),$.innerText);F&&($.innerText=F,$.title=F,k.dataset.val=F)}},x.appendChild(k))},q=()=>{x.innerHTML=ee();let b=Je.value.match(/#p{(.*)}/);b&&b[1].replace(/([^\\])&/g,"$1SJ^PARAM").split("SJ^PARAM").forEach(S=>{if(S=S.trim(),/^loopStart\(\d+\)$/.test(S)){let h=S.match(/loopStart\((.*)\)/);j("loopStart","",h[1])}else if(S=="loopEnd")j("loopEnd");else if(S.startsWith("click(")&&S.endsWith(")")){let h=S.slice(6,S.length-1);h&&j("click",h.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("dblclick(")&&S.endsWith(")")){let h=S.slice(9,S.length-1);h&&j("dblclick",h.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("rclick(")&&S.endsWith(")")){let h=S.slice(7,S.length-1);h&&j("rclick",h.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("copy(")&&S.endsWith(")")){let h=S.slice(5,S.length-1);h&&j("copy",h.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("call(")&&S.endsWith(")")){let h=S.slice(5,S.length-1);h&&j("call","",h.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("wait(")&&S.endsWith(")")){let h=S.slice(5,S.length-1);h&&j("wait","",h.replace(/\\([\=&])/g,"$1").trim())}else if(S.startsWith("open(")&&S.endsWith(")")){let h=S.slice(5,S.length-1);h&&j("open","",h.replace(/\\([\=&])/g,"$1").trim())}else if(/^sleep\(\d+\)$/.test(S)){let h=S.match(/sleep\((.*)\)/);h&&j("sleep","",h[1])}else if(/^reload\(\d?\)$/.test(S)){let h=S.match(/reload\((.*)\)/);j("reload","",h[1])}else{S=S.replace(/([^\\])\=/g,"$1SJ^PARAM").replace(/\\([\=&])/g,"$1");let h=S.split("SJ^PARAM");h.length===2?j("input",h[0],h[1].replace(/\\([\=&])/g,"$1")):(S.endsWith(".click()")||S.endsWith(".click"))&&j("click",S.replace(/\.click(\(\))?$/,""))}})},ue=()=>{let b=[];return[].forEach.call(x.children,S=>{if(!S)return;let h=S.dataset.sel,k=S.dataset.val||"";switch(S.dataset.type){case"click":b.push(`click(${h.replace(/([=&])/g,"\\$1")})`);break;case"dblclick":b.push(`dblclick(${h.replace(/([=&])/g,"\\$1")})`);break;case"rclick":b.push(`rclick(${h.replace(/([=&])/g,"\\$1")})`);break;case"copy":b.push(`copy(${h.replace(/([=&])/g,"\\$1")})`);break;case"input":b.push(`${h.replace(/([=&])/g,"\\$1")}=${k}`);break;case"sleep":b.push(`sleep(${k})`);break;case"loopEnd":b.push("loopEnd");break;default:b.push(`${S.dataset.type}(${k.replace(/([=&])/g,"\\$1")})`);break}}),b.join("&")};sr.addEventListener("click",b=>{q(),Q.classList.add("crawling")}),H.addEventListener("click",b=>{Q.classList.remove("crawling")});let te,ie,C=b=>{Q.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(b.target.nodeName)||(clearTimeout(ie),ie=setTimeout(()=>{j("click",ke.geneSelector(b.target,!0))},300)))},W=b=>{Q.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(b.target.nodeName)||(clearTimeout(ie),j("dblclick",ke.geneSelector(b.target,!0))))},D=b=>{Q.style.display!==""&&(/INPUT|TEXTAREA|SELECT|OPTION/i.test(b.target.nodeName)||(b.preventDefault(),clearTimeout(ie),j("rclick",ke.geneSelector(b.target,!0))))},V=b=>{Q.style.display!==""&&j("input",ke.geneSelector(b.target,!0),b.target.value)},Z=b=>{if(Q.style.display==="")return;let S=!1;b.keyCode==27?S=!0:b.keyCode==13&&(b.preventDefault(),b.stopPropagation(),b.target&&b.target.blur&&b.target.blur(),S=!0),S&&(Q.style.display="",document.removeEventListener("keydown",Z,!0),document.removeEventListener("click",C),document.removeEventListener("dblclick",W),document.removeEventListener("contextmenu",D),document.removeEventListener("change",V))};T.addEventListener("click",b=>{alert(B("startRecord")),Q.style.display="none",setTimeout(()=>{document.addEventListener("keydown",Z,!0),document.addEventListener("click",C),document.addEventListener("dblclick",W),document.addEventListener("contextmenu",D),document.addEventListener("change",V)},100)});let ne=!1;w.addEventListener("click",b=>{if(ne)j("loopEnd"),w.innerText=B("loopAction");else{let S=prompt(B("loopTimes"),1);if(!S)return;j("loopStart","",S||"1"),w.innerText=B("loopActionEnd")}ne=!ne}),N.addEventListener("click",b=>{ke.getSelector(S=>{j("input",S,"%s"),Q.style.display=""},!ne),Q.style.display="none"}),K.addEventListener("click",b=>{ke.getSelector(S=>{j("copy",S,"%s"),Q.style.display=""},!ne),Q.style.display="none"}),R.addEventListener("dblclick",b=>{clearTimeout(ie),b.preventDefault(),b.stopPropagation(),ke.getSelector(S=>{j("dblclick",S),Q.style.display=""},!ne),Q.style.display="none"}),R.addEventListener("contextmenu",b=>{clearTimeout(ie),b.preventDefault(),b.stopPropagation(),ke.getSelector(S=>{j("rclick",S),Q.style.display=""},!ne),Q.style.display="none"}),R.addEventListener("click",b=>{clearTimeout(ie),ie=setTimeout(()=>{ke.getSelector(S=>{j("click",S),Q.style.display=""},!ne),Q.style.display="none"},250)}),z.addEventListener("click",b=>{let S=prompt(B("sleepPrompt"),1e3);S=S&&parseInt(S),S&&j("sleep","",S)}),v.addEventListener("click",b=>{let S=ue();S&&(Je.value=location.href+"#p{"+S+"}"),Q.classList.remove("crawling")}),Q.addEventListener("keydown",b=>{b.keyCode==13&&b.target&&b.target.nodeName=="INPUT"&&Ti.click()})}M.addToShadow(Q),Xt.value="",Qt.value="",Zt.value=l||"",At.value=e||"",Je.value=t||"",r&&r[0]?(ze.style.display="",t.indexOf(location.origin)===0?(ze.onerror=o=>{ze.onerror=null,yt.value=r[0],ze.src=r[0]},ze.src=location.origin+"/favicon.ico"):(yt.value=r[0],ze.src=r[0])):(ze.style.display="none",ze.src=(/^(showTips:)?https?:/.test(t)?t.split(`
`)[0].replace(/\?.*/,"").replace(/^(showTips:)?(https?:\/\/[^\/]+).*/,"$2"):location.origin)+"/favicon.ico"),$t.innerHTML=ee(),r&&r.length>1?($t.style.opacity="",r.forEach(o=>{let p=document.createElement("img");p.src=o,p.addEventListener("click",d=>{yt.value=o,ze.src=o}),p.onload=d=>{p.title=p.naturalWidth+" x "+p.naturalHeight+`
`+o.replace(/.*\/([^\/]+)/,"$1")},$t.appendChild(p)})):$t.style.opacity=0}function Nr(){let l=document.createElement("a");l.download="searchJumperCache.json",l.target="_blank";let e=[JSON.stringify({sortTypeNames:Le,cacheIcon:be,sortSiteNames:Pe},null,4)],t=new Blob(e,{type:"application/json"});l.href=window.URL.createObjectURL(t),l.click()}function Br(l){l.cacheIcon&&(be=l.cacheIcon,U.setItem("cacheIcon",be),De=[],c.prefConfig.cacheSwitch=!0,U.setItem("searchData",c)),l.sortTypeNames&&(Le=l.sortTypeNames,U.setItem("sortTypeNames",Le)),l.sortSiteNames&&(Pe=l.sortSiteNames,U.setItem("sortSiteNames",Pe))}function ar(l,e){Be({method:"GET",url:l,headers:{referer:l,origin:l},onload:t=>{let r=t&&t.responseXML&&t.responseXML.querySelector('Url[type="text/html"]');if(!r){e("error",t);return}let i=t.responseXML.querySelector("ShortName"),a=t.responseXML.querySelector("Description"),n=t.responseXML.querySelector("Image"),s=t.responseXML.querySelector("InputEncoding"),o=r.querySelectorAll("Param"),p=i&&i.textContent,d=a&&a.textContent,m=r.getAttribute("template"),g=n&&n.textContent,u=s&&s.textContent;if(o.length>0){let f=[];[].forEach.call(o,y=>{f.push(`${y.getAttribute("name")}=${y.getAttribute("value")}`)}),m+=`%p{${f.join("&")}}`}ti(p,d,m.replace(/{searchTerms\??}/g,"%s").replace(/{startPage\??}/g,"1").replace(/{count\??}/g,"10").replace(/{startIndex\??}/g,"1").replace(/{startPage\??}/g,"1").replace(/{language\??}/g,"*").replace(/{inputEncoding\??}/g,"UTF-8").replace(/{outputEncoding\??}/g,"UTF-8"),[g],u),e("load",t)},onerror:t=>{e("error",t)},ontimeout:t=>{e("error",t)}})}function Ar(){if(location.hostname!=="mycroftproject.com")return;Me(`
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
            `);let l=()=>{let t=document.querySelectorAll("img.icon~a[href^='/install']");if(t.length<=0)return;let r=!1;[].forEach.call(t,i=>{if(i.previousElementSibling&&i.previousElementSibling.classList.contains("searchJumperIcon")||i.previousElementSibling&&i.previousElementSibling.previousElementSibling&&i.previousElementSibling.previousElementSibling.classList.contains("searchJumperIcon"))return;let a=i.href.match(/\?id=(\d+)&basename=(.+?)&/);if(a===null)return;let n=document.createElement("img");n.className="icon searchJumperIcon",n.style.cssText="border: 1px solid #4c4c4c; border-radius: 9px; box-sizing: border-box; margin-right: 4px; cursor: pointer;",n.title="Add to SearchJumper",n.src=ft,i.parentNode.insertBefore(n,i),n.onclick=s=>{r||(r=!0,n.classList.add("searchJumper-loading"),ar(`https://mycroftproject.com/installos.php/${a[1]}/${a[2]}.xml`,(o,p)=>{r=!1,n.classList.remove("searchJumper-loading"),o!="load"&&Ce(p.statusText||p.error)}))}})};l();let e=setInterval(()=>{l()},1e3);window.addEventListener("load",t=>{clearInterval(e),l()})}function $r(){M=new br}function Wr(){if(et){if(M.appendBar(),M.showAllSites(),setTimeout(()=>{M.con.style.zIndex=0},5),location.hash){let l=location.hash.slice(1);try{l=decodeURIComponent(l)}catch{}M.searchJumperInputKeyWords.value=l}else if(location.search){let l=location.search.slice(1).split("&"),e,t,r;l.forEach(i=>{let a=i.split("="),n=a[0],s=a[1];try{s=decodeURIComponent(s)}catch{}switch(n){case"kw":e=s;break;case"engine":t=s;break;case"self":r=s;break}}),e&&(M.searchJumperInputKeyWords.value=e||""),t&&M.searchBySiteName(t,{},!!r)}if(_(document).style.cssText=`
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
                `,c.prefConfig.bgUrl&&(_e=c.prefConfig.bgUrl,_e.length)){_(document).style.backgroundImage=`url("${_e}")`;return}U.getItem("allPageBg",l=>{l?(_e=l.url,_(document).style.backgroundImage=`url("${l.base64||_e}")`):l={url:""},Be({method:"GET",url:"https://global.bing.com/HPImageArchive.aspx?format=js&idx=0&pid=hp&video=1&n=1",onload:function(e){var t=null;try{t=JSON.parse(e.responseText);var r=t.images[0].url;if(/^https?:\/\//.test(r)||(r="https://global.bing.com"+r),_e=r,r==l.url)return;Be({method:"GET",url:r,responseType:"blob",onload:function(i){var a=i.response,n=new FileReader;n.readAsDataURL(a),n.onload=function(s){var o=s.target.result;l={url:r,base64:o},U.setItem("allPageBg",l)}}}),l.base64||(_(document).style.backgroundImage=`url("${r}")`)}catch(i){console.log(i)}}})})}}async function Dr(){await M.initRun(),Ir(),Wr()}async function Ae(l){await new Promise(e=>{setTimeout(()=>{e()},l)})}async function Jr(){let l=await new Promise(e=>{U.getItem("searchData",t=>{e(t)})});Ee=await new Promise(e=>{U.getItem("cacheKeywords",t=>{e(t||"")})}),vt=await new Promise(e=>{U.getItem("cacheFilter",t=>{e(t||"")})}),ci=await new Promise(e=>{U.getItem("disableState",t=>{e(t||!1)})}),tt=await new Promise(e=>{U.getItem("tipsStorage",t=>{e(t||[])})}),kt=await new Promise(e=>{U.getItem("lastSign",t=>{e(t||!1)})}),U.setItem("lastSign",!1),Ge=await U.getListItem("inPagePostParams",location.hostname),be=await new Promise(e=>{U.getItem("cacheIcon",t=>{e(t||{})})}),Ve=await new Promise(e=>{U.getItem("historySites",t=>{e(t||[])})}),It=await new Promise(e=>{U.getItem("historyType",t=>{e(t||"")})}),Le=await new Promise(e=>{U.getItem("sortTypeNames",t=>{e(t||{})})}),Pe=await new Promise(e=>{U.getItem("sortSiteNames",t=>{e(t||{})})}),Ne=await new Promise(e=>{U.getItem("globalInPageWords",t=>{e(t||"")})}),Ye=await new Promise(e=>{U.getItem("navEnable",t=>{e(typeof t>"u"?!0:t)})}),Ht=await new Promise(e=>{U.getItem("referrer",t=>{e(t||"")})}),pi=await new Promise(e=>{U.getItem("clickLink",t=>{e(t||"")})}),Ot=await new Promise(e=>{U.getItem("disableHighlight",t=>{e(t||"")})}),Ri=await new Promise(e=>{U.getItem("lastHighlight",t=>{e(t||"")})}),Hi=await new Promise(e=>{U.getItem("allPageNewMode",t=>{e(t||!1)})}),hi=await new Promise(e=>{U.getItem("lastAddType",t=>{e(t||"")})}),l&&(c=l,Et=c.lastModified),c.lastModified||(c.sitesConfig=sitesConfig),c.prefConfig.lang&&c.prefConfig.lang!="0"&&(Fe=c.prefConfig.lang),Di(),c.prefConfig.firstRun&&U.supportCrossSave()&&(c.prefConfig.firstRun=!1,U.setItem("searchData",c),setTimeout(()=>{U.getItem("searchData",e=>{e.prefConfig.firstRun===!1&&ge($i,{active:!0,insert:!0})})},100)),typeof c.prefConfig.customSize>"u"&&(c.prefConfig.customSize=100),typeof c.prefConfig.tilesZoom>"u"&&(c.prefConfig.tilesZoom=100),typeof c.prefConfig.tipsZoom>"u"&&(c.prefConfig.tipsZoom=100),typeof c.prefConfig.typeOpenTime>"u"&&(c.prefConfig.typeOpenTime=250),typeof c.prefConfig.longPressTime>"u"&&(c.prefConfig.longPressTime=500),typeof c.prefConfig.cacheSwitch>"u"&&(c.prefConfig.cacheSwitch=!1),typeof c.prefConfig.noIcons>"u"&&(c.prefConfig.noIcons=!1),typeof c.prefConfig.noAni>"u"&&(c.prefConfig.noAni=!1),typeof c.prefConfig.quickAddRule>"u"&&(c.prefConfig.quickAddRule=!0),typeof c.prefConfig.multiline>"u"&&(c.prefConfig.multiline=2),typeof c.prefConfig.multilineGap>"u"&&(c.prefConfig.multilineGap=1e3),typeof c.prefConfig.historyLength>"u"&&(c.prefConfig.historyLength=0),typeof c.prefConfig.dragToSearch>"u"&&(c.prefConfig.dragToSearch=!0),typeof c.prefConfig.firstFiveWordsColor>"u"&&(c.prefConfig.firstFiveWordsColor=[]),typeof c.prefConfig.inPageWordsStyles>"u"&&(c.prefConfig.inPageWordsStyles=[]),typeof c.prefConfig.rightMouse>"u"&&(c.prefConfig.rightMouse=!0),typeof c.prefConfig.mouseLeaveToHide>"u"&&(c.prefConfig.mouseLeaveToHide=!0),typeof c.prefConfig.currentTypeFirst>"u"&&(c.prefConfig.currentTypeFirst=!0),typeof c.prefConfig.disableAddon>"u"&&(c.prefConfig.disableAddon={}),typeof c.prefConfig.suggestType>"u"&&(Fe==="zh-CN"?c.prefConfig.suggestType="baidu":c.prefConfig.suggestType="google"),typeof c.prefConfig.syncBuild>"u"&&(c.prefConfig.syncBuild=!0),c.prefConfig.minSizeMode&&(c.prefConfig.disableAutoOpen=!1,c.prefConfig.disableTypeOpen=!1),c.prefConfig.configPage?Qe=c.prefConfig.configPage:c.prefConfig.configPage=Qe}function ii(l,e){return l==="*"||l.length==0&&e.length==0?!0:l.length>1&&l[0]=="*"&&e.length==0?!1:l.length>1&&l[0]=="?"||l.length!=0&&e.length!=0&&l[0]==e[0]?ii(l.substring(1),e.substring(1)):l.length>0&&l[0]=="*"?ii(l.substring(1),e)||ii(l,e.substring(1)):!1}if(de.indexOf("#searchJumperMin")!=-1)if(Fi=!0,de.indexOf("#searchJumperMinPost")!=-1)window.history.replaceState(null,"",de.replace(/#searchJumperMin(Post)?/,""));else{if(de.indexOf("#searchJumperMinMobile")!=-1){Object.defineProperty(Object.getPrototypeOf(navigator),"userAgent",{get:function(){return Ai}}),Be({method:"GET",url:location.href,headers:{referer:location.href,"User-Agent":Ai},onload:function(l){document.open(),document.write(l.response),document.close()},onerror:function(){},ontimeout:function(){}});return}window.history.replaceState(null,"",location.href.replace(/#searchJumperMin(Mobile)?/,""))}if(document.title=="SearchJumper Multi")return;var nr=!1,ki,Ii,bt;async function ji(l){if(nr){l&&l();return}if(nr=!0,jr(),await Jr(),!ci){if(c.prefConfig.blacklist&&c.prefConfig.blacklist.length>0){let e=!1;for(let t=0;t<c.prefConfig.blacklist.length;t++){let r=c.prefConfig.blacklist[t];if(r&&r.indexOf("//")!=0){if(e){/\*\/$/.test(r)&&(e=!1);continue}if(r.indexOf("/*")==0){e=!0;continue}if(r.indexOf("/")==0){let i=r.match(/^\/(.*)\/(\w*)$/);if(i&&new RegExp(i[1],i[2]).test(de))return}else if(ii(r,de))return}}}$r(),await Lr(),Ar(),Dr(),l&&l(),bt=document.title}}function zr(){if(document.hidden){if(M)M.closeShowAll();else return;if(!c.prefConfig.globalSearchNow)return;ki=setInterval(async()=>{let l=Ne;Ne=await U.getItem("globalInPageWords"),(l||"")!=(Ne||"")&&(M.refreshPageWords(),M.navMarks.innerHTML&&(clearInterval(ki),clearInterval(Ii),bt=document.title,Ii=setInterval(()=>{document.title=document.title==bt?"\u{1F6A9}":bt},500)))},parseInt(500+Math.random()*500));return}ji(async()=>{(nt||c.prefConfig.syncBuild)&&(c=await U.getItem("searchData"),M&&c.lastModified&&Et!=c.lastModified&&(M.refreshEngines(),document.dispatchEvent(new Event("dataChanged"))));let l=Ne||"";U.getItem("globalInPageWords",t=>{Ne=t||"",l!=Ne&&M&&M.refreshPageWords()});let e=Ye||!1;U.getItem("navEnable",t=>{Ye=typeof t>"u"?!0:t,e!=Ye&&M&&M.refreshNav()})})}var Ei=!1;function Rr(){!document.head||!_(document)||Ct||ci||(c.prefConfig.globalSearchNow&&(clearInterval(ki),clearInterval(Ii),document.hidden?bt=document.title:bt&&(document.title=bt)),!Ei&&(Ei=!0,setTimeout(()=>{zr(),Ei=!1},500)))}U.getItem("postUrl",l=>{if(l&&l[0].indexOf(location.hostname.replace(/.*\.(\w+\.\w+)/,"$1"))!=-1)U.setItem("postUrl",""),gi(l[1],l[0],"_self");else{if(document.head&&_(document))ji();else{let e=()=>{document.head&&_(document)?ji():setTimeout(()=>{e()},10)};e()}document.addEventListener("visibilitychange",Rr)}})}if(document&&document.documentElement)Wi();else{let Fe=()=>{document&&document.documentElement?Wi():setTimeout(()=>{Fe()},10)};Fe()}})();
