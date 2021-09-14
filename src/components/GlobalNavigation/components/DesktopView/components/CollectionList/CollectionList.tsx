import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { CollectionItem } from '../CollectionItem';
import type { CollectionListType } from './CollectionList.types';
import styles from './CollectionList.module.css';

const CollectionList: CollectionListType = ({ heading, items, eyebrow, dataTestRef}) => {
  const { isActive } = useMenuItemContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const listClassSet = cx(styles.list, styles[currentTheme]);

  return (
    <>
      {eyebrow && (
        <small className={cx(styles.eyebrow, styles.small)} data-test-ref={`${dataTestRef}_EYEBROW`}>{eyebrow}</small>
      )}

      {heading && <strong className={styles.heading} data-test-ref={`${dataTestRef}_HEADING`}>{heading}</strong>}

      <ul aria-hidden={!isActive} aria-label="submenu" className={listClassSet} data-test-ref={`${dataTestRef}_ITEMLIST`}>
        {items.map((itemProps) => (
          <CollectionItem {...itemProps} key={itemProps.id} />
        ))}
      </ul>
    </>
  );
};

export { CollectionList };
