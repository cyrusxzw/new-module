"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),n=require("classnames"),o=require("../../sharedChunks/Loading.js"),t=require("../../sharedChunks/Heading.js"),i=require("../../sharedChunks/style-inject.es.js"),r=require("moment"),a=require("../../sharedChunks/Hyperlink.js");require("../../sharedChunks/viewports.js");var l=require("../../sharedChunks/Icon.js"),d=require("../../sharedChunks/Button.js"),u=require("../../sharedChunks/debounce.js"),s=require("../../sharedChunks/isSymbol.js");function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var t=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,t.get?t:{enumerable:!0,get:function(){return e[o]}})}})),n.default=e,Object.freeze(n)}require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("react-uid");var _=m(e),p=m(n),b=m(r),x=Object.freeze({__proto__:null,GREY_60:"#b3ada5",HIGHLIGHT_GREEN:"#007544",HIGHLIGHT_BLUE:"#114094",HIGHLIGHT_ORANGE:"#c67330"}),k="AudioHeader-module_base__2R0Mj",f="AudioHeader-module_artistName__17qVd";i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.AudioHeader-module_base__2R0Mj {\n  margin-bottom: 20px;\n}\n.AudioHeader-module_artistName__17qVd {\n  color: #666;\n}\n");var g=_.default.memo((function(e){return _.default.createElement("header",{className:k},_.default.createElement(t.Heading,{className:f,isFlush:!0,level:"3",size:"xXSmall"},e.artistName),_.default.createElement(t.Heading,{hasSerifFont:!0,isFlush:!0,level:"4",size:"medium"},e.trackTitle))})),h={base:"PausePlayButton-module_base__2Iu7e",disabled:"PausePlayButton-module_disabled__24JGR",orange:"PausePlayButton-module_orange__JlnWz",green:"PausePlayButton-module_green__tyJ1g",blue:"PausePlayButton-module_blue__WMovI",iconPlay:"PausePlayButton-module_iconPlay__1EpAz",iconPause:"PausePlayButton-module_iconPause__3dBUB",hidden:"PausePlayButton-module_hidden__2vLNq"};i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.PausePlayButton-module_base__2Iu7e {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 47px;\n  height: 47px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 15px;\n  border: 1px solid #333;\n  margin: 0 15px;\n  border-radius: 100%;\n  line-height: 1;\n  -webkit-transition: border-color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: border-color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.PausePlayButton-module_base__2Iu7e.PausePlayButton-module_disabled__24JGR {\n    border-color: #999;\n  }\n.PausePlayButton-module_orange__JlnWz:not([disabled]):hover {\n  border-color: #c67330;\n}\n.PausePlayButton-module_orange__JlnWz:not([disabled]):hover svg {\n    fill: #c67330;\n  }\n.PausePlayButton-module_green__tyJ1g:not([disabled]):hover {\n  border-color: #007544;\n}\n.PausePlayButton-module_green__tyJ1g:not([disabled]):hover svg {\n    fill: #007544;\n  }\n.PausePlayButton-module_blue__WMovI:not([disabled]):hover {\n  border-color: #114094;\n}\n.PausePlayButton-module_blue__WMovI:not([disabled]):hover svg {\n    fill: #114094;\n  }\n.PausePlayButton-module_iconPlay__1EpAz {\n  position: absolute;\n  top: 15px;\n  opacity: 1;\n  -webkit-transform: translateX(1px);\n          transform: translateX(1px);\n  -webkit-transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.PausePlayButton-module_iconPlay__1EpAz.PausePlayButton-module_disabled__24JGR {\n    fill: #999;\n  }\n.PausePlayButton-module_iconPause__3dBUB {\n  position: absolute;\n  top: 15px;\n  opacity: 1;\n  -webkit-transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.PausePlayButton-module_iconPause__3dBUB.PausePlayButton-module_disabled__24JGR {\n    fill: #999;\n  }\n.PausePlayButton-module_hidden__2vLNq {\n  opacity: 0;\n}\n");var w=_.default.memo((function(e){var n,o,t,i,r,a=e.copy,u=e.isLoading,s=void 0!==u&&u,m=e.isPlaying,c=void 0!==m&&m,b=e.onClick,x=e.progressColor,k=void 0===x?"orange":x;return _.default.createElement(d.Button,{className:p.default(h.base,h[k],(n={},n[h.disabled]=s,n)),isEnabled:!s,isInline:!0,onClick:b,title:s?null==a?void 0:a.loading:c?null==a?void 0:a.pause:null==a?void 0:a.play},_.default.createElement(l.Icon,{className:p.default(h.iconPlay,(o={},o[h.hidden]=c,o),(t={},t[h.disabled]=s,t)),height:15,name:"play",theme:"dark",width:15}),_.default.createElement(l.Icon,{className:p.default(h.iconPause,(i={},i[h.hidden]=!c,i),(r={},r[h.disabled]=s,r)),height:15,name:"pause",theme:"dark",width:15}))})),y={icon:"SeekButton-module_icon__37sV3",disabled:"SeekButton-module_disabled__1yk8J",orange:"SeekButton-module_orange__1l9xj",green:"SeekButton-module_green__3TjNv",blue:"SeekButton-module_blue__2XKxL",forward:"SeekButton-module_forward__3SDuZ"};i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.SeekButton-module_icon__37sV3 {\n  -webkit-transition: fill 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: fill 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.SeekButton-module_icon__37sV3.SeekButton-module_disabled__1yk8J {\n    fill: #999;\n  }\n.SeekButton-module_orange__1l9xj:not([disabled]):hover .SeekButton-module_icon__37sV3 {\n    fill: #c67330;\n  }\n.SeekButton-module_green__3TjNv:not([disabled]):hover .SeekButton-module_icon__37sV3 {\n    fill: #007544;\n  }\n.SeekButton-module_blue__2XKxL:not([disabled]):hover .SeekButton-module_icon__37sV3 {\n    fill: #114094;\n  }\n.SeekButton-module_forward__3SDuZ {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n");var B=_.default.memo((function(e){var n,o,t=e.copy,i=e.direction,r=void 0===i?"forward":i,a=e.isLoading,u=void 0!==a&&a,s=e.onClick,m=e.progressColor,c=void 0===m?"orange":m,b=p.default(y[c],((n={})[y.forward]="forward"===r,n));return _.default.createElement(d.Button,{className:b,isEnabled:!u,isInline:!0,onClick:s,title:null==t?void 0:t.title},_.default.createElement(l.Icon,{className:p.default(y.icon,(o={},o[y.disabled]=u,o)),height:20,name:"seek",width:20}))})),v={base:"AudioFooter-module_base__2P0Zr",time:"AudioFooter-module_time__1X9qY",disabled:"AudioFooter-module_disabled__7t7Du",controls:"AudioFooter-module_controls__3cHmc",download:"AudioFooter-module_download__RzIb9",downloadButton:"AudioFooter-module_downloadButton__faGQB",downloadButtonIcon:"AudioFooter-module_downloadButtonIcon__Eef1l",orange:"AudioFooter-module_orange__3eAy1",green:"AudioFooter-module_green__3zWHH",blue:"AudioFooter-module_blue__3oECw"};i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.AudioFooter-module_base__2P0Zr {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 35px;\n  margin-top: 20px;\n}\n@media (min-width: 640px) {\n.AudioFooter-module_base__2P0Zr {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding-bottom: 0\n}\n  }\n.AudioFooter-module_time__1X9qY {\n  margin: auto 0;\n  font-size: 15px;\n  -webkit-transition: color 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: color 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.AudioFooter-module_time__1X9qY.AudioFooter-module_disabled__7t7Du {\n    color: #999;\n  }\n@media (max-width: 639px) {\n.AudioFooter-module_time__1X9qY {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    font-size: 14px\n}\n  }\n@media (min-width: 640px) {\n.AudioFooter-module_time__1X9qY {\n    width: calc(100% * 1 / 3)\n}\n  }\n.AudioFooter-module_controls__3cHmc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 640px) {\n.AudioFooter-module_controls__3cHmc {\n    width: calc(100% * 1 / 3)\n}\n  }\n.AudioFooter-module_download__RzIb9 {\n  margin: auto 0;\n  text-align: right;\n}\n@media (min-width: 640px) {\n.AudioFooter-module_download__RzIb9 {\n    width: calc(100% * 1 / 3)\n}\n  }\n@media (max-width: 639px) {\n.AudioFooter-module_download__RzIb9 {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    font-size: 14px\n}\n  }\n.AudioFooter-module_downloadButton__faGQB {\n  font-size: 15px;\n  -webkit-transition: color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (max-width: 639px) {\n.AudioFooter-module_downloadButton__faGQB {\n    font-size: 14px\n}\n  }\n.AudioFooter-module_downloadButton__faGQB .AudioFooter-module_downloadButtonIcon__Eef1l {\n    -webkit-transition: fill 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: fill 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n.AudioFooter-module_orange__3eAy1 .AudioFooter-module_downloadButton__faGQB:hover {\n      color: #c67330;\n    }\n.AudioFooter-module_green__3zWHH .AudioFooter-module_downloadButton__faGQB:hover {\n      color: #007544;\n    }\n.AudioFooter-module_blue__3oECw .AudioFooter-module_downloadButton__faGQB:hover {\n      color: #114094;\n    }\n.AudioFooter-module_orange__3eAy1 .AudioFooter-module_downloadButton__faGQB:hover .AudioFooter-module_downloadButtonIcon__Eef1l {\n      fill: #c67330;\n    }\n.AudioFooter-module_green__3zWHH .AudioFooter-module_downloadButton__faGQB:hover .AudioFooter-module_downloadButtonIcon__Eef1l {\n      fill: #007544;\n    }\n.AudioFooter-module_blue__3oECw .AudioFooter-module_downloadButton__faGQB:hover .AudioFooter-module_downloadButtonIcon__Eef1l {\n      fill: #114094;\n    }\n");var P=_.default.memo((function(e){var n,o=e.audioUrl,t=e.copy,i=e.duration,r=e.isLoading,d=e.isPlaying,u=e.onSeekBackwardButtonClick,s=e.onSeekForwardButtonClick,m=e.onPlayPauseButtonClick,c=e.progress,x=e.progressColor,k=void 0===x?"orange":x;return _.default.createElement("footer",{className:p.default(v.base,v[k])},_.default.createElement("time",{className:p.default(v.time,(n={},n[v.disabled]=r,n))},b.default.utc(1e3*c).format("mm:ss")," /"," ",b.default.utc(1e3*i).format("mm:ss")),_.default.createElement("div",{className:v.controls},_.default.createElement(B,{copy:{title:null==t?void 0:t.seekForward},direction:"forward",isLoading:r,onClick:s,progressColor:k}),_.default.createElement(w,{copy:{loading:null==t?void 0:t.loading,pause:null==t?void 0:t.pause,play:null==t?void 0:t.play},isLoading:r,isPlaying:d,onClick:m,progressColor:k}),_.default.createElement(B,{copy:{title:null==t?void 0:t.seekBackward},direction:"backward",isLoading:r,onClick:u,progressColor:k})),_.default.createElement("div",{className:v.download},_.default.createElement(a.Hyperlink,{className:v.downloadButton,hasTargetInNewWindow:!0,isDownload:!0,style:a.EXTERNAL_NO_ICON_TEXT_LINK,title:null==t?void 0:t.downloadTitle,url:o},(null==t?void 0:t.downloadLabel)+" ",_.default.createElement(l.Icon,{className:v.downloadButtonIcon,height:13,name:"download",width:13}))))}));var A=function(e,n,o){var t=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return s.isObject_1(o)&&(t="leading"in o?!!o.leading:t,i="trailing"in o?!!o.trailing:i),u.debounce_1(e,n,{leading:t,maxWait:n,trailing:i})},I=function(e,n){return"green"===e?n.HIGHLIGHT_GREEN:"blue"===e?n.HIGHLIGHT_BLUE:n.HIGHLIGHT_ORANGE},C=function(n,o){var t=e.useRef(null),i=e.useRef(null),r=e.useRef(null),a=e.useState(0),l=a[0],d=a[1],u=e.useState(!0),s=u[0],m=u[1],_=e.useState(!1),p=_[0],b=_[1],k=e.useState(0),f=k[0],g=k[1];function h(){b((function(e){return!e})),i.current.playPause()}return e.useEffect((function(){Promise.resolve().then((function(){return c(require("wavesurfer.js"))})).then((function(e){var a=e.default||e;if(t.current){i.current=a.create({backend:"MediaElement",barGap:2,barWidth:1,container:t.current,cursorColor:"transparent",cursorWidth:1,height:80,progressColor:I(n,x),responsive:!0,skipLength:30,waveColor:"#b3ada5"}),i.current.load(r.current);var l=A((function(e){g(e)}),1e3);return i.current.on("audioprocess",l),i.current.on("waveform-ready",(function(){m(!1),d(i.current.getDuration()),o&&h()})),function(){i.current.unAll(),i.current.destroy()}}}))}),[n,o]),{duration:l,isLoading:s,isPlaying:p,progress:f,togglePlaying:h,trackRef:r,waveformRef:t,wavesurfer:i}},E="Audio-module_base__zNk7y",j="Audio-module_disabled__bft9W",F="Audio-module_waveContainer__34_M3",z="Audio-module_loading__fp-Rx",N="Audio-module_waveform__3u9B9";i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Audio-module_base__zNk7y {\n  display: block;\n  width: auto;\n  max-width: 800px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid #666;\n  margin: 20px 10px;\n  background: transparent;\n  font-family: 'Suisse Regular', sans-serif;\n  -webkit-transition: border-color 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: border-color 400ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.Audio-module_base__zNk7y.Audio-module_disabled__bft9W {\n    border-color: #999;\n  }\n@media (min-width: 640px) {\n.Audio-module_base__zNk7y {\n    margin: 20px 40px\n}\n  }\n.Audio-module_base__zNk7y,\n  .Audio-module_base__zNk7y * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.Audio-module_waveContainer__34_M3 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.Audio-module_loading__fp-Rx {\n  width: 100%;\n  margin: auto 0;\n}\n.Audio-module_waveform__3u9B9 {\n  overflow: hidden;\n  width: 100%;\n  height: calc(80px / 2);\n}\n.Audio-module_hidden__2QHnj {\n  opacity: 0;\n}\n");exports.Audio=function(e){var n,t=e.artistName,i=e.audioUrl,r=e.className,a=e.copy,l=e.hasAutoPlay,d=void 0!==l&&l,u=e.id,s=e.progressColor,m=void 0===s?"orange":s,c=e.trackTitle,b=C(m,d),x=b.duration,k=b.isLoading,f=b.isPlaying,h=b.progress,w=b.togglePlaying,y=b.trackRef,B=b.waveformRef,v=b.wavesurfer,A=p.default(E,((n={})[j]=k,n),r);return _.default.createElement("article",{className:A,id:u},_.default.createElement(g,{artistName:t,trackTitle:c}),_.default.createElement("div",{className:F},_.default.createElement(o.Loading,{className:z,isLoading:k}),_.default.createElement("figure",{className:N,ref:B}),_.default.createElement("audio",{ref:y,src:i})),_.default.createElement(P,{audioUrl:i,copy:{downloadLabel:null==a?void 0:a.downloadLabel,downloadTitle:null==a?void 0:a.downloadTitle,loading:null==a?void 0:a.loading,pause:null==a?void 0:a.pause,play:null==a?void 0:a.play,seekBackward:null==a?void 0:a.seekBackward,seekForward:null==a?void 0:a.seekForward},duration:x,isLoading:k,isPlaying:f,onPlayPauseButtonClick:function(){w()},onSeekBackwardButtonClick:function(){v.current.skipBackward()},onSeekForwardButtonClick:function(){v.current.skipForward()},progress:h,progressColor:m}))};
