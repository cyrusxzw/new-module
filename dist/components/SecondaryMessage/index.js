"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../sharedChunks/tslib.es6.js"),n=require("react"),a=require("classnames");require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js");var r=require("../../sharedChunks/ThemeContext.js");require("../../sharedChunks/VariantSelectContext.js");var t=require("../../sharedChunks/ConditionalWrapper.js"),o=require("../../sharedChunks/Heading.js"),s=require("../../sharedChunks/Hyperlink.js"),i=require("../../sharedChunks/style-inject.es.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/viewports.js");var d=l(n),m=l(a),p={base:"Message-module_base__1Nwji",link:"Message-module_link__3bdiD",content:"Message-module_content__2XTZs",heading:"Message-module_heading__3xX0t",dark:"Message-module_dark__TDMSQ",light:"Message-module_light__3ipt8",copy:"Message-module_copy__tGB7L"};i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Message-module_base__1Nwji {\n  width: 100%;\n  margin: 24px 20px;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: left;\n}\n@media (min-width: 640px) {\n.Message-module_base__1Nwji {\n    padding: 0 34px;\n    margin: 24px 0;\n    text-align: center\n}\n  }\n@media (min-width: 1025px) {\n.Message-module_base__1Nwji {\n    padding: 0 20px\n}\n  }\n.Message-module_base__1Nwji,\n  .Message-module_base__1Nwji * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.Message-module_link__3bdiD {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n}\n@media (min-width: 640px) {\n.Message-module_link__3bdiD {\n    text-align: center\n}\n  }\n@media (min-width: 640px) {\n.Message-module_content__2XTZs {\n    max-width: 400px;\n    margin: 0 auto\n}\n  }\n.Message-module_heading__3xX0t {\n  margin-top: 0;\n  margin-bottom: 4px;\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 14px;\n}\n.Message-module_dark__TDMSQ .Message-module_heading__3xX0t {\n    color: #333;\n  }\n.Message-module_light__3ipt8 .Message-module_heading__3xX0t {\n    color: #fffef2;\n  }\n.Message-module_heading__3xX0t span {\n    border-bottom: 1px solid transparent;\n    -webkit-transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);\n    transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);\n  }\n.Message-module_dark__TDMSQ .Message-module_link__3bdiD:hover .Message-module_heading__3xX0t span {\n        border-bottom: 1px solid #333;\n      }\n.Message-module_light__3ipt8 .Message-module_link__3bdiD:hover .Message-module_heading__3xX0t span {\n        border-bottom: 1px solid #fffef2;\n      }\n.Message-module_copy__tGB7L {\n  font-size: 14px;\n}\n.Message-module_dark__TDMSQ .Message-module_copy__tGB7L {\n    color: #666;\n  }\n.Message-module_light__3ipt8 .Message-module_copy__tGB7L {\n    color: #e0dfd6;\n  }\n");var u=function(n){var a=n.className,i=n.copy,l=n.heading,u=n.id,_=n.link,h=n.theme,g=r.useThemeContext(h,"dark"),x=m.default(p.base,p[g],a);return d.default.createElement("div",{className:x,id:u},d.default.createElement(t.ConditionalWrapper,{condition:!!_,wrapper:function(n){return d.default.createElement(s.Hyperlink,e.__assign({className:p.link},_),n)}},d.default.createElement("div",{className:p.content},d.default.createElement(o.Heading,{className:p.heading,level:"4",size:"xXSmall"},d.default.createElement("span",null,l)),d.default.createElement("div",{className:p.copy},i))))},_={base:"SecondaryMessage-module_base__2yn2H",dark:"SecondaryMessage-module_dark__258Jc",light:"SecondaryMessage-module_light__2itxh",wrapper:"SecondaryMessage-module_wrapper__1Ikdm",multiple:"SecondaryMessage-module_multiple__29N-B"};i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.SecondaryMessage-module_base__2yn2H {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-family: 'Suisse Regular', sans-serif;\n}\n.SecondaryMessage-module_base__2yn2H,\n  .SecondaryMessage-module_base__2yn2H * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n@media (max-width: 639px) {\n    .SecondaryMessage-module_base__2yn2H.SecondaryMessage-module_dark__258Jc {\n      background-color: #f3f1e4;\n    }\n\n    .SecondaryMessage-module_base__2yn2H.SecondaryMessage-module_light__2itxh {\n      background-color: #333;\n    }\n  }\n@media (min-width: 640px) {\n.SecondaryMessage-module_wrapper__1Ikdm {\n    padding-bottom: 60px\n}\n  }\n@media (min-width: 1025px) {\n.SecondaryMessage-module_wrapper__1Ikdm {\n    padding-bottom: 100px\n}\n  }\n@media (min-width: 640px) {\n.SecondaryMessage-module_multiple__29N-B {\n    width: 50%\n}\n  }\n@media (max-width: 639px) {\n.SecondaryMessage-module_multiple__29N-B:first-of-type {\n      padding-bottom: 20px;\n      margin-bottom: 0\n\n      /* border-image: linear-gradient(0.25turn, transparent, var(--color-grey-45), transparent) 10 20%; */\n  }\n\n      .SecondaryMessage-module_dark__258Jc .SecondaryMessage-module_multiple__29N-B:first-of-type {\n        border-bottom: 1px solid rgba(51, 51, 51, 0.2);\n      }\n\n      .SecondaryMessage-module_light__2itxh .SecondaryMessage-module_multiple__29N-B:first-of-type {\n        border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n      }\n    }\n@media (min-width: 640px) {\n.SecondaryMessage-module_multiple__29N-B:first-of-type {\n\n      /* border-image: linear-gradient(transparent, var(--color-grey-45), transparent) 10 100%; */\n  }\n      .SecondaryMessage-module_dark__258Jc .SecondaryMessage-module_multiple__29N-B:first-of-type {\n        border-right: 1px solid rgba(51, 51, 51, 0.2);\n      }\n\n      .SecondaryMessage-module_light__2itxh .SecondaryMessage-module_multiple__29N-B:first-of-type {\n        border-right: 1px solid rgba(255, 255, 255, 0.6);\n      }\n    }\n");exports.SecondaryMessage=function(n){var a=n.className,t=n.id,o=n.items,s=n.theme,i=r.useThemeContext(s,"dark");if(!o||0===o.length)return null;var l=o.length>1,p=m.default(_.base,_[i],a);return d.default.createElement("section",{className:_.wrapper,"data-testid":"data-testid-SecondaryMessage"},d.default.createElement("aside",{className:p,id:t},o.map((function(n,a){var r,t=n.id,o=e.__rest(n,["id"]);return d.default.createElement(u,e.__assign({className:m.default((r={},r[_.multiple]=l,r)),key:t||a,theme:i},o))}))))};
