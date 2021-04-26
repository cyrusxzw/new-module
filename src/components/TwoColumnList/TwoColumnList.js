import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '~/components/Heading/index.ts';
import { Hyperlink } from '~/components/Hyperlink';
import { List } from '~/components/List';
import styles from './TwoColumnList.module.css';

export const Column = ({ lists, theme }) =>
  lists.map(({ heading, id, items, subHeading }) => {
    const linkItems = items.map(
      ({ id, style, text, url, openInANewWindow, type, onClick }) => {
        if (!url) {
          return {
            content: text,
            id,
          };
        }

        return {
          content: (
            <Hyperlink
              className={styles.link}
              onClick={onClick}
              openInANewWindow={openInANewWindow}
              style={style}
              theme={theme}
              type={type}
              url={url}
            >
              {text}
            </Hyperlink>
          ),
          id,
        };
      },
    );

    return (
      <div className={styles.wrapper} key={id}>
        {heading && (
          <Heading
            className={styles.heading}
            level="2"
            size="large"
            theme={theme}
          >
            {heading}
          </Heading>
        )}
        {subHeading && (
          <Heading
            hasMediumWeightFont={true}
            level="3"
            size="xSmall"
            theme={theme}
          >
            {subHeading}
          </Heading>
        )}
        {linkItems && (
          <List
            className={styles.list}
            items={linkItems}
            listItemClassName={styles.item}
            theme={theme}
          />
        )}
      </div>
    );
  });

const TwoColumnList = forwardRef(
  ({ className, leftColumn, rightColumn, theme }, ref) => {
    const classSet = cx(styles.base, styles[theme], className);

    return (
      <div className={classSet} ref={ref}>
        <div className={styles.column}>
          <Column lists={leftColumn} theme={theme} />
        </div>
        <div className={styles.column}>
          <Column lists={rightColumn} theme={theme} />
        </div>
      </div>
    );
  },
);

TwoColumnList.propTypes = {
  className: PropTypes.string,
  leftColumn: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string,
      subHeading: PropTypes.string,
      items: PropTypes.array,
    }),
  ).isRequired,
  rightColumn: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string,
      subHeading: PropTypes.string,
      items: PropTypes.array,
    }),
  ).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

TwoColumnList.defaultProps = {
  className: undefined,
  leftColumn: undefined,
  rightColumn: undefined,
  theme: 'dark',
};

export { TwoColumnList };
