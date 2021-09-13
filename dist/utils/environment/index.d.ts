declare const isInBrowser: () => boolean;
/**
 * Device detection. https://stackoverflow.com/questions/49328382/browser-detection-in-reactjs
 * @TODO consider replacing with https://www.npmjs.com/package/react-device-detect
 * or https://www.npmjs.com/package/bowser
 */
declare const isOpera: boolean;
declare const isFirefox: boolean;
declare const isSafari: boolean;
declare const isIE: boolean;
declare const isEdge: boolean;
declare const isChrome: boolean;
declare const isBlink: boolean;

export { isBlink, isChrome, isEdge, isFirefox, isIE, isInBrowser, isOpera, isSafari };
