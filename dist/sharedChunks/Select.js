"use strict";var e=require("react"),n=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var t=require("./ThemeContext.js");require("./VariantSelectContext.js");var o=require("./Icon.js"),l=require("./style-inject.es.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e),i=a(n),s={base:"Select-module_base__2hN67",input:"Select-module_input__3pZ0Q",isBlock:"Select-module_isBlock__20_Mi",dark:"Select-module_dark__2yToU",isDisabled:"Select-module_isDisabled__cSMnF",light:"Select-module_light__2YaMZ",icon:"Select-module_icon__2PuKc",label:"Select-module_label__uQB3s",hasFocus:"Select-module_hasFocus__3bMed",errorMessage:"Select-module_errorMessage__16VE8",hasError:"Select-module_hasError__3LYC4"};l.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Select-module_base__2hN67 {\n  position: relative;\n  display: block;\n  padding-top: 25px;\n  margin-bottom: 15px;\n  font-family: 'Suisse Regular', sans-serif;\n}\n@media (min-width: 640px) {\n.Select-module_base__2hN67 {\n    max-width: 466.66px\n}\n  }\n.Select-module_base__2hN67,\n  .Select-module_base__2hN67 * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.Select-module_input__3pZ0Q {\n  display: inline-block;\n  width: 100%;\n  padding: 0;\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  border-color: #d5d4c9;\n  margin: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  border-radius: 0;\n  color: #333;\n  cursor: pointer;\n  font-size: 20px;\n  line-height: 1.5;\n  outline: none;\n  text-overflow: ellipsis;\n\n}\n@media (min-width: 640px) {\n.Select-module_input__3pZ0Q {\n    font-size: 24px\n\n}\n  }\n.Select-module_isBlock__20_Mi .Select-module_input__3pZ0Q {\n    padding: 20px 50px 20px 20px;\n    border-width: 1px;\n    font-size: 16px;\n    -webkit-padding-end: 50px;\n    -webkit-padding-start: 20px;\n  }\n@media (min-width: 640px) {\n.Select-module_isBlock__20_Mi .Select-module_input__3pZ0Q {\n      font-size: 16px\n  }\n    }\n.Select-module_dark__2yToU .Select-module_input__3pZ0Q {\n    color: #333;\n  }\n.Select-module_dark__2yToU .Select-module_input__3pZ0Q.Select-module_isDisabled__cSMnF {\n      color: #999;\n      cursor: default;\n    }\n.Select-module_light__2YaMZ .Select-module_input__3pZ0Q {\n    color: #fffef2;\n  }\n.Select-module_light__2YaMZ .Select-module_input__3pZ0Q.Select-module_isDisabled__cSMnF {\n      color: #6b6b6b;\n      cursor: default;\n    }\n.Select-module_icon__2PuKc {\n  position: absolute;\n  top: 35px;\n  right: 22px;\n  pointer-events: none;\n}\n.Select-module_isBlock__20_Mi .Select-module_icon__2PuKc {\n    top: 50px;\n  }\n.Select-module_dark__2yToU .Select-module_icon__2PuKc {\n    fill: #666;\n  }\n.Select-module_light__2YaMZ .Select-module_icon__2PuKc {\n    fill: #e0dfd6;\n  }\n.Select-module_label__uQB3s {\n  position: absolute;\n  top: 0;\n  font-size: 20px;\n  pointer-events: none;\n  -webkit-transform: translateY(25px);\n          transform: translateY(25px);\n  -webkit-transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (min-width: 640px) {\n.Select-module_label__uQB3s {\n    font-size: 24px\n}\n  }\n.Select-module_isBlock__20_Mi .Select-module_label__uQB3s {\n    font-size: 16px;\n    -webkit-transform: translateY(45px) translateX(20px);\n            transform: translateY(45px) translateX(20px);\n  }\n@media (min-width: 640px) {\n.Select-module_isBlock__20_Mi .Select-module_label__uQB3s {\n      font-size: 16px\n  }\n    }\n.Select-module_dark__2yToU .Select-module_label__uQB3s {\n    color: #666;\n  }\n.Select-module_light__2YaMZ .Select-module_label__uQB3s {\n    color: #e0dfd6;\n  }\n.Select-module_hasFocus__3bMed .Select-module_label__uQB3s {\n    font-size: 14px;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n.Select-module_errorMessage__16VE8 {\n  display: block;\n  height: 14px;\n  margin: 10px 0 0;\n  color: #ea6956;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.Select-module_hasError__3LYC4 .Select-module_input__3pZ0Q {\n    border-color: #ea6956;\n  }\n.Select-module_hasError__3LYC4 .Select-module_icon__2PuKc {\n    fill: #ea6956;\n  }\n");var _=e.forwardRef((function(n,l){var a,_,c,d,u=n.className,m=n.dataTestRef,p=n.errorMessage,x=n.isBlock,b=void 0!==x&&x,h=n.isEnabled,S=void 0===h||h,f=n.label,k=n.name,g=n.onBlur,w=n.onChange,v=n.onFocus,M=n.options,B=n.theme,E=n.value,C=t.useThemeContext(B,"dark"),Q=e.useState(!1),y=Q[0],z=Q[1],L=k+"-error-message",Z=i.default(s.base,((a={})[s.isBlock]=b,a),((_={})[s.hasFocus]=E||y,_),((c={})[s.hasError]=p,c),s[C],u),j=i.default(s.input,((d={})[s.isDisabled]=!S,d));return r.default.createElement("div",{className:Z},r.default.createElement("label",{className:i.default(s.label),htmlFor:k},f),r.default.createElement("select",{"aria-describedby":p?L:void 0,"aria-invalid":!!p,"aria-label":f||k,className:j,"data-test-ref":m,disabled:!S,id:k,name:k,onBlur:function(e){null==g||g(e),z(!1)},onChange:w,onFocus:function(e){null==v||v(e),z(!0)},ref:l,value:E},f&&r.default.createElement("option",{value:""}),M.map((function(e){var n=e.id,t=e.label,o=e.value;return r.default.createElement("option",{key:n||o,value:o},t)}))),r.default.createElement(o.Icon,{className:s.icon,height:15,name:"chevron",theme:C,width:15}),p&&r.default.createElement("span",{className:s.errorMessage,id:L},p))}));exports.Select=_;
