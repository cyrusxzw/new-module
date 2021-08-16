import React, { useState } from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import {
  useEscapeKeyListener,
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import { Transition } from '~/components/Transition';
import { MobileNavigationContextProvider } from './MobileNavigation.context';
import {
  ArticleList,
  Header,
  PrimaryNavigation,
  SecondaryNavigation,
} from './components';
import type { MobileNavigationType } from './MobileNavigation.types';
import styles from './MobileNavigation.module.css';

const MobileNavigation: MobileNavigationType = ({
  articles,
  className,
  closedTheme,
  isVisuallyObstructed,
  items,
  header,
  secondaryItems,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCollectionId, setActiveCollectionId] = useState('top');
  const [activeNestedCollectionIds, setActiveNestedCollectionIds] = useState(
    [],
  );
  const currentTheme = useThemeContext(theme, 'dark');
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

  /**

  Expose:
    TEST IDS

    const foo = document.querySelector('[data-component="NavMenu"]')
    Array.from(foo.querySelectorAll('[data-test-ref]')).forEach((item) => console.log(item.dataset))

    HeaderContext

    GlobalNavigationContext
      articles
      isVisuallyObstructed
      items
      secondaryItems
      theme
      isOpen < updater
      activeCollectionId < updater

    MobileNavigationContext
      closedTheme
      theme
      activeNestedCollectionIds
      onBackButtonClick
      onCollectionClick
      onNestedCollectionClick

    DesktopNavigationContext
      TBA

    TabletNavigationContext
      TBA

  */

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
                  <PrimaryNavigation isVisible={isOpen} items={items} />

                  <SecondaryNavigation
                    isVisible={isOpen && activeCollectionId === 'top'}
                    items={secondaryItems}
                  />

                  <ArticleList
                    isVisible={isOpen && activeCollectionId === 'top'}
                    items={articles}
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
