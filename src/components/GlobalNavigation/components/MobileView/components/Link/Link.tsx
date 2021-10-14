import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import type {
  CategoryItemTrackingWithMobileActionType,
  LinkType,
} from './Link.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './Link.module.css';
import {
  useGlobalNavigationContext,
  useGlobalNavigationStateContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';

const Link: LinkType = ({
  isTop,
  isNested,
  isVisible,
  label,
  menuSubnav,
  title,
  url,
  isExternal,
}) => {
  const currentTheme = useThemeContext(null, 'dark');

  const { trackingCallbacks } = useGlobalNavigationContext();
  const { menuType, menuCategoryLabel } = useGlobalNavigationStateContext();

  const handleTracking = () => {
    const categoryItemTrackingProps: CategoryItemTrackingWithMobileActionType = {
      menuCategory: menuCategoryLabel,
      menuLabel: label,
      menuSection: 'Panel 2',
      menuSubnav: menuSubnav,
      menuType: menuType,
      action: 'Click',
    };
    trackingCallbacks.mobile.mobileCategoryItemClick(categoryItemTrackingProps);
  };

  const handleOnClick = () => {
    handleTracking();
  };

  const classSet = cx(
    styles.base,
    styles[currentTheme],
    compositionStyles.itemElement,
    { [styles.top]: isTop },
    { [styles.nested]: isNested },
  );

  return (
    <Hyperlink
      className={classSet}
      onClick={handleOnClick}
      tabIndex={!isVisible ? -1 : null}
      title={title}
      url={url}
    >
      {label}
      {isExternal && (
        <>
          {' '}
          <Icon height={14} name="rightArrow" theme={currentTheme} width={14} />
        </>
      )}
    </Hyperlink>
  );
};

export { Link };
