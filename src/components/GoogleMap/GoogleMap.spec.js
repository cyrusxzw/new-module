import React from 'react';
import { render } from '@testing-library/react';
import { GoogleMapsContextProvider } from '~/contexts/GoogleMaps.context';
import constants from '~.storybook/constants';
import GoogleMap from './GoogleMap';
import GoogleMapFixture from './GoogleMap.fixture';

describe('<GoogleMap />', () => {
  it('should be defined', () => {
    expect(GoogleMap).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <GoogleMapsContextProvider
        apiKey={constants.GOOGLE_MAPS.DEVELOPMENT_API_KEY}
      >
        <GoogleMap
          center={GoogleMapFixture.customPinMarkerCenter}
          copy={GoogleMapFixture.copy}
          customMarker={GoogleMapFixture.customPinMarker}
          hasMarkerIndexes={false}
          id="google-map"
          initialZoom={GoogleMapFixture.initialZoom}
          places={GoogleMapFixture.places}
        />
      </GoogleMapsContextProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
