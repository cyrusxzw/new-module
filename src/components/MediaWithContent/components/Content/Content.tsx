import React, { ReactElement } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { ParagraphSet } from '~/components/Paragraph';
import { SectionHeading } from '~/components/SectionHeading';
import type { ContentProps } from './Content.types';
import styles from './Content.module.css';

const Content = ({
  className,
  content,
  copy,
  hasFullWidthImage = false,
  hasSerifFontHeading = false,
  isReverse = false,
  theme,
}: ContentProps): ReactElement => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(
    className,
    styles.base,
    { [styles.reverse]: isReverse },
    { [styles.hasFullWidthImage]: hasFullWidthImage },
    styles[currentTheme.toLowerCase()],
  );

  return (
    <div className={classSet}>
      <div className={styles.innerWrapper}>
        <SectionHeading
          className={styles.header}
          eyebrow={copy.eyebrow}
          hasSerifFontHeading={hasSerifFontHeading}
          heading={copy.heading}
          isFlush={true}
          isPageHeading={false}
          subHeading={copy.subHeading}
          theme={theme}
        />
        <div className={styles.content}>
          {copy.description && (
            <ParagraphSet
              className={styles.description}
              isLarge={false}
              theme={theme}
            >
              {copy.description}
            </ParagraphSet>
          )}
          {content}
        </div>
      </div>
    </div>
  );
};

export { Content };
