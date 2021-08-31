import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { useGlobalNavigationStateContext } from '~/components/GlobalNavigation/GlobalNavigation.context';
import { useMenuItemContext } from '~/components/GlobalNavigation/components/DesktopView/components/MenuItem/MenuItem.context';
import type { CollectionItemType } from './CollectionItem.types';
import compositionStyles from '../../DesktopView.module.css';
import styles from './CollectionItem.module.css';

const CollectionItem: CollectionItemType = (props) => {
  const { isOpen } = useGlobalNavigationStateContext();
  const { isActive } = useMenuItemContext();
  const currentTheme = useThemeContext(undefined, 'dark');

  const { id, label, url, title } = props;
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

  return (
    <li className={classSet} key={id}>
      <Hyperlink
        className={linkClassSet}
        tabIndex={!isOpen || !isActive ? -1 : null}
        title={title}
        url={url}
      >
        <span className={labelClassSet}>{currentLabel}</span>

        {!!currentMetaDuration && (
          <small className={styles.small}>{currentMetaDuration}</small>
        )}
      </Hyperlink>
    </li>
  );
};

export { CollectionItem };
