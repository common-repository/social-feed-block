!function(){"use strict";var t={410:function(t,e,n){var r=n(206);e.H=r.createRoot,r.hydrateRoot},206:function(t){t.exports=ReactDOM}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}!function(){var t=React,e=n(410),r=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=t||{},a=o.type,c=void 0===a?"solid":a,i=o.color,l=void 0===i?"#000000b3":i,u=o.gradient,s=void 0===u?"linear-gradient(135deg, #4527a4, #8344c5)":u,f=o.image,m=void 0===f?{}:f,d=o.position,h=void 0===d?"center center":d,p=o.attachment,v=void 0===p?"initial":p,g=o.repeat,y=void 0===g?"no-repeat":g,b=o.size,w=void 0===b?"cover":b,E=o.overlayColor,x=void 0===E?"#000000b3":E;return"gradient"===c&&n?"background: ".concat(s,";"):"image"===c&&r?"background: url(".concat(null==m?void 0:m.url,");\n\t\t\t\tbackground-color: ").concat(x,";\n\t\t\t\tbackground-position: ").concat(h,";\n\t\t\t\tbackground-size: ").concat(w,";\n\t\t\t\tbackground-repeat: ").concat(y,";\n\t\t\t\tbackground-attachment: ").concat(v,";\n\t\t\t\tbackground-blend-mode: overlay;"):e&&"background: ".concat(l,";")},o=function(t){var e=t||{},n=e.width,r=void 0===n?"0px":n,o=e.style,a=void 0===o?"solid":o,c=e.color,i=void 0===c?"#0000":c,l=e.side,u=void 0===l?"all":l,s=e.radius,f=void 0===s?"0px":s,m=function(t){var e=null==u?void 0:u.toLowerCase();return(null==e?void 0:e.includes("all"))||(null==e?void 0:e.includes(t))},d="0px"===r||!r,h="".concat(r," ").concat(a," ").concat(i),p="\n\t\t".concat(d?"":["top","right","bottom","left"].map((function(t){return m(t)?"border-".concat(t,": ").concat(h,";"):""})).join(""),"\n\t\t").concat(f?"border-radius: ".concat(f,";"):"","\n\t");return p},a=function(t){var e=t||{},n=e.color,r=void 0===n?"#333":n,o=e.bgType,a=void 0===o?"solid":o,c=e.bg,i=void 0===c?"#0000":c,l=e.gradient,u=void 0===l?"linear-gradient(135deg, #4527a4, #8344c5)":l;return"\n\t\t".concat(r?"color: ".concat(r,";"):"","\n\t\t").concat(u||i?"background: ".concat("gradient"===a?u:i,";"):"","\n\t")},c=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e||{},o=r.fontFamily,a=void 0===o?"Default":o,c=r.fontCategory,i=void 0===c?"sans-serif":c,l=r.fontVariant,u=void 0===l?400:l,s=r.fontWeight,f=void 0===s?400:s,m=r.isUploadFont,d=void 0===m||m,h=r.fontSize,p=void 0===h?{desktop:15,tablet:15,mobile:15}:h,v=r.fontStyle,g=void 0===v?"normal":v,y=r.textTransform,b=void 0===y?"none":y,w=r.textDecoration,E=void 0===w?"auto":w,x=r.lineHeight,R=void 0===x?"135%":x,L=r.letterSpace,N=void 0===L?"0px":L,_=function(t,e){return t?"".concat(e,": ").concat(t,";"):""},I=!n||!a||"Default"===a,k=(null==p?void 0:p.desktop)||p,S=(null==p?void 0:p.tablet)||k,O=(null==p?void 0:p.mobile)||S,j="\n\t\t".concat(I?"":"font-family: '".concat(a,"', ").concat(i,";"),"\n\t\t").concat(_(f,"font-weight"),"\n\t\t","font-size: ".concat(k,"px;"),"\n\t\t").concat(_(g,"font-style"),"\n\t\t").concat(_(b,"text-transform"),"\n\t\t").concat(_(E,"text-decoration"),"\n\t\t").concat(_(R,"line-height"),"\n\t\t").concat(_(N,"letter-spacing"),"\n\t"),P=u&&400!==u?"400i"===u?":ital@1":null!=u&&u.includes("00i")?": ital, wght@1, ".concat(null==u?void 0:u.replace("00i","00")," "):": wght@".concat(u," "):"",F=I?"":"https://fonts.googleapis.com/css2?family=".concat(null==a?void 0:a.split(" ").join("+")).concat(P.replace(/ /g,""),"&display=swap");return{googleFontLink:!d||I?"":"@import url(".concat(F,");"),styles:"".concat(t,"{\n\t\t\t").concat(j,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(S,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(O,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},i=function(t){var e,n,i,l,u,s,f,m,d,h,p,v,g,y,b,w,E,x,R=t.attributes,L=t.clientId,N=R.cId,_=R.columnGap,I=R.rowGap,k=R.profileInfo,S=R.background,O=R.padding,j=R.border,P=R.followBtnColors,F=R.followBtnHovColors,T=R.captionBG,A=R.captionTypo,C=R.captionColor,G=k||{},z=G.photoSize,B=void 0===z?"55px":z,M=G.popupPhotoSize,D=void 0===M?"40px":M,H=G.userNameColor,V=void 0===H?"#4527a4":H,U=G.followersColor,Y=G.followsColor,q=G.nameColor,$=G.bioColor,J="#ifbInstagramFeed-".concat(L," .ifbInstagramFeed"),Q="".concat(J," .galleryItem"),W="".concat(J," .ifbProfile"),Z=".ifbPopupContent-".concat(N),K="".concat(Z," .ifbProfile");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(null===(e=c("",A))||void 0===e?void 0:e.googleFontLink,"\n\t\t").concat(null===(n=c("".concat(Q," .caption p"),A))||void 0===n?void 0:n.styles,"\n\n\t\t").concat(J,"{\n\t\t\t").concat(r(S),"\n\t\t\tpadding: ").concat((i=O,l=i||{},u=l.side,s=void 0===u?2:u,f=l.vertical,m=void 0===f?"0px":f,d=l.horizontal,h=void 0===d?"0px":d,p=l.top,v=void 0===p?"0px":p,g=l.right,y=void 0===g?"0px":g,b=l.bottom,w=void 0===b?"0px":b,E=l.left,x=void 0===E?"0px":E,2===s?"".concat(m," ").concat(h):"".concat(v," ").concat(y," ").concat(w," ").concat(x)),";\n\t\t\t").concat(o(j),"\n\t\t}\n\t\t").concat(Z,"{\n\t\t\t").concat(r(S),"\n\t\t}\n\t\t").concat(J," .galleryHeader{\n\t\t\tmargin-bottom: ").concat(I,";\n\t\t}\n\n\t\t").concat(W," .profileImg,  {\n\t\t\twidth: ").concat(B,";\n\t\t\tmin-width: ").concat(B,";\n\t\t\theight: ").concat(B,";\n\t\t}\n\t\t").concat(K," .profileImg{\n\t\t\twidth: ").concat(D,";\n\t\t\tmin-width: ").concat(D,";\n\t\t\theight: ").concat(D,";\n\t\t}\n\t\t").concat(W," .userName, ").concat(K," .userName {\n\t\t\tcolor: ").concat(V,";\n\t\t}\n\t\t").concat(W," .follow .followers, ").concat(K," .follow .followers {\n\t\t\tcolor: ").concat(U,";\n\t\t}\n\t\t").concat(W," .follow .following, ").concat(K," .follow .following {\n\t\t\tcolor: ").concat(Y,";\n\t\t}\n\t\t").concat(W," .name, ").concat(K," .name {\n\t\t\tcolor: ").concat(q,";\n\t\t}\n\t\t").concat(W," .biography, ").concat(K," .biography {\n\t\t\tcolor: ").concat($,";\n\t\t}\n\n\t\t").concat(J," .followBtn{\n\t\t\t").concat(a(P||{color:"#fff",bg:"#4527a4"}),"\n\t\t}\n\t\t").concat(J," .followBtn:hover{\n\t\t\t").concat(a(F||{color:"#fff",bg:"#8344c5"}),"\n\t\t}\n\n\t\t").concat(J," .ifbGallery{\n\t\t\tgrid-gap: ").concat(I," ").concat(_,";\n\t\t}\n\t\t").concat(Q," figure .caption{\n\t\t\t").concat(r(T),"\n\t\t}\n\t\t").concat(Q," .caption p{\n\t\t\tcolor: ").concat(C,";\n\t\t}\n\t\t").replace(/\s+/g," ")}})};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function m(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,c=Object.create(a.prototype),i=new P(r||[]);return o(c,"_invoke",{value:k(t,n,i)}),c}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=m;var h="suspendedStart",p="suspendedYield",v="executing",g="completed",y={};function b(){}function w(){}function E(){}var x={};f(x,c,(function(){return this}));var R=Object.getPrototypeOf,L=R&&R(R(F([])));L&&L!==n&&r.call(L,c)&&(x=L);var N=E.prototype=b.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(o,a,c,i){var u=d(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,i)}))}i(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,n,r){var o=h;return function(a,c){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===a)throw c;return{value:t,done:!0}}for(r.method=a,r.arg=c;;){var i=r.delegate;if(i){var l=S(i,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var u=d(e,n,r);if("normal"===u.type){if(o=r.done?g:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=g,r.method="throw",r.arg=u.arg)}}}function S(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=d(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(l(e)+" is not iterable")}return w.prototype=E,o(N,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,s,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},_(I.prototype),f(I.prototype,i,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var c=new I(m(t,n,r,o),a);return e.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},_(N),f(N,s,"Generator"),f(N,c,(function(){return this})),f(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=F,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return i.type="throw",i.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var l=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(l&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function s(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==l(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e,n,r,o,a,c){try{var i=t[a](c),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(r,o)}var m=jQuery,d=function(){var t,e=(t=u().mark((function t(e){var n,r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://graph.instagram.com/me?fields=id,username,media_count,account_type&access_token=".concat(e)).then((function(t){return null==t?void 0:t.json()}));case 2:return r=t.sent,t.next=5,fetch("https://graph.instagram.com/me/media?fields=id,username,media_type,media_url,thumbnail_url,caption,permalink,timestamp,children{id,media_type,media_url,thumbnail_url,permalink,timestamp}&access_token=".concat(e,"&limit=100")).then((function(t){return null==t?void 0:t.json()}));case 5:return o=t.sent,console.log(o),t.abrupt("return",{user:r,userData:s({},null==r?void 0:r.username,{media:null==o?void 0:o.data,page:null==o||null===(n=o.paging)||void 0===n?void 0:n.cursors})});case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){f(a,r,o,c,i,"next",t)}function i(t){f(a,r,o,c,i,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */p=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,c=Object.create(a.prototype),i=new P(r||[]);return o(c,"_invoke",{value:k(t,n,i)}),c}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var m="suspendedStart",d="suspendedYield",v="executing",g="completed",y={};function b(){}function w(){}function E(){}var x={};u(x,c,(function(){return this}));var R=Object.getPrototypeOf,L=R&&R(R(F([])));L&&L!==n&&r.call(L,c)&&(x=L);var N=E.prototype=b.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(o,a,c,i){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==h(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(s).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,i)}))}i(l.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,n,r){var o=m;return function(a,c){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===a)throw c;return{value:t,done:!0}}for(r.method=a,r.arg=c;;){var i=r.delegate;if(i){var l=S(i,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var u=f(e,n,r);if("normal"===u.type){if(o=r.done?g:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=g,r.method="throw",r.arg=u.arg)}}}function S(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(h(e)+" is not iterable")}return w.prototype=E,o(N,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=u(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u(t,l,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},_(I.prototype),u(I.prototype,i,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var c=new I(s(t,n,r,o),a);return e.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},_(N),u(N,l,"Generator"),u(N,c,(function(){return this})),u(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=F,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return i.type="throw",i.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var l=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(l&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function v(t,e,n,r,o,a,c){try{var i=t[a](c),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(r,o)}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,c,i=[],l=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(i.push(r.value),i.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var b=function(e){var n=e.accounts,r=e.accessToken,o=g((0,t.useState)([]),2),a=o[0],c=o[1],i=g((0,t.useState)({}),2),l=i[0],u=i[1],s=g((0,t.useState)(!1),2),f=s[0],h=s[1];return(0,t.useEffect)((function(){var t=function(){var t,e=(t=p().mark((function t(){var e,o,a,i,l,s,f;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Fetch Data"),t.prev=1,h(!0),t.next=5,new Promise((function(t,e){var n;m.ajax({url:null===(n=ifbLocal)||void 0===n?void 0:n.ajaxURL,type:"POST",data:{action:"ifbAjaxRequest"},success:function(e){return t(null==e?void 0:e.data)},error:function(t){return e(t)}})}));case 5:e=t.sent,o=e.users,a=void 0===o?[]:o,i=e.usersData,l=void 0===i?{}:i,s=a.filter((function(t){return n.some((function(e){return e.user_id==parseInt(t.id)}))})),f=Object.fromEntries(Object.entries(l).filter((function(t){var e=g(t,1)[0];return s.some((function(t){return t.username===e}))}))),null!=s&&s.length?(c(s),u(f)):null!=r&&r[0]&&d(r[0]).then((function(t){var e=t||{},n=e.user,r=e.userData;c([n]),u(r)})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.error(t.t0);case 15:return t.prev=15,h(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){v(a,r,o,c,i,"next",t)}function i(t){v(a,r,o,c,i,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();t()}),[n,r]),{users:a,usersData:l,loading:f}},w=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return t.length>e?"".concat(t.slice(0,e),"..."):t},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null==t?void 0:t.replace(/#[\w]+/g,(function(t){var e=t.slice(1);return"<a href='https://www.instagram.com/explore/tags/".concat(e,"' target='_blank' rel='noreferrer nofollow noopener'>").concat(t,"</a>")}))},R=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/#[\w]+/g,"").trim().replace(/\s\s+/g," ")},L=function(){return React.createElement("div",{className:"galleryLoading"},React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}),React.createElement("div",{className:"galleryLoadingItem"}))},N=function(t){var e=t.attributes,n=t.user,r=e.isProfile,o=e.profileImg,a=e.profileInfo||{},c=a.isFollowers,i=a.isFollows,l=a.isName,u=a.name,s=a.isBio,f=a.bio,m=n.username,d=n.profile_picture_url,h=n.name,p=n.biography,v=n.followers_count,g=n.follows_count,y="https://www.instagram.com/".concat(m);return r&&React.createElement("div",{className:"ifbProfile"},React.createElement("a",{className:"profileImg",href:y,target:"_blank",rel:"noreferrer"},React.createElement("img",{src:d||o,alt:m})),React.createElement("div",{className:"profileText"},React.createElement("a",{className:"userName",href:y,target:"_blank",rel:"noreferrer"},"@",m),c||i?React.createElement("div",{className:"follow"},c&&React.createElement("p",{className:"followers"},v," followers"),i&&React.createElement("p",{className:"following"},g," following")):"",l&&React.createElement("p",{className:"name"},h||u),s&&React.createElement("p",{className:"biography"},p||f)))},_=function(t){var e=t.attributes,n=t.username,r=e.isFollowBtn,o="https://www.instagram.com/".concat(n);return r&&React.createElement("a",{className:"followBtn",href:o,target:"_blank",rel:"noreferrer"},"Follow On Instagram")},I=function(t){var e=t.user,n=t.attributes,r=(e||{}).username,o=n.isProfile,a=n.isFollowBtn,c=n.isFollowBtnInFooter;return o||a&&!c?React.createElement("div",{className:"galleryHeader"},React.createElement(N,{attributes:n,user:e}),!c&&React.createElement(_,{attributes:n,username:r})):null},k=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:22,height:22,fill:"#fff"},React.createElement("path",{d:"M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"})),S=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:20,height:20,fill:"#fff"},React.createElement("path",{d:"M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z"})),O=function(e){var n=e.attributes,r=e.user,o=e.feed,a=e.index,c=n.cId,i=n.isPopup,l=n.isLink,u=n.isLinkNewTab,s=n.isCaption,f=n.isRemCaptionHash,m=n.captionLength,d=n.imgHoverEffect,h=n.captionStyle,p=o.id,v=o.media_type,g=o.media_url,y=o.thumbnail_url,b=void 0===y?"":y,w=o.caption,L=o.permalink;(0,t.useEffect)((function(){Fancybox.bind("[data-fancybox='ifbPopup-".concat(c,"']"),{Toolbar:{display:["slideshow","counter","zoomIn","zoomOut","fullscreen","thumbs","close"]},Thumbs:{autoStart:!0}})}),[]);var _=function(t){var e=t.children;return l?React.createElement("a",{href:L,target:u?"_blank":"_self",rel:"noreferrer"},e):e},I=function(){return React.createElement("img",{src:"VIDEO"===v?b:g,alt:w})},O=function(){return s&&React.createElement("div",{className:"caption ".concat(h)},React.createElement("p",{dangerouslySetInnerHTML:{__html:f?E(R(w),m):x(E(w,m))}}))},P=function(){return React.createElement("figure",{className:d},React.createElement(I,null),"IMAGE"!==v&&React.createElement("span",{className:"typeIcon"},"VIDEO"===v?S:k),h.includes("overlay")&&React.createElement(O,null))},F=function(){return React.createElement(React.Fragment,null,React.createElement(P,null),"bottom"===h&&React.createElement(O,null))};return React.createElement("div",{key:p,className:"galleryItem",id:"galleryItem-".concat(a)},i?React.createElement("div",{id:"ifbPopupContent-".concat(c,"-").concat(p),className:"ifbPopupContent-".concat(c," ifbPopupContent")},React.createElement("div",{className:"contentArea"},React.createElement("div",{className:"media"},"IMAGE"===v&&React.createElement("img",{src:g,alt:w}),"VIDEO"===v&&React.createElement("video",{controls:!0,poster:b},React.createElement("source",{src:g})),"CAROUSEL_ALBUM"===v&&React.createElement(j,{feed:o})),React.createElement("div",{className:"text"},React.createElement(N,{attributes:n,user:r}),React.createElement("div",{className:"caption",dangerouslySetInnerHTML:{__html:x(w)}}),React.createElement("div",{className:"info"},React.createElement("a",{className:"link",href:L,target:"_blank",rel:"noreferrer nofollow noopener"}," ",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#4527a4",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24;return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:e,height:e},React.createElement("path",{fill:t,d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))}("#333",18)," View on Instagram"))))):null,i?React.createElement("a",{href:"VIDEO"===v?b:g,"data-fancybox":"ifbPopup-".concat(c),"data-src":"#ifbPopupContent-".concat(c,"-").concat(p),"data-caption":w},React.createElement(F,null)):React.createElement(_,null,React.createElement(F,null)))},j=function(e){var n=e.feed,r=n.caption,o=n.children,a=void 0===o?{}:o,c=(0,t.useRef)(null),i=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)((function(){c.current&&i.current&&l.current&&new Swiper(c.current,{speed:400,slidesPerView:1,spaceBetween:0,navigation:{prevEl:i.current,nextEl:l.current}})}),[c.current,i.current,l.current]);var u=function(t){var e=t.child,n=e.media_url,o=e.thumbnail_url,a=void 0===o?"":o;return React.createElement("div",{className:"swiper-slide"},a?React.createElement("video",{controls:!0,poster:a},React.createElement("source",{src:n})):React.createElement("img",{src:n,alt:r.split(" ").slice(0,12).join(" ")}))};return React.createElement("div",{className:"ifbCarousel",ref:c},React.createElement("div",{className:"swiper-wrapper"},null==a?void 0:a.data.map((function(t){return React.createElement(u,{key:t.id,child:t})}))),React.createElement("div",{className:"swiper-button-prev",ref:i},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},React.createElement("path",{d:"M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"}))),React.createElement("div",{className:"swiper-button-next",ref:l},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},React.createElement("path",{d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"}))))},P=function(t){var e=t.attributes,n=t.user,r=t.feeds,o=t.pageNumber,a=e.columns;return React.createElement("div",{className:"ifbGallery columns-".concat(a.desktop," columns-tablet-").concat(a.tablet," columns-mobile-").concat(a.mobile)},React.createElement(F,{attributes:e,user:n,feeds:r,pageNumber:o}))},F=function(t){var e,n=t.attributes,r=t.user,o=t.feeds,a=t.pageNumber,c=n.itemVisible;return(null==o?void 0:o.length)&&(null==o||null===(e=o.slice(0,c*a))||void 0===e?void 0:e.map((function(t,e){return React.createElement(O,{key:t.id,attributes:n,user:r,feed:t,index:e})})))},T=function(t){var e=t.attributes,n=t.pageNumber,r=t.setPageNumber,o=e.itemVisible,a=e.isFollowBtn,c=e.isFollowBtnInFooter,i=e.isLoadMore,l=b(e),u=l.users,s=l.usersData;if(l.loading)return React.createElement(L,null);var f=(null==u?void 0:u[0])||{},m=f.username,d=m&&s&&w(s,m)?s[m]:{},h=(d||{}).media;return React.createElement("div",{className:"ifbInstagramFeed"},function(t){for(var e in t)if(w(t,e))return!1;return!0}(d)?"":React.createElement(React.Fragment,null,React.createElement(I,{user:f,attributes:e}),React.createElement(P,{attributes:e,user:f,feeds:h,pageNumber:n}),i||a&&c?React.createElement("div",{className:"galleyFooter"},React.createElement("button",{className:"loadMoreBtn ".concat((null==h?void 0:h.length)>o*n?"visible":"hidden"),onClick:function(){return r(n+1)}},"Load More"),c&&React.createElement(_,{attributes:e,username:m})):null))};function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,c,i=[],l=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(i.push(r.value),i.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return C(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-ifb-instagram").forEach((function(t){var n=JSON.parse(t.dataset.attributes),r=n.cId;(0,e.H)(t).render(React.createElement(React.Fragment,null,React.createElement(i,{attributes:n,clientId:r}),React.createElement(G,{attributes:n}))),null==t||t.removeAttribute("data-attributes")}))}));var G=function(e){var n=e.attributes,r=A((0,t.useState)(1),2),o=r[0],a=r[1];return React.createElement(T,{attributes:n,pageNumber:o,setPageNumber:a})}}()}();
//# sourceMappingURL=script.js.map