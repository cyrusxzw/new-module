"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self,r=t||o||Function("return this")(),n=r.Symbol,c=Object.prototype,l=c.hasOwnProperty,i=c.toString,u=n?n.toStringTag:void 0;var f=function(e){var t=l.call(e,u),o=e[u];try{e[u]=void 0;var r=!0}catch(e){}var n=i.call(e);return r&&(t?e[u]=o:delete e[u]),n},a=Object.prototype.toString;var s=function(e){return a.call(e)},b=n?n.toStringTag:void 0;var p=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?f(e):s(e)};var d=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var y=function(e){return null!=e&&"object"==typeof e};var j=function(e){return"symbol"==typeof e||y(e)&&"[object Symbol]"==p(e)};exports._Symbol=n,exports._baseGetTag=p,exports._freeGlobal=t,exports._root=r,exports.createCommonjsModule=function(e){var t={exports:{}};return e(t,t.exports),t.exports},exports.getAugmentedNamespace=function(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})})),t},exports.isObjectLike_1=y,exports.isObject_1=d,exports.isSymbol_1=j;
