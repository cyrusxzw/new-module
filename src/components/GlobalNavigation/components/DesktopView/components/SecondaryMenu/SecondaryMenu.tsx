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
    <nav aria-label="supplementary" className={styles.base} role="navigation">
      <ul className={styles.list}>
        <MenuItem
          dataTestRef={account.dataTestRef}
          id={account.id}
          label={account.label}
          onClick={account.type === 'trigger' ? account.onClick : null}
          title={account.title}
          type={account.type}
          url={account.type === 'link' ? account.url : null}
        />

        <MenuItem
          dataTestRef={cart.dataTestRef ?? 'NAV_CART'}
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
