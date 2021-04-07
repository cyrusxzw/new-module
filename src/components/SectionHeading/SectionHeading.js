import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '~/components/Heading';
import { getEyebrowLevel, getSubHeadingLevel } from './SectionHeading.utils';
import styles from './SectionHeading.module.css';

const SectionHeading = ({
  childrenClassNames,
  className,
  eyebrow,
  hasSerifFontHeading,
  heading,
  id,
  isFlush,
  isOffsetPageHeading,
  isHeroHeading,
  isPageHeading,
  subHeading,
  theme,
  titleFont,
}) => {
  const classSet = cx(className, styles.base, {
    [styles.offsetPageHeading]: isOffsetPageHeading,
    [styles.heroHeading]: isHeroHeading,
  });
  const eyebrowClassSet = cx(styles.eyebrow, childrenClassNames.eyebrow);
  const headingClassSet = cx(
    styles.heading,
    childrenClassNames.heading,
    titleFont && styles[`${titleFont}TitleFont`],
  );
  const subHeadingClassSet = cx(
    styles.subHeading,
    childrenClassNames.subHeading,
  );

  return (
    <header className={classSet} id={id}>
      {heading && (
        <Heading
          className={headingClassSet}
          hasSerifFont={hasSerifFontHeading}
          isFlush={isFlush}
          level={isPageHeading ? '1' : '2'}
          size="xLarge"
          theme={theme}
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
          theme={theme}
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
          theme={theme}
        >
          {subHeading}
        </Heading>
      )}
    </header>
  );
};

SectionHeading.propTypes = {
  childrenClassNames: PropTypes.shape({
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }),
  className: PropTypes.string,
  eyebrow: PropTypes.string,
  hasSerifFontHeading: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  isFlush: PropTypes.bool,
  isOffsetPageHeading: PropTypes.bool,
  isHeroHeading: PropTypes.bool,
  isPageHeading: PropTypes.bool,
  subHeading: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  titleFont: PropTypes.oneOf(['Suisse', 'Zapf']),
};

SectionHeading.defaultProps = {
  childrenClassNames: {
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  className: undefined,
  eyebrow: undefined,
  hasSerifFontHeading: false,
  heading: undefined,
  id: undefined,
  isFlush: false,
  isOffsetPageHeading: false,
  isHeroHeading: false,
  isPageHeading: false,
  subHeading: undefined,
  theme: 'dark',
  titleFont: undefined,
};

export { SectionHeading };
