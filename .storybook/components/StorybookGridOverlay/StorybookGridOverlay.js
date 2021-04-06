import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './StorybookGridOverlay.module.css';

const generateColumns = () => {
  const columns = [];

  for (let columnCount = 12; columnCount > 0; columnCount--) {
    columns.push(<li key={columnCount} className={styles.column} />);
  }

  return columns;
};

const StorybookGridOverlay = ({
  hasInvertedColours = false,
  isActive = false,
}) => {
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

StorybookGridOverlay.propTypes = {
  hasInvertedColours: PropTypes.bool,
  isActive: PropTypes.bool,
};

export { StorybookGridOverlay };
