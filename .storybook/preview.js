import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'alabaster',
        value: '#fffef0',
      },
      {
        name: 'charcoal',
        value: '#333',
      },
    ],
  },
  options: {
    storySort: {
      order: ['Compositions', 'Contexts', 'Hooks', 'Form Elements'],
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      desktop: {
        name: 'Desktop',
        styles: {
          height: '1025px',
          width: '1440px',
        },
      },
      wideDesktop: {
        name: 'Wide Desktop',
        styles: {
          height: '1080px',
          width: '1920px',
        },
      },
      ...INITIAL_VIEWPORTS,
    },
  },
  // viewport: {
  //   veiwports: {
  //      desktop: {
  //        name: "Desktop",
  //        styles: {height: "1080px", width: "1920px"},
  //        type: "desktop",
  //      },
  //      ...MINIMAL_VIEWPORTS,
  //      ...INITIAL_VIEWPORTS
  //   }
  // }
};

export { parameters };
