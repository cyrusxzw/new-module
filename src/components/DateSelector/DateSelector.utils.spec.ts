import {
  generateDayOptions,
  generateMonthOptions,
  generateYearOptions,
  getMaxDaysInAMonth,
  splitIsoDate,
} from './DateSelector.utils';

describe(`DateSelector - utils`, () => {
  describe(`generateDayOptions`, () => {
    it(`should return the correct dropdown options`, () => {
      const expected = [
        { label: '1', value: '01' },
        { label: '2', value: '02' },
        { label: '3', value: '03' },
      ];

      expect(generateDayOptions(3)).toEqual(expected);
    });
  });

  describe(`generateMonthOptions`, () => {
    it(`should generate the correct month options when an array is passed`, () => {
      const monthLabels = ['Janvier', 'Marcha'];
      const expected = [
        { label: monthLabels[0], value: '01' },
        { label: monthLabels[1], value: '02' },
      ];

      expect(generateMonthOptions(monthLabels)).toEqual(expected);
    });

    it(`should generate the correct month options using English if labels aren't provided`, () => {
      const expected = [
        {
          label: 'January',
          value: '01',
        },
        {
          label: 'February',
          value: '02',
        },
        {
          label: 'March',
          value: '03',
        },
        {
          label: 'April',
          value: '04',
        },
        {
          label: 'May',
          value: '05',
        },
        {
          label: 'June',
          value: '06',
        },
        {
          label: 'July',
          value: '07',
        },
        {
          label: 'August',
          value: '08',
        },
        {
          label: 'September',
          value: '09',
        },
        {
          label: 'October',
          value: '10',
        },
        {
          label: 'November',
          value: '11',
        },
        {
          label: 'December',
          value: '12',
        },
      ];

      expect(generateMonthOptions()).toEqual(expected);
    });
  });

  describe(`generateYearOptions`, () => {
    it(`should generate the correct year options`, () => {
      const expected = [
        { value: '2020', label: '2020' },
        { value: '2019', label: '2019' },
        { value: '2018', label: '2018' },
        { value: '2017', label: '2017' },
      ];

      expect(generateYearOptions(4)).toEqual(expected);
    });
  });

  describe(`getMaxDaysInAMonth`, () => {
    it.each([
      ['02', '2020', 29],
      ['02', '2019', 28],
      ['01', '2021', 31],
      ['04', '2021', 30],
    ])(
      'should return the correct number of days in %s of year %s',
      (month, year, expected) => {
        expect(getMaxDaysInAMonth(month, year)).toEqual(expected);
      },
    );
  });

  describe(`splitIsoDate`, () => {
    const emptyResult = { day: '', month: '', year: '' };

    it(`should return empty strings if a date isn't provided`, () => {
      expect(splitIsoDate()).toEqual(emptyResult);
    });

    it(`should return empty strings if the date is not valid`, () => {
      expect(splitIsoDate('2020-10-04-22')).toEqual(emptyResult);
    });

    it(`should return the date segments if the date is valid`, () => {
      expect(splitIsoDate('2020-10-04')).toEqual({
        day: '04',
        month: '10',
        year: '2020',
      });
    });
  });
});
