import{u as Xe,g as Qe}from"./utilities-DfB9nafN.js";import{c as C,A as Ze,d as Te,u as Ye,r as K,g as j,o as I,j as te,w as he,i as P,k as et,t as tt,e as nt,n as A,h as G,B as X}from"./index-Ca0CArsu.js";var rt={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"};const st=rt;function me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),r.forEach(function(s){ot(e,s,n[s])})}return e}function ot(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae=function(t,n){var r=me({},t,n.attrs);return C(Ze,me({},r,{icon:st}),null)};ae.displayName="InboxOutlined";ae.inheritAttrs=!1;const it=ae;function Ne(e,t){return function(){return e.apply(t,arguments)}}const{toString:at}=Object.prototype,{getPrototypeOf:ce}=Object,q=(e=>t=>{const n=at.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),g=e=>(e=e.toLowerCase(),t=>q(t)===e),$=e=>t=>typeof t===e,{isArray:D}=Array,B=$("undefined");function ct(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Pe=g("ArrayBuffer");function lt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Pe(e.buffer),t}const ut=$("string"),O=$("function"),Ce=$("number"),V=e=>e!==null&&typeof e=="object",ft=e=>e===!0||e===!1,H=e=>{if(q(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dt=g("Date"),pt=g("File"),ht=g("Blob"),mt=g("FileList"),yt=e=>V(e)&&O(e.pipe),bt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=q(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},wt=g("URLSearchParams"),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Fe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const De=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ke=e=>!B(e)&&e!==De;function ne(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,s)=>{const o=e&&Fe(t,s)||s;H(t[o])&&H(r)?t[o]=ne(t[o],r):H(r)?t[o]=ne({},r):D(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const St=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,o)=>{n&&O(s)?e[o]=Ne(s,n):e[o]=s},{allOwnKeys:r}),e),Ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},At=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},_t=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Ce(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},xt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),Tt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Pt=g("HTMLFormElement"),Ct=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ft=g("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Dt=e=>{Be(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return D(e)?r(e):r(String(e).split(t)),n},Bt=()=>{},Lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",be="0123456789",Le={DIGIT:be,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+be},Ut=(e=16,t=Le.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function jt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const It=e=>{const t=new Array(10),n=(r,s)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=D(r)?[]:{};return L(r,(i,l)=>{const p=n(i,s+1);!B(p)&&(o[l]=p)}),t[s]=void 0,o}}return r};return n(e,0)},Ht=g("AsyncFunction"),vt=e=>e&&(V(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:D,isArrayBuffer:Pe,isBuffer:ct,isFormData:bt,isArrayBufferView:lt,isString:ut,isNumber:Ce,isBoolean:ft,isObject:V,isPlainObject:H,isUndefined:B,isDate:dt,isFile:pt,isBlob:ht,isRegExp:Ft,isFunction:O,isStream:yt,isURLSearchParams:wt,isTypedArray:xt,isFileList:mt,forEach:L,merge:ne,extend:St,trim:Et,stripBOM:Ot,inherits:Rt,toFlatObject:gt,kindOf:q,kindOfTest:g,endsWith:At,toArray:_t,forEachEntry:Tt,matchAll:Nt,isHTMLForm:Pt,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:Be,freezeMethods:Dt,toObjectSet:kt,toCamelCase:Ct,noop:Bt,toFiniteNumber:Lt,findKey:Fe,global:De,isContextDefined:ke,ALPHABET:Le,generateString:Ut,isSpecCompliantForm:jt,toJSONObject:It,isAsyncFn:Ht,isThenable:vt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ue=y.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{je[e]={value:e}});Object.defineProperties(y,je);Object.defineProperty(Ue,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Ue);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Mt=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function Ie(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ie(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(re)}const qt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,E){return!a.isUndefined(E[d])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!p&&a.isBlob(u))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?p&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function f(u,d,E){let S=u;if(u&&!E&&typeof u=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&zt(u)||(a.isFileList(u)||a.endsWith(d,"[]"))&&(S=a.toArray(u)))return d=Ie(d),S.forEach(function(T,Ge){!(a.isUndefined(T)||T===null)&&t.append(i===!0?we([d],Ge,o):i===null?d:d+"[]",h(T))}),!1}return re(u)?!0:(t.append(we(E,d,o),h(u)),!1)}const c=[],m=Object.assign(qt,{defaultVisitor:f,convertValue:h,isVisitable:re});function b(u,d){if(!a.isUndefined(u)){if(c.indexOf(u)!==-1)throw Error("Circular reference detected in "+d.join("."));c.push(u),a.forEach(u,function(S,x){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(x)?x.trim():x,d,m))===!0&&b(S,d?d.concat(x):[x])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&J(e,this,t)}const He=le.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function $t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ve(e,t,n){if(!t)return e;const r=n&&n.encode||$t,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Se{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:le,Jt=typeof FormData<"u"?FormData:null,Wt=typeof Blob<"u"?Blob:null,Kt={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Jt,Blob:Wt},protocols:["http","https","file","blob","url","data"]},ze=typeof window<"u"&&typeof document<"u",Gt=(e=>ze&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Xt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Qt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ze,hasStandardBrowserEnv:Gt,hasStandardBrowserWebWorkerEnv:Xt},Symbol.toStringTag,{value:"Module"})),R={...Qt,...Kt};function Zt(e,t){return J(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Yt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function en(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=en(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Yt(r),s,n,0)}),n}return null}function tn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ue={transitional:Me,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Zt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return J(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),tn(t)):t}],transformResponse:[function(t){const n=this.transitional||ue.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ue.headers[e]={}});const fe=ue,nn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&nn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function sn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const on=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function an(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function cn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,p,h){const f=k(p);if(!f)throw new Error("header name must be a non-empty string");const c=a.findKey(s,f);(!c||s[c]===void 0||h===!0||h===void 0&&s[c]!==!1)&&(s[c||p]=v(l))}const i=(l,p)=>a.forEach(l,(h,f)=>o(h,f,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!on(t)?i(rn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return sn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=k(i),i){const l=a.findKey(r,i);l&&(!n||Z(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const l=t?an(o):String(o).trim();l!==o&&delete n[o],n[l]=v(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=k(i);r[l]||(cn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(W.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(W);const _=W;function Y(e,t){const n=this||fe,r=t||n,s=_.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function $e(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,y,{__CANCEL__:!0});function ln(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const un=R.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function fn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function dn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!fn(t)?dn(e,t):t}const pn=R.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),f=r[o];i||(i=h),n[s]=p,r[s]=h;let c=o,m=0;for(;c!==s;)m+=n[c++],c=c%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const b=f&&h-f;return b?Math.round(m*1e3/b):void 0}}function Re(e,t){let n=0;const r=mn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,p=r(l),h=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const yn=typeof XMLHttpRequest<"u",bn=yn&&function(e){return new Promise(function(n,r){let s=e.data;const o=_.from(e.headers).normalize();let{responseType:i,withXSRFToken:l}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let f;if(a.isFormData(s)){if(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[d,...E]=f?f.split(";").map(S=>S.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...E].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+E))}const m=Ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),ve(m,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const d=_.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:d,config:e,request:c};ln(function(T){n(T),h()},function(T){r(T),h()},S),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||Me;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new y(E,S.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},R.hasStandardBrowserEnv&&(l&&a.isFunction(l)&&(l=l(e)),l||l!==!1&&pn(m))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&un.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(E,S){c.setRequestHeader(S,E)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Re(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Re(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{c&&(r(!d||d.type?new U(null,e,c):d),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const u=hn(m);if(u&&R.protocols.indexOf(u)===-1){r(new y("Unsupported protocol "+u+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},se={http:Mt,xhr:bn};a.forEach(se,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ge=e=>`- ${e}`,wn=e=>a.isFunction(e)||e===null||e===!1,Je={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!wn(n)&&(r=se[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,p])=>`adapter ${l} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(ge).join(`
`):" "+ge(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:se};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Ae(e){return ee(e),e.headers=_.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Je.getAdapter(e.adapter||fe.adapter)(e).then(function(r){return ee(e),r.data=Y.call(e,e.transformResponse,r),r.headers=_.from(r.headers),r},function(r){return $e(r)||(ee(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=_.from(r.response.headers))),Promise.reject(r)})}const _e=e=>e instanceof _?{...e}:e;function F(e,t){t=t||{};const n={};function r(h,f,c){return a.isPlainObject(h)&&a.isPlainObject(f)?a.merge.call({caseless:c},h,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(h,f,c){if(a.isUndefined(f)){if(!a.isUndefined(h))return r(void 0,h,c)}else return r(h,f,c)}function o(h,f){if(!a.isUndefined(f))return r(void 0,f)}function i(h,f){if(a.isUndefined(f)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,f)}function l(h,f,c){if(c in t)return r(h,f);if(c in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(h,f)=>s(_e(h),_e(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=p[f]||s,m=c(e[f],t[f],f);a.isUndefined(m)&&c!==l||(n[f]=m)}),n}const We="1.6.8",de={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{de[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};de.transitional=function(t,n,r){function s(o,i){return"[Axios v"+We+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function En(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],p=l===void 0||i(l,o,e);if(p!==!0)throw new y("option "+o+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const oe={assertOptions:En,validators:de},N=oe.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new Se,response:new Se}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&oe.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:oe.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=_.concat(i,o);const l=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,l.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let f,c=0,m;if(!p){const u=[Ae.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,h),m=u.length,f=Promise.resolve(n);c<m;)f=f.then(u[c++],u[c++]);return f}m=l.length;let b=n;for(c=0;c<m;){const u=l[c++],d=l[c++];try{b=u(b)}catch(E){d.call(this,E);break}}try{f=Ae.call(this,b)}catch(u){return Promise.reject(u)}for(c=0,m=h.length;c<m;)f=f.then(h[c++],h[c++]);return f}getUri(t){t=F(this.defaults,t);const n=Ve(t.baseURL,t.url);return ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(F(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});const M=z;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new U(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}const Sn=pe;function On(e){return function(n){return e.apply(null,n)}}function Rn(e){return a.isObject(e)&&e.isAxiosError===!0}const ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ie).forEach(([e,t])=>{ie[t]=e});const gn=ie;function Ke(e){const t=new M(e),n=Ne(M.prototype.request,t);return a.extend(n,M.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ke(F(e,s))},n}const w=Ke(fe);w.Axios=M;w.CanceledError=U;w.CancelToken=Sn;w.isCancel=$e;w.VERSION=We;w.toFormData=J;w.AxiosError=y;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=On;w.isAxiosError=Rn;w.mergeConfig=F;w.AxiosHeaders=_;w.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=Je.getAdapter;w.HttpStatusCode=gn;w.default=w;const An={class:"upload-file"},_n={style:{height:"200px",display:"flex","align-items":"center","justify-content":"center"}},xn={key:0},Tn={class:"ant-upload-drag-icon"},Nn=P("p",{class:"ant-upload-text"},"Кликните или перетащите файл для загрузки",-1),Pn={class:"ant-upload-hint"},Cn={style:{display:"flex",gap:"1rem","align-items":"center","justify-content":"center"}},Fn=P("h3",null,"Включить более детальный анализ",-1),Dn=P("p",null,"Данная процедура может занять более продолжительное время",-1),kn=Te({__name:"UploadFile",setup(e){const t=Ye(),n=K([]),r=K(!1),s=K(!1),{data:o,set:i}=Xe("test-db",[]),l=async c=>{r.value=!0,Qe(c.file.name)==="zip"?await p(c):s.value?await f(c):await h(c)},p=async c=>{try{const m=new FormData;m.append("file",c.file);const{data:b}=await w.post("https://endless-presently-basilisk.ngrok-free.app/uploadzip",m,{headers:{"Content-Type":"multipart/form-data"}});console.log("file FILE",c),b.results&&b.results.forEach(d=>{o.value.push({filename:d.file,id:`${c.file.lastModified}`,predicted_class:d.prediction.predicted_class,probabilities:d.prediction.probabilities[d.prediction.predicted_class],uploadDate:new Intl.DateTimeFormat("ru-RU").format(c.file.lastModified)})}),i(o.value),r.value=!1;const u=`open${Date.now()}`;A.success({message:"Файл успешно загружен",duration:5,btn:()=>G(X,{type:"primary",size:"small",onClick:()=>{t.push("/results"),A.close(u)}},{default:()=>"Перейти к результатам"}),key:u})}catch(m){r.value=!1,console.log(m),A.error({message:"Ошибка при загрузке файла",duration:2})}},h=async c=>{try{const m=new FormData;m.append("file",c.file);const{data:b}=await w.post("https://endless-presently-basilisk.ngrok-free.app/uploadfile",m,{headers:{"Content-Type":"multipart/form-data"}});b&&o.value.push({fileBinary:c.file,filename:c.file.name,id:`${c.file.lastModified}`,predicted_class:b.predicted_class,probabilities:b.probabilities[b.predicted_class],uploadDate:new Intl.DateTimeFormat("ru-RU").format(c.file.lastModified)}),i(o.value),r.value=!1;const u=`open${Date.now()}`;A.success({message:"Файл успешно загружен",duration:5,btn:()=>G(X,{type:"primary",size:"small",onClick:()=>{t.push("/results"),A.close(u)}},{default:()=>"Перейти к результатам"}),key:u})}catch(m){r.value=!1,console.log(m),A.error({message:"Ошибка при загрузке файла",duration:2})}},f=async c=>{r.value=!0;try{const m=new FormData;m.append("file",c.file);const{data:b}=await w.post("https://endless-presently-basilisk.ngrok-free.app/uploadpredict",m,{headers:{"Content-Type":"multipart/form-data"}});b&&o.value.push({fileBinary:c.file,filename:c.file.name,id:`${c.file.lastModified}`,predicted_class:b.predicted_class,probabilities:b.probabilities[b.predicted_class],uploadDate:new Intl.DateTimeFormat("ru-RU").format(c.file.lastModified),additionalData:{...b.data}}),i(o.value),r.value=!1;const u=`open${Date.now()}`;A.success({message:"Файл успешно загружен",duration:5,btn:()=>G(X,{type:"primary",size:"small",onClick:()=>{t.push("/results"),A.close(u)}},{default:()=>"Перейти к результатам"}),key:u})}catch(m){r.value=!1,console.log(m),A.error({message:"Ошибка при загрузке файла",duration:2})}};return(c,m)=>{const b=j("a-spin"),u=j("a-upload-dragger"),d=j("a-switch"),E=j("a-card");return I(),te("div",An,[C(u,{fileList:n.value,"onUpdate:fileList":m[0]||(m[0]=S=>n.value=S),accept:`application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, text/rtf, text/plain, ${s.value?"":".zip"}`,name:"file",multiple:!0,"show-upload-list":!1,"custom-request":l,disabled:r.value},{default:he(()=>[P("div",_n,[r.value?(I(),nt(b,{key:1,spinning:r.value},null,8,["spinning"])):(I(),te("div",xn,[P("p",Tn,[C(et(it))]),Nn,P("p",Pn," Доступные форматы файлов для загрузки: .docx, .doc, .pdf, .rtf, .txt, "+tt(s.value?"":".zip"),1)]))])]),_:1},8,["fileList","accept","disabled"]),C(E,{"body-style":{padding:"1rem",display:"flex","flex-direction":"column","align-items":"center"}},{default:he(()=>[P("div",Cn,[Fn,C(d,{disabled:r.value,checked:s.value,"onUpdate:checked":m[1]||(m[1]=S=>s.value=S)},null,8,["disabled","checked"])]),Dn]),_:1})])}}}),Un=Te({__name:"HomeView",setup(e){return(t,n)=>(I(),te("div",null,[C(kn)]))}});export{Un as default};