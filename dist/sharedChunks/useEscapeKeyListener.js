"use strict";var e=require("react");require("./viewports.js");exports.useEscapeKeyListener=function(n){e.useEffect((function(){var e=function(e){return 27===e.keyCode&&n(e),e};return"undefined"!=typeof document&&document.addEventListener("keydown",e,{capture:!0}),function(){"undefined"!=typeof document&&document.removeEventListener("keydown",e,{capture:!0})}}),[n])};