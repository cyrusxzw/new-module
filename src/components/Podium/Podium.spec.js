import React from 'react';
import renderer from 'react-test-renderer';
import Podium from './Podium';
import PodiumFixture from './Podium.fixture';

describe('<Podium />', () => {
  it('should be defined', () => {
    expect(Podium).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Podium
          paddingBottom={PodiumFixture.paddingBottom}
          paddingTop={PodiumFixture.paddingTop}
        >
          Content
        </Podium>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
