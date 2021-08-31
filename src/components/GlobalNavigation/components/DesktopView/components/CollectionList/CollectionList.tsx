import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { CollectionItem } from '~/components/GlobalNavigation/components/DesktopView/components/CollectionItem';
import type { CollectionListType } from './CollectionList.types';
import styles from './CollectionList.module.css';

const CollectionList: CollectionListType = ({ heading, items, eyebrow }) => {
  const { isActive } = useMenuItemContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const listClassSet = cx(styles.list, styles[currentTheme]);

  return (
    <>
      {eyebrow && (
        <small className={cx(styles.eyebrow, styles.small)}>{eyebrow}</small>
      )}

      {heading && <strong className={styles.heading}>{heading}</strong>}

      <ul aria-hidden={!isActive} aria-label="submenu" className={listClassSet}>
        {items.map((props) => (
          <CollectionItem {...props} key={props.id} />
        ))}
      </ul>
    </>
  );
};

export { CollectionList };
