"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../sharedChunks/_rollupPluginBabelHelpers.js"),n=require("react"),t=require("prop-types"),r=require("classnames"),o=require("../../sharedChunks/Hyperlink.js");require("../../sharedChunks/viewports.js"),require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js");var a=require("../../sharedChunks/ProductDetailContext.js");require("../../sharedChunks/ThemeContext.js");var i=require("../../sharedChunks/VariantSelectContext.js");require("../../sharedChunks/environment.js");var d=require("../../sharedChunks/useImageTransition.js");require("../../sharedChunks/isSymbol.js");var s=require("../../sharedChunks/product.js"),m=require("../../sharedChunks/AddToCartButton.js"),u=require("../../sharedChunks/Heading.js"),l=require("../../sharedChunks/Image.js"),c=require("../../sharedChunks/LinkButtonGroup.js"),p=require("../../sharedChunks/Loading.js"),_=require("../../sharedChunks/RadioGroup.js"),h=require("../../sharedChunks/SectionHeading.js"),C=require("../../sharedChunks/Transition.js"),g=require("../../sharedChunks/style-inject.es.js");function x(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/tslib.es6.js"),require("query-string"),require("../../sharedChunks/Button.js"),require("react-dom"),require("../../sharedChunks/useHasMounted.js");var f=x(n),k=x(t),P=x(r),b="ProductCommerce-module_base__3XaIQ",v="ProductCommerce-module_imageWrapper__NWb-S",w="ProductCommerce-module_image__uw1Dg",y="ProductCommerce-module_description__4STWo",T="ProductCommerce-module_variantsWrapper__2Plis",j="ProductCommerce-module_variants__1uzDh",q="ProductCommerce-module_linkButtonGroup__1Yk64",N="ProductCommerce-module_addToCartButton__6r-7o",W="ProductCommerce-module_cta__3RMfJ",S="ProductCommerce-module_header__1QUBN";g.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductCommerce-module_base__3XaIQ {\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n@media (max-width: 639px) {\n.ProductCommerce-module_base__3XaIQ {\n    padding-right: 20px;\n    padding-left: 20px\n}\n  }\n@media (min-width: 640px) {\n.ProductCommerce-module_base__3XaIQ {\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(8, -webkit-min-content);\n    grid-template-rows: repeat(8, min-content)\n}\n  }\n.ProductCommerce-module_base__3XaIQ,\n  .ProductCommerce-module_base__3XaIQ * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.ProductCommerce-module_imageWrapper__NWb-S {\n  width: 100%;\n  margin-bottom: 10px;\n}\n@media (min-width: 640px) {\n.ProductCommerce-module_imageWrapper__NWb-S {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-right: 0;\n    padding-left: 34px;\n    margin-bottom: 0;\n    grid-column: 1/ 5;\n    grid-row: 1/ -1\n}\n  }\n@media (min-width: 1025px) {\n.ProductCommerce-module_imageWrapper__NWb-S {\n    padding-left: calc(40px * 2)\n}\n  }\n.ProductCommerce-module_image__uw1Dg {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 640px) {\n.ProductCommerce-module_image__uw1Dg {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end\n}\n  }\n.ProductCommerce-module_image__uw1Dg img {\n    width: auto;\n    max-width: 100%;\n    max-height: 300px;\n  }\n@media (min-width: 640px) {\n.ProductCommerce-module_image__uw1Dg img {\n      max-height: 400px\n  }\n    }\n.ProductCommerce-module_description__4STWo {\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.ProductCommerce-module_description__4STWo > :last-child {\n    margin-bottom: 0;\n  }\n.ProductCommerce-module_variantsWrapper__2Plis {\n  margin-bottom: 30px;\n}\n.ProductCommerce-module_variants__1uzDh {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n@media (min-width: 1025px) {\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr))\n}\n  }\n.ProductCommerce-module_addToCartButton__6r-7o,\n.ProductCommerce-module_cta__3RMfJ {\n  max-width: none;\n}\n/* Content Padding */\n.ProductCommerce-module_header__1QUBN,\n.ProductCommerce-module_description__4STWo,\n.ProductCommerce-module_variantsWrapper__2Plis,\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n  max-width: 600px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductCommerce-module_header__1QUBN,\n.ProductCommerce-module_description__4STWo,\n.ProductCommerce-module_variantsWrapper__2Plis,\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n    padding-right: 34px\n}\n  }\n@media (min-width: 640px) {\n.ProductCommerce-module_header__1QUBN,\n.ProductCommerce-module_description__4STWo,\n.ProductCommerce-module_variantsWrapper__2Plis,\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n    grid-column: 6/ 13\n}\n  }\n@media (min-width: 1025px) {\n.ProductCommerce-module_header__1QUBN,\n.ProductCommerce-module_description__4STWo,\n.ProductCommerce-module_variantsWrapper__2Plis,\n.ProductCommerce-module_linkButtonGroup__1Yk64 {\n    grid-column: 6/ 11\n}\n  }\n@media all and (-ms-high-contrast: none) {\n  .ProductCommerce-module_imageWrapper__NWb-S {\n    -ms-grid-column-span: 4;\n    grid-column-start: 1;\n    grid-row-end: 8;\n    -ms-grid-row-span: 8;\n    grid-row-start: 1;\n  }\n\n    .ProductCommerce-module_imageWrapper__NWb-S img {\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n    }\n  .ProductCommerce-module_description__4STWo {\n    grid-row-start: 2;\n  }\n  .ProductCommerce-module_variantsWrapper__2Plis {\n    grid-row-start: 3;\n  }\n  .ProductCommerce-module_linkButtonGroup__1Yk64 {\n    grid-row-start: 4;\n  }\n\n  .ProductCommerce-module_header__1QUBN,\n  .ProductCommerce-module_description__4STWo,\n  .ProductCommerce-module_variantsWrapper__2Plis,\n  .ProductCommerce-module_linkButtonGroup__1Yk64 {\n    -ms-grid-column-span: 5;\n    grid-column-start: 6;\n  }\n}\n");var B=f.default.forwardRef((function(t,r){var g=t.className,x=t.copy,k=t.cta,B=t.description,E=t.eyebrow,I=t.heading,A=t.id,z=t.size,D=t.theme,G=t.isActive,R=t.onCtaClick,Q=n.useRef(),U=i.useVariantSelectContext(),L=U.selectedVariant,M=U.onVariantChange,F=U.variants,H=0===(null==F?void 0:F.length),O=a.useProductDetailContext().productDetail,Y=O.sku,X=d.useImageTransition((null==L?void 0:L.image)||O.image,Q),V=e._slicedToArray(X,2),J=V[0],K=V[1];if(!H&&!L)return f.default.createElement(p.Loading,{isLoading:!0});var Z=s.getVariantRadioOptions(F),$=P.default(b,g),ee=Y;return f.default.createElement("div",{className:$,id:A,ref:r},f.default.createElement(C.Transition,{isActive:G,type:"slowFade"},f.default.createElement(h.SectionHeading,{className:S,eyebrow:E,heading:I,isFlush:!0,theme:D})),f.default.createElement(C.Transition,{isActive:G,type:"slowFade"},f.default.createElement("div",{className:y},B)),f.default.createElement(C.Transition,{isActive:G,type:"shiftInLeft"},f.default.createElement("div",{className:v},f.default.createElement(C.Transition,{isActive:K,type:"fade"},f.default.createElement(l.Image,{altText:J.altText,className:w,ref:Q,sizes:J.sizes})))),z&&!H&&f.default.createElement(C.Transition,{isActive:G,type:"slowFade"},f.default.createElement("div",{className:T},f.default.createElement(u.Heading,{hasMediumWeightFont:!0,isFlush:!0,level:"4",size:"xXSmall",theme:D},null==x?void 0:x.size),f.default.createElement(_.RadioGroup,{className:j,dataTestRef:"PRODUCT_COMMERCE_VARIANT_SELECT",name:ee,onChange:function(e){return M(e,F)},options:Z,theme:D,value:L.sku}))),f.default.createElement(C.Transition,{isActive:G,type:"shiftInDown"},f.default.createElement(c.LinkButtonGroup,{className:q,hasFitContent:!1,isFlush:!1,textAlign:"center",theme:D},f.default.createElement(m.AddToCartButton,{className:N,copy:x.addToCart,isFullWidth:!1,theme:D}),k&&f.default.createElement(o.Hyperlink,{className:W,isAlternate:!1,onClick:function(){return R()},style:o.INTERNAL_BUTTON_LINK,url:k.url},k.text))))}));B.propTypes={className:k.default.string,onCtaClick:k.default.func,copy:k.default.shape({addToCart:k.default.shape({cartAction:k.default.string,updateNotification:k.default.string,outOfStock:k.default.shape({label:k.default.string,title:k.default.string})}),size:k.default.string}),cta:k.default.shape({text:k.default.string,url:k.default.string}),description:k.default.element,eyebrow:k.default.string,heading:k.default.string,id:k.default.string,size:k.default.string,isActive:k.default.bool,theme:k.default.oneOf(["dark","light"])},B.defaultProps={className:void 0,copy:{addToCart:{cartAction:void 0,updateNotification:void 0,outOfStock:{label:void 0,title:void 0}},size:void 0},cta:void 0,description:void 0,eyebrow:void 0,heading:void 0,id:void 0,onCtaClick:function(){},size:void 0,isActive:!0,theme:"dark"},exports.ProductCommerce=B;
