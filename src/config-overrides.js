const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    src: path.resolve(__dirname, 'src')
  })
);

// config-overrides.js
module.exports = function override(config, env) {
  // tuỳ chỉnh config ở đây nếu cần
  return config;
};
