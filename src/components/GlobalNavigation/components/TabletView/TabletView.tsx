import React from 'react';
import cx from 'classnames';
import { ThemeContextProvider, useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useTabletViewContext } from './TabletView.context';
import {
  useEscapeKeyListener,
  useOverflowHidden,
  useTrapFocus,
} from '~/customHooks';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import { Transition } from '~/components/Transition';
import { Logo } from '../DesktopView/components/Logo';
import { ArticleList } from './components/ArticleList';
import { SelectionPanel } from './components/SelectionPanel';
import { DetailsPanel } from './components/DetailsPanel';
import { MenuItem } from './components/MenuItem';
import { SecondaryMenu } from './components/SecondaryMenu';
import { SupportMenu } from './components/SupportMenu';
import { ReadMenu } from './components/ReadMenu';
import { TopLevelCollectionLayout } from './components/TopLevelCollectionLayout';
import type { TabletViewType } from './TabletView.types';
import styles from './TabletView.module.css';

const TabletView: TabletViewType = ({ className }) => {
  const {
    actions: { search, stores, menu, shop },
    isVisuallyObstructed,
    onClose,
    onOpen,
    read,
    theme,
  } = useGlobalNavigationContext();

  const {
    activeCollectionId,
    isOpen,
    setActiveCollectionId,
    setIsOpen,
  } = useGlobalNavigationStateContext();

  const {
    closedClassName,
    openClassName,
    setIsShopOpen,
    isShopOpen,
  } = useTabletViewContext();

  const contextTheme = useThemeContext(theme, 'dark');
  const [focusTrapRef] = useTrapFocus(isOpen && !isVisuallyObstructed);

  const currentTheme = isOpen ? 'dark' : contextTheme;

  const handleOnCollectionClick = (id: string, callback?: () => void) => {
    setActiveCollectionId(id);

    if (!isOpen) {
      setIsOpen(true);
      onOpen?.();
    }

    callback?.();
  };

  const handleOnClose = () => {
    setActiveCollectionId('top');
    setIsShopOpen(false);
    setIsOpen(false);
    onClose?.();
  };

  useOverflowHidden(isOpen);
  useEscapeKeyListener(handleOnClose, !isVisuallyObstructed);

  const handleOnShopClick = () => {
    setIsShopOpen(true);
    handleOnCollectionClick('top', shop.onClick);
  };

  const handleOnReadClick = () => {
    setIsShopOpen(false);
    handleOnCollectionClick(read.id);
  };

  const handleOnStoresClick = () => {
    setIsShopOpen(false);
    handleOnCollectionClick(stores.id, stores.onClick);
  };

  const handleOnSearchClick = () => {
    setIsShopOpen(false);
    handleOnCollectionClick(search.id, search.onClick);
  };

  const classSet = cx(
    styles.base,
    { [styles.open]: isOpen },
    { [closedClassName]: !isOpen },
    { [openClassName]: isOpen },
    styles[currentTheme],
    className,
  );

  const SearchComponent = search.component;
  const StoresComponent = stores.component;

  const ArticlesLayout = ({ isVisible = true }) => (
    <>
      <Hyperlink
        className={cx(styles.collectionItemLabel, styles.ornamentalWrapper)}
        url={read.baseUrl}
      >
        <span className={styles.ornamentalHover}>
          {read.topLevelCollectionLabel}
        </span>
      </Hyperlink>

      <small className={styles.articlesListHeading}>
        {read.articlesListHeading}
      </small>

      <ArticleList isVisible={isVisible} items={read.articles} />
    </>
  );

  return (
    <ThemeContextProvider theme={currentTheme}>
      <div className={classSet} ref={focusTrapRef}>
        <nav aria-label="primary" role="navigation">
          <ul className={styles.menuList}>
            <MenuItem isActive={isShopOpen}>
              <Button
                aria={{
                  haspopup: true,
                  expanded: isShopOpen,
                }}
                className={styles.element}
                dataTestRef={shop.dataTestRef}
                id={shop.id}
                isInline={true}
                onClick={handleOnShopClick}
                title={shop.title}
              >
                {shop.label}
              </Button>

              <SelectionPanel isActive={isShopOpen && isOpen}>
                <TopLevelCollectionLayout />

                <SupportMenu />

                <DetailsPanel
                  isActive={
                    isShopOpen && isOpen && activeCollectionId === 'top'
                  }
                >
                  <ArticlesLayout
                    isVisible={
                      isShopOpen && isOpen && activeCollectionId === 'top'
                    }
                  />
                </DetailsPanel>
              </SelectionPanel>
            </MenuItem>
            <MenuItem isActive={activeCollectionId === read.id}>
              <Button
                aria={{
                  expanded: activeCollectionId === read.id,
                  haspopup: true,
                }}
                className={styles.element}
                dataTestRef={read.dataTestRef ?? 'NAV_READ'}
                id={read.id}
                isInline={true}
                onClick={handleOnReadClick}
                title={read.title}
              >
                {read.label}
              </Button>
              <SelectionPanel
                isActive={isOpen && activeCollectionId === read.id}
              >
                <ReadMenu />

                <DetailsPanel isActive={activeCollectionId === read.id}>
                  <ArticlesLayout
                    isVisible={isOpen && activeCollectionId === read.id}
                  />
                </DetailsPanel>
              </SelectionPanel>
            </MenuItem>

            <MenuItem isActive={activeCollectionId === stores.id}>
              <Button
                aria={{
                  haspopup: true,
                  expanded: activeCollectionId === stores.id,
                }}
                className={styles.element}
                dataTestRef={stores.dataTestRef ?? 'NAV_STORES'}
                id={stores.id}
                isInline={true}
                onClick={handleOnStoresClick}
                title={stores.title}
              >
                {stores.label}
              </Button>

              <SelectionPanel
                isActive={isOpen && activeCollectionId === stores.id}
              >
                <StoresComponent />
              </SelectionPanel>
            </MenuItem>

            <MenuItem isActive={activeCollectionId === search.id}>
              <Button
                aria={{
                  haspopup: true,
                  expanded: activeCollectionId === search.id,
                }}
                className={styles.element}
                dataTestRef={search.dataTestRef ?? 'NAV_SEARCH'}
                id={search.id}
                isInline={true}
                onClick={handleOnSearchClick}
                title={search.title}
              >
                <>
                  <Icon
                    className={styles.searchIcon}
                    height={18}
                    name="search"
                    tabIndex={-1}
                    theme={currentTheme}
                    width={18}
                  />
                  <ScreenReaderOnly>{search.label}</ScreenReaderOnly>
                </>
              </Button>
              <SelectionPanel
                isActive={isOpen && activeCollectionId === search.id}
              >
                <SearchComponent />
              </SelectionPanel>
            </MenuItem>

            <MenuItem>
              <Transition isActive={isOpen} type="fade">
                <div>
                  <Button
                    className={styles.element}
                    dataTestRef="NAV_MENU_CLOSE"
                    isInline={true}
                    onClick={handleOnClose}
                    tabIndex={!isOpen ? -1 : null}
                    title={menu.closeTitle}
                  >
                    {menu.closeLabel}{' '}
                    <Icon
                      aria={{ hidden: true }}
                      className={styles.icon}
                      height={10}
                      name="close"
                      width={10}
                    />
                  </Button>
                </div>
              </Transition>
            </MenuItem>
          </ul>
        </nav>

        <SecondaryMenu />

        {!isOpen && <Logo />}
      </div>

      <div aria-hidden={true} className={styles.absoluteBuffer} />
    </ThemeContextProvider>
  );
};

export { TabletView };
