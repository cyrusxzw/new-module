import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { Props } from './List.types';
import styles from './List.module.css';

const List = forwardRef<HTMLUListElement, Props>(function ListRef(
  { className, items, listItemClassName, theme },
  ref,
) {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);
  const listItemClassSet = cx(styles.item, listItemClassName);

  return (
    <ul className={classSet} ref={ref}>
      {items.map(({ content, id }) => (
        <li className={listItemClassSet} key={id}>
          {content}
        </li>
      ))}
    </ul>
  );
});

export { List };
