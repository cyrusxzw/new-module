"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),n=require("classnames"),o=require("../../sharedChunks/Loading.js"),t=require("../../sharedChunks/Heading.js"),a=require("../../sharedChunks/style-inject.es.js"),r=require("moment"),i=require("../../sharedChunks/Hyperlink.js");require("../../sharedChunks/viewports.js");var l=require("../../sharedChunks/Icon.js"),d=require("../../sharedChunks/Button.js"),u=require("../../sharedChunks/debounce.js"),s=require("../../sharedChunks/isSymbol.js");function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var t=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,t.get?t:{enumerable:!0,get:function(){return e[o]}})}})),n.default=e,Object.freeze(n)}require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("react-uid");var p=m(e),b=m(n),_=m(r),x=Object.freeze({__proto__:null,GREY_60:"#b3ada5",HIGHLIGHT_GREEN:"#007544",HIGHLIGHT_BLUE:"#114094",HIGHLIGHT_ORANGE:"#c67330"}),h="AudioHeader-module_base__2R0Mj",w="AudioHeader-module_artistName__17qVd";a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.AudioHeader-module_base__2R0Mj {\n  margin-bottom: 20px;\n}\n.AudioHeader-module_artistName__17qVd {\n  color: #666;\n}\n");var k=p.default.memo((function(e){return p.default.createElement("header",{className:h},p.default.createElement(t.Heading,{className:w,isFlush:!0,level:"3",size:"xXSmall"},e.artistName),p.default.createElement(t.Heading,{hasSerifFont:!0,isFlush:!0,level:"4",size:"medium"},e.trackTitle))})),g={base:"PausePlayButton-module_base__2Iu7e",disabled:"PausePlayButton-module_disabled__24JGR",orange:"PausePlayButton-module_orange__JlnWz",green:"PausePlayButton-module_green__tyJ1g",blue:"PausePlayButton-module_blue__WMovI",iconPlay:"PausePlayButton-module_iconPlay__1EpAz",iconPause:"PausePlayButton-module_iconPause__3dBUB",hidden:"PausePlayButton-module_hidden__2vLNq"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.PausePlayButton-module_base__2Iu7e {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 47px;\n  height: 47px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 15px;\n  border: 1px solid #333;\n  margin: 0 15px;\n  border-radius: 100%;\n  line-height: 1;\n  -webkit-transition: border-color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: border-color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.PausePlayButton-module_base__2Iu7e.PausePlayButton-module_disabled__24JGR {\n    border-color: #999;\n  }\n.PausePlayButton-module_orange__JlnWz:not([disabled]):hover {\n  border-color: #c67330;\n}\n.PausePlayButton-module_orange__JlnWz:not([disabled]):hover svg {\n    fill: #c67330;\n  }\n.PausePlayButton-module_green__tyJ1g:not([disabled]):hover {\n  border-color: #007544;\n}\n.PausePlayButton-module_green__tyJ1g:not([disabled]):hover svg {\n    fill: #007544;\n  }\n.PausePlayButton-module_blue__WMovI:not([disabled]):hover {\n  border-color: #114094;\n}\n.PausePlayButton-module_blue__WMovI:not([disabled]):hover svg {\n    fill: #114094;\n  }\n.PausePlayButton-module_iconPlay__1EpAz {\n  position: absolute;\n  top: 15px;\n  opacity: 1;\n  -webkit-transform: translateX(1px);\n          transform: translateX(1px);\n  -webkit-transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.PausePlayButton-module_iconPlay__1EpAz.PausePlayButton-module_disabled__24JGR {\n    fill: #999;\n  }\n.PausePlayButton-module_iconPause__3dBUB {\n  position: absolute;\n  top: 15px;\n  opacity: 1;\n  -webkit-transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.PausePlayButton-module_iconPause__3dBUB.PausePlayButton-module_disabled__24JGR {\n    fill: #999;\n  }\n.PausePlayButton-module_hidden__2vLNq {\n  opacity: 0;\n}\n");var f=p.default.memo((function(e){var n,o,t,a,r,i=e.copy,u=e.isLoading,s=void 0!==u&&u,m=e.isPlaying,c=void 0!==m&&m,_=e.onClick,x=e.progressColor,h=void 0===x?"orange":x;return p.default.createElement(d.Button,{className:b.default(g.base,g[h],(n={},n[g.disabled]=s,n)),isEnabled:!s,isInline:!0,onClick:_,title:s?null==i?void 0:i.loading:c?null==i?void 0:i.pause:null==i?void 0:i.play},p.default.createElement(l.Icon,{className:b.default(g.iconPlay,(o={},o[g.hidden]=c,o),(t={},t[g.disabled]=s,t)),height:15,name:"play",theme:"dark",width:15}),p.default.createElement(l.Icon,{className:b.default(g.iconPause,(a={},a[g.hidden]=!c,a),(r={},r[g.disabled]=s,r)),height:15,name:"pause",theme:"dark",width:15}))})),y={icon:"SeekButton-module_icon__37sV3",disabled:"SeekButton-module_disabled__1yk8J",orange:"SeekButton-module_orange__1l9xj",green:"SeekButton-module_green__3TjNv",blue:"SeekButton-module_blue__2XKxL",forward:"SeekButton-module_forward__3SDuZ"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.SeekButton-module_icon__37sV3 {\n  -webkit-transition: fill 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: fill 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.SeekButton-module_icon__37sV3.SeekButton-module_disabled__1yk8J {\n    fill: #999;\n  }\n.SeekButton-module_orange__1l9xj:not([disabled]):hover .SeekButton-module_icon__37sV3 {\n    fill: #c67330;\n  }\n.SeekButton-module_green__3TjNv:not([disabled]):hover .SeekButton-module_icon__37sV3 {\n    fill: #007544;\n  }\n.SeekButton-module_blue__2XKxL:not([disabled]):hover .SeekButton-module_icon__37sV3 {\n    fill: #114094;\n  }\n.SeekButton-module_forward__3SDuZ {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n");var v=p.default.memo((function(e){var n,o,t=e.copy,a=e.direction,r=void 0===a?"forward":a,i=e.isLoading,u=void 0!==i&&i,s=e.onClick,m=e.progressColor,c=void 0===m?"orange":m,_=b.default(y[c],((n={})[y.forward]="forward"===r,n));return p.default.createElement(d.Button,{className:_,isEnabled:!u,isInline:!0,onClick:s,title:null==t?void 0:t.title},p.default.createElement(l.Icon,{className:b.default(y.icon,(o={},o[y.disabled]=u,o)),height:20,name:"seek",width:20}))})),B={base:"AudioFooter-module_base__2P0Zr",time:"AudioFooter-module_time__1X9qY",disabled:"AudioFooter-module_disabled__7t7Du",controls:"AudioFooter-module_controls__3cHmc",download:"AudioFooter-module_download__RzIb9",downloadButton:"AudioFooter-module_downloadButton__faGQB",downloadButtonIcon:"AudioFooter-module_downloadButtonIcon__Eef1l",orange:"AudioFooter-module_orange__3eAy1",green:"AudioFooter-module_green__3zWHH",blue:"AudioFooter-module_blue__3oECw"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.AudioFooter-module_base__2P0Zr {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 35px;\n  margin-top: 20px;\n}\n@media (min-width: 640px) {\n.AudioFooter-module_base__2P0Zr {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding-bottom: 0\n}\n  }\n.AudioFooter-module_time__1X9qY {\n  margin: auto 0;\n  font-size: 15px;\n  -webkit-transition: color 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: color 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.AudioFooter-module_time__1X9qY.AudioFooter-module_disabled__7t7Du {\n    color: #999;\n  }\n@media (max-width: 639px) {\n.AudioFooter-module_time__1X9qY {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    font-size: 14px\n}\n  }\n@media (min-width: 640px) {\n.AudioFooter-module_time__1X9qY {\n    width: calc(100% * 1 / 3)\n}\n  }\n.AudioFooter-module_controls__3cHmc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 640px) {\n.AudioFooter-module_controls__3cHmc {\n    width: calc(100% * 1 / 3)\n}\n  }\n.AudioFooter-module_download__RzIb9 {\n  margin: auto 0;\n  text-align: right;\n}\n@media (min-width: 640px) {\n.AudioFooter-module_download__RzIb9 {\n    width: calc(100% * 1 / 3)\n}\n  }\n@media (max-width: 639px) {\n.AudioFooter-module_download__RzIb9 {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    font-size: 14px\n}\n  }\n.AudioFooter-module_downloadButton__faGQB {\n  font-size: 15px;\n  -webkit-transition: color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (max-width: 639px) {\n.AudioFooter-module_downloadButton__faGQB {\n    font-size: 14px\n}\n  }\n.AudioFooter-module_downloadButton__faGQB .AudioFooter-module_downloadButtonIcon__Eef1l {\n    -webkit-transition: fill 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: fill 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n.AudioFooter-module_orange__3eAy1 .AudioFooter-module_downloadButton__faGQB:hover {\n      color: #c67330;\n    }\n.AudioFooter-module_green__3zWHH .AudioFooter-module_downloadButton__faGQB:hover {\n      color: #007544;\n    }\n.AudioFooter-module_blue__3oECw .AudioFooter-module_downloadButton__faGQB:hover {\n      color: #114094;\n    }\n.AudioFooter-module_orange__3eAy1 .AudioFooter-module_downloadButton__faGQB:hover .AudioFooter-module_downloadButtonIcon__Eef1l {\n      fill: #c67330;\n    }\n.AudioFooter-module_green__3zWHH .AudioFooter-module_downloadButton__faGQB:hover .AudioFooter-module_downloadButtonIcon__Eef1l {\n      fill: #007544;\n    }\n.AudioFooter-module_blue__3oECw .AudioFooter-module_downloadButton__faGQB:hover .AudioFooter-module_downloadButtonIcon__Eef1l {\n      fill: #114094;\n    }\n");var L=p.default.memo((function(e){var n,o=e.audioUrl,t=e.copy,a=e.duration,r=e.isLoading,d=e.isPlaying,u=e.onSeekBackwardButtonClick,s=e.onSeekForwardButtonClick,m=e.onPlayPauseButtonClick,c=e.progress,x=e.progressColor,h=void 0===x?"orange":x;return p.default.createElement("footer",{className:b.default(B.base,B[h])},p.default.createElement("time",{className:b.default(B.time,(n={},n[B.disabled]=r,n))},_.default.utc(1e3*c).format("mm:ss")," /"," ",_.default.utc(1e3*a).format("mm:ss")),p.default.createElement("div",{className:B.controls},p.default.createElement(v,{copy:{title:null==t?void 0:t.seekForward},direction:"forward",isLoading:r,onClick:s,progressColor:h}),p.default.createElement(f,{copy:{loading:null==t?void 0:t.loading,pause:null==t?void 0:t.pause,play:null==t?void 0:t.play},isLoading:r,isPlaying:d,onClick:m,progressColor:h}),p.default.createElement(v,{copy:{title:null==t?void 0:t.seekBackward},direction:"backward",isLoading:r,onClick:u,progressColor:h})),p.default.createElement("div",{className:B.download},p.default.createElement(i.Hyperlink,{className:B.downloadButton,hasTargetInNewWindow:!0,isDownload:!0,style:i.EXTERNAL_NO_ICON_TEXT_LINK,title:null==t?void 0:t.downloadTitle,url:o},(null==t?void 0:t.downloadLabel)+" ",p.default.createElement(l.Icon,{className:B.downloadButtonIcon,height:13,name:"download",width:13}))))}));var E=function(e,n,o){var t=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return s.isObject_1(o)&&(t="leading"in o?!!o.leading:t,a="trailing"in o?!!o.trailing:a),u.debounce_1(e,n,{leading:t,maxWait:n,trailing:a})},P=function(e,n){return"green"===e?n.HIGHLIGHT_GREEN:"blue"===e?n.HIGHLIGHT_BLUE:n.HIGHLIGHT_ORANGE},A=function(n,o){var t=e.useRef(null),a=e.useRef(null),r=e.useRef(null),i=e.useState(0),l=i[0],d=i[1],u=e.useState(!0),s=u[0],m=u[1],p=e.useState(!1),b=p[0],_=p[1],h=e.useState(0),w=h[0],k=h[1],g=function(){_((function(e){return!e})),a.current.playPause()};return e.useEffect((function(){Promise.resolve().then((function(){return c(require("wavesurfer.js"))})).then((function(e){var i=e.default||e;if(t.current){a.current=i.create({backend:"MediaElement",barGap:2,barWidth:1,container:t.current,cursorColor:"transparent",cursorWidth:1,height:80,progressColor:P(n,x),responsive:!0,skipLength:30,waveColor:"#b3ada5"}),a.current.load(r.current);var l=E((function(e){k(e)}),1e3);return a.current.on("audioprocess",l),a.current.on("waveform-ready",(function(){m(!1),d(a.current.getDuration()),o&&g()})),function(){a.current.unAll(),a.current.destroy()}}}))}),[n,o]),{duration:l,isLoading:s,isPlaying:b,progress:w,togglePlaying:g,trackRef:r,waveformRef:t,wavesurfer:a}},C="Audio-module_base__zNk7y",I="Audio-module_disabled__bft9W",S="Audio-module_waveContainer__34_M3",j="Audio-module_loading__fp-Rx",F="Audio-module_waveform__3u9B9";a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Audio-module_base__zNk7y {\n  display: block;\n  width: auto;\n  max-width: 800px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #bcbbb4;\n  margin: 20px 10px;\n  background: transparent;\n  font-family: 'Suisse Regular', sans-serif;\n  -webkit-transition: border-color 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: border-color 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.Audio-module_base__zNk7y.Audio-module_disabled__bft9W {\n    border-color: #999;\n  }\n@media (min-width: 640px) {\n.Audio-module_base__zNk7y {\n    margin: 20px 40px\n}\n  }\n.Audio-module_base__zNk7y,\n  .Audio-module_base__zNk7y * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.Audio-module_waveContainer__34_M3 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.Audio-module_loading__fp-Rx {\n  width: 100%;\n  margin: auto 0;\n}\n.Audio-module_waveform__3u9B9 {\n  overflow: hidden;\n  width: 100%;\n  height: calc(80px / 2);\n}\n.Audio-module_hidden__2QHnj {\n  opacity: 0;\n}\n");exports.Audio=function(e){var n,t=e.artistName,a=e.audioUrl,r=e.className,i=e.copy,l=e.hasAutoPlay,d=void 0!==l&&l,u=e.id,s=e.progressColor,m=void 0===s?"orange":s,c=e.trackTitle,_=A(m,d),x=_.duration,h=_.isLoading,w=_.isPlaying,g=_.progress,f=_.togglePlaying,y=_.trackRef,v=_.waveformRef,B=_.wavesurfer,E=b.default(C,((n={})[I]=h,n),r);return p.default.createElement("article",{className:E,id:u},p.default.createElement(k,{artistName:t,trackTitle:c}),p.default.createElement("div",{className:S},p.default.createElement(o.Loading,{className:j,isLoading:h}),p.default.createElement("figure",{className:F,ref:v}),p.default.createElement("audio",{ref:y,src:a})),p.default.createElement(L,{audioUrl:a,copy:{downloadLabel:null==i?void 0:i.downloadLabel,downloadTitle:null==i?void 0:i.downloadTitle,loading:null==i?void 0:i.loading,pause:null==i?void 0:i.pause,play:null==i?void 0:i.play,seekBackward:null==i?void 0:i.seekBackward,seekForward:null==i?void 0:i.seekForward},duration:x,isLoading:h,isPlaying:w,onPlayPauseButtonClick:function(){f()},onSeekBackwardButtonClick:function(){B.current.skipBackward()},onSeekForwardButtonClick:function(){B.current.skipForward()},progress:g,progressColor:m}))};
