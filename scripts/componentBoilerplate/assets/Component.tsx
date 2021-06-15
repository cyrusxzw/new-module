import React, { forwardRef } from 'react';
import type { ReactElement } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { ComponentBoilerplateProps } from './ComponentBoilerplate.types';
import styles from './ComponentBoilerplate.module.css';

const ComponentBoilerplate = forwardRef<
  HTMLDivElement,
  ComponentBoilerplateProps
>(function ComponentBoilerplateRef({ children, className, theme }, ref) {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return (
    <div className={classSet} ref={ref}>
      {children}
    </div>
  );
});

const ComponentBoilerplate2 = ({
  children,
  className,
  theme,
}: ComponentBoilerplateProps): ReactElement => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return <div className={classSet}>{children}</div>;
};

export { ComponentBoilerplate };
