"use strict";var e=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e),o=e.createContext(void 0);exports.ErrorContextProvider=function(e){var r=e.children,n=e.error;return t.default.createElement(o.Provider,{value:n},r)},exports.useErrorContext=function(){return e.useContext(o)};