import React, { ReactElement } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Message } from './components/Message';
import type { SecondaryMessageProps } from './SecondaryMessage.types';
import styles from './SecondaryMessage.module.css';

const SecondaryMessage = ({
  className,
  id,
  items,
  theme,
}: SecondaryMessageProps): ReactElement | null => {
  const currentTheme = useThemeContext(theme, 'dark');

  if (!items || items.length === 0) {
    return null;
  }

  const hasMultipleMessages = items.length > 1;
  const classSet = cx(styles.base, styles[currentTheme], className);

  return (
    <section
      className={styles.wrapper}
      data-testid="data-testid-SecondaryMessage"
    >
      <aside className={classSet} id={id}>
        {items.map((item, index) => {
          const { id, ...props } = item;
          return (
            <Message
              className={cx({
                [styles.multiple]: hasMultipleMessages,
              })}
              key={id || index}
              theme={currentTheme}
              {...props}
            />
          );
        })}
      </aside>
    </section>
  );
};

export { SecondaryMessage };
