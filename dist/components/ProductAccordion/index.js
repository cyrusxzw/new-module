"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../sharedChunks/tslib.es6.js"),r=require("react"),s=require("../../sharedChunks/debounce.js"),u=require("react-uid"),t=require("../../sharedChunks/AddToCartContext.js");require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js");var n=require("../../sharedChunks/VariantSelectContext.js");require("../../sharedChunks/viewports.js"),require("../../sharedChunks/environment.js");var a=require("../../sharedChunks/useWindowHasResized.js"),i=require("../../sharedChunks/viewport.js"),d=require("../../sharedChunks/ProductAccordion.module.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("query-string"),require("classnames"),require("../../sharedChunks/AddToCartButton.js"),require("../../sharedChunks/Hyperlink.js"),require("../../sharedChunks/Icon.js"),require("../../sharedChunks/style-inject.es.js"),require("../../sharedChunks/Button.js"),require("../../sharedChunks/Loading.js"),require("../../sharedChunks/Heading.js"),require("../../sharedChunks/Image.js"),require("../../sharedChunks/LinkButtonGroup.js"),require("../../sharedChunks/Video.js"),require("../../sharedChunks/useEscapeKeyListener.js"),require("../../sharedChunks/keyboard-codes.js"),require("../../sharedChunks/useHasMounted.js"),require("../../sharedChunks/useOverflowHidden.js"),require("../../sharedChunks/Transition.js"),require("prop-types"),require("react-dom"),require("video-scroller");var h=o(r),c=function(o){var c=o.id,C=o.products,q=o.addToCartCopy,l=r.useState(C),k=l[0],j=l[1];r.useEffect((function(){var e=s.debounce_1((function(){k.map((function(e){e.visualState="default"}))}),200);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[k]),a.useWindowHasResized();var f=function(e,r){j(k.map((function(s,u){var t=u===e;return i.isViewport("xs to sm only")?t&&(s.visualState=r?"expanded":"default"):s.visualState=r?t?"expanded":"compressed":"default",s})))},p=function(){j(k.map((function(e){return e.visualState="default",e})))};return h.default.createElement("div",{className:d.styles.base,id:c},k.map((function(r,s){return h.default.createElement(t.AddToCartContextProvider,{key:u.uid(r),onClick:r.handleAddToCart},h.default.createElement(n.VariantSelectContextProvider,{variants:r.openState.product.variants},h.default.createElement(d.ProductAccordionItem,e.__assign({addToCartCopy:q,index:s,resetAccordion:p,toggleAccordion:f},r))))})))};exports.HorizontalProductDisplayAccordion=c,exports.ProductAccordion=c;
