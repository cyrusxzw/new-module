import React, { forwardRef, ReactElement } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Heading } from '~/components/Heading';
import { Hyperlink } from '~/components/Hyperlink';
import { List } from '~/components/List';
import type { ListItem } from '~/components/List/List.types';
import type { TwoColumnListProps, ColumnProps } from './TwoColumnList.types';
import styles from './TwoColumnList.module.css';

const TwoColumnList = forwardRef<HTMLDivElement, TwoColumnListProps>(
  function TwoColumnListRef(
    { className, leftColumn, rightColumn, theme },
    ref,
  ) {
    const currentTheme = useThemeContext(theme, 'dark');
    const classSet = cx(styles.base, styles[currentTheme], className);

    return (
      <div className={classSet} ref={ref}>
        <Column lists={leftColumn} theme={theme} />
        <Column lists={rightColumn} theme={theme} />
      </div>
    );
  },
);

export function Column({ lists, theme }: ColumnProps): ReactElement | null {
  return (
    <div className={styles.column}>
      {lists.map(({ heading, id, items, subHeading }) => {
        const linkItems: ListItem[] = items.map(
          ({ id, style, text, url, openInANewWindow }) => ({
            content: !url ? (
              text
            ) : (
              <Hyperlink
                className={styles.link}
                hasTargetInNewWindow={openInANewWindow}
                style={style}
                theme={theme}
                url={url}
              >
                {text}
              </Hyperlink>
            ),
            id,
          }),
        );

        return (
          <div className={styles.wrapper} key={id}>
            <Heading
              className={styles.heading}
              level="2"
              size="large"
              theme={theme}
            >
              {heading}
            </Heading>

            <Heading
              hasMediumWeightFont={true}
              level="3"
              size="xSmall"
              theme={theme}
            >
              {subHeading}
            </Heading>

            <List
              className={styles.list}
              items={linkItems}
              listItemClassName={styles.item}
              theme={theme}
            />
          </div>
        );
      })}
    </div>
  );
}

export { TwoColumnList };
