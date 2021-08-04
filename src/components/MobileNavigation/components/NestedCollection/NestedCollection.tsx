import React from 'react';
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
  isActive: isVisible,
}) => {
  const currentTheme = useThemeContext(null, 'dark');
  const {
    activeCollectionId,
    activeNestedCollectionIds,
    onNestedCollectionClick,
  } = useMobileNavigationContext();

  const isActive = activeNestedCollectionIds.includes(id);
  const { ref, style } = useVariableHeightStyle(isActive);
  const handleOnNestedClick = () => onNestedCollectionClick(id);

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
        className={cx(
          compositionStyles.itemElement,
          compositionStyles.ornamentalWrapper,
          styles.nestedButton,
        )}
        isInline={true}
        onClick={handleOnNestedClick}
        tabIndex={activeCollectionId === 'top' || !isVisible ? -1 : null}
        theme={currentTheme}
        title={title}
      >
        <span className={compositionStyles.ornamentalHover}>{label}</span>
        <span
          className={cx(
            styles.icon,
            { [styles.expanded]: isActive },
            styles[currentTheme],
          )}
        />
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
