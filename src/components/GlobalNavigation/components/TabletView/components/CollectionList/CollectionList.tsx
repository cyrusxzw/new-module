import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import type { CollectionListType } from './CollectionList.types';
import compositionStyles from '../../TabletView.module.css';
// import styles from './CollectionList.module.css';

const CollectionList: CollectionListType = ({ heading, id, items }) => {
  const { activeCollectionId } = useGlobalNavigationStateContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  return (
    <>
      {!!heading && (
        <strong
          className={cx(
            compositionStyles.collectionHeading,
            compositionStyles.collectionItemLabel,
          )}
        >
          {heading}
        </strong>
      )}

      <ul
        aria-hidden={activeCollectionId !== id}
        aria-label="submenu"
        className={compositionStyles.list}
      >
        {items.map((item) => (
          <li className={compositionStyles.collectionItem} key={item.id}>
            <Hyperlink
              className={cx(
                compositionStyles.collectionItemLabel,
                compositionStyles.ornamentalWrapper,
              )}
              dataTestRef={item.dataTestRef}
              id={item.id}
              tabIndex={activeCollectionId !== id ? -1 : null}
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
