import React from 'react';
import { render } from '@testing-library/react';
import { DefinitionList } from '~/components/DefinitionList';
import { Image } from '~/components/Image';
import { HeroBanner } from './HeroBanner';
import { HeroBannerFixture } from './HeroBanner.fixture';

describe('<HeroBanner />', () => {
  it('should be defined', () => {
    expect(HeroBanner).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <HeroBanner
        content={
          <DefinitionList items={HeroBannerFixture.definitionList.items} />
        }
        copy={HeroBannerFixture.copy.expectations}
        media={<Image {...HeroBannerFixture.image.default} />}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
