import React from 'react';
import renderer from 'react-test-renderer';
import PreviousButton from './PreviousButton';

describe('<Carousel.PreviousButton />', () => {
  it('should be defined', () => {
    expect(PreviousButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<PreviousButton onClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
