"use strict";var e=require("react"),t=require("./tslib.es6.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var o=r(e),i=function(r,o){void 0===o&&(o={libraries:["places"]});var i=e.useState(null),u=i[0],a=i[1],s=e.useState(!1),l=s[0],c=s[1];return e.useEffect((function(){t.__awaiter(void 0,void 0,void 0,(function(){var e,i,u,s,l,f;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,Promise.resolve().then((function(){return n(require("google-maps"))}))];case 1:return e=t.sent(),i=e.default||e,c(!0),u=o.languageCode,s=o.libraries,l=o.regionCode,i.KEY=r,i.LIBRARIES=s,u&&(i.LANGUAGE=u),l&&(i.REGION=l),f=a,[4,(d=i,new Promise((function(e){d.load((function(t){e(t)}))})))];case 2:return f.apply(void 0,[t.sent()]),c(!1),[2]}var d}))}))}),[]),{googleMap:u,isLoading:l}},u=e.createContext({googleMap:null,isLoading:!1});exports.GoogleMapsContextProvider=function(e){var t=e.apiKey,r=e.children,n=e.options;return o.default.createElement(u.Provider,{value:i(t,n)},r)},exports.useGoogleMapsContext=function(){var t=e.useContext(u);if(void 0===t)throw new Error("useGoogleMapsContext must be used within a GoogleMapsContextProvider");return t};