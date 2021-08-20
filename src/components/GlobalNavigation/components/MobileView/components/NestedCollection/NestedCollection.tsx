import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Button } from '~/components/Button';
import { useVariableHeightStyle } from '../../MobileView.hooks';
import { ListItem } from '../../components';
import type { NestedCollectionType } from './NestedCollection.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './NestedCollection.module.css';

import { useMobileViewContext } from '~/components/GlobalNavigation/components/MobileView/MobileView.context';

const NestedCollection: NestedCollectionType = ({
  id,
  isVisible,
  items = [],
  label,
  title,
}) => {
  const currentTheme = useThemeContext(null, 'dark');
  const {
    activeCollectionId,
    activeNestedCollectionIds,
    onNestedCollectionClick,
  } = useMobileViewContext();

  const isActive = activeNestedCollectionIds.includes(id);
  const { ref, style } = useVariableHeightStyle(isActive);
  const handleOnNestedClick = () => onNestedCollectionClick(id);

  const listClassSet = cx(
    compositionStyles.list,
    compositionStyles.sublist,
    styles.collapse,
  );

  /** @TODO Tracking exand / collapse */

  /** Add label to where closed + log current analytic push */

  /** Hovering as a tracking push */

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
        tabIndex={activeCollectionId === 'top' || !isVisible ? -1 : null}
        theme={currentTheme}
        title={title}
      >
        {label}
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
            isNestedItem={true}
            isVisible={isActive}
            itemProps={props}
            key={props.label}
          />
        ))}
      </ul>
    </>
  );
};

export { NestedCollection };
