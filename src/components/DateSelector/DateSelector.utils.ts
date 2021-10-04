import { useEffect } from 'react';
import type { SelectProps } from '~/components/Select/Select.types';

type SelectOptions = SelectProps['options'];

const padNumber = (number: number): string =>
  number.toString().padStart(2, '0');

const generateDayOptions = (maxDays: number): SelectOptions => {
  const dayOptions = [];

  for (let i = 1; i <= maxDays; i++) {
    dayOptions.push({
      value: padNumber(i),
      label: i.toString(),
    });
  }

  return dayOptions;
};

const englishMonthsLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const generateMonthOptions = (
  monthLabels: string[] = englishMonthsLabels,
): SelectOptions => {
  return monthLabels.map((label, index) => ({
    label,
    value: padNumber(index + 1),
  }));
};

const generateYearOptions = (maxYears: number): SelectOptions => {
  const prevYear = new Date().getFullYear() - 1;
  const backDate = prevYear - maxYears;
  const yearOptions = [];

  for (let i = prevYear; i > backDate; i--) {
    yearOptions.push({
      value: i.toString(),
      label: i.toString(),
    });
  }

  return yearOptions;
};

const getMaxDaysInAMonth = (month: string, year: string): number =>
  new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate();

const splitIsoDate = (
  dateInIsoFormat?: string,
): { day: string; month: string; year: string } => {
  const emptyResult = { day: '', month: '', year: '' };

  if (!dateInIsoFormat) {
    return emptyResult;
  }

  const splitDate = dateInIsoFormat.split('-');

  if (splitDate.length !== 3) {
    return emptyResult;
  }

  const [year, month, day] = splitDate;
  return { day, month, year };
};

const useUpdateDayOptions = (
  date: string,
  setDayOptions: (dayOptions: SelectOptions) => void,
): void => {
  useEffect(() => {
    const { month, year } = splitIsoDate(date);

    if (month && year) {
      const maxDaysInMonth = getMaxDaysInAMonth(month, year);
      setDayOptions(generateDayOptions(maxDaysInMonth));
    }
  }, [date, setDayOptions]);
};

export {
  generateDayOptions,
  generateMonthOptions,
  generateYearOptions,
  getMaxDaysInAMonth,
  splitIsoDate,
  useUpdateDayOptions,
};
