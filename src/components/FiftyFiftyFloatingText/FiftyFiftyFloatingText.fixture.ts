import type { FiftyFiftyFloatingTextProps } from './FiftyFiftyFloatingText.types';

const FiftyFiftyFloatingTextFixture: FiftyFiftyFloatingTextProps = {
  backgroundImages: [
    {
      image:
      {
        altText: 'alt image',
        sizes: {
          large: './assets/images/MediaWithContent/background-large.jpg',
          medium: './assets/images/MediaWithContent/background-large.jpg',
          small: './assets/images/MediaWithContent/background-large.jpg',
        },
      }
    },
    {
      image:
      {
        altText: 'alt image',
        sizes: {
          large: './assets/images/MediaWithContent/hero-large.jpg',
          medium: './assets/images/MediaWithContent/hero-large.jpg',
          small: './assets/images/MediaWithContent/hero-large.jpg',
        },
      }
    },
    {
      image:
      {
        altText: 'alt image',
        sizes: {
          large: './assets/images/MediaWithContent/background-large.jpg',
          medium: './assets/images/MediaWithContent/background-large.jpg',
          small: './assets/images/MediaWithContent/background-large.jpg',
        },
      }
    },
  ],
  id: 'fifty-fifty-floating-text',
  textBlocks: [
    {
      text:
        'Aliquam turpis libero, posuere sed nisl in, porta facilisis lorem. Phasellus eu turpis in quam efficitur hendrerit.',
    },
    {
      text:
        'Aliquam turpis libero, posuere sed nisl in, porta facilisis lorem. Phasellus eu turpis in quam efficitur hendrerit.',
    },
    {
      text:
        'Aliquam turpis libero, posuere sed nisl in, porta facilisis lorem. Phasellus eu turpis in quam efficitur hendrerit.',
    },
  ],
  theme: 'light',
};

export { FiftyFiftyFloatingTextFixture };
