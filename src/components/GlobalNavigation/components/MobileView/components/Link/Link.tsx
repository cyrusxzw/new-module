import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import type { LinkType } from './Link.types';
import compositionStyles from '../../MobileView.module.css';
import styles from './Link.module.css';

const Link: LinkType = ({
  isTop,
  isNested,
  isVisible,
  label,
  title,
  url,
  isExternal,
}) => {
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
