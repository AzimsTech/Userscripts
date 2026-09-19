// ==UserScript==
// @name		FrankerFaceZ
// @namespace	FrankerFaceZ
//
// @version		1.59.2
// @downloadURL	https://cdn2.frankerfacez.com/script/ffz_injector.user.js
//
// @homepageURL	https://www.frankerfacez.com/
// @icon		https://cdn.frankerfacez.com/script/icon32.png
// @icon64		https://cdn.frankerfacez.com/script/icon64.png
//
// @include		http://twitch.tv/*
// @include		https://twitch.tv/*
// @include		http://*.twitch.tv/*
// @include		https://*.twitch.tv/*
//
// @exclude		http://api.twitch.tv/*
// @exclude		https://api.twitch.tv/*
//
// @grant		unsafeWindow
// @grant		GM.setValue
// @grant		GM.getValue
// @grant		GM.getValues
// @grant		GM.deleteValue
// @grant		GM.deleteValues
// @grant		GM.listValues
// @grant		GM_addValueChangeListener
// @grant		GM_removeValueChangeListener
// @run-at		document-end
// ==/UserScript==
function ffz_provider_init(){if("wrappedJSObject"in window){console.warn("FFZ: Firefox xray vision isolation detected. Settings provider will not be registered.");return}try{if(typeof GM.listValues!="function")return}catch{console.warn("FFZ: Unable to access user-script storage API. Settings provider will not be registered.");return}let s;try{s=unsafeWindow.ffz_providers=unsafeWindow.ffz_providers||[]}catch{console.warn("FFZ: Unable to access unsafeWindow. Settings provider will not be registered.");return}s.push(r=>{class n extends r.Provider{static priority=20;static title="User-Script Storage";static description="User-script managers provider a mechanism for user-scripts to store data.";static supported(){return!0}static crossOrigin(){return!0}static hasContent(){const e=r.IGNORE_CONTENT_KEYS||[];return GM.listValues().then(t=>Array.isArray(t)&&t.filter(i=>i!=="--sync--"&&!e.includes(i)).length>0)}constructor(e){super(e),this._cached=new Map,this.loadAllValues(),this._boundHandleMessage=this.handleMessage.bind(this),this._handler_id=GM_addValueChangeListener("--sync--",this._boundHandleMessage)}broadcastTransfer(){this.broadcast({type:"change-provider"})}removeListeners(){this._handler_id!=null&&(GM_removeValueChangeListener(this._handler_id),this._boundHandleMessage=this._handler_id=null)}disableEvents(){this.removeListeners(),this.broadcast=()=>{},this.emit=()=>{}}destroy(){this.disable(),this._cached.clear()}disable(){this.removeListeners(),this.disabled=!0}flush(){}broadcast(e){this._handler_id!=null&&GM.setValue("--sync--",{...e,t:Date.now()})}awaitReady(){return this.ready?Promise.resolve():(this._ready_promise||(this._ready_promise=new Promise(e=>{this._resolve_ready=e})),this._ready_promise)}async loadAllValues(){const e=await GM.listValues(),t=await GM.getValues(e);for(const[i,l]of Object.entries(t))i!=="--sync--"&&this._cached.set(i,l);this.ready=!0,this._resolve_ready&&(this._resolve_ready(),this._resolve_ready=null)}async handleMessage(e,t,i,l){if(this.disabled||!i||!l)return;const{type:o,key:a}=i;if(this.manager.log.debug("storage broadcast event",o,a),o==="change-provider")this.manager.log.info("Received notice of changed settings provider."),this.emit("change-provider"),this.disable(),this.disableEvents();else if(o==="set"){const c=await GM.getValue(a);this._cached.set(a,c),this.emit("changed",a,c,!1)}else if(o==="delete")this._cached.delete(a),this.emit("changed",a,void 0,!0);else if(o==="clear"){const c=Array.from(this._cached.keys());this._cached.clear();for(const h of c)this.emit("changed",h,void 0,!0)}}get(e,t){return this._cached.has(e)?this._cached.get(e):t}set(e,t){if(!this.disabled){if(t===void 0){this.has(e)&&this.delete(e);return}this._cached.set(e,t),GM.setValue(e,t).then(()=>this.broadcast({type:"set",key:e})).catch(i=>{this.manager&&this.manager.log.error(`An error occurred while trying to save a value to user-script storage for key "${e}"`)}),this.emit("set",e,t,!1)}}delete(e){this.disabled||(this._cached.delete(e),GM.deleteValue(e).then(()=>this.broadcast({type:"delete",key:e})),this.emit("set",e,void 0,!0))}has(e){return this._cached.has(e)}keys(){return this._cached.keys()}clear(){if(this.disabled)return;const e=this._cached;this._cached=new Map;for(const t of e.keys())GM.deleteValue(t),this.emit("changed",t,void 0,!0);this.broadcast({type:"clear"})}entries(){return this._cached.entries()}get size(){return this._cached.size}}r.registerProvider("userscript",n)})}async function ffz_init(){const s=document.createElement("script");if(s.id="ffz_script",s.type="text/javascript",s.src=`//cdn2.frankerfacez.com/script/script.min.js?_=${Date.now()}`,localStorage.ffzDebugMode=="true"){let r;try{r=await fetch("//localhost:8000/dev_server").then(n=>n.ok?n.json():null).catch(()=>null)}catch{r=null}r?(console.log(`FFZ: Development Server is present. Version ${r.version} running from: ${r.path}`),s.src=`//localhost:8000/script/script.js?_=${Date.now()}`,document.body.classList.add("ffz-dev")):console.log("FFZ: Development Server is not present. Using CDN.")}ffz_provider_init(),document.head.appendChild(s)}async function ffz_extension_check(){try{const s=unsafeWindow.ffz,r=unsafeWindow.FrankerFaceZ;if(!s||!r?.utilities?.constants?.EXTENSION)return;const n=await s.resolve("settings").awaitProvider(),d=n.get("us-extension-warning",0);if(d&&Date.now()-d<1e3*60*60*24*30)return;n.set("us-extension-warning",Date.now()),s.resolve("site.menu_button").addToast({icon:"ffz-i-zreknarf",title:"User-Script Conflict",title_i18n:"user-script.conflict.title",text:"You have both the FrankerFaceZ browser extension and user-script installed. You should disable the browser extension to avoid conflicts and ensure you always receive the latest version of FFZ.",text_i18n:"user-script.conflict.text"})}catch(s){console.error(s)}}ffz_init(),setTimeout(ffz_extension_check,5e3);
