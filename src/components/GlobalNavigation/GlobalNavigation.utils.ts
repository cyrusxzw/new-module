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
   * Refactor into individual functions?
   */
  items.forEach((item) => {
    if (item.type === 'link') {
      topLevelCollections.push(item);
    } else if (item.type === 'nested-collection') {
      nestedCollections.push(item);
    } else if (item.type === 'notable-nested-collection') {
      notableNestedCollections.push(item);
    }
  });

  return {
    nestedCollections,
    notableNestedCollections,
    topLevelCollections,
  };
};

export { getCollectionLists };
