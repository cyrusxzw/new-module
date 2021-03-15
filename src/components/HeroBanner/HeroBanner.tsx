import React, { forwardRef, FC } from 'react';
import cx from 'classnames';
import { HeroBannerMedia } from './components/HeroBannerMedia';
import { HeroBannerContent } from './components/HeroBannerContent';
import type { HeroBannerProps } from './HeroBanner.types';
import styles from './HeroBanner.module.css';

const HeroBanner: FC<HeroBannerProps> = forwardRef(function HeroBannerRef(
  {
    backgroundColor = '#F6F5E8',
    className,
    containMedia,
    content,
    copy,
    foregroundImage,
    foregroundImageLink,
    hasFullWidthMedia = false,
    hasSerifFontHeading = true,
    hasTopOffset = false,
    isReverse = false,
    media,
    theme = 'dark',
  },
  ref: React.LegacyRef<HTMLImageElement>,
) {
  const classSet = cx(
    styles.base,
    { [styles.reverse]: isReverse },
    { [styles.topOffest]: hasTopOffset },
    className,
  );

  const style = backgroundColor ? { backgroundColor } : undefined;

  return (
    <div className={classSet} ref={ref} style={style}>
      <HeroBannerMedia
        containMedia={containMedia}
        foregroundImage={foregroundImage}
        foregroundImageLink={foregroundImageLink}
        hasFullWidthMedia={hasFullWidthMedia}
        media={media}
      />
      <HeroBannerContent
        content={content}
        copy={copy}
        hasFullWidthMedia={hasFullWidthMedia}
        hasSerifFontHeading={hasSerifFontHeading}
        hasTopOffset={hasTopOffset}
        isReverse={isReverse}
        theme={theme}
      />
    </div>
  );
});

export { HeroBanner };
