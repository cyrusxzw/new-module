import React from 'react';
import { render } from '@testing-library/react';
import Podium from './Podium';
import PodiumFixture from './Podium.fixture';

describe('<Podium />', () => {
  it('should be defined', () => {
    expect(Podium).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <Podium
        paddingBottom={PodiumFixture.paddingBottom}
        paddingTop={PodiumFixture.paddingTop}
      >
        Content
      </Podium>,
    );

    expect(container).toMatchSnapshot();
  });
});
