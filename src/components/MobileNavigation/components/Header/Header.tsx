import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useWindowHasResized } from '~/customHooks';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import type { HeaderType } from './Header.types';
import { useMobileNavigationContext } from '~/components/MobileNavigation/MobileNavigation.context';
import compositionStyles from '../../MobileNavigation.module.css';
import styles from './Header.module.css';

const Header: HeaderType = ({ closedTheme, onCloseClick, onOpenClick }) => {
  const { header, isOpen: isMenuOpen } = useMobileNavigationContext();
  const { logo, search, cart, menu } = header;
  const currentTheme = useThemeContext(null, 'dark');
  const handleOnCloseButtonClick = () =>
    isMenuOpen ? onCloseClick() : onOpenClick();

  useWindowHasResized();

  const handleOnSearchClick = () => search.onClick();

  const handleOnCartClick = () => cart.onClick();

  const classSet = cx(
    styles.base,
    !isMenuOpen
      ? styles[`${closedTheme || currentTheme}Closed`]
      : styles[currentTheme],
  );

  return (
    <div>
      <header aria-label="navigation header" className={classSet}>
        <ul className={styles.list}>
          <li className={cx(styles.item, styles.itemLogo)}>
            <Hyperlink
              className={cx(styles.action, styles.actionLogo)}
              dataTestRef={logo.dataTestRef ?? 'NAV_LOGO'}
              title={logo.title}
              url={logo.url}
            >
              <Icon height={22} name="aesop" tabIndex={-1} width={70} />
              <ScreenReaderOnly>{logo.screenReaderLabel}</ScreenReaderOnly>
            </Hyperlink>
          </li>
          <li className={styles.item}>
            <Button
              className={cx(styles.action, styles.actionSearch)}
              dataTestRef={search.dataTestRef ?? 'NAV_SEARCH'}
              isInline={true}
              onClick={handleOnSearchClick}
              title={search.title}
            >
              <Icon
                className={styles.searchIcon}
                height={16}
                name="search"
                tabIndex={-1}
                width={16}
              />
            </Button>
          </li>
          <li className={styles.item}>
            <Button
              className={cx(
                styles.action,
                styles.actionCart,
                compositionStyles.ornamentalWrapper,
              )}
              dataTestRef={cart.dataTestRef ?? 'NAV_CART'}
              isInline={true}
              onClick={handleOnCartClick}
              title={cart.title}
            >
              <span
                className={cx(
                  compositionStyles.ornamentalHover,
                  styles.ornamentalHover,
                )}
              >
                {cart.label}
              </span>
            </Button>
          </li>
          <li className={cx(styles.item, styles.itemMenu)}>
            <Button
              aria={{ haspopup: true, expanded: isMenuOpen }}
              className={cx(styles.action, styles.actionMenu, {
                [styles.openState]: isMenuOpen,
              })}
              dataTestRef={menu.dataTestRef ?? 'NAV_HAMBURGER'}
              isInline={true}
              onClick={handleOnCloseButtonClick}
              title={isMenuOpen ? menu.closeTitle : menu.openTitle}
            >
              <ScreenReaderOnly>
                {isMenuOpen
                  ? menu.screenReaderCloseLabel
                  : menu.screenReaderOpenLabel}
              </ScreenReaderOnly>
            </Button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export { Header };
