"use strict";var r=require("react"),e=require("./tslib.es6.js");function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var t,n=o(r);!function(r){r[r.FAIL=0]="FAIL",r[r.FETCHING=1]="FETCHING",r[r.SUCCESS=2]="SUCCESS"}(t||(t={}));var a={hasError:!1,isLoading:!1},i=function(r,o){switch(o.type){case t.FETCHING:return e.__assign(e.__assign({},r),{hasError:!1,isLoading:!0});case t.SUCCESS:return e.__assign(e.__assign({},r),{hasError:!1,isLoading:!1});case t.FAIL:return e.__assign(e.__assign({},r),{hasError:!0,isLoading:!1});default:throw new Error('useLoadMore: Dispatch action type "'+o.type+'" not found.')}},s=function(e){var o=r.useReducer(i,a),n=o[0],s=o[1],u=n.isLoading,d=n.hasError;return{actionTypes:t,dispatch:s,hasError:d,isLoading:u,onClick:e}},u=r.createContext(void 0);exports.LoadMoreContextProvider=function(r){var e=r.children,o=r.onClick;return n.default.createElement(u.Provider,{value:s(o)},e)},exports.useLoadMoreContext=function(){var e=r.useContext(u);if(void 0===e)throw new Error("useLoadMoreContext must be used within a LoadMoreContextProvider");return e};