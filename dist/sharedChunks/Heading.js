"use strict";var n=require("react"),e=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var i=require("./ThemeContext.js");require("./VariantSelectContext.js");var a=require("./style-inject.es.js");function o(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var t=o(n),r=o(e),l={base:"Heading-module_base__Afh6b",dark:"Heading-module_dark__3xDuY",light:"Heading-module_light__O5PRI",serifFont:"Heading-module_serifFont__pIB5u",mediumWeightFont:"Heading-module_mediumWeightFont__3u5dB",flush:"Heading-module_flush__229Fy",xXSmall:"Heading-module_xXSmall__1VQgr",xSmall:"Heading-module_xSmall__3AWRl",small:"Heading-module_small__3Aeb8",medium:"Heading-module_medium__5lYPh",large:"Heading-module_large__2BJbn",xLarge:"Heading-module_xLarge__2F_YR"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Heading-module_base__Afh6b {\n  padding: 0;\n  margin: 0;\n  margin-bottom: 30px;\n  font-family: 'Suisse Regular', sans-serif;\n  font-weight: 400;\n  line-height: 1.2;\n  -ms-text-size-adjust: 100%;\n      text-size-adjust: 100%;\n}\n.Heading-module_dark__3xDuY {\n  color: #333;\n}\n.Heading-module_light__O5PRI {\n  color: #fffef2;\n}\n.Heading-module_serifFont__pIB5u {\n  font-family: 'Zapf Humanist', serif;\n}\n/**\n   * Override for Korean region translation\n   */\nhtml[lang*='ko'] .Heading-module_serifFont__pIB5u,\n  html[lang*='KO'] .Heading-module_serifFont__pIB5u {\n    font-family: 'Suisse Regular', sans-serif;\n    font-weight: 400;\n  }\n.Heading-module_serifFont__pIB5u {\n\n  font-weight: 300;\n}\n.Heading-module_mediumWeightFont__3u5dB {\n  font-family: 'Suisse Medium', sans-serif;\n}\n.Heading-module_flush__229Fy {\n  margin-bottom: 10px;\n}\n.Heading-module_xXSmall__1VQgr {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.Heading-module_xXSmall__1VQgr.Heading-module_flush__229Fy {\n    margin-bottom: 5px;\n  }\n.Heading-module_xSmall__3AWRl {\n  font-size: 16px;\n  line-height: 1.6;\n}\n.Heading-module_small__3Aeb8 {\n  font-size: 18px;\n  line-height: 1.5;\n}\n.Heading-module_medium__5lYPh {\n  font-size: 20px;\n  line-height: 1.4;\n}\n.Heading-module_large__2BJbn {\n  font-size: 22px;\n  line-height: 1.4;\n}\n.Heading-module_xLarge__2F_YR {\n  font-size: 24px;\n  line-height: 1.33;\n}\n.Heading-module_xLarge__2F_YR.Heading-module_serifFont__pIB5u {\n    font-size: 25px;\n  }\n@media (min-width: 640px) {\n.Heading-module_xLarge__2F_YR {\n    font-size: 26px\n}\n\n    .Heading-module_xLarge__2F_YR.Heading-module_serifFont__pIB5u {\n      font-size: 30px;\n    }\n  }\n@media (min-width: 1025px) {\n.Heading-module_xLarge__2F_YR {\n    font-size: 30px\n}\n\n    .Heading-module_xLarge__2F_YR.Heading-module_serifFont__pIB5u {\n      font-size: 30px;\n    }\n  }\n");exports.Heading=function(n){var e,a,o,m=n.children,d=n.className,_=n.hasMediumWeightFont,s=void 0!==_&&_,u=n.hasSerifFont,g=void 0!==u&&u,x=n.id,h=n.isFlush,p=void 0!==h&&h,f=n.level,H=n.size,b=n.theme,c=void 0===b?"dark":b,w=i.useThemeContext(c,"dark");if(!m)return null;var k=r.default(l.base,((e={})[l.flush]=p,e),((a={})[l.serifFont]=g,a),((o={})[l.mediumWeightFont]=s,o),l[H],l[w],d);return t.default.createElement("h"+f,{className:k,id:x},m)};