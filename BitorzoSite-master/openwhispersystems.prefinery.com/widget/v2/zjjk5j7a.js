var pfy=pfy||{};!function(e,r,t,i){if(!pfy.alreadyLoaded){var n,o,a=!1;if(!(n=e.jQuery)||t>n.fn.jquery.split(".").map(function(e){return("0"+e).slice(-2)}).join(".")||i(n,a)){var p=r.createElement("script");p.type="text/javascript",p.src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",p.onload=p.onreadystatechange=function(){a||(o=this.readyState)&&"loaded"!=o&&"complete"!=o||(i((n=e.jQuery).noConflict(1),a=!0),n(p).remove())},(r.getElementsByTagName("head")[0]||r.documentElement).appendChild(p)}}}(window,document,"01.09.01",function(e){function r(e){for(var r=window.location.search.substring(1),t=r.split("&"),i=0;i<t.length;i++){var n=t[i].split("=");if(n[0]===e)return n[1]}}function t(){var e=r("pfylog");return null!=e}function i(e){j&&console.log(e)}function n(){var e=location.protocol+"//"+location.host+location.pathname;return e=e.replace(/\/$/,"")}function o(){var e=r("r");return e||(e=a()),e}function a(){var e=r("ref");return e}function p(){var e=r("ref-check");return e}function f(){var e;return"undefined"!=typeof ga&&ga.create&&ga(function(r){e=r.get("linkerParam"),i("Prefinery Widget -- Using GA Linker: "+e)}),e}function s(){var e="",t=r("utm_source"),n=r("utm_medium"),o=r("utm_campaign"),a=r("utm_term"),p=r("utm_content");return t&&(e=e+"&utm_source="+t,i("Prefinery Widget -- UTM Source = "+t)),n&&(e=e+"&utm_medium="+n,i("Prefinery Widget -- UTM Medium = "+n)),o&&(e=e+"&utm_campaign="+o,i("Prefinery Widget -- UTM Campaign = "+o)),a&&(e=e+"&utm_term="+a,i("Prefinery Widget -- UTM Term = "+a)),p&&(e=e+"&utm_content="+p,i("Prefinery Widget -- UTM Content = "+p)),e}function d(){e("#prefinery_overlay").length||(i("Prefinery Widget -- Creating Overlay"),e("body").append('<div id="prefinery_overlay" style="display:none;">\n  <div id="prefinery_container">\n    <div id="prefinery_popup">\n      <div id="prefinery_header">\n        <button type="button" id="prefinery_close">\xd7</button>\n      </div>\n      <div id="prefinery_body">\n        <iframe src="" id="prefinery_overlay_iframe" class=\'prefinery-popup-iframe\' allowTransparency="true" scrolling="no" frameborder="0"></iframe>\n      </div>\n    </div>\n  </div>\n  <div id="prefinery_screen"></div>\n</div>\n'),e("#prefinery_overlay").on("click","#prefinery_close",function(){e("#prefinery_overlay").hide()}))}function c(r,t){d();var n="true"===t.attr("data-prefinery-reload");(n||""==e("#prefinery_overlay_iframe").attr("src")||e("#prefinery_overlay_iframe").attr("src")!=r)&&(i("Prefinery Widget -- Pointing Popup at "+r),e("#prefinery_overlay_iframe").attr("src",r),e("#prefinery_overlay_iframe").on("load",function(){e("#prefinery_overlay_iframe").addClass("loaded")})),e("#prefinery_overlay").show()}function l(e,r){i("Prefinery Widget -- Pointing Embedded Frame at "+r),e.hide(),e.html("  <iframe src='' class='prefinery-iframe' allowTransparency='true' width='100%' scrolling=\"no\" frameborder='0'></iframe>\n");var t=e.find("iframe").first();t.attr("src",r);try{e.fadeIn("fast")}catch(r){e.show()}}function m(e,r){var t=u(r),n=f(),o=s(),e=e+"&version=2";return t&&(e=e+"&"+t),n&&(e=e+"&"+n),o&&(e+=o),t.indexOf("referrer")==-1&&T.hasItem(P)&&(i("Prefinery Widget -- Reading HTTP Referrer"),e=e+"&referrer="+encodeURIComponent(T.getItem(P))),e}function y(e){return R?e=e+"&referral_token="+R:T.hasItem(I)&&(i("Prefinery Widget -- Reading Referral Token"),e=e+"&referral_token="+T.getItem(I)),e}function u(r){var t=r.data(),i={};for(var n in t)switch(n){case"prefineryPrefillEmail":i.tester_email=t[n];break;case"prefineryReferrer":i.referrer=t[n];break;case"prefineryTesterId":i.tester_id=t[n];break;case"prefineryTesterEmail":i.tester_email=t[n];break;case"prefineryTesterHash":i.tester_hash=t[n]}return e.param(i)}function g(e){i("Prefinery Widget -- Storing Referral Token in cookie "+I+": "+e),T.setItem(I,e,3154e4)}function h(){i("Prefinery Widget -- Writing impression cookie "+W),T.setItem(W,!0,3154e4)}function v(){var e;return e=T.hasItem(P)?T.getItem(P):document.referrer}function _(t){i("Prefinery Widget -- Recording Share for User with Token: "+t),e.ajax({url:"https://i.prefinery.com/widget/v2/zjjk5j7a/record_referral_click",jsonp:"callback",dataType:"jsonp",data:{token:t,utm_source:r("utm_source"),referrer:v()},complete:function(){g(t)}})}function x(e){var r=e.find("input#referrer");if(""==r.val()&&T.hasItem(P)){var t=v();i("Prefinery Widget -- Setting referrer input field on raw HTML form to "+t),r.val(t)}}function b(e){var r,t=e.find("input#referral_token");""==t.val()&&(T.hasItem(I)?r=T.getItem(I):R&&(r=R),r&&(i("Prefinery Widget -- Setting referral_token input field on raw HTML form to "+r),t.val(r)))}function k(){T.hasItem(W)||(i("Prefinery Widget -- Record impression for raw HTML form"),e.ajax({url:"https://i.prefinery.com/widget/v2/zjjk5j7a/record_impression",jsonp:"callback",dataType:"jsonp",data:{referrer:v()},complete:function(){h()}}))}pfy.alreadyLoaded||(pfy.alreadyLoaded=!0);var w="2019.04.29",j=t(),P="_pfy_zjjk5j7a_referrer",I="_pfy_zjjk5j7a_referral",W="_pfy_zjjk5j7a_impression";i("Prefinery Widget -- Version: "+w),i("Prefinery Widget -- jQuery Version: "+e.fn.jquery);var T={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,r,t,i,n,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var a="";if(t)switch(t.constructor){case Number:a=t===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:a="; expires="+t;break;case Date:a="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(r)+a+(n?"; domain="+n:"")+(i?"; path="+i:"")+(o?"; secure":""),!0},removeItem:function(e,r,t){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(t?"; domain="+t:"")+(r?"; path="+r:""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),r=e.length,t=0;t<r;t++)e[t]=decodeURIComponent(e[t]);return e}};e("head").append('<style type="text/css" id="prefinery-styles">#prefinery_container,#prefinery_screen{top:0;bottom:0;left:0;position:fixed;right:0}#prefinery_container{overflow-y:scroll;overflow:auto;-webkit-overflow-scrolling:touch;z-index:2000000}#prefinery_popup{top:5%;left:50%;bottom:auto;right:auto;padding:10px;width:500px;margin-left:-250px;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5);background-clip:padding-box;outline:0;position:absolute;margin-top:0;overflow:visible}@media (max-width:979px){#prefinery_popup{top:1%;right:1%;left:1%;bottom:auto;width:auto!important;height:auto!important;margin:0!important}#prefinery_body{position:static;margin:0;height:auto!important;max-height:none!important;overflow:visible!important}}#prefinery_header{height:30px}#prefinery_body{position:relative;width:100%;height:100%;max-height:none;overflow:visible;-webkit-transform:translateZ(0);top:-5px}#prefinery_iframe,#prefinery_overlay_iframe{width:100%;max-width:100%;height:179px;padding-right:15px;background:url(https://d2yyb7ppir675o.cloudfront.net/assets/widgets/widget-loading.gif) center center no-repeat}#prefinery_iframe.loaded,#prefinery_overlay_iframe.loaded{background:0 0}#prefinery_close{float:right;font-size:25px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;margin-top:-5px;height:25px;opacity:.2;-moz-opacity:.2;filter:alpha(opacity=20)}#prefinery_close:focus,#prefinery_close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5;-moz-opacity:.5;filter:alpha(opacity=50)}button#prefinery_close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}#prefinery_screen{background-color:#000;opacity:.5;-moz-opacity:.5;filter:alpha(opacity=50);z-index:1040}#prefinery_feedback_tab,#prefinery_invite_a_friend_tab{-webkit-transform-origin:right top;-moz-transform-origin:right top;-o-transform-origin:right top;-ms-transform-origin:right top;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);position:fixed;top:310px;right:0;margin:0;width:130px;background:#F47421;color:#FFF;padding:6px 10px;text-decoration:none;text-align:center;cursor:pointer;font-size:14px;font-weight:700;letter-spacing:1px;border:2px solid #FFF;border-top:none;display:block;z-index:100000;-moz-box-shadow:rgba(0,0,0,.5) 1px 3px 10px;-webkit-box-shadow:rgba(0,0,0,.5) 1px 3px 10px;box-shadow:rgba(0,0,0,.5) 1px 3px 10px}</style>');var R=o(),z=p();if(e(window).on("message onmessage",function(r){try{var t=r.originalEvent.data.split("|");"PrefineryIFrameHeight"==t[0]?(i("Prefinery Widget -- Msg Rcvd: "+t),e(".prefinery-iframe").height(t[1])):"PrefineryPopupHeight"==t[0]&&(i("Prefinery Widget -- Msg Rcvd: "+t),e(".prefinery-popup-iframe").height(t[1]))}catch(e){i("Prefinery Widget -- Msg Corrupt -- Original Msg: "+JSON.stringify(r.originalEvent.data))}}),document.referrer&&!T.hasItem(P)&&(i("Prefinery Widget -- Storing HTTP Referrer in cookie "+P+": "+document.referrer),T.setItem(P,document.referrer,2628e3)),e(document).on("click",".prefinery-form-cta",function(r){r.preventDefault();var t="https://i.prefinery.com/projects/zjjk5j7a/users/new?display=popup";t=m(t,e(this)),t=y(t),i("Prefinery Widget -- Signup Form URL: "+t),c(t,e(this))}),e(document).on("click",".prefinery-invite-a-friend-cta",function(r){r.preventDefault();var t="https://i.prefinery.com/projects/zjjk5j7a/friend_invitations/new?display=popup";t=m(t,e(this)),i("Prefinery Widget -- Invite-a-Friend URL: "+t),c(t,e(this))}),e(".prefinery-form-embed").each(function(){var r="https://i.prefinery.com/projects/zjjk5j7a/users/new?display=inline";r=m(r,e(this)),r=y(r),i("Prefinery Widget -- Signup Form URL: "+r),l(e(this),r)}),e(".prefinery-invite-a-friend-embed").each(function(){var r="https://i.prefinery.com/projects/zjjk5j7a/friend_invitations/new?display=inline";r=m(r,e(this)),i("Prefinery Widget -- Invite-a-Friend URL: "+r),l(e(this),r)}),e(".prefinery-viral-referral-embed").each(function(){var t="https://i.prefinery.com/projects/zjjk5j7a/users/thank-you-page?display=inline";!(tester_id=r("ref"))||"https://whispersystems.org"!==n()||""!==e(this).data("prefinery-tester-id")&&"TESTER-ID"!==e(this).data("prefinery-tester-id")||(i("Prefinery Widget -- Auto set referral page data-prefinery-tester-id: "+tester_id),e(this).data("prefinery-tester-id",tester_id)),t=m(t,e(this)),i("Prefinery Widget -- Viral Referral URL: "+t),l(e(this),t)}),e("form.pfy-signup-form").each(function(){x(e(this)),b(e(this)),k(e(this))}),((token=r("r"))&&!T.hasItem(I)||(token=r("ref"))&&""===n()&&!T.hasItem(I))&&_(token),z){i("Prefinery Widget -- Checking Waitlist Position For: "+z);var U="https://i.prefinery.com/widget/v2/zjjk5j7a/check_position?display=popup";U=m(U,e(this)),U=U+"&check_token="+z,i("Prefinery Widget -- Popup URL: "+U),c(U,e(this))}});
