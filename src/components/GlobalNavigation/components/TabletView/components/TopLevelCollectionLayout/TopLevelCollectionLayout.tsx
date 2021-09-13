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
        onClick={() => setActiveCollectionId(id)}
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
          id={id}
          items={topLevelCollections}
        />

        {allNestedCollections.map(({ id, items, label }) => (
          <CollectionList heading={label} id={id} items={items} key={id} />
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
