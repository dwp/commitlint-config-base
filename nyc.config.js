// eslint-disable-next-line import/no-extraneous-dependencies
const config = require('@dwp/nyc-config-base');

config.exclude = config.exclude || [];

config.exclude.push(
  '*.config.js',
  '.huskyrc.js',
  '.eslintrc.js',
  '*/.eslintrc.js',
  '.coverage/**/*',
);

module.exports = config;
