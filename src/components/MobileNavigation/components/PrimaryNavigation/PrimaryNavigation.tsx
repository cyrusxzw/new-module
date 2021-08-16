import React from 'react';
import { useFocusOnFirst } from '~/customHooks';
import { useMobileNavigationContext } from '~/components/MobileNavigation/MobileNavigation.context';
import { ListItem } from '~/components/MobileNavigation/components';
import type { PrimaryNavigationType } from './PrimaryNavigation.types';
import compositionStyles from '../../MobileNavigation.module.css';

const PrimaryNavigation: PrimaryNavigationType = ({ isVisible, items }) => {
  const { activeCollectionId } = useMobileNavigationContext();
  const [listRef] = useFocusOnFirst(
    isVisible && activeCollectionId === 'top',
    'a:not([tabindex="-1"]), button:not([tabindex="-1"])',
  );

  return (
    <nav aria-hidden={!isVisible} aria-label="navigation" role="navigation">
      <ul className={compositionStyles.list} ref={listRef}>
        {items.map((props) => (
          <ListItem
            isTopItem={true}
            isVisible={isVisible && activeCollectionId === 'top'}
            itemProps={props}
            key={props.id}
          />
        ))}
      </ul>
    </nav>
  );
};

export { PrimaryNavigation };
