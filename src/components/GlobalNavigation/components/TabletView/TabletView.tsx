import React from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useTabletViewContext } from './TabletView.context';
import { useStickyNav } from '../../GlobalNavigation.hooks';
import {
  useEscapeKeyListener,
  useOnScreen,
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import { Logo } from '../Logo';
import { SecondaryMenu } from './components/SecondaryMenu';
import { PrimaryMenu } from './components/PrimaryMenu';
import type {
  MenuItemNavBarTrackingWithActionType,
  TabletViewType,
} from './TabletView.types';
import styles from './TabletView.module.css';

const TabletView: TabletViewType = ({ className }) => {
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
    setActiveCollectionId,
    setIsOpen,
    stickyNavProps,
    setStickyNavProps,
  } = useGlobalNavigationStateContext();

  const {
    closedClassName,
    openClassName,
    setIsShopOpen,
    closedLogoTheme,
  } = useTabletViewContext();

  const contextTheme = useThemeContext(theme, 'dark');
  const currentTheme = isOpen ? 'dark' : contextTheme;
  const currentCloseLogoTheme = closedLogoTheme || currentTheme;

  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);
  const stickyNavRef = useStickyNav(stickyNavProps, setStickyNavProps);
  const isCompletelyOnScreen = useOnScreen(stickyNavRef, 1, undefined, true);

  useOverflowHidden(isOpen);

  const handleTracking = () =>
    isOpen &&
    trackingCallbacks.tablet.tabletMenuItemClick({
      menuCategory: menuCategoryLabel,
      menuLabel: 'Menu',
      menuSection: 'Navbar',
      menuType: menuType,
      action: 'Close',
    } as MenuItemNavBarTrackingWithActionType);

  const handleOnClose = () => {
    handleTracking();
    setActiveCollectionId('top');
    setIsShopOpen(false);
    setIsOpen(false);
    onClose?.();
  };

  useEscapeKeyListener(handleOnClose, !isVisuallyObstructed);

  const classSet = cx(
    styles.base,
    { [styles.open]: isOpen },
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
    { [closedClassName]: !isOpen },
    { [openClassName]: isOpen },
    { [styles.isLegacyMenu]: isLegacyMenu },
    styles[currentTheme],
    className,
  );

  return (
    <ThemeContextProvider theme={currentTheme}>
      <div className={classSet} ref={focusTrapRef}>
        <PrimaryMenu onClose={handleOnClose} />
        <SecondaryMenu />
      </div>
      {!isLegacyMenu && !isOpen && <Logo closedTheme={currentCloseLogoTheme} />}
      <div
        aria-hidden={true}
        className={styles.absoluteBuffer}
        ref={stickyNavRef}
      />
    </ThemeContextProvider>
  );
};

export { TabletView };
