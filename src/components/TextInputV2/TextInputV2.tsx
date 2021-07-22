import React, { forwardRef, useState, useCallback } from 'react';
import cx from 'classnames';
import { useUID } from 'react-uid';
import type { TextInputV2Props } from './TextInputV2.types';
import styles from './TextInputV2.module.css';

const TextInputV2 = forwardRef<HTMLInputElement, TextInputV2Props>(
  (
    {
      autoComplete,
      classNames,
      dataTestRef,
      errorMessage,
      id: idProp,
      isEnabled = true,
      label,
      max,
      maxLength,
      min,
      name,
      onChange,
      pattern,
      theme = 'dark',
      type = 'text',
      value: valueProp,
    },
    ref,
  ) => {
    const uid = useUID();
    const [value, setValue] = useState(valueProp || '');
    const inputId = idProp || uid;
    const handleOnChange = useCallback(
      (event) => {
        setValue(event.target.value);
        onChange?.(event);
      },
      [onChange, setValue],
    );
    const errorMessageId = `${inputId}-error-message`;

    return (
      <div className={cx(styles.wrapper, classNames?.wrapper)}>
        <div>
          <input
            aria-describedby={errorMessageId}
            aria-invalid={!!errorMessage}
            autoComplete={autoComplete}
            className={cx(
              styles.input,
              styles[theme],
              { [styles.hasError]: errorMessage },
              classNames?.input,
            )}
            data-test-ref={dataTestRef}
            disabled={!isEnabled}
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
                classNames?.label,
              )}
              htmlFor={inputId}
            >
              {label}
            </label>
          )}
        </div>
        {errorMessage && (
          <span
            className={cx(styles.errorMessage, classNames?.errorMessage)}
            id={errorMessageId}
          >
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

export { TextInputV2 };
