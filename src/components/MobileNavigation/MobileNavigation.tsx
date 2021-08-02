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
  onCartClick,
  onLoginClick,
  secondaryItems,
  theme,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeId, setActiveId] = useState('top');
  const [activeNestedIds, setActiveNestedIds] = useState([]);
  const currentTheme = useThemeContext(theme, 'dark');
  const [listRef] = useFocusOnFirst(
    isOpen && activeId === 'top',
    'a:not([tabindex="-1"]), button:not([tabindex="-1"])',
  );
  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);

  useOverflowHidden(isOpen);

  const handleOnOpenClick = () => {
    setIsOpen(true);
  };

  const handleOnCloseClick = () => {
    setActiveId('top');
    setActiveNestedIds([]);
    setIsOpen(false);
  };

  useEscapeKeyListener(handleOnCloseClick, !isVisuallyObstructed);

  const handleOnClick = (id: string) => {
    setActiveId(id);
  };

  const handleOnNestedClick = (id: string) => {
    setActiveNestedIds((currentState) => {
      if (currentState.includes(id)) {
        return currentState.filter((item) => item !== id);
      }

      return [...currentState, id];
    });
  };

  const handleOnBackButtonClick = () => {
    setActiveId('top');
    setActiveNestedIds([]);
  };

  const classSet = cx(
    styles.base,
    { [styles.open]: isOpen },
    styles[currentTheme],
    className,
  );

  return (
    <MobileNavigationContextProvider
      activeId={activeId}
      activeNestedIds={activeNestedIds}
      onBackButtonClick={handleOnBackButtonClick}
      onClick={handleOnClick}
      onNestedClick={handleOnNestedClick}
    >
      <ThemeContextProvider theme={currentTheme}>
        <div className={styles.presentationalWrapper}>
          <Transition isActive={isOpen} type="fixed">
            <div className={classSet} ref={focusTrapRef}>
              <Header
                closedTheme={closedTheme || currentTheme}
                isMenuOpen={isOpen}
                onCartClick={onCartClick}
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
                          isActive={isOpen && activeId === 'top'}
                          isTopItem={true}
                          itemProps={props}
                          key={props.id}
                        />
                      ))}
                    </ul>
                  </nav>

                  <SecondaryNavigation
                    hasAriaHidden={!isOpen || activeId !== 'top'}
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
