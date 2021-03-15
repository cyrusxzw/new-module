import React, { FC } from 'react';
import cx from 'classnames';
import { Figure } from '~/components/Figure';
import { Hyperlink } from '~/components/Hyperlink';
import type { HeroBannerMediaProps } from './HeroBannerMedia.types';
import styles from './HeroBannerMedia.module.css';

const HeroBannerMedia: FC<HeroBannerMediaProps> = ({
  className,
  containMedia,
  foregroundImage,
  foregroundImageLink,
  hasFullWidthMedia = false,
  media,
}) => {
  const classSet = cx(className, styles.base, styles[containMedia], {
    [styles.fullWidthMedia]: hasFullWidthMedia,
  });

  return (
    <div className={classSet}>
      <Figure className={styles.figure}>{media}</Figure>
      {foregroundImage && (
        <Figure className={styles.foregroundImage}>
          {foregroundImageLink ? (
            <Hyperlink
              title={foregroundImageLink.title}
              url={foregroundImageLink.url}
            >
              {foregroundImage}
            </Hyperlink>
          ) : (
            foregroundImage
          )}
        </Figure>
      )}
    </div>
  );
};

export { HeroBannerMedia };
