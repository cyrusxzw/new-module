"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("../../sharedChunks/DefinitionList.js"),s=require("../../sharedChunks/ProductExtract.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("classnames"),require("../../sharedChunks/objects.js"),require("../../sharedChunks/style-inject.es.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/VariantSelectContext.js"),require("query-string"),require("../../sharedChunks/ConditionalWrapper.js"),require("../../sharedChunks/Heading.js"),require("../../sharedChunks/Hyperlink.js"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/viewports.js"),require("../../sharedChunks/Image.js");var i=t(e),u={image:{altText:"Product Extract"}};exports.DefinitionListWithProductExtract=function(t){var a=t.dataTestRef,o=t.isVisible,n=void 0===o||o,d=t.itemBottomBorder,h=void 0!==d&&d,C=t.items,c=void 0===C?[]:C,k=t.product,q=void 0===k?u:k,j=t.productBottomBorder,l=void 0!==j&&j,m=t.productItemNumber,f=void 0===m?1:m,x=t.theme,v=void 0===x?"dark":x,p=t.works,b=void 0===p?"Works well with":p;return i.default.createElement(e.Fragment,null,i.default.createElement(r.DefinitionList,{hasBottomBorder:h,isVisible:n,items:c,theme:v}),i.default.createElement(s.ProductExtract,{dataTestRef:a,hasBottomBorder:l,isVisible:n,itemNum:f,product:q,theme:v,works:b}))};
