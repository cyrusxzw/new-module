import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Video } from './Video';

describe('<Video />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <Video
        fallbackImage={{
          copy: {
            altText: 'How to Use Video for Tea Tree Leaf Facial Exfoliant',
          },
          sizes: {
            large: './assets/images/MediaWithContent/video-poster.png',
            medium: './assets/images/MediaWithContent/video-poster.png',
            small: './assets/images/MediaWithContent/video-poster.png',
          },
        }}
        hasAutoplay={true}
        hasLoop={true}
        id="video"
        poster={{
          copy: {
            altText: 'How to Use Video for Tea Tree Leaf Facial Exfoliant',
          },
        }}
        sizes={{
          large:
            'https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&profile_id=174',
          medium:
            'https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&profile_id=174',

          small:
            'https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&profile_id=174',
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should be accessible', async () => {
    const { container } = render(
      <Video
        fallbackImage={{
          copy: {
            altText: 'How to Use Video for Tea Tree Leaf Facial Exfoliant',
          },
          sizes: {
            large: './assets/images/MediaWithContent/video-poster.png',
            medium: './assets/images/MediaWithContent/video-poster.png',
            small: './assets/images/MediaWithContent/video-poster.png',
          },
        }}
        hasAutoplay={true}
        hasLoop={true}
        id="video"
        poster={{
          copy: {
            altText: 'How to Use Video for Tea Tree Leaf Facial Exfoliant',
          },
        }}
        sizes={{
          large:
            'https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174',
          medium:
            'https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174',
          small:
            'https://player.vimeo.com/external/300219772.hd.mp4?s=981a375b08836e6d99532afaefda0b9a78fbf404&amp;profile_id=174',
        }}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
