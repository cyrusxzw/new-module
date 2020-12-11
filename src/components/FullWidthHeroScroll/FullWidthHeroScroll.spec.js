import React from 'react';
import { render } from '@testing-library/react';
import { FullWidthHeroScroll } from './FullWidthHeroScroll';
import { FullWidthHeroScrollFixture } from './FullWidthHeroScroll.fixture';

describe('<FullWidthHeroScroll />', () => {
  it('should be defined', () => {
    expect(FullWidthHeroScroll).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <FullWidthHeroScroll
        backgroundMediaType={FullWidthHeroScrollFixture.backgroundMediaType}
        backgroundVideo={FullWidthHeroScrollFixture.backgroundVideo}
        cta={FullWidthHeroScrollFixture.cta}
        hasSerifFontHeading={FullWidthHeroScrollFixture.hasSerifFontHeading}
        heading={FullWidthHeroScrollFixture.heading}
        textBlocks={FullWidthHeroScrollFixture.textBlocks}
        theme={FullWidthHeroScrollFixture.theme}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
