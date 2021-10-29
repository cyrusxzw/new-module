import React, { forwardRef } from 'react';
import cx from 'classnames';
import { ThemeContextProvider } from '~/contexts';
import { HeroBannerMedia } from './components/HeroBannerMedia';
import { HeroBannerContent } from './components/HeroBannerContent';
import type { HeroBannerProps } from './HeroBanner.types';
import styles from './HeroBanner.module.css';

const HeroBanner = forwardRef<HTMLDivElement, HeroBannerProps>(
  function HeroBannerRef(
    {
      backgroundColor = '#F6F5E8',
      className,
      containMedia,
      content,
      copy,
      foregroundImage,
      foregroundImageLink,
      hasSerifFontHeading = true,
      hasTopOffset = false,
      hasNewNav = false,
      media,
      theme = 'dark',
      variation = 'default',
    },
    ref,
  ) {
    const classSet = cx(
      styles.base,
      { [styles.topOffest]: hasTopOffset },
      { [styles.newNavLoaded]: hasNewNav },
      className,
    );

    const style = backgroundColor ? { backgroundColor } : undefined;

    return (
      <ThemeContextProvider theme={theme}>
        <div className={classSet} ref={ref} style={style}>
          <HeroBannerMedia
            containMedia={containMedia}
            foregroundImage={foregroundImage}
            foregroundImageLink={foregroundImageLink}
            media={media}
            variation={variation}
          />
          <HeroBannerContent
            content={content}
            copy={copy}
            hasNewNav={hasNewNav}
            hasNoMedia={!media}
            hasSerifFontHeading={hasSerifFontHeading}
            hasTopOffset={hasTopOffset}
            variation={variation}
          />
        </div>
      </ThemeContextProvider>
    );
  },
);

export { HeroBanner };
