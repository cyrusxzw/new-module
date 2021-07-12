import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreDetailHeader } from './StoreDetailHeader';

describe('<StoreDetailHeader />', () => {
  it('should render correct UI elements and copy', () => {
    render(
      <StoreDetailHeader
        alternateHoursNote="alternateHoursNote"
        copy={{
          location: 'location label',
          openingHours: 'openingHours label',
          phone: 'phone label',
          email: 'email label',
        }}
        email="email content"
        location="location content"
        openingHours={[
          { dayName: 'dayName 1', hours: 'hours 1', id: '1' },
          { dayName: 'dayName 2', hours: 'hours 2', id: '2' },
        ]}
        phone="phone content"
        storeName="storeName"
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'storeName' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'location label' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'email label' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'phone label' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'openingHours label' }),
    ).toBeInTheDocument();
    expect(screen.getByText('location content')).toBeInTheDocument();
    expect(screen.getByText('email content')).toBeInTheDocument();
    expect(screen.getByText('phone content')).toBeInTheDocument();
  });
});
