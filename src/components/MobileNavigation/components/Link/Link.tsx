import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import type { LinkType } from './Link.types';
import compositionStyles from '../../MobileNavigation.module.css';
import styles from './Link.module.css';

const Link: LinkType = ({ isTop, isNested, isVisible, label, title, url }) => {
  const currentTheme = useThemeContext(null, 'dark');
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
      tabIndex={!isVisible ? -1 : null}
      title={title}
      url={url}
    >
      {label}
    </Hyperlink>
  );
};

export { Link };
