"use strict";var n=require("react"),e=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var a=require("./ThemeContext.js");require("./VariantSelectContext.js");var o=require("./style-inject.es.js");function i(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var t=i(n),d=i(e),m={base:"Loading-module_base__11pIy",small:"Loading-module_small__2H7s_",medium:"Loading-module_medium__2hEHn",large:"Loading-module_large__1xf44",fullSize:"Loading-module_fullSize__1h4Cr",dot:"Loading-module_dot__2jmbK",fadeInOut:"Loading-module_fadeInOut__2NvtY",dark:"Loading-module_dark__2DSO5",light:"Loading-module_light__3WGPG",isLoading:"Loading-module_isLoading__2jmYF"};o.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Loading-module_base__11pIy {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  pointer-events: none;\n}\n.Loading-module_small__2H7s_ {\n  height: 5px;\n}\n.Loading-module_medium__2hEHn {\n  height: 7px;\n}\n.Loading-module_large__1xf44 {\n  height: 10px;\n}\n.Loading-module_fullSize__1h4Cr {\n  height: 100%;\n}\n.Loading-module_dot__2jmbK {\n  display: block;\n  margin: 0 3px;\n  border-radius: 100%;\n}\n.Loading-module_small__2H7s_ .Loading-module_dot__2jmbK {\n    width: 5px;\n    height: 5px;\n  }\n.Loading-module_medium__2hEHn .Loading-module_dot__2jmbK {\n    width: 7px;\n    height: 7px;\n  }\n.Loading-module_large__1xf44 .Loading-module_dot__2jmbK {\n    width: 10px;\n    height: 10px;\n  }\n.Loading-module_dark__2DSO5 .Loading-module_dot__2jmbK {\n    background: #4a4a4a;\n  }\n.Loading-module_light__3WGPG .Loading-module_dot__2jmbK {\n    background: #fffef2;\n  }\n@-webkit-keyframes Loading-module_fadeInOut__2NvtY {\n    0% {\n      opacity: 0;\n    }\n\n    60% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 0;\n    }\n  }\n@keyframes Loading-module_fadeInOut__2NvtY {\n    0% {\n      opacity: 0;\n    }\n\n    60% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 0;\n    }\n  }\n.Loading-module_isLoading__2jmYF .Loading-module_dot__2jmbK {\n    -webkit-animation: Loading-module_fadeInOut__2NvtY 1000ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite;\n            animation: Loading-module_fadeInOut__2NvtY 1000ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite;\n  }\n.Loading-module_isLoading__2jmYF .Loading-module_dot__2jmbK:nth-of-type(1) {\n      -webkit-animation-delay: -50ms;\n              animation-delay: -50ms;\n    }\n.Loading-module_isLoading__2jmYF .Loading-module_dot__2jmbK:nth-of-type(2) {\n      -webkit-animation-delay: 50ms;\n              animation-delay: 50ms;\n    }\n.Loading-module_isLoading__2jmYF .Loading-module_dot__2jmbK:nth-of-type(3) {\n      -webkit-animation-delay: 150ms;\n              animation-delay: 150ms;\n    }\n");exports.Loading=function(n){var e,o=n.className,i=n.isLoading,l=n.shouldFillSpace,_=void 0!==l&&l,s=n.size,r=void 0===s?"medium":s,u=n.theme,g=a.useThemeContext(u,"dark");if(!i)return null;var p=d.default(m.base,((e={})[m.isLoading]=i,e[m.fullSize]=_,e),m[r],m[g],o);return t.default.createElement("span",{className:p,"data-testid":"data-testid-loading"},t.default.createElement("span",{className:m.dot}),t.default.createElement("span",{className:m.dot}),t.default.createElement("span",{className:m.dot}))};
