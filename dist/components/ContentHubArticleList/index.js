"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("classnames"),n=require("../../sharedChunks/ContentHubArticle.js"),i=require("../../sharedChunks/style-inject.es.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/viewports.js"),require("../../sharedChunks/useOnScreen.js"),require("../../sharedChunks/environment.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/Image.js"),require("../../sharedChunks/Hyperlink.js"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/Transition.js"),require("prop-types"),require("react-dom"),require("../../sharedChunks/useHasMounted.js");var r=l(e),o=l(t),a={base:"ContentHubArticleList-module_base__3EQb3",mobile:"ContentHubArticleList-module_mobile__2_Gk_",mobileMiddleRow:"ContentHubArticleList-module_mobileMiddleRow__2JAUt",reverseColumn:"ContentHubArticleList-module_reverseColumn__212f8",middleArticle:"ContentHubArticleList-module_middleArticle__1AR-b",leftMiddleArticle:"ContentHubArticleList-module_leftMiddleArticle__2YrRz",rightMiddleArticle:"ContentHubArticleList-module_rightMiddleArticle__2Y-TL",article:"ContentHubArticleList-module_article__3gPI4",nonFirstRow:"ContentHubArticleList-module_nonFirstRow__39pbZ","top-left-0":"ContentHubArticleList-module_top-left-0__18FHD","top-right-0":"ContentHubArticleList-module_top-right-0__2OBPn","bottom-left-0":"ContentHubArticleList-module_bottom-left-0__28yPN","bottom-right-0":"ContentHubArticleList-module_bottom-right-0__JZkvM","top-left-1":"ContentHubArticleList-module_top-left-1__2EPO-","top-right-1":"ContentHubArticleList-module_top-right-1__PE3e4","bottom-left-1":"ContentHubArticleList-module_bottom-left-1__B11fn","bottom-right-1":"ContentHubArticleList-module_bottom-right-1__3VwmD",topLeft0:"ContentHubArticleList-module_top-left-0__18FHD",topRight0:"ContentHubArticleList-module_top-right-0__2OBPn",bottomLeft0:"ContentHubArticleList-module_bottom-left-0__28yPN",bottomRight0:"ContentHubArticleList-module_bottom-right-0__JZkvM",topLeft1:"ContentHubArticleList-module_top-left-1__2EPO-",topRight1:"ContentHubArticleList-module_top-right-1__PE3e4",bottomLeft1:"ContentHubArticleList-module_bottom-left-1__B11fn",bottomRight1:"ContentHubArticleList-module_bottom-right-1__3VwmD"};i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ContentHubArticleList-module_base__3EQb3 {\n  display: none;\n}\n@media (min-width: 640px) {\n.ContentHubArticleList-module_base__3EQb3 {\n    display: grid;\n    max-width: 1440px;\n    margin: 0 auto;\n    grid-column-gap: 24px;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: auto 1fr\n}\n  }\n@media (min-width: 1025px) {\n.ContentHubArticleList-module_base__3EQb3 {\n    grid-column-gap: 40px\n}\n  }\n@media (min-width: 640px) {\n.ContentHubArticleList-module_mobile__2_Gk_ {\n    display: none\n}\n  }\n@media (min-width: 1025px) {\n.ContentHubArticleList-module_mobile__2_Gk_ {\n    display: none\n}\n  }\n.ContentHubArticleList-module_mobileMiddleRow__2JAUt {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n.ContentHubArticleList-module_reverseColumn__212f8 {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.ContentHubArticleList-module_middleArticle__1AR-b {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.ContentHubArticleList-module_leftMiddleArticle__2YrRz {\n  padding-right: 10px;\n}\n.ContentHubArticleList-module_rightMiddleArticle__2Y-TL {\n  padding-left: 10px;\n}\n@media (min-width: 640px) {\n.ContentHubArticleList-module_article__3gPI4 {\n    margin-bottom: 50px\n}\n  }\n@media (min-width: 1025px) {\n.ContentHubArticleList-module_article__3gPI4 {\n    margin-bottom: 70px\n}\n  }\n.ContentHubArticleList-module_nonFirstRow__39pbZ {\n  display: none;\n  grid-row: 1 / 3;\n}\n.ContentHubArticleList-module_top-left-0__18FHD {\n  align-self: end;\n  grid-column: 1 / 4;\n}\n.ContentHubArticleList-module_top-right-0__2OBPn {\n  align-self: end;\n  grid-column: 4 / 6;\n  grid-row-end: span 2;\n}\n.ContentHubArticleList-module_bottom-left-0__28yPN {\n  align-self: end;\n  grid-column: 1 / 3;\n  grid-row: 2 / 4;\n}\n.ContentHubArticleList-module_bottom-right-0__JZkvM {\n  grid-column: 3 / 6;\n}\n.ContentHubArticleList-module_top-left-1__2EPO- {\n  align-self: end;\n  grid-column: 1 / 3;\n  grid-row-end: span 2;\n}\n.ContentHubArticleList-module_top-right-1__PE3e4 {\n  align-self: end;\n  grid-column: 3 / 6;\n}\n.ContentHubArticleList-module_bottom-left-1__B11fn {\n  grid-column: 1 / 4;\n}\n.ContentHubArticleList-module_bottom-right-1__3VwmD {\n  align-self: end;\n  grid-column: 4 / 6;\n  grid-row: 2 / 4;\n}\n@media all and (-ms-high-contrast: none) and (min-width: 640px) {\n  .ContentHubArticleList-module_base__3EQb3 {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 24px 1fr 24px 1fr 24px 1fr 24px 1fr;\n      -ms-grid-rows: auto 1fr\n  }\n    }\n@media all and (-ms-high-contrast: none) and (min-width: 1025px) {\n  .ContentHubArticleList-module_base__3EQb3 {\n      -ms-grid-columns: 1fr 40px 1fr 40px 1fr 40px 1fr 40px 1fr\n  }\n    }\n@media all and (-ms-high-contrast: none) {\n\n  .ContentHubArticleList-module_nonFirstRow__39pbZ {\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 2;\n  }\n\n  .ContentHubArticleList-module_top-left-0__18FHD {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 5;\n  }\n\n  .ContentHubArticleList-module_top-right-0__2OBPn {\n    -ms-grid-column: 7;\n    -ms-grid-column-span: 3;\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 2;\n  }\n\n  .ContentHubArticleList-module_bottom-left-0__28yPN {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 2;\n  }\n\n  .ContentHubArticleList-module_bottom-right-0__JZkvM {\n    -ms-grid-column: 5;\n    -ms-grid-column-span: 5;\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 2;\n  }\n\n  .ContentHubArticleList-module_top-left-1__2EPO- {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 2;\n  }\n\n  .ContentHubArticleList-module_top-right-1__PE3e4 {\n    -ms-grid-column: 5;\n    -ms-grid-column-span: 5;\n  }\n\n  .ContentHubArticleList-module_bottom-left-1__B11fn {\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 5;\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 2;\n  }\n\n  .ContentHubArticleList-module_bottom-right-1__3VwmD {\n    -ms-grid-column: 7;\n    -ms-grid-column-span: 3;\n    -ms-grid-row: 2;\n    -ms-grid-row-span: 2;\n  }\n}\n");exports.ContentHubArticleList=function(e){var t,i,l,d,m,u=e.articles,s=e.className,c=e.isFirstGroup,b=void 0!==c&&c,g=e.pattern,h=void 0===g?0:g,_=u&&u.length,f=o.default(a.base,s),p=o.default(a.mobile,s),C=o.default(a.mobileMiddleRow,((t={})[a.reverseColumn]=0===h,t),s),T=o.default(a["top-left-"+h],a.article,((i={})[a.nonFirstRow]=_<3&&0===h||_<2,i)),A=o.default(a["top-right-"+h],a.article,((l={})[a.nonFirstRow]=_<3&&1===h||_<2,l)),H=o.default(a["bottom-left-"+h],a.article,((d={})[a.nonFirstRow]=1===_&&0===h,d)),k=o.default(a["bottom-right-"+h],a.article,((m={})[a.nonFirstRow]=1===_&&1===h,m)),w=o.default(a.leftMiddleArticle),x=o.default(a.middleArticle),L=o.default(a.rightMiddleArticle),v=-1,y=function(){return v++,!0},R=function(e,t){var n=e?[4,3]:[2,1];return t||n.reverse(),0===h?n[0]:n[1]},E=function(e,t){var n=R(e,t);return u[_-n]};return r.default.createElement("section",null,r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:f},r.default.createElement("div",{className:T,"data-testid":"data-testid-ContentHubArticle-top"},_>=R(!0,!0)&&r.default.createElement(n.ContentHubArticle,{articleRef:E(!0,!0).articleRef,category:E(!0,!0).category,dataTestRef:E(!0,!0).id,horizontalThumbnail:E(!0,!0).horizontalThumbnail,id:E(!0,!0).id,isHorizontal:Boolean(!h),isInFirstGroup:b,key:E(!0,!0).id,longTitle:E(!0,!0).longTitle,onClick:E(!0,!0).onClick,readingTime:E(!0,!0).readingTime,uri:E(!0,!0).uri,verticalThumbnail:E(!0,!0).verticalThumbnail})),r.default.createElement("div",{className:A,"data-testid":"data-testid-ContentHubArticle-top"},_>=R(!0,!1)&&r.default.createElement(n.ContentHubArticle,{articleRef:E(!0,!1).articleRef,category:E(!0,!1).category,dataTestRef:E(!0,!1).id,horizontalThumbnail:E(!0,!1).horizontalThumbnail,id:E(!0,!1).id,isHorizontal:Boolean(h),isInFirstGroup:b,key:E(!0,!1).id,longTitle:E(!0,!1).longTitle,onClick:E(!0,!1).onClick,readingTime:E(!0,!1).readingTime,uri:E(!0,!1).uri,verticalThumbnail:E(!0,!1).verticalThumbnail})),r.default.createElement("div",{className:H,"data-testid":"data-testid-ContentHubArticle-bottom"},_>=R(!1,!0)&&r.default.createElement(n.ContentHubArticle,{articleRef:E(!1,!0).articleRef,category:E(!1,!0).category,dataTestRef:E(!1,!0).id,horizontalThumbnail:E(!1,!0).horizontalThumbnail,id:E(!1,!0).id,isHorizontal:Boolean(h),isInFirstGroup:b,longTitle:E(!1,!0).longTitle,onClick:E(!1,!0).onClick,readingTime:E(!1,!0).readingTime,uri:E(!1,!0).uri,verticalThumbnail:E(!1,!0).verticalThumbnail})),r.default.createElement("div",{className:k,"data-testid":"data-testid-ContentHubArticle-bottom"},_>=R(!1,!1)&&r.default.createElement(n.ContentHubArticle,{articleRef:E(!1,!1).articleRef,category:E(!1,!1).category,dataTestRef:E(!1,!1).id,horizontalThumbnail:E(!1,!1).horizontalThumbnail,id:E(!1,!1).id,isHorizontal:Boolean(!h),isInFirstGroup:b,longTitle:E(!1,!1).longTitle,onClick:E(!1,!1).onClick,readingTime:E(!1,!1).readingTime,uri:E(!1,!1).uri,verticalThumbnail:E(!1,!1).verticalThumbnail}))),0===h&&r.default.createElement("div",{className:p},_>=4&&y()&&r.default.createElement(n.ContentHubArticle,{articleRef:u[v].mobileArticleRef,category:u[v].category,dataTestRef:u[v].id,horizontalThumbnail:u[v].horizontalThumbnail,id:u[v].id,isHorizontal:!0,isInFirstGroup:b,key:u[v].id,longTitle:u[v].longTitle,onClick:u[v].onClick,readingTime:u[v].readingTime,uri:u[v].uri,verticalThumbnail:u[v].verticalThumbnail}),r.default.createElement("div",{className:C},r.default.createElement("div",{className:x},_>=2&&y()&&r.default.createElement(n.ContentHubArticle,{articleRef:u[v].mobileArticleRef,category:u[v].category,className:L,dataTestRef:u[v].id,horizontalThumbnail:u[v].horizontalThumbnail,id:u[v].id,isHorizontal:!1,isInFirstGroup:b,key:u[v].id,longTitle:u[v].longTitle,onClick:u[v].onClick,readingTime:u[v].readingTime,uri:u[v].uri,verticalThumbnail:u[v].verticalThumbnail})),r.default.createElement("div",{className:x},_>=3&&y()&&r.default.createElement(n.ContentHubArticle,{articleRef:u[v].mobileArticleRef,category:u[v].category,className:w,dataTestRef:u[v].id,horizontalThumbnail:u[v].horizontalThumbnail,id:u[v].id,isHorizontal:!1,isInFirstGroup:b,key:u[v].id,longTitle:u[v].longTitle,onClick:u[v].onClick,readingTime:u[v].readingTime,uri:u[v].uri,verticalThumbnail:u[v].verticalThumbnail}))),_>=1&&y()&&r.default.createElement(n.ContentHubArticle,{articleRef:u[v].mobileArticleRef,category:u[v].category,dataTestRef:u[v].id,horizontalThumbnail:u[v].horizontalThumbnail,id:u[v].id,isHorizontal:!0,isInFirstGroup:b,key:u[v].id,longTitle:u[v].longTitle,onClick:u[v].onClick,readingTime:u[v].readingTime,uri:u[v].uri,verticalThumbnail:u[v].verticalThumbnail})),1===h&&r.default.createElement("div",{className:p},r.default.createElement("div",{className:C},r.default.createElement("div",{className:x},_>=4&&y()&&r.default.createElement(n.ContentHubArticle,{articleRef:u[v].mobileArticleRef,category:u[v].category,className:w,dataTestRef:u[v].id,horizontalThumbnail:u[v].horizontalThumbnail,id:u[v].id,isHorizontal:!1,isInFirstGroup:b,key:u[v].id,longTitle:u[v].longTitle,onClick:u[v].onClick,readingTime:u[v].readingTime,uri:u[v].uri,verticalThumbnail:u[v].verticalThumbnail})),r.default.createElement("div",{className:x})),_>=3&&y()&&r.default.createElement(n.ContentHubArticle,{articleRef:u[v].mobileArticleRef,category:u[v].category,dataTestRef:u[v].id,horizontalThumbnail:u[v].horizontalThumbnail,id:u[v].id,isHorizontal:!0,isInFirstGroup:b,key:u[v].id,longTitle:u[v].longTitle,onClick:u[v].onClick,readingTime:u[v].readingTime,uri:u[v].uri,verticalThumbnail:u[v].verticalThumbnail}),_>=2&&y()&&r.default.createElement(n.ContentHubArticle,{articleRef:u[v].mobileArticleRef,category:u[v].category,dataTestRef:u[v].id,horizontalThumbnail:u[v].horizontalThumbnail,id:u[v].id,isHorizontal:!0,isInFirstGroup:b,key:u[v].id,longTitle:u[v].longTitle,onClick:u[v].onClick,readingTime:u[v].readingTime,uri:u[v].uri,verticalThumbnail:u[v].verticalThumbnail}),r.default.createElement("div",{className:C},r.default.createElement("div",{className:x}),r.default.createElement("div",{className:x},_>=1&&y()&&r.default.createElement(n.ContentHubArticle,{articleRef:u[v].mobileArticleRef,category:u[v].category,className:L,dataTestRef:u[v].id,horizontalThumbnail:u[v].horizontalThumbnail,id:u[v].id,isHorizontal:!1,isInFirstGroup:b,key:u[v].id,longTitle:u[v].longTitle,onClick:u[v].onClick,readingTime:u[v].readingTime,uri:u[v].uri,verticalThumbnail:u[v].verticalThumbnail}))))))};
