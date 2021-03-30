import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '~/components/Image';
import { HeroBanner } from './HeroBanner';
import { HeroBannerFixture } from './HeroBanner.fixture';

describe('<HeroBanner />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <HeroBanner
        copy={HeroBannerFixture.copy.default}
        media={<Image {...HeroBannerFixture.image.default} />}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
