import { HYPERLINK_STYLE_TYPES } from '~/constants';

const { EXTERNAL_NO_ICON_LINK, EXTERNAL_TEXT_LINK } = HYPERLINK_STYLE_TYPES;

export default {
  siteNavigationPrimary: {
    links: [
      {
        text: 'Contact us',
        id: 'contact-us',
        url: 'https://www.aesop.com/au/r/contact-us',
        style: EXTERNAL_NO_ICON_LINK,
      },
      {
        text: 'Delivery and returns',
        id: 'delivery-and-returns',
        url: 'https://www.aesop.com/au/r/shipping/',
        style: EXTERNAL_NO_ICON_LINK,
      },
    ],
    title: 'Contact Us',
  },
  siteNavigationSecondary: {
    links: [
      {
        text: 'Our story',
        id: 'our-story',
        url: 'http://www.aesop.com/au/r/about',
        style: EXTERNAL_NO_ICON_LINK,
      },
      {
        text: 'Careers',
        id: 'careers',
        url: 'https://www.aesop.com/au/r/careers',
        style: EXTERNAL_NO_ICON_LINK,
      },
    ],
    title: 'About',
  },
  siteNavigationTernary: {
    links: [
      {
        text: 'Instagram',
        id: 'instagram',
        url: 'https://www.instagram.com/aesopskincare/',
        style: EXTERNAL_TEXT_LINK,
      },
      {
        text: 'Twitter',
        id: 'twitter',
        url: 'https://twitter.com/aesopskincare',
        style: EXTERNAL_TEXT_LINK,
      },
    ],
    title: 'Social',
  },
};