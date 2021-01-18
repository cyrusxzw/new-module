import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';
import cx from 'classnames';

const TextInput = ({
  className,
  defaultValue,
  hasContent,
  hasError,
  id,
  isEnabled,
  inputClassName,
  inputRef,
  label,
  max,
  min,
  name,
  type,
  maxLength,
  hasValidation,
  onBlur,
  onChange,
  prefixElement,
  theme,
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
          noValidate={!hasValidation}
          onBlur={onBlur}
          onChange={onChange}
          placeholder=""
          ref={inputRef}
          type={type || 'text'}
          value={value}
        />
        <span className={labelClassSet}>{label}</span>
        {prefixElement}
      </label>
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  hasContent: PropTypes.bool,
  hasError: PropTypes.bool,
  hasValidation: PropTypes.bool,
  id: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  inputRef: PropTypes.func,
  isEnabled: PropTypes.bool,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  prefixElement: PropTypes.element,
  theme: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'number',
    'tel',
    'search',
  ]),
  'data-test-ref': PropTypes.string,
  value: PropTypes.string,
};

export { TextInput };
