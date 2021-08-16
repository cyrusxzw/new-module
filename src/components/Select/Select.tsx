import React, { forwardRef, useState } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Icon } from '~/components/Icon';
import type { SelectProps } from './Select.types';
import styles from './Select.module.css';

const Select = forwardRef<HTMLSelectElement, SelectProps>(function SelectRef(
  {
    className,
    dataTestRef,
    errorMessage,
    isBlock = false,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    options,
    theme,
    value,
  },
  ref,
) {
  const currentTheme = useThemeContext(theme, 'dark');
  const [hasFocus, setHasFocus] = useState(false);
  const errorMessageId = `${name}-error-message`;

  const classSet = cx(
    styles.base,
    { [styles.isBlock]: isBlock },
    {
      [styles.hasFocus]: value || hasFocus,
    },
    { [styles.hasError]: errorMessage },
    styles[currentTheme],
    className,
  );

  const handleFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
    onFocus?.(event);

    setHasFocus(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    onBlur?.(event);

    setHasFocus(false);
  };

  return (
    <div className={classSet}>
      <label className={cx(styles.label)} htmlFor={name}>
        {label}
      </label>
      <select
        aria-describedby={errorMessage ? errorMessageId : undefined}
        aria-invalid={!!errorMessage}
        aria-label={label || name}
        className={styles.input}
        data-test-ref={dataTestRef}
        id={name}
        name={name}
        onBlur={handleBlur}
        onChange={onChange}
        onFocus={handleFocus}
        ref={ref}
        value={value}
      >
        {label && <option value="" />}
        {options.map(({ id, label: optionLabel, value: optionValue }) => (
          <option key={id || optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
      <Icon
        className={styles.icon}
        height={15}
        name="chevron"
        theme={currentTheme}
        width={15}
      />
      {errorMessage && (
        <span className={styles.errorMessage} id={errorMessageId}>
          {errorMessage}
        </span>
      )}
    </div>
  );
});

export { Select };
