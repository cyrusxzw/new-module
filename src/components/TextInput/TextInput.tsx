import React from 'react';
import styles from './TextInput.module.css';
import cx from 'classnames';
import type { TextInputType } from './TextInput.type';

const TextInput: TextInputType = ({
  className,
  defaultValue,
  hasContent = false,
  hasError = false,
  id,
  inputClassName,
  inputRef,
  isEnabled = true,
  label,
  max,
  maxLength,
  min,
  name,
  onBlur,
  onChange,
  prefixElement,
  theme = 'dark',
  type = 'text',
  value,
  ...moreProps
}) => {
  const dataTestRef = moreProps['data-test-ref'];
  const classNames = cx(styles.formText, className);
  const inputClassNames = cx(
    styles.formTextInput,
    styles[theme],
    (!!defaultValue || hasContent) && styles.hasContent,
    !!hasError && styles.hasError,
    inputClassName,
  );
  const labelClassSet = cx(styles.formTextLabel, styles[theme]);

  return (
    <div className={classNames}>
      <label htmlFor={id}>
        <input
          className={inputClassNames}
          data-test-ref={dataTestRef}
          defaultValue={defaultValue}
          disabled={!isEnabled}
          id={id}
          max={max}
          maxLength={maxLength}
          min={min}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={inputRef}
          type={type}
          value={value}
        />
        <span className={labelClassSet}>{label}</span>
        {prefixElement}
      </label>
    </div>
  );
};

export { TextInput };
