import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { LinkButtonGroupProps } from './LinkButtonGroup.types';
import styles from './LinkButtonGroup.module.css';

const LinkButtonGroup = ({
  children,
  className,
  hasFitContent,
  isFlush = true,
  isFullWidth = false,
  textAlign = 'center',
  theme,
}: LinkButtonGroupProps): React.ReactElement => {
  const currentTheme = useThemeContext(theme, 'dark');

  const classSet = cx(
    styles.base,
    { [styles.fitContent]: hasFitContent },
    { [styles.flush]: isFlush },
    className,
  );

  const childrenClassSet = cx(
    styles.link,
    { [styles.flushLink]: isFlush },
    { [styles.fitContent]: hasFitContent },
    { [styles.fullWidth]: isFullWidth },
    styles[textAlign],
  );

  return (
    <div className={classSet} data-testid="data-testid-LinkButtonGroup">
      <>
        {React.Children.map(children, (child) => {
          if (child === null) return null;

          return React.cloneElement(child, {
            className: `${child.props?.className || ''} ${childrenClassSet}`,
            textAlign,
            theme: currentTheme,
          });
        })}
      </>
    </div>
  );
};

export { LinkButtonGroup };
