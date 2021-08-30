import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Transition } from '~/components';
import { Button } from '~/components';
import { Icon } from '~/components';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import type { CloseButtonType } from './CloseButton.types';
import styles from './CloseButton.module.css';

const CloseButton: CloseButtonType = ({ onClose }) => {
  const { isOpen } = useGlobalNavigationStateContext();
  const {
    actions: {
      menu: { closeTitle, closeLabel },
    },
  } = useGlobalNavigationContext();
  const currentTheme = useThemeContext(undefined, 'dark');
  const classSet = cx(styles.base, styles[currentTheme]);

  return (
    <Transition isActive={isOpen} type="fade">
      <Button
        className={classSet}
        dataTestRef="NAV_MENU_CLOSE"
        isInline={true}
        onClick={onClose}
        tabIndex={!isOpen ? -1 : null}
        title={closeTitle}
      >
        {closeLabel}{' '}
        <Icon
          aria={{ hidden: true }}
          className={styles.icon}
          height={10}
          name="close"
          width={10}
        />
      </Button>
    </Transition>
  );
};

export { CloseButton };
