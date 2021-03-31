import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useUID } from 'react-uid';
import styles from './Checkbox.module.css';
import type { CheckboxProps } from './Checkbox.types';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checkboxClassName,
      className,
      content,
      contentClassName,
      dataTestRef,
      errorMessage,
      id: idProp,
      isEnabled = true,
      name,
      onChange,
      theme = 'dark',
    },
    ref,
  ) => {
    const uid = useUID();
    const inputId = idProp || uid;
    const errorMessageId = `${inputId}-error-message`;
    const baseClassSet = cx(styles.base, className);
    const contentClassSet = cx(styles.content, styles[theme], contentClassName);
    const checkboxClassSet = cx(
      styles.checkBox,
      styles[theme],
      { [styles.hasError]: errorMessage },
      checkboxClassName,
    );

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

export { Checkbox };
