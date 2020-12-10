import React from 'react';
import { render } from '@testing-library/react';
import CarouselFixture from './Carousel.fixture';
import Carousel from './Carousel';

describe('<Carousel />', () => {
  it('should be defined', () => {
    expect(Carousel).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Carousel
        introduction={CarouselFixture.introduction}
        slides={CarouselFixture.slides}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders component correctly if no `introduction` prop is provided', () => {
    const { container } = render(<Carousel slides={CarouselFixture.slides} />);

    expect(container).toMatchSnapshot();
  });

  it('renders component correctly if no `url` member is provided on the `slides` prop', () => {
    const { container } = render(
      <Carousel
        slides={[
          {
            description: CarouselFixture.slides[0].description,
            heading: CarouselFixture.slides[0].heading,
            image: CarouselFixture.slides[0].image,
          },
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  // @TODO Address hooks + version of react + testing suite
  // it('should return `null` if the length of the `slides` prop is 0', () => {
  //   const component = shallow(<Carousel slides={[]} />);
  //   expect(component.type()).toEqual(null);
  // });
});
