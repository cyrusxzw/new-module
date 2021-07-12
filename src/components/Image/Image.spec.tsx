import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Image } from './Image';
import { getDefaultImageSource } from './Image.utils';

describe('<Image />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <Image
        altText="Image of Milk Cleansing Campaign Aesop 2019"
        cta={{
          url: 'https://www.aesop.com/au/r/philosophy-to-products',
        }}
        sizes={{
          large:
            '/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_large.png 2x',
          medium:
            '/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_medium.png 2x',
          small:
            '/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_small.png 2x',
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it.todo(
    'renders the picture tag without a Hyperlink if the `cta` prop was not passed',
  );

  it.todo('renders the picture without lazy loading');

  it('should be accessible', async () => {
    const { container } = render(
      <Image
        altText="Image of Milk Cleansing Campaign Aesop 2019"
        sizes={{
          large:
            '/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_large.png 2x',
          medium:
            '/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_medium.png 2x',
          small:
            '/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_small.png 2x',
        }}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

describe('Image utils - getDefaultImageSource', () => {
  it('should return a string when provided with the correctly typed object', () => {
    expect(getDefaultImageSource({ small: 'small-image-source' })).toBe(
      'small-image-source',
    );
  });

  it('should return null or undefined if no strings could be returned', () => {
    expect(getDefaultImageSource({})).toBeUndefined();
    expect(getDefaultImageSource(null)).toBeNull();
  });
});
