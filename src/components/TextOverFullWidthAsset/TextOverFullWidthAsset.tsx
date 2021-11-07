import React from 'react';
import cx from 'classnames';
import { Image } from '~/components/Image';
import { Video } from '~/components/Video';
import styles from './TextOverFullWidthAsset.module.css';
import type {
  TextOverFullWidthAssetType,
  TextOverFullWidthAssetProps,
} from './TextOverFullWidthAsset.types';

const TextOverFullWidthAsset: TextOverFullWidthAssetType = ({
  backgroundImage,
  backgroundVideo,
  className,
  content,
  copyHeight = 'Top',
  copySide = 'Left',
  mediaType,
}) => {
  let Media: typeof Image | typeof Video = undefined;
  let mediaProps:
    | TextOverFullWidthAssetProps['backgroundImage']
    | TextOverFullWidthAssetProps['backgroundVideo'] = {};

  if (!content && !['Image', 'Video'].includes(mediaType)) {
    return null;
  }

  if (mediaType === 'Image') {
    Media = Image;
    mediaProps = backgroundImage;
  }

  if (mediaType === 'Video') {
    Media = Video;
    mediaProps = {
      ...backgroundVideo,
      hasAllowAudio: false,
      hasAutoplay: true,
      hasControls: false,
      hasLoop: true,
      hasPlayInFullScreen: false,
      hasSpanContent: false,
      isFullWidth: true,
      isHeroFullWidth: false,
      isScrollBasedVideo: false,
    };
  }

  return (
    <div
      className={cx(styles.base, className)}
      data-testid="data-testid-TextOverFullWidthAsset"
    >
      {Media && <Media {...mediaProps} className={cx(styles.media)} />}
      <div className={cx(styles.content, styles[copyHeight], styles[copySide])}>
        {content}
      </div>
    </div>
  );
};

export { TextOverFullWidthAsset };
