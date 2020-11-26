import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Audio.Header />', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<Header artistName="foo" trackTitle="bar" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
