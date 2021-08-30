import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import {
  CloseButton,
  CollectionLayout,
  Logo,
  MenuItem,
  Panel,
} from '~/components/GlobalNavigation/components/DesktopView/components';
import type { PrimaryNavigationType } from './PrimaryNavigation.types';
import styles from './PrimaryNavigation.module.css';

const PrimaryNavigation: PrimaryNavigationType = ({ onClose }) => {
  const {
    setIsOpen,
    setActiveCollectionId,
  } = useGlobalNavigationStateContext();
  const { actions, read, collections } = useGlobalNavigationContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const handleOnCollectionClick = (id: string, callback?: () => void) => {
    setActiveCollectionId(id);
    setIsOpen(id !== 'top');
    callback?.();
  };

  const SearchComponent = actions.search.component;
  const StoresComponent = actions.visit.component;

  const classSet = cx(styles.base, styles[currentTheme]);

  return (
    <ul className={classSet}>
      {[...collections].map(
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
        <Panel backgroundColor={read.backgroundColor} id={read.id}>
          <CollectionLayout
            articles={read.articles}
            articlesListHeading={read.articlesListHeading}
            id={read.id}
            image={read.image}
            items={read.items}
            topLevelCollectionLabel={read.topLevelCollectionLabel}
            type={read.type}
          />
        </Panel>
      </MenuItem>

      <MenuItem
        dataTestRef={actions.visit.dataTestRef ?? 'NAV_SEARCH'}
        id={actions.visit.id}
        label={actions.visit.label}
        onClick={() =>
          handleOnCollectionClick(actions.visit.id, actions.visit.onClick)
        }
        title={actions.visit.title}
        type="trigger"
      >
        <Panel id={actions.visit.id} shouldOnlyMountWhenActive={true}>
          <StoresComponent />
        </Panel>
      </MenuItem>

      <MenuItem
        dataTestRef={actions.search.dataTestRef ?? 'NAV_SEARCH'}
        id={actions.search.id}
        label={
          <>
            <Icon
              className={styles.searchIcon}
              height={18}
              name="search"
              tabIndex={-1}
              width={18}
            />
            <ScreenReaderOnly>{actions.search.label}</ScreenReaderOnly>
          </>
        }
        onClick={() =>
          handleOnCollectionClick(actions.search.id, actions.search.onClick)
        }
        title={actions.search.title}
        type="trigger"
      >
        <Panel id={actions.search.id} shouldOnlyMountWhenActive={true}>
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
  );
};

export { PrimaryNavigation };
