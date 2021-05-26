"use strict";var e=require("react"),n=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var t=require("./ThemeContext.js");require("./VariantSelectContext.js");var o=require("./style-inject.es.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e),i=a(n),u={base:"Quote-module_base__2H3wf",dark:"Quote-module_dark__ocCjZ",light:"Quote-module_light__2dKx5",wrapper:"Quote-module_wrapper__1S4Pe",blockquote:"Quote-module_blockquote__1Ap9l",author:"Quote-module_author__3tPnl"};o.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Quote-module_base__2H3wf {\n  padding: 80px 16px;\n}\n@media (min-width: 640px) {\n.Quote-module_base__2H3wf {\n    padding: 100px 34px\n}\n  }\n@media (min-width: 1025px) {\n.Quote-module_base__2H3wf {\n    padding: 150px 40px\n}\n  }\n.Quote-module_dark__ocCjZ {\n  color: #333;\n}\n.Quote-module_light__2dKx5 {\n  color: #fffef2;\n}\n.Quote-module_wrapper__1S4Pe {\n  margin: 0 auto;\n  text-align: center;\n}\n@media (min-width: 640px) {\n.Quote-module_wrapper__1S4Pe {\n    width: 50%;\n    margin: 0 auto\n}\n  }\n.Quote-module_blockquote__1Ap9l {\n  font-family: 'Zapf Humanist', serif;\n}\n/**\n   * Override for Korean region translation\n   */\nhtml[lang*='ko'] .Quote-module_blockquote__1Ap9l,\n  html[lang*='KO'] .Quote-module_blockquote__1Ap9l {\n    font-family: 'Suisse Regular', sans-serif;\n    font-weight: 400;\n  }\n.Quote-module_blockquote__1Ap9l {\n\n  padding: 0;\n  margin: 0;\n  margin-bottom: 20px;\n  font-size: 25px;\n  font-weight: 400;\n  line-height: 1.33;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%\n}\n@media (min-width: 640px) {\n  .Quote-module_blockquote__1Ap9l {\n    font-size: 30px\n}\n  }\n.Quote-module_author__3tPnl {\n  display: block;\n  margin: 0;\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-style: initial;\n  line-height: 2;\n}\n");var l=e.forwardRef((function(e,n){var o=e.author,a=e.className,l=e.content,s=e.theme,m=t.useThemeContext(s,"dark"),p=i.default(u.base,u[m],a);return r.default.createElement("div",{className:p,ref:n},r.default.createElement("div",{className:u.wrapper},r.default.createElement("blockquote",{className:u.blockquote},l),r.default.createElement("cite",{className:u.author},o)))}));exports.Quote=l;
