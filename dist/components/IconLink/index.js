"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("../../sharedChunks/Hyperlink.js"),s=require("../../sharedChunks/Image.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("classnames"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/style-inject.es.js"),require("../../sharedChunks/viewports.js");var a=t(e);exports.IconLink=function(e){var t=e.altText,u=e.className,i=e.dataTestRef,n=e.hasTargetInNewWindow,h=void 0===n||n,d=e.height,o=void 0===d?21:d,C=e.icon,l=e.iconImageClassName,c=e.target,j=e.width,k=void 0===j?21:j;return a.default.createElement(r.Hyperlink,{className:u,dataTestRef:i,hasTargetInNewWindow:h,title:t,url:c},a.default.createElement(s.Image,{altText:t,className:l,sizes:C.sizes,style:{height:o+"px",width:k+"px"}}))};
