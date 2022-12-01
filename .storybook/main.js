const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    'storybook-addon-material-ui',
  ],
  framework: '@storybook/react',
  webpackFinal: async webpackConfig => {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      api: path.resolve(__dirname, '../src/api'),
      flows: path.resolve(__dirname, '../src/flows'),
      ui: path.resolve(__dirname, '../src/ui'),
    }

    return { ...webpackConfig }
  },
}
