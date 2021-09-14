import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import { useGlobalNavigationContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { MenuItem } from '../MenuItem';
import type { SecondaryMenuType } from './SecondaryMenu.types';
import compositionStyles from '../../TabletView.module.css';
import styles from './SecondaryMenu.module.css';

const SecondaryMenu: SecondaryMenuType = () => {
  const {
    actions: { account, cart },
  } = useGlobalNavigationContext();

  const currentTheme = useThemeContext(undefined, 'dark');

  const { dataTestRef, id, title } = account;

  const sharedAccountProps = {
    className: cx(styles.element, compositionStyles.ornamentalWrapper),
    dataTestRef,
    id,
    title,
  };

  const classSet = cx(compositionStyles.menuList, styles[currentTheme]);

  return (
    <nav aria-label="supplementary" role="navigation">
      <ul className={classSet}>
        <MenuItem>
          {account.type === 'link' ? (
            <Hyperlink {...sharedAccountProps} url={account.url}>
              <span className={compositionStyles.ornamentalHover}>
                {account.label}
              </span>
            </Hyperlink>
          ) : (
            <Button
              {...sharedAccountProps}
              isInline={true}
              onClick={account.onClick}
            >
              <span className={compositionStyles.ornamentalHover}>
                {account.label}
              </span>
            </Button>
          )}
        </MenuItem>
        <MenuItem>
          <Button
            className={cx(styles.element, compositionStyles.ornamentalWrapper)}
            dataTestRef={cart.dataTestRef ?? 'NAV_CART'}
            id={cart.id}
            isInline={true}
            onClick={cart.onClick}
            title={cart.title}
          >
            <span className={compositionStyles.ornamentalHover}>
              {cart.label}
            </span>
          </Button>
        </MenuItem>
      </ul>
    </nav>
  );
};

export { SecondaryMenu };
