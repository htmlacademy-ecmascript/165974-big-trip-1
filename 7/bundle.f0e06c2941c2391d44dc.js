(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),a=n(645),r=n.n(a)()(s());r.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(s," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",a="hour",r="day",o="week",c="month",d="quarter",l="year",f="date",u="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,c),a=n-s<0,r=t.clone().add(i+(a?-1:1),c);return+(-(i+(n-s)/(a?s-r:r-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:l,w:o,d:r,D:f,h:a,m:s,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",_={};_[y]=h;var $=function(e){return e instanceof M},g=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var a=t.toLowerCase();_[a]&&(s=a),n&&(_[a]=n,s=a);var r=t.split("-");if(!s&&r.length>1)return e(r[0])}else{var o=t.name;_[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},T=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},C=m;C.l=g,C.i=$,C.w=function(e,t){return T(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function h(e){this.$L=g(e.locale,null,!0),this.parse(e)}var v=h.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(C.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(b);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return C},v.isValid=function(){return!(this.$d.toString()===u)},v.isSame=function(e,t){var n=T(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return T(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<T(e)},v.$g=function(e,t,n){return C.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,d=!!C.u(t)||t,u=C.p(e),b=function(e,t){var i=C.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return d?i:i.endOf(r)},p=function(e,t){return C.w(n.toDate()[e].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,v=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case l:return d?b(1,0):b(31,11);case c:return d?b(1,v):b(0,v+1);case o:var _=this.$locale().weekStart||0,$=(h<_?h+7:h)-_;return b(d?m-$:m+(6-$),v);case r:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,d=C.p(e),u="set"+(this.$u?"UTC":""),b=(o={},o[r]=u+"Date",o[f]=u+"Date",o[c]=u+"Month",o[l]=u+"FullYear",o[a]=u+"Hours",o[s]=u+"Minutes",o[i]=u+"Seconds",o[n]=u+"Milliseconds",o)[d],p=d===r?this.$D+(t-this.$W):t;if(d===c||d===l){var h=this.clone().set(f,1);h.$d[b](p),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else b&&this.$d[b](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[C.p(e)]()},v.add=function(n,d){var f,u=this;n=Number(n);var b=C.p(d),p=function(e){var t=T(u);return C.w(t.date(t.date()+Math.round(e*n)),u)};if(b===c)return this.set(c,this.$M+n);if(b===l)return this.set(l,this.$y+n);if(b===r)return p(1);if(b===o)return p(7);var h=(f={},f[s]=e,f[a]=t,f[i]=1e3,f)[b]||1,v=this.$d.getTime()+n*h;return C.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=C.z(this),a=this.$H,r=this.$m,o=this.$M,c=n.weekdays,d=n.months,l=function(e,n,s,a){return e&&(e[n]||e(t,i))||s[n].slice(0,a)},f=function(e){return C.s(a%12||12,e,"0")},b=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:C.s(o+1,2,"0"),MMM:l(n.monthsShort,o,d,3),MMMM:l(d,o),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:C.s(a,2,"0"),h:f(1),hh:f(2),a:b(a,r,!0),A:b(a,r,!1),m:String(r),mm:C.s(r,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(e,t){return t||h[e]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,f,u){var b,p=C.p(f),h=T(n),v=(h.utcOffset()-this.utcOffset())*e,m=this-h,y=C.m(this,h);return y=(b={},b[l]=y/12,b[c]=y,b[d]=y/3,b[o]=(m-v)/6048e5,b[r]=(m-v)/864e5,b[a]=m/t,b[s]=m/e,b[i]=m/1e3,b)[p]||m,u?y:C.a(y)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return _[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=g(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return C.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},h}(),w=M.prototype;return T.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",r],["$M",c],["$y",l],["$D",f]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),T.extend=function(e,t){return e.$i||(e(t,M,T),e.$i=!0),T},T.locale=g,T.isDayjs=$,T.unix=function(e){return T(1e3*e)},T.en=_[y],T.Ls=_,T.p={},T}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},r=[],o=0;o<e.length;o++){var c=e[o],d=i.base?c[0]+i.base:c[0],l=a[d]||0,f="".concat(d," ").concat(l);a[d]=l+1;var u=n(f),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(b);else{var p=s(b,i);i.byIndex=o,t.splice(o,0,{identifier:f,updater:p,references:1})}r.push(f)}return r}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var a=i(e=e||[],s=s||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var o=n(a[r]);t[o].references--}for(var c=i(e,s),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={id:i,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),i=n(795),s=n.n(i),a=n(569),r=n.n(a),o=n(565),c=n.n(o),d=n(216),l=n.n(d),f=n(589),u=n.n(f),b=n(10),p={};p.styleTagTransform=u(),p.setAttributes=c(),p.insert=r().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=l(),t()(b.Z,p),b.Z&&b.Z.locals&&b.Z.locals;const h="shake";class v{#e=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(h),setTimeout((()=>{this.element.classList.remove(h),e?.()}),600)}}function m(e,t,n="beforeend"){if(!(e instanceof v))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function y(e,t){if(!(e instanceof v&&t instanceof v))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function _(e){if(null!==e){if(!(e instanceof v))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}class $ extends v{get template(){return'<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>'}}var g=n(484),T=n.n(g);const C={one:"YYYY-MM-DD",two:"MMM D",three:"DD/MM/YY",four:"MMM",five:"D",time:"HH:mm"};function M(e,t=C.one){return e&&t?T()(e).format(t):""}class w extends v{#t=null;constructor({events:e}){super(),this.#t=e}get template(){return`\n      <section class="trip-main__trip-info  trip-info">\n        <div class="trip-info__main">\n          ${function(e){let t=e.map((e=>e.destination.name));return t=t.length>3?`${t.at(0)} &mdash;...&mdash; ${t.at(-1)}`:t.join(" &mdash; "),`\n      <h1 class="trip-info__title">${t}</h1>\n    `}(e=this.#t)}\n\n          <p class="trip-info__dates">${function(e){const t=M(e.at(0).dateFrom,C.four),n=M(e.at(-1).dateTo,C.four),i=M(e.at(0).dateFrom,C.five),s=M(e.at(-1).dateTo,C.five);return t===n?`${t} ${i}&nbsp;&mdash;&nbsp;${s}`:`${t} ${i}&nbsp;&mdash;&nbsp;${n} ${s}`}(e)}</p>\n        </div>\n\n        <p class="trip-info__cost">\n          Total: &euro;&nbsp;<span class="trip-info__cost-value">${function(e){return e.reduce(((e,t)=>e+t.basePrice+t.offers.reduce(((e,t)=>e+t.price),0)),0)}(e)}</span>\n        </p>\n      </section>\n    `;var e}}class E extends v{get template(){return'<ul class="trip-events__list"></ul>'}}class F extends v{get template(){return"\n      <p class=\"trip-events__msg\">Click New Event to create your first point</p>\n\n      \x3c!--\n        Значение отображаемого текста зависит от выбранного фильтра:\n          * Everything – 'Click New Event to create your first point'\n          * Past — 'There are no past events now';\n          * Present — 'There are no present events now';\n          * Future — 'There are no future events now'.\n      --\x3e\n    "}}class k extends v{#n=null;#i=null;constructor({event:e,onClick:t,onFavoriteClick:n}){super(),this.event=e,this.#n=t,this.#i=n,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#s),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#a)}get template(){return function(e){const{type:t,dateFrom:n,dateTo:i,destination:s,basePrice:a,isFavorite:r,offers:o}=e,c=M(n,C.time),d=M(i,C.time);return`\n      <li class="trip-events__item">\n        <div class="event">\n          <time class="event__date" datetime="${M(n)}">${M(n,C.two)}</time>\n          <div class="event__type">\n            <img class="event__type-icon" width="42" height="42" src="img/icons/${t}.png" alt="Event type icon">\n          </div>\n          <h3 class="event__title">${t} ${s.name}</h3>\n          <div class="event__schedule">\n            <p class="event__time">\n              <time class="event__start-time" datetime="${M(n)}T${c}">${c}</time>\n              &mdash;\n              <time class="event__end-time" datetime="${M(i)}T${d}">${d}</time>\n            </p>\n            <p class="event__duration">${function(e,t){const n=T()(e),i=T()(t),s=n.diff(i,"minute"),a=e=>`${e<10?"0":""}${e}M`,r=e=>`${e<10?"0":""}${e}H`,o=Math.trunc(s/60),c=s%60,d=Math.trunc(o/24),l=o%24,f=[];var u;return s>=60?c&&f.push(a(c)):s&&f.push(a(s)),o>=23?l&&f.push(r(l)):o&&f.push(r(o)),d&&f.push(`${(u=d)<10?"0":""}${u}D`),f.reverse().join(" ")}(i,n)}</p>\n          </div>\n          <p class="event__price">\n            &euro;&nbsp;<span class="event__price-value">${a}</span>\n          </p>\n          <h4 class="visually-hidden">Offers:</h4>\n\n          ${function(e){return`\n      <ul class="event__selected-offers">\n        ${e.map((e=>{const{title:t,price:n}=e;return`\n        <li class="event__offer">\n          <span class="event__offer-title">${t}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${n}</span>\n        </li>\n      `})).join("")}\n      </ul>\n    `}(o)}\n\n          <button class="event__favorite-btn ${r?"event__favorite-btn--active":""}" type="button">\n            <span class="visually-hidden">Add to favorite</span>\n            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n            </svg>\n          </button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </div>\n      </li>\n    `}(this.event)}#s=e=>{e.preventDefault(),this.#n?.()};#a=e=>{e.preventDefault(),this.#i()}}class D extends v{#r=null;#n=null;constructor({event:e,eventTypes:t,onSubmit:n,onClick:i}){super(),this.event=e,this.eventTypes=t,this.#r=n,this.#n=i,this.element.addEventListener("submit",this.#o),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#s)}get template(){return function(e,t){const{type:n,dateFrom:i,dateTo:s,destination:a,basePrice:r,offers:o}=e,c=i?`${M(i,C.three)} ${M(i,C.time)}`:"",d=s?`${M(s,C.three)} ${M(s,C.time)}`:"";return`\n      <li class="trip-events__item">\n        <form class="event event--edit" action="#" method="post">\n          <header class="event__header">\n\n            ${function(e,t){const n=t.map((t=>`\n      <div class="event__type-item">\n        <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${t===e?"checked":""}>\n        <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${t}</label>\n      </div>\n    `)).join("");return`\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/${e}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n\n            ${n}\n          </fieldset>\n        </div>\n      </div>\n    `}(n,t)}\n\n            <div class="event__field-group  event__field-group--destination">\n              <label class="event__label  event__type-output" for="event-destination-1">\n                ${n}\n              </label>\n              <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${a?a.name:""}" list="destination-list-1">\n              <datalist id="destination-list-1">\n                ${a?`<option value="${a.name}"></option>`:""}\n              </datalist>\n            </div>\n\n            <div class="event__field-group  event__field-group--time">\n              <label class="visually-hidden" for="event-start-time-1">From</label>\n              <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${c}">\n              &mdash;\n              <label class="visually-hidden" for="event-end-time-1">To</label>\n              <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${d}">\n            </div>\n\n            <div class="event__field-group  event__field-group--price">\n              <label class="event__label" for="event-price-1">\n                <span class="visually-hidden">Price</span>\n                &euro;\n              </label>\n              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${r}">\n            </div>\n\n            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n            <button class="event__reset-btn" type="reset">Cancel</button>\n            \x3c!--\n              <button class="event__reset-btn" type="reset">Delete</button>\n            --\x3e\n            <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n            </button>\n          </header>\n          <section class="event__details">\n            ${function(e){const t=e.map((e=>{const t=e.title.toLowerCase().replace(/\s+/g,"-"),n=crypto.randomUUID().substring(0,5);return`\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-${n}" type="checkbox" name="event-offer-${t}" ${e.isChecked?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${t}-${n}">\n          <span class="event__offer-title">${e.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n      </div>\n    `})).join("");return e.length?`\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          ${t}\n        </div>\n      </section>\n    `:""}(o)}\n\n            ${function(e){const t=e?e.pictures.map((e=>`\n      <img class="event__photo" src="${e.src}" alt="${e.description}">\n    `)).join(""):"";return e?`\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${e.description}</p>\n\n        <div class="event__photos-container">\n          <div class="event__photos-tape">\n            ${t}\n          </div>\n        </div>\n      </section>\n    `:""}(a)}\n          </section>\n        </form>\n      </li>\n    `}(this.event,this.eventTypes)}#o=e=>{e.preventDefault(),this.#r?.(this.event)};#s=e=>{e.preventDefault(),this.#n?.()}}const A="DEFAULT",x="EDITING";class S{#c=null;#d=null;#l=null;#f=null;#u=null;#b=null;#p=A;#h=null;#v=null;constructor({eventsListContainer:e,eventTypes:t,blankEventOffers:n,onDataChange:i,onModeChange:s}){this.#c=e,this.#u=[...t],this.#b=[...n],this.#h=i,this.#v=s}init(e){this.#f=e;const t={type:this.#u[0],dateFrom:null,dateTo:null,destination:null,basePrice:0,isFavorite:!1,offers:this.#b},n=this.#d,i=this.#l;this.#d=new k({event:this.#f,onClick:this.#m,onFavoriteClick:this.#i}),this.#l=new D({event:this.#f||t,eventTypes:this.#u,onSubmit:this.#y,onClick:this.#_}),null!==n&&null!==i?(this.#p===A&&y(this.#d,n),this.#p===x&&y(this.#l,i),_(n),_(i)):this.#$()}#$(){m(this.#d,this.#c)}destroy(){_(this.#d),_(this.#l)}#g=e=>{"Escape"===e.key&&(e.preventDefault(),this.#_())};resetView=()=>{this.#p!==A&&this.#_()};#m=()=>{y(this.#l,this.#d),document.addEventListener("keydown",this.#g),this.#v(),this.#p=x};#_=()=>{y(this.#d,this.#l),document.removeEventListener("keydown",this.#g),this.#p=A};#y=e=>{this.#h(e),this.#_()};#i=()=>{this.#h({...this.#f,isFavorite:!this.#f.isFavorite})}}class Z{#T=new E;#C=null;#M=null;#w=null;#E=new Map;constructor({container:e,eventsModel:t}){this.#C=e,this.#M=t}init(){this.#w=[...this.#M.events],this.#F()}#F(){if(m(this.#T,this.#C),this.#w.length)for(let e=0;e<this.#w.length;e++)this.#$(this.#w[e]);else m(new F,this.#T.element)}#$(e){const t=[...this.#M.eventTypes],n=new S({eventsListContainer:this.#T.element,eventTypes:t,blankEventOffers:this.#M.getOffers(t[0],[]),onDataChange:this.#k,onModeChange:this.#v});n.init(e),this.#E.set(e.id,n)}#D(){this.#E.forEach((e=>e.destroy())),this.#E.clear()}#k=e=>{var t,n;this.#w=(t=this.#w,n=e,t.map((e=>e.id===n.id?n:e))),this.#E.get(e.id).init(e)};#v=()=>{this.#E.forEach((e=>e.resetView()))}}class O extends v{#A=null;constructor({filters:e}){super(),this.#A=e}get template(){return function(e){const t=e.map(((e,t)=>function(e,t){const{type:n,hasEvents:i}=e;return`\n      <div class="trip-filters__filter">\n        <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${t?"checked":""} ${i?"":"disabled"}>\n        <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n      </div>\n    `}(e,0===t))).join("");return`\n      <form class="trip-filters" action="#" method="get">\n        ${t}\n\n        <button class="visually-hidden" type="submit">Accept filter</button>\n      </form>\n    `}(this.#A)}}const P={everything:e=>e,future:e=>e.filter((e=>{return t=e.dateFrom,T()().isBefore(T()(t));var t})),present:e=>e.filter((e=>function(e,t){const n=T()(),i=T()(e).isBefore(n)||T()(e).isSame(n),s=n.isBefore(T()(t))||T()(t).isSame(n);return i&&s}(e.dateFrom,e.dateTo))),past:e=>e.filter((e=>function(e){const t=T()();return T()(e).isBefore(t)}(e.dateTo)))};class L{#C=null;#M=null;#A=[];constructor({container:e,eventsModel:t}){var n;this.#C=e,this.#M=t,this.#A=(n=this.#M.events,Object.entries(P).map((([e,t])=>({type:e,hasEvents:!!t(n).length}))))}init(){m(new O({filters:this.#A}),this.#C)}}class I extends v{#x=null;constructor({criteria:e}){super(),this.#x=e}get template(){return function(e){return`\n      <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n        ${e.map((e=>function(e){const{name:t,isChecked:n,isDisabled:i}=e;return`\n      <div class="trip-sort__item  trip-sort__item--${t}">\n        <input id="sort-${t}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${t}" ${n?"checked":""} ${i?"disabled":""}>\n        <label class="trip-sort__btn" for="sort-${t}">${t}</label>\n      </div>\n    `}(e))).join("")}\n      </form>\n    `}(this.#x)}}const H=[{name:"day",isChecked:!1,isDisabled:!1},{name:"event",isChecked:!1,isDisabled:!1},{name:"time",isChecked:!1,isDisabled:!1},{name:"price",isChecked:!0,isDisabled:!1},{name:"offers",isChecked:!1,isDisabled:!0}];class j{#C=null;#x=[];constructor({container:e}){this.#C=e,this.#x=H}init(){m(new I({criteria:this.#x}),this.#C)}}const B=[{id:"3fe6af1e-2bcb-4cfb-a008-0cd6fe33564f",basePrice:5894,dateFrom:"2026-12-22T16:59:34.880Z",dateTo:"2026-12-24T02:59:34.880Z",destination:"3ac52b04-59f3-4990-8a73-a9a217e0b76e",isFavorite:!1,offers:["a080b50d-11b9-49e5-af1e-c82e791b7d55","99bd9ae7-9d3d-4583-90dd-8d93d0b3bff7","3de0b138-9cb4-48c9-aeb0-5b859a78f920","79bb1446-b2d6-450c-be10-f05c49d5ffea","5b633a6b-4836-40e0-b99a-ac378caa941f","f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3"],type:"ship"},{id:"75bbb089-cd10-4bb1-a627-a2eab62c5041",basePrice:2902,dateFrom:"2026-12-24T02:59:34.880Z",dateTo:"2026-12-24T22:59:34.880Z",destination:"10bc1a51-a317-48f8-bebb-d3e14390a3ce",isFavorite:!1,offers:[],type:"drive"},{id:"fd25aedc-6935-4c9a-b2a4-08edd6cb6240",basePrice:9764,dateFrom:"2026-12-24T22:59:34.880Z",dateTo:"2026-12-26T22:59:34.880Z",destination:"afb3e6bd-2761-4e67-80b6-fddcb38612c4",isFavorite:!1,offers:["66b0bedf-39c2-47c6-ab4b-7edb36f1023d"],type:"check-in"},{id:"1dd3c565-3eb7-420a-a558-02328dfe5558",basePrice:8324,dateFrom:"2026-12-26T22:59:34.880Z",dateTo:"2026-12-28T06:59:34.880Z",destination:"caf17151-2c2b-49e2-b23a-c81eee6b5d0c",isFavorite:!0,offers:["4ac7e525-6f17-4e1b-8759-c8d94f729f77","caf259e0-489a-4880-b47c-6dfc2239f697","39947249-bf57-4936-8acd-3a1225448253"],type:"train"},{id:"b9d10629-ceb0-4961-9b26-e8473b0c94ac",basePrice:205,dateFrom:"2026-12-28T06:59:34.880Z",dateTo:"2026-12-29T12:59:34.880Z",destination:"10bc1a51-a317-48f8-bebb-d3e14390a3ce",isFavorite:!0,offers:[],type:"restaurant"},{id:"9c5d4f0e-cc29-4132-9672-0f3b59c396f1",basePrice:9685,dateFrom:"2026-12-29T12:59:34.880Z",dateTo:"2026-12-30T01:59:34.880Z",destination:"caf17151-2c2b-49e2-b23a-c81eee6b5d0c",isFavorite:!0,offers:["5b633a6b-4836-40e0-b99a-ac378caa941f","f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3"],type:"ship"},{id:"b701cda9-e9af-4888-b57c-3bf83fb2a73c",basePrice:8509,dateFrom:"2026-12-30T01:59:34.880Z",dateTo:"2026-12-30T07:59:34.880Z",destination:"10bc1a51-a317-48f8-bebb-d3e14390a3ce",isFavorite:!0,offers:[],type:"drive"},{id:"27c3dd9e-b641-43ee-9ac2-24835a59b120",basePrice:5734,dateFrom:"2026-12-30T07:59:34.880Z",dateTo:"2026-12-31T19:59:34.880Z",destination:"afb3e6bd-2761-4e67-80b6-fddcb38612c4",isFavorite:!1,offers:["97a1dff0-7ea7-4483-92a6-923caf42c374"],type:"bus"},{id:"9736272d-8595-4e36-90ae-d06edf51ee12",basePrice:8591,dateFrom:"2026-12-31T19:59:34.880Z",dateTo:"2027-01-02T18:59:34.880Z",destination:"caf17151-2c2b-49e2-b23a-c81eee6b5d0c",isFavorite:!1,offers:["39947249-bf57-4936-8acd-3a1225448253"],type:"train"},{id:"f613f10c-91b5-48e8-b720-bbeb3de76f8d",basePrice:7508,dateFrom:"2027-01-02T18:59:34.880Z",dateTo:"2027-01-03T00:59:34.880Z",destination:"10bc1a51-a317-48f8-bebb-d3e14390a3ce",isFavorite:!1,offers:["d86da2b9-3b26-4264-918e-e90f71a22ed7","bc68a804-f4ad-4fcd-a34c-c4bf628ce359","66b0bedf-39c2-47c6-ab4b-7edb36f1023d"],type:"check-in"},{id:"cc2afbbd-006d-4cc8-b6e6-e4850711b044",basePrice:2352,dateFrom:"2027-01-03T00:59:34.880Z",dateTo:"2027-01-03T16:59:34.880Z",destination:"3ac52b04-59f3-4990-8a73-a9a217e0b76e",isFavorite:!0,offers:["18fd7961-ab32-40e8-b744-5e8bf06c3e55","09fe2b6c-7bed-4c01-afd5-dc2b3faee2c1","dd5cea00-9b44-40e4-8205-52996c29a312","e2b5e314-1cd8-4925-989b-d03d272f2715"],type:"taxi"},{id:"52a616f3-da7b-4513-93a5-be7afd241f11",basePrice:4565,dateFrom:"2027-01-03T16:59:34.880Z",dateTo:"2027-01-04T17:59:34.880Z",destination:"4ac538ec-fc25-423b-a1f4-93ba609c1973",isFavorite:!0,offers:["f484fb2c-698d-452f-b3ba-927c7cb4d296","4524d1c9-c50c-4b99-916c-63d1cae90a81"],type:"restaurant"},{id:"9ad5022d-fb6d-4dd6-a6ee-dc3673feade5",basePrice:2959,dateFrom:"2027-01-04T17:59:34.880Z",dateTo:"2027-01-06T09:59:34.880Z",destination:"3ac52b04-59f3-4990-8a73-a9a217e0b76e",isFavorite:!1,offers:["ca25e1c1-0fda-4849-8c0f-2677c85adbf7","2ea76e51-c913-4dbb-8c4e-8e4bb6ccabc5","22c80725-7918-419d-aefb-3469d3c942cc","f2f462fb-6807-4da4-ba0c-0e2610506703"],type:"flight"},{id:"699c22c0-7c64-4381-bc89-254ea2c20b8d",basePrice:4042,dateFrom:"2027-01-06T09:59:34.880Z",dateTo:"2027-01-07T13:59:34.880Z",destination:"caf17151-2c2b-49e2-b23a-c81eee6b5d0c",isFavorite:!1,offers:[],type:"bus"},{id:"ae9fe729-8a26-4d33-a01f-0e1912f8567f",basePrice:4347,dateFrom:"2027-01-07T13:59:34.880Z",dateTo:"2027-01-08T01:59:34.880Z",destination:"10bc1a51-a317-48f8-bebb-d3e14390a3ce",isFavorite:!1,offers:[],type:"bus"},{id:"981823c7-c8ae-40e6-8d3d-5b110747f8b3",basePrice:5968,dateFrom:"2027-01-08T01:59:34.880Z",dateTo:"2027-01-09T22:59:34.880Z",destination:"afb3e6bd-2761-4e67-80b6-fddcb38612c4",isFavorite:!1,offers:["69cc466e-5b05-4f95-ad0f-ee767c88c88c","99b757da-6c43-4f33-9044-cb9100135b45","d86da2b9-3b26-4264-918e-e90f71a22ed7","bc68a804-f4ad-4fcd-a34c-c4bf628ce359","66b0bedf-39c2-47c6-ab4b-7edb36f1023d"],type:"check-in"},{id:"8fe7bf66-1cc3-4edd-b9de-0cc13ea5e7c2",basePrice:737,dateFrom:"2027-01-09T22:59:34.880Z",dateTo:"2027-01-10T11:59:34.880Z",destination:"4ac538ec-fc25-423b-a1f4-93ba609c1973",isFavorite:!1,offers:[],type:"check-in"},{id:"667cde56-5d70-44f0-addc-38ce0555879c",basePrice:8006,dateFrom:"2027-01-10T11:59:34.880Z",dateTo:"2027-01-11T23:59:34.880Z",destination:"10bc1a51-a317-48f8-bebb-d3e14390a3ce",isFavorite:!0,offers:["f484fb2c-698d-452f-b3ba-927c7cb4d296","4524d1c9-c50c-4b99-916c-63d1cae90a81"],type:"restaurant"},{id:"099916ac-4f14-443f-b874-98476d3b8147",basePrice:2178,dateFrom:"2027-01-11T23:59:34.880Z",dateTo:"2027-01-12T15:59:34.880Z",destination:"caf17151-2c2b-49e2-b23a-c81eee6b5d0c",isFavorite:!0,offers:["5784c2ef-3c83-4c04-ad8e-29d4215b2fae","eebef189-2e28-4d74-b3a7-9fb28e499d8d"],type:"drive"},{id:"12b3f2a4-9c3e-4767-8e58-42303dff9075",basePrice:763,dateFrom:"2027-01-12T15:59:34.880Z",dateTo:"2027-01-13T17:59:34.880Z",destination:"10bc1a51-a317-48f8-bebb-d3e14390a3ce",isFavorite:!1,offers:["ca25e1c1-0fda-4849-8c0f-2677c85adbf7","2ea76e51-c913-4dbb-8c4e-8e4bb6ccabc5","22c80725-7918-419d-aefb-3469d3c942cc","f2f462fb-6807-4da4-ba0c-0e2610506703"],type:"flight"},{id:"061ea383-3725-4d88-90a1-bead8b798260",basePrice:8801,dateFrom:"2027-01-13T17:59:34.880Z",dateTo:"2027-01-14T04:59:34.880Z",destination:"afb3e6bd-2761-4e67-80b6-fddcb38612c4",isFavorite:!0,offers:["39947249-bf57-4936-8acd-3a1225448253"],type:"train"},{id:"9a62b562-2c91-437c-9ea5-9db1fe4e990a",basePrice:2238,dateFrom:"2027-01-14T04:59:34.880Z",dateTo:"2027-01-15T12:59:34.880Z",destination:"3ac52b04-59f3-4990-8a73-a9a217e0b76e",isFavorite:!0,offers:["97a1dff0-7ea7-4483-92a6-923caf42c374"],type:"bus"},{id:"206a93db-db39-4e43-9b89-488af1f61077",basePrice:3213,dateFrom:"2027-01-15T12:59:34.880Z",dateTo:"2027-01-16T21:59:34.880Z",destination:"afb3e6bd-2761-4e67-80b6-fddcb38612c4",isFavorite:!1,offers:["f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3"],type:"ship"},{id:"6836a98e-b0e2-4584-b1c2-a4fef68ae710",basePrice:2579,dateFrom:"2027-01-16T21:59:34.880Z",dateTo:"2027-01-17T14:59:34.880Z",destination:"afb3e6bd-2761-4e67-80b6-fddcb38612c4",isFavorite:!1,offers:["2ea76e51-c913-4dbb-8c4e-8e4bb6ccabc5","22c80725-7918-419d-aefb-3469d3c942cc","f2f462fb-6807-4da4-ba0c-0e2610506703"],type:"flight"},{id:"4104b3c1-abb4-47af-bca4-eea917367b2a",basePrice:58,dateFrom:"2027-01-17T14:59:34.880Z",dateTo:"2027-01-18T19:59:34.880Z",destination:"3ac52b04-59f3-4990-8a73-a9a217e0b76e",isFavorite:!0,offers:["79bb1446-b2d6-450c-be10-f05c49d5ffea","5b633a6b-4836-40e0-b99a-ac378caa941f","f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3"],type:"ship"}],Y=[{id:"3ac52b04-59f3-4990-8a73-a9a217e0b76e",description:"Amsterdam - with an embankment of a mighty river as a centre of attraction",name:"Amsterdam",pictures:[]},{id:"caf17151-2c2b-49e2-b23a-c81eee6b5d0c",description:"Kopenhagen - with crowded streets",name:"Kopenhagen",pictures:[]},{id:"afb3e6bd-2761-4e67-80b6-fddcb38612c4",description:"Rome - full of of cozy canteens where you can try the best coffee in the Middle East",name:"Rome",pictures:[{src:"https://20.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Rome for those who value comfort and coziness"}]},{id:"4ac538ec-fc25-423b-a1f4-93ba609c1973",description:"Chamonix - in a middle of Europe",name:"Chamonix",pictures:[{src:"https://20.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Chamonix middle-eastern paradise"},{src:"https://20.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Chamonix a true asian pearl"}]},{id:"10bc1a51-a317-48f8-bebb-d3e14390a3ce",description:"Venice - for those who value comfort and coziness",name:"Venice",pictures:[{src:"https://20.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Venice middle-eastern paradise"}]}],U=[{type:"taxi",offers:[{id:"623646ff-2638-400e-9b2e-5f50c50e8524",title:"Upgrade to a business class",price:53},{id:"18fd7961-ab32-40e8-b744-5e8bf06c3e55",title:"Choose the radio station",price:171},{id:"09fe2b6c-7bed-4c01-afd5-dc2b3faee2c1",title:"Choose temperature",price:84},{id:"dd5cea00-9b44-40e4-8205-52996c29a312",title:"Drive quickly, I'm in a hurry",price:53},{id:"e2b5e314-1cd8-4925-989b-d03d272f2715",title:"Drive slowly",price:60}]},{type:"bus",offers:[{id:"9621886c-1cbd-4633-b481-46ed93117d0f",title:"Infotainment system",price:31},{id:"eb1e4a96-62a2-4832-8e01-0c912718632a",title:"Order meal",price:53},{id:"97a1dff0-7ea7-4483-92a6-923caf42c374",title:"Choose seats",price:100}]},{type:"train",offers:[{id:"4ac7e525-6f17-4e1b-8759-c8d94f729f77",title:"Book a taxi at the arrival point",price:76},{id:"caf259e0-489a-4880-b47c-6dfc2239f697",title:"Order a breakfast",price:108},{id:"39947249-bf57-4936-8acd-3a1225448253",title:"Wake up at a certain time",price:179}]},{type:"flight",offers:[{id:"93a26061-8f0b-4d57-b928-835580a95a30",title:"Choose meal",price:173},{id:"233e61f2-8984-42f2-913b-7868531ab2ad",title:"Choose seats",price:75},{id:"ca25e1c1-0fda-4849-8c0f-2677c85adbf7",title:"Upgrade to comfort class",price:82},{id:"2ea76e51-c913-4dbb-8c4e-8e4bb6ccabc5",title:"Upgrade to business class",price:74},{id:"22c80725-7918-419d-aefb-3469d3c942cc",title:"Add luggage",price:187},{id:"f2f462fb-6807-4da4-ba0c-0e2610506703",title:"Business lounge",price:151}]},{type:"check-in",offers:[{id:"69cc466e-5b05-4f95-ad0f-ee767c88c88c",title:"Choose the time of check-in",price:102},{id:"99b757da-6c43-4f33-9044-cb9100135b45",title:"Choose the time of check-out",price:146},{id:"d86da2b9-3b26-4264-918e-e90f71a22ed7",title:"Add breakfast",price:134},{id:"bc68a804-f4ad-4fcd-a34c-c4bf628ce359",title:"Laundry",price:82},{id:"66b0bedf-39c2-47c6-ab4b-7edb36f1023d",title:"Order a meal from the restaurant",price:54}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"a080b50d-11b9-49e5-af1e-c82e791b7d55",title:"Choose meal",price:37},{id:"99bd9ae7-9d3d-4583-90dd-8d93d0b3bff7",title:"Choose seats",price:126},{id:"3de0b138-9cb4-48c9-aeb0-5b859a78f920",title:"Upgrade to comfort class",price:96},{id:"79bb1446-b2d6-450c-be10-f05c49d5ffea",title:"Upgrade to business class",price:160},{id:"5b633a6b-4836-40e0-b99a-ac378caa941f",title:"Add luggage",price:127},{id:"f10f2f19-f1c4-4a74-9a86-dc57e5bd29b3",title:"Business lounge",price:60}]},{type:"drive",offers:[{id:"5784c2ef-3c83-4c04-ad8e-29d4215b2fae",title:"With automatic transmission",price:77},{id:"eebef189-2e28-4d74-b3a7-9fb28e499d8d",title:"With air conditioning",price:103}]},{type:"restaurant",offers:[{id:"f484fb2c-698d-452f-b3ba-927c7cb4d296",title:"Choose live music",price:171},{id:"4524d1c9-c50c-4b99-916c-63d1cae90a81",title:"Choose VIP area",price:57}]}],N=new class{#t=[];#S=[];#Z=[];constructor(){this.#t=[...B],this.#S=[...Y],this.#Z=[...U]}findDestination(e){return this.#S.find((t=>t.id===e))}findOffers(e,t){return this.#Z.find((t=>t.type===e)).offers.map((e=>{const n=t.includes(e.id);return{...e,isChecked:n}}))}getRandomEvent(){const e=(t=this.#t)[Math.floor(Math.random()*t.length)];var t;const n=this.findDestination(e.destination),i=this.findOffers(e.type,e.offers);return{...e,destination:{...n},offers:[...i]}}get events(){return Array.from({length:4},this.getRandomEvent.bind(this))}get eventTypes(){return this.#Z.map((e=>e.type))}},W=new class{#O=null;#t=null;#u=null;constructor(e){this.#O=e,this.#t=this.#O.events,this.#u=this.#O.eventTypes}get events(){return this.#t}get eventTypes(){return this.#u}getOffers(e,t){return this.#O.findOffers(e,t)}}(N),q=new class{#M=null;#P=null;#L=null;#I=null;constructor({eventsModel:e}){this.#M=e,this.#P=document.querySelector(".trip-main"),this.#L=document.querySelector(".trip-controls__filters"),this.#I=document.querySelector(".trip-events")}init(){this.#H(),this.#j(),this.#B(),this.#Y()}#H(){m(new w({events:this.#M.events}),this.#P,"afterbegin"),m(new $,this.#P)}#j(){new L({container:this.#L,eventsModel:this.#M}).init()}#B(){new j({container:this.#I}).init()}#Y(){new Z({container:this.#I,eventsModel:this.#M}).init()}}({eventsModel:W});q.init()})()})();
//# sourceMappingURL=bundle.f0e06c2941c2391d44dc.js.map