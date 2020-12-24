import React from 'react';
import { render } from '@testing-library/react';
import { Image } from './Image';

describe('<Image />', () => {
  it('should be defined', () => {
    expect(Image).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Image
        altText="Image of Milk Cleansing Campaign Aesop 2019"
        cta={{
          id: 'milk-cleansing,jpg',
          url: 'https://www.aesop.com/au/r/philosophy-to-products',
        }}
        large="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_large.png 2x"
        medium="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_medium.png 2x"
        small="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_small.png 2x"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders the picture tag without a Hyperlink if the `cta` prop was not passed', () => {
    const { container } = render(
      <Image
        altText="Image of Milk Cleansing Campaign Aesop 2019"
        large="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_large.png 2x"
        medium="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_medium.png 2x"
        small="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_small.png 2x"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders the picture without lazy loading', () => {
    const { container } = render(
      <Image
        altText="Image of Milk Cleansing Campaign Aesop 2019"
        isLazyLoaded={false}
        large="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_large.png 2x"
        medium="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_medium.png 2x"
        small="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_small.png 2x"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
