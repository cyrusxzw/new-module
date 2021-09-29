import React, { useRef } from 'react';
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
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import { Logo } from '../Logo';
import { SecondaryMenu } from './components/SecondaryMenu';
import { PrimaryMenu } from './components/PrimaryMenu';
import type { TabletViewType } from './TabletView.types';
import styles from './TabletView.module.css';

const TabletView: TabletViewType = ({ className }) => {
  const {
    isVisuallyObstructed,
    onClose,
    theme,
    isLegacyMenu,
  } = useGlobalNavigationContext();

  const {
    isOpen,
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
  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);

  const currentTheme = isOpen ? 'dark' : contextTheme;
  const currentCloseLogoTheme = closedLogoTheme || currentTheme;

  const handleOnClose = () => {
    setActiveCollectionId('top');
    setIsShopOpen(false);
    setIsOpen(false);
    onClose?.();
  };

  const stickyNavRef = useRef();

  useStickyNav(stickyNavRef, stickyNavProps, setStickyNavProps);

  useOverflowHidden(isOpen);
  useEscapeKeyListener(handleOnClose, !isVisuallyObstructed);

  const classSet = cx(
    styles.base,
    { [styles.open]: isOpen },
    {
      [styles.isVisibleStickyNav]:
        stickyNavProps.isFixed && !stickyNavProps.isHidden && !isOpen,
    },
    {
      [styles.isInvisibleStickyNav]:
        stickyNavProps.isFixed && stickyNavProps.isHidden && !isOpen,
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
        {/* {!isLegacyMenu && !isOpen && <Logo closedTheme={currentCloseLogoTheme} />} */}
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
