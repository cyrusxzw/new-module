import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationStateContext,
  useGlobalNavigationContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Transition } from '~/components/Transition';
import { Logo } from '~/components/GlobalNavigation/components/Logo';
import type { SelectionPanelType } from './SelectionPanel.types';
import styles from './SelectionPanel.module.css';

const SelectionPanel: SelectionPanelType = ({ children, isActive = false }) => {
  const { isOpen } = useGlobalNavigationStateContext();
  const currentTheme = useThemeContext(undefined, 'dark');
  const { isLegacyMenu } = useGlobalNavigationContext();

  const classSet = cx(
    styles.base,
    { [styles.active]: isActive },
    styles[currentTheme],
  );

  if (isLegacyMenu) return null;

  return (
    <Transition isActive={isActive} type="fade">
      <div>
        <div className={classSet}>
          {isOpen && <Logo isVisible={isActive} />}
          {children}
        </div>
      </div>
    </Transition>
  );
};

export { SelectionPanel };
