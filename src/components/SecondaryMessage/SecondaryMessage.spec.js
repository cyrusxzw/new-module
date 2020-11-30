import React from 'react';
import renderer from 'react-test-renderer';
import SecondaryMessage from './SecondaryMessage';
import SecondaryMessageFixture from './SecondaryMessage.fixture';

describe('<SecondaryMessage />', () => {
  it('should be defined', () => {
    expect(SecondaryMessage).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<SecondaryMessage {...SecondaryMessageFixture} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
