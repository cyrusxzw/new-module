"use strict";var n=require("react"),e=require("react-uid"),o=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var t=require("./ThemeContext.js");require("./VariantSelectContext.js");var a=require("./style-inject.es.js");function l(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var u=l(n),i=l(o),d={base:"TwoColumnLayout-module_base__2yBvR",sidebar:"TwoColumnLayout-module_sidebar__ahl3O",reverse:"TwoColumnLayout-module_reverse__3PqUh",content:"TwoColumnLayout-module_content__3aiag",fullWidth:"TwoColumnLayout-module_fullWidth__3SACE",flushOnSmall:"TwoColumnLayout-module_flushOnSmall__T7sSU",contentOnly:"TwoColumnLayout-module_contentOnly__3ilps"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.TwoColumnLayout-module_base__2yBvR {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.TwoColumnLayout-module_base__2yBvR *,\n    .TwoColumnLayout-module_base__2yBvR *::before,\n    .TwoColumnLayout-module_base__2yBvR *::after {\n      -webkit-box-sizing: inherit;\n              box-sizing: inherit;\n    }\n@media (min-width: 1025px) {\n.TwoColumnLayout-module_base__2yBvR {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start\n}\n  }\n.TwoColumnLayout-module_sidebar__ahl3O {\n  width: 100%;\n  padding-right: 20px;\n  padding-left: 20px;\n}\n@media (min-width: 640px) {\n.TwoColumnLayout-module_sidebar__ahl3O {\n    padding-right: calc((100%) * 2 / 12);\n    padding-left: calc((100%) * 2 / 12)\n}\n  }\n@media (min-width: 1025px) {\n.TwoColumnLayout-module_sidebar__ahl3O {\n    width: calc((100%) * 4 / 12);\n    padding-right: calc(40px * 2);\n    padding-left: 0\n}\n\n    .TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_sidebar__ahl3O {\n      padding-right: 0;\n      padding-left: calc(40px * 2);\n    }\n  }\n.TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_sidebar__ahl3O {\n    margin-bottom: 30px;\n  }\n@media (min-width: 1025px) {\n.TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_sidebar__ahl3O {\n      margin-bottom: 0\n  }\n    }\n.TwoColumnLayout-module_content__3aiag {\n  width: 100%;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-bottom: 30px;\n}\n.TwoColumnLayout-module_content__3aiag.TwoColumnLayout-module_fullWidth__3SACE {\n    padding-left: 0;\n  }\n.TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_content__3aiag.TwoColumnLayout-module_fullWidth__3SACE {\n    padding-right: 0;\n    padding-left: 20px;\n  }\n@media (max-width: 639px) {\n    .TwoColumnLayout-module_content__3aiag.TwoColumnLayout-module_fullWidth__3SACE.TwoColumnLayout-module_flushOnSmall__T7sSU,\n    .TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_content__3aiag.TwoColumnLayout-module_fullWidth__3SACE.TwoColumnLayout-module_flushOnSmall__T7sSU {\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }\n.TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_content__3aiag {\n    margin-bottom: 0;\n  }\n@media (min-width: 640px) {\n.TwoColumnLayout-module_content__3aiag {\n    padding-right: calc((100%) * 2 / 12);\n    padding-left: calc((100%) * 2 / 12)\n}\n\n    .TwoColumnLayout-module_content__3aiag.TwoColumnLayout-module_fullWidth__3SACE {\n      padding-right: calc((100%) * 1.5 / 12);\n      padding-left: 0;\n    }\n\n    .TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_content__3aiag.TwoColumnLayout-module_fullWidth__3SACE {\n      padding-right: 0;\n      padding-left: calc((100%) * 1.5 / 12);\n    }\n  }\n@media (min-width: 1025px) {\n.TwoColumnLayout-module_content__3aiag {\n    width: calc((100%) * 8 / 12);\n    padding-right: calc((100%) * 1 / 12);\n    padding-left: calc((100%) * 2 / 12);\n    margin-bottom: 0\n}\n\n    .TwoColumnLayout-module_content__3aiag.TwoColumnLayout-module_fullWidth__3SACE {\n      padding-right: calc((100%) * 1 / 12);\n      padding-left: 0;\n    }\n\n    .TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_content__3aiag {\n      padding-right: calc((100%) * 2 / 12);\n      padding-left: calc((100%) * 1 / 12);\n    }\n\n      .TwoColumnLayout-module_reverse__3PqUh .TwoColumnLayout-module_content__3aiag.TwoColumnLayout-module_fullWidth__3SACE {\n        padding-right: 0;\n        padding-left: calc((100%) * 1 / 12);\n      }\n\n    .TwoColumnLayout-module_reverse__3PqUh.TwoColumnLayout-module_contentOnly__3ilps .TwoColumnLayout-module_content__3aiag {\n      width: 100%;\n      padding-left: calc((100%) * 5 / 12);\n    }\n  }\n.TwoColumnLayout-module_reverse__3PqUh {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n@media (min-width: 1025px) {\n.TwoColumnLayout-module_reverse__3PqUh {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end\n}\n  }\n@media (min-width: 1025px) {\n.TwoColumnLayout-module_contentOnly__3ilps {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start\n}\n  }\n.TwoColumnLayout-module_contentOnly__3ilps.TwoColumnLayout-module_reverse__3PqUh {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n");exports.TwoColumnLayout=function(n){var o,a,l,m,r=n.childrenClassNames,_=n.className,s=n.content,c=n.hasFullWidthContent,p=void 0!==c&&c,x=n.id,w=n.isFlushOnSmall,y=void 0!==w&&w,h=n.isReversed,C=void 0===h||h,g=n.sidebar,b=n.theme,f=t.useThemeContext(b,"dark"),T=e.useUID(),L=i.default(d.base,((o={})[d.reverse]=C,o),((a={})[d.contentOnly]=!g,a),d[f],_),k=i.default(d.content,((l={})[d.fullWidth]=p,l),((m={})[d.flushOnSmall]=y,m),null==r?void 0:r.content),v=i.default(d.sidebar,null==r?void 0:r.sidebar);return u.default.createElement("div",{className:L,id:x},u.default.createElement("div",{className:k,"data-testid":"data-testid-TwoColumnLayout",id:(x||T)+"-mainColumn"},s),g&&u.default.createElement("aside",{className:v,id:(x||T)+"-sidebarColumn"},g))};
