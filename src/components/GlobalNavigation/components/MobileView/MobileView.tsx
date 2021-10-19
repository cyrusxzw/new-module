import React from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import {
  useStickyNav,
  useOpenMenuFromSearch,
} from '../../GlobalNavigation.hooks';
import {
  useEscapeKeyListener,
  useOnScreen,
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import { Transition } from '~/components/Transition';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { ArticleList, Header, PrimaryMenu, SecondaryMenu } from './components';
import { useMobileViewContext } from './MobileView.context';
import type { MobileViewType } from './MobileView.types';
import styles from './MobileView.module.css';

const MobileView: MobileViewType = ({ className }) => {
  const {
    isOpen,
    setActiveCollectionId,
    setIsOpen,
    activeCollectionId,
    stickyNavProps,
    setStickyNavProps,
  } = useGlobalNavigationStateContext();

  const {
    actions,
    collections,
    isVisuallyObstructed,
    isOpenSearchBackToMenu,
    onClose,
    read,
    theme,
  } = useGlobalNavigationContext();

  const {
    setActiveNestedCollectionIds,
    openClassName,
    closedClassName,
  } = useMobileViewContext();

  const currentTheme = useThemeContext(theme, 'dark');
  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);
  const stickyNavRef = useStickyNav(stickyNavProps, setStickyNavProps);
  const isCompletelyOnScreen = useOnScreen(stickyNavRef, 1, undefined, true);

  useOverflowHidden(isOpen);

  const { search } = actions;

  const handleOnClose = () => {
    setActiveCollectionId('top');
    setActiveNestedCollectionIds([]);
    setIsOpen(false);
    onClose?.();
  };

  useEscapeKeyListener(handleOnClose, !isVisuallyObstructed);

  const classSet = cx(
    styles.base,
    { [styles.open]: isOpen },
    {
      [styles.isVisibleStickyNav]:
        !isCompletelyOnScreen &&
        stickyNavProps.isFixed &&
        !stickyNavProps.isHidden &&
        !isOpen,
    },
    {
      [styles.isInvisibleStickyNav]:
        !isCompletelyOnScreen &&
        stickyNavProps.isFixed &&
        stickyNavProps.isHidden &&
        !isOpen,
    },
    { [closedClassName]: !isOpen },
    { [openClassName]: isOpen },
    styles[currentTheme],
    className,
  );

  const secondaryNavigationItems = [
    read,
    actions.account,
    actions.stores,
    actions.support,
  ];

  useOpenMenuFromSearch(isOpenSearchBackToMenu, setActiveCollectionId);

  return (
    <ThemeContextProvider theme={currentTheme}>
      <div className={styles.presentationalWrapper}>
        <Transition isActive={isOpen} type="fixed">
          <div className={classSet} ref={focusTrapRef}>
            <Header onClose={handleOnClose} />
            <Transition isActive={isOpen} type="fadeIn">
              <div className={cx(styles.main, { [styles.open]: isOpen })}>
                <PrimaryMenu
                  isVisible={isOpen && activeCollectionId !== search.id}
                  items={collections}
                />
                <SecondaryMenu items={secondaryNavigationItems} />
                <ArticleList items={read.articles} />
              </div>
            </Transition>
          </div>
        </Transition>
      </div>
      <div
        aria-hidden={true}
        className={styles.absoluteBuffer}
        ref={stickyNavRef}
      />
    </ThemeContextProvider>
  );
};

export { MobileView };
