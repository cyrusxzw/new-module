import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Image } from '~/components/Image';
import { Video } from '~/components/Video';
import styles from './TextOverFullWidthAsset.module.css';

const TextOverFullWidthAsset = ({
  backgroundImage,
  backgroundVideo,
  className,
  content,
  copyHeight,
  copySide,
  mediaType,
}) => {
  let Media = undefined;
  let mediaProps = {};

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

TextOverFullWidthAsset.propTypes = {
  backgroundImage: PropTypes.any,
  backgroundVideo: PropTypes.any,
  className: PropTypes.string,
  content: PropTypes.node.isRequired,
  copyHeight: PropTypes.oneOf(['Top', 'Bottom']),
  copySide: PropTypes.oneOf(['Left', 'Right']),
  mediaType: PropTypes.oneOf(['Image', 'Video']).isRequired,
};

TextOverFullWidthAsset.defaultProps = {
  backgroundImage: undefined,
  backgroundVideo: undefined,
  className: undefined,
  content: undefined,
  copyHeight: 'Top',
  copySide: 'Left',
  mediaType: undefined,
};

export { TextOverFullWidthAsset };
