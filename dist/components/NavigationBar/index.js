"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../../sharedChunks/_rollupPluginBabelHelpers.js"),e=require("react"),a=require("prop-types"),r=require("classnames"),t=require("../../sharedChunks/Hyperlink.js"),i=require("../../sharedChunks/style-inject.es.js");function o(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/viewports.js");var l=o(e),s=o(a),u=o(r),d="NavigationBar-module_wrapper__1gvhE",m="NavigationBar-module_list__3ZozU",g="NavigationBar-module_listItem__3ZhKL",p="NavigationBar-module_link__1TVk0",_="NavigationBar-module_hasChildren__2gb9Q",h="NavigationBar-module_linkInnerText__1oKqc",c="NavigationBar-module_isActive__1b1Hg";i.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.NavigationBar-module_wrapper__1gvhE {\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(235, 234, 222, 1);\n}\n.NavigationBar-module_wrapper__1gvhE::before,\n  .NavigationBar-module_wrapper__1gvhE::after {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    height: 100%;\n    content: '';\n  }\n.NavigationBar-module_wrapper__1gvhE::before {\n    left: 0;\n    width: 20px;\n    background-image:\n      -webkit-gradient(\n        linear,\n        left top, right top,\n        from(rgba(235, 234, 222, 1)),\n        to(rgba(235, 234, 222, 0))\n      );\n    background-image:\n      linear-gradient(\n        to right,\n        rgba(235, 234, 222, 1) 0%,\n        rgba(235, 234, 222, 0) 100%\n      );\n  }\n.NavigationBar-module_wrapper__1gvhE::after {\n    right: 0;\n    width: 50px;\n    background-image:\n      -webkit-gradient(\n        linear,\n        left top, right top,\n        from(rgba(235, 234, 222, 0)),\n        to(rgba(235, 234, 222, 1))\n      );\n    background-image:\n      linear-gradient(\n        to right,\n        rgba(235, 234, 222, 0) 0%,\n        rgba(235, 234, 222, 1) 100%\n      );\n  }\n.NavigationBar-module_list__3ZozU {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto;\n  height: 64px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 0 0 20px;\n  margin: 0;\n  background-color: transparent;\n  list-style-type: none;\n  white-space: nowrap;\n}\n@media (min-width: 640px) {\n.NavigationBar-module_list__3ZozU {\n    padding-left: 34px\n}\n  }\n@media (min-width: 1025px) {\n.NavigationBar-module_list__3ZozU {\n    height: 110px;\n    padding-left: 40px\n}\n  }\n.NavigationBar-module_listItem__3ZhKL {\n  margin: 0 10px;\n}\n.NavigationBar-module_listItem__3ZhKL:first-of-type {\n    margin-left: 0;\n  }\n.NavigationBar-module_listItem__3ZhKL:last-of-type {\n    padding-right: 50px;\n  }\n.NavigationBar-module_link__1TVk0 {\n  display: block;\n  border: none;\n  background-color: transparent;\n  color: #666;\n  cursor: pointer;\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 14px;\n\n  /* Web UI has global button styles with outlines */\n  outline: none !important;\n  text-decoration: none;\n}\n.NavigationBar-module_link__1TVk0.NavigationBar-module_hasChildren__2gb9Q {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-right: 10px;\n  }\n.NavigationBar-module_link__1TVk0.NavigationBar-module_hasChildren__2gb9Q::after {\n      position: absolute;\n      right: -15px;\n      width: 1px;\n      height: 10px;\n      background-color: currentColor;\n      content: '';\n      pointer-events: none;\n    }\n.NavigationBar-module_link__1TVk0 .NavigationBar-module_linkInnerText__1oKqc {\n    display: block;\n  }\n.NavigationBar-module_link__1TVk0 .NavigationBar-module_linkInnerText__1oKqc::after {\n      display: block;\n      border-bottom: solid 1px currentcolor;\n      margin-top: 2px;\n      content: '';\n      -webkit-transform: scaleX(0);\n              transform: scaleX(0);\n      -webkit-transform-origin: left;\n              transform-origin: left;\n      -webkit-transition: -webkit-transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n      transition: -webkit-transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n      transition: transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n      transition: transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n.NavigationBar-module_link__1TVk0:focus {\n    color: #666;\n  }\n.NavigationBar-module_link__1TVk0:focus .NavigationBar-module_linkInnerText__1oKqc {\n      outline: 1px solid currentColor;\n      outline-offset: 5px;\n      -webkit-transition: outline-offset 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n      transition: outline-offset 200ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n.NavigationBar-module_link__1TVk0:hover,\n  .NavigationBar-module_link__1TVk0.NavigationBar-module_isActive__1b1Hg {\n    color: #666;\n  }\n.NavigationBar-module_link__1TVk0:hover .NavigationBar-module_linkInnerText__1oKqc::after, .NavigationBar-module_link__1TVk0.NavigationBar-module_isActive__1b1Hg .NavigationBar-module_linkInnerText__1oKqc::after {\n      -webkit-transform: scaleX(1);\n              transform: scaleX(1);\n    }\n");var k="NAVIGATION_BAR",b="NAVIGATION_BAR_PARENT_LINK",f="NAVIGATION_BAR_CHILD_LINK",x=function(e){var a=e.childLinks,r=e.className,i=e.parentLink,o=e.selectedUrl,s=!!a.length;if(!s&&!i)return null;var x=n._toConsumableArray(a);return i&&x.splice(0,0,i),l.default.createElement("div",{className:u.default(d,r),"data-test-ref":k,"data-testid":"data-testid-NavigationBar"},l.default.createElement("ul",{className:u.default(m)},x.map((function(e,a){var r,d=e.hasTargetInNewWindow,m=e.text,k=e.url,x=u.default((r={},n._defineProperty(r,p,!0),n._defineProperty(r,_,s&&i&&0===a),n._defineProperty(r,c,k===o),r));return l.default.createElement("li",{className:u.default(g),"data-testid":i&&0===a?b:f,key:a},l.default.createElement(t.Hyperlink,{className:x,dataTestRef:i&&0===a?b:f,hasTargetInNewWindow:d,theme:"dark",url:k},l.default.createElement("span",{className:u.default(h)},m)))}))))};x.propTypes={childLinks:s.default.arrayOf(s.default.shape({hasTargetInNewWindow:s.default.bool,text:s.default.string.isRequired,url:s.default.string.isRequired})),className:s.default.string,parentLink:s.default.shape({hasTargetInNewWindow:s.default.bool,text:s.default.string.isRequired,url:s.default.string.isRequired}),selectedUrl:s.default.string},x.defaultProps={childLinks:[],className:void 0,parentLink:void 0,selectedUrl:void 0},exports.NavigationBar=x;
