import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Button } from '~/components/Button';
import { Hyperlink } from '~/components/Hyperlink';
import type { CollectionItemType } from './CollectionItem.types';
import compositionStyles from '../../TabletView.module.css';
import styles from './CollectionItem.module.css';

const CollectionItem: CollectionItemType = ({
  dataTestRef,
  id,
  isActive = false,
  isVisible = true,
  label,
  title,
  ...rest
}) => {
  const currentTheme = useThemeContext(undefined, 'dark');

  const classSet = cx(
    styles.base,
    compositionStyles.ornamentalWrapper,
    styles[currentTheme],
  );

  const sharedProps = {
    dataTestRef,
    className: classSet,
    title,
    id,
    tabIndex: !isVisible ? -1 : null,
  };

  return rest.type === 'link' ? (
    <Hyperlink
      dataTestId={id}
      dataTestRef="CollectionItem"
      {...sharedProps}
      url={rest.url}
    >
      <span className={compositionStyles.ornamentalHover}>{label}</span>
    </Hyperlink>
  ) : (
    <Button
      {...sharedProps}
      aria={{
        expanded: isActive,
        haspopup: true,
      }}
      isInline={true}
      onClick={rest.onClick}
    >
      <span className={compositionStyles.ornamentalHover}>{label}</span>
    </Button>
  );
};

export { CollectionItem };
