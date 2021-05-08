import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { List } from '~/components/List';
import type { KitListProps } from './KitList.types';
import styles from './KitList.module.css';

/** @TODO replace the `any` in the forwardRef type
 * Following our forwardRef tyings, this first value should be HTMLUListElement (based on typeof List)
 * However, due to https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012
 * this does not work, and if List's return type changes, this static type will break
 */
const KitList = forwardRef<any, KitListProps>(function KitListRef(
  { className, isVisible = true, items, theme },
  ref,
) {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);
  const listItemClassSet = cx(styles.item, { [styles.slideIn]: isVisible });

  return (
    <List
      className={classSet}
      items={items}
      listItemClassName={listItemClassSet}
      ref={ref}
      theme={theme}
    />
  );
});

export { KitList };
