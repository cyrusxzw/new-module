export namespace GoogleMapOptions {
  const SEARCH_TYPES: string[];
  const SEARCH_TYPE_ADDRESS: string;
  const SEARCH_TYPE_GEOCODE: string;
  const SEARCH_TYPE_REGIONS: string;
  const SCROLL_WHEEL_ENABLED: boolean;
  const SHOW_MAP_TYPE_CONTROL: boolean;
  const MAP_INITIAL_ZOOM: number;
  const MAP_MAX_ZOOM: number;
  const MAP_MARKER_ANCHOR_X: number;
  const MAP_MARKER_ANCHOR_Y: number;
  const MAP_LABEL_ORIGIN_X: number;
  const MAP_LABEL_ORIGIN_Y: number;
  namespace MAP_MARKER {
    const path: string;
    const fillColor: string;
    const fillOpacity: number;
    const scale: number;
    const strokeColor: string;
    const strokeWeight: number;
  }
  namespace STOCKIST_MAP_MARKER {
    const path_1: string;
    export { path_1 as path };
    const fillColor_1: string;
    export { fillColor_1 as fillColor };
    const fillOpacity_1: number;
    export { fillOpacity_1 as fillOpacity };
    const scale_1: number;
    export { scale_1 as scale };
    const strokeColor_1: string;
    export { strokeColor_1 as strokeColor };
    const strokeWeight_1: number;
    export { strokeWeight_1 as strokeWeight };
  }
  namespace MAP_MARKER_ACTIVE {
    const path_2: string;
    export { path_2 as path };
    const fillColor_2: string;
    export { fillColor_2 as fillColor };
    const fillOpacity_2: number;
    export { fillOpacity_2 as fillOpacity };
    const scale_2: number;
    export { scale_2 as scale };
    const strokeColor_2: string;
    export { strokeColor_2 as strokeColor };
    const strokeWeight_2: number;
    export { strokeWeight_2 as strokeWeight };
  }
  namespace MAP_MARKER_CLUSTER {
    const height: number;
    const textColor: string;
    const textSize: number;
    const width: number;
  }
  namespace MAP_LABEL {
    const color: string;
    const fontFamily: string;
    const fontSize: string;
    const fontWeight: string;
  }
  namespace MAP_LABEL_ACTIVE {
    const color_1: string;
    export { color_1 as color };
    const fontFamily_1: string;
    export { fontFamily_1 as fontFamily };
    const fontSize_1: string;
    export { fontSize_1 as fontSize };
    const fontWeight_1: string;
    export { fontWeight_1 as fontWeight };
  }
  const MAP_STYLES: (
    | {
        featureType: string;
        elementType: string;
        stylers: (
          | {
              saturation: string;
              color?: undefined;
              lightness?: undefined;
            }
          | {
              color: string;
              saturation?: undefined;
              lightness?: undefined;
            }
          | {
              lightness: string;
              saturation?: undefined;
              color?: undefined;
            }
        )[];
      }
    | {
        featureType: string;
        elementType: string;
        stylers: (
          | {
              visibility: string;
              color?: undefined;
              lightness?: undefined;
              gamma?: undefined;
            }
          | {
              color: string;
              visibility?: undefined;
              lightness?: undefined;
              gamma?: undefined;
            }
          | {
              lightness: string;
              visibility?: undefined;
              color?: undefined;
              gamma?: undefined;
            }
          | {
              gamma: string;
              visibility?: undefined;
              color?: undefined;
              lightness?: undefined;
            }
        )[];
      }
    | {
        featureType: string;
        elementType: string;
        stylers: (
          | {
              lightness: number;
              color?: undefined;
            }
          | {
              color: string;
              lightness?: undefined;
            }
        )[];
      }
    | {
        featureType: string;
        elementType: string;
        stylers: (
          | {
              lightness: number;
              weight?: undefined;
              visibility?: undefined;
            }
          | {
              weight: number;
              lightness?: undefined;
              visibility?: undefined;
            }
          | {
              visibility: string;
              lightness?: undefined;
              weight?: undefined;
            }
        )[];
      }
  )[];
  namespace INFO_BUBBLE_STYLES {
    const arrowSize: number;
    const shadowStyle: number;
    const backgroundColor: string;
    const disableAnimation: boolean;
    const hideCloseButton: boolean;
    const padding: number;
    const borderWidth: number;
    const borderRadius: number;
  }
}
