import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './GridOverlay.module.css';

const generateColumns = () => {
  const columns = [];

  for (let columnCount = 12; columnCount > 0; columnCount--) {
    columns.push(<li className={styles.column} />);
  }

  return columns;
};

const GridOverlay = ({ hasInvertedColours = false, isActive = false }) => {
  if (!isActive) return false;

  return (
    <div
      className={cx(styles.base, { [styles.invertColour]: hasInvertedColours })}
    >
      <div className={cx(styles.gutter, styles.left)} />
      {generateColumns()}
      <div className={cx(styles.gutter, styles.right)} />
    </div>
  );
};

GridOverlay.propTypes = {
  hasInvertedColours: PropTypes.bool,
  isActive: PropTypes.bool,
};

export { GridOverlay };
