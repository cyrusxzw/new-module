"use strict";var t=require("react"),e=require("./get.js"),r=require("./isSymbol.js"),n=require("./toNumber.js"),o=require("query-string");function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=a(t),u=a(o);var c=function(){this.__data__=new e._ListCache,this.size=0};var f=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var s=function(t){return this.__data__.get(t)};var v=function(t){return this.__data__.has(t)};var l=function(t,r){var n=this.__data__;if(n instanceof e._ListCache){var o=n.__data__;if(!e._Map||o.length<199)return o.push([t,r]),this.size=++n.size,this;n=this.__data__=new e._MapCache(o)}return n.set(t,r),this.size=n.size,this};function _(t){var r=this.__data__=new e._ListCache(t);this.size=r.size}_.prototype.clear=c,_.prototype.delete=f,_.prototype.get=s,_.prototype.has=v,_.prototype.set=l;var b=_;var p=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var y=function(t){return this.__data__.has(t)};function j(t){var r=-1,n=null==t?0:t.length;for(this.__data__=new e._MapCache;++r<n;)this.add(t[r])}j.prototype.add=j.prototype.push=p,j.prototype.has=y;var h=j;var d=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1};var g=function(t,e){return t.has(e)};var O=function(t,e,r,n,o,a){var i=1&r,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var f=a.get(t),s=a.get(e);if(f&&s)return f==e&&s==t;var v=-1,l=!0,_=2&r?new h:void 0;for(a.set(t,e),a.set(e,t);++v<u;){var b=t[v],p=e[v];if(n)var y=i?n(p,b,v,e,t,a):n(b,p,v,t,e,a);if(void 0!==y){if(y)continue;l=!1;break}if(_){if(!d(e,(function(t,e){if(!g(_,e)&&(b===t||o(b,t,r,n,a)))return _.push(e)}))){l=!1;break}}else if(b!==p&&!o(b,p,r,n,a)){l=!1;break}}return a.delete(t),a.delete(e),l},m=r._root.Uint8Array;var w=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r};var A=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r},x=r._Symbol?r._Symbol.prototype:void 0,S=x?x.valueOf:void 0;var k=function(t,r,n,o,a,i,u){switch(n){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!i(new m(t),new m(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return e.eq_1(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var c=w;case"[object Set]":var f=1&o;if(c||(c=A),t.size!=r.size&&!f)return!1;var s=u.get(t);if(s)return s==r;o|=2,u.set(t,r);var v=O(c(t),c(r),o,a,i,u);return u.delete(t),v;case"[object Symbol]":if(S)return S.call(t)==S.call(r)}return!1};var M=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t};var C=function(t,r,n){var o=r(t);return e.isArray_1(t)?o:M(o,n(t))};var L=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a};var P=function(){return[]},z=Object.prototype.propertyIsEnumerable,V=Object.getOwnPropertySymbols,E=V?function(t){return null==t?[]:(t=Object(t),L(V(t),(function(e){return z.call(t,e)})))}:P;var T=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var q=function(t){return r.isObjectLike_1(t)&&"[object Arguments]"==r._baseGetTag(t)},I=Object.prototype,B=I.hasOwnProperty,N=I.propertyIsEnumerable,D=q(function(){return arguments}())?q:function(t){return r.isObjectLike_1(t)&&B.call(t,"callee")&&!N.call(t,"callee")};var G=function(){return!1},K=r.createCommonjsModule((function(t,e){var n=e&&!e.nodeType&&e,o=n&&t&&!t.nodeType&&t,a=o&&o.exports===n?r._root.Buffer:void 0,i=(a?a.isBuffer:void 0)||G;t.exports=i})),F=/^(?:0|[1-9]\d*)$/;var U=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&F.test(t))&&t>-1&&t%1==0&&t<e};var W=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},R={};R["[object Float32Array]"]=R["[object Float64Array]"]=R["[object Int8Array]"]=R["[object Int16Array]"]=R["[object Int32Array]"]=R["[object Uint8Array]"]=R["[object Uint8ClampedArray]"]=R["[object Uint16Array]"]=R["[object Uint32Array]"]=!0,R["[object Arguments]"]=R["[object Array]"]=R["[object ArrayBuffer]"]=R["[object Boolean]"]=R["[object DataView]"]=R["[object Date]"]=R["[object Error]"]=R["[object Function]"]=R["[object Map]"]=R["[object Number]"]=R["[object Object]"]=R["[object RegExp]"]=R["[object Set]"]=R["[object String]"]=R["[object WeakMap]"]=!1;var $=function(t){return r.isObjectLike_1(t)&&W(t.length)&&!!R[r._baseGetTag(t)]};var H=function(t){return function(e){return t(e)}},J=r.createCommonjsModule((function(t,e){var n=e&&!e.nodeType&&e,o=n&&t&&!t.nodeType&&t,a=o&&o.exports===n&&r._freeGlobal.process,i=function(){try{var t=o&&o.require&&o.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=i})),Q=J&&J.isTypedArray,X=Q?H(Q):$,Y=Object.prototype.hasOwnProperty;var Z=function(t,r){var n=e.isArray_1(t),o=!n&&D(t),a=!n&&!o&&K(t),i=!n&&!o&&!a&&X(t),u=n||o||a||i,c=u?T(t.length,String):[],f=c.length;for(var s in t)!r&&!Y.call(t,s)||u&&("length"==s||a&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||U(s,f))||c.push(s);return c},tt=Object.prototype;var et=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||tt)};var rt=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),nt=Object.prototype.hasOwnProperty;var ot=function(t){if(!et(t))return rt(t);var e=[];for(var r in Object(t))nt.call(t,r)&&"constructor"!=r&&e.push(r);return e};var at=function(t){return null!=t&&W(t.length)&&!e.isFunction_1(t)};var it=function(t){return at(t)?Z(t):ot(t)};var ut=function(t){return C(t,it,E)},ct=Object.prototype.hasOwnProperty;var ft=function(t,e,r,n,o,a){var i=1&r,u=ut(t),c=u.length;if(c!=ut(e).length&&!i)return!1;for(var f=c;f--;){var s=u[f];if(!(i?s in e:ct.call(e,s)))return!1}var v=a.get(t),l=a.get(e);if(v&&l)return v==e&&l==t;var _=!0;a.set(t,e),a.set(e,t);for(var b=i;++f<c;){var p=t[s=u[f]],y=e[s];if(n)var j=i?n(y,p,s,e,t,a):n(p,y,s,t,e,a);if(!(void 0===j?p===y||o(p,y,r,n,a):j)){_=!1;break}b||(b="constructor"==s)}if(_&&!b){var h=t.constructor,d=e.constructor;h==d||!("constructor"in t)||!("constructor"in e)||"function"==typeof h&&h instanceof h&&"function"==typeof d&&d instanceof d||(_=!1)}return a.delete(t),a.delete(e),_},st=e._getNative(r._root,"DataView"),vt=e._getNative(r._root,"Promise"),lt=e._getNative(r._root,"Set"),_t=e._getNative(r._root,"WeakMap"),bt=e._toSource(st),pt=e._toSource(e._Map),yt=e._toSource(vt),jt=e._toSource(lt),ht=e._toSource(_t),dt=r._baseGetTag;(st&&"[object DataView]"!=dt(new st(new ArrayBuffer(1)))||e._Map&&"[object Map]"!=dt(new e._Map)||vt&&"[object Promise]"!=dt(vt.resolve())||lt&&"[object Set]"!=dt(new lt)||_t&&"[object WeakMap]"!=dt(new _t))&&(dt=function(t){var n=r._baseGetTag(t),o="[object Object]"==n?t.constructor:void 0,a=o?e._toSource(o):"";if(a)switch(a){case bt:return"[object DataView]";case pt:return"[object Map]";case yt:return"[object Promise]";case jt:return"[object Set]";case ht:return"[object WeakMap]"}return n});var gt=dt,Ot="[object Object]",mt=Object.prototype.hasOwnProperty;var wt=function(t,r,n,o,a,i){var u=e.isArray_1(t),c=e.isArray_1(r),f=u?"[object Array]":gt(t),s=c?"[object Array]":gt(r),v=(f="[object Arguments]"==f?Ot:f)==Ot,l=(s="[object Arguments]"==s?Ot:s)==Ot,_=f==s;if(_&&K(t)){if(!K(r))return!1;u=!0,v=!1}if(_&&!v)return i||(i=new b),u||X(t)?O(t,r,n,o,a,i):k(t,r,f,n,o,a,i);if(!(1&n)){var p=v&&mt.call(t,"__wrapped__"),y=l&&mt.call(r,"__wrapped__");if(p||y){var j=p?t.value():t,h=y?r.value():r;return i||(i=new b),a(j,h,n,o,i)}}return!!_&&(i||(i=new b),ft(t,r,n,o,a,i))};var At=function t(e,n,o,a,i){return e===n||(null==e||null==n||!r.isObjectLike_1(e)&&!r.isObjectLike_1(n)?e!=e&&n!=n:wt(e,n,o,a,t,i))};var xt=function(t,e,r,n){var o=r.length,a=o,i=!n;if(null==t)return!a;for(t=Object(t);o--;){var u=r[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=r[o])[0],f=t[c],s=u[1];if(i&&u[2]){if(void 0===f&&!(c in t))return!1}else{var v=new b;if(n)var l=n(f,s,c,t,e,v);if(!(void 0===l?At(s,f,3,n,v):l))return!1}}return!0};var St=function(t){return t==t&&!r.isObject_1(t)};var kt=function(t){for(var e=it(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,St(o)]}return e};var Mt=function(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}};var Ct=function(t){var e=kt(t);return 1==e.length&&e[0][2]?Mt(e[0][0],e[0][1]):function(r){return r===t||xt(r,t,e)}};var Lt=function(t,e){return null!=t&&e in Object(t)};var Pt=function(t,r,n){for(var o=-1,a=(r=e._castPath(r,t)).length,i=!1;++o<a;){var u=e._toKey(r[o]);if(!(i=null!=t&&n(t,u)))break;t=t[u]}return i||++o!=a?i:!!(a=null==t?0:t.length)&&W(a)&&U(u,a)&&(e.isArray_1(t)||D(t))};var zt=function(t,e){return null!=t&&Pt(t,e,Lt)};var Vt=function(t,r){return e._isKey(t)&&St(r)?Mt(e._toKey(t),r):function(n){var o=e.get_1(n,t);return void 0===o&&o===r?zt(n,t):At(r,o,3)}};var Et=function(t){return t};var Tt=function(t){return function(e){return null==e?void 0:e[t]}};var qt=function(t){return function(r){return e._baseGet(r,t)}};var It=function(t){return e._isKey(t)?Tt(e._toKey(t)):qt(t)};var Bt=function(t){return"function"==typeof t?t:null==t?Et:"object"==typeof t?e.isArray_1(t)?Vt(t[0],t[1]):Ct(t):It(t)};var Nt=function(t){return function(e,r,n){var o=Object(e);if(!at(e)){var a=Bt(r);e=it(e),r=function(t){return a(o[t],t,o)}}var i=t(e,r,n);return i>-1?o[a?e[i]:i]:void 0}};var Dt=function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1};var Gt=function(t){return t?Infinity===(t=n.toNumber_1(t))||-Infinity===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Kt=function(t){var e=Gt(t),r=e%1;return e==e?r?e-r:e:0},Ft=Math.max;var Ut=Nt((function(t,e,r){var n=null==t?0:t.length;if(!n)return-1;var o=null==r?0:Kt(r);return o<0&&(o=Ft(n+o,0)),Dt(t,Bt(e),o)})),Wt=function(e){void 0===e&&(e=[]);var r=t.useState(void 0),n=r[0],o=r[1];t.useEffect((function(){var t=u.default.parse(location.search).variant,r=e.find((function(e){return e.sku===t}));o(null!=r?r:e[0])}),[e]);return{onVariantChange:function(t,e){t.persist();var r=t.target.value,n=Ut(e,{sku:r})||null;o(n)},selectedVariant:n,setSelectedVariant:o,variants:e}},Rt=t.createContext(void 0);exports.VariantSelectContextProvider=function(t){var e=t.children,r=t.variants;return i.default.createElement(Rt.Provider,{value:Wt(r)},e)},exports._baseFindIndex=Dt,exports._baseKeys=ot,exports._getTag=gt,exports._isPrototype=et,exports.find_1=Ut,exports.isArguments_1=D,exports.isArrayLike_1=at,exports.isBuffer_1=K,exports.isTypedArray_1=X,exports.keys_1=it,exports.toInteger_1=Kt,exports.useVariantSelectContext=function(){var e=t.useContext(Rt);if(void 0===e)throw new Error("useVariantSelectContext must be used within a VariantSelectContextProvider");return e};
