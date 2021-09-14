import React from 'react';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMenuItemContext } from '../MenuItem/MenuItem.context';
import { getCollectionLists } from '~/components/GlobalNavigation/GlobalNavigation.utils';
import { PromotionCard } from '~/components/GlobalNavigation/components/PromotionCard';
import { CollectionList } from '../CollectionList';
import { CollectionImage } from '../CollectionImage';
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
          dataTestRef={`NAV_${currentId.toUpperCase()}_TLC`}
          heading={topLevelCollectionLabel}
          items={topLevelCollections}
        />

        {type === 'read-collection' && (
          <CollectionList
            dataTestRef={`NAV_${currentId.toUpperCase()}_TLC_READ`}
            eyebrow={articlesListHeading}
            items={articles}
          />
        )}
      </div>

      <div className={styles.supplementary}>
        <div className={styles.nestedCollectionsWrapper}>
          <div className={styles.nestedCollections}>
            {nestedCollections
              .filter(Boolean)
              .map(({ label, id, items }, index) => (
                <CollectionList
                  dataTestRef={`NAV_${currentId.toUpperCase()}_NECO_${
                    index + 1
                  }`}
                  heading={label}
                  items={items}
                  key={id}
                />
              ))}

            {!!taxonomyOfDesignElement && (
              <CollectionList
                dataTestRef={`NAV_${currentId.toUpperCase()}_NECO_TOD`}
                items={[taxonomyOfDesignElement]}
              />
            )}
          </div>

          <div className={styles.notableNestedCollections}>
            {notableNestedCollections.map(({ label, items, id }, index) => (
              <CollectionList
                dataTestRef={`NAV_${currentId.toUpperCase()}_NONECO_${
                  index + 1
                }`}
                heading={label}
                items={items}
                key={id}
              />
            ))}
          </div>
        </div>

        {type === 'collection' && promotion && (
          <div className={styles.promotion}>
            <PromotionCard
              {...promotion}
              dataTestRef={`NAV_${currentId.toUpperCase()}_PROMO_CARD`}
              isFlush={true}
              isVisible={isOpen && activeCollectionId === currentId}
            />
          </div>
        )}
      </div>

      <CollectionImage
        {...image}
        dataTestRef={`NAV_${currentId.toUpperCase()}_COLLECTION_IMAGE`}
      />
    </>
  );
};

export { CollectionLayout };
