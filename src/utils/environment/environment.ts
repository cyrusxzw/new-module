const isInBrowser = (): boolean => typeof window !== 'undefined';

/**
 * Device detection. https://stackoverflow.com/questions/49328382/browser-detection-in-reactjs
 * @TODO consider replacing with https://www.npmjs.com/package/react-device-detect
 * or https://www.npmjs.com/package/bowser
 */

/* eslint-disable @typescript-eslint/ban-ts-comment */

/* Opera 8.0+ */
const isOpera =
  isInBrowser() &&
  // @ts-ignore
  ((!!window.opr && !!opr.addons) || // eslint-disable-line no-undef
    // @ts-ignore
    !!window.opera ||
    navigator.userAgent.indexOf(' OPR/') >= 0);

/* Firefox 1.0+ */
// @ts-ignore
const isFirefox = isInBrowser() && typeof InstallTrigger !== 'undefined';

/* Safari 3.0+ "[object HTMLElementConstructor]" */
const isSafari =
  isInBrowser() &&
  // @ts-ignore
  (/constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      !window['safari'] ||
        // @ts-ignore
        (typeof safari !== 'undefined' && safari.pushNotification), // eslint-disable-line no-undef
    ));

/* Internet Explorer 6-11 */
// @ts-ignore
const isIE = isInBrowser() && !!document.documentMode;

/* Edge 20+ */
const isEdge = isInBrowser() && !isIE && !!window.StyleMedia;

/* Chrome 1+ */
const isChrome =
  isInBrowser() &&
  // @ts-ignore
  !!window.chrome &&
  // @ts-ignore
  (!!window.chrome.webstore || !!window.chrome.runtime);

/* Blink engine detection */
const isBlink = isInBrowser() && (isChrome || isOpera) && !!window.CSS;

/* eslint-enable @typescript-eslint/ban-ts-comment */

export { isInBrowser };
export { isOpera };
export { isFirefox };
export { isSafari };
export { isIE };
export { isEdge };
export { isChrome };
export { isBlink };
