import React from 'react';
import { useGlobalNavigationContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { MenuItem } from '../MenuItem';
import type { SecondaryMenuType } from './SecondaryMenu.types';
import styles from './SecondaryMenu.module.css';

const SecondaryMenu: SecondaryMenuType = () => {
  const {
    actions: { account, cart },
  } = useGlobalNavigationContext();

  return (
    <nav
      aria-label="supplementary"
      className={styles.base}
      data-test-ref="NAV_SECONDARY"
      role="navigation"
    >
      <ul className={styles.list}>
        <MenuItem
          dataTestId="NAV_ACCOUNT"
          dataTestRef="NAV_SECONDARY_BUTTON"
          id={account.id}
          label={account.label}
          onClick={account.type === 'trigger' ? account.onClick : null}
          title={account.title}
          type={account.type}
          url={account.type === 'link' ? account.url : null}
        />

        <MenuItem
          dataTestId="NAV_CART"
          dataTestRef="NAV_SECONDARY_BUTTON"
          id={cart.id}
          label={cart.label}
          onClick={cart.onClick}
          title={cart.title}
          type={cart.type}
        />
      </ul>
    </nav>
  );
};

export { SecondaryMenu };
