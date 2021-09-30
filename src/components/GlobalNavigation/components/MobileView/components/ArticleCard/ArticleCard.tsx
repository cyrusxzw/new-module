import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { Paragraph } from '~/components/Paragraph';
import { Image } from '~/components/Image';
import type { ArticleCardType } from './ArticleCard.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './ArticleCard.module.css';

const ArticleCard: ArticleCardType = ({
  image,
  isVisible = true,
  label,
  metaLabel,
  title,
  url,
}) => {
  const currentTheme = useThemeContext(null, 'dark');

  const classSet = cx(
    styles.base,
    styles[currentTheme],
    compositionStyles.itemElement,
    compositionStyles.ornamentalWrapper,
    styles.leftAligned,
    styles.mobileArticle,
  );

  return (
    <Hyperlink
      className={classSet}
      tabIndex={!isVisible ? -1 : null}
      theme={currentTheme}
      title={title}
      url={url}
    >
      <Image {...image} className={styles.image} />

      {metaLabel && (
        <Paragraph
          className={styles.metaLabel}
          isFlush={true}
          theme={currentTheme}
        >
          {metaLabel}
        </Paragraph>
      )}

      <Paragraph
        className={styles.label}
        hasSerifFont={true}
        isFlush={true}
        theme={currentTheme}
      >
        <span className={compositionStyles.ornamentalHover}>{label}</span>
      </Paragraph>
    </Hyperlink>
  );
};

export { ArticleCard };
