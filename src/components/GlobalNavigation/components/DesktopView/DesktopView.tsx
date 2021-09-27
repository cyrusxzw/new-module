import React, { useRef } from 'react';
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
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import { Logo } from '../Logo';
import { PrimaryMenu, SecondaryMenu } from './components';
import type { DesktopViewType } from './DesktopView.types';
import styles from './DesktopView.module.css';

const DesktopView: DesktopViewType = ({ className }) => {
  const {
    isVisuallyObstructed,
    onClose,
    theme,
    isLegacyMenu,
  } = useGlobalNavigationContext();

  const {
    isOpen,
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

  const stickyNavRef = useRef();

  useStickyNav(stickyNavRef, stickyNavProps, setStickyNavProps);

  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);
  const contextTheme = useThemeContext(theme, 'dark');

  const handleOnClose = () => {
    setActiveCollectionId('top');
    setIsOpen(false);
    onClose?.();
  };

  useOverflowHidden(isOpen);
  useEscapeKeyListener(handleOnClose, !isVisuallyObstructed);

  const currentTheme = isOpen ? 'dark' : contextTheme;

  const classSet = cx(
    styles.base,
    { [closedClassName]: !isOpen },
    {
      [styles.isVisibleStickyNav]:
        stickyNavProps.isFixed && !stickyNavProps.isHidden && !isOpen,
    },
    {
      [styles.isInvisibleStickyNav]:
        stickyNavProps.isFixed && stickyNavProps.isHidden && !isOpen,
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
