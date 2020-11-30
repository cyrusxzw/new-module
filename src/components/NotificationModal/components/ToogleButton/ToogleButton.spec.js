import React from 'react';
import { render } from '@testing-library/react';
import ToogleButton from './ToogleButton';

describe('<ToogleButton />', () => {
  it('should be defined', () => {
    expect(ToogleButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(<ToogleButton />);

    expect(container).toMatchSnapshot();
  });
});
