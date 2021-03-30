import includes from 'lodash/includes';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import type { LinkStyle } from './Hyperlink.types';

const {
  EXTERNAL_BUTTON_LINK,
  EXTERNAL_NO_ICON_BUTTON_LINK,
  EXTERNAL_NO_ICON_TEXT_LINK,
  EXTERNAL_TEXT_LINK,
  INTERNAL_BUTTON_LINK,
  INTERNAL_NO_ICON_TEXT_LINK,
  INTERNAL_TEXT_LINK,
} = HYPERLINK_STYLE_TYPES;

const checkIsInlineFromStyle = (style: LinkStyle): boolean => {
  const styleRepresentsInline = includes(
    [
      EXTERNAL_NO_ICON_TEXT_LINK,
      EXTERNAL_TEXT_LINK,
      INTERNAL_NO_ICON_TEXT_LINK,
      INTERNAL_TEXT_LINK,
    ],
    style,
  );

  return styleRepresentsInline ? true : false;
};

const checkIsExternalFromStyle = (style: LinkStyle): boolean => {
  const styleRepresentsAbsoluteLink = includes(
    [
      EXTERNAL_BUTTON_LINK,
      EXTERNAL_NO_ICON_BUTTON_LINK,
      EXTERNAL_NO_ICON_TEXT_LINK,
      EXTERNAL_TEXT_LINK,
    ],
    style,
  );

  return styleRepresentsAbsoluteLink ? true : false;
};

const hasIconFromStyle = (style: LinkStyle): boolean =>
  includes(
    [
      EXTERNAL_BUTTON_LINK,
      EXTERNAL_TEXT_LINK,
      INTERNAL_BUTTON_LINK,
      INTERNAL_TEXT_LINK,
    ],
    style,
  )
    ? true
    : false;

const getTargetType = (openInANewWindow: boolean): string =>
  openInANewWindow ? '_blank' : '_self';

export {
  checkIsExternalFromStyle,
  checkIsInlineFromStyle,
  getTargetType,
  hasIconFromStyle,
};
