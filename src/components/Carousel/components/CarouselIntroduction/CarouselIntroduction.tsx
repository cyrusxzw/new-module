import React, { FC } from 'react';
import cx from 'classnames';
import { Hyperlink } from '~/components/Hyperlink';
import { SectionHeading } from '~/components/SectionHeading';
import type { CarouselIntroductionProps } from './CarouselIntroduction.types';
import styles from './CarouselIntroduction.module.css';

const CarouselIntroduction: FC<CarouselIntroductionProps> = ({
  cta,
  description,
  eyebrow,
  heading,
  theme = 'dark',
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
        <div
          className={cx(
            styles.description,
            { [styles.hasFooter]: cta },
            styles[theme],
          )}
        >
          {description}
        </div>
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

export { CarouselIntroduction };
