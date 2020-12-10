import React from 'react';
import { render } from '@testing-library/react';
import Figure from './Figure';
import Image from '~/components/Image';

describe('<Figure />', () => {
  it('should be defined', () => {
    expect(Figure).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Figure caption="About Aesop" id="about">
        <Image
          altText="Image Alt Text"
          large="https://release.aesop-web-ui.aesopdigital.io/images/products/Skin_Perfect_Facial_Hydrating_Cream_60mL_large.png"
        />
      </Figure>,
    );

    expect(container).toMatchSnapshot();
  });
});
