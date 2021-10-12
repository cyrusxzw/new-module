import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRef(
  {
    aria,
    children,
    className,
    dataTestRef,
    id,
    isAlternate = false,
    isEnabled = true,
    isInline = false,
    onClick,
    onMouseEnter,
    tabIndex,
    title,
    type = 'button',
    theme,
    ...otherProps
  },
  ref,
) {
  const currentTheme = useThemeContext(theme, 'dark');

  if (!children) return null;

  const classSet = cx(
    styles.base,
    { [styles.alternate]: isAlternate },
    { [styles.blockStyle]: !isInline },
    styles[currentTheme],
    { [styles.disabled]: !isEnabled },
    className,
  );

  return (
    <button
      aria-expanded={aria?.expanded ?? null}
      aria-haspopup={aria?.haspopup ?? null}
      aria-hidden={aria?.hidden ?? null}
      aria-label={aria?.label ?? null}
      className={classSet}
      data-test-ref={dataTestRef}
      disabled={!isEnabled}
      id={id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
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
