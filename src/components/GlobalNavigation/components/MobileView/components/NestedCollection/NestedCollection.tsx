import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMobileViewContext } from '~/components/GlobalNavigation/components/MobileView/MobileView.context';
import { useVariableHeightStyle } from '~/components/GlobalNavigation/components/MobileView/MobileView.hooks';
import { Button } from '~/components/Button';
import { ListItem } from '../ListItem';
import type {
  CategoryItemTrackingWithMobileActionType,
  NestedCollectionType,
} from './NestedCollection.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './NestedCollection.module.css';

const NestedCollection: NestedCollectionType = ({
  id,
  isVisible,
  items = [],
  label,
  title,
}) => {
  const {
    activeCollectionId,
    menuType,
    menuCategoryLabel,
  } = useGlobalNavigationStateContext();
  const { trackingCallbacks } = useGlobalNavigationContext();

  const {
    activeNestedCollectionIds,
    onNestedCollectionClick,
  } = useMobileViewContext();

  const isActive = activeNestedCollectionIds.includes(id);

  const currentTheme = useThemeContext(null, 'dark');
  const { ref, style } = useVariableHeightStyle(isActive);

  const handleTracking = () => {
    const categoryItemTrackingProps: CategoryItemTrackingWithMobileActionType = {
      menuLabel: label,
      menuType: menuType,
      menuSection: 'Panel 2',
      menuCategory: menuCategoryLabel,
      menuSubnav:
        'None' /* TODO{issue-27-nonFixture}: Possibly create own component */,
      action: !isActive ? 'Expand' : 'Collapse',
    };
    trackingCallbacks.mobile.mobileCategoryItemClick(categoryItemTrackingProps);
  };

  const handleOnNestedClick = () => {
    console.log('Mobile Menu: Clicking nested collection from panel 2');
    handleTracking();
    onNestedCollectionClick(id);
  };

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
            menuSubnav={
              label
            } /* TODO{issue-26-nonFixture}: Explain menuSubnav coming from nested component */
          />
        ))}
      </ul>
    </>
  );
};

export { NestedCollection };
