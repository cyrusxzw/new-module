import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useNotificationContext } from '~/contexts';
import { Icon } from '~/components/Icon';
import styles from './NotificationModal.module.css';

const NotificationModal = ({
  backgroundColor,
  className,
  notificationMessage,
  ...props
}) => {
  const footerSuccessModal = useNotificationContext();
  const { actionType, dispatch, showModal } = footerSuccessModal;

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch({ type: actionType.SHOW_NOTIFICATION });
  };

  const baseClassSet = cx(
    styles.base,
    !showModal && styles.isNotVisible,
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

NotificationModal.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  notificationMessage: PropTypes.string,
};

NotificationModal.defaultProps = {
  backgroundColor: undefined,
  className: undefined,
  notificationMessage: undefined,
};

export { NotificationModal };
