import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Image } from '~/components/Image';
import { Video } from '~/components/Video';
import styles from './BackgroundElement.module.css';

const BackgroundElement = ({ image, mediaType, video, className }) => {
  if (!mediaType) return null;

  const classSet = cx(styles.base, className);

  if (mediaType === 'image' && image) {
    return <Image {...image} className={classSet} />;
  } else if (mediaType === 'video' && video) {
    return (
      <Video
        {...video}
        className={classSet}
        hasAllowAudio={false}
        hasAutoplay={true}
        hasControls={false}
        hasLoop={true}
        isBackground={true}
        isMuted={true}
      />
    );
  }

  return null;
};

BackgroundElement.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object,
  mediaType: PropTypes.oneOf(['image', 'video']),
  video: PropTypes.object,
};

BackgroundElement.defaultProps = {
  className: undefined,
  image: undefined,
  mediaType: undefined,
  video: undefined,
};

export { BackgroundElement };
