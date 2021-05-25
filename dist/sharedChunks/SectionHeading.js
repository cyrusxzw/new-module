"use strict";var e=require("./_rollupPluginBabelHelpers.js"),n=require("react"),i=require("prop-types"),a=require("classnames"),o=require("./Heading.js"),t=require("./style-inject.es.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=d(n),s=d(i),r=d(a),g=function(e,n){return e?n?"2":"3":n?"1":"2"},u=function(e,n,i){return e?n?i?"3":"4":i?"2":"3":n?i?"2":"3":i?"1":"2"},m={base:"SectionHeading-module_base__MQ5b-",eyebrow:"SectionHeading-module_eyebrow__3PogN",heading:"SectionHeading-module_heading__qFPqU",subHeading:"SectionHeading-module_subHeading__319qX",heroHeading:"SectionHeading-module_heroHeading__1Gy3c",offsetPageHeading:"SectionHeading-module_offsetPageHeading__1Bcrq",SuisseTitleFont:"SectionHeading-module_SuisseTitleFont__D854J",ZapfTitleFont:"SectionHeading-module_ZapfTitleFont__74AFB",suisseTitleFont:"SectionHeading-module_SuisseTitleFont__D854J",zapfTitleFont:"SectionHeading-module_ZapfTitleFont__74AFB"};t.styleInject(":root {\n  /* Base colours */\n\n  /* UI colours light theme */\n\n  /* UI colours dark theme */\n\n  /* Background colours */\n\n  /* System colours */\n\n  /* Secondary Message background colour */\n}\n/** https://github.com/postcss/postcss-custom-properties/issues/24\n :root {\n  --breakpoint-xs-min: 0;\n  --breakpoint-xs-max: 320px;\n  --breakpoint-sm-min: 321px;\n  --breakpoint-sm-max: 639px;\n  --breakpoint-md-min: 640px;\n  --breakpoint-md-max: 1024px;\n  --breakpoint-lg-min: 1025px;\n  --breakpoint-lg-max: 1219px;\n  --breakpoint-xl-min: 1220px;\n  --breakpoint-xl-max: 1599px;\n  --breakpoint-x2l-min: 1600px;\n  --breakpoint-x2l-max: 1919px;\n  --breakpoint-x3l-min: 1920px;\n  --breakpoint-x3l-max: 2399px;\n  --breakpoint-x4l-min: 2400px;\n} */\n/* Dark theme UI elements */\n/* Light theme UI elements */\n.SectionHeading-module_base__MQ5b- {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.SectionHeading-module_eyebrow__3PogN {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.SectionHeading-module_heading__qFPqU {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n.SectionHeading-module_subHeading__319qX {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3;\n}\n.SectionHeading-module_heroHeading__1Gy3c .SectionHeading-module_eyebrow__3PogN {\n    margin-bottom: 20px;\n  }\n.SectionHeading-module_heroHeading__1Gy3c .SectionHeading-module_heading__qFPqU,\n  .SectionHeading-module_heroHeading__1Gy3c .SectionHeading-module_subHeading__319qX {\n    margin-bottom: 5px;\n  }\n@media (min-width: 640px) {\n    .SectionHeading-module_heroHeading__1Gy3c .SectionHeading-module_eyebrow__3PogN,\n    .SectionHeading-module_heroHeading__1Gy3c .SectionHeading-module_heading__qFPqU,\n    .SectionHeading-module_heroHeading__1Gy3c .SectionHeading-module_subHeading__319qX {\n      margin-bottom: 15px;\n    }\n  }\n.SectionHeading-module_offsetPageHeading__1Bcrq {\n  padding-top: 160px;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-top: -100px;\n}\n@media (min-width: 640px) {\n.SectionHeading-module_offsetPageHeading__1Bcrq {\n    width: 40%;\n    padding-right: 0;\n    padding-left: 0;\n    margin-top: -75px;\n    margin-left: 30%\n}\n  }\n@media (min-width: 1025px) {\n.SectionHeading-module_offsetPageHeading__1Bcrq {\n    padding-top: 190px\n}\n  }\n.SectionHeading-module_SuisseTitleFont__D854J {\n  font-family: 'Suisse Regular', sans-serif;\n}\n.SectionHeading-module_ZapfTitleFont__74AFB {\n  font-family: 'Zapf Humanist', serif;\n}\n/**\n   * Override for Korean region translation\n   */\nhtml[lang*='ko'] .SectionHeading-module_ZapfTitleFont__74AFB,\n  html[lang*='KO'] .SectionHeading-module_ZapfTitleFont__74AFB {\n    font-family: 'Suisse Regular', sans-serif;\n    font-weight: 400;\n  }\n");var _=function(n){var i,a=n.childrenClassNames,t=n.className,d=n.eyebrow,s=n.hasSerifFontHeading,_=n.heading,c=n.id,f=n.isFlush,p=n.isOffsetPageHeading,H=n.isHeroHeading,b=n.isPageHeading,h=n.subHeading,x=n.theme,S=n.titleFont,F=r.default(t,m.base,(i={},e._defineProperty(i,m.offsetPageHeading,p),e._defineProperty(i,m.heroHeading,H),i)),y=r.default(m.eyebrow,a.eyebrow),k=r.default(m.heading,a.heading,S&&m["".concat(S,"TitleFont")]),P=r.default(m.subHeading,a.subHeading);return l.default.createElement("header",{className:F,id:c},_&&l.default.createElement(o.Heading,{className:k,hasSerifFont:s,isFlush:f,level:b?"1":"2",size:"xLarge",theme:x},_),d&&l.default.createElement(o.Heading,{className:y,hasMediumWeightFont:!0,isFlush:f,level:g(_,b),size:"xXSmall",theme:x},d),h&&l.default.createElement(o.Heading,{className:P,hasMediumWeightFont:!0,isFlush:f,level:u(d,_,b),size:"xSmall",theme:x},h))};_.propTypes={childrenClassNames:s.default.shape({eyebrow:s.default.string,heading:s.default.string,subHeading:s.default.string}),className:s.default.string,eyebrow:s.default.string,hasSerifFontHeading:s.default.bool,heading:s.default.string,id:s.default.string,isFlush:s.default.bool,isOffsetPageHeading:s.default.bool,isHeroHeading:s.default.bool,isPageHeading:s.default.bool,subHeading:s.default.string,theme:s.default.oneOf(["dark","light"]),titleFont:s.default.oneOf(["Suisse","Zapf"])},_.defaultProps={childrenClassNames:{eyebrow:void 0,heading:void 0,subHeading:void 0},className:void 0,eyebrow:void 0,hasSerifFontHeading:!1,heading:void 0,id:void 0,isFlush:!1,isOffsetPageHeading:!1,isHeroHeading:!1,isPageHeading:!1,subHeading:void 0,theme:"dark",titleFont:void 0},exports.SectionHeading=_;
