import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationStateContext,
  useGlobalNavigationContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Hyperlink } from '~/components/Hyperlink';
import { Paragraph } from '~/components/Paragraph';
import { Image } from '~/components/Image';
import type {
  ArticleCardType,
  CategoryItemTrackingWithMobileActionType,
} from './ArticleCard.types';
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
  const { menuType } = useGlobalNavigationStateContext();
  const { read, trackingCallbacks } = useGlobalNavigationContext();

  const classSet = cx(
    styles.base,
    styles[currentTheme],
    compositionStyles.itemElement,
    compositionStyles.ornamentalWrapper,
    styles.leftAligned,
  );

  const handleTracking = () => {
    trackingCallbacks.mobile.mobileCategoryItemClick({
      menuCategory: 'None', // TODO{issue-21-nonFixture}: add translated english label value here in {context}
      menuLabel: read.topLevelCollectionLabel, // TODO{issue-21-nonFixture}: add translated english label value here in {currentLabel}
      menuSection: 'Panel 1',
      menuSubnav: read.articlesListHeading, // TODO{issue-21-nonFixture}: add translated english label value here in {PROP}
      menuType: menuType,
      action: 'Click',
    } as CategoryItemTrackingWithMobileActionType);
  };

  const handleOnClick = () => {
    handleTracking();
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
