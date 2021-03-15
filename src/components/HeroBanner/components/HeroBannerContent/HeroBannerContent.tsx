import React, { FC } from 'react';
import cx from 'classnames';
import { ParagraphSet } from '~/components/Paragraph';
import { SectionHeading } from '~/components/SectionHeading';
import type { HeroBannerContentProps } from './HeroBannerContent.types';
import styles from './HeroBannerContent.module.css';

const HeroBannerContent: FC<HeroBannerContentProps> = ({
  className,
  content,
  copy,
  hasFullWidthMedia = false,
  hasSerifFontHeading = true,
  hasTopOffset = false,
  isReverse = false,
  theme = 'dark',
}) => {
  const classSet = cx(
    className,
    styles.base,
    { [styles.reverse]: isReverse },
    { [styles.fullWidthMedia]: hasFullWidthMedia },
    { [styles.topOffest]: hasTopOffset },
    styles[theme],
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
          isPageHeading={true}
          subHeading={copy.subHeading}
          theme={theme}
        />
        <div className={styles.content}>
          {copy?.description && (
            <ParagraphSet
              className={styles.description}
              isLarge={true}
              theme={theme}
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
