"use strict";var e=require("react"),n=require("react-dom"),o=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var t=require("./ThemeContext.js");require("./VariantSelectContext.js");var a=require("./useEscapeKeyListener.js");require("./environment.js");var l=require("./useFocusOnFirst.js"),r=require("./useOverflowHidden.js"),i=require("./useTrapFocus.js");require("./isSymbol.js");var s=require("./mergeRefs.js"),d=require("./portal.js"),m=require("./Button.js"),u=require("./Icon.js"),c=require("./style-inject.es.js"),p=require("./Overlay.js"),x=require("./Transition.js");function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var h=_(e),b=_(o),f={base:"ModalBody-module_base__3I-jF",isVisible:"ModalBody-module_isVisible__1QTme",closeIcon:"ModalBody-module_closeIcon__3aJW5",dark:"ModalBody-module_dark__33bzC",light:"ModalBody-module_light__3qr4o",closeButton:"ModalBody-module_closeButton__2UtNd"};c.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ModalBody-module_base__3I-jF {\n  position: relative;\n  overflow: scroll;\n  width: 100%;\n  max-height: calc(100vh - 16px * 4);\n  padding: calc(16px * 2);\n  background-color: #fffef2;\n  color: #252525;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 15px;\n  line-height: 1.6;\n  pointer-events: auto;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n.ModalBody-module_base__3I-jF *,\n    .ModalBody-module_base__3I-jF *::before,\n    .ModalBody-module_base__3I-jF *::after {\n      -webkit-box-sizing: inherit;\n              box-sizing: inherit;\n    }\n@media (min-width: 640px) {\n.ModalBody-module_base__3I-jF {\n    max-height: calc(100vh - 34px * 4 - 50px);\n    padding: calc(34px * 2)\n}\n  }\n.ModalBody-module_base__3I-jF.ModalBody-module_isVisible__1QTme {\n    pointer-events: auto;\n  }\n.ModalBody-module_dark__33bzC .ModalBody-module_closeIcon__3aJW5 {\n    fill: #666;\n  }\n.ModalBody-module_light__3qr4o .ModalBody-module_closeIcon__3aJW5 {\n    fill: #e0dfd6;\n  }\n.ModalBody-module_dark__33bzC .ModalBody-module_closeButton__2UtNd:hover .ModalBody-module_closeIcon__3aJW5 {\n    fill: #333;\n  }\n.ModalBody-module_light__3qr4o .ModalBody-module_closeButton__2UtNd:hover .ModalBody-module_closeIcon__3aJW5 {\n    fill: #fffef0;\n  }\n.ModalBody-module_closeButton__2UtNd {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 14px;\n  height: 14px;\n  -webkit-transition: outline-offset 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: outline-offset 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (min-width: 640px) {\n.ModalBody-module_closeButton__2UtNd {\n    top: 18px;\n    right: 20px\n}\n  }\n.ModalBody-module_dark__33bzC .ModalBody-module_closeButton__2UtNd.focus-visible {\n    outline: 1px dashed #ccc;\n    outline-offset: 2px;\n  }\n.ModalBody-module_dark__33bzC .ModalBody-module_closeButton__2UtNd.focus-visible {\n    outline: 1px dashed #ccc;\n    outline-offset: 2px;\n  }\n.ModalBody-module_dark__33bzC .ModalBody-module_closeButton__2UtNd:focus-visible {\n    outline: 1px dashed #ccc;\n    outline-offset: 2px;\n  }\n.ModalBody-module_light__3qr4o .ModalBody-module_closeButton__2UtNd.focus-visible {\n    outline: 1px dashed #e0dfd6;\n    outline-offset: 2px;\n  }\n.ModalBody-module_light__3qr4o .ModalBody-module_closeButton__2UtNd.focus-visible {\n    outline: 1px dashed #e0dfd6;\n    outline-offset: 2px;\n  }\n.ModalBody-module_light__3qr4o .ModalBody-module_closeButton__2UtNd:focus-visible {\n    outline: 1px dashed #e0dfd6;\n    outline-offset: 2px;\n  }\n");var g=function(e){var n,o=e.children,a=e.className,l=e.copy,r=e.onClose,i=e.isVisible,s=e.theme,d=t.useThemeContext(s,"dark"),c=b.default(f.base,((n={})[f.isVisible]=i,n),f[d],a);return h.default.createElement("div",{className:c},o,h.default.createElement(m.Button,{className:f.closeButton,dataTestRef:"MODAL_CLOSE_BUTTON",isInline:!0,onClick:r,theme:s,title:l.close},h.default.createElement(u.Icon,{className:f.closeIcon,height:14,name:"close",theme:s,width:14})))},w={base:"Modal-module_base__1XCSr",inner:"Modal-module_inner__3QC4Z"};c.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Modal-module_base__1XCSr {\n  position: absolute;\n  z-index: 1400;\n  top: 0;\n  right: 0;\n  left: 0;\n  outline: none;\n  pointer-events: none;\n}\n.Modal-module_base__1XCSr *,\n    .Modal-module_base__1XCSr *::before,\n    .Modal-module_base__1XCSr *::after {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n    }\n@media (min-width: 640px) {\n.Modal-module_base__1XCSr {\n    position: fixed\n}\n  }\n.Modal-module_inner__3QC4Z {\n  position: relative;\n  z-index: 1600;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 640px) {\n.Modal-module_inner__3QC4Z {\n    min-width: 320px;\n    max-width: 550px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 50px auto 0\n}\n  }\n");var k=d.getPortalRoot("aesop-gel-modal-root");exports.Modal=function(e){var o=e.aria,d=e.children,m=e.className,u=e.copy,c=e.isVisible,_=e.onClose,f=e.theme,M=l.useFocusOnFirst(c)[0],v=i.useTrapFocus(c)[0],y=t.useThemeContext(f,"dark");a.useEscapeKeyListener(_),r.useOverflowHidden(c);var B=s.mergeRefs(M,v),C=b.default(w.base,w[y],m);return h.default.createElement(h.default.Fragment,null,n.createPortal(h.default.createElement(h.default.Fragment,null,h.default.createElement(p.Overlay,{isVisible:c,onClose:_}),h.default.createElement(x.Transition,{isActive:c,shouldMountOnEnter:!0,shouldUnmountOnExit:!0,type:"zoom"},h.default.createElement("aside",{"aria-hidden":!c,"aria-label":null==o?void 0:o.label,"aria-modal":"true",className:C,"data-testid":"data-testid-Modal",ref:B,role:"dialog"},h.default.createElement("div",{className:w.inner},h.default.createElement(g,{copy:u,isVisible:c,onClose:_,theme:f},d))))),k))};
