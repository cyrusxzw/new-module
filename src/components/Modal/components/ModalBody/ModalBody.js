import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import styles from './ModalBody.module.css';

const ModalBody = ({
  children,
  className,
  copy,
  onClose,
  isVisible,
  theme,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.isVisible]: isVisible },
    styles[theme],
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

ModalBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  copy: PropTypes.shape({
    close: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ModalBody.defaultProps = {
  children: undefined,
  className: undefined,
  copy: {
    close: undefined,
  },
  onClose: undefined,
  isVisible: undefined,
  theme: 'dark',
};

export default ModalBody;
