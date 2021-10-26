import React from 'react';
import cx from 'classnames';
import { Collection } from '../Collection';
import { Link } from '../Link';
import { NestedCollection } from '../NestedCollection';
import { PromotionCard } from '~/components/GlobalNavigation/components';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import type { ListItemType } from './ListItem.types';
import compositionStyles from '../../MobileView.module.css';

const ListItem: ListItemType = ({
  isNestedItem,
  isTopItem = false,
  isVisible = false,
  itemIndex,
  itemProps,
  menuSubnav,
}) => {
  let returnElement = null;

  const { read } = useGlobalNavigationContext();
  const { activeCollectionId } = useGlobalNavigationStateContext();
  const { label } = itemProps;

  if (itemProps.type === 'collection') {
    returnElement = <Collection {...{ ...itemProps, isVisible }} />;
  } else if (
    itemProps.type === 'nested-collection' ||
    itemProps.type === 'notable-nested-collection'
  ) {
    returnElement = <NestedCollection {...{ ...itemProps, isVisible }} />;
  } else if (itemProps.type === 'promotion') {
    returnElement = <PromotionCard {...{ ...itemProps, isVisible }} />;
  } else if (itemProps.type === 'link') {
    returnElement = (
      <Link
        {...{
          ...itemProps,
          isNested: isNestedItem,
          /* Allows us to set the Athenaeum Label copy for mobile vs See all Articles for Desktop */
          label:
            itemIndex === 0 && activeCollectionId === read.id
              ? read.topLevelCollectionLabel
              : label,
          isTopItem,
          isVisible,
          menuSubnav,
        }}
      />
    );
  } else {
    return null;
  }

  const classSet = cx(compositionStyles.listItem, {
    [compositionStyles.nestedItem]:
      itemProps.type === 'nested-collection' ||
      itemProps.type === 'notable-nested-collection',
    [compositionStyles.nestedCollectionLink]:
      itemProps.type === 'link' && isNestedItem,
  });

  return <li className={classSet}>{returnElement}</li>;
};

export { ListItem };
