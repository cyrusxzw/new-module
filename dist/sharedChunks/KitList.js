"use strict";var t=require("react"),n=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var i=require("./ThemeContext.js");require("./VariantSelectContext.js");var e=require("./List.js"),s=require("./style-inject.es.js");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=o(t),r=o(n),m={base:"KitList-module_base__ojyC-",item:"KitList-module_item__2z-sW",dark:"KitList-module_dark__JqFfF",light:"KitList-module_light__1IVl5",slideIn:"KitList-module_slideIn__36yxB"};s.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.KitList-module_base__ojyC- {\n  padding: 0;\n  margin: 0;\n  margin-top: 18px;\n  list-style: none;\n}\n@media (min-width: 640px) {\n.KitList-module_base__ojyC- {\n    margin-top: 14px\n}\n  }\n.KitList-module_item__2z-sW {\n  position: relative;\n  padding-top: 18px;\n  padding-bottom: 18px;\n  margin: 0;\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 15px;\n  line-height: 1.4;\n  opacity: 0;\n  -webkit-transform: translateY(-20px);\n          transform: translateY(-20px);\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.KitList-module_item__2z-sW:nth-of-type(1) {\n    padding-top: 0;\n    -webkit-transition-delay: calc((1 * 100ms) + 200ms);\n            transition-delay: calc((1 * 100ms) + 200ms);\n  }\n.KitList-module_item__2z-sW:nth-of-type(2) {\n    -webkit-transition-delay: calc((2 * 100ms) + 200ms);\n            transition-delay: calc((2 * 100ms) + 200ms);\n  }\n.KitList-module_item__2z-sW:nth-of-type(3) {\n    -webkit-transition-delay: calc((3 * 100ms) + 200ms);\n            transition-delay: calc((3 * 100ms) + 200ms);\n  }\n.KitList-module_item__2z-sW:nth-of-type(4) {\n    -webkit-transition-delay: calc((4 * 100ms) + 200ms);\n            transition-delay: calc((4 * 100ms) + 200ms);\n  }\n.KitList-module_dark__JqFfF .KitList-module_item__2z-sW {\n    color: #333;\n  }\n.KitList-module_dark__JqFfF .KitList-module_item__2z-sW:not(:last-child) {\n      border-bottom: 1px solid #d5d4c9;\n      margin: 0;\n    }\n.KitList-module_light__1IVl5.KitList-module_light__1IVl5 .KitList-module_item__2z-sW {\n    color: #fffef2;\n  }\n.KitList-module_light__1IVl5.KitList-module_light__1IVl5 .KitList-module_item__2z-sW:not(:last-child) {\n      border-bottom: 1px solid #d5d4c9;\n      margin: 0;\n    }\n@media (min-width: 640px) {\n.KitList-module_item__2z-sW {\n    padding-top: 14px;\n    padding-bottom: 14px;\n    line-height: 1.6\n}\n  }\n.KitList-module_slideIn__36yxB {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n");var l=t.forwardRef((function(t,n){var s,o=t.className,l=t.isVisible,d=void 0===l||l,p=t.items,_=t.theme,u=i.useThemeContext(_,"dark"),c=r.default(m.base,m[u],o),x=r.default(m.item,((s={})[m.slideIn]=d,s));return a.default.createElement(e.List,{className:c,items:p,listItemClassName:x,ref:n,theme:_})}));exports.KitList=l;
