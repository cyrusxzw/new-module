import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useGlobalNavigationContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import { Transition } from '~/components/Transition';
import type { SupportMenuType } from './SupportMenu.types';
import compositionStyles from '../../TabletView.module.css';
import styles from './SupportMenu.module.css';

const SupportMenu: SupportMenuType = ({ isVisible = true }) => {
  const {
    actions: { account, support },
  } = useGlobalNavigationContext();

  const currentTheme = useThemeContext(undefined, 'dark');

  const handleOnSupportClick = () => {
    support.onClick();
  };

  const shouldShowRecentOrdersLink =
    account.isAuthenticated &&
    account.type === 'link' &&
    !!account?.recentOrders;

  const classSet = cx(styles.base, styles[currentTheme]);

  return (
    <ul aria-hidden={!isVisible} className={classSet}>
      <li className={styles.item}>
        <Button
          className={cx(styles.element, compositionStyles.ornamentalWrapper)}
          dataTestRef={support.dataTestRef}
          id={support.id}
          isInline={true}
          onClick={handleOnSupportClick}
          tabIndex={!isVisible ? -1 : null}
          title={support.title}
        >
          <span className={compositionStyles.ornamentalHover}>
            {support.label}
          </span>
        </Button>
      </li>

      <Transition isActive={shouldShowRecentOrdersLink} type="fade">
        <li className={styles.item}>
          <Hyperlink
            className={cx(styles.element, compositionStyles.ornamentalWrapper)}
            tabIndex={!isVisible ? -1 : null}
            title={account.type === 'link' && account?.recentOrders?.title}
            url={account.type === 'link' && account?.recentOrders?.url}
          >
            <span className={compositionStyles.ornamentalHover}>
              {account.type === 'link' && account?.recentOrders?.label}
            </span>
          </Hyperlink>
        </li>
      </Transition>
    </ul>
  );
};

export { SupportMenu };
