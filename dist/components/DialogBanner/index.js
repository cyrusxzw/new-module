"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),n=require("classnames"),a=require("../../sharedChunks/useEscapeKeyListener.js");require("../../sharedChunks/environment.js");var o=require("../../sharedChunks/useOverflowHidden.js");require("../../sharedChunks/viewports.js"),require("../../sharedChunks/isSymbol.js");var t=require("../../sharedChunks/Button.js"),r=require("../../sharedChunks/Heading.js"),i=require("../../sharedChunks/Hyperlink.js"),s=require("../../sharedChunks/Icon.js"),l=require("../../sharedChunks/Paragraph.js"),d=require("../../sharedChunks/Overlay.js"),u=require("../../sharedChunks/Transition.js"),m=require("../../sharedChunks/style-inject.es.js");function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/keyboard-codes.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("react-uid"),require("prop-types"),require("react-dom"),require("../../sharedChunks/useHasMounted.js");var c=h(e),_=h(n),g={base:"DialogBanner-module_base__1sS5X",top:"DialogBanner-module_top__jLPxl",bottom:"DialogBanner-module_bottom__2hfmb",isVisible:"DialogBanner-module_isVisible__1i46z",dark:"DialogBanner-module_dark__2cbOO",black:"DialogBanner-module_black__2sEch",contentContainer:"DialogBanner-module_contentContainer__jzerV",heading:"DialogBanner-module_heading__2qJht",message:"DialogBanner-module_message__3xWGh",warningIcon:"DialogBanner-module_warningIcon__HKWtl",closeButton:"DialogBanner-module_closeButton__2XMqf",closeIcon:"DialogBanner-module_closeIcon__1UkP7",closeContainer:"DialogBanner-module_closeContainer__3RJ-U",ctaButton:"DialogBanner-module_ctaButton__1GEq-"};m.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.DialogBanner-module_base__1sS5X {\n  position: fixed;\n  z-index: 1800;\n  right: 0;\n  left: 0;\n  padding: 20px 40px;\n}\n@media (max-width: 639px) {\n.DialogBanner-module_base__1sS5X {\n    padding: 20px 20px 40px 20px\n}\n  }\n@media (min-width: 640px) {\n.DialogBanner-module_base__1sS5X {\n    display: grid;\n    grid-template-columns: 15% 63% 22%\n}\n  }\n@media (min-width: 1025px) {\n.DialogBanner-module_base__1sS5X {\n    grid-template-columns: 20% 60% 20%\n}\n  }\n.DialogBanner-module_top__jLPxl {\n  top: 0;\n}\n.DialogBanner-module_bottom__2hfmb {\n\n  bottom: 0;\n}\n/* @TODO Handle bottom prop */\n.DialogBanner-module_isVisible__1i46z.DialogBanner-module_bottom__2hfmb {\n  }\n.DialogBanner-module_dark__2cbOO {\n  background-color: #333;\n}\n.DialogBanner-module_black__2sEch {\n  background-color: #252525;\n}\n@media (min-width: 640px) {\n.DialogBanner-module_contentContainer__jzerV {\n    padding: 0 24px\n}\n  }\n.DialogBanner-module_heading__2qJht {\n  color: #fffef2;\n}\n@media (max-width: 639px) {\n.DialogBanner-module_heading__2qJht {\n    margin-top: 28px;\n    margin-bottom: 10px\n}\n  }\n.DialogBanner-module_message__3xWGh {\n  color: #d5d4c9;\n  font-size: 15px;\n}\n@media (max-width: 639px) {\n    .DialogBanner-module_message__3xWGh:last-of-type {\n      margin-bottom: 14px;\n    }\n  }\n.DialogBanner-module_warningIcon__HKWtl {\n  fill: #8a939d;\n}\n.DialogBanner-module_closeButton__2XMqf {\n  position: absolute;\n  top: 20px;\n  right: 40px;\n}\n@media (max-width: 639px) {\n.DialogBanner-module_closeButton__2XMqf {\n    top: 20px;\n    right: 20px\n}\n  }\n.DialogBanner-module_closeButton__2XMqf:hover svg, .DialogBanner-module_closeButton__2XMqf:focus svg {\n      fill: #fffef2;\n    }\n.DialogBanner-module_closeIcon__1UkP7 {\n  fill: #8a939d;\n}\n@media (min-width: 640px) {\n.DialogBanner-module_closeContainer__3RJ-U {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    text-align: right\n}\n  }\n.DialogBanner-module_ctaButton__1GEq- {\n  font-size: 15px;\n}\n");exports.DialogBanner=function(e){var n,m,h=e.className,p=e.copy,x=e.cta,k=e.hasCloseButton,b=void 0===k||k,B=e.isVisible,f=void 0!==B&&B,C=e.message,w=e.onClose,q=e.position,D=void 0===q?"top":q,j=e.theme,v=void 0===j?"dark":j,E=e.heading;a.useEscapeKeyListener(w),o.useOverflowHidden(f);var y=_.default(g.base,((n={})[g.isVisible]=f,n),g[v],g[D],h);return c.default.createElement(c.default.Fragment,null,c.default.createElement(d.Overlay,{isVisible:f,onClose:w}),c.default.createElement(u.Transition,{isActive:f,shouldMountOnEnter:!0,shouldUnmountOnExit:!0,type:"slideDown"},c.default.createElement("aside",{className:y},c.default.createElement("div",{className:g.iconContainer},c.default.createElement(s.Icon,{className:g.warningIcon,height:22,name:"warning",theme:"light",width:22})),c.default.createElement("div",{className:g.contentContainer},c.default.createElement(r.Heading,{className:g.heading,level:"1",size:"large"},E),c.default.createElement(l.Paragraph,{className:g.message},C)),c.default.createElement("div",{className:g.closeContainer},b&&c.default.createElement(t.Button,{className:g.closeButton,isInline:!0,onClick:w,title:null!==(m=null==p?void 0:p.closeButtonTitle)&&void 0!==m?m:"Close Dialog Banner"},c.default.createElement(s.Icon,{className:g.closeIcon,height:12,name:"close",theme:"light",width:12})),x&&x.text&&c.default.createElement(i.Hyperlink,{className:g.ctaButton,dataTestRef:x.dataTestRef,hasTargetInNewWindow:x.openInANewWindow,id:x.id,theme:"light",title:x.title,url:x.url},x.text)))))};
