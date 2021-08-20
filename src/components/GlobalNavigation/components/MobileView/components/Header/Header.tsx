import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useWindowHasResized } from '~/customHooks';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { ScreenReaderOnly } from '~/components/ScreenReaderOnly';
import type { HeaderType } from './Header.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './Header.module.css';

const Header: HeaderType = ({ onClose }) => {
  const {
    isOpen: isMenuOpen,
    setIsOpen: setIsMenuOpen,
  } = useGlobalNavigationStateContext();
  const { actions, mobileViewClosedTheme } = useGlobalNavigationContext();
  const currentTheme = useThemeContext(null, 'dark');

  useWindowHasResized();

  const { logo, search, cart, menu } = actions;
  const currentClosedTheme = mobileViewClosedTheme || currentTheme;
  const handleOnSearchClick = () => search.onClick();
  const handleOnCartClick = () => cart.onClick();

  const handleOnMenuButtonClick = () =>
    isMenuOpen ? onClose() : setIsMenuOpen(true);

  const classSet = cx(
    styles.base,
    !isMenuOpen ? styles[`${currentClosedTheme}Closed`] : styles[currentTheme],
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
              <ScreenReaderOnly>{logo.label}</ScreenReaderOnly>
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
              dataTestRef={menu.dataTestRef ?? 'NAV_MOBILE_MENU'}
              isInline={true}
              onClick={handleOnMenuButtonClick}
              title={isMenuOpen ? menu.closeTitle : menu.title}
            >
              <ScreenReaderOnly>
                {isMenuOpen ? menu.closeLabel : menu.label}
              </ScreenReaderOnly>
            </Button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export { Header };
