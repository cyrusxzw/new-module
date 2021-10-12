import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Button } from '~/components/Button';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useTabletViewContext } from '../../TabletView.context';
import { getCollectionLists } from '~/components/GlobalNavigation/GlobalNavigation.utils';
import { PromotionCard } from '../../../PromotionCard';
import { DetailsPanel } from '../DetailsPanel';
import { CollectionList } from '../CollectionList';
import type {
  CategoryItemTrackingWithAction,
  TopLevelCollectionLayoutType,
  TopLevelCollectionListsType,
} from './TopLevelCollectionLayout.types';
import compositionStyles from '../../TabletView.module.css';
import styles from './TopLevelCollectionLayout.module.css';

const TopLevelCollectionLists: TopLevelCollectionListsType = ({
  backgroundColor,
  dataTestRef,
  id,
  items,
  label,
  promotion,
  title,
  topLevelCollectionLabel,
}) => {
  const {
    activeCollectionId,
    setActiveCollectionId,
  } = useGlobalNavigationStateContext();

  const { trackingCallbacks } = useGlobalNavigationContext();

  const { isShopOpen } = useTabletViewContext();

  const {
    nestedCollections,
    notableNestedCollections,
    topLevelCollections,
  } = getCollectionLists(items);

  const allNestedCollections = [
    ...nestedCollections,
    ...notableNestedCollections,
  ];

  const buttonClassName = cx(
    compositionStyles.collectionItemLabel,
    compositionStyles.ornamentalWrapper,
  );

  /* TODO{issue-20-nonFixture}: Change tracking func name */
  const handleCollectionClick = (
    id,
    menuItemTrackingProps: CategoryItemTrackingWithAction,
  ) => {
    trackingCallbacks.tablet.tabletCategoryItemClick(menuItemTrackingProps);
    setActiveCollectionId(id);
  };

  return (
    <li className={compositionStyles.collectionItem}>
      <Button
        aria={{
          expanded: activeCollectionId === id,
          haspopup: true,
        }}
        className={buttonClassName}
        dataTestRef={dataTestRef}
        isInline={true}
        onClick={() =>
          handleCollectionClick(id, {
            menuType: 'Shop',
            menuLabel: label,
            menuCategory:
              'None' /* TODO{issue-22-nonFixture}: Dedicate function for this non-Category. Clicking menu item rather than category */,
            menuSection: 'Panel 1',
            action: isShopOpen ? 'Click' : 'Open',
          })
        }
        tabIndex={!isShopOpen ? -1 : null}
        title={title}
      >
        <span className={compositionStyles.ornamentalHover}>{label}</span>
      </Button>

      <DetailsPanel
        backgroundColor={backgroundColor}
        hasOffset={!!promotion}
        isActive={activeCollectionId === id}
      >
        {promotion && (
          <PromotionCard
            {...promotion}
            className={compositionStyles.promotion}
            isFlush={true}
            isVisible={activeCollectionId === id}
          />
        )}

        <CollectionList
          heading={topLevelCollectionLabel}
          isVisible={activeCollectionId === id}
          items={topLevelCollections}
        />

        {allNestedCollections.map(({ id, items, label }) => (
          <CollectionList
            heading={label}
            isVisible={activeCollectionId === id}
            items={items}
            key={id}
          />
        ))}
      </DetailsPanel>
    </li>
  );
};

const TopLevelCollectionLayout: TopLevelCollectionLayoutType = () => {
  const { isOpen } = useGlobalNavigationStateContext();
  const { collections } = useGlobalNavigationContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const classSet = cx(styles.base, styles[currentTheme]);

  return (
    <ul aria-hidden={!isOpen} className={classSet}>
      {collections.map((collection) => (
        <TopLevelCollectionLists {...collection} key={collection.id} />
      ))}
    </ul>
  );
};

export { TopLevelCollectionLayout, TopLevelCollectionLists };
