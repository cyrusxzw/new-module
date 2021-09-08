import React from 'react';
import { useGlobalNavigationContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { getCollectionLists } from '../../../DesktopView/components/CollectionLayout/CollectionLayout.utils';
import { CollectionList } from '../CollectionList';
import type { ReadMenuType } from './ReadMenu.types';

const ReadMenu: ReadMenuType = () => {
  const { read } = useGlobalNavigationContext();

  const {
    nestedCollections,
    notableNestedCollections,
    taxonomyOfDesignElement,
  } = getCollectionLists(read.items);

  const readCollections = [...nestedCollections, ...notableNestedCollections];

  return (
    <>
      {readCollections.map(({ id, items, label }) => (
        <CollectionList heading={label} id={id} items={items} key={id} />
      ))}

      <CollectionList id={read.id} items={[taxonomyOfDesignElement]} />
    </>
  );
};

export { ReadMenu };
