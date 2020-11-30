import React from 'react';
import renderer from 'react-test-renderer';
import FullWidthHeroScroll from './FullWidthHeroScroll';
import FullWidthHeroScrollFixture from './FullWidthHeroScroll.fixture';

describe('<FullWidthHeroScroll />', () => {
  it('should be defined', () => {
    expect(FullWidthHeroScroll).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <FullWidthHeroScroll
          backgroundMediaType={FullWidthHeroScrollFixture.backgroundMediaType}
          backgroundVideo={FullWidthHeroScrollFixture.backgroundVideo}
          cta={FullWidthHeroScrollFixture.cta}
          hasSerifFontHeading={FullWidthHeroScrollFixture.hasSerifFontHeading}
          heading={FullWidthHeroScrollFixture.heading}
          textBlocks={FullWidthHeroScrollFixture.textBlocks}
          theme={FullWidthHeroScrollFixture.theme}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
