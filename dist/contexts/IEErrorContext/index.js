"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e),o=e.createContext(void 0);exports.IEErrorContextProvider=function(e){var r=e.children,n=e.error;return t.default.createElement(o.Provider,{value:n},r)},exports.useIEErrorContext=function(){return e.useContext(o)};
