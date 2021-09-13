import React from 'react';
import cx from 'classnames';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { Transition } from '~/components/Transition';
import type { PanelType } from './Panel.types';
import styles from './Panel.module.css';

const Panel: PanelType = ({
  /** @todo
   * source this from a variable
   */
  backgroundColor = '#fffef3',
  children,
  id,
  shouldOnlyMountWhenActive = false,
}) => {
  const { isOpen, activeCollectionId } = useGlobalNavigationStateContext();
  const { id: currentId } = useMenuItemContext(id);

  const innerClassSet = cx(styles.content, {
    [styles.active]: activeCollectionId === currentId,
  });

  return (
    <Transition
      isActive={activeCollectionId !== 'top' && isOpen}
      shouldMountOnEnter={shouldOnlyMountWhenActive}
      shouldUnmountOnExit={shouldOnlyMountWhenActive}
      type="fadeIn"
    >
      <div className={cx(styles.base, { [styles.menuOpen]: isOpen })}>
        <div className={innerClassSet} style={{ backgroundColor }}>
          {children}
        </div>
      </div>
    </Transition>
  );
};

export { Panel };
