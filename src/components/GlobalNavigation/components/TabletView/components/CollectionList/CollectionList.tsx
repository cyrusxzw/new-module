import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import type { CollectionListType } from './CollectionList.types';
import compositionStyles from '../../TabletView.module.css';
import styles from './CollectionList.module.css';

const CollectionList: CollectionListType = ({
  heading,
  isVisible = true,
  items,
}) => {
  const currentTheme = useThemeContext(undefined, 'dark');

  const headingClassSet = cx(
    styles.collectionHeading,
    compositionStyles.collectionItemLabel,
  );

  const elementClassSet = cx(
    compositionStyles.collectionItemLabel,
    compositionStyles.ornamentalWrapper,
  );

  return (
    <>
      {heading && <strong className={headingClassSet}>{heading}</strong>}

      <ul
        aria-hidden={!isVisible}
        aria-label="submenu"
        className={compositionStyles.list}
      >
        {items.map((item) => (
          <li className={compositionStyles.collectionItem} key={item.id}>
            <Hyperlink
              className={elementClassSet}
              dataTestRef={item.dataTestRef}
              id={item.id}
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
