import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './RadioGroup.module.css';

const RadioGroup = ({
  className,
  dataTestRef,
  errorMessage,
  name,
  onChange,
  options,
  theme,
  value,
}) => {
  const classSet = cx(styles.base, className);

  if (options.length === 0) {
    return null;
  }

  if (options.length === 1) {
    return (
      <div className={classSet}>
        <span className={cx(styles.singleLabel, styles[theme])}>
          {options[0].label}
        </span>
      </div>
    );
  }

  return (
    <ul className={classSet}>
      {options.map(({ label: optionLabel, value: optionValue }) => (
        <li className={styles.radio} key={optionValue}>
          <label className={cx(styles.label)} htmlFor={`option-${optionValue}`}>
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
      <div className={styles.errorMessage}>{errorMessage}</div>
    </ul>
  );
};

RadioGroup.propTypes = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  theme: PropTypes.oneOf(['dark', 'light']),
  value: PropTypes.string,
};

RadioGroup.defaultProps = {
  className: undefined,
  dataTestRef: undefined,
  errorMessage: '',
  name: undefined,
  onChange: undefined,
  options: [],
  theme: 'dark',
  value: undefined,
};

export { RadioGroup };
