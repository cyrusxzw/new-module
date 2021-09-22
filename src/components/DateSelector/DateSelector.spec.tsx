import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateSelector } from './DateSelector';

describe('<DateSelector />', () => {
  const getDayDropDown = () => screen.getByRole('combobox', { name: 'Day' });
  const getMonthDropDown = () =>
    screen.getByRole('combobox', { name: 'Month' });
  const getYearDropDown = () => screen.getByRole('combobox', { name: 'Year' });

  it(`should prefill the fields with values if a default value is passed`, () => {
    render(<DateSelector value="2020-10-21" />);

    expect(getDayDropDown()).toHaveValue('21');
    expect(getMonthDropDown()).toHaveValue('10');
    expect(getYearDropDown()).toHaveValue('2020');
  });

  it(`should return the currently selected date if a value changes`, () => {
    const onChange = jest.fn();
    render(<DateSelector onChange={onChange} value="2020-09-11" />);

    userEvent.selectOptions(getDayDropDown(), ['29']);
    userEvent.selectOptions(getMonthDropDown(), ['03']);
    userEvent.selectOptions(getYearDropDown(), ['1990']);

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenLastCalledWith('1990-03-29');
  });

  it(`should return an empty strung if the currently selected date is not valid`, () => {
    const onChange = jest.fn();
    render(<DateSelector onChange={onChange} />);

    userEvent.selectOptions(getDayDropDown(), ['01']);

    // month and year not selected => returns empty string
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('');
  });

  it(`should update the day options when the year/month change`, () => {
    render(<DateSelector value="2020-02-29" />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(getDayDropDown().children.length).toEqual(29 + 1);
    expect(getDayDropDown()).toHaveValue('29');

    userEvent.selectOptions(getYearDropDown(), ['2019']);

    // eslint-disable-next-line testing-library/no-node-access
    expect(getDayDropDown().children.length).toEqual(28 + 1);
    expect(getDayDropDown()).toHaveValue('');
  });
});
