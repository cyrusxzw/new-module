"use strict";var e=require("react"),t=require("./keyboard-codes.js");require("./viewports.js");var n=['a[href]:not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])',"area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","iframe","object","embed",'[tabindex="0"]',"[contenteditable]"].join(", ");exports.useTrapFocus=function(r,o){void 0===r&&(r=!1),void 0===o&&(o=n);var a=e.useRef(null);return e.useEffect((function(){var e=null==a?void 0:a.current,n=function(n){var r=e.querySelectorAll(o),a=r[0],i=r[r.length-1];("Tab"===n.key||n.keyCode===t.TAB)&&(n.shiftKey?document.activeElement===a&&(i.focus(),n.preventDefault()):document.activeElement===i&&(a.focus(),n.preventDefault()))};return e&&r&&e.addEventListener("keydown",n),function(){e&&e.removeEventListener("keydown",n)}}),[r,o]),[a]};