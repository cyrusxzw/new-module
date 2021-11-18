import type { FiftyFiftyFloatingTextProps } from './FiftyFiftyFloatingText.types';

const FiftyFiftyFloatingTextFixture: FiftyFiftyFloatingTextProps = {
  backgroundImages: [
    {
      image:
      {
        altText: 'alt image',
        sizes: {
          large: './assets/images/MediaWithContent/fifty-fifty-img1.png',
          medium: './assets/images/MediaWithContent/fifty-fifty-img1.png',
          small: './assets/images/MediaWithContent/fifty-fifty-img1.png',
        },
      }
    },
    {
      image:
      {
        altText: 'alt image',
        sizes: {
          large: './assets/images/MediaWithContent/fifty-fifty-img2.png',
          medium: './assets/images/MediaWithContent/fifty-fifty-img2.png',
          small: './assets/images/MediaWithContent/fifty-fifty-img2.png',
        },
      }
    },
    {
      image:
      {
        altText: 'alt image',
        sizes: {
          large: './assets/images/MediaWithContent/fifty-fifty-img3.png',
          medium: './assets/images/MediaWithContent/fifty-fifty-img3.png',
          small: './assets/images/MediaWithContent/fifty-fifty-img3.png',
        },
      }
    },
  ],
  id: 'fifty-fifty-floating-text',
  textBlocks: [
    {
      text:
        '1. Aliquam turpis libero, posuere sed nisl in, porta facilisis lorem. Phasellus eu turpis in quam efficitur hendrerit.',
    },
    {
      text:
        '2. Aliquam turpis libero, posuere sed nisl in, porta facilisis lorem. Phasellus eu turpis in quam efficitur hendrerit.',
    },
    {
      text:
        '3. Aliquam turpis libero, posuere sed nisl in, porta facilisis lorem. Phasellus eu turpis in quam efficitur hendrerit.',
    },
  ],
  theme: 'light',
};

export { FiftyFiftyFloatingTextFixture };
