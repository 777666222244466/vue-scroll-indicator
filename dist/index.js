!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-scroll-indicator"]=t():e["vue-scroll-indicator"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r,o,i;o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-scroll-indicator",props:{height:{type:String,default:"5px",required:!1},color:{type:String,default:"linear-gradient(to right, #ec008c, #fc6767)",required:!1},background:{type:String,default:"#eaeaea",required:!1}},data:function(){return{scrolled:"",docHeight:"",width:""}},created:function(){window.addEventListener("load",this.scrollHandler),window.addEventListener("scroll",this.scrollHandler)},destroyed:function(){window.removeEventListener("load",this.scrollHandler),window.removeEventListener("scroll",this.scrollHandler)},methods:{scrollHandler:function(){this.scrolled=document.body.scrollTop||document.documentElement.scrollTop,this.docHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight,this.width=this.scrolled/this.docHeight*100+"%"}}}})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"v-scroll--indicator-wrapper",style:{height:this.height,background:this.background}},[t("div",{staticClass:"v-scroll--indicator",style:{background:this.color,width:this.width}})])},o=[];r._withStripped=!0},function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,s){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var u,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId=i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(d.functional){d._injectStyles=u;var l=d.render;d.render=function(e,t){return u.call(t),l(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:d}}n.d(t,"a",function(){return r})},function(e,t,n){var r,o,i;o=[t,n(4)],void 0===(i="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueScrollIndicator=void 0;var n,r=(n=t)&&n.__esModule?n:{default:n};e.default={install:function(e,t){e.component("vue-scroll-indicator",r.default)}},e.VueScrollIndicator=r.default})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var a=n(1),s=n(2),c=!1;var u=function(e){c||n(5)},d=Object(s.a)(o.a,a.a,a.b,!1,u,"data-v-2ba5338c",null);d.options.__file="src/components/VueScrollIndicator.vue",t.default=d.exports},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(8).default)("35814de0",r,!1,{})},function(e,t,n){(e.exports=n(7)(!1)).push([e.i,"\n.v-scroll--indicator-wrapper[data-v-2ba5338c] {\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 9999;\n}\n.v-scroll--indicator[data-v-2ba5338c] {\n    width: 0;\n    height: 100%;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,d=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){u=n,l=o||{};var a=r(e,t);return v(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o];(c=i[s.id]).refs--,n.push(c)}t?v(a=r(e,t)):a=[];for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(u)return d;r.parentNode.removeChild(r)}if(p){var o=c++;r=s||(s=g()),t=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=g(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);l.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}}])});