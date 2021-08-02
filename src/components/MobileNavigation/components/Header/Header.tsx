import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useWindowHasResized } from '~/customHooks';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import type { HeaderType } from './Header.types';
import compositionStyles from '~/components/MobileNavigation/MobileNavigation.module.css';
import styles from './Header.module.css';

const Header: HeaderType = ({
  closedTheme,
  isMenuOpen,
  onCloseClick,
  onOpenClick,
  onCartClick,
}) => {
  const currentTheme = useThemeContext(null, 'dark');
  const handleOnCloseButtonClick = () =>
    isMenuOpen ? onCloseClick() : onOpenClick();
  const handleOnSearchClick = () => {
    console.log('Clicked: handleOnSearchClick');
  };

  const classSet = cx(
    styles.base,
    !isMenuOpen
      ? styles[`${closedTheme || currentTheme}Closed`]
      : styles[currentTheme],
  );

  useWindowHasResized();

  return (
    <div>
      <header className={classSet}>
        <ul className={styles.list}>
          <li className={cx(styles.item, styles.itemLogo)}>
            <Hyperlink
              className={cx(styles.action, styles.actionLogo)}
              title="back home title"
              url="#home"
            >
              <Icon height={22} name="aesop" width={70} />
              <span className={compositionStyles.srOnly}>Aēsop.</span>
            </Hyperlink>
          </li>
          <li className={styles.item}>
            <Button
              className={cx(styles.action, styles.actionSearch)}
              isInline={true}
              onClick={handleOnSearchClick}
              title={'search'}
            >
              <Icon
                className={styles.searchIcon}
                height={16}
                name="search"
                width={16}
              />
              <span className={compositionStyles.srOnly}>Search</span>
            </Button>
          </li>
          <li className={styles.item}>
            <Button
              className={cx(
                styles.action,
                styles.actionCart,
                compositionStyles.ornamentalWrapper,
              )}
              isInline={true}
              onClick={onCartClick}
              title={'cart'}
            >
              <span
                className={cx(
                  compositionStyles.ornamentalHover,
                  styles.ornamentalHover,
                )}
              >
                Cart
              </span>
            </Button>
          </li>
          <li className={cx(styles.item, styles.itemMenu)}>
            <Button
              aria={{ haspopup: true, expanded: isMenuOpen }}
              className={cx(styles.action, styles.actionMenu, {
                [styles.openState]: isMenuOpen,
              })}
              isInline={true}
              onClick={handleOnCloseButtonClick}
              title={'open menu title'}
            >
              <span className={compositionStyles.srOnly}>
                {isMenuOpen ? 'Close' : 'Open'} the Navigation
              </span>
            </Button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export { Header };
