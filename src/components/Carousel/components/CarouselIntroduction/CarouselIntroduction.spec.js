import React from 'react';
import { render } from '@testing-library/react';
import CarouselFixture from '../../Carousel.fixture';
import CarouselIntroduction from './CarouselIntroduction';

describe('<Carousel.CarouselIntroduction />', () => {
  it('should be defined', () => {
    expect(CarouselIntroduction).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <CarouselIntroduction
        description={CarouselFixture.introduction.description}
        heading={CarouselFixture.introduction.heading}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
