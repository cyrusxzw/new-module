"use strict";var n=require("./_rollupPluginBabelHelpers.js"),e=require("react"),t=require("prop-types"),o=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./IEErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js");var i=require("./NotificationContext.js");require("./ProductDetailContext.js"),require("./ThemeContext.js"),require("./VariantSelectContext.js");var a=require("./Icon.js"),r=require("./style-inject.es.js");function s(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var l=s(e),d=s(t),p=s(o),c="NotificationModal-module_base__2-kkO",u="NotificationModal-module_isNotVisible__1Br1n",m="NotificationModal-module_closeButton__3-0-I",x="NotificationModal-module_notificationMessage__3-NPq";r.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.NotificationModal-module_base__2-kkO {\n  position: absolute;\n  z-index: 2;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: var(--color-tan);\n  -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.NotificationModal-module_base__2-kkO.NotificationModal-module_isNotVisible__1Br1n {\n    height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n.NotificationModal-module_closeButton__3-0-I {\n  padding-top: 20px;\n  padding-right: 20px;\n  border: none;\n  background: transparent;\n  outline: none;\n}\n@media (min-width: 640px) {\n.NotificationModal-module_closeButton__3-0-I {\n    padding-top: 34px;\n    padding-right: 34px\n}\n  }\n@media (min-width: 1025px) {\n.NotificationModal-module_closeButton__3-0-I {\n    padding-top: 40px;\n    padding-right: 40px\n}\n  }\n.NotificationModal-module_closeButton__3-0-I:hover {\n    cursor: pointer;\n  }\n.NotificationModal-module_notificationMessage__3-NPq {\n  padding-top: 20px;\n  padding-left: 20px;\n}\n@media (min-width: 640px) {\n.NotificationModal-module_notificationMessage__3-NPq {\n    padding-top: 34px;\n    padding-left: 34px\n}\n  }\n@media (min-width: 1025px) {\n.NotificationModal-module_notificationMessage__3-NPq {\n    padding-top: 40px;\n    padding-left: 40px\n}\n  }\n");var f=function(e){var t=e.backgroundColor,o=e.className,r=e.notificationMessage,s=n._objectWithoutProperties(e,["backgroundColor","className","notificationMessage"]),d=i.useNotificationContext(),f=d.actionType,b=d.dispatch,g=d.showModal,_=p.default(c,!g&&u,o),k=t?{backgroundColor:t}:void 0;return l.default.createElement("div",n._extends({className:_,style:k},s),l.default.createElement("span",{className:x},r),l.default.createElement("button",{className:m,"data-ref":"close",onClick:function(n){n.preventDefault(),b({type:f.SHOW_NOTIFICATION})},tabIndex:-1},l.default.createElement(a.Icon,{height:15,name:"close",theme:"dark",width:15})))};f.propTypes={backgroundColor:d.default.string,className:d.default.string,notificationMessage:d.default.string},f.defaultProps={backgroundColor:void 0,className:void 0,notificationMessage:void 0},exports.NotificationModal=f;
