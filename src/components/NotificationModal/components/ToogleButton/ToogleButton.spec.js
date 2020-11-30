import React from 'react';
import renderer from 'react-test-renderer';
import ToogleButton from './ToogleButton';

describe('<ToogleButton />', () => {
  it('should be defined', () => {
    expect(ToogleButton).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<ToogleButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
