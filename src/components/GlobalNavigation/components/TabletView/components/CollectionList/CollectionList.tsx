import React from 'react';
import cx from 'classnames';
import { Heading } from '~/components/Heading';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import type {
  CategoryItemTrackingWithActionType,
  CollectionListType,
} from './CollectionList.types';
import compositionStyles from '../../TabletView.module.css';
import styles from './CollectionList.module.css';
import {
  useGlobalNavigationStateContext,
  useGlobalNavigationContext,
} from '~/components/GlobalNavigation/GlobalNavigation.context';

const CollectionList: CollectionListType = ({
  heading,
  isVisible = true,
  items,
}) => {
  const currentTheme = useThemeContext(undefined, 'dark');
  const { menuType } = useGlobalNavigationStateContext();
  const { trackingCallbacks } = useGlobalNavigationContext();

  const headingClassSet = cx(
    styles.collectionHeading,
    compositionStyles.collectionItemLabel,
    {
      [styles.menuOpen]: isVisible,
      [styles.menuClosed]: !isVisible,
    },
  );

  const elementClassSet = cx(
    compositionStyles.collectionItemLabel,
    compositionStyles.ornamentalWrapper,
  );

  const handleOnClick = (
    categoryItemTrackingWithActionProps: CategoryItemTrackingWithActionType,
  ) => {
    trackingCallbacks.tablet.tabletCategoryItemClick(
      categoryItemTrackingWithActionProps,
    );
  };

  return (
    <>
      {heading && (
        <Heading className={headingClassSet} level={'2'} size={'small'}>
          {heading}
        </Heading>
      )}

      <ul aria-hidden={!isVisible} className={compositionStyles.list}>
        {items.map((item) => (
          <li className={compositionStyles.collectionItem} key={item.id}>
            <Hyperlink
              className={elementClassSet}
              dataTestId={item.id}
              dataTestRef={item.dataTestRef || 'CollectionItem'}
              id={item.id}
              onClick={() =>
                handleOnClick({
                  menuSection: 'Panel 2',
                  menuType: menuType,
                  menuLabel: item.label, // TODO{issue-21-nonFixture}: add translated english label value here in {currentLabel}
                  menuCategory: heading, // TODO{issue-21-nonFixture}: add translated english label value here in {context}
                  menuSubnav: heading, // TODO{issue-21-nonFixture}: add translated english label value here in {PROP}
                  action: 'Click',
                })
              }
              tabIndex={!isVisible ? -1 : null}
              title={item.title}
              url={item.url}
            >
              <span className={compositionStyles.ornamentalHover}>
                {item.label}
              </span>
              {item.isExternal && (
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
        ))}
      </ul>
    </>
  );
};

export { CollectionList };
