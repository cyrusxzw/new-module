import React from 'react';
import cx from 'classnames';
import { Image } from '~/components/Image';
import { Video } from '~/components/Video';
import styles from './BackgroundElement.module.css';
import type { BackgroundElementType } from './BackgroundElement.types';

const BackgroundElement: BackgroundElementType = ({
  image,
  mediaType,
  video,
  className,
}) => {
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
      />
    );
  }

  return null;
};

export { BackgroundElement };
