"use strict";var e=require("react"),n=require("classnames"),r=require("./objects.js"),t=require("./Hyperlink.js"),a=require("./style-inject.es.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(e),m=i(n),l={base:"Breadcrumbs-module_base__1qjpj",list:"Breadcrumbs-module_list__eE_Me",item:"Breadcrumbs-module_item__1Kvmk",dark:"Breadcrumbs-module_dark__1n2Ey",light:"Breadcrumbs-module_light__2PLra",link:"Breadcrumbs-module_link__2UQyz"};a.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.Breadcrumbs-module_base__1qjpj {\n  margin: 16px 0;\n}\n.Breadcrumbs-module_list__eE_Me {\n  padding: 0;\n  margin: 0;\n  list-style: 0;\n}\n.Breadcrumbs-module_item__1Kvmk {\n  display: inline-block;\n  padding: 0;\n}\n.Breadcrumbs-module_item__1Kvmk:not(:first-of-type)::before {\n    display: inline-block;\n    padding: 0 10px;\n    content: '\\2022';\n    font-size: 14px;\n    line-height: 1;\n  }\n.Breadcrumbs-module_dark__1n2Ey .Breadcrumbs-module_item__1Kvmk:not(:first-of-type)::before {\n      color: #333;\n    }\n.Breadcrumbs-module_light__2PLra .Breadcrumbs-module_item__1Kvmk:not(:first-of-type)::before {\n      color: #fffef2;\n    }\n.Breadcrumbs-module_link__2UQyz {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n}\n.Breadcrumbs-module_dark__1n2Ey .Breadcrumbs-module_link__2UQyz {\n    color: #333;\n  }\n.Breadcrumbs-module_light__2PLra .Breadcrumbs-module_link__2UQyz {\n    color: #fffef2;\n  }\n.Breadcrumbs-module_link__2UQyz::after {\n    display: block;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    margin-top: -3px;\n    margin-top: 0;\n    margin-bottom: -10px;\n    content: '';\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0);\n    -webkit-transform-origin: left;\n            transform-origin: left;\n    -webkit-transition: -webkit-transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: -webkit-transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n.Breadcrumbs-module_dark__1n2Ey .Breadcrumbs-module_link__2UQyz::after {\n      border-bottom-color: #333;\n    }\n.Breadcrumbs-module_light__2PLra .Breadcrumbs-module_link__2UQyz::after {\n      border-bottom-color: #fffef2;\n    }\n.Breadcrumbs-module_link__2UQyz:hover::after,\n  .Breadcrumbs-module_link__2UQyz:focus::after {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n  }\n");exports.Breadcrumbs=function(e){var n=e.className,a=e.items,i=e.onHyperlinkClick,s=e.theme,d=void 0===s?"dark":s;if(!a||!r.isObjectPopulatedArray(a))return null;var u=m.default(l.base,l[d],n),c=function(e){var n=e.item;return o.default.createElement("li",{className:l.item,key:n.id},o.default.createElement(t.Hyperlink,{className:l.link,id:n.id,onClick:function(){return i(n)},theme:d,title:n.title,url:n.url},n.label))};return o.default.createElement("nav",{className:u,"data-testid":"data-testid-Breadcrumbs"},o.default.createElement("ul",{className:l.list},a.map((function(e){return o.default.createElement(c,{item:e,key:e.id})}))))};
