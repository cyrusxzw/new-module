"use strict";var e=require("react"),n=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./IEErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var t=require("./ThemeContext.js");require("./VariantSelectContext.js");var i=require("./Figure.js"),o=require("./Hyperlink.js"),a=require("./style-inject.es.js"),r=require("./Paragraph.js"),d=require("./SectionHeading.js");function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=m(e),s=m(n),u={base:"Media-module_base__3Naat",hasFullWidthImage:"Media-module_hasFullWidthImage__3x6dj",foregroundImage:"Media-module_foregroundImage__1XF6r",figure:"Media-module_figure__3qASf",left:"Media-module_left__2Xx8Y",center:"Media-module_center__2M3nz",right:"Media-module_right__EAoYo"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Media-module_base__3Naat {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (min-width: 1025px) {\n.Media-module_base__3Naat {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 50%;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto\n}\n  }\n.Media-module_hasFullWidthImage__3x6dj {\n  height: 100%;\n}\n@media (min-width: 1025px) {\n.Media-module_hasFullWidthImage__3x6dj {\n    position: absolute;\n    z-index: 10;\n    width: 100%\n}\n  }\n.Media-module_foregroundImage__1XF6r {\n  position: absolute;\n  right: 0;\n  bottom: -30px;\n  width: 70%;\n}\n@media (max-width: 639px) {\n.Media-module_foregroundImage__1XF6r {\n    height: calc(100% - 80px);\n    max-height: 300px\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.Media-module_foregroundImage__1XF6r {\n    height: 70%;\n    max-height: 335px\n}\n  }\n@media (min-width: 1025px) {\n.Media-module_foregroundImage__1XF6r {\n    height: 60%;\n    max-height: 350px\n}\n  }\n.Media-module_foregroundImage__1XF6r a {\n    position: static;\n    display: block;\n  }\n.Media-module_foregroundImage__1XF6r img {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: block;\n    width: auto;\n    max-width: 100%;\n    height: auto;\n    max-height: 100%;\n  }\n.Media-module_figure__3qASf {\n  width: 100%;\n  height: 100%;\n}\n.Media-module_figure__3qASf img {\n    width: 100%;\n    height: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    line-height: 0;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n    -webkit-transform: none;\n            transform: none;\n  }\n.Media-module_left__2Xx8Y .Media-module_figure__3qASf img,\n    .Media-module_center__2M3nz .Media-module_figure__3qASf img,\n    .Media-module_right__EAoYo .Media-module_figure__3qASf img {\n      -o-object-fit: contain;\n         object-fit: contain;\n    }\n.Media-module_left__2Xx8Y .Media-module_figure__3qASf img {\n      -o-object-position: left;\n         object-position: left;\n    }\n.Media-module_right__EAoYo .Media-module_figure__3qASf img {\n      -o-object-position: right;\n         object-position: right;\n    }\n@media (min-width: 1025px) {\n.Media-module_figure__3qASf img {\n      position: absolute;\n      top: 0;\n      right: 0;\n      max-height: none\n  }\n    }\n.Media-module_figure__3qASf picture {\n    position: static;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    line-height: 0;\n  }\n");var p=function(e){var n,t=e.className,a=e.containMedia,r=e.foregroundImage,d=e.foregroundImageLink,m=e.hasFullWidthImage,p=void 0!==m&&m,x=e.media,_=s.default(t,u.base,u[a],((n={})[u.hasFullWidthImage]=p,n));return l.default.createElement("div",{className:_},l.default.createElement(i.Figure,{className:u.figure},x),r&&l.default.createElement(i.Figure,{className:u.foregroundImage},d?l.default.createElement(o.Hyperlink,{title:d.title,url:d.url},r):r))},x={base:"Content-module_base__2wNf2",hasFullWidthImage:"Content-module_hasFullWidthImage__3FSu5",reverse:"Content-module_reverse__2G1Xa",innerWrapper:"Content-module_innerWrapper__1P8Uo",header:"Content-module_header__1Zhc4",section:"Content-module_section__2bLv3",content:"Content-module_content__1jnOX",dark:"Content-module_dark__1gS5r",light:"Content-module_light__1Y0Af",description:"Content-module_description__2mhCr"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Content-module_base__2wNf2 {\n  z-index: 20;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n}\n@media (min-width: 1025px) {\n.Content-module_base__2wNf2 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 50%;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto\n}\n  }\n@media (min-width: 1025px) {\n.Content-module_hasFullWidthImage__3FSu5 {\n    margin-top: auto;\n    margin-right: 0;\n    margin-bottom: auto;\n    margin-left: 50%\n}\n  }\n@media (min-width: 1025px) {\n.Content-module_hasFullWidthImage__3FSu5.Content-module_reverse__2G1Xa {\n    margin-right: 50%;\n    margin-left: 0\n}\n  }\n.Content-module_innerWrapper__1P8Uo {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 40px 20px;\n}\n@media (min-width: 640px) {\n.Content-module_innerWrapper__1P8Uo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n    padding: 90px 34px\n}\n  }\n@media (min-width: 1025px) {\n.Content-module_innerWrapper__1P8Uo {\n    width: calc(100% * 8 / 12);\n    max-width: 780px;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 115px 0;\n    margin-top: auto;\n    margin-right: auto;\n    margin-bottom: auto;\n    margin-left: auto\n}\n  }\n.Content-module_hasFullWidthImage__3FSu5 .Content-module_innerWrapper__1P8Uo {\n    height: 100%;\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.Content-module_header__1Zhc4 {\n    width: 48%;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.Content-module_section__2bLv3 .Content-module_header__1Zhc4 {\n      margin-right: 34px\n  }\n    }\n.Content-module_content__1jnOX {\n  margin-top: 10px;\n  font-size: 14px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.Content-module_content__1jnOX {\n    width: 48%;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.Content-module_content__1jnOX {\n    margin-left: 34px\n}\n  }\n.Content-module_dark__1gS5r .Content-module_content__1jnOX {\n    border-top: 2px solid #4a4a4a;\n  }\n.Content-module_light__1Y0Af .Content-module_content__1jnOX {\n    border-top: 2px solid #fffef2;\n  }\n.Content-module_description__2mhCr {\n  margin-top: 10px;\n  margin-right: 0;\n  margin-bottom: 20px;\n  margin-left: 0;\n  font-size: 14px;\n}\n");var _=function(e){var n,i,o=e.className,a=e.content,m=e.copy,u=e.hasFullWidthImage,p=void 0!==u&&u,_=e.hasSerifFontHeading,h=void 0!==_&&_,g=e.isReverse,c=void 0!==g&&g,f=e.theme,b=t.useThemeContext(f,"dark"),k=s.default(o,x.base,((n={})[x.reverse]=c,n),((i={})[x.hasFullWidthImage]=p,i),x[b.toLowerCase()]);return l.default.createElement("div",{className:k},l.default.createElement("div",{className:x.innerWrapper},l.default.createElement(d.SectionHeading,{className:x.header,eyebrow:m.eyebrow,hasSerifFontHeading:h,heading:m.heading,isFlush:!0,isPageHeading:!1,subHeading:m.subHeading,theme:f}),l.default.createElement("div",{className:x.content},m.description&&l.default.createElement(r.ParagraphSet,{className:x.description,isLarge:!1,theme:f},m.description),a)))},h={base:"MediaWithContent-module_base__27eiZ",reverse:"MediaWithContent-module_reverse__1St4I"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.MediaWithContent-module_base__27eiZ {\n  position: relative;\n}\n@media (min-width: 1025px) {\n.MediaWithContent-module_base__27eiZ {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 100vh;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row\n}\n  }\n@media (min-width: 1025px) {\n.MediaWithContent-module_reverse__1St4I {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse\n}\n  }\n");var g=e.forwardRef((function(e,n){var i=e.backgroundColor,o=void 0===i?"#F6F5E8":i,a=e.className,r=e.containMedia,d=e.content,m=e.copy,u=e.foregroundImage,x=e.foregroundImageLink,g=e.hasFullWidthImage,c=void 0!==g&&g,f=e.hasSerifFontHeading,b=void 0===f||f,k=e.isReverse,w=void 0!==k&&k,C=e.media,I=e.theme,M=t.useThemeContext(I,"dark"),v=s.default(h.base,h[M],a),j=o?{backgroundColor:o}:void 0;return l.default.createElement("div",{className:v,ref:n,style:j},l.default.createElement(p,{containMedia:r,foregroundImage:u,foregroundImageLink:x,hasFullWidthImage:c,media:C}),l.default.createElement(_,{content:d,copy:m,hasFullWidthImage:c,hasSerifFontHeading:b,isReverse:w,theme:I}))}));exports.MediaWithContent=g;
