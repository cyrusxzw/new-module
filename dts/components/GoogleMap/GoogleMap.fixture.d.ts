export namespace GoogleMapFixture {
  const initialZoom: number;
  namespace center {
    const lat: number;
    const lng: number;
  }
  namespace customPinMarker {
    const lat_1: number;
    export { lat_1 as lat };
    const lng_1: number;
    export { lng_1 as lng };
    export const type: string;
  }
  namespace customPinMarkerCenter {
    const lat_2: number;
    export { lat_2 as lat };
    const lng_2: number;
    export { lng_2 as lng };
  }
  namespace copy {
    namespace storeLocator {
      const label: string;
      const message: string;
      const title: string;
      const url: string;
    }
    const directions: string;
    namespace openingHours {
      const alternateHoursNote: string;
      const heading: string;
    }
  }
  namespace customPlaceMarker {
    export const id: string;
    const lat_3: number;
    export { lat_3 as lat };
    const lng_3: number;
    export { lng_3 as lng };
    export const storeName: string;
    export const storeType: string;
    const type_1: string;
    export { type_1 as type };
    export const address: string;
    export const phoneNumber: string;
    const openingHours_1: (
      | {
          dayName: string;
          hours: string;
          id: string;
          isAlternate?: undefined;
        }
      | {
          dayName: string;
          hours: string;
          id: string;
          isAlternate: boolean;
        }
    )[];
    export { openingHours_1 as openingHours };
  }
  namespace customPlaceMarkerCenter {
    const lat_4: number;
    export { lat_4 as lat };
    const lng_4: number;
    export { lng_4 as lng };
  }
  const places: (
    | {
        id: string;
        lat: number;
        lng: number;
        storeName: string;
        storeType: string;
        address: string;
        phoneNumber: string;
        openingHours: (
          | {
              dayName: string;
              hours: string;
              id: string;
              isAlternate?: undefined;
            }
          | {
              dayName: string;
              hours: string;
              id: string;
              isAlternate: boolean;
            }
        )[];
      }
    | {
        id: string;
        lat: number;
        lng: number;
        storeName: string;
        storeType: string;
        openingHours: (
          | {
              dayName: string;
              hours: string;
              id: string;
              isAlternate?: undefined;
            }
          | {
              dayName: string;
              hours: string;
              id: string;
              isAlternate: boolean;
            }
        )[];
        address?: undefined;
        phoneNumber?: undefined;
      }
  )[];
}
