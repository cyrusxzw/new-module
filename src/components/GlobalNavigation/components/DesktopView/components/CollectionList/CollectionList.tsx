import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import type { CollectionListType } from './CollectionList.types';
import compositionStyles from '../../DesktopView.module.css';
import styles from './CollectionList.module.css';

const CollectionList: CollectionListType = ({ heading, items, eyebrow }) => {
  const { isOpen } = useGlobalNavigationStateContext();
  const { isActive } = useMenuItemContext();
  const currentTheme = useThemeContext(undefined, 'dark');
  const listClassSet = cx(styles.list, styles[currentTheme]);

  return (
    <>
      {eyebrow && (
        <small className={cx(styles.eyebrow, styles.small)}>{eyebrow}</small>
      )}
      {heading && <strong className={styles.heading}>{heading}</strong>}

      <ul className={listClassSet}>
        {items.map((props) => {
          const { id, label, url, title } = props;

          let currentDuration = '';
          let currentLabel = label;

          if (props.type === 'article') {
            currentDuration = props.duration;
          } else if (props.type === 'link') {
            currentLabel = props.alternateLabel || currentLabel;
          }

          const itemClassSet = cx(styles.item, {
            [styles.article]: !!currentDuration,
          });

          const linkClassSet = cx(
            styles.itemElement,
            compositionStyles.ornamentalWrapper,
          );

          const labelClassSet = cx(
            { [styles.itemLabel]: !!currentDuration },
            compositionStyles.ornamentalHover,
          );

          return (
            <li className={itemClassSet} key={id}>
              <Hyperlink
                className={linkClassSet}
                tabIndex={!isOpen || !isActive ? -1 : null}
                title={title}
                url={url}
              >
                <span className={labelClassSet}>{currentLabel}</span>
                {!!currentDuration && (
                  <small className={styles.small}>{currentDuration}</small>
                )}
              </Hyperlink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { CollectionList };
