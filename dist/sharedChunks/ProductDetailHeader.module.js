"use strict";var n=require("./style-inject.es.js");n.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductDetailBody-module_base__1VWkM {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.4;\n}\n.ProductDetailBody-module_base__1VWkM,\n  .ProductDetailBody-module_base__1VWkM * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductDetailBody-module_base__1VWkM {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-flow: row-reverse;\n            flex-flow: row-reverse\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailBody-module_base__1VWkM {\n    max-width: 470px;\n    -webkit-transition: opacity 1300ms 300ms cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: opacity 1300ms 300ms cubic-bezier(0.215, 0.61, 0.355, 1)\n}\n  }\n.ProductDetailBody-module_content__2ml8q {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductDetailBody-module_content__2ml8q {\n    width: 50%\n}\n  }\n.ProductDetailBody-module_header__2quJx {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n@media (max-width: 639px) {\n.ProductDetailBody-module_header__2quJx {\n    margin-bottom: 5px\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductDetailBody-module_header__2quJx {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between\n}\n  }\n.ProductDetailBody-module_header__2quJx .ProductDetailBody-module_productName__3gP6r {\n    margin-top: 0;\n  }\n.ProductDetailBody-module_header__2quJx .ProductDetailBody-module_productName__3gP6r.ProductDetailBody-module_isOnlyChild__7ERTH {\n      margin-bottom: 0;\n    }\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductDetailBody-module_header__2quJx .ProductDetailBody-module_productName__3gP6r {\n      width: 46%\n  }\n    }\n@media (min-width: 1025px) {\n.ProductDetailBody-module_header__2quJx .ProductDetailBody-module_productName__3gP6r {\n      margin-bottom: 15px\n  }\n    }\n.ProductDetailBody-module_description__2bLVF {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n@media (max-width: 639px) {\n.ProductDetailBody-module_description__2bLVF {\n    margin-bottom: 5px\n}\n  }\n@media (min-width: 640px) {\n.ProductDetailBody-module_description__2bLVF {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3\n}\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductDetailBody-module_description__2bLVF {\n    margin-top: 4px\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailBody-module_description__2bLVF {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2\n}\n  }\n.ProductDetailBody-module_description__2bLVF .ProductDetailBody-module_descriptionCopy__Xpu92 {\n    font-size: 16px;\n    line-height: 1.7;\n  }\n@media (min-width: 1025px) {\n.ProductDetailBody-module_description__2bLVF .ProductDetailBody-module_descriptionCopy__Xpu92 {\n      margin-bottom: 0;\n      font-size: 14px;\n      line-height: 1.4\n  }\n    }\n.ProductDetailBody-module_purchase__3O5jE {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3;\n  margin-bottom: 24px;\n}\n@media (min-width: 640px) {\n.ProductDetailBody-module_purchase__3O5jE {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    margin-bottom: 0\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailBody-module_purchase__3O5jE {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4;\n    margin-bottom: 14px\n}\n  }\n.ProductDetailBody-module_purchase__3O5jE .ProductDetailBody-module_variants__2Htb0 {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin-bottom: 24px;\n  }\n@media (min-width: 1025px) {\n.ProductDetailBody-module_purchase__3O5jE .ProductDetailBody-module_variants__2Htb0 {\n      margin-bottom: 14px\n  }\n    }\n.ProductDetailBody-module_cartDisclaimer__enCjD {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4;\n  margin-bottom: 24px;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.ProductDetailBody-module_dark__2ivfq .ProductDetailBody-module_cartDisclaimer__enCjD {\n    color: #666;\n  }\n.ProductDetailBody-module_light__FZ27x .ProductDetailBody-module_cartDisclaimer__enCjD {\n    color: #e0dfd6;\n  }\n@media (min-width: 640px) {\n.ProductDetailBody-module_cartDisclaimer__enCjD {\n    margin-top: 14px\n}\n  }\n.ProductDetailBody-module_details__1yi-g {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5;\n}\n@media (min-width: 640px) {\n.ProductDetailBody-module_details__1yi-g {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailBody-module_details__1yi-g {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3\n}\n  }\n.ProductDetailBody-module_definitionList__Y2sn7 {\n  padding-top: 24px;\n  margin-top: 0;\n  margin-bottom: 24px;\n}\n.ProductDetailBody-module_definitionList__Y2sn7 dt {\n    padding-top: 24px;\n  }\n.ProductDetailBody-module_definitionList__Y2sn7 dd {\n    padding-bottom: 24px;\n  }\n@media (max-width: 639px) {\n    .ProductDetailBody-module_definitionList__Y2sn7 button[class*='flyinPanelTrigger'] {\n      top: 24px;\n    }\n  }\n@media (min-width: 640px) {\n.ProductDetailBody-module_definitionList__Y2sn7 {\n    padding-top: 14px;\n    margin-top: 24px;\n    margin-bottom: 14px\n}\n\n    .ProductDetailBody-module_definitionList__Y2sn7 dt {\n      padding-top: 14px;\n    }\n\n    .ProductDetailBody-module_definitionList__Y2sn7 dd {\n      padding-bottom: 14px;\n    }\n  }\n.ProductDetailBody-module_dark__2ivfq .ProductDetailBody-module_definitionList__Y2sn7 {\n    border-top: 2px solid #4a4a4a;\n  }\n.ProductDetailBody-module_light__FZ27x .ProductDetailBody-module_definitionList__Y2sn7 {\n    border-top: 2px solid #fffef2;\n  }\n.ProductDetailBody-module_flyinPanelTrigger__2qUx5 {\n  position: absolute;\n  top: 14px;\n  right: 0;\n  outline: none;\n}\ndt:first-child .ProductDetailBody-module_flyinPanelTrigger__2qUx5 {\n    top: 0;\n  }\n.ProductDetailBody-module_dark__2ivfq .ProductDetailBody-module_flyinPanelTrigger__2qUx5:hover g :nth-child(1) {\n        fill: #333;\n      }\n.ProductDetailBody-module_dark__2ivfq .ProductDetailBody-module_flyinPanelTrigger__2qUx5:hover g :nth-child(2) {\n        fill: #fffef2;\n        stroke: #fffef2;\n      }\n.ProductDetailBody-module_dark__2ivfq .ProductDetailBody-module_flyinPanelTrigger__2qUx5:hover g :nth-child(3) {\n        fill: #fffef2;\n        stroke: #fffef2;\n      }\n.ProductDetailBody-module_light__FZ27x .ProductDetailBody-module_flyinPanelTrigger__2qUx5:hover g :nth-child(1) {\n        fill: #fffef2;\n      }\n.ProductDetailBody-module_light__FZ27x .ProductDetailBody-module_flyinPanelTrigger__2qUx5:hover g :nth-child(2) {\n        fill: #333;\n        stroke: #333;\n      }\n.ProductDetailBody-module_light__FZ27x .ProductDetailBody-module_flyinPanelTrigger__2qUx5:hover g :nth-child(3) {\n        fill: #333;\n        stroke: #333;\n      }\n.ProductDetailBody-module_upSell__1JfQC {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6;\n  margin-bottom: 24px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductDetailBody-module_mediumSidebar__2z9C8 {\n    width: 50%;\n    padding-right: 20px\n}\n  }\n.ProductDetailBody-module_mediumDescriptionCopy__1J_Nx {\n  margin-bottom: 14px;\n}\n.ProductDetailBody-module_mediumProductName__1HprA {\n  margin-bottom: 15px;\n}\n.ProductDetailBody-module_paymentWidget__v_icY.ProductDetailBody-module_hasBottomBorder__E7Wso {\n    border-bottom: 1px solid #d5d4c9;\n  }\n");n.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductDetailImage-module_base__377HI {\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.4;\n}\n.ProductDetailImage-module_base__377HI,\n  .ProductDetailImage-module_base__377HI * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.ProductDetailImage-module_image__rdqnp img {\n    width: auto;\n    max-width: 100%;\n    max-height: 200px;\n  }\n@media (min-width: 640px) {\n.ProductDetailImage-module_image__rdqnp img {\n      max-height: 300px\n  }\n    }\n@media (min-width: 1025px) {\n.ProductDetailImage-module_image__rdqnp img {\n      max-height: 500px\n  }\n    }\n@media (min-width: 1220px) {\n.ProductDetailImage-module_image__rdqnp img {\n      max-height: 600px\n  }\n    }\n.ProductDetailImage-module_cartDisclaimer__3Is7g {\n  max-width: 300px;\n  margin: 15px auto;\n  font-size: 13px;\n  line-height: 1.6;\n  text-align: center;\n}\n.ProductDetailImage-module_dark__K3okO .ProductDetailImage-module_cartDisclaimer__3Is7g {\n    color: #666;\n  }\n.ProductDetailImage-module_light__LlEGV .ProductDetailImage-module_cartDisclaimer__3Is7g {\n    color: #e0dfd6;\n  }\n");n.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.ProductDetailHeader-module_base__3-VX6 {\n  min-height: 85vh;\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n}\n@media (min-width: 640px) {\n.ProductDetailHeader-module_base__3-VX6 {\n    padding-top: 100px;\n    padding-right: 34px;\n    padding-bottom: 40px;\n    padding-left: 34px\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailHeader-module_base__3-VX6 {\n    padding-right: 80px;\n    padding-bottom: 80px;\n    padding-left: 80px\n}\n  }\n@media (min-width: 1220px) {\n.ProductDetailHeader-module_base__3-VX6 {\n    padding-top: 120px;\n    padding-right: 0;\n    padding-bottom: 120px;\n    padding-left: 0\n}\n  }\n.ProductDetailHeader-module_base__3-VX6,\n  .ProductDetailHeader-module_base__3-VX6 * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n.ProductDetailHeader-module_wrapper__3p_e5 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n@media (min-width: 1025px) {\n.ProductDetailHeader-module_wrapper__3p_e5 {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailHeader-module_content__2JEuZ {\n    width: calc(100% * 5 / 12);\n    max-width: 470px\n}\n  }\n@media (min-width: 1220px) {\n.ProductDetailHeader-module_content__2JEuZ {\n    width: calc(100% * 3 / 12);\n    margin-right: calc(100% * 1 / 12)\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailHeader-module_image__32mQI {\n    width: calc(100% * 7 / 12);\n    -ms-flex-item-align: center;\n        align-self: center\n}\n  }\n@media (max-width: 639px) {\n.ProductDetailHeader-module_image__32mQI picture {\n      margin-bottom: 30px\n  }\n    }\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductDetailHeader-module_image__32mQI picture {\n      margin-bottom: 50px\n  }\n    }\n@media (min-width: 1025px) {\n.ProductDetailHeader-module_image__32mQI picture {\n      display: block;\n      max-width: 440px;\n      margin-right: auto;\n      margin-left: auto\n  }\n    }\n@media (min-width: 1220px) {\n.ProductDetailHeader-module_image__32mQI {\n    width: calc(100% * 4 / 12)\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailHeader-module_largeImage__gi0t6 {\n    width: calc(100% * 7 / 12)\n}\n\n    .ProductDetailHeader-module_largeImage__gi0t6 picture {\n      max-width: 880px;\n    }\n  }\n@media (min-width: 1220px) {\n.ProductDetailHeader-module_largeImage__gi0t6 {\n    width: calc(100% * 7 / 12)\n}\n  }\n.ProductDetailHeader-module_breadcrumbs__QlA2m {\n  margin-bottom: 25px;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.ProductDetailHeader-module_breadcrumbs__QlA2m {\n    margin: 20px 0 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px)\n}\n  }\n@media (min-width: 1025px) {\n.ProductDetailHeader-module_breadcrumbs__QlA2m {\n    max-width: 470px;\n    margin-top: 0\n}\n  }\n"),exports.styles={base:"ProductDetailBody-module_base__1VWkM",content:"ProductDetailBody-module_content__2ml8q",header:"ProductDetailBody-module_header__2quJx",productName:"ProductDetailBody-module_productName__3gP6r",isOnlyChild:"ProductDetailBody-module_isOnlyChild__7ERTH",description:"ProductDetailBody-module_description__2bLVF",descriptionCopy:"ProductDetailBody-module_descriptionCopy__Xpu92",purchase:"ProductDetailBody-module_purchase__3O5jE",variants:"ProductDetailBody-module_variants__2Htb0",cartDisclaimer:"ProductDetailBody-module_cartDisclaimer__enCjD",dark:"ProductDetailBody-module_dark__2ivfq",light:"ProductDetailBody-module_light__FZ27x",details:"ProductDetailBody-module_details__1yi-g",definitionList:"ProductDetailBody-module_definitionList__Y2sn7",flyinPanelTrigger:"ProductDetailBody-module_flyinPanelTrigger__2qUx5",upSell:"ProductDetailBody-module_upSell__1JfQC",mediumSidebar:"ProductDetailBody-module_mediumSidebar__2z9C8",mediumDescriptionCopy:"ProductDetailBody-module_mediumDescriptionCopy__1J_Nx",mediumProductName:"ProductDetailBody-module_mediumProductName__1HprA",paymentWidget:"ProductDetailBody-module_paymentWidget__v_icY",hasBottomBorder:"ProductDetailBody-module_hasBottomBorder__E7Wso"},exports.styles$1={base:"ProductDetailImage-module_base__377HI",image:"ProductDetailImage-module_image__rdqnp",cartDisclaimer:"ProductDetailImage-module_cartDisclaimer__3Is7g",dark:"ProductDetailImage-module_dark__K3okO",light:"ProductDetailImage-module_light__LlEGV"},exports.styles$2={base:"ProductDetailHeader-module_base__3-VX6",wrapper:"ProductDetailHeader-module_wrapper__3p_e5",content:"ProductDetailHeader-module_content__2JEuZ",image:"ProductDetailHeader-module_image__32mQI",largeImage:"ProductDetailHeader-module_largeImage__gi0t6",breadcrumbs:"ProductDetailHeader-module_breadcrumbs__QlA2m"};
