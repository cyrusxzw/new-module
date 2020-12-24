const GoogleMapOptions = {
  SEARCH_TYPES: ['address', 'geocode', '(regions)'],
  SEARCH_TYPE_ADDRESS: 'address',
  SEARCH_TYPE_GEOCODE: 'geocode',
  SEARCH_TYPE_REGIONS: '(regions)',
  SCROLL_WHEEL_ENABLED: false,
  SHOW_MAP_TYPE_CONTROL: false,
  MAP_INITIAL_ZOOM: 13,
  MAP_MAX_ZOOM: 15,
  MAP_MARKER_ANCHOR_X: 14,
  MAP_MARKER_ANCHOR_Y: 14,
  MAP_LABEL_ORIGIN_X: 14,
  MAP_LABEL_ORIGIN_Y: 14,
  MAP_MARKER: {
    path:
      'M14.501,1.500 C21.681,1.500 27.500,7.320 27.500,14.500 C27.500,21.679 21.681,27.500 14.501,27.500 C7.320,27.500 1.500,21.679 1.500,14.500 C1.500,7.320 7.320,1.500 14.501,1.500 Z',
    fillColor: '#333333',
    fillOpacity: 1,
    scale: 1,
    strokeColor: '#333333',
    strokeWeight: 1,
  },
  STOCKIST_MAP_MARKER: {
    path:
      'M14.501,1.500 C21.681,1.500 27.500,7.320 27.500,14.500 C27.500,21.679 21.681,27.500 14.501,27.500 C7.320,27.500 1.500,21.679 1.500,14.500 C1.500,7.320 7.320,1.500 14.501,1.500 Z',
    fillColor: '#848482',
    fillOpacity: 1,
    scale: 1,
    strokeColor: '#848482',
    strokeWeight: 1,
  },
  MAP_MARKER_ACTIVE: {
    path:
      'M14.501,1.500 C21.681,1.500 27.500,7.320 27.500,14.500 C27.500,21.679 21.681,27.500 14.501,27.500 C7.320,27.500 1.500,21.679 1.500,14.500 C1.500,7.320 7.320,1.500 14.501,1.500 Z',
    fillColor: '#fefef2',
    fillOpacity: 1,
    scale: 1,
    strokeColor: '#333333',
    strokeWeight: 1,
  },
  MAP_MARKER_CLUSTER: {
    height: 34,
    textColor: 'rgba(0, 0, 0, 0)',
    textSize: 0,
    width: 34,
  },
  MAP_LABEL: {
    color: '#fefef2',
    fontFamily: 'Suisse Medium, sans-serif',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  MAP_LABEL_ACTIVE: {
    color: '#333333',
    fontFamily: 'Suisse Medium, sans-serif',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  MAP_STYLES: [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: '0',
        },
        {
          color: '#a1a195',
        },
        {
          lightness: '0',
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on',
        },
        {
          color: '#fefef8',
        },
        {
          lightness: '0',
        },
        {
          gamma: '1',
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.fill',
      stylers: [
        {
          lightness: 20,
        },
        {
          color: '#ebebdf',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#808077',
        },
        {
          saturation: '0',
        },
      ],
    },
    {
      featureType: 'administrative.province',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#808077',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#808077',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f4f4e8',
        },
        {
          lightness: '0',
        },
        {
          gamma: '1',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ebebdf',
        },
        {
          lightness: '0',
        },
        {
          gamma: '1.00',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#fefef8',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ebebdf',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#deded3',
        },
        {
          lightness: 17,
        },
      ],
    },
  ],
  INFO_BUBBLE_STYLES: {
    arrowSize: 10,
    shadowStyle: 0,
    backgroundColor: '#FEFFF8',
    disableAnimation: true,
    hideCloseButton: true,
    padding: 0,
    borderWidth: 0,
    borderRadius: 0,
  },
};

export { GoogleMapOptions };
