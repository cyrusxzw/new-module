import React from 'react';
import renderer from 'react-test-renderer';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import Hyperlink from './Hyperlink';
import {
  checkIsExternalFromStyle,
  checkIsInlineFromStyle,
  getTargetType,
  hasIconFromStyle,
} from './Hyperlink.utils';

const {
  EXTERNAL_BUTTON_LINK,
  EXTERNAL_TEXT_LINK,
  EXTERNAL_NO_ICON_TEXT_LINK,
  INTERNAL_TEXT_LINK,
} = HYPERLINK_STYLE_TYPES;

describe('<Hyperlink />', () => {
  it('should be defined', () => {
    expect(Hyperlink).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Hyperlink text="Aesop" url="https://aesop.com">
          Aesop
        </Hyperlink>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Hyperlink.utils.checkIsInlineFromStyle', () => {
  it('should return false if `style` prop is `External Button Link`', () => {
    const actual = checkIsInlineFromStyle(EXTERNAL_BUTTON_LINK);

    expect(actual).toBe(false);
  });

  it('should return true if `style` prop is `External Text Link`', () => {
    const actual = checkIsInlineFromStyle(EXTERNAL_TEXT_LINK);

    expect(actual).toBe(true);
  });
});

describe('Hyperlink.utils.checkIsExternalFromStyle', () => {
  it('should return true if `style` prop is `External Button Link`', () => {
    const actual = checkIsExternalFromStyle(EXTERNAL_BUTTON_LINK);

    expect(actual).toBe(true);
  });

  it('should return false if `style` prop is `Internal Text Link`', () => {
    const actual = checkIsExternalFromStyle(INTERNAL_TEXT_LINK);

    expect(actual).toBe(false);
  });
});

// describe('Hyperlink.utils.getButtonPropsFromStyle', () => {
//   it('should return obect with `to` property if `style` prop is `Internal Text Link`', () => {
//     const actual = getButtonPropsFromStyle(INTERNAL_BUTTON_LINK, 'about');
//
//     expect(actual).toMatchObject({ to: 'about' });
//   });
//
//   it('should return obect with `href` property if `style` prop is `External Text Link`', () => {
//     const actual = getButtonPropsFromStyle(
//       EXTERNAL_TEXT_LINK,
//       'https://aesop.com',
//     );
//
//     expect(actual).toMatchObject({ href: 'https://aesop.com' });
//   });
// });

describe('Hyperlink.utils.getTargetType', () => {
  it('should return `_self` if `openInANewWindow` prop is passed as `falsey`', () => {
    const actual = getTargetType(false);

    expect(actual).toBe('_self');
  });

  it('should return `_blank` if `openInANewWindow` prop is passed as `true`', () => {
    const actual = getTargetType(true);

    expect(actual).toBe('_blank');
  });
});

describe('Hyperlink.utils.hasIconFromStyle', () => {
  it('should return `true` if `style` prop is passed as anything other than `External No Icon Link` or `No Icon Link`', () => {
    const actual = hasIconFromStyle(EXTERNAL_BUTTON_LINK);

    expect(actual).toBe(true);
  });

  it('should return `false` if `style` prop is passed as `External No Icon Link` or `No Icon Link`', () => {
    const actual = hasIconFromStyle(EXTERNAL_NO_ICON_TEXT_LINK);

    expect(actual).toBe(false);
  });
});
