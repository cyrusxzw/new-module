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
  media,
  variation = 'default',
}) => {
  const isFullHeight = variation === 'full-display';
  const isOffsetX = variation === 'article-header';
  const isFullWidth = variation.match(/^(default|wide-header|full-display)$/);

  const classSet = cx(className, styles.base, styles[containMedia], {
    [styles.fullHeight]: isFullHeight,
    [styles.fullWidth]: isFullWidth,
    [styles.offsetX]: isOffsetX,
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
