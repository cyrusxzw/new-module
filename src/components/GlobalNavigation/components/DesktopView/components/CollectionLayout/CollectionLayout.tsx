import React from 'react';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { PromotionCard } from '~/components/GlobalNavigation/components/PromotionCard';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { CollectionList } from '../CollectionList';
import { CollectionImage } from '../CollectionImage';
import { getCollectionLists } from './CollectionLayout.utils';
import type { CollectionLayoutType } from './CollectionLayout.types';
import styles from './CollectionLayout.module.css';

const CollectionLayout: CollectionLayoutType = ({
  articles,
  articlesListHeading,
  id,
  image,
  items,
  promotion,
  topLevelCollectionLabel,
  type,
}) => {
  const { activeCollectionId, isOpen } = useGlobalNavigationStateContext();
  const { id: currentId } = useMenuItemContext(id);

  const {
    nestedCollections,
    notableNestedCollections,
    taxonomyOfDesignElement,
    topLevelCollections,
  } = getCollectionLists(items);

  return (
    <>
      <div className={styles.collectionsWrapper}>
        <CollectionList
          heading={topLevelCollectionLabel || 'Category'}
          items={topLevelCollections}
        />

        {type === 'read-collection' && (
          <CollectionList eyebrow={articlesListHeading} items={articles} />
        )}
      </div>

      <div className={styles.supplementary}>
        <div className={styles.nestedCollectionsWrapper}>
          <div className={styles.nestedCollections}>
            {[...nestedCollections]
              .filter(Boolean)
              .map(({ label, id, items }) => (
                <CollectionList heading={label} items={items} key={id} />
              ))}

            {!!taxonomyOfDesignElement && (
              <CollectionList items={[taxonomyOfDesignElement]} />
            )}
          </div>

          <div className={styles.notableNestedCollections}>
            {notableNestedCollections.map(({ label, items, id }) => (
              <CollectionList heading={label} items={items} key={id} />
            ))}
          </div>
        </div>

        {type === 'collection' && promotion && (
          <div className={styles.promotion}>
            <PromotionCard
              {...promotion}
              isFlush={true}
              isVisible={isOpen && activeCollectionId === currentId}
            />
          </div>
        )}
      </div>

      <CollectionImage {...image} />
    </>
  );
};

export { CollectionLayout };
