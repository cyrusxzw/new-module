import React, { useState, useCallback } from 'react';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import { Select } from '~/components/Select';
import {
  generateDayOptions,
  generateMonthOptions,
  generateYearOptions,
  splitIsoDate,
  useUpdateDayOptions,
  useUpdateDayValue,
} from './DateSelector.utils';
import type { DatePortion, DateSelectorType } from './DateSelector.types';
import styles from './DateSelector.module.css';

const DateSelector: DateSelectorType = ({
  copy,
  maxYears = 100,
  name = 'date-selector',
  onChange,
  theme,
  value = '',
}) => {
  const currentTheme = useThemeContext(theme, 'dark');
  const [date, setDate] = useState(value);
  const { day, month, year } = splitIsoDate(date);
  const [dayOptions, setDayOptions] = useState(generateDayOptions(31));

  const classSet = cx(styles.base, styles[currentTheme]);

  const updateDate = useCallback(
    (portion: DatePortion, value: string) => {
      const newDay = portion === 'day' ? value : day;
      const newMonth = portion === 'month' ? value : month;
      const newYear = portion === 'year' ? value : year;
      const isNewDateValid = !!newDay && !!newMonth && !!newYear;

      setDate(() => {
        const newDate = [newYear, newMonth, newDay].join('-');
        onChange?.(isNewDateValid ? newDate : '');
        return newDate;
      });
    },
    [day, month, onChange, year],
  );

  useUpdateDayOptions(date, setDayOptions);
  useUpdateDayValue(date, updateDate);

  return (
    <div className={classSet}>
      <Select
        className={cx(styles.dropDown)}
        label={copy?.day ?? 'Day'}
        name={`${name}-day`}
        onChange={(event) => {
          updateDate('day', event.target.value);
        }}
        options={dayOptions}
        theme={currentTheme}
        value={day}
      />
      <Select
        className={cx(styles.dropDown)}
        label={copy?.month ?? 'Month'}
        name={`${name}-month`}
        onChange={(event) => {
          updateDate('month', event.target.value);
        }}
        options={generateMonthOptions(copy?.monthLabels)}
        theme={currentTheme}
        value={month}
      />
      <Select
        className={cx(styles.dropDown)}
        label={copy?.year ?? 'Year'}
        name={`${name}-year`}
        onChange={(event) => {
          updateDate('year', event.target.value);
        }}
        options={generateYearOptions(maxYears)}
        theme={currentTheme}
        value={year}
      />
    </div>
  );
};

export { DateSelector };
