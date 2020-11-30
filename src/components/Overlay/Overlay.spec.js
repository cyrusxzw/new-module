import React from 'react';
import renderer from 'react-test-renderer';
import Overlay from './Overlay';

const mockFn = jest.fn();

describe('<Overlay />', () => {
  it('should be defined', () => {
    expect(Overlay).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<Overlay isVisible={true} onClose={mockFn} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
