import type { LinkStyle } from './Hyperlink.types';
declare const checkIsInlineFromStyle: (style: LinkStyle) => boolean;
declare const checkIsExternalFromStyle: (style: LinkStyle) => boolean;
declare const hasIconFromStyle: (style: LinkStyle) => boolean;
declare const getTargetType: (openInANewWindow: boolean) => string;
export {
  checkIsExternalFromStyle,
  checkIsInlineFromStyle,
  getTargetType,
  hasIconFromStyle,
};
