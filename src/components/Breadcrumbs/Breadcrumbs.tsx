import React, { FC } from 'react';
import cx from 'classnames';
import { isObjectPopulatedArray } from '~/utils/objects';
import { Hyperlink } from '~/components/Hyperlink';
import type { BreadcrumbsProps } from './Breadcrumbs.types';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  className,
  items,
  theme = 'dark',
}) => {
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

export { Breadcrumbs };
