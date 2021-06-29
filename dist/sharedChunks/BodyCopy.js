"use strict";var o=require("react"),e=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var n=require("./ThemeContext.js");require("./VariantSelectContext.js");var t=require("./SectionHeading.js"),a=require("./style-inject.es.js");function p(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var d=p(o),r=p(e),i={base:"BodyCopy-module_base__1ZoAL",contentWrapper:"BodyCopy-module_contentWrapper__2ZoEL",copy:"BodyCopy-module_copy__2K-qP",dark:"BodyCopy-module_dark__1kIgR",light:"BodyCopy-module_light__1BpzV"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.BodyCopy-module_base__1ZoAL {\n  font-family: 'Suisse Regular', sans-serif;\n}\n.BodyCopy-module_base__1ZoAL:not(:last-child) {\n    margin-bottom: 16px;\n  }\n@media (min-width: 640px) {\n    .BodyCopy-module_base__1ZoAL:not(:last-child) {\n      margin-bottom: 34px;\n    }\n  }\n@media (min-width: 1025px) {\n    .BodyCopy-module_base__1ZoAL:not(:last-child) {\n      margin-bottom: 40px;\n    }\n  }\n.BodyCopy-module_contentWrapper__2ZoEL {\n  margin-top: 30px;\n  font-size: 16px;\n}\n.BodyCopy-module_contentWrapper__2ZoEL a {\n    font-family: 'Suisse Medium', sans-serif;\n    font-size: 14px;\n  }\n.BodyCopy-module_copy__2K-qP,\n  .BodyCopy-module_copy__2K-qP p {\n    font-size: 16px;\n    line-height: 1.7;\n  }\n.BodyCopy-module_copy__2K-qP:first-of-type, .BodyCopy-module_copy__2K-qP p:first-of-type {\n      margin-top: 0;\n    }\n.BodyCopy-module_copy__2K-qP:last-of-type, .BodyCopy-module_copy__2K-qP p:last-of-type {\n      margin-bottom: 0;\n    }\n.BodyCopy-module_copy__2K-qP a, .BodyCopy-module_copy__2K-qP p a {\n      display: inline;\n      font-weight: 400;\n    }\n.BodyCopy-module_dark__1kIgR .BodyCopy-module_copy__2K-qP,\n    .BodyCopy-module_dark__1kIgR .BodyCopy-module_copy__2K-qP p {\n  color: #333;\n    }\n.BodyCopy-module_dark__1kIgR .BodyCopy-module_copy__2K-qP a {\n      color: #333\n    }\n.BodyCopy-module_dark__1kIgR .BodyCopy-module_copy__2K-qP a:hover,\n      .BodyCopy-module_dark__1kIgR .BodyCopy-module_copy__2K-qP a:focus {\n        color: #333;\n      }\n.BodyCopy-module_light__1BpzV.BodyCopy-module_light__1BpzV .BodyCopy-module_copy__2K-qP,\n    .BodyCopy-module_light__1BpzV.BodyCopy-module_light__1BpzV .BodyCopy-module_copy__2K-qP p {\n  color: #fffef2;\n    }\n.BodyCopy-module_light__1BpzV.BodyCopy-module_light__1BpzV .BodyCopy-module_copy__2K-qP a {\n      color: #fffef2\n    }\n.BodyCopy-module_light__1BpzV.BodyCopy-module_light__1BpzV .BodyCopy-module_copy__2K-qP a:hover,\n      .BodyCopy-module_light__1BpzV.BodyCopy-module_light__1BpzV .BodyCopy-module_copy__2K-qP a:focus {\n        color: #f6f5e8;\n      }\n");var l=o.forwardRef((function(o,e){var a=o.childrenClassNames,p=o.className,l=o.content,_=o.copy,y=o.eyebrow,m=o.hasFlushHeading,s=void 0!==m&&m,u=o.hasSerifFontHeading,c=void 0!==u&&u,h=o.heading,C=o.id,B=o.isHeroArticle,g=o.subHeading,x=o.theme,f=n.useThemeContext(x,"dark"),b=r.default(i.base,i[f],p);return d.default.createElement("article",{className:b,id:C,ref:e},d.default.createElement(t.SectionHeading,{childrenClassNames:{eyebrow:null==a?void 0:a.eyebrow,heading:null==a?void 0:a.heading,subHeading:null==a?void 0:a.subHeading},eyebrow:y,hasSerifFontHeading:c,heading:h,id:C+"-heading",isFlush:s,isPageHeading:B,subHeading:g,theme:f}),_&&d.default.createElement("div",{className:i.copy},_),l&&d.default.createElement("div",{className:i.contentWrapper},l))}));exports.BodyCopy=l;
