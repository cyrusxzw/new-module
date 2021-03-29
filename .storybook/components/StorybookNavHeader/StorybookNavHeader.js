import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './StorybookNavHeader.module.css';

const StorybookNavHeader = ({ isActive = false, theme = 'dark' }) => {
  if (!isActive) return null;

  return (
    <div className={cx(styles[theme])}>
      <nav className={styles.nav}>
        <li>Shop</li>
        <li>Read</li>
        <li>Search</li>
        <li>Stores</li>
        <li className={styles.mobile}>Cart</li>
      </nav>
      <span className={styles.logo}>Aēsop</span>
    </div>
  );
};

StorybookNavHeader.propTypes = {
  isActive: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

export { StorybookNavHeader };
