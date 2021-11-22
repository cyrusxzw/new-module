import React from 'react';
import { render } from '@testing-library/react';
import { FiftyFiftyFloatingText } from './FiftyFiftyFloatingText';
import { FiftyFiftyFloatingTextFixture } from './FiftyFiftyFloatingText.fixture';

describe('<FullWidthHeroScroll />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <FiftyFiftyFloatingText
        textBlocks={FiftyFiftyFloatingTextFixture.textBlocks}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
