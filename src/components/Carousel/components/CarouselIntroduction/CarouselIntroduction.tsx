import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { SectionHeading } from '~/components/SectionHeading';
import type { CarouselIntroductionType } from './CarouselIntroduction.types';
import styles from './CarouselIntroduction.module.css';

const CarouselIntroduction: CarouselIntroductionType = ({
  cta,
  description,
  eyebrow,
  heading,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const hasCta = !!cta?.text;
  const classSet = cx(styles.base, styles[currentTheme]);
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
        theme={currentTheme}
      />
      {(!!description || hasCta) && (
        <div className={styles.content}>
          {description && (
            <div
              className={cx(
                styles.description,
                { [styles.hasCta]: hasCta },
                styles[currentTheme],
              )}
            >
              {description}
            </div>
          )}
          {hasCta && (
            <div className={styles.ctaWrapper}>
              <Hyperlink
                style={cta.style}
                theme={currentTheme}
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
