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

  <GlobalNavigationStateContext.Provider> - isGlobalMenuOpen, activeCollectionId
    <GlobalNavigationContext value=props>
     <GlobalNavigation isVisuallyObstructed theme />
     ---
      <CollectionContext>
        <MobileViewContext>
          <MobileView />
        </>
      </>

      <TabletViewContext>
        <TabletView/>
      </>

      <DesktopViewContext
        <DesktopView />
      </>


  context and other props:
    Test IDs

    AuxillaryNavigationContext
      logo >
      search >
      cart >
      menu/hamburger >
      read >
      account >
      stores >
      support >

      Content / Collections /
      Presentation /

    GlobalNavigationContext
      closedTheme? >
      articles >
      isVisuallyObstructed >
      items >
      theme >
      ---
    GlobalNavigationStateContext
      isOpen < updater
      activeCollectionId < updater

    CollectionContext
      _activeNestedCollectionIds < updater
      _onBackButtonClick < updater
      _onCollectionClick < updater
      _onNestedCollectionClick < updater

    MobileViewContext >
      closedTheme

    DesktopViewContext
      _onCollectionClick

    TabletViewContext
      TBA

    Refactor
      // secondaryItems > Actions? Auxillary?

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
