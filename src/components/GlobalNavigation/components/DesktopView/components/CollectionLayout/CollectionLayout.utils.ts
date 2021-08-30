import type {
  Link,
  NestedCollection,
  NotableNestedCollection,
} from '~/components/GlobalNavigation/GlobalNavigation.types';
import type { GetCollectionLists } from './CollectionLayout.types';

const getCollectionLists: GetCollectionLists = (items) => {
  const topLevelCollections: Link[] = [];
  const nestedCollections: NestedCollection[] = [];
  const notableNestedCollections: NotableNestedCollection[] = [];
  let taxonomyOfDesignElement = null;

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
