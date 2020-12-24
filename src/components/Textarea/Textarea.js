import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Textarea.module.css';

const Textarea = ({
  className,
  dataTestRef,
  defaultValue,
  id,
  isEnabled,
  inputRef,
  maxLength,
  name,
  onBlur,
  onChange,
  rows,
  textareaClassName,
  theme,
  value,
}) => {
  const baseClassSet = cx(styles.base, styles[theme], className);
  const textareaClassSet = cx(
    styles.textarea,
    styles[theme],
    textareaClassName,
  );
  return (
    <label htmlFor={id}>
      <div className={baseClassSet}>
        <textarea
          className={textareaClassSet}
          data-test-ref={dataTestRef}
          defaultValue={defaultValue}
          disabled={!isEnabled}
          id={id}
          maxLength={maxLength}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={inputRef}
          rows={rows}
          value={value}
        />
      </div>
    </label>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
  inputRef: PropTypes.func,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  textareaClassName: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  theme: PropTypes.oneOf(['dark', 'light']),
  value: PropTypes.string,
};

Textarea.defaultProps = {
  className: undefined,
  dataTestRef: undefined,
  defaultValue: undefined,
  id: undefined,
  isEnabled: true,
  inputRef: undefined,
  maxLength: undefined,
  name: undefined,
  textareaClassName: undefined,
  onBlur: undefined,
  onChange: undefined,
  rows: undefined,
  theme: 'dark',
  value: undefined,
};

export { Textarea };
