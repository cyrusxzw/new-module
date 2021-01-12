import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Heading } from '~/components/Heading';
import { Image } from '~/components/Image';
import styles from './Slide.module.css';

const Slide = ({
  description,
  heading,
  id,
  image,
  isFullWidthSlide,
  theme,
}) => (
  <>
    {(heading || description) && (
      <div className={cx(styles.information, styles[theme])} id={id}>
        {heading && (
          <Heading
            className={cx(styles.heading, styles[theme])}
            level="5"
            size="xXSmall"
          >
            {heading}
          </Heading>
        )}
        {description && (
          <div className={cx(styles.description, styles[theme])}>
            {description}
          </div>
        )}
      </div>
    )}
    <div className={styles.imageContainer}>
      <Image
        className={cx(styles.image, {
          [styles.fullWidthSlide]: isFullWidthSlide,
        })}
        theme={theme}
        {...image}
      />
    </div>
  </>
);

Slide.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.object.isRequired,
  isFullWidthSlide: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Slide.defaultProps = {
  description: undefined,
  heading: undefined,
  id: undefined,
  image: undefined,
  isFullWidthSlide: false,
  theme: 'dark',
};

export { Slide };
