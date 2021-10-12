import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationStateContext,
  useGlobalNavigationContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import { Paragraph } from '~/components/Paragraph';
import type { ArticleCardType } from './ArticleCard.types';
import compositionStyles from '../../TabletView.module.css';
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
  const { menuType, menuCategoryLabel } = useGlobalNavigationStateContext();
  const { read, trackingCallbacks } = useGlobalNavigationContext();

  const classSet = cx(
    styles.base,
    styles[currentTheme],
    compositionStyles.ornamentalWrapper,
    styles.leftAligned,
  );

  const handleOnClick = () => {
    trackingCallbacks.tablet.tabletCategoryItemClick({
      menuSection: 'Panel 2',
      menuType: menuType,
      menuLabel: read.topLevelCollectionLabel, // TODO{issue-21-nonFixture}: add translated english label value here in {currentLabel}
      menuCategory: menuCategoryLabel, // TODO{issue-21-nonFixture}: add translated english label value here in {context}
      menuSubnav: read.articlesListHeading, // TODO{issue-21-nonFixture}: add translated english label value here in {PROP}
      action: 'Click',
    });
  };

  return (
    <Hyperlink
      className={classSet}
      onClick={handleOnClick}
      tabIndex={!isVisible ? -1 : null}
      theme={currentTheme}
      title={title}
      url={url}
    >
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

      <Image {...image} className={styles.image} height="195" />
    </Hyperlink>
  );
};

export { ArticleCard };
