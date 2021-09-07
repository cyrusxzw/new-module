"use strict";var n=require("react"),d=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var i=require("./ThemeContext.js");require("./VariantSelectContext.js");var o=require("./Transition.js"),e=require("./style-inject.es.js");function a(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var t=a(n),m=a(d),l={base:"Podium-module_base__3-gFX",nonePaddingBottom:"Podium-module_nonePaddingBottom__3dLYG",nonePaddingTop:"Podium-module_nonePaddingTop__1hh35",nonePaddingRight:"Podium-module_nonePaddingRight__1uqfn",nonePaddingLeft:"Podium-module_nonePaddingLeft__2inJC",smallPaddingTop:"Podium-module_smallPaddingTop__Qcc07",mediumPaddingTop:"Podium-module_mediumPaddingTop__1dN90",largePaddingTop:"Podium-module_largePaddingTop__1TSH3",smallPaddingBottom:"Podium-module_smallPaddingBottom__2FJ28",mediumPaddingBottom:"Podium-module_mediumPaddingBottom__2Mu5C",largePaddingBottom:"Podium-module_largePaddingBottom__1gNd0",smallPaddingLeft:"Podium-module_smallPaddingLeft__3wFWU",smallPaddingRight:"Podium-module_smallPaddingRight__13fPX",horizontalFlushOnSmall:"Podium-module_horizontalFlushOnSmall__3TlzW",horizontalFlushOnMedium:"Podium-module_horizontalFlushOnMedium__3Nabm",horizontalFlushOnLarge:"Podium-module_horizontalFlushOnLarge__o1xoy"};e.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Podium-module_base__3-gFX {\n  display: block;\n  padding: 0;\n}\n.Podium-module_nonePaddingBottom__3dLYG {\n  padding-bottom: 0;\n}\n.Podium-module_nonePaddingTop__1hh35 {\n  padding-top: 0;\n}\n.Podium-module_nonePaddingRight__1uqfn {\n  padding-right: 0;\n}\n.Podium-module_nonePaddingLeft__2inJC {\n  padding-left: 0;\n}\n.Podium-module_smallPaddingTop__Qcc07 {\n  padding-top: 50px;\n}\n.Podium-module_mediumPaddingTop__1dN90 {\n  padding-top: 80px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.Podium-module_mediumPaddingTop__1dN90 {\n    padding-top: 100px\n}\n  }\n@media (min-width: 1025px) {\n.Podium-module_mediumPaddingTop__1dN90 {\n    padding-top: 150px\n}\n  }\n.Podium-module_largePaddingTop__1TSH3 {\n  padding-top: 150px;\n}\n@media (min-width: 1025px) {\n.Podium-module_largePaddingTop__1TSH3 {\n    padding-top: 250px\n}\n  }\n.Podium-module_smallPaddingBottom__2FJ28 {\n  padding-bottom: 50px;\n}\n.Podium-module_mediumPaddingBottom__2Mu5C {\n  padding-bottom: 80px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.Podium-module_mediumPaddingBottom__2Mu5C {\n    padding-bottom: 100px\n}\n  }\n@media (min-width: 1025px) {\n.Podium-module_mediumPaddingBottom__2Mu5C {\n    padding-bottom: 150px\n}\n  }\n.Podium-module_largePaddingBottom__1gNd0 {\n  padding-bottom: 150px;\n}\n@media (min-width: 1025px) {\n.Podium-module_largePaddingBottom__1gNd0 {\n    padding-bottom: 250px\n}\n  }\n.Podium-module_smallPaddingLeft__3wFWU {\n  padding-left: 20px;\n}\n@media (min-width: 640px) {\n.Podium-module_smallPaddingLeft__3wFWU {\n    padding-left: 34px\n}\n  }\n@media (min-width: 1025px) {\n.Podium-module_smallPaddingLeft__3wFWU {\n    padding-left: 80px\n}\n  }\n.Podium-module_smallPaddingRight__13fPX {\n  padding-right: 20px;\n}\n@media (min-width: 640px) {\n.Podium-module_smallPaddingRight__13fPX {\n    padding-right: 34px\n}\n  }\n@media (min-width: 1025px) {\n.Podium-module_smallPaddingRight__13fPX {\n    padding-right: 80px\n}\n  }\n@media (max-width: 639px) {\n.Podium-module_horizontalFlushOnSmall__3TlzW {\n    padding-right: 0;\n    padding-left: 0\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.Podium-module_horizontalFlushOnMedium__3Nabm {\n    padding-right: 0;\n    padding-left: 0\n}\n  }\n@media (min-width: 1025px) {\n.Podium-module_horizontalFlushOnLarge__o1xoy {\n    padding-right: 0;\n    padding-left: 0\n}\n  }\n");var u=n.forwardRef((function(n,d){var e,a,u,r=n.backgroundColor,p=n.children,g=n.className,_=n["data-test-ref"],s=n.horizontalPadding,h=void 0===s?"none":s,P=n.id,x=n.isActive,c=void 0===x||x,w=n.isActiveOnMount,b=n.isHorizontalFlushOnLarge,f=n.isHorizontalFlushOnMedium,T=n.isHorizontalFlushOnSmall,L=n.paddingBottom,k=n.paddingLeft,F=n.paddingRight,C=n.paddingTop,v=n.theme,B=n.transition,M=n.verticalPadding,z=void 0===M?"none":M,O=i.useThemeContext(v,"dark"),q=r?{backgroundColor:r}:void 0,j=m.default(l.base,l[(L||z)+"PaddingBottom"],l[(k||h)+"PaddingLeft"],l[(F||h)+"PaddingRight"],l[(C||z)+"PaddingTop"],((e={})[l.horizontalFlushOnSmall]=T,e),((a={})[l.horizontalFlushOnMedium]=f,a),((u={})[l.horizontalFlushOnLarge]=b,u),g);return t.default.createElement(i.ThemeContextProvider,{theme:O},t.default.createElement(o.Transition,{isActiveOnMount:!0,type:B},t.default.createElement("section",{className:j,"data-test-ref":_,id:P,style:q},t.default.createElement(o.Transition,{isActive:c,isActiveOnMount:w,type:B},t.default.createElement("div",{ref:d},p)))))}));exports.Podium=u;
