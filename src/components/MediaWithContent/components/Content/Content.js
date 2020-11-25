import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ParagraphSet } from '~/components/Paragraph';
import SectionHeading from '~/components/SectionHeading';
import styles from './Content.module.css';

const Content = ({
  className,
  content,
  copy,
  hasFullWidthImage,
  hasSerifFontHeading,
  hasTopOffset,
  isHero,
  isReverse,
  theme,
}) => {
  const classSet = cx(
    className,
    styles.base,
    { [styles.reverse]: isReverse },
    { [styles.hero]: isHero },
    { [styles.notHero]: !isHero },
    { [styles.hasFullWidthImage]: hasFullWidthImage },
    { [styles.hasHalfWidthImage]: !hasFullWidthImage },
    { [styles.topOffest]: hasTopOffset },
    styles[theme.toLowerCase()],
  );

  return (
    <div className={classSet}>
      <div className={styles.innerWrapper}>
        <SectionHeading
          childrenClassNames={{
            eyebrow: styles.eyebrow,
          }}
          className={styles.header}
          eyebrow={copy.eyebrow}
          hasSerifFontHeading={hasSerifFontHeading}
          heading={copy.heading}
          isFlush={!isHero}
          isPageHeading={isHero}
          subHeading={copy.subHeading}
          theme={theme}
        />
        <div className={styles.content}>
          {copy.description && (
            <ParagraphSet
              className={styles.description}
              isLarge={isHero}
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

Content.propTypes = {
  className: PropTypes.string,
  content: PropTypes.any,
  copy: PropTypes.shape({
    description: PropTypes.any,
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }).isRequired,
  hasFullWidthImage: PropTypes.bool,
  hasSerifFontHeading: PropTypes.bool,
  hasTopOffset: PropTypes.bool,
  isHero: PropTypes.bool,
  isReverse: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Content.defaultProps = {
  className: undefined,
  content: undefined,
  copy: {
    description: undefined,
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  hasFullWidthImage: false,
  hasSerifFontHeading: true,
  hasTopOffset: false,
  isHero: false,
  isReverse: false,
  theme: 'dark',
};

export default Content;
