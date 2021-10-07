import React from 'react';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { getCollectionLists } from '~/components/GlobalNavigation/GlobalNavigation.utils';
import { CollectionList } from '../CollectionList';
import type { ReadMenuType } from './ReadMenu.types';

const ReadMenu: ReadMenuType = () => {
  const { activeCollectionId } = useGlobalNavigationStateContext();

  const { read } = useGlobalNavigationContext();

  const { nestedCollections, notableNestedCollections } = getCollectionLists(
    read.items,
  );

  const readCollections = [...nestedCollections, ...notableNestedCollections];

  return (
    <>
      {readCollections.map(({ id, items, label }) => (
        <CollectionList
          heading={label}
          isVisible={activeCollectionId === read.id}
          items={items}
          key={id}
        />
      ))}
    </>
  );
};

export { ReadMenu };
