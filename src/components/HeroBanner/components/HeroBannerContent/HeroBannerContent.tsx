import React, { FC } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { ParagraphSet } from '~/components/Paragraph';
import { SectionHeading } from '~/components/SectionHeading';
import type { HeroBannerContentProps } from './HeroBannerContent.types';
import styles from './HeroBannerContent.module.css';

const HeroBannerContent: FC<HeroBannerContentProps> = ({
  className,
  content,
  copy,
  hasNoMedia,
  hasSerifFontHeading = true,
  hasTopOffset = false,
  theme,
  variation = 'default',
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const isFullWidth = variation.match(
    /^(default|full-display|landing-header|wide-header)$/,
  );
  const isFullHeight = variation === 'full-display';
  const isOffsetXFullWidthMedia = variation === 'landing-header';
  const isWide = variation === 'wide-header';
  const isOffsetX = variation === 'article-header';

  const classSet = cx(
    className,
    styles.base,
    {
      [styles.fullWidth]: isFullWidth,
      [styles.fullHeight]: isFullHeight,
      [styles.wide]: isWide,
      [styles.offsetX]: isOffsetX,
      [styles.offsetXFullWidthMedia]: isOffsetXFullWidthMedia,
      [styles.topOffest]: hasTopOffset,
      [styles.noMedia]: hasNoMedia && variation !== 'full-display',
    },
    styles[currentTheme],
  );

  return (
    <div className={classSet}>
      <div className={styles.innerWrapper}>
        <SectionHeading
          className={styles.header}
          eyebrow={copy?.eyebrow}
          hasSerifFontHeading={hasSerifFontHeading}
          heading={copy?.heading}
          isFlush={false}
          isHeroHeading={true}
          isPageHeading={true}
          subHeading={copy.subHeading}
          theme={currentTheme}
        />
        <div className={styles.content}>
          {copy?.description && (
            <ParagraphSet
              className={styles.description}
              isLarge={true}
              theme={currentTheme}
            >
              {copy?.description}
            </ParagraphSet>
          )}
          {content}
        </div>
      </div>
    </div>
  );
};

export { HeroBannerContent };
