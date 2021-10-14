"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("../../sharedChunks/DefinitionList.js"),t=require("../../sharedChunks/ProductExtract.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("classnames"),require("../../sharedChunks/objects.js"),require("../../sharedChunks/style-inject.es.js"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/ConditionalWrapper.js"),require("../../sharedChunks/Heading.js"),require("../../sharedChunks/Hyperlink.js"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/viewports.js"),require("../../sharedChunks/Image.js");var i=s(e),u={image:{altText:"Product Extract"}};exports.DefinitionListWithProductExtract=function(e){var s=e.dataTestRef,a=e.isVisible,o=void 0===a||a,d=e.itemBottomBorder,n=void 0!==d&&d,h=e.items,C=void 0===h?[]:h,c=e.product,k=void 0===c?u:c,l=e.productBottomBorder,j=void 0!==l&&l,q=e.productItemNumber,m=void 0===q?1:q,f=e.theme,x=void 0===f?"dark":f,v=e.works,p=void 0===v?"Works well with":v;return i.default.createElement(i.default.Fragment,null,i.default.createElement(r.DefinitionList,{hasBottomBorder:n,isVisible:o,items:C,theme:x}),i.default.createElement(t.ProductExtract,{dataTestRef:s,hasBottomBorder:j,isVisible:o,itemNum:m,product:k,theme:x,works:p}))};
