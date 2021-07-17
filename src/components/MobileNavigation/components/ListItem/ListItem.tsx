import React from 'react';
import cx from 'classnames';
import {
  Collection,
  Link,
  NestedCollection,
} from '~/components/MobileNavigation/components';
import type { ListItemType } from './ListItem.types';
import compositionStyles from '~/components/MobileNavigation/MobileNavigation.module.css';

const ListItem: ListItemType = ({
  itemProps,
  isActive = false,
  isNestedItem,
}) => {
  let returnElement = null;

  if (itemProps.type === 'collection') {
    returnElement = <Collection {...itemProps} />;
  } else if (itemProps.type === 'nested-collection') {
    returnElement = <NestedCollection {...itemProps} />;
  } else if (itemProps.type === 'link') {
    returnElement = (
      <Link {...itemProps} isActive={isActive} isNested={isNestedItem} />
    );
  }

  const classSet = cx(compositionStyles.listItem, {
    [compositionStyles.nestedItem]: itemProps.type === 'nested-collection',
  });

  return <li className={classSet}>{returnElement}</li>;
};

export { ListItem };
