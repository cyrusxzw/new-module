import React from 'react';
import { render } from '@testing-library/react';
import { DoubleMediaFixture } from './DoubleMedia.fixture';
import { DoubleMedia } from './DoubleMedia';
import { DoubleMediaProps } from './DoubleMedia.types';

describe('<DoubleMedia />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <DoubleMedia
        mediaOne={{
          heading: DoubleMediaFixture.title,
          type: DoubleMediaFixture.imageOne
            .type as DoubleMediaProps['mediaOne']['type'],
          altText: DoubleMediaFixture.imageOne.altText,
          caption: DoubleMediaFixture.imageOne.caption,
          fallbackImage: DoubleMediaFixture.video.fallbackImage,
          sizes: DoubleMediaFixture.imageOne.sizes,
        }}
        mediaTwo={{
          heading: DoubleMediaFixture.title,
          link: DoubleMediaFixture.link,
          type: DoubleMediaFixture.imageTwo
            .type as DoubleMediaProps['mediaTwo']['type'],
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
