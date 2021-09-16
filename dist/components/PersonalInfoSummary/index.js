"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),n=require("classnames");require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js");var r=require("../../sharedChunks/ThemeContext.js");require("../../sharedChunks/VariantSelectContext.js");var a=require("../../sharedChunks/style-inject.es.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("query-string");var t=o(e),s=o(n),i={base:"PersonalInfoSummary-module_base__F5l6g",dark:"PersonalInfoSummary-module_dark___EBiI",light:"PersonalInfoSummary-module_light__1pfKq"};a.styleInject(':root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.PersonalInfoSummary-module_base__F5l6g {\n  font-family: "Suisse Regular", sans-serif;\n  font-size: 20px;\n}\n@media (min-width: 1025px) {\n.PersonalInfoSummary-module_base__F5l6g {\n    font-size: 24px\n}\n  }\n.PersonalInfoSummary-module_base__F5l6g.PersonalInfoSummary-module_dark___EBiI {\n    color: #333;\n  }\n.PersonalInfoSummary-module_base__F5l6g.PersonalInfoSummary-module_light__1pfKq {\n    color: #fffef2;\n  }\n');exports.PersonalInfoSummary=function(e){var n,a=e.className,o=e.prefixOptions,l=void 0===o?[]:o,u=e.shouldShowPrefix,m=void 0===u||u,h=e.shouldSwapFullNameOrder,d=void 0!==h&&h,p=e.shouldRemoveNameSpace,x=void 0!==p&&p,f=e.theme,c=e.userDetails,k=r.useThemeContext(f,"dark");if(!c)return null;var b=s.default(i.base,i[k],a),_=m?function(e,n){var r,a;return null!==(a=null===(r=e.find((function(e){return e.value===n})))||void 0===r?void 0:r.text)&&void 0!==a?a:""}(l,c.prefix):"",w=x?"":" ",C=d?""+c.lastName+w+c.firstName:""+c.firstName+w+c.lastName,g=null!==(n=c.suffix)&&void 0!==n?n:"";return t.default.createElement("div",{className:b,"data-testid":"personal-info-summary"},t.default.createElement("div",null,_+" "+C+" "+g),t.default.createElement("div",null,c.email),t.default.createElement("div",null,c.dateOfBirth))};
