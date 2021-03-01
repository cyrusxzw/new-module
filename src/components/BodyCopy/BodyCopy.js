import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useThemeContext } from '~/contexts/index.ts';
import { SectionHeading } from '~/components/SectionHeading';
import styles from './BodyCopy.module.css';

const BodyCopy = forwardRef(
  (
    {
      childrenClassNames,
      className,
      content,
      copy,
      eyebrow,
      hasFlushHeading,
      hasSerifFontHeading,
      heading,
      id,
      isHeroArticle,
      subHeading,
      theme,
    },
    ref,
  ) => {
    const currentTheme = useThemeContext(theme, 'dark');
    const classSet = cx(styles.base, styles[currentTheme], className);

    return (
      <article className={classSet} id={id} ref={ref}>
        <SectionHeading
          childrenClassNames={{
            eyebrow: cx(styles.eyebrow, childrenClassNames.eyebrow),
            heading: cx(styles.heading, childrenClassNames.heading),
            subHeading: cx(styles.subHeading, childrenClassNames.subHeading),
          }}
          eyebrow={eyebrow}
          hasSerifFontHeading={hasSerifFontHeading}
          heading={heading}
          id={id}
          isFlush={hasFlushHeading}
          isPageHeading={isHeroArticle}
          subHeading={subHeading}
          theme={currentTheme}
        />

        {copy && <div className={styles.copy}>{copy}</div>}

        {content && <div className={styles.contentWrapper}>{content}</div>}
      </article>
    );
  },
);

BodyCopy.propTypes = {
  childrenClassNames: PropTypes.shape({
    eyebrow: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
  }),
  className: PropTypes.string,
  content: PropTypes.any,
  copy: PropTypes.node,
  eyebrow: PropTypes.string,
  hasFlushHeading: PropTypes.bool,
  hasSerifFontHeading: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  isHeroArticle: PropTypes.bool,
  subHeading: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

BodyCopy.defaultProps = {
  childrenClassNames: {
    eyebrow: undefined,
    heading: undefined,
    subHeading: undefined,
  },
  className: undefined,
  content: undefined,
  copy: undefined,
  eyebrow: undefined,
  hasFlushHeading: false,
  hasSerifFontHeading: false,
  heading: undefined,
  id: undefined,
  isHeroArticle: undefined,
  subHeading: undefined,
  theme: undefined,
};

export { BodyCopy };
