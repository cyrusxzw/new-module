"use strict";var e=require("./tslib.es6.js"),t=require("react"),n="undefined"!=typeof window;exports.useImageTransition=function(r,i,u,s){void 0===u&&(u=600),void 0===s&&(s={});var o=t.useState({}),a=o[0],c=o[1],f=t.useState(!1),d=f[0],l=f[1],v=t.useRef(null),m=JSON.stringify(r);return t.useEffect((function(){var t=i.current||null;l(!1);var o=function(){l(!0)};return n&&t&&(v.current=setTimeout((function(){c(e.__assign(e.__assign({},r),s)),t.complete?o():t.addEventListener("load",o)}),u)),function(){n&&clearTimeout(v.current),t&&t.removeEventListener("load",o)}}),[m,i]),[a,d]};
