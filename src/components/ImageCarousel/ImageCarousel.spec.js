import React from 'react';
import renderer from 'react-test-renderer';
import ImageCarousel from './ImageCarousel';
import ImageCarouselFixture from './ImageCarousel.fixture';

describe('<ImageCarousel />', () => {
  it('should be defined', () => {
    expect(ImageCarousel).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<ImageCarousel slides={ImageCarouselFixture.slides} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
