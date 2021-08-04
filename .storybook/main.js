const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|ts|tsx|mdx)',
    '../documentation/**/*.stories.mdx',
  ],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          modules: {
            mode: 'local',
            localIdentName: 'aesop-gel-[path][name]__[local]--[hash:base64:5]',
          },
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-queryparams',
    '@storybook/addon-viewport',
    '@storybook/addon-outline',
    '@storybook/addon-measure',
    '@storybook/addon-backgrounds',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.resolve.alias = {
      '~': path.resolve(__dirname, '../src'),
      '~.storybook': path.resolve(__dirname, './'),
    };

    config.resolve.extensions.push('.ts', '.tsx');

    // Load fonts
    config.module.rules.push({
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
    });

    // Return the altered config
    return config;
  },
};
