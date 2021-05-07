import React, { FC } from 'react';
import cx from 'classnames';
import { ConditionalWrapper } from '~/components/ConditionalWrapper';
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
  if (!foregroundImage && !media) return null;

  const isFullHeight = variation === 'full-display';
  const isOffsetX = variation === 'article-header';
  // const isOffsetXFullWidthMedia = variation === 'landing-header';
  const isFullWidth = variation.match(
    /^(default|full-display|landing-header|wide-header)$/,
  );

  const classSet = cx(className, styles.base, styles[containMedia], {
    [styles.fullHeight]: isFullHeight,
    [styles.fullWidth]: isFullWidth,
    [styles.offsetX]: isOffsetX,
    // [styles.offsetXFullWidthMedia]: isOffsetXFullWidthMedia,
  });

  return (
    <div className={classSet}>
      {media && <Figure className={styles.figure}>{media}</Figure>}
      {foregroundImage && (
        <Figure className={styles.foregroundImage}>
          <ConditionalWrapper
            condition={!!foregroundImageLink}
            wrapper={children => (
              <Hyperlink
                title={foregroundImageLink.title}
                url={foregroundImageLink.url}
              >
                {children}
              </Hyperlink>
            )}
          >
            {foregroundImage}
          </ConditionalWrapper>
        </Figure>
      )}
    </div>
  );
};

export { HeroBannerMedia };
