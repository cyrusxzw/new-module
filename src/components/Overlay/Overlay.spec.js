import React from 'react';
import { render } from '@testing-library/react';
import { Overlay } from './Overlay';

const mockFn = jest.fn();

describe('<Overlay />', () => {
  it('should be defined', () => {
    expect(Overlay).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(<Overlay isVisible={true} onClose={mockFn} />);

    expect(container).toMatchSnapshot();
  });
});
