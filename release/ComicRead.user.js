// ==UserScript==
// @name            ComicRead
// @namespace       ComicRead
// @version         12.1.2
// @author          hymbz
// @license         AGPL-3.0-or-later
// @noframes
// @match           *://*/*
// @connect         yamibo.com
// @connect         dmzj.com
// @connect         idmzj.com
// @connect         exhentai.org
// @connect         e-hentai.org
// @connect         hath.network
// @connect         nhentai.net
// @connect         gold-usergeneratedcontent.net
// @connect         hypergryph.com
// @connect         mangabz.com
// @connect         2025copy.com
// @connect         mangacopy.com
// @connect         copy20.com
// @connect         mangacopy.com
// @connect         xsskc.com
// @connect         schale.network
// @connect         touhou.ai
// @connect         jsdelivr.net
// @connect         npmmirror.com
// @connect         self
// @connect         127.0.0.1
// @connect         *
// @grant           GM_addElement
// @grant           GM_getResourceText
// @grant           GM_xmlhttpRequest
// @grant           GM.addValueChangeListener
// @grant           GM.removeValueChangeListener
// @grant           GM.getResourceText
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM.listValues
// @grant           GM.deleteValue
// @grant           GM.registerMenuCommand
// @grant           GM.unregisterMenuCommand
// @grant           unsafeWindow
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACBUExURUxpcWB9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i2B9i////198il17idng49DY3PT297/K0MTP1M3X27rHzaCxupmstbTByK69xOfr7bfFy3WOmqi4wPz9/X+XomSBjqW1vZOmsN/l6GmFkomeqe7x8vn6+kv+1vUAAAAOdFJOUwDsAoYli9zV+lIqAZEDwV05SQAAAUZJREFUOMuFk+eWgjAUhGPBiLohjZACUqTp+z/gJkqJy4rzg3Nn+MjhwB0AANjv4BEtdITBHjhtQ4g+CIZbC4Qb9FGb0J4P0YrgCezQqgIA14EDGN8fYz+f3BGMASFkTJ+GDAYMUSONzrFL7SVvjNQIz4B9VERRmV0rbJWbrIwidnsd6ACMlEoip3uad3X2HJmqb3gCkkJELwk5DExRDxA6HnKaDEPSsBnAsZoANgJaoAkg12IJqBiPACImXQKF9IDULIHUkOk7kDpeAMykHqCEWACy8ACdSM7LGSg5F3HtAU1rrkaK9uGAshXS2lZ5QH/nVhmlD8rKlmbO3ZsZwLe8qnpdxJRnLaci1X1V5R32fjd5CndVkfYdGpy3D+htU952C/ypzPtdt3JflzZYBy7fi/O1euvl/XH1Pp+Cw3/1P1xOZwB+AWMcP/iw0AlKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC
// @resource        solid-js https://registry.npmmirror.com/solid-js/1.9.8/files/dist/solid.cjs
// @resource        fflate https://registry.npmmirror.com/fflate/0.8.2/files/umd/index.js
// @resource        jsqr https://registry.npmmirror.com/jsqr/1.4.0/files/dist/jsQR.js
// @resource        comlink https://registry.npmmirror.com/comlink/4.4.2/files/dist/umd/comlink.min.js
// @resource        dmzjDecrypt https://update.sleazyfork.org/scripts/467177/1207199/dmzjDecrypt.js
// @resource        solid-js|store https://registry.npmmirror.com/solid-js/1.9.8/files/store/dist/store.cjs
// @resource        solid-js|web https://registry.npmmirror.com/solid-js/1.9.8/files/web/dist/web.cjs
// @resource        _tensorflow|tfjs https://registry.npmmirror.com/@tensorflow/tfjs/4.22.0/files/dist/tf.min.js
// @resource        _tensorflow|tfjs-backend-webgpu https://registry.npmmirror.com/@tensorflow/tfjs-backend-webgpu/4.22.0/files/dist/tf-backend-webgpu.js
// @supportURL      https://github.com/hymbz/ComicReadScript/issues
// @downloadURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/ComicRead.user.js
// @updateURL https://raw.githubusercontent.com/AzimsTech/Userscripts/release/release/ComicRead.meta.js
// ==/UserScript==
let supportWorker=typeof Worker<"u";const gmApi={GM,GM_addElement:typeof GM_addElement>"u"?void 0:GM_addElement,GM_getResourceText,GM_xmlhttpRequest,unsafeWindow},gmApiList=Object.keys(gmApi),crsLib={process:{env:{NODE_ENV:"production"}},...gmApi},tempName=Math.random().toString(36).slice(2),getResource=t=>{const o=GM_getResourceText(t.replaceAll("/","|").replaceAll("@","_"));if(!o)throw new Error(`\u5916\u90E8\u6A21\u5757 ${t} \u672A\u5728 @Resource \u4E2D\u58F0\u660E`);return t==="@tensorflow/tfjs-backend-webgpu"?o.replace("@tensorflow/tfjs-core","@tensorflow/tfjs"):o},evalCode=t=>{if(t){if(gmApi.GM_addElement)return GM_addElement("script",{textContent:t})?.remove();eval.call(unsafeWindow,t)}},selfImportSync=t=>{let o;switch(t){case"helper/languages":o=`
const langList = ['zh', 'en', 'ru'];
/** \u5224\u65AD\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u662F\u5426\u662F\u652F\u6301\u7684\u8BED\u8A00\u7C7B\u578B\u4EE3\u7801 */
const isLanguages = lang => Boolean(lang) && langList.includes(lang);

/** \u8FD4\u56DE\u6D4F\u89C8\u5668\u504F\u597D\u8BED\u8A00 */
const getBrowserLang = () => {
  for (const language of navigator.languages) {
    const matchLang = langList.find(l => l === language.split('-')[0]);
    if (matchLang) return matchLang;
  }
};
const getSaveLang = () => typeof GM === 'undefined' ? localStorage.getItem('@Languages') : GM.getValue('@Languages');
const setSaveLang = val => typeof GM === 'undefined' ? localStorage.setItem('@Languages', val) : GM.setValue('@Languages', val);
const getInitLang = async () => {
  const saveLang = await getSaveLang();
  if (isLanguages(saveLang)) return saveLang;
  const lang = getBrowserLang() ?? 'zh';
  setSaveLang(lang);
  return lang;
};

exports.getInitLang = getInitLang;
exports.isLanguages = isLanguages;
exports.langList = langList;
exports.setSaveLang = setSaveLang;
`;break;case"helper":o=`
const web = require('solid-js/web');
const solidJs = require('solid-js');
const languages = require('helper/languages');
const store = require('solid-js/store');

const getDom = id => {
  let dom = document.getElementById(id);
  if (dom) {
    dom.innerHTML = '';
    return dom;
  }
  dom = document.createElement('div');
  dom.id = id;
  document.body.append(dom);
  return dom;
};

/** \u6302\u8F7D solid-js \u7EC4\u4EF6 */
const mountComponents = (id, fc) => {
  const dom = getDom(id);
  dom.style.setProperty('display', 'unset', 'important');
  const shadowDom = dom.attachShadow({
    mode: 'closed'
  });
  web.render(fc, shadowDom);
  return dom;
};

class FaviconProgress {
  constructor(color = '#607D8B') {
    this.color = color;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 32;
    this.canvas.height = 32;
    this.ctx = this.canvas.getContext('2d');
    const existingLink = document.querySelector("link[rel~='icon']");
    if (existingLink) this.link = existingLink;else {
      const link = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'icon';
      document.head.append(link);
      this.link = link;
    }
    this.initLink = this.link.href || '/favicon.ico';
  }
  update(progress) {
    this.ctx.clearRect(0, 0, 32, 32);

    // \u7ED8\u5236\u80CC\u666F
    this.ctx.beginPath();
    this.ctx.arc(16, 16, 16, 0, Math.PI * 2);
    this.ctx.fillStyle = '#FAFAFA';
    this.ctx.fill();

    // \u7ED8\u5236\u8FDB\u5EA6\u6247\u5F62
    const startAngle = -Math.PI / 2;
    const endAngle = Math.PI * 2 * progress + startAngle;
    this.ctx.beginPath();
    this.ctx.moveTo(16, 16);
    this.ctx.arc(16, 16, 16, startAngle, endAngle);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.updateFavicon();
  }
  updateFavicon() {
    if (!this.link || !this.canvas) return;
    this.link.href = this.canvas.toDataURL('image/png');
  }

  /** \u6062\u590D\u9ED8\u8BA4\u56FE\u6807 */
  recover() {
    if (!this.link || !this.initLink) return;
    this.link.href = this.initLink;
  }
}
const useFaviconProgress = () => {
  //
};

const en = {alert:{comic_load_error:"Comic loading error",download_failed:"Download failed",fetch_comic_img_failed:"Failed to fetch comic images",img_load_failed:"Image loading failed",no_img_download:"No images available for download",repeat_load:"Loading image, please wait",retry_get_img_url:"Retrieve the URL of the image on page {{i}} again",server_connect_failed:"Unable to connect to the server"},button:{auto_scroll:"Auto scroll",close_current_page_translation:"Close translation of the current page",download_completed:"Download completed",download_completed_error:"Download complete, but {{errorNum}} images failed to download",downloading:"Downloading",fullscreen:"Fullscreen",fullscreen_exit:"Exit Fullscreen",grid_mode:"Grid mode",packaging:"Packaging",page_fill:"Page fill",page_mode_double:"Double page mode",page_mode_single:"Single page mode",scroll_mode:"Scroll mode",translate_current_page:"Translate current page",zoom_in:"Zoom in",zoom_out:"Zoom out"},description:"Add enhanced features to the comic site for optimized experience, including dual-page reading and translation.",eh_tag_lint:{combo:"[tag]: In most cases, Should coexist with [tag]",conflict:"[tag]: Should not coexist with [tag]",correct_tag:"Should be the correct tag",miss_female:"Missing male tag, might need",miss_parody:"Missing parody tag, might need",possible_conflict:"[tag]: In most cases, Should not coexist with [tag]",prerequisite:"[tag]: The prerequisite tag [tag] does not exist"},end_page:{next_button:"Next chapter",prev_button:"Prev chapter",tip:{end_jump:"Reached the last page, scrolling down will jump to the next chapter",exit:"Reached the last page, scrolling down will exit",start_jump:"Reached the first page, scrolling up will jump to the previous chapter"}},hotkeys:{enter_read_mode:"Enter reading mode",float_tag_list:"Floating tag list",jump_to_end:"Jump to the last page",jump_to_home:"Jump to the first page",page_down:"Turn the page to the down",page_up:"Turn the page to the up",repeat_tip:"This hotkey has been bound to \\"{{hotkey}}\\"",scroll_down:"Scroll down",scroll_left:"Scroll left",scroll_right:"Scroll right",scroll_up:"Scroll up",switch_auto_enlarge:"Switch auto image enlarge option",switch_dir:"Switch reading direction",switch_grid_mode:"Switch grid mode",switch_page_fill:"Switch page fill",switch_scroll_mode:"Switch scroll mode",switch_single_double_page_mode:"Switch single/double page mode"},img_status:{error:"Load Error",loading:"Loading",wait:"Waiting for load"},other:{auto:"Auto",disable:"Disable",distance:"distance",download:"Download",enabled:"Enabled",enter_comic_read_mode:"Enter comic reading mode",exit:"Exit",fab_hidden:"Hide floating button",fab_show:"Show floating button",fill_page:"Fill Page",hotkeys:"Hotkeys",img_loading:"Image loading",interval:"interval",loading_img:"Loading image",none:"None",or:"or",other:"Other",page_range:"Please enter the page range.:\\n (e.g., 1, 3-5, 9-)",read_mode:"Reading mode",setting:"Settings"},pwa:{alert:{img_data_error:"Image data error",img_not_found:"Image not found",img_not_found_files:"Please select an image file or a compressed file containing image files",img_not_found_folder:"No image files or compressed files containing image files in the folder",not_valid_url:"Not a valid URL",repeat_load:"Loading other files\u2026",unzip_error:"Decompression error",unzip_password_error:"Decompression password error",userscript_not_installed:"ComicRead userscript not installed"},button:{enter_url:"Enter URL",install:"Install",no_more_prompt:"Do not prompt again",resume_read:"Restore reading",select_files:"Select File",select_folder:"Select folder"},install_md:"### Tired of opening this webpage every time?\\nIf you wish to:\\n1. Have an independent window, as if using local software\\n1. Add to the local compressed file opening method for easy direct opening\\n1. Use offline\\n### Welcome to install this page as a PWA app on your computer\u{1F603}\u{1F44D}",message:{enter_password:"Please enter your password",unzipping:"Unzipping"},tip_enter_url:"Please enter the URL of the compressed file",tip_md:"# ComicRead PWA\\nRead **local** comics using [ComicRead](https://github.com/hymbz/ComicReadScript) reading mode.\\n---\\n### Drag and drop image files, folders, or compressed files directly to start reading\\n*You can also choose to **paste directly** or **enter** the URL of the compressed file for downloading and reading*"},setting:{hotkeys:{add:"Add new hotkeys",restore:"Restore default hotkeys"},language:"Language",option:{abreast_duplicate:"Column duplicates ratio",abreast_mode:"Abreast scroll mode",always_load_all_img:"Always load all images",autoFullscreen:"Auto fullscreen",autoHiddenMouse:"Auto hide mouse",auto_scroll_trigger_end:"Continue scrolling on the end page",auto_switch_page_mode:"Auto switch single/double page mode by aspect ratio",background_color:"Background Color",click_page_turn_area:"Touch area",click_page_turn_enabled:"Click to turn page",click_page_turn_swap_area:"Swap LR clickable areas",dark_mode:"Dark mode",dark_mode_auto:"Dark mode follow system",dir_ltr:"LTR (American comics)",dir_rtl:"RTL (Japanese manga)",disable_auto_enlarge:"Disable automatic image enlarge",first_page_fill:"Enable first page fill by default",fit_to_width:"Fit to width",img_recognition:"Image Recognition",img_recognition_background:"Recognition background color",img_recognition_pageFill:"Auto switch page fill",img_recognition_warn:"\u2757 The current browser does not support Web Workers. Enabling this feature may cause page lag. It's recommended to upgrade or switch browsers.",img_recognition_warn_2:"\u2757 The current website does not support Web Workers. Enabling this feature may cause page lag.",paragraph_appearance:"Appearance",paragraph_dir:"Reading direction",paragraph_display:"Display",paragraph_scrollbar:"Scrollbar",paragraph_translation:"Translation",preload_page_num:"Preload page number",scroll_end:"After reaching the End",scroll_end_auto:"First jump to previous/next chapter, else exit",scroll_mode_img_scale:"Scroll mode image zoom ratio",scroll_mode_img_spacing:"Scroll mode image spacing",scrollbar_auto_hidden:"Auto hide",scrollbar_easy_scroll:"Easy scroll",scrollbar_position:"position",scrollbar_position_bottom:"Bottom",scrollbar_position_hidden:"Hidden",scrollbar_position_right:"Right",scrollbar_position_top:"Top",scrollbar_show_img_status:"Show image loading status",show_clickable_area:"Show clickable areas",show_comments:"Show comments on the end page",swap_page_turn_key:"Swap LR page-turning keys",zoom:"Image zoom ratio"},translation:{cotrans_tip:"<p>Using the interface provided by <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> to translate images, which is maintained by its maintainer at their own expense.</p>\\n<p>When multiple people use it at the same time, they need to queue and wait. If the waiting queue reaches its limit, uploading new images will result in an error. Please try again after a while.</p>\\n<p>So please <b>mind the frequency of use</b>.</p>\\n<p>It is highly recommended to use your own locally deployed project, as it does not consume server resources and does not require queuing.</p>",options:{box_threshold:"Box threshold",detection_resolution:"Text detection resolution",direction:"Render text orientation",direction_auto:"Follow source",direction_horizontal:"Horizontal only",direction_vertical:"Vertical only",force_retry:"Force retry (ignore cache)",inpainter:"Inpainter",inpainting_size:"Inpainting size",local_url:"customize server URL",mask_dilation_offset:"Mask dilation offset",only_download_translated:"Download only the translated images",target_language:"Target language",text_detector:"Text detector",translator:"Translator",unclip_ratio:"Unclip ratio"},range:"Scope of Translation",server:"Translation server",server_selfhosted:"Selfhosted",translate_all:"Translate all images",translate_to_end:"Translate the current page to the end"}},site:{add_feature:{add_hotkeys_actions:"Add hotkeys actions",auto_adjust_option:"Auto adjust reading option",auto_page_turn:"Infinite scroll",auto_show:"Auto enter reading mode",block_totally:"Totally block comics",colorize_tag:"Colorize tags",cross_site_link:"Cross-site Link",detect_ad:"Detect advertise page",expand_tag_list:"Expand tag list",float_tag_list:"Floating tag list",load_original_image:"Load original image",lock_option:"Lock site option",open_link_new_page:"Open links in a new page",quick_favorite:"Quick favorite",quick_rating:"Quick rating",quick_tag_define:"Quick view tag define",remember_current_site:"Remember the current site",tag_lint:"Tag Lint"},changed_load_failed:"The website has undergone changes, unable to load comics",ehentai:{change_favorite_failed:"Failed to change the favorite",change_favorite_success:"Successfully changed the favorite",change_rating_failed:"Failed to change the rating",change_rating_success:"Successfully changed the rating",fetch_favorite_failed:"Failed to get favorite info",fetch_img_page_source_failed:"Failed to get the source code of the image page",fetch_img_page_url_failed:"Failed to get the image page address from the detail page",fetch_img_url_failed:"Failed to get the image address from the image page",hitomi_error:"hitomi matching error",html_changed_link_failed:"The page structure has changed, and the associated external site features are not functioning properly",ip_banned:"IP address is banned",nhentai_error:"nhentai matching error",nhentai_failed:"Matching failed, please refresh after confirming login to {{nhentai}}"},nhentai:{fetch_next_page_failed:"Failed to get next page of comic data",tag_blacklist_fetch_failed:"Failed to fetch tag blacklist"},show_settings_menu:"Show settings menu",simple:{auto_read_mode_message:"\\"Auto enter reading mode\\" is enabled by default",no_img:"No suitable comic images were found.\\nIf necessary, you can click here to close the simple reading mode.",simple_read_mode:"Enter simple reading mode"}},touch_area:{menu:"Menu",next:"Next Page",prev:"Prev Page",type:{edge:"Edge",l:"L",left_right:"Left Right",up_down:"Up Down"}},translation:{status:{colorizing:"Colorizing","default":"Unknown status",detection:"Detecting text",downscaling:"Downscaling",error:"Error during translation","error-lang":"The target language is not supported by the chosen translator","error-translating":"Did not get any text back from the text translation service","error-with-id":"Error during translation",finished:"Finishing",inpainting:"Inpainting","mask-generation":"Generating mask",ocr:"Scanning text",pending:"Pending","pending-pos":"Pending",preparing:"Waiting for idle window",rendering:"Rendering",saved:"Saved","skip-no-regions":"No text regions detected in the image","skip-no-text":"No text detected in the image",textline_merge:"Merging text lines",translating:"Translating",upscaling:"Upscaling"},tip:{check_img_status_failed:"Failed to check image status",download_img_failed:"Failed to download image",get_translator_list_error:"Error occurred while getting the list of available translation services",id_not_returned:"No id returned",img_downloading:"Downloading images",img_not_fully_loaded:"Image has not finished loading",pending:"Pending, {{pos}} in queue",resize_img_failed:"Failed to resize image",translating:"Translating image",translation_completed:"Translation completed",upload:"Uploading image",upload_error:"Image upload error",upload_return_error:"Error during server translation",wait_translation:"Waiting for translation"},translator:{baidu:"baidu",deepl:"DeepL",google:"Google","gpt3.5":"GPT-3.5",none:"Remove texts",offline:"offline translator",original:"Original",youdao:"youdao"}},upscale:{module_download_complete:"Image Upscaling Model Download Complete",module_download_failed:"Image Upscaling Model Download Failed",module_downloading:"Image Upscaling Model Downloading...",title:"Upscale Image",upscaled:"upscaled",upscaling:"upscaling",webgpu_tip:"Unable to upscale images using WebGPU, processing will be slower"}};

const ru = {alert:{comic_load_error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0438\u043A\u0441\u0430",download_failed:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",fetch_comic_img_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",img_load_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",no_img_download:"\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",repeat_load:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435",retry_get_img_url:"\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 {{i}}",server_connect_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443"},button:{auto_scroll:"\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430",close_current_page_translation:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",download_completed:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",download_completed_error:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430, \u043D\u043E {{errorNum}} \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",downloading:"\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435",fullscreen:"\u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439",fullscreen_exit:"\u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430",grid_mode:"\u0420\u0435\u0436\u0438\u043C \u0441\u0435\u0442\u043A\u0438",packaging:"\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430",page_fill:"\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",page_mode_double:"\u0414\u0432\u0443\u0445\u0447\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",page_mode_single:"\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",scroll_mode:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438",translate_current_page:"\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",zoom_in:"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C",zoom_out:"\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C"},description:"\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u0434\u0432\u0443\u0445\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434.",eh_tag_lint:{combo:"[\u0442\u0435\u0433]: \u0412 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 [\u0442\u0435\u0433\u043E\u043C]",conflict:"[tag]: \u041D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 [tag]",correct_tag:"\u0414\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u0433",miss_female:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u0443\u0436\u0441\u043A\u043E\u0439 \u0442\u0435\u0433, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F",miss_parody:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0435\u0433 \u043F\u0430\u0440\u043E\u0434\u0438\u0438, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F",possible_conflict:"[tag]: \u0412 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 [tag]",prerequisite:"[tag]: \u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u0433 [tag] \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"},end_page:{next_button:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430",prev_button:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430",tip:{end_jump:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430 \u043D\u0438\u0436\u0435",exit:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0438\u0436\u0435 \u043A\u043E\u043C\u0438\u043A\u0441 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043A\u0440\u044B\u0442",start_jump:"\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u0432\u044B\u0448\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430"}},hotkeys:{enter_read_mode:"\u0420\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F",float_tag_list:"\u041F\u043B\u0430\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0433\u043E\u0432",jump_to_end:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",jump_to_home:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0435\u0440\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",page_down:"\u041F\u0435\u0440\u0435\u043B\u0438\u0441\u0442\u043D\u0443\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432\u043D\u0438\u0437",page_up:"\u041F\u0435\u0440\u0435\u043B\u0438\u0441\u0442\u043D\u0443\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432\u0432\u0435\u0440\u0445",repeat_tip:"\u042D\u0442\u0430 \u0433\u043E\u0440\u044F\u0447\u0430\u044F \u043A\u043B\u0430\u0432\u0438\u0448\u0430 \u0431\u044B\u043B\u0430 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u043D\u0430 \\"{{hotkey}}\\"",scroll_down:"\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u0437",scroll_left:"\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u043B\u0435\u0432\u043E",scroll_right:"\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0435 \u0432\u043F\u0440\u0430\u0432\u043E",scroll_up:"\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0435 \u0432\u0432\u0435\u0440\u0445",switch_auto_enlarge:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0438\u0431\u043B\u0438\u0436\u0435\u043D\u0438\u0435",switch_dir:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0447\u0442\u0435\u043D\u0438\u044F",switch_grid_mode:"\u0420\u0435\u0436\u0438\u043C \u0441\u0435\u0442\u043A\u0438",switch_page_fill:"\u0417\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",switch_scroll_mode:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438",switch_single_double_page_mode:"\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439/\u0414\u0432\u0443\u0445\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"},img_status:{error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",wait:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"},other:{auto:"\u0410\u0432\u0442\u043E",disable:"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C",distance:"\u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",download:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C",enabled:"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E",enter_comic_read_mode:"\u0420\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u0438\u043A\u0441\u043E\u0432",exit:"\u0412\u044B\u0445\u043E\u0434",fab_hidden:"\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443",fab_show:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443",fill_page:"\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",hotkeys:"\u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438",img_loading:"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F",interval:"\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",loading_img:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",none:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",or:"\u0438\u043B\u0438",other:"\u0414\u0440\u0443\u0433\u043E\u0435",page_range:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0441\u0442\u0440\u0430\u043D\u0438\u0446.:\\n (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 1, 3-5, 9-)",read_mode:"\u0420\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F",setting:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"},pwa:{alert:{img_data_error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",img_not_found:"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",img_not_found_files:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0430\u0440\u0445\u0438\u0432 \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438",img_not_found_folder:"\u0412 \u043F\u0430\u043F\u043A\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0430\u0440\u0445\u0438\u0432\u044B \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438",not_valid_url:"\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 URL",repeat_load:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432\u2026",unzip_error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0440\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0438",unzip_password_error:"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u043E\u0442 \u0430\u0440\u0445\u0438\u0432\u0430",userscript_not_installed:"ComicRead \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D"},button:{enter_url:"\u0412\u0432\u0435\u0441\u0442\u0438 URL",install:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",no_more_prompt:"\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C",resume_read:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0447\u0442\u0435\u043D\u0438\u0435",select_files:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B",select_folder:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443"},install_md:"### \u0423\u0441\u0442\u0430\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437?\\n\u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435:\\n1. \u0418\u043C\u0435\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E, \u043A\u0430\u043A \u0435\u0441\u043B\u0438 \u0431\u044B \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u043E\u0431\u044B\u0447\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435\\n1. \u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0430\u0440\u0445\u0438\u0432\u044B \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E\\n1. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0444\u0444\u043B\u0430\u0439\u043D\\n### \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u044D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 [PWA](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5_%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5) \u043D\u0430 \u0441\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u{1F43A}\u261D\uFE0F",message:{enter_password:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",unzipping:"\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430"},tip_enter_url:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL \u0430\u0440\u0445\u0438\u0432\u0430",tip_md:"# ComicRead PWA\\n\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 [ComicRead](https://github.com/hymbz/ComicReadScript) \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u0438\u043A\u0441\u043E\u0432 **\u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E**.\\n---\\n### \u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u043F\u0430\u043F\u043A\u0438 \u0438\u043B\u0438 \u0430\u0440\u0445\u0438\u0432\u044B \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0447\u0438\u0442\u0430\u0442\u044C\\n*\u0412\u044B \u0442\u0430\u043A \u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 **\u043E\u0442\u043A\u0440\u044B\u0442\u044C** \u0438\u043B\u0438 **\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C** URL \u0430\u0440\u0445\u0438\u0432\u0430 \u043D\u0430 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E*"},setting:{hotkeys:{add:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438",restore:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"},language:"\u042F\u0437\u044B\u043A",option:{abreast_duplicate:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0434\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0442\u043E\u043B\u0431\u0446\u043E\u0432",abreast_mode:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0432 \u0440\u044F\u0434",always_load_all_img:"\u0412\u0441\u0435\u0433\u0434\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0432\u0441\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",autoFullscreen:"\u0410\u0432\u0442\u043E \u043F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",autoHiddenMouse:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043A\u0443\u0440\u0441\u043E\u0440 \u043C\u044B\u0448\u0438",auto_scroll_trigger_end:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0443 \u043D\u0430 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",auto_switch_page_mode:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0440\u0435\u0436\u0438\u043C\u0430 \u043E\u0434\u043D\u043E\u0439/\u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0440\u043E\u043D",background_color:"\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",click_page_turn_area:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u043D\u0430\u0436\u0430\u0442\u0438\u044F",click_page_turn_enabled:"\u041F\u0435\u0440\u0435\u043B\u0438\u0441\u0442\u044B\u0432\u0430\u0442\u044C \u043F\u043E \u043A\u043B\u0438\u043A\u0443",click_page_turn_swap_area:"\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u043F\u0440\u0430\u0432\u0443\u044E \u0438 \u043B\u0435\u0432\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446",dark_mode:"\u041D\u043E\u0447\u043D\u0430\u044F \u0442\u0435\u043C\u0430",dark_mode_auto:"\u0422\u0451\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0437\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439",dir_ltr:"\u0427\u0442\u0435\u043D\u0438\u0435 \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E (\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0435 \u043A\u043E\u043C\u0438\u043A\u0441\u044B)",dir_rtl:"\u0427\u0442\u0435\u043D\u0438\u0435 \u0441\u043F\u0440\u0430\u0432\u0430 \u043D\u0430\u043B\u0435\u0432\u043E (\u042F\u043F\u043E\u043D\u0441\u043A\u0430\u044F \u043C\u0430\u043D\u0433\u0430)",disable_auto_enlarge:"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",first_page_fill:"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",fit_to_width:"\u041F\u043E \u0448\u0438\u0440\u0438\u043D\u0435",img_recognition:"\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",img_recognition_background:"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",img_recognition_pageFill:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",img_recognition_warn:"\u2757 \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Web Workers. \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u0437\u0432\u0430\u0442\u044C \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u043B\u0438 \u0441\u043C\u0435\u043D\u0438\u0442\u044C \u0431\u0440\u0430\u0443\u0437\u0435\u0440.",img_recognition_warn_2:"\u2757 \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Web Workers. \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.",paragraph_appearance:"\u0412\u043D\u0435\u0448\u043D\u043E\u0441\u0442\u044C",paragraph_dir:"\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0447\u0442\u0435\u043D\u0438\u044F",paragraph_display:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",paragraph_scrollbar:"\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438",paragraph_translation:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434",preload_page_num:"\u041F\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446",scroll_end:"\u041F\u043E\u0441\u043B\u0435 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0446\u0430",scroll_end_auto:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439/\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0433\u043B\u0430\u0432\u0435, \u0438\u043D\u0430\u0447\u0435 \u0432\u044B\u0445\u043E\u0434",scroll_mode_img_scale:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0441\u043A\u0440\u043E\u043B\u043B\u0438\u043D\u0433\u0430",scroll_mode_img_spacing:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0441\u043A\u0440\u043E\u043B\u043B\u0438\u043D\u0433\u0430",scrollbar_auto_hidden:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043A\u0440\u044B\u0432\u0430\u0442\u044C",scrollbar_easy_scroll:"\u041B\u0451\u0433\u043A\u0430\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430",scrollbar_position:"\u041F\u043E\u0437\u0438\u0446\u0438\u044F",scrollbar_position_bottom:"\u0421\u043D\u0438\u0437\u0443",scrollbar_position_hidden:"\u0421\u043F\u0440\u044F\u0442\u0430\u043D\u043E",scrollbar_position_right:"\u0421\u043F\u0440\u0430\u0432\u0430",scrollbar_position_top:"\u0421\u0432\u0435\u0440\u0445\u0443",scrollbar_show_img_status:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",show_clickable_area:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043B\u0438\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",show_comments:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",swap_page_turn_key:"\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446",zoom:"\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"},translation:{cotrans_tip:"<p>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans API</a>, \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0439 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430 \u0441\u0447\u0451\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044F.</p>\\n<p>\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\u0439 \u043E\u0447\u0435\u0440\u0435\u0434\u0438. \u041A\u043E\u0433\u0434\u0430 \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u043B\u0438\u043C\u0438\u0442 \u043D\u043E\u0432\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442\u044C \u043A \u043E\u0448\u0438\u0431\u043A\u0435. \u0415\u0441\u043B\u0438 \u0442\u0430\u043A\u043E\u0435 \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.</p>\\n<p>\u0422\u0430\u043A \u0447\u0442\u043E \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 <b>\u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435</b></p>\\n<p>\u041D\u0430\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 \u0440\u0430\u0437\u0432\u0451\u0440\u043D\u0443\u0442\u044B\u0439 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E \u0442.\u043A. \u044D\u0442\u043E \u043D\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B \u0438 \u0432\u044B \u043D\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u044B \u043E\u0447\u0435\u0440\u0435\u0434\u044C\u044E.</p>",options:{box_threshold:"\u041F\u043E\u0440\u043E\u0433 \u043A\u043E\u0440\u043E\u0431\u043A\u0438",detection_resolution:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430",direction:"\u041E\u0440\u0438\u0435\u0442\u043D\u0430\u0446\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u0430",direction_auto:"\u0421\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0443",direction_horizontal:"\u0422\u043E\u043B\u044C\u043A\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",direction_vertical:"\u0422\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",force_retry:"\u041F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0432\u0442\u043E\u0440(\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u044D\u0448)",inpainter:"\u0418\u043D\u043F\u0435\u0439\u043D\u0442\u0435\u0440",inpainting_size:"\u0418\u043D\u043F\u0435\u0439\u043D\u0442\u0438\u043D\u0433 \u0440\u0430\u0437\u043C\u0435\u0440 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",local_url:"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C URL \u0441\u0435\u0440\u0432\u0435\u0440\u0430",mask_dilation_offset:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0435 \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0434\u0438\u043B\u0430\u0442\u0430\u0446\u0438\u0438",only_download_translated:"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",target_language:"\u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u044F\u0437\u044B\u043A",text_detector:"\u0414\u0435\u0442\u0435\u043A\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0430",translator:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A",unclip_ratio:"\u041D\u0435\u043E\u0431\u0440\u0435\u0437\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435"},range:"\u041E\u0431\u044A\u0435\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430",server:"\u0421\u0435\u0440\u0432\u0435\u0440",server_selfhosted:"\u0421\u0432\u043E\u0439",translate_all:"\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",translate_to_end:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0434\u043E \u043A\u043E\u043D\u0446\u0430"}},site:{add_feature:{add_hotkeys_actions:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0433\u043E\u0440\u044F\u0447\u0438\u043C\u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0430\u043C\u0438",auto_adjust_option:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0447\u0442\u0435\u043D\u0438\u044F",auto_page_turn:"\u0410\u0432\u0442\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0440\u043E\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446",auto_show:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F",block_totally:"\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0438\u043A\u0441\u044B",colorize_tag:"\u0420\u0430\u0441\u043A\u0440\u0430\u0441\u0438\u0442\u044C \u0442\u0435\u0433\u0438",cross_site_link:"\u041A\u0440\u043E\u0441\u0441-\u0441\u0430\u0439\u0442\u043E\u0432\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430",detect_ad:"Detect advertise page",expand_tag_list:"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0433\u043E\u0432",float_tag_list:"\u041F\u043B\u0430\u0432\u0430\u044E\u0449\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0433\u043E\u0432",load_original_image:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",lock_option:"\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043E\u043F\u0446\u0438\u0438 \u0441\u0430\u0439\u0442\u0430",open_link_new_page:"\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",quick_favorite:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0444\u0430\u0432\u043E\u0440\u0438\u0442",quick_rating:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433",quick_tag_define:"\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u0433\u0430 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",remember_current_site:"\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0430\u0439\u0442",tag_lint:"\u0422\u044D\u0433 \u041B\u0438\u043D\u0442"},changed_load_failed:"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C, \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0438\u043A\u0441",ehentai:{change_favorite_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",change_favorite_success:"\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E",change_rating_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0446\u0435\u043D\u043A\u0443",change_rating_success:"\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u0440\u0435\u0439\u0442\u0438\u043D\u0433",fetch_favorite_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C",fetch_img_page_source_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438",fetch_img_page_url_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0438\u0437 \u0434\u0435\u0442\u0430\u043B\u0435\u0439",fetch_img_url_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",hitomi_error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F hitomi",html_changed_link_failed:"\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C, \u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0434\u043E\u043B\u0436\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C",ip_banned:"IP \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u0431\u0430\u043D\u0435\u043D",nhentai_error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F nhentai",nhentai_failed:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u043F\u043E\u0441\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u043E\u0441\u043B\u0435 \u0432\u0445\u043E\u0434\u0430 \u043D\u0430 {{nhentai}}"},nhentai:{fetch_next_page_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",tag_blacklist_fetch_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0442\u0435\u0433\u0438"},show_settings_menu:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",simple:{auto_read_mode_message:"\\"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F\\" \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",no_img:"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439. \u041C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u0442\u0443\u0442 \u0447\u0442\u043E \u0431\u044B \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0447\u0442\u0435\u043D\u0438\u044F.",simple_read_mode:"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F"}},touch_area:{menu:"\u041C\u0435\u043D\u044E",next:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",type:{edge:"\u0413\u0440\u0430\u043D\u044C",l:"L",left_right:"\u041B\u0435\u0432\u043E \u041F\u0440\u0430\u0432\u043E",up_down:"\u0412\u0435\u0440\u0445 \u041D\u0438\u0437"}},translation:{status:{colorizing:"\u0420\u0430\u0441\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u043D\u0438\u0435","default":"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",detection:"\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",downscaling:"\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430",error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430","error-lang":"\u0426\u0435\u043B\u0435\u0432\u043E\u0439 \u044F\u0437\u044B\u043A \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A\u043E\u043C","error-translating":"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430(\u043F\u0443\u0441\u0442\u043E\u0439 \u043E\u0442\u0432\u0435\u0442)","error-with-id":"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430",finished:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435",inpainting:"\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435","mask-generation":"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043C\u0430\u0441\u043A\u0438",ocr:"\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",pending:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435","pending-pos":"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",preparing:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043E\u043A\u043D\u0430 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",rendering:"\u041E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0430",saved:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E","skip-no-regions":"\u041D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043E \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u043E\u0431\u043B\u0430\u0441\u0442\u0435\u0439.","skip-no-text":"\u0422\u0435\u043A\u0441\u0442 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D",textline_merge:"\u041E\u0431\u044C\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",translating:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u0441\u044F",upscaling:"\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"},tip:{check_img_status_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",download_img_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",get_translator_list_error:"\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A\u043E\u0432",id_not_returned:"ID \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u043B\u0438(",img_downloading:"\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",img_not_fully_loaded:"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0451 \u0435\u0449\u0451 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F",pending:"\u041E\u0436\u0438\u0434\u0435\u043D\u0438\u0435, \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u0438 {{pos}}",resize_img_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",translating:"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442\u0441\u044F",translation_completed:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D",upload:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",upload_error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",upload_return_error:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",wait_translation:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430"},translator:{baidu:"baidu",deepl:"DeepL",google:"Google","gpt3.5":"GPT-3.5",none:"\u0423\u0431\u0440\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442",offline:"\u041E\u0444\u0444\u043B\u0430\u0439\u043D \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A",original:"\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B",youdao:"youdao"}},upscale:{module_download_complete:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",module_download_failed:"\u0421\u0431\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",module_downloading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439...",title:"\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",upscaled:"\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439",upscaling:"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F",webgpu_tip:"\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E WebGPU, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0435\u0435"}};

const zh = {alert:{comic_load_error:"\u6F2B\u753B\u52A0\u8F7D\u51FA\u9519",download_failed:"\u4E0B\u8F7D\u5931\u8D25",fetch_comic_img_failed:"\u83B7\u53D6\u6F2B\u753B\u56FE\u7247\u5931\u8D25",img_load_failed:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25",no_img_download:"\u6CA1\u6709\u80FD\u4E0B\u8F7D\u7684\u56FE\u7247",repeat_load:"\u52A0\u8F7D\u56FE\u7247\u4E2D\uFF0C\u8BF7\u7A0D\u5019",retry_get_img_url:"\u91CD\u65B0\u83B7\u53D6\u7B2C {{i}} \u9875\u56FE\u7247\u7684\u5730\u5740",server_connect_failed:"\u65E0\u6CD5\u8FDE\u63A5\u5230\u670D\u52A1\u5668"},button:{auto_scroll:"\u81EA\u52A8\u6EDA\u52A8",close_current_page_translation:"\u5173\u95ED\u5F53\u524D\u9875\u7684\u7FFB\u8BD1",download_completed:"\u4E0B\u8F7D\u5B8C\u6210",download_completed_error:"\u4E0B\u8F7D\u5B8C\u6210\uFF0C\u4F46\u6709 {{errorNum}} \u5F20\u56FE\u7247\u4E0B\u8F7D\u5931\u8D25",downloading:"\u4E0B\u8F7D\u4E2D",fullscreen:"\u5168\u5C4F",fullscreen_exit:"\u9000\u51FA\u5168\u5C4F",grid_mode:"\u7F51\u683C\u6A21\u5F0F",packaging:"\u6253\u5305\u4E2D",page_fill:"\u9875\u9762\u586B\u5145",page_mode_double:"\u53CC\u9875\u6A21\u5F0F",page_mode_single:"\u5355\u9875\u6A21\u5F0F",scroll_mode:"\u5377\u8F74\u6A21\u5F0F",translate_current_page:"\u7FFB\u8BD1\u5F53\u524D\u9875",zoom_in:"\u653E\u5927",zoom_out:"\u7F29\u5C0F"},description:"\u4E3A\u6F2B\u753B\u7AD9\u589E\u52A0\u53CC\u9875\u9605\u8BFB\u3001\u7FFB\u8BD1\u7B49\u4F18\u5316\u4F53\u9A8C\u7684\u589E\u5F3A\u529F\u80FD\u3002",eh_tag_lint:{combo:"\u5B58\u5728 [tag] \u65F6\uFF0C\u4E00\u822C\u4E5F\u5B58\u5728 [tag]",conflict:"\u5B58\u5728 [tag] \u65F6\uFF0C\u4E0D\u5E94\u8BE5\u5B58\u5728 [tag]",correct_tag:"\u5E94\u8BE5\u662F\u6B63\u786E\u7684\u6807\u7B7E",miss_female:"\u7F3A\u5C11\u7537\u6027\u6807\u7B7E\uFF0C\u53EF\u80FD\u9700\u8981",miss_parody:"\u7F3A\u5C11\u539F\u4F5C\u6807\u7B7E\uFF0C\u53EF\u80FD\u9700\u8981",possible_conflict:"\u5B58\u5728 [tag] \u65F6\uFF0C\u4E00\u822C\u4E0D\u5E94\u8BE5\u5B58\u5728 [tag]",prerequisite:"[tag] \u7684\u524D\u7F6E\u6807\u7B7E [tag] \u4E0D\u5B58\u5728"},end_page:{next_button:"\u4E0B\u4E00\u8BDD",prev_button:"\u4E0A\u4E00\u8BDD",tip:{end_jump:"\u5DF2\u5230\u7ED3\u5C3E\uFF0C\u7EE7\u7EED\u5411\u4E0B\u7FFB\u9875\u5C06\u8DF3\u81F3\u4E0B\u4E00\u8BDD",exit:"\u5DF2\u5230\u7ED3\u5C3E\uFF0C\u7EE7\u7EED\u7FFB\u9875\u5C06\u9000\u51FA",start_jump:"\u5DF2\u5230\u5F00\u5934\uFF0C\u7EE7\u7EED\u5411\u4E0A\u7FFB\u9875\u5C06\u8DF3\u81F3\u4E0A\u4E00\u8BDD"}},hotkeys:{enter_read_mode:"\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F",float_tag_list:"\u60AC\u6D6E\u6807\u7B7E\u5217\u8868",jump_to_end:"\u8DF3\u81F3\u5C3E\u9875",jump_to_home:"\u8DF3\u81F3\u9996\u9875",page_down:"\u5411\u4E0B\u7FFB\u9875",page_up:"\u5411\u4E0A\u7FFB\u9875",repeat_tip:"\u6B64\u5FEB\u6377\u952E\u5DF2\u88AB\u7ED1\u5B9A\u81F3\u300C{{hotkey}}\u300D",scroll_down:"\u5411\u4E0B\u6EDA\u52A8",scroll_left:"\u5411\u5DE6\u6EDA\u52A8",scroll_right:"\u5411\u53F3\u6EDA\u52A8",scroll_up:"\u5411\u4E0A\u6EDA\u52A8",switch_auto_enlarge:"\u5207\u6362\u56FE\u7247\u81EA\u52A8\u653E\u5927\u9009\u9879",switch_dir:"\u5207\u6362\u9605\u8BFB\u65B9\u5411",switch_grid_mode:"\u5207\u6362\u7F51\u683C\u6A21\u5F0F",switch_page_fill:"\u5207\u6362\u9875\u9762\u586B\u5145",switch_scroll_mode:"\u5207\u6362\u5377\u8F74\u6A21\u5F0F",switch_single_double_page_mode:"\u5207\u6362\u5355\u53CC\u9875\u6A21\u5F0F"},img_status:{error:"\u52A0\u8F7D\u51FA\u9519",loading:"\u6B63\u5728\u52A0\u8F7D",wait:"\u7B49\u5F85\u52A0\u8F7D"},other:{auto:"\u81EA\u52A8",disable:"\u7981\u7528",distance:"\u8DDD\u79BB",download:"\u4E0B\u8F7D",enabled:"\u542F\u7528",enter_comic_read_mode:"\u8FDB\u5165\u6F2B\u753B\u9605\u8BFB\u6A21\u5F0F",exit:"\u9000\u51FA",fab_hidden:"\u9690\u85CF\u60AC\u6D6E\u6309\u94AE",fab_show:"\u663E\u793A\u60AC\u6D6E\u6309\u94AE",fill_page:"\u586B\u5145\u9875",hotkeys:"\u5FEB\u6377\u952E",img_loading:"\u56FE\u7247\u52A0\u8F7D\u4E2D",interval:"\u95F4\u9694",loading_img:"\u52A0\u8F7D\u56FE\u7247\u4E2D",none:"\u65E0",or:"\u6216",other:"\u5176\u4ED6",page_range:"\u8BF7\u8F93\u5165\u9875\u7801\u8303\u56F4\uFF1A\\n\uFF08\u4F8B\u5982\uFF1A1, 3-5, 9-)",read_mode:"\u9605\u8BFB\u6A21\u5F0F",setting:"\u8BBE\u7F6E"},pwa:{alert:{img_data_error:"\u56FE\u7247\u6570\u636E\u9519\u8BEF",img_not_found:"\u627E\u4E0D\u5230\u56FE\u7247",img_not_found_files:"\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\u6216\u542B\u6709\u56FE\u7247\u6587\u4EF6\u7684\u538B\u7F29\u5305",img_not_found_folder:"\u6587\u4EF6\u5939\u4E0B\u6CA1\u6709\u56FE\u7247\u6587\u4EF6\u6216\u542B\u6709\u56FE\u7247\u6587\u4EF6\u7684\u538B\u7F29\u5305",not_valid_url:"\u4E0D\u662F\u6709\u6548\u7684 URL",repeat_load:"\u6B63\u5728\u52A0\u8F7D\u5176\u4ED6\u6587\u4EF6\u4E2D\u2026\u2026",unzip_error:"\u89E3\u538B\u51FA\u9519",unzip_password_error:"\u89E3\u538B\u5BC6\u7801\u9519\u8BEF",userscript_not_installed:"\u672A\u5B89\u88C5 ComicRead \u811A\u672C"},button:{enter_url:"\u8F93\u5165 URL",install:"\u5B89\u88C5",no_more_prompt:"\u4E0D\u518D\u63D0\u793A",resume_read:"\u6062\u590D\u9605\u8BFB",select_files:"\u9009\u62E9\u6587\u4EF6",select_folder:"\u9009\u62E9\u6587\u4EF6\u5939"},install_md:"### \u6BCF\u6B21\u90FD\u8981\u6253\u5F00\u8FD9\u4E2A\u7F51\u9875\u5F88\u9EBB\u70E6\uFF1F\\n\u5982\u679C\u4F60\u5E0C\u671B\\n1. \u80FD\u6709\u72EC\u7ACB\u7684\u7A97\u53E3\uFF0C\u50CF\u662F\u5728\u4F7F\u7528\u672C\u5730\u8F6F\u4EF6\u4E00\u6837\\n1. \u52A0\u5165\u672C\u5730\u538B\u7F29\u6587\u4EF6\u7684\u6253\u5F00\u65B9\u5F0F\u4E4B\u4E2D\uFF0C\u65B9\u4FBF\u76F4\u63A5\u6253\u5F00\\n1. \u79BB\u7EBF\u4F7F\u7528~~\uFF08\u4E3B\u8981\u662F\u62C5\u5FC3\u56FD\u5185\u7F51\u7EDC\u62BD\u98CE\u65E0\u6CD5\u8BBF\u95EE\u8FD9\u4E2A\u7F51\u9875~~\\n### \u6B22\u8FCE\u5C06\u672C\u9875\u9762\u4F5C\u4E3A PWA \u5E94\u7528\u5B89\u88C5\u5230\u7535\u8111\u4E0A\u{1F603}\u{1F44D}",message:{enter_password:"\u8BF7\u8F93\u5165\u5BC6\u7801",unzipping:"\u89E3\u538B\u7F29\u4E2D"},tip_enter_url:"\u8BF7\u8F93\u5165\u538B\u7F29\u5305 URL",tip_md:"# ComicRead PWA\\n\u4F7F\u7528 [ComicRead](https://github.com/hymbz/ComicReadScript) \u7684\u9605\u8BFB\u6A21\u5F0F\u9605\u8BFB**\u672C\u5730**\u6F2B\u753B\\n---\\n### \u5C06\u56FE\u7247\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u3001\u538B\u7F29\u5305\u76F4\u63A5\u62D6\u5165\u5373\u53EF\u5F00\u59CB\u9605\u8BFB\\n*\u4E5F\u53EF\u4EE5\u9009\u62E9**\u76F4\u63A5\u7C98\u8D34**\u6216**\u8F93\u5165**\u538B\u7F29\u5305 URL \u4E0B\u8F7D\u9605\u8BFB*"},setting:{hotkeys:{add:"\u6DFB\u52A0\u65B0\u5FEB\u6377\u952E",restore:"\u6062\u590D\u9ED8\u8BA4\u5FEB\u6377\u952E"},language:"\u8BED\u8A00",option:{abreast_duplicate:"\u6BCF\u5217\u91CD\u590D\u6BD4\u4F8B",abreast_mode:"\u5E76\u6392\u5377\u8F74\u6A21\u5F0F",always_load_all_img:"\u59CB\u7EC8\u52A0\u8F7D\u6240\u6709\u56FE\u7247",autoFullscreen:"\u81EA\u52A8\u5168\u5C4F",autoHiddenMouse:"\u81EA\u52A8\u9690\u85CF\u9F20\u6807",auto_scroll_trigger_end:"\u5728\u7ED3\u675F\u9875\u4E0A\u7EE7\u7EED\u6EDA\u52A8",auto_switch_page_mode:"\u6839\u636E\u5C4F\u5E55\u6BD4\u4F8B\u5207\u6362\u5355\u53CC\u9875",background_color:"\u80CC\u666F\u989C\u8272",click_page_turn_area:"\u70B9\u51FB\u533A\u57DF",click_page_turn_enabled:"\u70B9\u51FB\u7FFB\u9875",click_page_turn_swap_area:"\u5DE6\u53F3\u70B9\u51FB\u533A\u57DF\u4EA4\u6362",dark_mode:"\u9ED1\u6697\u6A21\u5F0F",dark_mode_auto:"\u9ED1\u6697\u6A21\u5F0F\u8DDF\u968F\u7CFB\u7EDF",dir_ltr:"\u4ECE\u5DE6\u5230\u53F3\uFF08\u7F8E\u6F2B\uFF09",dir_rtl:"\u4ECE\u53F3\u5230\u5DE6\uFF08\u65E5\u6F2B\uFF09",disable_auto_enlarge:"\u7981\u6B62\u56FE\u7247\u81EA\u52A8\u653E\u5927",first_page_fill:"\u9ED8\u8BA4\u542F\u7528\u9996\u9875\u586B\u5145",fit_to_width:"\u56FE\u7247\u9002\u5408\u5BBD\u5EA6",img_recognition:"\u56FE\u50CF\u8BC6\u522B",img_recognition_background:"\u8BC6\u522B\u80CC\u666F\u8272",img_recognition_pageFill:"\u81EA\u52A8\u8C03\u6574\u9875\u9762\u586B\u5145",img_recognition_warn:"\u2757 \u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Web Worker\uFF0C\u5F00\u542F\u6B64\u529F\u80FD\u53EF\u80FD\u5BFC\u81F4\u9875\u9762\u5361\u987F\uFF0C\u5EFA\u8BAE\u5347\u7EA7\u6216\u66F4\u6362\u6D4F\u89C8\u5668\u3002",img_recognition_warn_2:"\u2757 \u5F53\u524D\u7F51\u7AD9\u4E0D\u652F\u6301 Web Worker\uFF0C\u5F00\u542F\u6B64\u529F\u80FD\u53EF\u80FD\u5BFC\u81F4\u9875\u9762\u5361\u987F\u3002",paragraph_appearance:"\u5916\u89C2",paragraph_dir:"\u9605\u8BFB\u65B9\u5411",paragraph_display:"\u663E\u793A",paragraph_scrollbar:"\u6EDA\u52A8\u6761",paragraph_translation:"\u7FFB\u8BD1",preload_page_num:"\u9884\u52A0\u8F7D\u9875\u6570",scroll_end:"\u7FFB\u9875\u81F3\u5C3D\u5934\u540E",scroll_end_auto:"\u4F18\u5148\u8DF3\u81F3\u4E0A/\u4E0B\u4E00\u8BDD\uFF0C\u5426\u5219\u9000\u51FA",scroll_mode_img_scale:"\u5377\u8F74\u56FE\u7247\u7F29\u653E",scroll_mode_img_spacing:"\u5377\u8F74\u56FE\u7247\u95F4\u8DDD",scrollbar_auto_hidden:"\u81EA\u52A8\u9690\u85CF",scrollbar_easy_scroll:"\u5FEB\u6377\u6EDA\u52A8",scrollbar_position:"\u4F4D\u7F6E",scrollbar_position_bottom:"\u5E95\u90E8",scrollbar_position_hidden:"\u9690\u85CF",scrollbar_position_right:"\u53F3\u4FA7",scrollbar_position_top:"\u9876\u90E8",scrollbar_show_img_status:"\u663E\u793A\u56FE\u7247\u52A0\u8F7D\u72B6\u6001",show_clickable_area:"\u663E\u793A\u70B9\u51FB\u533A\u57DF",show_comments:"\u5728\u7ED3\u675F\u9875\u663E\u793A\u8BC4\u8BBA",swap_page_turn_key:"\u5DE6\u53F3\u7FFB\u9875\u952E\u4EA4\u6362",zoom:"\u56FE\u7247\u7F29\u653E"},translation:{cotrans_tip:"<p>\u5C06\u4F7F\u7528 <a href=\\"https://cotrans.touhou.ai\\" target=\\"_blank\\">Cotrans</a> \u63D0\u4F9B\u7684\u63A5\u53E3\u7FFB\u8BD1\u56FE\u7247\uFF0C\u8BE5\u670D\u52A1\u5668\u7531\u5176\u7EF4\u62A4\u8005\u7528\u7231\u53D1\u7535\u81EA\u8D39\u7EF4\u62A4</p>\\n<p>\u591A\u4EBA\u540C\u65F6\u4F7F\u7528\u65F6\u9700\u8981\u6392\u961F\u7B49\u5F85\uFF0C\u7B49\u5F85\u961F\u5217\u8FBE\u5230\u4E0A\u9650\u540E\u518D\u4E0A\u4F20\u65B0\u56FE\u7247\u4F1A\u62A5\u9519\uFF0C\u9700\u8981\u8FC7\u6BB5\u65F6\u95F4\u518D\u8BD5</p>\\n<p>\u6240\u4EE5\u8FD8\u8BF7 <b>\u6CE8\u610F\u7528\u91CF</b></p>\\n<p>\u66F4\u63A8\u8350\u4F7F\u7528\u81EA\u5DF1\u672C\u5730\u90E8\u7F72\u7684\u9879\u76EE\uFF0C\u65E2\u4E0D\u5360\u7528\u670D\u52A1\u5668\u8D44\u6E90\u4E5F\u4E0D\u9700\u8981\u6392\u961F</p>",options:{box_threshold:"\u6587\u672C\u6846\u9608\u503C",detection_resolution:"\u6587\u672C\u626B\u63CF\u6E05\u6670\u5EA6",direction:"\u6E32\u67D3\u5B57\u4F53\u65B9\u5411",direction_auto:"\u539F\u6587\u4E00\u81F4",direction_horizontal:"\u4EC5\u9650\u6C34\u5E73",direction_vertical:"\u4EC5\u9650\u5782\u76F4",force_retry:"\u5FFD\u7565\u7F13\u5B58\u5F3A\u5236\u91CD\u8BD5",inpainter:"\u56FE\u50CF\u4FEE\u590D\u5668",inpainting_size:"\u56FE\u50CF\u4FEE\u590D\u5C3A\u5BF8",local_url:"\u81EA\u5B9A\u4E49\u670D\u52A1\u5668 URL",mask_dilation_offset:"\u63A9\u7801\u81A8\u80C0\u504F\u79FB\u91CF",only_download_translated:"\u53EA\u4E0B\u8F7D\u7FFB\u8BD1\u5B8C\u7684\u56FE\u7247",target_language:"\u76EE\u6807\u8BED\u8A00",text_detector:"\u6587\u672C\u626B\u63CF\u5668",translator:"\u7FFB\u8BD1\u670D\u52A1",unclip_ratio:"\u6587\u672C\u6846\u81A8\u80C0\u6BD4\u7387"},range:"\u7FFB\u8BD1\u8303\u56F4",server:"\u7FFB\u8BD1\u670D\u52A1\u5668",server_selfhosted:"\u672C\u5730\u90E8\u7F72",translate_all:"\u7FFB\u8BD1\u5168\u90E8\u56FE\u7247",translate_to_end:"\u7FFB\u8BD1\u5F53\u524D\u9875\u81F3\u7ED3\u5C3E"}},site:{add_feature:{add_hotkeys_actions:"\u589E\u52A0\u5FEB\u6377\u952E\u64CD\u4F5C",auto_adjust_option:"\u81EA\u52A8\u8C03\u6574\u9605\u8BFB\u914D\u7F6E",auto_page_turn:"\u65E0\u9650\u6EDA\u52A8",auto_show:"\u81EA\u52A8\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F",block_totally:"\u5F7B\u5E95\u5C4F\u853D\u6F2B\u753B",colorize_tag:"\u6807\u7B7E\u67D3\u8272",cross_site_link:"\u5173\u8054\u5916\u7AD9",detect_ad:"\u8BC6\u522B\u5E7F\u544A\u9875",expand_tag_list:"\u5C55\u5F00\u6807\u7B7E\u5217\u8868",float_tag_list:"\u60AC\u6D6E\u6807\u7B7E\u5217\u8868",load_original_image:"\u52A0\u8F7D\u539F\u56FE",lock_option:"\u9501\u5B9A\u7AD9\u70B9\u914D\u7F6E",open_link_new_page:"\u5728\u65B0\u9875\u9762\u4E2D\u6253\u5F00\u94FE\u63A5",quick_favorite:"\u5FEB\u6377\u6536\u85CF",quick_rating:"\u5FEB\u6377\u8BC4\u5206",quick_tag_define:"\u5FEB\u6377\u67E5\u770B\u6807\u7B7E\u5B9A\u4E49",remember_current_site:"\u8BB0\u4F4F\u5F53\u524D\u7AD9\u70B9",tag_lint:"\u6807\u7B7E\u68C0\u67E5"},changed_load_failed:"\u7F51\u7AD9\u53D1\u751F\u53D8\u5316\uFF0C\u65E0\u6CD5\u52A0\u8F7D\u6F2B\u753B",ehentai:{change_favorite_failed:"\u6536\u85CF\u5939\u4FEE\u6539\u5931\u8D25",change_favorite_success:"\u6536\u85CF\u5939\u4FEE\u6539\u6210\u529F",change_rating_failed:"\u8BC4\u5206\u4FEE\u6539\u5931\u8D25",change_rating_success:"\u8BC4\u5206\u4FEE\u6539\u6210\u529F",fetch_favorite_failed:"\u83B7\u53D6\u6536\u85CF\u5939\u4FE1\u606F\u5931\u8D25",fetch_img_page_source_failed:"\u83B7\u53D6\u56FE\u7247\u9875\u6E90\u7801\u5931\u8D25",fetch_img_page_url_failed:"\u4ECE\u8BE6\u60C5\u9875\u83B7\u53D6\u56FE\u7247\u9875\u5730\u5740\u5931\u8D25",fetch_img_url_failed:"\u4ECE\u56FE\u7247\u9875\u83B7\u53D6\u56FE\u7247\u5730\u5740\u5931\u8D25",hitomi_error:"hitomi \u5339\u914D\u51FA\u9519",html_changed_link_failed:"\u9875\u9762\u7ED3\u6784\u53D1\u751F\u6539\u53D8\uFF0C\u5173\u8054\u5916\u7AD9\u529F\u80FD\u65E0\u6CD5\u6B63\u5E38\u751F\u6548",ip_banned:"IP\u5730\u5740\u88AB\u7981",nhentai_error:"nhentai \u5339\u914D\u51FA\u9519",nhentai_failed:"\u5339\u914D\u5931\u8D25\uFF0C\u8BF7\u5728\u786E\u8BA4\u767B\u5F55 {{nhentai}} \u540E\u5237\u65B0"},nhentai:{fetch_next_page_failed:"\u83B7\u53D6\u4E0B\u4E00\u9875\u6F2B\u753B\u6570\u636E\u5931\u8D25",tag_blacklist_fetch_failed:"\u6807\u7B7E\u9ED1\u540D\u5355\u83B7\u53D6\u5931\u8D25"},show_settings_menu:"\u663E\u793A\u8BBE\u7F6E\u83DC\u5355",simple:{auto_read_mode_message:"\u5DF2\u9ED8\u8BA4\u5F00\u542F\u300C\u81EA\u52A8\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F\u300D",no_img:"\u672A\u627E\u5230\u5408\u9002\u7684\u6F2B\u753B\u56FE\u7247\uFF0C\\n\u5982\u6709\u9700\u8981\u53EF\u70B9\u6B64\u5173\u95ED\u7B80\u6613\u9605\u8BFB\u6A21\u5F0F",simple_read_mode:"\u4F7F\u7528\u7B80\u6613\u9605\u8BFB\u6A21\u5F0F"}},touch_area:{menu:"\u83DC\u5355",next:"\u4E0B\u9875",prev:"\u4E0A\u9875",type:{edge:"\u8FB9\u7F18",l:"L",left_right:"\u5DE6\u53F3",up_down:"\u4E0A\u4E0B"}},translation:{status:{colorizing:"\u6B63\u5728\u4E0A\u8272","default":"\u672A\u77E5\u72B6\u6001",detection:"\u6B63\u5728\u68C0\u6D4B\u6587\u672C",downscaling:"\u6B63\u5728\u7F29\u5C0F\u56FE\u7247",error:"\u7FFB\u8BD1\u51FA\u9519","error-lang":"\u4F60\u9009\u62E9\u7684\u7FFB\u8BD1\u670D\u52A1\u4E0D\u652F\u6301\u4F60\u9009\u62E9\u7684\u8BED\u8A00","error-translating":"\u7FFB\u8BD1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u4EFB\u4F55\u6587\u672C","error-with-id":"\u7FFB\u8BD1\u51FA\u9519",finished:"\u6B63\u5728\u6574\u7406\u7ED3\u679C",inpainting:"\u6B63\u5728\u4FEE\u8865\u56FE\u7247","mask-generation":"\u6B63\u5728\u751F\u6210\u6587\u672C\u63A9\u7801",ocr:"\u6B63\u5728\u8BC6\u522B\u6587\u672C",pending:"\u6B63\u5728\u7B49\u5F85","pending-pos":"\u6B63\u5728\u7B49\u5F85",preparing:"\u7B49\u5F85\u7A7A\u95F2\u7A97\u53E3",rendering:"\u6B63\u5728\u6E32\u67D3",saved:"\u4FDD\u5B58\u7ED3\u679C","skip-no-regions":"\u56FE\u7247\u4E2D\u6CA1\u6709\u68C0\u6D4B\u5230\u6587\u672C\u533A\u57DF","skip-no-text":"\u56FE\u7247\u4E2D\u6CA1\u6709\u68C0\u6D4B\u5230\u6587\u672C",textline_merge:"\u6B63\u5728\u6574\u5408\u6587\u672C",translating:"\u6B63\u5728\u7FFB\u8BD1\u6587\u672C",upscaling:"\u6B63\u5728\u653E\u5927\u56FE\u7247"},tip:{check_img_status_failed:"\u68C0\u67E5\u56FE\u7247\u72B6\u6001\u5931\u8D25",download_img_failed:"\u4E0B\u8F7D\u56FE\u7247\u5931\u8D25",get_translator_list_error:"\u83B7\u53D6\u53EF\u7528\u7FFB\u8BD1\u670D\u52A1\u5217\u8868\u65F6\u51FA\u9519",id_not_returned:"\u672A\u8FD4\u56DE id",img_downloading:"\u4E0B\u8F7D\u56FE\u7247\u4E2D",img_not_fully_loaded:"\u56FE\u7247\u672A\u52A0\u8F7D\u5B8C\u6BD5",pending:"\u6B63\u5728\u7B49\u5F85\uFF0C\u5217\u961F\u8FD8\u6709 {{pos}} \u5F20\u56FE\u7247",resize_img_failed:"\u7F29\u653E\u56FE\u7247\u5931\u8D25",translating:"\u7FFB\u8BD1\u56FE\u7247\u4E2D",translation_completed:"\u7FFB\u8BD1\u5B8C\u6210",upload:"\u4E0A\u4F20\u56FE\u7247\u4E2D",upload_error:"\u4E0A\u4F20\u56FE\u7247\u51FA\u9519",upload_return_error:"\u670D\u52A1\u5668\u7FFB\u8BD1\u51FA\u9519",wait_translation:"\u7B49\u5F85\u7FFB\u8BD1"},translator:{baidu:"\u767E\u5EA6",deepl:"DeepL",google:"\u8C37\u6B4C","gpt3.5":"GPT-3.5",none:"\u5220\u9664\u6587\u672C",offline:"\u79BB\u7EBF\u6A21\u578B",original:"\u539F\u6587",youdao:"\u6709\u9053"}},upscale:{module_download_complete:"\u56FE\u7247\u653E\u5927\u6A21\u578B\u4E0B\u8F7D\u5B8C\u6210",module_download_failed:"\u56FE\u7247\u653E\u5927\u6A21\u578B\u4E0B\u8F7D\u5931\u8D25",module_downloading:"\u56FE\u7247\u653E\u5927\u6A21\u578B\u4E0B\u8F7D\u4E2D...",title:"\u653E\u5927\u56FE\u7247",upscaled:"\u5DF2\u653E\u5927",upscaling:"\u653E\u5927\u4E2D",webgpu_tip:"\u65E0\u6CD5\u4F7F\u7528 WebGPU \u653E\u5927\u56FE\u7247\uFF0C\u5904\u7406\u901F\u5EA6\u5C06\u53D8\u6162"}};

/**
 * Creates a callback that is debounced and cancellable. The debounced callback is called on **trailing** edge.
 *
 * The timeout will be automatically cleared on root dispose.
 *
 * @param callback The callback to debounce
 * @param wait The duration to debounce in milliseconds
 * @returns The debounced function
 *
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#debounce
 *
 * @example
 * \`\`\`ts
 * const fn = debounce((message: string) => console.log(message), 250);
 * fn('Hello!');
 * fn.clear() // clears a timeout in progress
 * \`\`\`
 */
const debounce$1 = (callback, wait) => {
    if (web.isServer) {
        return Object.assign(() => void 0, { clear: () => void 0 });
    }
    let timeoutId;
    const clear = () => clearTimeout(timeoutId);
    if (solidJs.getOwner())
        solidJs.onCleanup(clear);
    const debounced = (...args) => {
        if (timeoutId !== undefined)
            clear();
        timeoutId = setTimeout(() => callback(...args), wait);
    };
    return Object.assign(debounced, { clear });
};
/**
 * Creates a callback that is throttled and cancellable. The throttled callback is called on **trailing** edge.
 *
 * The timeout will be automatically cleared on root dispose.
 *
 * @param callback The callback to throttle
 * @param wait The duration to throttle
 * @returns The throttled callback trigger
 *
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#throttle
 *
 * @example
 * \`\`\`ts
 * const trigger = throttle((val: string) => console.log(val), 250);
 * trigger('my-new-value');
 * trigger.clear() // clears a timeout in progress
 * \`\`\`
 */
const throttle$1 = (callback, wait) => {
    if (web.isServer) {
        return Object.assign(() => void 0, { clear: () => void 0 });
    }
    let isThrottled = false, timeoutId, lastArgs;
    const throttled = (...args) => {
        lastArgs = args;
        if (isThrottled)
            return;
        isThrottled = true;
        timeoutId = setTimeout(() => {
            callback(...lastArgs);
            isThrottled = false;
        }, wait);
    };
    const clear = () => {
        clearTimeout(timeoutId);
        isThrottled = false;
    };
    if (solidJs.getOwner())
        solidJs.onCleanup(clear);
    return Object.assign(throttled, { clear });
};
/**
 * Creates a scheduled and cancellable callback that will be called on the **leading** edge for the first call, and **trailing** edge for other calls.
 *
 * The timeout will be automatically cleared on root dispose.
 *
 * @param schedule {@link debounce} or {@link throttle}
 * @param callback The callback to debounce/throttle
 * @param wait timeout duration
 * @returns The scheduled callback trigger
 *
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#leadingAndTrailing
 *
 * @example
 * \`\`\`ts
 * const trigger = leadingAndTrailing(throttle, (val: string) => console.log(val), 250);
 * trigger('my-new-value');
 * trigger.clear() // clears a timeout in progress
 * \`\`\`
 */
function leadingAndTrailing(schedule, callback, wait) {
    if (web.isServer) {
        let called = false;
        const scheduled = (...args) => {
            if (called)
                return;
            called = true;
            callback(...args);
        };
        return Object.assign(scheduled, { clear: () => void 0 });
    }
    let State;
    (function (State) {
        State[State["Ready"] = 0] = "Ready";
        State[State["Leading"] = 1] = "Leading";
        State[State["Trailing"] = 2] = "Trailing";
    })(State || (State = {}));
    let state = State.Ready;
    const scheduled = schedule((args) => {
        state === State.Trailing && callback(...args);
        state = State.Ready;
    }, wait);
    const fn = (...args) => {
        if (state !== State.Trailing) {
            if (state === State.Ready)
                callback(...args);
            state += 1;
        }
        scheduled(args);
    };
    const clear = () => {
        state = State.Ready;
        scheduled.clear();
    };
    if (solidJs.getOwner())
        solidJs.onCleanup(clear);
    return Object.assign(fn, { clear });
}
/**
 * Creates a signal used for scheduling execution of solid computations by tracking.
 *
 * @param schedule Schedule the invalidate function (can be {@link debounce} or {@link throttle})
 * @returns A function used to track the signal. It returns \`true\` if the signal is dirty *(callback should be called)* and \`false\` otherwise.
 *
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/scheduled#createScheduled
 *
 * @example
 * \`\`\`ts
 * const debounced = createScheduled(fn => debounce(fn, 250));
 *
 * createEffect(() => {
 *   // track source signal
 *   const value = count();
 *   // track the debounced signal and check if it's dirty
 *   if (debounced()) {
 *     console.log('count', value);
 *   }
 * });
 * \`\`\`
 */
// Thanks to Fabio Spampinato (https://github.com/fabiospampinato) for the idea for the primitive
function createScheduled(schedule) {
    let listeners = 0;
    let isDirty = false;
    const [track, dirty] = solidJs.createSignal(void 0, { equals: false });
    const call = schedule(() => {
        isDirty = true;
        dirty();
    });
    return () => {
        if (!isDirty)
            call(), track();
        if (isDirty) {
            isDirty = !!listeners;
            return true;
        }
        if (solidJs.getListener()) {
            listeners++;
            solidJs.onCleanup(() => listeners--);
        }
        return false;
    };
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var es6 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

const isEqual = /*@__PURE__*/getDefaultExportFromCjs(es6);

/** \u56FE\u7247\u6587\u4EF6\u6269\u5C55\u540D\u7F29\u5199 */
const fileType = {
  j: 'jpg',
  p: 'png',
  g: 'gif',
  w: 'webp',
  b: 'bmp'
};
const throttle = (fn, wait = 100) => leadingAndTrailing(throttle$1, fn, wait);
const debounce = (fn, wait = 100) => debounce$1(fn, wait);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const clamp = (min, val, max) => Math.max(Math.min(max, val), min);
const inRange = (min, val, max) => val >= min && val <= max;
const getFileName = url => url.match(/.+\\/([^?]+)/)?.[1];

/** \u5224\u65AD\u4E24\u4E2A\u6570\u662F\u5426\u5728\u6307\u5B9A\u8BEF\u5DEE\u8303\u56F4\u5185\u76F8\u7B49 */
const approx = (val, target, range) => Math.abs(target - val) <= range;

/** \u521B\u5EFA\u4E00\u4E2A\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\u7684\u51FD\u6570 */
const onec = fn => {
  let hasRun = false;
  return () => {
    if (hasRun) return;
    hasRun = true;
    fn();
  };
};

// oxlint-disable-next-line func-style
function range(a, b, c) {
  switch (typeof b) {
    case 'undefined':
      return [...Array.from({
        length: a
      }).keys()];
    case 'number':
      {
        const list = [];
        for (let i = a; i < b; i++) list.push(c ? c(i) : i);
        return list;
      }
    case 'function':
      return Array.from({
        length: a
      }, (_, i) => b(i));
  }
}

/**
 * \u5BF9 document.querySelector \u7684\u5C01\u88C5
 * \u5C06\u9ED8\u8BA4\u8FD4\u56DE\u7C7B\u578B\u6539\u4E3A HTMLElement
 */
const querySelector = selector => document.querySelector(selector);

/**
 * \u5BF9 document.querySelector \u7684\u5C01\u88C5
 * \u5C06\u9ED8\u8BA4\u8FD4\u56DE\u7C7B\u578B\u6539\u4E3A HTMLElement
 */
const querySelectorAll = selector => [...document.querySelectorAll(selector)];

/** \u8FD4\u56DE Dom \u7684\u70B9\u51FB\u51FD\u6570 */
const querySelectorClick = (selector, textContent) => {
  let getDom;
  if (typeof selector === 'function') getDom = selector;else if (textContent) {
    getDom = () => querySelectorAll(selector).find(e => e.textContent?.includes(textContent));
  } else getDom = () => querySelector(selector);
  if (getDom()) return () => getDom()?.click();
};

/** \u627E\u51FA\u6570\u7EC4\u4E2D\u51FA\u73B0\u6700\u591A\u6B21\u7684\u5143\u7D20 */
const getMostItem = list => {
  const counts = new Map();
  for (const val of list) counts.set(val, (counts.get(val) ?? 0) + 1);
  return [...counts.entries()].reduce((maxItem, item) => maxItem[1] > item[1] ? maxItem : item)[0];
};

/** \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4E3A URL */
const isUrl = text => {
  // \u7B49\u6D4F\u89C8\u5668\u7248\u672C\u4E0A\u6765\u540E\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 URL.canParse
  try {
    return Boolean(new URL(text));
  } catch {
    return false;
  }
};

/** \u5C06 blob \u6570\u636E\u4F5C\u4E3A\u6587\u4EF6\u4FDD\u5B58\u81F3\u672C\u5730 */
const saveAs = (blob, name = 'download') => {
  const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  a.download = name;
  a.rel = 'noopener';
  a.href = URL.createObjectURL(blob);
  setTimeout(() => a.dispatchEvent(new MouseEvent('click')));
};

/** \u6EDA\u52A8\u9875\u9762\u5230\u6307\u5B9A\u5143\u7D20\u7684\u6240\u5728\u4F4D\u7F6E */
const scrollIntoView = (selector, behavior = 'instant') => querySelector(selector)?.scrollIntoView({
  behavior
});
/** \u786E\u4FDD\u51FD\u6570\u5728\u540C\u4E00\u65F6\u95F4\u4E0B\u53EA\u6709\u4E00\u4E2A\u5728\u8FD0\u884C */
const singleThreaded = (callback, initState) => {
  const state = {
    running: false,
    argList: [],
    continueRun: (...args) => state.argList.length > 0 || state.argList.push(args),
    ...initState
  };
  const work = async () => {
    if (state.argList.length === 0) return;
    const args = state.argList.shift();
    try {
      state.running = true;
      await callback(state, ...args);
    } catch (error) {
      await sleep(100);
      if (state.argList.length === 0) throw error;
    } finally {
      if (state.abandon) state.argList.length = 0;
      if (state.argList.length > 0) setTimeout(work, state.timeout);else state.running = false;
    }
  };
  return (...args) => {
    state.argList.push(args);
    if (!state.running) return work();
  };
};

/**
 * \u9650\u5236 Promise \u5E76\u53D1
 * @param fnList \u4EFB\u52A1\u51FD\u6570\u5217\u8868
 * @param callBack \u6210\u529F\u6267\u884C\u4E00\u4E2A Promise \u540E\u8C03\u7528\uFF0C\u4E3B\u8981\u7528\u4E8E\u663E\u793A\u8FDB\u5EA6
 * @param limit \u9650\u5236\u6570
 * @returns \u6240\u6709 Promise \u7684\u8FD4\u56DE\u503C
 */
const plimit = async (fnList, callBack = undefined, limit = 10) => {
  let doneNum = 0;
  const totalNum = fnList.length;
  const resList = [];
  const execPool = new Set();
  const taskList = fnList.map((fn, i) => {
    let p;
    return () => {
      p = (async () => {
        resList[i] = await fn();
        doneNum += 1;
        execPool.delete(p);
        callBack?.(doneNum, totalNum, resList, i);
      })();
      execPool.add(p);
    };
  });

  // eslint-disable-next-line no-unmodified-loop-condition
  while (doneNum !== totalNum) {
    while (taskList.length > 0 && execPool.size < limit) taskList.shift()();
    await Promise.race(execPool);
  }
  return resList;
};

/**
 * \u5224\u65AD\u4F7F\u7528\u53C2\u6570\u989C\u8272\u4F5C\u4E3A\u9ED8\u8BA4\u503C\u65F6\u662F\u5426\u9700\u8981\u5207\u6362\u4E3A\u9ED1\u6697\u6A21\u5F0F
 * @param hexColor \u5341\u516D\u8FDB\u5236\u989C\u8272\u3002\u4F8B\u5982 #112233
 */
const needDarkMode = hexColor => {
  // by: https://24ways.org/2010/calculating-color-contrast
  const r = Number.parseInt(hexColor.slice(1, 3), 16);
  const g = Number.parseInt(hexColor.slice(3, 5), 16);
  const b = Number.parseInt(hexColor.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 128;
};

// oxlint-disable-next-line func-style
async function wait(fn, timeout = Number.POSITIVE_INFINITY, waitTime = 100) {
  let res = await fn();
  let _timeout = timeout;
  while (_timeout > 0 && !res) {
    await sleep(waitTime);
    _timeout -= waitTime;
    res = await fn();
  }
  return res;
}

async function waitDom(selector, timeout) {
  return wait(() => querySelector(selector), timeout);
}

/** \u7B49\u5F85\u6307\u5B9A\u7684\u56FE\u7247\u5143\u7D20\u52A0\u8F7D\u5B8C\u6210 */
const waitImgLoad = (target, timeout) => new Promise((resolve, reject) => {
  const img = typeof target === 'string' ? new Image() : target;
  if (img.complete && img.naturalHeight) resolve(img);
  const id = timeout ? window.setTimeout(() => reject(new Error('timeout')), timeout) : undefined;
  const handleError = e => {
    window.clearTimeout(id);
    reject(new Error(e.message));
  };
  const handleLoad = () => {
    window.clearTimeout(id);
    img.removeEventListener('error', handleError);
    resolve(img);
  };
  img.addEventListener('load', handleLoad, {
    once: true
  });
  img.addEventListener('error', handleError, {
    once: true
  });
  if (typeof target === 'string') img.src = target;
});

/** \u5C06\u6307\u5B9A\u7684\u5E03\u5C14\u503C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u6216\u672A\u5B9A\u4E49 */
const boolDataVal = val => val ? '' : undefined;

/** \u6D4B\u8BD5\u56FE\u7247 url \u80FD\u5426\u6B63\u786E\u52A0\u8F7D */
const testImgUrl = url => new Promise(resolve => {
  const img = new Image();
  img.onload = () => resolve(true);
  img.onerror = () => resolve(false);
  img.src = url;
});
const canvasToBlob = (canvas, type, quality = 1) => {
  if (canvas instanceof OffscreenCanvas) return canvas.convertToBlob({
    type,
    quality
  });
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Canvas toBlob failed')), type, quality);
  });
};

/**
 * \u6C42 a \u548C b \u7684\u5DEE\u96C6\uFF0C\u76F8\u5F53\u4E8E\u4ECE a \u4E2D\u5220\u53BB\u548C b \u76F8\u540C\u7684\u5C5E\u6027
 *
 * \u4E0D\u4F1A\u4FEE\u6539\u53C2\u6570\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u7684\u662F\u65B0\u5BF9\u8C61
 */
const difference = (a, b) => {
  const res = {};
  const keys = Object.keys(a);
  for (const key of keys) {
    if (typeof a[key] === 'object' && typeof b[key] === 'object') {
      const _res = difference(a[key], b[key]);
      if (Object.keys(_res).length > 0) res[key] = _res;
    } else if (a[key] !== b?.[key]) res[key] = a[key];
  }
  return res;
};
const _assign = (a, b) => {
  // oxlint-disable-next-line prefer-structured-clone
  const res = JSON.parse(JSON.stringify(a));
  const keys = Object.keys(b);
  for (const key of keys) {
    if (res[key] === undefined) res[key] = b[key];else if (typeof b[key] === 'object') {
      const _res = _assign(res[key], b[key]);
      if (Object.keys(_res).length > 0) res[key] = _res;
    } else if (res[key] !== b[key]) res[key] = b[key];
  }
  return res;
};

/**
 * Object.assign \u7684\u6DF1\u62F7\u8D1D\u7248\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u5B50\u5BF9\u8C61\u5C5E\u6027\u7684\u7F3A\u5931
 *
 * \u4E0D\u4F1A\u4FEE\u6539\u53C2\u6570\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u7684\u662F\u65B0\u5BF9\u8C61
 */
const assign = (target, ...sources) => {
  let res = target;
  for (const source of sources) if (typeof source === 'object') res = _assign(res, source);
  return res;
};

/** \u6839\u636E\u8DEF\u5F84\u83B7\u53D6\u5BF9\u8C61\u4E0B\u7684\u6307\u5B9A\u503C */
const byPath = (obj, path, handleVal) => {
  const keys = typeof path === 'string' ? path.split('.') : path;
  let target = obj;
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    // \u517C\u5BB9\u542B\u6709\u300C.\u300D\u7684 key
    while (!Reflect.has(target, key) && i < keys.length) {
      i += 1;
      if (keys[i] === undefined) break;
      key += \`.\${keys[i]}\`;
    }
    if (handleVal && i > keys.length - 2 && Reflect.has(target, key)) {
      const res = handleVal(target, key);
      while (i < keys.length - 1) {
        target = target[key];
        i += 1;
        key = keys[i];
      }
      if (res !== undefined) target[key] = res;
      break;
    }
    target = target[key];
  }
  if (target === obj) return null;
  return target;
};
const requestIdleCallback = (callback, timeout) => {
  if (Reflect.has(window, 'requestIdleCallback')) return window.requestIdleCallback(callback, {
    timeout
  });
  return window.setTimeout(callback, 16);
};

/** \u83B7\u53D6\u952E\u76D8\u4E8B\u4EF6\u7684\u7F16\u7801 */
const getKeyboardCode = e => {
  let {
    key
  } = e;
  switch (key) {
    case 'Shift':
    case 'Control':
    case 'Alt':
      return key;
  }
  key = key.replaceAll(/\\b[A-Z]\\b/g, match => match.toLowerCase());
  if (e.ctrlKey) key = \`Ctrl + \${key}\`;
  if (e.altKey) key = \`Alt + \${key}\`;
  if (e.shiftKey) key = \`Shift + \${key}\`;
  return key;
};

/** \u5C06\u5FEB\u6377\u952E\u7684\u7F16\u7801\u8F6C\u6362\u6210\u66F4\u6613\u8BFB\u7684\u5F62\u5F0F */
const keyboardCodeToText = code => code.replace('Control', 'Ctrl').replace('ArrowUp', '\u2191').replace('ArrowDown', '\u2193').replace('ArrowLeft', '\u2190').replace('ArrowRight', '\u2192').replace(/^\\s$/, 'Space');

/** \u5C06 HTML \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A DOM \u5BF9\u8C61 */
const domParse = html => new DOMParser().parseFromString(html, 'text/html');

/** \u76D1\u542C\u952E\u76D8\u4E8B\u4EF6 */
const linstenKeydown = (handler, capture) => window.addEventListener('keydown', e => {
  // \u8DF3\u8FC7\u8F93\u5165\u6846\u7684\u952E\u76D8\u4E8B\u4EF6
  switch (e.target.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return;
  }
  return handler(e);
}, {
  capture
});

/**
 * \u52AB\u6301\u4FEE\u6539\u539F\u7F51\u9875\u4E0A\u7684\u51FD\u6570
 *
 * \u5982\u679C\u4F20\u5165\u51FD\u6570\u7684\u6240\u9700\u53C2\u6570\u4E3A\u96F6\uFF0C\u5C06\u5728\u539F\u51FD\u6570\u6267\u884C\u5B8C\u540E\u81EA\u52A8\u8C03\u7528
 */
const hijackFn = (fnName, fn) => {
  const rawFn = unsafeWindow[fnName];
  unsafeWindow[fnName] = fn.length === 0 ? (...args) => {
    const res = rawFn(...args);
    fn();
    return res;
  } : (...args) => fn(rawFn, args);
};
const getGmValue = async (name, setValueFn) => {
  const value = await GM.getValue(name);
  if (value !== undefined) return value;
  await setValueFn();
  return await GM.getValue(name);
};

/** \u6839\u636E\u8303\u56F4\u6587\u672C\u63D0\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u5143\u7D20\u7684 index */
const extractRange = (rangeText, length) => {
  const list = new Set();
  for (const text of rangeText.replaceAll(/[^\\d,-]/g, '').split(',')) {
    if (/^\\d+$/.test(text)) list.add(Number(text) - 1);else if (/^\\d*-\\d*$/.test(text)) {
      let [start, end] = text.split('-').map(Number);
      end ||= length;
      for (start--, end--; start <= end; start++) list.add(start);
    }
  }
  return list;
};

/** extractRange \u7684\u9006\u5411\uFF0C\u6309\u7167\u76F8\u540C\u7684\u8BED\u6CD5\u8868\u8FF0\u4E00\u4E2A\u7ED3\u679C\u6570\u7EC4 */
const descRange = (list, length) => {
  let text = '';
  const nowRange = [];
  const pushRange = newIndex => {
    if (nowRange.length === 0) return;
    if (text.length > 0) text += ', ';
    if (nowRange.length === 1) text += nowRange[0] + 1;else {
      const end = newIndex === undefined && nowRange[1] === length - 1 ? '' : nowRange[1] + 1;
      text += \`\${nowRange[0] + 1}-\${end}\`;
    }
    nowRange.length = 0;
    if (newIndex !== undefined) nowRange[0] = newIndex;
  };
  for (const i of list) {
    switch (nowRange.length) {
      case 0:
        nowRange[0] = i;
        break;
      case 1:
        if (i === nowRange[0] + 1) nowRange[1] = i;else pushRange(i);
        break;
      case 2:
        if (i === nowRange[1] + 1) nowRange[1] = i;else pushRange(i);
        break;
    }
  }
  pushRange();
  return text;
};

/** \u76D1\u542C url \u53D8\u5316 */
const onUrlChange = (fn, handleUrl = location => location.href) => {
  let lastUrl = '';
  const refresh = singleThreaded(async () => {
    if (!(await wait(() => handleUrl(location) !== lastUrl, 5000))) return;
    const nowUrl = handleUrl(location);
    await fn(lastUrl, nowUrl);
    lastUrl = nowUrl;
  });
  const controller = new AbortController();
  for (const eventName of ['click', 'popstate']) window.addEventListener(eventName, refresh, {
    capture: true,
    signal: controller.signal
  });
  refresh();
  return () => controller.abort();
};

/** wait\uFF0C\u4F46\u662F\u53EA\u5728 url \u53D8\u5316\u65F6\u5224\u65AD */
const waitUrlChange = isValidUrl => new Promise(resolve => {
  const abort = onUrlChange(() => {
    if (!isValidUrl()) return;
    resolve();
    abort();
  });
});

// TODO: \u7528\u8FD9\u4E2A\u91CD\u6784\u76F8\u5173\u5B9E\u73B0
class AnimationFrame {
  animationId = 0;
  call = () => {
    this.animationId = requestAnimationFrame(this.frame);
  };
  cancel = () => {
    if (!this.animationId) return;
    cancelAnimationFrame(this.animationId);
    this.animationId = 0;
  };
}

/** \u9501\u5B9A\u5C4F\u5E55\u7981\u6B62\u81EA\u52A8\u7184\u5C4F */
class WakeLock {
  isSupported = false;
  lock = null;
  constructor() {
    if (!('wakeLock' in navigator)) return;
    this.isSupported = true;
  }
  on = async () => {
    if (!this.isSupported) return null;
    try {
      this.lock = await navigator.wakeLock.request('screen');
      return this.lock.released;
    } catch {
      return false;
    }
  };
  off = async () => {
    if (!this.lock) return;
    await this.lock.release();
    this.lock = null;
  };
}
const getImageData = img => {
  const {
    naturalWidth: width,
    naturalHeight: height
  } = img;
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d', {
    willReadFrequently: true
  });
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, width, height);
};

const [lang, setLang] = solidJs.createSignal('zh');
const setInitLang = async () => setLang(await languages.getInitLang());
const t = solidJs.createRoot(() => {
  solidJs.createEffect(solidJs.on(lang, () => languages.setSaveLang(lang()), {
    defer: true
  }));
  const locales = solidJs.createMemo(() => {
    switch (lang()) {
      case 'en':
        return en;
      case 'ru':
        return ru;
      default:
        return zh;
    }
  });
  return (keys, variables) => {
    let text = byPath(locales(), keys) ?? '';
    if (variables) for (const [k, v] of Object.entries(variables)) text = text.replaceAll(\`{{\${k}}}\`, \`\${String(v)}\`);
    return text;
  };
});

const prefix = ['%cComicRead', 'background-color: #607d8b; color: white; padding: 2px 4px; border-radius: 4px;'];

// oxlint-disable-next-line no-console
const log = (...args) => console.log(...prefix, ...args);
log.warn = (...args) => console.warn(...prefix, ...args);
log.error = (...args) => console.error(...prefix, ...args);

let publicOwner;
solidJs.createRoot(() => {
  publicOwner = solidJs.getOwner();
});

/** \u4F1A\u81EA\u52A8\u8BBE\u7F6E equals \u7684 createSignal */
const createEqualsSignal = (init, options) => solidJs.createSignal(init, {
  equals: isEqual,
  ...options
});

/** \u4F1A\u81EA\u52A8\u8BBE\u7F6E equals \u548C createRoot \u7684 createMemo */
const createRootMemo = (fn, init, options) => {
  // \u5982\u679C\u51FD\u6570\u5DF2\u7ECF\u662F createMemo \u521B\u5EFA\u7684\uFF0C\u5C31\u76F4\u63A5\u4F7F\u7528
  if (fn.name === 'bound readSignal') return fn;
  const _init = init ?? fn(undefined);
  // \u81EA\u52A8\u4E3A\u5BF9\u8C61\u7C7B\u578B\u8BBE\u7F6E equals
  const _options = options?.equals === undefined && typeof _init === 'object' ? {
    ...options,
    equals: isEqual
  } : options;
  return solidJs.getOwner() ? solidJs.createMemo(fn, _init, _options) : solidJs.runWithOwner(publicOwner, () => solidJs.createMemo(fn, _init, _options));
};

/** \u8282\u6D41\u7684 createMemo */
const createThrottleMemo = (fn, wait = 100, init = fn(undefined), options = undefined) => {
  const scheduled = createScheduled(_fn => throttle(_fn, wait));
  return createRootMemo(prev => scheduled() ? fn(prev) : prev, init, options);
};
const createMemoMap = fnMap => {
  const memoMap = Object.fromEntries(Object.entries(fnMap).map(([key, fn]) => [key, createRootMemo(fn)]));
  const map = createRootMemo(() => {
    const obj = {};
    for (const key of Object.keys(memoMap)) Reflect.set(obj, key, memoMap[key]());
    return obj;
  });
  return map;
};
const createRootEffect = (fn, val, options) => solidJs.getOwner() ? solidJs.createEffect(fn, val, options) : solidJs.runWithOwner(publicOwner, () => solidJs.createEffect(fn, val, options));
const createEffectOn = (deps, fn, options) => createRootEffect(solidJs.on(deps, fn, options));
const onAutoMount = fn => {
  const owner = solidJs.getOwner();
  if (!owner) return fn(owner);
  solidJs.onMount(() => {
    const cleanFn = fn(owner);
    if (cleanFn) solidJs.onCleanup(cleanFn);
  });
};

const promisifyRequest = request => new Promise((resolve, reject) => {
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});
const openDb = (name, version, initSchema) => new Promise((resolve, reject) => {
  const request = indexedDB.open(\`ComicReadScript\${name}\`, version);
  request.onupgradeneeded = () => initSchema(request.result);
  request.onsuccess = () => resolve(request.result);
  request.onerror = error => {
    console.error('\u6570\u636E\u5E93\u6253\u5F00\u5931\u8D25', error);
    reject(new Error('\u6570\u636E\u5E93\u6253\u5F00\u5931\u8D25'));
  };
});
const useCache = async (schema, name = '', version = 2) => {
  const db = await openDb(name, version, typeof schema === 'function' ? schema : db => {
    for (const storeName of db.objectStoreNames) if (!Reflect.has(schema, storeName)) db.deleteObjectStore(storeName);
    for (const storeName of Object.keys(schema)) {
      if (!db.objectStoreNames.contains(storeName)) db.createObjectStore(storeName, {
        keyPath: schema[storeName]
      });
    }
  });
  return {
    set: (storeName, value) => promisifyRequest(db.transaction(storeName, 'readwrite').objectStore(storeName).put(value)),
    get: (storeName, query) => promisifyRequest(db.transaction(storeName, 'readonly').objectStore(storeName).get(query)),
    del: (storeName, query) => promisifyRequest(db.transaction(storeName, 'readwrite').objectStore(storeName).delete(query)),
    each(storeName, callback) {
      const request = db.transaction(storeName, 'readwrite').objectStore(storeName).openCursor();
      request.onsuccess = async function onsuccess(event) {
        const cursor = event.target.result;
        if (!cursor) return;
        await callback(cursor.value, cursor);
        cursor.continue();
      };
    }
  };
};

const createPointerState = (e, type = 'down') => {
  const xy = [e.clientX, e.clientY];
  return {
    id: e.pointerId,
    type,
    xy,
    initial: xy,
    last: xy,
    startTime: performance.now(),
    target: e.target
  };
};
const useDrag = ({
  ref,
  handleDrag,
  easyMode,
  handleClick,
  skip,
  setCapture,
  touches = new Map()
}) => {
  onAutoMount(() => {
    const controller = new AbortController();
    const options = {
      capture: false,
      passive: true,
      signal: controller.signal
    };
    let allowClick = -1;
    const handleDown = e => {
      if (skip?.(e)) return;
      e.stopPropagation();
      if (!easyMode?.() && e.buttons !== 1) return;
      if (setCapture) ref.setPointerCapture(e.pointerId);
      const state = createPointerState(e);
      touches.set(e.pointerId, state);
      handleDrag(state, e);

      // \u5728\u65F6\u9650\u5185\u677E\u624B\u624D\u89E6\u53D1 click \u4E8B\u4EF6
      allowClick = window.setTimeout(() => {
        allowClick = 0;
      }, 300);
    };
    const handleMove = e => {
      e.preventDefault();
      if (!easyMode?.() && e.buttons !== 1) return;
      const state = touches.get(e.pointerId);
      if (!state) return;
      state.type = 'move';
      state.xy = [e.clientX, e.clientY];
      handleDrag(state, e);
      state.last = state.xy;

      // \u62D6\u62FD\u4E00\u6BB5\u8DDD\u79BB\u540E\u5C31\u4E0D\u89E6\u53D1 click \u4E86
      if (allowClick > 0 && (Math.abs(e.clientX - state.initial[0]) > 5 || Math.abs(e.clientY - state.initial[1]) > 5)) {
        window.clearTimeout(allowClick);
        allowClick = -2;
      }
    };
    const handleUp = e => {
      e.stopPropagation();
      ref.releasePointerCapture(e.pointerId);
      const state = touches.get(e.pointerId);
      if (!state) return;
      touches.delete(e.pointerId);
      state.type = 'up';
      state.xy = [e.clientX, e.clientY];

      // \u5224\u65AD\u5355\u51FB
      if (handleClick && allowClick && touches.size === 0 && approx(state.xy[0] - state.initial[0], 0, 5) && approx(state.xy[1] - state.initial[1], 0, 5)) handleClick(e, state.target);
      window.clearTimeout(allowClick);
      handleDrag(state, e);
    };
    const handleCancel = e => {
      e.stopPropagation();
      ref.releasePointerCapture(e.pointerId);
      const state = touches.get(e.pointerId);
      if (!state) return;
      state.type = 'cancel';
      handleDrag(state, e);
      touches.clear();
    };
    ref.addEventListener('pointerdown', handleDown, options);
    ref.addEventListener('pointermove', handleMove, {
      ...options,
      passive: false
    });
    ref.addEventListener('pointerup', handleUp, options);
    ref.addEventListener('pointercancel', handleCancel, options);
    if (easyMode) {
      ref.addEventListener('pointerover', handleDown, options);
      ref.addEventListener('pointerout', handleUp, options);
    }
    ref.addEventListener('click', e => {
      if (allowClick > 0 && touches.size === 0 || skip?.(e)) return;
      e.stopPropagation();
      e.preventDefault();
    }, {
      capture: true
    });
    return () => controller.abort();
  });
};

const useStore = initState => {
  const [store$1, _setState] = store.createStore(initState);
  const setState = (...args) => {
    if (args.length === 1 && typeof args[0] === 'function') return _setState(store.produce(args[0]));
    return _setState(...args);
  };
  return {
    store: store$1,
    setState
  };
};

const useStyleSheet = e => {
  const styleSheet = new CSSStyleSheet();
  onAutoMount(() => {
    const root = e?.getRootNode() ?? document;
    root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet];
    return () => {
      const index = root.adoptedStyleSheets.indexOf(styleSheet);
      if (index !== -1) root.adoptedStyleSheets.splice(index, 1);
    };
  });
  return styleSheet;
};
const useStyle = (css, e) => {
  const styleSheet = useStyleSheet(e);
  if (typeof css === 'string') styleSheet.replaceSync(css);else createEffectOn(createRootMemo(css), style => styleSheet.replaceSync(style));
};
/** \u7528 CSSStyleSheet \u5B9E\u73B0\u548C\u4FEE\u6539 style \u4E00\u6837\u7684\u6548\u679C */
const useStyleMemo = (selector, styleMapArg, e) => {
  const styleSheet = useStyleSheet(e);
  styleSheet.insertRule(\`\${selector} { }\`);
  const {
    style
  } = styleSheet.cssRules[0];
  // \u7B49\u706B\u72D0\u5B9E\u73B0\u4E86 CSS Typed OM \u540E\u6539\u7528 styleMap \u6027\u80FD\u4F1A\u66F4\u597D\uFF0C\u4E5F\u80FD\u4F7F\u7528 CSS Typed OM \u7684 \u5355\u4F4D

  const setStyle = (key, val) => {
    if (val === undefined || val === '') return style.removeProperty(key);
    style.setProperty(key, typeof val === 'string' ? val : \`\${val}\`);
  };
  const styleMapList = Array.isArray(styleMapArg) ? styleMapArg : [styleMapArg];
  for (const styleMap of styleMapList) {
    if (typeof styleMap === 'object') {
      for (const [key, val] of Object.entries(styleMap)) {
        const styleText = createRootMemo(val);
        createEffectOn(styleText, newVal => setStyle(key, newVal));
      }
    } else {
      const styleMemoMap = createRootMemo(styleMap);
      createEffectOn(styleMemoMap, map => {
        for (const [key, val] of Object.entries(map)) setStyle(key, val);
      });
    }
  }
};

exports.AnimationFrame = AnimationFrame;
exports.FaviconProgress = FaviconProgress;
exports.WakeLock = WakeLock;
exports.approx = approx;
exports.assign = assign;
exports.boolDataVal = boolDataVal;
exports.byPath = byPath;
exports.canvasToBlob = canvasToBlob;
exports.clamp = clamp;
exports.createEffectOn = createEffectOn;
exports.createEqualsSignal = createEqualsSignal;
exports.createMemoMap = createMemoMap;
exports.createRootEffect = createRootEffect;
exports.createRootMemo = createRootMemo;
exports.createScheduled = createScheduled;
exports.createThrottleMemo = createThrottleMemo;
exports.debounce = debounce;
exports.descRange = descRange;
exports.difference = difference;
exports.domParse = domParse;
exports.extractRange = extractRange;
exports.fileType = fileType;
exports.getFileName = getFileName;
exports.getGmValue = getGmValue;
exports.getImageData = getImageData;
exports.getKeyboardCode = getKeyboardCode;
exports.getMostItem = getMostItem;
exports.hijackFn = hijackFn;
exports.inRange = inRange;
exports.isEqual = isEqual;
exports.isUrl = isUrl;
exports.keyboardCodeToText = keyboardCodeToText;
exports.lang = lang;
exports.linstenKeydown = linstenKeydown;
exports.log = log;
exports.mountComponents = mountComponents;
exports.needDarkMode = needDarkMode;
exports.onAutoMount = onAutoMount;
exports.onUrlChange = onUrlChange;
exports.onec = onec;
exports.plimit = plimit;
exports.promisifyRequest = promisifyRequest;
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;
exports.querySelectorClick = querySelectorClick;
exports.range = range;
exports.requestIdleCallback = requestIdleCallback;
exports.saveAs = saveAs;
exports.scrollIntoView = scrollIntoView;
exports.setInitLang = setInitLang;
exports.setLang = setLang;
exports.singleThreaded = singleThreaded;
exports.sleep = sleep;
exports.t = t;
exports.testImgUrl = testImgUrl;
exports.throttle = throttle;
exports.useCache = useCache;
exports.useDrag = useDrag;
exports.useFaviconProgress = useFaviconProgress;
exports.useStore = useStore;
exports.useStyle = useStyle;
exports.useStyleMemo = useStyleMemo;
exports.wait = wait;
exports.waitDom = waitDom;
exports.waitImgLoad = waitImgLoad;
exports.waitUrlChange = waitUrlChange;
`;break;case"request":o=`
const Toast = require('components/Toast');
const helper = require('helper');

// \u5C06 xmlHttpRequest \u5305\u88C5\u4E3A Promise
const xmlHttpRequest = details => new Promise((resolve, reject) => {
  const handleError = error => {
    details.onerror?.(error);
    console.error('GM_xmlhttpRequest Error', error);
    reject(new Error(error?.responseText || 'GM_xmlhttpRequest Error'));
  };
  const abort = GM_xmlhttpRequest({
    ...details,
    onload(res) {
      details.onload?.call(res, res);
      resolve(res);
    },
    onerror: handleError,
    ontimeout: handleError,
    onabort: handleError
  });
  details.signal?.addEventListener('abort', abort.abort);
});
/** \u53D1\u8D77\u8BF7\u6C42 */
const request = async (url, details = {}, retryNum = 0, errorNum = 0) => {
  const headers = {
    Referer: location.href
  };
  const errorText = \`\${details?.errorText ?? helper.t('alert.comic_load_error')}\\nurl: \${url}\`;
  details.fetch ??= url.startsWith('/') || url.startsWith(location.origin);
  try {
    // \u867D\u7136 GM_xmlhttpRequest \u6709 fetch \u9009\u9879\uFF0C\u4F46\u5728 stay \u4E0A\u4E0D\u592A\u7A33\u5B9A
    // \u4E3A\u4E86\u652F\u6301 ios \u7AEF\u53EA\u80FD\u81EA\u5DF1\u5B9E\u73B0\u4E00\u4E0B\u4E86
    if (details.fetch) {
      const res = await fetch(url, {
        method: 'GET',
        headers,
        signal: AbortSignal.timeout?.(details.timeout ?? 1000 * 10),
        body: details.data,
        ...details
      });
      if (!details.noCheckCode && res.status !== 200) {
        helper.log.error(errorText, res);
        throw new Error(errorText);
      }
      let response = null;
      switch (details.responseType) {
        case 'arraybuffer':
          response = await res.arrayBuffer();
          break;
        case 'blob':
          response = await res.blob();
          break;
        case 'json':
          response = await res.json();
          break;
      }
      const _res = {
        status: res.status,
        statusText: res.statusText,
        response,
        responseText: response ? '' : await res.text()
      };
      details.onload?.call(_res, _res);
      return _res;
    }
    if (typeof GM_xmlhttpRequest === 'undefined') throw new Error(helper.t('pwa.alert.userscript_not_installed'));
    let targetUrl = url;
    // https://github.com/hymbz/ComicReadScript/issues/195
    // \u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B Tampermonkey \u65E0\u6CD5\u6B63\u786E\u5904\u7406\u76F8\u5BF9\u534F\u8BAE\u7684 url
    // \u5B9E\u9645 finalUrl \u4F1A\u53D8\u6210 \`///xxx.xxx\` \u83AB\u540D\u591A\u4E86\u4E00\u4E2A\u659C\u6760
    // \u7136\u800C\u5728\u4FEE\u6539\u4EE3\u7801\u53D1\u51FA\u6B63\u786E\u7684\u8BF7\u6C42\u540E\uFF0C\u5C31\u518D\u4E5F\u65E0\u6CD5\u590D\u73B0\u4E86
    // \u4E0D\u8FC7\u4EE5\u9632\u4E07\u4E00\u8FD8\u662F\u5728\u8FD9\u91CC\u624B\u52A8\u5904\u7406\u4E0B
    if (url.startsWith('//')) targetUrl = \`http:\${url}\`;
    // stay \u6CA1\u6CD5\u5904\u7406\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u5F97\u8F6C\u6362\u4E00\u4E0B
    else if (url.startsWith('/')) targetUrl = \`\${location.origin}\${url}\`;
    const res = await xmlHttpRequest({
      method: 'GET',
      url: targetUrl,
      headers,
      timeout: 1000 * 10,
      ...details
    });
    if (!details.noCheckCode && res.status !== 200) {
      helper.log.error(errorText, res);
      throw new Error(errorText);
    }

    // stay \u597D\u50CF\u6CA1\u6709\u6B63\u786E\u5904\u7406 json\uFF0C\u53EA\u80FD\u518D\u5355\u72EC\u5224\u65AD\u5904\u7406\u4E00\u4E0B
    if (details.responseType === 'json' && (typeof res.response !== 'object' || Object.keys(res.response).length === 0)) {
      try {
        Reflect.set(res, 'response', JSON.parse(res.responseText));
      } catch {}
    }
    return res;
  } catch (error) {
    if (details && details.retryFetch && retryNum === 0) {
      console.warn('retryFetch', url);
      details.fetch = !details.fetch;
      if (typeof details.retryFetch === 'function') details.retryFetch(details);
      return request(url, details, retryNum + 1, errorNum);
    }
    if (errorNum >= retryNum) {
      (details.noTip ? console.error : Toast.toast.error)(\`\${errorText}\\nerror: \${error.message}\`);
      throw new Error(errorText);
    }
    helper.log.error(errorText, error);
    await helper.sleep(1000);
    return request(url, details, retryNum, errorNum + 1);
  }
};

/** \u8F6E\u6D41\u5411\u591A\u4E2A api \u53D1\u8D77\u8BF7\u6C42 */
const eachApi = async (url, baseUrlList, details) => {
  for (const baseUrl of baseUrlList) {
    try {
      return await request(\`\${baseUrl}\${url}\`, {
        ...details,
        noTip: true
      });
    } catch {}
  }
  const errorText = details?.errorText ?? helper.t('alert.comic_load_error');
  if (!details?.noTip) Toast.toast.error(errorText);
  helper.log.error('\u6240\u6709 api \u8BF7\u6C42\u5747\u5931\u8D25', url, baseUrlList, details);
  throw new Error(errorText);
};

exports.eachApi = eachApi;
exports.request = request;
`;break;case"components/Manga":o=`
const web = require('solid-js/web');
const solidJs = require('solid-js');
const helper = require('helper');
const request = require('request');
const Comlink = require('comlink');
const store$1 = require('solid-js/store');
const worker = require('worker/ImageRecognition');
const Toast = require('components/Toast');
const worker$1 = require('worker/ImageUpscale');

const imgState = {
  imgMap: {},
  imgList: [],
  pageList: [],
  fillEffect: {
    '-1': true
  },
  showRange: [0, 0],
  renderRange: [0, 0],
  loadingRange: [0, 0],
  defaultImgType: ''
};

const _defaultOption = {
  dir: 'rtl',
  scrollbar: {
    position: 'auto',
    autoHidden: false,
    showImgStatus: true,
    easyScroll: false
  },
  clickPageTurn: {
    enabled: 'ontouchstart' in document.documentElement,
    reverse: false,
    area: 'left_right'
  },
  firstPageFill: true,
  disableZoom: false,
  darkMode: false,
  autoDarkMode: false,
  swapPageTurnKey: false,
  scroolEnd: 'auto',
  alwaysLoadAllImg: false,
  showComment: true,
  preloadPageNum: 20,
  pageNum: 0,
  autoSwitchPageMode: true,
  autoHiddenMouse: true,
  autoFullscreen: false,
  zoom: {
    ratio: 100,
    offset: {
      x: 0,
      y: 0
    }
  },
  scrollMode: {
    enabled: false,
    spacing: 0,
    imgScale: 1,
    fitToWidth: false,
    abreastMode: false,
    abreastDuplicate: 0.1,
    doubleMode: false
  },
  imgRecognition: {
    enabled: false,
    background: true,
    pageFill: true,
    upscale: false
  },
  translation: {
    server: 'disable',
    localUrl: undefined,
    forceRetry: false,
    // \u4E00\u4E9B\u53C2\u6570\u6CA1\u6709\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF0C\u800C\u662F\u76F4\u63A5\u4F7F\u7528\u6587\u6863\u7684\u63A8\u8350\u503C
    // https://github.com/zyddnys/manga-image-translator?tab=readme-ov-file#recommended-modules
    options: {
      detector: {
        detector: 'ctd',
        detection_size: '1536',
        box_threshold: 0.7,
        unclip_ratio: 2.3
      },
      render: {
        direction: 'auto'
      },
      translator: {
        translator: 'gpt3.5',
        target_lang: {
          zh: 'CHS',
          en: 'ENG',
          ru: 'RUS'
        }[helper.lang()] ?? 'CHS'
      },
      inpainter: {
        inpainter: 'lama_large',
        inpainting_size: '2048'
      },
      mask_dilation_offset: 30
    },
    onlyDownloadTranslated: false
  },
  autoScroll: {
    enabled: false,
    interval: 3000,
    distance: 200,
    triggerEnd: false
  }
};
const defaultOption = () => structuredClone(_defaultOption);
const optionState = {
  defaultOption: defaultOption(),
  option: defaultOption()
};

const otherState = {
  title: '',
  /**
   * \u7528\u4E8E\u9632\u6B62\u6EDA\u8F6E\u8FDE\u7EED\u6EDA\u52A8\u5BFC\u81F4\u8FC7\u5FEB\u89E6\u53D1\u4E8B\u4EF6\u7684\u9501
   *
   * - \u5728\u9996\u6B21\u89E6\u53D1\u7ED3\u675F\u9875\u65F6\u5F00\u542F\uFF0C\u4E00\u6BB5\u65F6\u95F4\u5173\u95ED\u3002\u5F00\u542F\u65F6\u7981\u6B62\u89E6\u53D1\u7ED3\u675F\u9875\u7684\u4E0A\u4E0B\u8BDD\u5207\u6362\u529F\u80FD\u3002
   */
  scrollLock: false,
  /** \u5F53\u524D\u662F\u5426\u5904\u4E8E\u5168\u5C4F\u72B6\u6001 */
  fullscreen: false,
  rootSize: {
    width: 0,
    height: 0
  },
  scrollbarSize: {
    width: 0,
    height: 0
  },
  autoScroll: {
    play: false,
    progress: 0
  },
  supportWorker: false,
  supportUpscaleImage: true
};

const propState = {
  commentList: undefined,
  hotkeys: {},
  prop: {
    onExit: undefined,
    onPrev: undefined,
    onNext: undefined,
    onLoading: undefined,
    onOptionChange: undefined,
    onHotkeysChange: undefined,
    editButtonList: list => list,
    editSettingList: list => list
  }
};

const showState = {
  isMobile: false,
  isDragMode: false,
  activePageIndex: 0,
  gridMode: false,
  show: {
    toolbar: false,
    scrollbar: false,
    touchArea: false,
    endPage: undefined
  },
  page: {
    anima: '',
    vertical: false,
    offset: {
      x: {
        pct: 0,
        px: 0
      },
      y: {
        pct: 0,
        px: 0
      }
    }
  }
};

const initStore = {
  ...imgState,
  ...showState,
  ...propState,
  ...optionState,
  ...otherState
};
const {
  store,
  setState
} = helper.useStore({
  ...initStore
});
const refs = {
  root: undefined,
  mangaBox: undefined,
  mangaFlow: undefined,
  touchArea: undefined,
  scrollbar: undefined,
  settingPanel: undefined,
  // \u7ED3\u675F\u9875\u4E0A\u7684\u6309\u94AE
  prev: undefined,
  next: undefined,
  exit: undefined
};

// 1. \u56E0\u4E3A\u4E0D\u540C\u6C49\u5316\u7EC4\u5904\u7406\u60C5\u51B5\u4E0D\u540C\u4E0D\u53EF\u80FD\u5168\u90E8\u9002\u914D\uFF0C\u6240\u4EE5\u53EA\u80FD\u662F\u5C3D\u91CF\u9002\u914D*\u51FA\u73B0\u9891\u7387\u66F4\u591A*\u7684\u60C5\u51B5
/** \u5224\u65AD\u56FE\u7247\u662F\u5426\u662F\u8DE8\u9875\u56FE */
const isWideImg = img => {
  switch (img.type ?? store.defaultImgType) {
    case 'long':
    case 'wide':
      return true;
    default:
      return false;
  }
};

/** \u6839\u636E\u586B\u5145\u9875\u8BBE\u7F6E\u53CC\u9875\u6392\u5217\u5355\u9875\u56FE\u7247 */
const arrangeImg = (pageList, fill) => {
  if (pageList.length === 0) return [];
  const newPageList = [];
  let imgCache = fill ? [-1] : [];
  for (const i of pageList) {
    imgCache.push(i);
    if (imgCache.length === 2) {
      newPageList.push(imgCache);
      imgCache = [];
    }
  }
  if (imgCache.length === 1 && imgCache[0] !== -1) {
    imgCache.push(-1);
    newPageList.push(imgCache);
  }
  return newPageList;
};

/** \u8BA1\u7B97\u6307\u5B9A\u56FE\u7247\u6D41\u4E2D\u7684\u5DE6\u53F3\u9875\u4F4D\u7F6E\u6B63\u786E\u7684\u9875\u6570 */
const computeAccuracy = (imgList, pageList) => {
  let accuracy = 0;
  for (const [a, b] of pageList) {
    if ((imgList[a]?.blankMargin?.left ?? 0) > 0.04) accuracy += 1;
    if (b === undefined) break;
    if ((imgList[b]?.blankMargin?.right ?? 0) > 0.04) accuracy += 1;
  }
  return accuracy;
};

/** \u81EA\u52A8\u5207\u6362\u586B\u5145\u9875\u8BBE\u7F6E\u5230\u5DE6\u53F3\u9875\u6B63\u786E\u7387\u66F4\u9AD8\u7684\u60C5\u51B5 */
const arrangePage = (pageList, {
  imgList,
  fillEffect,
  nowFillIndex,
  switchFill
}) => {
  const fill = Boolean(fillEffect[nowFillIndex]);
  const newPageList = arrangeImg(pageList, fill);
  if (!switchFill || typeof fillEffect[nowFillIndex] === 'number') return newPageList;
  const anotherPageList = arrangeImg(pageList, !fill);
  const anotherAccuracy = computeAccuracy(imgList, anotherPageList);
  if (anotherAccuracy === 0) return newPageList;
  const nowAccuracy = computeAccuracy(imgList, newPageList);
  if (anotherAccuracy <= nowAccuracy) return newPageList;
  helper.log(\`\${nowFillIndex} \u81EA\u52A8\u5207\u6362\u9875\u9762\u586B\u5145\`);
  fillEffect[nowFillIndex] = !fill;
  return anotherPageList;
};

/** \u6839\u636E\u56FE\u7247\u6BD4\u4F8B\u548C\u586B\u5145\u9875\u8BBE\u7F6E\u5BF9\u6F2B\u753B\u56FE\u7247\u8FDB\u884C\u6392\u5217 */
const handleComicData = (imgList, fillEffect, switchFill) => {
  const context = {
    imgList,
    fillEffect,
    nowFillIndex: -1,
    switchFill
  };
  const pageList = [];
  const cacheList = [];
  for (let i = 0; i < imgList.length; i += 1) {
    const img = imgList[i];
    if (!isWideImg(img)) {
      cacheList.push(i);
      if (Reflect.has(fillEffect, i)) Reflect.deleteProperty(fillEffect, i);
      continue;
    }

    // \u5728\u9664\u7ED3\u5C3E\uFF08\u53EF\u80FD\u662F\u6C49\u5316\u7EC4\u56FE\uFF09\u5916\u7684\u4F4D\u7F6E\u51FA\u73B0\u4E86\u8DE8\u9875\u56FE\u7684\u8BDD\uFF0C\u90A3\u5F20\u8DE8\u9875\u56FE\u5927\u6982\u7387\u662F\u9875\u5E8F\u7684\u300C\u6B63\u786E\u7B54\u6848\u300D
    // \u5982\u679C\u8FD9\u5F20\u8DE8\u9875\u5BFC\u81F4\u4E86\u4E0A\u9762\u4E00\u9875\u7F3A\u9875\uFF0C\u5C31\u8BF4\u660E\u5728\u8FD9\u4E4B\u524D\u7684\u586B\u5145\u6709\u8BEF\uFF0C\u5E94\u8BE5\u636E\u6B64\u8C03\u6574\u4E4B\u524D\u7684\u586B\u5145
    if (typeof fillEffect[context.nowFillIndex] === 'boolean' && i < imgList.length - 2 && (cacheList.length + (fillEffect[context.nowFillIndex] ? 1 : 0)) % 2 === 1) {
      fillEffect[context.nowFillIndex] = !fillEffect[context.nowFillIndex];
      return handleComicData(imgList, fillEffect, switchFill);
    }
    pageList.push(...arrangePage(cacheList, context), [i]);
    cacheList.length = 0;
    if (fillEffect[i] === undefined) fillEffect[i] = false;
    context.nowFillIndex = i;
  }
  if (cacheList.length > 0) pageList.push(...arrangePage(cacheList, context));
  return pageList;
};

const getImg = (i, state = store) => state.imgMap[state.imgList[i]];

/** \u627E\u5230\u6307\u5B9A url \u56FE\u7247\u5728 imgList \u91CC\u7684 index */
const getImgIndexs = url => {
  const indexList = [];
  for (const [i, imgUrl] of store.imgList.entries()) if (imgUrl === url) indexList.push(i);
  return indexList;
};

/** \u627E\u5230\u6307\u5B9A url \u56FE\u7247\u7684 dom */
const getImgEle = url => refs.mangaFlow.querySelector(\`img[data-src="\${url}"]\`);

/** \u627E\u5230\u6307\u5B9A\u9875\u9762\u6240\u5904\u7684\u56FE\u7247\u6D41 */
const findFillIndex = (pageIndex, fillEffect) => {
  let nowFillIndex = pageIndex;
  while (!Reflect.has(fillEffect, nowFillIndex)) nowFillIndex -= 1;
  return nowFillIndex;
};

/** \u89E6\u53D1 onOptionChange */
const triggerOnOptionChange = helper.throttle(() => store.prop.onOptionChange?.(helper.difference(store.option, store.defaultOption)), 1000);

/** \u5728 option \u540E\u624B\u52A8\u89E6\u53D1 onOptionChange */
const setOption = fn => {
  setState(state => fn(state.option, state));
  triggerOnOptionChange();
};

/** \u521B\u5EFA\u7528\u4E8E\u5C06 ref \u7ED1\u5B9A\u5230\u5BF9\u5E94 state \u4E0A\u7684\u5DE5\u5177\u51FD\u6570 */
const bindRef = name => e => Reflect.set(refs, name, e);
const watchDomSize = (name, e) => {
  const resizeObserver = new ResizeObserver(([{
    contentRect
  }]) => {
    if (!contentRect.width || !contentRect.height) return;
    setState(state => {
      state[name] = {
        width: contentRect.width,
        height: contentRect.height
      };
    });
  });
  resizeObserver.disconnect();
  resizeObserver.observe(e);
  solidJs.onCleanup(() => resizeObserver.disconnect());
};

/** \u5C06\u754C\u9762\u6062\u590D\u5230\u6B63\u5E38\u72B6\u6001 */
const resetUI = state => {
  state.show.toolbar = false;
  state.show.scrollbar = false;
  state.show.touchArea = false;
};
const bindOption$1 = (...path) => ({
  value: helper.byPath(store.option, path),
  onChange: val => setOption(draftOption => helper.byPath(draftOption, path, () => val))
});

const imgList = helper.createRootMemo(() => store.imgList.map(url => store.imgMap[url]));

/** \u5F53\u524D\u662F\u5426\u4E3A\u5E76\u6392\u5377\u8F74\u6A21\u5F0F */
const isAbreastMode = helper.createRootMemo(() => store.option.scrollMode.enabled && store.option.scrollMode.abreastMode);

/** \u5F53\u524D\u662F\u5426\u4E3A\u53CC\u9875\u5377\u8F74\u6A21\u5F0F */
const isDoubleMode = helper.createRootMemo(() => store.option.scrollMode.enabled && store.option.scrollMode.doubleMode);

/** \u5F53\u524D\u662F\u5426\u4E3A\u666E\u901A\u5377\u8F74\u6A21\u5F0F\uFF08\u5305\u542B\u4E86\u53CC\u9875\u5377\u8F74\u6A21\u5F0F\uFF09 */
const isScrollMode = helper.createRootMemo(() => store.option.scrollMode.enabled && !store.option.scrollMode.abreastMode);

/** \u5F53\u524D\u662F\u5426\u5F00\u542F\u4E86\u8BC6\u522B\u80CC\u666F\u8272 */
const isEnableBg = helper.createRootMemo(() => store.option.imgRecognition.enabled && store.option.imgRecognition.background);

/** \u5F53\u524D\u662F\u5426\u5F00\u542F\u4E86\u56FE\u50CF\u653E\u5927 */
const isUpscale = helper.createRootMemo(() => !store.isMobile && store.option.imgRecognition.enabled && store.option.imgRecognition.upscale);

/** \u5F53\u524D\u663E\u793A\u9875\u9762 */
const activePage = helper.createRootMemo(() => store.pageList[store.activePageIndex] ?? []);

/** \u5F53\u524D\u663E\u793A\u7684\u7B2C\u4E00\u5F20\u56FE\u7247\u7684 index */
const activeImgIndex = helper.createRootMemo(() => activePage().find(i => i !== -1) ?? 0);

/** \u5F53\u524D\u6240\u5904\u7684\u56FE\u7247\u6D41 */
const nowFillIndex = helper.createRootMemo(() => findFillIndex(activeImgIndex(), store.fillEffect));

/** \u9884\u52A0\u8F7D\u9875\u6570 */
const preloadNum = helper.createRootMemo(() => ({
  back: store.option.preloadPageNum,
  front: Math.floor(store.option.preloadPageNum / 2)
}));

/** \u83B7\u53D6\u56FE\u7247\u5217\u8868\u4E2D\u6307\u5B9A\u5C5E\u6027\u7684\u4E2D\u4F4D\u6570 */
const getImgMedian = sizeFn => {
  const list = imgList().filter(img => img.loadType === 'loaded' && img.width).map(sizeFn).sort((a, b) => a - b);
  // \u56E0\u4E3A\u6D89\u53CA\u5230\u56FE\u7247\u9ED8\u8BA4\u7C7B\u578B\u7684\u8BA1\u7B97\uFF0C\u6240\u4EE5\u81F3\u5C11\u7B49\u5230\u52A0\u8F7D\u5B8C\u4E09\u5F20\u56FE\u7247\u518D\u8BA1\u7B97\uFF0C\u907F\u514D\u88AB\u9996\u9875\u5927\u56FE\u5E72\u6270
  if (list.length < 3) return null;
  return list[Math.floor(list.length / 2)];
};

/** \u56FE\u7247\u5360\u4F4D\u5C3A\u5BF8 */
const placeholderSize = helper.createThrottleMemo(() => ({
  width: getImgMedian(img => img.width) ?? 800,
  height: getImgMedian(img => img.height) ?? 1200
}), 500);

/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5217\u5BBD\u5EA6 */
const abreastColumnWidth = helper.createRootMemo(() => isAbreastMode() ? placeholderSize().width * store.option.scrollMode.imgScale : 0);
const autoPageNum = helper.createThrottleMemo(() => store.rootSize.width >= store.rootSize.height ? 2 : 1);
const pageNum = helper.createRootMemo(() => store.option.pageNum || autoPageNum());

/** \u662F\u5426\u4E3A\u5355\u9875\u6A21\u5F0F */
const isOnePageMode = helper.createRootMemo(() => {
  if (store.isMobile || store.imgList.length <= 1) return true;
  if (store.option.scrollMode.enabled) {
    if (store.option.scrollMode.abreastMode) return true;
    return !store.option.scrollMode.doubleMode;
  }
  return pageNum() === 1;
});

/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5168\u5C40\u6EDA\u52A8\u586B\u5145 */
const [abreastScrollFill, _setAbreastScrollFill] = solidJs.createSignal(0);
/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6BCF\u5217\u5E03\u5C40 */
const abreastArea = helper.createRootMemo(prev => {
  if (!isAbreastMode()) return prev;
  const columns = [[]];
  const position = {};
  let length = 0;
  const rootHeight = store.rootSize.height;
  if (!rootHeight || store.imgList.length === 0) return {
    columns,
    position,
    length
  };
  const repeatHeight = rootHeight * store.option.scrollMode.abreastDuplicate;

  /** \u5F53\u524D\u56FE\u7247\u5728\u5F53\u524D\u5217\u7684\u6240\u5728\u9AD8\u5EA6 */
  let top = abreastScrollFill();
  while (top > rootHeight) {
    top -= rootHeight - repeatHeight;
    columns.push([]);
  }
  for (let i = 0; i < store.imgList.length; i++) {
    const img = getImg(i);
    const imgPosition = [];
    const imgHeight = img.size.height;
    length += imgHeight;
    let height = imgHeight;
    while (height > 0) {
      columns.at(-1).push(i);
      imgPosition.push({
        column: columns.length - 1,
        top
      });
      if (top < 0 && imgPosition.length > 1) top = 0;
      const availableHeight = rootHeight - top;
      top += height;
      height -= availableHeight;

      // \u586B\u6EE1\u4E00\u5217\u540E\u6362\u884C
      if (top < rootHeight) continue;
      columns.push([]);
      top = height - imgHeight;

      // \u590D\u73B0\u4E0A\u5217\u7ED3\u5C3E
      if (!repeatHeight || columns.length === 1) continue;
      top += repeatHeight;
      height = Math.min(imgHeight, height + repeatHeight);

      /** \u4E3A\u4E86\u590D\u73B0\u800C\u51FA\u73B0\u7684\u7A7A\u767D\u90E8\u5206\u9AD8\u5EA6 */
      let emptyTop = top;
      let prevImgIndex = i;
      while (prevImgIndex >= 1 && emptyTop > 0) {
        prevImgIndex -= 1;
        // \u628A\u4E0A\u4E00\u5F20\u56FE\u7247\u52A0\u8FDB\u6765\u586B\u8865\u7A7A\u767D
        columns.at(-1).push(prevImgIndex);
        const prevImgHeight = getImg(prevImgIndex).size.height;
        emptyTop -= prevImgHeight;
        position[prevImgIndex].push({
          column: columns.length - 1,
          top: emptyTop
        });
      }
    }
    position[i] = imgPosition;
  }
  return {
    columns,
    position,
    length
  };
}, {
  columns: [],
  position: {},
  length: 0
});

/** \u5934\u5C3E\u6EDA\u52A8\u7684\u9650\u5236\u503C */
const scrollFillLimit = helper.createRootMemo(() => abreastArea().length - store.rootSize.height);
const setAbreastScrollFill = val => _setAbreastScrollFill(helper.clamp(-scrollFillLimit(), val, scrollFillLimit()));

/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u5F53\u524D\u8981\u663E\u793A\u7684\u5217 */
const abreastShowColumn = helper.createThrottleMemo(() => {
  if (!isAbreastMode() || abreastArea().columns.length === 0) return {
    start: 0,
    end: 0
  };
  const columnWidth = abreastColumnWidth() + store.option.scrollMode.spacing * 7;
  return {
    start: helper.clamp(0, Math.floor(store.page.offset.x.px / columnWidth), abreastArea().columns.length - 1),
    end: helper.clamp(0, Math.floor((store.page.offset.x.px + store.rootSize.width) / columnWidth), abreastArea().columns.length - 1)
  };
});

/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6F2B\u753B\u6D41\u5BBD\u5EA6 */
const abreastContentWidth = helper.createRootMemo(() => abreastArea().columns.length * abreastColumnWidth() + (abreastArea().columns.length - 1) * store.option.scrollMode.spacing * 7);

/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6700\u5927\u6EDA\u52A8\u8DDD\u79BB */
const abreastScrollWidth = helper.createRootMemo(() => abreastContentWidth() - store.rootSize.width);

/** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u6BCF\u4E2A\u56FE\u7247\u6240\u5728\u4F4D\u7F6E\u7684\u6837\u5F0F */
const imgAreaStyle = helper.createRootMemo(() => {
  if (!isAbreastMode() || store.gridMode) return '';
  let styleText = '';
  for (const index of store.imgList.keys()) {
    let imgNum = 0;
    for (const {
      column,
      top
    } of abreastArea().position[index] ?? []) {
      const itemStyle = \`grid-area: _\${column} !important; transform: translateY(\${top}px);\`;
      styleText += \`#_\${index}_\${imgNum} { \${itemStyle} }\\n\`;
      imgNum += 1;
    }
  }
  return styleText;
});

const [defaultHotkeys, setDefaultHotkeys] = solidJs.createSignal({
  scroll_up: ['w', 'ArrowUp'],
  scroll_down: ['s', 'ArrowDown'],
  scroll_left: ['a', 'Shift + a', ',', 'ArrowLeft'],
  scroll_right: ['d', 'Shift + d', '.', 'ArrowRight'],
  page_up: ['PageUp', 'Shift + w'],
  page_down: [' ', 'PageDown', 'Shift + s'],
  jump_to_home: ['Home'],
  jump_to_end: ['End'],
  exit: ['Escape'],
  switch_page_fill: ['/', 'm', 'z'],
  switch_scroll_mode: [],
  switch_grid_mode: [],
  switch_single_double_page_mode: [],
  switch_dir: [],
  switch_auto_enlarge: [],
  translate_current_page: [],
  translate_all: [],
  translate_to_end: [],
  fullscreen: [],
  auto_scroll: []
});

/** \u5FEB\u6377\u952E\u914D\u7F6E */
const hotkeysMap = helper.createRootMemo(() => Object.fromEntries(Object.entries(store.hotkeys).flatMap(([name, key]) => key.map(k => [k, name]))));

/** \u91CD\u65B0\u8BA1\u7B97\u56FE\u7247\u6392\u5217 */
const updatePageData = state => {
  const lastActiveImgIndex = activeImgIndex();
  let newPageList = [];
  newPageList = isOnePageMode() ? state.imgList.map((_, i) => [i]) : handleComicData(state.imgList.map(url => state.imgMap[url]), state.fillEffect, state.option.imgRecognition.pageFill);
  if (helper.isEqual(state.pageList, newPageList)) return;
  state.pageList = newPageList;

  // \u5728\u56FE\u7247\u6392\u5217\u6539\u53D8\u540E\u81EA\u52A8\u8DF3\u8F6C\u56DE\u539F\u5148\u663E\u793A\u56FE\u7247\u6240\u5728\u7684\u9875\u6570
  if (lastActiveImgIndex !== activeImgIndex()) {
    const newActivePageIndex = state.pageList.findIndex(page => page.includes(lastActiveImgIndex));
    if (newActivePageIndex !== -1) state.activePageIndex = newActivePageIndex;
  }
};
updatePageData.throttle = helper.throttle(() => setState(updatePageData), 100);

/**
 * \u5C06\u5904\u7406\u56FE\u7247\u7684\u76F8\u5173\u53D8\u91CF\u6062\u590D\u5230\u521D\u59CB\u72B6\u6001
 *
 * \u5FC5\u987B\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u8C03\u7528
 * 1. \u4FEE\u6539 imgList
 * 2. resetImgState
 * 3. updatePageData
 */
const resetImgState = state => {
  if (state.imgList.length === 0) {
    state.fillEffect = {
      '-1': true
    };
    return;
  }

  // \u5982\u679C\u7528\u6237\u6CA1\u6709\u624B\u52A8\u4FEE\u6539\u8FC7\u9996\u9875\u586B\u5145\uFF0C\u624D\u5C06\u5176\u6062\u590D\u521D\u59CB
  if (typeof state.fillEffect['-1'] === 'boolean') state.fillEffect['-1'] = state.option.firstPageFill && state.imgList.length > 3;
};
helper.createEffectOn([pageNum, isOnePageMode], () => setState(updatePageData));

/** \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1 */
const stopPropagation = e => {
  e.stopPropagation();
};

/** \u4ECE\u5934\u5F00\u59CB\u64AD\u653E\u5143\u7D20\u7684\u52A8\u753B */
const playAnimation = e => {
  if (!e) return;
  for (const animation of e.getAnimations()) {
    animation.cancel();
    animation.play();
  }
};
const downloadImgHeaders = {
  Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'User-Agent': navigator.userAgent,
  Referer: location.href
};
const downloadImg = async (imgUrl, details) => {
  const url = store.imgMap[imgUrl]?.blobUrl ?? imgUrl;
  if (url.startsWith('blob:')) {
    const res = await fetch(url);
    return res.blob();
  }
  const res = await request.request(url, {
    responseType: 'blob',
    errorText: helper.t('translation.tip.download_img_failed'),
    headers: downloadImgHeaders,
    retryFetch: true,
    ...details
  });
  if (Reflect.has(store.imgMap, imgUrl)) setState('imgMap', imgUrl, 'blobUrl', URL.createObjectURL(res.response));
  return res.response;
};

const handleImgRecognition = async (url, imgEle) => {
  const img = store.imgMap[url];
  const needRecognition = store.option.imgRecognition.background && img.background === undefined || store.option.imgRecognition.pageFill && img.blankMargin === undefined;
  if (needRecognition) {
    imgEle ??= await helper.wait(() => getImgEle(url), 1000);
    if (!imgEle) return helper.log.warn('\u83B7\u53D6\u56FE\u7247\u5143\u7D20\u5931\u8D25');
    const {
      data,
      width,
      height
    } = helper.getImageData(imgEle);
    initWorker$1();
    return worker.recognitionImg(Comlink.transfer(data, [data.buffer]), width, height, url, store$1.unwrap(store.option.imgRecognition));
  }
};
const initWorker$1 = helper.onec(() => {
  const mainFn = {
    log: helper.log,
    updatePageData: helper.throttle(() => setState(updatePageData), 1000),
    setImg: (url, key, val) => Reflect.has(store.imgMap, url) && setState('imgMap', url, key, val)
  };
  worker.setMainFn(Comlink.proxy(mainFn), Object.keys(mainFn));
});

/** \u8BB0\u5F55\u6BCF\u5F20\u56FE\u7247\u6240\u5728\u7684\u9875\u9762 */
const imgPageMap = helper.createRootMemo(() => {
  const map = {};
  for (let i = 0; i < store.pageList.length; i++) {
    for (const imgIndex of store.pageList[i]) if (imgIndex !== -1) map[imgIndex] = i;
  }
  return map;
});
const [_scrollTop, setScrollTop] = solidJs.createSignal(0);
/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6EDA\u52A8\u8DDD\u79BB */
const scrollModTop = _scrollTop;
/** \u6EDA\u52A8\u8DDD\u79BB */
const scrollTop = helper.createRootMemo(() => isAbreastMode() ? store.page.offset.x.px : scrollModTop());
const bindScrollTop = dom => {
  dom.addEventListener('scroll', () => setScrollTop(dom.scrollTop), {
    passive: true
  });
};

// \u81EA\u52A8\u5207\u6362\u9ED1\u6697\u6A21\u5F0F
const darkModeQuery = matchMedia('(prefers-color-scheme: dark)');
const autoSwitchDarkMode = query => {
  if (!store.option.autoDarkMode) return;
  if (query.matches === store.option.darkMode) return;
  setState('option', 'darkMode', query.matches);
};
darkModeQuery.addEventListener('change', autoSwitchDarkMode);
autoSwitchDarkMode(darkModeQuery);
helper.createEffectOn(() => store.option.autoDarkMode, () => autoSwitchDarkMode(darkModeQuery));

// \u7A97\u53E3\u5BBD\u5EA6\u5C0F\u4E8E800\u50CF\u7D20\u65F6\uFF0C\u6807\u8BB0\u4E3A\u79FB\u52A8\u7AEF
helper.createEffectOn(() => store.rootSize.width, width => {
  const isMobile = helper.inRange(1, width, 800);
  if (isMobile === store.isMobile) return;
  setState(state => {
    state.isMobile = isMobile;
    resetImgState(state);
    updatePageData(state);
  });
});

const isWideType = type => type === 'wide' || type === 'long';

// https://github.com/hymbz/ComicReadScript/issues/174#issuecomment-2252114640
// \u7528\u4E8E\u5224\u65AD\u56FE\u7247\u7C7B\u578B\u7684\u6BD4\u4F8B
const \u5355\u9875\u6BD4\u4F8B = 1920 / 2 / 1080;
const \u6A2A\u5E45\u6BD4\u4F8B = 1920 / 1080;
const \u6761\u6F2B\u6BD4\u4F8B = 1920 / 2 / 1080 / 2;

/** \u6839\u636E\u6BD4\u4F8B\u5224\u65AD\u56FE\u7247\u7C7B\u578B */
const getImgType = img => {
  const imgRatio = img.width / img.height;
  if (imgRatio <= \u5355\u9875\u6BD4\u4F8B) return imgRatio < \u6761\u6F2B\u6BD4\u4F8B ? 'vertical' : '';
  return imgRatio > \u6A2A\u5E45\u6BD4\u4F8B ? 'long' : 'wide';
};

/** \u66F4\u65B0\u56FE\u7247\u7C7B\u578B\u3002\u8FD4\u56DE\u662F\u5426\u4FEE\u6539\u4E86\u56FE\u7247\u7C7B\u578B */
const updateImgType = (state, draftImg) => {
  const {
    type
  } = draftImg;
  if (!draftImg.width || !draftImg.height) return false;
  draftImg.type = getImgType(draftImg);
  if (isWideType(type) !== isWideType(draftImg.type)) updatePageData.throttle();
  return (type ?? state.defaultImgType) !== draftImg.type;
};

/** \u662F\u5426\u81EA\u52A8\u5F00\u542F\u8FC7\u5377\u8F74\u6A21\u5F0F */
let autoScrollMode = false;
helper.createRootEffect(prevIsWide => {
  if (store.rootSize.width === 0 || store.rootSize.height === 0) return;
  const defaultImgType = getImgType(placeholderSize());
  if (defaultImgType === store.defaultImgType) return prevIsWide;
  const isWide = isWideType(defaultImgType);
  setState(state => {
    state.defaultImgType = defaultImgType;

    // \u8FDE\u7EED\u51FA\u73B0\u591A\u5F20\u957F\u56FE\u540E\uFF0C\u81EA\u52A8\u5F00\u542F\u5377\u8F74\u6A21\u5F0F
    if (defaultImgType === 'vertical' && !autoScrollMode && !state.option.scrollMode.enabled) {
      state.option.scrollMode.enabled = true;
      autoScrollMode = true;
      return;
    }
    if (isWide !== prevIsWide) updatePageData(state);
  });
  return isWide;
}, false);

/** \u83B7\u53D6\u6307\u5B9A\u56FE\u7247\u7684\u663E\u793A\u5C3A\u5BF8 */
const getImgDisplaySize = (state, img) => {
  let height = img.height ?? placeholderSize().height;
  let width = img.width ?? placeholderSize().width;
  if (!state.option.scrollMode.enabled) return {
    height,
    width
  };
  const setWidth = w => {
    height *= w / width;
    width = w;
    return {
      height,
      width
    };
  };
  if (isAbreastMode()) return setWidth(abreastColumnWidth());
  if (state.option.scrollMode.fitToWidth) return setWidth(state.rootSize.width);
  height *= state.option.scrollMode.imgScale;
  width *= state.option.scrollMode.imgScale;
  if (width > state.rootSize.width) return setWidth(state.rootSize.width);
  return {
    height,
    width
  };
};

/** \u66F4\u65B0\u56FE\u7247\u5C3A\u5BF8 */
const updateImgSize = (url, width, height) => setState(state => {
  const img = state.imgMap[url];
  if (img.width === width && img.height === height) return;
  img.width = width;
  img.height = height;
  img.size = getImgDisplaySize(state, img);
  updateImgType(state, img);
});
helper.createEffectOn([imgList, () => store.option.scrollMode.enabled, () => store.option.scrollMode.abreastMode, () => store.option.scrollMode.fitToWidth, () => store.option.scrollMode.imgScale, () => store.rootSize, placeholderSize], ([{
  length
}]) => {
  if (length === 0) return;
  setState(state => {
    for (const url of state.imgList) state.imgMap[url].size = getImgDisplaySize(state, state.imgMap[url]);
  });
});

/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u6BCF\u5F20\u56FE\u7247\u7684\u4F4D\u7F6E */
const imgTopList = helper.createRootMemo(() => {
  if (!isScrollMode()) return [];
  const list = Array.from({
    length: store.imgList.length
  });
  let top = 0;
  for (let i = 0; i < store.imgList.length; i++) {
    list[i] = top;
    top += getImg(i).size.height + store.option.scrollMode.spacing * 7;
  }
  return list;
});

/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u6F2B\u753B\u6D41\u7684\u603B\u9AD8\u5EA6 */
const contentHeight = helper.createRootMemo(() => store.option.scrollMode.enabled ? (imgTopList().at(-1) ?? 0) + (imgList().at(-1)?.size.height ?? 0) : 0);

/** \u53CC\u9875\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6BCF\u884C\u9AD8\u5EA6 */
const doubleScrollLineHeight = helper.createRootMemo(() => {
  if (!isDoubleMode()) return [];
  const doubleWidth = store.rootSize.width / 2;
  return store.pageList.map(indexs => {
    if (indexs.length === 1) return getImg(indexs[0]).size.height;

    // \u9009\u62E9\u66F4\u9AD8\u7684\u90A3\u5F20\u56FE\u7247\u4F5C\u4E3A\u884C\u9AD8\u5EA6\uFF0C\u5C3D\u91CF\u653E\u5927\u56FE\u7247
    let targetImg;
    for (const i of indexs) {
      if (i === -1) continue;
      const img = getImg(i);
      if (!targetImg || img.size.height > targetImg.size.height) targetImg = img;
    }
    if (!targetImg) throw new Error('\u627E\u4E0D\u5230\u56FE\u7247');
    if (targetImg.size.width < doubleWidth && !store.option.scrollMode.fitToWidth) return targetImg.size.height;
    return targetImg.size.height * (doubleWidth / targetImg.size.width);
  });
});

// /** \u9884\u52A0\u8F7D\u56FE\u7247\u5C3A\u5BF8 */
// const preloadImgSize = singleThreaded(async () => {
//   let index = 0;
//   for (; index < store.imgList.length; index++) {
//     const img = store.imgList[index];
//     if (img.size === undefined) continue;
//     const size = await getImgSize(img.src);
//     if (!size) continue;
//     // \u9632\u6B62\u52A0\u8F7D\u8FC7\u7A0B\u4E2D imgList \u53D8\u4E86\u7684\u60C5\u51B5
//     if (store.imgList[index].src !== img.src) break;
//     // eslint-disable-next-line @typescript-eslint/no-loop-func
//     setState((state) => updateImgSize(state, index, ...size));
//   }
//
//   if (index < store.imgList.length) requestIdleCallback(preloadImgSize);
// });
//
// \u7A7A\u95F2\u671F\u95F4\u9884\u52A0\u8F7D\u6240\u6709\u56FE\u7247\u7684\u5C3A\u5BF8
// \u5377\u8F74\u6A21\u5F0F\u4E0B\u9700\u8981\u63D0\u524D\u77E5\u9053\u5C3A\u5BF8\u65B9\u4FBF\u6B63\u786E\u5E03\u5C40
// \u7FFB\u9875\u6A21\u5F0F\u4E0B\u4E5F\u9700\u8981\u63D0\u524D\u53D1\u73B0\u8DE8\u9875\u56FE\u91CD\u65B0\u6392\u5E8F
// requestIdleCallback(preloadImgSize);
/** \u6EDA\u52A8\u5185\u5BB9\u7684\u603B\u957F\u5EA6 */
const scrollLength = helper.createRootMemo(() => {
  if (store.option.scrollMode.enabled) {
    if (store.option.scrollMode.abreastMode) return abreastContentWidth();
    if (store.option.scrollMode.doubleMode) return doubleScrollLineHeight().reduce((sum, height) => sum + height, 0);
    return contentHeight();
  }
  return store.pageList.length;
});

/** \u6EDA\u52A8\u5185\u5BB9\u7684\u6EDA\u52A8\u8FDB\u5EA6 */
const scrollProgress = helper.createRootMemo(() => {
  if (isScrollMode()) return scrollTop();
  if (isAbreastMode()) return store.page.offset.x.px;
  return store.activePageIndex;
});

/** \u6EDA\u52A8\u5185\u5BB9\u7684\u6EDA\u52A8\u8FDB\u5EA6\u767E\u5206\u6BD4 */
const scrollPercentage = helper.createRootMemo(() => scrollProgress() / scrollLength());

/** \u6EDA\u52A8\u6761\u6ED1\u5757\u957F\u5EA6 */
const sliderHeight = helper.createRootMemo(() => {
  let itemLength = 1;
  if (isScrollMode()) itemLength = store.rootSize.height;
  if (isAbreastMode()) itemLength = store.rootSize.width;
  return itemLength / scrollLength();
});

/** \u5F53\u524D\u662F\u5426\u5DF2\u7ECF\u6EDA\u52A8\u5230\u5E95\u90E8 */
const isBottom = helper.createRootMemo(() => scrollPercentage() + sliderHeight() >= 0.9999);

/** \u5F53\u524D\u662F\u5426\u5DF2\u7ECF\u6EDA\u52A8\u5230\u9876\u90E8 */
const isTop = helper.createRootMemo(() => scrollPercentage() === 0);
const _scrollTo = x => refs.mangaBox.scrollTo({
  top: x,
  behavior: 'instant'
});

/** \u5B9E\u73B0\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5E73\u6ED1\u6EDA\u52A8 */
const scrollStep = new class extends helper.AnimationFrame {
  /** \u52A8\u753B\u65F6\u957F */
  duration = 100;
  /** \u8981\u6EDA\u52A8\u7684\u8DDD\u79BB */
  distance = 0;
  /** \u6EDA\u52A8\u5F00\u59CB\u65F6\u95F4 */
  startTime = 0;
  /** \u6EDA\u52A8\u5F00\u59CB\u4F4D\u7F6E */
  startTop = 0;
  frame = timestamp => {
    this.cancel();
    this.startTime ||= timestamp;
    /** \u5DF2\u6EDA\u52A8\u65F6\u95F4 */
    const elapsed = timestamp - this.startTime;
    if (elapsed >= this.duration) return _scrollTo(this.startTop + this.distance);
    _scrollTo(this.startTop + elapsed / this.duration * this.distance);
    this.call();
  };
  start = x => {
    this.startTime = 0;
    this.startTop = scrollTop();
    this.distance = x - this.startTop;
    this.frame(0);
  };
}();

/** \u5B9E\u73B0\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5300\u901F\u6EDA\u52A8 */
const constantScroll = new class extends helper.AnimationFrame {
  speed = 0;
  lastTime = 0;
  frame = timestamp => {
    if (!this.animationId) return;
    if (this.lastTime) {
      const scrollDelta = this.speed * (timestamp - this.lastTime);
      _scrollTo(scrollTop() + scrollDelta);
    }
    this.lastTime = timestamp;
    this.call();
  };
  start = speed => {
    if (this.animationId && speed === this.speed) return;
    this.cancel();
    this.speed = speed;
    this.lastTime = 0;
    this.call();
  };
}();

/** \u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\u6EDA\u52A8\u5230\u6307\u5B9A\u8FDB\u5EA6 */
const scrollTo = (x, smooth = false) => {
  if (!store.option.scrollMode.enabled) return;
  if (store.option.scrollMode.abreastMode) {
    _scrollTo(0);
    const val = helper.clamp(0, x, abreastScrollWidth());
    return setState('page', 'offset', 'x', 'px', val);
  }
  if (!smooth) {
    scrollStep.cancel();
    _scrollTo(x);
    return;
  }
  if (scrollStep.animationId) {
    scrollStep.cancel();
    _scrollTo(x);
  }
  scrollStep.start(x);
};

/** \u4FDD\u5B58\u5F53\u524D\u6EDA\u52A8\u8FDB\u5EA6\uFF0C\u5E76\u5728\u4E4B\u540E\u6062\u590D */
const saveScrollProgress = () => {
  const oldScrollPercentage = scrollPercentage();
  return () => scrollTo(oldScrollPercentage * scrollLength());
};

/** \u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\uFF0C\u6EDA\u52A8\u5230\u80FD\u663E\u793A\u6307\u5B9A\u56FE\u7247\u7684\u4F4D\u7F6E */
const scrollViewImg = i => {
  if (!store.option.scrollMode.enabled) return;
  let top;
  if (store.option.scrollMode.abreastMode) {
    const columnNum = abreastArea().columns.findIndex(column => column.includes(i));
    top = columnNum * abreastColumnWidth() + 1;
  } else if (store.option.scrollMode.doubleMode) {
    const pageNum = imgPageMap()[i];
    top = doubleScrollLineHeight().slice(0, pageNum).reduce((sum, height) => sum + height, 0);
  } else top = imgTopList()[i] + 1;
  scrollTo(top);
};

/** \u8DF3\u8F6C\u5230\u6307\u5B9A\u56FE\u7247\u7684\u663E\u793A\u4F4D\u7F6E */
const jumpToImg = index => {
  if (store.option.scrollMode.enabled) return scrollViewImg(index);
  const pageNum = imgPageMap()[index];
  if (pageNum === undefined) return;
  setState(state => {
    state.activePageIndex = pageNum;
    state.gridMode = false;
  });
};

/** \u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\u8FDB\u884C\u7F29\u653E\uFF0C\u5E76\u4E14\u4FDD\u6301\u6EDA\u52A8\u8FDB\u5EA6\u4E0D\u53D8 */
const zoomScrollModeImg = (zoomLevel, set = false) => {
  const jump = saveScrollProgress();
  setOption(draftOption => {
    const newVal = set ? zoomLevel : store.option.scrollMode.imgScale + zoomLevel;
    draftOption.scrollMode.imgScale = helper.clamp(0.1, Number(newVal.toFixed(2)), 3);
  });
  jump();

  // \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u5E76\u6CA1\u6709\u4E00\u4E2A\u660E\u786E\u76F4\u89C2\u7684\u6EDA\u52A8\u8FDB\u5EA6\uFF0C
  // \u4E5F\u60F3\u4E0D\u51FA\u6709\u4EC0\u4E48\u5B9E\u73B0\u6548\u679C\u80FD\u548C\u666E\u901A\u5377\u8F74\u6A21\u5F0F\u7684\u6548\u679C\u4E00\u81F4,
  // \u6240\u4EE5\u5C31\u6446\u70C2\u4E0D\u7BA1\u4E86\uFF0C\u53CD\u6B63\u73B0\u5728\u8FD9\u6837\u4E5F\u5DF2\u7ECF\u80FD\u907F\u514D\u4E71\u8DF3\u4E86
};

/** \u627E\u5230\u666E\u901A\u5377\u8F74\u6A21\u5F0F\u4E0B\u6307\u5B9A\u9AD8\u5EA6\u4E0A\u7684\u56FE\u7247 */
const findTopImg = (top, initIndex = 0) => {
  if (top > contentHeight()) return imgTopList().length - 1;
  let i = initIndex;
  for (; i < imgTopList().length; i++) if (imgTopList()[i] > top) return i === 0 ? 0 : i - 1;
  return imgTopList().length - 1;
};

/** \u83B7\u53D6\u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u6307\u5B9A\u5217\u7684\u6307\u5B9A\u56FE\u7247 */
const getAbreastColumnImg = (column, img) => {
  const {
    columns
  } = abreastArea();
  return columns[helper.clamp(0, column, columns.length - 1)]?.at(img) ?? 0;
};

/** \u8BA1\u7B97\u663E\u793A\u9875\u9762 */
const updateShowRange = state => {
  if (scrollLength() === 0) {
    state.showRange = [0, 0];
    state.renderRange = state.showRange;
  } else if (!state.option.scrollMode.enabled) {
    // \u7FFB\u9875\u6A21\u5F0F
    state.showRange = [state.activePageIndex, state.activePageIndex];
    state.renderRange = [helper.clamp(0, state.activePageIndex - 1, state.pageList.length - 1), helper.clamp(0, state.activePageIndex + 1, state.pageList.length - 1)];
  } else if (state.option.scrollMode.abreastMode) {
    // \u5E76\u6392\u5377\u8F74\u6A21\u5F0F
    const {
      start,
      end
    } = abreastShowColumn();
    state.showRange = [getAbreastColumnImg(start, 0), getAbreastColumnImg(end, -1)];
    state.renderRange = [getAbreastColumnImg(start - 2, 0), getAbreastColumnImg(end + 2, -1)];
  } else if (state.option.scrollMode.doubleMode) {
    // \u53CC\u9875\u5377\u8F74\u6A21\u5F0F
    const top = scrollTop();
    const bottom = scrollTop() + state.rootSize.height;
    const renderTop = top - state.rootSize.height;
    const rednerBottom = bottom + state.rootSize.height;
    state.showRange = [-1, -1];
    state.renderRange = [-1, -1];
    let height = 0;
    for (const [pageIndex, lineHeight] of doubleScrollLineHeight().entries()) {
      height += lineHeight;
      if (state.renderRange[0] === -1) {
        if (height >= renderTop) state.renderRange[0] = pageIndex;else continue;
      }
      if (state.showRange[0] === -1) {
        if (height >= top) state.showRange[0] = pageIndex;else continue;
      }
      if (state.showRange[1] === -1) {
        if (height >= bottom) state.showRange[1] = pageIndex;else continue;
      }
      if (state.renderRange[1] === -1) {
        if (height >= rednerBottom) state.renderRange[1] = pageIndex;else continue;
      }
      break;
    }
    if (state.renderRange[1] === -1) state.renderRange[1] = state.pageList.length - 1;
    if (state.showRange[1] === -1) state.showRange[1] = state.pageList.length - 1;
  } else {
    // \u666E\u901A\u5377\u8F74\u6A21\u5F0F
    const top = scrollTop();
    const bottom = scrollTop() + state.rootSize.height;
    const renderTop = top - state.rootSize.height;
    const rednerBottom = bottom + state.rootSize.height;
    const renderTopImg = findTopImg(renderTop);
    const topImg = findTopImg(top, renderTopImg);
    const bottomImg = findTopImg(bottom, topImg);
    const renderBottomImg = findTopImg(rednerBottom, bottomImg);
    state.showRange = [topImg, bottomImg];
    state.renderRange = [renderTopImg, renderBottomImg];
  }
};
helper.createEffectOn([scrollLength, () => store.gridMode, () => store.option.scrollMode.enabled, () => store.activePageIndex, () => store.option.scrollMode.abreastMode, () => store.rootSize, abreastShowColumn, scrollTop], helper.throttle(() => setState(updateShowRange))
// \u4E24\u79CD\u5377\u8F74\u6A21\u5F0F\u4E0B\u90FD\u53EF\u4EE5\u901A\u8FC7\u5728\u6BCF\u6B21\u6EDA\u52A8\u540E\u8BB0\u5F55
// \u5F53\u524D \`\u663E\u793A\u7684\u7B2C\u4E00\u5F20\u56FE\u7247\u7684 bottom\` \u548C \`\u6700\u540E\u4E00\u5F20\u56FE\u7247\u7684 top\` \u4F5C\u4E3A\u5FFD\u7565\u8303\u56F4\uFF0C
// \u5728\u6BCF\u6B21\u6EDA\u52A8\u540E\u68C0\u67E5\u662F\u5426\u8D85\u51FA\u4E86\u8FD9\u4E2A\u8303\u56F4\uFF0C\u6CA1\u8D85\u51FA\u5C31\u8BF4\u660E\u672C\u6B21\u6EDA\u52A8\u4E0D\u4F1A\u663E\u793A\u6216\u6D88\u5931\u4EFB\u4F55\u56FE\u7247
// \u4EE5\u6B64\u8FDB\u884C\u6027\u80FD\u4F18\u5316
// \u4E0D\u8FC7\u4E24\u4E2A\u5377\u8F74\u6A21\u5F0F\u90FD\u8981\u8FD9\u4E48\u5904\u7406\u633A\u9EBB\u70E6\u7684\uFF0C\u59D1\u4E14\u5148\u7528 throttle \u9876\u4E0A\uFF0C\u540E\u9762\u6709\u9700\u8981\u518D\u4F18\u5316
);

/** \u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u5185\u9875\u9762\u6240\u5305\u542B\u7684\u56FE\u7247 */
const getRangeImgList = range => {
  let list;
  if (range[0] === range[1]) list = new Set(store.pageList[range[0]]);else {
    list = new Set();
    for (const [a, b] of store.pageList.slice(range[0], range[1] + 1)) {
      list.add(a);
      if (b !== undefined) list.add(b);
    }
  }
  list.delete(-1);
  return list;
};
const renderImgList = helper.createRootMemo(() => getRangeImgList(store.renderRange));
const showImgList = helper.createRootMemo(() => getRangeImgList(store.showRange));

/**
 * \u56FE\u7247\u663E\u793A\u72B6\u6001
 *
 * 0 - \u9875\u9762\u4E2D\u7684\u7B2C\u4E00\u5F20\u56FE\u7247
 * 1 - \u9875\u9762\u4E2D\u7684\u6700\u540E\u4E00\u5F20\u56FE\u7247
 * '' - \u9875\u9762\u4E2D\u7684\u552F\u4E00\u4E00\u5F20\u56FE\u7247
 */
const imgShowState = helper.createRootMemo(() => {
  if (store.pageList.length === 0) return new Map();
  const showRange = store.gridMode ? [0, store.pageList.length - 1] : store.renderRange;
  const stateList = new Map();
  for (let [i] = showRange; i <= showRange[1]; i++) {
    const page = store.pageList[i];
    if (!page) continue;
    const [a, b] = page;
    if (b === undefined) {
      stateList.set(a, '');
    } else {
      stateList.set(a, 0);
      stateList.set(b, 1);
    }
  }
  return stateList;
});

// \u5377\u8F74\u6A21\u5F0F\u4E0B\uFF0C\u5C06\u5F53\u524D\u663E\u793A\u7684\u7B2C\u4E00\u9875\u4F5C\u4E3A\u5F53\u524D\u9875
helper.createEffectOn(() => store.showRange, ([firstPage]) => {
  if (!store.gridMode && store.option.scrollMode.enabled) setState('activePageIndex', firstPage ?? 0);
});

// \u56FE\u7247\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\u56DE\u8C03
helper.createEffectOn(showImgList, showImgs => {
  if (showImgs.size === 0) return;
  store.prop.onShowImgsChange?.(showImgs, imgList());
}, {
  defer: true
});

const setMessage = (url, msg) => setState('imgMap', url, 'translationMessage', msg);
const sizeDict = {
  '1024': 'S',
  '1536': 'M',
  '2048': 'L',
  '2560': 'X'
};
const createFormData = (imgBlob, type) => {
  const formData = new FormData();
  const {
    options
  } = store.option.translation;
  const file = new File([imgBlob], \`image.\${imgBlob.type.split('/').at(-1)}\`, {
    type: imgBlob.type
  });
  if (type === 'selfhosted') {
    formData.append('image', file);
    formData.append('config', JSON.stringify(options));
  } else {
    formData.append('file', file);
    formData.append('mime', file.type);
    formData.append('size', sizeDict[options.detector.detection_size]);
    formData.append('detector', options.detector.detector);
    formData.append('direction', options.render.direction);
    formData.append('translator', options.translator.translator);
    formData.append(type === 'cotrans' ? 'target_language' : 'target_lang', options.translator.target_lang);
    formData.append('retry', \`\${store.option.translation.forceRetry}\`);
  }
  return formData;
};

/** \u5C06\u7AD9\u70B9\u5217\u8868\u8F6C\u4E3A\u9009\u62E9\u5668\u4E2D\u7684\u9009\u9879 */
const createOptions = list => list.map(name => [name, helper.t(\`translation.translator.\${name}\`) || name]);

const handleMessage = (msg, url) => {
  switch (msg.type) {
    case 'result':
      return msg.result.translation_mask;
    case 'pending':
      setMessage(url, helper.t('translation.tip.pending', {
        pos: msg.pos
      }));
      break;
    case 'status':
      setMessage(url, helper.t(\`translation.status.\${msg.status}\`) || msg.status);
      break;
    case 'error':
      throw new Error(\`\${helper.t('translation.status.error')}\uFF1Aid \${msg.error_id}\`);
    case 'not_found':
      throw new Error(\`\${helper.t('translation.status.error')}\uFF1ANot Found\`);
  }
};
const waitTranslationPolling = async (id, url) => {
  let result;
  while (result === undefined) {
    const res = await request.request(\`https://api.cotrans.touhou.ai/task/\${id}/status/v1\`, {
      responseType: 'json'
    });
    result = handleMessage(res.response, url);
    await helper.sleep(1000);
  }
  return result;
};

/** \u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210 */
const waitTranslation = async (id, url) => {
  const ws = new WebSocket(\`wss://api.cotrans.touhou.ai/task/\${id}/event/v1\`);

  // \u5982\u679C\u7F51\u7AD9\u8BBE\u7F6E\u4E86 CSP connect-src \u5C31\u53EA\u80FD\u8F6E\u8BE2\u4E86
  if (ws.readyState > 1) return waitTranslationPolling(id, url);
  return new Promise((resolve, reject) => {
    ws.onmessage = e => {
      try {
        const result = handleMessage(JSON.parse(e.data), url);
        if (result) resolve(result);
      } catch (error) {
        reject(error);
      }
    };
  });
};

/** \u5C06\u7FFB\u8BD1\u540E\u7684\u5185\u5BB9\u8986\u76D6\u5230\u539F\u56FE\u4E0A */
const mergeImage = async (rawImage, maskUri) => {
  const img = await helper.waitImgLoad(URL.createObjectURL(rawImage));
  const canvas = new OffscreenCanvas(img.naturalWidth, img.naturalHeight);
  const canvasCtx = canvas.getContext('2d');
  canvasCtx.drawImage(img, 0, 0);
  const img2 = new Image();
  img2.src = URL.createObjectURL(await downloadImg(maskUri));
  await helper.waitImgLoad(img2);
  canvasCtx.drawImage(img2, 0, 0);
  return URL.createObjectURL(await helper.canvasToBlob(canvas));
};

/** \u7F29\u5C0F\u8FC7\u5927\u7684\u56FE\u7247 */
const resize = async (blob, w, h) => {
  if (w <= 4096 && h <= 4096) return blob;
  const scale = Math.min(4096 / w, 4096 / h);
  const width = Math.floor(w * scale);
  const height = Math.floor(h * scale);
  const img = await helper.waitImgLoad(URL.createObjectURL(blob));
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);
  URL.revokeObjectURL(img.src);
  return helper.canvasToBlob(canvas);
};

/** \u4F7F\u7528 cotrans \u7FFB\u8BD1\u6307\u5B9A\u56FE\u7247 */
const cotransTranslation = async url => {
  const img = store.imgMap[url];
  setMessage(url, helper.t('translation.tip.img_downloading'));
  let imgBlob;
  try {
    imgBlob = await downloadImg(img.src);
  } catch (error) {
    helper.log.error(error);
    store.prop.onImgError?.(url);
    throw new Error(helper.t('translation.tip.download_img_failed'));
  }
  try {
    imgBlob = await resize(imgBlob, img.width, img.height);
  } catch (error) {
    helper.log.error(error);
    throw new Error(helper.t('translation.tip.resize_img_failed'));
  }
  setMessage(url, helper.t('translation.tip.upload'));
  let res;
  try {
    res = await request.request('https://api.cotrans.touhou.ai/task/upload/v1', {
      method: 'POST',
      data: createFormData(imgBlob, 'cotrans'),
      headers: {
        Origin: 'https://cotrans.touhou.ai',
        Referer: 'https://cotrans.touhou.ai/'
      }
    });
  } catch (error) {
    helper.log.error(error);
    throw new Error(helper.t('translation.tip.upload_error'));
  }
  let resData;
  try {
    resData = JSON.parse(res.responseText);
    helper.log(resData);
  } catch {
    throw new Error(\`\${helper.t('translation.tip.upload_return_error')}\uFF1A\${res.responseText}\`);
  }
  if ('error_id' in resData) throw new Error(\`\${helper.t('translation.tip.upload_return_error')}\uFF1A\${resData.error_id}\`);
  if (!resData.id) throw new Error(helper.t('translation.tip.id_not_returned'));
  const translation_mask = resData.result?.translation_mask || (await waitTranslation(resData.id, url));
  return mergeImage(imgBlob, translation_mask);
};
const cotransTranslators = ['google', 'youdao', 'baidu', 'deepl', 'gpt3.5', 'offline', 'none'];

const apiUrl = () => store.option.translation.localUrl || 'http://127.0.0.1:5003';

/** \u4F7F\u7528\u81EA\u90E8\u7F72\u670D\u52A1\u5668\u7FFB\u8BD1\u6307\u5B9A\u56FE\u7247 */
const selfhostedTranslation = async url => {
  const html = await request.request(apiUrl(), {
    errorText: \`\${helper.t('setting.option.paragraph_translation')} - \${helper.t('alert.server_connect_failed')}\`
  });
  setMessage(url, helper.t('translation.tip.img_downloading'));
  let imgBlob;
  try {
    imgBlob = await downloadImg(url);
  } catch (error) {
    helper.log.error(error, url);
    store.prop.onImgError?.(url);
    throw new Error(helper.t('translation.tip.download_img_failed'));
  }

  // \u652F\u6301\u65E7\u7248 manga-image-translator
  // https://sleazyfork.org/zh-CN/scripts/374903/discussions/273466
  if (html.responseText.includes('value="S">1024px</')) {
    let task_id;
    // \u4E0A\u4F20\u56FE\u7247\u53D6\u5F97\u4EFB\u52A1 id
    try {
      const res = await request.request(\`\${apiUrl()}/submit\`, {
        method: 'POST',
        responseType: 'json',
        data: createFormData(imgBlob, 'selfhosted-old')
      });
      ({
        task_id
      } = res.response);
    } catch (error) {
      helper.log.error(error);
      throw new Error(helper.t('translation.tip.upload_error'));
    }
    let errorNum = 0;
    let taskState;
    // \u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210
    while (!taskState?.finished) {
      try {
        await helper.sleep(200);
        const res = await request.request(\`\${apiUrl()}/task-state?taskid=\${task_id}\`, {
          responseType: 'json'
        });
        taskState = res.response;
        setMessage(url, \`\${helper.t(\`translation.status.\${taskState.state}\`) || taskState.state}\`);
      } catch (error) {
        helper.log.error(error);
        if (errorNum > 5) throw new Error(helper.t('translation.tip.check_img_status_failed'));
        errorNum += 1;
      }
    }
    return URL.createObjectURL(await downloadImg(\`\${apiUrl()}/result/\${task_id}\`));
  }
  try {
    const res = await fetch(\`\${apiUrl()}/translate/with-form/image/stream\`, {
      method: 'POST',
      body: createFormData(imgBlob, 'selfhosted')
    });
    if (res.status !== 200 || !res.body) throw new Error(helper.t('translation.status.error'));
    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf8');
    let buffer = new Uint8Array();
    while (true) {
      const {
        done,
        value
      } = await reader.read();
      if (done) break;
      buffer = Uint8Array.from([...buffer, ...value]);
      while (buffer.length >= 5) {
        const dataSize = new DataView(buffer.buffer).getUint32(1, false);
        const totalSize = 5 + dataSize;
        if (buffer.length < totalSize) break;
        const data = buffer.slice(5, totalSize);
        switch (buffer[0]) {
          case 0:
            return URL.createObjectURL(new Blob([data], {
              type: 'image/png'
            }));
          case 1:
            setMessage(url, helper.t(\`translation.status.\${decoder.decode(data)}\`));
            break;
          case 2:
            throw new Error(\`\${helper.t('translation.status.error')}: \${decoder.decode(data)}\`);
          case 3:
            {
              const pos = decoder.decode(data);
              if (pos !== '0') {
                setMessage(url, helper.t('translation.tip.pending', {
                  pos
                }));
                break;
              }
              // falls through
            }
          case 4:
            setMessage(url, helper.t('translation.status.pending'));
            break;
        }
        buffer = buffer.slice(totalSize);
      }
    }
    throw new Error(helper.t('translation.status.error'));
  } catch (error) {
    // \u5982\u679C\u56E0\u4E3A cors \u65E0\u6CD5\u4F7F\u7528 fetch\uFF0C\u5C31\u53EA\u80FD\u4F7F\u7528\u62FF\u4E0D\u5230\u7FFB\u8BD1\u72B6\u6001\u7684\u975E\u6D41\u5F0F\u63A5\u53E3\u4E86
    if (error.message.includes('Failed to fetch')) {
      setMessage(url, helper.t('translation.tip.translating'));
      // \u5728\u62F7\u8D1D\u6F2B\u753B\u4E0A\u83AB\u540D\u6709\u6982\u7387\u62A5\u9519
      // \u867D\u7136\u731C\u6D4B\u53EF\u80FD\u662F cors connect-src \u5BFC\u81F4\u7684\uFF0C\u4F46\u5728\u7C7B\u4F3C\u7684 fantia \u4E0A\u5374\u4E5F\u65E0\u6CD5\u590D\u73B0
      // \u4E5F\u627E\u4E0D\u5230\u7B2C\u4E8C\u4E2A\u540C\u6837\u95EE\u9898\u7684\u7F51\u7AD9\uFF0C\u8003\u8651\u5230\u5E94\u8BE5\u6CA1\u4EBA\u4F1A\u5728\u62F7\u8D1D\u4E0A\u7FFB\u8BD1\uFF0C\u5C31\u6682\u4E14\u4E0D\u7BA1\u4E86
      const res = await request.request(\`\${apiUrl()}/translate/with-form/image\`, {
        method: 'POST',
        responseType: 'blob',
        fetch: false,
        timeout: 1000 * 60 * 10,
        data: createFormData(imgBlob, 'selfhosted'),
        errorText: helper.t('translation.tip.upload_error')
      });
      return URL.createObjectURL(res.response);
    }
    throw error;
  }
};
const [selfhostedOptions, setSelfOptions] = helper.createEqualsSignal([]);

/** \u66F4\u65B0\u90E8\u7F72\u670D\u52A1\u7684\u53EF\u7528\u7FFB\u8BD1 */
const updateSelfhostedOptions = async (noTip = false) => {
  if (store.option.translation.server !== 'selfhosted') return;
  try {
    const res = await request.request(\`\${apiUrl()}\`, {
      noTip,
      errorText: \`\${helper.t('setting.option.paragraph_translation')} - \${helper.t('alert.server_connect_failed')}\`
    });
    const translatorsText = /(?<=validTranslators: )\\[.+?\\](?=,)/s.exec(res.responseText)?.[0];
    if (!translatorsText) return undefined;
    const list = JSON.parse(translatorsText.replaceAll(/\\s|,\\s*(?=\\])/g, \`\`).replaceAll(\`'\`, \`"\`));
    setSelfOptions(createOptions(list));
  } catch (error) {
    helper.log.error(helper.t('translation.tip.get_translator_list_error'), error);
    setSelfOptions([]);
  }

  // \u5982\u679C\u66F4\u65B0\u540E\u539F\u5148\u9009\u62E9\u7684\u7FFB\u8BD1\u670D\u52A1\u5931\u6548\u4E86\uFF0C\u5C31\u6362\u6210\u7B2C\u4E00\u4E2A\u7FFB\u8BD1
  if (!selfhostedOptions().some(([val]) => val === store.option.translation.options.translator.translator)) {
    setOption(draftOption => {
      draftOption.translation.options.translator.translator = selfhostedOptions()[0]?.[0];
    });
  }
};

// \u5728\u5207\u6362\u7FFB\u8BD1\u670D\u52A1\u5668\u7684\u540C\u65F6\u5207\u6362\u53EF\u7528\u7FFB\u8BD1\u7684\u9009\u9879\u5217\u8868
helper.createEffectOn([() => store.option.translation.server, () => store.option.translation.localUrl, helper.lang], () => store.imgList.length > 0 && updateSelfhostedOptions(true), {
  defer: true
});

/** \u7FFB\u8BD1\u6307\u5B9A\u56FE\u7247 */
const translationImage = async url => {
  try {
    if (typeof GM_xmlhttpRequest === 'undefined') {
      Toast.toast?.error(helper.t('pwa.alert.userscript_not_installed'));
      throw new Error(helper.t('pwa.alert.userscript_not_installed'));
    }
    if (!url) return;
    const img = store.imgMap[url];
    if (img.translationType !== 'wait') return;
    if (img.translationUrl) return setState('imgMap', url, 'translationType', 'show');
    if (img.loadType !== 'loaded') return setMessage(url, helper.t('translation.tip.img_not_fully_loaded'));
    const translationUrl = await (store.option.translation.server === 'cotrans' ? cotransTranslation : selfhostedTranslation)(url);
    setState('imgMap', url, {
      translationUrl,
      translationMessage: helper.t('translation.tip.translation_completed'),
      translationType: 'show'
    });
  } catch (error) {
    setState('imgMap', url, 'translationType', 'error');
    if (error?.message) setState('imgMap', url, 'translationMessage', error.message);
  }
};

/** \u9010\u4E2A\u7FFB\u8BD1\u72B6\u6001\u4E3A\u7B49\u5F85\u7FFB\u8BD1\u7684\u56FE\u7247 */
const translationAll = helper.singleThreaded(async state => {
  const targetImg = imgList().find(img => img.translationType === 'wait' && img.loadType === 'loaded');
  if (!targetImg) return;
  await translationImage(targetImg.src);
  state.continueRun();
});

/** \u5F00\u542F\u6216\u5173\u95ED\u6307\u5B9A\u56FE\u7247\u7684\u7FFB\u8BD1 */
const setImgTranslationEnbale = (list, enbale) => {
  if (store.option.translation.server === 'disable' && enbale) return;
  setState(state => {
    for (const i of list) {
      const img = state.imgMap[state.imgList[i]];
      if (!img) continue;
      const url = img.src;
      if (enbale) {
        if (state.option.translation.forceRetry) {
          img.translationType = 'wait';
          img.translationUrl = undefined;
          setMessage(url, helper.t('translation.tip.wait_translation'));
        } else {
          switch (img.translationType) {
            case 'hide':
              {
                img.translationType = 'show';
                break;
              }
            case 'error':
            case undefined:
              {
                img.translationType = 'wait';
                setMessage(url, helper.t('translation.tip.wait_translation'));
                break;
              }
          }
        }
      } else {
        switch (img.translationType) {
          case 'show':
            {
              img.translationType = 'hide';
              break;
            }
          case 'error':
          case 'wait':
            {
              img.translationType = undefined;
              break;
            }
        }
      }
    }
  });
  return translationAll();
};
const translatorOptions = helper.createRootMemo(() => store.option.translation.server === 'selfhosted' ? selfhostedOptions() : createOptions(cotransTranslators));

/** \u7FFB\u8BD1\u8303\u56F4\u7684\u56FE\u7247 */
const translationImgs = helper.createRootMemo(() => {
  const list = new Set();
  for (const [i, img] of imgList().entries()) {
    switch (img.translationType) {
      case 'error':
      case 'show':
      case 'wait':
        list.add(i);
    }
  }
  return list;
});

/** \u5F53\u524D\u663E\u793A\u7684\u56FE\u7247\u662F\u5426\u6B63\u5728\u7FFB\u8BD1 */
const isTranslatingImage = helper.createRootMemo(() => activePage().some(i => translationImgs().has(i)));

/** \u7FFB\u8BD1\u5F53\u524D\u9875 */
const translateCurrent = () => setImgTranslationEnbale(activePage(), !isTranslatingImage());
const createTranslateRange = imgs => {
  const isTranslating = helper.createRootMemo(() => imgs().every(i => translationImgs().has(i)));
  const translateRange = () => {
    if (store.option.translation.server !== 'selfhosted') return;
    setImgTranslationEnbale(imgs(), !isTranslating());
  };
  return [isTranslating, translateRange];
};

// \u7FFB\u8BD1\u5168\u90E8\u56FE\u7247
const [isTranslatingAll, translateAll] = createTranslateRange(helper.createRootMemo(() => helper.range(store.imgList.length)));

// \u7FFB\u8BD1\u5F53\u524D\u9875\u4EE5\u540E\u7684\u5168\u90E8\u56FE\u7247
const [isTranslatingToEnd, translateToEnd] = createTranslateRange(helper.createRootMemo(() => helper.range(activeImgIndex(), store.imgList.length)));

/** \u56FE\u7247\u4E0A\u6B21\u52A0\u8F7D\u51FA\u9519\u7684\u65F6\u95F4 */
const imgErrorTime = new Map();

/** \u56FE\u7247\u52A0\u8F7D\u5B8C\u6BD5\u7684\u56DE\u8C03 */
const handleImgLoaded = (url, e) => {
  // \u5185\u8054\u56FE\u7247\u5143\u7D20\u88AB\u521B\u5EFA\u540E\u7ACB\u523B\u5C31\u4F1A\u89E6\u53D1 load \u4E8B\u4EF6\uFF0C\u5982\u679C\u5728\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u524D url \u53D1\u751F\u6539\u53D8
  // \u5C31\u4F1A\u5BFC\u81F4\u8FD9\u91CC\u83B7\u5F97\u7684\u662F\u4E0A\u4E2A url \u56FE\u7247\u7684\u5C3A\u5BF8
  if (e && !e.isConnected) return;
  imgErrorTime.delete(url);
  const img = store.imgMap[url];
  if (img.translationType === 'show') return;
  if (img.loadType !== 'loaded') {
    setState('imgMap', url, 'loadType', 'loaded');
    updateImgLoadType();
    store.prop.onLoading?.(imgList(), store.imgMap[url]);
  }
  if (!e) return;
  updateImgSize(url, e.naturalWidth, e.naturalHeight);
  if (store.option.imgRecognition.enabled && e.src === img.blobUrl) setTimeout(handleImgRecognition, 0, url, e);
  translationAll();
};

/** \u56FE\u7247\u52A0\u8F7D\u51FA\u9519\u7684\u56DE\u8C03 */
const handleImgError = (url, e) => {
  if (e && !e.isConnected) return;
  const isRetry = !imgErrorTime.has(url);
  imgErrorTime.set(url, Date.now());
  setState(state => {
    const img = state.imgMap[url];
    if (!img) return;
    const imgIndexs = getImgIndexs(url);
    helper.log.error(imgIndexs, helper.t('alert.img_load_failed'), e);
    img.loadType = 'error';
    img.type = undefined;
    if (imgIndexs.some(i => renderImgList().has(i)) && isRetry) img.loadType = 'wait';
  });
  store.prop.onLoading?.(imgList(), store.imgMap[url]);
  store.prop.onImgError?.(url);
  updateImgLoadType();
};

/** \u9700\u8981\u52A0\u8F7D\u7684\u56FE\u7247 */
const needLoadImgList = helper.createRootMemo(() => {
  const list = new Set();
  for (const img of imgList()) if (img.loadType !== 'loaded' && img.src) list.add(img.src);
  return list;
});

/** \u5F53\u524D\u52A0\u8F7D\u7684\u56FE\u7247 */
const loadImgList = new Set();

/** \u52A0\u8F7D\u6307\u5B9A\u56FE\u7247\u3002\u8FD4\u56DE\u662F\u5426\u5DF2\u52A0\u8F7D\u5B8C\u6210 */
const loadImg = url => {
  const img = store.imgMap[url];
  if (!needLoadImgList().has(img.src)) return true;
  if (img.loadType === 'error') return true;
  loadImgList.add(url);
  return false;
};

/** \u83B7\u53D6\u6307\u5B9A\u9875\u6570\u4E0B\u7684\u5934/\u5C3E\u56FE\u7247 */
const getPageImg = (pageNum, imgType) => {
  const page = store.pageList[pageNum].filter(i => i !== -1);
  if (page.length === 1) return page[0];
  return imgType === 'start' ? Math.min(...page) : Math.max(...page);
};

/**
 * \u4EE5\u5F53\u524D\u663E\u793A\u9875\u4E3A\u57FA\u51C6\uFF0C\u9884\u52A0\u8F7D\u9644\u8FD1\u6307\u5B9A\u9875\u6570\u7684\u56FE\u7247\uFF0C\u5E76\u53D6\u6D88\u5176\u4ED6\u9884\u52A0\u8F7D\u7684\u56FE\u7247
 * @param target \u52A0\u8F7D\u76EE\u6807\u9875
 * @param loadNum \u52A0\u8F7D\u56FE\u7247\u6570\u91CF
 * @returns \u8FD4\u56DE\u6307\u5B9A\u8303\u56F4\u5185\u662F\u5426\u8FD8\u6709\u672A\u52A0\u8F7D\u7684\u56FE\u7247
 */
const loadRangeImg = (target = 0, loadNum = 2) => {
  let start = getPageImg(store.showRange[0], 'start');
  let end = getPageImg(store.showRange[1], 'end');
  if (target !== 0) {
    if (target < 0) {
      end = start + target;
      start -= 1;
    } else {
      start = end + 1;
      end += target;
    }
    start = helper.clamp(0, start, store.imgList.length - 1);
    end = helper.clamp(0, end, store.imgList.length - 1);
  }

  /** \u662F\u5426\u8FD8\u6709\u672A\u52A0\u8F7D\u7684\u56FE\u7247 */
  let hasUnloadedImg = false;
  let index = start;
  const condition = start <= end ? () => index <= end : () => index >= end;
  const step = start <= end ? 1 : -1;
  while (condition()) {
    if (!loadImg(getImg(index).src)) hasUnloadedImg = true;
    if (loadImgList.size >= loadNum) return index !== end || hasUnloadedImg;
    index += step;
  }
  return hasUnloadedImg;
};

/** \u52A0\u8F7D\u671F\u95F4\u5C3D\u5FEB\u83B7\u53D6\u56FE\u7247\u5C3A\u5BF8 */
const checkImgSize = url => {
  const imgDom = getImgEle(url);
  if (!imgDom) return;
  const timeoutId = setInterval(() => {
    if (!imgDom?.isConnected || store.option.imgRecognition.enabled) return clearInterval(timeoutId);
    const img = store.imgMap[url];
    if (!img || img.loadType !== 'loading') return clearInterval(timeoutId);
    if (imgDom.naturalWidth && imgDom.naturalHeight) {
      updateImgSize(url, imgDom.naturalWidth, imgDom.naturalHeight);
      return clearInterval(timeoutId);
    }
  }, 200);
};
const updateImgLoadType = helper.singleThreaded(() => {
  if (store.showRange[0] < 0 || needLoadImgList().size === 0) return;
  loadImgList.clear();
  if (store.imgList.length > 0) {
    // \u4F18\u5148\u52A0\u8F7D\u5F53\u524D\u663E\u793A\u7684\u56FE\u7247
    loadRangeImg() ||
    // \u518D\u52A0\u8F7D\u540E\u9762\u51E0\u9875
    loadRangeImg(preloadNum().back) ||
    // \u518D\u52A0\u8F7D\u524D\u9762\u51E0\u9875
    loadRangeImg(-preloadNum().front) ||
    // \u6839\u636E\u8BBE\u7F6E\u51B3\u5B9A\u662F\u5426\u8981\u7EE7\u7EED\u52A0\u8F7D\u5176\u4F59\u56FE\u7247
    !store.option.alwaysLoadAllImg ||
    // \u52A0\u8F7D\u5F53\u524D\u9875\u540E\u9762\u7684\u56FE\u7247
    loadRangeImg(Number.POSITIVE_INFINITY, 5) ||
    // \u52A0\u8F7D\u5F53\u524D\u9875\u524D\u9762\u7684\u56FE\u7247
    loadRangeImg(Number.NEGATIVE_INFINITY, 5);
  }
  setState(state => {
    for (const url of needLoadImgList()) {
      const img = state.imgMap[url];
      if (loadImgList.has(url)) {
        if (img.loadType !== 'loading') {
          img.loadType = 'loading';
          if (!store.option.imgRecognition.enabled && img.width === undefined) setTimeout(checkImgSize, 0, img.src);
        }
      } else if (img.loadType === 'loading') img.loadType = 'wait';
    }
  });
});
helper.createEffectOn([preloadNum, helper.createRootMemo(() => [...renderImgList()].map(i => store.imgList[i])), () => store.option.alwaysLoadAllImg], updateImgLoadType);
helper.createEffectOn(showImgList, helper.debounce(_showImgList => {
  // \u5982\u679C\u5F53\u524D\u663E\u793A\u9875\u9762\u6709\u51FA\u9519\u7684\u56FE\u7247\uFF0C\u5C31\u91CD\u65B0\u52A0\u8F7D\u4E00\u6B21
  if (imgErrorTime.size === 0) return;
  for (const img of [..._showImgList].map(i => getImg(i))) {
    if (img?.loadType !== 'error') continue;
    setState('imgMap', img.src, 'loadType', 'wait');
    updateImgLoadType();
  }
}, 500), {
  defer: true
});

/** \u9694\u4E00\u6BB5\u65F6\u95F4\u91CD\u65B0\u52A0\u8F7D\u51FA\u9519\u7684\u56FE\u7247 */
const retryErrorImg = () => {
  if (imgErrorTime.size > 0) {
    const retryTime = Date.now() - 1000 * 60 * 3;
    for (const [url, time] of imgErrorTime.entries()) {
      if (time > retryTime) continue;
      setState('imgMap', url, 'loadType', 'wait');
      updateImgLoadType();
    }
  }
  // \u91CD\u65B0\u52A0\u8F7D\u95F4\u9694\u4E00\u5B9A\u65F6\u95F4\uFF0C\u907F\u514D\u56E0\u4E3A\u77ED\u65F6\u95F4\u9891\u7E41\u52A0\u8F7D\u800C\u5931\u8D25
  setTimeout(retryErrorImg, 1000 * 5);
};
retryErrorImg();

/** \u52A0\u8F7D\u4E2D\u7684\u56FE\u7247 */
const loadingImgList = helper.createRootMemo(() => {
  const list = new Set();
  for (const [url, img] of Object.entries(store.imgMap)) if (img.loadType === 'loading') list.add(url);
  return list;
});
const abortMap = new Map();
const timeoutAbort = url => {
  if (!abortMap.has(url)) return;
  abortMap.get(url).abort();
  abortMap.delete(url);
  handleImgError(url);
};
helper.createEffectOn(loadingImgList, (downImgList, prevImgList) => {
  if (!store.option.imgRecognition.enabled) return;
  if (prevImgList) {
    // \u4E2D\u65AD\u53D6\u6D88\u4E0B\u8F7D\u7684\u56FE\u7247
    for (const url of prevImgList) {
      if (downImgList.has(url) || !abortMap.has(url)) continue;
      abortMap.get(url)?.abort();
      abortMap.delete(url);
      helper.log(\`\u4E2D\u65AD\u4E0B\u8F7D \${url}\`);
    }
  }
  for (const url of downImgList.values()) {
    if (abortMap.has(url) || store.imgMap[url].blobUrl) continue;
    const controller = new AbortController();
    const handleTimeout = helper.debounce(() => timeoutAbort(url), 1000 * 3);
    controller.signal.addEventListener('abort', handleTimeout.clear);
    abortMap.set(url, controller);
    handleTimeout();
    request.request(url, {
      responseType: 'blob',
      retryFetch: true,
      signal: controller.signal,
      timeout: undefined,
      noTip: true,
      headers: downloadImgHeaders,
      onerror: () => handleImgError(url),
      onprogress({
        loaded,
        total
      }) {
        setState('imgMap', url, 'progress', loaded / total * 100);
        // \u4E00\u6BB5\u65F6\u95F4\u5185\u90FD\u6CA1\u8FDB\u5EA6\u540E\u8D85\u65F6\u4E2D\u65AD
        handleTimeout();
      },
      onload({
        response
      }) {
        abortMap.delete(url);
        setState('imgMap', url, {
          blobUrl: URL.createObjectURL(response),
          progress: undefined
        });
        handleImgLoaded(url);
      }
    });
  }
});

const upscaleImage = async (url, imgEle) => {
  setState('imgMap', url, 'upscaleUrl', '');
  const {
    data,
    width,
    height
  } = helper.getImageData(imgEle);
  initWorker();
  await worker$1.upscaleImage(Comlink.transfer(data, [data.buffer]), width, height, url);
};
let upscaleing = false;
const findUpscaleImage = async (start, end) => {
  for (let i = start; i < end; i++) {
    const img = typeof i === 'number' ? getImg(i) : i;
    if (img.upscaleUrl !== undefined) continue;
    const imgEle = await helper.wait(() => getImgEle(img.src), 1000);
    if (imgEle) return [img.src, imgEle];
  }
};
const handleUpscaleImage = async () => {
  if (upscaleing || !isUpscale()) return;
  // \u4F18\u5148\u653E\u5927 \u5F53\u524D\u663E\u793A\u7684\u56FE\u7247 > \u540E\u9762\u7684\u56FE\u7247 > \u524D\u9762\u7684\u56FE\u7247
  const targetImg = (await findUpscaleImage(activeImgIndex(), store.imgList.length)) ?? (await findUpscaleImage(0, activeImgIndex()));
  if (!targetImg) return;
  upscaleing = true;
  await upscaleImage(...targetImg);
  upscaleing = false;
  return handleUpscaleImage();
};
helper.createEffectOn([isUpscale, imgList], handleUpscaleImage);
const bufferToBase64 = buffer => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) binary += String.fromCodePoint(bytes[i]);
  return window.btoa(binary);
};
const getModel = async () => {
  try {
    let base64;
    let buffer;
    if (typeof GM !== 'undefined') base64 = await GM.getValue('@model.bin');
    if (!base64) {
      Toast.toast(helper.t('upscale.module_downloading'), {
        id: 'upscale',
        duration: Number.POSITIVE_INFINITY
      });
      // TODO: \u4FEE\u6539\u7F51\u5740
      const bin = await request.request('https://cdn.jsdelivr.net/npm/@hymbz/comic-read-script@11.12.1/public/realcugan/2x-conservative-128/group1-shard1of1.bin', {
        responseType: 'arraybuffer',
        noTip: true
      });
      Toast.toast(helper.t('upscale.module_download_complete'), {
        id: 'upscale',
        duration: 1000 * 3
      });
      buffer = bin.response;
      base64 = bufferToBase64(buffer);
      await GM.setValue('@model.bin', base64);
    }
    let json = await GM.getValue('@model.json');
    if (!json) {
      const jsonFile = await request.request('https://cdn.jsdelivr.net/npm/@hymbz/comic-read-script@11.12.1/public/realcugan/2x-conservative-128/model.json', {
        noTip: true
      });
      json = jsonFile.responseText;
      await GM.setValue('@model.json', json);
    }
    return {
      base64,
      json,
      buffer
    };
  } catch (error) {
    helper.log.error('\u83B7\u53D6\u56FE\u7247\u653E\u5927\u6A21\u578B\u51FA\u9519', error);
    Toast.toast.dismiss('upscale');
    Toast.toast.error(helper.t('upscale.module_download_failed'), {
      id: 'upscale',
      duration: Number.POSITIVE_INFINITY
    });
    setState('supportUpscaleImage', false);
    setState('option', 'imgRecognition', 'upscale', false);
    throw error;
  }
};
const initWorker = helper.onec(() => {
  const mainFn = {
    log: helper.log,
    toast: Toast.toast,
    t: helper.t,
    setImg: (url, key, val) => Reflect.has(store.imgMap, url) && setState('imgMap', url, key, val),
    getModel
  };
  worker$1.setMainFn(Comlink.proxy(mainFn), Object.keys(mainFn));
});

var css$1 = ".img____hash_base64_5_ img{display:block;height:100%;object-fit:contain;width:100%}.img____hash_base64_5_{align-content:center;content-visibility:hidden;display:none;height:100%;margin-left:auto;margin-right:auto;position:relative;width:100%}.img____hash_base64_5_[data-show]{content-visibility:visible;display:block}.img____hash_base64_5_>picture{display:block;height:auto;inset:0;margin-bottom:auto;margin-left:inherit;margin-right:inherit;margin-top:auto;max-height:100%;max-width:100%;position:absolute;width:auto}.img____hash_base64_5_>picture,.img____hash_base64_5_>picture:after{background-color:var(--hover-bg-color,#fff3);background-image:var(--md-photo);background-position:50%;background-repeat:no-repeat;background-size:30%}.img____hash_base64_5_[data-load-type=error]>picture:after{background-color:#eee;background-image:var(--md-image-not-supported);content:\\"\\";height:100%;pointer-events:none;position:absolute;right:0;top:0;width:100%}.img____hash_base64_5_[data-load-type=loading]>picture{background-image:var(--md-cloud-download)}:is(.img____hash_base64_5_[data-load-type=loading]>picture) img{animation:show____hash_base64_5_ .1s forwards}.mangaFlow____hash_base64_5_[dir=ltr] .img____hash_base64_5_[data-show=\\"1\\"],.mangaFlow____hash_base64_5_[dir=rtl] .img____hash_base64_5_[data-show=\\"0\\"]{margin-left:0;margin-right:auto}.mangaFlow____hash_base64_5_[dir=ltr] .img____hash_base64_5_[data-show=\\"0\\"],.mangaFlow____hash_base64_5_[dir=rtl] .img____hash_base64_5_[data-show=\\"1\\"]{margin-left:auto;margin-right:0}.mangaFlow____hash_base64_5_{backface-visibility:hidden;color:var(--text);contain:layout;display:grid;grid-auto-columns:100%;grid-auto-flow:column;grid-auto-rows:100%;height:100%;overflow:visible;place-items:center;position:absolute;row-gap:0;touch-action:none;transform-origin:0 0;-webkit-user-select:none;user-select:none;width:100%;will-change:left,top}.mangaFlow____hash_base64_5_[data-disable-zoom] .img____hash_base64_5_>picture{height:fit-content;width:fit-content}.mangaFlow____hash_base64_5_[data-hidden-mouse=true]{cursor:none}.mangaFlow____hash_base64_5_[data-vertical]{grid-auto-flow:row}.mangaBox____hash_base64_5_{contain:layout style;height:100%;transform-origin:0 0;transition-duration:0s;width:100%}.mangaBox____hash_base64_5_[data-animation=page] .mangaFlow____hash_base64_5_,.mangaBox____hash_base64_5_[data-animation=zoom]{transition-duration:.3s}.root____hash_base64_5_:not([data-grid-mode]) .mangaBox____hash_base64_5_{scrollbar-width:none}:is(.root____hash_base64_5_:not([data-grid-mode]) .mangaBox____hash_base64_5_)::-webkit-scrollbar{display:none}.root____hash_base64_5_[data-grid-mode] .mangaFlow____hash_base64_5_{align-items:end;box-sizing:border-box;grid-auto-columns:1fr;grid-auto-flow:row;grid-auto-rows:max-content;grid-template-rows:unset;overflow:auto;row-gap:1.5em}:is(.root____hash_base64_5_[data-grid-mode] .mangaFlow____hash_base64_5_) .img____hash_base64_5_{cursor:pointer;margin-left:auto;margin-right:auto}:is(:is(.root____hash_base64_5_[data-grid-mode] .mangaFlow____hash_base64_5_) .img____hash_base64_5_)>picture{position:relative}:is(:is(.root____hash_base64_5_[data-grid-mode] .mangaFlow____hash_base64_5_) .img____hash_base64_5_)>.gridModeTip____hash_base64_5_{bottom:-1.5em;cursor:auto;direction:ltr;line-height:1.5em;opacity:.5;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:100%}[data-load-type=error]:is(:is(.root____hash_base64_5_[data-grid-mode] .mangaFlow____hash_base64_5_) .img____hash_base64_5_),[data-load-type=wait]:is(:is(.root____hash_base64_5_[data-grid-mode] .mangaFlow____hash_base64_5_) .img____hash_base64_5_),[src=\\"\\"]:is(:is(.root____hash_base64_5_[data-grid-mode] .mangaFlow____hash_base64_5_) .img____hash_base64_5_){height:100%}.root____hash_base64_5_[data-scroll-mode]:not([data-grid-mode]) .mangaBox____hash_base64_5_{overflow:auto}:is(.root____hash_base64_5_[data-scroll-mode]:not([data-grid-mode]) .mangaBox____hash_base64_5_) .mangaFlow____hash_base64_5_{height:fit-content;row-gap:calc(var(--scroll-mode-spacing)*7px);touch-action:pan-y}[data-abreast-scroll]:is(.root____hash_base64_5_[data-scroll-mode]:not([data-grid-mode]) .mangaBox____hash_base64_5_){overflow:hidden;touch-action:none}[data-abreast-scroll]:is(.root____hash_base64_5_[data-scroll-mode]:not([data-grid-mode]) .mangaBox____hash_base64_5_) .mangaFlow____hash_base64_5_{align-items:start;column-gap:calc(var(--scroll-mode-spacing)*7px);height:100%}:is([data-abreast-scroll]:is(.root____hash_base64_5_[data-scroll-mode]:not([data-grid-mode]) .mangaBox____hash_base64_5_) .mangaFlow____hash_base64_5_) .img____hash_base64_5_{height:auto;width:100%;will-change:transform}:is(:is([data-abreast-scroll]:is(.root____hash_base64_5_[data-scroll-mode]:not([data-grid-mode]) .mangaBox____hash_base64_5_) .mangaFlow____hash_base64_5_) .img____hash_base64_5_)>picture{position:relative}@keyframes show____hash_base64_5_{0%{opacity:0}90%{opacity:0}to{opacity:1}}.endPageBody____hash_base64_5_,.endPage____hash_base64_5_{align-items:center;display:flex;height:100%;justify-content:center;width:100%;z-index:10}.endPage____hash_base64_5_{background-color:#333d;color:#fff;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .5s}.endPage____hash_base64_5_[data-show]{opacity:1;pointer-events:all}.endPage____hash_base64_5_[data-type=start] .tip____hash_base64_5_{transform:translateY(-10em)}.endPage____hash_base64_5_[data-type=end] .tip____hash_base64_5_{transform:translateY(10em)}.endPage____hash_base64_5_ .endPageBody____hash_base64_5_{transform:translateY(var(--drag-y,0));transition:transform .2s}:is(.endPage____hash_base64_5_ .endPageBody____hash_base64_5_) button{animation:jello____hash_base64_5_ .3s forwards;background-color:initial;color:inherit;cursor:pointer;font-size:1.2em;transform-origin:center}[data-is-end]:is(:is(.endPage____hash_base64_5_ .endPageBody____hash_base64_5_) button){font-size:3em;margin:2em}:is(.endPage____hash_base64_5_ .endPageBody____hash_base64_5_) .tip____hash_base64_5_{margin:auto;position:absolute}.endPage____hash_base64_5_[data-drag] .endPageBody____hash_base64_5_{transition:transform 0s}.root____hash_base64_5_[data-mobile] .endPage____hash_base64_5_>button{width:1em}.comments____hash_base64_5_{align-items:flex-end;display:flex;flex-direction:column;max-height:80%;opacity:.3;overflow:auto;padding-right:.5em;position:absolute;right:1em;width:20em}.comments____hash_base64_5_>p{background-color:#333b;border-radius:.5em;margin:.5em .1em;padding:.2em .5em}.comments____hash_base64_5_:hover{opacity:1}.root____hash_base64_5_[data-mobile] .comments____hash_base64_5_{bottom:0;max-height:15em;opacity:.8}@keyframes jello____hash_base64_5_{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.7812deg) skewY(-.7812deg)}77.7%{transform:skewX(.3906deg) skewY(.3906deg)}88.8%{transform:skewX(-.1953deg) skewY(-.1953deg)}}.toolbar____hash_base64_5_{align-items:center;display:flex;height:100%;justify-content:flex-start;position:fixed;top:0;z-index:9}.toolbarPanel____hash_base64_5_{display:flex;flex-direction:column;padding:.5em;position:relative;transform:translateX(-100%);transition:transform .2s}.toolbarPanel____hash_base64_5_>hr{border:none;height:1em;margin:0;visibility:hidden}:is(.toolbar____hash_base64_5_[data-show],.toolbar____hash_base64_5_:hover) .toolbarPanel____hash_base64_5_{transform:none}.toolbar____hash_base64_5_[data-close] .toolbarPanel____hash_base64_5_{transform:translateX(-100%);visibility:hidden}.toolbarBg____hash_base64_5_{background-color:var(--page-bg);border-bottom-right-radius:1em;border-top-right-radius:1em;filter:opacity(.8);height:100%;position:absolute;right:0;top:0;width:100%}.root____hash_base64_5_[data-mobile] .toolbar____hash_base64_5_{font-size:1.3em}.root____hash_base64_5_[data-mobile] .toolbar____hash_base64_5_:not([data-show]){pointer-events:none}.root____hash_base64_5_[data-mobile] .toolbarBg____hash_base64_5_{filter:opacity(.8)}.SettingPanelPopper____hash_base64_5_{height:0!important;padding:0!important;pointer-events:unset!important;transform:none!important}.SettingPanel____hash_base64_5_{background-color:var(--page-bg);border-radius:.3em;bottom:0;box-shadow:0 3px 1px -2px #0003,0 2px 2px 0 #00000024,0 1px 5px 0 #0000001f;color:var(--text);font-size:1.2em;height:fit-content;margin:auto;max-height:95%;max-width:calc(100% - 5em);overflow:auto;position:fixed;top:0;-webkit-user-select:text;user-select:text;z-index:1}.SettingPanel____hash_base64_5_ hr{color:#fff;margin:.5em 0}.SettingPanel____hash_base64_5_>hr{margin:0}.SettingBlock____hash_base64_5_{display:grid;grid-template-rows:max-content 1fr;transition:grid-template-rows .2s ease-out}.SettingBlock____hash_base64_5_ .SettingBlockBody____hash_base64_5_{overflow:hidden;padding:0 .5em 1em;z-index:0}:is(.SettingBlock____hash_base64_5_ .SettingBlockBody____hash_base64_5_)>div+:is(.SettingBlock____hash_base64_5_ .SettingBlockBody____hash_base64_5_)>div{margin-top:1em}:is(.SettingBlock____hash_base64_5_ .SettingBlockBody____hash_base64_5_) input,:is(.SettingBlock____hash_base64_5_ .SettingBlockBody____hash_base64_5_) textarea{margin-top:.3em;width:97%}.SettingBlock____hash_base64_5_[data-show=false]{grid-template-rows:max-content 0fr;padding-bottom:unset}.SettingBlock____hash_base64_5_[data-show=false] .SettingBlockBody____hash_base64_5_{padding:unset}.SettingBlockSubtitle____hash_base64_5_{background-color:var(--page-bg);color:var(--text-secondary);cursor:pointer;font-size:.7em;height:3em;line-height:3em;margin-bottom:.1em;position:sticky;text-align:center;top:0;z-index:1}.SettingBlockBody____hash_base64_5_ .SettingBlockSubtitle____hash_base64_5_{height:1em;line-height:1em;position:unset}.SettingsItem____hash_base64_5_{align-items:center;display:flex;justify-content:space-between}:is(.SettingsItem____hash_base64_5_,.SettingsShowItem____hash_base64_5_)+.SettingsItem____hash_base64_5_{margin-top:1em}.SettingsItem____hash_base64_5_ button[disabled]{cursor:not-allowed;opacity:.5}.SettingsItemName____hash_base64_5_{font-size:.9em;max-width:calc(100% - 4em);overflow-wrap:anywhere;text-align:start;white-space:pre-wrap}.SettingsItemSwitch____hash_base64_5_{align-items:center;background-color:var(--switch-bg);border:0;border-radius:1em;cursor:pointer;display:inline-flex;height:.8em;margin:.3em;padding:0;width:2.3em}.SettingsItemSwitchRound____hash_base64_5_{background:var(--switch);border-radius:100%;box-shadow:0 2px 1px -1px #0003,0 1px 1px 0 #00000024,0 1px 3px 0 #0000001f;height:1.15em;transform:translateX(-10%);transition:transform .1s;width:1.15em}.SettingsItemSwitch____hash_base64_5_[data-checked=true]{background:var(--secondary-bg)}.SettingsItemSwitch____hash_base64_5_[data-checked=true] .SettingsItemSwitchRound____hash_base64_5_{background:var(--secondary);transform:translateX(110%)}.SettingsItemIconButton____hash_base64_5_{background-color:initial;border:none;color:var(--text);cursor:pointer;font-size:1.7em;height:1em;margin:0 .2em 0 0;padding:0}.SettingsItemSelect____hash_base64_5_{background-color:var(--hover-bg-color);border:none;border-radius:5px;cursor:pointer;font-size:.9em;margin:0;max-width:6.5em;outline:none;padding:.3em}.closeCover____hash_base64_5_{height:100%;left:0;position:fixed;top:0;width:100%}.SettingsShowItem____hash_base64_5_{display:grid;transition:grid-template-rows .2s ease-out}.SettingsShowItem____hash_base64_5_>.SettingsShowItemBody____hash_base64_5_{display:flex;flex-direction:column;overflow:hidden}:is(.SettingsShowItem____hash_base64_5_>.SettingsShowItemBody____hash_base64_5_)>.SettingsItem____hash_base64_5_{margin-top:1em}:is(.SettingsShowItem____hash_base64_5_>.SettingsShowItemBody____hash_base64_5_)>:is(textarea,input){line-height:1.2;margin:.4em .2em 0}[data-only-number]{padding:0 .2em}[data-only-number]+span{margin-left:-.1em}.hotkeys____hash_base64_5_{align-items:center;border-bottom:1px solid var(--secondary-bg);color:var(--text);display:flex;flex-grow:1;flex-wrap:wrap;font-size:.9em;padding:2em .2em .2em;position:relative;z-index:1}.hotkeys____hash_base64_5_+.hotkeys____hash_base64_5_{margin-top:.5em}.hotkeys____hash_base64_5_:last-child{border-bottom:none}.hotkeysItem____hash_base64_5_{align-items:center;border-radius:.3em;box-sizing:initial;cursor:pointer;display:flex;font-family:serif;height:1em;margin:.3em;outline:1px solid;outline-color:var(--secondary-bg);padding:.2em 1.2em}.hotkeysItem____hash_base64_5_>svg{background-color:var(--text);border-radius:1em;color:var(--page-bg);display:none;height:1em;margin-left:.4em;opacity:.5}:is(.hotkeysItem____hash_base64_5_>svg):hover{opacity:.9}.hotkeysItem____hash_base64_5_:hover{padding:.2em .5em}.hotkeysItem____hash_base64_5_:hover>svg{display:unset}.hotkeysItem____hash_base64_5_:focus,.hotkeysItem____hash_base64_5_:focus-visible{outline:var(--text) solid 2px}.hotkeysHeader____hash_base64_5_{align-items:center;box-sizing:border-box;display:flex;left:0;padding:0 .5em;position:absolute;top:0;width:100%}.hotkeysHeader____hash_base64_5_>p{background-color:var(--page-bg);line-height:1em;overflow-wrap:anywhere;text-align:start;white-space:pre-wrap}.hotkeysHeader____hash_base64_5_>div[title]{background-color:var(--page-bg);cursor:pointer;display:flex;transform:scale(0);transition:transform .1s}:is(.hotkeysHeader____hash_base64_5_>div[title])>svg{width:1.6em}.hotkeys____hash_base64_5_:hover div[title]{transform:scale(1)}.scrollbar____hash_base64_5_{--arrow-y:clamp(0.45em,calc(var(--slider-midpoint)),calc(var(--scroll-length) - 0.45em));border-left:max(6vw,1em) solid #0000;display:flex;flex-direction:column;height:98%;position:absolute;right:3px;top:1%;touch-action:none;-webkit-user-select:none;user-select:none;width:5px;z-index:9}.scrollbar____hash_base64_5_>div{align-items:center;display:flex;flex-direction:column;flex-grow:1;justify-content:center;pointer-events:none}.scrollbarPage____hash_base64_5_{background-color:var(--secondary);flex-grow:1;height:100%;transform:scaleY(1);transform-origin:bottom;transition:transform 1s;width:100%}.scrollbarPage____hash_base64_5_[data-type=loaded]{transform:scaleY(0)}.scrollbarPage____hash_base64_5_[data-upscale]{background-color:#b39ddb;transform:scaleY(1)}.scrollbarPage____hash_base64_5_[data-upscale=loading]{background-color:#d1c4e9}.scrollbarPage____hash_base64_5_[data-translation-type]{background-color:initial;transform:scaleY(1);transform-origin:top}.scrollbarPage____hash_base64_5_[data-translation-type=wait]{background-color:#81c784}.scrollbarPage____hash_base64_5_[data-translation-type=show]{background-color:#4caf50}.scrollbarPage____hash_base64_5_[data-translation-type=error]{background-color:#f005}.scrollbarPage____hash_base64_5_[data-type=wait]{opacity:.5}.scrollbarPage____hash_base64_5_[data-null]{background-color:#fbc02d}.scrollbarPage____hash_base64_5_[data-type=error]{background-color:#f005}.scrollbarSlider____hash_base64_5_{background-color:#fff5;border-radius:1em;height:var(--slider-height);justify-content:center;opacity:1;position:absolute;transform:translateY(var(--slider-top));transition:transform .15s,opacity .15s;width:100%;z-index:1}.scrollbarPoper____hash_base64_5_{--poper-top:clamp(0%,calc(var(--slider-midpoint) - 50%),calc(var(--scroll-length) - 100%));background-color:#303030;border-radius:.3em;color:#fff;font-size:.8em;line-height:1.5em;min-height:1.5em;min-width:1em;padding:.2em .5em;position:absolute;right:2em;text-align:center;transform:translateY(var(--poper-top));white-space:pre;width:fit-content}.scrollbar____hash_base64_5_:before{background-color:initial;border:.4em solid #0000;border-left:.5em solid #303030;content:\\"\\";position:absolute;right:2em;transform:translate(140%,calc(var(--arrow-y) - 50%))}.scrollbarPoper____hash_base64_5_,.scrollbar____hash_base64_5_:before{opacity:0;transition:opacity .15s,transform .15s}:is(.scrollbar____hash_base64_5_:hover,.scrollbar____hash_base64_5_[data-force-show]) .scrollbarPoper____hash_base64_5_,:is(.scrollbar____hash_base64_5_:hover,.scrollbar____hash_base64_5_[data-force-show]) .scrollbarSlider____hash_base64_5_,:is(.scrollbar____hash_base64_5_:hover,.scrollbar____hash_base64_5_[data-force-show]):before{opacity:1}.scrollbar____hash_base64_5_[data-drag] .scrollbarPoper____hash_base64_5_,.scrollbar____hash_base64_5_[data-drag] .scrollbarSlider____hash_base64_5_,.scrollbar____hash_base64_5_[data-drag]:before{transition:opacity .15s}.scrollbar____hash_base64_5_[data-auto-hidden]:not([data-force-show]) .scrollbarSlider____hash_base64_5_{opacity:0}.scrollbar____hash_base64_5_[data-auto-hidden]:not([data-force-show]):hover .scrollbarSlider____hash_base64_5_{opacity:1}.scrollbar____hash_base64_5_[data-position=hidden]{display:none}.scrollbar____hash_base64_5_[data-position=top]{border-bottom:max(6vh,1em) solid #0000;top:1px}.scrollbar____hash_base64_5_[data-position=top]:before{border-bottom:.5em solid #303030;right:0;top:1.2em;transform:translate(var(--arrow-x),-120%)}.scrollbar____hash_base64_5_[data-position=top] .scrollbarPoper____hash_base64_5_{top:1.2em}.scrollbar____hash_base64_5_[data-position=bottom]{border-top:max(6vh,1em) solid #0000;bottom:1px;top:unset}.scrollbar____hash_base64_5_[data-position=bottom]:before{border-top:.5em solid #303030;bottom:1.2em;right:0;transform:translate(var(--arrow-x),120%)}.scrollbar____hash_base64_5_[data-position=bottom] .scrollbarPoper____hash_base64_5_{bottom:1.2em}.scrollbar____hash_base64_5_[data-position=bottom],.scrollbar____hash_base64_5_[data-position=top]{--arrow-x:calc(var(--arrow-y)*-1 + 50%);border-left:none;flex-direction:row-reverse;height:5px;right:1%;width:98%}:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]):before{border-left:.4em solid #0000}:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]) .scrollbarSlider____hash_base64_5_{height:100%;transform:translateX(calc(var(--slider-top)*-1));width:var(--slider-height)}:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]) .scrollbarPoper____hash_base64_5_{padding:.1em .3em;right:unset;transform:translateX(calc(var(--poper-top)*-1))}[data-dir=ltr]:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]){--arrow-x:calc(var(--arrow-y) - 50%);flex-direction:row}[data-dir=ltr]:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]):before{left:0;right:unset}[data-dir=ltr]:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]) .scrollbarSlider____hash_base64_5_{transform:translateX(var(--top))}[data-dir=ltr]:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]) .scrollbarPoper____hash_base64_5_{transform:translateX(var(--poper-top))}:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]) .scrollbarPage____hash_base64_5_{transform:scaleX(1)}[data-type=loaded]:is(:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]) .scrollbarPage____hash_base64_5_){transform:scaleX(0)}[data-translation-type]:is(:is(.scrollbar____hash_base64_5_[data-position=top],.scrollbar____hash_base64_5_[data-position=bottom]) .scrollbarPage____hash_base64_5_){transform:scaleX(1)}.scrollbar____hash_base64_5_[data-is-abreast-mode] .scrollbarPoper____hash_base64_5_{line-height:1.5em;text-orientation:upright;writing-mode:vertical-rl}.scrollbar____hash_base64_5_[data-is-abreast-mode][data-dir=ltr] .scrollbarPoper____hash_base64_5_{writing-mode:vertical-lr}.root____hash_base64_5_[data-scroll-mode] .scrollbar____hash_base64_5_:before,.root____hash_base64_5_[data-scroll-mode] :is(.scrollbarSlider____hash_base64_5_,.scrollbarPoper____hash_base64_5_){transition:opacity .15s}:is(.root____hash_base64_5_[data-mobile] .scrollbar____hash_base64_5_:hover) .scrollbarPoper____hash_base64_5_,:is(.root____hash_base64_5_[data-mobile] .scrollbar____hash_base64_5_:hover):before{opacity:0}.touchAreaRoot____hash_base64_5_{color:#fff;display:grid;font-size:3em;grid-template-columns:1fr min(30%,10em) 1fr;grid-template-rows:1fr min(20%,10em) 1fr;height:100%;letter-spacing:.5em;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .4s;-webkit-user-select:none;user-select:none;width:100%}.touchAreaRoot____hash_base64_5_[data-show]{opacity:1}.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_{align-items:center;display:flex;justify-content:center;text-align:center}[data-area=PREV]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_),[data-area=prev]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_){background-color:#95e1d3e6}[data-area=MENU]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_),[data-area=menu]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_){background-color:#fce38ae6}[data-area=NEXT]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_),[data-area=next]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_){background-color:#f38181e6}[data-area=PREV]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_):after{content:var(--i18n-touch-area-prev)}[data-area=MENU]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_):after{content:var(--i18n-touch-area-menu)}[data-area=NEXT]:is(.touchAreaRoot____hash_base64_5_ .touchArea____hash_base64_5_):after{content:var(--i18n-touch-area-next)}.touchAreaRoot____hash_base64_5_[data-vert=true]{flex-direction:column!important}.touchAreaRoot____hash_base64_5_:not([data-turn-page]) .touchArea____hash_base64_5_[data-area=NEXT],.touchAreaRoot____hash_base64_5_:not([data-turn-page]) .touchArea____hash_base64_5_[data-area=PREV],.touchAreaRoot____hash_base64_5_:not([data-turn-page]) .touchArea____hash_base64_5_[data-area=next],.touchAreaRoot____hash_base64_5_:not([data-turn-page]) .touchArea____hash_base64_5_[data-area=prev]{visibility:hidden}.touchAreaRoot____hash_base64_5_[data-area=edge]{grid-template-columns:1fr min(30%,10em) 1fr}.root____hash_base64_5_[data-mobile] .touchAreaRoot____hash_base64_5_{flex-direction:column!important;letter-spacing:0}.root____hash_base64_5_[data-mobile] [data-area]:after{font-size:.8em}.root____hash_base64_5_{background-color:var(--bg);font-size:1em;height:100%;outline:0;overflow:hidden;position:relative;width:100%}.root____hash_base64_5_ a{color:var(--text-secondary)}.root____hash_base64_5_[data-mobile]{font-size:.8em}.hidden____hash_base64_5_{display:none!important}.invisible____hash_base64_5_{visibility:hidden!important}.beautifyScrollbar____hash_base64_5_{scrollbar-color:var(--scrollbar-slider) #0000;scrollbar-width:thin}.beautifyScrollbar____hash_base64_5_::-webkit-scrollbar{height:10px;width:5px}.beautifyScrollbar____hash_base64_5_::-webkit-scrollbar-track{background:#0000}.beautifyScrollbar____hash_base64_5_::-webkit-scrollbar-thumb{background:var(--scrollbar-slider)}img,p{margin:0}:where(div,div:focus,div:focus-within,div:focus-visible,button){border:none;outline:none}blockquote{border-left:.25em solid var(--text-secondary,#607d8b);color:var(--text-secondary);font-size:.9em;font-style:italic;line-height:1.2em;margin:.5em 0 0;overflow-wrap:anywhere;padding:0 0 0 1em;text-align:start;white-space:pre-wrap}svg{width:1em}";
var modules_c21c94f2$1 = {"img":"img____hash_base64_5_","mangaFlow":"mangaFlow____hash_base64_5_","mangaBox":"mangaBox____hash_base64_5_","root":"root____hash_base64_5_","gridModeTip":"gridModeTip____hash_base64_5_","endPage":"endPage____hash_base64_5_","endPageBody":"endPageBody____hash_base64_5_","tip":"tip____hash_base64_5_","comments":"comments____hash_base64_5_","toolbar":"toolbar____hash_base64_5_","toolbarPanel":"toolbarPanel____hash_base64_5_","toolbarBg":"toolbarBg____hash_base64_5_","SettingPanelPopper":"SettingPanelPopper____hash_base64_5_","SettingPanel":"SettingPanel____hash_base64_5_","SettingBlock":"SettingBlock____hash_base64_5_","SettingBlockBody":"SettingBlockBody____hash_base64_5_","SettingBlockSubtitle":"SettingBlockSubtitle____hash_base64_5_","SettingsItem":"SettingsItem____hash_base64_5_","SettingsShowItem":"SettingsShowItem____hash_base64_5_","SettingsItemName":"SettingsItemName____hash_base64_5_","SettingsItemSwitch":"SettingsItemSwitch____hash_base64_5_","SettingsItemSwitchRound":"SettingsItemSwitchRound____hash_base64_5_","SettingsItemIconButton":"SettingsItemIconButton____hash_base64_5_","SettingsItemSelect":"SettingsItemSelect____hash_base64_5_","closeCover":"closeCover____hash_base64_5_","SettingsShowItemBody":"SettingsShowItemBody____hash_base64_5_","hotkeys":"hotkeys____hash_base64_5_","hotkeysItem":"hotkeysItem____hash_base64_5_","hotkeysHeader":"hotkeysHeader____hash_base64_5_","scrollbar":"scrollbar____hash_base64_5_","scrollbarPage":"scrollbarPage____hash_base64_5_","scrollbarSlider":"scrollbarSlider____hash_base64_5_","scrollbarPoper":"scrollbarPoper____hash_base64_5_","touchAreaRoot":"touchAreaRoot____hash_base64_5_","touchArea":"touchArea____hash_base64_5_","hidden":"hidden____hash_base64_5_","invisible":"invisible____hash_base64_5_","beautifyScrollbar":"beautifyScrollbar____hash_base64_5_"};

let clickTimeout = null;
const useDoubleClick = (click, doubleClick, timeout = 200) => event => {
  // \u5982\u679C\u70B9\u51FB\u89E6\u53D1\u65F6\u8FD8\u6709\u4E0A\u6B21\u8BA1\u65F6\u5668\u7684\u8BB0\u5F55\uFF0C\u8BF4\u660E\u8FD9\u6B21\u662F\u53CC\u51FB
  if (clickTimeout) {
    clearTimeout(clickTimeout);
    clickTimeout = null;
    doubleClick?.(event);
    return;
  }

  // \u5355\u51FB\u4E8B\u4EF6\u5EF6\u8FDF\u89E6\u53D1
  clickTimeout = window.setTimeout(() => {
    click(event);
    clickTimeout = null;
  }, timeout);
};

/** \u5C06\u9875\u9762\u79FB\u56DE\u539F\u4F4D */
const resetPage = (state, animation = false) => {
  updateShowRange(state);
  state.page.offset.x.pct = 0;
  state.page.offset.y.pct = 0;
  if (state.option.scrollMode.enabled) {
    state.page.anima = '';
    return;
  }
  let i = -1;
  if (helper.inRange(state.renderRange[0], state.activePageIndex, state.renderRange[1])) i = state.activePageIndex - state.renderRange[0];
  if (store.page.vertical) state.page.offset.y.pct = i === -1 ? 0 : -i;else state.page.offset.x.pct = i === -1 ? 0 : i;
  state.page.anima = animation ? 'page' : '';
};

/** \u83B7\u53D6\u6307\u5B9A\u56FE\u7247\u7684\u63D0\u793A\u6587\u672C */
const getImgTip = i => {
  if (i === -1) return helper.t('other.fill_page');
  const img = getImg(i);

  // \u5982\u679C\u56FE\u7247\u672A\u52A0\u8F7D\u5B8C\u6BD5\u5219\u5728\u5176 index \u540E\u589E\u52A0\u663E\u793A\u5F53\u524D\u52A0\u8F7D\u72B6\u6001
  if (img.loadType !== 'loaded') return \`\${i + 1} (\${helper.t(\`img_status.\${img.loadType}\`)})\`;
  if (img.translationType && img.translationType !== 'hide' && img.translationMessage) return \`\${i + 1}\uFF1A\${img.translationMessage}\`;
  if (isUpscale() && img.upscaleUrl !== undefined) return \`\${i + 1} (\${img.upscaleUrl ? helper.t('upscale.upscaled') : helper.t('upscale.upscaling')})\`;
  return \`\${i + 1}\`;
};

/** \u83B7\u53D6\u6307\u5B9A\u9875\u9762\u7684\u63D0\u793A\u6587\u672C */
const getPageTip = pageIndex => {
  const page = store.pageList[pageIndex];
  if (!page) return 'null';
  const pageIndexText = page.map(index => getImgTip(index));
  if (pageIndexText.length === 1) return pageIndexText[0];
  if (store.option.dir === 'rtl') pageIndexText.reverse();
  return pageIndexText.join(' | ');
};
helper.createEffectOn(() => store.activePageIndex, () => store.show.endPage && setState('show', 'endPage', undefined), {
  defer: true
});
helper.createEffectOn(activePage, helper.throttle(() => store.isDragMode || setState(resetPage)));

// \u5728\u5173\u95ED\u5DE5\u5177\u680F\u7684\u540C\u65F6\u5173\u6389\u6EDA\u52A8\u6761\u7684\u5F3A\u5236\u663E\u793A
helper.createEffectOn(() => store.show.toolbar, () => store.show.scrollbar && !store.show.toolbar && setState('show', 'scrollbar', false), {
  defer: true
});

// \u5728\u5207\u6362\u7F51\u683C\u6A21\u5F0F\u540E\u5173\u6389 \u6EDA\u52A8\u6761\u548C\u5DE5\u5177\u680F \u7684\u5F3A\u5236\u663E\u793A
helper.createEffectOn(() => store.gridMode, () => setState(resetUI), {
  defer: true
});

let cache = undefined;
const initCache = async () => {
  cache ||= await helper.useCache({
    progress: 'id'
  }, 'ReadProgress');
};
let lastIndex = -1;
/** \u4FDD\u5B58\u9605\u8BFB\u8FDB\u5EA6 */
const saveReadProgress = helper.throttle(async () => {
  await initCache();
  const index = activeImgIndex();
  if (index === lastIndex) return;
  lastIndex = index;
  if (
  // \u53EA\u4FDD\u5B58 50 \u9875\u4EE5\u4E0A\u6F2B\u753B\u7684\u8FDB\u5EA6
  store.imgList.length < 50 ||
  // \u7FFB\u5230\u6700\u540E\u51E0\u9875\u65F6\u4E0D\u4FDD\u5B58
  index >= store.imgList.length - 5) return await cache.del('progress', location.pathname);
  const imgSize = {};
  for (const [i, img] of imgList().entries()) if (img.width && img.height) imgSize[i] = [img.width, img.height];
  await cache.set('progress', {
    id: location.pathname,
    time: Date.now(),
    index,
    imgSize,
    fillEffect: store$1.unwrap(store.fillEffect)
  });
}, 1000);

/** \u6062\u590D\u9605\u8BFB\u8FDB\u5EA6 */
const resumeReadProgress = async state => {
  await initCache();
  const progress = await cache.get('progress', location.pathname);
  if (!progress) return;

  // \u76EE\u524D\u5377\u8F74\u6A21\u5F0F\u4E0B\u65E0\u6CD5\u907F\u514D\u56E0\u56FE\u7247\u52A0\u8F7D\u5BFC\u81F4\u7684\u6296\u52A8\uFF0C
  // \u4E3A\u4E86\u907F\u514D\u5728\u6062\u590D\u9605\u8BFB\u8FDB\u5EA6\u65F6\u51FA\u73B0\u95EE\u9898\uFF0C\u53EA\u80FD\u5C06\u56FE\u7247\u663E\u793A\u76F8\u5173\u7684\u6570\u636E\u4E5F\u5B58\u7740\u7528\u4E8E\u6062\u590D
  let i = state.imgList.length;
  while (i--) {
    const imgSize = progress.imgSize[i];
    if (imgSize) updateImgSize(state.imgList[i], ...imgSize);
  }
  state.fillEffect = progress.fillEffect;
  updatePageData(state);
  if (state.option.scrollMode.enabled) setTimeout(scrollViewImg, 500, progress.index);else jumpToImg(progress.index);

  // \u6E05\u9664\u8FC7\u65F6\u7684\u8FDB\u5EA6
  const nowTime = Date.now();
  cache.each('progress', async (data, cursor) => {
    if (nowTime - data.time < 1000 * 60 * 60 * 24 * 29) return;
    await helper.promisifyRequest(cursor.delete());
  });
};

const closeScrollLock = helper.debounce(() => setState('scrollLock', false), 100);

/** \u7FFB\u9875\u3002\u8FD4\u56DE\u662F\u5426\u6210\u529F\u6539\u53D8\u4E86\u5F53\u524D\u9875\u6570 */
const turnPageFn = (state, dir) => {
  if (state.gridMode) return false;
  if (dir === 'prev') {
    switch (state.show.endPage) {
      case 'start':
        if (!state.scrollLock && store.option.scroolEnd === 'auto') state.prop.onPrev?.();
        return false;
      case 'end':
        state.show.endPage = undefined;
        return false;
      default:
        // \u5F39\u51FA\u5377\u9996\u7ED3\u675F\u9875
        if (isTop()) {
          if (!state.prop.onExit) return false;
          // \u6CA1\u6709 onPrev \u65F6\u4E0D\u5F39\u51FA
          if (!state.prop.onPrev || store.option.scroolEnd !== 'auto') return false;
          state.show.endPage = 'start';
          state.scrollLock = true;
          closeScrollLock();
          return false;
        }
        saveReadProgress();
        if (state.option.scrollMode.enabled) return false;
        state.activePageIndex -= 1;
        return true;
    }
  } else {
    switch (state.show.endPage) {
      case 'end':
        if (state.scrollLock) return false;
        if (state.prop.onNext && store.option.scroolEnd === 'auto') {
          state.prop.onNext();
          return false;
        }
        if (store.option.scroolEnd !== 'none') state.prop.onExit?.(true);
        return false;
      case 'start':
        state.show.endPage = undefined;
        return false;
      default:
        // \u5F39\u51FA\u5377\u5C3E\u7ED3\u675F\u9875
        if (isBottom()) {
          if (!state.prop.onExit) return false;
          state.show.endPage = 'end';
          state.scrollLock = true;
          closeScrollLock();
          return false;
        }
        saveReadProgress();
        if (state.option.scrollMode.enabled) return false;
        state.activePageIndex += 1;
        return true;
    }
  }
};
const turnPage = dir => setState(state => turnPageFn(state, dir));
const turnPageAnimation = dir => {
  setState(state => {
    // \u65E0\u6CD5\u7FFB\u9875\u5C31\u6062\u590D\u539F\u4F4D
    if (!turnPageFn(state, dir)) {
      state.page.offset.x.px = 0;
      state.page.offset.y.px = 0;
      resetPage(state, true);
      state.isDragMode = false;
      return;
    }
    state.isDragMode = true;
    resetPage(state);
    if (store.page.vertical) state.page.offset.y.pct += dir === 'next' ? 1 : -1;else state.page.offset.x.pct += dir === 'next' ? -1 : 1;
    setTimeout(() => {
      setState(draftState => {
        resetPage(draftState, true);
        draftState.page.offset.x.px = 0;
        draftState.page.offset.y.px = 0;
        draftState.isDragMode = false;
      });
    }, 16);
  });
};

/** \u5224\u65AD\u7FFB\u9875\u65B9\u5411 */
const getTurnPageDir = (move, total, startTime) => {
  let dir;

  // \u5904\u7406\u65E0\u5173\u901F\u5EA6\u4E0D\u8003\u8651\u65F6\u95F4\u5355\u7EAF\u6839\u636E\u5F53\u524D\u6EDA\u52A8\u8DDD\u79BB\u6765\u5224\u65AD\u7684\u60C5\u51B5
  if (!startTime) {
    if (Math.abs(move) > total / 2) dir = move > 0 ? 'next' : 'prev';
    return dir;
  }

  // \u6ED1\u52A8\u8DDD\u79BB\u8D85\u8FC7\u603B\u957F\u5EA6\u4E09\u5206\u4E4B\u4E00\u5224\u5B9A\u7FFB\u9875
  if (Math.abs(move) > total / 3) dir = move > 0 ? 'next' : 'prev';
  if (dir) return dir;

  // \u6ED1\u52A8\u901F\u5EA6\u8D85\u8FC7 0.4 \u5224\u5B9A\u7FFB\u9875
  const velocity = move / (performance.now() - startTime);
  if (velocity < -0.4) dir = 'prev';
  if (velocity > 0.4) dir = 'next';
  return dir;
};

const touches = new Map();
const bound = helper.createMemoMap({
  x: () => -store.rootSize.width * (store.option.zoom.ratio / 100 - 1),
  y: () => -store.rootSize.height * (store.option.zoom.ratio / 100 - 1)
});
const checkBound = state => {
  state.option.zoom.offset.x = helper.clamp(bound().x, state.option.zoom.offset.x, 0);
  state.option.zoom.offset.y = helper.clamp(bound().y, state.option.zoom.offset.y, 0);
};
const zoom = (val, focal, animation = false) => {
  const newScale = helper.clamp(100, val, 300);
  if (newScale === store.option.zoom.ratio) return;

  // \u6D88\u9664\u653E\u5927\u5BFC\u81F4\u7684\u504F\u79FB
  const {
    left,
    top
  } = refs.mangaBox.getBoundingClientRect();
  const x = (focal?.x ?? store.rootSize.width / 2) - left;
  const y = (focal?.y ?? store.rootSize.height / 2) - top;

  // \u5F53\u524D\u76F4\u63A5\u653E\u5927\u540E\u7684\u57FA\u51C6\u70B9\u5750\u6807
  const newX = x / (store.option.zoom.ratio / 100) * (newScale / 100);
  const newY = y / (store.option.zoom.ratio / 100) * (newScale / 100);

  // \u653E\u5927\u540E\u57FA\u51C6\u70B9\u7684\u504F\u79FB\u8DDD\u79BB
  const dx = newX - x;
  const dy = newY - y;
  setOption((draftOption, state) => {
    draftOption.zoom.ratio = newScale;
    draftOption.zoom.offset.x -= dx;
    draftOption.zoom.offset.y -= dy;
    checkBound(state);
    if (animation) state.page.anima = 'zoom';
  });
};

//
// \u60EF\u6027\u6ED1\u52A8
//

/** \u6469\u64E6\u7CFB\u6570 */
const FRICTION_COEFF$1 = 0.91;
const mouse = {
  x: 0,
  y: 0
};
const last = {
  x: 0,
  y: 0
};
const velocity = {
  x: 0,
  y: 0
};
let animationId$2 = null;
const cancelAnimation = () => {
  if (!animationId$2) return;
  cancelAnimationFrame(animationId$2);
  animationId$2 = null;
};
let lastTime$1 = 0;

/** \u9010\u5E27\u8BA1\u7B97\u60EF\u6027\u6ED1\u52A8 */
const handleSlideAnima = timestamp => {
  // \u5F53\u901F\u7387\u8DB3\u591F\u5C0F\u65F6\u505C\u6B62\u8BA1\u7B97\u52A8\u753B
  if (helper.approx(velocity.x, 0, 1) && helper.approx(velocity.y, 0, 1)) {
    animationId$2 = null;
    return;
  }

  // \u5728\u62D6\u62FD\u540E\u6A21\u62DF\u60EF\u6027\u6ED1\u52A8
  setOption((draftOption, state) => {
    draftOption.zoom.offset.x += velocity.x;
    draftOption.zoom.offset.y += velocity.y;
    checkBound(state);

    // \u786E\u4FDD\u6BCF16\u6BEB\u79D2\u624D\u51CF\u5C11\u4E00\u6B21\u901F\u7387\uFF0C\u9632\u6B62\u5728\u9AD8\u5237\u65B0\u7387\u663E\u793A\u5668\u4E0A\u8870\u51CF\u8FC7\u5FEB
    if (timestamp - lastTime$1 > 16) {
      velocity.x *= FRICTION_COEFF$1;
      velocity.y *= FRICTION_COEFF$1;
      lastTime$1 = timestamp;
    }
  });
  animationId$2 = requestAnimationFrame(handleSlideAnima);
};

/** \u9010\u5E27\u6839\u636E\u9F20\u6807\u5750\u6807\u79FB\u52A8\u5143\u7D20\uFF0C\u5E76\u8BA1\u7B97\u901F\u7387 */
const handleDragAnima$1 = () => {
  // \u5F53\u505C\u7740\u4E0D\u52A8\u65F6\u9000\u51FA\u5FAA\u73AF
  if (mouse.x === store.option.zoom.offset.x && mouse.y === store.option.zoom.offset.y) {
    animationId$2 = null;
    return;
  }
  setOption((draftOption, state) => {
    last.x = draftOption.zoom.offset.x;
    last.y = draftOption.zoom.offset.y;
    draftOption.zoom.offset.x = mouse.x;
    draftOption.zoom.offset.y = mouse.y;
    checkBound(state);
    velocity.x = draftOption.zoom.offset.x - last.x;
    velocity.y = draftOption.zoom.offset.y - last.y;
  });
  animationId$2 = requestAnimationFrame(handleDragAnima$1);
};

/** \u4E00\u6BB5\u65F6\u95F4\u6CA1\u6709\u79FB\u52A8\u540E\u5E94\u8BE5\u5C06\u901F\u7387\u5F52\u96F6 */
const resetVelocity = helper.debounce(() => {
  velocity.x = 0;
  velocity.y = 0;
}, 200);

/** \u662F\u5426\u6B63\u5728\u53CC\u6307\u634F\u5408\u7F29\u653E\u4E2D */
let pinchZoom = false;

/** \u5904\u7406\u653E\u5927\u540E\u7684\u62D6\u62FD\u79FB\u52A8 */
const handleZoomDrag = ({
  type,
  xy: [x, y],
  last: [lx, ly]
}) => {
  if (store.option.zoom.ratio === 100) return;
  switch (type) {
    case 'down':
      {
        mouse.x = store.option.zoom.offset.x;
        mouse.y = store.option.zoom.offset.y;
        if (animationId$2) cancelAnimation();
        break;
      }
    case 'move':
      {
        if (animationId$2) cancelAnimation();
        mouse.x += x - lx;
        mouse.y += y - ly;
        animationId$2 ??= requestAnimationFrame(handleDragAnima$1);
        resetVelocity();
        break;
      }
    case 'up':
      {
        resetVelocity.clear();

        // \u5F53\u53CC\u6307\u634F\u5408\u7ED3\u675F\uFF0C\u4E00\u4E2A\u624B\u6307\u62AC\u8D77\u65F6\uFF0C\u5C06\u5269\u4F59\u7684\u6307\u9488\u5F53\u4F5C\u521A\u70B9\u51FB\u6765\u5904\u7406
        if (pinchZoom) {
          pinchZoom = false;
          mouse.x = store.option.zoom.offset.x;
          mouse.y = store.option.zoom.offset.y;
          return;
        }
        if (animationId$2) cancelAnimationFrame(animationId$2);
        animationId$2 = requestAnimationFrame(handleSlideAnima);
      }
  }
};

//
// \u53CC\u6307\u634F\u5408\u7F29\u653E
//

/** \u521D\u59CB\u53CC\u6307\u8DDD\u79BB */
let initDistance = 0;
/** \u521D\u59CB\u7F29\u653E\u6BD4\u4F8B */
let initScale = 100;

/** \u83B7\u53D6\u4E24\u4E2A\u6307\u9488\u4E4B\u95F4\u7684\u8DDD\u79BB */
const getDistance = (a, b) => Math.hypot(b.xy[0] - a.xy[0], b.xy[1] - a.xy[1]);

/** \u9010\u5E27\u8BA1\u7B97\u5F53\u524D\u5C4F\u5E55\u4E0A\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u5E76\u6362\u7B97\u6210\u7F29\u653E\u6BD4\u4F8B */
const handlePinchZoomAnima = () => {
  if (touches.size < 2) {
    animationId$2 = null;
    return;
  }
  const [a, b] = [...touches.values()];
  const distance = getDistance(a, b);
  zoom(distance / initDistance * initScale, {
    x: (a.xy[0] + b.xy[0]) / 2,
    y: (a.xy[1] + b.xy[1]) / 2
  });
  animationId$2 = requestAnimationFrame(handlePinchZoomAnima);
};

/** \u5904\u7406\u53CC\u6307\u634F\u5408\u7F29\u653E */
const handlePinchZoom = ({
  type
}) => {
  if (touches.size < 2) return;
  switch (type) {
    case 'down':
      {
        pinchZoom = true;
        const [a, b] = [...touches.values()];
        initDistance = getDistance(a, b);
        initScale = store.option.zoom.ratio;
        break;
      }
    case 'up':
      {
        const [a, b] = [...touches.values()];
        initDistance = getDistance(a, b);
        break;
      }
    case 'move':
      {
        animationId$2 ??= requestAnimationFrame(handlePinchZoomAnima);
        break;
      }
    case 'cancel':
      {
        const [a, b] = [...touches.values()];
        initDistance = getDistance(a, b);
        break;
      }
  }
};

/** \u6839\u636E\u5750\u6807\u5224\u65AD\u70B9\u51FB\u7684\u5143\u7D20 */
const findClickEle = (eleList, {
  x,
  y
}) => [...eleList].find(e => {
  const rect = e.getBoundingClientRect();
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
});

/** \u89E6\u53D1\u70B9\u51FB\u533A\u57DF\u64CD\u4F5C */
const handlePageClick = e => {
  const targetArea = findClickEle(refs.touchArea.children, e);
  if (!targetArea) return;
  const areaName = targetArea.dataset.area;
  if (!areaName) return;
  if (areaName === 'menu' || areaName === 'MENU') return setState(state => {
    state.show.scrollbar = !state.show.scrollbar;
    state.show.toolbar = !state.show.toolbar;
  });
  if (!store.option.clickPageTurn.enabled || store.option.zoom.ratio !== 100) return;
  setState(state => {
    resetUI(state);
    turnPageFn(state, areaName.toLowerCase());
  });
};

/** \u7F51\u683C\u6A21\u5F0F\u4E0B\u70B9\u51FB\u56FE\u7247\u8DF3\u5230\u5BF9\u5E94\u9875 */
const handleGridClick = e => {
  const target = findClickEle(refs.root.getElementsByClassName(modules_c21c94f2$1.img), e);
  if (target) jumpToImg(Number(/_(\\d+)_/.exec(target.id)?.[1]));
};

/** \u53CC\u51FB\u653E\u5927 */
const doubleClickZoom = e => !store.gridMode && zoom(store.option.zoom.ratio === 100 ? 350 : 100, e, true);
const handleClick = useDoubleClick(e => store.gridMode ? handleGridClick(e) : handlePageClick(e), doubleClickZoom);
let dx$1 = 0;
let dy$1 = 0;
let animationId$1 = null;
const handleDragAnima = () => {
  // \u5F53\u505C\u7740\u4E0D\u52A8\u65F6\u9000\u51FA\u5FAA\u73AF
  if (dx$1 === store.page.offset.x.px && dy$1 === store.page.offset.y.px) {
    animationId$1 = null;
    return;
  }
  setState(state => {
    if (state.page.vertical) state.page.offset.y.px = dy$1;else state.page.offset.x.px = dx$1;
  });
  animationId$1 = requestAnimationFrame(handleDragAnima);
};
const handleDragEnd = startTime => {
  dx$1 = 0;
  dy$1 = 0;
  if (animationId$1) {
    cancelAnimationFrame(animationId$1);
    animationId$1 = null;
  }

  // \u5C06\u62D6\u52A8\u7684\u9875\u9762\u79FB\u56DE\u6B63\u5E38\u4F4D\u7F6E
  const dir = store.page.vertical ? getTurnPageDir(-store.page.offset.y.px, store.rootSize.height, startTime) : getTurnPageDir(store.page.offset.x.px, store.rootSize.width, startTime);
  if (dir) return turnPageAnimation(dir);
  setState(state => {
    state.page.offset.x.px = 0;
    state.page.offset.y.px = 0;
    state.page.anima = 'page';
    state.isDragMode = false;
  });
};
handleDragEnd.debounce = helper.debounce(handleDragEnd, 200);
const handleMangaFlowDrag = ({
  type,
  xy: [x, y],
  initial: [ix, iy],
  startTime
}) => {
  switch (type) {
    case 'move':
      {
        dx$1 = store.option.dir === 'rtl' ? x - ix : ix - x;
        dy$1 = y - iy;
        if (store.isDragMode) {
          animationId$1 ||= requestAnimationFrame(handleDragAnima);
          return;
        }

        // \u5224\u65AD\u6ED1\u52A8\u65B9\u5411
        let slideDir;
        const dxAbs = Math.abs(dx$1);
        const dyAbs = Math.abs(dy$1);
        if (dxAbs > 5 && dyAbs < 5) slideDir = 'horizontal';
        if (dyAbs > 5 && dxAbs < 5) slideDir = 'vertical';
        if (!slideDir) return;
        setState(state => {
          // \u6839\u636E\u6ED1\u52A8\u65B9\u5411\u81EA\u52A8\u5207\u6362\u6392\u5217\u6A21\u5F0F
          state.page.vertical = slideDir === 'vertical';
          state.isDragMode = true;
          resetPage(state);
        });
        return;
      }
    case 'up':
      return handleDragEnd(startTime);
  }
};
let lastDeltaY$1 = 0;
let retardStartTime = 0;
let lastWheel = 0;
const handleTrackpadWheel = e => {
  let deltaY = Math.floor(-e.deltaY);
  let absDeltaY = Math.abs(deltaY);
  if (absDeltaY < 2) return;
  let time = 0;
  let now = 0;
  // \u4E3A\u4E86\u907F\u514D\u88AB\u89E6\u6478\u677F\u7684\u6EDA\u52A8\u60EF\u6027\u89E6\u53D1\uFF0C\u9650\u5B9A\u4E00\u4E0B\u6EDA\u52A8\u8DDD\u79BB
  if (absDeltaY > 50) {
    now = performance.now();
    time = now - lastWheel;
    lastWheel = now;
  }
  if (store.option.scrollMode.enabled) {
    if (time > 200 && (isTop() && e.deltaY < 0 || isBottom() && e.deltaY > 0)) turnPage(e.deltaY > 0 ? 'next' : 'prev');
    return;
  }

  // \u52A0\u901F\u5EA6\u5C0F\u4E8E\u6307\u5B9A\u503C\u540E\u9010\u6E10\u7F29\u5C0F\u6EDA\u52A8\u8DDD\u79BB\uFF0C\u5B9E\u73B0\u51CF\u901F\u6548\u679C
  if (Math.abs(absDeltaY - lastDeltaY$1) <= 6) {
    retardStartTime ||= Date.now();
    deltaY *= 1 - Math.min(1, (Date.now() - retardStartTime) / 10 * 0.002);
    absDeltaY = Math.abs(deltaY);
    if (absDeltaY < 2) return;
  } else retardStartTime = 0;
  lastDeltaY$1 = absDeltaY;
  dy$1 += deltaY;
  setState(state => {
    // \u6EDA\u52A8\u81F3\u6F2B\u753B\u5934\u5C3E\u5C3D\u5934\u65F6
    if (isTop() && dy$1 > 0 || isBottom() && dy$1 < 0) {
      if (time > 200) turnPageFn(state, dy$1 < 0 ? 'next' : 'prev');
      dy$1 = 0;
    }

    // \u6EDA\u52A8\u8FC7\u4E00\u9875\u65F6
    if (dy$1 <= -state.rootSize.height) {
      if (turnPageFn(state, 'next')) dy$1 += state.rootSize.height;
    } else if (dy$1 >= state.rootSize.height && turnPageFn(state, 'prev')) dy$1 -= state.rootSize.height;
    state.page.vertical = true;
    state.isDragMode = true;
    resetPage(state);
  });
  animationId$1 ||= requestAnimationFrame(handleDragAnima);
  handleDragEnd.debounce();
};

/** \u5207\u6362\u9875\u9762\u586B\u5145 */
const switchFillEffect = () => {
  setState(state => {
    // \u5982\u679C\u5F53\u524D\u9875\u4E0D\u662F\u53CC\u9875\u663E\u793A\u7684\u5C31\u8DF3\u8FC7\uFF0C\u907F\u514D\u5728\u663E\u793A\u8DE8\u9875\u56FE\u7684\u9875\u9762\u5207\u6362\u5374\u6CA1\u770B\u5230\u6548\u679C\u7684\u7591\u60D1
    if (state.pageList[state.activePageIndex].length !== 2) return;
    state.fillEffect[nowFillIndex()] = Number(!state.fillEffect[nowFillIndex()]);
    updatePageData(state);
  });
};

/** \u5207\u6362\u5377\u8F74\u6A21\u5F0F */
const switchScrollMode = () => {
  const index = activeImgIndex();
  zoom(100);
  setOption((draftOption, state) => {
    draftOption.scrollMode.enabled = !draftOption.scrollMode.enabled;
    state.page.offset.x.px = 0;
    state.page.offset.y.px = 0;
  });
  jumpToImg(index);
};

/** \u5207\u6362\u5355\u53CC\u9875\u6A21\u5F0F */
const switchOnePageMode = () => {
  const index = activeImgIndex();
  setOption((draftOption, state) => {
    if (draftOption.scrollMode.enabled) {
      if (draftOption.scrollMode.abreastMode) {
        draftOption.scrollMode.abreastMode = false;
        draftOption.scrollMode.doubleMode = true;
      } else draftOption.scrollMode.doubleMode = !draftOption.scrollMode.doubleMode;
    } else {
      const newPageNum = pageNum() === 1 ? 2 : 1;
      draftOption.pageNum = state.option.autoSwitchPageMode && newPageNum === autoPageNum() ? 0 : newPageNum;
    }
  });
  jumpToImg(index);
};

/** \u5207\u6362\u9605\u8BFB\u65B9\u5411 */
const switchDir = () => {
  setOption(draftOption => {
    draftOption.dir = draftOption.dir === 'rtl' ? 'ltr' : 'rtl';
  });
};

/** \u5207\u6362\u7F51\u683C\u6A21\u5F0F */
const switchGridMode = () => {
  zoom(100);
  setState(state => {
    state.gridMode = !state.gridMode;
    if (store.option.zoom.ratio !== 100) zoom(100);
    state.page.anima = '';
  });
  // \u5207\u6362\u5230\u7F51\u683C\u6A21\u5F0F\u540E\u81EA\u52A8\u5B9A\u4F4D\u5230\u5F53\u524D\u9875
  if (store.gridMode) requestAnimationFrame(() => {
    refs.mangaFlow.children[activeImgIndex()]?.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  });
};

/** \u5207\u6362\u5377\u8F74\u6A21\u5F0F\u4E0B\u56FE\u7247\u9002\u5E94\u5BBD\u5EA6 */
const switchFitToWidth = () => {
  const jump = saveScrollProgress();
  setOption(draftOption => {
    draftOption.scrollMode.fitToWidth = !draftOption.scrollMode.fitToWidth;
  });
  jump();
};

/** \u5207\u6362\u5168\u5C4F */
const switchFullscreen = () => {
  if (document.fullscreenElement) document.exitFullscreen();else refs.root.requestFullscreen();
};

/** \u5207\u6362\u81EA\u52A8\u6EDA\u52A8 */
const switchAutoScroll = () => setState('autoScroll', 'play', val => !val);

/** \u5207\u6362\u56FE\u7247\u8BC6\u522B\u76F8\u5173\u529F\u80FD */
const switchImgRecognition = (...path) => setOption((draftOption, state) => {
  const option = draftOption.imgRecognition;
  if (path.length === 0) path.push('enabled');
  for (const key of path) option[key] = !option[key];
  if (!option.enabled) return;
  for (const img of Object.values(state.imgMap)) {
    if (!img.blobUrl) img.loadType = 'wait';
    if (img.loadType !== 'loaded') continue;
    handleImgRecognition(img.src);
  }
  if (path.includes('enabled')) updateImgLoadType();
});

// \u7279\u610F\u4F7F\u7528 requestAnimationFrame \u548C .click() \u662F\u4E3A\u4E86\u80FD\u548C Vimium \u517C\u5BB9
// \uFF08\u867D\u7136\u56E0\u4E3A\u4F7F\u7528\u4E86 shadow dom \u7684\u7F18\u6545\u5B9E\u9645\u8FD8\u662F\u4E0D\u80FD\u517C\u5BB9\uFF0C\u4F46\u8BF4\u4E0D\u5B9A\u4E4B\u540E\u5C31\u6539\u4E86\u5462
const focus = () => requestAnimationFrame(() => {
  refs.mangaBox?.click();
  refs.mangaBox?.focus();
});
const handleMouseDown = e => {
  if (e.button !== 1 || store.option.scrollMode.enabled) return;
  e.stopPropagation();
  e.preventDefault();
  switchFillEffect();
};

/** \u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u9875\u9762\u6EDA\u52A8 */
const scrollModeScrollPage = x => {
  if (!store.show.endPage) {
    scrollTo(scrollTop() + x, true);
    setState('scrollLock', true);
  }
  closeScrollLock();
};

/** \u6839\u636E\u662F\u5426\u5F00\u542F\u4E86 \u5DE6\u53F3\u7FFB\u9875\u952E\u4EA4\u6362 \u6765\u5207\u6362\u7FFB\u9875\u65B9\u5411 */
const handleSwapPageTurnKey = nextPage => {
  const next = store.option.swapPageTurnKey ? !nextPage : nextPage;
  return next ? 'next' : 'prev';
};

/** \u5904\u7406\u5FEB\u6377\u952E\u957F\u6309\u7684\u60C5\u51B5 */
const handleHoldKey = new class {
  holdKeys = new Map();
  linsten(code, holdFn, upFn) {
    if (this.holdKeys.has(code)) return;
    holdFn();
    this.holdKeys.set(code, upFn);
  }
  onKeyUp = e => {
    const code = helper.getKeyboardCode(e);
    if (!this.holdKeys.has(code)) return;
    this.holdKeys.get(code)();
    this.holdKeys.delete(code);
  };
}();

/** \u5904\u7406\u957F\u6309\u6EDA\u52A8 */
const handleHoldScroll = (code, speed) => {
  handleHoldKey.linsten(code, () => constantScroll.start(speed), () => constantScroll.cancel());
};

/** \u5224\u65AD\u5F53\u524D\u662F\u5426\u5904\u5728\u5377\u8F74\u6A21\u5F0F\u7684\u5C3D\u5934\uFF0C\u662F\u7684\u8BDD\u8FDB\u884C\u7FFB\u9875\u5224\u65AD\u5E76\u8FD4\u56DE true */
const isScrollModeEnd = dir => {
  if (!isTop() && !isBottom()) return false;
  turnPage(dir);
  return true;
};
const handleKeyDown = e => {
  switch (e.target.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return;
  }
  if (e.target.className === modules_c21c94f2$1.hotkeysItem) return;
  const code = helper.getKeyboardCode(e);

  // esc \u5728\u89E6\u53D1\u914D\u7F6E\u64CD\u4F5C\u524D\uFF0C\u5148\u7528\u4E8E\u9000\u51FA\u4E00\u4E9B\u754C\u9762
  if (e.key === 'Escape') {
    if (store.gridMode) {
      e.stopPropagation();
      e.preventDefault();
      return setState('gridMode', false);
    }
    if (store.show.endPage) {
      e.stopPropagation();
      e.preventDefault();
      return setState('show', 'endPage', undefined);
    }
  }

  // \u5904\u7406\u6807\u6CE8\u4E86 data-only-number \u7684\u5143\u7D20
  if (e.target.dataset.onlyNumber !== undefined) {
    // \u62E6\u622A\u80FD\u8F93\u5165\u6570\u5B57\u5916\u7684\u6309\u952E
    if (/^(?:Shift \\+ )?[a-zA-Z]$/.test(code)) {
      e.stopPropagation();
      e.preventDefault();
    }
    return;
  }

  // \u5377\u8F74\u3001\u7F51\u683C\u6A21\u5F0F\u4E0B\u8DF3\u8FC7\u7528\u4E8E\u79FB\u52A8\u7684\u6309\u952E
  if ((isScrollMode() || store.gridMode) && !store.show.endPage) {
    switch (e.key) {
      case 'Home':
      case 'End':
      case 'ArrowRight':
      case 'ArrowLeft':
        e.stopPropagation();
        return;
      case 'ArrowUp':
      case 'PageUp':
        e.stopPropagation();
        return store.gridMode || turnPage('prev');
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.stopPropagation();
        return store.gridMode || turnPage('next');
    }
  }

  // \u62E6\u622A\u5DF2\u6CE8\u518C\u7684\u5FEB\u6377\u952E
  if (Reflect.has(hotkeysMap(), code)) {
    e.stopPropagation();
    e.preventDefault();
  } else return;
  const hotkey = hotkeysMap()[code];

  // \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5FEB\u6377\u952E
  if (isAbreastMode()) {
    switch (hotkey) {
      case 'scroll_up':
        if (isScrollModeEnd('prev')) return;
        return setAbreastScrollFill(abreastScrollFill() - 40);
      case 'scroll_down':
        if (isScrollModeEnd('next')) return;
        return setAbreastScrollFill(abreastScrollFill() + 40);
      case 'scroll_left':
        if (isScrollModeEnd(store.option.dir === 'rtl' ? 'prev' : 'next')) return;
        return scrollTo(scrollProgress() - (store.option.dir === 'rtl' ? 40 : -40));
      case 'scroll_right':
        if (isScrollModeEnd(store.option.dir === 'rtl' ? 'next' : 'prev')) return;
        return scrollTo(scrollProgress() + (store.option.dir === 'rtl' ? 40 : -40));
      case 'page_up':
        if (isScrollModeEnd('prev')) return;
        return scrollTo(scrollProgress() - store.rootSize.width * 0.8);
      case 'page_down':
        if (isScrollModeEnd('next')) return;
        return scrollTo(scrollProgress() + store.rootSize.width * 0.8);
      case 'jump_to_home':
        return scrollTo(0);
      case 'jump_to_end':
        return scrollTo(scrollLength());
    }
  }

  // \u666E\u901A\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u5FEB\u6377\u952E
  if (isScrollMode()) {
    switch (hotkey) {
      case 'page_up':
        return scrollModeScrollPage(-store.rootSize.height * 0.8);
      case 'page_down':
        return scrollModeScrollPage(store.rootSize.height * 0.8);
      case 'scroll_up':
        if (e.repeat) return handleHoldScroll(code, -1);
        return scrollModeScrollPage(-40);
      case 'scroll_down':
        if (e.repeat) return handleHoldScroll(code, 1);
        return scrollModeScrollPage(40);
    }
  }
  switch (hotkey) {
    case 'page_up':
    case 'scroll_up':
      return turnPage('prev');
    case 'page_down':
    case 'scroll_down':
      return turnPage('next');
    case 'scroll_left':
      return turnPage(handleSwapPageTurnKey(store.option.dir === 'rtl'));
    case 'scroll_right':
      return turnPage(handleSwapPageTurnKey(store.option.dir !== 'rtl'));
    case 'jump_to_home':
      return setState('activePageIndex', 0);
    case 'jump_to_end':
      return setState('activePageIndex', Math.max(0, store.pageList.length - 1));
    case 'switch_page_fill':
      return switchFillEffect();
    case 'switch_scroll_mode':
      return switchScrollMode();
    case 'switch_single_double_page_mode':
      return switchOnePageMode();
    case 'switch_dir':
      return switchDir();
    case 'switch_grid_mode':
      return switchGridMode();
    case 'translate_current_page':
      return translateCurrent();
    case 'translate_all':
      return translateAll();
    case 'translate_to_end':
      return translateToEnd();
    case 'auto_scroll':
      return switchAutoScroll();
    case 'fullscreen':
      return switchFullscreen();
    case 'switch_auto_enlarge':
      return setOption(draftOption => {
        draftOption.disableZoom = !draftOption.disableZoom;
      });
    case 'exit':
      return store.prop.onExit?.();

    // \u9605\u8BFB\u6A21\u5F0F\u4EE5\u5916\u7684\u5FEB\u6377\u952E\u8F6C\u53D1\u5230\u7F51\u9875\u4E0A\u53BB\u5904\u7406
    default:
      document.body.dispatchEvent(new KeyboardEvent('keydown', e));
      document.body.dispatchEvent(new KeyboardEvent('keyup', e));
  }
};

/** \u5224\u65AD\u4E24\u4E2A\u6570\u503C\u662F\u5426\u662F\u6574\u6570\u500D\u7684\u5173\u7CFB */
const isMultipleOf = (a, b) => {
  const decimal = \`\${a < b ? b / a : a / b}\`.split('.')?.[1];
  return !decimal || decimal.startsWith('0000') || decimal.startsWith('9999');
};
let lastDeltaY = -1;
let timeoutId = 0;
let lastPageNum = -1;
let wheelType;
let equalNum = 0;
let diffNum = 0;
const handleWheel = e => {
  if (store.gridMode) return;
  e.stopPropagation();
  if (e.ctrlKey || e.altKey) e.preventDefault();
  const isWheelDown = e.deltaY > 0;
  if (store.show.endPage) return turnPage(isWheelDown ? 'next' : 'prev');

  // \u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u56FE\u7247\u7F29\u653E
  if ((e.ctrlKey || e.altKey) && store.option.scrollMode.enabled && store.option.zoom.ratio === 100) {
    e.preventDefault();
    if (store.option.scrollMode.fitToWidth) return;
    return zoomScrollModeImg(isWheelDown ? -0.05 : 0.05);
  }
  if (e.ctrlKey || e.altKey) {
    e.preventDefault();
    return zoom(store.option.zoom.ratio + (isWheelDown ? -25 : 25), e);
  }
  const nowDeltaY = Math.abs(e.deltaY);

  // \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B
  if (isAbreastMode() && store.option.zoom.ratio === 100) {
    e.preventDefault();
    // \u5148\u89E6\u53D1\u7FFB\u9875\u5224\u65AD\u518D\u6EDA\u52A8\uFF0C\u9632\u6B62\u5728\u6EDA\u52A8\u5230\u5E95\u65F6\u7ACB\u523B\u89E6\u53D1\u7ED3\u675F\u9875
    turnPage(isWheelDown ? 'next' : 'prev');
    scrollTo(scrollTop() + e.deltaY);
  }

  // \u9632\u6B62\u6EDA\u52A8\u5230\u7F51\u9875
  if (!isScrollMode()) e.preventDefault();

  // \u901A\u8FC7\`\u4E24\u6B21\u6EDA\u52A8\u8DDD\u79BB\u662F\u5426\u6210\u500D\u6570\`\u548C\`\u6EDA\u52A8\u8DDD\u79BB\u662F\u5426\u8FC7\u5C0F\`\u6765\u5224\u65AD\u662F\u5426\u662F\u89E6\u6478\u677F
  if (wheelType !== 'trackpad' && (nowDeltaY < 2 || !Number.isInteger(lastDeltaY) && !Number.isInteger(nowDeltaY) && !isMultipleOf(lastDeltaY, nowDeltaY))) {
    wheelType = 'trackpad';
    if (timeoutId) clearTimeout(timeoutId);
    // \u5982\u679C\u662F\u89E6\u6478\u677F\u6EDA\u52A8\uFF0C\u4E14\u4E0A\u6B21\u6210\u529F\u89E6\u53D1\u4E86\u7FFB\u9875\uFF0C\u5C31\u91CD\u65B0\u7FFB\u9875\u56DE\u53BB
    if (lastPageNum !== -1) setState('activePageIndex', lastPageNum);
  }

  // \u4E3A\u4E86\u907F\u514D\u56E0\u4E34\u65F6\u5361\u987F\u800C\u8BEF\u5224\u4E3A\u89E6\u6478\u677F
  // \u5728\u8FDE\u7EED\u51E0\u6B21\u6EDA\u52A8\u91CF\u5747\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06 wheelType \u76F8\u5173\u53D8\u91CF\u91CD\u7F6E\u56DE\u521D\u59CB\u72B6\u6001
  if (diffNum < 10) {
    if (lastDeltaY === nowDeltaY && nowDeltaY > 5) equalNum += 1;else {
      diffNum += 1;
      equalNum = 0;
    }
    if (equalNum >= 3) {
      wheelType = undefined;
      lastPageNum = -1;
    }
  }
  lastDeltaY = nowDeltaY;
  switch (wheelType) {
    case undefined:
      {
        if (lastPageNum === -1) {
          // \u7B2C\u4E00\u6B21\u89E6\u53D1\u6EDA\u52A8\u6CA1\u6CD5\u5224\u65AD\u7C7B\u578B\uFF0C\u5C31\u5F53\u4F5C\u6EDA\u8F6E\u6765\u5904\u7406
          // \u4F46\u4E3A\u4E86\u907F\u514D\u89E6\u6478\u677F\u524D\u4E24\u6B21\u6EDA\u52A8\u4E8B\u4EF6\u95F4\u9694\u5927\u4E8E\u5E27\u751F\u6210\u65F6\u95F4\u5BFC\u81F4\u5F97\u91CD\u65B0\u7FFB\u9875\u56DE\u53BB\u7684\u95EA\u70C1\uFF0C\u52A0\u4E2A\u5EF6\u8FDF\u7B49\u5F85\u4E0B
          lastPageNum = store.activePageIndex;
          timeoutId = window.setTimeout(() => turnPage(isWheelDown ? 'next' : 'prev'), 16);
          return;
        }
        wheelType = 'mouse';
      }
    // falls through

    case 'mouse':
      return turnPage(isWheelDown ? 'next' : 'prev');
    case 'trackpad':
      return handleTrackpadWheel(e);
  }
};

/** \u6EDA\u52A8\u6761\u5143\u7D20\u7684\u957F\u5EA6 */
const scrollDomLength = helper.createRootMemo(() => Math.max(store.scrollbarSize.width, store.scrollbarSize.height));

/** \u6EDA\u52A8\u6761\u6ED1\u5757\u7684\u4E2D\u5FC3\u70B9\u9AD8\u5EA6 */
const sliderMidpoint = helper.createRootMemo(() => scrollDomLength() * (scrollPercentage() + sliderHeight() / 2));

/** \u6EDA\u52A8\u6761\u6ED1\u5757\u7684\u4F4D\u7F6E */
const sliderTop = helper.createRootMemo(() => \`\${scrollPercentage() * scrollDomLength()}px\`);

/** \u6EDA\u52A8\u6761\u4F4D\u7F6E */
const scrollPosition = helper.createRootMemo(() => {
  if (store.option.scrollbar.position === 'auto') {
    if (store.isMobile) return 'top';
    if (isAbreastMode()) return 'bottom';
    // \u5927\u90E8\u5206\u56FE\u7247\u90FD\u662F\u5BBD\u56FE\u65F6\uFF0C\u5C06\u6EDA\u52A8\u6761\u79FB\u81F3\u5E95\u90E8
    return store.defaultImgType === 'long' ? 'bottom' : 'right';
  }
  return store.option.scrollbar.position;
});

/** \u5224\u65AD\u70B9\u51FB\u4F4D\u7F6E\u5728\u6EDA\u52A8\u6761\u4E0A\u7684\u4F4D\u7F6E\u6BD4\u7387 */
const getClickTop = (x, y, e) => {
  switch (scrollPosition()) {
    case 'bottom':
    case 'top':
      return store.option.dir === 'rtl' ? 1 - x / e.offsetWidth : x / e.offsetWidth;
    default:
      return y / e.offsetHeight;
  }
};

/** \u8BA1\u7B97\u5728\u6EDA\u52A8\u6761\u4E0A\u7684\u62D6\u52A8\u8DDD\u79BB */
const getSliderDist = ([x, y], [ix, iy], e) => {
  switch (scrollPosition()) {
    case 'bottom':
    case 'top':
      return store.option.dir === 'rtl' ? (1 - (x - ix)) / e.offsetWidth : (x - ix) / e.offsetWidth;
    default:
      return (y - iy) / e.offsetHeight;
  }
};
const [isDrag, setIsDrag] = solidJs.createSignal(false);
const closeDrag = helper.debounce(() => setIsDrag(false), 200);
let lastType = 'up';

/** \u5F00\u59CB\u62D6\u62FD\u65F6\u7684 sliderTop \u503C */
let startTop = 0;
const handleScrollbarSlider = ({
  type,
  xy,
  initial
}, e) => {
  const [x, y] = xy;

  // \u68C0\u6D4B\u662F\u5426\u662F\u62D6\u52A8\u64CD\u4F5C
  if (type === 'move' && lastType === type) {
    setIsDrag(true);
    closeDrag();
  }
  lastType = type;

  // \u8DF3\u8FC7\u62D6\u62FD\u7ED3\u675F\u4E8B\u4EF6\uFF08\u5355\u51FB\u65F6\u4F1A\u540C\u65F6\u89E6\u53D1\u5F00\u59CB\u548C\u7ED3\u675F\uFF0C\u5C31\u7528\u5F00\u59CB\u4E8B\u4EF6\u6765\u5B8C\u6210\u5355\u51FB\u7684\u6548\u679C
  if (type === 'up') return saveReadProgress();
  if (!refs.mangaFlow) return;
  const scrollbarDom = e.target;

  /** \u70B9\u51FB\u4F4D\u7F6E\u5728\u6EDA\u52A8\u6761\u4E0A\u7684\u4F4D\u7F6E\u6BD4\u7387 */
  const clickTop = getClickTop(x, y, e.target);
  if (store.option.scrollMode.enabled) {
    if (type === 'move') {
      const top = helper.clamp(0, startTop + getSliderDist(xy, initial, scrollbarDom), 1) * scrollLength();
      scrollTo(top);
    } else {
      // \u786E\u4FDD\u6EDA\u52A8\u6761\u7684\u4E2D\u5FC3\u4F1A\u5728\u70B9\u51FB\u4F4D\u7F6E
      startTop = clickTop - sliderHeight() / 2;
      const top = startTop * scrollLength();
      scrollTo(top, true);
    }
  } else {
    let newPageIndex = Math.floor(clickTop * store.pageList.length);
    // \u5904\u7406\u8D85\u51FA\u8303\u56F4\u7684\u60C5\u51B5
    if (newPageIndex < 0) newPageIndex = 0;else if (newPageIndex >= store.pageList.length) newPageIndex = store.pageList.length - 1;
    if (newPageIndex !== store.activePageIndex) setState('activePageIndex', newPageIndex);
  }
};

/** \u6469\u64E6\u7CFB\u6570 */
const FRICTION_COEFF = 0.96;
let lastTop = 0;
let dy = 0;
let lastLeft = 0;
let dx = 0;
let animationId = null;
let lastTime = 0;

/** \u9010\u5E27\u8BA1\u7B97\u901F\u7387 */
const calcVelocity = () => {
  const nowTop = store.option.scrollMode.abreastMode ? abreastScrollFill() : scrollTop();
  dy = nowTop - lastTop;
  lastTop = nowTop;
  dx = store.page.offset.x.px - lastLeft;
  lastLeft = store.page.offset.x.px;
  animationId = requestAnimationFrame(calcVelocity);
};

/** \u9010\u5E27\u8BA1\u7B97\u60EF\u6027\u6ED1\u52A8 */
const handleSlide = timestamp => {
  // \u5F53\u901F\u7387\u8DB3\u591F\u5C0F\u65F6\u505C\u6B62\u8BA1\u7B97\u52A8\u753B
  if (Math.abs(dx) + Math.abs(dy) < 1) {
    animationId = null;
    return;
  }

  // \u786E\u4FDD\u6BCF16\u6BEB\u79D2\u624D\u51CF\u5C11\u4E00\u6B21\u901F\u7387\uFF0C\u9632\u6B62\u5728\u9AD8\u5237\u65B0\u7387\u663E\u793A\u5668\u4E0A\u8870\u51CF\u8FC7\u5FEB
  if (timestamp - lastTime > 16) {
    dy *= FRICTION_COEFF;
    dx *= FRICTION_COEFF;
    lastTime = timestamp;
  }
  if (store.option.scrollMode.abreastMode) {
    scrollTo(scrollTop() + dx);
    setAbreastScrollFill(abreastScrollFill() + dy);
  } else scrollTo(scrollTop() + dy);
  animationId = requestAnimationFrame(handleSlide);
};
let initTop = 0;
let initLeft = 0;
let initAbreastScrollFill = 0;
const handleScrollModeDrag = ({
  type,
  xy: [x, y],
  initial: [ix, iy]
}, e) => {
  if (!store.option.scrollMode.abreastMode && e.pointerType !== 'mouse') return;
  switch (type) {
    case 'down':
      {
        if (animationId) cancelAnimationFrame(animationId);
        initTop = refs.mangaBox.scrollTop;
        initLeft = store.page.offset.x.px * (store.option.dir === 'rtl' ? 1 : -1);
        initAbreastScrollFill = abreastScrollFill();
        requestAnimationFrame(calcVelocity);
        return;
      }
    case 'move':
      {
        if (store.option.scrollMode.abreastMode) {
          const _dx = x - ix;
          const _dy = y - iy;
          scrollTo((initLeft + _dx) * (store.option.dir === 'rtl' ? 1 : -1));
          setAbreastScrollFill(initAbreastScrollFill + _dy);
        } else scrollTo(initTop + iy - y);
        return;
      }
    case 'up':
      {
        if (animationId) cancelAnimationFrame(animationId);
        animationId = requestAnimationFrame(handleSlide);
        saveReadProgress();
      }
  }
};

/** \u5728\u9F20\u6807\u9759\u6B62\u4E00\u6BB5\u65F6\u95F4\u540E\u81EA\u52A8\u9690\u85CF */
const useHiddenMouse = () => {
  const [hiddenMouse, setHiddenMouse] = solidJs.createSignal(true);
  const hidden = helper.debounce(() => setHiddenMouse(true), 1000);
  return {
    hiddenMouse,
    /** \u9F20\u6807\u79FB\u52A8 */
    onMouseMove() {
      setHiddenMouse(false);
      hidden();
    }
  };
};

const useStyle = css => solidJs.onMount(() => helper.useStyle(css, refs.root));
const useStyleMemo = (selector, styleMapArg) => solidJs.onMount(() => helper.useStyleMemo(selector, styleMapArg, refs.root));

const ComicImg = img => {
  const showState = () => imgShowState().get(img.index);
  const src = () => {
    if (img.loadType === 'wait') return '';
    if (img.translationType === 'show') return img.translationUrl;
    if (store.option.imgRecognition.enabled) {
      if (store.option.imgRecognition.upscale && img.upscaleUrl) return img.upscaleUrl;
      return img.blobUrl;
    }
    // \u6709\u4E9B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u663E\u793A\u5E26\u6709 hash \u6807\u8BC6\u7684\u56FE\u7247 url
    if (img.src.startsWith('blob:')) return img.src.replace(/#\\..+/, '');
    return img.src;
  };

  /** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u9700\u8981\u590D\u5236\u7684\u56FE\u7247\u6570\u91CF */
  const cloneNum = solidJs.createMemo(() => {
    if (!isAbreastMode()) return 0;
    const imgPosition = abreastArea().position[img.index];
    return imgPosition ? imgPosition.length - 1 : 0;
  });

  /** \u662F\u5426\u8981\u6E32\u67D3\u590D\u5236\u56FE\u7247 */
  const renderClone = () => !store.gridMode && showState() !== undefined && cloneNum() > 0;
  const selector = \`.\${modules_c21c94f2$1.img}[id^="_\${img.index}_"]\`;
  useStyleMemo(selector, {
    'grid-area': () => isAbreastMode() && !store.gridMode ? 'none' : \`_\${img.index}\`,
    'background-color': () => isEnableBg() ? img.background : undefined
  });
  useStyleMemo(\`\${selector} > picture\`, {
    'aspect-ratio': () => \`\${img.size.width} / \${img.size.height}\`,
    background: () => img.progress && \`linear-gradient(
          to bottom,
          var(--secondary-bg) \${img.progress}%,
          var(--hover-bg-color,#fff3) \${img.progress}%
        )\`
  });
  const _ComicImg = props => (() => {
    var _el$ = web.template(\`<div><picture>\`)(),
      _el$2 = _el$.firstChild;
    web.insert(_el$2, web.createComponent(solidJs.Show, {
      get when() {
        return web.memo(() => img.loadType !== 'wait')() && src();
      },
      get children() {
        var _el$3 = web.template(\`<img draggable=false decoding=sync>\`)();
        _el$3.addEventListener("error", e => handleImgError(img.src, e.currentTarget));
        _el$3.addEventListener("load", e => handleImgLoaded(img.src, e.currentTarget));
        web.effect(_p$ => {
          var _v$ = src(),
            _v$2 = \`\${img.index}\`,
            _v$3 = img.src;
          _v$ !== _p$.e && web.setAttribute(_el$3, "src", _p$.e = _v$);
          _v$2 !== _p$.t && web.setAttribute(_el$3, "alt", _p$.t = _v$2);
          _v$3 !== _p$.a && web.setAttribute(_el$3, "data-src", _p$.a = _v$3);
          return _p$;
        }, {
          e: undefined,
          t: undefined,
          a: undefined
        });
        return _el$3;
      }
    }));
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return store.gridMode;
      },
      get children() {
        var _el$4 = web.template(\`<div>\`)();
        web.insert(_el$4, (() => {
          var _c$ = web.memo(() => !!store.gridMode);
          return () => _c$() ? getImgTip(img.index) : '';
        })());
        web.effect(() => web.className(_el$4, modules_c21c94f2$1.gridModeTip));
        return _el$4;
      }
    }), null);
    web.effect(_p$ => {
      var _v$4 = modules_c21c94f2$1.img,
        _v$5 = \`_\${img.index}_\${props.cloneIndex ?? 0}\`,
        _v$6 = showState(),
        _v$7 = img.type ?? store.defaultImgType,
        _v$8 = img.loadType === 'loaded' ? undefined : img.loadType;
      _v$4 !== _p$.e && web.className(_el$, _p$.e = _v$4);
      _v$5 !== _p$.t && web.setAttribute(_el$, "id", _p$.t = _v$5);
      _v$6 !== _p$.a && web.setAttribute(_el$, "data-show", _p$.a = _v$6);
      _v$7 !== _p$.o && web.setAttribute(_el$, "data-type", _p$.o = _v$7);
      _v$8 !== _p$.i && web.setAttribute(_el$, "data-load-type", _p$.i = _v$8);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$;
  })();
  return [web.createComponent(_ComicImg, {}), web.createComponent(solidJs.Show, {
    get when() {
      return renderClone();
    },
    get children() {
      return web.createComponent(solidJs.For, {
        get each() {
          return Array.from({
            length: cloneNum()
          });
        },
        children: (_, i) => web.createComponent(_ComicImg, {
          get cloneIndex() {
            return i() + 1;
          }
        })
      });
    }
  })];
};

// \u76EE\u524D\u5373\u4F7F\u662F\u4E0D\u663E\u793A\u7684\u56FE\u7247\u4E5F\u5FC5\u987B\u6302\u8F7D\u4E0A\uFF0C\u5426\u5219\u89E3\u6790\u597D\u7684\u56FE\u7247\u4F1A\u88AB\u6D4F\u89C8\u5668\u5783\u573E\u56DE\u6536\u6389\uFF0C
// \u5BFC\u81F4\u5728 ehentai \u4E0A\u65E0\u6CD5\u6B63\u5E38\u52A0\u8F7D\u56FE\u7247\u3002\u4F46\u8FD9\u6837\u4F1A\u5728\u56FE\u7247\u8FC7\u591A\u65F6\u9020\u6210\u6027\u80FD\u95EE\u9898\uFF0C
// \u867D\u7136\u4E5F\u5C1D\u8BD5\u4E86\u5C06\u89E3\u6790\u597D\u7684 Image \u5BF9\u8C61\u5B58\u50A8\u8D77\u6765\u6302\u4E0A\u5F15\u7528\u548C\u53E6\u5916\u653E\u5230\u4E00\u4E2A\u907F\u514D\u6E32\u67D3\u7684 dom \u4E0B\uFF0C
// \u4F46\u4E5F\u90FD\u5931\u8D25\u4E86\uFF0C\u53EA\u80FD\u6682\u65F6\u5148\u4E0D\u7BA1\u4E86\u3002
// \u4E4B\u540E\u5C1D\u8BD5\u65B0\u65B9\u6848\u65F6\u5FC5\u987B\u7ECF\u8FC7\u5982\u4E0B\u6D4B\u8BD5\uFF1A\u5F00\u4E2A\u51E0\u767E\u9875\u7684\u6F2B\u753B\u52A0\u8F7D\u5B8C\u6BD5\u540E\uFF0C\u518D\u6253\u5F00\u4E8C\u5341\u4E2A\u6807\u7B7E\u9875\u5207\u6362\u8FC7\u53BB\uFF0C
const EmptyTip = () => {
  let ref; // oxlint-disable-line no-unassigned-vars

  helper.onAutoMount(() => {
    let timeoutId = 0;
    const observer = new IntersectionObserver(([{
      isIntersecting
    }]) => {
      if (!isIntersecting) return;
      timeoutId = window.setTimeout(() => {
        ref?.style.removeProperty('opacity');
        timeoutId = 0;
      }, 2000);
    }, {
      threshold: 1
    });
    observer.observe(ref);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  });
  return (() => {
    var _el$ = web.template(\`<h1>\`)();
    var _ref$ = ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
    web.setStyleProperty(_el$, "opacity", "0");
    _el$.textContent = "NULL";
    return _el$;
  })();
};

const ComicImgFlow = () => {
  const {
    hiddenMouse,
    onMouseMove
  } = useHiddenMouse();
  const handleDrag = (state, e) => {
    if (store.gridMode) return;
    if (touches.size > 1) return handlePinchZoom(state);
    if (store.option.zoom.ratio !== 100) return handleZoomDrag(state);
    if (store.option.scrollMode.enabled) return handleScrollModeDrag(state, e);
    return handleMangaFlowDrag(state);
  };
  solidJs.onMount(() => {
    helper.useDrag({
      ref: refs.mangaBox,
      handleDrag,
      handleClick,
      touches
    });
    bindScrollTop(refs.mangaBox);
  });
  const handleTransitionEnd = () => {
    if (store.isDragMode) return;
    setState(state => {
      if (store.option.zoom.ratio === 100) resetPage(state, false);else state.page.anima = '';
    });
  };

  /** \u5728\u5F53\u524D\u9875\u4E4B\u524D\u6709\u56FE\u7247\u88AB\u52A0\u8F7D\u51FA\u6765\uFF0C\u5BFC\u81F4\u5185\u5BB9\u9AD8\u5EA6\u53D1\u751F\u53D8\u5316\u540E\uFF0C\u91CD\u65B0\u6EDA\u52A8\u9875\u9762\uFF0C\u786E\u4FDD\u5F53\u524D\u663E\u793A\u4F4D\u7F6E\u4E0D\u53D8 */
  helper.createEffectOn([() => store.showRange[0], () => imgTopList()[store.showRange[0]], imgTopList], ([showImg, height, topList], prev) => {
    if (!prev || !height || !isScrollMode()) return;
    const [prevShowImg, prevHeight, prevTopList] = prev;
    if (showImg !== prevShowImg || prevTopList === topList || prevHeight === height) return;
    scrollTo(scrollTop() + height - prevHeight);
    // \u76EE\u524D\u8FD8\u662F\u4F1A\u6709\u8F7B\u5FAE\u504F\u79FB\uFF0C\u4F46\u8003\u8651\u5230\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u90FD\u662F\u987A\u5E8F\u9605\u8BFB\uFF0C\u672C\u8EAB\u51FA\u73B0\u6982\u7387\u5C31\u4F4E\uFF0C\u5C31\u4E0D\u7EE7\u7EED\u6392\u67E5\u4F18\u5316\u4E86
  });
  const pageToText = page => \`\${(page.length === 1 ? [page[0], page[0]] : page).map(i => i === -1 ? '.' : \`_\${i}\`).join(' ')}\`;
  const gridAreas = solidJs.createMemo(() => {
    if (store.pageList.length === 0) return undefined;
    if (store.gridMode) {
      let columnNum;
      if (store.isMobile) columnNum = 2;else if (store.defaultImgType === 'vertical') columnNum = 6;else if (isOnePageMode()) columnNum = 4;else columnNum = 2;
      const areaList = [[]];
      for (const page of store.pageList) {
        if (areaList.at(-1).length === columnNum) areaList.push([]);
        areaList.at(-1).push(pageToText(page));
      }
      while (areaList.at(-1).length !== columnNum) areaList.at(-1).push('. .');
      return areaList.map(line => \`"\${line.join(' ')}"\`).join('\\n') || undefined;
    }
    if (store.option.scrollMode.enabled) {
      if (store.option.scrollMode.abreastMode) return \`"\${helper.range(abreastArea().columns.length, i => \`_\${i}\`).join(' ')}"\`;
      if (store.option.scrollMode.doubleMode) return store.pageList.map(page => \`"\${pageToText(page)}"\`).join('\\n');
      return helper.range(store.imgList.length, i => \`"_\${i}"\`).join('\\n');
    }
    return store.page.vertical ? store.pageList.slice(store.renderRange[0], store.renderRange[1] + 1).map(page => \`"\${pageToText(page)}"\`).join('\\n') : \`"\${store.pageList.slice(store.renderRange[0], store.renderRange[1] + 1).map(pageToText).join(' ')}"\`;
  });
  useStyleMemo(\`.\${modules_c21c94f2$1.mangaBox}\`, {
    transform: () => \`translate(\${store.option.zoom.offset.x}px, \${store.option.zoom.offset.y}px)
        scale(\${store.option.zoom.ratio / 100})\`
  });
  const pageX = solidJs.createMemo(() => {
    if (store.gridMode || isScrollMode()) return 0;
    let x = store.page.offset.x.pct * store.rootSize.width + store.page.offset.x.px;
    if (store.option.dir !== 'rtl') x = -x;
    return x;
  });
  useStyleMemo(\`#\${modules_c21c94f2$1.mangaFlow}\`, {
    // \u4E0D\u80FD\u4F7F\u7528 transform \u6765\u79FB\u52A8\uFF0C\u4E0D\u7136\u5728 Safari \u6D4F\u89C8\u5668\u4E0A\u60AC\u6D6E\u663E\u793A\u65F6
    // \u6BCF\u6B21\u6EDA\u52A8\u5E95\u4E0B\u7684\u7F51\u9875\u65F6 mangaFlow \u90FD\u4F1A\u95EA\u70C1\u4E00\u4E0B\uFF0C\u5728\u7B80\u6613\u6A21\u5F0F\u4E0B\u4F1A\u9891\u7E41\u89E6\u53D1
    left: () => \`\${pageX()}px\`,
    top: () => \`\${store.page.offset.y.pct * store.rootSize.height + store.page.offset.y.px}px\`,
    'touch-action': function () {
      if (store.gridMode) return 'auto';
      if (store.option.zoom.ratio !== 100) {
        if (!store.option.scrollMode.enabled) return 'none';
        if (store.option.zoom.offset.y === 0) return 'pan-up';
        if (store.option.zoom.offset.y === bound().y) return 'pan-down';
      }
    },
    'grid-template-areas': gridAreas,
    'grid-template-columns': function () {
      if (store.imgList.length === 0 || store.gridMode) return undefined;
      if (store.option.scrollMode.enabled) {
        if (store.option.scrollMode.abreastMode) return \`repeat(\${abreastArea().columns.length}, \${abreastColumnWidth()}px)\`;
        if (store.option.scrollMode.doubleMode) return \`50% 50%\`;
        return undefined;
      }
      if (store.page.vertical) return '50% 50%';
      return \`repeat(\${gridAreas()?.split(' ').length ?? 0}, 50%)\`;
    },
    'grid-template-rows': function () {
      if (store.gridMode) return undefined;
      if (isDoubleMode()) return doubleScrollLineHeight().map(num => \`\${num}px\`).join(' ');
      if (isScrollMode()) return imgList().map(({
        size: {
          height
        }
      }) => \`\${height}px\`).join(' ');
    },
    'background-color': () => isEnableBg() ? getImg(activeImgIndex())?.background : undefined
  });
  useStyle(imgAreaStyle);
  return (() => {
    var _el$ = web.template(\`<div tabindex=-1><div tabindex=-1>\`)(),
      _el$2 = _el$.firstChild;
    web.addEventListener(_el$, "scrollend", focus);
    _el$.addEventListener("transitionend", handleTransitionEnd);
    var _ref$ = bindRef('mangaBox');
    typeof _ref$ === "function" && web.use(_ref$, _el$);
    _el$2.addEventListener("transitionend", handleTransitionEnd);
    web.addEventListener(_el$2, "mousemove", onMouseMove);
    var _ref$2 = bindRef('mangaFlow');
    typeof _ref$2 === "function" && web.use(_ref$2, _el$2);
    web.insert(_el$2, web.createComponent(solidJs.Index, {
      get each() {
        return imgList();
      },
      get fallback() {
        return web.createComponent(EmptyTip, {});
      },
      children: (img, i) => web.createComponent(ComicImg, web.mergeProps({
        index: i
      }, img))
    }));
    web.effect(_p$ => {
      var _v$ = \`\${modules_c21c94f2$1.mangaBox} \${modules_c21c94f2$1.beautifyScrollbar}\`,
        _v$2 = store.page.anima,
        _v$3 = helper.boolDataVal(store.option.scrollMode.abreastMode),
        _v$4 = modules_c21c94f2$1.mangaFlow,
        _v$5 = store.option.dir,
        _v$6 = \`\${modules_c21c94f2$1.mangaFlow} \${modules_c21c94f2$1.beautifyScrollbar}\`,
        _v$7 = helper.boolDataVal(store.option.disableZoom && !store.option.scrollMode.enabled),
        _v$8 = helper.boolDataVal(store.option.zoom.ratio !== 100),
        _v$9 = helper.boolDataVal(store.page.vertical),
        _v$0 = !store.gridMode && store.option.autoHiddenMouse && hiddenMouse(),
        _v$1 = helper.boolDataVal(store.option.scrollMode.fitToWidth);
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-animation", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-abreast-scroll", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$2, "id", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setAttribute(_el$2, "dir", _p$.i = _v$5);
      _v$6 !== _p$.n && web.className(_el$2, _p$.n = _v$6);
      _v$7 !== _p$.s && web.setAttribute(_el$2, "data-disable-zoom", _p$.s = _v$7);
      _v$8 !== _p$.h && web.setAttribute(_el$2, "data-scale-mode", _p$.h = _v$8);
      _v$9 !== _p$.r && web.setAttribute(_el$2, "data-vertical", _p$.r = _v$9);
      _v$0 !== _p$.d && web.setAttribute(_el$2, "data-hidden-mouse", _p$.d = _v$0);
      _v$1 !== _p$.l && web.setAttribute(_el$2, "data-fit-width", _p$.l = _v$1);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined,
      d: undefined,
      l: undefined
    });
    return _el$;
  })();
};


const areaArrayMap = {
  left_right: [['prev', 'menu', 'next'], ['PREV', 'MENU', 'NEXT'], ['prev', 'menu', 'next']],
  up_down: [['prev', 'PREV', 'prev'], ['menu', 'MENU', 'menu'], ['next', 'NEXT', 'next']],
  edge: [['next', 'menu', 'next'], ['NEXT', 'MENU', 'NEXT'], ['next', 'PREV', 'next']],
  l: [['PREV', 'prev', 'prev'], ['prev', 'MENU', 'next'], ['next', 'next', 'NEXT']]
};
const areaType = helper.createRootMemo(() => Reflect.has(areaArrayMap, store.option.clickPageTurn.area) ? store.option.clickPageTurn.area : 'left_right');
const dir = helper.createRootMemo(() => {
  if (!store.option.clickPageTurn.reverse) return store.option.dir;
  return store.option.dir === 'rtl' ? 'ltr' : 'rtl';
});
const TouchArea = () => (() => {
  var _el$ = web.template(\`<div>\`)();
  var _ref$ = bindRef('touchArea');
  typeof _ref$ === "function" && web.use(_ref$, _el$);
  web.insert(_el$, web.createComponent(solidJs.For, {
    get each() {
      return areaArrayMap[areaType()];
    },
    children: rows => web.createComponent(solidJs.For, {
      each: rows,
      children: area => (() => {
        var _el$2 = web.template(\`<div role=button tabindex=-1>\`)();
        web.setAttribute(_el$2, "data-area", area);
        web.effect(() => web.className(_el$2, modules_c21c94f2$1.touchArea));
        return _el$2;
      })()
    })
  }));
  web.effect(_p$ => {
    var _v$ = modules_c21c94f2$1.touchAreaRoot,
      _v$2 = dir(),
      _v$3 = helper.boolDataVal(store.show.touchArea),
      _v$4 = areaType(),
      _v$5 = helper.boolDataVal(store.option.clickPageTurn.enabled && !store.option.scrollMode.enabled);
    _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
    _v$2 !== _p$.t && web.setAttribute(_el$, "dir", _p$.t = _v$2);
    _v$3 !== _p$.a && web.setAttribute(_el$, "data-show", _p$.a = _v$3);
    _v$4 !== _p$.o && web.setAttribute(_el$, "data-area", _p$.o = _v$4);
    _v$5 !== _p$.i && web.setAttribute(_el$, "data-turn-page", _p$.i = _v$5);
    return _p$;
  }, {
    e: undefined,
    t: undefined,
    a: undefined,
    o: undefined,
    i: undefined
  });
  return _el$;
})();

let delayTypeTimer = 0;
const EndPage = () => {
  const handleClick = e => {
    e.stopPropagation();
    if (e.target?.nodeName !== 'BUTTON') setState('show', 'endPage', undefined);
    focus();
  };
  let ref; // oxlint-disable-line no-unassigned-vars

  const [isDrag, setIsDrag] = solidJs.createSignal(false);
  const [dragY, setDragY] = solidJs.createSignal(0);
  const handleDrag = ({
    type,
    xy: [, y],
    initial: [, iy],
    startTime
  }) => {
    switch (type) {
      case 'down':
        return setIsDrag(true);
      case 'move':
        return setDragY(y - iy);
    }
    const pageDir = getTurnPageDir(-dragY(), store.rootSize.height / 2, startTime);
    if (pageDir) turnPage(pageDir);
    setDragY(0);
    setIsDrag(false);
  };
  solidJs.onMount(() => {
    ref.addEventListener('wheel', e => {
      e.preventDefault();
      e.stopPropagation();
      turnPage(e.deltaY > 0 ? 'next' : 'prev');
    }, {
      passive: false
    });
    helper.useDrag({
      ref,
      handleDrag,
      skip: e => e.target.matches(\`.\${modules_c21c94f2$1.comments}, .\${modules_c21c94f2$1.comments} *\`)
    });
  });

  // state.show.endPage \u53D8\u91CF\u7684\u5EF6\u65F6\u7248\u672C\uFF0C\u5728\u9690\u85CF\u7684\u52A8\u753B\u6548\u679C\u7ED3\u675F\u4E4B\u540E\u624D\u4F1A\u771F\u6B63\u6539\u53D8
  // \u9632\u6B62\u5728\u52A8\u753B\u6548\u679C\u7ED3\u675F\u524D tip \u5C31\u6D88\u5931\u6216\u6539\u53D8\u4E86\u4F4D\u7F6E
  const [delayType, setDelayType] = solidJs.createSignal();
  solidJs.createEffect(() => {
    if (store.show.endPage) {
      window.clearTimeout(delayTypeTimer);
      setDelayType(store.show.endPage);
    } else {
      delayTypeTimer = window.setTimeout(() => setDelayType(store.show.endPage), 500);
    }
  });
  const tip = solidJs.createMemo(() => {
    if (store.option.scroolEnd === 'none') return '';
    switch (delayType()) {
      case 'start':
        if (!store.prop.onPrev || store.option.scroolEnd !== 'auto') break;
        return helper.t('end_page.tip.start_jump');
      case 'end':
        if (store.prop.onNext && store.option.scroolEnd === 'auto') return helper.t('end_page.tip.end_jump');
        if (store.prop.onExit) return helper.t('end_page.tip.exit');
    }
    return '';
  });
  return (() => {
    var _el$ = web.template(\`<div role=button tabindex=-1><div><p></p><button type=button></button><button type=button data-is-end></button><button type=button>\`)(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.nextSibling,
      _el$5 = _el$4.nextSibling,
      _el$6 = _el$5.nextSibling;
    web.addEventListener(_el$, "click", handleClick);
    var _ref$ = ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
    web.insert(_el$3, tip);
    web.addEventListener(_el$4, "click", () => store.prop.onPrev?.());
    var _ref$2 = bindRef('prev');
    typeof _ref$2 === "function" && web.use(_ref$2, _el$4);
    web.insert(_el$4, () => helper.t('end_page.prev_button'));
    web.addEventListener(_el$5, "click", () => store.prop.onExit?.(store.show.endPage === 'end'));
    var _ref$3 = bindRef('exit');
    typeof _ref$3 === "function" && web.use(_ref$3, _el$5);
    web.insert(_el$5, () => helper.t('other.exit'));
    web.addEventListener(_el$6, "click", () => store.prop.onNext?.());
    var _ref$4 = bindRef('next');
    typeof _ref$4 === "function" && web.use(_ref$4, _el$6);
    web.insert(_el$6, () => helper.t('end_page.next_button'));
    web.insert(_el$2, web.createComponent(solidJs.Show, {
      get when() {
        return web.memo(() => !!(store.option.showComment && delayType() === 'end'))() && store.commentList?.length;
      },
      get children() {
        var _el$7 = web.template(\`<div>\`)();
        web.addEventListener(_el$7, "wheel", stopPropagation);
        web.insert(_el$7, web.createComponent(solidJs.For, {
          get each() {
            return store.commentList;
          },
          children: comment => (() => {
            var _el$8 = web.template(\`<p>\`)();
            web.insert(_el$8, comment);
            return _el$8;
          })()
        }));
        web.effect(() => web.className(_el$7, \`\${modules_c21c94f2$1.comments} \${modules_c21c94f2$1.beautifyScrollbar}\`));
        return _el$7;
      }
    }), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.endPage,
        _v$2 = store.show.endPage,
        _v$3 = delayType(),
        _v$4 = helper.boolDataVal(isDrag()),
        _v$5 = dir() === 'rtl' ? 'row-reverse' : undefined,
        _v$6 = modules_c21c94f2$1.endPageBody,
        _v$7 = \`\${dragY()}px\`,
        _v$8 = modules_c21c94f2$1.tip,
        _v$9 = {
          [modules_c21c94f2$1.invisible]: !store.prop.onPrev
        },
        _v$0 = store.show.endPage ? 0 : -1,
        _v$1 = store.show.endPage ? 0 : -1,
        _v$10 = {
          [modules_c21c94f2$1.invisible]: !store.prop.onNext
        },
        _v$11 = store.show.endPage ? 0 : -1;
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-type", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$, "data-drag", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setStyleProperty(_el$, "flex-direction", _p$.i = _v$5);
      _v$6 !== _p$.n && web.className(_el$2, _p$.n = _v$6);
      _v$7 !== _p$.s && web.setStyleProperty(_el$2, "--drag-y", _p$.s = _v$7);
      _v$8 !== _p$.h && web.className(_el$3, _p$.h = _v$8);
      _p$.r = web.classList(_el$4, _v$9, _p$.r);
      _v$0 !== _p$.d && web.setAttribute(_el$4, "tabindex", _p$.d = _v$0);
      _v$1 !== _p$.l && web.setAttribute(_el$5, "tabindex", _p$.l = _v$1);
      _p$.u = web.classList(_el$6, _v$10, _p$.u);
      _v$11 !== _p$.c && web.setAttribute(_el$6, "tabindex", _p$.c = _v$11);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined,
      d: undefined,
      l: undefined,
      u: undefined,
      c: undefined
    });
    return _el$;
  })();
};

const getScrollbarPage = (img, i, double = false) => {
  let num;
  if (store.option.scrollMode.enabled) num = getImg(i).size.height;else num = double ? 2 : 1;
  let upscale;
  if (isUpscale() && img.upscaleUrl !== undefined) upscale = img.upscaleUrl === '' ? 'loading' : true;
  return {
    num,
    loadType: img.loadType,
    isNull: !img.src,
    translationType: img.translationType,
    upscale
  };
};
const ScrollbarPage = props => {
  const flexBasis = solidJs.createMemo(() => props.num / (store.option.scrollMode.enabled ? contentHeight() : store.imgList.length));
  return (() => {
    var _el$ = web.template(\`<div>\`)();
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.scrollbarPage,
        _v$2 = \`\${flexBasis() * 100}%\`,
        _v$3 = props.loadType,
        _v$4 = helper.boolDataVal(props.isNull),
        _v$5 = props.translationType,
        _v$6 = props.upscale;
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setStyleProperty(_el$, "flex-basis", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-type", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$, "data-null", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setAttribute(_el$, "data-translation-type", _p$.i = _v$5);
      _v$6 !== _p$.n && web.setAttribute(_el$, "data-upscale", _p$.n = _v$6);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined
    });
    return _el$;
  })();
};
const isSameItem = (a, b) => a.loadType === b.loadType && a.isNull === b.isNull && a.translationType === b.translationType && a.upscale === b.upscale;

/** \u663E\u793A\u5BF9\u5E94\u56FE\u7247\u52A0\u8F7D\u60C5\u51B5\u7684\u5143\u7D20 */
const ScrollbarPageStatus = () => {
  // \u5C06\u76F8\u540C\u7C7B\u578B\u7684\u9875\u9762\u5408\u5E76\u663E\u793A
  const scrollbarPageList = helper.createThrottleMemo(() => {
    if (store.pageList.length === 0) return [];
    const list = [];
    let item;
    const handleImg = (i, double = false) => {
      const img = getImg(i);
      const imgItem = getScrollbarPage(img, i, double);
      if (!item) {
        item = imgItem;
        return;
      }
      if (isSameItem(item, imgItem)) {
        if (store.option.scrollMode.enabled) item.num += img.size.height;else item.num += double ? 2 : 1;
      } else {
        list.push(item);
        item = getScrollbarPage(img, i, double);
      }
    };
    for (const [a, b] of store.pageList) {
      if (b === undefined) handleImg(a, !isOnePageMode());else if (a === -1) {
        handleImg(b);
        handleImg(b);
      } else if (b === -1) {
        handleImg(a);
        handleImg(a);
      } else {
        handleImg(a);
        handleImg(b);
      }
    }
    if (item) list.push(item);
    return list;
  }, 200);
  return web.createComponent(solidJs.For, {
    get each() {
      return scrollbarPageList();
    },
    children: page => web.createComponent(ScrollbarPage, page)
  });
};


/** \u6EDA\u52A8\u6761 */
const Scrollbar = () => {
  solidJs.onMount(() => {
    helper.useDrag({
      ref: refs.scrollbar,
      handleDrag: handleScrollbarSlider,
      easyMode: () => isScrollMode() && store.option.scrollbar.easyScroll,
      setCapture: true
    });
    watchDomSize('scrollbarSize', refs.scrollbar);
  });

  // \u5728\u88AB\u6EDA\u52A8\u65F6\u4F7F\u81EA\u8EAB\u53EF\u7A7F\u900F\uFF0C\u4EE5\u4FBF\u5728\u5377\u8F74\u6A21\u5F0F\u4E0B\u89E6\u53D1\u9875\u9762\u7684\u6EDA\u52A8
  const [penetrate, setPenetrate] = solidJs.createSignal(false);
  const resetPenetrate = helper.debounce(() => setPenetrate(false));
  const handleWheel = () => {
    setPenetrate(true);
    resetPenetrate();
  };

  /** \u662F\u5426\u5F3A\u5236\u663E\u793A\u6EDA\u52A8\u6761 */
  const showScrollbar = solidJs.createMemo(() => store.show.scrollbar || Boolean(penetrate()));

  /** \u6EDA\u52A8\u6761\u63D0\u793A\u6587\u672C */
  const tipText = helper.createThrottleMemo(() => {
    if (store.showRange[0] === store.showRange[1]) return getPageTip(store.showRange[0]);

    /** \u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\u7684\u6EDA\u52A8\u6761\u63D0\u793A\u6587\u672C */
    if (isAbreastMode()) {
      const columns = abreastArea().columns.slice(abreastShowColumn().start, abreastShowColumn().end + 1).map(column => column.map(getPageTip));
      if (store.option.dir !== 'rtl') columns.reverse();
      return columns.map(column => column.join(' ')).join('\\n');
    }
    const tipList = [];
    for (let [i] = store.showRange; i <= store.showRange[1]; i++) tipList.push(getPageTip(i));
    if (isOnePageMode() || isDoubleMode()) return tipList.join('\\n');
    if (tipList.length === 1) return tipList[0];
    if (store.option.dir === 'rtl') tipList.reverse();
    return tipList.join('   ');
  });
  useStyleMemo(\`.\${modules_c21c94f2$1.scrollbar}\`, {
    'pointer-events': () => penetrate() || store.isDragMode || store.gridMode ? 'none' : 'auto',
    '--scroll-length': () => \`\${scrollDomLength()}px\`,
    '--slider-midpoint': () => \`\${sliderMidpoint()}px\`,
    '--slider-height': () => \`\${sliderHeight() * scrollDomLength()}px\`,
    '--slider-top': sliderTop
  });
  const _Scrollbar = props => (() => {
    var _el$ = web.template(\`<div role=scrollbar tabindex=-1>\`)();
    _el$.addEventListener("wheel", handleWheel);
    var _ref$ = props.ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : props.ref = _el$;
    web.insert(_el$, () => props.children);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.scrollbar,
        _v$2 = modules_c21c94f2$1.mangaFlow,
        _v$3 = store.activePageIndex || -1,
        _v$4 = helper.boolDataVal(store.option.scrollbar.autoHidden),
        _v$5 = helper.boolDataVal(showScrollbar()),
        _v$6 = store.option.dir,
        _v$7 = scrollPosition(),
        _v$8 = helper.boolDataVal(isAbreastMode()),
        _v$9 = helper.boolDataVal(isDrag()),
        _v$0 = props.style;
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "aria-controls", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "aria-valuenow", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$, "data-auto-hidden", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setAttribute(_el$, "data-force-show", _p$.i = _v$5);
      _v$6 !== _p$.n && web.setAttribute(_el$, "data-dir", _p$.n = _v$6);
      _v$7 !== _p$.s && web.setAttribute(_el$, "data-position", _p$.s = _v$7);
      _v$8 !== _p$.h && web.setAttribute(_el$, "data-is-abreast-mode", _p$.h = _v$8);
      _v$9 !== _p$.r && web.setAttribute(_el$, "data-drag", _p$.r = _v$9);
      _p$.d = web.style(_el$, _v$0, _p$.d);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined,
      d: undefined
    });
    return _el$;
  })();
  return [web.createComponent(_Scrollbar, {
    ref(r$) {
      var _ref$2 = bindRef('scrollbar');
      typeof _ref$2 === "function" && _ref$2(r$);
    },
    get children() {
      return [(() => {
        var _el$2 = web.template(\`<div>\`)();
        web.insert(_el$2, tipText);
        web.effect(() => web.className(_el$2, modules_c21c94f2$1.scrollbarPoper));
        return _el$2;
      })(), web.createComponent(solidJs.Show, {
        get when() {
          return store.option.scrollbar.showImgStatus;
        },
        get children() {
          return web.createComponent(ScrollbarPageStatus, {});
        }
      })];
    }
  }), web.createComponent(_Scrollbar, {
    style: {
      'mix-blend-mode': 'difference',
      'pointer-events': 'none'
    },
    get children() {
      var _el$3 = web.template(\`<div>\`)();
      web.effect(_p$ => {
        var _v$1 = modules_c21c94f2$1.scrollbarSlider,
          _v$10 = {
            [modules_c21c94f2$1.hidden]: store.gridMode
          };
        _v$1 !== _p$.e && web.className(_el$3, _p$.e = _v$1);
        _p$.t = web.classList(_el$3, _v$10, _p$.t);
        return _p$;
      }, {
        e: undefined,
        t: undefined
      });
      return _el$3;
    }
  })];
};

const MdFullscreenExit = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdFullscreen = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1m0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdGrid = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M22 6c0-.55-.45-1-1-1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2H7V3c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7h2c.55 0 1-.45 1-1M7 7h4v4H7zm0 10v-4h4v4zm10 0h-4v-4h4zm0-6h-4V7h4z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdLooksOne = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14c-.55 0-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdLooksTwo = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4 8c0 1.1-.9 2-2 2h-2v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-1.1.9-2 2-2h2V9h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c1.1 0 2 .9 2 2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdLowPriority = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15 5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1m-5.15 3.15 1.79-1.79c.2-.2.2-.51 0-.71l-1.79-1.79a.495.495 0 0 0-.85.35v3.59c0 .44.54.66.85.35M9 16h-.3c-2.35 0-4.45-1.71-4.68-4.05A4.51 4.51 0 0 1 8.5 7H11c.55 0 1-.45 1-1s-.45-1-1-1H8.5c-3.86 0-6.96 3.4-6.44 7.36C2.48 15.64 5.43 18 8.73 18H9">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdQueue = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdSettings = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdTranslate = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03A17.5 17.5 0 0 0 14.07 6h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18A15.7 15.7 0 0 1 9 11.35c-.81-.89-1.49-1.86-2.06-2.88A.89.89 0 0 0 6.16 8c-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87a.99.99 0 0 0 0 1.42c.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35M17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94m-1.62 7 1.62-4.33L19.12 17z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdViewDay = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1M20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1M2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdZoomIn = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.78 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m0-7c-.28 0-.5.22-.5.5V9H7.5c-.28 0-.5.22-.5.5s.22.5.5.5H9v1.5c0 .28.22.5.5.5s.5-.22.5-.5V10h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H10V7.5c0-.28-.22-.5-.5-.5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdZoomOut = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m-2-5h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

var css = ".iconButtonItem____hash_base64_5_{align-items:center;display:flex;position:relative}.iconButton____hash_base64_5_{align-items:center;background-color:initial;border-radius:9999px;border-style:none;color:var(--text,#fff);cursor:pointer;display:flex;font-size:1.5em;height:1.5em;justify-content:center;margin:.1em;outline:none;padding:0;width:1.5em}.iconButton____hash_base64_5_:focus,.iconButton____hash_base64_5_:hover{background-color:var(--hover-bg-color,#fff3)}.iconButton____hash_base64_5_.enabled____hash_base64_5_:not(.disable____hash_base64_5_){background-color:var(--text,#fff);color:var(--text-bg,#121212)}.iconButton____hash_base64_5_.enabled____hash_base64_5_:not(.disable____hash_base64_5_):focus,.iconButton____hash_base64_5_.enabled____hash_base64_5_:not(.disable____hash_base64_5_):hover{background-color:var(--hover-bg-color-enable,#fffa)}.iconButton____hash_base64_5_.disable____hash_base64_5_{background-color:unset;cursor:not-allowed;opacity:.5}.iconButton____hash_base64_5_>svg{width:1em}.iconButtonPopper____hash_base64_5_{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:flex;font-size:.8em;opacity:0;padding:.4em .5em;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);-webkit-user-select:none;user-select:none;white-space:nowrap}.iconButtonPopper____hash_base64_5_[data-placement=right]{left:calc(100% + 1.5em)}.iconButtonPopper____hash_base64_5_[data-placement=right]:before{border-right-color:var(--switch-bg,#6e6e6e);border-right-width:.5em;right:calc(100% + .5em)}.iconButtonPopper____hash_base64_5_[data-placement=left]{right:calc(100% + 1.5em)}.iconButtonPopper____hash_base64_5_[data-placement=left]:before{border-left-color:var(--switch-bg,#6e6e6e);border-left-width:.5em;left:calc(100% + .5em)}.iconButtonPopper____hash_base64_5_:before{background-color:initial;border:.4em solid #0000;content:\\"\\";pointer-events:none;position:absolute;transition:opacity .15s}.iconButtonItem____hash_base64_5_:is(:hover,:focus,[data-show=true]) .iconButtonPopper____hash_base64_5_{opacity:1}.hidden____hash_base64_5_{display:none}";
var modules_c21c94f2 = {"iconButtonItem":"iconButtonItem____hash_base64_5_","iconButton":"iconButton____hash_base64_5_","enabled":"enabled____hash_base64_5_","disable":"disable____hash_base64_5_","iconButtonPopper":"iconButtonPopper____hash_base64_5_","hidden":"hidden____hash_base64_5_"};

/** \u56FE\u6807\u6309\u94AE */
const IconButton = _props => {
  const props = solidJs.mergeProps({
    placement: 'right'
  }, _props);
  let buttonRef; // oxlint-disable-line no-unassigned-vars
  const handleClick = e => {
    if (props.disable) return;
    props.onClick?.(e);
    // \u5728\u6BCF\u6B21\u70B9\u51FB\u540E\u53D6\u6D88\u7126\u70B9
    buttonRef?.blur();
  };
  return (() => {
    var _el$ = web.template(\`<div><button type=button tabindex=0>\`)(),
      _el$2 = _el$.firstChild;
    web.use(ref => helper.useStyle(css, ref), _el$);
    web.addEventListener(_el$2, "click", handleClick);
    var _ref$ = buttonRef;
    typeof _ref$ === "function" ? web.use(_ref$, _el$2) : buttonRef = _el$2;
    web.insert(_el$2, () => props.children);
    web.insert(_el$, (() => {
      var _c$ = web.memo(() => !!(props.popper || props.tip));
      return () => _c$() ? (() => {
        var _el$3 = web.template(\`<div>\`)();
        web.insert(_el$3, () => props.popper || props.tip);
        web.effect(_p$ => {
          var _v$7 = [modules_c21c94f2.iconButtonPopper, props.popperClassName].join(' '),
            _v$8 = props.placement;
          _v$7 !== _p$.e && web.className(_el$3, _p$.e = _v$7);
          _v$8 !== _p$.t && web.setAttribute(_el$3, "data-placement", _p$.t = _v$8);
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$3;
      })() : null;
    })(), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2.iconButtonItem,
        _v$2 = props.showTip,
        _v$3 = props.tip,
        _v$4 = modules_c21c94f2.iconButton,
        _v$5 = props.style,
        _v$6 = {
          [modules_c21c94f2.hidden]: props.hidden,
          [modules_c21c94f2.enabled]: props.enabled,
          [modules_c21c94f2.disable]: props.disable
        };
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$2, "aria-label", _p$.a = _v$3);
      _v$4 !== _p$.o && web.className(_el$2, _p$.o = _v$4);
      _p$.i = web.style(_el$2, _v$5, _p$.i);
      _p$.n = web.classList(_el$2, _v$6, _p$.n);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined
    });
    return _el$;
  })();
};

const MdPlayArrow = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdStop = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const autoScroll = new class extends helper.AnimationFrame {
  /** \u4E0A\u6B21\u6EDA\u52A8\u7684\u65F6\u95F4 */
  lastTime = 0;
  scroll = () => {
    if (store.show.endPage === 'end') {
      this.stop();
      if (store.option.autoScroll.triggerEnd) turnPage('next');
      return;
    }
    if (!store.option.scrollMode.enabled) turnPage('next');else if (isScrollMode()) scrollTo(scrollTop() + store.option.autoScroll.distance, true);else if (isAbreastMode()) scrollTo(scrollProgress() - (store.option.dir === 'rtl' ? -1 : 1) * store.option.autoScroll.distance, true);
    if (!isBottom()) return;
    if (!store.prop.onExit) return this.stop();
    return setState('show', 'endPage', 'end');
  };
  frame = timestamp => {
    const elapsed = timestamp - this.lastTime;
    let progress;
    if (elapsed >= store.option.autoScroll.interval) {
      this.lastTime = timestamp;
      this.scroll();
      progress = 1;
    }
    if (!store.autoScroll.play) return;
    progress ||= elapsed / store.option.autoScroll.interval;
    setState('autoScroll', 'progress', progress);
    this.call();
  };
  start = () => {
    this.lastTime = 0;
    this.call();
  };
  stop = () => {
    this.cancel();
    setState('autoScroll', 'play', false);
  };
}();
helper.createEffectOn(() => [...Object.values(store.option.autoScroll), store.autoScroll.play], () => {
  autoScroll.cancel();
  if (!store.option.autoScroll.enabled || !store.autoScroll.play) return;
  autoScroll.start();
});

// \u70B9\u51FB\u5C4F\u5E55\u4E2D\u95F4\u505C\u6B62\u81EA\u52A8\u6EDA\u52A8
helper.createEffectOn(() => store.show.toolbar, show => show && autoScroll.stop());
const AutoScrollButton = () => {
  const background = solidJs.createMemo(() => {
    if (!store.autoScroll.play) return undefined;
    const deg = store.autoScroll.progress * 360 % 360;
    return \`conic-gradient(var(--text-secondary) 0deg, var(--text-secondary) \${deg}deg, var(--text) \${deg}deg)\`;
  });
  return web.createComponent(IconButton, {
    get tip() {
      return helper.t('button.auto_scroll');
    },
    get enabled() {
      return store.autoScroll.play;
    },
    get style() {
      return {
        background: background()
      };
    },
    onClick: switchAutoScroll,
    get children() {
      return web.memo(() => !!store.autoScroll.play)() ? web.createComponent(MdStop, {}) : web.createComponent(MdPlayArrow, {});
    }
  });
};

const MdOutlineFormatTextdirectionLToR = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M9 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61A4 4 0 0 0 9 10m11.65 7.65-2.79-2.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h11v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdOutlineFormatTextdirectionRToL = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M10 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-6.83C8.08 2 6.22 3.53 6.02 5.61A4 4 0 0 0 10 10m-2 7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1s-.45-1-1-1z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdAdd = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdClose = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdRefresh = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const setHotkeys = (...args) => {
  setState(...['hotkeys', ...args]);
  store.prop.onHotkeysChange?.(Object.fromEntries(Object.entries(store.hotkeys).filter(([name, keys]) => !helper.isEqual(keys.filter(Boolean), defaultHotkeys()[name]))));
};
const delHotkeys = code => {
  for (const [name, keys] of Object.entries(store.hotkeys)) {
    const i = keys.indexOf(code);
    if (i === -1) continue;
    const newKeys = [...store.hotkeys[name]];
    newKeys.splice(i, 1);
    setHotkeys(name, newKeys);
  }
};
const getHotkeyName = code => helper.t(\`hotkeys.\${code}\`) || helper.t(\`button.\${code}\`) || helper.t(\`setting.translation.\${code}\`) || helper.t(\`other.\${code}\`) || code;
const KeyItem = props => {
  const code = () => store.hotkeys[props.operateName][props.i];
  const del = () => delHotkeys(code());
  const handleKeyDown = e => {
    e.stopPropagation();
    e.preventDefault();
    switch (e.key) {
      case 'Tab':
      case 'Enter':
      case 'Escape':
        focus();
        return;
      case 'Backspace':
        setHotkeys(props.operateName, props.i, '');
        return;
    }
    unsafeWindow.toast = Toast.toast;
    const newCode = helper.getKeyboardCode(e);
    if (Reflect.has(hotkeysMap(), newCode)) Toast.toast.error(helper.t('hotkeys.repeat_tip', {
      hotkey: getHotkeyName(hotkeysMap()[newCode])
    }));else setHotkeys(props.operateName, props.i, newCode);
  };
  return (() => {
    var _el$ = web.template(\`<div tabindex=0>\`)();
    _el$.addEventListener("blur", () => code() || del());
    web.use(ref => code() || setTimeout(() => ref.focus()), _el$);
    web.addEventListener(_el$, "keydown", handleKeyDown);
    web.insert(_el$, () => helper.keyboardCodeToText(code()), null);
    web.insert(_el$, web.createComponent(MdClose, {
      "on:click": del
    }), null);
    web.effect(() => web.className(_el$, modules_c21c94f2$1.hotkeysItem));
    return _el$;
  })();
};
const SettingHotkeys = props => web.createComponent(solidJs.For, {
  get each() {
    return props.keys;
  },
  children: name => (() => {
    var _el$2 = web.template(\`<div><div><p></p><span style=flex-grow:1></span><div></div><div>\`)(),
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.firstChild,
      _el$5 = _el$4.nextSibling,
      _el$6 = _el$5.nextSibling,
      _el$7 = _el$6.nextSibling;
    web.insert(_el$4, () => getHotkeyName(name));
    web.addEventListener(_el$6, "click", () => setHotkeys(name, store.hotkeys[name].length, ''));
    web.insert(_el$6, web.createComponent(MdAdd, {}));
    web.addEventListener(_el$7, "click", () => {
      const newKeys = defaultHotkeys()[name] ?? [];
      for (const code of defaultHotkeys()[name]) delHotkeys(code);
      setHotkeys(name, newKeys);
    });
    web.insert(_el$7, web.createComponent(MdRefresh, {}));
    web.insert(_el$2, web.createComponent(solidJs.Index, {
      get each() {
        return store.hotkeys[name];
      },
      children: (_, i) => web.createComponent(KeyItem, {
        operateName: name,
        i: i
      })
    }), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.hotkeys,
        _v$2 = modules_c21c94f2$1.hotkeysHeader,
        _v$3 = helper.t('setting.hotkeys.add'),
        _v$4 = helper.t('setting.hotkeys.restore');
      _v$ !== _p$.e && web.className(_el$2, _p$.e = _v$);
      _v$2 !== _p$.t && web.className(_el$3, _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$6, "title", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$7, "title", _p$.o = _v$4);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined
    });
    return _el$2;
  })()
});
const OtherHotkeys = props => {
  let ref; // oxlint-disable-line no-unassigned-vars

  const handleChange = e => {
    const name = e.target.value;
    setHotkeys(name, store.hotkeys[name].length, '');
    ref.value = '';
  };
  return (() => {
    var _el$8 = web.template(\`<div><select><option value disabled hidden selected> \u2026\`)(),
      _el$9 = _el$8.firstChild,
      _el$0 = _el$9.firstChild,
      _el$1 = _el$0.firstChild;
    _el$9.addEventListener("change", handleChange);
    var _ref$ = ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$9) : ref = _el$9;
    web.setStyleProperty(_el$9, "height", "100%");
    web.insert(_el$0, () => helper.t('other.other'), _el$1);
    web.insert(_el$9, web.createComponent(solidJs.For, {
      get each() {
        return props.keys;
      },
      children: name => (() => {
        var _el$10 = web.template(\`<option>\`)();
        _el$10.value = name;
        web.insert(_el$10, () => getHotkeyName(name));
        return _el$10;
      })()
    }), null);
    web.effect(_p$ => {
      var _v$5 = modules_c21c94f2$1.hotkeys,
        _v$6 = modules_c21c94f2$1.hotkeysHeader;
      _v$5 !== _p$.e && web.className(_el$8, _p$.e = _v$5);
      _v$6 !== _p$.t && web.className(_el$9, _p$.t = _v$6);
      return _p$;
    }, {
      e: undefined,
      t: undefined
    });
    return _el$8;
  })();
};
const SettingHotkeysBlock = () => {
  const hotkeys = helper.createRootMemo(() => {
    const show = [];
    const other = [];
    for (const [name, keys] of Object.entries(store.hotkeys)) (keys.length > 0 ? show : other).push(name);
    return {
      show,
      other
    };
  });
  return [web.createComponent(SettingHotkeys, {
    get keys() {
      return hotkeys().show;
    }
  }), web.createComponent(solidJs.Show, {
    get when() {
      return hotkeys().other.length;
    },
    get children() {
      return web.createComponent(OtherHotkeys, {
        get keys() {
          return hotkeys().other;
        }
      });
    }
  })];
};

/** \u8BBE\u7F6E\u83DC\u5355\u9879 */
const SettingsItem = props => (() => {
  var _el$ = web.template(\`<div><div> <!> \`)(),
    _el$2 = _el$.firstChild,
    _el$3 = _el$2.firstChild,
    _el$5 = _el$3.nextSibling;
  web.insert(_el$2, () => props.name, _el$5);
  web.insert(_el$, () => props.children, null);
  web.effect(_p$ => {
    var _v$ = props.class ? \`\${modules_c21c94f2$1.SettingsItem} \${props.class}\` : modules_c21c94f2$1.SettingsItem,
      _v$2 = {
        [props.class ?? '']: Boolean(props.class?.length),
        ...props.classList
      },
      _v$3 = props.style,
      _v$4 = modules_c21c94f2$1.SettingsItemName;
    _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
    _p$.t = web.classList(_el$, _v$2, _p$.t);
    _p$.a = web.style(_el$, _v$3, _p$.a);
    _v$4 !== _p$.o && web.className(_el$2, _p$.o = _v$4);
    return _p$;
  }, {
    e: undefined,
    t: undefined,
    a: undefined,
    o: undefined
  });
  return _el$;
})();

/** \u6570\u503C\u8F93\u5165\u6846 */
const NumberInput = props => {
  const handleInput = e => {
    const target = e.currentTarget;
    if (props.maxLength === undefined || target.textContent.length <= props.maxLength) return;
    target.textContent = target.textContent.slice(0, props.maxLength);
    target.blur();
  };
  const handleKeyDown = e => {
    switch (e.key) {
      case 'ArrowUp':
        return props.onChange((Number(e.target.textContent) * 1000 + (props.step ?? 1) * 1000) / 1000);
      case 'ArrowDown':
        return props.onChange((Number(e.target.textContent) * 1000 - (props.step ?? 1) * 1000) / 1000);
      case 'Enter':
        return e.target.blur();
    }
  };
  return [(() => {
    var _el$ = web.template(\`<span contenteditable data-only-number>\`)();
    _el$.addEventListener("blur", e => {
      try {
        props.onChange(Number(e.currentTarget.textContent) || 0);
      } finally {
        e.currentTarget.textContent = \`\${props.value}\`;
      }
    });
    web.addEventListener(_el$, "keydown", handleKeyDown);
    web.addEventListener(_el$, "input", handleInput);
    web.insert(_el$, () => \`\${props.value}\`);
    return _el$;
  })(), web.createComponent(solidJs.Show, {
    get when() {
      return props.suffix;
    },
    get children() {
      return props.suffix;
    }
  })];
};


/** \u6570\u503C\u8F93\u5165\u6846\u83DC\u5355\u9879 */
const SettingsItemNumber = props => web.createComponent(SettingsItem, {
  get name() {
    return props.name;
  },
  get ["class"]() {
    return props.class;
  },
  get classList() {
    return props.classList;
  },
  get children() {
    var _el$ = web.template(\`<div>\`)();
    web.insert(_el$, web.createComponent(NumberInput, props));
    web.effect(_$p => web.setStyleProperty(_el$, "margin-right", props.suffix ? '.3em' : '.6em'));
    return _el$;
  }
});

/** \u9009\u62E9\u5668\u5F0F\u83DC\u5355\u9879 */
const SettingsItemSelect = props => {
  let ref; // oxlint-disable-line no-unassigned-vars

  solidJs.createEffect(() => {
    ref.value = props.options?.some(([val]) => val === props.value) ? props.value : '';
  });
  return web.createComponent(SettingsItem, {
    get name() {
      return props.name;
    },
    get ["class"]() {
      return props.class;
    },
    get classList() {
      return props.classList;
    },
    get children() {
      var _el$ = web.template(\`<select>\`)();
      web.addEventListener(_el$, "click", () => props.onClick?.());
      _el$.addEventListener("change", e => props.onChange(e.target.value));
      var _ref$ = ref;
      typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
      web.insert(_el$, web.createComponent(solidJs.For, {
        get each() {
          return props.options;
        },
        children: ([val, label]) => (() => {
          var _el$2 = web.template(\`<option>\`)();
          _el$2.value = val;
          web.insert(_el$2, label ?? val);
          return _el$2;
        })()
      }));
      web.effect(() => web.className(_el$, modules_c21c94f2$1.SettingsItemSelect));
      return _el$;
    }
  });
};

/** \u5F00\u5173\u5F0F\u83DC\u5355\u9879 */
const SettingsItemSwitch = props => {
  const handleClick = () => props.onChange(!props.value);
  return web.createComponent(SettingsItem, {
    get name() {
      return props.name;
    },
    get ["class"]() {
      return props.class;
    },
    get classList() {
      return props.classList;
    },
    get children() {
      var _el$ = web.template(\`<button type=button><div>\`)(),
        _el$2 = _el$.firstChild;
      web.addEventListener(_el$, "click", handleClick);
      web.effect(_p$ => {
        var _v$ = modules_c21c94f2$1.SettingsItemSwitch,
          _v$2 = props.value,
          _v$3 = props.disabled,
          _v$4 = modules_c21c94f2$1.SettingsItemSwitchRound;
        _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
        _v$2 !== _p$.t && web.setAttribute(_el$, "data-checked", _p$.t = _v$2);
        _v$3 !== _p$.a && (_el$.disabled = _p$.a = _v$3);
        _v$4 !== _p$.o && web.className(_el$2, _p$.o = _v$4);
        return _p$;
      }, {
        e: undefined,
        t: undefined,
        a: undefined,
        o: undefined
      });
      return _el$;
    }
  });
};


/** \u5E26\u6709\u52A8\u753B\u8FC7\u6E21\u7684\u5207\u6362\u663E\u793A\u8BBE\u7F6E\u9879 */
const SettingsShowItem = props => (() => {
  var _el$ = web.template(\`<div><div>\`)(),
    _el$2 = _el$.firstChild;
  web.insert(_el$2, () => props.children);
  web.effect(_p$ => {
    var _v$ = modules_c21c94f2$1.SettingsShowItem,
      _v$2 = props.when ? '1fr' : '0fr',
      _v$3 = modules_c21c94f2$1.SettingsShowItemBody;
    _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
    _v$2 !== _p$.t && web.setStyleProperty(_el$, "grid-template-rows", _p$.t = _v$2);
    _v$3 !== _p$.a && web.className(_el$2, _p$.a = _v$3);
    return _p$;
  }, {
    e: undefined,
    t: undefined,
    a: undefined
  });
  return _el$;
})();

/** \u8303\u56F4\u8F93\u5165\u6846 */
const RangeInput = props => {
  let ref; // oxlint-disable-line no-unassigned-vars

  /** \u5728\u4FDD\u6301\u5149\u6807\u4F4D\u7F6E\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\u4FEE\u6539\u6587\u672C */
  const editText = text => {
    const offset = ref.selectionStart;
    ref.value = text;
    if (offset) requestAnimationFrame(() => {
      ref.selectionStart = offset;
      ref.selectionEnd = offset;
    });
  };

  /** \u4FEE\u6539\u6587\u672C\u4E2D\u7684\u6570\u5B57 */
  const replaceTextNumer = (text, offset, fn) => {
    const isNumber = num => /\\d/.test(text[num]);
    let start = offset;
    if (!isNumber(offset)) {
      if (isNumber(start - 1)) start--;else if (isNumber(start + 1)) start++;else return text;
    }
    let end = start;
    while (isNumber(start - 1)) start--;
    while (isNumber(end + 1)) end++;
    return text.slice(0, start) + fn(Number(text.slice(start, end + 1))) + text.slice(end + 1);
  };
  const handleKeyDown = e => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        editText(replaceTextNumer(ref.value, ref.selectionStart, num => e.key === 'ArrowUp' ? num + 1 : num - 1));
    }
  };
  return (() => {
    var _el$ = web.template(\`<textarea autocomplete=off rows=2>\`)();
    _el$.addEventListener("blur", () => {
      try {
        props.onChange?.(ref.value);
      } finally {
        ref.value = props.value;
      }
    });
    web.addEventListener(_el$, "keydown", handleKeyDown);
    var _ref$ = ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : ref = _el$;
    web.effect(_p$ => {
      var _v$ = props.style,
        _v$2 = props.placeholder;
      _p$.e = web.style(_el$, _v$, _p$.e);
      _v$2 !== _p$.t && web.setAttribute(_el$, "placeholder", _p$.t = _v$2);
      return _p$;
    }, {
      e: undefined,
      t: undefined
    });
    web.effect(() => _el$.value = props.value);
    return _el$;
  })();
};

const bindOption = (...args) => bindOption$1('translation', ...args);
const [rangeText, setRangeText] = solidJs.createSignal('');
// \u5B9E\u65F6\u66F4\u65B0\u7FFB\u8BD1\u8303\u56F4
helper.createEffectOn(translationImgs, imgs => setRangeText(helper.descRange(imgs, store.imgList.length)));
const TranslateRange = () => {
  helper.createEffectOn(rangeText, () => {
    const imgImgs = helper.extractRange(rangeText(), store.imgList.length);
    const openImgs = [...imgImgs].filter(i => {
      // \u8FC7\u6EE4\u6389\u7FFB\u8BD1\u5B8C\u6210\u548C\u7B49\u5F85\u7FFB\u8BD1\u7684\u56FE\u7247\uFF0C\u907F\u514D\u56E0\u4E3A\u8303\u56F4\u53D8\u5316\u800C\u91CD\u65B0\u53D1\u8D77\u7FFB\u8BD1
      switch (imgList()[i].translationType) {
        case 'show':
        case 'wait':
          return false;
        default:
          return true;
      }
    });
    if (openImgs.length > 0) setImgTranslationEnbale(openImgs, true);
    const closeImgs = new Set();
    for (let i = 0; i < store.imgList.length; i++) if (!imgImgs.has(i)) closeImgs.add(i);
    if (closeImgs.size > 0) setImgTranslationEnbale(closeImgs, false);
    setRangeText(helper.descRange(imgImgs, store.imgList.length));
  });
  return [web.createComponent(SettingsItem, {
    get name() {
      return helper.t('setting.translation.range');
    }
  }), web.createComponent(RangeInput, {
    get ["class"]() {
      return modules_c21c94f2$1.SettingsItem;
    },
    get placeholder() {
      return helper.t('other.page_range');
    },
    get value() {
      return rangeText();
    },
    onChange: setRangeText
  })];
};
const SettingTranslation = () => [web.createComponent(SettingsItemSelect, web.mergeProps({
  get name() {
    return helper.t('setting.translation.server');
  },
  get options() {
    return [['disable', helper.t('other.disable')], ['selfhosted', helper.t('setting.translation.server_selfhosted')], ['cotrans']];
  }
}, () => bindOption('server'))), web.createComponent(solidJs.Show, {
  get when() {
    return store.option.translation.server === 'cotrans';
  },
  get children() {
    var _el$ = web.template(\`<blockquote>\`)();
    web.effect(() => _el$.innerHTML = helper.t('setting.translation.cotrans_tip'));
    return _el$;
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return store.option.translation.server === 'selfhosted';
  },
  get children() {
    return [web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.translation.translate_all');
      },
      get value() {
        return isTranslatingAll();
      },
      onChange: translateAll
    }), web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.translation.translate_to_end');
      },
      get value() {
        return isTranslatingToEnd();
      },
      onChange: translateToEnd
    }), web.createComponent(TranslateRange, {}), (() => {
      var _el$2 = web.template(\`<hr>\`)();
      web.setStyleProperty(_el$2, "margin", "1em 0");
      return _el$2;
    })()];
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return store.option.translation.server !== 'disable';
  },
  get children() {
    return [web.createComponent(SettingsItemSelect, web.mergeProps({
      get name() {
        return helper.t('setting.translation.options.target_language');
      },
      options: [['CHS', '\u7B80\u4F53\u4E2D\u6587'], ['CHT', '\u7E41\u9AD4\u4E2D\u6587'], ['JPN', '\u65E5\u672C\u8A9E'], ['ENG', 'English'], ['KOR', '\uD55C\uAD6D\uC5B4'], ['VIN', 'Ti\u1EBFng Vi\u1EC7t'], ['CSY', '\u010De\u0161tina'], ['NLD', 'Nederlands'], ['FRA', 'fran\xE7ais'], ['DEU', 'Deutsch'], ['HUN', 'magyar nyelv'], ['ITA', 'italiano'], ['PLK', 'polski'], ['PTB', 'portugu\xEAs'], ['ROM', 'limba rom\xE2n\u0103'], ['RUS', '\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A'], ['ESP', 'espa\xF1ol'], ['TRK', 'T\xFCrk dili'], ['IND', 'Indonesia']]
    }, () => bindOption('options', 'translator', 'target_lang'))), web.createComponent(SettingsItemSelect, web.mergeProps({
      get name() {
        return helper.t('setting.translation.options.translator');
      },
      get options() {
        return translatorOptions();
      },
      onClick: updateSelfhostedOptions
    }, () => bindOption('options', 'translator', 'translator'))), web.createComponent(SettingsItemSelect, web.mergeProps({
      get name() {
        return helper.t('setting.translation.options.direction');
      },
      get options() {
        return [['auto', helper.t('setting.translation.options.direction_auto')], ['horizontal', helper.t('setting.translation.options.direction_horizontal')], ['vertical', helper.t('setting.translation.options.direction_vertical')]];
      }
    }, () => bindOption('options', 'render', 'direction'))), web.createComponent(SettingsItemSelect, web.mergeProps({
      get name() {
        return helper.t('setting.translation.options.detection_resolution');
      },
      options: [['1024', '1024px'], ['1536', '1536px'], ['2048', '2048px'], ['2560', '2560px']]
    }, () => bindOption('options', 'detector', 'detection_size'))), web.createComponent(SettingsItemSelect, web.mergeProps({
      get name() {
        return helper.t('setting.translation.options.text_detector');
      },
      options: [['default'], ['ctd', 'Comic Text Detector']]
    }, () => bindOption('options', 'detector', 'detector'))), web.createComponent(solidJs.Show, {
      get when() {
        return store.option.translation.server === 'selfhosted';
      },
      get children() {
        return [web.createComponent(SettingsItemSelect, web.mergeProps({
          get name() {
            return helper.t('setting.translation.options.inpainting_size');
          },
          options: [['516', '516px'], ['1024', '1024px'], ['2048', '2048px'], ['2560', '2560px']]
        }, () => bindOption('options', 'inpainter', 'inpainting_size'))), web.createComponent(SettingsItemSelect, web.mergeProps({
          get name() {
            return helper.t('setting.translation.options.inpainter');
          },
          options: [['default', 'Default'], ['lama_large', 'Lama Large'], ['lama_mpe', 'Lama MPE'], ['sd', 'SD'], ['none', 'None'], ['original', 'Original']]
        }, () => bindOption('options', 'inpainter', 'inpainter'))), web.createComponent(SettingsItemNumber, web.mergeProps({
          get name() {
            return helper.t('setting.translation.options.unclip_ratio');
          },
          step: 0.01
        }, () => bindOption('options', 'detector', 'unclip_ratio'))), web.createComponent(SettingsItemNumber, web.mergeProps({
          get name() {
            return helper.t('setting.translation.options.box_threshold');
          },
          step: 0.01
        }, () => bindOption('options', 'detector', 'box_threshold'))), web.createComponent(SettingsItemNumber, web.mergeProps({
          get name() {
            return helper.t('setting.translation.options.mask_dilation_offset');
          }
        }, () => bindOption('options', 'mask_dilation_offset')))];
      }
    })];
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return store.option.translation.server !== 'disable';
  },
  get children() {
    return [(() => {
      var _el$3 = web.template(\`<hr>\`)();
      web.setStyleProperty(_el$3, "margin", "1em 0");
      return _el$3;
    })(), web.createComponent(SettingsItemSwitch, web.mergeProps({
      get name() {
        return helper.t('setting.translation.options.force_retry');
      }
    }, () => bindOption('forceRetry'))), web.createComponent(SettingsItemSwitch, web.mergeProps({
      get name() {
        return helper.t('setting.translation.options.only_download_translated');
      }
    }, () => bindOption('onlyDownloadTranslated'))), web.createComponent(solidJs.Show, {
      get when() {
        return store.option.translation.server === 'selfhosted';
      },
      get children() {
        return [web.createComponent(SettingsItemSwitch, {
          get name() {
            return helper.t('setting.translation.options.local_url');
          },
          get value() {
            return store.option.translation.localUrl !== undefined;
          },
          onChange: val => {
            setOption(draftOption => {
              draftOption.translation.localUrl = val ? '' : undefined;
            });
          }
        }), web.createComponent(solidJs.Show, {
          get when() {
            return store.option.translation.localUrl !== undefined;
          },
          get children() {
            var _el$4 = web.template(\`<input type=url>\`)();
            _el$4.addEventListener("change", e => {
              setOption(draftOption => {
                // \u5220\u6389\u672B\u5C3E\u7684\u659C\u6760
                const url = e.target.value.replace(/\\/$/, '');
                draftOption.translation.localUrl = url;
              });
            });
            web.effect(() => _el$4.value = store.option.translation.localUrl);
            return _el$4;
          }
        })];
      }
    })];
  }
})];

/** \u9ED8\u8BA4\u83DC\u5355\u9879 */
const defaultSettingList = () => [[helper.t('setting.option.paragraph_dir'), () => web.createComponent(SettingsItem, {
  get name() {
    return web.memo(() => store.option.dir === 'rtl')() ? helper.t('setting.option.dir_rtl') : helper.t('setting.option.dir_ltr');
  },
  get children() {
    var _el$ = web.template(\`<button type=button>\`)();
    web.addEventListener(_el$, "click", switchDir);
    web.insert(_el$, (() => {
      var _c$ = web.memo(() => store.option.dir === 'rtl');
      return () => _c$() ? web.createComponent(MdOutlineFormatTextdirectionRToL, {}) : web.createComponent(MdOutlineFormatTextdirectionLToR, {});
    })());
    web.effect(() => web.className(_el$, modules_c21c94f2$1.SettingsItemIconButton));
    return _el$;
  }
}), true], [helper.t('setting.option.paragraph_display'), () => [web.createComponent(solidJs.Show, {
  get when() {
    return !store.option.scrollMode.enabled;
  },
  get children() {
    return web.createComponent(SettingsItemSwitch, web.mergeProps({
      get name() {
        return helper.t('setting.option.disable_auto_enlarge');
      }
    }, () => bindOption$1('disableZoom')));
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return store.option.scrollMode.enabled;
  },
  get children() {
    return [web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.option.abreast_mode');
      },
      get value() {
        return store.option.scrollMode.abreastMode;
      },
      onChange: val => {
        const jump = saveScrollProgress();
        setOption(draftOption => {
          draftOption.scrollMode.abreastMode = val;
          draftOption.scrollMode.doubleMode = false;
        });
        jump();
      }
    }), web.createComponent(SettingsItemNumber, {
      get name() {
        return helper.t('setting.option.scroll_mode_img_scale');
      },
      maxLength: 3,
      suffix: "%",
      step: 5,
      onChange: val => {
        if (!Number.isNaN(val)) zoomScrollModeImg(val / 100, true);
      },
      get value() {
        return Math.round(store.option.scrollMode.imgScale * 100);
      }
    }), web.createComponent(SettingsItemNumber, {
      get name() {
        return helper.t('setting.option.scroll_mode_img_spacing');
      },
      maxLength: 5,
      onChange: val => {
        if (Number.isNaN(val)) return;
        const newVal = helper.clamp(0, val, Number.POSITIVE_INFINITY);
        setOption(draftOption => {
          draftOption.scrollMode.spacing = newVal;
        });
      },
      get value() {
        return Math.round(store.option.scrollMode.spacing);
      }
    }), web.createComponent(solidJs.Show, {
      get when() {
        return store.option.scrollMode.abreastMode;
      },
      get children() {
        return web.createComponent(SettingsItemNumber, {
          get name() {
            return helper.t('setting.option.abreast_duplicate');
          },
          maxLength: 3,
          suffix: "%",
          step: 5,
          onChange: val => {
            if (Number.isNaN(val)) return;
            setOption(draftOption => {
              const newVal = helper.clamp(0, val / 100, 0.95);
              draftOption.scrollMode.abreastDuplicate = newVal;
            });
          },
          get value() {
            return Math.round(store.option.scrollMode.abreastDuplicate * 100);
          }
        });
      }
    }), web.createComponent(solidJs.Show, {
      get when() {
        return !store.option.scrollMode.abreastMode;
      },
      get children() {
        return web.createComponent(SettingsItemSwitch, {
          get name() {
            return helper.t('setting.option.fit_to_width');
          },
          get value() {
            return store.option.scrollMode.fitToWidth;
          },
          onChange: switchFitToWidth
        });
      }
    })];
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return !store.option.scrollMode.enabled;
  },
  get children() {
    return web.createComponent(SettingsItemNumber, {
      get name() {
        return helper.t('setting.option.zoom');
      },
      maxLength: 3,
      suffix: "%",
      step: 5,
      onChange: val => Number.isNaN(val) || zoom(val),
      get value() {
        return Math.round(store.option.zoom.ratio);
      }
    });
  }
})], true], [helper.t('setting.option.paragraph_appearance'), () => [web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.dark_mode');
  }
}, () => bindOption$1('darkMode'))), web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.dark_mode_auto');
  }
}, () => bindOption$1('autoDarkMode'))), web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.show_comments');
  }
}, () => bindOption$1('showComment'))), web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.autoHiddenMouse');
  }
}, () => bindOption$1('autoHiddenMouse'))), web.createComponent(SettingsItem, {
  get name() {
    return helper.t('setting.option.background_color');
  },
  get children() {
    var _el$2 = web.template(\`<input type=color style=margin-right:.4em>\`)();
    web.addEventListener(_el$2, "input", helper.throttle(e => {
      if (!e.target.value) return;
      setOption(draftOption => {
        // \u5728\u62C9\u5230\u7EAF\u9ED1\u6216\u7EAF\u767D\u65F6\u6539\u56DE\u521D\u59CB\u503C
        draftOption.customBackground = e.target.value === '#000000' || e.target.value === '#ffffff' ? undefined : e.target.value;
        if (draftOption.customBackground) draftOption.darkMode = helper.needDarkMode(draftOption.customBackground);
      });
    }, 20));
    web.setStyleProperty(_el$2, "width", "2em");
    web.effect(() => _el$2.value = store.option.customBackground ?? (store.option.darkMode ? '#000000' : '#ffffff'));
    return _el$2;
  }
}), web.createComponent(SettingsItemSelect, {
  get name() {
    return helper.t('setting.language');
  },
  options: [['zh', '\u4E2D\u6587'], ['en', 'English'], ['ru', '\u0420\u0443\u0441\u0441\u043A\u0438\u0439']],
  get value() {
    return helper.lang();
  },
  onChange: helper.setLang
})]], [helper.t('setting.option.paragraph_scrollbar'), () => [web.createComponent(SettingsItemSelect, web.mergeProps({
  get name() {
    return helper.t('setting.option.scrollbar_position');
  },
  get options() {
    return [['auto', helper.t('other.auto')], ['right', helper.t('setting.option.scrollbar_position_right')], ['top', helper.t('setting.option.scrollbar_position_top')], ['bottom', helper.t('setting.option.scrollbar_position_bottom')], ['hidden', helper.t('setting.option.scrollbar_position_hidden')]];
  }
}, () => bindOption$1('scrollbar', 'position'))), web.createComponent(SettingsShowItem, {
  get when() {
    return store.option.scrollbar.position !== 'hidden';
  },
  get children() {
    return [web.createComponent(solidJs.Show, {
      get when() {
        return !store.isMobile;
      },
      get children() {
        return web.createComponent(SettingsItemSwitch, web.mergeProps({
          get name() {
            return helper.t('setting.option.scrollbar_auto_hidden');
          }
        }, () => bindOption$1('scrollbar', 'autoHidden')));
      }
    }), web.createComponent(SettingsItemSwitch, web.mergeProps({
      get name() {
        return helper.t('setting.option.scrollbar_show_img_status');
      }
    }, () => bindOption$1('scrollbar', 'showImgStatus'))), web.createComponent(solidJs.Show, {
      get when() {
        return store.option.scrollMode.enabled;
      },
      get children() {
        return web.createComponent(SettingsItemSwitch, web.mergeProps({
          get name() {
            return helper.t('setting.option.scrollbar_easy_scroll');
          }
        }, () => bindOption$1('scrollbar', 'easyScroll')));
      }
    })];
  }
})]], [helper.t('setting.option.click_page_turn_enabled'), () => [web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('other.enabled');
  }
}, () => bindOption$1('clickPageTurn', 'enabled'))), web.createComponent(SettingsShowItem, {
  get when() {
    return store.option.clickPageTurn.enabled;
  },
  get children() {
    return [web.createComponent(SettingsItemSelect, web.mergeProps({
      get name() {
        return helper.t('setting.option.click_page_turn_area');
      },
      get options() {
        return Object.keys(areaArrayMap).map(key => [key, helper.t(\`touch_area.type.\${key}\`)]);
      }
    }, () => bindOption$1('clickPageTurn', 'area'))), web.createComponent(SettingsItemSwitch, web.mergeProps({
      get name() {
        return helper.t('setting.option.click_page_turn_swap_area');
      }
    }, () => bindOption$1('clickPageTurn', 'reverse')))];
  }
}), web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.show_clickable_area');
  },
  get value() {
    return store.show.touchArea;
  },
  onChange: () => setState('show', 'touchArea', !store.show.touchArea)
})]], [helper.t('button.auto_scroll'), () => [web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('other.enabled');
  }
}, () => bindOption$1('autoScroll', 'enabled'))), web.createComponent(SettingsItemNumber, {
  get name() {
    return helper.t('other.interval');
  },
  maxLength: 3,
  suffix: "s",
  step: 1,
  onChange: val => {
    if (!Number.isNaN(val)) setState('option', 'autoScroll', 'interval', val * 1000);
  },
  get value() {
    return store.option.autoScroll.interval / 1000;
  }
}), web.createComponent(SettingsItemNumber, {
  get name() {
    return helper.t('other.distance');
  },
  maxLength: 3,
  suffix: "px",
  step: 20,
  onChange: val => {
    if (!Number.isNaN(val)) setState('option', 'autoScroll', 'distance', val);
  },
  get value() {
    return store.option.autoScroll.distance;
  }
}), web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.auto_scroll_trigger_end');
  }
}, () => bindOption$1('autoScroll', 'triggerEnd')))]], [helper.t('setting.option.img_recognition'), () => [web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('other.enabled');
  },
  get value() {
    return store.option.imgRecognition.enabled;
  },
  onChange: () => switchImgRecognition('enabled')
}), web.createComponent(solidJs.Show, {
  when: typeof Worker === 'undefined',
  get children() {
    var _el$3 = web.template(\`<blockquote><p>\`)(),
      _el$4 = _el$3.firstChild;
    web.effect(() => _el$4.innerHTML = helper.t('setting.option.img_recognition_warn'));
    return _el$3;
  }
}), web.createComponent(solidJs.Show, {
  get when() {
    return !store.supportWorker;
  },
  get children() {
    var _el$5 = web.template(\`<blockquote><p>\`)(),
      _el$6 = _el$5.firstChild;
    web.effect(() => _el$6.innerHTML = helper.t('setting.option.img_recognition_warn_2'));
    return _el$5;
  }
}), web.createComponent(SettingsShowItem, {
  get when() {
    return store.option.imgRecognition.enabled;
  },
  get children() {
    return [web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.option.img_recognition_background');
      },
      get value() {
        return store.option.imgRecognition.background;
      },
      onChange: () => switchImgRecognition('background')
    }), web.createComponent(SettingsItemSwitch, {
      get name() {
        return helper.t('setting.option.img_recognition_pageFill');
      },
      get value() {
        return store.option.imgRecognition.pageFill;
      },
      onChange: () => switchImgRecognition('pageFill')
    }), web.createComponent(solidJs.Show, {
      get when() {
        return !store.isMobile;
      },
      get children() {
        return web.createComponent(SettingsItemSwitch, {
          get name() {
            return helper.t('upscale.title');
          },
          get value() {
            return store.option.imgRecognition.upscale;
          },
          get disabled() {
            return !store.supportUpscaleImage;
          },
          onChange: () => switchImgRecognition('upscale')
        });
      }
    })];
  }
})]], [helper.t('setting.option.paragraph_translation'), SettingTranslation, () => store.option.translation.server !== 'disable'], [helper.t('other.hotkeys'), SettingHotkeysBlock], [helper.t('other.other'), () => [web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.first_page_fill');
  }
}, () => bindOption$1('firstPageFill'))), web.createComponent(SettingsItemSwitch, {
  get name() {
    return helper.t('setting.option.auto_switch_page_mode');
  },
  get value() {
    return store.option.autoSwitchPageMode;
  },
  onChange: val => {
    setOption((draftOption, state) => {
      draftOption.autoSwitchPageMode = val;
      state.option.pageNum = val ? 0 : autoPageNum();
    });
  }
}), web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.swap_page_turn_key');
  }
}, () => bindOption$1('swapPageTurnKey'))), web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.autoFullscreen');
  }
}, () => bindOption$1('autoFullscreen'))), web.createComponent(SettingsItemSelect, web.mergeProps({
  get name() {
    return helper.t('setting.option.scroll_end');
  },
  get options() {
    return [['none', helper.t('other.none')], ['exit', helper.t('other.exit')], ['auto', helper.t('setting.option.scroll_end_auto')]];
  }
}, () => bindOption$1('scroolEnd'))), web.createComponent(SettingsItemSwitch, web.mergeProps({
  get name() {
    return helper.t('setting.option.always_load_all_img');
  }
}, () => bindOption$1('alwaysLoadAllImg'))), web.createComponent(SettingsItemNumber, {
  get name() {
    return helper.t('setting.option.preload_page_num');
  },
  maxLength: 5,
  onChange: val => {
    if (Number.isNaN(val)) return;
    setOption(draftOption => {
      draftOption.preloadPageNum = helper.clamp(0, val, 99_999);
    });
  },
  get value() {
    return store.option.preloadPageNum;
  }
})]]];

const SettingBlockSubtitle = props => (() => {
  var _el$ = web.template(\`<div>\`)();
  web.addEventListener(_el$, "click", props.onClick);
  web.insert(_el$, () => props.children);
  web.effect(() => web.className(_el$, modules_c21c94f2$1.SettingBlockSubtitle));
  return _el$;
})();

/** \u83DC\u5355\u9762\u677F */
const SettingPanel = () => (() => {
  var _el$2 = web.template(\`<div>\`)();
  web.addEventListener(_el$2, "click", stopPropagation);
  web.addEventListener(_el$2, "scroll", stopPropagation);
  _el$2.addEventListener("wheel", e => refs.settingPanel.scrollHeight > refs.settingPanel.clientHeight && e.stopPropagation());
  var _ref$ = bindRef('settingPanel');
  typeof _ref$ === "function" && web.use(_ref$, _el$2);
  web.insert(_el$2, web.createComponent(solidJs.For, {
    get each() {
      return store.prop.editSettingList(defaultSettingList());
    },
    children: ([name, SettingItem, initShow], i) => {
      const [show, setShwo] = solidJs.createSignal(Boolean(initShow));
      if (typeof initShow === 'function') helper.createEffectOn(initShow, val => setShwo(Boolean(val)));
      return [web.memo(() => web.memo(() => !!i())() ? web.template(\`<hr>\`)() : null), (() => {
        var _el$3 = web.template(\`<div><div>\`)(),
          _el$4 = _el$3.firstChild;
        web.insert(_el$3, web.createComponent(SettingBlockSubtitle, {
          onClick: () => setShwo(prev => !prev),
          get children() {
            return [name, web.memo(() => show() ? null : '\u2026')];
          }
        }), _el$4);
        web.insert(_el$4, web.createComponent(SettingItem, {}));
        web.effect(_p$ => {
          var _v$3 = modules_c21c94f2$1.SettingBlock,
            _v$4 = show(),
            _v$5 = modules_c21c94f2$1.SettingBlockBody;
          _v$3 !== _p$.e && web.className(_el$3, _p$.e = _v$3);
          _v$4 !== _p$.t && web.setAttribute(_el$3, "data-show", _p$.t = _v$4);
          _v$5 !== _p$.a && web.className(_el$4, _p$.a = _v$5);
          return _p$;
        }, {
          e: undefined,
          t: undefined,
          a: undefined
        });
        return _el$3;
      })()];
    }
  }));
  web.effect(_p$ => {
    var _v$ = \`\${modules_c21c94f2$1.SettingPanel} \${modules_c21c94f2$1.beautifyScrollbar}\`,
      _v$2 = helper.lang() === 'zh' ? '15em' : '20em';
    _v$ !== _p$.e && web.className(_el$2, _p$.e = _v$);
    _v$2 !== _p$.t && web.setStyleProperty(_el$2, "width", _p$.t = _v$2);
    return _p$;
  }, {
    e: undefined,
    t: undefined
  });
  return _el$2;
})();

const ZoomButton = () => web.createComponent(IconButton, {
  get tip() {
    return web.memo(() => store.option.zoom.ratio === 100)() ? helper.t('button.zoom_in') : helper.t('button.zoom_out');
  },
  get enabled() {
    return store.option.zoom.ratio !== 100;
  },
  onClick: () => doubleClickZoom(),
  get children() {
    return web.createComponent(solidJs.Show, {
      get when() {
        return store.option.zoom.ratio === 100;
      },
      get fallback() {
        return web.createComponent(MdZoomOut, {});
      },
      get children() {
        return web.createComponent(MdZoomIn, {});
      }
    });
  }
});

/** \u5DE5\u5177\u680F\u7684\u9ED8\u8BA4\u6309\u94AE\u5217\u8868 */
const defaultButtonList = [
// \u5355\u53CC\u9875\u6A21\u5F0F
() => web.createComponent(IconButton, {
  get tip() {
    return web.memo(() => !!isOnePageMode())() ? helper.t('button.page_mode_single') : helper.t('button.page_mode_double');
  },
  get hidden() {
    return store.isMobile;
  },
  onClick: switchOnePageMode,
  get children() {
    return web.memo(() => !!isOnePageMode())() ? web.createComponent(MdLooksOne, {}) : web.createComponent(MdLooksTwo, {});
  }
}),
// \u5377\u8F74\u6A21\u5F0F
() => web.createComponent(IconButton, {
  get tip() {
    return helper.t('button.scroll_mode');
  },
  get enabled() {
    return store.option.scrollMode.enabled;
  },
  onClick: switchScrollMode,
  get children() {
    return web.createComponent(MdViewDay, {});
  }
}),
// \u9875\u9762\u586B\u5145
() => web.createComponent(IconButton, {
  get tip() {
    return helper.t('button.page_fill');
  },
  get enabled() {
    return Boolean(store.fillEffect[nowFillIndex()]);
  },
  get hidden() {
    return isOnePageMode();
  },
  onClick: switchFillEffect,
  get children() {
    return web.createComponent(MdQueue, {});
  }
}),
// \u7F51\u683C\u6A21\u5F0F
() => web.createComponent(IconButton, {
  get tip() {
    return helper.t('button.grid_mode');
  },
  get enabled() {
    return store.gridMode;
  },
  onClick: switchGridMode,
  get children() {
    return web.createComponent(MdGrid, {});
  }
}),
// \u7FFB\u8BD1
() => web.createComponent(solidJs.Show, {
  get when() {
    return store.option.translation.server !== 'disable';
  },
  get children() {
    return [web.template(\`<hr>\`)(), web.createComponent(IconButton, {
      get tip() {
        return web.memo(() => !!isTranslatingImage())() ? helper.t('button.close_current_page_translation') : helper.t('button.translate_current_page');
      },
      get enabled() {
        return isTranslatingImage();
      },
      onClick: translateCurrent,
      get children() {
        return web.createComponent(MdTranslate, {});
      }
    }), web.createComponent(IconButton, {
      get tip() {
        return helper.t('setting.translation.translate_to_end');
      },
      get enabled() {
        return isTranslatingToEnd();
      },
      get hidden() {
        return store.option.translation.server !== 'selfhosted';
      },
      onClick: translateToEnd,
      get children() {
        return web.createComponent(MdLowPriority, {});
      }
    })];
  }
}),
// \u81EA\u52A8\u6EDA\u52A8
() => web.createComponent(solidJs.Show, {
  get when() {
    return store.option.autoScroll.enabled;
  },
  get children() {
    return [web.template(\`<hr>\`)(), web.createComponent(AutoScrollButton, {})];
  }
}), () => web.template(\`<hr>\`)(),
// \u653E\u5927\u6A21\u5F0F
() => web.createComponent(solidJs.Show, {
  get when() {
    return store.option.scrollMode.enabled;
  },
  get fallback() {
    return web.createComponent(ZoomButton, {});
  },
  get children() {
    return [web.createComponent(IconButton, {
      get tip() {
        return helper.t('button.zoom_in');
      },
      get enabled() {
        return store.option.scrollMode.imgScale >= 3;
      },
      onClick: () => zoomScrollModeImg(0.05),
      get children() {
        return web.createComponent(MdZoomIn, {});
      }
    }), web.createComponent(IconButton, {
      get tip() {
        return helper.t('button.zoom_out');
      },
      get enabled() {
        return store.option.scrollMode.imgScale <= 0.1;
      },
      onClick: () => zoomScrollModeImg(-0.05),
      get children() {
        return web.createComponent(MdZoomOut, {});
      }
    })];
  }
}),
// \u5168\u5C4F
() => web.createComponent(IconButton, {
  get tip() {
    return web.memo(() => !!store.fullscreen)() ? helper.t('button.fullscreen_exit') : helper.t('button.fullscreen');
  },
  get hidden() {
    return !refs.root.requestFullscreen;
  },
  onClick: switchFullscreen,
  get children() {
    return web.memo(() => !!store.fullscreen)() ? web.createComponent(MdFullscreenExit, {}) : web.createComponent(MdFullscreen, {});
  }
}),
// \u8BBE\u7F6E
() => {
  const [showPanel, setShowPanel] = solidJs.createSignal(false);
  const handleClick = () => {
    const _showPanel = !showPanel();
    setState('show', 'toolbar', _showPanel);
    setShowPanel(_showPanel);
  };
  helper.createEffectOn(() => store.show.toolbar, showToolbar => showToolbar || setShowPanel(false));
  const Popper = web.createComponent(solidJs.Show, {
    get when() {
      return showPanel();
    },
    get children() {
      return [web.createComponent(SettingPanel, {}), (() => {
        var _el$4 = web.template(\`<div role=button tabindex=-1>\`)();
        _el$4.addEventListener("wheel", e => {
          if (isScrollMode()) refs.mangaBox.scrollBy({
            top: e.deltaY
          });
        });
        web.addEventListener(_el$4, "click", handleClick);
        web.effect(() => web.className(_el$4, modules_c21c94f2$1.closeCover));
        return _el$4;
      })()];
    }
  });
  return web.createComponent(IconButton, {
    get tip() {
      return helper.t('other.setting');
    },
    get enabled() {
      return showPanel();
    },
    get showTip() {
      return showPanel();
    },
    onClick: handleClick,
    get popperClassName() {
      return web.memo(() => !!showPanel())() && modules_c21c94f2$1.SettingPanelPopper;
    },
    get popper() {
      return showPanel() && Popper;
    },
    get children() {
      return web.createComponent(MdSettings, {});
    }
  });
}];


/** \u5DE6\u4FA7\u5DE5\u5177\u680F */
const Toolbar = () => {
  helper.createEffectOn(() => store.show.toolbar, show => show || focus());
  return (() => {
    var _el$ = web.template(\`<div role=toolbar><div><div>\`)(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild;
    web.addEventListener(_el$2, "click", focus);
    web.insert(_el$2, web.createComponent(solidJs.For, {
      get each() {
        return store.prop.editButtonList(defaultButtonList);
      },
      children: ButtonItem => web.createComponent(ButtonItem, {})
    }), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.toolbar,
        _v$2 = helper.boolDataVal(store.show.toolbar),
        _v$3 = helper.boolDataVal(store.isMobile && store.gridMode),
        _v$4 = store.isDragMode ? 'none' : undefined,
        _v$5 = modules_c21c94f2$1.toolbarPanel,
        _v$6 = modules_c21c94f2$1.toolbarBg;
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-close", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setStyleProperty(_el$, "pointer-events", _p$.o = _v$4);
      _v$5 !== _p$.i && web.className(_el$2, _p$.i = _v$5);
      _v$6 !== _p$.n && web.className(_el$3, _p$.n = _v$6);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined
    });
    return _el$;
  })();
};

// TODO: \u4F7F\u7528 light-dark()
// https://developer.mozilla.org/docs/Web/CSS/color_value/light-dark
/** \u6DF1\u8272\u6A21\u5F0F */
const darkStyle = {
  '--hover-bg-color': '#FFF3',
  '--hover-bg-color-enable': '#FFFa',
  '--switch': '#BDBDBD',
  '--switch-bg': '#6E6E6E',
  '--page-bg': '#303030',
  '--secondary': '#7A909A',
  '--secondary-bg': '#556065',
  '--text': 'white',
  '--text-secondary': '#FFFC',
  '--text-bg': '#121212',
  'color-scheme': 'dark'
};

/** \u6D45\u8272\u6A21\u5F0F */
const lightStyle = {
  '--hover-bg-color': '#0001',
  '--hover-bg-color-enable': '#0009',
  '--switch': '#FAFAFA',
  '--switch-bg': '#9C9C9C',
  '--page-bg': 'white',
  '--secondary': '#7A909A',
  '--secondary-bg': '#BAC5CA',
  '--text': 'black',
  '--text-secondary': '#0008',
  '--text-bg': '#FAFAFA',
  'color-scheme': 'light'
};
const createSvgIcon = (fill, d) => \`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='\${fill}' viewBox='0 0 24 24'%3E%3Cpath d='\${d}'/%3E%3C/svg%3E")\`;
const MdImageNotSupported = \`m21.9 21.9-8.49-8.49-9.82-9.82L2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31 1.42-1.41zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3H5zm16 .17L5.83 3H19c1.1 0 2 .9 2 2v13.17z\`;
const MdCloudDownload = \`M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4h3z\`;
const MdPhoto = \`M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z\`;
const useCssVar = () => {
  const svg = () => {
    const fill = store.option.darkMode ? 'rgb(156,156,156)' : 'rgb(110,110,110)';
    return {
      '--md-image-not-supported': \`\${createSvgIcon(fill, MdImageNotSupported)}\`,
      '--md-cloud-download': \`\${createSvgIcon(fill, MdCloudDownload)}\`,
      '--md-photo': \`\${createSvgIcon(fill, MdPhoto)}\`
    };
  };
  const i18n = () => ({
    '--i18n-touch-area-prev': \`"\${helper.t('touch_area.prev')}"\`,
    '--i18n-touch-area-next': \`"\${helper.t('touch_area.next')}"\`,
    '--i18n-touch-area-menu': \`"\${helper.t('touch_area.menu')}"\`
  });
  useStyleMemo(\`.\${modules_c21c94f2$1.root}\`, [{
    '--bg': () => \`\${store.option.customBackground ?? (store.option.darkMode ? '#000' : '#fff')}\`,
    '--scroll-mode-img-scale': () => store.option.scrollMode.imgScale,
    '--scroll-mode-spacing': () => store.option.scrollMode.spacing
  }, () => store.option.darkMode ? darkStyle : lightStyle, svg, i18n]);
};

const useInit = props => {
  watchDomSize('rootSize', refs.root);
  const updateOption = state => {
    state.option = props.option ? helper.assign(state.defaultOption, props.option) : state.defaultOption;
  };
  const bindDebounce = key => state => {
    state.prop[key] = props[key] ? helper.debounce(props[key]) : undefined;
  };
  const watchProps = {
    option: updateOption,
    onLoading: bindDebounce('onLoading'),
    onOptionChange: bindDebounce('onOptionChange'),
    onHotkeysChange: bindDebounce('onHotkeysChange'),
    onShowImgsChange: bindDebounce('onShowImgsChange'),
    defaultOption(state) {
      state.defaultOption = helper.assign(defaultOption(), props.defaultOption);
      updateOption(state);
    },
    fillEffect(state) {
      state.fillEffect = props.fillEffect ?? {
        '-1': true
      };
      updatePageData(state);
    },
    onExit(state) {
      state.prop.onExit = isEnd => {
        playAnimation(refs.exit);
        props.onExit?.(Boolean(isEnd));
        setState(draftState => {
          if (isEnd) draftState.activePageIndex = 0;
          draftState.show.endPage = undefined;
        });
        if (document.fullscreenElement) document.exitFullscreen();
      };
    },
    onPrev(state) {
      state.prop.onPrev = props.onPrev ? helper.throttle(() => {
        playAnimation(refs.prev);
        props.onPrev?.();
      }, 1000) : undefined;
    },
    onNext(state) {
      state.prop.onNext = props.onNext ? helper.throttle(() => {
        playAnimation(refs.next);
        props.onNext?.();
      }, 1000) : undefined;
    },
    onImgError(state) {
      state.prop.onImgError = props.onImgError;
    },
    editButtonList(state) {
      state.prop.editButtonList = props.editButtonList ?? (list => list);
    },
    editSettingList(state) {
      state.prop.editSettingList = props.editSettingList ?? (list => list);
    },
    commentList(state) {
      state.commentList = props.commentList;
    },
    title(state) {
      state.title = props.title ?? '';
    }
  };
  for (const [key, fn] of Object.entries(watchProps)) {
    solidJs.createEffect(solidJs.on(() => props[key], () => setState(fn)));
  }
  solidJs.createEffect(() => {
    setState(state => {
      state.hotkeys = {
        ...structuredClone(defaultHotkeys()),
        ...props.hotkeys
      };
    });
  });
  const handleImgList = () => {
    setState(state => {
      const newImgMap = {};
      const newImgList = []; // \u56E0\u4E3A\u4F1A\u6709\u76F8\u540C url \u7684\u56FE\u7247\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7528 Set
      for (const img of store$1.unwrap(props.imgList)) {
        // \u4F7F\u7528\u76F8\u5BF9\u534F\u8BAE\u8DEF\u5F84\uFF0C\u9632\u6B62 Mixed Content \u62A5\u9519
        const url = (typeof img === 'object' ? img.src : img)?.replace(/^http:/, '') ?? '';
        newImgList.push(url);
        if (Reflect.has(newImgMap, url)) continue;
        if (Reflect.has(state.imgMap, url)) {
          newImgMap[url] = state.imgMap[url];
          continue;
        }
        const imgItem = typeof img === 'string' ? {
          src: url
        } : img;
        imgItem.loadType ??= 'wait';
        if (imgItem.width && imgItem.height) {
          imgItem.size = getImgDisplaySize(state, imgItem);
          imgItem.type = getImgType(imgItem);
        }
        imgItem.size ??= placeholderSize();
        if (!imgItem.blobUrl && url.startsWith('blob:')) imgItem.blobUrl = imgItem.src;
        newImgMap[url] = imgItem;
      }

      /** \u4FEE\u6539\u524D\u7684\u5F53\u524D\u663E\u793A\u56FE\u7247 */
      const oldActiveImg = state.pageList[state.activePageIndex]?.map(i => state.imgList?.[i]) ?? [];

      /** \u662F\u5426\u9700\u8981\u91CD\u7F6E\u9875\u9762\u586B\u5145 */
      let needResetFillEffect = false;
      const fillEffectList = Object.keys(state.fillEffect).map(Number);
      for (const pageIndex of fillEffectList) {
        if (pageIndex === -1) continue;
        if (state.imgList[pageIndex] === newImgList[pageIndex]) continue;
        needResetFillEffect = true;
        break;
      }
      const oldImgList = new Set(state.imgList);
      if (oldImgList.size === 0 && newImgList.length > 0) {
        resumeReadProgress(state);
        updateSelfhostedOptions(true);
      }

      /** \u88AB\u5220\u9664\u7684\u56FE\u7247 */
      const deleteList = [...oldImgList].filter(url => !newImgList.includes(url));
      for (const url of deleteList) if (state.imgMap[url].blobUrl && state.imgMap[url].blobUrl !== url) URL.revokeObjectURL(state.imgMap[url].blobUrl);

      /** \u5220\u9664\u56FE\u7247\u6570 */
      const deleteNum = deleteList.length;

      /** \u4F20\u5165\u7684\u662F\u5426\u662F\u65B0\u6F2B\u753B */
      const isNew = deleteNum >= oldImgList.size * 0.8; // \u5220\u63898\u6210\u56FE\u5C31\u7B97\u662F\u65B0\u6F2B\u753B

      /** \u662F\u5426\u9700\u8981\u66F4\u65B0\u9875\u9762 */
      const needUpdatePageData = needResetFillEffect || state.imgList.length !== newImgList.length || deleteNum > 0;
      state.imgMap = newImgMap;
      state.imgList = [...newImgList];
      state.prop.onLoading?.(state.imgList.map(url => state.imgMap[url]));
      if (isNew) state.show.endPage = undefined;
      if (isNew || needResetFillEffect) state.fillEffect = props.fillEffect ?? {
        '-1': true
      };
      if (isNew || needUpdatePageData) {
        updatePageData(state);

        // \u5F53\u524D\u4F4D\u4E8E\u6700\u540E\u4E00\u9875\u65F6\u6700\u540E\u4E00\u9875\u88AB\u5220\u7684\u5904\u7406
        if (state.activePageIndex >= state.pageList.length) state.activePageIndex = state.pageList.length - 1;
        updateShowRange(state);
      }
      if (isNew || state.pageList.length === 0) {
        resetImgState(state);
        state.activePageIndex = 0;
        scrollTo(0);
        return;
      }

      // \u5C3D\u91CF\u4F7F\u5F53\u524D\u663E\u793A\u7684\u56FE\u7247\u5728\u4FEE\u6539\u540E\u4F9D\u7136\u4E0D\u53D8
      oldActiveImg.some(url => {
        // \u8DF3\u8FC7\u586B\u5145\u9875\u548C\u5DF2\u88AB\u5220\u9664\u7684\u56FE\u7247
        if (!url || newImgList.includes(url)) return false;
        const newPageIndex = state.pageList.findIndex(page => page.some(index => state.imgList?.[index] === url));
        if (newPageIndex === -1) return false;
        state.activePageIndex = newPageIndex;
        return true;
      });

      // \u5982\u679C\u5DF2\u7ECF\u7FFB\u5230\u4E86\u6700\u540E\u4E00\u9875\uFF0C\u4E14\u6700\u540E\u4E00\u9875\u7684\u56FE\u7247\u88AB\u5220\u6389\u4E86\uFF0C\u90A3\u5C31\u4FDD\u6301\u5728\u672B\u9875\u663E\u793A
      if (state.activePageIndex > state.pageList.length - 1) state.activePageIndex = state.pageList.length - 1;
    });
  };

  // \u5904\u7406 imgList \u53C2\u6570\u7684\u521D\u59CB\u5316\u548C\u4FEE\u6539
  helper.createEffectOn(helper.createRootMemo(() => props.imgList), helper.throttle(handleImgList, 500));

  // \u901A\u8FC7\u624B\u52A8\u521B\u5EFA\u4E00\u4E2A Worker \u6765\u68C0\u6D4B\u662F\u5426\u652F\u6301 Worker\uFF0C\u907F\u514D\u56E0\u4E3A CSP \u9650\u5236\u800C\u51FA\u9519
  setTimeout(() => {
    const codeUrl = URL.createObjectURL(new Blob(['self.close();'], {
      type: 'text/javascript'
    }));
    setTimeout(URL.revokeObjectURL, 0, codeUrl);
    setState('supportWorker', Boolean(new Worker(codeUrl)));
  }, 0);

  // \u66F4\u65B0 fullscreen \u53C2\u6570
  refs.root.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) return setState('fullscreen', false);
    if (document.fullscreenElement.id === 'comicRead' || document.fullscreenElement.classList.contains(modules_c21c94f2$1.root)) setState('fullscreen', true);
  });
  for (const eventName of ['keypress', 'keyup', 'touchstart', 'touchmove', 'touchend']) refs.root.addEventListener(eventName, stopPropagation, {
    capture: true
  });
  focus();
};

solidJs.enableScheduling();
/** \u6F2B\u753B\u7EC4\u4EF6 */
const Manga = props => {
  useStyle(css$1);
  useCssVar();
  solidJs.onMount(() => useInit(props));
  solidJs.createEffect(() => props.show && focus());
  return (() => {
    var _el$ = web.template(\`<div>\`)();
    web.addEventListener(_el$, "wheel", handleWheel);
    web.addEventListener(_el$, "mousedown", handleMouseDown);
    web.addEventListener(_el$, "click", stopPropagation);
    var _ref$ = bindRef('root');
    typeof _ref$ === "function" && web.use(_ref$, _el$);
    _el$.addEventListener("keydown", handleKeyDown, true);
    _el$.addEventListener("keyup", handleHoldKey.onKeyUp, true);
    web.insert(_el$, web.createComponent(ComicImgFlow, {}), null);
    web.insert(_el$, web.createComponent(TouchArea, {}), null);
    web.insert(_el$, web.createComponent(Scrollbar, {}), null);
    web.insert(_el$, web.createComponent(EndPage, {}), null);
    web.insert(_el$, web.createComponent(Toolbar, {}), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2$1.root,
        _v$2 = {
          [modules_c21c94f2$1.hidden]: props.show === false,
          [props.class ?? '']: Boolean(props.class),
          ...props.classList
        },
        _v$3 = helper.boolDataVal(store.isMobile),
        _v$4 = helper.boolDataVal(store.option.scrollMode.enabled),
        _v$5 = helper.boolDataVal(store.gridMode);
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _p$.t = web.classList(_el$, _v$2, _p$.t);
      _v$3 !== _p$.a && web.setAttribute(_el$, "data-mobile", _p$.a = _v$3);
      _v$4 !== _p$.o && web.setAttribute(_el$, "data-scroll-mode", _p$.o = _v$4);
      _v$5 !== _p$.i && web.setAttribute(_el$, "data-grid-mode", _p$.i = _v$5);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$;
  })();
};

exports.Manga = Manga;
exports.SettingBlockSubtitle = SettingBlockSubtitle;
exports.SettingHotkeys = SettingHotkeys;
exports.SettingsItem = SettingsItem;
exports.SettingsItemNumber = SettingsItemNumber;
exports.SettingsItemSwitch = SettingsItemSwitch;
exports._setAbreastScrollFill = _setAbreastScrollFill;
exports.abreastArea = abreastArea;
exports.abreastColumnWidth = abreastColumnWidth;
exports.abreastContentWidth = abreastContentWidth;
exports.abreastScrollFill = abreastScrollFill;
exports.abreastScrollWidth = abreastScrollWidth;
exports.abreastShowColumn = abreastShowColumn;
exports.activeImgIndex = activeImgIndex;
exports.activePage = activePage;
exports.autoPageNum = autoPageNum;
exports.bindOption = bindOption$1;
exports.bindRef = bindRef;
exports.bindScrollTop = bindScrollTop;
exports.bound = bound;
exports.checkImgSize = checkImgSize;
exports.closeScrollLock = closeScrollLock;
exports.constantScroll = constantScroll;
exports.contentHeight = contentHeight;
exports.defaultHotkeys = defaultHotkeys;
exports.doubleClickZoom = doubleClickZoom;
exports.doubleScrollLineHeight = doubleScrollLineHeight;
exports.downloadImg = downloadImg;
exports.downloadImgHeaders = downloadImgHeaders;
exports.findFillIndex = findFillIndex;
exports.focus = focus;
exports.getImg = getImg;
exports.getImgDisplaySize = getImgDisplaySize;
exports.getImgEle = getImgEle;
exports.getImgIndexs = getImgIndexs;
exports.getImgTip = getImgTip;
exports.getImgType = getImgType;
exports.getPageTip = getPageTip;
exports.getTurnPageDir = getTurnPageDir;
exports.handleClick = handleClick;
exports.handleComicData = handleComicData;
exports.handleHoldKey = handleHoldKey;
exports.handleImgError = handleImgError;
exports.handleImgLoaded = handleImgLoaded;
exports.handleKeyDown = handleKeyDown;
exports.handleMangaFlowDrag = handleMangaFlowDrag;
exports.handleMouseDown = handleMouseDown;
exports.handlePinchZoom = handlePinchZoom;
exports.handleScrollModeDrag = handleScrollModeDrag;
exports.handleScrollbarSlider = handleScrollbarSlider;
exports.handleTrackpadWheel = handleTrackpadWheel;
exports.handleWheel = handleWheel;
exports.handleZoomDrag = handleZoomDrag;
exports.hotkeysMap = hotkeysMap;
exports.imgAreaStyle = imgAreaStyle;
exports.imgList = imgList;
exports.imgPageMap = imgPageMap;
exports.imgShowState = imgShowState;
exports.imgTopList = imgTopList;
exports.isAbreastMode = isAbreastMode;
exports.isBottom = isBottom;
exports.isDoubleMode = isDoubleMode;
exports.isDrag = isDrag;
exports.isEnableBg = isEnableBg;
exports.isOnePageMode = isOnePageMode;
exports.isScrollMode = isScrollMode;
exports.isTop = isTop;
exports.isTranslatingAll = isTranslatingAll;
exports.isTranslatingImage = isTranslatingImage;
exports.isTranslatingToEnd = isTranslatingToEnd;
exports.isUpscale = isUpscale;
exports.jumpToImg = jumpToImg;
exports.loadingImgList = loadingImgList;
exports.nowFillIndex = nowFillIndex;
exports.pageNum = pageNum;
exports.placeholderSize = placeholderSize;
exports.preloadNum = preloadNum;
exports.refs = refs;
exports.renderImgList = renderImgList;
exports.resetImgState = resetImgState;
exports.resetPage = resetPage;
exports.resetUI = resetUI;
exports.resumeReadProgress = resumeReadProgress;
exports.saveReadProgress = saveReadProgress;
exports.saveScrollProgress = saveScrollProgress;
exports.scrollDomLength = scrollDomLength;
exports.scrollLength = scrollLength;
exports.scrollModTop = scrollModTop;
exports.scrollModeScrollPage = scrollModeScrollPage;
exports.scrollPercentage = scrollPercentage;
exports.scrollPosition = scrollPosition;
exports.scrollProgress = scrollProgress;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.scrollViewImg = scrollViewImg;
exports.selfhostedOptions = selfhostedOptions;
exports.selfhostedTranslation = selfhostedTranslation;
exports.setAbreastScrollFill = setAbreastScrollFill;
exports.setDefaultHotkeys = setDefaultHotkeys;
exports.setImgTranslationEnbale = setImgTranslationEnbale;
exports.setIsDrag = setIsDrag;
exports.setOption = setOption;
exports.setSelfOptions = setSelfOptions;
exports.setState = setState;
exports.showImgList = showImgList;
exports.sliderHeight = sliderHeight;
exports.sliderMidpoint = sliderMidpoint;
exports.sliderTop = sliderTop;
exports.store = store;
exports.switchAutoScroll = switchAutoScroll;
exports.switchDir = switchDir;
exports.switchFillEffect = switchFillEffect;
exports.switchFitToWidth = switchFitToWidth;
exports.switchFullscreen = switchFullscreen;
exports.switchGridMode = switchGridMode;
exports.switchImgRecognition = switchImgRecognition;
exports.switchOnePageMode = switchOnePageMode;
exports.switchScrollMode = switchScrollMode;
exports.touches = touches;
exports.translateAll = translateAll;
exports.translateCurrent = translateCurrent;
exports.translateToEnd = translateToEnd;
exports.translationAll = translationAll;
exports.translationImage = translationImage;
exports.translationImgs = translationImgs;
exports.translatorOptions = translatorOptions;
exports.turnPage = turnPage;
exports.turnPageAnimation = turnPageAnimation;
exports.turnPageFn = turnPageFn;
exports.updateImgLoadType = updateImgLoadType;
exports.updateImgSize = updateImgSize;
exports.updateImgType = updateImgType;
exports.updatePageData = updatePageData;
exports.updateSelfhostedOptions = updateSelfhostedOptions;
exports.updateShowRange = updateShowRange;
exports.upscaleImage = upscaleImage;
exports.watchDomSize = watchDomSize;
exports.zoom = zoom;
exports.zoomScrollModeImg = zoomScrollModeImg;
`;break;case"components/IconButton":o=`
const web = require('solid-js/web');
const solidJs = require('solid-js');
const helper = require('helper');

var css = ".iconButtonItem____hash_base64_5_{align-items:center;display:flex;position:relative}.iconButton____hash_base64_5_{align-items:center;background-color:initial;border-radius:9999px;border-style:none;color:var(--text,#fff);cursor:pointer;display:flex;font-size:1.5em;height:1.5em;justify-content:center;margin:.1em;outline:none;padding:0;width:1.5em}.iconButton____hash_base64_5_:focus,.iconButton____hash_base64_5_:hover{background-color:var(--hover-bg-color,#fff3)}.iconButton____hash_base64_5_.enabled____hash_base64_5_:not(.disable____hash_base64_5_){background-color:var(--text,#fff);color:var(--text-bg,#121212)}.iconButton____hash_base64_5_.enabled____hash_base64_5_:not(.disable____hash_base64_5_):focus,.iconButton____hash_base64_5_.enabled____hash_base64_5_:not(.disable____hash_base64_5_):hover{background-color:var(--hover-bg-color-enable,#fffa)}.iconButton____hash_base64_5_.disable____hash_base64_5_{background-color:unset;cursor:not-allowed;opacity:.5}.iconButton____hash_base64_5_>svg{width:1em}.iconButtonPopper____hash_base64_5_{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:flex;font-size:.8em;opacity:0;padding:.4em .5em;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);-webkit-user-select:none;user-select:none;white-space:nowrap}.iconButtonPopper____hash_base64_5_[data-placement=right]{left:calc(100% + 1.5em)}.iconButtonPopper____hash_base64_5_[data-placement=right]:before{border-right-color:var(--switch-bg,#6e6e6e);border-right-width:.5em;right:calc(100% + .5em)}.iconButtonPopper____hash_base64_5_[data-placement=left]{right:calc(100% + 1.5em)}.iconButtonPopper____hash_base64_5_[data-placement=left]:before{border-left-color:var(--switch-bg,#6e6e6e);border-left-width:.5em;left:calc(100% + .5em)}.iconButtonPopper____hash_base64_5_:before{background-color:initial;border:.4em solid #0000;content:\\"\\";pointer-events:none;position:absolute;transition:opacity .15s}.iconButtonItem____hash_base64_5_:is(:hover,:focus,[data-show=true]) .iconButtonPopper____hash_base64_5_{opacity:1}.hidden____hash_base64_5_{display:none}";
var modules_c21c94f2 = {"iconButtonItem":"iconButtonItem____hash_base64_5_","iconButton":"iconButton____hash_base64_5_","enabled":"enabled____hash_base64_5_","disable":"disable____hash_base64_5_","iconButtonPopper":"iconButtonPopper____hash_base64_5_","hidden":"hidden____hash_base64_5_"};

/** \u56FE\u6807\u6309\u94AE */
const IconButton = _props => {
  const props = solidJs.mergeProps({
    placement: 'right'
  }, _props);
  let buttonRef; // oxlint-disable-line no-unassigned-vars
  const handleClick = e => {
    if (props.disable) return;
    props.onClick?.(e);
    // \u5728\u6BCF\u6B21\u70B9\u51FB\u540E\u53D6\u6D88\u7126\u70B9
    buttonRef?.blur();
  };
  return (() => {
    var _el$ = web.template(\`<div><button type=button tabindex=0>\`)(),
      _el$2 = _el$.firstChild;
    web.use(ref => helper.useStyle(css, ref), _el$);
    web.addEventListener(_el$2, "click", handleClick);
    var _ref$ = buttonRef;
    typeof _ref$ === "function" ? web.use(_ref$, _el$2) : buttonRef = _el$2;
    web.insert(_el$2, () => props.children);
    web.insert(_el$, (() => {
      var _c$ = web.memo(() => !!(props.popper || props.tip));
      return () => _c$() ? (() => {
        var _el$3 = web.template(\`<div>\`)();
        web.insert(_el$3, () => props.popper || props.tip);
        web.effect(_p$ => {
          var _v$7 = [modules_c21c94f2.iconButtonPopper, props.popperClassName].join(' '),
            _v$8 = props.placement;
          _v$7 !== _p$.e && web.className(_el$3, _p$.e = _v$7);
          _v$8 !== _p$.t && web.setAttribute(_el$3, "data-placement", _p$.t = _v$8);
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$3;
      })() : null;
    })(), null);
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2.iconButtonItem,
        _v$2 = props.showTip,
        _v$3 = props.tip,
        _v$4 = modules_c21c94f2.iconButton,
        _v$5 = props.style,
        _v$6 = {
          [modules_c21c94f2.hidden]: props.hidden,
          [modules_c21c94f2.enabled]: props.enabled,
          [modules_c21c94f2.disable]: props.disable
        };
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$2);
      _v$3 !== _p$.a && web.setAttribute(_el$2, "aria-label", _p$.a = _v$3);
      _v$4 !== _p$.o && web.className(_el$2, _p$.o = _v$4);
      _p$.i = web.style(_el$2, _v$5, _p$.i);
      _p$.n = web.classList(_el$2, _v$6, _p$.n);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined
    });
    return _el$;
  })();
};

exports.IconButton = IconButton;
`;break;case"components/Fab":o=`
const web = require('solid-js/web');
const solidJs = require('solid-js');
const helper = require('helper');

const MdMenuBook = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

var css = ".fabRoot____hash_base64_5_{font-size:1.1em;touch-action:none;transition:transform .2s}.fabRoot____hash_base64_5_[data-show=false]{pointer-events:none}.fabRoot____hash_base64_5_[data-show=false]>button{transform:scale(0)}.fabRoot____hash_base64_5_[data-trans=true]{opacity:.8}.fabRoot____hash_base64_5_[data-trans=true]:focus,.fabRoot____hash_base64_5_[data-trans=true]:focus-visible,.fabRoot____hash_base64_5_[data-trans=true]:hover{opacity:1}.fab____hash_base64_5_{align-items:center;background-color:var(--fab,#607d8b);border:none;border-radius:100%;box-shadow:0 3px 5px -1px #0003,0 6px 10px 0 #00000024,0 1px 18px 0 #0000001f;color:#fff;cursor:pointer;display:flex;font-size:1em;height:3.6em;justify-content:center;transform:scale(1);transition:transform .2s;width:3.6em}.fab____hash_base64_5_>svg{font-size:1.5em;width:1em}.fab____hash_base64_5_:focus,.fab____hash_base64_5_:focus-visible{box-shadow:0 3px 5px -1px #00000080,0 6px 10px 0 #00000057,0 1px 18px 0 #00000052;outline:none}.progress____hash_base64_5_{color:#b0bec5;display:inline-block;height:100%;position:absolute;transform:rotate(-90deg);transition:transform .3s cubic-bezier(.4,0,.2,1) 0s;width:100%}.progress____hash_base64_5_>svg{stroke:currentcolor;stroke-dasharray:290%;stroke-dashoffset:100%;stroke-linecap:round;transition:stroke-dashoffset .3s cubic-bezier(.4,0,.2,1) 0s}.progress____hash_base64_5_:hover{color:#cfd8dc}.progress____hash_base64_5_[aria-valuenow=\\"1\\"]{opacity:0;transition:opacity .2s .15s}.popper____hash_base64_5_{align-items:center;background-color:#303030;border-radius:.3em;color:#fff;display:flex;font-size:.8em;opacity:0;padding:.4em .5em;pointer-events:none;position:absolute;right:calc(100% + 1.5em);top:50%;transform:translateY(-50%) scale(0);transform-origin:right;transition:transform .23s,opacity .15s;transition-delay:var(--hide-delay);white-space:nowrap}.fabRoot____hash_base64_5_[data-placement=right] .popper____hash_base64_5_{left:calc(100% + 1.5em);right:unset;transform-origin:left}.fabRoot____hash_base64_5_:is(:hover,[data-focus=true]) .popper____hash_base64_5_{opacity:1;transform:translateY(-50%) scale(1);transition-delay:0s}.speedDial____hash_base64_5_{align-items:center;bottom:0;display:flex;flex-direction:column-reverse;font-size:1.1em;padding-bottom:120%;pointer-events:none;position:absolute;touch-action:none;width:100%;z-index:-1}.speedDial____hash_base64_5_[data-placement=bottom]{bottom:unset;flex-direction:column;padding-bottom:unset;padding-top:120%;top:0}.speedDialItem____hash_base64_5_{margin:.1em 0;opacity:0;transform:scale(0);transition-delay:var(--hide-delay);transition-duration:.23s;transition-property:transform,opacity}.fabRoot____hash_base64_5_:is(:hover:not([data-show=false]),[data-focus=true]) .speedDial____hash_base64_5_,.speedDial____hash_base64_5_:hover{pointer-events:all}:is(.fabRoot____hash_base64_5_:is(:hover:not([data-show=false]),[data-focus=true]) .speedDial____hash_base64_5_)>.speedDialItem____hash_base64_5_{opacity:unset;transform:unset;transition-delay:var(--show-delay)}.backdrop____hash_base64_5_{background:#000;height:100vh;left:0;opacity:0;pointer-events:none;position:fixed;top:0;transition:opacity .5s;width:100vw}.fabRoot____hash_base64_5_[data-focus=true] .backdrop____hash_base64_5_{pointer-events:unset}:is(.fabRoot____hash_base64_5_:hover:not([data-show=false]),.fabRoot____hash_base64_5_[data-focus=true],.speedDial____hash_base64_5_:hover) .backdrop____hash_base64_5_{opacity:.4}";
var modules_c21c94f2 = {"fabRoot":"fabRoot____hash_base64_5_","fab":"fab____hash_base64_5_","progress":"progress____hash_base64_5_","popper":"popper____hash_base64_5_","speedDial":"speedDial____hash_base64_5_","speedDialItem":"speedDialItem____hash_base64_5_","backdrop":"backdrop____hash_base64_5_"};

/**
 * Fab \u6309\u94AE
 */
const Fab = _props => {
  const props = solidJs.mergeProps({
    progress: 0,
    initialShow: true,
    autoTrans: false
  }, _props);

  // \u4E0A\u6B21\u6EDA\u52A8\u4F4D\u7F6E
  let lastY = window.scrollY;
  const [show, setShow] = solidJs.createSignal(props.initialShow);

  // \u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6
  const handleScroll = helper.throttle(e => {
    // \u8DF3\u8FC7\u975E\u7528\u6237\u64CD\u4F5C\u7684\u6EDA\u52A8
    if (!e.isTrusted) return;
    if (window.scrollY === lastY) return;
    setShow(
    // \u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u663E\u793A
    window.scrollY + window.innerHeight >= document.body.scrollHeight ||
    // \u5411\u4E0A\u6EDA\u52A8\u65F6\u663E\u793A\uFF0C\u53CD\u4E4B\u9690\u85CF
    window.scrollY - lastY < 0);
    lastY = window.scrollY;
  }, 200);
  solidJs.onMount(() => window.addEventListener('scroll', handleScroll));
  solidJs.onCleanup(() => window.removeEventListener('scroll', handleScroll));

  // \u5C06 forceShow \u7684\u53D8\u5316\u540C\u6B65\u5230 show \u4E0A
  solidJs.createEffect(() => props.show && setShow(props.show));
  return (() => {
    var _el$ = web.template(\`<div><button type=button tabindex=-1><span role=progressbar><svg viewBox="22 22 44 44"><circle cx=44 cy=44 r=20.2 fill=none stroke-width=3.6>\`)(),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.firstChild;
    web.use(ref => helper.useStyle(css, ref), _el$);
    web.addEventListener(_el$2, "click", () => props.onClick?.());
    web.use(ref => props.ref?.(ref), _el$2);
    web.insert(_el$2, () => props.children ?? web.createComponent(MdMenuBook, {}), _el$3);
    web.insert(_el$2, (() => {
      var _c$ = web.memo(() => !!props.tip);
      return () => _c$() ? (() => {
        var _el$7 = web.template(\`<div>\`)();
        web.insert(_el$7, () => props.tip);
        web.effect(() => web.className(_el$7, modules_c21c94f2.popper));
        return _el$7;
      })() : null;
    })(), null);
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return props.speedDial?.length;
      },
      get children() {
        var _el$5 = web.template(\`<div><div>\`)(),
          _el$6 = _el$5.firstChild;
        web.addEventListener(_el$6, "click", () => props.onBackdropClick?.());
        web.insert(_el$5, web.createComponent(solidJs.For, {
          get each() {
            return props.speedDial;
          },
          children: (SpeedDialItem, i) => (() => {
            var _el$8 = web.template(\`<div>\`)();
            web.insert(_el$8, web.createComponent(SpeedDialItem, {}));
            web.effect(_p$ => {
              var _v$12 = modules_c21c94f2.speedDialItem,
                _v$13 = \`\${(i() + 1) * 30}ms\`,
                _v$14 = \`\${(props.speedDial.length - 1 - i()) * 50}ms\`,
                _v$15 = i() * 30;
              _v$12 !== _p$.e && web.className(_el$8, _p$.e = _v$12);
              _v$13 !== _p$.t && web.setStyleProperty(_el$8, "--show-delay", _p$.t = _v$13);
              _v$14 !== _p$.a && web.setStyleProperty(_el$8, "--hide-delay", _p$.a = _v$14);
              _v$15 !== _p$.o && web.setAttribute(_el$8, "data-i", _p$.o = _v$15);
              return _p$;
            }, {
              e: undefined,
              t: undefined,
              a: undefined,
              o: undefined
            });
            return _el$8;
          })()
        }), null);
        web.effect(_p$ => {
          var _v$ = modules_c21c94f2.speedDial,
            _v$2 = props.speedDialPlacement,
            _v$3 = modules_c21c94f2.backdrop;
          _v$ !== _p$.e && web.className(_el$5, _p$.e = _v$);
          _v$2 !== _p$.t && web.setAttribute(_el$5, "data-placement", _p$.t = _v$2);
          _v$3 !== _p$.a && web.className(_el$6, _p$.a = _v$3);
          return _p$;
        }, {
          e: undefined,
          t: undefined,
          a: undefined
        });
        return _el$5;
      }
    }), null);
    web.effect(_p$ => {
      var _v$4 = modules_c21c94f2.fabRoot,
        _v$5 = props.show ?? show(),
        _v$6 = props.autoTrans,
        _v$7 = props.focus,
        _v$8 = props.placement,
        _v$9 = {
          ...props.style,
          '--hide-delay': \`\${(props.speedDial?.length ?? 0) * 50}ms\`
        },
        _v$0 = modules_c21c94f2.fab,
        _v$1 = modules_c21c94f2.progress,
        _v$10 = props.progress,
        _v$11 = \`\${(1 - props.progress) * 290}%\`;
      _v$4 !== _p$.e && web.className(_el$, _p$.e = _v$4);
      _v$5 !== _p$.t && web.setAttribute(_el$, "data-show", _p$.t = _v$5);
      _v$6 !== _p$.a && web.setAttribute(_el$, "data-trans", _p$.a = _v$6);
      _v$7 !== _p$.o && web.setAttribute(_el$, "data-focus", _p$.o = _v$7);
      _v$8 !== _p$.i && web.setAttribute(_el$, "data-placement", _p$.i = _v$8);
      _p$.n = web.style(_el$, _v$9, _p$.n);
      _v$0 !== _p$.s && web.className(_el$2, _p$.s = _v$0);
      _v$1 !== _p$.h && web.className(_el$3, _p$.h = _v$1);
      _v$10 !== _p$.r && web.setAttribute(_el$3, "aria-valuenow", _p$.r = _v$10);
      _v$11 !== _p$.d && web.setStyleProperty(_el$4, "stroke-dashoffset", _p$.d = _v$11);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined,
      d: undefined
    });
    return _el$;
  })();
};

exports.Fab = Fab;
`;break;case"components/Toast":o=`
const helper = require('helper');
const web = require('solid-js/web');
const solidJs = require('solid-js');

const {
  store,
  setState
} = helper.useStore({
  ref: null,
  list: [],
  map: {}
});
const creatId = () => {
  let id = \`\${Date.now()}\`;
  while (Reflect.has(store.map, id)) id += '_';
  return id;
};
const dismiss = id => Reflect.has(store.map, id) && setState('map', id, 'exit', true);

var css = ".root____hash_base64_5_{align-items:flex-end;bottom:0;display:flex;flex-direction:column;font-size:16px;pointer-events:none;position:fixed;right:0;z-index:2147483647}.item____hash_base64_5_{align-items:center;animation:bounceInRight____hash_base64_5_ .5s 1;background:#fff;border-radius:4px;box-shadow:0 1px 10px 0 #0000001a,0 2px 15px 0 #0000000d;color:#000;cursor:pointer;display:flex;margin:1em;max-width:min(30em,100vw);overflow:hidden;padding:.8em 1em;pointer-events:auto;position:relative;width:fit-content}.item____hash_base64_5_>svg{color:var(--theme);margin-right:.5em;width:1.5em}.item____hash_base64_5_[data-exit]{animation:bounceOutRight____hash_base64_5_ .5s 1}.schedule____hash_base64_5_{background-color:var(--theme);bottom:0;height:.2em;left:0;position:absolute;transform-origin:left;width:100%}.item____hash_base64_5_[data-schedule] .schedule____hash_base64_5_{transition:transform .1s}.item____hash_base64_5_:not([data-schedule]) .schedule____hash_base64_5_{animation:schedule____hash_base64_5_ linear 1 forwards}:is(.item____hash_base64_5_:hover,.item____hash_base64_5_[data-schedule],.root____hash_base64_5_[data-paused]) .schedule____hash_base64_5_{animation-play-state:paused}.msg____hash_base64_5_{line-height:1.4em;overflow-wrap:anywhere;text-align:start;white-space:break-spaces;width:fit-content}.msg____hash_base64_5_ h2{margin:0}.msg____hash_base64_5_ h3{margin:.7em 0}.msg____hash_base64_5_ ul{margin:0;text-align:left}.msg____hash_base64_5_ button{background-color:#eee;border:none;border-radius:.4em;cursor:pointer;font-size:inherit;margin:0 .5em;outline:none;padding:.2em .6em}:is(.msg____hash_base64_5_ button):hover{background:#e0e0e0}p{margin:0}@keyframes schedule____hash_base64_5_{0%{transform:scaleX(1)}to{transform:scaleX(0)}}@keyframes bounceInRight____hash_base64_5_{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}@keyframes bounceOutRight____hash_base64_5_{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}";
var modules_c21c94f2 = {"root":"root____hash_base64_5_","item":"item____hash_base64_5_","schedule":"schedule____hash_base64_5_","msg":"msg____hash_base64_5_"};

const MdCheckCircle = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdError = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdInfo = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdWarning = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const iconMap = {
  info: MdInfo,
  success: MdCheckCircle,
  warn: MdWarning,
  error: MdError
};
const colorMap = {
  info: '#3a97d7',
  success: '#23bb35',
  warn: '#f0c53e',
  error: '#e45042',
  custom: '#1f2936'
};

/** \u5220\u9664 toast */
const dismissToast = id => setState(state => {
  state.map[id].onDismiss?.({
    ...state.map[id]
  });
  const i = state.list.indexOf(id);
  if (i !== -1) state.list.splice(i, 1);
  Reflect.deleteProperty(state.map, id);
});

/** \u91CD\u7F6E toast \u7684 update \u5C5E\u6027 */
const resetToastUpdate = id => setState('map', id, 'update', undefined);
const ToastItem = props => {
  /** \u662F\u5426\u8981\u663E\u793A\u8FDB\u5EA6 */
  const showSchedule = solidJs.createMemo(() => props.duration === Number.POSITIVE_INFINITY && props.schedule ? true : undefined);
  const _dismiss = e => {
    e.stopPropagation();
    if (showSchedule() && 'animationName' in e) return;
    dismiss(props.id);
  };

  // \u5728\u9000\u51FA\u52A8\u753B\u7ED3\u675F\u540E\u624D\u771F\u7684\u5220\u9664
  const handleAnimationEnd = () => {
    if (!props.exit) return;
    dismissToast(props.id);
  };
  let scheduleRef; // oxlint-disable-line no-unassigned-vars
  solidJs.createEffect(() => {
    if (!props.update) return;
    resetToastUpdate(props.id);
    if (!scheduleRef) return;
    for (const animation of scheduleRef.getAnimations()) animation.currentTime = 0;
  });
  const handleClick = e => {
    props.onClick?.();
    _dismiss(e);
  };
  return (() => {
    var _el$ = web.template(\`<div><div>\`)(),
      _el$2 = _el$.firstChild;
    _el$.addEventListener("animationend", handleAnimationEnd);
    web.addEventListener(_el$, "click", handleClick);
    web.insert(_el$, web.createComponent(web.Dynamic, {
      get component() {
        return iconMap[props.type];
      }
    }), _el$2);
    web.insert(_el$2, (() => {
      var _c$ = web.memo(() => typeof props.msg === 'string');
      return () => _c$() ? props.msg : web.createComponent(props.msg, {});
    })());
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return props.duration !== Number.POSITIVE_INFINITY || props.schedule !== undefined;
      },
      get children() {
        var _el$3 = web.template(\`<div>\`)();
        _el$3.addEventListener("animationend", _dismiss);
        var _ref$ = scheduleRef;
        typeof _ref$ === "function" ? web.use(_ref$, _el$3) : scheduleRef = _el$3;
        web.effect(_p$ => {
          var _v$ = modules_c21c94f2.schedule,
            _v$2 = \`\${props.duration}ms\`,
            _v$3 = showSchedule() ? \`scaleX(\${props.schedule})\` : undefined;
          _v$ !== _p$.e && web.className(_el$3, _p$.e = _v$);
          _v$2 !== _p$.t && web.setStyleProperty(_el$3, "animation-duration", _p$.t = _v$2);
          _v$3 !== _p$.a && web.setStyleProperty(_el$3, "transform", _p$.a = _v$3);
          return _p$;
        }, {
          e: undefined,
          t: undefined,
          a: undefined
        });
        return _el$3;
      }
    }), null);
    web.effect(_p$ => {
      var _v$4 = modules_c21c94f2.item,
        _v$5 = colorMap[props.type],
        _v$6 = showSchedule(),
        _v$7 = props.exit,
        _v$8 = modules_c21c94f2.msg;
      _v$4 !== _p$.e && web.className(_el$, _p$.e = _v$4);
      _v$5 !== _p$.t && web.setStyleProperty(_el$, "--theme", _p$.t = _v$5);
      _v$6 !== _p$.a && web.setAttribute(_el$, "data-schedule", _p$.a = _v$6);
      _v$7 !== _p$.o && web.setAttribute(_el$, "data-exit", _p$.o = _v$7);
      _v$8 !== _p$.i && web.className(_el$2, _p$.i = _v$8);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$;
  })();
};

const Toaster = () => {
  const [visible, setVisible] = solidJs.createSignal(document.visibilityState === 'visible');
  solidJs.onMount(() => {
    helper.useStyle(css, store.ref);
    const handleVisibilityChange = () => {
      setVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    solidJs.onCleanup(() => document.removeEventListener('visibilitychange', handleVisibilityChange));
  });
  return (() => {
    var _el$ = web.template(\`<div>\`)();
    web.use(ref => setState('ref', ref), _el$);
    web.insert(_el$, web.createComponent(solidJs.For, {
      get each() {
        return store.list;
      },
      children: id => web.createComponent(ToastItem, web.mergeProps(() => store.map[id]))
    }));
    web.effect(_p$ => {
      var _v$ = modules_c21c94f2.root,
        _v$2 = visible() ? undefined : '';
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.setAttribute(_el$, "data-paused", _p$.t = _v$2);
      return _p$;
    }, {
      e: undefined,
      t: undefined
    });
    return _el$;
  })();
};
let dom;
const init = () => {
  if (dom || store.ref) return;
  dom = helper.mountComponents('toast', () => web.createComponent(Toaster, {}));
  dom.style.setProperty('z-index', '2147483647', 'important');
};

const toast = (msg, options) => {
  if (!msg) return;
  init();
  const id = options?.id ?? (typeof msg === 'string' ? msg : creatId());
  setState(state => {
    if (Reflect.has(state.map, id)) {
      Object.assign(state.map[id], {
        msg,
        ...options,
        update: true
      });
      return;
    }
    state.map[id] = {
      id,
      type: 'info',
      duration: 3000,
      msg,
      ...options
    };
    state.list.push(id);
  });

  /** \u5F39\u7A97\u540E\u8BB0\u5F55\u4E00\u4E0B */
  let fn = helper.log;
  switch (options?.type) {
    case 'warn':
      fn = helper.log.warn;
      break;
    case 'error':
      fn = helper.log.error;
      break;
  }
  fn('Toast:', msg);
  if (options?.throw && typeof msg === 'string') throw new Error(msg);
};
toast.dismiss = dismiss;
toast.set = (id, options) => {
  if (!Reflect.has(store.map, id)) return;
  setState(state => Object.assign(state.map[id], options));
};
toast.success = (msg, options) => toast(msg, {
  ...options,
  exit: undefined,
  type: 'success'
});
toast.warn = (msg, options) => toast(msg, {
  ...options,
  exit: undefined,
  type: 'warn'
});
toast.error = (msg, options) => toast(msg, {
  ...options,
  exit: undefined,
  type: 'error'
});

exports.Toaster = Toaster;
exports.toast = toast;
`;break;case"userscript/dmzjApi":o=`
const solidJs = require('solid-js');
const store = require('solid-js/store');
const dmzjDecrypt = require('dmzjDecrypt');
const helper = require('helper');
const main = require('main');

/** \u6839\u636E\u6F2B\u753B id \u548C\u7AE0\u8282 id \u83B7\u53D6\u7AE0\u8282\u6570\u636E */
const getChapterInfo = async (comicId, chapterId) => {
  const res = await main.request(\`https://m.dmzj.com/chapinfo/\${comicId}/\${chapterId}.html\`, {
    responseType: 'json',
    errorText: '\u83B7\u53D6\u7AE0\u8282\u6570\u636E\u5931\u8D25'
  });
  return res.response;
};

/** \u6839\u636E\u6F2B\u753B id \u548C\u7AE0\u8282 id \u83B7\u53D6\u7AE0\u8282\u8BC4\u8BBA */
const getViewpoint = async (comicId, chapterId) => {
  try {
    const res = await main.request(\`http://v3api.dmzj.com/viewPoint/0/\${comicId}/\${chapterId}.json\`, {
      responseType: 'json',
      errorText: '\u83B7\u53D6\u7AE0\u8282\u8BC4\u8BBA\u5931\u8D25'
    });

    // \u8FD8\u6709\u53E6\u4E00\u4E2A api
    // https://manhua.dmzj.com/tpi/api/viewpoint/getViewpoint?type=0&type_id=\${comicId}&chapter_id=\${chapterId}&more=1

    return res.response.map(({
      content,
      num
    }) => \`\${content} [+\${num}]\`);
  } catch {
    return [];
  }
};
const getComicDetail_base = async comicId => {
  const res = await main.request(\`https://api.dmzj.com/dynamic/comicinfo/\${comicId}.json\`, {
    responseType: 'json'
  });
  const {
    info: {
      last_updatetime,
      title
    },
    list
  } = res.response.data;
  return {
    title,
    last_updatetime,
    last_update_chapter_id: undefined,
    chapters: [{
      name: '\u8FDE\u8F7D',
      list: list.map(({
        id,
        chapter_name,
        updatetime
      }) => ({
        id,
        title: chapter_name,
        updatetime
      }))
    }]
  };
};
const getComicDetail_v4Api = async comicId => {
  const res = await main.request(\`https://v4api.idmzj.com/comic/detail/\${comicId}?uid=2665531&disable_level=1\`);
  const {
    comicInfo: {
      last_update_chapter_id,
      last_updatetime,
      chapters,
      title
    }
  } = dmzjDecrypt(res.responseText);
  for (const chapter of Object.values(chapters)) chapter.data.sort((a, b) => a.chapter_order - b.chapter_order);
  return {
    title,
    last_updatetime,
    last_update_chapter_id,
    chapters: chapters.map(({
      data,
      title: name
    }) => ({
      name,
      list: data.map(({
        chapter_id,
        chapter_title,
        updatetime
      }) => ({
        id: chapter_id,
        title: chapter_title,
        updatetime
      }))
    }))
  };
};
const getComicDetail_traversal = async (comicId, draftData) => {
  let nextId = draftData.last_update_chapter_id;
  if (!nextId) {
    helper.log.warn('last_update_chapter_id \u4E3A\u7A7A\uFF0C\u65E0\u6CD5\u901A\u8FC7\u904D\u5386\u83B7\u53D6\u7AE0\u8282');
    return;
  }
  draftData.chapters[0] = {
    name: '\u8FDE\u8F7D',
    list: []
  };
  main.toast.warn('\u6B63\u5728\u901A\u8FC7\u904D\u5386\u83B7\u53D6\u6240\u6709\u7AE0\u8282\uFF0C\u8017\u65F6\u53EF\u80FD\u8F83\u957F', {
    id: 'traversalTip',
    duration: Number.POSITIVE_INFINITY
  });
  while (nextId) {
    try {
      const {
        chapter_name,
        updatetime,
        prev_chap_id
      } = await getChapterInfo(comicId, nextId);
      draftData.chapters[0].list.push({
        id: nextId,
        title: chapter_name,
        updatetime
      });
      nextId = prev_chap_id;
    } catch {
      nextId = undefined;
    }
  }
  main.toast.dismiss('traversalTip');
};

/** \u8FD4\u56DE\u53EF\u53D8 store \u7C7B\u578B\u7684\u6F2B\u753B\u6570\u636E */
const useComicDetail = comicId => {
  const data = store.createMutable({});
  const apiFn = [getComicDetail_v4Api, getComicDetail_base, getComicDetail_traversal];
  solidJs.onMount(async () => {
    for (const api of apiFn) {
      try {
        Object.assign(data, await api(comicId, data));
        if (data.chapters?.some(chapter => chapter.list.length)) return;
      } catch {}
    }
    main.toast.error('\u6F2B\u753B\u6570\u636E\u83B7\u53D6\u5931\u8D25', {
      duration: Number.POSITIVE_INFINITY
    });
  });
  return data;
};

/** \u6839\u636E\u6F2B\u753B\u62FC\u97F3\u7B80\u79F0\u627E\u5230\u5BF9\u5E94\u7684 id */
const getComicId = async py => {
  const res = await main.request(\`https://manhua.dmzj.com/api/v1/comic2/comic/detail?\${new URLSearchParams({
    channel: 'pc',
    app_name: 'comic',
    version: '1.0.0',
    timestamp: \`\${Date.now()}\`,
    uid: '',
    comic_py: py
  }).toString()}\`, {
    responseType: 'json'
  });
  return res.response.data?.comicInfo?.id;
};

exports.getChapterInfo = getChapterInfo;
exports.getComicId = getComicId;
exports.getViewpoint = getViewpoint;
exports.useComicDetail = useComicDetail;
`;break;case"userscript/detectAd":o=`
const Comlink = require('comlink');
const helper = require('helper');
const main = require('main');
const worker = require('worker/detectAd');

const getAdPage = async (list, isAdPage, adList) => {
  let i = list.length - 1;
  let normalNum = 0;
  // \u53EA\u68C0\u67E5\u6700\u540E\u5341\u5F20
  for (; i >= list.length - 10; i--) {
    // \u5F00\u5934\u80AF\u5B9A\u4E0D\u4F1A\u662F\u5E7F\u544A
    if (i <= 2) break;
    if (adList.has(i)) continue;
    const item = list[i];
    if (!item) break;
    if (await isAdPage(item)) adList.add(i);
    // \u627E\u5230\u8FDE\u7EED\u4E09\u5F20\u6B63\u5E38\u6F2B\u753B\u9875\u540E\u4E2D\u65AD
    else if (normalNum >= 2) break;else normalNum += 1;
  }
  let adNum = 0;
  for (i = Math.min(...adList); i < list.length; i++) {
    if (adList.has(i)) {
      adNum += 1;
      continue;
    }

    // \u8FDE\u7EED\u4E24\u5F20\u5E7F\u544A\u540E\u9762\u7684\u80AF\u5B9A\u4E5F\u90FD\u662F\u5E7F\u544A
    if (adNum >= 2) adList.add(i);
    // \u5939\u5728\u4E24\u5F20\u5E7F\u544A\u4E2D\u95F4\u7684\u80AF\u5B9A\u4E5F\u662F\u5E7F\u544A
    else if (adList.has(i - 1) && adList.has(i + 1)) adList.add(i);else adNum = 0;
  }
  return adList;
};
const imgToCanvas = async img => {
  if (typeof img !== 'string') {
    await helper.waitImgLoad(img);
    try {
      const canvas = new OffscreenCanvas(img.width, img.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      // \u6CA1\u88AB CORS \u6C61\u67D3\u5C31\u76F4\u63A5\u4F7F\u7528
      if (ctx.getImageData(0, 0, 1, 1)) {
        const imgBitmap = canvas.transferToImageBitmap();
        return Comlink.transfer(imgBitmap, [imgBitmap]);
      }
    } catch {}
  }
  const url = typeof img === 'string' ? img : img.src;
  const res = await main.request(url, {
    responseType: 'blob',
    fetch: false
  });
  const imgBitmap = await createImageBitmap(res.response);
  return Comlink.transfer(imgBitmap, [imgBitmap]);
};

/** \u901A\u8FC7\u6587\u4EF6\u540D\u5224\u65AD\u662F\u5426\u662F\u5E7F\u544A */
const getAdPageByFileName = (fileNameList, adList) => getAdPage(fileNameList, fileName => /^z+/i.test(fileName), adList);
const isAdImg = imgBitmap => {
  initWorker();
  return worker.isAdImg(Comlink.transfer(imgBitmap, [imgBitmap]));
};

/** \u901A\u8FC7\u56FE\u7247\u5185\u5BB9\u5224\u65AD\u662F\u5426\u662F\u5E7F\u544A */
const getAdPageByContent = (imgList, adList) => getAdPage(imgList, async img => isAdImg(await imgToCanvas(img)), adList);
const initWorker = helper.onec(() => {
  const mainFn = {
    log: helper.log
  };
  worker.setMainFn(Comlink.proxy(mainFn), Object.keys(mainFn));
});

exports.getAdPageByContent = getAdPageByContent;
exports.getAdPageByFileName = getAdPageByFileName;
exports.isAdImg = isAdImg;
`;break;case"worker/detectAd":o=`
const jsQR = require('jsqr');

const mainFn = {};
const setMainFn = (helper, keys) => {
  for (const name of keys) Reflect.set(mainFn, name, (...args) => Reflect.apply(helper[name], helper, args));
};

/** \u8BA1\u7B97 rgb \u7684\u7070\u5EA6 */
const toGray = (r, g, b) => Math.round(0.299 * r + 0.587 * g + 0.114 * b);

// jsQR \u6700\u4E3A\u7B80\u6D01\uFF0C\u4F46\u4E0D\u652F\u6301\u5305\u542B\u591A\u4E2A\u4E8C\u7EF4\u7801\u7684\u56FE\u7247
// https://github.com/cozmo/jsQR/issues/24
//
// ZXing \u53EF\u4EE5\u626B\u63CF\u5305\u542B\u591A\u4E2A\u4E8C\u7EF4\u7801\u7684\u56FE\u7247\uFF0C\u4F46\u56E0\u4E3A\u540C\u65F6\u652F\u6301\u591A\u79CD\u7F16\u7801\uFF0C
// \u5305\u542B\u4E86\u5F88\u591A\u6839\u672C\u4E0D\u9700\u8981\u7684\u4EE3\u7801\uFF0C\u7528\u5728\u8FD9\u91CC\u611F\u89C9\u592A\u725B\u5200\u6740\u9E21\u4E86
//
// qr-scanner \u57FA\u4E8E\u4E0A\u8FF0\u4E24\u4E2A\u5E93\u8FDB\u884C\u5F00\u53D1\uFF0C\u662F\u6700\u4F18\u9009\u3002\u4F46\u4F1A\u6536\u5230 CSP \u9650\u5236\u800C\u65E0\u6CD5\u4F7F\u7528
/** \u5224\u65AD\u4E00\u5F20\u56FE\u662F\u5426\u662F\u5F69\u56FE */
const isColorImg = data => {
  for (let i = 0; i < data.length; i += 16) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (!(r === g && r === b)) return true;
  }
  return false;
};

/** \u4E8C\u7EF4\u7801\u767D\u540D\u5355 */
const qrCodeWhiteList = [
// fanbox
/^https:\\/\\/[^.]+\\.fanbox\\.cc/,
// twitter
/^https:\\/\\/twitter\\.com/, /^https:\\/\\/x\\.com/,
// fantia
/^https:\\/\\/fantia\\.jp/,
// \u68C9\u82B1\u7CD6
/^https:\\/\\/marshmallow-qa\\.com/,
// dlsite
/^https:\\/\\/www\\.dlsite\\.com/,
// hitomi
/^https:\\/\\/hitomi\\.la/];
const options = {
  inversionAttempts: 'attemptBoth'
};

/** \u8BC6\u522B\u56FE\u50CF\u4E0A\u7684\u4E8C\u7EF4\u7801 */
const getQrCode = (img, width, height) => {
  try {
    const binaryData = jsQR(img, width, height, options)?.binaryData;
    if (!binaryData) return false;
    // \u56E0\u4E3A jsqr \u9ED8\u8BA4\u7684\u8F93\u51FA\u4E0D\u652F\u6301\u7279\u6B8A\u7B26\u53F7\uFF0C\u4E3A\u4EE5\u9632\u4E07\u4E00\uFF0C\u624B\u52A8\u8FDB\u884C\u8F6C\u6362
    const text = new TextDecoder().decode(Uint8Array.from(binaryData));
    mainFn.log(\`\u68C0\u6D4B\u5230\u4E8C\u7EF4\u7801\uFF1A \${text}\`);
    return text;
  } catch (error) {
    mainFn.log(error);
    return undefined;
  }
};

// zxing \u65B9\u6848
//
// import {
//   MultiFormatReader,
//   BarcodeFormat,
//   DecodeHintType,
//   RGBLuminanceSource,
//   BinaryBitmap,
//   HybridBinarizer,
// } from '@zxing/library';
//
// const hints = new Map();
// // \u53EA\u8BC6\u522B\u4E8C\u7EF4\u7801
// hints.set(DecodeHintType.POSSIBLE_FORMATS, [
//   BarcodeFormat.QR_CODE,
//   BarcodeFormat.DATA_MATRIX,
// ]);
// // \u82B1\u66F4\u591A\u65F6\u95F4\u5C1D\u8BD5\u5BFB\u627E\u6761\u5F62\u7801
// hints.set(DecodeHintType.TRY_HARDER, true);
//
// /** \u8BC6\u522B\u56FE\u50CF\u4E0A\u7684\u4E8C\u7EF4\u7801 */
// const getQrCode = (
//   data: Uint8ClampedArray,
//   width: number,
//   height: number,
// ) => {
//   try {
//     const luminance = new Uint8ClampedArray(width * height);
//     for (let i = 0; i < data.length; i += 4) {
//       const r = data[i];
//       const g = data[i + 1];
//       const b = data[i + 2];
//       luminance[i / 4] = (r + g + b) / 3;
//     }
//     const luminanceSource = new RGBLuminanceSource(luminance, width, height);
//     const binaryBitmap = new BinaryBitmap(new HybridBinarizer(luminanceSource));
//     const res = new MultiFormatReader().decode(binaryBitmap, hints);
//     const text = res.getText();
//     if (!text) return false;
//     mainFn.log(\`\u68C0\u6D4B\u5230\u4E8C\u7EF4\u7801\uFF1A \${text}\`);
//     return text;
//   } catch (error) {
//     console.log(error);
//     debugger;
//     return false;
//   }
const getImgData = img => {
  const canvas = new OffscreenCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
};
const scanImgBlock = (img, sx, sy, w, h) => {
  if (w === img.width && h === img.height) return getQrCode(img.data, w, h);
  const data = new Uint8ClampedArray(new ArrayBuffer(w * h * 4));
  for (let y = 0, height = sy + h; y < height; y++) for (let x = 0, width = sx + w; x < width; x++) {
    const i = (y * w + x) * 4;
    const target = ((y + sy) * img.width + (x + sx)) * 4;
    data[i] = img.data[target];
    data[i + 1] = img.data[target + 1];
    data[i + 2] = img.data[target + 2];
    data[i + 3] = img.data[target + 3];
  }
  return getQrCode(data, w, h);
};
const isAdImg = imgBitmap => {
  const imgData = getImgData(imgBitmap);

  // \u9ED1\u767D\u56FE\u80AF\u5B9A\u4E0D\u662F\u5E7F\u544A
  if (!isColorImg(imgData.data)) return false;

  // \u4EE5 200 \u7070\u5EA6\u4E3A\u9608\u503C\uFF0C\u5C06\u56FE\u7247\u4E8C\u503C\u5316\uFF0C\u4EE5\u4FBF\u8BC6\u522B\u5F69\u8272\u4E8C\u7EF4\u7801
  for (let i = 0; i < imgData.data.length; i += 4) {
    const gray = toGray(imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]);
    const val = gray < 200 ? 0 : 255;
    imgData.data[i] = val;
    imgData.data[i + 1] = val;
    imgData.data[i + 2] = val;
    imgData.data[i + 3] = 255;
  }

  // mainFn.showCanvas?.(imgData.data, imgBitmap.width, imgBitmap.height);

  let text = getQrCode(imgData.data, imgData.width, imgData.height);

  // \u5206\u533A\u5757\u626B\u63CF\u56FE\u7247
  if (!text) {
    const w = Math.floor(imgData.width / 2);
    const h = Math.floor(imgData.height / 2);
    for (const args of [[w, h],
    // \u2198
    [0, h],
    // \u2199
    [w, 0],
    // \u2197
    [0, 0] // \u2196
    ]) {
      text = scanImgBlock(imgData, ...args, w, h);
      if (text) break;
    }
  }
  if (text) return qrCodeWhiteList.every(reg => !reg.test(text));
  return false;
};

exports.isAdImg = isAdImg;
exports.setMainFn = setMainFn;
`;break;case"worker/ImageRecognition":o=`
const mainFn = {};
const setMainFn = (helper, keys) => {
  for (const name of keys) Reflect.set(mainFn, name, (...args) => Reflect.apply(helper[name], helper, args));
};
const getEdgeScope = (width, height) => Math.min(Math.ceil((width + height) * 0.01), 10);

/** \u5BF9\u6307\u5B9A\u6570\u503C\u53D6\u6574 */
const round = (n, int) => {
  const remainder = n % int;
  return remainder < int / 2 ? n - remainder : n + (int - remainder);
};

/** \u8BA1\u7B97 rgb \u7684\u7070\u5EA6 */
const toGray = (r, g, b) => Math.round(0.299 * r + 0.587 * g + 0.114 * b);

/** \u83B7\u53D6\u56FE\u7247\u7684\u7070\u5EA6\u8868 */
const toGrayList = (imgData, roundNum) => {
  const grayList = new Uint8ClampedArray(new ArrayBuffer(imgData.length / 4));
  for (let i = 0, gi = 0; i < imgData.length; i += 4, gi++) {
    const r = imgData[i];
    const g = imgData[i + 1];
    const b = imgData[i + 2];
    grayList[gi] = round(toGray(r, g, b), roundNum);
  }
  return grayList;
};

/** \u904D\u5386\u56FE\u7247\u7684\u6307\u5B9A\u884C */
const forEachRows = (width, y, fn, start = 0, end = width) => {
  for (let i = start; i < end; i++) fn(width * y + i);
};

/** \u904D\u5386\u56FE\u7247\u7684\u6307\u5B9A\u5217 */
const forEachCols = (width, height, x, fn, start = 0, end = height) => {
  for (let i = start; i < end; i++) fn(i * width + x);
};

/** \u904D\u5386\u56FE\u7247\u7684\u8FB9\u7F18 */
const forEachEdge = (width, height, scope, fn) => {
  for (let i = 0; i < scope; i++) {
    forEachRows(width, i, fn);
    forEachRows(width, height - i - 1, fn);
    forEachCols(width, height, i, fn, scope, height - scope);
    forEachCols(width, height, width - i - 1, fn, scope, height - scope);
  }
};

/** \u7F29\u5C0F\u56FE\u50CF */
const resizeImg = (rawImgData, width, height) => {
  // const scale = 1;
  const scale = Math.min(200 / width, 200 / height);
  const w = Math.floor(width * scale);
  const h = Math.floor(height * scale);
  const data = new Uint8ClampedArray(new ArrayBuffer(w * h * 4));
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      // \u4F7F\u7528\u6700\u7B80\u5355\u7684\u91C7\u6837\u65B9\u5F0F\uFF0C\u907F\u514D\u51FA\u73B0\u539F\u56FE\u6240\u6CA1\u6709\u7684\u989C\u8272
      const i = (y * w + x) * 4;
      const tx = Math.floor(x / scale);
      const ty = Math.floor(y / scale);
      const target = (width * ty + tx) * 4;
      data[i] = rawImgData[target];
      data[i + 1] = rawImgData[target + 1];
      data[i + 2] = rawImgData[target + 2];
      data[i + 3] = 255;
    }
  }
  return {
    scale,
    w,
    h,
    data
  };
};

/** \u901A\u8FC7\u4E92\u76F8\u6BD4\u8F83\u6570\u7EC4\u9879\u6C42\u51FA\u6700\u7EC8\u9879 */
const boil = (array, compareFunc) => {
  if (!array || (array.length ?? 0) === 0) return null;
  return array.reduce(compareFunc);
};

/** \u83B7\u53D6\u989C\u8272\u533A\u57DF\u5728\u8FB9\u7F18\u533A\u57DF\u4E0A\u7684\u5360\u6BD4 */
const getAreaEdgeRatio = (pixelList, width, height) => {
  let size = 0;
  const edgeScope = getEdgeScope(width, height);
  const add = i => pixelList.has(i) && size++;
  forEachEdge(width, height, edgeScope, add);
  return size / (width * edgeScope * 2 + (height - 2 * edgeScope) * edgeScope * 2);
};

/** \u6839\u636E\u7070\u5EA6\u503C\u83B7\u53D6\u56FE\u7247\u8FB9\u7F18\u76F8\u4F3C\u989C\u8272\u7684\u533A\u57DF */
const getEdgeArea = (grayList, width, height) => {
  const maximum = width * height * 0.4;
  const areaMap = new Map();

  /** \u5F85\u68C0\u67E5\u76F8\u90BB\u50CF\u7D20\u7684\u50CF\u7D20 */
  const seedPixel = new Set();
  const addSeedPixel = index => {
    const gray = grayList[index];
    if (gray === undefined) return;
    seedPixel.add(index);
    if (!areaMap.has(gray)) areaMap.set(gray, new Set());
    areaMap.get(gray).add(index);
  };
  const popSeedPixel = () => {
    if (seedPixel.size === 0) return undefined;
    const index = seedPixel.values().next().value;
    seedPixel.delete(index);
    return index;
  };

  // \u5C06\u8FB9\u7F18\u533A\u57DF\u7684\u50CF\u7D20\u8BBE\u4E3A\u79CD\u5B50
  const edgeScope = getEdgeScope(width, height);
  forEachEdge(width, height, edgeScope, addSeedPixel);

  /** \u83B7\u53D6\u76F8\u90BB\u50CF\u7D20 */
  const getAdjacentPixel = i => {
    const adjacentPixel = [];
    const x = i % width;
    const y = Math.floor(i / width);
    const left = x !== 0;
    const up = y >= 1;
    const right = x < width - 1;
    const down = y < height - 1;
    if (left) adjacentPixel.push(i - 1); // \u2190
    if (up) adjacentPixel.push(i - width); // \u2191
    if (right) adjacentPixel.push(i + 1); // \u2192
    if (down) adjacentPixel.push(i + width); // \u2193
    if (left && up) adjacentPixel.push(i - width - 1); // \u2196
    if (left && down) adjacentPixel.push(i + width - 1); // \u2199
    if (right && up) adjacentPixel.push(i - width + 1); // \u2197
    if (right && down) adjacentPixel.push(i + width + 1); // \u2198

    return adjacentPixel;
  };

  // \u4ECE\u79CD\u5B50\u50CF\u7D20\u5F00\u59CB\u4E0D\u65AD\u5408\u5E76\u76F8\u540C\u7070\u5EA6\u7684\u50CF\u7D20\u5F62\u6210\u533A\u57DF
  for (let i = popSeedPixel(); i !== undefined; i = popSeedPixel()) {
    const gray = grayList[i];
    const areaPixelList = areaMap.get(gray);
    const adjacentPixelList = getAdjacentPixel(i);
    for (const adjacentPixel of adjacentPixelList) {
      if (areaPixelList.has(adjacentPixel)) continue;
      const pixelGray = grayList[adjacentPixel];
      if (pixelGray !== gray) continue;
      addSeedPixel(adjacentPixel);
    }

    // \u5982\u679C\u5F53\u524D\u533A\u57DF\u50CF\u7D20\u6570\u91CF\u8D85\u8FC7\u9608\u503C\uFF0C\u5C31\u76F4\u63A5\u8BA4\u5B9A\u5176\u4E3A\u80CC\u666F
    if (areaPixelList.size > maximum) return [areaPixelList];
  }
  const areaList = [];
  for (const pixelList of areaMap.values()) {
    if (pixelList.size < 100) continue;
    areaList.push(pixelList);
  }
  return areaList;
};

/** \u83B7\u53D6\u56FE\u50CF\u6307\u5B9A\u533A\u57DF\u4E2D\u7684\u4E3B\u8272 */
const getAreaColor = (imgData, pixelList) => {
  const colorMap = new Map();
  const maximum = pixelList.size * 0.5;
  let maxColor = '';
  let maxCount = 0;
  for (const i of pixelList.values()) {
    const index = i * 4;
    const r = imgData[index];
    const g = imgData[index + 1];
    const b = imgData[index + 2];
    const color = \`rgb(\${r}, \${g}, \${b})\`;
    if (!colorMap.has(color)) colorMap.set(color, 0);
    const colorCount = colorMap.get(color) + 1;
    colorMap.set(color, colorCount);
    if (colorCount > maxCount) {
      maxColor = color;
      maxCount = colorCount;
    }
    if (colorCount > maximum) break;
  }
  return maxColor;
};

/** \u83B7\u53D6\u56FE\u50CF\u6307\u5B9A\u77E9\u5F62\u533A\u57DF\u4E2D\u7684\u4E3B\u8272 */
const getSquareAreaColor = (imgData, _topLeftX, _topLeftY, _bottomRightX, _bottomRightY) => {
  const topLeftX = Math.floor(_topLeftX);
  const topLeftY = Math.floor(_topLeftY);
  const bottomRightX = Math.floor(_bottomRightX);
  const bottomRightY = Math.floor(_bottomRightY);
  const colorMap = new Map();
  const maximum = (bottomRightX - topLeftX) * (bottomRightY - topLeftY) * 0.5;
  let maxColor = '';
  let maxCount = 0;
  for (let x = topLeftX; x < bottomRightX; x++) {
    for (let y = topLeftY; y < bottomRightY; y++) {
      const index = (x + y * bottomRightX) * 4;
      const r = imgData[index];
      const g = imgData[index + 1];
      const b = imgData[index + 2];
      const color = \`rgb(\${r}, \${g}, \${b})\`;
      if (!colorMap.has(color)) colorMap.set(color, 0);
      const colorCount = colorMap.get(color) + 1;
      colorMap.set(color, colorCount);
      if (colorCount > maxCount) {
        maxColor = color;
        maxCount = colorCount;
      }
      if (colorCount > maximum) break;
    }
  }
  return maxColor;
};

/** \u6839\u636E\u8FB9\u7F18\u989C\u8272\u533A\u57DF\u83B7\u53D6\u80CC\u666F\u989C\u8272 */
const byEdgeArea = ({
  data,
  grayList,
  width,
  height
}) => {
  const areaList = getEdgeArea(grayList, width, height);
  // if (false) mainFn.showColorArea?.(data, width, height, ...areaList);

  if (areaList.length === 0) return undefined;
  const minimum = width * height * 0.02;
  let maxArea;
  let maxRatio = 0.1;

  // \u8FC7\u6EE4\u603B\u4F53\u5360\u6BD4\u548C\u8FB9\u7F18\u5360\u6BD4\u8FC7\u5C0F\u7684\u533A\u57DF
  for (const pixelList of areaList) {
    if (pixelList.size < minimum) continue;
    const edgeRatio = getAreaEdgeRatio(pixelList, width, height);
    if (edgeRatio < maxRatio) continue;
    maxArea = pixelList;
    maxRatio = edgeRatio;
  }
  if (!maxArea) return undefined;
  return getAreaColor(data, maxArea);
};
const getPosAreaColor = (pos, {
  data,
  blankMargin,
  width: w,
  height: h
}) => {
  switch (pos) {
    case 'top':
      return getSquareAreaColor(data, 0, 0, w, blankMargin.top * h);
    case 'bottom':
      return getSquareAreaColor(data, 0, h - blankMargin.bottom * h, w, h);
    case 'left':
      return getSquareAreaColor(data, 0, 0, blankMargin.left * w, h);
    case 'right':
      return getSquareAreaColor(data, w - blankMargin.right * w, 0, w, h);
  }
};

/** \u4ECE\u8DB3\u591F\u5927\u7684\u7A7A\u767D\u8FB9\u7F18\u4E2D\u83B7\u53D6\u80CC\u666F\u989C\u8272 */
const byBlankMargin = context => {
  const colorMap = {};
  for (const pos of ['top', 'bottom', 'left', 'right']) {
    if (!context.blankMargin[pos]) continue;
    const color = getPosAreaColor(pos, context);
    if (!color) continue;
    colorMap[color] = (colorMap[color] || 0) + context.blankMargin[pos];
  }

  // \u8FC7\u6EE4\u5360\u6BD4\u8FC7\u4F4E\u7684\u7A7A\u767D\u8FB9\u7F18
  const colorList = Object.entries(colorMap).filter(([, v]) => v > 0.04);
  if (colorList.length === 0) return undefined;
  return boil(colorList, (a, b) => a[1] > b[1] ? a : b)?.[0];
};

/** \u5224\u65AD\u56FE\u50CF\u7684\u80CC\u666F\u8272 */
const getBackground = context => 'blankMargin' in context && byBlankMargin(context) || byEdgeArea(context);

/** \u83B7\u53D6\u56FE\u7247\u7A7A\u767D\u8FB9\u7F18\u7684\u957F\u5EA6 */
const getBlankMargin = ({
  grayList,
  width,
  height
}) => {
  let blankColor;

  // \u68C0\u67E5\u6307\u5B9A\u884C\u6216\u5217\u4E0A\u662F\u5426\u5168\u662F\u76F8\u540C\u989C\u8272
  const isBlankLine = (x, y) => {
    const colorMap = new Map();
    const eachFn = i => {
      const gray = grayList[i];
      colorMap.set(gray, (colorMap.get(gray) || 0) + 1);
      // grayList[i] = Math.abs(gray - 255);
    };
    if (x < 0) forEachRows(width, y, eachFn);else forEachCols(width, height, x, eachFn);
    let maxColor;
    // \u4E3A\u4E86\u80FD\u8DF3\u8FC7\u4E9B\u5FAE\u8272\u5DEE\u548C\u6F2B\u753B\u6C34\u5370\uFF0C\u9608\u503C\u5C31\u53EA\u8BBE\u4E3A 90%
    let maxNum = height * 0.9;
    for (const [gray, num] of colorMap.entries()) {
      if (num < maxNum) continue;
      maxColor = gray;
      maxNum = num;
    }
    if (maxColor === undefined) return false;
    blankColor ||= maxColor;
    if (maxColor !== blankColor) return false;
    return true;
  };
  let left = 0;
  for (let x = 0, end = width * 0.4; x < end; x++, left++) if (!isBlankLine(x, -1)) break;
  blankColor = undefined;
  let right = 0;
  for (let x = width - 1, end = width * 0.6; x >= end; x--, right++) if (!isBlankLine(x, -1)) break;
  blankColor = undefined;
  let top = 0;
  for (let y = 0, end = height * 0.4; y < end; y++, top++) if (!isBlankLine(-1, y)) break;
  blankColor = undefined;
  let bottom = 0;
  for (let y = height - 1, end = height * 0.6; y >= end; y--, bottom++) if (!isBlankLine(-1, y)) break;

  // if (false) mainFn.showGrayList?.(grayList, width, height);

  if (left || right || top || bottom) return {
    left,
    right,
    top,
    bottom
  };
  return undefined;
};

const recognitionImg = async (imgData, width, height, url, option) => {
  const startTime = Date.now();
  const {
    w,
    h,
    data
  } = resizeImg(imgData, width, height);
  // if (false) mainFn.showCanvas?.(data, w, h);

  const grayList = toGrayList(data, 5);
  // if (false) mainFn.showGrayList?.(grayList, w, h);

  const context = {
    data,
    grayList,
    width: w,
    height: h
  };
  let blankMargin;
  if (option.pageFill || option.background) {
    blankMargin = getBlankMargin(context);
    if (blankMargin) {
      for (const key of ['top', 'bottom', 'left', 'right']) blankMargin[key] &&= blankMargin[key] / w;
      mainFn.setImg(url, 'blankMargin', {
        left: blankMargin.left,
        right: blankMargin.right
      });
      mainFn.updatePageData();
      context.blankMargin = blankMargin;
    } else mainFn.setImg(url, 'blankMargin', null);
  }
  let bgColor;
  if (option.background) {
    // \u867D\u7136\u4E5F\u60F3\u652F\u6301\u6E10\u53D8\u80CC\u666F\uFF0C\u4F46\u6D4F\u89C8\u5668\u4E0A\u4E0D\u50CF\u624B\u673A\u7AEF\u90A3\u6837\u53EA\u9700\u8981\u663E\u793A\u4E0A\u4E0B\u80CC\u666F\uFF0C\u53EF\u4EE5\u65E0\u89C6\u4E2D\u95F4\u7684\u6E10\u53D8
    // \u5927\u90E8\u5206\u65F6\u5019\u90FD\u8981\u663E\u793A\u5DE6\u53F3\u533A\u57DF\u7684\u80CC\u666F\uFF0C\u4E0D\u80FD\u548C\u5B9E\u9645\u80CC\u666F\u4E00\u81F4\u7684\u8BDD\u5C31\u4F1A\u5F88\u7A81\u5140
    // \u8981\u662F\u56FE\u7247\u80FD\u4E00\u76F4\u5360\u6EE1\u5C4F\u5E55\u7684\u8BDD\uFF0C\u90A3\u8FD8\u80FD\u901A\u8FC7\u5355\u72EC\u663E\u793A\u4E0A\u4E0B\u6216\u5DE6\u53F3\u90E8\u5206\u7684\u80CC\u666F\u8272\u6765\u5B9E\u73B0
    // \u4F46\u504F\u504F\u53C8\u6709\u300C\u7981\u6B62\u56FE\u7247\u81EA\u52A8\u653E\u5927\u300D\u529F\u80FD\uFF0C\u9700\u8981\u628A\u56FE\u7247\u7684\u56DB\u8FB9\u80CC\u666F\u90FD\u663E\u793A\u51FA\u6765
    bgColor = getBackground(context);
    if (bgColor) mainFn.setImg(url, 'background', bgColor);
  }
  let logText = \`\${url}\\n\u8017\u65F6 \${Date.now() - startTime}ms \u5904\u7406\u5B8C\u6210\`;
  const resList = [];
  if (blankMargin) resList.push(\`\u7A7A\u767D\u8FB9\u7F18\uFF1A\${Object.entries(blankMargin).filter(([, v]) => v).map(([k, v]) => \`\${k}:\${v && (v * 100).toFixed(2)}%\`).join(' ')}\`);
  if (bgColor) resList.push(\`\u80CC\u666F\u8272: \${bgColor}\`);
  if (resList.length > 0) logText += \`\\n\${resList.join('\\n')}\`;
  mainFn.log?.(logText);
};

exports.recognitionImg = recognitionImg;
exports.setMainFn = setMainFn;
`;break;case"worker/ImageUpscale":o=`
const tf = require('@tensorflow/tfjs');
const tfjsBackendWebgpu = require('@tensorflow/tfjs-backend-webgpu');
const helper = require('helper');

class Img {
  constructor(width, height, data = new Uint8Array(width * height * 4)) {
    this.width = width;
    this.height = height;
    this.data = data;
  }
  getImageCrop(x, y, image, x1, y1, x2, y2) {
    const width = x2 - x1;
    for (let j = 0; j < y2 - y1; j++) {
      const srcIndex = (y1 + j) * image.width * 4 + x1 * 4;
      this.data.set(image.data.subarray(srcIndex, srcIndex + width * 4), (y + j) * this.width * 4 + x * 4);
    }
  }
  padToTileSize(tileSize) {
    let newWidth = this.width;
    let newHeight = this.height;
    if (this.width < tileSize) newWidth = tileSize;
    if (this.height < tileSize) newHeight = tileSize;
    if (newWidth === this.width && newHeight === this.height) return;
    const newData = new Uint8Array(newWidth * newHeight * 4);
    for (let y = 0; y < this.height; y++) {
      const srcStart = y * this.width * 4;
      newData.set(this.data.subarray(srcStart, srcStart + this.width * 4), y * newWidth * 4);
    }
    if (newWidth > this.width) {
      const rightColumnIndex = (this.width - 1) * 4;
      for (let y = 0; y < this.height; y++) {
        const destRowStart = y * newWidth * 4;
        const srcPixelIndex = y * this.width * 4 + rightColumnIndex;
        const padPixel = this.data.subarray(srcPixelIndex, srcPixelIndex + 4);
        for (let x = this.width; x < newWidth; x++) newData.set(padPixel, destRowStart + x * 4);
      }
    }
    if (newHeight > this.height) {
      const bottomRowStart = (this.height - 1) * newWidth * 4;
      const bottomRow = newData.subarray(bottomRowStart, bottomRowStart + newWidth * 4);
      for (let y = this.height; y < newHeight; y++) newData.set(bottomRow, y * newWidth * 4);
    }
    this.width = newWidth;
    this.height = newHeight;
    this.data = newData;
  }
  cropToOriginalSize(width, height) {
    const newData = new Uint8Array(width * height * 4);
    for (let y = 0; y < height; y++) {
      const srcStart = y * this.width * 4;
      newData.set(this.data.subarray(srcStart, srcStart + width * 4), y * width * 4);
    }
    this.width = width;
    this.height = height;
    this.data = newData;
  }
}

const mainFn = {};
const setMainFn = (helper, keys) => {
  for (const name of keys) Reflect.set(mainFn, name, (...args) => Reflect.apply(helper[name], helper, args));
};
const base64ToArrayBuffer = base64 => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binaryString.codePointAt(i);
  return bytes.buffer;
};

// \u5F15\u7528\u4E00\u4E0B\uFF0C\u907F\u514D\u88AB rullup treeshake \u6389
console.debug(tfjsBackendWebgpu.webgpu_util); // oxlint-disable-line no-console

let model;
let loading = false;
const getModel = async () => {
  if (model) return model;
  if (loading) return helper.wait(() => model);
  loading = true;
  try {
    await tf.setBackend('webgpu');
  } catch (error) {
    mainFn.toast.warn(mainFn.t('upscale.webgpu_tip'));
    mainFn.log.error('\u5207\u6362 WebGPU \u51FA\u9519', error);
  }
  const {
    buffer,
    base64,
    json
  } = await mainFn.getModel();
  // \u4FEE\u6539 tfjs \u91CC\u7684 fetch \u6765\u52A0\u8F7D\u6A21\u578B
  Reflect.set(tf.env().platform, 'fetch', () => ({
    ok: true,
    json: () => JSON.parse(json),
    arrayBuffer: () => buffer || base64ToArrayBuffer(base64)
  }));
  model = await tf.loadGraphModel('xxx');
  return model;
};

const upscaleImg = async image => {
  const model = await getModel();
  const result = tf.tidy(() => model.predict(img2tensor(image)));
  const resultImage = await tensor2img(result);
  tf.dispose(result);
  return resultImage;
};
const img2tensor = image => {
  const imgdata = new ImageData(image.width, image.height);
  imgdata.data.set(image.data);
  return tf.browser.fromPixels(imgdata).div(255).toFloat().expandDims();
};
const tensor2img = async tensor => {
  const [, height, width] = tensor.shape;
  const clipped = tf.tidy(() => tensor.reshape([height, width, 3]).mul(255).cast('int32').clipByValue(0, 255));
  tensor.dispose();
  const data = await tf.browser.toPixels(clipped);
  clipped.dispose();
  return new Img(width, height, data);
};

// \u4E3A\u4E86\u7701\u4E8B\uFF0C\u5C31\u4E0D\u652F\u6301\u8C03\u6574\u53C2\u6570\u4E86
// \u4E0D\u4F1A\u652F\u6301\u900F\u660E\u56FE\u7247\uFF0C\u5904\u7406\u8D77\u6765\u592A\u9EBB\u70E6\u4E86
// \u4EE3\u7801\u5747\u6284\u81EA
// https://github.com/xororz/web-realesrgan/blob/f81d2dd7935ee8df947674933fd41a446b90e911/src/worker.js
// \u53EA\u5220\u53BB\u4E86\u56E0\u53C2\u6570\u56FA\u5B9A\u800C\u53D8\u5F97\u5197\u4F59\u7684\u4EE3\u7801
//
// \u6A21\u578B\u6587\u4EF6\u5728 Releases \u4E0B\u8F7D
//
// https://cappuccino.moe/realcugan/2x-conservative-128/model.json
const factor = 2;
const input_size = 128;
const min_lap = 12;
const upscale = async (data, width, height) => {
  const input = new Img(width, height, new Uint8Array(data));
  input.padToTileSize(input_size);
  const output = new Img(width * factor, height * factor);
  let num_x = 1;
  for (; (input_size * num_x - width) / (num_x - 1) < min_lap; num_x++);
  let num_y = 1;
  for (; (input_size * num_y - height) / (num_y - 1) < min_lap; num_y++);
  const locs_x = Array.from({
    length: num_x
  });
  const locs_y = Array.from({
    length: num_y
  });
  const pad_left = Array.from({
    length: num_x
  });
  const pad_top = Array.from({
    length: num_y
  });
  const pad_right = Array.from({
    length: num_x
  });
  const pad_bottom = Array.from({
    length: num_y
  });
  const total_lap_x = input_size * num_x - width;
  const total_lap_y = input_size * num_y - height;
  const base_lap_x = Math.floor(total_lap_x / (num_x - 1));
  const base_lap_y = Math.floor(total_lap_y / (num_y - 1));
  const extra_lap_x = total_lap_x - base_lap_x * (num_x - 1);
  const extra_lap_y = total_lap_y - base_lap_y * (num_y - 1);
  locs_x[0] = 0;
  for (let i = 1; i < num_x; i++) {
    if (i <= extra_lap_x) locs_x[i] = locs_x[i - 1] + input_size - base_lap_x - 1;else locs_x[i] = locs_x[i - 1] + input_size - base_lap_x;
  }
  locs_y[0] = 0;
  for (let i = 1; i < num_y; i++) {
    if (i <= extra_lap_y) locs_y[i] = locs_y[i - 1] + input_size - base_lap_y - 1;else locs_y[i] = locs_y[i - 1] + input_size - base_lap_y;
  }
  pad_left[0] = 0;
  pad_top[0] = 0;
  pad_right[num_x - 1] = 0;
  pad_bottom[num_y - 1] = 0;
  for (let i = 1; i < num_x; i++) pad_left[i] = Math.floor((locs_x[i - 1] + input_size - locs_x[i]) / 2);
  for (let i = 1; i < num_y; i++) pad_top[i] = Math.floor((locs_y[i - 1] + input_size - locs_y[i]) / 2);
  for (let i = 0; i < num_x - 1; i++) pad_right[i] = locs_x[i] + input_size - locs_x[i + 1] - pad_left[i + 1];
  for (let i = 0; i < num_y - 1; i++) pad_bottom[i] = locs_y[i] + input_size - locs_y[i + 1] - pad_top[i + 1];
  for (let i = 0; i < num_x; i++) {
    for (let j = 0; j < num_y; j++) {
      const x1 = locs_x[i];
      const y1 = locs_y[j];
      const x2 = locs_x[i] + input_size;
      const y2 = locs_y[j] + input_size;
      const tile = new Img(input_size, input_size);
      tile.getImageCrop(0, 0, input, x1, y1, x2, y2);
      const scaled = await upscaleImg(tile);
      output.getImageCrop((x1 + pad_left[i]) * factor, (y1 + pad_top[j]) * factor, scaled, pad_left[i] * factor, pad_top[j] * factor, scaled.width - pad_right[i] * factor, scaled.height - pad_bottom[j] * factor);
    }
  }
  return output;
};
const upscaleImage = async (data, width, height, url) => {
  const startTime = Date.now();
  const output = await upscale(data, width, height);
  const canvas = new OffscreenCanvas(output.width, output.height);
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(output.width, output.height);
  for (let i = 0; i < imgData.data.length; i++) imgData.data[i] = output.data[i];
  ctx.putImageData(imgData, 0, 0);
  const blob = await canvas.convertToBlob({
    type: 'image/png'
  });
  mainFn.setImg(url, 'upscaleUrl', URL.createObjectURL(blob));
  mainFn.log?.(\`\${url}\\n\${width}x\${height}\\n\u8017\u65F6 \${Date.now() - startTime}ms \u653E\u5927\u5B8C\u6210\`);
};

exports.setMainFn = setMainFn;
exports.upscaleImage = upscaleImage;
`;break;case"userscript/otherSite":o=`
const web = require('solid-js/web');
const helper = require('helper');
const main = require('main');

const prevRe = /^\u4E0A\u4E00?(?:[\u7AE0\u8A71\u8BDD]|\u7AE0\u8282)$|^(?:prev|previous)(?:\\s+chapter)?$|^\u524D\u306E\u7AE0$/i;
const nextRe = /^\u4E0B\u4E00?(?:[\u7AE0\u8A71\u8BDD]|\u7AE0\u8282)$|^next(?:\\s+chapter)?$|^\u6B21\u306E\u7AE0$/i;
const getChapterSwitch = () => {
  let onPrev;
  let onNext;
  const checkElement = e => {
    const texts = [e.textContent, e.ariaLabel].filter(Boolean)
    // \u5220\u9664\u53EF\u80FD\u6DF7\u5728\u5176\u4E2D\u7684\u7279\u6B8A\u7B26\u53F7
    .map(text => text.replaceAll(/[<>()\u300A\u300B\uFF08\uFF09\u300C\u300D\u300E\u300F]/g, '').trim());
    if (texts.length === 0) return;
    for (const text of texts) {
      if (!onPrev && prevRe.test(text)) {
        onPrev = () => e.click();
        break;
      }
      if (!onNext && nextRe.test(text)) {
        onNext = () => e.click();
        break;
      }
    }
  };
  for (const e of helper.querySelectorAll('a, button')) {
    checkElement(e);
    if (onPrev && onNext) break;
    for (const element of e.querySelectorAll('div, span, p')) {
      checkElement(element);
      if (onPrev && onNext) break;
    }
  }
  return {
    onPrev,
    onNext
  };
};

const getTagText = ele => {
  let text = ele.nodeName;
  if (ele.id && !/\\d/.test(ele.id)) text += \`#\${ele.id}\`;
  return text;
};

/** \u83B7\u53D6\u5143\u7D20\u4EC5\u8BB0\u5F55\u4E86\u5C42\u7EA7\u7ED3\u6784\u5173\u7CFB\u7684\u9009\u62E9\u5668 */
const getEleSelector = ele => {
  const parents = [ele.nodeName];
  const root = ele.getRootNode();
  let e = ele;
  while (e.parentNode && e.parentNode !== root) {
    e = e.parentNode;
    parents.push(getTagText(e));
  }
  return parents.reverse().join('>');
};

/** \u5224\u65AD\u6307\u5B9A\u5143\u7D20\u662F\u5426\u7B26\u5408\u9009\u62E9\u5668 */
const isEleSelector = (ele, selector) => {
  const parents = selector.split('>').reverse();
  let e = ele;
  for (let i = 0; e && i < parents.length; i++) {
    if (getTagText(e) !== parents[i]) return false;
    e = e.parentNode;
  }
  return e === e.getRootNode();
};

// \u76EE\u5F55\u9875\u548C\u6F2B\u753B\u9875\u7684\u56FE\u7247\u5C42\u7EA7\u76F8\u540C
// https://www.biliplus.com/manga/
// \u56FE\u7247\u8DEF\u5F84\u4E0A\u6709 id \u5143\u7D20\u5E76\u4E14 id \u542B\u6709\u6F2B\u753B id\uFF0C\u4E0D\u540C\u8BDD\u6570 id \u4E5F\u4E0D\u540C
const createImgData = (oldSrc = '') => ({
  triggedNum: 0,
  observerTimeout: 0,
  oldSrc
});

/** \u7528\u4E8E\u5224\u65AD\u662F\u5426\u662F\u56FE\u7247 url \u7684\u6B63\u5219 */
const isImgUrlRe = /^(?:(?:(?:https?|ftp|file):)?\\/)?\\/[-\\w+&@#/%?=~|!:,.;]+[-\\w+&@#%=~|]$/;

/** \u627E\u51FA\u683C\u5F0F\u4E3A\u56FE\u7247 url \u7684\u5143\u7D20\u5C5E\u6027 */
const getDatasetUrl = e => {
  for (const key of e.getAttributeNames()) {
    // \u8DF3\u8FC7\u767D\u540D\u5355
    switch (key) {
      case 'src':
      case 'alt':
      case 'class':
      case 'style':
      case 'id':
      case 'title':
      case 'onload':
      case 'onerror':
        continue;
    }
    const val = e.getAttribute(key).trim();
    if (!isImgUrlRe.test(val)) continue;
    return val;
  }
};

/**
 *
 * \u901A\u8FC7\u6EDA\u52A8\u5230\u6307\u5B9A\u56FE\u7247\u5143\u7D20\u4F4D\u7F6E\u5E76\u505C\u7559\u4E00\u4F1A\u6765\u89E6\u53D1\u56FE\u7247\u7684\u61D2\u52A0\u8F7D\uFF0C\u8FD4\u56DE\u56FE\u7247 src \u662F\u5426\u53D1\u751F\u53D8\u5316
 *
 * \u4F1A\u5728\u89E6\u53D1\u540E\u91CD\u65B0\u6EDA\u56DE\u539F\u4F4D\uFF0C\u5F53 time \u4E3A 0 \u65F6\uFF0C\u56E0\u4E3A\u6EDA\u52A8\u901F\u5EA6\u5F88\u5FEB\u6240\u4EE5\u662F\u65E0\u611F\u7684
 */
const triggerEleLazyLoad = async (e, time, isLazyLoaded, runCondition) => {
  const nowScroll = window.scrollY;
  e.scrollIntoView({
    behavior: 'instant'
  });
  e.dispatchEvent(new Event('scroll', {
    bubbles: true
  }));
  try {
    if (isLazyLoaded && time) return await helper.wait(isLazyLoaded, time);
  } finally {
    if (runCondition()) window.scroll({
      top: nowScroll,
      behavior: 'instant'
    });
  }
};
const isImageElement = e => e.tagName === 'IMG';

/** \u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5DF2\u7ECF\u6210\u529F\u89E6\u53D1\u5B8C\u61D2\u52A0\u8F7D */
const isLazyLoaded = (e, oldSrc) => {
  if (isImageElement(e)) {
    if (!e.src) return false;
    if (!e.offsetParent) return false;
    // \u6709\u4E9B\u7F51\u7AD9\u4F1A\u4F7F\u7528 svg \u5360\u4F4D
    if (e.src.startsWith('data:image/svg')) return false;
    if (e.naturalWidth > 500 || e.naturalHeight > 500) return true;
    if (oldSrc !== undefined && e.src !== oldSrc) return true;
  } else {
    const imgDomList = e.querySelectorAll('img');
    for (const imgDom of imgDomList) if (isLazyLoaded(imgDom, oldSrc)) return true;
  }
  return false;
};
const imgMap = new WeakMap();
let imgShowObserver;
const getImg = e => imgMap.get(e) ?? createImgData();
const MAX_TRIGGED_NUM = 5;

/** \u5224\u65AD\u56FE\u7247\u5143\u7D20\u662F\u5426\u9700\u8981\u89E6\u53D1\u61D2\u52A0\u8F7D */
const needTrigged = e => !isLazyLoaded(e, imgMap.get(e)?.oldSrc) && (imgMap.get(e)?.triggedNum ?? 0) < MAX_TRIGGED_NUM;

/** \u56FE\u7247\u61D2\u52A0\u8F7D\u89E6\u53D1\u5B8C\u540E\u8C03\u7528 */
const handleTrigged = e => {
  const img = getImg(e);
  img.observerTimeout = 0;
  img.triggedNum += 1;
  if (isLazyLoaded(e, img.oldSrc) && img.triggedNum < MAX_TRIGGED_NUM) img.triggedNum = MAX_TRIGGED_NUM;
  imgMap.set(e, img);
  if (!needTrigged(e)) imgShowObserver.unobserve(e);
};

/** \u76D1\u89C6\u56FE\u7247\u662F\u5426\u88AB\u663E\u793A\u7684 Observer */
imgShowObserver = new IntersectionObserver(entries => {
  for (const img of entries) {
    const e = img.target;
    if (img.isIntersecting) {
      imgMap.set(e, {
        ...getImg(e),
        observerTimeout: window.setTimeout(handleTrigged, 290, e)
      });
    } else window.clearTimeout(imgMap.get(e)?.observerTimeout);
  }
});
const turnPageScheduled = helper.createScheduled(fn => helper.throttle(fn, 1000));
/** \u89E6\u53D1\u7FFB\u9875 */
const triggerTurnPage = async (waitTime, runCondition) => {
  if (!turnPageScheduled()) return;
  const nowScroll = window.scrollY;
  // \u6EDA\u5230\u5E95\u90E8\u518D\u6EDA\u56DE\u6765\uFF0C\u89E6\u53D1\u53EF\u80FD\u5B58\u5728\u7684\u81EA\u52A8\u7FFB\u9875\u811A\u672C
  window.scroll({
    top: document.body.scrollHeight,
    behavior: 'instant'
  });
  document.body.dispatchEvent(new Event('scroll', {
    bubbles: true
  }));
  if (waitTime) await helper.sleep(waitTime);
  if (runCondition()) window.scroll({
    top: nowScroll,
    behavior: 'instant'
  });
};
const waitTime = 300;

/** \u89E6\u53D1\u9875\u9762\u4E0A\u56FE\u7247\u5143\u7D20\u7684\u61D2\u52A0\u8F7D */
const triggerLazyLoad = helper.singleThreaded(async (state, targetImgList, runCondition) => {
  for (const e of targetImgList) {
    imgShowObserver.observe(e);
    if (!imgMap.has(e)) imgMap.set(e, createImgData(isImageElement(e) ? e.src : ''));
  }
  for (const e of targetImgList) {
    await helper.wait(runCondition);
    await triggerTurnPage(0, runCondition);
    if (!needTrigged(e)) continue;
    const datasetUrl = getDatasetUrl(e);
    if (datasetUrl) e.setAttribute('src', datasetUrl);
    if (await triggerEleLazyLoad(e, waitTime, () => isLazyLoaded(e, imgMap.get(e)?.oldSrc), runCondition)) handleTrigged(e);
  }
  await triggerTurnPage(waitTime, runCondition);
  if (targetImgList.length > 0) state.continueRun();
});


// \u6D4B\u8BD5\u6848\u4F8B
// https://www.177picyy.com/html/2023/03/5505307.html
// \u9700\u8981\u914D\u5408\u5176\u4ED6\u7FFB\u9875\u811A\u672C\u4F7F\u7528
// https://www.colamanga.com/manga-za76213/1/5.html
// \u76F4\u63A5\u8DF3\u8F6C\u5230\u56FE\u7247\u5143\u7D20\u4E0D\u4F1A\u7ACB\u523B\u89E6\u53D1\uFF0C\u8FD8\u9700\u8981\u505C\u755920ms
// https://www.colamanga.com/manga-kg45140/1/2.html
/** \u6267\u884C\u811A\u672C\u64CD\u4F5C\u3002\u5982\u679C\u4E2D\u9014\u4E2D\u65AD\uFF0C\u5C06\u8FD4\u56DE true */
const otherSite = async () => {
  let laseScroll = window.scrollY;
  const {
    store,
    setState,
    options,
    setOptions
  } = await main.useInit(location.hostname, {
    remember_current_site: true,
    selector: ''
  });

  // \u70B9\u51FB\u6309\u94AE\u540E\u7ACB\u523B\u5220\u6389\u8BB0\u4F4F\u5F53\u524D\u7AD9\u70B9\u7684\u914D\u7F6E
  helper.createEffectOn(() => options.remember_current_site, async remember => {
    if (remember) return;
    await GM.deleteValue(location.hostname);
    location.reload();
  });
  if (!store.flag.isStored) main.toast(() => (() => {
    var _el$ = web.template(\`<div><button>\`)(),
      _el$2 = _el$.firstChild;
    web.insert(_el$, () => helper.t('site.simple.auto_read_mode_message'), _el$2);
    web.addEventListener(_el$2, "click", () => setOptions({
      autoShow: false
    }));
    web.insert(_el$2, () => helper.t('other.disable'));
    return _el$;
  })(), {
    duration: 1000 * 7
  });

  // \u4E3A\u907F\u514D\u5361\u6B7B\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u5220\u9664 selector \u7684\u83DC\u5355\u9879
  const menuId = await GM.registerMenuCommand(helper.t('site.simple.simple_read_mode'), () => setOptions({
    selector: ''
  }));

  // \u7B49\u5F85 selector \u5339\u914D\u5230\u76EE\u6807\u540E\u518D\u7EE7\u7EED\u6267\u884C\uFF0C\u907F\u514D\u5728\u6F2B\u753B\u9875\u5916\u7684\u5176\u4ED6\u5730\u65B9\u8FD0\u884C
  await helper.wait(() => !options.selector || helper.querySelectorAll(options.selector).length >= 2);
  await GM.unregisterMenuCommand(menuId);

  /** \u8BB0\u5F55\u4F20\u5165\u7684\u56FE\u7247\u5143\u7D20\u4E2D\u6700\u5E38\u89C1\u7684\u90A3\u4E2A selector */
  const saveImgEleSelector = imgEleList => {
    if (imgEleList.length < 7) return;
    const selector = helper.getMostItem(imgEleList.map(getEleSelector));
    if (selector !== options.selector) setOptions({
      selector
    });
  };
  const blobUrlMap = new Map();
  // \u5904\u7406\u90A3\u4E9B URL.createObjectURL \u540E\u9A6C\u4E0A URL.revokeObjectURL \u7684\u56FE\u7247
  const handleBlobImg = async e => {
    if (blobUrlMap.has(e.src)) return blobUrlMap.get(e.src);
    if (!e.src.startsWith('blob:')) return e.src;
    if (await helper.testImgUrl(e.src)) return e.src;
    const canvas = new OffscreenCanvas(e.naturalWidth, e.naturalHeight);
    const canvasCtx = canvas.getContext('2d');
    canvasCtx.drawImage(e, 0, 0);
    const url = URL.createObjectURL(await helper.canvasToBlob(canvas));
    blobUrlMap.set(e.src, url);
    return url;
  };
  const handleImgUrl = async e => {
    const url = await handleBlobImg(e);
    if (url.startsWith('http:') && location.protocol === 'https:') return url.replace('http:', 'https:');
    return url;
  };

  /** \u91CD\u590D\u7684\u52A0\u8F7D\u5360\u4F4D\u56FE */
  const placeholderImgList = new Set();
  helper.createEffectOn(() => store.manga.imgList.filter(url => url && !placeholderImgList.has(url)), helper.throttle(imgList => {
    if (!imgList?.length || imgList.length - new Set(imgList).size <= 4) return;
    const repeatNumMap = new Map();
    for (const url of imgList) {
      const repeatNum = (repeatNumMap.get(url) ?? 0) + 1;
      repeatNumMap.set(url, repeatNum);
      if (repeatNum > 5) placeholderImgList.add(url);
    }
  }));

  /** \u6839\u636E\u5143\u7D20\u6240\u5728\u9AD8\u5EA6\u8FDB\u884C\u6392\u5E8F */
  const eleSortFn = (a, b) => a === undefined || b === undefined ? 0 : a.getBoundingClientRect().y - b.getBoundingClientRect().y;
  const imgBlackList = [
  // \u4E1C\u65B9\u6C38\u591C\u673A\u7684\u9884\u52A0\u8F7D\u56FE\u7247
  '#pagetual-preload',
  // 177picyy \u4E0A\u4F1A\u5728\u56FE\u7247\u4E0B\u52A0\u4E00\u4E2A noscript
  // \u672C\u6765\u53EA\u662F\u56FE\u7247\u5143\u7D20\u7684 html \u4EE3\u7801\uFF0C\u4F46\u7ECF\u8FC7\u4E1C\u65B9\u6C38\u591C\u673A\u52A0\u8F7D\u540E\u5C31\u4F1A\u53D8\u6210\u771F\u7684\u56FE\u7247\u5143\u7D20\uFF0C\u5BFC\u81F4\u91CD\u590D
  'noscript'];
  const getAllImg = () => helper.querySelectorAll(\`:not(\${imgBlackList.join(',')}) > img\`);

  /** \u83B7\u53D6\u5927\u6982\u7387\u662F\u6F2B\u753B\u56FE\u7247\u7684\u56FE\u7247\u5143\u7D20 */
  const getExpectImgList = () => helper.querySelectorAll(options.selector).filter(e => isLazyLoaded(e, imgMap.get(e)?.oldSrc) || !imgMap.has(e) || imgMap.get(e).triggedNum <= 5);

  /** \u5224\u65AD\u4E00\u4E2A\u56FE\u7247\u5143\u7D20\u662F\u5426\u7B26\u5408\u6807\u51C6 */
  const isDisplayImg = e => e.offsetHeight > 100 && e.offsetWidth > 100 && (e.naturalHeight > 500 && e.naturalWidth > 500 || isEleSelector(e, options.selector));
  let imgEleList;

  /** \u68C0\u67E5\u7B5B\u9009\u7B26\u5408\u6807\u51C6\u7684\u56FE\u7247\u5143\u7D20\u7528\u4E8E\u66F4\u65B0 imgList */
  const updateImgList = helper.singleThreaded(async _state => {
    imgEleList = await helper.wait(() => {
      /** \u5927\u6982\u7387\u662F\u6F2B\u753B\u56FE\u7247\u7684\u56FE\u7247\u5143\u7D20 */
      const expectImgs = options.selector ? new Set(getExpectImgList()) : undefined;
      let imgNum = 0;
      const newImgList = [];
      for (const e of getAllImg()) {
        if (isDisplayImg(e)) {
          newImgList.push(e);
          imgNum += 1;
        } else if (expectImgs?.has(e) && needTrigged(e)) newImgList.push(undefined);
      }
      return imgNum >= 2 && newImgList.sort(eleSortFn);
    });
    if (imgEleList.length === 0) return setState(state => {
      state.fab.show = false;
      state.manga.show = false;
    });

    // \u968F\u7740\u56FE\u7247\u7684\u589E\u52A0\uFF0C\u9700\u8981\u8865\u4E0A\u7A7A\u7F3A\u4F4D\u7F6E\uFF0C\u907F\u514D\u53D8\u6210\u7A00\u758F\u6570\u7EC4
    if (store.manga.imgList.length < imgEleList.length) setState('comicMap', '', 'imgList', [...store.manga.imgList, ...Array.from({
      length: imgEleList.length - store.manga.imgList.length
    }, () => '')]);
    // colamanga \u4F1A\u521B\u5EFA\u968F\u673A\u4E2A\u6570\u7684\u5047 img \u5143\u7D20\uFF0C\u5BFC\u81F4\u521A\u5F00\u59CB\u65F6\u9AD8\u4F30\u9875\u6570\uFF0C\u9700\u8981\u5220\u6389\u591A\u4F59\u7684\u9875\u6570
    else if (store.manga.imgList.length > imgEleList.length) setState('comicMap', '', 'imgList', store.manga.imgList.slice(0, imgEleList.length));
    let isEdited = false;
    await helper.plimit(imgEleList.map((e, i) => async () => {
      let newUrl = '';
      if (e) {
        newUrl = await handleImgUrl(e);
        if (placeholderImgList.has(newUrl)) newUrl = getDatasetUrl(e) ?? '';
      }
      if (newUrl === store.manga.imgList[i]) return;
      isEdited ||= true;
      setState('comicMap', '', 'imgList', i, newUrl);
    }));
    if (isEdited) saveImgEleSelector(imgEleList.filter(Boolean));
    if (isEdited || imgEleList.some(e => !e || needTrigged(e))) {
      await helper.sleep(1000);
      _state.continueRun();
    }
  });
  let timeout = false;

  /** \u53EA\u5728\`\u5F00\u542F\u4E86\u9605\u8BFB\u6A21\u5F0F\`\u548C\`\u5F53\u524D\u53EF\u663E\u793A\u56FE\u7247\u6570\u91CF\u4E0D\u8DB3\`\u65F6\u901A\u8FC7\u6EDA\u52A8\u89E6\u53D1\u61D2\u52A0\u8F7D */
  const runCondition = () => store.manga.show || !timeout && store.manga.imgList.length === 0;

  /** \u89E6\u53D1\u5927\u6982\u7387\u662F\u6F2B\u753B\u56FE\u7247\u7684\u61D2\u52A0\u8F7D */
  const triggerExpectImg = (num, time) => helper.wait(async () => {
    let expectImgList = getExpectImgList().filter(needTrigged);
    if (num) expectImgList = expectImgList.slice(0, num);
    await triggerLazyLoad(expectImgList, runCondition);
    return expectImgList.every(e => !needTrigged(e));
  }, time);
  const triggerAllLazyLoad = helper.singleThreaded(async () => {
    // \u4F18\u5148\u89E6\u53D1\u5927\u6982\u7387\u662F\u6F2B\u753B\u56FE\u7247\u7684\u61D2\u52A0\u8F7D
    if (options.selector) {
      await triggerExpectImg(3, 1000 * 5);
      await triggerExpectImg();
    }
    await triggerLazyLoad(getAllImg().filter(needTrigged).sort(eleSortFn), runCondition);

    // \u9488\u5BF9\u4E0D\u4F7F\u7528 img \u6765\u89E6\u53D1\u61D2\u52A0\u8F7D\u7684\u7F51\u7AD9\uFF0C\u8981\u627E\u5230\u56FE\u7247\u5BB9\u5668\u5143\u7D20\u518D\u5C1D\u8BD5\u89E6\u53D1\u61D2\u52A0\u8F7D
    // https://www.twmanga.com/comic/chapter/sanjiaoguanxirumen-founai/0_0.html
    if (imgEleList.length > 3) {
      let parent = imgEleList[0];
      // \u4ECE\u73B0\u6709\u7684\u56FE\u7247\u5143\u7D20\u5F00\u59CB\u5192\u6CE1\u67E5\u627E\uFF0C\u68C0\u67E5\u6BCF\u4E2A\u5C42\u7EA7\u4E0A\u662F\u5426\u6709\u8D85\u8FC75\u4E2A\u76F8\u4F3C\u7684\u5144\u5F1F\u5143\u7D20
      while (parent?.parentElement) {
        const siblingList = parent.parentElement.children;
        if (siblingList.length >= 5) {
          const {
            dataset
          } = parent;
          let sameNum = 0;
          for (const siblingDom of siblingList) {
            if (siblingDom === parent) continue;
            if ('dataset' in siblingDom && helper.isEqual(siblingDom.dataset, dataset)) {
              sameNum++;
              if (sameNum >= 5) break;
            }
          }
          if (sameNum >= 5) {
            await triggerLazyLoad(helper.querySelectorAll(getEleSelector(parent)), runCondition);
            break;
          }
        }
        parent = parent.parentElement;
      }
    }
  });
  const handleMutation = () => {
    updateImgList();
    triggerAllLazyLoad();
    setState('manga', getChapterSwitch());
  };
  /** \u76D1\u89C6\u9875\u9762\u5143\u7D20\u53D1\u751F\u53D8\u5316\u7684 Observer */
  const imgDomObserver = new MutationObserver(handleMutation);
  setState('comicMap', '', {
    async getImgList() {
      if (!imgEleList) {
        imgEleList = [];
        imgDomObserver.observe(document.body, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ['src']
        });
        handleMutation();
        setTimeout(() => {
          timeout = true;
          if (store.manga.imgList.length > 0) return;
          main.toast.warn(helper.t('site.simple.no_img'), {
            id: 'no_img',
            duration: Number.POSITIVE_INFINITY,
            async onClick() {
              await setOptions({
                remember_current_site: false
              });
              location.reload();
            }
          });
        }, 3000);
      }
      await helper.wait(() => store.manga.imgList.length);
      main.toast.dismiss('no_img');
      return store.manga.imgList;
    }
  });

  // \u540C\u6B65\u6EDA\u52A8\u663E\u793A\u7F51\u9875\u4E0A\u7684\u56FE\u7247\uFF0C\u7528\u4E8E\u4EE5\u9632\u4E07\u4E00\u4FDD\u5E95\u89E6\u53D1\u6F0F\u7F51\u4E4B\u9C7C
  setState('manga', 'onShowImgsChange', helper.throttle(showImgs => {
    if (!store.manga.show) return;
    imgEleList[[...showImgs].at(-1)]?.scrollIntoView({
      behavior: 'instant',
      block: 'end'
    });
  }, 1000));

  // \u5728\u9000\u51FA\u9605\u8BFB\u6A21\u5F0F\u65F6\u8DF3\u56DE\u4E4B\u524D\u7684\u6EDA\u52A8\u4F4D\u7F6E
  helper.createEffectOn(() => store.manga.show, show => {
    if (show) laseScroll = window.scrollY;else window.scroll({
      top: laseScroll,
      behavior: 'instant'
    });
  });

  // \u9488\u5BF9 SPA \u7F51\u7AD9\uFF0C\u5728\u7F51\u5740\u6539\u53D8\u540E\u6E05\u7A7A\u56FE\u7247
  helper.onUrlChange((lastUrl, nowUrl) => {
    if (!lastUrl || lastUrl.split('/').length === nowUrl.split('/').length) return;
    setState('comicMap', '', 'imgList', undefined);
  });
};

exports.otherSite = otherSite;
`;break;case"userscript/ehTagRules":o=`
// \u4F7F\u7528 i18n-ally \u6269\u5C55\u67E5\u770B\u5BF9\u5E94\u7684\u4E2D\u6587\u7FFB\u8BD1

// \u6982\u7387\u6807\u7B7E\u7684\u6807\u51C6\uFF1A\u6709A\u6807\u7B7E\u7684\u672C\u5B50\u4E2D\uFF0C\u53EA\u6709 10% \u7684\u672C\u5B50\u6CA1\u6709 B \u6807\u7B7E
// \u300C\`A\u6807\u7B7E -B\u6807\u7B7E\` \u7684\u641C\u7D22\u7ED3\u679C\u6570\u300D<\u300C\`A\u6807\u7B7E\` \u7684\u641C\u7D22\u7ED3\u679C\u6570\u300D\u7684 10%
// \u6709\u6CA1\u6709\u5FC5\u8981\u52A0\u4E0A\u590D\u6742\u89C4\u5219\u5462\uFF1F
// - \u7EC4\u5408\u6807\u7B7E
//   - \u5355\u6276\u5979 + \u5355\u5973\u4E3B = \u5927\u6982\u7387\u300C\u6276\u4E0A\u5973\u300D
// - \u6839\u636E\u6761\u4EF6\u5C06\u300C\u5927\u6982\u7387\u300D\u9650\u5B9A\u4E3A\u300C\u5FC5\u987B\u300D
//   - \u5355\u841D\u8389 + \u8D2B\u4E73 + (\u5355\u5973\u4E3B) = \u80AF\u5B9A\u65E0\u6CD5\u5171\u5B58
// - \u628A\u753B\u5ECA\u7C7B\u578B\u4E5F\u52A0\u8FDB\u6807\u7B7E\uFF0C\u65B9\u4FBF\u8FC7\u6EE4 CG \u96C6\u7B49\u56FE\u5E93
const rules = {"prerequisite":{"(x|f):incest":["f:cousin","f:aunt","f:daughter","f:mother","f:granddaughter","f:sister","f:grandmother","f:niece"],"(x|m):incest":["m:cousin"],"f:incest":["f:inseki","f:low_incest"],"m:incest":["m:inseki","m:low_incest"],"x:incest":["x:inseki","x:low_incest"],"f:group":["f:fff_threesome","f:ttt_threesome","f:fft_threesome","f:ttf_threesome"],"m:group":["m:mmm_threesome"],"x:group":["x:mmf_threesome","x:mmt_threesome","x:ttm_threesome","x:ffm_threesome","x:mtf_threesome","x:oyakodon","x:shimaidon","x:gang_rape"],"(x|f):group":["f:oyakodon","f:shimaidon","f:multiple_straddling","f:gang_rape","f:layer_cake","f:harem"],"(x|m):group":["m:oyakodon","m:shimaidon","m:multiple_straddling","m:gang_rape","m:layer_cake","m:harem"],"f:yuri":["f:fff_threesome"],"m:yaoi":["m:group","m:mmm_threesome"],"f:futanari":["f:ttt_threesome","f:fft_threesome","f:ttf_threesome","f:full-packaged_futanari"],"f:shemale":["f:ball-less_shemale"],"f:lolicon":["f:kodomo_doushi","x:kodomo_doushi","f:oppai_loli","f:mesugaki","f:low_lolicon"],"m:shotacon":["m:kodomo_doushi","x:kodomo_doushi"],"f:blowjob":["f:multimouth_blowjob","f:blowjob_face","f:deepthroat","f:focus_blowjob"],"m:blowjob":["m:multimouth_blowjob","m:blowjob_face","m:deepthroat","m:focus_blowjob"],"f:handjob":["f:multiple_handjob"],"m:handjob":["m:multiple_handjob"],"f:assjob":["f:multiple_assjob"],"m:assjob":["m:multiple_assjob"],"f:footjob":["f:multiple_footjob"],"m:footjob":["m:multiple_footjob"],"f:paizuri":["f:focus_paizuri"],"m:paizuri":["m:focus_paizuri"],"f:anal":["f:focus_anal","f:anal_intercourse","f:tail_plug"],"m:anal":["m:focus_anal","m:anal_intercourse","m:tail_plug"],"f:rape":["f:gang_rape"],"m:rape":["m:gang_rape"],"f:bondage":["f:fanny_packing","f:shibari"],"m:bondage":["m:fanny_packing","m:shibari"],"f:inflation":["f:cumflation"],"m:inflation":["m:cumflation"],"f:lactation":["f:milking"],"m:lactation":["m:milking"],"f:piercing":["f:nipple_piercing","f:genital_piercing"],"m:piercing":["m:nipple_piercing","m:genital_piercing"],"f:big_breasts":["f:huge_breasts","f:gigantic_breasts"],"f:huge_breasts":["f:gigantic_breasts"],"f:sex_toys":["f:tail_plug"],"m:sex_toys":["m:tail_plug"],"f:swimsuit":["f:bikini"],"m:swimsuit":["m:bikini"],"f:crossdressing":["f:schoolboy_uniform"],"f:monster_girl":["f:zombie"]},"conflict":{"f:females_only":["f:futanari","f:bisexual","f:ttt_threesome","f:fft_threesome","f:ttf_threesome","x:mmf_threesome","x:mmt_threesome","x:ttm_threesome","x:mtf_threesome","x:group","m:*","x:*"],"f:sole_female":["f:ttt_threesome","f:fft_threesome","x:mmt_threesome","x:ttm_threesome","m:mmm_threesome"],"f:sole_dickgirl":["f:fff_threesome","f:ttt_threesome","f:ttf_threesome","x:mmf_threesome","x:ttm_threesome","m:mmm_threesome"]},"possibleConflict":{"f:dark_skin":["f:tanlines"],"m:dark_skin":["m:tanlines"],"f:lolicon":["f:small_breasts"],"f:breast_feeding":["f:nipple_stimulation"]},"combo":{"f:kemonomimi":["f:horse_girl","f:dog_girl","f:mouse_girl","f:bunny_girl","f:catgirl","f:cowgirl","c:amiya","c:rosmontis","c:suzuran","c:shamare","c:schwarz"],"f:tail":["f:horse_girl","c:suzuran","c:schwarz","c:yuko_yoshida"],"f:leotard":["f:bunny_girl"],"f:horns":["f:oni","c:yuko_yoshida"],"f:horse_girl":["p:uma_musume_pretty_derby"],"f:halo":["p:blue_archive"],"f:zombie":["p:zombie_land_saga"],"f:hair_buns":["c:ayumu_uehara","c:yoshiko_tsushima","c:chisato_arashi","c:ceylon"],"f:twintails":["c:yu_takasaki","c:rurino_osawa","c:sayaka_murano","c:nico_yazawa","c:nozomi_tojo","c:ruby_kurosawa","c:ria_kazuno","c:arisa_ichigaya","c:himari_uehara","c:ako_udagawa","c:reona_nyubara","c:tsukushi_futaba","c:kotone_fujita"],"f:ponytail":["c:hime_anyoji","c:eli_ayase","c:honoka_kosaka","c:kanan_matsuura","c:seira_kazuno","c:ren_hazuki","c:saaya_yamabuki","c:nijika_ijichi","c:schwarz"],"f:very_long_hair":["c:hitori_gotou","c:nijika_ijichi","c:euphyllia_magenta"],"f:lolicon":["c:suzuran","c:shamare"],"f:wings":["c:remilia_scarlet","c:flandre_scarlet","c:koakuma"],"f:vampire":["c:remilia_scarlet","c:flandre_scarlet"],"f:demon_girl":["c:koakuma","c:yuko_yoshida"],"f:thick_eyebrows":["c:suletta_mercury"],"f:glasses":["c:junna_hoshimi"],"f:beauty_mark":["c:misuzu_hataya"],"m:crossdressing":["c:mizuki_akiyama"]}};
const getTagLintRules = () => {
  const shortNamespace = new Map([['p', 'parody'], ['c', 'character'], ['g', 'group'], ['a', 'artist'], ['m', 'male'], ['f', 'female'], ['x', 'mixed'], ['o', 'other']].map(([short, full]) => [new RegExp(\`\\\\b\${short}\\\\b(?=.*:)\`), full]));
  // \u5C06\u7F29\u5199\u7684\u547D\u540D\u7A7A\u95F4\u8F6C\u56DE\u5168\u62FC
  const getTagName = tag => {
    let fullTag = tag;
    for (const re of shortNamespace.keys()) if (re.test(fullTag)) {
      fullTag = fullTag.replace(re, shortNamespace.get(re));
    }
    return fullTag;
  };
  const createRuleMap = (map, reverse = false) => {
    const ruleMap = new Map();
    if (reverse) for (let [targetTag, tags] of Object.entries(map)) {
      targetTag = getTagName(targetTag);
      for (let tag of tags) {
        tag = getTagName(tag);
        if (ruleMap.has(tag)) ruleMap.get(tag).add(targetTag);else ruleMap.set(tag, new Set([targetTag]));
      }
    } else for (const [tag, targetTag] of Object.entries(map)) ruleMap.set(getTagName(tag), new Set(targetTag.map(getTagName)));
    return ruleMap;
  };
  return {
    prerequisite: createRuleMap(rules.prerequisite, true),
    conflict: createRuleMap(rules.conflict),
    possibleConflict: createRuleMap(rules.possibleConflict),
    // \u5199\u7684\u65F6\u5019\u4E3A\u4E86\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u4F5C\u54C1\u5206\u7C7B\u800C\u6CA1\u6709\u53CD\u8F6C
    // \u4F46\u4E3A\u4E86\u51CF\u5C11\u4EE3\u7801\uFF0C\u5728\u6253\u5305\u65F6\u53CD\u8F6C\u4E86\u4E0B\uFF0C\u6240\u4EE5\u5728\u7528\u65F6\u5F97\u518D\u53CD\u8F6C\u56DE\u53BB
    combo: createRuleMap(rules.combo, true)
  };
};

/** \u62C6\u5206\u591A\u4E2A\u547D\u540D\u7A7A\u95F4\u7684\u6807\u7B7E */
const splitTagNamespace = tag => {
  if (!tag.startsWith('(')) return [tag];
  const [, namespaces, tagName] = /\\((.+?)\\)(.+)/.exec(tag);
  return namespaces.split('|').map(namespace => \`\${namespace}\${tagName}\`);
};

/** \u5224\u65AD\u662F\u5426\u7F3A\u5C11\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u6807\u7B7E */
const isMissingNamespace = (tagList, ...namespaces) => {
  for (const namespace of namespaces) for (const tag of tagList) if (tag.startsWith(namespace)) return false;
  return true;
};

/** \u68C0\u67E5\u6807\u7B7E\u662F\u5426\u5B58\u5728 */
const hasTag = (tagList, tagName) => {
  if (tagName.startsWith('(')) for (const tag of splitTagNamespace(tagName)) if (tagList.has(tag)) return true;
  if (tagName.endsWith(':*')) return !isMissingNamespace(tagList, tagName.split(':*')[0]);
  return tagList.has(tagName);
};

/** \u5224\u65AD\u662F\u5426\u7F3A\u5C11\u6307\u5B9A\u6807\u7B7E */
const isMissingTags = (tagList, ...tags) => {
  for (const tag of tags) if (tagList.has(tag)) return false;
  return true;
};

exports.getTagLintRules = getTagLintRules;
exports.hasTag = hasTag;
exports.isMissingNamespace = isMissingNamespace;
exports.isMissingTags = isMissingTags;
exports.splitTagNamespace = splitTagNamespace;
`;break;case"main":o=`
const helper = require('helper');
const web = require('solid-js/web');
const Manga = require('components/Manga');
const Toast = require('components/Toast');
const solidJs = require('solid-js');
const Fab = require('components/Fab');
const IconButton = require('components/IconButton');
const fflate = require('fflate');
const request = require('request');

const MdSettings = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.3 7.3 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdCloudDownload = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdImageSearch = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 15v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.02c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1s-1 .45-1 1m-2.5 3H6.52c-.42 0-.65-.48-.39-.81l1.74-2.23a.5.5 0 0 1 .78-.01l1.56 1.88 2.35-3.02c.2-.26.6-.26.79.01l2.55 3.39c.25.32.01.79-.4.79m3.8-9.11c.48-.77.75-1.67.69-2.66-.13-2.15-1.84-3.97-3.97-4.2A4.5 4.5 0 0 0 11 6.5c0 2.49 2.01 4.5 4.49 4.5.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42zM15.5 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdImportContacts = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdMenuBook = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36 1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98-.75-.14-1.53-.2-2.3-.2-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5.92 0 1.83.09 2.7.28.46.1.8.51.8.98z"></path><path d="M13.98 11.01c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.54-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39-.08.01-.16.03-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.71-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03m0 2.66c-.32 0-.61-.2-.71-.52-.13-.39.09-.82.48-.94 1.53-.5 3.53-.66 5.36-.45.41.05.71.42.66.83s-.42.7-.83.66c-1.62-.19-3.39-.04-4.73.39a1 1 0 0 1-.23.03">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const useFab = mainContext => {
  const {
    store,
    setState,
    options,
    setOptions
  } = mainContext;
  helper.useStyle(\`
    #fab {
      --text-bg: transparent;

      position: fixed;
      right: calc(3vw - var(--left, 0px));
      bottom: calc(6vh - var(--top, 0px));

      font-size: clamp(12px, 1.5vw, 16px);
    }
  \`);
  helper.useStyleMemo('#fab', {
    '--left': () => \`\${options.fabPosition.left}px\`,
    '--top': () => \`\${options.fabPosition.top}px\`
  });
  const FabIcon = () => {
    switch (store.fab.progress) {
      case undefined:
        return MdImportContacts;
      // \u6CA1\u6709\u5185\u5BB9\u7684\u4E66
      case 1:
      case 2:
        return MdMenuBook;
      // \u6709\u5185\u5BB9\u7684\u4E66
      default:
        return store.fab.progress > 1 ? MdCloudDownload : MdImageSearch;
    }
  };
  const handleMount = ref => {
    const handleDrag = ({
      xy: [x, y],
      last: [lx, ly]
    }) => {
      const left = options.fabPosition.left + x - lx;
      const top = options.fabPosition.top + y - ly;
      setOptions({
        fabPosition: {
          left,
          top
        }
      });
    };
    helper.useDrag({
      ref,
      handleDrag,
      setCapture: true
    });

    // \u8D85\u51FA\u663E\u793A\u8303\u56F4\u5C31\u6062\u590D\u539F\u4F4D
    const observer = new IntersectionObserver(entries => {
      if (entries.length !== 1 || entries[0].isIntersecting) return;
      setOptions({
        fabPosition: {
          left: 0,
          top: 0
        }
      });
    }, {
      threshold: 0.5
    });
    observer.observe(ref);
  };
  const dom = helper.mountComponents('fab', () => {
    solidJs.createEffect(() => {
      setState('fab', {
        placement: -options.fabPosition.left < window.innerWidth / 2 ? 'left' : 'right',
        speedDialPlacement: -options.fabPosition.top < window.innerHeight / 2 ? 'top' : 'bottom'
      });
    });
    return web.createComponent(Fab.Fab, web.mergeProps({
      ref: handleMount
    }, () => store.fab, {
      get children() {
        return store.fab.children ?? web.createComponent(web.Dynamic, {
          get component() {
            return FabIcon();
          }
        });
      }
    }));
  });
  dom.style.setProperty('z-index', '2147483646', 'important');
  useSpeedDial(mainContext);
};

const MdClose = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdFileDownload = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const getExtName = mime => /.+\\/([^;]+)/.exec(mime)?.[1] ?? 'jpg';

/** \u4E0B\u8F7D\u6309\u94AE */
const DownloadButton = () => {
  const {
    store: state,
    setState
  } = helper.useStore({
    length: 0,
    /** undefined \u8868\u793A\u672A\u5F00\u59CB\u4E0B\u8F7D\uFF0C\u7B49\u4E8E length \u8868\u793A\u6B63\u5728\u6253\u5305\uFF0C-1 \u8868\u793A\u4E0B\u8F7D\u5B8C\u6210 */
    completedNum: undefined,
    errorNum: 0,
    rawTitle: document.title,
    showRawTitle: true
  });
  const progress = new helper.FaviconProgress();
  const handleDownload = async () => {
    const fileData = {};
    setState({
      errorNum: 0,
      length: Manga.imgList().length
    });
    if (state.showRawTitle) setState('rawTitle', document.title);
    const imgIndexNum = \`\${state.length}\`.length;
    for (let i = 0; i < state.length; i += 1) {
      setState('completedNum', i);
      const img = Manga.imgList()[i];
      if (Manga.store.option.translation.onlyDownloadTranslated && img.translationType !== 'show') continue;
      const index = \`\${i}\`.padStart(imgIndexNum, '0');
      const url = img.translationType === 'show' ? img.translationUrl : img.src;
      let data;
      let fileName;
      try {
        data = await Manga.downloadImg(url);
        fileName = img.name || \`\${index}.\${getExtName(data.type)}\`;
      } catch {
        fileName = \`\${index} - \${helper.t('alert.download_failed')}\`;
        setState('errorNum', num => num + 1);
      }
      fileData[fileName] = new Uint8Array((await data?.arrayBuffer()) ?? []);
    }
    if (Object.keys(fileData).length === 0) {
      Toast.toast.warn(helper.t('alert.no_img_download'));
      setState('completedNum', undefined);
      return;
    }
    setState('completedNum', state.length);
    const zipped = fflate.zipSync(fileData, {
      level: 0,
      comment: location.href
    });
    helper.saveAs(new Blob([zipped]), \`\${Manga.store.title || state.rawTitle}.zip\`);
    setState('completedNum', -1);
    Toast.toast(state.errorNum > 0 ? helper.t('button.download_completed_error', {
      errorNum: state.errorNum
    }) : helper.t('button.download_completed'), {
      type: state.errorNum > 0 ? 'warn' : 'success',
      onDismiss() {
        document.title = state.rawTitle;
        setState('showRawTitle', true);
        progress.recover();
      }
    });
  };
  const tip = solidJs.createMemo(() => {
    switch (state.completedNum) {
      case undefined:
        return helper.t('other.download');
      case state.length:
        return helper.t('button.packaging');
      case -1:
        return helper.t('button.download_completed');
      default:
        return \`\${helper.t('button.downloading')} - \${state.completedNum}/\${state.length}\`;
    }
  });

  // \u6839\u636E\u4E0B\u8F7D\u8FDB\u5EA6\u66F4\u65B0\u7F51\u9875\u6807\u9898
  helper.createEffectOn(() => state.completedNum, num => {
    let showTip = '';
    switch (num) {
      case undefined:
        return;
      case state.length:
        showTip = '\u{1F4E6}';
        break;
      case -1:
        showTip = state.errorNum > 0 ? \`\u2757[\${state.errorNum}]\` : '\u2705';
        break;
      default:
        showTip = \`\${num}/\${state.length}\`;
    }
    document.title = \`\${showTip} - \${state.rawTitle}\`;
    setState('showRawTitle', false);
  }, {
    defer: true
  });

  // \u6839\u636E\u4E0B\u8F7D\u8FDB\u5EA6\u66F4\u65B0\u7F51\u9875\u56FE\u6807
  helper.createEffectOn(() => state.completedNum, num => num && num > 0 && progress.update(num / state.length), {
    defer: true
  });
  return web.createComponent(IconButton.IconButton, {
    get tip() {
      return tip();
    },
    onClick: handleDownload,
    get enabled() {
      return state.completedNum !== undefined;
    },
    get children() {
      return web.createComponent(MdFileDownload, {});
    }
  });
};

let dom;

/**
 * \u663E\u793A\u6F2B\u753B\u9605\u8BFB\u7A97\u53E3
 */
const useManga = ({
  store,
  setState,
  options,
  setOptions
}) => {
  helper.useStyle(\`
    #comicRead {
      position: fixed;
      top: 0;
      left: 0;
      transform: scale(0);

      contain: strict;

      width: 100%;
      height: 100%;

      writing-mode: initial;
      font-size: 16px;

      opacity: 0;

      transition:
        opacity 300ms,
        transform 0s 300ms;
    }

    #comicRead[show] {
      transform: scale(1);
      opacity: 1;
      transition: opacity 300ms, transform 100ms;
    }

    /* \u9632\u6B62\u5176\u4ED6\u6269\u5C55\u7684\u5143\u7D20\u663E\u793A\u5230\u6F2B\u753B\u4E0A\u6765 */
    #comicRead[show] ~ :not(#fab, #toast, .comicread-ignore) {
      display: none !important;
      pointer-events: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      z-index: 1 !important;
    }
  \`);
  setState('manga', {
    show: false,
    option: options.option,
    defaultOption: options.defaultOption,
    onOptionChange: option => setOptions({
      option
    }),
    hotkeys: store.hotkeys,
    onHotkeysChange(newValue) {
      GM.setValue('@Hotkeys', newValue);
      setState('hotkeys', newValue);
    }
  });
  dom = helper.mountComponents('comicRead', () => web.createComponent(Manga.Manga, web.mergeProps(() => store.manga)));
  dom.style.setProperty('z-index', '2147483647', 'important');

  // \u786E\u4FDD toast \u53EF\u4EE5\u663E\u793A\u5728\u6F2B\u753B\u4E4B\u4E0A
  const toastDom = helper.querySelector('#toast');
  if (toastDom) dom.after(toastDom);
  const htmlStyle = document.documentElement.style;
  let lastOverflow = htmlStyle.overflow;
  const wakeLock = new helper.WakeLock();
  helper.createEffectOn(helper.createRootMemo(() => store.manga.show && store.manga.imgList.length > 0), show => {
    if (show) {
      dom.setAttribute('show', '');
      lastOverflow = htmlStyle.overflow;
      htmlStyle.setProperty('overflow', 'hidden', 'important');
      htmlStyle.setProperty('scrollbar-width', 'none', 'important');
      if (Manga.store.option.autoFullscreen) Manga.refs.root.requestFullscreen();
      wakeLock.on();
    } else {
      dom.removeAttribute('show');
      htmlStyle.overflow = lastOverflow;
      htmlStyle.removeProperty('scrollbar-width');
      wakeLock.off();
    }
  }, {
    defer: true
  });
  const ExitButton = () => web.createComponent(IconButton.IconButton, {
    get tip() {
      return helper.t('other.exit');
    },
    onClick: () => Manga.store.prop.onExit?.(),
    get children() {
      return web.createComponent(MdClose, {});
    }
  });
  setState('manga', {
    onExit: () => setState('manga', 'show', false),
    editButtonList(list) {
      // \u5728\u8BBE\u7F6E\u6309\u94AE\u4E0A\u65B9\u653E\u7F6E\u4E0B\u8F7D\u6309\u94AE
      list.splice(-1, 0, DownloadButton);
      return [...list,
      // \u518D\u5728\u6700\u4E0B\u9762\u6DFB\u52A0\u5206\u9694\u680F\u548C\u9000\u51FA\u6309\u94AE
      () => web.template(\`<hr>\`)(), ExitButton];
    }
  });
};

/** \u5224\u65AD\u7248\u672C\u53F71\u662F\u5426\u5C0F\u4E8E\u7248\u672C\u53F72 */
const versionLt = (version1, version2) => {
  const v1 = version1.split('.').map(Number);
  const v2 = version2.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    const num1 = v1[i] ?? 0;
    const num2 = v2[i] ?? 0;
    if (num1 !== num2) return num1 < num2;
  }
  return false;
};
const migrationOption = async (name, editFn) => {
  try {
    const option = await GM.getValue(name);
    if (!option) throw new Error(\`GM.getValue Error: not found \${name}\`);
    await editFn(option, () => GM.setValue(name, option));
  } catch (error) {
    helper.log.error(\`migration \${name} option error:\`, error);
  }
};

/** \u91CD\u547D\u540D\u914D\u7F6E\u9879 */
const renameOption = (name, list) => migrationOption(name, (option, save) => {
  for (const itemText of list) {
    const [path, newName] = itemText.split(' => ');
    helper.byPath(option, path, (parent, key) => {
      helper.log('rename Option', itemText);
      if (newName) Reflect.set(parent, newName, parent[key]);
      Reflect.deleteProperty(parent, key);
    });
  }
  return save();
});

/** \u65E7\u7248\u672C\u914D\u7F6E\u8FC1\u79FB */
const migration = async version => {
  // \u4EFB\u4F55\u6837\u5F0F\u4FEE\u6539\u90FD\u5F97\u66F4\u65B0 css \u624D\u884C\uFF0C\u5E72\u8106\u76F4\u63A5\u5220\u4E86
  GM.deleteValue('ehTagColorizeCss');
  GM.deleteValue('ehTagSortCss');
  const values = await GM.listValues();

  // 6 => 7
  if (versionLt(version, '7')) for (const key of values) {
    switch (key) {
      case 'Version':
      case 'Languages':
        continue;
      case 'HotKeys':
        {
          await renameOption(key, ['\u5411\u4E0A\u7FFB\u9875 => turn_page_up', '\u5411\u4E0B\u7FFB\u9875 => turn_page_down', '\u5411\u53F3\u7FFB\u9875 => turn_page_right', '\u5411\u5DE6\u7FFB\u9875 => turn_page_left', '\u8DF3\u81F3\u9996\u9875 => jump_to_home', '\u8DF3\u81F3\u5C3E\u9875 => jump_to_end', '\u9000\u51FA => exit', '\u5207\u6362\u9875\u9762\u586B\u5145 => switch_page_fill', '\u5207\u6362\u5377\u8F74\u6A21\u5F0F => switch_scroll_mode', '\u5207\u6362\u5355\u53CC\u9875\u6A21\u5F0F => switch_single_double_page_mode', '\u5207\u6362\u9605\u8BFB\u65B9\u5411 => switch_dir', '\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F => enter_read_mode']);
          break;
        }
      default:
        await renameOption(key, ['option.scrollbar.showProgress => showImgStatus', 'option.clickPage => clickPageTurn', 'option.clickPage.overturn => reverse', 'option.swapTurnPage => swapPageTurnKey', 'option.flipToNext => jumpToNext',
        // ehentai
        '\u5339\u914Dnhentai => associate_nhentai', '\u5FEB\u6377\u952E\u7FFB\u9875 => hotkeys_page_turn',
        // nhentai
        '\u81EA\u52A8\u7FFB\u9875 => auto_page_turn', '\u5F7B\u5E95\u5C4F\u853D\u6F2B\u753B => block_totally', '\u5728\u65B0\u9875\u9762\u4E2D\u6253\u5F00\u94FE\u63A5 => open_link_new_page',
        // other
        '\u8BB0\u4F4F\u5F53\u524D\u7AD9\u70B9 => remember_current_site']);
    }
  }

  // 8 => 9
  if (versionLt(version, '9')) for (const key of values) {
    switch (key) {
      case 'Version':
      case 'Languages':
        continue;
      case 'Hotkeys':
        {
          await renameOption(key, [
          // \u539F\u672C\u4E0A\u4E0B\u5FEB\u6377\u952E\u662F\u6DF7\u5728\u4E00\u8D77\u7684\uFF0C\u73B0\u5728\u5206\u5F00\u540E\u8981\u8FC1\u79FB\u592A\u9EBB\u70E6\u4E86\uFF0C\u5E94\u8BE5\u4E5F\u6CA1\u591A\u5C11\u4EBA\u6539\uFF0C\u5C31\u76F4\u63A5\u5220\u4E86
          'turn_page_up => ', 'turn_page_down => ', 'turn_page_right => scroll_right', 'turn_page_left => scroll_left']);
          break;
        }
      default:
        await migrationOption(key, (option, save) => {
          if (typeof option.option?.scrollMode !== 'boolean') return;
          option.option.scrollMode = {
            enabled: option.option.scrollMode,
            spacing: option.option.scrollModeSpacing,
            imgScale: option.option.scrollModeImgScale,
            fitToWidth: option.option.scrollModeFitToWidth
          };
          return save();
        });
    }
  }

  // 9.3 => 9.4
  if (versionLt(version, '9.4')) await migrationOption('ehentai', (option, save) => {
    if (!Reflect.has(option, 'hotkeys_page_turn')) return;
    option.hotkeys = option.hotkeys_page_turn;
    Reflect.deleteProperty(option, 'hotkeys_page_turn');
    return save();
  });

  // 11.4.2 => 11.5
  if (versionLt(version, '11.5')) await migrationOption('Hotkeys', (option, save) => {
    for (const [name, hotkeys] of Object.entries(option)) {
      option[name] = hotkeys.map(key => key.replaceAll(/\\b[A-Z]\\b/g, match => match.toLowerCase()));
    }
    return save();
  });
  if (versionLt(version, '11.9.1')) for (const key of values) {
    switch (key) {
      case 'Version':
      case 'Languages':
      case 'Hotkeys':
        continue;
      default:
        await renameOption(key, ['option.translation => ']);
    }
  }

  // 11.11 => 11.12
  if (versionLt(version, '11.12')) for (const key of values) {
    switch (key) {
      case 'Version':
      case 'Languages':
      case 'Hotkeys':
        continue;
      default:
        await renameOption(key, ['associate_nhentai => cross_site_link']);
    }
  }
  if (versionLt(version, '12')) for (const key of values) {
    switch (key) {
      case 'Version':
      case 'Languages':
      case 'Hotkeys':
        {
          await GM.setValue(\`@\${key}\`, await GM.getValue(key));
          await GM.deleteValue(key);
          continue;
        }
      default:
        await renameOption(key, ['hotkeys => add_hotkeys_actions']);
    }
  }
};


/** \u5904\u7406\u7248\u672C\u66F4\u65B0\u76F8\u5173 */
const handleVersionUpdate = async () => {
  const version = await GM.getValue('@Version');
  if (!version) return GM.setValue('@Version', GM.info.script.version);
  if (version === GM.info.script.version) return;
  await migration(version); // \u6BCF\u6B21\u7248\u672C\u66F4\u65B0\u90FD\u6267\u884C\u4E00\u904D\u8FC1\u79FB

  // \u53EA\u5728\u8BED\u8A00\u4E3A\u4E2D\u6587\u65F6\u5F39\u7A97\u63D0\u793A\u6700\u65B0\u66F4\u65B0\u5185\u5BB9
  if (helper.lang() === 'zh') {
    Toast.toast(() => /* eslint-disable i18next/no-literal-string */[(() => {
      var _el$ = web.template(\`<h2>\u{1F973} ComicRead \u5DF2\u66F4\u65B0\u5230 v\`)();
      web.insert(_el$, () => GM.info.script.version, null);
      return _el$;
    })(), web.template(\`<h3>\u4FEE\u590D\`)(), web.template(\`<ul><li><p>\u4FEE\u590D\u62F7\u8D1D\u6F2B\u753B\u7684\u5931\u6548 </p></li><li><p>\u4FEE\u590D\u5377\u8F74\u6A21\u5F0F\u4E0B\u6EDA\u52A8\u81F3\u5C3D\u5934\u540E\u65E0\u6CD5\u89E6\u53D1\u7ED3\u675F\u9875\u7684 bug </p></li><li><p>\u589E\u52A0\u5E76\u6392\u5377\u8F74\u6A21\u5F0F\u4E0B\uFF0C\u5411\u4E0A/\u4E0B\u7FFB\u9875\u5FEB\u6377\u952E\u7684\u6EDA\u52A8\u8DDD\u79BB </p></li><li><p>\u4FEE\u590D AdGuard \u7248\u5728\u90E8\u5206\u7F51\u7AD9\u4E0A\u672A\u751F\u6548\u7684 bug\`)(), web.createComponent(solidJs.Show, {
      get when() {
        return versionLt(version, '12');
      },
      get children() {
        return [web.template(\`<h3>\u65B0\u589E\`)(), web.template(\`<ul><li>\u5B9E\u73B0\u56FE\u7247\u653E\u5927\u529F\u80FD\uFF08\u9700\u8981\u6253\u5F00\u300C\u56FE\u50CF\u8BC6\u522B\u300D\u529F\u80FD\uFF09</li><li>\u589E\u52A0 ehentai \u5728\u7F29\u7565\u56FE\u5217\u8868\u9875\u91CC\u5C55\u5F00\u6807\u7B7E\u5217\u8868\u529F\u80FD\`)()];
      }
    })] /* eslint-enable i18next/no-literal-string */, {
      id: 'Version Tip',
      type: 'custom',
      duration: Number.POSITIVE_INFINITY,
      // \u624B\u52A8\u70B9\u51FB\u5173\u6389\u901A\u77E5\u540E\u624D\u4E0D\u4F1A\u518D\u6B21\u5F39\u51FA
      onDismiss: () => GM.setValue('@Version', GM.info.script.version)
    });

    // \u76D1\u542C\u50A8\u5B58\u7684\u7248\u672C\u6570\u636E\u7684\u53D8\u52A8\uFF0C\u5982\u679C\u548C\u5F53\u524D\u7248\u672C\u4E00\u81F4\u5C31\u5173\u6389\u5F39\u7A97
    // \u9632\u6B62\u5728\u66F4\u65B0\u7248\u672C\u540E\u4E00\u6B21\u6027\u6253\u5F00\u591A\u4E2A\u9875\u9762\uFF0C\u4E0D\u5F97\u4E0D\u4E00\u4E2A\u4E00\u4E2A\u5173\u8FC7\u53BB
    const listenerId = await GM.addValueChangeListener('@Version', async (_, __, newVersion) => {
      if (newVersion !== GM.info.script.version) return;
      Toast.toast.dismiss('Version Tip');
      await GM.removeValueChangeListener(listenerId);
    });
  } else await GM.setValue('@Version', GM.info.script.version);
};

/** \u5BF9\u57FA\u7840\u7684\u521D\u59CB\u5316\u64CD\u4F5C\u7684\u5C01\u88C5 */
const useInit = async (name, initSiteOptions = {}) => {
  await helper.setInitLang();
  await handleVersionUpdate();
  const defaultOptions = {
    option: undefined,
    defaultOption: undefined,
    autoShow: true,
    lockOption: false,
    hiddenFAB: false,
    fabPosition: {
      top: 0,
      left: 0
    },
    ...initSiteOptions
  };
  const saveOptions = await GM.getValue(name);
  // \u68C0\u67E5\u6E05\u7406\u4E0B\u5DF2\u4FDD\u5B58\u914D\u7F6E\u7684\u591A\u4F59\u9879
  if (saveOptions) {
    for (const key of Object.keys(saveOptions)) {
      if (Reflect.has(defaultOptions, key)) continue;
      Reflect.deleteProperty(saveOptions, key);
    }
  } else await GM.setValue(name, {});
  const {
    store,
    setState
  } = helper.useStore({
    fab: {
      tip: helper.t('other.read_mode'),
      show: false
    },
    manga: {
      imgList: []
    },
    hotkeys: await GM.getValue('@Hotkeys', {}),
    name,
    options: {
      ...structuredClone(defaultOptions),
      ...saveOptions
    },
    comicMap: {
      '': {
        getImgList: function init() {
          return [];
        }
      }
    },
    nowComic: '',
    flag: {
      isStored: saveOptions !== undefined,
      needAutoShow: true
    }
  });
  Manga.setDefaultHotkeys(_hotkeys => ({
    ..._hotkeys,
    enter_read_mode: ['v']
  }));
  const {
    options
  } = store;
  const setOptions = function (newOptions) {
    const {
      lockOption
    } = options;
    if (newOptions) setState(state => Object.assign(state.options, newOptions));
    if (lockOption && newOptions?.lockOption !== false) return;
    // \u53EA\u4FDD\u5B58\u548C\u9ED8\u8BA4\u8BBE\u7F6E\u4E0D\u540C\u7684\u90E8\u5206
    return GM.setValue(store.name, helper.difference(options, defaultOptions));
  };
  const loadComic = async (id = store.nowComic) => {
    if (!Reflect.has(store.comicMap, id)) throw new Error('comic not found');
    try {
      setState('comicMap', id, 'imgList', []);
      const newImgList = await store.comicMap[id].getImgList(main);
      if (newImgList.length === 0) throw new Error(helper.t('alert.fetch_comic_img_failed'));
      setState('comicMap', id, 'imgList', newImgList);
    } catch (error) {
      setState('comicMap', id, 'imgList', undefined);
      helper.log.error(error);
      throw error;
    }
  };
  const showComic = async (id = store.nowComic) => {
    if (!Reflect.has(store.comicMap, id)) throw new Error('comic not found');
    if (id !== store.nowComic) setState('nowComic', id);
    switch (store.comicMap[id].imgList?.length) {
      case 0:
        return Toast.toast.warn(helper.t('alert.repeat_load'), {
          duration: 1500
        });
      case undefined:
        {
          try {
            await loadComic(id);
            setState('flag', 'needAutoShow', false);
          } catch (error) {
            return Toast.toast.error(error.message);
          }
        }
    }
    setState('manga', 'show', true);
  };
  let inited = false;
  const init = () => {
    if (inited) return;
    inited = true;
    setState('fab', {
      onClick: showComic,
      show: !options.hiddenFAB && undefined
    });
    if (store.flag.needAutoShow && options.autoShow) showComic();
    (async () => {
      await GM.registerMenuCommand(helper.t('other.enter_comic_read_mode'), () => store.fab.onClick?.());
      await updateHideFabMenu();
    })();
    helper.linstenKeydown(e => {
      const code = helper.getKeyboardCode(e);
      if (Manga.hotkeysMap()[code] !== 'enter_read_mode') return;
      e.stopPropagation();
      e.preventDefault();
      store.fab.onClick?.();
    }, true);
  };

  // \u9996\u6B21\u8BBE\u7F6E\u9ED8\u8BA4\u6F2B\u753B\u7684\u52A0\u8F7D\u51FD\u6570\u65F6\uFF0C\u8FDB\u884C\u521D\u59CB\u5316
  helper.createEffectOn(() => store.comicMap[''].getImgList, (_, prev) => !prev && init(), {
    defer: true
  });
  const dynamicLoad = async (loadImgFn, length, id = '') => {
    if (store.comicMap[id].imgList?.length) return store.comicMap[id].imgList;
    setState('comicMap', id, 'imgList', Array.from({
      length: typeof length === 'number' ? length : length()
    }).fill(''));
    // oxlint-disable-next-line no-async-promise-executor
    await new Promise(async resolve => {
      try {
        await loadImgFn((i, img) => resolve(setState('comicMap', id, 'imgList', list => list.with(i, img))));
      } catch (error) {
        Toast.toast.error(error.message);
      }
    });
    return store.comicMap[id].imgList;
  };
  const main = {
    store,
    setState,
    options,
    setOptions,
    loadComic,
    showComic,
    dynamicLoad,
    init
  };
  useFab(main);
  useManga(main);
  const nowImgList = helper.createRootMemo(() => {
    const comic = store.comicMap[store.nowComic];
    if (!comic?.imgList) return undefined;
    if (!comic.adList?.size) return comic.imgList;
    return comic.imgList.filter((_, i) => !comic.adList?.has(i));
  });
  helper.createEffectOn(nowImgList, list => list && setState('manga', 'imgList', list));

  /** \u5F53\u524D\u5DF2\u53D6\u5F97 url \u7684\u56FE\u7247\u6570\u91CF */
  const doneImgNum = helper.createRootMemo(() => nowImgList()?.filter(Boolean)?.length);

  /** \u5DF2\u52A0\u8F7D\u5B8C\u6BD5\u7684\u56FE\u7247\u6570\u91CF */
  const loadedImgNum = helper.createRootMemo(() => {
    let i = 0;
    for (const img of Manga.imgList()) if (img.loadType === 'loaded') i += 1;
    return i;
  });

  // \u8BBE\u7F6E Fab \u7684\u663E\u793A\u8FDB\u5EA6
  helper.createEffectOn([doneImgNum, loadedImgNum, () => nowImgList()?.length], ([doneNum, loadNum, totalNum]) => {
    if (!totalNum || doneNum === undefined) return setState('fab', 'progress', undefined);
    if (totalNum === 0) return setState('fab', {
      progress: 0,
      tip: \`\${helper.t('other.loading_img')} - \${doneNum}/\${totalNum}\`
    });

    // \u52A0\u8F7D\u56FE\u7247 url \u9636\u6BB5\u7684\u8FDB\u5EA6
    if (doneNum < totalNum) return setState('fab', {
      progress: doneNum / totalNum,
      tip: \`\${helper.t('other.loading_img')} - \${doneNum}/\${totalNum}\`
    });

    // \u56FE\u7247\u52A0\u8F7D\u9636\u6BB5\u7684\u8FDB\u5EA6
    if (loadNum < totalNum) return setState('fab', {
      progress: 1 + loadNum / totalNum,
      tip: \`\${helper.t('other.img_loading')} - \${loadNum}/\${totalNum}\`
    });
    return setState('fab', {
      progress: 1 + loadNum / totalNum,
      tip: helper.t('other.read_mode'),
      show: !options.hiddenFAB && undefined
    });
  });
  let menuId;
  /** \u66F4\u65B0\u663E\u793A/\u9690\u85CF\u60AC\u6D6E\u6309\u94AE\u7684\u83DC\u5355\u9879 */
  const updateHideFabMenu = async () => {
    await GM.unregisterMenuCommand(menuId);
    menuId = await GM.registerMenuCommand(options.hiddenFAB ? helper.t('other.fab_show') : helper.t('other.fab_hidden'), async () => {
      await setOptions({
        hiddenFAB: !options.hiddenFAB
      });
      setState('fab', 'show', !options.hiddenFAB && undefined);
      await updateHideFabMenu();
    });
  };
  await GM.registerMenuCommand(helper.t('site.show_settings_menu'), () => setState('fab', {
    show: true,
    focus: true,
    tip: helper.t('other.setting'),
    children: web.createComponent(MdSettings, {}),
    onBackdropClick: () => setState('fab', {
      show: false,
      focus: false
    })
  }));
  return main;
};

/** \u5BF9\u7B80\u5355\u7AD9\u70B9\u7684\u901A\u7528\u89E3 */
const universal = async ({
  name,
  wait: waitFn,
  getImgList,
  onPrev,
  onNext,
  onExit,
  onShowImgsChange,
  getCommentList,
  initOptions,
  SPA
}) => {
  if (SPA?.isMangaPage) await helper.waitUrlChange(SPA.isMangaPage);
  if (waitFn) await helper.wait(waitFn);
  const mainContext = await useInit(name, initOptions);
  const {
    store,
    setState,
    showComic
  } = mainContext;
  setState('comicMap', '', {
    getImgList: () => getImgList(mainContext)
  });
  setState('manga', 'onShowImgsChange', onShowImgsChange);
  if (onExit) setState('manga', {
    onExit: isEnd => {
      onExit?.(isEnd);
      setState('manga', 'show', false);
    }
  });
  if (!SPA) {
    if (onNext ?? onPrev) setState('manga', {
      onNext,
      onPrev
    });
    if (getCommentList) setState('manga', 'commentList', await getCommentList());
    return;
  }
  helper.onUrlChange(async () => {
    if (SPA.isMangaPage && !(await SPA.isMangaPage())) return setState(state => {
      state.fab.show = false;
      state.manga.show = false;
      state.comicMap[''].imgList = undefined;
    });
    if (waitFn) await helper.wait(waitFn);
    setState(state => {
      state.fab.show = undefined;
      state.manga.onPrev = undefined;
      state.manga.onNext = undefined;
      state.flag.needAutoShow = state.options.autoShow;
      state.comicMap[''].imgList = undefined;
    });
    if (store.options.autoShow) await showComic('');
    await Promise.all([(async () => getCommentList && setState('manga', 'commentList', await getCommentList()))(), (async () => SPA.getOnPrev && setState('manga', {
      onPrev: await helper.wait(SPA.getOnPrev, 5000)
    }))(), (async () => SPA.getOnNext && setState('manga', {
      onNext: await helper.wait(SPA.getOnNext, 5000)
    }))()]);
  }, SPA?.handleUrl);
};

const MdAutoFixHigh = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m20.45 6 .49-1.06L22 4.45a.5.5 0 0 0 0-.91l-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05c.17.39.73.39.9 0M8.95 6l.49-1.06 1.06-.49a.5.5 0 0 0 0-.91l-1.06-.48L8.95 2a.492.492 0 0 0-.9 0l-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49L8.05 6c.17.39.73.39.9 0m10.6 7.5-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49.49 1.06a.5.5 0 0 0 .91 0l.49-1.06 1.05-.5a.5.5 0 0 0 0-.91l-1.06-.49-.49-1.06c-.17-.38-.73-.38-.9.01m-1.84-4.38-2.83-2.83a.996.996 0 0 0-1.41 0L2.29 17.46a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L17.7 10.53c.4-.38.4-1.02.01-1.41m-3.5 2.09L12.8 9.8l1.38-1.38 1.41 1.41z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdAutoFixOff = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="m22 3.55-1.06-.49L20.45 2a.5.5 0 0 0-.91 0l-.49 1.06-1.05.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05a.5.5 0 0 0 .91 0l.49-1.06L22 4.45c.39-.17.39-.73 0-.9m-7.83 4.87 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-2.17 2.17 1.41 1.41zM2.1 4.93l6.36 6.36-6.17 6.17a.996.996 0 0 0 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l6.17-6.17 6.36 6.36a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdFlashOff = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M16.12 11.5a.995.995 0 0 0-.86-1.5h-1.87l2.28 2.28zm.16-8.05c.33-.67-.15-1.45-.9-1.45H8c-.55 0-1 .45-1 1v.61l6.13 6.13zm2.16 14.43L4.12 3.56a.996.996 0 1 0-1.41 1.41L7 9.27V12c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l2.65-4.55 3.44 3.44c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdFlashOn = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdLockOpen = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6-5h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-.14.54.18 1.08.72 1.22a1 1 0 0 0 1.22-.72A2.996 2.996 0 0 1 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 11c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const MdLock = (props = {}) => (() => {
  var _el$ = web.template(\`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z">\`)();
  web.spread(_el$, props, true, true);
  return _el$;
})();

const useSpeedDial = ({
  store,
  setState,
  options,
  setOptions
}) => {
  const DefaultButton = props => web.createComponent(IconButton.IconButton, {
    get placement() {
      return store.fab.placement;
    },
    showTip: true,
    get tip() {
      return props.showName ?? (helper.t(\`site.add_feature.\${props.optionName}\`) || helper.t(\`other.\${props.optionName}\`) || props.optionName);
    },
    onClick: () => setOptions({
      [props.optionName]: !options[props.optionName]
    }),
    get children() {
      return props.children ?? (options[props.optionName] ? web.createComponent(MdAutoFixHigh, {}) : web.createComponent(MdAutoFixOff, {}));
    }
  });
  helper.createEffectOn(() => store.fab.otherSpeedDial, () => {
    const list = [() => web.createComponent(DefaultButton, {
      optionName: "autoShow",
      get showName() {
        return helper.t('site.add_feature.auto_show');
      },
      get children() {
        return web.memo(() => !!options.autoShow)() ? web.createComponent(MdFlashOn, {}) : web.createComponent(MdFlashOff, {});
      }
    }), () => web.createComponent(DefaultButton, {
      optionName: "lockOption",
      get showName() {
        return helper.t('site.add_feature.lock_option');
      },
      get children() {
        return web.memo(() => !!options.lockOption)() ? web.createComponent(MdLock, {}) : web.createComponent(MdLockOpen, {});
      }
    })];
    if (store.fab.otherSpeedDial) {
      for (const optionName of store.fab.otherSpeedDial) list.push(() => web.createComponent(DefaultButton, {
        optionName: optionName
      }));
    } else {
      for (const optionName of Object.keys(options)) {
        switch (optionName) {
          case 'hiddenFAB':
          case 'option':
          case 'autoShow':
          case 'lockOption':
            continue;
          default:
            if (typeof options[optionName] === 'boolean') list.push(() => web.createComponent(DefaultButton, {
              optionName: optionName
            }));
        }
      }
    }
    setState('fab', 'speedDial', list);
  });
};

const triggerOptions = !web.isServer && solidJs.DEV ? { equals: false, name: "trigger" } : { equals: false };
const triggerCacheOptions = !web.isServer && solidJs.DEV ? { equals: false, internal: true } : triggerOptions;
class TriggerCache {
    #map;
    constructor(mapConstructor = Map) {
        this.#map = new mapConstructor();
    }
    dirty(key) {
        if (web.isServer)
            return;
        this.#map.get(key)?.$$();
    }
    dirtyAll() {
        if (web.isServer)
            return;
        for (const trigger of this.#map.values())
            trigger.$$();
    }
    track(key) {
        if (!solidJs.getListener())
            return;
        let trigger = this.#map.get(key);
        if (!trigger) {
            const [$, $$] = solidJs.createSignal(undefined, triggerCacheOptions);
            this.#map.set(key, (trigger = { $, $$, n: 1 }));
        }
        else
            trigger.n++;
        solidJs.onCleanup(() => {
            // remove the trigger when no one is listening to it
            if (--trigger.n === 0)
                // microtask is to avoid removing the trigger used by a single listener
                queueMicrotask(() => trigger.n === 0 && this.#map.delete(key));
        });
        trigger.$();
    }
}

const $KEYS = Symbol("track-keys");
/**
 * A reactive version of a Javascript built-in \`Set\` class.
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/set#ReactiveSet
 * @example
 * const set = new ReactiveSet([1,2,3]);
 * [...set] // reactive on any change
 * set.has(2) // reactive on change to the result
 * // apply changes
 * set.add(4)
 * set.delete(2)
 * set.clear()
 */
class ReactiveSet extends Set {
    #triggers = new TriggerCache();
    constructor(values) {
        super();
        if (values)
            for (const value of values)
                super.add(value);
    }
    [Symbol.iterator]() {
        return this.values();
    }
    get size() {
        this.#triggers.track($KEYS);
        return super.size;
    }
    has(value) {
        this.#triggers.track(value);
        return super.has(value);
    }
    keys() {
        return this.values();
    }
    *values() {
        this.#triggers.track($KEYS);
        for (const value of super.values()) {
            yield value;
        }
    }
    *entries() {
        this.#triggers.track($KEYS);
        for (const entry of super.entries()) {
            yield entry;
        }
    }
    forEach(callbackfn, thisArg) {
        this.#triggers.track($KEYS);
        super.forEach(callbackfn, thisArg);
    }
    add(value) {
        if (!super.has(value)) {
            super.add(value);
            solidJs.batch(() => {
                this.#triggers.dirty(value);
                this.#triggers.dirty($KEYS);
            });
        }
        return this;
    }
    delete(value) {
        const result = super.delete(value);
        if (result) {
            solidJs.batch(() => {
                this.#triggers.dirty(value);
                this.#triggers.dirty($KEYS);
            });
        }
        return result;
    }
    clear() {
        if (!super.size)
            return;
        solidJs.batch(() => {
            this.#triggers.dirty($KEYS);
            for (const member of super.values()) {
                this.#triggers.dirty(member);
            }
            super.clear();
        });
    }
}

exports.toast = Toast.toast;
exports.request = request.request;
exports.ReactiveSet = ReactiveSet;
exports.handleVersionUpdate = handleVersionUpdate;
exports.universal = universal;
exports.useInit = useInit;
exports.useSpeedDial = useSpeedDial;
`;break;default:o=getResource(t)}if(t.startsWith("worker/")&&supportWorker)try{const n=new Map;n.set("Comlink",getResource("comlink"));const r=g=>g.replaceAll(/require\('(.+?)'\)/g,(m,d)=>(n.has(d)||n.set(d,r(getResource(d))),`moduleMap['${d}']`)),s=r(o);let h=`const moduleMap = {};
`;for(const[g,m]of n)h+=`
moduleMap['${g}'] = {};
(function (exports, module) { ${m} }) (
  moduleMap['${g}'],
  {
    set exports(value) { moduleMap['${g}'] = value; },
    get exports() { return moduleMap['${g}']; }
  },
);
`;h+=`
const exports = {};
${s}
moduleMap['Comlink'].expose(exports);`;const l=URL.createObjectURL(new Blob([h],{type:"text/javascript"}));setTimeout(URL.revokeObjectURL,0,l);const c=new Worker(l);crsLib[t]=require("comlink").wrap(c);return}catch{supportWorker=!1}let a=`
    (function (process, require, exports, module, ${gmApiList.join(", ")}) {
      ${o}
    })(
      window['${tempName}'].process,
      window['${tempName}'].require,
      window['${tempName}']['${t}'],
      ((module) => ({
        set exports(value) { module['${t}'] = value; },
        get exports() { return module['${t}']; },
      }))(window['${tempName}']),
      ${gmApiList.map(n=>`window['${tempName}'].${n}`).join(", ")}
    );
  `;unsafeWindow[tempName]=crsLib,unsafeWindow[tempName][t]={},evalCode(a),Reflect.deleteProperty(unsafeWindow,tempName)},require=t=>{const o={value:!0},a=()=>{};a.default={};const n=new Proxy(a,{get(r,s){return s==="__esModule"?o:s==="default"?n:(crsLib[t]||selfImportSync(t),Reflect.has(crsLib[t],"default")&&Reflect.has(crsLib[t].default,s)?crsLib[t].default[s]:crsLib[t][s])},apply(r,s,h){crsLib[t]||selfImportSync(t);const l=crsLib[t];return(typeof l.default=="function"?l.default:l)(...h)},construct(r,s){crsLib[t]||selfImportSync(t);const h=crsLib[t],l=typeof h.default=="function"?h.default:h;return new l(...s)}});return n};crsLib.require=require;const Manga=require("components/Manga"),helper=require("helper"),languages=require("helper/languages"),main=require("main"),otherSite=require("userscript/otherSite");let options;try{switch(location.hostname){case"bbs.yamibo.com":{const t=require("solid-js/web"),o=require("solid-js"),a=require("helper"),n=require("main");(async()=>{const{setState:r,options:s,showComic:h,loadComic:l}=await n.useInit("yamibo",{\u8BB0\u5F55\u9605\u8BFB\u8FDB\u5EA6:!0,\u5173\u95ED\u5FEB\u6377\u5BFC\u822A\u7684\u8DF3\u8F6C:!0,\u4FEE\u6B63\u70B9\u51FB\u9875\u6570\u65F6\u7684\u8DF3\u8F6C\u5224\u5B9A:!0,\u56FA\u5B9A\u5BFC\u822A\u6761:!0,\u81EA\u52A8\u7B7E\u5230:!0});if(a.useStyle(`#fab { --fab: #6E2B19; }

    ${s.\u56FA\u5B9A\u5BFC\u822A\u6761?".header-stackup { position: fixed !important }":""}

    .historyTag {
      white-space: nowrap;

      border: 2px solid #6e2b19;
    }

    a.historyTag {
      font-weight: bold;

      margin-left: 1em;
      padding: 1px 4px;

      color: #6e2b19;
      border-radius: 4px 0 0 4px;
    }
    a.historyTag:last-child {
      border-radius: 4px;
    }

    div.historyTag {
      display: initial;

      margin-left: -.4em;
      padding: 1px;

      color: RGB(255, 237, 187);
      border-radius: 0 4px 4px 0;
      background-color: #6e2b19;
    }

    #threadlisttableid tbody:nth-child(2n) div.historyTag {
      color: RGB(255, 246, 215);
    }

    /* \u5C06\u300C\u56DE\u590D/\u67E5\u770B\u300D\u5217\u52A0\u5BBD\u4E00\u70B9 */
    .tl .num {
      width: 80px !important;
    }
    `),unsafeWindow.discuz_uid&&unsafeWindow.discuz_uid!=="0"&&s.\u81EA\u52A8\u7B7E\u5230&&(async()=>{const c=new Date().toLocaleDateString("zh-CN");if(c===localStorage.getItem("signDate"))return;const g=a.querySelector('#scbar_form > input[name="formhash"]')?.value;if(g)try{const d=await(await fetch(`plugin.php?id=zqlj_sign&sign=${g}`)).text();if(!/成功！|打过卡/.test(d))throw new Error("\u81EA\u52A8\u7B7E\u5230\u5931\u8D25");n.toast.success("\u81EA\u52A8\u7B7E\u5230\u6210\u529F"),localStorage.setItem("signDate",c)}catch{n.toast.error("\u81EA\u52A8\u7B7E\u5230\u5931\u8D25")}})(),s.\u5173\u95ED\u5FEB\u6377\u5BFC\u822A\u7684\u8DF3\u8F6C&&a.querySelector("#qmenu a")?.setAttribute("href","javascript:;"),/thread(?:-\d+){3}|mod=viewthread/.test(document.URL)){for(const m of a.querySelectorAll('img[file*="sinaimg.cn"]'))m.setAttribute("referrerpolicy","no-referrer");const c=()=>{!a.querySelector(".pg > .prev")||r("flag","needAutoShow",!1);let d=a.querySelectorAll(":is(.t_fsz, .message) img");const _=()=>{let b=d.length;for(;b--;){const u=d[b],f=u.getAttribute("file");f&&u.src!==f&&(u.setAttribute("src",f),u.setAttribute("lazyloaded","true")),(u.src.includes("static/image")||u.complete&&u.naturalHeight&&u.naturalWidth&&u.naturalHeight<500&&u.naturalWidth<500)&&d.splice(b,1)}return d.map(u=>u.src)};r("comicMap","",{getImgList:_}),r("manga",{onLoading(b,u){if(u&&u.width<500&&u.height<500)return l()},onExit(b){b&&a.scrollIntoView(".psth, .rate, #postlist > div:nth-of-type(2)"),r("manga","show",!1)}}),a.querySelector("div.pti > div.authi")&&(a.querySelector("div.pti > div.authi").insertAdjacentHTML("beforeend",'<span class="pipe show">|</span><a id="comicReadMode" class="show" href="javascript:;">\u6F2B\u753B\u9605\u8BFB</a>'),document.getElementById("comicReadMode")?.addEventListener("click",()=>h())),a.querySelector("#threadindex")&&a.hijackFn("ajaxinnerhtml",()=>{d=a.querySelectorAll(".t_fsz img"),!(d.length===0||_().length===0)&&s.autoShow&&h()});const w=a.querySelector(".ptg.mbm.mtn > a");if(w){const[,b]=w.href.split("id="),u=/(?<=<th>\s<a href="thread-)\d+(?=-)/g;let f=[];const S=async(x=1)=>{const y=[...(await n.request(`/misc.php?mod=tag&id=${b}&type=thread&page=${x}`)).responseText.matchAll(u)].map(([p])=>Number(p));f=[...f,...y];const v=f.indexOf(unsafeWindow.tid);return y.length>0&&(v===-1||!f[v+1])?S(x+1):r("manga",{onPrev:f[v-1]?()=>location.assign(`thread-${f[v-1]}-1-1.html`):void 0,onNext:f[v+1]?()=>location.assign(`thread-${f[v+1]}-1-1.html`):void 0})};setTimeout(S)}},g=unsafeWindow.fid??Number(new URLSearchParams(a.querySelector("h2 > a")?.href).get("fid")??"-1");if(g===30||g===37)c();else{a.querySelector("div.pti > div.authi").insertAdjacentHTML("beforeend",'<span class="pipe show">|</span><a id="comicReadMode" class="show" href="javascript:;">\u6F2B\u753B\u9605\u8BFB</a>');const m=document.getElementById("comicReadMode");m?.addEventListener("click",()=>{m.previousElementSibling?.remove(),m.remove(),c(),h()})}if(s.\u8BB0\u5F55\u9605\u8BFB\u8FDB\u5EA6){const m=unsafeWindow.tid??new URLSearchParams(location.search).get("tid")??/\/thread-(\d+)-\d+-\d+.html/.exec(location.pathname)?.[1];if(!m)return;let d;try{const I=await n.request(`/api/mobile/index.php?module=viewthread&tid=${m}`,{responseType:"json",errorText:"\u83B7\u53D6\u5E16\u5B50\u56DE\u590D\u6570\u65F6\u51FA\u9519",noTip:!0});d=Number.parseInt(I.response?.Variables?.thread?.allreplies,10)}catch{}const _=Number.parseInt(a.querySelector("#pgt strong")?.textContent??a.querySelector("#dumppage")?.value??"1",10),w=await a.useCache({history:"tid"}),b=await w.get("history",`${m}`);if(b&&_<b.lastPageNum)return;const u=a.querySelectorAll(b?.lastAnchor&&_===b.lastPageNum?`#${b.lastAnchor} ~ div`:"#postlist > div, .plc.cl");if(u.length===0)return;let f=0;const S=I=>{f&&window.clearTimeout(f),f=window.setTimeout(async()=>{f=0,await w.set("history",I)},200)},x=new IntersectionObserver(I=>{const y=I.find(p=>p.isIntersecting);if(!y)return;const v=u.indexOf(y.target);if(v!==-1){for(const p of u.splice(0,v+1))x.unobserve(p);S({tid:`${m}`,lastPageNum:_,lastReplies:d||b?.lastReplies||0,lastAnchor:y.target.id})}},{rootMargin:"-160px"});for(const I of u)x.observe(I)}return}if(/forum(?:-\d+){2}|mod=forumdisplay/.test(document.URL)){if(s.\u4FEE\u6B63\u70B9\u51FB\u9875\u6570\u65F6\u7684\u8DF3\u8F6C\u5224\u5B9A){const c=a.querySelectorAll(".tps>a");let g=c.length;for(;g--;)c[g].setAttribute("onClick","atarget(this)")}if(s.\u8BB0\u5F55\u9605\u8BFB\u8FDB\u5EA6){const c=await a.useCache({history:"tid"}),g=!document.querySelector("#flk"),[m,d]=o.createSignal(!1),_=()=>d(f=>!f);let w="tbody[id^=normalthread]",b=f=>f.id.split("_")[1],u=(f,S)=>`thread-${S}-${f.lastPageNum}-1.html#${f.lastAnchor}`;g&&(w=".threadlist li.list",b=f=>new URLSearchParams(f.children[1].getAttribute("href")).get("tid"),u=(f,S)=>`forum.php?mod=viewthread&tid=${S}&extra=page%3D1&mobile=2&page=${f.lastPageNum}#${f.lastAnchor}`);for(const f of a.querySelectorAll(w)){const S=b(f);t.render(()=>{const[x,I]=o.createSignal();a.createEffectOn(m,()=>c.get("history",S).then(I));const y=o.createMemo(()=>x()?u(x(),S):""),v=o.createMemo(()=>!g&&x()?Number(f.querySelector(".num a").innerHTML)-x().lastReplies:0),p=()=>[(()=>{var $=t.template("<a class=historyTag>\u56DE\u7B2C<!>\u9875 ")(),M=$.firstChild,C=M.nextSibling;return t.addEventListener($,"click",unsafeWindow.atarget,!0),t.insert($,()=>x()?.lastPageNum,C),t.effect(()=>t.setAttribute($,"href",y())),$})(),t.createComponent(o.Show,{get when(){return v()>0},get children(){var $=t.template("<div class=historyTag>+")();return t.insert($,v,null),$}})],k=()=>(()=>{var $=t.template("<li><a>\u56DE\u7B2C<!>\u9875")(),M=$.firstChild,C=M.firstChild,L=C.nextSibling;return t.addEventListener(M,"click",unsafeWindow.atarget,!0),t.setStyleProperty(M,"color","unset"),t.insert(M,()=>x()?.lastPageNum,L),t.effect(()=>t.setAttribute(M,"href",y())),$})();return t.createComponent(o.Show,{get when(){return!!x()},get children(){return t.createComponent(o.Show,{when:g,get children(){return k()},get fallback(){return p()}})}})},g?f.children[3]:f.getElementsByTagName("th")[0])}document.addEventListener("visibilitychange",_),a.querySelector("#autopbn")?.addEventListener("click",_)}}})().catch(r=>a.log.error(r)),t.delegateEvents(["click"]);break}case"www.yamibo.com":{if(!location.pathname.includes("/manga/view-chapter"))break;const t=new URLSearchParams(location.search).get("id");if(!t)break;const o=Number(helper.querySelector("section div:first-of-type div:last-of-type").innerHTML.split("\uFF1A")[1]);if(Number.isNaN(o))throw new Error(helper.t("site.changed_load_failed"));const a=async r=>{const s=await main.request(`https://www.yamibo.com/manga/view-chapter?id=${t}&page=${r}`);return/(?<=<img id=['"]imgPic['"].+?src=['"]).+?(?=['"])/.exec(s.responseText)[0].replaceAll("&amp;","&").replaceAll("http://","https://")},n=r=>helper.plimit(helper.range(o,s=>async()=>r(s,await a(s+1))));options={name:"newYamibo",getImgList:({dynamicLoad:r})=>r(n,o),onNext:helper.querySelectorClick("#btnNext"),onPrev:helper.querySelectorClick("#btnPrev"),onExit:r=>r&&helper.scrollIntoView("#w1")};break}case"comic.idmzj.com":case"comic.dmzj.com":case"manhua.idmzj.com":case"manhua.dmzj.com":{const t=require("solid-js/web"),o=require("solid-js"),a=require("helper"),n=require("main"),r=require("userscript/dmzjApi");(async()=>{const s=async()=>{const[,d,_]=location.pathname.split(/\/|\./);return d||n.toast.error("\u6F2B\u753B\u6570\u636E\u83B7\u53D6\u5931\u8D25",{duration:Number.POSITIVE_INFINITY,throw:new Error("\u83B7\u53D6\u6F2B\u753B\u62FC\u97F3\u7B80\u79F0\u5931\u8D25")}),{comicId:await r.getComicId(d),chapterId:_}},h=async()=>{if(await a.waitDom(".commentBox"),!a.querySelector(".cartoon_online_border > img"))return!1;a.querySelector(".cartoon_online_border").innerHTML="\u83B7\u53D6\u6F2B\u753B\u6570\u636E\u4E2D";for(const _ of a.querySelectorAll(".odd_anim_title ~ *"))_.remove();const{comicId:d}=await s();return t.render(()=>{const _=r.useComicDetail(d);return t.createComponent(o.For,{get each(){return _.chapters},children:({name:w,list:b})=>[(()=>{var u=t.template('<div class=photo_part><div class=h2_title2><span class="h2_icon h2_icon22"></span><h2> ')(),f=u.firstChild,S=f.firstChild,x=S.nextSibling,I=x.firstChild;return t.insert(x,()=>_.title,I),t.insert(x,w==="\u8FDE\u8F7D"?"\u5728\u7EBF\u6F2B\u753B\u5168\u96C6":`\u6F2B\u753B\u5176\u5B83\u7248\u672C\uFF1A${w}`,null),u})(),(()=>{var u=t.template("<div class=cartoon_online_border_other style=margin-top:-8px><ul></ul><div class=clearfix>")(),f=u.firstChild;return t.insert(f,t.createComponent(o.For,{each:b,children:({title:S,id:x,updatetime:I})=>(()=>{var y=t.template("<li><a target=_blank>")(),v=y.firstChild;return t.setAttribute(v,"title",S),t.setAttribute(v,"href",`https://m.dmzj.com/view/${d}/${x}.html`),t.insert(v,S),t.effect(()=>v.classList.toggle("color_red",I===_.last_updatetime)),y})()})),u})()]})},a.querySelector(".middleright_mr")),!1},l=async()=>{await a.waitDom("#qiehuan_txt"),await a.wait(()=>{const d=a.querySelector("#qiehuan_txt");if(d){if(d.textContent!=="\u5207\u6362\u5230\u4E0A\u4E0B\u6EDA\u52A8\u9605\u8BFB")return!0;d.click()}})},c=async()=>(await l(),await a.waitDom(".comic_wraCon img"),a.querySelectorAll(".comic_wraCon img").map(d=>d.src)),g=d=>{const _=a.querySelector(d);if(_?.textContent)return()=>_.click()},m=()=>/^\/[^/]*\/?$/.test(location.pathname)?h():/^\/.*?\/\d+\.shtml$/.test(location.pathname);await n.universal({name:"dmzj",getImgList:c,onExit:d=>d&&a.scrollIntoView("#hd"),async getCommentList(){const{comicId:d,chapterId:_}=await s();return r.getViewpoint(d,_)},SPA:{isMangaPage:m,getOnPrev:()=>g(".display_left #prev_chapter"),getOnNext:()=>g(".display_right #next_chapter")}})})().catch(s=>a.log.error(s));break}case"m.idmzj.com":case"m.dmzj.com":{const t=require("dmzjDecrypt"),o=require("helper"),a=require("main"),n=require("userscript/dmzjApi");(async()=>{switch(location.pathname.split("/")[1]){case"info":{if(Reflect.has(unsafeWindow,"obj_id"))return;const r=Number.parseInt(location.pathname.split("/")[2],10);if(Number.isNaN(r)){document.body.innerHTML="",document.body.insertAdjacentHTML("beforeend",`
            \u8BF7\u624B\u52A8\u8F93\u5165\u6F2B\u753B\u540D\u8FDB\u884C\u641C\u7D22 <br />
            <input type="search"> <button>\u641C\u7D22</button> <br />
            <div id="list" />
          `),o.querySelector("button").addEventListener("click",async()=>{const g=o.querySelector("input")?.value;if(!g)return;const m=await a.request(`https://s.acg.dmzj.com/comicsum/search.php?s=${g}`,{errorText:"\u641C\u7D22\u6F2B\u753B\u65F6\u51FA\u9519"}),d=JSON.parse(m.responseText.slice(20,-1));o.querySelector("#list").innerHTML=d.map(({id:_,comic_name:w,comic_author:b,comic_url:u})=>`
                <b>\u300A${w}\u300B<b/>\u2014\u2014${b}
                <a href="${u}">Web\u7AEF</a>
                <a href="https://m.dmzj.com/info/${_}.html">\u79FB\u52A8\u7AEF</a>
              `).join("<br />")});return}const s=await a.request(`https://v4api.idmzj.com/comic/detail/${r}?uid=2665531&disable_level=1`,{errorText:"\u83B7\u53D6\u6F2B\u753B\u6570\u636E\u5931\u8D25"}),{comicInfo:{last_updatetime:h,title:l,chapters:c}}=t(s.responseText);document.title=l,document.body.insertAdjacentHTML("beforeend",`<h1>${l}</h1>`);for(const g of Object.values(c)){let m=`<h2>${g.title}</h2>`,d=g.data.length;for(;d--;)m+=`<a target="_blank" title="${g.data[d].chapter_title}" href="https://m.dmzj.com/view/${r}/${g.data[d].chapter_id}.html" ${g.data[d].updatetime===h?'style="color:red"':""}>${g.data[d].chapter_title}</a>`;document.body.insertAdjacentHTML("beforeend",m)}document.body.childNodes[0].remove(),o.useStyle(`
          h1 { margin: 0 -20vw; }
          h1, h2 { text-align: center; }
          body { padding: 0 20vw; }
          a {
            display: inline-block;

            min-width: 4em;
            margin: 0 1em;

            line-height: 2em;
            white-space: nowrap;
          }
        `);break}case"view":{if(unsafeWindow.comic_id){o.useStyle(".subHeader{display:none !important}"),await a.universal({name:"dmzj",getImgList:()=>o.querySelectorAll("#commicBox img").map(u=>u.dataset.original).filter(Boolean),getCommentList:()=>n.getViewpoint(unsafeWindow.subId,unsafeWindow.chapterId),onNext:o.querySelectorClick("#loadNextChapter"),onPrev:o.querySelectorClick("#loadPrevChapter")});return}const r=document.createElement("p");r.textContent="\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u5750\u548C\u653E\u5BBD\uFF0C\u82E5\u957F\u65F6\u95F4\u65E0\u53CD\u5E94\u8BF7\u5237\u65B0\u9875\u9762",document.body.append(r);let s,h,l;try{[,h,l]=/(\d+)\/(\d+)/.exec(location.pathname),s=await n.getChapterInfo(h,l)}catch(u){throw a.toast.error("\u83B7\u53D6\u6F2B\u753B\u6570\u636E\u5931\u8D25",{duration:Number.POSITIVE_INFINITY}),r.textContent=u.message,u}r.textContent="\u52A0\u8F7D\u5B8C\u6210\uFF0C\u5373\u5C06\u8FDB\u5165\u9605\u8BFB\u6A21\u5F0F";const{folder:c,chapter_name:g,next_chap_id:m,prev_chap_id:d,comic_id:_,page_url:w}=s;document.title=`${g} ${c.split("/").at(1)}`;const{setState:b}=await a.useInit("dmzj");b(u=>{u.manga.onExit=void 0,u.manga.onNext=m?()=>{location.href=`https://m.dmzj.com/view/${_}/${m}.html`}:void 0,u.manga.onPrev=d?()=>{location.href=`https://m.dmzj.com/view/${_}/${d}.html`}:void 0,u.manga.editButtonList=f=>f,u.comicMap[""].getImgList=()=>w.length>0?w:(r.innerHTML='\u65E0\u6CD5\u83B7\u5F97\u6F2B\u753B\u6570\u636E\uFF0C\u8BF7\u901A\u8FC7 <a href="https://github.com/hymbz/ComicReadScript/issues" target="_blank">Github</a> \u6216 <a href="https://sleazyfork.org/zh-CN/scripts/374903-comicread/feedback#post-discussion" target="_blank">Greasy Fork</a> \u8FDB\u884C\u53CD\u9988',[])}),b("manga","commentList",await n.getViewpoint(h,l));break}}})().catch(r=>o.log.error(r));break}case"www.idmzj.com":case"www.dmzj.com":{const t=require("helper"),o=require("main"),a=require("userscript/dmzjApi"),n=r=>{if(r)return()=>{window.open(location.href.replace(/(?<=\/)\d+(?=\.html)/,`${r}`),"_self")}};(async()=>{await t.waitDom(".head_wz");const r=t.querySelector(".head_wz [id]")?.id,s=/(?<=\/)\d+(?=\.html)/.exec(location.pathname)?.[0];if(!r||!s)return;const{setState:h}=await o.useInit("dmzj");try{const{next_chap_id:l,prev_chap_id:c,page_url:g}=await a.getChapterInfo(r,s);h(m=>{m.comicMap[""].getImgList=()=>g,m.manga.onNext=n(l),m.manga.onPrev=n(c)})}catch{o.toast.error("\u83B7\u53D6\u6F2B\u753B\u6570\u636E\u5931\u8D25",{duration:Number.POSITIVE_INFINITY})}})().catch(r=>t.log.error(r));break}case"exhentai.org":case"e-hentai.org":{const web=require("solid-js/web"),solidJs=require("solid-js"),Manga=require("components/Manga"),helper=require("helper"),main=require("main"),store=require("solid-js/store"),detectAd$1=require("userscript/detectAd"),ehTagRules=require("userscript/ehTagRules"),getTagSetHtml=async t=>{const o=t?`/mytags?tagset=${t}`:"/mytags",a=await main.request(o,{fetch:!0});return helper.domParse(a.responseText)},collectTags=(t,o=[])=>{const a=t.querySelector("#tagcolor").value.slice(1)||"0",[,...n]=[...t.getElementById("usertags_outer").children];for(const r of n){const s=Number(r.id.split("usertag_")[1]),h=r.querySelector(`#tagpreview_${s}`),{color:l,borderColor:c}=h.style;let[g,m]=h.title.split(":");switch(g){case"female":case"male":case"mixed":g="gender"}const d=Number.parseInt(r.querySelector(`#tagcolor_${s}`).value.slice(1)||a,16);o.push({e:r,id:s,title:h.title,color:d,fontColor:l,borderColor:c,group:g,name:m,weight:Number(r.querySelector("input[id^=tagweight_]").value),watch:r.querySelector(`#tagwatch_${s}`).checked,hidden:r.querySelector(`#taghide_${s}`).checked,order:-1})}return o},sortTagList=t=>{const o=new Intl.Collator,a=(r,s)=>r.color!==s.color?s.color-r.color:r.group!==s.group?o.compare(r.group,s.group):r.hidden!==s.hidden?r.hidden?1:-1:r.watch!==s.watch?r.watch?-1:1:r.weight!==s.weight?s.weight-r.weight:o.compare(r.name,s.name);let n=-t.length;for(const r of t.sort(a))r.order=n++;return t},getMyTags=async()=>{const t=[],o=await getTagSetHtml();await Promise.all([...o.querySelectorAll("#tagset_outer select option")].map(async n=>{const r=n.selected?o:await getTagSetHtml(n.value);r.querySelector("#tagset_enable")?.checked&&t.push(r)}));const a=[];for(const n of t)collectTags(n,a);return sortTagList(a)},handleMyTagsChange=new Set,updateMyTags=async()=>{const t=await getMyTags();for(const o of handleMyTagsChange)await o(t)},buildTagList=(t,o)=>`
${[...t].map(a=>`${o}${CSS.escape(a)}`).join(`,
`)}
`,updateTagColor=async t=>{const o={},a={},n={};for(const s of t){const{color:h,borderColor:l,fontColor:c}=s,g=s.title.replaceAll(" ","_");(o[h]||=new Set).add(g),(a[l]||=new Set).add(g),(n[c]||=new Set).add(g)}let r="";for(const[s,h]of Object.entries(o))r+=`:is(${buildTagList(h,"#td_")})`,r+=`{ background: #${Number(s).toString(16).padStart(6,"0")}; }

`;for(const[s,h]of Object.entries(a))r+=`:is(${buildTagList(h,"#td_")}).gt`,r+=`{ border-color: ${s}; }

`;for(const[s,h]of Object.entries(n))r+=`:is(${buildTagList(h,"#td_")}):not(.gt)`,r+=`{ border-color: ${s}; }

`,r+=`#taglist a:is(${buildTagList(h,"#ta_")})`,r+=`{ color: ${s} !important; position: relative; }

`;return r+=`
    /* \u7981\u7528 eh \u7684\u53D8\u8272\u6548\u679C\uFF0C\u5FC5\u987B\u4F7F\u7528 !important */
    #taglist a[id] { color: var(--tag) !important; position: relative; }
    #taglist a[id]:hover { color: var(--tag-hover) !important; }

    #taglist a[id]::after {
      content: "";
      background: var(--color);
      width: 100%;
      position: absolute;
      left: 0;
      height: 2px;
      bottom: -7px;
    }
    .tup { --color: var(--tup) }
    .tdn { --color: var(--tdn) }
    #taglist a[id][style="color: blue;"] { --color: blue; }

    /* \u907F\u514D\u88AB\u4E0A\u4E00\u884C\u7684\u4E0B\u5212\u7EBF\u78B0\u5230 */
    #taglist div:is(.gt, .gtl, .gtw) { margin-top: 1px; }
  `,await GM.setValue("ehTagColorizeCss",r),r},colorizeTag=async t=>{switch(handleMyTagsChange.add(updateTagColor),t){case"gallery":{let o=location.origin==="https://exhentai.org"?"--tag: #DDDDDD; --tag-hover: #EEEEEE; --tup: #00E639; --tdn: #FF3333;":"--tag: #5C0D11; --tag-hover: #8F4701; --tup: green; --tdn: red;";return o=`#taglist { ${o} }

`,o+=await helper.getGmValue("ehTagColorizeCss",updateMyTags),helper.useStyle(o)}case"mytags":updateMyTags(),helper.hijackFn("usertag_callback",helper.debounce(updateMyTags))}},defaultOptions={cross_site_link:!0,add_hotkeys_actions:!0,detect_ad:!0,quick_favorite:!0,colorize_tag:!1,quick_rating:!0,quick_tag_define:!0,float_tag_list:!1,auto_adjust_option:!1,tag_lint:!1,expand_tag_list:!0,autoShow:!1},createEhContext=async()=>{let t;if(Reflect.has(unsafeWindow,"display_comment_field")?t="gallery":location.pathname==="/mytags"?t="mytags":Reflect.has(unsafeWindow,"mpvkey")?t="mpv":t=helper.querySelector('option[value="t"]')?.parentElement?.value,!t)return;const o=await main.useInit("ehentai",defaultOptions);if(t!=="gallery")return{type:t,...o};let a=0;if(a=Number(helper.querySelector(".gtb .gpc")?.textContent?.replaceAll(",","").match(/\d+/g)?.at(-1)),Number.isNaN(a)){const{responseText:r}=await main.request(location.href);a=Number(/(?<=class="gdt2">)\d+(?= pages<\/td>)/.exec(r)?.[0])}const n=helper.querySelector("#newtagfield");return n?.addEventListener("keydown",r=>r.key==="Escape"&&n.blur()),{type:"gallery",...o,galleryId:Number(location.pathname.split("/")[2]),galleryTitle:helper.querySelector("#gn")?.textContent||void 0,japanTitle:helper.querySelector("#gj")?.textContent||void 0,imgNum:a,imgList:[],pageList:[],fileNameList:[],LoadButton(r){const s=solidJs.createMemo(()=>{const h=o.store.comicMap[r.id]?.imgList,l=h?.filter(Boolean).length;switch(h?.length){case void 0:return" Load comic";case l:return" Read";default:return` loading - ${l}/${h.length}`}});return(()=>{var h=web.template("<a href=javascript:;>")();return h.$$click=async l=>{await r.onClick?.(l),o.showComic(r.id)},web.insert(h,s),h})()},dom:{newTagField:n}}};web.delegateEvents(["click"]);const escHandler=new Map(["\u5173\u95ED\u663E\u793A\u6807\u7B7E\u5B9A\u4E49","\u53D6\u6D88\u9009\u4E2D\u5F53\u524D\u6807\u7B7E","\u5173\u95ED\u6D6E\u52A8\u6807\u7B7E\u680F"].map(t=>[t,()=>!0])),getTaglist=()=>{const t=new Set,o=new Set;for(const a of helper.querySelectorAll("#taglist table [id^=td_]")){const[n]=a.getElementsByTagName("a");n.classList.contains("tdn")||(n.classList.contains("tup")||a.classList.contains("gt")?t.add(a.id.slice(3)):a.classList.contains("gtl")&&o.add(a.id.slice(3)))}return[t,o]},handleTagName=t=>{const[o,a]=t.trim().split(":");return a?[o,a.replaceAll(/[^a-z-_ ]/gi,"")]:["",""]},namespaceAbbr=[["artist","a"],["character","c","char"],["cosplayer","c","os"],["female","f"],["group","g","circle"],["language","l","lang"],["male","m"],["mixed","x"],["other","o"],["parody","p","series"],["reclass","r"]],getTagNameFull=t=>{const[o,a]=handleTagName(t);for(const n of namespaceAbbr)if(n.includes(o))return`${n[0]}:${a}`;return t},categoriesMap={Western:"ta",Misc:"t1",Doujinshi:"t2",Manga:"t3","Artist CG":"t4","Game CG":"t5","Image Set":"t6",Cosplay:"t7","Asian Porn":"t8","Non-H":"t9"},isInCategories=(...t)=>!!helper.querySelector(`#gdc > .cs:is(${t.map(o=>`.c${categoriesMap[o]}`).join(", ")})`),nhentai=async({setState:t,galleryTitle:o})=>{const{response:{result:a}}=await main.request(`https://nhentai.net/api/galleries/search?query=${o}`,{responseType:"json",errorText:helper.t("site.ehentai.nhentai_error"),noTip:!0,headers:{"User-Agent":navigator.userAgent},fetch:!1}),n=async(r,s,h)=>{const l=await main.request(`https://i.nhentai.net/galleries/${s}/${r+1}.${helper.fileType[h]}`,{headers:{Referer:`https://nhentai.net/g/${s}`},responseType:"blob",fetch:!1});return URL.createObjectURL(l.response)};return a.map(({id:r,title:s,images:h,num_pages:l,media_id:c})=>{const g=`@nh:${r}`;return t("comicMap",g,{getImgList:({dynamicLoad:m})=>m(d=>helper.plimit(h.pages.map((_,w)=>async()=>d(w,await n(w,c,_.t)))),l,g)}),{id:g,showText:`${r}`,title:s.english||s.japanese,href:`https://nhentai.net/g/${r}`,class:"gtl"}})};nhentai.errorTip=t=>helper.t("site.ehentai.nhentai_failed",{nhentai:`<a href='https://nhentai.net/search/?q=${t.galleryTitle}' target="_blank"> <u> nhentai </u> </a>`});const hitomi=async({setState,galleryId})=>{const domain="gold-usergeneratedcontent.net",downImg=async t=>{const o=await main.request(t,{headers:{Referer:`https://hitomi.la/reader/${galleryId}.html`},responseType:"blob",fetch:!1});return URL.createObjectURL(o.response)},res=await main.request(`https://ltn.${domain}/galleries/${galleryId}.js`,{errorText:helper.t("site.ehentai.hitomi_error"),noTip:!0,noCheckCode:!0});switch(res.status){case 404:return[];case 200:break;default:throw new Error(helper.t("site.ehentai.hitomi_error"))}const data=JSON.parse(res.responseText.slice(18)),itemId=`@hitomi:${data.id}`;return setState("comicMap",itemId,{getImgList:({dynamicLoad})=>dynamicLoad(async setImg=>{const{responseText:ggScript}=await main.request(`https://ltn.${domain}/gg.js?_=${Date.now()}`,{errorText:helper.t("site.ehentai.hitomi_error"),noTip:!0});let gg={};eval(ggScript);for(const[t,{hash:o,name:a}]of data.files.entries()){const n=gg.s(o),r=/[\da-f]{61}([\da-f]{2})([\da-f])/.exec(o),s=Number.parseInt(r[2]+r[1],16),h=`https://w${gg.m(s)+1}.${domain}/${gg.b}${n}/${o}.webp`,l=await downImg(h);setImg(t,{src:l,name:a})}},data.files.length,itemId)}),[{id:itemId,showText:data.id,title:data.title,href:`https://hitomi.la/galleries/${data.id}`,class:"gt"}]};hitomi.errorTip=()=>helper.t("site.ehentai.hitomi_error");const crossSiteLink=async t=>{if(!t.galleryTitle)return main.toast.error(helper.t("site.ehentai.html_changed_link_failed"));const o=[];if(isInCategories("Doujinshi","Manga","Artist CG","Game CG","Image Set")&&o.push(hitomi),isInCategories("Doujinshi","Manga")&&o.push(nhentai),o.length===0)return;const[a,n]=store.createStore({}),r=d=>(()=>{var _=web.template("<div><a>")(),w=_.firstChild;return web.setStyleProperty(_,"opacity","1.0"),web.effect(b=>{var u=`td_${d.id}`,f=d.class,S=d.title,x=d.id,I=d.href,y=`return toggle_tagmenu(1, '${d.id}',this)`,v=d.title,p=d.showText;return u!==b.e&&web.setAttribute(_,"id",b.e=u),f!==b.t&&web.className(_,b.t=f),S!==b.a&&web.setAttribute(_,"title",b.a=S),x!==b.o&&web.setAttribute(w,"id",b.o=x),I!==b.i&&web.setAttribute(w,"href",b.i=I),y!==b.n&&web.setAttribute(w,"onclick",b.n=y),v!==b.s&&web.setAttribute(w,"title",b.s=v),p!==b.h&&(w.innerText=b.h=p),b},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),_})(),s=()=>web.render(()=>web.createComponent(solidJs.For,{get each(){return Object.entries(a)},children:([d,_])=>(()=>{var w=web.template("<tr><td class=tc>:")(),b=w.firstChild,u=b.firstChild;return web.setAttribute(w,"id",`${d}_tagline`),web.insert(b,d,u),web.insert(w,web.createComponent(solidJs.Show,{when:typeof _!="string",get fallback(){return(()=>{var f=web.template("<td class=tc style=text-align:left>")();return f.innerHTML=_,f})()},get children(){var f=web.template("<td>")();return web.insert(f,web.createComponent(solidJs.For,{each:_,children:r})),f}}),null),w})()}),helper.querySelector("#taglist tbody"));s(),helper.hijackFn("tag_update_vote",()=>{for(const d of helper.querySelectorAll("#nh_tagline"))d.remove();s()});const h=()=>web.template('<img src=https://ehgt.org/g/mr.gif class=mr alt=">">')(),l=d=>web.createComponent(solidJs.For,{get each(){return d.children},children:_=>[h(),_]}),c=document.getElementById("tagmenu_act");let g;helper.hijackFn("_refresh_tagmenu_act",(d,[_])=>{if(g?.(),!_.id.startsWith("@"))return d(_);c.children.length>0&&(c.innerHTML=""),g=web.render(()=>web.createComponent(l,{get children(){return[(()=>{var w=web.template("<a target=_blank>")();return w.innerText=" Jump",web.effect(()=>web.setAttribute(w,"href",_.href)),w})(),web.createComponent(t.LoadButton,{get id(){return _.id}})]}}),c)});for(const d of o){n(d.name,"searching...");try{const _=await d(t);_.length>0?n(d.name,_):n(d.name,"null")}catch(_){const w=d.errorTip(t);console.error(w,_),n(d.name,w)}}const{adList:m}=t.store.comicMap[""];if(m)for(const d of Object.values(a))typeof d!="string"&&d.length===1&&t.setState("comicMap",d[0].id,{adList:m})},detectAd=({store:{comicMap:t},setState:o,options:a,imgList:n,pageList:r,fileNameList:s})=>{if(!(a.detect_ad&&document.getElementById("ta_other:extraneous_ads")))return;o("comicMap","","adList",new main.ReactiveSet);const l=[];for(const c of helper.querySelectorAll("#gdt > a")){const g=Number(/.+-(\d+)/.exec(c.href)?.[1])-1;if(Number.isNaN(g))continue;r[g]=c.href;const m=c.querySelector("[title]");[,s[g]]=m.title.split(/：|: /),l[g]=m.tagName==="IMG"?m:/url\("(.+)"\)/.exec(m.style.backgroundImage)[1]}return(async()=>(await detectAd$1.getAdPageByFileName(s,t[""].adList),t[""].adList.size===0&&await detectAd$1.getAdPageByContent(l,t[""].adList),helper.useStyle(helper.createRootMemo(()=>t[""]?.adList?.size?[...t[""].adList].map(c=>`a[href="${r[c]}"] [title]:not(:hover) {
              filter: blur(8px);
              clip-path: border-box;
              backdrop-filter: blur(8px);
            }`).join(`
`):""))))(),()=>{detectAd$1.getAdPageByFileName(s,t[""].adList),detectAd$1.getAdPageByContent(n,t[""].adList)}},expandTagList=t=>{if(t.type!=="t")return;helper.useStyle(`
    #taglist {
      height: auto;
      max-height: 230px;
      padding: 0 3px;

      --scrollbar-slider: ${getComputedStyle(helper.querySelector(".ido")).backgroundColor};
      scrollbar-color: var(--scrollbar-slider) transparent;
      scrollbar-width: thin;
      &::-webkit-scrollbar { width: 5px; height: 10px; }
      &::-webkit-scrollbar-track { background: transparent; }
      &::-webkit-scrollbar-thumb { background: var(--scrollbar-slider); }
    }
    .gl1t[data-tag-list-loading], .gl1t[data-tag-list-loading] * { cursor: progress; }
    .gl1t[data-show-tag-list] .gl6t { display: none; }
    .gl1t:not([data-show-tag-list]) #taglist { display: none; }

    /* \u957F\u6807\u7B7E\u6362\u884C */
    #taglist [id^=td_] a[id^=ta_] {
      text-wrap: balance;
      word-break: keep-all;
      overflow-wrap: anywhere;
    }
  `);const o=new Map,a=async s=>{if(s.style.cursor!=="progress"){if(!o.has(s)){let h,l=null;try{s.dataset.tagListLoading="";const c=await main.request(s.querySelector("a").href,{noTip:!0,errorText:"Fetch tag list error",noCheckCode:!0});if(h=helper.domParse(c.responseText),l=h.querySelector("#taglist"),!l)throw new Error("Fetch tag list error");const[,g]=h.querySelector("#gdt div[title][style]").style.background.split('"');new Image().src=g;for(const m of l.querySelectorAll("a"))m.target="_blank"}catch{l=document.createElement("div"),l.id="taglist",l.textContent=h?.querySelector(".d p")?.textContent||"Fetch tag list error"}s.querySelector(".gl3t").after(l),o.set(s,l),Reflect.deleteProperty(s.dataset,"tagListLoading")}Reflect.has(s.dataset,"showTagList")?Reflect.deleteProperty(s.dataset,"showTagList"):s.dataset.showTagList=""}};for(const s of helper.querySelectorAll(".gl1t"))s.addEventListener("click",h=>h.target.matches(":not(a):is(.gl1t, .gl6t, .gl6t *, #taglist, #taglist *)")&&a(s));Manga.setDefaultHotkeys(s=>({...s,float_tag_list:["q"]}));const[n,r]=solidJs.createSignal([0,0]);document.addEventListener("pointermove",s=>r([s.clientX,s.clientY])),helper.linstenKeydown(s=>{const h=helper.getKeyboardCode(s);if(Manga.hotkeysMap()[h]!=="float_tag_list")return;s.stopPropagation(),s.preventDefault();const l=document.elementsFromPoint(...n());for(const c of l)if(c.matches(".gl1t"))return a(c)},!0),colorizeTag("gallery")},MdPictureInPicture='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0"><path d="M18 7h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m3-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m-1 16.01H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1"/></svg>',getDomPosition=t=>{const o=t.getBoundingClientRect(),a=getComputedStyle(t),n=Number.parseFloat(a.borderLeftWidth),r=Number.parseFloat(a.paddingLeft),s=Number.parseFloat(a.paddingTop),h=Number.parseFloat(a.borderTopWidth);return{left:o.left+n+r,top:o.top+h+s,width:a.width,height:a.height}},floatTagList=({store:{manga:t},dom:{newTagField:o}})=>{const a=helper.querySelector("#gd4"),n=getComputedStyle(a);let r="rgba(0, 0, 0, 0)",s=a;for(;r==="rgba(0, 0, 0, 0)";)r=getComputedStyle(s).backgroundColor,s=s.parentElement;const{borderColor:h}=getComputedStyle(helper.querySelector("#gdt")),l=`1px solid ${h}`;helper.useStyle(`
      #comicread-tag-box {
        position: fixed;
        z-index: 2147483647;

        font-size: 12px;
        text-align: justify;

        background: ${r};
        box-shadow: 0 0 15px -3px #0004;
      }

      #comicread-tag-box > #gd4 {
        margin: 0;
        padding: 0;
        border: none;
      }

      #comicread-tag-box > #ehs-introduce-box {
        position: relative;
        width: 161px;
        height: 100%;
        border-left: ${l};
      }

      /* \u786E\u4FDD\u59CB\u7EC8\u663E\u793A\u5728\u6700\u4E0A\u5C42\uFF0C\u9632\u6B62\u548C\u5176\u4ED6\u811A\u672C\u51B2\u7A81 */
      #ehs-introduce-box { z-index: 1; }

      #comicread-tag-box-placeholder {
        cursor: pointer;

        float: left;
        display: flex;
        grid-area: gd4;
        justify-content: center;

        margin: 0 0 0 10px;
        padding: 0 0 0 5px;

        border-right: 1px solid ${h};
        border-left: 1px solid ${h};
      }

      #comicread-tag-box-placeholder svg {
        width: 17em;
        opacity: 0.5;
      }

      /* \u9632\u6B62\u5728\u7A97\u53E3\u53D8\u5C0F\u65F6\u786E\u8BA4\u6309\u94AE\u88AB\u6324\u51FA\u8303\u56F4 */
      #tagmenu_new {
        width: fit-content;
      }
    `);const{store:c,setState:g}=helper.useStore({open:!1,top:0,left:0,opacity:1,mouse:{x:0,y:0},bound:{width:0,height:0}}),m=(p,k,$)=>{p.top=helper.clamp(-a.clientHeight*.75,k,p.bound.height),p.left=helper.clamp(-a.clientWidth*.75,$,p.bound.width)},d=p=>g("opacity",helper.clamp(.5,p,1));d(Number(localStorage.getItem("floatTagListOpacity"))||1),document.addEventListener("pointermove",p=>{g(k=>{k.mouse.x=p.clientX,k.mouse.y=p.clientY})});const _=()=>{g(p=>{p.bound.width=window.innerWidth-a.clientWidth/4,p.bound.height=window.innerHeight-a.clientHeight/4,m(p,p.top,p.left)})};window.addEventListener("resize",_),_(),helper.useStyleMemo("#comicread-tag-box",{display:()=>c.open?void 0:"none",top:()=>`${c.top}px`,left:()=>`${c.left}px`,opacity:()=>c.opacity});const w=a.cloneNode();w.id="comicread-tag-box-placeholder",w.style.display="none",w.addEventListener("click",()=>g("open",!1)),w.innerHTML=MdPictureInPicture,a.before(w);const b=document.createElement("div");b.id="comicread-tag-box",b.classList.add("comicread-ignore"),document.body.append(b),b.addEventListener("wheel",p=>{p.shiftKey&&(p.stopPropagation(),p.preventDefault(),d(c.opacity+(p.deltaY>0?-.05:.05)),localStorage.setItem("floatTagListOpacity",`${c.opacity}`))},{passive:!1});const u={top:0,left:0};helper.useDrag({ref:a,handleDrag({type:p,xy:[k,$],initial:[M,C]}){switch(p){case"down":if(!c.open){const L=getDomPosition(a);g(T=>{T.top=L.top,T.left=L.left})}u.top=c.top,u.left=c.left;break;case"up":g(L=>{if(t.show)return;const T=w.getBoundingClientRect();helper.approx(L.top,T.top,50)&&helper.approx(L.left,T.left,50)&&(L.open=!1)});break;case"move":g(L=>{m(L,u.top+$-C,u.left+k-M),L.open=!0});break}},handleClick:(p,k)=>k.click(),skip:p=>!p.target.matches("#gd4, #taglist, #gwrd, td+td, [id^=comidread] *:not(a)")});let f,S;const x=()=>{if(f||(f=helper.querySelector("#ehs-introduce-box"),!f))return;S=f.parentElement;const p=helper.querySelector(".eh-syringe-lite-auto-complete-list");p&&(p.classList.add("comicread-ignore"),p.style.zIndex="2147483647",document.body.append(p)),helper.hijackFn("toggle_tagmenu",()=>unsafeWindow.selected_tagname||helper.querySelector("#ehs-introduce-box .ehs-close")?.click())};helper.createEffectOn(()=>c.open,p=>{if(x(),p){const{height:k,width:$}=n;w.style.cssText=`height: ${k}; width: ${$};`,b.style.height=k,a.style.width=$,b.append(a),f&&b.append(f),document.activeElement.blur()}else w.style.cssText="display: none;",a.style.width="",w.after(a),f&&S.append(f),Manga.focus()},{defer:!0}),Manga.setDefaultHotkeys(p=>({...p,float_tag_list:["q"]})),escHandler.set("\u5173\u95ED\u6D6E\u52A8\u6807\u7B7E\u680F",()=>c.open?g("open",!1):!0),helper.linstenKeydown(p=>{const k=helper.getKeyboardCode(p);Manga.hotkeysMap()[k]==="float_tag_list"&&(p.stopPropagation(),p.preventDefault(),g($=>{$.open=!$.open,$.open&&m($,$.mouse.y-a.clientHeight/2,$.mouse.x-a.clientWidth/2)}))}),helper.hijackFn("tag_from_field",(p,k)=>(c.open&&document.activeElement.blur(),p(...k))),o.addEventListener("pointerenter",()=>c.open&&o.focus());const I=p=>{const k=helper.querySelector(`a[href=${CSS.escape(p)}]`);if(k)return k.title||k.id.slice(3).replaceAll("_"," ")},y=p=>{const k=p.dataTransfer.getData("text"),$=I(k);$&&(p.preventDefault(),o.value.includes($)||(o.value+=`${$}, `),o.dispatchEvent(new Event("input")))};o.addEventListener("drop",y);const v=helper.querySelector("#taglist");v.addEventListener("dragover",p=>p.preventDefault()),v.addEventListener("dragenter",p=>p.preventDefault()),v.addEventListener("drop",y)},addHotkeysActions=t=>{t.options.add_hotkeys_actions&&(t.type==="gallery"?(escHandler.set("\u53D6\u6D88\u9009\u4E2D\u5F53\u524D\u6807\u7B7E",()=>unsafeWindow.selected_tagname?unsafeWindow.toggle_tagmenu():!0),helper.linstenKeydown(o=>{if(unsafeWindow.selected_tagid)switch(o.key){case"ArrowUp":return o.preventDefault(),unsafeWindow?.tag_vote_up();case"ArrowDown":return o.preventDefault(),unsafeWindow?.tag_vote_down()}switch(Manga.hotkeysMap()[helper.getKeyboardCode(o)]){case"scroll_right":return o.preventDefault(),helper.querySelector(".ptt td:last-child:not(.ptdd)")?.click();case"scroll_left":return o.preventDefault(),helper.querySelector(".ptt td:first-child:not(.ptdd)")?.click()}})):helper.linstenKeydown(o=>{switch(Manga.hotkeysMap()[helper.getKeyboardCode(o)]){case"scroll_right":return o.preventDefault(),helper.querySelector("#unext")?.click();case"scroll_left":return o.preventDefault(),helper.querySelector("#uprev")?.click()}}))},style=`
  .comidread-favorites {
    position: absolute;
    z-index: 75;
    left: 0;

    overflow: auto;
    align-content: center;

    box-sizing: border-box;
    width: 100%;
    padding-left: 0.6em;

    border: none;
    border-radius: 0;
  }

  .comidread-favorites-item {
    cursor: pointer;

    display: flex;
    align-items: center;

    width: 100%;
    margin: 1em 0;

    text-align: left;
    overflow-wrap: anywhere;
  }

  .comidread-favorites-item > input {
    pointer-events: none;
    margin: 0 0.5em 0 0;
  }

  .comidread-favorites-item > div {
    flex-shrink: 0;

    width: 15px;
    height: 15px;
    margin: 0 0.5em 0 0;

    background-image: url("https://ehgt.org/g/fav.png");
    background-repeat: no-repeat;
  }

  .gl1t > .comidread-favorites {
    padding: 1em 1.5em;
  }
`,addQuickFavorite=(favoriteButton,root,apiUrl,height,top=0)=>{root.style.position="relative";const[show,setShow]=solidJs.createSignal(!1),[favorites,setFavorites]=solidJs.createSignal([]),[favnote,setFavnote]=solidJs.createSignal(""),updateFavorite=async()=>{try{const t=await main.request(apiUrl,{errorText:helper.t("site.ehentai.fetch_favorite_failed")}),o=helper.domParse(t.responseText),a=[...o.querySelectorAll(".nosel > div")];a.length===10&&(a[0].querySelector("input").checked=!1),setFavnote(o.querySelector('#galpop textarea[name="favnote"]')?.value??""),setFavorites(a)}catch{main.toast.error(helper.t("site.ehentai.fetch_favorite_failed")),setFavorites([])}};let hasRender=!1;const renderDom=()=>{if(hasRender)return;hasRender=!0;const FavoriteItem=(e,index)=>{const{checked}=e.querySelector("input"),handleClick=async()=>{if(checked)return;setShow(!1);const formData=new FormData;formData.append("favcat",index()===10?"favdel":`${index()}`),formData.append("apply","Apply Changes"),formData.append("favnote",favnote()),formData.append("update","1");const res=await main.request(apiUrl,{method:"POST",data:formData,errorText:helper.t("site.ehentai.change_favorite_failed")});main.toast.success(helper.t("site.ehentai.change_favorite_success"));const updateCode=/\nif\(window.opener.document.+\n/.exec(res.responseText)?.[0]?.replaceAll("window.opener.document","window.document");updateCode&&eval(updateCode),await updateFavorite()};return(()=>{var t=web.template("<div class=comidread-favorites-item><input type=radio>")(),o=t.firstChild;return t.$$click=handleClick,o.checked=checked,web.insert(t,web.createComponent(solidJs.Show,{get when(){return index()<=9},get children(){var a=web.template("<div>")();return web.effect(n=>web.setStyleProperty(a,"background-position",`0px -${2+19*index()}px`)),a}}),null),web.insert(t,()=>e.textContent?.trim(),null),t})()};let background="rgba(0, 0, 0, 0)",dom=root;for(;background==="rgba(0, 0, 0, 0)";)background=getComputedStyle(dom).backgroundColor,dom=dom.parentElement;web.render(()=>web.createComponent(solidJs.Show,{get when(){return show()},get children(){var t=web.template("<span class=comidread-favorites>")();return web.setStyleProperty(t,"background",background),web.setStyleProperty(t,"height",`${height}px`),web.setStyleProperty(t,"top",`${top}px`),web.insert(t,web.createComponent(solidJs.For,{get each(){return favorites()},children:FavoriteItem,get fallback(){return web.template("<h3>loading...")()}})),t}}),root)},rawClick=favoriteButton.onclick;favoriteButton.onclick=null,favoriteButton.addEventListener("mousedown",async t=>{if(!(t.buttons!==1&&t.buttons!==4)){if(t.stopPropagation(),t.preventDefault(),t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||t.buttons===4)return rawClick.call(favoriteButton,t);renderDom(),setShow(o=>!o),show()&&await updateFavorite()}})},quickFavorite=t=>{switch(t.type){case"gallery":{helper.useStyle(style);const o=helper.querySelector("#gdf"),a=helper.querySelector("#gd3"),n=o.firstElementChild.offsetTop;addQuickFavorite(o,a,`${unsafeWindow.popbase}addfav`,n);break}case"t":{helper.useStyle(style);for(const o of helper.querySelectorAll(".gl1t")){const a=o.querySelector("[id^=posted_]"),n=o.firstElementChild.getBoundingClientRect().bottom-o.getBoundingClientRect().top,r=o.lastElementChild.getBoundingClientRect().top-o.getBoundingClientRect().top,[s]=/http.+?(?=')/.exec(a.getAttribute("onclick"));addQuickFavorite(a,o,s,r-n,n)}break}case"e":{helper.useStyle(style);for(const o of helper.querySelectorAll(".gl1e")){const a=o.nextElementSibling.querySelector("[id^=posted_]"),n=Number.parseInt(getComputedStyle(o).height,10),[r]=/http.+?(?=')/.exec(a.getAttribute("onclick"));addQuickFavorite(a,o,r,n)}break}}};web.delegateEvents(["click"]);const quickRating=t=>{let o;switch(t.type){case"e":o=helper.querySelectorAll("#favform > table > tbody > tr");break;case"m":case"p":case"l":o=helper.querySelectorAll("#favform > table > tbody > tr").slice(1);break;case"t":o=helper.querySelectorAll(".gl1t");break;default:return}helper.useStyle(`
    .comidread-quick-rating {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: click;
    }
  `);const a=["0,0,7,16","8,0,15,16","16,0,23,16","24,0,31,16","32,0,39,16","40,0,47,16","48,0,55,16","56,0,63,16","64,0,71,16","72,0,79,16"],n=async(h,l)=>{try{const c=await main.request(h,{errorText:helper.t("site.ehentai.change_rating_failed"),noTip:!0}),g=/api_url = "(.+?)";.+?gid = (\d+);.+?token = "(.+?)";.+?apiuid = (\d+);.+?apikey = "(.+?)"/s.exec(c.responseText);if(!g)throw new Error(helper.t("site.ehentai.change_rating_failed"));const[,m,d,_,w,b]=g,u=await main.request(m,{method:"POST",responseType:"json",data:JSON.stringify({method:"rategallery",rating:`${l}`,apikey:b,apiuid:w,gid:d,token:_}),fetch:!0,noTip:!0});return main.toast.success(`${helper.t("site.ehentai.change_rating_success")}: ${u.response.rating_usr}`),u.response}catch{throw main.toast.error(helper.t("site.ehentai.change_rating_failed")),new Error(helper.t("site.ehentai.change_rating_failed"))}},r=(h,l)=>{let c=Math.round(l+1);const g=-80+16*Math.ceil(c/2);c=c%2===1?-21:-1,h.style.backgroundPosition=`${g}px ${c}px`},s=(h,l,c)=>{let g=l.style.backgroundPosition;web.render(()=>(()=>{var m=web.template("<span class=comidread-quick-rating><img src=https://ehgt.org/g/blank.gif><map>")(),d=m.firstChild,_=d.nextSibling;return m.$$mouseout=()=>{l.style.backgroundPosition=g},web.setAttribute(m,"data-index",c),web.setAttribute(d,"usemap",`#rating-${c}`),web.setAttribute(_,"name",`rating-${c}`),web.insert(_,web.createComponent(solidJs.For,{each:a,children:(w,b)=>(()=>{var u=web.template("<area shape=rect>")();return u.$$click=async()=>{const f=await n(h.querySelector("a").href,b()+1);l.className=f.rating_cls,r(l,f.rating_usr*2-1),g=l.style.backgroundPosition},u.$$mouseover=()=>r(l,b()),web.setAttribute(u,"coords",w),u})()})),m})(),l)};for(const[h,l]of o.entries()){const c=[...l.querySelectorAll(".ir")].at(-1);c&&c.addEventListener("mouseenter",()=>s(l,c,h),{once:!0})}};web.delegateEvents(["mouseout","mouseover","click"]);const MDLaunch=(t={})=>(()=>{var o=web.template('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"stroke=currentColor fill=currentColor stroke-width=0><path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 1 0 1.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1">')();return web.spread(o,t,!0,!0),o})(),quickTagDefine=t=>{const o=store.createMutable({}),a=async c=>{if(Reflect.has(o,c))return;const g=`https://ehwiki.org/wiki/${c.replaceAll(/[a-z]+:\s?/gi,"")}`,m=await main.request(g,{noCheckCode:!0});if(m.status!==200){o[c]=(()=>{var w=web.template("<h3>")();return web.insert(w,()=>`${m.status} - ${m.statusText}`),w})();return}const _=helper.domParse(m.responseText).querySelector("#mw-content-text");for(const w of _.querySelectorAll('img[src^="/"]'))w.setAttribute("src",`https://ehwiki.org${w.getAttribute("src")}`);for(const w of _.getElementsByTagName("a")){const b=w.getAttribute("href")??"";b.startsWith("/")&&w.setAttribute("href",`https://ehwiki.org${b}`),w.target="_blank"}for(const w of _.querySelectorAll(".thumb"))w.remove();o[c]=[(()=>{var w=web.template("<h1><a target=_blank>")(),b=w.firstChild;return web.setAttribute(b,"href",g),web.insert(b,c,null),web.insert(b,web.createComponent(MDLaunch,{}),null),w})(),_]};helper.useStyle(`
    #comidread-tag-define {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      text-align: start;
      padding: 0 1em;
      box-sizing: border-box;
    }

    #taglist {
      position: relative;
    }

    #comidread-tag-define h1 {
      border-bottom: 1px solid #a2a9b1;
      margin: 0.4em 0;
    }

    #comidread-tag-define h1 svg {
      height: 0.7em;
      margin-left: 0.2em;
    }

    #comidread-tag-define ul {
      margin: 0.3em 0 0 1.6em;
      padding: 0;
    }

    #comidread-tag-define li {
      margin-bottom: 0.2em;
    }

    #comidread-tag-define div a {
      text-decoration: underline;
    }

    #comidread-tag-define dd {
      margin-left: 1.6em;
    }

    #comidread-tag-define dl {
      margin-top: 0.2em;
      margin-bottom: 0.5em;
    }
  `);const[n,r]=solidJs.createSignal(!1),s=helper.querySelector("#taglist");let h="rgba(0, 0, 0, 0)",l=s;for(;h==="rgba(0, 0, 0, 0)";)h=getComputedStyle(l).backgroundColor,l=l.parentElement;web.render(()=>web.createComponent(solidJs.Show,{get when(){return n()},get children(){var c=web.template("<span id=comidread-tag-define>")();return web.setStyleProperty(c,"background",h),web.insert(c,()=>o[unsafeWindow.selected_tagname]??web.template("<h3>loading...")()),web.effect(g=>web.setStyleProperty(c,"height",`${s.scrollHeight}px`)),c}}),s),unsafeWindow.tag_define=async()=>{if(unsafeWindow.selected_tagname){if(n())return r(!1);r(!0);try{await a(unsafeWindow.selected_tagname)}catch(c){console.error(c),r(!1)}}},helper.hijackFn("toggle_tagmenu",()=>r(!1)),escHandler.set("\u5173\u95ED\u663E\u793A\u6807\u7B7E\u5B9A\u4E49",()=>n()?r(!1):!0)},updateSortCss=t=>{let o="tr a :is(.gltm, .glink + div:not([class])) { display: flex; }";for(const{title:a,order:n}of t)o+=`
.gt[title="${a}"] { order: ${n}; }`;return GM.setValue("ehTagSortCss",o)},sortTags=async t=>{switch(handleMyTagsChange.add(updateSortCss),t.type){case"p":case"l":case"t":return helper.useStyle(await helper.getGmValue("ehTagSortCss",updateMyTags));case"mytags":{let o;const a=n=>{let r=`
          #usertags_outer { display: flex; flex-direction: column; }
          #usertags_outer > div { margin: unset; }
          #usertag_0 { order: -${n.length}; }`;for(const{order:s,id:h}of n)r+=`
#usertag_${h} { view-transition-name: _${h}; order: ${s}; }`;o||=GM_addElement("style",{textContent:r}),o.textContent=r};handleMyTagsChange.add(n=>{if(!document.startViewTransition)return a(n);document.startViewTransition(()=>a(n))})}}},tagLint=({dom:{newTagField:t}})=>{const o=isInCategories("Doujinshi","Manga","Non-H"),a=ehTagRules.getTagLintRules(),[n,r]=solidJs.createSignal({});helper.useStyle(`
    #comidread-tag-lint [id^=td_] {
      display: inline-block;
      float: none;
    }
  `);const s=(u,f)=>f===void 0?document.getElementById(`td_${u}`)?.className:f?"gtl":"gt",h=u=>(()=>{var f=web.template("<div><a>")(),S=f.firstChild;return S.$$click=x=>x.preventDefault(),web.insert(S,()=>u.name),web.effect(x=>{var I=`td_${u.name}`,y=s(u.name,u.weak),v=`ta_${u.name}`,p=`https://exhentai.org/tag/${u.name.replaceAll("_","+")}`;return I!==x.e&&web.setAttribute(f,"id",x.e=I),y!==x.t&&web.className(f,x.t=y),v!==x.a&&web.setAttribute(S,"id",x.a=v),p!==x.o&&web.setAttribute(S,"href",x.o=p),x},{e:void 0,t:void 0,a:void 0,o:void 0}),f})(),l=u=>{const f=ehTagRules.splitTagNamespace(u.name);return web.createComponent(solidJs.Show,{get when(){return f.length>1},get fallback(){return h(u)},get children(){var S=web.template("<span>\u300C<!> \u300D")(),x=S.firstChild,I=x.nextSibling;return web.insert(S,web.createComponent(solidJs.For,{each:f,children:(y,v)=>[web.memo(()=>web.memo(()=>!!v())()?` ${helper.t("other.or")} `:""),web.createComponent(h,{name:y,get weak(){return u.weak}})]}),I),S}})},c=u=>{const[f,S,x]=u.text.split("[tag]");return web.createComponent(solidJs.Show,{get when(){return u.warnList?.size},get children(){return web.createComponent(solidJs.For,{get each(){return[...u.warnList.entries()]},children:([I,y])=>(()=>{var v=web.template("<li>")();return web.insert(v,f,null),web.insert(v,web.createComponent(l,{name:I}),null),web.insert(v,S,null),web.insert(v,web.createComponent(solidJs.For,{each:y,children:p=>web.createComponent(l,{name:p,get weak(){return u.weak}})}),null),web.insert(v,x,null),v})()})}})};let g,m;const d=helper.singleThreaded(()=>{const u={},[f,S]=getTaglist(),x=new Set([...f,...S]),I=(p,k,$=!1)=>{const M=a[k];if(M.has(p))for(const C of M.get(p)){if(ehTagRules.hasTag($?f:x,C)===$)continue;u[k]??=new Map([[p,[]]]);const L=u[k];L.has(p)||L.set(p,[]),L.get(p).push(C)}};for(const p of x)I(p,"prerequisite",!0),I(p,"conflict"),o&&I(p,"possibleConflict"),I(p,"combo",!0);const y=(p,k)=>{u.other??=[],u.other.push([p,k])},v=[];for(const p of S)if(/^(?:artist|group):/.test(p)){const k=helper.querySelector("#gd2").textContent.toLowerCase();if(k.includes(p.replaceAll(/^(artist|group):|_/g," ").trim()))v.push(p);else{const $=document.getElementById(`ta_${p}`)?.textContent;$&&k.includes($)&&v.push(p)}}v.length>0&&y(helper.t("eh_tag_lint.correct_tag"),v),isInCategories("Doujinshi")&&ehTagRules.isMissingNamespace(x,"parody")&&y(helper.t("eh_tag_lint.miss_parody"),["parody:original"]),o&&ehTagRules.isMissingTags(f,"female:females_only","female:futanari","female:shemale")&&ehTagRules.isMissingNamespace(x,"male","mixed")&&y(helper.t("eh_tag_lint.miss_female"),["female:females_only"]),r(u),g?.isConnected||(g=document.createElement("div"),g.id="comidread-tag-lint",helper.querySelector("#taglist").append(g)),m?.(),m=web.render(()=>web.createComponent(solidJs.Show,{get when(){return Object.keys(n()).length},get children(){return[web.template("<hr>")(),(()=>{var p=web.template("<ul>")();return web.insert(p,web.createComponent(solidJs.For,{get each(){return n().other},children:([k,$])=>(()=>{var M=web.template("<li>")();return web.insert(M,k,null),web.insert(M,web.createComponent(solidJs.For,{each:$,children:C=>web.createComponent(l,{name:C,weak:!0})}),null),M})()}),null),web.insert(p,web.createComponent(c,{get warnList(){return n().prerequisite},get text(){return helper.t("eh_tag_lint.prerequisite")},weak:!1}),null),web.insert(p,web.createComponent(c,{get warnList(){return n().conflict},get text(){return helper.t("eh_tag_lint.conflict")}}),null),web.insert(p,web.createComponent(c,{get warnList(){return n().possibleConflict},get text(){return helper.t("eh_tag_lint.possible_conflict")}}),null),web.insert(p,web.createComponent(c,{get warnList(){return n().combo},get text(){return helper.t("eh_tag_lint.combo")},weak:!0}),null),p})()]}}),g)});d(),helper.hijackFn("tag_update_vote",d);const[_,w]=helper.createEqualsSignal([]);helper.useStyle(helper.createRootMemo(()=>_().map(u=>`#td_${CSS.escape(u.replaceAll(" ","_"))} { box-shadow: 0px 0px 4px var(--tag); }`).join(`
`)));const b=()=>w(t.value.split(",").map(u=>getTagNameFull(u.trim())).filter(Boolean));t.addEventListener("input",b),t.addEventListener("keydown",b),helper.hijackFn("tag_update_vote",b)};web.delegateEvents(["click"]),(async()=>{const t=await createEhContext();if(!t)return;const{setState:o,options:a,setOptions:n,showComic:r}=t,s=()=>[web.createComponent(solidJs.For,{each:["colorize_tag","float_tag_list","expand_tag_list","tag_lint","","quick_favorite","quick_rating","quick_tag_define","","cross_site_link","detect_ad","add_hotkeys_actions","auto_adjust_option"],children:y=>web.createComponent(solidJs.Show,{when:y,get fallback(){return web.template("<hr>")()},get children(){return web.createComponent(Manga.SettingsItemSwitch,{get name(){return helper.t(`site.add_feature.${y}`)},get value(){return a[y]},onChange:v=>n({[y]:v})})}})}),web.template("<hr>")(),web.createComponent(Manga.SettingBlockSubtitle,{get children(){return helper.t("other.hotkeys")}}),web.createComponent(Manga.SettingHotkeys,{keys:["float_tag_list"]})];if(o(y=>{y.manga.editSettingList=v=>[...v,["E-Hentai",s]],y.fab.otherSpeedDial=["tag_lint","colorize_tag","cross_site_link","detect_ad"]}),t.type==="mpv")return o("comicMap","",{getImgList({dynamicLoad:y}){const v=helper.querySelectorAll(".mimg[id]");return y(k=>{const $=unsafeWindow.imagelist;helper.plimit($.map((M,C)=>async()=>{const L=()=>$[C].i;for(;!L();)Reflect.has($[C],"xhr")||(unsafeWindow.load_image(C+1),unsafeWindow.next_possible_request=0),await helper.wait(L);k(C,L())}),void 0,4)},v.length)}});if(helper.linstenKeydown(y=>{if(y.key==="Escape"){for(const v of escHandler.values())if(v()!==!0)return y.stopImmediatePropagation()}}),a.colorize_tag&&(colorizeTag(t.type),sortTags(t)),unsafeWindow.apiuid!==-1&&a.quick_favorite&&helper.requestIdleCallback(()=>quickFavorite(t)),a.quick_rating&&helper.requestIdleCallback(()=>quickRating(t),1e3),a.expand_tag_list&&helper.requestIdleCallback(()=>expandTagList(t),1e3),t.type!=="gallery")return addHotkeysActions(t);if(a.auto_adjust_option&&!isInCategories("Doujinshi","Manga","Non-H")){let y={pageNum:1,imgRecognition:{enabled:!1}};a.option&&(y=helper.assign(a.option,y)),o("manga","option",y)}a.float_tag_list&&helper.requestIdleCallback(()=>floatTagList(t)),a.quick_tag_define&&helper.requestIdleCallback(()=>quickTagDefine(),1e3),a.tag_lint&&helper.requestIdleCallback(()=>tagLint(t),1e3);const h=document.getElementById("gd5");if(new ResizeObserver(()=>{Reflect.deleteProperty(h.dataset,"long"),h.scrollHeight>352&&(h.dataset.long="")}).observe(h),helper.useStyle(`
    #gd5[data-long] {
      --scrollbar-slider: ${getComputedStyle(helper.querySelector(".gm")).borderColor};
      scrollbar-color: var(--scrollbar-slider) transparent;
      scrollbar-width: thin;
      overflow: auto;
      max-height: 352px;
      &::-webkit-scrollbar { width: 5px; height: 10px; }
      &::-webkit-scrollbar-track { background: transparent; }
      &::-webkit-scrollbar-thumb { background: var(--scrollbar-slider); }
    }
    /* \u5728\u663E\u793A ehs \u65F6\u9690\u85CF gd5 \u4E0A\u7684\u6EDA\u52A8\u6761\uFF0C\u907F\u514D\u540C\u65F6\u663E\u793A\u4E24\u4E2A\u6EDA\u52A8\u6761 */
    #gd5[data-long]:has(#ehs-introduce-box .ehs-content) { overflow: hidden; }
    #gmid #ehs-introduce-box { width: 100%; }


    /*
      \u6D88\u9664 ehs \u9488\u5BF9\u6309\u94AE\u592A\u591A\u65F6\u7684\u89E3\u51B3\u529E\u6CD5\uFF0C\u7528\u811A\u672C\u7684\u5904\u7406\u65B9\u5F0F\u5C31\u597D\u4E86\uFF0C\u907F\u514D\u5728\u6D6E\u52A8\u6807\u7B7E\u680F\u65F6\u5BFC\u81F4\u6EDA\u52A8
      https://github.com/EhTagTranslation/EhSyringe/commit/009054cc34ee818972d2a042990bf89bdff1895a
     */
    body #gmid #gd5 { --ehs-gap: 1; justify-content: unset; }
  `),a.cross_site_link&&helper.requestIdleCallback(()=>crossSiteLink(t),1e3),Number.isNaN(t.imgNum))return main.toast.error(helper.t("site.changed_load_failed"));const c=await detectAd(t),g=y=>y.includes("IP address has been temporarily banned")&&main.toast.error(helper.t("site.ehentai.ip_banned"),{throw:!0,duration:Number.POSITIVE_INFINITY}),m=async y=>{const v=await main.request(y,{fetch:!0,errorText:helper.t("site.ehentai.fetch_img_page_source_failed")},10);g(v.responseText);try{return/id="img" src="(.+?)"/.exec(v.responseText)[1]}catch{throw new Error(helper.t("site.ehentai.fetch_img_url_failed"))}},d=async(y=0)=>{const v=await main.request(`${location.pathname}${y?`?p=${y}`:""}`,{fetch:!0,errorText:helper.t("site.ehentai.fetch_img_page_url_failed")});g(v.responseText);const p=[...v.responseText.matchAll(/<a href="(.{20,50})"><(img alt=.+?|div><div |div )title=".+?: (.+?)"/g)].map(([,k,,$])=>[k,$]);if(p.length===0)throw new Error(helper.t("site.ehentai.fetch_img_page_url_failed"));return p},[_,w]=solidJs.createSignal(`1-${t.imgNum}`),b=helper.createRootMemo(()=>helper.extractRange(_(),t.imgList.length||t.imgNum)),u=Number(helper.querySelector(".ptt td:nth-last-child(2)").textContent),f=async y=>{if(t.pageList.length!==u){const v=await helper.plimit(helper.range(u,p=>()=>d(p)));t.pageList.length=0,t.fileNameList.length=0;for(const p of v)for(const[k,$]of p)t.pageList.push(k),t.fileNameList.push($)}await helper.plimit([...b()].map((v,p)=>async()=>{v<0||(t.imgList[v]||=await m(t.pageList[v]),y(p,{src:t.imgList[v],name:t.fileNameList[v]}))})),c?.()};o("comicMap","",{getImgList:({dynamicLoad:y})=>y(f,()=>b().size)});const S=await helper.useCache({pageRange:"id"});web.render(()=>{const y=h.children[6]?.classList.contains("gsp"),v=async p=>{if(!p.shiftKey)return;p.stopPropagation();const k=await S.get("pageRange",unsafeWindow.gid),$=prompt(helper.t("other.page_range"),k?.range);$&&(await S.set("pageRange",{id:unsafeWindow.gid??t.galleryId,range:$}),w($??`1-${t.imgNum}`),o("comicMap","","imgList",void 0),r())};return(()=>{var p=web.template('<p class="g2 gsp"style=padding-bottom:0><img src=https://ehgt.org/g/mr.gif>')();return web.setStyleProperty(p,"padding-top",y?0:void 0),p.addEventListener("click",v,!0),web.insert(p,web.createComponent(t.LoadButton,{id:""}),null),p})()},h),addHotkeysActions(t);const x=async y=>{const v=await main.request(y,{errorText:helper.t("site.ehentai.fetch_img_page_source_failed")});g(v.responseText);const p=/nl\('(.+?)'\)/.exec(v.responseText)?.[1];if(!p)throw new Error(helper.t("site.ehentai.fetch_img_url_failed"));const k=new URL(y);return k.searchParams.set("nl",p),k.href},I=helper.singleThreaded(async(y,v)=>{const p=t.imgList.indexOf(v);if(p!==-1){if(t.imgList[p]=await m(t.pageList[p]),!await helper.testImgUrl(t.imgList[p])&&(t.pageList[p]=await x(t.pageList[p]),t.imgList[p]=await m(t.pageList[p]),main.toast.warn(helper.t("alert.retry_get_img_url",{i:p})),!await helper.testImgUrl(t.imgList[p])))return await helper.sleep(500),I(v);o("comicMap","","imgList",t.imgList);for(const k of Manga.imgList())if(k.loadType==="error")return I(k.src)}});o(y=>{y.manga.title=t.japanTitle||t.galleryTitle,y.manga.onExit=v=>{v&&helper.scrollIntoView("#cdiv"),o("manga","show",!1)},y.manga.onImgError=I,y.fab.initialShow=a.autoShow})})().catch(t=>helper.log.error(t));break}case"nhentai.net":{const t=require("solid-js/web"),o=require("helper"),a=require("main"),n=require("userscript/detectAd");(async()=>{const{store:r,options:s,setState:h,showComic:l}=await a.useInit("nhentai",{auto_page_turn:!0,block_totally:!0,open_link_new_page:!0,detect_ad:!0});if(Reflect.has(unsafeWindow,"gallery")){h("manga",{onExit(_){_&&o.scrollIntoView("#comment-container"),h("manga","show",!1)}});const c=unsafeWindow._n_app.options.image_cdn_urls;h("comicMap","",{getImgList:()=>_gallery.images.pages.map(({t:_,w,h:b},u)=>({src:`https://${c[u%c.length]}/galleries/${_gallery.media_id}/${u+1}.${o.fileType[_]}`,width:w,height:b}))}),h("fab","initialShow",s.autoShow);const m=(()=>{var _=t.template('<a href=javascript:; id=comicReadMode class="btn btn-secondary"><i class="fa fa-book"></i> Read')();return _.$$click=()=>l(),_})();document.getElementById("download").after(m),s.detect_ad&&o.querySelector("#tags .tag.tag-144644")&&(h("comicMap","","adList",new a.ReactiveSet),await n.getAdPageByContent(o.querySelectorAll(".thumb-container img").map(_=>_.dataset.src),r.comicMap[""].adList),o.createEffectOn(()=>r.comicMap[""].imgList,_=>_?.length&&n.getAdPageByContent(_.map(w=>typeof w=="string"?w:w.src),r.comicMap[""].adList)),o.useStyle(()=>r.comicMap[""]?.adList?.size?[...r.comicMap[""].adList].map(w=>`
            .thumb-container:nth-of-type(${w+1}):not(:hover) {
              filter: blur(8px);
              clip-path: border-box;
            }`).join(`
`):""));return}if(document.getElementsByClassName("gallery").length>0){if(s.open_link_new_page)for(const g of o.querySelectorAll('a:not([href^="javascript:"])'))g.setAttribute("target","_blank");const c=(unsafeWindow?._n_app??unsafeWindow?.n)?.options?.blacklisted_tags;if(c===void 0&&a.toast.error(o.t("site.nhentai.tag_blacklist_fetch_failed")),s.block_totally&&c?.length&&o.useStyle(".blacklisted.gallery { display: none; }"),s.auto_page_turn){let g=o.querySelector("a.next")?.href;if(!g)return;o.useStyle(`
        hr { bottom: 1px; box-sizing: border-box; margin: -1em auto 2em; }
        hr:last-child { position: relative; animation: load .8s linear alternate infinite; }
        hr:not(:last-child) { display: none; }
        @keyframes load { 0% { width: 100%; } 100% { width: 0; } }
      `);const m=new Set(c),d=document.getElementById("content"),_=()=>d.querySelector(":is(.index-container, #favcontainer):last-of-type"),w=o.singleThreaded(async()=>{if(!g)return;const u=await a.request(g,{fetch:!0,errorText:o.t("site.nhentai.fetch_next_page_failed")}),f=o.domParse(u.responseText);history.replaceState(null,"",g);const S=f.querySelector(".index-container, #favcontainer");for(const y of S.querySelectorAll(".gallery")){for(const p of y.getElementsByTagName("img"))p.setAttribute("src",p.dataset.src);y.dataset.tags.split(" ").map(Number).some(p=>m.has(p))&&y.classList.add("blacklisted")}const x=f.querySelector(".pagination");g=x.querySelector("a.next")?.href,d.append(S,x);const I=document.createElement("hr");d.append(I),b.disconnect(),b.observe(_()),g||(I.style.animationPlayState="paused")},{abandon:!0});w();const b=new IntersectionObserver(u=>u[0].isIntersecting&&w());b.observe(_()),o.querySelector("section.pagination")&&d.append(document.createElement("hr"))}}})().catch(r=>o.log.error(r)),t.delegateEvents(["click"]);break}case"yuri.website":{const t=require("helper"),o=require("main");(async()=>{const{store:a,setState:n,showComic:r,init:s}=await o.useInit("yurifans",{\u81EA\u52A8\u7B7E\u5230:!0});if(a.options.\u81EA\u52A8\u7B7E\u5230&&(async()=>{if(!globalThis.b2token)return;const l=new Date().toLocaleDateString("zh-CN");if(l!==localStorage.getItem("signDate"))try{const c=await o.request("/wp-json/b2/v1/userMission",{method:"POST",noTip:!0,headers:{Authorization:`Bearer ${b2token}`}}),g=JSON.parse(c.responseText);if(!(g?.mission?.date||!Number.isNaN(Number(g))))throw new Error("\u7B7E\u5230\u5931\u8D25");o.toast("\u81EA\u52A8\u7B7E\u5230\u6210\u529F"),localStorage.setItem("signDate",l)}catch{o.toast.error("\u81EA\u52A8\u7B7E\u5230\u5931\u8D25")}})(),!await t.waitDom('a.post-list-cat-item[title="\u5728\u7EBF\u533A-\u6F2B\u753B"]'))return;if(t.querySelector(".content-hidden")){const c=t.querySelector(".content-hidden").getElementsByTagName("img");await t.wait(()=>c.length,1e3)&&n("comicMap","",{getImgList:()=>[...c].map(m=>m.src)});return}if(t.querySelector(".xControl")){n("flag","needAutoShow",!1);const l=c=>{r(c),n("manga",{onPrev:Reflect.has(a.comicMap,c-1)?()=>l(c-1):void 0,onNext:Reflect.has(a.comicMap,c+1)?()=>l(c+1):void 0})};for(const[c,g]of t.querySelectorAll(".xControl > a").entries()){const m=g.parentElement.nextElementSibling;n("comicMap",c,{getImgList:()=>[...m.querySelectorAll("img")].map(_=>_.dataset.src??_.src)}),g.addEventListener("click",()=>m.style.display&&l(c))}s();return}await t.wait(()=>t.querySelectorAll(".entry-content img").length),n("comicMap","",{getImgList:()=>t.querySelectorAll(".entry-content img").map(l=>l.dataset.src||l.src)})})();break}case"2025copy.com":case"www.2025copy.com":case"copy20.com":case"www.copy20.com":case"mangacopy.com":case"www.mangacopy.com":{const web=require("solid-js/web"),solidJs=require("solid-js"),helper=require("helper"),main=require("main"),mobileApi=new class{headers={webp:"1",region:"1","User-Agent":"COPY/3.0.0",version:"2025.08.15",source:"copyApp",referer:"com.copymanga.app-3.0.0"};get=(t,o,...a)=>main.request(t,{responseType:"json",headers:this.headers,...o},...a)},pcApi=new class{headers={"User-Agent":navigator.userAgent,referer:location.href};get=(t,o,...a)=>main.request(`https://mapi.copy20.com${t}`,{responseType:"json",headers:this.headers,fetch:!1,...o},...a)},decryptData=async(t,o=unsafeWindow.cct||"oppzzivv.nzm.oip")=>{const a=t.slice(16),n=t.slice(0,16),r=await crypto.subtle.decrypt({name:"AES-CBC",iv:new TextEncoder().encode(n)},await crypto.subtle.importKey("raw",new TextEncoder().encode(o),{name:"AES-CBC"},!1,["decrypt"]),new Uint8Array(a.match(/.{1,2}/g).map(s=>Number.parseInt(s,16))).buffer);return JSON.parse(new TextDecoder().decode(r))},getImglistByHtml=async(comicName,id)=>{const getKeys=async()=>{if(!unsafeWindow.contentKey){const html=await main.request(`${location.origin}/comic/${comicName}/chapter/${id}`,{fetch:!1,headers:{"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36"}}),[script]=html.responseText.match(/(?<=<script>\s+)(var .+?contentKey =.+?)(?=<\/script)/gs);eval(script)}return[contentKey,cct]},keys=await getKeys(),res=await decryptData(...keys);return res.map(({url:t})=>t.replace(/(?<=(\/|\.))c800x/,"c1500x"))},handleLastChapter=t=>{let o;const a=new CSSStyleSheet;document.adoptedStyleSheets.push(a);const n=async()=>{o||(async()=>{o=document.createElement("a");const l=await helper.wait(()=>helper.querySelector(".table-default-right"));o.target="_blank",l.firstElementChild?.before(o);const c=document.createElement("span");c.textContent="\u6700\u5F8C\u95B1\u8B80\uFF1A",l.firstElementChild?.before(c)})(),o.textContent="\u7372\u53D6\u4E2D",o.removeAttribute("href");const s=(await pcApi.get(`/api/v3/comic2/${t}/query?platform=3`)).response?.results?.browse;if(!s){o.textContent=s===null?"\u7121":"\u672A\u8FD4\u56DE\u6578\u64DA";return}const h=s.chapter_id;if(!h){o.textContent="\u63A5\u53E3\u7570\u5E38";return}await a.replace(`ul a[href*="${h}"] {
        color: #fff !important;
        background: #1790E6;
      }`),o.href=`${location.pathname}/chapter/${h}`,o.textContent=s.chapter_name};setTimeout(n),document.addEventListener("visibilitychange",n)},buildChapters=async(t,o)=>{const{response:{results:a}}=await mobileApi.get(`/comicdetail/${t}/chapters`,{errorText:"\u52A0\u8F09\u6F2B\u756B\u76EE\u9304\u5931\u6557"}),n=await decryptData(a);helper.log(n);const{build:{type:r},groups:s}=n,h=c=>{const g=Object.fromEntries(r.map(({id:m})=>[m,[]]));for(const m of c.chapters)g[m.type].push(m);switch(o){case"mobile":for(const m of helper.querySelectorAll(".van-divider"))m.remove();return(()=>{var m=web.template('<div class="detailsTextContentTabs van-tabs van-tabs--line">')();return web.insert(m,web.createComponent(solidJs.For,{each:r,children:({id:d,name:_})=>web.createComponent(solidJs.Show,{get when(){return g[d].length},get children(){return[(()=>{var w=web.template('<div class=van-tabs__wrap><div role=tablist class="van-tabs__nav van-tabs__nav--line"><div role=tab class="van-tab van-tab--active"><span class="van-tab__text van-tab__text--ellipsis"><span></span></span></div><div class=van-tabs__line style=transition-duration:0.3s>')(),b=w.firstChild,u=b.firstChild,f=u.firstChild,S=f.firstChild,x=u.nextSibling;return web.setStyleProperty(b,"background","transparent"),web.insert(S,_),web.setStyleProperty(x,"width","0.24rem"),web.setStyleProperty(x,"transform","translateX(187.5px) translateX(-50%)"),w})(),(()=>{var w=web.template('<div class=van-tab__pane><div class="chapterList van-grid"style=padding-left:0.24rem>')(),b=w.firstChild;return web.insert(b,web.createComponent(solidJs.For,{get each(){return g[d]},children:u=>(()=>{var f=web.template('<div class="chapterItem oneLines van-grid-item"style=flex-basis:25%;padding-right:0.24rem;margin-top:0.24rem><a class="van-grid-item__content van-grid-item__content--center"><span class=van-grid-item__text>')(),S=f.firstChild,x=S.firstChild;return web.insert(x,()=>u.name),web.effect(I=>{var y=c.last_chapter.uuid===u.id,v=`/comic/${t}/chapter/${u.id}`;return y!==I.e&&f.classList.toggle("red",I.e=y),v!==I.t&&web.setAttribute(S,"href",I.t=v),I},{e:void 0,t:void 0}),f})()})),w})()]}})})),m})();case"web":return[(()=>{var m=web.template("<span>")();return web.insert(m,()=>c.name),m})(),(()=>{var m=web.template('<div class=table-default><div class=table-default-title><ul class="nav nav-tabs"role=tablist></ul><div class=table-default-right><span>\u66F4\u65B0\u5167\u5BB9\uFF1A</span><a target=_blank></a><span>\u66F4\u65B0\u6642\u9593\uFF1A</span><span></span></div></div><div class=table-default-box><div class=tab-content>')(),d=m.firstChild,_=d.firstChild,w=_.nextSibling,b=w.firstChild,u=b.nextSibling,f=u.nextSibling,S=f.nextSibling,x=d.nextSibling,I=x.firstChild;return web.insert(_,web.createComponent(solidJs.For,{each:r,children:({id:y,name:v})=>(()=>{var p=web.template("<li class=nav-item><a class=nav-link data-toggle=tab role=tab aria-selected=false>")(),k=p.firstChild;return web.insert(k,v),web.effect($=>{var M=g[y].length===0,C=`#${c.path_word}${v}`;return M!==$.e&&k.classList.toggle("disabled",$.e=M),C!==$.t&&web.setAttribute(k,"href",$.t=C),$},{e:void 0,t:void 0}),p})()})),web.insert(u,()=>c.last_chapter.name),web.insert(S,()=>c.last_chapter.datetime_created),web.insert(I,web.createComponent(solidJs.For,{each:r,children:({id:y,name:v})=>(()=>{var p=web.template('<div role=tabpanel class="tab-pane fade"><ul>')(),k=p.firstChild;return web.insert(k,web.createComponent(solidJs.For,{get each(){return g[y]},children:$=>(()=>{var M=web.template("<a target=_blank><li>")(),C=M.firstChild;return web.setStyleProperty(M,"display","block"),web.insert(C,()=>$.name),web.effect(L=>{var T=`/comic/${t}/chapter/${$.id}`,P=$.name;return T!==L.e&&web.setAttribute(M,"href",L.e=T),P!==L.t&&web.setAttribute(M,"title",L.t=P),L},{e:void 0,t:void 0}),M})()})),web.effect(()=>web.setAttribute(p,"id",`${c.path_word}${v}`)),p})()})),web.effect(()=>web.setAttribute(u,"href",`/comic/${t}/chapter/${c.last_chapter.comic_id}`)),m})()];default:return web.createComponent(solidJs.For,{each:r,children:({id:m,name:d})=>web.createComponent(solidJs.Show,{get when(){return g[m].length},get children(){var _=web.template("<div class=card style=max-width:100em><div class=card-body><h2 class=card-title></h2><ul>")(),w=_.firstChild,b=w.firstChild,u=b.nextSibling;return web.setStyleProperty(_,"margin","1em auto"),web.insert(b,d),web.insert(u,web.createComponent(solidJs.For,{get each(){return g[m]},children:f=>(()=>{var S=web.template('<a class="btn btn-outline-primary">')();return web.insert(S,()=>f.name),web.effect(x=>{var I=c.last_chapter.uuid===f.id,y=`/comic/${t}/chapter/${f.id}`;return I!==x.e&&S.classList.toggle("active",x.e=I),y!==x.t&&web.setAttribute(S,"href",x.t=y),x},{e:void 0,t:void 0}),S})()})),_}})})}};let l;switch(o){case"mobile":l=helper.querySelector(".detailsTextContent");for(const c of helper.querySelectorAll("button.van-dialog__confirm"))c.click();break;case"web":l=helper.querySelector(".upLoop");break;default:l=helper.querySelector("main"),l.textContent="",helper.useStyle("ul .btn { height: fit-content; width: fit-content; margin: 1em; }");break}web.render(()=>web.createComponent(solidJs.For,{get each(){return Object.values(s)},children:h}),l);for(const c of helper.querySelectorAll(".upLoop .table-default-title"))c.querySelector(".nav-link:not(.disabled)")?.click()};(async()=>{const t=document.cookie.split("; ").find(n=>n.startsWith("token="))?.replace("token=","");t&&(Reflect.set(mobileApi.headers,"Authorization",`Token ${t}`),Reflect.set(pcApi.headers,"Authorization",`Token ${t}`));let o="",a="";if(location.href.includes("/chapter/")?[,,o,,a]=location.pathname.split("/"):location.href.includes("/comicContent/")&&([,,,o,a]=location.pathname.split("/")),o&&a){const{setState:n}=await main.useInit("copymanga"),r=helper.querySelector("main .img+.title");r&&(r.textContent="ComicRead \u63D0\u793A\u60A8\uFF1A\u4F60\u8A2A\u554F\u7684\u5167\u5BB9\u66AB\u4E0D\u5B58\u5728\uFF0C\u8ACB\u9EDE\u9078\u53F3\u4E0B\u89D2\u6309\u9215\u5617\u8A66\u52A0\u8F09\u6F2B\u756B");const s=async()=>{const l=await pcApi.get(`/api/v3/comic/${o}/chapter2/${a}?platform=3`,{noCheckCode:!0});if(l.status!==200){const d=`\u6F2B\u756B\u52A0\u8F09\u5931\u6557\uFF1A${l.response.message||l.status}`;throw r&&(r.textContent=d),new Error(d)}if(r){r.textContent="\u6F2B\u756B\u52A0\u8F09\u6210\u529F\u{1F973}";const{chapter:{name:d},comic:{name:_}}=l.response.results;document.title=`${_} - ${d} - \u62F7\u8C9D\u6F2B\u756B \u62F7\u8D1D\u6F2B\u753B`}if(r??!helper.querySelector(".comicContent-next")){const{chapter:{next:d,prev:_}}=l.response.results;n("manga",{onNext:d?()=>location.assign(`/comic/${o}/chapter/${d}`):void 0,onPrev:_?()=>location.assign(`/comic/${o}/chapter/${_}`):void 0})}const c=[],{words:g,contents:m}=l.response.results.chapter;for(let d=0;d<m.length;d++)c[g[d]]=m[d].url.replace(/(?<=(\/|\.))c800x/,"c1500x");return c};n("comicMap","",{async getImgList(){if(helper.querySelector(".comicContent-next")&&n("manga",{onNext:helper.querySelectorClick(".comicContent-next a:not(.prev-null)"),onPrev:helper.querySelectorClick(".comicContent-prev:not(.index,.list) a:not(.prev-null)")}),r)return s();try{const l=await getImglistByHtml(o,a);if(l.length===0)throw new Error("\u89E3\u6790\u7F51\u9875\u53D8\u91CF\u5931\u8D25");return l}catch(l){return helper.log.error(l),s()}}}),n("manga","commentList",await(async()=>{const l=location.pathname.split("/").at(-1);return(await pcApi.get(`/api/v3/roasts?chapter_id=${l}&limit=100&offset=0&_update=true`,{errorText:"\u83B7\u53D6\u6F2B\u753B\u8BC4\u8BBA\u5931\u8D25"})).response.results.list.map(({comment:g})=>g)})());return}if(!a&&location.href.includes("/comic/")){if([,o]=location.href.split("/comic/"),!o)return;let n;const r=location.href.includes("/h5/");if(document.title==="404 - \u62F7\u8C9D\u6F2B\u756B"?n=r?"mobile":"404":r?(await helper.wait(()=>helper.querySelector(".van-toast__text")?.parentElement?.style.display==="none"),n=await helper.wait(()=>{if(helper.querySelector(".isBan")?.textContent?.includes("\u4E0D\u63D0\u4F9B\u95B1\u89BD"))return"mobile";const s=helper.querySelector(".van-dialog__message");if(s?.textContent?.includes("\u6F2B\u756B\u672A\u627E\u5230")){s.textContent=`\u6F2B\u756B\u672A\u627E\u5230!
\u8ACB\u5750\u548C\u653E\u5BEC\uFF0C\u7B49\u5F85\u76EE\u9304\u751F\u6210`;for(const h of helper.querySelectorAll(".detailsTextContentTabs"))h.remove();return"mobile"}},1e3)):(helper.querySelector(".wargin")?.textContent?.includes("\u4E0D\u63D0\u4F9B\u95B1\u89BD")||!await helper.wait(()=>helper.querySelector(".upLoop .table-default-title"),1e3))&&(n=helper.querySelector(".comicParticulars-title")?"web":"404"),n){const s=helper.querySelector(".isBan, .wargin");s&&(s.style.textDecoration="line-through");const h=helper.querySelector("main .img+.title");h&&(h.textContent="ComicRead \u63D0\u793A\u60A8\uFF1A\u4F60\u8A2A\u554F\u7684\u5167\u5BB9\u66AB\u4E0D\u5B58\u5728\uFF0C\u8ACB\u5750\u548C\u653E\u5BEC\uFF0C\u7B49\u5F85\u76EE\u9304\u751F\u6210");try{await buildChapters(o,n)}catch(l){helper.log.error(l),h&&(h.textContent="ComicRead \u63D0\u793A\u60A8\uFF1A\u76EE\u9304\u751F\u6210\u5931\u6557\u{1F622}"),main.toast.error("\u76EE\u9304\u751F\u6210\u5931\u6557\u{1F622}",{duration:Number.POSITIVE_INFINITY})}}!r&&t&&handleLastChapter(o)}})();break}case"www.pixiv.net":{let t=[];options={name:"pixiv",getImgList:()=>t,SPA:{async isMangaPage(){const o=Number(location.pathname.split("/")[2]);return!o||!location.pathname.startsWith("/artworks/")?(t.length=0,!1):(t=(await main.request(`/ajax/illust/${o}/pages`,{responseType:"json"})).response.body.map(n=>n.urls.original),t.length>1)}},initOptions:{autoShow:!1,defaultOption:{pageNum:1}}};break}case"www.zaimanhua.com":case"manhua.zaimanhua.com":{options={name:"zaiManHua",wait:()=>!!helper.querySelector(".scrollbar-demo-item"),getImgList:()=>unsafeWindow.__NUXT__.data.getChapters?.data?.chapterInfo?.page_url,SPA:{isMangaPage:()=>location.pathname.startsWith("/view/"),getOnNext:()=>helper.querySelectorClick("#next_chapter"),getOnPrev:()=>helper.querySelectorClick("#prev_chapter")}};break}case"m.zaimanhua.com":{const t=async(a,n)=>{const r=await main.request(`https://v4api.zaimanhua.com/app/v1/comic/chapter/${a}/${n}?_v=15`,{responseType:"json"});return r.response.errno&&main.toast.error(`${helper.t("alert.comic_load_error")}: ${r.response.errmsg}`,{throw:!0}),r.response.data.data},o=async a=>{const n=await main.request(`https://v4api.zaimanhua.com/app/v1/comic/detail/${a}?_v=15`,{responseType:"json"});return n.response.errno&&main.toast.error(`${helper.t("alert.comic_load_error")}: ${n.response.errmsg}`,{throw:!0}),n.response.data.data};options={name:"zaiManHua",async getImgList({setState:a}){const n=new URLSearchParams(location.search),r=Number(n.get("comic_id")),s=Number(n.get("chapter_id"));if(!r||!s)throw new Error(helper.t("site.changed_load_failed"));const h=await o(r),l=(h.chapters.length===1?h.chapters[0]:h.chapters.find(m=>m.data.find(d=>d.chapter_id===s))).data;l.sort((m,d)=>m.chapter_order-d.chapter_order);const c=l.findIndex(m=>m.chapter_id===s);return a("manga",{onPrev:c>0?()=>location.assign(`/pages/comic/page?comic_id=${r}&chapter_id=${l[c-1].chapter_id}`):void 0,onNext:c+1<l.length?()=>location.assign(`/pages/comic/page?comic_id=${r}&chapter_id=${l[c+1].chapter_id}`):void 0}),(await t(r,s)).page_url_hd},SPA:{isMangaPage:()=>location.pathname==="/pages/comic/page"}};break}case"terra-historicus.hypergryph.com":{const t=()=>`https://terra-historicus.hypergryph.com/api${location.pathname}`,o=a=>async()=>{const n=await main.request(`${t()}/page?pageNum=${a+1}`);return JSON.parse(n.responseText).data.url};options={name:"terraHistoricus",wait:()=>!!helper.querySelector(".HG_COMIC_READER_main"),async getImgList(){const n=(await main.request(t(),{responseType:"json"})).response.data.pageInfos;if(n.length===0&&location.pathname.includes("episode"))throw new Error("\u83B7\u53D6\u56FE\u7247\u5217\u8868\u65F6\u51FA\u9519");return helper.plimit(helper.range(n.length,o))},SPA:{isMangaPage:()=>location.href.includes("episode"),getOnPrev:()=>helper.querySelectorClick("footer .HG_COMIC_READER_prev a"),getOnNext:()=>helper.querySelectorClick("footer .HG_COMIC_READER_prev+.HG_COMIC_READER_buttonEp a")}};break}case"18comic.ink":case"jmcomic-zzz.one":case"jmcomic-zzz.org":case"18comic.org":case"18comic.vip":{const t=require("helper"),o=require("main");(async()=>{if(!location.pathname.includes("/photo/"))return;const{setState:a}=await o.useInit("jm");for(;!unsafeWindow?.onImageLoaded;){if(document.readyState==="complete"){o.toast.error("\u65E0\u6CD5\u83B7\u53D6\u56FE\u7247",{duration:Number.POSITIVE_INFINITY});return}await t.sleep(100)}a("manga",{onPrev:t.querySelectorClick(()=>t.querySelector(".menu-bolock-ul .fa-angle-double-left")?.parentElement),onNext:t.querySelectorClick(()=>t.querySelector(".menu-bolock-ul .fa-angle-double-right")?.parentElement)});const n=t.querySelectorAll(".scramble-page:not(.thewayhome) > img");if(unsafeWindow.aid<unsafeWindow.scramble_id||unsafeWindow.speed==="1")return a("comicMap","",{getImgList:()=>n.map(l=>l.dataset.original??"")});const r=async l=>{try{return await o.request(l,{responseType:"blob",fetch:!0,noTip:!0},3)}catch{return await o.request(l,{responseType:"blob",revalidate:!0,fetch:!1},3)}},s=async l=>{const c=l.dataset.original,g=t.getFileName(c);if(l.src.startsWith("blob:"))return{name:g,src:l.src};const m=await r(l.dataset.original);if(m.response.size===0)return o.toast.warn(`\u4E0B\u8F7D\u539F\u56FE\u65F6\u51FA\u9519: ${l.dataset.page}`),"";l.src=`${URL.createObjectURL(m.response)}#${l.src}`;try{await t.waitImgLoad(l,1e3*10)}catch{return URL.revokeObjectURL(l.src),l.src=c,o.toast.warn(`\u52A0\u8F7D\u539F\u56FE\u65F6\u51FA\u9519: ${l.dataset.page}`),""}try{l.nextElementSibling?.tagName==="CANVAS"&&l.nextElementSibling.remove(),unsafeWindow.onImageLoaded(l);const d=await t.canvasToBlob(l.nextElementSibling,"image/webp",1);if(URL.revokeObjectURL(l.src),!d)throw new Error("\u8F6C\u6362\u56FE\u7247\u65F6\u51FA\u9519");return{name:g,src:URL.createObjectURL(d)}}catch(d){return l.src=c,o.toast.warn(`\u8F6C\u6362\u56FE\u7247\u65F6\u51FA\u9519: ${l.dataset.page}, ${d.message}`),""}};await t.wait(()=>{const l=t.querySelectorAll(".lazy-loaded").length;return l>0&&t.querySelectorAll("canvas").length-l<=1});const h=l=>t.plimit(n.map((c,g)=>async()=>{l(g,await s(c))}));a("comicMap","",{getImgList:({dynamicLoad:l})=>l(h,n.length)})})().catch(a=>t.log.error(a));break}case"tw.manhuagui.com":case"m.manhuagui.com":case"www.mhgui.com":case"www.manhuagui.com":{if(!/\/comic\/\d+\/\d+\.html/.test(location.pathname))break;let comicInfo;try{const dataScript=helper.querySelectorAll("body > script:not([src])").find(t=>t.innerHTML.startsWith("window["));if(!dataScript)throw new Error(helper.t("site.changed_load_failed"));comicInfo=JSON.parse(eval(dataScript.innerHTML.slice(26)).match(/(?<=\()\{.+\}/)[0])}catch{main.toast.error(helper.t("site.changed_load_failed"));break}helper.useStyle("#smh-msg-box { z-index: 2147483647 !important }");const handlePrevNext=t=>{if(t===0)return;const o=location.pathname.replace(/(?<=\/)\d+(?=\.html)/,`${t}`);return()=>location.assign(o)};options={name:"manhuagui",getImgList(){const t=Object.entries(comicInfo.sl).map(o=>`${o[0]}=${o[1]}`).join("&");if(comicInfo.files)return comicInfo.files.map(o=>`${unsafeWindow.pVars.manga.filePath}${o}?${t}`);if(comicInfo.images){const{origin:o}=new URL(helper.querySelector("#manga img").src);return comicInfo.images.map(a=>`${o}${a}?${t}`)}return main.toast.error(helper.t("site.changed_load_failed"),{throw:!0}),[]},onNext:handlePrevNext(comicInfo.nextId),onPrev:handlePrevNext(comicInfo.prevId)};break}case"www.manhuaren.com":case"m.1kkk.com":case"www.1kkk.com":case"tel.dm5.com":case"en.dm5.com":case"cnc.dm5.com":case"www.dm5.cn":case"www.dm5.com":{if(!Reflect.has(unsafeWindow,"DM5_CID"))break;const imgNum=unsafeWindow.DM5_IMAGE_COUNT??unsafeWindow.imgsLen;if(!(Number.isSafeInteger(imgNum)&&imgNum>0)){main.toast.error(helper.t("site.changed_load_failed"));break}const getPageImg=async i=>{const res=await unsafeWindow.$.ajax({type:"GET",url:"chapterfun.ashx",data:{cid:unsafeWindow.DM5_CID,page:i,key:unsafeWindow.$("#dm5_key").length>0?unsafeWindow.$("#dm5_key").val():"",language:1,gtk:6,_cid:unsafeWindow.DM5_CID,_mid:unsafeWindow.DM5_MID,_dt:unsafeWindow.DM5_VIEWSIGN_DT,_sign:unsafeWindow.DM5_VIEWSIGN}});return eval(res)},handlePrevNext=(t,o)=>helper.querySelectorClick(()=>helper.querySelector(t)??helper.querySelectorAll(".view-bottom-bar a").find(a=>a.textContent?.includes(o)));options={name:"dm5",getImgList({dynamicLoad:t}){return Array.isArray(unsafeWindow.newImgs)&&unsafeWindow.newImgs.every(helper.isUrl)?unsafeWindow.newImgs:t(async o=>{const a=new Set;for(;a.size<imgNum;)for(const n of await getPageImg(a.size+1))a.has(n)||(a.add(n),o(a.size-1,n))},imgNum)},onPrev:handlePrevNext(".logo_1","\u4E0A\u4E00\u7AE0"),onNext:handlePrevNext(".logo_2","\u4E0B\u4E00\u7AE0"),onExit:t=>t&&helper.scrollIntoView(".postlist")};break}case"www.wnacg03.cc":case"www.wnacg02.cc":case"www.wnacg01.cc":case"www.wn03.ru":case"www.wnacg.com":case"wnacg.com":{const t=helper.querySelector("#bodywrap a.btn");if(t&&(t.style.setProperty("background-color","#607d8b"),t.style.setProperty("background-image","none")),!Reflect.has(unsafeWindow,"imglist"))break;options={name:"wnacg",getImgList:()=>unsafeWindow.imglist.filter(({caption:o})=>o!=="\u559C\u6B61\u7D33\u58EB\u6F2B\u756B\u7684\u540C\u5B78\u8ACB\u52A0\u5165\u6536\u85CF\u54E6\uFF01").map(({url:o})=>new URL(o,location.origin).href)};break}case"www.mangabz.com":case"mangabz.com":{if(!Reflect.has(unsafeWindow,"MANGABZ_CID"))break;const imgNum=unsafeWindow.MANGABZ_IMAGE_COUNT??unsafeWindow.imgsLen;if(!(Number.isSafeInteger(imgNum)&&imgNum>0)){main.toast.error(helper.t("site.changed_load_failed"));break}const getPageImg=async i=>{const res=await unsafeWindow.$.ajax({type:"GET",url:"chapterimage.ashx",data:{cid:unsafeWindow.MANGABZ_CID,page:i,key:"",_cid:unsafeWindow.MANGABZ_CID,_mid:unsafeWindow.MANGABZ_MID,_dt:unsafeWindow.MANGABZ_VIEWSIGN_DT,_sign:unsafeWindow.MANGABZ_VIEWSIGN}});return eval(res)},handlePrevNext=(t,o)=>helper.querySelectorClick(()=>helper.querySelector(t)??helper.querySelectorAll(".bottom-bar-tool a").find(a=>a.textContent?.includes(o)));options={name:"mangabz",getImgList:({dynamicLoad:t})=>t(async o=>{const a=new Set;for(;a.size<imgNum;)for(const n of await getPageImg(a.size+1))a.has(n)||(a.add(n),o(a.size-1,n))},imgNum),onNext:handlePrevNext('body > .container a[href^="/"]:last-child',"\u4E0B\u4E00"),onPrev:handlePrevNext('body > .container a[href^="/"]:first-child',"\u4E0A\u4E00")};break}case"komiic.com":{const t=`
        query imagesByChapterId($chapterId: ID!) {
          imagesByChapterId(chapterId: $chapterId) {
            id
            kid
            height
            width
            __typename
          }
        }`,o=async()=>{const n=/chapter\/(\d+)/.exec(location.pathname)?.[1];if(!n)throw new Error(helper.t("site.changed_load_failed"));return(await main.request("/api/query",{method:"POST",responseType:"json",headers:{"content-type":"application/json"},data:JSON.stringify({operationName:"imagesByChapterId",variables:{chapterId:`${n}`},query:t})})).response.data.imagesByChapterId.map(({kid:s})=>`https://komiic.com/api/image/${s}`)},a=n=>async()=>(await helper.waitDom(".v-bottom-navigation__content"),helper.querySelectorClick(".v-bottom-navigation__content > button:not([disabled])",n));options={name:"komiic",getImgList:o,SPA:{isMangaPage:()=>/comic\/\d+\/chapter\/\d+\/images\//.test(location.href),getOnPrev:a("\u4E0A\u4E00"),getOnNext:a("\u4E0B\u4E00")}};break}case"mangadex.org":{options={name:"mangadex",async getImgList(){const t=location.pathname.split("/").at(2),{response:{baseUrl:o,chapter:{data:a,hash:n}}}=await main.request(`https://api.mangadex.org/at-home/server/${t}?forcePort443=false`,{responseType:"json"});return a.map(r=>`${o}/data/${n}/${r}`)},SPA:{isMangaPage:()=>/^\/chapter\/.+/.test(location.pathname),getOnPrev:()=>helper.querySelectorClick('#chapter-selector > a[href^="/chapter/"]:nth-of-type(1)'),getOnNext:()=>helper.querySelectorClick('#chapter-selector > a[href^="/chapter/"]:nth-of-type(2)'),handleUrl:t=>t.href.replace(/(?<=\/chapter\/.+?)\/.*/,"")}};break}case"noy1.top":{options={name:"NoyAcg",async getImgList(){const[,,t]=location.hash.split("/"),o=await helper.wait(()=>helper.querySelector(".lazy-load-image-background img")),[a]=o.src.split(t),n=await helper.wait(()=>helper.querySelectorAll(".lazy-load-image-background").length);return helper.range(n,r=>`${a}${t}/${r+1}.webp`)},SPA:{isMangaPage:()=>location.hash.startsWith("#/read/")}};break}case"8.twobili.com":case"a.twobili.com":case"articles.onemoreplace.tw":case"www.8comic.com":{if(!/^\/(?:online|ReadComic|comic)\//.test(location.pathname))break;Manga.downloadImgHeaders.Referer="https://www.8comic.com/",options={name:"8comic",getImgList:()=>[...unsafeWindow.xx.matchAll(/(?<= s=").+?(?=")/g)].map(([o])=>decodeURIComponent(o)),onNext:helper.querySelectorClick("#nextvol"),onPrev:helper.querySelectorClick("#prevvol")};break}case"www.relamanhua.org":case"www.manga2024.com":case"www.2024manga.com":{if(!location.pathname.includes("/chapter/")&&!document.querySelector(".disData[contentkey]"))break;options={name:"relamanhua",getImgList:async()=>{const[,,o,,a]=location.pathname.split("/");return(await main.request(`https://api.manga2025.com/api/v3/comic/${o}/chapter/${a}`,{responseType:"json"})).response.results.chapter.contents.map(({url:r})=>r.replace(".h800x.",".h1500x."))},onNext:helper.querySelectorClick(".comicContent-next a:not(.prev-null)"),onPrev:helper.querySelectorClick(".comicContent-prev:not(.index,.list) a:not(.prev-null)")};break}case"hitomi.la":{options={name:"hitomi",wait:()=>unsafeWindow.galleryinfo&&Reflect.has(unsafeWindow.galleryinfo,"files")&&unsafeWindow.galleryinfo.type!=="anime",getImgList:()=>unsafeWindow.galleryinfo.files.map(t=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo.id,t,"webp"))};break}case"shupogaki.moe":case"hoshino.one":case"niyaniya.moe":{const t=n=>new Promise(r=>{const s=new XMLHttpRequest;s.responseType="blob",s.open("GET",n),s.onload=()=>{r(URL.createObjectURL(s.response))},s.send()}),o=()=>location.href.includes("/g/"),a=localStorage.getItem("clearance");options={name:"schale",async getImgList({dynamicLoad:n}){const[,,r,s]=location.pathname.split("/"),h=await main.request(`https://api.schale.network/books/detail/${r}/${s}?crt=${a}`,{fetch:!0,responseType:"json",method:"POST"}),[[l,{id:c,key:g}]]=Object.entries(h.response.data).filter(([,b])=>b.id&&b.key).sort(([,b],[,u])=>u.size-b.size),m=await main.request(`https://api.schale.network/books/data/${r}/${s}/${c}/${g}/${l}?crt=${a}`,{fetch:!0,responseType:"json"}),{base:d,entries:_}=m.response,w=_.length;return n(async b=>{for(const[u,{path:f,dimensions:S}]of _.entries()){if(!o)break;const x=performance.now();b(u,await t(`${d}${f}?w=${S[0]}`)),await helper.sleep(500-(performance.now()-x))}},w)},SPA:{isMangaPage:o}};break}case"kemono.cr":case"kemono.su":case"kemono.party":{const t=require("helper"),o=require("main");(async()=>{const a=()=>location.pathname.includes("/post/");await t.waitUrlChange(a);const{store:n,setState:r,showComic:s,init:h}=await o.useInit("kemono",{autoShow:!1,defaultOption:{pageNum:1},load_original_image:!0});t.createEffectOn(()=>n.options.load_original_image,(m,d)=>{r("nowComic",m?"original":"thumbnail"),d&&s()}),await t.waitDom(".post__thumbnail");const l=()=>t.querySelectorAll(".post__thumbnail a").map(m=>m.href),c=()=>t.querySelectorAll(".post__thumbnail img").map(m=>m.src);r(m=>{m.comicMap.original={getImgList:l,imgList:l()},m.comicMap.thumbnail={getImgList:c,imgList:c()},m.manga.onNext=t.querySelectorClick(".post__nav-link.next"),m.manga.onPrev=t.querySelectorClick(".post__nav-link.prev")}),h();const g=new Set(["zip","rar","7z","cbz","cbr","cb7"]);for(const m of t.querySelectorAll(".post__attachment a")){if(!g.has(m.href.split(".").pop()))continue;const d=document.createElement("a");d.href=`https://comic-read.pages.dev/?url=${encodeURIComponent(m.href)}`,d.textContent=m.textContent.replace("Download ","ComicReadPWA - "),d.className=m.className,d.style.opacity=".6",m.parentNode.insertBefore(d,m.nextElementSibling)}t.onUrlChange(async m=>{if(m){if(!a())return r(d=>{d.fab.show=!1,d.manga.show=!1});r(d=>{d.fab.show=void 0,d.manga.show=!1}),await t.wait(()=>c()[0]!==n.comicMap.thumbnail.imgList?.[0]),r(d=>{d.comicMap.original.imgList=l(),d.comicMap.thumbnail.imgList=c()}),n.options.autoShow&&await s()}})})();break}case"nekohouse.su":{if(!location.pathname.includes("/post/"))break;options={name:"nekohouse",getImgList:()=>helper.querySelectorAll(".fileThumb").map(t=>t.getAttribute("href")),initOptions:{autoShow:!1,defaultOption:{pageNum:1}}};break}case"nicomanga.com":case"weloma.art":case"welovemanga.one":{if(!helper.querySelector("#listImgs, .chapter-content"))break;const t=async()=>{const o=helper.querySelectorAll("img.chapter-img:not(.ls-is-cached)").map(a=>(a.dataset.src||a.dataset.srcset||a.dataset.original||a.src).trim()).filter(Boolean);return o.length>0&&o.every(a=>!/loading.*\.gif/.test(a))?o:(await helper.sleep(500),t())};options={name:"welovemanga",getImgList:t,onNext:helper.querySelectorClick(".rd_top-right.next:not(.disabled)"),onPrev:helper.querySelectorClick(".rd_top-left.prev:not(.disabled)")};break}case"hentaizap.com":{if(!location.pathname.startsWith("/g/"))break;options={name:"hentaizap",getImgList(){const t=Number(helper.querySelector("#pages").value),o=helper.querySelector("#fimg"),n=(o.dataset.src||o.src).split("/").slice(0,-1).join("/");return helper.range(t,r=>`${n}/${r+1}.${helper.fileType[unsafeWindow.g_th[r+1].slice(0,1)]}`)}};break}case"sai-zen-sen.jp":{switch(options={name:"sai-zen-sen",getImgList:()=>[]},location.pathname.match(/\/[^/]+\/[^/]+\//)?.[0]){case"/special/4pages-comics/":case"/works/comics/":options.getImgList=()=>Object.values(unsafeWindow.B.Package.Manifest.items).map(({href:t})=>t).filter(Boolean).map(t=>`${unsafeWindow.B.Path}/${t}`),options.onPrev=helper.querySelectorClick("ul.volumes > li:nth-child(2) > a[href]"),options.onNext=helper.querySelectorClick("ul.volumes > li:nth-child(3) > a[href]");break;case"/comics/twi4/":options.getImgList=()=>unsafeWindow.t4.Meta.Items.map(({ImageFileName:t})=>`${unsafeWindow.t4.GA.Gate.x_directory}works/${t}`);break;default:options=void 0}break}case"comic-read.pages.dev":{unsafeWindow.GM_xmlhttpRequest=GM_xmlhttpRequest,unsafeWindow.toast=main.toast;break}default:if(document.querySelector(`head > meta[content="A manga reader that runs tachiyomi's extensions"]`)){const t=(a,n)=>{location.pathname=`/manga/${a}/chapter/${n}`},o=async(a,n)=>{const r=await main.request("/api/graphql",{method:"POST",data:JSON.stringify({operationName:"GET_CHAPTERS",query:`query GET_CHAPTERS($mangaId: Int!, $chapterId: Int!) {
                chapters(condition: {
                  mangaId: $mangaId, sourceOrder: $chapterId}
                ) { nodes { pageCount } }
                manga(id: $mangaId) { chapters { totalCount } }
              }`,variables:{mangaId:a,chapterId:n}}),responseType:"json"});return r.response.data.chapters.nodes[0].pageCount<=0?(await helper.sleep(200),o(a,n)):r.response.data};options={name:"Tachidesk",SPA:{isMangaPage:()=>/\/manga\/\d+\/chapter\/\d+/.test(location.pathname)},async getImgList({setState:a}){const[,,n,,r]=location.pathname.split("/").map(Number),s=await o(n,r),[{pageCount:h}]=s.chapters.nodes,l=s.manga.chapters.totalCount;return a("manga",{onPrev:r>0?()=>t(n,r-1):void 0,onNext:r<l?()=>t(n,r+1):void 0}),helper.range(h,c=>`/api/v1/manga/${n}/chapter/${r}/page/${c}`)},onShowImgsChange:helper.debounce((a,n)=>{const r=n[[...a].at(-1)].src;helper.querySelector(`img[src$="${r}"]`)?.scrollIntoView({behavior:"instant",block:"end"})},500)}}else(async()=>{if(await GM.getValue(location.hostname)!==void 0)return helper.requestIdleCallback(otherSite.otherSite);await GM.registerMenuCommand((t=>{switch(t){case"en":return"Enter simple reading mode";case"ru":return"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0440\u0435\u0436\u0438\u043C \u0447\u0442\u0435\u043D\u0438\u044F";default:return"\u4F7F\u7528\u7B80\u6613\u9605\u8BFB\u6A21\u5F0F"}})(await languages.getInitLang()),otherSite.otherSite)})()}options&&main.universal(options)}catch(t){helper.log.error(t)}
