"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../sharedChunks/_rollupPluginBabelHelpers.js"),n=require("react"),a=require("prop-types"),s=require("classnames"),r=require("../../sharedChunks/ConditionalWrapper.js"),t=require("../../sharedChunks/Heading.js"),i=require("../../sharedChunks/Hyperlink.js"),o=require("../../sharedChunks/style-inject.es.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/viewports.js");var l=d(n),m=d(a),p=d(s),u="Message-module_base__1Nwji",x="Message-module_link__3bdiD",c="Message-module_content__2XTZs",g="Message-module_heading__3xX0t",b="Message-module_copy__tGB7L";o.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Message-module_base__1Nwji {\n  width: 100%;\n  margin: 24px 20px;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: left;\n}\n@media (min-width: 640px) {\n.Message-module_base__1Nwji {\n    padding: 0 34px;\n    margin: 24px 0;\n    text-align: center\n}\n  }\n@media (min-width: 1025px) {\n.Message-module_base__1Nwji {\n    padding: 0 20px\n}\n  }\n.Message-module_base__1Nwji,\n  .Message-module_base__1Nwji * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.Message-module_link__3bdiD {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n}\n@media (min-width: 640px) {\n.Message-module_link__3bdiD {\n    text-align: center\n}\n  }\n@media (min-width: 640px) {\n.Message-module_content__2XTZs {\n    max-width: 400px;\n    margin: 0 auto\n}\n  }\n.Message-module_heading__3xX0t {\n  margin-top: 0;\n  margin-bottom: 4px;\n  color: #333;\n  font-family: 'Suisse Medium', sans-serif;\n  font-size: 14px;\n}\n.Message-module_heading__3xX0t span {\n    border-bottom: 1px solid transparent;\n    -webkit-transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);\n    transition: all 300ms cubic-bezier(0.47, 0, 0.745, 0.715);\n  }\n.Message-module_link__3bdiD:hover .Message-module_heading__3xX0t span {\n      border-bottom: 1px solid #333;\n    }\n.Message-module_copy__tGB7L {\n  color: #666;\n  font-size: 14px;\n}\n");var _=function(n){var a=n.className,s=n.copy,o=n.heading,d=n.id,m=n.link,_=p.default(u,a);return l.default.createElement("div",{className:_,id:d},l.default.createElement(r.ConditionalWrapper,{condition:!!m,wrapper:function(n){return l.default.createElement(i.Hyperlink,e._extends({className:x},m),n)}},l.default.createElement("div",{className:c},l.default.createElement(t.Heading,{className:g,level:"4",size:"xXSmall"},l.default.createElement("span",null,o)),l.default.createElement("div",{className:b},s))))};_.propTypes={className:m.default.string,copy:m.default.string.isRequired,heading:m.default.string.isRequired,id:m.default.string,link:m.default.shape({title:m.default.string.isRequired,url:m.default.string.isRequired})},_.defaultProps={className:void 0,copy:void 0,heading:void 0,id:void 0,link:void 0};var h="SecondaryMessage-module_base__2yn2H",k="SecondaryMessage-module_wrapper__1Ikdm",f="SecondaryMessage-module_multiple__29N-B";o.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.SecondaryMessage-module_base__2yn2H {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-family: 'Suisse Regular', sans-serif;\n}\n.SecondaryMessage-module_base__2yn2H,\n  .SecondaryMessage-module_base__2yn2H * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n@media (max-width: 639px) {\n.SecondaryMessage-module_base__2yn2H {\n    background-color: #f3f1e4\n}\n  }\n@media (min-width: 640px) {\n.SecondaryMessage-module_wrapper__1Ikdm {\n    padding-bottom: 60px\n}\n  }\n@media (min-width: 1025px) {\n.SecondaryMessage-module_wrapper__1Ikdm {\n    padding-bottom: 100px\n}\n  }\n@media (min-width: 640px) {\n.SecondaryMessage-module_multiple__29N-B {\n    width: 50%\n}\n  }\n@media (max-width: 639px) {\n.SecondaryMessage-module_multiple__29N-B:first-of-type {\n      padding-bottom: 20px;\n      border-bottom: 1px solid rgba(51, 51, 51, 0.2);\n      margin-bottom: 0\n\n      /* border-image: linear-gradient(0.25turn, transparent, var(--color-grey-45), transparent) 10 20%; */\n  }\n    }\n@media (min-width: 640px) {\n.SecondaryMessage-module_multiple__29N-B:first-of-type {\n      border-right: 1px solid rgba(51, 51, 51, 0.2)\n\n      /* border-image: linear-gradient(transparent, var(--color-grey-45), transparent) 10 100%; */\n  }\n    }\n");var y=function(n){var a=n.className,s=n.id,r=n.items;if(!r||0===r.length)return null;var t=r.length>1,i=p.default(h,a);return l.default.createElement("section",{className:k},l.default.createElement("aside",{className:i,id:s},r.map((function(n,a){var s=n.className,r=n.id,i=e._objectWithoutProperties(n,["className","id"]);return l.default.createElement(_,e._extends({className:p.default(s,e._defineProperty({},f,t)),key:r||a},i))}))))};y.propTypes={className:m.default.string,id:m.default.string,items:function(e,n,a,s){var r=n[a].length;if(r>e)return new Error("Invalid array length ".concat(r," (expected less than ").concat(e,") for prop ").concat(a," supplied to ").concat(s,"."))}.bind(null,2)},y.defaultProps={className:void 0,id:void 0,items:void 0},exports.SecondaryMessage=y;
