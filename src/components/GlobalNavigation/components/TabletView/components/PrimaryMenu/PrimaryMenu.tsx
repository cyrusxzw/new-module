/* eslint-disable max-lines */
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
  MenuItemTrackingWithActionType,
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
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    trackingCallbacks.tablet.tabletMenuItemClick(menuItemTrackingProps);
    setMenuCategoryLabel(menuItemTrackingProps.menuCategory);
    setMenuType(menuItemTrackingProps.menuType);
  };

  const handleOnShopClick = (
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    /* Add Tracking here */
    handleTracking(menuItemTrackingProps);
    setIsShopOpen(true);
    handleOnCollectionClick('top', shop.onClick);
  };

  const handleOnReadClick = (
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    /* Add Tracking here */
    handleTracking(menuItemTrackingProps);
    setIsShopOpen(false);
    handleOnCollectionClick(read.id);
  };

  const handleOnStoresClick = (
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    /* Add Tracking here */
    handleTracking(menuItemTrackingProps);
    setIsShopOpen(false);
    handleOnCollectionClick(stores.id, stores.onClick);
  };

  const handleOnSearchClick = (
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    /* Add Tracking here */
    handleTracking(menuItemTrackingProps);
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
                menuType: 'Shop',
                menuLabel: shop.label,
                menuCategory: shop.label,
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
                menuType: 'Read',
                menuLabel: read.label,
                menuCategory: read.label,
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
                menuType: 'Stores',
                menuLabel: stores.label,
                menuCategory: stores.label,
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
                menuType: 'Search',
                menuLabel: search.label,
                menuCategory: search.label,
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
