import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useFocusOnFirst } from '~/customHooks';
import { Transition } from '~/components/Transition';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMobileViewContext } from '~/components/GlobalNavigation/components/MobileView/MobileView.context';
import { ListItem } from '../ListItem';
import type {
  CategoryItemTrackingWithMobileActionType,
  CollectionType,
  MenuItemTrackingWithMobileActionType,
} from './Collection.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './Collection.module.css';

const Collection: CollectionType = ({
  backLabel,
  id,
  isVisible,
  items,
  label,
  promotion,
  shouldHideTopCollection = false,
  title,
}) => {
  const {
    activeCollectionId,
    setActiveCollectionId,
    setMenuCategoryLabel,
  } = useGlobalNavigationStateContext();

  const { trackingCallbacks } = useGlobalNavigationContext();

  const isActive = activeCollectionId === id;

  const { setActiveNestedCollectionIds } = useMobileViewContext();
  const currentTheme = useThemeContext(null, 'dark');

  const [listRef] = useFocusOnFirst(
    isActive,
    'a:not([tabindex="-1"]), button:not([tabindex="-1"])',
  );

  const handleTracking = (itemTrackingProps, isMenuItem: boolean) => {
    if (isMenuItem) {
      trackingCallbacks.mobile.mobileCategoryItemClick(
        itemTrackingProps as CategoryItemTrackingWithMobileActionType,
      );
    } else {
      trackingCallbacks.mobile.mobileMenuItemClick(
        itemTrackingProps as MenuItemTrackingWithMobileActionType,
      );
    }
  };

  const handleOnClick = (
    menuItemTrackingProps: MenuItemTrackingWithMobileActionType,
  ) => {
    handleTracking(menuItemTrackingProps, true);
    setMenuCategoryLabel(id);
    setActiveCollectionId(id);
  };

  const handleOnBackButtonClick = (
    categoryItemTrackingProps: CategoryItemTrackingWithMobileActionType,
  ) => {
    handleTracking(categoryItemTrackingProps, false);
    setActiveCollectionId('top');
    setActiveNestedCollectionIds([]);
  };

  const listClassSet = cx(
    compositionStyles.list,
    compositionStyles.sublist,
    compositionStyles.slide,
  );

  const forwardIconClassSet = cx(
    styles.directionIcon,
    styles.forward,
    styles[currentTheme],
  );

  const backButtonClassSet = cx(
    compositionStyles.itemElement,
    styles.backButton,
  );

  const backIconClassSet = cx(
    styles.directionIcon,
    styles.backwards,
    styles[currentTheme],
  );

  return (
    <>
      {!shouldHideTopCollection && (
        <Button
          aria={{
            expanded: isActive,
            haspopup: true,
            hidden: !isActive,
          }}
          className={compositionStyles.itemElement}
          data-testid="MOBILE_COLLECTION_FORWARD_BTN"
          isInline={true}
          onClick={() =>
            handleOnClick({
              menuCategory: 'None',
              menuLabel: id,
              menuSection: 'Panel 1',
              menuType: 'Shop',
              action: 'Click',
            })
          }
          tabIndex={activeCollectionId === 'top' && isVisible ? null : -1}
          theme={currentTheme}
          title={title}
        >
          {label}
          <Icon
            className={forwardIconClassSet}
            height={12}
            name="chevron"
            theme={currentTheme}
            width={12}
          />
        </Button>
      )}

      <Transition
        isActive={isActive && !!items && !!items.length}
        type="slideLeft"
      >
        <ul
          aria-hidden={!isActive}
          aria-label="submenu"
          className={listClassSet}
          ref={listRef}
        >
          <li className={compositionStyles.listItem}>
            <Button
              aria={{ hidden: !isActive, label: 'back' }}
              className={backButtonClassSet}
              data-testid="MOBILE_COLLECTION_BACK_BTN"
              isInline={true}
              onClick={() =>
                handleOnBackButtonClick({
                  menuCategory: 'None',
                  menuLabel: id,
                  menuSection: 'Panel 2',
                  menuSubnav: 'None',
                  menuType: 'Shop',
                  action: 'Back',
                })
              }
              tabIndex={isActive ? null : -1}
              theme={currentTheme}
              title={backLabel}
            >
              <Icon
                className={backIconClassSet}
                height={14}
                name="chevron"
                width={14}
              />{' '}
              {backLabel || label}
            </Button>
          </li>

          {items.map((props, index) => (
            <ListItem
              isVisible={isActive}
              itemIndex={index}
              itemProps={props}
              key={props.label}
            />
          ))}

          {promotion && <ListItem isVisible={isActive} itemProps={promotion} />}
        </ul>
      </Transition>
    </>
  );
};

export { Collection };
