import React from 'react';
import renderer from 'react-test-renderer';
import NextButton from './NextButton';

describe('<Carousel.NextButton />', () => {
  it('should be defined', () => {
    expect(NextButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<NextButton onClick={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
