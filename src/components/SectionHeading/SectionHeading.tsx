import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Heading } from '~/components/Heading';
import { getEyebrowLevel, getSubHeadingLevel } from './SectionHeading.utils';
import type { SectionHeadingType } from './SectionHeading.types';
import styles from './SectionHeading.module.css';

const SectionHeading: SectionHeadingType = ({
  childrenClassNames,
  className,
  eyebrow,
  hasSerifFontHeading = false,
  heading,
  id,
  isFlush = false,
  isOffsetPageHeading = false,
  isHeroHeading = false,
  isPageHeading = false,
  subHeading,
  theme,
  titleFont,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');

  if (!eyebrow && !heading && !subHeading) {
    return null;
  }

  const classSet = cx(className, styles.base, {
    [styles.offsetPageHeading]: isOffsetPageHeading,
    [styles.heroHeading]: isHeroHeading,
  });
  const eyebrowClassSet = cx(styles.eyebrow, childrenClassNames?.eyebrow);
  const headingClassSet = cx(
    styles.heading,
    childrenClassNames?.heading,
    titleFont && styles[`${titleFont}TitleFont`],
  );
  const subHeadingClassSet = cx(
    styles.subHeading,
    childrenClassNames?.subHeading,
  );

  return (
    <header
      className={classSet}
      data-testid="data-testid-SectionHeading"
      id={id}
    >
      {heading && (
        <Heading
          className={headingClassSet}
          hasSerifFont={hasSerifFontHeading}
          isFlush={isFlush}
          level={isPageHeading ? '1' : '2'}
          size="xLarge"
          theme={currentTheme}
        >
          {heading}
        </Heading>
      )}
      {eyebrow && (
        <Heading
          className={eyebrowClassSet}
          hasMediumWeightFont={true}
          isFlush={isFlush}
          level={getEyebrowLevel(heading, isPageHeading)}
          size="xXSmall"
          theme={currentTheme}
        >
          {eyebrow}
        </Heading>
      )}
      {subHeading && (
        <Heading
          className={subHeadingClassSet}
          hasMediumWeightFont={true}
          isFlush={isFlush}
          level={getSubHeadingLevel(eyebrow, heading, isPageHeading)}
          size="xSmall"
          theme={currentTheme}
        >
          {subHeading}
        </Heading>
      )}
    </header>
  );
};

export { SectionHeading };
