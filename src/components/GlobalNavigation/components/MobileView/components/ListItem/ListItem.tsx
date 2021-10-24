import React from 'react';
import cx from 'classnames';
import { Collection } from '../Collection';
import { Link } from '../Link';
import { NestedCollection } from '../NestedCollection';
import { PromotionCard } from '~/components/GlobalNavigation/components';
import type { ListItemType } from './ListItem.types';
import compositionStyles from '../../MobileView.module.css';

const ListItem: ListItemType = ({
  isNestedItem,
  isTopItem = false,
  isVisible = false,
  itemProps,
  menuSubnav,
}) => {
  let returnElement = null;

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
          isVisible,
          isNested: isNestedItem,
          isTopItem,
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
