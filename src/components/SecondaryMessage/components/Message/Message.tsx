import React from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { ConditionalWrapper } from '~/components/ConditionalWrapper';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import type { MessageType } from './Message.types';
import styles from './Message.module.css';

const Message: MessageType = ({
  className,
  copy,
  heading,
  id,
  link,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(styles.base, styles[currentTheme], className);

  return (
    <div className={classSet} id={id}>
      <ConditionalWrapper
        condition={!!link}
        wrapper={(children) => (
          <Hyperlink className={styles.link} {...link}>
            {children}
          </Hyperlink>
        )}
      >
        <div className={styles.content}>
          <Heading className={styles.heading} level="4" size="xXSmall">
            <span>{heading}</span>
          </Heading>
          <div className={styles.copy}>{copy}</div>
        </div>
      </ConditionalWrapper>
    </div>
  );
};

export { Message };
