import type {
  GetCollectionLists,
  Link,
  NestedCollection,
  NotableNestedCollection,
} from './GlobalNavigation.types';

const getCollectionLists: GetCollectionLists = (items) => {
  const topLevelCollections: Link[] = [];
  const nestedCollections: NestedCollection[] = [];
  const notableNestedCollections: NotableNestedCollection[] = [];
  /** @todo
   * Future-proof edge case items
   */
  let taxonomyOfDesignElement = null;

  /** @todo
   * Refactor into individual functions?
   */
  items.forEach((item) => {
    if (item.type === 'link') {
      if (item.id === 'taxonomy-of-design') {
        taxonomyOfDesignElement = item;
      } else {
        topLevelCollections.push(item);
      }
    } else if (item.type === 'nested-collection') {
      nestedCollections.push(item);
    } else if (item.type === 'notable-nested-collection') {
      notableNestedCollections.push(item);
    }
  });

  return {
    nestedCollections,
    notableNestedCollections,
    taxonomyOfDesignElement,
    topLevelCollections,
  };
};

export { getCollectionLists };
