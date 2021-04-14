import React from 'react';
import { render } from '@testing-library/react';
import { NextButton } from './NextButton';

describe('<Carousel.NextButton />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <NextButton
        onClick={() => {
          return;
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
