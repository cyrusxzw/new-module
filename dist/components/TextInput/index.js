"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../sharedChunks/tslib.es6.js"),n=require("react"),t=require("../../sharedChunks/style-inject.es.js"),o=require("classnames");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(n),l=r(o),u={formText:"TextInput-module_formText__1dkzA",formTextInput:"TextInput-module_formTextInput__35OMg",dark:"TextInput-module_dark__36nn2",light:"TextInput-module_light__6Lh29",hasError:"TextInput-module_hasError__Xrq0u",formTextLabel:"TextInput-module_formTextLabel__2Ec3y","is-hidden":"TextInput-module_is-hidden__PerZd",hasContent:"TextInput-module_hasContent__1rtVl",isHidden:"TextInput-module_is-hidden__PerZd"};t.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/* 320w (568h) */\n/* 639w (800h) */\n/* 1024w (768h) */\n/* 1219w (720h) */\n/* 1599w (900h) */\n/* 1919w (1080h) */\n/* 2399w (1200h) */\n/* 2560w (1440h) */\n/**\n * Device breakpoints - Google Chrome recomendations\n * Mobile S -    0 - 320w  (568h)\n * Mobile M -  321 - 375w  (812h)\n * Mobile L -  376 - 425w  (736h)\n * Tablet   -  426 - 768w  (1024h)\n * Laptop   -  769 - 1024w (576h)\n * Laptop L - 1025 - 1440w (900h)\n * 4K       - 1441 - 2560w (1440h)\n * Cinema   - 2561w ~\n *\n * Aesop Device breakpoints\n * Extra Small   -    0 - 320w  (568h)\n * Small         -  321 - 639w  (800h)\n * Medium        -  640 - 1024w (768h)\n * Large         - 1025 - 1219w (720h)\n * Extra Large   - 1220 - 1599w (900h)\n * Extra Large 2 - 1600 - 1919w (1080h)\n * Extra Large 3 - 1920 - 2399w (1200h)\n * Extra Large 4 - 2400 - 2560w (1440h)\n */\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/** Current use case\n.ornamentalHover {\n  @extend %ornamentalHover;\n}\n\n.ornamentalHover::after {\n  @extend %ornamentalHoverAfter;\n}\n\n.dark .ornamentalHover::after {\n  @extend %ornamentalHoverDarkTheme;\n}\n\n.light .ornamentalHover::after {\n  @extend %ornamentalHoverLightTheme;\n}\n\n.ornamentalWrapper:hover {\n  .ornamentalHover::after {\n    width: 100%;\n  }\n}\n*/\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.TextInput-module_formText__1dkzA {\n  width: 100%;\n}\n.TextInput-module_formTextInput__35OMg {\n  position: relative;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 10px;\n  border: 1px solid #fffef2;\n  background-color: transparent;\n  border-radius: 3px;\n  caret-color: #fffef2;\n  color: #fffef2;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 20px;\n  line-height: 1.85;\n}\n.TextInput-module_formTextInput__35OMg.TextInput-module_dark__36nn2 {\n    border-color: #333;\n    caret-color: #333;\n    color: #333;\n  }\n.TextInput-module_formTextInput__35OMg.TextInput-module_light__6Lh29 {\n    border-color: #fffef2;\n    caret-color: #fffef2;\n    color: #fffef2;\n  }\n.TextInput-module_formTextInput__35OMg.TextInput-module_hasError__Xrq0u {\n    border-color: #ea6956;\n  }\n.TextInput-module_formTextInput__35OMg:focus {\n    outline: none;\n  }\n/* Overrides for autofill coloring */\n.TextInput-module_formTextInput__35OMg:-webkit-autofill.TextInput-module_dark__36nn2, .TextInput-module_formTextInput__35OMg:-webkit-autofill:hover.TextInput-module_dark__36nn2, .TextInput-module_formTextInput__35OMg:-webkit-autofill:focus.TextInput-module_dark__36nn2 {\n      -webkit-text-fill-color: #333;\n    }\n.TextInput-module_formTextInput__35OMg:-webkit-autofill.TextInput-module_light__6Lh29, .TextInput-module_formTextInput__35OMg:-webkit-autofill:hover.TextInput-module_light__6Lh29, .TextInput-module_formTextInput__35OMg:-webkit-autofill:focus.TextInput-module_light__6Lh29 {\n      -webkit-text-fill-color: #fffef2;\n    }\n.TextInput-module_formTextInput__35OMg:-webkit-autofill,\n  .TextInput-module_formTextInput__35OMg:-webkit-autofill:hover,\n  .TextInput-module_formTextInput__35OMg:-webkit-autofill:focus {\n\n    -webkit-transition: background-color 5000s ease-in-out 0s;\n\n    transition: background-color 5000s ease-in-out 0s;\n}\n@media (min-width: 640px) and (max-width: 1024px) {\n.TextInput-module_formTextInput__35OMg {\n    font-size: 17px;\n    line-height: 2.18\n}\n  }\n@media (max-width: 639px) {\n.TextInput-module_formTextInput__35OMg {\n    font-size: 18px;\n    line-height: 2.068\n}\n  }\n.TextInput-module_formTextLabel__2Ec3y {\n  position: absolute;\n  top: 2px;\n  left: 10px;\n  font-family: 'Suisse Regular', sans-serif;\n  font-size: 20px;\n  line-height: 1.85;\n  opacity: 1;\n  pointer-events: none;\n  -webkit-transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.TextInput-module_formTextLabel__2Ec3y.TextInput-module_dark__36nn2 {\n    color: #333;\n  }\n.TextInput-module_formTextLabel__2Ec3y.TextInput-module_light__6Lh29 {\n    color: #fffef2;\n  }\n.TextInput-module_formTextLabel__2Ec3y.TextInput-module_is-hidden__PerZd {\n    opacity: 0;\n  }\n.TextInput-module_formTextInput__35OMg:focus + .TextInput-module_formTextLabel__2Ec3y,\n  .TextInput-module_formTextInput__35OMg.TextInput-module_hasContent__1rtVl + .TextInput-module_formTextLabel__2Ec3y {\n    opacity: 0;\n  }\n@media (min-width: 640px) and (max-width: 1024px) {\n.TextInput-module_formTextLabel__2Ec3y {\n    font-size: 17px;\n    line-height: 2.18\n}\n  }\n@media (max-width: 639px) {\n.TextInput-module_formTextLabel__2Ec3y {\n    font-size: 18px;\n    line-height: 2.068\n}\n  }\n/*\n.formTextErrorMessage {\n  color: var(--color-error);\n} */\n");exports.TextInput=function(n){var t=n.className,o=n.defaultValue,r=n.hasContent,i=void 0!==r&&r,m=n.hasError,x=void 0!==m&&m,p=n.id,_=n.inputClassName,d=n.inputRef,s=n.isEnabled,f=void 0===s||s,h=n.label,T=n.max,c=n.maxLength,b=n.min,I=n.name,g=n.onBlur,k=n.onChange,w=n.prefixElement,v=n.theme,L=void 0===v?"dark":v,E=n.type,M=void 0===E?"text":E,y=n.value,O=e.__rest(n,["className","defaultValue","hasContent","hasError","id","inputClassName","inputRef","isEnabled","label","max","maxLength","min","name","onBlur","onChange","prefixElement","theme","type","value"])["data-test-ref"],C=l.default(u.formText,t),z=l.default(u.formTextInput,u[L],(!!o||i)&&u.hasContent,!!x&&u.hasError,_),H=l.default(u.formTextLabel,u[L]);return a.default.createElement("div",{className:C},a.default.createElement("label",{htmlFor:p},a.default.createElement("input",{className:z,"data-test-ref":O,defaultValue:o,disabled:!f,id:p,max:T,maxLength:c,min:b,name:I,onBlur:g,onChange:k,ref:d,type:M,value:y}),a.default.createElement("span",{className:H},h),w))};
