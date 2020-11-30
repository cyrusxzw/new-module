import React from 'react';
import { render } from '@testing-library/react';
import StoreHoursList from './StoreHoursList';
import StoreHoursListFixture from './StoreHoursList.fixture';

describe('<StoreHoursList />', () => {
  it('should be defined', () => {
    expect(StoreHoursList).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <StoreHoursList
        alternateHoursNote={StoreHoursListFixture.alternateHoursNote}
        heading={StoreHoursListFixture.heading}
        hoursList={StoreHoursListFixture.hoursList}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
