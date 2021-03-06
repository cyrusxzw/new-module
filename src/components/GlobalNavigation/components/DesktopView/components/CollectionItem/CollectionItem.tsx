import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import type {
  CollectionItemType,
  CategoryItemTrackingType,
  CategoryItemTrackingWithActionType,
} from './CollectionItem.types';
import compositionStyles from '../../DesktopView.module.css';
import styles from './CollectionItem.module.css';

const CollectionItem: CollectionItemType = (props) => {
  const { isOpen, menuCategoryLabel } = useGlobalNavigationStateContext();
  const { isActive } = useMenuItemContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const { label, url, title } = props;
  let currentMetaDuration = '';
  let currentLabel = label;

  if (props.type === 'article') {
    currentMetaDuration = props.metaDuration;
  } else if (props.type === 'link') {
    currentLabel = props.alternateLabel || currentLabel;
  }

  const classSet = cx(
    styles.base,
    {
      [styles.article]: props.type === 'article',
    },
    styles[currentTheme],
  );

  const linkClassSet = cx(styles.element, compositionStyles.ornamentalWrapper);

  const labelClassSet = cx(
    { [styles.label]: !!currentMetaDuration },
    compositionStyles.ornamentalHover,
  );

  const { trackingCallbacks } = useGlobalNavigationContext();

  const categoryItemTrackingProps: CategoryItemTrackingType = {
    menuCategory: menuCategoryLabel,
    menuLabel: props.id,
    menuSection: props.panel,
    menuSubnav: props.menuSubnav,
    menuType: props.menuType,
  };

  const handleTracking = (
    categoryItemTrackingProps: CategoryItemTrackingWithActionType,
  ) => {
    trackingCallbacks.desktop.desktopCategoryItemClickOrHover(
      categoryItemTrackingProps,
    );
  };

  const handleOnClick = () => {
    handleTracking({
      ...categoryItemTrackingProps,
      action: 'Click',
    });
  };

  const handleOnMouseEnter = () => {
    handleTracking({
      ...categoryItemTrackingProps,
      action: 'Hover',
    });
  };

  return (
    <li className={classSet}>
      <Hyperlink
        className={linkClassSet}
        dataTestId={props.id}
        dataTestRef="CollectionItem"
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseEnter}
        tabIndex={!isOpen || !isActive ? -1 : null}
        title={title}
        url={url}
      >
        <span className={labelClassSet}>{currentLabel}</span>

        {!!currentMetaDuration && (
          <small className={styles.small}>{currentMetaDuration}</small>
        )}
        {props.type === 'link' && props.isExternal && (
          <>
            {' '}
            <Icon
              height={14}
              name="rightArrow"
              theme={currentTheme}
              width={14}
            />
          </>
        )}
      </Hyperlink>
    </li>
  );
};

export { CollectionItem };
