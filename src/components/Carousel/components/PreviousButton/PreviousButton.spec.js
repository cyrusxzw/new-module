import React from 'react';
import { render } from '@testing-library/react';
import PreviousButton from './PreviousButton';

describe('<Carousel.PreviousButton />', () => {
  it('should be defined', () => {
    expect(PreviousButton).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(<PreviousButton onClick={() => {}} />);

    expect(container).toMatchSnapshot();
  });
});
