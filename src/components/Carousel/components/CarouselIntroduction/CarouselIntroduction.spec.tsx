import React from 'react';
import { render } from '@testing-library/react';
import { CarouselFixture } from '~/components/Carousel/Carousel.fixture';
import { CarouselIntroduction } from './CarouselIntroduction';

describe('<Carousel.CarouselIntroduction />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <CarouselIntroduction
        description={CarouselFixture.introduction.description}
        heading={CarouselFixture.introduction.heading}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
