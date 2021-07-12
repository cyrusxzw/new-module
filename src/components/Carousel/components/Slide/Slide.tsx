import React from 'react';
import cx from 'classnames';
import { Heading } from '~/components/Heading';
import { Image } from '~/components/Image';
import type { SlideType } from './Slide.types';
import styles from './Slide.module.css';

const Slide: SlideType = ({
  description,
  heading,
  id,
  image,
  isFullWidthSlide = false,
  theme = 'dark',
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

export { Slide };
