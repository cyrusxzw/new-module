import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import type { ModalBodyType } from './ModalBody.types';
import styles from './ModalBody.module.css';

const ModalBody: ModalBodyType = ({
  children,
  className,
  copy,
  onClose,
  isVisible,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(
    styles.base,
    { [styles.isVisible]: isVisible },
    styles[currentTheme],
    className,
  );

  return (
    <div className={classSet}>
      {children}
      <Button
        className={styles.closeButton}
        dataTestRef="MODAL_CLOSE_BUTTON"
        isInline={true}
        onClick={onClose}
        theme={theme}
        title={copy.close}
      >
        <Icon
          className={styles.closeIcon}
          height={14}
          name="close"
          theme={theme}
          width={14}
        />
      </Button>
    </div>
  );
};

export { ModalBody };
