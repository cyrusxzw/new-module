"use strict";var e=require("react"),n=require("react-dom"),t=require("classnames");require("./AddToCartContext.js"),require("./GoogleMapsContext.js"),require("./ErrorContext.js"),require("./LoadMoreContext.js"),require("./NavBarThemeContext.js"),require("./NotificationContext.js"),require("./ProductDetailContext.js");var a=require("./ThemeContext.js");require("./VariantSelectContext.js");var i=require("./useEscapeKeyListener.js");require("./environment.js");var o=require("./useOverflowHidden.js");require("./isSymbol.js");var l=require("./portal.js"),r=require("./Button.js"),s=require("./Heading.js"),d=require("./Icon.js"),p=require("./Overlay.js"),u=require("./Transition.js"),m=require("./style-inject.es.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var x=c(e),h=c(t),b={base:"FlyinPanel-module_base__1Tlwv",content:"FlyinPanel-module_content__3h06j",closeButton:"FlyinPanel-module_closeButton__1aA6Z",heading:"FlyinPanel-module_heading__n6TFf"};m.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.FlyinPanel-module_base__1Tlwv {\n  position: fixed;\n  z-index: 1500;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: calc(16px * 4);\n  padding-right: 16px;\n  padding-bottom: calc(16px * 2);\n  padding-left: 16px;\n  background-color: #f1f0e8;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.6;\n  overflow-y: auto;\n}\n.FlyinPanel-module_base__1Tlwv,\n  .FlyinPanel-module_base__1Tlwv * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n@media (min-width: 640px) {\n.FlyinPanel-module_base__1Tlwv {\n    padding-top: calc(34px * 4);\n    padding-right: calc(34px * 4);\n    padding-bottom: calc(34px * 2);\n    padding-left: calc(34px * 4)\n}\n  }\n@media (min-width: 1025px) {\n.FlyinPanel-module_base__1Tlwv {\n    width: 50%;\n    padding-top: calc(40px * 4);\n    padding-right: 40px;\n    padding-bottom: calc(40px * 2);\n    padding-left: 40px\n}\n  }\n@supports (-webkit-backdrop-filter: none) {\n.FlyinPanel-module_base__1Tlwv {\n    -webkit-backdrop-filter: blur(20px);\n            backdrop-filter: blur(20px);\n    background-color: rgba(255, 254, 242, 0.5)\n}\n  }\n@media (min-width: 1025px) {\n.FlyinPanel-module_content__3h06j {\n    width: calc(100% * 4 / 6);\n    margin-right: auto;\n    margin-left: auto\n}\n  }\n.FlyinPanel-module_closeButton__1aA6Z.FlyinPanel-module_closeButton__1aA6Z {\n  position: absolute;\n  top: 18px;\n  right: 20px;\n  padding: 2px 4px 0 4px;\n}\n.FlyinPanel-module_heading__n6TFf {\n  margin-bottom: 17px;\n}\n");var g=l.getPortalRoot("aesop-gel-flyin-root");exports.FlyinPanel=function(e){var t=e.children,l=e.className,m=e.copy,c=e.heading,w=e.isVisible,f=void 0!==w&&w,_=e.onClose,k=e.theme;i.useEscapeKeyListener(_),o.useOverflowHidden(f);var y=a.useThemeContext(k,"dark"),v=h.default(b.base,b[k],l);return x.default.createElement(x.default.Fragment,null,n.createPortal(x.default.createElement(x.default.Fragment,null,x.default.createElement(p.Overlay,{isVisible:f,onClose:_}),x.default.createElement(u.Transition,{isActive:!!f,shouldMountOnEnter:!0,shouldUnmountOnExit:!0,type:"slideRight"},x.default.createElement("aside",{"aria-hidden":!f,className:v,role:"note"},x.default.createElement(r.Button,{className:b.closeButton,isInline:!0,onClick:_,tabIndex:0,theme:y,title:null==m?void 0:m.close},x.default.createElement(d.Icon,{height:12,name:"close",theme:y,width:12})),x.default.createElement("div",{className:b.content},c&&x.default.createElement(s.Heading,{className:b.heading,hasMediumWeightFont:!0,level:"3",size:"xXSmall",theme:y},c),t)))),g))};