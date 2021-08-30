"use strict";var e=require("./_rollupPluginBabelHelpers.js"),t=require("react"),n=require("prop-types"),o=require("classnames"),l=require("./Image.js"),i=require("./Video.js"),d=require("./style-inject.es.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(t),r=a(n),m=a(o),u={base:"TextOverFullWidthAsset-module_base__1Eq4j",media:"TextOverFullWidthAsset-module_media__4oONG",content:"TextOverFullWidthAsset-module_content__2--QQ",Bottom:"TextOverFullWidthAsset-module_Bottom__20Kz1",Top:"TextOverFullWidthAsset-module_Top__3Anm9",Left:"TextOverFullWidthAsset-module_Left__1OISv",Right:"TextOverFullWidthAsset-module_Right__tbRff",bottom:"TextOverFullWidthAsset-module_Bottom__20Kz1",top:"TextOverFullWidthAsset-module_Top__3Anm9",left:"TextOverFullWidthAsset-module_Left__1OISv",right:"TextOverFullWidthAsset-module_Right__tbRff"};d.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.TextOverFullWidthAsset-module_base__1Eq4j {\n  position: relative;\n  width: 100%;\n}\n@media (max-width: 639px) {\n.TextOverFullWidthAsset-module_media__4oONG {\n    height: 80vh\n}\n  }\n.TextOverFullWidthAsset-module_media__4oONG img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    vertical-align: middle;\n  }\n@media (max-width: 639px) {\n.TextOverFullWidthAsset-module_media__4oONG img {\n      height: 80vh\n  }\n    }\n.TextOverFullWidthAsset-module_content__2--QQ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 20px;\n}\n@media (min-width: 640px) {\n.TextOverFullWidthAsset-module_content__2--QQ {\n    width: 42%\n}\n  }\n@media (min-width: 1025px) {\n.TextOverFullWidthAsset-module_content__2--QQ {\n    width: 34%\n}\n  }\n.TextOverFullWidthAsset-module_content__2--QQ.TextOverFullWidthAsset-module_Bottom__20Kz1 {\n    top: auto;\n    bottom: 0;\n  }\n@media (min-width: 1025px) {\n.TextOverFullWidthAsset-module_content__2--QQ.TextOverFullWidthAsset-module_Bottom__20Kz1 {\n      bottom: auto\n  }\n    }\n@media (min-width: 1025px) {\n.TextOverFullWidthAsset-module_content__2--QQ.TextOverFullWidthAsset-module_Top__3Anm9,\n  .TextOverFullWidthAsset-module_content__2--QQ.TextOverFullWidthAsset-module_Bottom__20Kz1 {\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%)\n  }\n    }\n@media (min-width: 640px) {\n.TextOverFullWidthAsset-module_content__2--QQ.TextOverFullWidthAsset-module_Left__1OISv {\n      left: 8%;\n      padding: 20px 0\n  }\n    }\n@media (min-width: 640px) {\n.TextOverFullWidthAsset-module_content__2--QQ.TextOverFullWidthAsset-module_Right__tbRff {\n      right: 8%;\n      left: auto;\n      padding: 20px 0\n  }\n    }\n");var h=function(t){var n=t.backgroundImage,o=t.backgroundVideo,d=t.className,a=t.content,r=t.copyHeight,h=t.copySide,_=t.mediaType,p=void 0,x={};return a||["Image","Video"].includes(_)?("Image"===_&&(p=l.Image,x=n),"Video"===_&&(p=i.Video,x=e._objectSpread2(e._objectSpread2({},o),{},{hasAllowAudio:!1,hasAutoplay:!0,hasControls:!1,hasLoop:!0,hasPlayInFullScreen:!1,hasSpanContent:!1,isFullWidth:!0,isHeroFullWidth:!1,isScrollBasedVideo:!1})),s.default.createElement("div",{className:m.default(u.base,d),"data-testid":"data-testid-TextOverFullWidthAsset"},p&&s.default.createElement(p,e._extends({},x,{className:m.default(u.media)})),s.default.createElement("div",{className:m.default(u.content,u[r],u[h])},a))):null};h.propTypes={backgroundImage:r.default.any,backgroundVideo:r.default.any,className:r.default.string,content:r.default.node.isRequired,copyHeight:r.default.oneOf(["Top","Bottom"]),copySide:r.default.oneOf(["Left","Right"]),mediaType:r.default.oneOf(["Image","Video"]).isRequired},h.defaultProps={backgroundImage:void 0,backgroundVideo:void 0,className:void 0,content:void 0,copyHeight:"Top",copySide:"Left",mediaType:void 0},exports.TextOverFullWidthAsset=h;
