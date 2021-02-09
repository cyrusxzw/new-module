import React, { forwardRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useUID } from 'react-uid';
import styles from './TextInputV2.module.css';

const TextInputV2 = forwardRef(
  (
    {
      autoComplete,
      classes,
      dataTestRef,
      errorMessage,
      id: idProp,
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
    const uid = useUID();
    const [value, setValue] = useState(valueProp || '');
    const handleOnChange = useCallback(
      event => {
        setValue(event.target.value);
        onChange(event);
      },
      [onChange, setValue],
    );
    const inputId = idProp || uid;
    const errorMessageId = `${inputId}-error-message`;

    return (
      <div className={cx(styles.wrapper, classes.wrapper)}>
        <div>
          <input
            aria-describedby={errorMessageId}
            aria-invalid={!!errorMessage}
            autoComplete={autoComplete}
            className={cx(
              styles.input,
              styles[theme],
              { [styles.hasError]: errorMessage },
              classes.input,
            )}
            data-test-ref={dataTestRef}
            disabled={isDisabled}
            id={inputId}
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
            <label
              className={cx(
                styles.label,
                styles[theme],
                { [styles.moved]: value },
                classes.label,
              )}
              htmlFor={inputId}
            >
              {label}
            </label>
          )}
        </div>
        {errorMessage && (
          <span
            className={cx(styles.errorMessage, classes.errorMessage)}
            id={errorMessageId}
          >
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

TextInputV2.propTypes = {
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

TextInputV2.defaultProps = {
  classes: {},
  isDisabled: false,
  onChange: () => {},
  theme: 'dark',
  type: 'text',
};

export { TextInputV2 };
