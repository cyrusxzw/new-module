import React from 'react';
import cx from 'classnames';
import type { RadioGroupType } from './RadioGroup.types';
import styles from './RadioGroup.module.css';

const RadioGroup: RadioGroupType = ({
  className,
  dataTestRef,
  errorMessage,
  name,
  onChange,
  options = [],
  theme = 'dark',
  value,
}) => {
  const classSet = cx(styles.base, className);

  if (options.length === 0) {
    return null;
  }

  if (options.length === 1) {
    return (
      <>
        <div className={classSet}>
          <span className={cx(styles.singleLabel, styles[theme])}>
            {options[0].label}
          </span>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
      </>
    );
  }

  return (
    <>
      <ul className={classSet}>
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <li className={styles.radio} key={optionValue}>
            <label
              className={cx(styles.label)}
              htmlFor={`option-${optionValue}`}
            >
              <input
                aria-checked={optionValue === value}
                checked={optionValue === value}
                className={styles.input}
                data-test-ref={dataTestRef}
                id={`option-${optionValue}`}
                name={name}
                onChange={onChange}
                tabIndex={0}
                type="radio"
                value={optionValue}
              />
              <span className={cx(styles.pot, styles[theme])} />
              <span className={cx(styles.labelContent, styles[theme])}>
                {optionLabel}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {errorMessage && <div>{errorMessage}</div>}
    </>
  );
};

export { RadioGroup };
