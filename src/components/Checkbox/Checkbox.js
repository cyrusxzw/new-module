import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useUID } from 'react-uid';
import styles from './Checkbox.module.css';

const Checkbox = forwardRef(
  (
    {
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
    },
    ref,
  ) => {
    const uid = useUID();
    const baseClassSet = cx(styles.base, className);
    const checkboxClassSet = cx(
      styles.checkBox,
      styles[theme],
      { [styles.hasError]: errorMessage },
      checkboxClassName,
    );
    const contentClassSet = cx(styles.content, styles[theme], contentClassName);

    const inputId = idProp || uid;
    const errorMessageId = `${inputId}-error-message`;

    return (
      <div>
        <label className={baseClassSet} htmlFor={inputId}>
          <input
            aria-describedby={errorMessageId}
            aria-invalid={!!errorMessage}
            className={checkboxClassSet}
            data-test-ref={dataTestRef}
            disabled={!isEnabled}
            id={inputId}
            name={name}
            onChange={onChange}
            ref={ref}
            type="checkbox"
          />
          <span className={contentClassSet}>{content}</span>
        </label>
        {errorMessage && (
          <span className={cx(styles.errorMessage)} id={errorMessageId}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

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
