import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useTabletViewContext } from '../../TabletView.context';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import { Transition } from '~/components/Transition';
import { SelectionPanel } from '../SelectionPanel';
import { DetailsPanel } from '../DetailsPanel';
import { MenuItem } from '../MenuItem';
import { SupportMenu } from '../SupportMenu';
import { ReadMenu } from '../ReadMenu';
import { ArticleLayout } from '../ArticleLayout';
import { TopLevelCollectionLayout } from '../TopLevelCollectionLayout';
import type {
  PrimaryMenuType,
  MenuItemNavBarTrackingWithActionType,
} from './PrimaryMenu.types';
import compositionStyles from '../../TabletView.module.css';
import styles from './PrimaryMenu.module.css';

// eslint-disable-next-line max-lines-per-function
const PrimaryMenu: PrimaryMenuType = ({ onClose }) => {
  const {
    actions: { search, stores, menu, shop },
    read,
    onOpen,
    trackingCallbacks,
  } = useGlobalNavigationContext();

  const {
    activeCollectionId,
    isOpen,
    setActiveCollectionId,
    setIsOpen,
    setMenuCategoryLabel,
    setMenuType,
  } = useGlobalNavigationStateContext();

  const { isShopOpen, setIsShopOpen } = useTabletViewContext();

  const currentTheme = useThemeContext(undefined, 'dark');

  const closeButtonSet = cx(compositionStyles.element, {
    [compositionStyles.menuOpen]: isOpen,
    [compositionStyles.menuClosed]: !isOpen,
  });

  const handleOnCollectionClick = (id: string, callback?: () => void) => {
    setActiveCollectionId(id);

    if (!isOpen) {
      setIsOpen(true);
      onOpen?.();
    }

    callback?.();
  };

  const handleTracking = (
    menuItemNavBarProps: MenuItemNavBarTrackingWithActionType,
  ) => {
    trackingCallbacks.tablet.tabletMenuItemClick(menuItemNavBarProps);
    setMenuCategoryLabel(menuItemNavBarProps.menuLabel);
    setMenuType(menuItemNavBarProps.menuType);
  };

  const handleOnShopClick = (
    menuItemNavBarProps: MenuItemNavBarTrackingWithActionType,
  ) => {
    handleTracking(menuItemNavBarProps);
    setIsShopOpen(true);
    handleOnCollectionClick('top', shop.onClick);
  };

  const handleOnReadClick = (
    menuItemNavBarProps: MenuItemNavBarTrackingWithActionType,
  ) => {
    handleTracking(menuItemNavBarProps);
    setIsShopOpen(false);
    handleOnCollectionClick(read.id);
  };

  const handleOnStoresClick = (
    menuItemNavBarProps: MenuItemNavBarTrackingWithActionType,
  ) => {
    handleTracking(menuItemNavBarProps);
    setIsShopOpen(false);
    handleOnCollectionClick(stores.id, stores.onClick);
  };

  const handleOnSearchClick = (
    menuItemNavBarProps: MenuItemNavBarTrackingWithActionType,
  ) => {
    handleTracking(menuItemNavBarProps);
    setIsShopOpen(false);
    handleOnCollectionClick(search.id, search.onClick);
  };

  const SearchComponent = search.component;
  const StoresComponent = stores.component;

  return (
    <nav
      aria-label="primary"
      className={compositionStyles[currentTheme]}
      role="navigation"
    >
      <ul className={compositionStyles.menuList}>
        <MenuItem isActive={isShopOpen && isOpen}>
          <Button
            aria={{
              haspopup: true,
              expanded: isShopOpen && isOpen,
            }}
            className={compositionStyles.element}
            dataTestRef={shop.dataTestRef}
            id={shop.id}
            isInline={true}
            onClick={() =>
              handleOnShopClick({
                menuCategory: 'None',
                menuLabel: shop.id,
                menuSection: 'Navbar',
                menuType: 'Shop',
                action: isOpen ? 'Click' : 'Open',
              })
            }
            title={shop.title}
          >
            {shop.label}
          </Button>

          <SelectionPanel isActive={isShopOpen && isOpen}>
            <TopLevelCollectionLayout />
            <SupportMenu isVisible={isShopOpen && isOpen} />

            <DetailsPanel
              isActive={isShopOpen && isOpen && activeCollectionId === 'top'}
            >
              <ArticleLayout
                isVisible={isShopOpen && isOpen && activeCollectionId === 'top'}
              />
            </DetailsPanel>
          </SelectionPanel>
        </MenuItem>
        <MenuItem isActive={activeCollectionId === read.id}>
          <Button
            aria={{
              expanded: activeCollectionId === read.id,
              haspopup: true,
            }}
            className={compositionStyles.element}
            dataTestRef={read.dataTestRef ?? 'NAV_READ'}
            id={read.id}
            isInline={true}
            onClick={() =>
              handleOnReadClick({
                menuCategory: 'None',
                menuLabel: read.id,
                menuSection: 'Navbar',
                menuType: 'Read',
                action: isOpen ? 'Click' : 'Open',
              })
            }
            title={read.title}
          >
            {read.label}
          </Button>
          <SelectionPanel isActive={isOpen && activeCollectionId === read.id}>
            <ReadMenu />

            <DetailsPanel isActive={activeCollectionId === read.id}>
              <ArticleLayout
                isVisible={isOpen && activeCollectionId === read.id}
              />
            </DetailsPanel>
          </SelectionPanel>
        </MenuItem>

        <MenuItem isActive={activeCollectionId === stores.id}>
          <Button
            aria={{
              haspopup: true,
              expanded: activeCollectionId === stores.id,
            }}
            className={compositionStyles.element}
            dataTestRef={stores.dataTestRef ?? 'NAV_STORES'}
            id={stores.id}
            isInline={true}
            onClick={() =>
              handleOnStoresClick({
                menuCategory: 'None',
                menuLabel: stores.id,
                menuSection: 'Navbar',
                menuType: 'Stores',
                action: isOpen ? 'Click' : 'Open',
              })
            }
            title={stores.title}
          >
            {stores.label}
          </Button>

          <SelectionPanel isActive={isOpen && activeCollectionId === stores.id}>
            <StoresComponent />
          </SelectionPanel>
        </MenuItem>

        <MenuItem isActive={activeCollectionId === search.id}>
          <Button
            aria={{
              haspopup: true,
              expanded: activeCollectionId === search.id,
            }}
            className={compositionStyles.element}
            dataTestRef={search.dataTestRef ?? 'NAV_SEARCH'}
            id={search.id}
            isInline={true}
            onClick={() =>
              handleOnSearchClick({
                menuCategory: 'None',
                menuLabel: search.id,
                menuSection: 'Navbar',
                menuType: 'Search',
                action: isOpen ? 'Click' : 'Open',
              })
            }
            title={search.title}
          >
            <>
              <Icon
                className={styles.searchIcon}
                height={18}
                name="search"
                tabIndex={-1}
                theme={currentTheme}
                width={18}
              />
              <ScreenReaderOnly>{search.label}</ScreenReaderOnly>
            </>
          </Button>
          <SelectionPanel isActive={isOpen && activeCollectionId === search.id}>
            <SearchComponent />
          </SelectionPanel>
        </MenuItem>

        <MenuItem>
          <Transition isActive={isOpen} type="fade">
            <div>
              <Button
                className={closeButtonSet}
                dataTestRef="NAV_MENU_CLOSE"
                isInline={true}
                onClick={onClose}
                tabIndex={!isOpen ? -1 : null}
                title={menu.closeTitle}
              >
                {menu.closeLabel}{' '}
                <Icon
                  aria={{ hidden: true }}
                  className={styles.icon}
                  height={10}
                  name="close"
                  width={10}
                />
              </Button>
            </div>
          </Transition>
        </MenuItem>
      </ul>
    </nav>
  );
};

export { PrimaryMenu };
