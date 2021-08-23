import React from 'react';
import { useFocusOnFirst } from '~/customHooks';
import { ListItem } from '../../components';
import type { PrimaryNavigationType } from './PrimaryNavigation.types';
import compositionStyles from '../../MobileView.module.css';

import { useMobileViewContext } from '~/components/GlobalNavigation/components/MobileView/MobileView.context';

const PrimaryNavigation: PrimaryNavigationType = ({ isVisible, items }) => {
  const { activeCollectionId } = useMobileViewContext();

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
