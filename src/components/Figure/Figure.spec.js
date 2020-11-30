import React from 'react';
import renderer from 'react-test-renderer';
import Figure from './Figure';
import Image from '~/components/Image';

describe('<Figure />', () => {
  it('should be defined', () => {
    expect(Figure).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Figure caption="About Aesop" id="about">
          <Image
            altText="Image Alt Text"
            large="https://release.aesop-web-ui.aesopdigital.io/images/products/Skin_Perfect_Facial_Hydrating_Cream_60mL_large.png"
          />
        </Figure>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
