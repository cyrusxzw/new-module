"use strict";var e=require("./environment.js");exports.getPortalRoot=function(t){var n=null;return e.isInBrowser()&&((n=document.getElementById(t))||((n=document.createElement("div")).setAttribute("id",t),document.body.appendChild(n))),n};