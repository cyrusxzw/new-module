const isInBrowser = () => typeof window !== 'undefined';

/**
 * Device detection. https://stackoverflow.com/questions/49328382/browser-detection-in-reactjs
 * @TODO consider replacing with https://www.npmjs.com/package/react-device-detect
 * if this helpers are widely required and useVideoScroller
 */

/* Opera 8.0+ */
const isOpera =
  isInBrowser() &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ((!!window.opr && !!opr.addons) || // eslint-disable-line no-undef
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    !!window.opera ||
    navigator.userAgent.indexOf(' OPR/') >= 0);

/* Firefox 1.0+ */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const isFirefox = isInBrowser() && typeof InstallTrigger !== 'undefined';

/* Safari 3.0+ "[object HTMLElementConstructor]" */
const isSafari =
  isInBrowser() &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (/constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      !window['safari'] ||
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (typeof safari !== 'undefined' && safari.pushNotification), // eslint-disable-line no-undef
    ));

/* Internet Explorer 6-11 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const isIE = isInBrowser() && !!document.documentMode;

/* Edge 20+ */
const isEdge = isInBrowser() && !isIE && !!window.StyleMedia;

/* Chrome 1+ */
const isChrome =
  isInBrowser() &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  !!window.chrome &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (!!window.chrome.webstore || !!window.chrome.runtime);

/* Blink engine detection */
const isBlink = isInBrowser() && (isChrome || isOpera) && !!window.CSS;

export { isInBrowser };
export { isOpera };
export { isFirefox };
export { isSafari };
export { isIE };
export { isEdge };
export { isChrome };
export { isBlink };
