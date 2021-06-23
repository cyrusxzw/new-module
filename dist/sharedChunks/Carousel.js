"use strict";var n=require("./tslib.es6.js"),e=require("react"),t=require("classnames"),i=require("./get.js"),o=require("react-slick");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var a=require("./ThemeContext.js");require("./VariantSelectContext.js");var r=require("./viewports.js");require("./environment.js");var l=require("./useWindowHasResized.js"),s=require("./viewport.js"),d=require("./ConditionalWrapper.js"),m=require("./Hyperlink.js"),u=require("./Loading.js"),p=require("./Transition.js"),_=require("./SectionHeading.js"),c=require("./style-inject.es.js"),h=require("./Button.js"),x=require("./Icon.js"),g=require("./Heading.js"),b=require("./Image.js");function f(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var w=f(e),k=f(t),C=f(o),v={base:"CarouselIntroduction-module_base__2sFJp",heading:"CarouselIntroduction-module_heading__tajC7",offsetHeading:"CarouselIntroduction-module_offsetHeading__1GzQP",content:"CarouselIntroduction-module_content__qY3Ua",description:"CarouselIntroduction-module_description__XxH4y",dark:"CarouselIntroduction-module_dark__1Hajy",light:"CarouselIntroduction-module_light__QB9Ny",hasCta:"CarouselIntroduction-module_hasCta__2c1X4",ctaWrapper:"CarouselIntroduction-module_ctaWrapper__3dGj2"};c.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.CarouselIntroduction-module_base__2sFJp {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 15px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.CarouselIntroduction-module_base__2sFJp {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between\n}\n  }\n.CarouselIntroduction-module_heading__tajC7 {\n  margin-top: 0;\n  margin-bottom: 9px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.CarouselIntroduction-module_heading__tajC7 {\n    width: 50%\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.CarouselIntroduction-module_offsetHeading__1GzQP {\n    padding-right: 34px\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.CarouselIntroduction-module_content__qY3Ua {\n    width: 50%\n}\n  }\n.CarouselIntroduction-module_description__XxH4y,\n  .CarouselIntroduction-module_description__XxH4y p {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.7;\n  }\n.CarouselIntroduction-module_description__XxH4y.CarouselIntroduction-module_dark__1Hajy,\n    .CarouselIntroduction-module_description__XxH4y.CarouselIntroduction-module_dark__1Hajy p {\n      color: #333;\n    }\n.CarouselIntroduction-module_description__XxH4y.CarouselIntroduction-module_light__QB9Ny,\n    .CarouselIntroduction-module_description__XxH4y.CarouselIntroduction-module_light__QB9Ny p {\n      color: #fffef2;\n    }\n.CarouselIntroduction-module_hasCta__2c1X4.CarouselIntroduction-module_hasCta__2c1X4 {\n  margin-bottom: 20px;\n}\n.CarouselIntroduction-module_ctaWrapper__3dGj2 {\n  margin-top: auto;\n}\n");var y=function(n){var e,t,i=n.cta,o=n.description,a=n.eyebrow,r=n.heading,l=n.theme,s=void 0===l?"dark":l,d=!!(null==i?void 0:i.text),u=k.default(v.base,v[s]),p=k.default(v.heading,((e={})[v.offsetHeading]=!!o||d,e));return w.default.createElement("div",{className:u},w.default.createElement(_.SectionHeading,{className:p,eyebrow:a,hasSerifFontHeading:!0,heading:r,isFlush:!0,theme:s}),(!!o||d)&&w.default.createElement("div",{className:v.content},o&&w.default.createElement("div",{className:k.default(v.description,(t={},t[v.hasCta]=d,t),v[s])},o),d&&w.default.createElement("div",{className:v.ctaWrapper},w.default.createElement(m.Hyperlink,{style:i.style,theme:s,title:i.title,url:i.url},i.text))))},S="NextButton-module_base__3zqIF",I="NextButton-module_hidden__3F3MM";c.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.NextButton-module_base__3zqIF {\n  position: absolute;\n  z-index: 60;\n  top: calc(50% - 80px);\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 60px;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #333;\n  pointer-events: auto;\n  -webkit-transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (min-width: 1025px) {\n.NextButton-module_base__3zqIF {\n    width: 80px;\n    height: 80px;\n    -webkit-transform: translate3d(80px, 0, 0);\n            transform: translate3d(80px, 0, 0)\n}\n  }\n.NextButton-module_base__3zqIF svg {\n    fill: #fffef2;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n.NextButton-module_hidden__3F3MM {\n  pointer-events: none;\n  -webkit-transform: translate3d(80px, 0, 0) !important;\n          transform: translate3d(80px, 0, 0) !important;\n}\n.slick-slider:hover .NextButton-module_base__3zqIF {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n");var E=function(n){var e,t=n.isActive,i=void 0===t||t,o=n.onClick,a=n.theme,r=void 0===a?"dark":a;return w.default.createElement(h.Button,{className:k.default(S,(e={},e[I]=!i,e)),isInline:!0,onClick:o,theme:r,title:"next slide"},w.default.createElement(x.Icon,{height:16,name:"chevron",theme:r,width:16}))},L={base:"Pagination-module_base___SWdb",list:"Pagination-module_list__2Oj5X",dark:"Pagination-module_dark__2FCbX",light:"Pagination-module_light__36LlY",flush:"Pagination-module_flush__1RBa0",bar:"Pagination-module_bar__31cQF"};c.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Pagination-module_base___SWdb {\n  position: relative;\n}\n.Pagination-module_list__2Oj5X {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 2px;\n  padding: 0;\n  margin-top: 0;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  list-style-type: none;\n}\n.Pagination-module_list__2Oj5X.Pagination-module_dark__2FCbX {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n.Pagination-module_list__2Oj5X.Pagination-module_light__36LlY {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n@media (min-width: 640px) {\n.Pagination-module_list__2Oj5X {\n    margin-right: 34px;\n    margin-left: 34px\n}\n  }\n@media (min-width: 1025px) {\n.Pagination-module_list__2Oj5X {\n    margin-right: 80px;\n    margin-bottom: 40px;\n    margin-left: 80px\n}\n  }\n.Pagination-module_list__2Oj5X li {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin: 0;\n    -webkit-transition: background-color 700ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: background-color 700ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n.Pagination-module_flush__1RBa0.Pagination-module_flush__1RBa0 {\n  margin-right: 0;\n  margin-left: 0;\n}\n.Pagination-module_bar__31cQF {\n  position: absolute;\n  height: 2px;\n  padding: 0;\n  margin: 0;\n  -webkit-transition: left 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: left 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.Pagination-module_dark__2FCbX .Pagination-module_bar__31cQF {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n.Pagination-module_light__36LlY .Pagination-module_bar__31cQF {\n    background-color: rgba(255, 255, 255, 0.6);\n  }\n");var M=function(n){var e,t=n.dots,i=void 0===t?[]:t,o=n.hasFlushPagination,a=void 0!==o&&o,r=n.progressIndex,l=void 0===r?0:r,s=n.theme,d=void 0===s?"dark":s;if(!i.length)return null;var m=i.length,u=100/m+"%",p=100/m*l+"%",_=k.default(L.list,((e={})[L.flush]=a,e),L[d]);return w.default.createElement("div",{className:L.base,"data-testid":"data-testid-Carousel-Pagination"},w.default.createElement("div",{className:_},w.default.createElement("div",{className:L.bar,style:{width:u,left:p}})))},j="PreviousButton-module_base__1J-Kp",P="PreviousButton-module_hidden__2FSw5";c.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.PreviousButton-module_base__1J-Kp {\n  position: absolute;\n  z-index: 60;\n  top: calc(50% - 80px);\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 60px;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #333;\n  pointer-events: auto;\n  -webkit-transition: -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n@media (min-width: 1025px) {\n.PreviousButton-module_base__1J-Kp {\n    width: 80px;\n    height: 80px;\n    -webkit-transform: translate3d(-80px, 0, 0);\n            transform: translate3d(-80px, 0, 0)\n}\n  }\n.PreviousButton-module_base__1J-Kp svg {\n    fill: #fffef2;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n.PreviousButton-module_hidden__2FSw5 {\n  pointer-events: none;\n  -webkit-transform: translate3d(-80px, 0, 0) !important;\n          transform: translate3d(-80px, 0, 0) !important;\n}\n.slick-slider:hover .PreviousButton-module_base__1J-Kp {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n");var B=function(n){var e,t=n.isActive,i=void 0===t||t,o=n.onClick,a=n.theme,r=void 0===a?"dark":a;return w.default.createElement(h.Button,{className:k.default(j,(e={},e[P]=!i,e)),isInline:!0,onClick:o,theme:r,title:"next slide"},w.default.createElement(x.Icon,{height:16,name:"chevron",theme:r,width:16}))},q={heading:"Slide-module_heading__2KIs0",dark:"Slide-module_dark__JMM6u",light:"Slide-module_light__zaD4C",information:"Slide-module_information__34xfK",description:"Slide-module_description__1ZOKE",image:"Slide-module_image__1j94t",fullWidthSlide:"Slide-module_fullWidthSlide__14ez3",imageContainer:"Slide-module_imageContainer__KWlFH"};c.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Slide-module_heading__2KIs0 {\n  margin: 10px 0 10px 0;\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 14px;\n}\n.Slide-module_heading__2KIs0.Slide-module_dark__JMM6u {\n    color: #333;\n  }\n.Slide-module_heading__2KIs0.Slide-module_light__zaD4C {\n    color: #fffef2;\n  }\na:hover .Slide-module_heading__2KIs0,\n  a:focus .Slide-module_heading__2KIs0 {\n    text-decoration: underline;\n  }\n.Slide-module_information__34xfK {\n  padding: 0 20px;\n}\n.Slide-module_description__1ZOKE {\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 14px;\n}\n.Slide-module_description__1ZOKE.Slide-module_dark__JMM6u {\n    color: #333;\n  }\n.Slide-module_description__1ZOKE.Slide-module_light__zaD4C {\n    color: #e0dfd6;\n  }\n.Slide-module_image__1j94t img {\n    width: auto;\n    max-width: 100%;\n    max-height: 100%;\n    margin: auto auto 0;\n  }\n.Slide-module_fullWidthSlide__14ez3.Slide-module_fullWidthSlide__14ez3 {\n  display: inline-block;\n  height: auto;\n}\n.Slide-module_imageContainer__KWlFH {\n  margin-top: auto;\n}\n");var N=function(e){var t,i=e.description,o=e.heading,a=e.id,r=e.image,l=e.isFullWidthSlide,s=void 0!==l&&l,d=e.theme,m=void 0===d?"dark":d;return w.default.createElement(w.default.Fragment,null,(o||i)&&w.default.createElement("div",{className:k.default(q.information,q[m]),id:a},o&&w.default.createElement(g.Heading,{className:k.default(q.heading,q[m]),level:"5",size:"xXSmall"},o),i&&w.default.createElement("div",{className:k.default(q.description,q[m])},i)),w.default.createElement("div",{className:q.imageContainer},w.default.createElement(b.Image,n.__assign({className:k.default(q.image,(t={},t[q.fullWidthSlide]=s,t)),theme:m},r))))},z={base:"Carousel-module_base__2Zak0",slideWrapper:"Carousel-module_slideWrapper__nqrVO",carousel:"Carousel-module_carousel__2ILZE",item:"Carousel-module_item__2G_2x",link:"Carousel-module_link__1gv3s",mobileCarouselIntroductionWrapper:"Carousel-module_mobileCarouselIntroductionWrapper__1Y0_X",fullWidthSlides:"Carousel-module_fullWidthSlides__2sXZx",footer:"Carousel-module_footer__NX8AO",slideCounter:"Carousel-module_slideCounter__2MHc_",dark:"Carousel-module_dark__eKBpb",light:"Carousel-module_light__2WA9F",flush:"Carousel-module_flush__qpy47",caption:"Carousel-module_caption__2q0_n",onlyChild:"Carousel-module_onlyChild__35v-P",loading:"Carousel-module_loading__1PDBz"};c.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Carousel-module_base__2Zak0 {\n  padding: 0;\n}\n.Carousel-module_base__2Zak0,\n  .Carousel-module_base__2Zak0 * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.Carousel-module_slideWrapper__nqrVO {\n  height: 100%;\n}\n.Carousel-module_carousel__2ILZE {\n  position: relative;\n  z-index: 20;\n  overflow: hidden;\n}\n.Carousel-module_carousel__2ILZE picture {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 380px;\n    padding: 0;\n  }\n@media (min-width: 640px) {\n.Carousel-module_carousel__2ILZE picture {\n      height: 380px\n  }\n    }\n@media (min-width: 1025px) {\n.Carousel-module_carousel__2ILZE picture {\n      height: 400px\n  }\n    }\n.Carousel-module_carousel__2ILZE .slick-track {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n.Carousel-module_carousel__2ILZE .slick-list {\n    position: relative;\n    margin-top: 0;\n    margin-right: 0;\n    margin-bottom: 24px;\n    margin-left: 0;\n  }\n@media (min-width: 640px) {\n.Carousel-module_carousel__2ILZE .slick-list {\n      margin-right: 40px;\n      margin-left: 40px\n  }\n    }\n@media (min-width: 1025px) {\n.Carousel-module_carousel__2ILZE .slick-list {\n      margin-right: 80px;\n      margin-bottom: 48px;\n      margin-left: 80px\n  }\n    }\n.Carousel-module_carousel__2ILZE .slick-slide > div {\n      height: 100%;\n    }\n.Carousel-module_item__2G_2x {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  text-align: center;\n  -webkit-transition:\n    background-color 700ms cubic-bezier(0.215, 0.61, 0.355, 1),\n    color 700ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition:\n    background-color 700ms cubic-bezier(0.215, 0.61, 0.355, 1),\n    color 700ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.Carousel-module_item__2G_2x a:active,\n  .Carousel-module_item__2G_2x a:hover,\n  .Carousel-module_item__2G_2x a:focus {\n    background-color: #f6f5e8;\n  }\n.Carousel-module_link__1gv3s {\n  text-decoration: none;\n}\n.Carousel-module_link__1gv3s:hover,\n  .Carousel-module_link__1gv3s:focus {\n    color: #000;\n  }\n.Carousel-module_mobileCarouselIntroductionWrapper__1Y0_X {\n  margin-top: 0;\n  margin-right: 20px;\n  margin-bottom: 60px;\n  margin-left: 20px;\n}\n@media (min-width: 640px) {\n.Carousel-module_mobileCarouselIntroductionWrapper__1Y0_X {\n    margin-right: 40px;\n    margin-bottom: 100px;\n    margin-left: 40px\n}\n  }\n.Carousel-module_mobileCarouselIntroductionWrapper__1Y0_X p {\n    max-width: 100%;\n    font-size: 14px;\n  }\n@media (min-width: 1025px) {\n.Carousel-module_fullWidthSlides__2sXZx .Carousel-module_mobileCarouselIntroductionWrapper__1Y0_X {\n      margin-right: 80px;\n      margin-bottom: 40px;\n      margin-left: 40px\n  }\n    }\n.Carousel-module_fullWidthSlides__2sXZx .slick-list.slick-list {\n    margin-right: 0;\n    margin-left: 0;\n  }\n.Carousel-module_footer__NX8AO {\n  position: relative;\n  font-size: 14px;\n  line-height: 1.6;\n}\n@media (min-width: 640px) {\n.Carousel-module_footer__NX8AO {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex\n}\n  }\n.Carousel-module_slideCounter__2MHc_ {\n  display: inline-block;\n  width: 100%;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n@media (min-width: 640px) {\n.Carousel-module_slideCounter__2MHc_ {\n    width: calc((100%) * 2 / 12);\n    padding-right: 0;\n    padding-left: 34px\n}\n  }\n@media (min-width: 1025px) {\n.Carousel-module_slideCounter__2MHc_ {\n    width: calc((100%) * 4 / 12);\n    padding-left: 80px\n}\n  }\n.Carousel-module_dark__eKBpb .Carousel-module_slideCounter__2MHc_ {\n    color: #666;\n  }\n.Carousel-module_light__2WA9F .Carousel-module_slideCounter__2MHc_ {\n    color: #fffef2;\n  }\n.Carousel-module_flush__qpy47.Carousel-module_flush__qpy47 .Carousel-module_slideCounter__2MHc_ {\n    padding-left: 0;\n  }\n.Carousel-module_caption__2q0_n {\n  display: inline-block;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n@media (min-width: 640px) {\n.Carousel-module_caption__2q0_n {\n    width: calc((100%) * 10 / 12);\n    padding-right: calc((100%) * 2 / 12);\n    padding-left: 0\n}\n  }\n@media (min-width: 1025px) {\n.Carousel-module_caption__2q0_n {\n    width: calc((100%) * 8 / 12);\n    padding-right: calc((100%) * 2 / 12);\n    padding-left: calc((100%) * 1 / 12)\n}\n  }\n.Carousel-module_dark__eKBpb .Carousel-module_caption__2q0_n {\n    color: #666;\n  }\n.Carousel-module_light__2WA9F .Carousel-module_caption__2q0_n {\n    color: #fffef2;\n  }\n.Carousel-module_flush__qpy47.Carousel-module_flush__qpy47 .Carousel-module_caption__2q0_n {\n    padding-right: 0;\n  }\n@media (min-width: 640px) {\n.Carousel-module_onlyChild__35v-P {\n    width: 100%;\n    padding-left: 34px\n}\n  }\n@media (min-width: 1025px) {\n.Carousel-module_onlyChild__35v-P {\n    padding-left: 80px\n}\n  }\n.Carousel-module_flush__qpy47.Carousel-module_flush__qpy47 .Carousel-module_onlyChild__35v-P {\n    padding-right: 0;\n    padding-left: 0;\n  }\n.Carousel-module_loading__1PDBz {\n  min-height: 400px;\n}\n");exports.Carousel=function(t){var o,_,c,h=t.autoplaySpeed,x=void 0===h?3e3:h,g=t.className,b=t.hasAutoplay,f=void 0!==b&&b,v=t.hasFlushPagination,S=void 0!==v&&v,I=t.hasFullWidthSlides,L=void 0!==I&&I,j=t.hasShowCaption,P=void 0!==j&&j,q=t.hasSlideCounter,W=void 0!==q&&q,F=t.id,H=t.initialSlideIndex,X=void 0===H?0:H,K=t.introduction,A=t.isCompact,U=void 0!==A&&A,D=t.slides,T=void 0===D?[]:D,Z=t.slideRefs,O=void 0===Z?[]:Z,G=t.theme,J=T.length,R=a.useThemeContext(G,"dark"),Y=e.useState(0),Q=Y[0],V=Y[1],$=e.useState(!0),nn=$[0],en=$[1],tn=e.useState(!0),on=tn[0],an=tn[1],rn=e.useState(L),ln=rn[0],sn=rn[1],dn=e.useState(i.get_1(T[X],"caption","")),mn=dn[0],un=dn[1],pn=e.useState(X+1+" / "+J),_n=pn[0],cn=pn[1];l.useWindowHasResized();var hn=0;if(hn=L||s.isViewport("xs to sm only")?1:s.isViewport("md only")?2:s.isViewport("lg to xl only")?3:4,0===J)return null;var xn=k.default(z.base,((o={})[z.fullWidthSlides]=L,o),z[R],g),gn=function(n){var e=n.autoplaySpeed,t=n.className,i=n.hasAutoplay,o=n.hasFlushPagination,a=n.hasFullWidthSlides,l=n.initialSlideIndex,s=n.isNextButtonActive,d=n.isPreviousButtonActive,m=n.Pagination,u=n.NextButton,p=n.PreviousButton,_=n.progressIndex,c=n.theme;return{autoplay:i,autoplaySpeed:e,appendDots:function(n){return w.default.createElement(m,{dots:n,hasFlushPagination:o,progressIndex:_,theme:c})},centerMode:!1,className:t,customPaging:function(){return w.default.createElement("div",null)},dots:!0,infinite:a,initialSlide:l,nextArrow:w.default.createElement(u,{isActive:s,theme:c}),prevArrow:w.default.createElement(p,{isActive:d,theme:c}),responsive:[{breakpoint:r.BREAKPOINTS.get("sm").maxWidth,settings:{slidesToShow:1}},{breakpoint:r.BREAKPOINTS.get("md").maxWidth,settings:{slidesToShow:a?1:2}},{breakpoint:r.BREAKPOINTS.get("x2l").minWidth,settings:{slidesToShow:a?1:3}}],slidesToScroll:1,slidesToShow:a?1:4,speed:500,swipeToSlide:!0}}({autoplaySpeed:x,className:z.carousel,hasAutoplay:f,hasFlushPagination:S,hasFullWidthSlides:L,initialSlideIndex:X,isNextButtonActive:on,isPreviousButtonActive:ln,Pagination:M,NextButton:E,PreviousButton:B,progressIndex:Q,theme:R}),bn=K&&!s.isViewport("xs to md only")&&!L,fn=bn?J+1:J;return w.default.createElement("div",{className:xn,id:F},!bn&&K&&w.default.createElement("aside",{className:z.mobileCarouselIntroductionWrapper},w.default.createElement(y,{cta:K.cta,description:K.description,eyebrow:K.eyebrow,heading:K.heading,theme:R})),w.default.createElement(C.default,n.__assign({},gn,{afterChange:function(n){en(!0),un(T[n].caption),cn(n+1+" of "+J)},beforeChange:function(n,e){if(en(!1),V(e),!L){var t=fn-e;sn(0!==e),an(t!==hn)}}}),bn&&w.default.createElement(y,{cta:K.cta,description:K.description,eyebrow:K.eyebrow,heading:K.heading,theme:R}),T.map((function(e,t){var i=e.url,o=n.__rest(e,["url"]);return w.default.createElement("div",{className:z.slideWrapper,key:t,ref:O[t]},o.isLoading?w.default.createElement(u.Loading,{className:z.loading,isLoading:!0,shouldFillSpace:!0}):w.default.createElement(d.ConditionalWrapper,{alternateWrapper:function(n){return w.default.createElement("div",{className:z.item},n)},condition:!!i,wrapper:function(n){return w.default.createElement(m.Hyperlink,{className:k.default(z.item,z.link),theme:R,title:"Link to "+o.heading,url:i},n)}},w.default.createElement(N,n.__assign({},o,{isFullWidthSlide:L,theme:R}))))}))),(P||W)&&w.default.createElement("footer",{className:k.default(z.footer,(_={},_[z.flush]=S,_))},W&&!U&&w.default.createElement("div",{className:z.slideCounter},fn>1&&_n),P&&w.default.createElement(p.Transition,{isActive:nn&&!!mn,type:"fade"},w.default.createElement("div",{className:k.default(z.caption,(c={},c[z.onlyChild]=!W||U,c))},mn))))};
