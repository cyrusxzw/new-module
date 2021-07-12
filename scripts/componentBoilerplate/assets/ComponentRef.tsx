import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { _COMPONENT_NAME_Props } from './_COMPONENT_NAME_.types';
import styles from './_COMPONENT_NAME_.module.css';

const _COMPONENT_NAME_ = forwardRef<HTMLDivElement, _COMPONENT_NAME_Props>(
  function _COMPONENT_NAME_Ref({ children, className, theme }, ref) {
    const currentTheme = useThemeContext(theme, 'dark');
    const classSet = cx(styles.base, styles[currentTheme], className);

    return (
      <div className={classSet} ref={ref}>
        {children}
      </div>
    );
  },
);

export { _COMPONENT_NAME_ };
