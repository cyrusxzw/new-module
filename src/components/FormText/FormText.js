import React, { forwardRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './FormText.module.css';

const FormText = forwardRef(
  (
    {
      autoComplete,
      classes,
      dataTestRef,
      errorMessage,
      id,
      isDisabled,
      label,
      max,
      maxLength,
      min,
      name,
      onChange,
      pattern,
      theme,
      type,
      value: valueProp,
    },
    ref,
  ) => {
    const [value, setValue] = useState(valueProp || '');
    const handleOnChange = useCallback(
      event => {
        setValue(event.target.value);
        onChange(event);
      },
      [onChange, setValue],
    );

    return (
      <div className={cx(styles.wrapper, classes.wrapper)}>
        <div>
          <input
            aria-label={label}
            autoComplete={autoComplete}
            className={cx(
              styles.input,
              styles[theme],
              { [styles.hasError]: errorMessage },
              classes.input,
            )}
            data-test-ref={dataTestRef}
            disabled={isDisabled}
            id={id}
            max={max}
            maxLength={maxLength}
            min={min}
            name={name}
            onChange={handleOnChange}
            pattern={pattern}
            ref={ref}
            type={type}
            value={value}
          />
          {label && (
            <span
              className={cx(
                styles.label,
                styles[theme],
                { [styles.moved]: value },
                classes.label,
              )}
            >
              {label}
            </span>
          )}
        </div>
        {errorMessage && (
          <div className={cx(styles.errorMessage, classes.errorMessage)}>
            {errorMessage}
          </div>
        )}
      </div>
    );
  },
);

FormText.propTypes = {
  autoComplete: PropTypes.string,
  classes: PropTypes.shape({
    errorMessage: PropTypes.string,
    input: PropTypes.string,
    label: PropTypes.string,
    wrapper: PropTypes.string,
  }),
  dataTestRef: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'number',
    'tel',
    'search',
  ]),
  value: PropTypes.string,
};

FormText.defaultProps = {
  classes: {},
  isDisabled: false,
  onChange: () => {},
  theme: 'dark',
  type: 'text',
};

export { FormText };
