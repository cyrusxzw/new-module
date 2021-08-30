"use strict";var n=require("./tslib.es6.js"),e=require("react"),o=require("classnames"),t=require("./AddToCartButton.js"),i=require("./Button.js"),d=require("./Heading.js"),r=require("./Hyperlink.js"),a=require("./Image.js"),c=require("./LinkButtonGroup.js"),l=require("./Video.js"),m=require("./style-inject.es.js");function u(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var s=u(e),p=u(o),_={base:"ProductAccordionItem-module_base__CB7Pp",compressed:"ProductAccordionItem-module_compressed__1U05P",closedForegroundImage:"ProductAccordionItem-module_closedForegroundImage__3rvH8",backgroundVideo:"ProductAccordionItem-module_backgroundVideo__3Oexe",backgroundImage:"ProductAccordionItem-module_backgroundImage__xOfjv",content:"ProductAccordionItem-module_content__3YgPm",hidden:"ProductAccordionItem-module_hidden__3m4tk",expanded:"ProductAccordionItem-module_expanded__37prG",open:"ProductAccordionItem-module_open__2um6J",expandedContent:"ProductAccordionItem-module_expandedContent__cXApF",expandedImage:"ProductAccordionItem-module_expandedImage__3Q4GG",expandedText:"ProductAccordionItem-module_expandedText__25sKv",closedStateForegroundImage:"ProductAccordionItem-module_closedStateForegroundImage__cjlM4",closeButton:"ProductAccordionItem-module_closeButton__1PirO",openButton:"ProductAccordionItem-module_openButton__1ftki",light:"ProductAccordionItem-module_light__Yv6gq",background:"ProductAccordionItem-module_background__s_hoU",openCopy:"ProductAccordionItem-module_openCopy__7A5al",closedCopy:"ProductAccordionItem-module_closedCopy__3Kb-8",openStateHeading:"ProductAccordionItem-module_openStateHeading__1k57z",openStateEyebrow:"ProductAccordionItem-module_openStateEyebrow__3kpW9"};m.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductAccordionItem-module_base__CB7Pp {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  min-height: 90vh;\n  -webkit-transition-delay: 0ms;\n          transition-delay: 0ms;\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transition-property: width;\n  transition-property: width;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (min-width: 640px) {\n.ProductAccordionItem-module_base__CB7Pp {\n    min-height: 70vh\n}\n  }\n@media (min-width: 2400px) {\n.ProductAccordionItem-module_base__CB7Pp {\n    min-height: 80vh\n}\n  }\n.ProductAccordionItem-module_base__CB7Pp,\n  .ProductAccordionItem-module_base__CB7Pp * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n    width: 10%;\n    cursor: pointer;\n  }\n@media (max-width: 639px) {\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n      width: 100%;\n      cursor: default\n  }\n    }\n@media (min-width: 1600px) {\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n      width: 20%\n  }\n    }\n@media (min-width: 1920px) {\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n      width: 33.33%\n  }\n    }\n@media (min-width: 2400px) {\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n      width: 41%\n  }\n    }\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 {\n  display: block;\n  margin: 0 auto;\n}\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n    width: auto;\n    max-width: 100%;\n    max-height: 240px;\n  }\n@media (min-width: 640px) {\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n      max-height: 220px\n  }\n    }\n@media (min-width: 1220px) {\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n      max-height: 280px\n  }\n    }\n@media (min-width: 1600px) {\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n      max-height: 360px\n  }\n    }\n@media (min-width: 1920px) {\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n      max-height: 400px\n  }\n    }\n@media (min-width: 2400px) {\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n      max-height: 550px\n  }\n    }\n.ProductAccordionItem-module_backgroundVideo__3Oexe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  width: 100%;\n\n  /** to override media query height */\n  height: 100% !important;\n}\n.ProductAccordionItem-module_backgroundImage__xOfjv {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ProductAccordionItem-module_backgroundImage__xOfjv img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n  }\n.ProductAccordionItem-module_content__3YgPm {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  max-width: 540px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 40px;\n  padding-right: 20px;\n  padding-bottom: 60px;\n  padding-left: 20px;\n  margin: 0 auto;\n  text-align: center;\n  -webkit-transition-delay: 0ms;\n          transition-delay: 0ms;\n  -webkit-transition-duration: 400ms;\n          transition-duration: 400ms;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_content__3YgPm {\n    padding-top: 60px;\n    padding-right: 40px;\n    padding-left: 40px\n}\n  }\n.ProductAccordionItem-module_content__3YgPm.ProductAccordionItem-module_hidden__3m4tk {\n    opacity: 0;\n    pointer-events: none;\n  }\n.ProductAccordionItem-module_expanded__37prG {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition-delay: 0ms;\n          transition-delay: 0ms;\n  -webkit-transition-duration: 100ms;\n          transition-duration: 100ms;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.ProductAccordionItem-module_expanded__37prG.ProductAccordionItem-module_open__2um6J {\n    opacity: 1;\n    pointer-events: auto;\n  }\n.ProductAccordionItem-module_expandedContent__cXApF {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px;\n  opacity: 0;\n  -webkit-transition-delay: 800ms;\n          transition-delay: 800ms;\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1),\n    cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1),\n    cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (max-width: 1024px) {\n.ProductAccordionItem-module_expandedContent__cXApF {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column\n}\n  }\n@media (min-width: 640px) {\n.ProductAccordionItem-module_expandedContent__cXApF {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 34px\n}\n  }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_expandedContent__cXApF {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding: 40px\n}\n  }\n.ProductAccordionItem-module_open__2um6J .ProductAccordionItem-module_expandedContent__cXApF {\n  opacity: 1;\n}\n.ProductAccordionItem-module_expandedImage__3Q4GG {\n  position: relative;\n  min-height: 100px;\n  max-height: 280px;\n}\n@media (max-width: 1024px) {\n.ProductAccordionItem-module_expandedImage__3Q4GG {\n    width: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin-top: 60px;\n    margin-bottom: 30px\n}\n\n    .ProductAccordionItem-module_expandedImage__3Q4GG img {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      -o-object-fit: contain;\n         object-fit: contain;\n      -o-object-position: center bottom;\n         object-position: center bottom;\n    }\n  }\n@media (min-width: 640px) {\n.ProductAccordionItem-module_expandedImage__3Q4GG {\n    max-height: 350px\n}\n  }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_expandedImage__3Q4GG {\n    width: 33.33%;\n    max-height: 420px;\n    margin-right: 40px;\n    margin-bottom: 0\n}\n  }\n@media (min-width: 640px) {\n.ProductAccordionItem-module_expandedText__25sKv {\n    width: 100%\n}\n  }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_expandedText__25sKv {\n    width: 66.66%;\n    max-width: 640px\n}\n  }\n.ProductAccordionItem-module_closedStateForegroundImage__cjlM4 {\n  display: block;\n  width: 100%;\n  margin-top: auto;\n  cursor: pointer;\n}\n.ProductAccordionItem-module_closedStateForegroundImage__cjlM4:focus {\n    outline: 0;\n  }\n.ProductAccordionItem-module_closeButton__1PirO {\n  position: absolute;\n  z-index: 1;\n  top: 40px;\n  right: 40px;\n  margin: 0;\n  font-size: 16px;\n}\n.ProductAccordionItem-module_openButton__1ftki {\n  margin-bottom: 40px;\n  font-size: 16px;\n}\n.ProductAccordionItem-module_openButton__1ftki,\n.ProductAccordionItem-module_closeButton__1PirO {\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #333;\n  cursor: pointer;\n  font-family: 'Suisse Regular', sans-serif;\n  text-decoration: underline;\n}\n.ProductAccordionItem-module_openButton__1ftki:focus, .ProductAccordionItem-module_closeButton__1PirO:focus {\n    outline: 0;\n  }\n.ProductAccordionItem-module_openButton__1ftki.ProductAccordionItem-module_light__Yv6gq, .ProductAccordionItem-module_closeButton__1PirO.ProductAccordionItem-module_light__Yv6gq {\n    color: #fffef2;\n  }\n.ProductAccordionItem-module_background__s_hoU {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  height: 100%;\n}\n.ProductAccordionItem-module_openCopy__7A5al,\n.ProductAccordionItem-module_closedCopy__3Kb-8 {\n  padding: 0;\n  margin-bottom: 30px;\n  color: #333;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n}\n.ProductAccordionItem-module_openCopy__7A5al.ProductAccordionItem-module_light__Yv6gq, .ProductAccordionItem-module_closedCopy__3Kb-8.ProductAccordionItem-module_light__Yv6gq {\n    color: #fffef2;\n  }\n.ProductAccordionItem-module_openCopy__7A5al p:last-child, .ProductAccordionItem-module_closedCopy__3Kb-8 p:last-child {\n    margin-bottom: 0;\n  }\n.ProductAccordionItem-module_openStateHeading__1k57z {\n  margin-bottom: 20px;\n}\n.ProductAccordionItem-module_openStateEyebrow__3kpW9 {\n  margin-bottom: 20px;\n}\n.ProductAccordionItem-module_openCopy__7A5al {\n  margin-bottom: 30px;\n}\n");var x=e.forwardRef((function(e,o){var m,u,x,g,b=e.addToCartCopy,h=e.callbackWithRef,w=e.closedState,I=e.id,f=e.index,k=e.onPromoClick,P=e.openState,A=e.resetAccordion,v=e.toggleAccordion,y=e.visualState;null==h||h(o);var C="compressed"===y,E="expanded"===y,B=C?function(){return A()}:void 0,S=C?function(){return A()}:void 0,j={backgroundColor:null==w?void 0:w.backgroundColour},F=p.default(_.base,((m={})[_.compressed]=C,m)),L=p.default(_.background,((u={})[_.hidden]=E,u)),z=p.default(_.content,((x={})[_.hidden]=E||C,x));return s.default.createElement("div",{className:F,"data-testid":"data-testid-ProductAccordionItem",id:I,onClick:B,onKeyDown:S,ref:o,role:"button",tabIndex:C?0:-1},s.default.createElement("div",{className:L,style:j},"Video"===(null==w?void 0:w.background)&&s.default.createElement(l.Video,n.__assign({className:_.backgroundVideo,hasAllowAudio:!1,hasAutoplay:!0,hasControls:!1,hasLoop:!0},null==w?void 0:w.backgroundVideo)),"Image"===(null==w?void 0:w.background)&&s.default.createElement(a.Image,n.__assign({className:_.backgroundImage},null==w?void 0:w.backgroundImage))),s.default.createElement("div",{className:z},(null==w?void 0:w.title)&&s.default.createElement(d.Heading,{hasSerifFont:null==w?void 0:w.hasSerifFont,level:"2",size:"xLarge",theme:null==w?void 0:w.theme},null==w?void 0:w.title),(null==w?void 0:w.eyebrow)&&s.default.createElement(d.Heading,{hasMediumWeightFont:!0,level:"4",size:"xSmall",theme:null==w?void 0:w.theme},null==w?void 0:w.eyebrow),s.default.createElement("div",{className:p.default(_.closedCopy,_[null==w?void 0:w.theme])},null==w?void 0:w.copy),s.default.createElement("button",{className:p.default(_.openButton,_[null==w?void 0:w.theme]),onClick:function(){v(f,!0),null==k||k()}},null==w?void 0:w.openButtonText),s.default.createElement(i.Button,{className:_.closedStateForegroundImage,isInline:!0,onClick:function(){v(f,!0),null==k||k()}},s.default.createElement(a.Image,n.__assign({className:p.default(_.closedForegroundImage)},null==w?void 0:w.foregroundImage)))),s.default.createElement("div",{className:p.default(_.expanded,(g={},g[_.open]=E,g)),style:{backgroundColor:null==P?void 0:P.backgroundColour}},"Video"===(null==P?void 0:P.background)&&s.default.createElement(l.Video,n.__assign({className:_.backgroundVideo,hasAllowAudio:!1,hasAutoplay:!0,hasControls:!1,hasLoop:!0},null==P?void 0:P.backgroundVideo)),"Image"===(null==P?void 0:P.background)&&s.default.createElement(a.Image,n.__assign({className:_.backgroundImage},null==P?void 0:P.backgroundImage)),s.default.createElement("div",{className:_.expandedContent},s.default.createElement("div",{className:_.expandedImage},s.default.createElement(a.Image,n.__assign({},null==P?void 0:P.foregroundImage))),s.default.createElement("div",{className:_.expandedText},(null==P?void 0:P.title)&&s.default.createElement(d.Heading,{className:_.openStateHeading,hasSerifFont:null==P?void 0:P.hasSerifFont,level:"2",size:"xLarge",theme:null==P?void 0:P.theme},null==P?void 0:P.title),(null==P?void 0:P.eyebrow)&&s.default.createElement(d.Heading,{className:_.openStateEyebrow,hasMediumWeightFont:!0,level:"4",size:"xSmall",theme:null==P?void 0:P.theme},null==P?void 0:P.eyebrow),s.default.createElement("div",{className:p.default(_.openCopy,_[null==P?void 0:P.theme])},null==P?void 0:P.copy),s.default.createElement(c.LinkButtonGroup,{isFlush:!1,isFullWidth:!0,theme:null==P?void 0:P.theme},s.default.createElement(t.AddToCartButton,{copy:b,dataTestRef:"PRODUCT_ACCORDION",theme:null==P?void 0:P.theme}),(null==P?void 0:P.cta)&&s.default.createElement(r.Hyperlink,{isAlternate:!1,style:"Internal Button Link",theme:null==P?void 0:P.theme,url:null==P?void 0:P.cta.url},null==P?void 0:P.cta.text)))),s.default.createElement("button",{className:p.default(_.closeButton,_[null==P?void 0:P.theme]),onClick:function(){return v(f,!1)}},null==P?void 0:P.closeButtonText)))}));m.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductAccordion-module_base__3w-nf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n@media (max-width: 639px) {\n.ProductAccordion-module_base__3w-nf {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column\n}\n  }\n"),exports.ProductAccordionItem=x,exports.styles={base:"ProductAccordion-module_base__3w-nf"};
