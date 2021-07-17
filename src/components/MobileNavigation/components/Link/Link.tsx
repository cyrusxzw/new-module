import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import type { LinkType } from './Link.types';
import compositionStyles from '~/components/MobileNavigation/MobileNavigation.module.css';
import styles from './Link.module.css';

const Link: LinkType = ({ isActive, isNested, label, title, url }) => {
  const currentTheme = useThemeContext(null, 'dark');
  const classSet = cx(
    styles.base,
    styles[currentTheme],
    compositionStyles.itemElement,
    { [styles.nested]: isNested },
  );

  return (
    <Hyperlink
      className={classSet}
      tabIndex={!isActive ? -1 : null}
      title={title}
      url={url}
    >
      <span className={compositionStyles.ornimentalHover}>{label}</span>
    </Hyperlink>
  );
};

export { Link };
