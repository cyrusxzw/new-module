import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.css';

const Button = forwardRef(function ButtonRef(
  {
    children,
    className,
    dataTestRef,
    id,
    isAlternate,
    isEnabled,
    isInline,
    onClick,
    tabIndex,
    title,
    type,
    theme,
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
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  id: PropTypes.string,
  isAlternate: PropTypes.bool,
  isEnabled: PropTypes.bool,
  isInline: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  theme: PropTypes.oneOf(['dark', 'light']),
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  dataTestRef: undefined,
  id: undefined,
  isAlternate: false,
  isEnabled: true,
  isInline: false,
  onClick: undefined,
  tabIndex: undefined,
  title: undefined,
  type: 'button',
  theme: 'dark',
};

export { Button };
