import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMobileViewContext } from '../../MobileView.context';
import { useWindowHasResized } from '~/customHooks';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import { Transition } from '~/components/Transition';
import { Logo } from '~/components/GlobalNavigation/components/Logo';
import type {
  HeaderType,
  MenuItemTrackingWithMobileActionType,
} from './Header.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './Header.module.css';

const Header: HeaderType = ({ onClose }) => {
  const {
    isOpen: isMenuOpen,
    setIsOpen: setIsMenuOpen,
    setMenuType,
    setActiveCollectionId,
    activeCollectionId,
  } = useGlobalNavigationStateContext();

  const { actions, onOpen, trackingCallbacks } = useGlobalNavigationContext();
  const { closedTheme } = useMobileViewContext();
  const currentTheme = useThemeContext(null, 'dark');

  useWindowHasResized();

  const { search, cart, menu } = actions;
  const currentClosedTheme = closedTheme || currentTheme;

  const handleTracking = (
    menuItemTrackingProps: MenuItemTrackingWithMobileActionType,
  ) => {
    trackingCallbacks.mobile.mobileMenuItemClick(menuItemTrackingProps);
  };

  const handleOnSearchClick = (
    menuItemTrackingProps: MenuItemTrackingWithMobileActionType,
  ) => {
    handleTracking(menuItemTrackingProps);
    setMenuType(menuItemTrackingProps.menuType);
    search.onClick();
    setIsMenuOpen(true);
    setActiveCollectionId(search.id);
  };

  const handleOnCartClick = () => cart.onClick();

  const handleOnMenuButtonClick = (
    menuItemTrackingProps: MenuItemTrackingWithMobileActionType,
  ) => {
    if (isMenuOpen) {
      onClose();
    } else {
      handleTracking(menuItemTrackingProps);
      setIsMenuOpen(true);
      onOpen?.();
    }
    setMenuType(menuItemTrackingProps.menuType);
  };

  const classSet = cx(
    styles.base,
    !isMenuOpen ? styles[`${currentClosedTheme}Closed`] : styles[currentTheme],
  );

  return (
    <>
      <nav
        aria-label="header navigation"
        className={classSet}
        role="navigation"
      >
        <ul className={styles.list}>
          <li className={cx(styles.item, styles.itemLogo)}>
            <Logo closedTheme={closedTheme} />
          </li>

          <li className={styles.item}>
            <Button
              className={cx(styles.action, styles.actionSearch)}
              data-testid={'NAV_SEARCH_BTN'}
              dataTestRef={search.dataTestRef ?? 'NAV_SEARCH_BTN'}
              isInline={true}
              onClick={() =>
                handleOnSearchClick({
                  menuCategory: 'None',
                  menuType: 'Search',
                  menuLabel: 'Search',
                  menuSection: 'Navbar',
                  action: 'Click',
                })
              }
              title={search.title}
            >
              <Icon
                className={styles.searchIcon}
                height={16}
                name="search"
                tabIndex={-1}
                width={16}
              />
            </Button>
            <Transition
              isActive={activeCollectionId === search.id}
              shouldMountOnEnter={true}
              shouldUnmountOnExit={true}
              type="slideLeft"
            >
              <div className={cx(compositionStyles.slide, styles.search)}>
                <search.component />
              </div>
            </Transition>
          </li>

          <li className={styles.item}>
            <Button
              className={cx(
                styles.action,
                styles.actionCart,
                compositionStyles.ornamentalWrapper,
              )}
              data-testid={'NAV_CART_BTN'}
              dataTestRef={cart.dataTestRef ?? 'NAV_CART_BTN'}
              isInline={true}
              onClick={handleOnCartClick}
              title={cart.title}
            >
              <span
                className={cx(
                  compositionStyles.ornamentalHover,
                  styles.ornamentalHover,
                )}
              >
                {cart.label}
              </span>
            </Button>
          </li>

          <li className={cx(styles.item, styles.itemMenu)}>
            <Button
              aria={{ haspopup: true, expanded: isMenuOpen }}
              className={cx(styles.action, styles.actionMenu, {
                [styles.openState]: isMenuOpen,
              })}
              data-testid={'NAV_MOBILE_MENU_BTN'}
              dataTestRef={menu.dataTestRef ?? 'NAV_MOBILE_MENU_BTN'}
              isInline={true}
              onClick={() =>
                handleOnMenuButtonClick({
                  menuCategory: 'None',
                  menuType: 'Shop',
                  menuLabel: 'Menu',
                  menuSection: 'Navbar',
                  action: 'Open',
                })
              }
              title={isMenuOpen ? menu.closeTitle : menu.title}
            >
              <ScreenReaderOnly>
                {isMenuOpen ? menu.closeLabel : menu.label}
              </ScreenReaderOnly>
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Header };
