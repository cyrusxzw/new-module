import React from 'react';
import { useUID } from 'react-uid';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import type { TwoColumnLayoutType } from './TwoColumnLayout.types';
import styles from './TwoColumnLayout.module.css';

const TwoColumnLayout: TwoColumnLayoutType = ({
  childrenClassNames,
  className,
  content,
  hasFullWidthContent = false,
  id,
  isFlushOnSmall = false,
  isReversed = true,
  sidebar,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const uid = useUID();

  const classSet = cx(
    styles.base,
    { [styles.reverse]: isReversed },
    { [styles.contentOnly]: !sidebar },
    styles[currentTheme],
    className,
  );
  const contentClassSet = cx(
    styles.content,
    { [styles.fullWidth]: hasFullWidthContent },
    { [styles.flushOnSmall]: isFlushOnSmall },
    childrenClassNames?.content,
  );
  const sidebarClassSet = cx(styles.sidebar, childrenClassNames?.sidebar);

  return (
    <div className={classSet} id={id}>
      <div
        className={contentClassSet}
        data-testid="data-testid-TwoColumnLayout"
        id={`${id || uid}-mainColumn`}
      >
        {content}
      </div>
      {sidebar && (
        <aside className={sidebarClassSet} id={`${id || uid}-sidebarColumn`}>
          {sidebar}
        </aside>
      )}
    </div>
  );
};

export { TwoColumnLayout };
