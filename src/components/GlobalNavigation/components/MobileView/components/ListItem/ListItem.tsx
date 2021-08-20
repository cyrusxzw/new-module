import React from 'react';
import cx from 'classnames';
import {
  Collection,
  Link,
  PromotionCard,
  NestedCollection,
} from '../../components';
import type { ListItemType } from './ListItem.types';
import compositionStyles from '../../MobileView.module.css';

const ListItem: ListItemType = ({
  isNestedItem,
  isTopItem = false,
  isVisible = false,
  itemProps,
}) => {
  let returnElement = null;

  if (itemProps.type === 'collection') {
    returnElement = <Collection {...{ ...itemProps, isVisible }} />;
  } else if (itemProps.type === 'nested-collection') {
    returnElement = <NestedCollection {...{ ...itemProps, isVisible }} />;
  } else if (itemProps.type === 'promotion-card') {
    returnElement = <PromotionCard {...{ ...itemProps, isVisible }} />;
  } else if (itemProps.type === 'link') {
    returnElement = (
      <Link {...{ ...itemProps, isVisible, isNestedItem, isTopItem }} />
    );
  } else {
    return null;
  }

  const classSet = cx(compositionStyles.listItem, {
    [compositionStyles.nestedItem]: itemProps.type === 'nested-collection',
    [compositionStyles.nestedCollectionLink]:
      itemProps.type === 'link' && isNestedItem,
  });

  return <li className={classSet}>{returnElement}</li>;
};

export { ListItem };
