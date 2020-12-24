const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|mdx)',
    '../documentation/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs/preset',
    '@storybook/addon-backgrounds',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias = {
      '~': path.resolve(__dirname, '../src'),
      '~.storybook': path.resolve(__dirname, './'),
    };

    // Remove the existing css rule
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== '/\\.css$/',
    );

    // Reapply css loaders
    config.module.rules.push({
      test: /\.css$/,
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              mode: 'local',
              localIdentName:
                'aesop-gel-[path][name]__[local]--[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, '../postcss.config.js'),
            },
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Load fonts
    config.module.rules.push({
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
    });

    // Return the altered config
    return config;
  },
};
