"use strict";var e=require("react"),t=require("classnames"),n=require("./VariantSelectContext.js");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var o=require("./ThemeContext.js"),r=require("./Heading.js"),a=require("./style-inject.es.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=s(e),u=s(t),l={base:"StoreHoursList-module_base__3dYCe",heading:"StoreHoursList-module_heading__1cOLu",list:"StoreHoursList-module_list__31PtS",item:"StoreHoursList-module_item__2tt42",dark:"StoreHoursList-module_dark__1Ri68",light:"StoreHoursList-module_light__pXExk",dayName:"StoreHoursList-module_dayName__2GHDo",hours:"StoreHoursList-module_hours__9wjVn",alternateHours:"StoreHoursList-module_alternateHours__KdRt3",alternateHoursNote:"StoreHoursList-module_alternateHoursNote__-5uP2"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.StoreHoursList-module_base__3dYCe {\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 14px;\n}\n.StoreHoursList-module_base__3dYCe,\n  .StoreHoursList-module_base__3dYCe * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.StoreHoursList-module_heading__1cOLu {\n  margin-bottom: 6px;\n}\n.StoreHoursList-module_list__31PtS {\n  padding: 0;\n  margin: 0;\n  margin-bottom: 30px;\n  line-height: 1.5;\n  list-style-type: none;\n}\n.StoreHoursList-module_item__2tt42 {\n  padding: 0;\n  margin: 0;\n}\n.StoreHoursList-module_dark__1Ri68 .StoreHoursList-module_item__2tt42 {\n    color: #666;\n  }\n.StoreHoursList-module_light__pXExk .StoreHoursList-module_item__2tt42 {\n    color: #e0dfd6;\n  }\n.StoreHoursList-module_dayName__2GHDo {\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 14px;\n}\n.StoreHoursList-module_dayName__2GHDo::after {\n    content: ': ';\n  }\n.StoreHoursList-module_hours__9wjVn {\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 14px;\n}\n.StoreHoursList-module_dark__1Ri68 .StoreHoursList-module_alternateHours__KdRt3 {\n    color: #965d34;\n  }\n.StoreHoursList-module_light__pXExk .StoreHoursList-module_alternateHours__KdRt3 {\n    color: #ce9273;\n  }\n.StoreHoursList-module_alternateHours__KdRt3::after {\n    content: '*';\n  }\n.StoreHoursList-module_alternateHoursNote__-5uP2 {\n  margin-bottom: 15px;\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 14px;\n}\n.StoreHoursList-module_dark__1Ri68 .StoreHoursList-module_alternateHoursNote__-5uP2 {\n    color: #965d34;\n  }\n.StoreHoursList-module_light__pXExk .StoreHoursList-module_alternateHoursNote__-5uP2 {\n    color: #ce9273;\n  }\n.StoreHoursList-module_alternateHoursNote__-5uP2::before {\n    content: '*';\n  }\n");exports.StoreHoursList=function(e){var t=e.alternateHoursNote,a=e.className,s=e.heading,m=e.hoursList,d=void 0===m?[]:m,_=e.theme,x=o.useThemeContext(_,"dark");if(0===d.length)return null;var H=u.default(l.base,l[x],a),p=!!n.find_1(d,"isAlternate");return i.default.createElement("div",{className:H,"data-testid":"data-testid-StoreHoursList"},s&&i.default.createElement(r.Heading,{className:l.heading,level:"4",size:"xXSmall",theme:x},s),i.default.createElement("ul",{className:l.list},d.map((function(e){var t;return i.default.createElement("li",{className:l.item,key:e.id},i.default.createElement("span",{className:l.dayName},e.dayName),i.default.createElement("span",{className:u.default(l.hours,(t={},t[l.alternateHours]=e.isAlternate,t))},e.hours))}))),t&&p&&i.default.createElement("div",{className:l.alternateHoursNote},t))};
