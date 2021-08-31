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
import { Logo } from '../Logo';
import { MenuItem } from '../MenuItem';
import { Panel } from '../Panel';
import type { PrimaryNavigationType } from './PrimaryNavigation.types';
import styles from './PrimaryNavigation.module.css';

const PrimaryNavigation: PrimaryNavigationType = ({ onClose }) => {
  const {
    isOpen,
    setIsOpen,
    setActiveCollectionId,
  } = useGlobalNavigationStateContext();

  const {
    actions: { search, stores },
    read,
    collections,
    onOpen,
  } = useGlobalNavigationContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const handleOnCollectionClick = (id: string, callback?: () => void) => {
    setActiveCollectionId(id);
    setIsOpen(id !== 'top');
    callback?.();
    if (!isOpen) {
      onOpen?.();
    }
  };

  const handleOnSearchClick = () =>
    handleOnCollectionClick(search.id, search.onClick);

  const handleOnStoresClick = () =>
    handleOnCollectionClick(stores.id, stores.onClick);

  const SearchComponent = search.component;
  const StoresComponent = stores.component;

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
          dataTestRef={`NAV_${read.id.toUpperCase()}`}
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
          dataTestRef={stores.dataTestRef ?? 'NAV_STORES'}
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

        <li>
          <Logo />
        </li>
      </ul>
    </nav>
  );
};

export { PrimaryNavigation };
