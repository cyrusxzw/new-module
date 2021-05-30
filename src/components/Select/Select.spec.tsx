import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

describe('<Select />', () => {
  it('should render Correcet select list with option UI', () => {
    const handleOnChange = jest.fn();

    render(
      <Select
        name="test-select"
        onChange={handleOnChange}
        options={[
          {
            id: 'item-id-1',
            label: 'item label 1',
            value: 'item value 1',
          },
          {
            id: 'item-id-2',
            label: 'item label 2',
            value: 'item value 2',
          },
        ]}
      />,
    );

    expect(
      screen.getByRole('combobox', { name: 'test-select' }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  it('should call the onChange callback on option change', () => {
    const handleOnChange = jest.fn();

    render(
      <Select
        name="test-select"
        onChange={handleOnChange}
        options={[
          {
            id: 'item-id-1',
            label: 'item label 1',
            value: 'item value 1',
          },
          {
            id: 'item-id-2',
            label: 'item label 2',
            value: 'item value 2',
          },
        ]}
      />,
    );

    userEvent.selectOptions(screen.getByRole('combobox'), 'item label 2');

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
