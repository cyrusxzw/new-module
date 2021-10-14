"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("prop-types"),s=require("classnames"),n=require("../../sharedChunks/Carousel.js"),a=require("../../sharedChunks/DefinitionList.js"),t=require("../../sharedChunks/Image.js"),i=require("../../sharedChunks/KitList.js"),u=require("../../sharedChunks/MediaWithContent.js"),o=require("../../sharedChunks/Podium.js"),d=require("../../sharedChunks/ProductDetailHeader.js"),h=require("../../sharedChunks/Quote.js"),l=require("../../sharedChunks/style-inject.es.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/isSymbol.js"),require("react-slick"),require("../../sharedChunks/AddToCartContext.js"),require("../../sharedChunks/GoogleMapsContext.js"),require("../../sharedChunks/ErrorContext.js"),require("../../sharedChunks/LoadMoreContext.js"),require("../../sharedChunks/NavBarThemeContext.js"),require("../../sharedChunks/NotificationContext.js"),require("../../sharedChunks/ProductDetailContext.js"),require("../../sharedChunks/ThemeContext.js"),require("../../sharedChunks/VariantSelectContext.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/viewports.js"),require("../../sharedChunks/environment.js"),require("../../sharedChunks/useWindowHasResized.js"),require("../../sharedChunks/debounce.js"),require("../../sharedChunks/viewport.js"),require("../../sharedChunks/ConditionalWrapper.js"),require("../../sharedChunks/Hyperlink.js"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/Loading.js"),require("../../sharedChunks/Transition.js"),require("react-dom"),require("../../sharedChunks/useHasMounted.js"),require("../../sharedChunks/SectionHeading.js"),require("../../sharedChunks/Heading.js"),require("../../sharedChunks/Button.js"),require("../../sharedChunks/objects.js"),require("../../sharedChunks/List.js"),require("../../sharedChunks/Figure.js"),require("../../sharedChunks/Paragraph.js"),require("../../sharedChunks/Breadcrumbs.js"),require("../../sharedChunks/Hidden.js"),require("../../sharedChunks/useExecuteOnImpression.js"),require("../../sharedChunks/useOnScreen.js"),require("../../sharedChunks/product.js"),require("../../sharedChunks/AddToCartButton.js"),require("../../sharedChunks/FlyinPanel.js"),require("../../sharedChunks/useEscapeKeyListener.js"),require("../../sharedChunks/keyboard-codes.js"),require("../../sharedChunks/useOverflowHidden.js"),require("../../sharedChunks/portal.js"),require("../../sharedChunks/Overlay.js"),require("../../sharedChunks/ProductExtract.js"),require("../../sharedChunks/RadioGroup.js"),require("../../sharedChunks/useImageTransition.js");var m=c(e),k=c(r),p=c(s),C={base:"ProductDetail-module_base__mmXiC"};l.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductDetail-module_base__mmXiC {\n  display: block;\n}\n");var j=function(e){var r=e.__asideDetails1,s=e.__asideDetails2,l=e.breadcrumbs,c=e.className,k=e.copy,j=e.quote,q=e.relatedProducts,b=p.default(C.base,c);return m.default.createElement("div",{className:b,style:{backgroundColor:"#fffeef"}},m.default.createElement(d.ProductDetailHeader,{breadcrumbs:l,copy:null==k?void 0:k.productHeader}),m.default.createElement(u.MediaWithContent,{backgroundColor:"#fffeef",content:m.default.createElement(a.DefinitionList,{items:r.definitionListItems}),copy:{eyebrow:r.copy.eyebrow,heading:r.copy.heading},media:m.default.createElement(t.Image,{altText:r.image.altText,sizes:r.image.sizes}),theme:"dark"}),m.default.createElement(o.Podium,{verticalPadding:"large"},m.default.createElement(h.Quote,{author:j.author,content:j.content,theme:"dark"})),m.default.createElement(u.MediaWithContent,{content:m.default.createElement(i.KitList,{items:s.kitListItems}),copy:s.copy,media:m.default.createElement(t.Image,{altText:s.image.altText,sizes:s.image.sizes}),theme:"dark"}),m.default.createElement(o.Podium,{verticalPadding:"medium"},m.default.createElement(n.Carousel,{className:C.asideProducts,introduction:q.introduction,slides:q.slides})))};j.propTypes={__asideDetails1:k.default.object,__asideDetails2:k.default.object,breadcrumbs:k.default.object,className:k.default.string,copy:k.default.shape({productHeader:k.default.shape({ingredients:k.default.shape({heading:k.default.string,label:k.default.string,title:k.default.string})})}),product:k.default.object,quote:k.default.object,relatedProducts:k.default.object},j.defaultProps={__asideDetails1:void 0,__asideDetails2:void 0,breadcrumbs:void 0,className:void 0,copy:void 0,product:void 0,quote:void 0,relatedProducts:void 0},exports.ProductDetail=j;
