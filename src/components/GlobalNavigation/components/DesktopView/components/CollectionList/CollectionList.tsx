import React from 'react';
import cx from 'classnames';
import { Heading } from '~/components/Heading';
import { useThemeContext } from '~/contexts';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { CollectionItem } from '../CollectionItem';
import type { CollectionListType } from './CollectionList.types';
import styles from './CollectionList.module.css';

const CollectionList: CollectionListType = ({
  heading,
  items,
  eyebrow,
  dataTestRef,
}) => {
  const { isActive } = useMenuItemContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const listClassSet = cx(styles.list, styles[currentTheme]);

  return (
    <>
      {eyebrow && (
        <small
          className={cx(styles.eyebrow, styles.small)}
          data-test-ref={`${dataTestRef}_EYEBROW`}
        >
          {eyebrow}
        </small>
      )}

      {heading && (
        <Heading
          className={styles.heading}
          dataTestRef={`${dataTestRef}_HEADING`}
          level={'2'}
          size={'small'}
        >
          {heading}
        </Heading>
      )}

      <ul
        aria-hidden={!isActive}
        className={listClassSet}
        data-test-ref={`${dataTestRef}_ITEMLIST`}
      >
        {items.map((itemProps) => (
          <CollectionItem {...itemProps} key={itemProps.id} />
        ))}
      </ul>
    </>
  );
};

export { CollectionList };
