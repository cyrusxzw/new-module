/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import { CloseButton } from '../CloseButton';
import { CollectionLayout } from '../CollectionLayout';
import { MenuItem } from '../MenuItem';
import { Panel } from '../Panel';
import type {
  PrimaryMenuType,
  MenuItemTrackingWithActionType,
} from './PrimaryMenu.types';
import styles from './PrimaryMenu.module.css';

const PrimaryMenu: PrimaryMenuType = ({ onClose }) => {
  const {
    isOpen,
    setIsOpen,
    activeCollectionId,
    setActiveCollectionId,
    setMenuCategoryLabel,
    setMenuType,
  } = useGlobalNavigationStateContext();

  const {
    actions: { search, stores },
    read,
    collections,
    onOpen,
    trackingCallbacks,
  } = useGlobalNavigationContext();

  const currentTheme = useThemeContext(undefined, 'dark');

  /* If the state of the menu is open, but no collection is active, close the menu */
  if (isOpen && activeCollectionId === 'top') {
    setIsOpen(false);
  }

  /* TODO{issue-12-nonFixture}: Add english menulabel & change var names for tracking */
  const handleOnCollectionClick = (
    id: string,
    menuItemTrackingProps: MenuItemTrackingWithActionType,
    callback?: () => void,
  ) => {
    setActiveCollectionId(id);
    setIsOpen(id !== 'top');
    setMenuCategoryLabel(menuItemTrackingProps.menuCategory);
    setMenuType(menuItemTrackingProps.menuType);

    callback?.();
    if (!isOpen) {
      onOpen?.();
    }
  };

  /* Handles both click + hover tracking */
  const handleTracking = (
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    trackingCallbacks.desktop.menuItemClick(menuItemTrackingProps);
  };

  /* Handles Collections other than {Stores} & {Search} */
  const handleOnOtherCollectionClick = (
    id: string,
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    handleTracking(menuItemTrackingProps);
    handleOnCollectionClick(id, menuItemTrackingProps);
  };

  const handleOnStoresClick = (
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    handleTracking(menuItemTrackingProps);
    handleOnCollectionClick(stores.id, menuItemTrackingProps, stores.onClick);
  };

  const handleOnSearchClick = (
    menuItemTrackingProps: MenuItemTrackingWithActionType,
  ) => {
    handleTracking(menuItemTrackingProps);
    handleOnCollectionClick(search.id, menuItemTrackingProps, search.onClick);
  };

  const StoresComponent = stores.component;
  const SearchComponent = search.component;

  const classSet = cx(styles.base, styles[currentTheme]);

  return (
    <nav aria-label="primary" className={classSet} role="navigation">
      <ul className={styles.list}>
        {collections.map(
          ({
            id,
            label,
            items,
            backgroundColor,
            image,
            topLevelCollectionLabel,
            title,
            ...rest
          }) => {
            return (
              <MenuItem
                dataTestRef={`NAV_${id.toUpperCase()}`}
                id={id}
                key={id}
                label={label}
                onClick={() =>
                  /* TODO{issue-13-nonFixture}: Explain why 'Shop' hardcoded here */
                  handleOnOtherCollectionClick(id, {
                    menuType: 'Shop',
                    menuLabel: label,
                    menuCategory: label,
                    action: isOpen ? 'Click' : 'Open',
                  })
                }
                onMouseEnter={() =>
                  handleTracking({
                    menuType: 'Shop',
                    menuLabel: label,
                    menuCategory: label,
                    action: 'Hover',
                  })
                }
                title={title}
                type="trigger"
              >
                <Panel backgroundColor={backgroundColor}>
                  <CollectionLayout
                    image={image}
                    items={items}
                    menuType={'Shop'}
                    promotion={rest.type === 'collection' && rest.promotion}
                    topLevelCollectionLabel={topLevelCollectionLabel}
                    type={rest.type}
                  />
                </Panel>
              </MenuItem>
            );
          },
        )}

        <MenuItem
          dataTestRef={`NAV_${read.id.toUpperCase()}`}
          id={read.id}
          label={read.label}
          onClick={() =>
            /* TODO{issue-13-nonFixture}: Explain why 'Read' hardcoded here */
            handleOnOtherCollectionClick(read.id, {
              menuType: 'Read',
              menuLabel: read.label,
              menuCategory: read.label,
              action: isOpen ? 'Click' : 'Open',
            })
          }
          onMouseEnter={() =>
            handleTracking({
              menuType: 'Read',
              menuLabel: read.label,
              menuCategory: read.label,
              action: 'Hover',
            })
          }
          title={read.title}
          type="trigger"
        >
          <Panel backgroundColor={read.backgroundColor}>
            <CollectionLayout
              articles={read.articles}
              articlesListHeading={read.articlesListHeading}
              image={read.image}
              items={read.items}
              menuType={'Read'}
              topLevelCollectionLabel={read.topLevelCollectionLabel}
              type={read.type}
            />
          </Panel>
        </MenuItem>

        <MenuItem
          dataTestRef={stores.dataTestRef ?? 'NAV_STORES'}
          id={stores.id}
          label={stores.label}
          /* TODO{issue-13-nonFixture}: Explain why 'Stores' hardcoded here */
          onClick={() =>
            handleOnStoresClick({
              menuType: 'Stores',
              menuLabel: stores.label,
              menuCategory: stores.label,
              action: isOpen ? 'Click' : 'Open',
            })
          }
          onMouseEnter={() =>
            handleTracking({
              menuType: 'Stores',
              menuLabel: stores.label,
              menuCategory: stores.label,
              action: 'Hover',
            })
          }
          title={stores.title}
          type="trigger"
        >
          <Panel shouldOnlyMountWhenActive={true}>
            <StoresComponent />
          </Panel>
        </MenuItem>

        <MenuItem
          dataTestRef={search.dataTestRef ?? 'NAV_SEARCH'}
          id={search.id}
          label={
            <>
              <Icon
                className={styles.searchIcon}
                height={18}
                name="search"
                tabIndex={-1}
                width={18}
              />
              <ScreenReaderOnly>{search.label}</ScreenReaderOnly>
            </>
          }
          /* TODO{issue-13-nonFixture}: Explain why 'Search' hardcoded here */
          onClick={() =>
            handleOnSearchClick({
              menuType: 'Search',
              menuLabel: search.label,
              menuCategory: search.label,
              action: isOpen ? 'Click' : 'Open',
            })
          }
          onMouseEnter={() =>
            handleTracking({
              menuType: 'Search',
              menuLabel: search.label,
              menuCategory: search.label,
              action: 'Hover',
            })
          }
          title={search.title}
          type="trigger"
        >
          <Panel shouldOnlyMountWhenActive={true}>
            <SearchComponent />
          </Panel>
        </MenuItem>

        <li className={styles.closeMenueItem}>
          <CloseButton onClose={onClose} />
        </li>
      </ul>
    </nav>
  );
};

export { PrimaryMenu };
