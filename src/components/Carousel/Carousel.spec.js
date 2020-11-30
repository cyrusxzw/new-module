import React from 'react';
import renderer from 'react-test-renderer';
import CarouselFixture from './Carousel.fixture';
import Carousel from './Carousel';

describe('<Carousel />', () => {
  it('should be defined', () => {
    expect(Carousel).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Carousel
          introduction={CarouselFixture.introduction}
          slides={CarouselFixture.slides}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders component correctly if no `introduction` prop is provided', () => {
    const tree = renderer
      .create(<Carousel slides={CarouselFixture.slides} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders component correctly if no `url` member is provided on the `slides` prop', () => {
    const tree = renderer
      .create(
        <Carousel
          slides={[
            {
              description: CarouselFixture.slides[0].description,
              heading: CarouselFixture.slides[0].heading,
              image: CarouselFixture.slides[0].image,
            },
          ]}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  // @TODO Address hooks + version of react + testing suite
  // it('should return `null` if the length of the `slides` prop is 0', () => {
  //   const component = shallow(<Carousel slides={[]} />);
  //   expect(component.type()).toEqual(null);
  // });
});
