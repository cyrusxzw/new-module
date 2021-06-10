"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("react"),e=require("prop-types"),r=require("classnames");require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/IEErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js");var o=require("../../sharedChunks/NotificationContext.js");require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/VariantSelectContext.js");var t=require("../../sharedChunks/NewsletterSignUp.js"),s=require("../../sharedChunks/FooterBlock.js"),i=require("../../sharedChunks/Hidden.js"),a=require("../../sharedChunks/IconLink.js"),d=require("../../sharedChunks/NotificationModal.js"),l=require("../../sharedChunks/style-inject.es.js");function p(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("../../sharedChunks/_rollupPluginBabelHelpers.js"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/Loading.js"),require("../../sharedChunks/Checkbox.js"),require("../../sharedChunks/TextInput.js"),require("../../sharedChunks/Heading.js"),require("../../sharedChunks/Hyperlink.js"),require("../../sharedChunks/viewports.js"),require("../../sharedChunks/environment.js"),require("../../sharedChunks/useWindowHasResized.js"),require("../../sharedChunks/debounce.js"),require("../../sharedChunks/viewport.js"),require("../../sharedChunks/Image.js");var m=p(n),u=p(e),c=p(r),g={base:"Footer_base__18Zrv","block-top":"Footer_block__1oVDs","block-bottom":"Footer_block__1oVDs",bottom:"Footer_bottom__pWCdR",signup:"Footer_signup__2alsN",item:"Footer_item__2fpQF",iconLinks:"Footer_iconLinks__vpsaV",blockTop:"Footer_block__1oVDs",blockBottom:"Footer_block__1oVDs"};l.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Footer_base__18Zrv {\n  position: relative;\n  background-color: #252525;\n}\n.Footer_block__1oVDs {\n  display: grid;\n  display: -ms-grid;\n  padding: 35px 20px;\n  border-bottom: 3px solid #d6d5cb;\n  grid-column-gap: 20px;\n  grid-row-gap: 50px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto 1fr;\n}\n@media (min-width: 640px) {\n.Footer_block__1oVDs {\n    padding: 40px 25px;\n    grid-column-gap: 35px;\n    grid-row-gap: 35px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto 1fr\n}\n  }\n@media (min-width: 1025px) {\n.Footer_block__1oVDs {\n    padding: 50px 40px;\n    grid-column-gap: 40px;\n    grid-row-gap: 15px;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: auto 1fr\n}\n  }\n.Footer_bottom__pWCdR {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 72px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-right: 20px;\n  padding-left: 20px;\n  color: #fffef2;\n  font-family: 'Suisse Regular', sans-serif;\n}\n@media (min-width: 640px) {\n.Footer_bottom__pWCdR {\n    padding-right: 25px;\n    padding-left: 25px\n}\n  }\n@media (min-width: 1025px) {\n.Footer_bottom__pWCdR {\n    padding-right: 40px;\n    padding-left: 40px\n}\n  }\n.Footer_signup__2alsN {\n  grid-column: 1 / 3;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.Footer_signup__2alsN {\n    grid-column: 1 / 4\n}\n  }\n@media (min-width: 1025px) {\n.Footer_signup__2alsN {\n    margin-top: 10px\n}\n  }\n.Footer_item__2fpQF {\n  grid-column: 1 span;\n}\n@media (min-width: 1025px) {\n    .Footer_item__2fpQF:nth-of-type(4n + 0) {\n      grid-column: 2 span;\n    }\n  }\n.Footer_iconLinks__vpsaV {\n  margin-left: 45px;\n}\n/* Handle the grid css to support IE */\n@media all and (-ms-high-contrast: none) and (max-width: 639px) {\n    .Footer_block__1oVDs {\n      -ms-grid-columns: 1fr 20px 1fr;\n      -ms-grid-rows: 1fr 50px 1fr 50px 1fr 50px 1fr;\n    }\n\n    .Footer_signup__2alsN {\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 3;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(2n + 0) {\n      -ms-grid-column: 3;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(2n + 1) {\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(-n + 2) {\n      -ms-grid-row: 3;\n      -ms-grid-row-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(3),\n    .Footer_item__2fpQF:nth-of-type(4) {\n      -ms-grid-row: 5;\n      -ms-grid-row-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(5),\n    .Footer_item__2fpQF:nth-of-type(6) {\n      -ms-grid-row: 7;\n      -ms-grid-row-span: 1;\n    }\n  }\n@media all and (-ms-high-contrast: none) and (min-width: 640px) and (max-width: 1024px) {\n    .Footer_block__1oVDs {\n      -ms-grid-columns: 1fr 35px 1fr 35px 1fr;\n      -ms-grid-rows: 1fr 35px 1fr 35px 1fr;\n    }\n\n    .Footer_signup__2alsN {\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 5;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(3n + 0) {\n      -ms-grid-column: 5;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(3n + 1) {\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(3n + 2) {\n      -ms-grid-column: 3;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(-n + 3) {\n      -ms-grid-row: 3;\n      -ms-grid-row-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(n + 4) {\n      -ms-grid-row: 5;\n      -ms-grid-row-span: 1;\n    }\n  }\n@media all and (-ms-high-contrast: none) and (min-width: 1025px) {\n    .Footer_block__1oVDs {\n      -ms-grid-columns: 2fr 40px 1fr 40px 1fr 40px 1fr;\n      -ms-grid-rows: 1fr 15px 1fr;\n    }\n\n    .Footer_signup__2alsN {\n      margin-top: 10px;\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(4n + 1) {\n      -ms-grid-column: 3;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(4n + 2) {\n      -ms-grid-column: 5;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(4n + 3) {\n      -ms-grid-column: 7;\n      -ms-grid-column-span: 1;\n    }\n\n    .Footer_item__2fpQF:nth-of-type(n + 4) {\n      -ms-grid-row: 3;\n      -ms-grid-row-span: 1;\n    }\n  }\n");var h=function(n){var e=n.blocks,r=n.className,l=n.consentErrorMsg,p=n.iconLinks,u=n.errorMessage,h=n.notificationMessage,_=n.showTermsConditionsTextBox,f=n.subscriptionMessage,x=n.termsAndCondition,k=n.termsMessage,b=n.onClick,F=c.default(g.base,r);return m.default.createElement(o.NotificationContextProvider,null,m.default.createElement("div",{className:F},m.default.createElement(d.NotificationModal,{backgroundColor:"#d5d5cc",notificationMessage:h}),m.default.createElement("div",{className:g.block},m.default.createElement("div",{className:g.signup},m.default.createElement(t.NewsletterSignUp,{consentErrorMsg:l,errorMessage:u,onClick:b,showTermsConditionsTextBox:_,subscriptionMessage:f,termsAndCondition:x,termsMessage:k,theme:"light"})),(null==e?void 0:e.length)&&e.map((function(n,e){return m.default.createElement(s.FooterBlock,{className:g.item,copy:n.copy,heading:n.heading,isVisibleOnTabletAndMobile:n.isVisibleOnTabletAndMobile,key:e,links:n.links,theme:"light"})}))),m.default.createElement("div",{className:g.bottom},m.default.createElement("span",null,"© Aesop"),m.default.createElement(i.Hidden,{isLarge:!0,isXLarge:!0},m.default.createElement("div",null,(null==p?void 0:p.length)&&p.map((function(n){return m.default.createElement(a.IconLink,{altText:n.altText,className:g.iconLinks,hasTargetInNewWindow:n.hasTargetInNewWindow,height:21,icon:n.icon,id:n.altText,key:n.id,target:n.target,width:21})})))))))};h.propTypes={blocks:u.default.arrayOf(u.default.shape({copy:u.default.string,heading:u.default.string,isVisibleOnTabletAndMobile:u.default.bool,links:u.default.array})),className:u.default.string,consentErrorMsg:u.default.string,iconLinks:u.default.array,errorMessage:u.default.string,notificationMessage:u.default.string,showTermsConditionsTextBox:u.default.bool,subscriptionMessage:u.default.string,termsAndCondition:u.default.string,termsMessage:u.default.string,onClick:u.default.func},h.defaultProps={blocks:void 0,className:void 0,consentErrorMsg:void 0,iconLinks:void 0,errorMessage:void 0,notificationMessage:void 0,showTermsConditionsTextBox:void 0,subscriptionMessage:void 0,termsAndCondition:void 0,termsMessage:void 0,onClick:void 0},exports.Footer=h;
