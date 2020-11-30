import React from 'react';
import renderer from 'react-test-renderer';
import StoreHoursListFixture from '~/components/StoreHoursList/StoreHoursList.fixture';
import StoreDetailHeader from './StoreDetailHeader';
import StoreDetailHeaderFixture from './StoreDetailHeader.fixture';

describe('<StoreDetailHeader />', () => {
  it('should be defined', () => {
    expect(StoreDetailHeader).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
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
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
