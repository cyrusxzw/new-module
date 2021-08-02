import React from 'react';
import cx from 'classnames';
import {
  Collection,
  Link,
  Card,
  NestedCollection,
} from '~/components/MobileNavigation/components';
import type { ListItemType } from './ListItem.types';
import compositionStyles from '~/components/MobileNavigation/MobileNavigation.module.css';

const ListItem: ListItemType = ({
  itemProps,
  isActive = false,
  isNestedItem,
  isTopItem = false,
}) => {
  let returnElement = null;

  if (itemProps.type === 'collection') {
    returnElement = <Collection {...itemProps} isActive={isActive} />;
  } else if (itemProps.type === 'nested-collection') {
    returnElement = <NestedCollection {...itemProps} isActive={isActive} />;
  } else if (itemProps.type === 'card') {
    returnElement = <Card {...itemProps} isActive={isActive} />;
  } else if (itemProps.type === 'link') {
    returnElement = (
      <Link
        {...itemProps}
        isActive={isActive}
        isNested={isNestedItem}
        isTop={isTopItem}
      />
    );
  }

  const classSet = cx(compositionStyles.listItem, {
    [compositionStyles.nestedItem]: itemProps.type === 'nested-collection',
  });

  return <li className={classSet}>{returnElement}</li>;
};

export { ListItem };
