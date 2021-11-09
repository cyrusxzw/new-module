import React from 'react';
import { render } from '@testing-library/react';
import { GoogleMapFixture } from './GoogleMap.fixture';
import { GoogleMap } from './GoogleMap';
import type { Themes } from '~/types';

describe('<GoogleMap />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <GoogleMap
        center={GoogleMapFixture.customPinMarkerCenter}
        copy={GoogleMapFixture.copy}
        customMarker={GoogleMapFixture.customPinMarker as any}
        hasMarkerIndexes={false}
        id="google-map"
        initialZoom={GoogleMapFixture.initialZoom}
        places={GoogleMapFixture.places}
        theme={GoogleMapFixture.theme as Themes}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
