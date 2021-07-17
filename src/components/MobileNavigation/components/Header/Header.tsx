import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import type { HeaderType } from './Header.types';
import styles from './Header.module.css';

const Header: HeaderType = ({ isActive, onCloseButtonClick }) => {
  const currentTheme = useThemeContext(null, 'dark');
  const handleOnCloseButtonClick = () => onCloseButtonClick();
  const classSet = cx(styles.base, styles[currentTheme]);

  return (
    <header aria-hidden={!isActive} className={classSet}>
      <span className={styles.tempLogo}>Aēsop.</span>

      <Button
        className={styles.closeButton}
        isInline={true}
        onClick={handleOnCloseButtonClick}
        tabIndex={!isActive ? -1 : null}
        title="Close menu"
      >
        <Icon height={14} name="close" width={14} />
        <span className={styles.srOnly}>Close menu</span>
      </Button>
    </header>
  );
};

export { Header };
