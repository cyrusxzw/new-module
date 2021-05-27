"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),n=require("classnames");require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js");var r=require("../../sharedChunks/ProductDetailContext.js"),t=require("../../sharedChunks/ThemeContext.js"),o=require("../../sharedChunks/VariantSelectContext.js"),a=require("../../sharedChunks/Hyperlink.js");require("../../sharedChunks/viewports.js"),require("../../sharedChunks/environment.js");var i=require("../../sharedChunks/useImageTransition.js");require("../../sharedChunks/isSymbol.js");var m=require("../../sharedChunks/product.js"),d=require("../../sharedChunks/AddToCartButton.js"),s=require("../../sharedChunks/Heading.js"),u=require("../../sharedChunks/Image.js"),l=require("../../sharedChunks/LinkButtonGroup.js"),c=require("../../sharedChunks/Loading.js"),_=require("../../sharedChunks/RadioGroup.js"),p=require("../../sharedChunks/SectionHeading.js"),h=require("../../sharedChunks/Transition.js"),C=require("../../sharedChunks/style-inject.es.js");function x(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/toNumber.js"),require("query-string"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/Button.js"),require("../../sharedChunks/_rollupPluginBabelHelpers.js"),require("prop-types"),require("react-dom"),require("../../sharedChunks/useHasMounted.js");var g=x(e),k=x(n),f="ProductCommerce-module_base__3XaIQ",P="ProductCommerce-module_imageWrapper__NWb-S",b="ProductCommerce-module_image__uw1Dg",w="ProductCommerce-module_description__4STWo",v="ProductCommerce-module_variantsWrapper__2Plis",j="ProductCommerce-module_variants__1uzDh",q="ProductCommerce-module_linkButtonGroup__1Yk64",T="ProductCommerce-module_addToCartButton__6r-7o",y="ProductCommerce-module_cta__3RMfJ",N="ProductCommerce-module_header__1QUBN";C.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductCommerce-module_base__3XaIQ {\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n@media (max-width: 639px) {\n.ProductCommerce-module_base__3XaIQ {\n    padding-right: 20px;\n    padding-left: 20px\n}\n  }\n@media (min-width: 640px) {\n.ProductCommerce-module_base__3XaIQ {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(8, -webkit-min-content);\n    grid-template-rows: repeat(8, min-content)\n}\n  }\n.ProductCommerce-module_base__3XaIQ,\n  .ProductCommerce-module_base__3XaIQ * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.ProductCommerce-module_imageWrapper__NWb-S {\n  width: 100%;\n  margin-bottom: 10px;\n}\n@media (min-width: 640px) {\n.ProductCommerce-module_imageWrapper__NWb-S {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-right: 0;\n    padding-left: 34px;\n    margin-bottom: 0;\n    grid-column: 1/ 5;\n    grid-row: 1/ -1\n}\n  }\n@media (min-width: 1025px) {\n.ProductCommerce-module_imageWrapper__NWb-S {\n    padding-left: calc(40px * 2)\n}\n  }\n.ProductCommerce-module_image__uw1Dg {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 640px) {\n.ProductCommerce-module_image__uw1Dg {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end\n}\n  }\n.ProductCommerce-module_image__uw1Dg img {\n    width: auto;\n    max-width: 100%;\n    max-height: 300px;\n  }\n@media (min-width: 640px) {\n.ProductCommerce-module_image__uw1Dg img {\n      max-height: 400px\n  }\n    }\n.ProductCommerce-module_description__4STWo {\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.ProductCommerce-module_description__4STWo > :last-child {\n    margin-bottom: 0;\n  }\n.ProductCommerce-module_variantsWrapper__2Plis {\n  margin-bottom: 30px;\n}\n.ProductCommerce-module_variants__1uzDh {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n@media (min-width: 1025px) {\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr))\n}\n  }\n.ProductCommerce-module_addToCartButton__6r-7o,\n.ProductCommerce-module_cta__3RMfJ {\n  max-width: none;\n}\n/* Content Padding */\n.ProductCommerce-module_header__1QUBN,\n.ProductCommerce-module_description__4STWo,\n.ProductCommerce-module_variantsWrapper__2Plis,\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n  max-width: 600px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductCommerce-module_header__1QUBN,\n.ProductCommerce-module_description__4STWo,\n.ProductCommerce-module_variantsWrapper__2Plis,\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n    padding-right: 34px\n}\n  }\n@media (min-width: 640px) {\n.ProductCommerce-module_header__1QUBN,\n.ProductCommerce-module_description__4STWo,\n.ProductCommerce-module_variantsWrapper__2Plis,\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n    grid-column: 6/ 13\n}\n  }\n@media (min-width: 1025px) {\n.ProductCommerce-module_header__1QUBN,\n.ProductCommerce-module_description__4STWo,\n.ProductCommerce-module_variantsWrapper__2Plis,\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n    grid-column: 6/ 11\n}\n  }\n@media all and (-ms-high-contrast: none) {\n  .ProductCommerce-module_imageWrapper__NWb-S {\n    -ms-grid-column-span: 4;\n    grid-column-start: 1;\n    grid-row-end: 8;\n    -ms-grid-row-span: 8;\n    grid-row-start: 1;\n  }\n\n    .ProductCommerce-module_imageWrapper__NWb-S img {\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n    }\n  .ProductCommerce-module_description__4STWo {\n    grid-row-start: 2;\n  }\n  .ProductCommerce-module_variantsWrapper__2Plis {\n    grid-row-start: 3;\n  }\n  .ProductCommerce-module_linkButtonGroup__1Yk64 {\n    grid-row-start: 4;\n  }\n\n  .ProductCommerce-module_header__1QUBN,\n  .ProductCommerce-module_description__4STWo,\n  .ProductCommerce-module_variantsWrapper__2Plis,\n  .ProductCommerce-module_linkButtonGroup__1Yk64 {\n    -ms-grid-column-span: 5;\n    grid-column-start: 6;\n  }\n}\n");var W=e.forwardRef((function(n,C){var x=n.className,W=n.copy,B=n.cta,S=n.description,E=n.eyebrow,I=n.heading,A=n.id,R=n.size,D=n.theme,G=n.isActive,Q=void 0===G||G,U=n.onCtaClick,z=e.useRef(),L=t.useThemeContext(D,"dark"),M=o.useVariantSelectContext(),F=M.selectedVariant,H=M.onVariantChange,Y=M.variants,X=r.useProductDetailContext().productDetail,V=i.useImageTransition((null==F?void 0:F.image)||X.image,z),O=V[0],J=V[1],K=0===(null==Y?void 0:Y.length);if(!K&&!F)return g.default.createElement(c.Loading,{isLoading:!0});var Z=X.sku,$=m.getVariantRadioOptions(Y),ee=k.default(f,x),ne=Z;return g.default.createElement("div",{className:ee,id:A,ref:C},g.default.createElement(h.Transition,{isActive:Q,type:"slowFade"},g.default.createElement(p.SectionHeading,{className:N,eyebrow:E,heading:I,isFlush:!0,theme:L})),g.default.createElement(h.Transition,{isActive:Q,type:"slowFade"},g.default.createElement("div",{className:w},S)),g.default.createElement(h.Transition,{isActive:Q,type:"shiftInLeft"},g.default.createElement("div",{className:P},g.default.createElement(h.Transition,{isActive:J,type:"fade"},g.default.createElement(u.Image,{altText:O.altText,className:b,ref:z,sizes:O.sizes})))),R&&!K&&g.default.createElement(h.Transition,{isActive:Q,type:"slowFade"},g.default.createElement("div",{className:v},g.default.createElement(s.Heading,{hasMediumWeightFont:!0,isFlush:!0,level:"4",size:"xXSmall",theme:L},null==W?void 0:W.size),g.default.createElement(_.RadioGroup,{className:j,dataTestRef:"PRODUCT_COMMERCE_VARIANT_SELECT",name:ne,onChange:function(e){return H(e,Y)},options:$,theme:L,value:F.sku}))),g.default.createElement(h.Transition,{isActive:Q,type:"shiftInDown"},g.default.createElement(l.LinkButtonGroup,{className:q,hasFitContent:!1,isFlush:!1,textAlign:"center",theme:L},g.default.createElement(d.AddToCartButton,{className:T,copy:null==W?void 0:W.addToCart,dataTestRef:"product-commerce",isFullWidth:!1,theme:L}),B&&g.default.createElement(a.Hyperlink,{className:y,isAlternate:!1,onClick:function(){return U()},style:a.INTERNAL_BUTTON_LINK,url:B.url},B.text))))}));exports.ProductCommerce=W;
