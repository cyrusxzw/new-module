import React from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useDesktopViewContext } from './DesktopView.context';
import { useStickyNav } from '../../GlobalNavigation.hooks';
import {
  useEscapeKeyListener,
  useOnScreen,
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import { Logo } from '../Logo';
import { PrimaryMenu, SecondaryMenu } from './components';
import type {
  DesktopViewType,
  MenuItemNavBarTrackingWithActionType,
} from './DesktopView.types';
import styles from './DesktopView.module.css';

const DesktopView: DesktopViewType = ({ className }) => {
  const {
    isVisuallyObstructed,
    onClose,
    theme,
    isLegacyMenu,
    trackingCallbacks,
  } = useGlobalNavigationContext();

  const {
    isOpen,
    menuType,
    menuCategoryLabel,
    setIsOpen,
    setActiveCollectionId,
    stickyNavProps,
    setStickyNavProps,
  } = useGlobalNavigationStateContext();

  const {
    closedClassName,
    closedLogoTheme,
    openClassName,
  } = useDesktopViewContext();

  const contextTheme = useThemeContext(theme, 'dark');
  const currentTheme = isOpen ? 'dark' : contextTheme;

  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);
  const stickyNavRef = useStickyNav(stickyNavProps, setStickyNavProps);
  const isCompletelyOnScreen = useOnScreen(stickyNavRef, 1, undefined, true);

  const handleTracking = () =>
    isOpen &&
    trackingCallbacks.desktop.desktopMenuItemClickOrHover({
      menuType: menuType,
      menuLabel: 'Menu',
      menuSection: 'Navbar',
      menuCategory: menuCategoryLabel,
      action: 'Close',
    } as MenuItemNavBarTrackingWithActionType);

  const handleOnClose = () => {
    handleTracking();
    setActiveCollectionId('top');
    setIsOpen(false);
    onClose?.();
  };

  useOverflowHidden(isOpen);
  useEscapeKeyListener(handleOnClose, !isVisuallyObstructed);

  const classSet = cx(
    styles.base,
    { [closedClassName]: !isOpen },
    {
      [styles.isVisibleStickyNav]:
        !isCompletelyOnScreen &&
        stickyNavProps.isFixed &&
        !stickyNavProps.isHidden &&
        !isOpen,
    },
    {
      [styles.isInvisibleStickyNav]:
        !isCompletelyOnScreen &&
        stickyNavProps.isFixed &&
        stickyNavProps.isHidden &&
        !isOpen,
    },
    { [styles.isLegacyMenu]: isLegacyMenu },
    { [styles.open]: isOpen },
    { [openClassName]: isOpen },
    styles[currentTheme],
    className,
  );

  return (
    <ThemeContextProvider theme={currentTheme}>
      <div className={classSet} ref={focusTrapRef}>
        <PrimaryMenu onClose={handleOnClose} />
        <SecondaryMenu />
        {!isLegacyMenu && isOpen && <Logo closedTheme={closedLogoTheme} />}
      </div>
      <div
        aria-hidden={true}
        className={styles.absoluteBuffer}
        ref={stickyNavRef}
      />
      {!isLegacyMenu && !isOpen && <Logo closedTheme={closedLogoTheme} />}
    </ThemeContextProvider>
  );
};

export { DesktopView };
