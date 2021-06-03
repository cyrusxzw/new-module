"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../sharedChunks/tslib.es6.js"),n=require("react"),o=require("../../sharedChunks/debounce.js"),t=require("react-uid"),i=require("../../sharedChunks/AddToCartContext.js");require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js");var d=require("../../sharedChunks/VariantSelectContext.js");require("../../sharedChunks/viewports.js"),require("../../sharedChunks/environment.js");var r=require("../../sharedChunks/useWindowHasResized.js"),a=require("../../sharedChunks/viewport.js"),c=require("classnames"),u=require("../../sharedChunks/AddToCartButton.js"),l=require("../../sharedChunks/Button.js"),m=require("../../sharedChunks/Heading.js"),s=require("../../sharedChunks/Hyperlink.js"),p=require("../../sharedChunks/Image.js"),_=require("../../sharedChunks/LinkButtonGroup.js"),x=require("../../sharedChunks/Video.js"),h=require("../../sharedChunks/style-inject.es.js");function b(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("query-string"),require("../../sharedChunks/Loading.js"),require("../../sharedChunks/Icon.js"),require("../../sharedChunks/useEscapeKeyListener.js"),require("../../sharedChunks/useHasMounted.js"),require("../../sharedChunks/useOverflowHidden.js"),require("../../sharedChunks/Transition.js"),require("prop-types"),require("react-dom"),require("video-scroller");var g=b(n),k=b(c),f={base:"ProductAccordionItem-module_base__CB7Pp",compressed:"ProductAccordionItem-module_compressed__1U05P",closedForegroundImage:"ProductAccordionItem-module_closedForegroundImage__3rvH8",backgroundVideo:"ProductAccordionItem-module_backgroundVideo__3Oexe",backgroundImage:"ProductAccordionItem-module_backgroundImage__xOfjv",content:"ProductAccordionItem-module_content__3YgPm",hidden:"ProductAccordionItem-module_hidden__3m4tk",expanded:"ProductAccordionItem-module_expanded__37prG",open:"ProductAccordionItem-module_open__2um6J",expandedContent:"ProductAccordionItem-module_expandedContent__cXApF",expandedImage:"ProductAccordionItem-module_expandedImage__3Q4GG",expandedText:"ProductAccordionItem-module_expandedText__25sKv",closedStateForegroundImage:"ProductAccordionItem-module_closedStateForegroundImage__cjlM4",closeButton:"ProductAccordionItem-module_closeButton__1PirO",openButton:"ProductAccordionItem-module_openButton__1ftki",light:"ProductAccordionItem-module_light__Yv6gq",background:"ProductAccordionItem-module_background__s_hoU",openCopy:"ProductAccordionItem-module_openCopy__7A5al",closedCopy:"ProductAccordionItem-module_closedCopy__3Kb-8",openStateHeading:"ProductAccordionItem-module_openStateHeading__1k57z",openStateEyebrow:"ProductAccordionItem-module_openStateEyebrow__3kpW9"};h.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductAccordionItem-module_base__CB7Pp {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  min-height: 70vh;\n  -webkit-transition-delay: 0ms;\n          transition-delay: 0ms;\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transition-property: width;\n  transition-property: width;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (min-width: 640px) {\n.ProductAccordionItem-module_base__CB7Pp {\n    min-height: 60vh\n}\n  }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_base__CB7Pp {\n    min-height: 80vh\n}\n  }\n.ProductAccordionItem-module_base__CB7Pp,\n  .ProductAccordionItem-module_base__CB7Pp * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n    width: 10%;\n    cursor: pointer;\n  }\n@media (max-width: 639px) {\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n      width: 100%;\n      cursor: default\n  }\n    }\n@media (min-width: 1600px) {\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n      width: 20%\n  }\n    }\n@media (min-width: 1920px) {\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n      width: 33.33%\n  }\n    }\n@media (min-width: 2400px) {\n.ProductAccordionItem-module_base__CB7Pp.ProductAccordionItem-module_compressed__1U05P {\n      width: 41%\n  }\n    }\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 {\n  display: block;\n  margin: 0 auto;\n}\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n    width: auto;\n    max-height: 240px;\n  }\n@media (min-width: 640px) {\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n      max-height: 220px\n  }\n    }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_closedForegroundImage__3rvH8 img {\n      max-height: 260px\n  }\n    }\n.ProductAccordionItem-module_backgroundVideo__3Oexe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  width: 100%;\n\n  /** to override media query height */\n  height: 100% !important;\n}\n.ProductAccordionItem-module_backgroundImage__xOfjv {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ProductAccordionItem-module_backgroundImage__xOfjv img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n  }\n.ProductAccordionItem-module_content__3YgPm {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  max-width: 540px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 40px;\n  padding-right: 20px;\n  padding-bottom: 60px;\n  padding-left: 20px;\n  margin: 0 auto;\n  text-align: center;\n  -webkit-transition-delay: 0ms;\n          transition-delay: 0ms;\n  -webkit-transition-duration: 400ms;\n          transition-duration: 400ms;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n@media (min-width: 640px) {\n.ProductAccordionItem-module_content__3YgPm {\n    padding-right: 40px;\n    padding-left: 40px\n}\n  }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_content__3YgPm {\n    padding-top: 60px\n}\n  }\n.ProductAccordionItem-module_content__3YgPm.ProductAccordionItem-module_hidden__3m4tk {\n    opacity: 0;\n    pointer-events: none;\n  }\n.ProductAccordionItem-module_expanded__37prG {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition-delay: 0ms;\n          transition-delay: 0ms;\n  -webkit-transition-duration: 100ms;\n          transition-duration: 100ms;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.ProductAccordionItem-module_expanded__37prG.ProductAccordionItem-module_open__2um6J {\n    opacity: 1;\n    pointer-events: auto;\n  }\n.ProductAccordionItem-module_expandedContent__cXApF {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto;;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px;\n  opacity: 0;\n  -webkit-transition-delay: 800ms;\n          transition-delay: 800ms;\n  -webkit-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function:\n    cubic-bezier(0.215, 0.61, 0.355, 1),\n    cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function:\n    cubic-bezier(0.215, 0.61, 0.355, 1),\n    cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (max-width: 1024px) {\n.ProductAccordionItem-module_expandedContent__cXApF {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column\n}\n  }\n@media (min-width: 640px) {\n.ProductAccordionItem-module_expandedContent__cXApF {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 34px\n}\n  }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_expandedContent__cXApF {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding: 40px\n}\n  }\n.ProductAccordionItem-module_open__2um6J .ProductAccordionItem-module_expandedContent__cXApF {\n  opacity: 1;\n}\n.ProductAccordionItem-module_expandedImage__3Q4GG {\n  position: relative;\n  min-height: 100px;\n  max-height: 280px;\n}\n@media (max-width: 1024px) {\n.ProductAccordionItem-module_expandedImage__3Q4GG {\n    width: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin-top: 60px;\n    margin-bottom: 30px\n}\n\n    .ProductAccordionItem-module_expandedImage__3Q4GG img {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      -o-object-fit: contain;\n         object-fit: contain;\n      -o-object-position: center bottom;\n         object-position: center bottom;\n    }\n  }\n@media (min-width: 640px) {\n.ProductAccordionItem-module_expandedImage__3Q4GG {\n    max-height: 350px\n}\n  }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_expandedImage__3Q4GG {\n    width: 33.33%;\n    max-height: 420px;\n    margin-right: 40px;\n    margin-bottom: 0\n}\n  }\n@media (min-width: 640px) {\n.ProductAccordionItem-module_expandedText__25sKv {\n    width: 100%\n}\n  }\n@media (min-width: 1025px) {\n.ProductAccordionItem-module_expandedText__25sKv {\n    width: 66.66%;\n    max-width: 640px\n}\n  }\n.ProductAccordionItem-module_closedStateForegroundImage__cjlM4 {\n  display: block;\n  width: 100%;\n  margin-top: auto;\n  cursor: pointer;\n}\n.ProductAccordionItem-module_closedStateForegroundImage__cjlM4:focus {\n    outline: 0;\n  }\n.ProductAccordionItem-module_closeButton__1PirO {\n  position: absolute;\n  z-index: 1;\n  top: 40px;\n  right: 40px;\n  margin: 0;\n  font-size: 16px;\n}\n.ProductAccordionItem-module_openButton__1ftki {\n  margin-bottom: 40px;\n  font-size: 16px;\n}\n.ProductAccordionItem-module_openButton__1ftki,\n.ProductAccordionItem-module_closeButton__1PirO {\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #333;\n  cursor: pointer;\n  font-family: 'Suisse Regular', sans-serif;\n  text-decoration: underline;\n}\n.ProductAccordionItem-module_openButton__1ftki:focus, .ProductAccordionItem-module_closeButton__1PirO:focus {\n    outline: 0;\n  }\n.ProductAccordionItem-module_openButton__1ftki.ProductAccordionItem-module_light__Yv6gq, .ProductAccordionItem-module_closeButton__1PirO.ProductAccordionItem-module_light__Yv6gq {\n    color: #fffef2;\n  }\n.ProductAccordionItem-module_background__s_hoU {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  height: 100%;\n}\n.ProductAccordionItem-module_openCopy__7A5al,\n.ProductAccordionItem-module_closedCopy__3Kb-8 {\n  padding: 0;\n  margin-bottom: 30px;\n  color: #333;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n}\n.ProductAccordionItem-module_openCopy__7A5al.ProductAccordionItem-module_light__Yv6gq, .ProductAccordionItem-module_closedCopy__3Kb-8.ProductAccordionItem-module_light__Yv6gq {\n    color: #fffef2;\n  }\n.ProductAccordionItem-module_openStateHeading__1k57z {\n  margin-bottom: 20px;\n}\n.ProductAccordionItem-module_openStateEyebrow__3kpW9 {\n  margin-bottom: 20px;\n}\n.ProductAccordionItem-module_openCopy__7A5al {\n  margin-bottom: 30px;\n}\n");var I=n.forwardRef((function(n,o){var t,i,d,r,a=n.addToCartCopy,c=n.callbackWithRef,h=n.closedState,b=n.id,I=n.index,P=n.onPromoClick,v=n.openState,A=n.resetAccordion,w=n.toggleAccordion,y=n.visualState;null==c||c(o);var C="compressed"===y,j="expanded"===y,q=C?function(){return A()}:void 0,B=C?function(){return A()}:void 0,E={backgroundColor:null==h?void 0:h.backgroundColour},S=k.default(f.base,((t={})[f.compressed]=C,t)),z=k.default(f.background,((i={})[f.hidden]=j,i)),F=k.default(f.content,((d={})[f.hidden]=j||C,d));return g.default.createElement("div",{className:S,"data-testid":"data-testid-ProductAccordionItem",id:b,onClick:q,onKeyDown:B,ref:o,role:"button",tabIndex:C?0:-1},g.default.createElement("div",{className:z,style:E},"Video"===(null==h?void 0:h.background)&&g.default.createElement(x.Video,e.__assign({className:f.backgroundVideo,hasAllowAudio:!1,hasAutoplay:!0,hasControls:!1,hasLoop:!0},null==h?void 0:h.backgroundVideo)),"Image"===(null==h?void 0:h.background)&&g.default.createElement(p.Image,e.__assign({className:f.backgroundImage},null==h?void 0:h.backgroundImage))),g.default.createElement("div",{className:F},(null==h?void 0:h.title)&&g.default.createElement(m.Heading,{hasSerifFont:null==h?void 0:h.hasSerifFont,level:"2",size:"xLarge",theme:null==h?void 0:h.theme},null==h?void 0:h.title),(null==h?void 0:h.eyebrow)&&g.default.createElement(m.Heading,{hasMediumWeightFont:!0,level:"4",size:"xSmall",theme:null==h?void 0:h.theme},null==h?void 0:h.eyebrow),g.default.createElement("div",{className:k.default(f.closedCopy,f[null==h?void 0:h.theme])},null==h?void 0:h.copy),g.default.createElement("button",{className:k.default(f.openButton,f[null==h?void 0:h.theme]),onClick:function(){w(I,!0),null==P||P()}},null==h?void 0:h.openButtonText),g.default.createElement(l.Button,{className:f.closedStateForegroundImage,isInline:!0,onClick:function(){w(I,!0),null==P||P()}},g.default.createElement(p.Image,e.__assign({className:k.default(f.closedForegroundImage)},null==h?void 0:h.foregroundImage)))),g.default.createElement("div",{className:k.default(f.expanded,(r={},r[f.open]=j,r)),style:{backgroundColor:null==v?void 0:v.backgroundColour}},"Video"===(null==v?void 0:v.background)&&g.default.createElement(x.Video,e.__assign({className:f.backgroundVideo,hasAllowAudio:!1,hasAutoplay:!0,hasControls:!1,hasLoop:!0},null==v?void 0:v.backgroundVideo)),"Image"===(null==v?void 0:v.background)&&g.default.createElement(p.Image,e.__assign({className:f.backgroundImage},null==v?void 0:v.backgroundImage)),g.default.createElement("div",{className:f.expandedContent},g.default.createElement("div",{className:f.expandedImage},g.default.createElement(p.Image,e.__assign({},null==v?void 0:v.foregroundImage))),g.default.createElement("div",{className:f.expandedText},(null==v?void 0:v.title)&&g.default.createElement(m.Heading,{className:f.openStateHeading,hasSerifFont:null==v?void 0:v.hasSerifFont,level:"2",size:"xLarge",theme:null==v?void 0:v.theme},null==v?void 0:v.title),(null==v?void 0:v.eyebrow)&&g.default.createElement(m.Heading,{className:f.openStateEyebrow,hasMediumWeightFont:!0,level:"4",size:"xSmall",theme:null==v?void 0:v.theme},null==v?void 0:v.eyebrow),g.default.createElement("div",{className:k.default(f.openCopy,f[null==v?void 0:v.theme])},null==v?void 0:v.copy),g.default.createElement(_.LinkButtonGroup,{isFlush:!1,isFullWidth:!0,theme:null==v?void 0:v.theme},g.default.createElement(u.AddToCartButton,{copy:a,dataTestRef:"PRODUCT_ACCORDION",theme:null==v?void 0:v.theme}),(null==v?void 0:v.cta)&&g.default.createElement(s.Hyperlink,{isAlternate:!1,style:"Internal Button Link",theme:null==v?void 0:v.theme,url:null==v?void 0:v.cta.url},null==v?void 0:v.cta.text)))),g.default.createElement("button",{className:k.default(f.closeButton,f[null==v?void 0:v.theme]),onClick:function(){return w(I,!1)}},null==v?void 0:v.closeButtonText)))})),P="ProductAccordion-module_base__3w-nf";function v(c){var u=c.id,l=c.products,m=c.addToCartCopy,s=n.useState(l),p=s[0],_=s[1];n.useEffect((function(){var e=o.debounce_1((function(){p.map((function(e){e.visualState="default"}))}),200);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[p]),r.useWindowHasResized();var x=function(e,n){_(p.map((function(o,t){var i=t===e;return a.isViewport("xs to sm only")?i&&(o.visualState=n?"expanded":"default"):o.visualState=n?i?"expanded":"compressed":"default",o})))},h=function(){_(p.map((function(e){return e.visualState="default",e})))};return g.default.createElement("div",{className:P,id:u},p.map((function(n,o){return g.default.createElement(i.AddToCartContextProvider,{key:t.uid(n),onClick:n.handleAddToCart},g.default.createElement(d.VariantSelectContextProvider,{variants:n.openState.product.variants},g.default.createElement(I,e.__assign({addToCartCopy:m,index:o,resetAccordion:h,toggleAccordion:x},n))))})))}h.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductAccordion-module_base__3w-nf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n@media (max-width: 639px) {\n.ProductAccordion-module_base__3w-nf {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column\n}\n  }\n"),exports.HorizontalProductDisplayAccordion=v,exports.ProductAccordion=v;
