import React from 'react';
import { render } from '@testing-library/react';
import NextButton from './NextButton';

describe('<Carousel.NextButton />', () => {
  it('should be defined', () => {
    expect(NextButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(<NextButton onClick={() => {}} />);

    expect(container).toMatchSnapshot();
  });
});
