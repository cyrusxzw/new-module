import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isObjectPopulatedArray } from '~/utils/objects';
import { Hyperlink } from '~/components/Hyperlink';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ className, items, theme }) => {
  if (!items || !isObjectPopulatedArray(items)) {
    return null;
  }

  const classSet = cx(styles.base, styles[theme], className);

  return (
    <nav className={classSet} data-testid="data-testid-Breadcrumbs">
      <ul className={styles.list}>
        {items.map(item => (
          <li className={styles.item} key={item.id}>
            <Hyperlink
              className={styles.link}
              id={item.id}
              theme={theme}
              title={item.title}
              url={item.url}
            >
              {item.label}
            </Hyperlink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  theme: PropTypes.oneOf(['dark', 'light']),
};

Breadcrumbs.defaultProps = {
  className: undefined,
  items: undefined,
  theme: 'dark',
};

export { Breadcrumbs };
