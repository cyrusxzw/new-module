import React from 'react';
import { render } from '@testing-library/react';
import CarouselFixture from '../../Carousel.fixture';
import Slide from './Slide';

describe('<Carousel.Slide />', () => {
  it('should be defined', () => {
    expect(Slide).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Slide
        description={CarouselFixture.slides[0].description}
        heading={CarouselFixture.slides[0].heading}
        image={CarouselFixture.slides[0].image}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a slide without a descritption correctly', () => {
    const { container } = render(
      <Slide
        heading={CarouselFixture.slides[0].heading}
        image={CarouselFixture.slides[0].image}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a slide without a heading correctly', () => {
    const { container } = render(
      <Slide
        description={CarouselFixture.slides[0].description}
        image={CarouselFixture.slides[0].image}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
