import React from 'react';
import { Hyperlink } from '~/components/Hyperlink';
import { HYPERLINK_STYLE_TYPES } from '~/constants';

const { EXTERNAL_NO_ICON_TEXT_LINK } = HYPERLINK_STYLE_TYPES;

const HeroBannerFixture = {
  copy: {
    default: {
      eyebrow: 'Praesent tincidunt accumsan',
      heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      subHeading: '',
      description:
        'Aliquam turpis libero, posuere sed nisl in, porta facilisis lorem. Phasellus eu turpis in quam efficitur hendrerit.',
    },
    wideHeader: {
      eyebrow: 'Quisque blandit est erat',
      heading: 'Fusce et dui nisi',
      description: (
        <p>
          Aliquam lectus purus, gravida id metus dignissim, efficitur tempus
          lacus. Maecenas a cursus diam. Vivamus ultrices nisi non ex placerat,
          vel elementum sapien condimentum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, efficitur tempus lacus. Maecenas a cursus
          diam. Vivamus ultrices nisi non ex placerat, vel elementum sapien
          condimentum.
        </p>
      ),
    },
  },
  image: {
    default: {
      altText: 'alt image',
      large:
        './assets/images/HeroBanner/Aesop_Lunar_New_Year_2021_Homepage_Primary_Full_Bleed_Desktop_2880x1044px.jpg',
      medium:
        './assets/images/HeroBanner/Aesop_Lunar_New_Year_2021_Homepage_Primary_Full_Bleed_Tablet_1536x1730px.jpg',
      small:
        './assets/images/HeroBanner/Aesop_Lunar_New_Year_2021_Homepage_Primary_Full_Bleed_Mobile_640x640px.jpg',
    },
    fiftyFifty: {
      altText: 'alt image',
      large:
        './assets/images/HeroBanner/Aesop_Redemption_Body_Scrub_2021_Homepage_Primary_50-50_Desktop_1440x1500px.jpg',
      medium:
        './assets/images/HeroBanner/Aesop_Redemption_Body_Scrub_2021_Homepage_Primary_50-50_Tablet_1536x950px.jpg',
      small:
        './assets/images/HeroBanner/Aesop_Redemption_Body_Scrub_2021_Homepage_Primary_50-50_Mobile_640x640px.jpg',
    },
    articleHeader: {
      altText: 'alt image',
      large:
        './assets/images/HeroBanner/Aesop_A_Guide_to_Caring_for_Oily_Skin_Web_Primary_Full_Bleed_Desktop_2880x580px.jpg',
      medium:
        './assets/images/HeroBanner/Aesop_A_Guide_to_Caring_for_Oily_Skin_Web_Primary_Full_Bleed_Tablet_1536x520px.jpg',
      small:
        './assets/images/HeroBanner/Aesop_A_Guide_to_Caring_for_Oily_Skin_Web_Primary_Full_Bleed_Mobile_640x640px.jpg',
    },
    wideHeader: {
      altText: 'alt image',
      large: './assets/images/HeroBanner/wide-header-large.webp',
      medium: './assets/images/HeroBanner/wide-header-medium.webp',
      small: './assets/images/HeroBanner/wide-header-small.webp',
    },
    foreground: {
      altText: 'alt image',
      large: './assets/images/MediaWithContent/foreground-large.jpg',
      medium: './assets/images/MediaWithContent/foreground-large.jpg',
      small: './assets/images/MediaWithContent/foreground-large.jpg',
    },
  },
  linkButtonGroup: {
    textAlign: 'left',
    hasFitContent: true,
    children: (
      <>
        <Hyperlink style="Internal Button Link" url="/">
          Proin quisque
        </Hyperlink>
        <Hyperlink style="Internal Button Link" url="/">
          Quisque
        </Hyperlink>
      </>
    ),
  },
  subNav: {
    links: [
      {
        id: 'aenean-magna-lectus',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Aenean magna lectus',
        url: 'https://www.aesop.com',
      },
      {
        id: 'phasellus-magna-nulla',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Phasellus magna nulla',
        url: 'https://www.aesop.com',
      },
      {
        id: 'sed-facilisis-felis-venenatis',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Sed facilisis felis venenatis',
        url: 'https://www.aesop.com',
      },
      {
        id: 'curabitur-auctor',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Curabitur auctor',
        url: 'https://www.aesop.com',
      },
    ],
  },
  video: {
    source:
      'https://player.vimeo.com/external/462935380.hd.mp4?s=01e048a4b5942b2c6648ffe9965ac5c79ebfc545&profile_id=169',
  },
};

export { HeroBannerFixture };
