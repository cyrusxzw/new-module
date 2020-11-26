import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('<Audio.Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<Footer artistName="foo" audioUrl="/" trackTitle="bar" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
