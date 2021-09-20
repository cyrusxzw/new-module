import React from 'react';
import cx from 'classnames';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { Transition } from '~/components/Transition';
import type { PanelType } from './Panel.types';
import styles from './Panel.module.css';

const defaultBackgroundColor = '#fffef3';

const Panel: PanelType = ({
  backgroundColor = defaultBackgroundColor,
  children,
  id,
  shouldOnlyMountWhenActive = false,
}) => {
  const { isOpen, activeCollectionId } = useGlobalNavigationStateContext();
  const { isActive } = useMenuItemContext(id);

  const classSet = cx(
    styles.base,
    {
      [styles.menuOpen]: isOpen,
    },
    { [styles.active]: isActive },
  );

  const innerClassSet = cx(styles.content, {
    [styles.active]: isActive,
  });

  return (
    <Transition
      isActive={activeCollectionId !== 'top' && isOpen}
      shouldMountOnEnter={shouldOnlyMountWhenActive}
      shouldUnmountOnExit={shouldOnlyMountWhenActive}
      type="fadeIn"
    >
      <div className={classSet}>
        <div className={innerClassSet} style={{ backgroundColor }}>
          {children}
        </div>
      </div>
    </Transition>
  );
};

export { Panel };
