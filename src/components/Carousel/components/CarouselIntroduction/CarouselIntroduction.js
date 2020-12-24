import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Hyperlink } from '~/components/Hyperlink';
import { SectionHeading } from '~/components/SectionHeading';
import { Paragraph } from '~/components/Paragraph';
import styles from './CarouselIntroduction.module.css';

const CarouselIntroduction = ({
  cta,
  description,
  eyebrow,
  heading,
  theme,
}) => {
  const classSet = cx(styles.base, styles[theme]);

  return (
    <div className={classSet}>
      <SectionHeading
        className={styles.heading}
        eyebrow={eyebrow}
        hasSerifFontHeading={true}
        heading={heading}
        isFlush={true}
        theme={theme}
      />
      {description && (
        <Paragraph
          className={cx(styles.description, { [styles.hasFooter]: cta })}
          theme={theme}
        >
          {description}
        </Paragraph>
      )}
      {cta && (
        <footer className={styles.ctaWrapper}>
          <Hyperlink
            style={cta.style}
            theme={theme}
            title={cta.title}
            url={cta.url}
          >
            {cta.text}
          </Hyperlink>
        </footer>
      )}
    </div>
  );
};

CarouselIntroduction.propTypes = {
  cta: PropTypes.shape({
    style: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  description: PropTypes.node,
  heading: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  eyebrow: PropTypes.string,
};

CarouselIntroduction.defaultProps = {
  cta: undefined,
  description: undefined,
  heading: undefined,
  theme: 'dark',
  eyebrow: undefined,
};

export { CarouselIntroduction };
