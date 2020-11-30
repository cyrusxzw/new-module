import React from 'react';
import renderer from 'react-test-renderer';
import DoubleMedia from './DoubleMedia';
import DoubleMediaFixture from './DoubleMedia.fixture';

describe('<DoubleMedia />', () => {
  it('should be defined', () => {
    expect(DoubleMedia).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <DoubleMedia
          mediaOne={{
            heading: DoubleMediaFixture.title,
            type: DoubleMediaFixture.imageOne.type,
            altText: DoubleMediaFixture.imageOne.altText,
            caption: DoubleMediaFixture.imageOne.caption,
            fallbackImage: DoubleMediaFixture.video.fallbackImage,
            large: DoubleMediaFixture.imageOne.large,
            medium: DoubleMediaFixture.imageOne.medium,
            small: DoubleMediaFixture.imageOne.small,
          }}
          mediaTwo={{
            heading: DoubleMediaFixture.title,
            link: DoubleMediaFixture.link,
            type: DoubleMediaFixture.imageTwo.type,
            altText: DoubleMediaFixture.imageTwo.altText,
            caption: DoubleMediaFixture.imageTwo.caption,
            fallbackImage: DoubleMediaFixture.video.fallbackImage,
            large: DoubleMediaFixture.imageTwo.large,
            medium: DoubleMediaFixture.imageTwo.medium,
            small: DoubleMediaFixture.imageTwo.small,
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
