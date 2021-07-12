import React from 'react';
import cx from 'classnames';
import find from 'lodash/find';
import { useThemeContext } from '~/contexts';
import { Heading } from '~/components/Heading/index.ts';
import type { StoreHoursListType } from './StoreHoursList.types';
import styles from './StoreHoursList.module.css';

const StoreHoursList: StoreHoursListType = ({
  alternateHoursNote,
  className,
  heading,
  hoursList = [],
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');

  if (hoursList.length === 0) {
    return null;
  }

  const classSet = cx(styles.base, styles[currentTheme], className);
  const hasAlternateHours = !!find(hoursList, 'isAlternate');

  return (
    <div className={classSet} data-testid="data-testid-StoreHoursList">
      {heading && (
        <Heading
          className={styles.heading}
          level="4"
          size="xXSmall"
          theme={currentTheme}
        >
          {heading}
        </Heading>
      )}

      <ul className={styles.list}>
        {hoursList.map((item) => (
          <li className={styles.item} key={item.id}>
            <span className={styles.dayName}>{item.dayName}</span>
            <span
              className={cx(styles.hours, {
                [styles.alternateHours]: item.isAlternate,
              })}
            >
              {item.hours}
            </span>
          </li>
        ))}
      </ul>
      {alternateHoursNote && hasAlternateHours && (
        <div className={styles.alternateHoursNote}>{alternateHoursNote}</div>
      )}
    </div>
  );
};

export { StoreHoursList };
