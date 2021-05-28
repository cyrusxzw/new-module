import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreHoursList } from './StoreHoursList';

describe('<StoreHoursList />', () => {
  it('should render correct number of list items', () => {
    render(
      <StoreHoursList
        hoursList={[
          { dayName: 'dayName 1', hours: 'hours 1', id: '1' },
          { dayName: 'dayName 2', hours: 'hours 2', id: '2' },
        ]}
      />,
    );

    expect(screen.getAllByRole('listitem').length).toEqual(2);
  });

  it('should display a heading if `heading` prop is provided', () => {
    render(
      <StoreHoursList
        heading="store hours list heading"
        hoursList={[{ dayName: 'dayName 1', hours: 'hours 1', id: '1' }]}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'store hours list heading' }),
    ).toBeInTheDocument();
  });

  it('should display a note if the `alternateHoursNote` prop is provided and an item has alternate hours', () => {
    const { rerender } = render(
      <StoreHoursList
        alternateHoursNote="alternate hours note"
        hoursList={[
          {
            dayName: 'dayName 1',
            hours: 'hours 1',
            id: '1',
            isAlternate: true,
          },
        ]}
      />,
    );

    expect(screen.getByText('alternate hours note')).toBeInTheDocument();

    rerender(
      <StoreHoursList
        alternateHoursNote="alternate hours note"
        hoursList={[
          {
            dayName: 'dayName 1',
            hours: 'hours 1',
            id: '1',
            isAlternate: false,
          },
        ]}
      />,
    );

    expect(screen.queryByText('alternate hours note')).not.toBeInTheDocument();
  });

  it('should not display any UI if the `list` prop is not provided or is empty', () => {
    render(<StoreHoursList />);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
