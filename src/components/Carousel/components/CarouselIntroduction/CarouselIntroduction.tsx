import React, { FC } from 'react';
import cx from 'classnames';
import { Hyperlink } from '~/components/Hyperlink';
import { SectionHeading } from '~/components/SectionHeading';
import { Paragraph } from '~/components/Paragraph';
import type { CarouselIntroductionProps } from './CarouselIntroduction.types';
import styles from './CarouselIntroduction.module.css';

const CarouselIntroduction: FC<CarouselIntroductionProps> = ({
  cta,
  description,
  eyebrow,
  heading,
  theme = 'dark',
}) => {
  const hasCta = !!cta && !!cta.text;
  const classSet = cx(styles.base, styles[theme]);
  const headingClassSet = cx(styles.heading, {
    [styles.offsetHeading]: !!description || hasCta,
  });

  return (
    <div className={classSet}>
      <SectionHeading
        className={headingClassSet}
        eyebrow={eyebrow}
        hasSerifFontHeading={true}
        heading={heading}
        isFlush={true}
        theme={theme}
      />
      {(!!description || hasCta) && (
        <div className={styles.content}>
          {description && (
            <Paragraph
              className={cx(styles.description, { [styles.hasCta]: hasCta })}
              theme={theme}
            >
              {description}
            </Paragraph>
          )}
          {hasCta && (
            <div className={styles.ctaWrapper}>
              <Hyperlink
                style={cta.style}
                theme={theme}
                title={cta.title}
                url={cta.url}
              >
                {cta.text}
              </Hyperlink>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { CarouselIntroduction };
