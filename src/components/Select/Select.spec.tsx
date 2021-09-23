import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Select } from './Select';

describe('<Select />', () => {
  const name = 'character-select';
  const label = 'Select your character';
  const options = [
    { id: 'option1', label: 'Rick', value: 'rick' },
    { label: 'Morty', value: 'morty' },
  ];
  const onChange = () => {
    return;
  };

  it('should call the event handling props correctly', async () => {
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const onFocus = jest.fn();

    const { container } = render(
      <Select
        label={label}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
      />,
    );
    const dropDownElement = screen.getByRole('combobox');

    dropDownElement.focus();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledWith(expect.anything());

    userEvent.selectOptions(dropDownElement, options[0].value);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.anything());

    dropDownElement.blur();
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledWith(expect.anything());

    const a11lyResults = await axe(container);
    expect(a11lyResults).toHaveNoViolations();
  });

  it(`should add an option with the label's text and empty value when the label is provided`, () => {
    render(
      <Select
        label={label}
        name={name}
        onChange={onChange}
        options={options}
      />,
    );
    const dropDownElement = screen.getByRole('combobox');

    expect(dropDownElement.childElementCount).toEqual(options.length + 1);
  });

  it(`should have only the passed in options if a label isn't provided`, () => {
    render(<Select name={name} onChange={onChange} options={options} />);
    const dropDownElement = screen.getByRole('combobox');

    expect(dropDownElement.childElementCount).toEqual(options.length);
  });

  it(`should show an errorMessage and set it as the description if provided`, async () => {
    const errorMessage = 'oooo weee';

    const { container } = render(
      <Select
        errorMessage={errorMessage}
        name={name}
        onChange={onChange}
        options={options}
      />,
    );
    const dropDownElement = screen.getByRole('combobox');
    const errorMessageElement = screen.getByText(errorMessage);

    expect(errorMessageElement).toBeVisible();
    expect(dropDownElement).toHaveAccessibleDescription(errorMessage);

    const a11lyResults = await axe(container);
    expect(a11lyResults).toHaveNoViolations();
  });

  it('should function correctly without onFocus and onBlur props', async () => {
    render(<Select name={name} onChange={onChange} options={options} />);
    const dropDownElement = screen.getByRole('combobox');

    dropDownElement.focus();
    userEvent.selectOptions(dropDownElement, options[1].value);
    dropDownElement.blur();

    expect(dropDownElement).toHaveValue(options[1].value);

    // TODO: suffers from this issue https://github.com/nickcolley/jest-axe/issues/147
    // const a11lyResults = await axe(container);
    // expect(a11lyResults).toHaveNoViolations();
  });

  it(`should disable the input when isEnabled is false`, () => {
    render(
      <Select
        isEnabled={false}
        label="disabled dropdown"
        name={name}
        onChange={onChange}
        options={options}
      />,
    );
    const dropDownElement = screen.getByRole('combobox');

    expect(dropDownElement).toBeDisabled();
  });
});
