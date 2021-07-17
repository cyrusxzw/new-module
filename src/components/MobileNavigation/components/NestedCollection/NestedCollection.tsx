import React, { useRef } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Button } from '~/components/Button';
import { useMobileNavigationContext } from '~/components/MobileNavigation/MobileNavigation.context';
import { useVariableHeightStyle } from '~/components/MobileNavigation/MobileNavigation.hooks';
import { ListItem } from '~/components/MobileNavigation/components';
import type { NestedCollectionType } from './NestedCollection.types';
import compositionStyles from '~/components/MobileNavigation/MobileNavigation.module.css';
import styles from './NestedCollection.module.css';

const NestedCollection: NestedCollectionType = ({
  id,
  items = [],
  title,
  label,
}) => {
  const ref = useRef();
  const currentTheme = useThemeContext(null, 'dark');
  const {
    activeId,
    activeNestedIds,
    onNestedClick,
  } = useMobileNavigationContext();

  const isActive = activeNestedIds.includes(id);
  const { style } = useVariableHeightStyle(ref, isActive);
  const handleOnNestedClick = () => onNestedClick(id, isActive);

  const listClassSet = cx(
    compositionStyles.list,
    compositionStyles.sublist,
    styles.collapse,
  );

  return (
    <>
      <Button
        aria={{
          expanded: isActive,
          haspopup: true,
          hidden: !isActive,
        }}
        className={cx(compositionStyles.itemElement, styles.nestedButton)}
        isInline={true}
        onClick={handleOnNestedClick}
        tabIndex={activeId === 'top' ? -1 : null}
        theme={currentTheme}
        title={title}
      >
        <span className={compositionStyles.ornimentalHover}>{label}</span>
        <span className={styles.tempIcon}>{isActive ? '-' : '+'}</span>{' '}
      </Button>

      <ul
        aria-hidden={!isActive}
        aria-label="submenu"
        className={listClassSet}
        ref={ref}
        style={style}
      >
        {items.map((props) => (
          <ListItem
            isActive={isActive}
            isNestedItem={true}
            itemProps={props}
            key={props.label}
          />
        ))}
      </ul>
    </>
  );
};

export { NestedCollection };
