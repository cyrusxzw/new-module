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
import type { PrimaryMenuType } from './PrimaryMenu.types';
import styles from './PrimaryMenu.module.css';

const PrimaryMenu: PrimaryMenuType = ({ onClose }) => {
  const {
    isOpen,
    setIsOpen,
    activeCollectionId,
    setActiveCollectionId,
  } = useGlobalNavigationStateContext();

  const {
    actions: { search, stores },
    read,
    collections,
    onOpen,
  } = useGlobalNavigationContext();

  const currentTheme = useThemeContext(undefined, 'dark');

  /* If the state of the menu is open, but no collection is active, close the menu */
  if (isOpen && activeCollectionId === 'top') {
    setIsOpen(false);
  }

  const handleOnCollectionClick = (id: string, callback?: () => void) => {
    setActiveCollectionId(id);
    setIsOpen(id !== 'top');

    callback?.();
    if (!isOpen) {
      onOpen?.();
    }
  };

  const handleOnSearchClick = () => {
    handleOnCollectionClick(search.id, search.onClick);
  };

  const handleOnStoresClick = () => {
    handleOnCollectionClick(stores.id, stores.onClick);
  };

  const SearchComponent = search.component;
  const StoresComponent = stores.component;

  const classSet = cx(styles.base, styles[currentTheme]);

  return (
    <nav
      aria-label="primary"
      className={classSet}
      data-test-ref="NAV_PRIMARY"
      role="navigation"
    >
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
                dataTestId={`NAV_${id.toUpperCase()}`}
                dataTestRef="NAV_PRIMARY_BUTTON"
                id={id}
                key={id}
                label={label}
                onClick={() => handleOnCollectionClick(id)}
                title={title}
                type="trigger"
              >
                <Panel backgroundColor={backgroundColor}>
                  <CollectionLayout
                    image={image}
                    items={items}
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
          dataTestId={`NAV_${read.id.toUpperCase()}`}
          dataTestRef="NAV_PRIMARY_BUTTON"
          id={read.id}
          label={read.label}
          onClick={() => handleOnCollectionClick(read.id)}
          title={read.title}
          type="trigger"
        >
          <Panel backgroundColor={read.backgroundColor}>
            <CollectionLayout
              articles={read.articles}
              articlesListHeading={read.articlesListHeading}
              image={read.image}
              items={read.items}
              topLevelCollectionLabel={read.topLevelCollectionLabel}
              type={read.type}
            />
          </Panel>
        </MenuItem>

        <MenuItem
          dataTestId={stores.dataTestRef ?? 'NAV_STORES'}
          dataTestRef="NAV_PRIMARY_BUTTON"
          id={stores.id}
          label={stores.label}
          onClick={handleOnStoresClick}
          title={stores.title}
          type="trigger"
        >
          <Panel shouldOnlyMountWhenActive={true}>
            <StoresComponent />
          </Panel>
        </MenuItem>

        <MenuItem
          dataTestId={search.dataTestRef ?? 'NAV_SEARCH'}
          dataTestRef="NAV_PRIMARY_BUTTON"
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
          onClick={handleOnSearchClick}
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
