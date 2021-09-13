import React from 'react';
import { useFocusOnFirst } from '~/customHooks';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Transition } from '~/components/Transition';
import { ListItem } from '../ListItem';
import type { PrimaryMenuType } from './PrimaryMenu.types';
import compositionStyles from '../../MobileView.module.css';

const PrimaryMenu: PrimaryMenuType = ({ isVisible, items }) => {
  const { activeCollectionId } = useGlobalNavigationStateContext();

  const [listRef] = useFocusOnFirst(
    isVisible && activeCollectionId === 'top',
    'a:not([tabindex="-1"]), button:not([tabindex="-1"])',
  );

  return (
    <Transition isActive={isVisible} type="fade">
      <nav aria-hidden={!isVisible} aria-label="primary" role="navigation">
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
    </Transition>
  );
};

export { PrimaryMenu };
