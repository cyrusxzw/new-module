import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { List } from '~/components/List';
import styles from './KitList.module.css';

const KitList = forwardRef(function KitListRef(
  { className, isVisible, items, theme },
  ref,
) {
  const classSet = cx(styles.base, styles[theme], className);
  const listItemClassSet = cx(styles.item, { [styles.slideIn]: isVisible });

  return (
    <List
      className={classSet}
      items={items}
      listItemClassName={listItemClassSet}
      ref={ref}
      theme={theme}
    />
  );
});

KitList.propTypes = {
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
        .isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

KitList.defaultProps = {
  className: undefined,
  isVisible: true,
  items: undefined,
  theme: 'dark',
};

export { KitList };
