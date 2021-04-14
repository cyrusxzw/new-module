import React from 'react';
import { render } from '@testing-library/react';
import { ImageCarousel } from './ImageCarousel';
import { ImageCarouselFixture } from './ImageCarousel.fixture';

describe('<ImageCarousel />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <ImageCarousel slides={ImageCarouselFixture.slides} />,
    );

    expect(container).toMatchSnapshot();
  });
});
