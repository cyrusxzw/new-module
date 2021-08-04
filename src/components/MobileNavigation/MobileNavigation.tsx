import React, { useState } from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import {
  useEscapeKeyListener,
  useFocusOnFirst,
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import { Transition } from '~/components/Transition';
import { MobileNavigationContextProvider } from './MobileNavigation.context';
import { Header, ListItem, SecondaryNavigation } from './components/';
import type { MobileNavigationType } from './MobileNavigation.types';
import styles from './MobileNavigation.module.css';

const MobileNavigation: MobileNavigationType = ({
  className,
  closedTheme,
  isVisuallyObstructed,
  items,
  header,
  secondaryItems,
  theme,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeCollectionId, setActiveCollectionId] = useState('top');
  const [activeNestedCollectionIds, setActiveNestedCollectionIds] = useState(
    [],
  );
  const currentTheme = useThemeContext(theme, 'dark');
  const [listRef] = useFocusOnFirst(
    isOpen && activeCollectionId === 'top',
    'a:not([tabindex="-1"]), button:not([tabindex="-1"])',
  );
  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);

  useOverflowHidden(isOpen);

  const handleOnOpenClick = () => {
    setIsOpen(true);
  };

  const handleOnCloseClick = () => {
    setActiveCollectionId('top');
    setActiveNestedCollectionIds([]);
    setIsOpen(false);
  };

  useEscapeKeyListener(handleOnCloseClick, !isVisuallyObstructed);

  const handleOnCollectionClick = (id: string) => {
    setActiveCollectionId(id);
  };

  const handleOnNestedCollectionClick = (id: string) => {
    setActiveNestedCollectionIds((currentState) => {
      if (currentState.includes(id)) {
        return currentState.filter((item) => item !== id);
      }

      return [...currentState, id];
    });
  };

  const handleOnBackButtonClick = () => {
    setActiveCollectionId('top');
    setActiveNestedCollectionIds([]);
  };

  const classSet = cx(
    styles.base,
    { [styles.open]: isOpen },
    styles[currentTheme],
    className,
  );

  return (
    <MobileNavigationContextProvider
      activeCollectionId={activeCollectionId}
      activeNestedCollectionIds={activeNestedCollectionIds}
      header={header}
      isOpen={isOpen}
      onBackButtonClick={handleOnBackButtonClick}
      onCollectionClick={handleOnCollectionClick}
      onNestedCollectionClick={handleOnNestedCollectionClick}
    >
      <ThemeContextProvider theme={currentTheme}>
        <div className={styles.presentationalWrapper}>
          <Transition isActive={isOpen} type="fixed">
            <div className={classSet} ref={focusTrapRef}>
              <Header
                closedTheme={closedTheme || currentTheme}
                onCloseClick={handleOnCloseClick}
                onOpenClick={handleOnOpenClick}
              />

              <Transition isActive={isOpen} type="fadeIn">
                <div className={cx(styles.main, { [styles.open]: isOpen })}>
                  <nav
                    aria-hidden={!isOpen}
                    aria-label="navigation"
                    role="navigation"
                  >
                    <ul className={styles.list} ref={listRef}>
                      {items.map((props) => (
                        <ListItem
                          isActive={isOpen && activeCollectionId === 'top'}
                          isTopItem={true}
                          itemProps={props}
                          key={props.id}
                        />
                      ))}
                    </ul>
                  </nav>

                  <SecondaryNavigation
                    hasAriaHidden={!isOpen || activeCollectionId !== 'top'}
                    items={secondaryItems}
                  />
                </div>
              </Transition>
            </div>
          </Transition>
        </div>
      </ThemeContextProvider>
    </MobileNavigationContextProvider>
  );
};

export { MobileNavigation };
