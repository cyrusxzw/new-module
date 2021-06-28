import React from 'react';
import type { SyntheticEvent } from 'react';
import cx from 'classnames';
import { useNotificationContext } from '~/contexts';
import { Icon } from '~/components/Icon';
import type { NotificationModalType } from './NotificationModal.types';
import styles from './NotificationModal.module.css';

const NotificationModal: NotificationModalType = ({
  backgroundColor,
  className,
  notificationMessage,
  ...props
}) => {
  const footerSuccessModal = useNotificationContext();
  const { actionType, dispatch, showModal } = footerSuccessModal;

  const handleOnClick = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch({ type: actionType.SHOW_NOTIFICATION });
  };

  const baseClassSet = cx(
    styles.base,
    { [styles.isNotVisible]: !showModal },
    className,
  );

  const style = backgroundColor ? { backgroundColor } : undefined;

  return (
    <div className={baseClassSet} style={style} {...props}>
      <span className={styles.notificationMessage}>{notificationMessage}</span>
      <button
        className={styles.closeButton}
        data-ref="close"
        onClick={handleOnClick}
        tabIndex={-1}
      >
        <Icon height={15} name="close" theme="dark" width={15} />
      </button>
    </div>
  );
};

export { NotificationModal };
