import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Media } from './components/Media';
import { Content } from './components/Content';
import type { MediaWithContentProps } from './MediaWithContent.types';
import styles from './MediaWithContent.module.css';

const MediaWithContent = forwardRef<HTMLDivElement, MediaWithContentProps>(
  function MediaWithContentRef(
    {
      backgroundColor = '#F6F5E8',
      className,
      containMedia,
      content,
      copy,
      foregroundImage,
      foregroundImageLink,
      hasFullWidthImage = false,
      hasSerifFontHeading = true,
      isReverse = false,
      media,
      theme,
    },
    ref,
  ) {
    const currentTheme = useThemeContext(theme, 'dark');
    const style = backgroundColor ? { backgroundColor } : undefined;
    const classSet = cx(
      styles.base,
      { [styles.reverse]: isReverse },
      styles[currentTheme],
      className,
    );

    return (
      <div className={classSet} ref={ref} style={style}>
        <Media
          containMedia={containMedia}
          foregroundImage={foregroundImage}
          foregroundImageLink={foregroundImageLink}
          hasFullWidthImage={hasFullWidthImage}
          media={media}
        />
        <Content
          content={content}
          copy={copy}
          hasFullWidthImage={hasFullWidthImage}
          hasSerifFontHeading={hasSerifFontHeading}
          isReverse={isReverse}
          theme={theme}
        />
      </div>
    );
  },
);

export { MediaWithContent };
