"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),n=require("prop-types"),t=require("~/components/Heading/index.ts"),o=require("~/components/Hidden/index.ts"),r=require("../../sharedChunks/Hyperlink.js");require("../../sharedChunks/viewports.js");var a=require("classnames"),i=require("../../sharedChunks/style-inject.es.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js");var s=l(e),d=l(n),m=l(a),c={base:"FooterBlock_base__30nq0",dark:"FooterBlock_dark__145OS",light:"FooterBlock_light__3rLDm",heading:"FooterBlock_heading__2kMY-",divider:"FooterBlock_divider__23KaL",list:"FooterBlock_list__2H6IJ",copy:"FooterBlock_copy__1BNcT",listItem:"FooterBlock_listItem__2cWAS",learnMore:"FooterBlock_learnMore__19DGW"};i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.FooterBlock_base__30nq0 {\n  font-family: 'Suisse Regular', sans-serif;\n}\n.FooterBlock_base__30nq0.FooterBlock_dark__145OS {\n    color: #333;\n  }\n.FooterBlock_base__30nq0.FooterBlock_light__3rLDm {\n    color: #fffef2;\n  }\n.FooterBlock_heading__2kMY- {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 15px;\n  line-height: 2;\n}\n@media (max-width: 639px) {\n.FooterBlock_heading__2kMY- {\n    font-size: 13px\n}\n  }\n.FooterBlock_divider__23KaL {\n  border-bottom: 1px solid #fffef2;\n  margin: 16px 0;\n}\n.FooterBlock_divider__23KaL.FooterBlock_dark__145OS {\n    border-color: #333;\n  }\n.FooterBlock_divider__23KaL.FooterBlock_light__3rLDm {\n    border-color: #fffef2;\n  }\n@media (max-width: 639px) {\n.FooterBlock_divider__23KaL {\n    margin: 6px 0\n}\n  }\n.FooterBlock_list__2H6IJ {\n  padding-left: 0;\n  margin: 0;\n  list-style: none;\n}\n.FooterBlock_copy__1BNcT,\n.FooterBlock_listItem__2cWAS {\n  font-size: 14px;\n  line-height: 2.5;\n}\n@media (max-width: 639px) {\n.FooterBlock_copy__1BNcT,\n.FooterBlock_listItem__2cWAS {\n    font-size: 12px\n}\n  }\n.FooterBlock_copy__1BNcT svg, .FooterBlock_listItem__2cWAS svg {\n    vertical-align: middle;\n  }\n.FooterBlock_copy__1BNcT {\n  margin-top: 10px;\n  line-height: 1.8;\n}\n@media (min-width: 640px) {\n.FooterBlock_copy__1BNcT {\n    margin-top: 21px\n}\n  }\n@media (min-width: 1025px) {\n.FooterBlock_copy__1BNcT {\n    margin-top: 20px\n}\n  }\n.FooterBlock_copy__1BNcT > :last-child {\n    margin-bottom: 0;\n  }\n.FooterBlock_learnMore__19DGW {\n  text-decoration: underline;\n}\n");var h=r.EXTERNAL_TEXT_LINK,_=r.INTERNAL_NO_ICON_TEXT_LINK,u=function(e){var n=e.className,a=e.copy,i=e.heading,l=e.headingClassName,d=e.isVisibleOnTabletAndMobile,u=e.links,p=e.listClassName,k=e.listItemClassName,x=e.theme,g=m.default(c.base,c[x],n),f=m.default(c.listItem,c.copy),b=m.default(c.divider,c[x]),B=m.default(c.heading,l),v=m.default(c.list,p),C=m.default(c.listItem,k);return s.default.createElement(o.Hidden,{isMedium:!d,isSmall:!d},s.default.createElement("section",{className:g},i&&s.default.createElement(t.Heading,{className:B,hasMediumWeightFont:!0,level:"3",size:"xXSmall",theme:"light"},i),s.default.createElement("div",{className:b}),(null==u?void 0:u.length)&&s.default.createElement("ul",{className:v},u.map((function(e){return s.default.createElement("li",{key:e.id},s.default.createElement(r.Hyperlink,{className:C,dataTestRef:"FOOTER_LINK",hasTargetInNewWindow:e.openInANewWindow,style:e.openInANewWindow?h:_,theme:x,title:e.text,url:e.url},e.text))}))),a&&s.default.createElement("div",{className:f},a)))};u.propTypes={className:d.default.string,copy:d.default.node,heading:d.default.string,headingClassName:d.default.string,isVisibleOnTabletAndMobile:d.default.bool,links:d.default.array,listClassName:d.default.string,listItemClassName:d.default.string,theme:d.default.oneOf(["dark","light"])},u.defaultProps={className:void 0,copy:void 0,heading:void 0,headingClassName:void 0,isVisibleOnTabletAndMobile:!0,links:void 0,listClassName:void 0,listItemClassName:void 0,theme:"dark"},exports.FooterBlock=u;
