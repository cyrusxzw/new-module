import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { _COMPONENT_NAME_Type } from './_COMPONENT_NAME_.types';
import styles from './_COMPONENT_NAME_.module.css';

const _COMPONENT_NAME_: _COMPONENT_NAME_Type = ({
  _COMPONENT_CHILDREN_PROP_
  className,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return _COMPONENT_UI_;
};

export { _COMPONENT_NAME_ };
