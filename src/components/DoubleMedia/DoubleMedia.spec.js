import React from 'react';
import { render } from '@testing-library/react';
import { DoubleMediaFixture } from './DoubleMedia.fixture';
import { DoubleMedia } from './DoubleMedia';

describe('<DoubleMedia />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <DoubleMedia
        mediaOne={{
          heading: DoubleMediaFixture.title,
          type: DoubleMediaFixture.imageOne.type,
          altText: DoubleMediaFixture.imageOne.altText,
          caption: DoubleMediaFixture.imageOne.caption,
          fallbackImage: DoubleMediaFixture.video.fallbackImage,
          sizes: DoubleMediaFixture.imageOne.sizes,
        }}
        mediaTwo={{
          heading: DoubleMediaFixture.title,
          link: DoubleMediaFixture.link,
          type: DoubleMediaFixture.imageTwo.type,
          altText: DoubleMediaFixture.imageTwo.altText,
          caption: DoubleMediaFixture.imageTwo.caption,
          fallbackImage: DoubleMediaFixture.video.fallbackImage,
          sizes: DoubleMediaFixture.imageTwo.sizes,
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
