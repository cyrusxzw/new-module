import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import styles from './Checkbox.module.css';

const Checkbox = ({
  className,
  checkboxClassName,
  content,
  contentClassName,
  dataTestRef,
  errorMessage,
  id: idProp,
  isEnabled,
  name,
  onChange,
  theme,
}) => {
  const baseClassSet = cx(styles.base, className);
  const checkboxClassSet = cx(
    styles.checkBox,
    styles[theme],
    { [styles.hasError]: errorMessage },
    checkboxClassName,
  );
  const contentClassSet = cx(styles.content, styles[theme], contentClassName);

  const id = idProp || uuidv4();

  return (
    <React.Fragment>
      <label className={baseClassSet} htmlFor={id}>
        <input
          className={checkboxClassSet}
          data-test-ref={dataTestRef}
          disabled={!isEnabled}
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
        />
        <span className={contentClassSet}>{content}</span>
      </label>
      {errorMessage && (
        <span className={cx(styles.errorMessage)}>{errorMessage}</span>
      )}
    </React.Fragment>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checkboxClassName: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentClassName: PropTypes.string,
  dataTestRef: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isEnabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Checkbox.defaultProps = {
  className: undefined,
  checkboxClassName: undefined,
  content: undefined,
  contentClassName: undefined,
  dataTestRef: undefined,
  id: undefined,
  isEnabled: true,
  name: undefined,
  onChange: undefined,
  theme: 'dark',
};

export { Checkbox };
