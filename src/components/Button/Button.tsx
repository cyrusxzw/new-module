import React, { forwardRef } from 'react';
import cx from 'classnames';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRef(
  {
    children,
    className,
    dataTestRef,
    id,
    isAlternate = false,
    isEnabled = true,
    isInline = false,
    onClick,
    tabIndex,
    title,
    type = 'button',
    theme = 'dark',
    ...otherProps
  },
  ref,
) {
  if (!children) return null;

  const classSet = cx(
    styles.base,
    { [styles.alternate]: isAlternate },
    { [styles.blockStyle]: !isInline },
    styles[theme],
    { [styles.disabled]: !isEnabled },
    className,
  );

  return (
    <button
      className={classSet}
      data-test-ref={dataTestRef}
      disabled={!isEnabled}
      id={id}
      onClick={onClick}
      ref={ref}
      tabIndex={tabIndex}
      title={title}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export { Button };
