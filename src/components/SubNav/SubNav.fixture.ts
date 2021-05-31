import { HYPERLINK_STYLE_TYPES } from '~/constants';

const { EXTERNAL_NO_ICON_TEXT_LINK } = HYPERLINK_STYLE_TYPES;

const SubNavFixture = {
  heading: 'Phasellus aliquet sem',
  id: 'sub-nav',
  isSelect: false,
  links: [
    {
      id: 'Morbi-id-nulla',
      style: EXTERNAL_NO_ICON_TEXT_LINK,
      children: 'Morbi id nulla',
      url: '/',
    },
    {
      id: 'Nullam-ultrices',
      style: EXTERNAL_NO_ICON_TEXT_LINK,
      children: 'Nullam ultrices',
      url: '/',
    },
  ],
  theme: 'dark',
};

export { SubNavFixture };
