"use strict";var e=function(){return"undefined"!=typeof window},o=e()&&(!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0),i=e()&&"undefined"!=typeof InstallTrigger,r=e()&&(/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString()),t=e()&&!!document.documentMode,n=e()&&!t&&!!window.StyleMedia,s=e()&&!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime),d=e()&&(s||o)&&!!window.CSS;exports.isBlink=d,exports.isChrome=s,exports.isEdge=n,exports.isFirefox=i,exports.isIE=t,exports.isInBrowser=e,exports.isOpera=o,exports.isSafari=r;
