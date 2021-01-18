import React from 'react';
import { render } from '@testing-library/react';
import { StoreHoursListFixture } from '~/components/StoreHoursList/StoreHoursList.fixture';
import { StoreDetailHeader } from './StoreDetailHeader';
import { StoreDetailHeaderFixture } from './StoreDetailHeader.fixture';

describe('<StoreDetailHeader />', () => {
  it('should be defined', () => {
    expect(StoreDetailHeader).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <StoreDetailHeader
        alternateHoursNote={StoreHoursListFixture.alternateHoursNote}
        copy={{
          location: StoreDetailHeaderFixture.copy.location,
          openingHours: StoreDetailHeaderFixture.copy.openingHours,
          phone: StoreDetailHeaderFixture.copy.phone,
          email: StoreDetailHeaderFixture.copy.email,
        }}
        email={StoreDetailHeaderFixture.email}
        location={StoreDetailHeaderFixture.location}
        openingHours={StoreHoursListFixture.hoursList}
        phone={StoreDetailHeaderFixture.phone}
        storeName={StoreDetailHeaderFixture.storeName}
        theme={'dark'}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
