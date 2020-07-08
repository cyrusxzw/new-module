import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import { getHeadingLevel, getSubHeadingLevel } from './SectionHeading.utils';
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
  isPageHeading,
  subHeading,
  theme,
  paddingBottom,
  titleFont,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.offsetPageHeading]: isOffsetPageHeading },
    className,
  );
  const eyebrowClassSet = cx(childrenClassNames.eyebrow);
  const headingClassSet = cx(
    childrenClassNames.heading,
    titleFont && styles[`${titleFont}TitleFont`],
  );
  const subHeadingClassSet = cx(
    childrenClassNames.subHeading,
    paddingBottom && styles[`${paddingBottom}PaddingBottom`],
  );

  return (
    <header className={classSet} id={id}>
      {eyebrow && (
        <Heading
          className={eyebrowClassSet}
          hasMediumWeightFont={true}
          isFlush={isFlush}
          level={isPageHeading ? '1' : '2'}
          size="xXSmall"
          theme={theme}
        >
          {eyebrow}
        </Heading>
      )}
      {heading && (
        <Heading
          className={headingClassSet}
          hasSerifFont={hasSerifFontHeading}
          isFlush={isFlush}
          level={getHeadingLevel(eyebrow, isPageHeading)}
          size="xLarge"
          theme={theme}
        >
          {heading}
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
  isPageHeading: PropTypes.bool,
  subHeading: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  paddingBottom: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
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
  isPageHeading: false,
  subHeading: undefined,
  theme: 'dark',
  paddingBottom: undefined,
  titleFont: undefined,
};

export default SectionHeading;
