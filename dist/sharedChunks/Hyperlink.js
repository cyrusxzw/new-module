"use strict";var n=require("react"),e=require("classnames"),l=require("./Icon.js"),o=require("./find.js"),r=require("./isSymbol.js"),i=require("./get.js");require("./viewports.js");var t=require("./style-inject.es.js");function _(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var p=_(n),a=_(e);var k=function(n){return n!=n};var c=function(n,e,l){for(var o=l-1,r=n.length;++o<r;)if(n[o]===e)return o;return-1};var u=function(n,e,l){return e==e?c(n,e,l):o._baseFindIndex(n,k,l)};var d=function(n){return"string"==typeof n||!i.isArray_1(n)&&r.isObjectLike_1(n)&&"[object String]"==r._baseGetTag(n)};var y=function(n,e){return i._arrayMap(e,(function(e){return n[e]}))};var m=function(n){return null==n?[]:y(n,o.keys_1(n))},s=Math.max;var h=function(n,e,l,r){n=o.isArrayLike_1(n)?n:m(n),l=l&&!r?o.toInteger_1(l):0;var i=n.length;return l<0&&(l=s(i+l,0)),d(n)?l<=i&&n.indexOf(e,l)>-1:!!i&&u(n,e,l)>-1},f={base:"Hyperlink-module_base__uoaww",icon:"Hyperlink-module_icon__1hgGy",blockStyle:"Hyperlink-module_blockStyle__3pIk6",hasIcon:"Hyperlink-module_hasIcon__1893y",hasExternalIcon:"Hyperlink-module_hasExternalIcon__2reUG",dark:"Hyperlink-module_dark__3QzFC",alternate:"Hyperlink-module_alternate__2FgM_",light:"Hyperlink-module_light__6lcpR",center:"Hyperlink-module_center__2bv1X",left:"Hyperlink-module_left__3BZhR",right:"Hyperlink-module_right__yaOnj"};t.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Hyperlink-module_base__uoaww {\n  position: relative;\n  display: inline-block;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  outline: none;\n  text-decoration: none;\n}\n.Hyperlink-module_base__uoaww,\n  .Hyperlink-module_base__uoaww * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.Hyperlink-module_icon__1hgGy {\n  display: inline-block;\n}\n.Hyperlink-module_icon__1hgGy svg {\n    width: 12px;\n    max-height: 12px;\n  }\n.Hyperlink-module_icon__1hgGy svg path {\n      -webkit-transition: fill 150ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      transition: fill 150ms cubic-bezier(0.645, 0.045, 0.355, 1);\n    }\n.Hyperlink-module_blockStyle__3pIk6 {\n  display: inline-block;\n  min-width: 210px;\n  max-width: 300px;\n  height: 60px;\n  padding: 19px 23px;\n  border-width: 1px;\n  border-style: solid;\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n  -webkit-transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n@media (max-width: 639px) {\n.Hyperlink-module_blockStyle__3pIk6 {\n    width: 100%;\n    max-width: 100%\n}\n  }\n.Hyperlink-module_blockStyle__3pIk6.Hyperlink-module_hasIcon__1893y {\n    padding-right: 55px;\n  }\n.Hyperlink-module_blockStyle__3pIk6 .Hyperlink-module_icon__1hgGy {\n    position: absolute;\n    top: calc(50% - 6px);\n    right: 23px;\n    font-size: 0;\n    line-height: 1;\n  }\n.Hyperlink-module_blockStyle__3pIk6.Hyperlink-module_hasExternalIcon__2reUG .Hyperlink-module_icon__1hgGy {\n  top: calc(50% - 5px);\n}\n.Hyperlink-module_dark__3QzFC {\n  color: #333\n}\n.Hyperlink-module_dark__3QzFC:hover,\n  .Hyperlink-module_dark__3QzFC:focus {\n    color: #333;\n  }\n.Hyperlink-module_dark__3QzFC .Hyperlink-module_icon__1hgGy.Hyperlink-module_icon__1hgGy svg path {\n        fill: #333;\n      }\n.Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6 {\n    border-color: rgba(51, 51, 51, 0.2);\n  }\n.Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6 .Hyperlink-module_icon__1hgGy svg path {\n          fill: #333;\n        }\n.Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6:hover,\n    .Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6:focus {\n      border-color: #333;\n      background-color: #333;\n      color: #fffef2;\n    }\n.Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6:hover .Hyperlink-module_icon__1hgGy svg path, .Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6:focus .Hyperlink-module_icon__1hgGy svg path {\n            fill: #fffef2;\n          }\n.Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6.Hyperlink-module_alternate__2FgM_ {\n      border-color: #333;\n      background-color: #333;\n      color: #f6f5e8\n    }\n.Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6.Hyperlink-module_alternate__2FgM_:hover,\n      .Hyperlink-module_dark__3QzFC.Hyperlink-module_blockStyle__3pIk6.Hyperlink-module_alternate__2FgM_:focus {\n        border-color: #000;\n        background-color: #000;\n      }\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR {\n  color: #fffef2\n}\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR:hover,\n  .Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR:focus {\n    color: #f6f5e8;\n  }\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR .Hyperlink-module_icon__1hgGy.Hyperlink-module_icon__1hgGy svg path {\n        fill: #fffef2;\n      }\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6 {\n    border: 1px solid #fffef2;\n  }\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6 .Hyperlink-module_icon__1hgGy svg path {\n          fill: #fffef2;\n        }\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6:focus,\n    .Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6:hover {\n      background-color: #fffef2;\n      color: #333;\n    }\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6:focus .Hyperlink-module_icon__1hgGy svg path, .Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6:hover .Hyperlink-module_icon__1hgGy svg path {\n            fill: #333;\n          }\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6.Hyperlink-module_alternate__2FgM_ {\n      border-color: #f6f5e8;\n      background-color: #f6f5e8;\n      color: #333\n    }\n.Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6.Hyperlink-module_alternate__2FgM_:hover,\n      .Hyperlink-module_light__6lcpR.Hyperlink-module_light__6lcpR.Hyperlink-module_blockStyle__3pIk6.Hyperlink-module_alternate__2FgM_:focus {\n        border-color: #fffef2;\n        background-color: #fffef2;\n      }\n.Hyperlink-module_center__2bv1X {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.Hyperlink-module_left__3BZhR {\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n  text-align: left;\n}\n.Hyperlink-module_right__yaOnj {\n  -webkit-box-pack: right;\n      -ms-flex-pack: right;\n          justify-content: right;\n  text-align: right;\n}\n");var g=n.forwardRef((function(n,e){var o,r,i,t,_=n.children,k=n.className,c=n.dataTestRef,u=n.hasTargetInNewWindow,d=void 0!==u&&u,y=n.isAlternate,m=n.isDownload,s=n.onClick,g=n.style,b=void 0===g?"Internal No Icon Link":g,H=n.tabIndex,x=n.textAlign,I=void 0===x?"left":x,w=n.theme,L=void 0===w?"dark":w,v=n.title,R=n.url,N=function(n){return!!h(["External No Icon Link","External Text Link","Internal No Icon Link","Internal Text Link"],n)}(b),E=function(n){return!!h(["External Button Link","External No Icon Button Link","External No Icon Link","External Text Link"],n)}(b),S=function(n){return!!h(["External Button Link","External Text Link","Internal Button Link","Internal Text Link"],n)}(b),T=d?"_blank":"_self",z=a.default(f.base,((o={})[f.blockStyle]=!N,o),((r={})[f.hasIcon]=S,r),((i={})[f.hasExternalIcon]=E&&S,i),((t={})[f.alternate]=y,t),f[I],f[L],k),F="";return F=E?"rightUpArrow":"rightArrow",p.default.createElement("a",{className:z,"data-test-ref":c,download:m,href:R,onClick:s,ref:e,tabIndex:H,target:T,title:v},_,S&&p.default.createElement(p.default.Fragment,null," ",p.default.createElement("i",{"aria-hidden":"true",className:f.icon},p.default.createElement(l.Icon,{height:12,name:F,theme:L,width:12}))))}));exports.EXTERNAL_NO_ICON_TEXT_LINK="External No Icon Link",exports.EXTERNAL_TEXT_LINK="External Text Link",exports.Hyperlink=g,exports.INTERNAL_BUTTON_LINK="Internal Button Link",exports.INTERNAL_NO_ICON_BUTTON_LINK="Internal No Icon Button Link",exports.INTERNAL_NO_ICON_TEXT_LINK="Internal No Icon Link",exports.INTERNAL_TEXT_LINK="Internal Text Link";
