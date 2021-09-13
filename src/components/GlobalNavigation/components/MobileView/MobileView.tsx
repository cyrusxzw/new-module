import React from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import {
  useEscapeKeyListener,
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
  } = useGlobalNavigationStateContext();

  const {
    actions,
    collections,
    isVisuallyObstructed,
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
    </ThemeContextProvider>
  );
};

export { MobileView };
