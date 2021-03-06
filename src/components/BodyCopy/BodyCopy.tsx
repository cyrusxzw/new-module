import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { SectionHeading } from '~/components/SectionHeading';
import { BodyCopyProps } from './BodyCopy.types';
import styles from './BodyCopy.module.css';

const BodyCopy = forwardRef<HTMLElement, BodyCopyProps>(
  (
    {
      childrenClassNames,
      className,
      content,
      copy,
      eyebrow,
      hasFlushHeading = false,
      hasSerifFontHeading = false,
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
    const sectionHeadingId = id && `${id}-heading`;

    return (
      <article className={classSet} id={id} ref={ref}>
        <SectionHeading
          childrenClassNames={{
            eyebrow: childrenClassNames?.eyebrow,
            heading: childrenClassNames?.heading,
            subHeading: childrenClassNames?.subHeading,
          }}
          eyebrow={eyebrow}
          hasSerifFontHeading={hasSerifFontHeading}
          heading={heading}
          id={sectionHeadingId}
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

export { BodyCopy };
