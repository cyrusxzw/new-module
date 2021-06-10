"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("react"),e=require("classnames");require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/IEErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js");var o=require("../../sharedChunks/ThemeContext.js");require("../../sharedChunks/VariantSelectContext.js");var t=require("../../sharedChunks/ConditionalWrapper.js"),i=require("../../sharedChunks/Figure.js"),r=require("../../sharedChunks/Hyperlink.js"),a=require("../../sharedChunks/style-inject.es.js"),d=require("../../sharedChunks/Paragraph.js"),l=require("../../sharedChunks/SectionHeading.js");function m(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/viewports.js"),require("../../sharedChunks/Heading.js");var p=m(n),u=m(e),_={base:"HeroBannerMedia-module_base__aeFwR",fullWidth:"HeroBannerMedia-module_fullWidth__1HNK5",offsetX:"HeroBannerMedia-module_offsetX__10mc1",fullHeight:"HeroBannerMedia-module_fullHeight__lF17x",foregroundImage:"HeroBannerMedia-module_foregroundImage__BF6Hu",figure:"HeroBannerMedia-module_figure__fR4xY",left:"HeroBannerMedia-module_left__3Nn3Q",center:"HeroBannerMedia-module_center__23fWu",right:"HeroBannerMedia-module_right__2LXG9",top:"HeroBannerMedia-module_top__3JbnE",bottom:"HeroBannerMedia-module_bottom__2MbLJ"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.HeroBannerMedia-module_base__aeFwR {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (min-width: 1025px) {\n.HeroBannerMedia-module_base__aeFwR {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 50%;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto\n}\n  }\n.HeroBannerMedia-module_fullWidth__1HNK5 {\n  height: 100%;\n}\n@media (min-width: 640px) {\n.HeroBannerMedia-module_fullWidth__1HNK5 {\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    width: 100%\n}\n  }\n@media (min-width: 1025px) {\n.HeroBannerMedia-module_fullWidth__1HNK5 {\n    position: absolute;\n    z-index: 10;\n    width: 100%\n}\n  }\n.HeroBannerMedia-module_offsetX__10mc1 {\n  height: 100%;\n}\n@media (min-width: 1025px) {\n.HeroBannerMedia-module_offsetX__10mc1 {\n    position: absolute;\n    z-index: 10;\n    width: 100%\n}\n  }\n.HeroBannerMedia-module_fullHeight__lF17x {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.HeroBannerMedia-module_foregroundImage__BF6Hu {\n  position: absolute;\n  right: 0;\n  bottom: -30px;\n  width: 70%;\n}\n@media (max-width: 639px) {\n.HeroBannerMedia-module_foregroundImage__BF6Hu {\n    height: calc(100% - 80px);\n    max-height: 300px\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.HeroBannerMedia-module_foregroundImage__BF6Hu {\n    height: 70%;\n    max-height: 335px\n}\n\n    .HeroBannerMedia-module_fullWidth__1HNK5 .HeroBannerMedia-module_foregroundImage__BF6Hu {\n      height: 40%;\n    }\n  }\n@media (min-width: 1025px) {\n.HeroBannerMedia-module_foregroundImage__BF6Hu {\n    height: 60%;\n    max-height: 350px\n}\n\n    .HeroBannerMedia-module_fullWidth__1HNK5 .HeroBannerMedia-module_foregroundImage__BF6Hu {\n      width: 35%;\n    }\n  }\n.HeroBannerMedia-module_foregroundImage__BF6Hu a {\n    position: static;\n    display: block;\n  }\n.HeroBannerMedia-module_foregroundImage__BF6Hu img {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    display: block;\n    width: auto;\n    max-width: 100%;\n    height: auto;\n    max-height: 100%;\n  }\n.HeroBannerMedia-module_figure__fR4xY {\n  width: 100%;\n  height: 100%;\n}\n.HeroBannerMedia-module_figure__fR4xY img {\n    width: 100%;\n    height: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    line-height: 0;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n    -webkit-transform: none;\n            transform: none;\n  }\n.HeroBannerMedia-module_left__3Nn3Q .HeroBannerMedia-module_figure__fR4xY img,\n    .HeroBannerMedia-module_center__23fWu .HeroBannerMedia-module_figure__fR4xY img,\n    .HeroBannerMedia-module_right__2LXG9 .HeroBannerMedia-module_figure__fR4xY img,\n    .HeroBannerMedia-module_top__3JbnE .HeroBannerMedia-module_figure__fR4xY img,\n    .HeroBannerMedia-module_bottom__2MbLJ .HeroBannerMedia-module_figure__fR4xY img {\n      -o-object-fit: contain;\n         object-fit: contain;\n    }\n.HeroBannerMedia-module_left__3Nn3Q .HeroBannerMedia-module_figure__fR4xY img {\n      -o-object-position: left;\n         object-position: left;\n    }\n.HeroBannerMedia-module_right__2LXG9 .HeroBannerMedia-module_figure__fR4xY img {\n      -o-object-position: right;\n         object-position: right;\n    }\n.HeroBannerMedia-module_top__3JbnE .HeroBannerMedia-module_figure__fR4xY img {\n      -o-object-position: top;\n         object-position: top;\n    }\n.HeroBannerMedia-module_bottom__2MbLJ .HeroBannerMedia-module_figure__fR4xY img {\n      -o-object-position: bottom;\n         object-position: bottom;\n    }\n@media (min-width: 640px) and (max-width: 1024px) {\n.HeroBannerMedia-module_fullWidth__1HNK5 .HeroBannerMedia-module_figure__fR4xY img {\n        max-height: none\n    }\n      }\n@media (min-width: 1025px) {\n.HeroBannerMedia-module_figure__fR4xY img {\n      position: absolute;\n      top: 0;\n      right: 0;\n      max-height: none\n  }\n    }\n.HeroBannerMedia-module_figure__fR4xY picture {\n    position: static;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    line-height: 0;\n  }\n");var s=function(n){var e,o=n.className,a=n.containMedia,d=n.foregroundImage,l=n.foregroundImageLink,m=n.media,s=n.variation,h=void 0===s?"default":s;if(!d&&!m)return null;var x="full-display"===h,f="article-header"===h,g=h.match(/^(default|full-display|landing-header|wide-header)$/),c=u.default(o,_.base,_[a],((e={})[_.fullHeight]=x,e[_.fullWidth]=g,e[_.offsetX]=f,e));return p.default.createElement("div",{className:c},m&&p.default.createElement(i.Figure,{className:_.figure},m),d&&p.default.createElement(i.Figure,{className:_.foregroundImage},p.default.createElement(t.ConditionalWrapper,{condition:!!l,wrapper:function(n){return p.default.createElement(r.Hyperlink,{title:l.title,url:l.url},n)}},d)))},h={base:"HeroBannerContent-module_base__3vBef",fullHeight:"HeroBannerContent-module_fullHeight__2nxxr",wide:"HeroBannerContent-module_wide__1-6q8",offsetX:"HeroBannerContent-module_offsetX__3-2EM",offsetXFullWidthMedia:"HeroBannerContent-module_offsetXFullWidthMedia__Ue5Pg",fullWidth:"HeroBannerContent-module_fullWidth__2e8Gy",topOffest:"HeroBannerContent-module_topOffest__qKRMn",innerWrapper:"HeroBannerContent-module_innerWrapper__1Ct-Z",noMedia:"HeroBannerContent-module_noMedia__11Dcf",header:"HeroBannerContent-module_header__ewicl",section:"HeroBannerContent-module_section__2i_WZ",content:"HeroBannerContent-module_content__2-GWZ",description:"HeroBannerContent-module_description__39lz1"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.HeroBannerContent-module_base__3vBef {\n  z-index: 20;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n}\n@media (min-width: 640px) {\n.HeroBannerContent-module_base__3vBef {\n    width: calc(100% * 6 / 12);\n    margin-left: calc(100% * 3 / 12)\n}\n  }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_base__3vBef {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: calc(100% * 4 / 12 - 80px);\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto;\n    margin-right: auto;\n    margin-left: calc(100% * 2 / 12)\n}\n  }\n.HeroBannerContent-module_fullHeight__2nxxr {\n  min-height: 100vh;\n}\n@media (min-width: 640px) {\n.HeroBannerContent-module_fullHeight__2nxxr {\n    width: calc(100% * 8 / 12);\n    margin-left: calc(100% * 1 / 12)\n}\n  }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_fullHeight__2nxxr {\n    width: calc(100% * 4 / 12 - 80px);\n    margin-right: auto;\n    margin-left: calc(100% * 2 / 12)\n}\n  }\n@media (min-width: 640px) {\n.HeroBannerContent-module_wide__1-6q8 {\n    width: calc(100% * 8 / 12);\n    margin-left: calc(100% * 1 / 12)\n}\n  }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_wide__1-6q8 {\n    width: calc(100% * 5 / 12);\n    margin-left: calc(100% * 3 / 12)\n}\n  }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_offsetX__3-2EM {\n    width: calc(100% * 4 / 12);\n    margin-left: calc(100% * 5 / 12)\n}\n  }\n@media (min-width: 640px) {\n.HeroBannerContent-module_offsetXFullWidthMedia__Ue5Pg {\n    width: calc(100% * 6 / 12);\n    margin-left: calc(100% * 6 / 12)\n}\n  }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_offsetXFullWidthMedia__Ue5Pg {\n    width: calc(100% * 4 / 12);\n    margin-left: calc(100% * 5 / 12)\n}\n  }\n.HeroBannerContent-module_fullWidth__2e8Gy {\n  position: relative;\n}\n.HeroBannerContent-module_topOffest__qKRMn.HeroBannerContent-module_topOffest__qKRMn {\n  margin-top: 0;\n}\n.HeroBannerContent-module_innerWrapper__1Ct-Z {\n  padding-top: 40px;\n  padding-right: 20px;\n  padding-bottom: 40px;\n  padding-left: 20px;\n}\n.HeroBannerContent-module_fullHeight__2nxxr .HeroBannerContent-module_innerWrapper__1Ct-Z,\n  .HeroBannerContent-module_wide__1-6q8 .HeroBannerContent-module_innerWrapper__1Ct-Z {\n    max-width: none;\n  }\n@media (min-width: 640px) {\n.HeroBannerContent-module_innerWrapper__1Ct-Z {\n    padding-top: 50px;\n    padding-right: 0;\n    padding-left: 0\n}\n  }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_innerWrapper__1Ct-Z {\n    padding-top: 200px;\n    padding-bottom: 100px\n}\n  }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_innerWrapper__1Ct-Z {\n    padding-top: 200px;\n    padding-bottom: 100px\n}\n  }\n@media (min-width: 640px) {\n.HeroBannerContent-module_fullWidth__2e8Gy .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-top: 175px;\n      padding-bottom: 150px\n  }\n    }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_fullWidth__2e8Gy .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-top: 200px;\n      padding-bottom: 100px\n  }\n    }\n.HeroBannerContent-module_fullHeight__2nxxr .HeroBannerContent-module_innerWrapper__1Ct-Z {\n    padding-top: 180px;\n  }\n@media (min-width: 640px) {\n.HeroBannerContent-module_fullHeight__2nxxr .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-top: 300px;\n      padding-bottom: 150px\n  }\n    }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_fullHeight__2nxxr .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-top: 200px;\n      padding-bottom: 100px\n  }\n    }\n@media (max-width: 639px) {\n.HeroBannerContent-module_noMedia__11Dcf .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-top: 180px\n  }\n    }\n@media (min-width: 640px) and (max-width: 1024px) {\n.HeroBannerContent-module_noMedia__11Dcf .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-top: 175px\n  }\n    }\n@media (min-width: 640px) {\n.HeroBannerContent-module_wide__1-6q8 .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-top: 300px;\n      padding-bottom: 150px\n  }\n    }\n@media (min-width: 1025px) {\n.HeroBannerContent-module_wide__1-6q8 .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-top: 200px;\n      padding-bottom: 100px\n  }\n    }\n@media (min-width: 640px) {\n.HeroBannerContent-module_offsetXFullWidthMedia__Ue5Pg .HeroBannerContent-module_innerWrapper__1Ct-Z {\n      padding-right: 34px\n  }\n    }\n@media (min-width: 640px) and (max-width: 1024px) {\n.HeroBannerContent-module_header__ewicl {\n    width: 100%;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.HeroBannerContent-module_section__2i_WZ .HeroBannerContent-module_header__ewicl {\n      margin-right: 34px\n  }\n    }\n@media (max-width: 639px) {\n.HeroBannerContent-module_content__2-GWZ {\n    margin-top: 15px\n}\n  }\n.HeroBannerContent-module_description__39lz1 {\n  margin-top: 0;\n  margin-right: 0;\n  margin-bottom: 30px;\n  margin-left: 0;\n  font-size: 16px;\n}\n");var x=function(n){var e,t=n.className,i=n.content,r=n.copy,a=n.hasNoMedia,m=n.hasSerifFontHeading,_=void 0===m||m,s=n.hasTopOffset,x=void 0!==s&&s,f=n.theme,g=n.variation,c=void 0===g?"default":g,H=o.useThemeContext(f,"dark"),b=c.match(/^(default|full-display|landing-header|wide-header)$/),B="full-display"===c,C="landing-header"===c,k="wide-header"===c,w="article-header"===c,M=u.default(t,h.base,((e={})[h.fullWidth]=b,e[h.fullHeight]=B,e[h.wide]=k,e[h.offsetX]=w,e[h.offsetXFullWidthMedia]=C,e[h.topOffest]=x,e[h.noMedia]=a&&"full-display"!==c,e),h[H]);return p.default.createElement("div",{className:M},p.default.createElement("div",{className:h.innerWrapper},p.default.createElement(l.SectionHeading,{className:h.header,eyebrow:null==r?void 0:r.eyebrow,hasSerifFontHeading:_,heading:null==r?void 0:r.heading,isFlush:!1,isHeroHeading:!0,isPageHeading:!0,subHeading:r.subHeading,theme:H}),p.default.createElement("div",{className:h.content},(null==r?void 0:r.description)&&p.default.createElement(d.ParagraphSet,{className:h.description,isLarge:!0,theme:H},null==r?void 0:r.description),i)))},f="HeroBanner-module_base__3tCWJ",g="HeroBanner-module_topOffest__1ldh4";a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.HeroBanner-module_base__3tCWJ {\n  position: relative;\n}\n@media (min-width: 1025px) {\n.HeroBanner-module_base__3tCWJ {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse\n}\n  }\n.HeroBanner-module_topOffest__1ldh4 {\n  padding-top: 40px;\n  margin-top: -120px;\n}\n@media (min-width: 640px) {\n.HeroBanner-module_topOffest__1ldh4 {\n    padding-top: 50px;\n    margin-top: -130px\n}\n  }\n@media (min-width: 1025px) {\n.HeroBanner-module_topOffest__1ldh4 {\n    padding-top: 75px;\n    margin-top: -155px\n}\n  }\n");var c=n.forwardRef((function(n,e){var t,i=n.backgroundColor,r=void 0===i?"#F6F5E8":i,a=n.className,d=n.containMedia,l=n.content,m=n.copy,_=n.foregroundImage,h=n.foregroundImageLink,c=n.hasSerifFontHeading,H=void 0===c||c,b=n.hasTopOffset,B=void 0!==b&&b,C=n.media,k=n.theme,w=void 0===k?"dark":k,M=n.variation,v=void 0===M?"default":M,W=u.default(f,((t={})[g]=B,t),a),y=r?{backgroundColor:r}:void 0;return p.default.createElement(o.ThemeContextProvider,{theme:w},p.default.createElement("div",{className:W,ref:e,style:y},p.default.createElement(s,{containMedia:d,foregroundImage:_,foregroundImageLink:h,media:C,variation:v}),p.default.createElement(x,{content:l,copy:m,hasNoMedia:!C,hasSerifFontHeading:H,hasTopOffset:B,variation:v})))}));exports.HeroBanner=c;
