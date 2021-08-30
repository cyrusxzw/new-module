"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),i=require("classnames"),t=require("../../sharedChunks/ContentHubArticle.js"),l=require("../../sharedChunks/ContentHubArticleList.module.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../sharedChunks/viewports.js"),require("../../sharedChunks/useOnScreen.js"),require("../../sharedChunks/environment.js"),require("../../sharedChunks/isSymbol.js"),require("../../sharedChunks/Image.js"),require("../../sharedChunks/Hyperlink.js"),require("../../sharedChunks/Icon.js"),require("react-uid"),require("../../sharedChunks/find.js"),require("../../sharedChunks/get.js"),require("../../sharedChunks/toNumber.js"),require("../../sharedChunks/tslib.es6.js"),require("../../sharedChunks/style-inject.es.js"),require("../../sharedChunks/Transition.js"),require("prop-types"),require("react-dom"),require("../../sharedChunks/useHasMounted.js"),require("../../sharedChunks/ContentHubArticle.module.js");var r=a(e),n=a(i);exports.ContentHubArticleList=function(e){var i,a,o,s,u,d=e.articles,c=e.className,m=e.isFirstGroup,h=void 0!==m&&m,T=e.pattern,f=void 0===T?0:T,b=d&&d.length,g=n.default(l.styles.base,c),C=n.default(l.styles.mobile,c),y=n.default(l.styles.mobileMiddleRow,((i={})[l.styles.reverseColumn]=0===f,i),c),k=n.default(l.styles["top-left-"+f],l.styles.article,((a={})[l.styles.nonFirstRow]=b<3&&0===f||b<2,a)),v=n.default(l.styles["top-right-"+f],l.styles.article,((o={})[l.styles.nonFirstRow]=b<3&&1===f||b<2,o)),R=n.default(l.styles["bottom-left-"+f],l.styles.article,((s={})[l.styles.nonFirstRow]=1===b&&0===f,s)),z=n.default(l.styles["bottom-right-"+f],l.styles.article,((u={})[l.styles.nonFirstRow]=1===b&&1===f,u)),H=n.default(l.styles.leftMiddleArticle),A=n.default(l.styles.middleArticle),E=n.default(l.styles.rightMiddleArticle),p=-1,q=function(){return p++,!0},N=function(e,i){var t=e?[4,3]:[2,1];return i||t.reverse(),0===f?t[0]:t[1]},j=function(e,i){var t=N(e,i);return d[b-t]};return r.default.createElement("section",null,r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:g},r.default.createElement("div",{className:k,"data-testid":"data-testid-ContentHubArticle-top"},b>=N(!0,!0)&&r.default.createElement(t.ContentHubArticle,{articleRef:j(!0,!0).articleRef,category:j(!0,!0).category,dataTestRef:j(!0,!0).id,horizontalThumbnail:j(!0,!0).horizontalThumbnail,id:j(!0,!0).id,isHorizontal:Boolean(!f),isInFirstGroup:h,key:j(!0,!0).id,longTitle:j(!0,!0).longTitle,onClick:j(!0,!0).onClick,readingTime:j(!0,!0).readingTime,uri:j(!0,!0).uri,verticalThumbnail:j(!0,!0).verticalThumbnail})),r.default.createElement("div",{className:v,"data-testid":"data-testid-ContentHubArticle-top"},b>=N(!0,!1)&&r.default.createElement(t.ContentHubArticle,{articleRef:j(!0,!1).articleRef,category:j(!0,!1).category,dataTestRef:j(!0,!1).id,horizontalThumbnail:j(!0,!1).horizontalThumbnail,id:j(!0,!1).id,isHorizontal:Boolean(f),isInFirstGroup:h,key:j(!0,!1).id,longTitle:j(!0,!1).longTitle,onClick:j(!0,!1).onClick,readingTime:j(!0,!1).readingTime,uri:j(!0,!1).uri,verticalThumbnail:j(!0,!1).verticalThumbnail})),r.default.createElement("div",{className:R,"data-testid":"data-testid-ContentHubArticle-bottom"},b>=N(!1,!0)&&r.default.createElement(t.ContentHubArticle,{articleRef:j(!1,!0).articleRef,category:j(!1,!0).category,dataTestRef:j(!1,!0).id,horizontalThumbnail:j(!1,!0).horizontalThumbnail,id:j(!1,!0).id,isHorizontal:Boolean(f),isInFirstGroup:h,longTitle:j(!1,!0).longTitle,onClick:j(!1,!0).onClick,readingTime:j(!1,!0).readingTime,uri:j(!1,!0).uri,verticalThumbnail:j(!1,!0).verticalThumbnail})),r.default.createElement("div",{className:z,"data-testid":"data-testid-ContentHubArticle-bottom"},b>=N(!1,!1)&&r.default.createElement(t.ContentHubArticle,{articleRef:j(!1,!1).articleRef,category:j(!1,!1).category,dataTestRef:j(!1,!1).id,horizontalThumbnail:j(!1,!1).horizontalThumbnail,id:j(!1,!1).id,isHorizontal:Boolean(!f),isInFirstGroup:h,longTitle:j(!1,!1).longTitle,onClick:j(!1,!1).onClick,readingTime:j(!1,!1).readingTime,uri:j(!1,!1).uri,verticalThumbnail:j(!1,!1).verticalThumbnail}))),0===f&&r.default.createElement("div",{className:C},b>=4&&q()&&r.default.createElement(t.ContentHubArticle,{articleRef:d[p].mobileArticleRef,category:d[p].category,dataTestRef:d[p].id,horizontalThumbnail:d[p].horizontalThumbnail,id:d[p].id,isHorizontal:!0,isInFirstGroup:h,key:d[p].id,longTitle:d[p].longTitle,onClick:d[p].onClick,readingTime:d[p].readingTime,uri:d[p].uri,verticalThumbnail:d[p].verticalThumbnail}),r.default.createElement("div",{className:y},r.default.createElement("div",{className:A},b>=2&&q()&&r.default.createElement(t.ContentHubArticle,{articleRef:d[p].mobileArticleRef,category:d[p].category,className:E,dataTestRef:d[p].id,horizontalThumbnail:d[p].horizontalThumbnail,id:d[p].id,isHorizontal:!1,isInFirstGroup:h,key:d[p].id,longTitle:d[p].longTitle,onClick:d[p].onClick,readingTime:d[p].readingTime,uri:d[p].uri,verticalThumbnail:d[p].verticalThumbnail})),r.default.createElement("div",{className:A},b>=3&&q()&&r.default.createElement(t.ContentHubArticle,{articleRef:d[p].mobileArticleRef,category:d[p].category,className:H,dataTestRef:d[p].id,horizontalThumbnail:d[p].horizontalThumbnail,id:d[p].id,isHorizontal:!1,isInFirstGroup:h,key:d[p].id,longTitle:d[p].longTitle,onClick:d[p].onClick,readingTime:d[p].readingTime,uri:d[p].uri,verticalThumbnail:d[p].verticalThumbnail}))),b>=1&&q()&&r.default.createElement(t.ContentHubArticle,{articleRef:d[p].mobileArticleRef,category:d[p].category,dataTestRef:d[p].id,horizontalThumbnail:d[p].horizontalThumbnail,id:d[p].id,isHorizontal:!0,isInFirstGroup:h,key:d[p].id,longTitle:d[p].longTitle,onClick:d[p].onClick,readingTime:d[p].readingTime,uri:d[p].uri,verticalThumbnail:d[p].verticalThumbnail})),1===f&&r.default.createElement("div",{className:C},r.default.createElement("div",{className:y},r.default.createElement("div",{className:A},b>=4&&q()&&r.default.createElement(t.ContentHubArticle,{articleRef:d[p].mobileArticleRef,category:d[p].category,className:H,dataTestRef:d[p].id,horizontalThumbnail:d[p].horizontalThumbnail,id:d[p].id,isHorizontal:!1,isInFirstGroup:h,key:d[p].id,longTitle:d[p].longTitle,onClick:d[p].onClick,readingTime:d[p].readingTime,uri:d[p].uri,verticalThumbnail:d[p].verticalThumbnail})),r.default.createElement("div",{className:A})),b>=3&&q()&&r.default.createElement(t.ContentHubArticle,{articleRef:d[p].mobileArticleRef,category:d[p].category,dataTestRef:d[p].id,horizontalThumbnail:d[p].horizontalThumbnail,id:d[p].id,isHorizontal:!0,isInFirstGroup:h,key:d[p].id,longTitle:d[p].longTitle,onClick:d[p].onClick,readingTime:d[p].readingTime,uri:d[p].uri,verticalThumbnail:d[p].verticalThumbnail}),b>=2&&q()&&r.default.createElement(t.ContentHubArticle,{articleRef:d[p].mobileArticleRef,category:d[p].category,dataTestRef:d[p].id,horizontalThumbnail:d[p].horizontalThumbnail,id:d[p].id,isHorizontal:!0,isInFirstGroup:h,key:d[p].id,longTitle:d[p].longTitle,onClick:d[p].onClick,readingTime:d[p].readingTime,uri:d[p].uri,verticalThumbnail:d[p].verticalThumbnail}),r.default.createElement("div",{className:y},r.default.createElement("div",{className:A}),r.default.createElement("div",{className:A},b>=1&&q()&&r.default.createElement(t.ContentHubArticle,{articleRef:d[p].mobileArticleRef,category:d[p].category,className:E,dataTestRef:d[p].id,horizontalThumbnail:d[p].horizontalThumbnail,id:d[p].id,isHorizontal:!1,isInFirstGroup:h,key:d[p].id,longTitle:d[p].longTitle,onClick:d[p].onClick,readingTime:d[p].readingTime,uri:d[p].uri,verticalThumbnail:d[p].verticalThumbnail}))))))};
