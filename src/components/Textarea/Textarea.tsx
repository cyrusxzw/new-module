import React from 'react';
import cx from 'classnames';
import styles from './Textarea.module.css';
import type { TextareaType } from './Textarea.types';

const Textarea: TextareaType = ({
  className,
  dataTestRef,
  defaultValue,
  id,
  inputRef,
  isEnabled = true,
  maxLength,
  name,
  onBlur,
  onChange,
  rows,
  textareaClassName,
  theme = 'dark',
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

export { Textarea };
