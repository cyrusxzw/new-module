import React from 'react';
import renderer from 'react-test-renderer';
import Heading from './Heading';

describe('<Heading />', () => {
  it('should be defined', () => {
    expect(Heading).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Heading level="1" size="large">
          Heading
        </Heading>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders level 2 size medium variation correctly', () => {
    const tree = renderer
      .create(
        <Heading level="2" size="medium">
          Heading
        </Heading>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders level 4 size small variation correctly', () => {
    const tree = renderer
      .create(
        <Heading level="4" size="small">
          Heading
        </Heading>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
