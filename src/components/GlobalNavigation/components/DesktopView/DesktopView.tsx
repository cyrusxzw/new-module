import React from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import {
  useEscapeKeyListener,
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { PrimaryNavigation, SecondaryNavigation } from './components';
import type { DesktopViewType } from './DesktopView.types';
import styles from './DesktopView.module.css';

const DesktopView: DesktopViewType = ({ className }) => {
  const {
    isOpen,
    setIsOpen,
    setActiveCollectionId,
  } = useGlobalNavigationStateContext();
  const { isVisuallyObstructed, theme } = useGlobalNavigationContext();
  const contextTheme = useThemeContext(theme, 'dark');
  const currentTheme = isOpen ? 'dark' : contextTheme;
  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);

  const handleOnClose = () => {
    setActiveCollectionId('top');
    setIsOpen(false);
  };

  useOverflowHidden(isOpen);
  useEscapeKeyListener(handleOnClose, !isVisuallyObstructed);

  const classSet = cx(
    styles.base,
    {
      [styles.open]: isOpen,
    },
    styles[currentTheme],
    className,
  );

  return (
    <ThemeContextProvider theme={currentTheme}>
      <div className={classSet} ref={focusTrapRef}>
        <PrimaryNavigation onClose={handleOnClose} />
        <SecondaryNavigation />
      </div>

      <div aria-hidden={true} className={styles.absoluteBuffer} />
    </ThemeContextProvider>
  );
};

export { DesktopView };
